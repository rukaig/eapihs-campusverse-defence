import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

export function createThankYou({ engine, kit, section }) {
  const config = section.scene;
  const group = baseGroup(engine, section, {
    from: { x: -0.8, y: 1.8, z: 5.6, lookX: 0, lookY: 0.9, fov: 58, roll: -0.008 },
    to: { x: 0.6, y: 1.5, z: 3.2, lookX: 0.2, lookY: 0.65, fov: 54, roll: 0.006 }
  });
  group.position.y = -0.8;

  const tags = [];
  const arch = addShape(kit, group, kit.geometry.torus,
    flat(engine, "accentSoft", { transparent: true, opacity: 0.82, depthWrite: false }),
    [0, 0.15, -2.9], [4.2, 4.2, 1]);
  engine.registerLayer(arch, 0.14);
  engine.registerLowGraphics(arch);

  addShape(kit, group, kit.geometry.box,
    surface(engine, "accentStrong", { roughness: 0.7 }),
    [-3.7, -0.95, -2.85], [0.18, 2.1, 0.18]);
  addShape(kit, group, kit.geometry.box,
    surface(engine, "accentStrong", { roughness: 0.7 }),
    [3.7, -0.95, -2.85], [0.18, 2.1, 0.18]);

  const plaque = addShape(kit, group, kit.geometry.box,
    surface(engine, "surface", { roughness: 0.62 }),
    [0, -0.45, -2.45], [4.3, 1.15, 0.18]);
  engine.registerLayer(plaque, 0.22);
  tags.push(addLabel(kit, group, config.mark, config.line, [0, -0.3, -2.22], [3.2, 0.7, 1]));

  const companions = {
    moss: addCompanion(engine, kit, group, "moss", [-3.6, -0.98, 0.9], 0.74, "happy"),
    pip: addCompanion(engine, kit, group, "pip", [-1.2, -1.02, 1.2], 0.72, "cheering"),
    lumen: addCompanion(engine, kit, group, "lumen", [1.5, -1.02, 1.65], 0.84, "happy"),
    juniper: addCompanion(engine, kit, group, "juniper", [3.6, -0.98, 0.9], 0.74, "cheering")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let progress = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    arch.rotation.z = amount * 0.08;
    plaque.position.y = -0.45 + amount * 0.06;
  });

  return {
    group,
    companion: "moss",
    prop: "star",
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
        stage: "thank-you",
        companionCount: Object.keys(companions).length,
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
