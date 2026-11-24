import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  surface,
  wireReactions
} from "./shared.js";

const NODE_ROLES = ["sage600", "gold600", "blue700", "lav600", "coral600"];

export function createWorkbench({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, {
    from: { x: -1.2, y: 2.1, z: 6.0, lookX: -0.5, lookY: 0.9, fov: 58, roll: -0.01 },
    to: { x: 1.1, y: 1.35, z: 1.0, lookX: 0.4, lookY: 0.45, fov: 53, roll: 0.008 }
  });
  group.position.y = -1.15;

  const tags = [];
  const bench = addShape(kit, group, kit.geometry.box,
    surface(engine, "surface", { roughness: 0.82 }),
    [0, -1.25, -1.8], [13.4, 0.18, 2.8]);
  engine.registerLayer(bench, 0.12);

  const preZone = addShape(kit, group, kit.geometry.box,
    surface(engine, "accentSoft", { roughness: 0.78 }),
    [-4.2, -1.08, -1.8], [4.4, 0.1, 2.4]);
  const buildZone = addShape(kit, group, kit.geometry.box,
    surface(engine, "blue700", { roughness: 0.7, transparent: true, opacity: 0.82 }),
    [1.8, -1.08, -1.8], [8.0, 0.1, 2.4]);
  engine.registerLayer(preZone, 0.16);
  engine.registerLayer(buildZone, 0.16);

  tags.push(addLabel(kit, group, config.preLabel, "", [-4.2, -0.42, -1.55], [2.2, 0.48, 1]));
  tags.push(addLabel(kit, group, config.buildLabel, "", [1.8, -0.42, -1.55], [2.2, 0.48, 1]));

  const rail = addShape(kit, group, kit.geometry.cylinder,
    surface(engine, "lineStrong", { roughness: 0.52 }),
    [0, -0.78, -1.55], [0.05, 11.6, 0.05], [0, 0, Math.PI / 2]);
  engine.registerLayer(rail, 0.2);

  const nodes = section.timeline.map((item, index) => {
    const x = -5.3 + index * (10.6 / Math.max(1, section.timeline.length - 1));
    const y = -0.4 + (index % 2) * 0.28;
    const mesh = addShape(kit, group, kit.geometry.sphere,
      surface(engine, item.state === "done" ? "sage600" : "gold600", { roughness: 0.46 }),
      [x, y, -1.5], [0.18, 0.18, 0.18]);
    engine.registerLowGraphics(mesh);
    return { mesh, x, y, index };
  });

  const cursor = addShape(kit, group, kit.geometry.icosa,
    surface(engine, "accentStrong", { roughness: 0.4, metalness: 0.12 }),
    [nodes[0].x, nodes[0].y + 0.28, -1.45], [0.34, 0.34, 0.34]);
  engine.registerLayer(cursor, 0.32);

  const riskStack = new THREE.Group();
  riskStack.position.set(3.7, -0.62, 0.4);
  riskStack.visible = false;
  group.add(riskStack);
  for (let index = 0; index < section.risks.length; index += 1) {
    const column = index % 4;
    const row = Math.floor(index / 4);
    addShape(kit, riskStack, kit.geometry.box,
      surface(engine, NODE_ROLES[index % NODE_ROLES.length], { roughness: 0.66 }),
      [(column - 1.5) * 0.82, -row * 0.34, 0], [0.68, 0.13, 0.52]);
  }
  tags.push(addLabel(kit, riskStack, config.risksTitle, "", [0, 0.42, 0.12], [2.0, 0.46, 1]));

  const companions = {
    moss: addCompanion(engine, kit, group, "moss", [-4.6, -1.0, 1.1], 0.72, "thinking"),
    pip: addCompanion(engine, kit, group, "pip", [2.9, -1.0, 1.3], 0.72, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let progress = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    const cursorIndex = amount * Math.max(0, nodes.length - 1);
    const low = Math.floor(cursorIndex);
    const high = Math.min(nodes.length - 1, low + 1);
    const blend = cursorIndex - low;
    const x = THREE.MathUtils.lerp(nodes[low].x, nodes[high].x, blend);
    const y = THREE.MathUtils.lerp(nodes[low].y, nodes[high].y, blend);
    cursor.position.set(x, y + 0.28, -1.45);

    for (const node of nodes) {
      const near = Math.max(0, 1 - Math.abs(node.index - cursorIndex) * 0.55);
      node.mesh.scale.setScalar(0.18 + near * 0.12);
      node.mesh.position.y = node.y + near * 0.05;
    }

    const riskAmount = Math.min(1, Math.max(0, (amount - 0.55) / 0.45));
    riskStack.visible = riskAmount > 0;
    riskStack.scale.setScalar(Math.max(0.05, riskAmount));
  });

  return {
    group,
    companion: "moss",
    prop: "laptop",
    companionApi: companions.moss,
    companionApis: Object.values(companions),
    setActive(value) {
      active = value;
      if (value) reactions.reset();
    },
    setLocalProgress(value) {
      progress = value;
      if (active) reactions.setLocalProgress(value);
    },
    getState() {
      return {
        stage: "workbench",
        cursor: Number(progress.toFixed(3)),
        doneCount: section.timeline.filter(item => item.state === "done").length,
        pendingCount: section.timeline.filter(item => item.state === "pending").length,
        riskVisible: riskStack.visible,
        moods: Object.fromEntries(Object.entries(companions).map(([id, api]) => [id, api.getMood()])),
        bubbles: Object.fromEntries(Object.entries(companions).map(([id, api]) => [id, api.getState().bubbleVisible]))
      };
    },
    dispose() {
      unregister();
      for (const companion of Object.values(companions)) companion.dispose();
      for (const tag of tags) tag.dispose();
    }
  };
}
