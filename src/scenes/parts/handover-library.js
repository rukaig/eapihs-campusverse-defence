import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const BOX_ROLES = ["sage600", "gold600", "blue700", "lav600", "coral600"];

export function createHandoverLibrary({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, {
    from: { x: -1.8, y: 2.0, z: 5.8, lookX: -0.3, lookY: 0.9, fov: 57, roll: -0.01 },
    to: { x: 1.6, y: 1.4, z: 1.8, lookX: 0.6, lookY: 0.4, fov: 51, roll: 0.008 }
  });
  group.position.y = -1.2;

  const tags = [];
  const library = addShape(kit, group, kit.geometry.box,
    surface(engine, "surface", { roughness: 0.82 }),
    [3.1, -1.15, -2.7], [7.2, 0.18, 3.0]);
  engine.registerLayer(library, 0.12);

  for (const x of [0.1, 6.1]) {
    addShape(kit, group, kit.geometry.box,
      surface(engine, "accentStrong", { roughness: 0.7 }),
      [x, -0.45, -3.35], [0.16, 1.5, 0.16]);
    addShape(kit, group, kit.geometry.box,
      surface(engine, "accentStrong", { roughness: 0.7 }),
      [x, -0.45, -2.05], [0.16, 1.5, 0.16]);
  }
  for (const y of [-0.9, -0.2, 0.5]) {
    addShape(kit, group, kit.geometry.box,
      surface(engine, "lineStrong", { roughness: 0.68 }),
      [3.1, y, -2.7], [6.1, 0.12, 2.9]);
  }

  section.handover.slice(0, 3).forEach((_, index) => {
    const x = 1.3 + index * 1.75;
    addShape(kit, group, kit.geometry.box,
      surface(engine, BOX_ROLES[index], { roughness: 0.66 }),
      [x, -0.55, -2.35], [1.4, 0.52, 1.5]);
  });

  tags.push(addLabel(kit, group, config.ownershipLabel, "", [1.3, 0.82, -2.1], [1.8, 0.44, 1]));
  tags.push(addLabel(kit, group, config.reviewLabel, "", [3.05, 0.82, -2.1], [1.8, 0.44, 1]));
  tags.push(addLabel(kit, group, config.privacyLabel, "", [4.8, 0.82, -2.1], [1.8, 0.44, 1]));

  const shield = addShape(kit, group, kit.geometry.torus,
    flat(engine, "accentSoft", { transparent: true, opacity: 0.8, depthWrite: false }),
    [6.3, -0.1, -0.9], [1.5, 1.5, 1]);
  engine.registerLayer(shield, 0.32);
  engine.registerLowGraphics(shield);

  addShape(kit, group, kit.geometry.box,
    surface(engine, "blue700", { roughness: 0.72 }),
    [-1.9, -1.0, -0.9], [3.0, 0.18, 1.5]);
  tags.push(addLabel(kit, group, config.eventLabel, "", [-1.9, -0.46, -0.7], [2.1, 0.46, 1]));

  const handoverBox = new THREE.Group();
  handoverBox.position.set(3.0, -0.2, -2.2);
  group.add(handoverBox);
  addShape(kit, handoverBox, kit.geometry.box,
    surface(engine, "accent", { roughness: 0.54, metalness: 0.08 }),
    [0, 0, 0], [2.6, 0.8, 1.8]);
  tags.push(addLabel(kit, handoverBox, config.finalLabel, "", [0, 0.06, 0.95], [2.4, 0.58, 1]));

  const companions = {
    juniper: addCompanion(engine, kit, group, "juniper", [-4.4, -1.0, 1.0], 0.72, "cheering"),
    moss: addCompanion(engine, kit, group, "moss", [4.5, -1.02, 1.1], 0.72, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let progress = 0;
  const start = new THREE.Vector3(3.0, -0.2, -2.2);
  const end = new THREE.Vector3(1.2, -0.5, 0.8);
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    shield.rotation.z = amount * 0.35;
    handoverBox.position.lerpVectors(start, end, amount);
    handoverBox.rotation.y = THREE.MathUtils.lerp(-0.08, 0.06, amount);
  });

  return {
    group,
    companion: "juniper",
    prop: "books",
    companionApi: companions.juniper,
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
        stage: "handover-library",
        handoverProgress: Number(progress.toFixed(3)),
        recordCount: section.handover.length,
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
