import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

export function createZeroCost({ engine, kit, section }) {
  const config = section.scene;
  const group = baseGroup(engine, section, {
    from: { x: -0.7, y: 1.9, z: 6.4, lookX: 0.5, lookY: 0.8, fov: 56, roll: -0.006 },
    to: { x: 0.5, y: 1.35, z: 2.2, lookX: 0.9, lookY: 0.45, fov: 50, roll: 0.006 }
  });
  group.position.y = -1.35;

  const tags = [];
  const plinth = addShape(kit, group, kit.geometry.cylinder,
    surface(engine, "accentStrong", { roughness: 0.52, metalness: 0.1 }),
    [2.1, -1.0, -2.6], [3.0, 0.44, 3.0]);
  engine.registerLayer(plinth, 0.14);

  const halo = addShape(kit, group, kit.geometry.torus,
    flat(engine, "accentSoft", { transparent: true, opacity: 0.78, depthWrite: false }),
    [2.1, -0.68, -2.6], [3.3, 3.3, 1], [Math.PI / 2, 0, 0]);
  engine.registerLayer(halo, 0.2);
  engine.registerLowGraphics(halo);

  tags.push(addLabel(kit, group, config.totalLabel, "", [2.1, 0.48, -2.35], [2.2, 0.48, 1]));
  tags.push(addLabel(kit, group, config.total, "", [2.1, -0.14, -2.15], [3.6, 0.92, 1]));
  tags.push(addLabel(kit, group, config.freeLabel, "", [-1.8, -0.72, -1.1], [1.7, 0.44, 1]));
  tags.push(addLabel(kit, group, config.deviceLabel, "", [4.8, -0.82, 0.3], [1.9, 0.44, 1]));

  addShape(kit, group, kit.geometry.box,
    surface(engine, "surface2", { roughness: 0.8 }),
    [-1.8, -1.05, -1.2], [1.5, 0.16, 0.9], [0, -0.12, 0]);
  addShape(kit, group, kit.geometry.box,
    surface(engine, "blue700", { roughness: 0.72 }),
    [4.8, -1.08, 0.4], [1.4, 0.16, 0.9], [0, 0.1, 0]);

  const gate = new engine.THREE.Group();
  gate.position.set(4.9, -0.28, -0.9);
  gate.visible = false;
  group.add(gate);
  addShape(kit, gate, kit.geometry.box,
    surface(engine, "warning", { roughness: 0.56 }),
    [-0.85, -0.2, 0], [0.16, 1.5, 0.16]);
  addShape(kit, gate, kit.geometry.box,
    surface(engine, "warning", { roughness: 0.56 }),
    [0.85, -0.2, 0], [0.16, 1.5, 0.16]);
  addShape(kit, gate, kit.geometry.box,
    surface(engine, "warning", { roughness: 0.56 }),
    [0, 0.56, 0], [1.86, 0.16, 0.16]);
  tags.push(addLabel(kit, gate, config.approvalLabel, config.approvalText,
    [0, 0.08, 0.2], [2.2, 0.62, 1]));

  const companions = {
    lumen: addCompanion(engine, kit, group, "lumen", [-3.7, -1.02, 1.0], 0.74, "happy"),
    juniper: addCompanion(engine, kit, group, "juniper", [3.5, -1.04, 1.1], 0.72, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let progress = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    halo.rotation.z = amount * 0.28;
    plinth.position.y = -1.0 + amount * 0.08;
    const gateAmount = Math.min(1, Math.max(0, (amount - 0.6) / 0.4));
    gate.visible = gateAmount > 0;
    gate.scale.setScalar(Math.max(0.05, gateAmount));
  });

  return {
    group,
    companion: "lumen",
    prop: "calculator",
    companionApi: companions.lumen,
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
        stage: "zero-cost",
        zeroVisible: true,
        approvalVisible: gate.visible,
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
