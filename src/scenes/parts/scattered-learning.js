import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const SHEET_ROLES = ["surface", "gold600", "coral600", "blue700", "lav600"];

export function createScatteredLearning({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, {
    from: { x: -2.8, y: 3.1, z: 5.2, lookX: -0.7, lookY: 1.6, fov: 61, roll: 0.02 },
    to: { x: 0.8, y: 1.35, z: -6.0, lookX: 0.3, lookY: 0.85, fov: 50, roll: -0.01 }
  });
  group.position.y = -1.3;

  const tags = [];
  const sheets = [];

  const grid = new THREE.GridHelper(26, 12, 0xffffff, 0xffffff);
  grid.position.set(0, -1.62, -1.5);
  grid.material.transparent = true;
  grid.material.opacity = 0.16;
  grid.material.depthWrite = false;
  engine.trackMaterial(grid.material, "line");
  group.add(grid);
  engine.registerLayer(grid, 0.1);
  engine.registerLowGraphics(grid);

  config.scattered.forEach((text, index) => {
    const angle = (index / config.scattered.length) * Math.PI * 2 + 0.35;
    const start = new THREE.Vector3(
      Math.cos(angle) * 5.0,
      -0.25 + Math.sin(index * 1.7) * 1.15,
      -1.1 + Math.sin(angle) * 2.8
    );
    const target = new THREE.Vector3(0, -0.78 + index * 0.11, -2.5);
    const sheet = addShape(kit, group, kit.geometry.box,
      surface(engine, SHEET_ROLES[index], { roughness: 0.82 }),
      start.toArray(), [2.4, 0.09, 1.55], [0, angle, Math.sin(index) * 0.12]);
    engine.registerLayer(sheet, 0.32 + index * 0.045);
    const tag = addLabel(kit, group, text, "", [start.x, start.y + 1.05, start.z], [2.0, 0.46, 1]);
    sheets.push({ sheet, tag, start, target, angle });
    tags.push(tag);
  });

  const book = addShape(kit, group, kit.geometry.box,
    surface(engine, "accent", { roughness: 0.52, metalness: 0.1 }),
    [0, -0.15, -2.5], [2.95, 1.25, 1.95], [0, -0.08, 0]);
  book.visible = false;
  tags.push(addLabel(kit, group, config.mergeLabel, section.eyebrow, [0, 0.95, -2.25], [3.2, 0.8, 1]));

  const stampPlate = addShape(kit, group, kit.geometry.box,
    flat(engine, "warning", { transparent: true, opacity: 0.94 }),
    [3.7, 1.65, -1.8], [2.2, 0.16, 1.3], [0, -0.12, -0.18]);
  engine.registerLayer(stampPlate, 0.5);
  tags.push(addLabel(kit, group, config.stamp, config.themes, [3.7, 2.12, -1.6], [2.2, 0.62, 1]));

  const safetyPlate = addShape(kit, group, kit.geometry.box,
    flat(engine, "danger", { transparent: true, opacity: 0.9 }),
    [-3.3, -0.85, 1.0], [2.3, 0.16, 1.3], [0, 0.14, 0.12]);
  tags.push(addLabel(kit, group, config.safetyLabel, section.points[3], [-3.3, -0.28, 1.1], [2.2, 0.62, 1]));

  const companions = {
    pip: addCompanion(engine, kit, group, "pip", [-3.1, -0.9, 1.7], 0.74, "thinking"),
    moss: addCompanion(engine, kit, group, "moss", [2.0, -0.95, 1.6], 0.74, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let merge = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? merge : 0;
    sheets.forEach((item, index) => {
      const eased = amount * amount * (3 - 2 * amount);
      item.sheet.position.lerpVectors(item.start, item.target, eased);
      item.sheet.rotation.y = THREE.MathUtils.lerp(item.angle, -0.08, eased);
      item.sheet.rotation.z = THREE.MathUtils.lerp(Math.sin(index) * 0.12, 0, eased);
      item.tag.sprite.position.lerpVectors(
        new THREE.Vector3(item.start.x, item.start.y + 1.05, item.start.z),
        new THREE.Vector3(item.target.x, 1.0 + index * 0.11, item.target.z + 0.4),
        eased
      );
    });
    book.visible = amount > 0.56;
    const bookScale = amount > 0.56 ? (amount - 0.56) / 0.44 : 0;
    book.scale.set(2.95 * Math.max(0.05, bookScale), 1.25 * Math.max(0.05, bookScale), 1.95);
  });

  return {
    group,
    companion: "pip",
    prop: "books",
    companionApi: companions.pip,
    companionApis: Object.values(companions),
    setActive(value) {
      active = value;
      if (value) reactions.reset();
    },
    setLocalProgress(progress) {
      merge = progress;
      if (active) reactions.setLocalProgress(progress);
    },
    getState() {
      return {
        stage: "scattered-learning",
        merge: Number(merge.toFixed(3)),
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
