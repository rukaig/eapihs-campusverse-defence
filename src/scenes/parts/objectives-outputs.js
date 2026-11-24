import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  surface,
  wireReactions
} from "./shared.js";

const CARD_ROLES = ["sage600", "coral600", "gold600", "blue700", "lav600"];

export function createObjectivesOutputs({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, {
    from: { x: -1.4, y: 1.9, z: 4.2, lookX: -0.3, lookY: 1.2, fov: 61, roll: -0.012 },
    to: { x: 1.0, y: 1.35, z: 1.0, lookX: 0.4, lookY: 0.75, fov: 55, roll: 0.008 }
  });
  group.position.y = -1.0;

  const tags = [];
  const grid = new THREE.Group();
  grid.position.set(0, 0, 5);
  group.add(grid);

  const cards = section.objectives.map((objective, index) => {
    const column = index % 3;
    const row = Math.floor(index / 3);
    const x = (column - 1) * 2.6;
    const y = 1.65 - row * 1.12;
    const z = -row * 0.08;
    const baseRotation = (column - 1) * -0.09;
    const role = CARD_ROLES[index % CARD_ROLES.length];
    const card = addShape(kit, grid, kit.geometry.box,
      surface(engine, role, { roughness: 0.62 }),
      [x, y, z], [2.5, 1.02, 0.12], [0, baseRotation, 0]);
    engine.registerLayer(card, 0.22 + index * 0.012);
    const tag = addLabel(kit, grid, objective.title, objective.line,
      [x, y, z + 0.12], [2.4, 0.64, 1]);
    tags.push(tag);
    return { card, tag, x, y, z, baseRotation };
  });

  const shelf = new THREE.Group();
  shelf.position.set(0, -1.6, 5);
  shelf.visible = false;
  group.add(shelf);
  addShape(kit, shelf, kit.geometry.box,
    surface(engine, "surface", { roughness: 0.82 }),
    [0, -0.58, 0], [7.2, 0.22, 2.4]);
  addShape(kit, shelf, kit.geometry.box,
    surface(engine, "accentStrong", { roughness: 0.75 }),
    [0, -1.02, 0], [6.9, 0.7, 2.1]);
  tags.push(addLabel(kit, shelf, config.shelfLabel, section.eyebrow,
    [0, 0.78, -0.4], [3.6, 0.8, 1]));

  const shelfItems = section.outputs.map((text, index) => {
    const column = index % 4;
    const row = Math.floor(index / 4);
    const x = (column - 1.5) * 1.55;
    const y = row === 0 ? 0.2 : -0.48;
    const box = addShape(kit, shelf, kit.geometry.box,
      surface(engine, CARD_ROLES[index % CARD_ROLES.length], { roughness: 0.66 }),
      [x, y, 0], [1.45, 0.62, 1.05]);
    const tag = addLabel(kit, shelf, text, "", [x, y, 0.56], [1.55, 0.42, 1]);
    tags.push(tag);
    return { box, tag, y };
  });

  const companions = {
    juniper: addCompanion(engine, kit, group, "juniper", [-4.6, -0.95, -1.0], 0.72, "cheering"),
    moss: addCompanion(engine, kit, group, "moss", [-2.8, -1.0, -0.5], 0.7, "idle"),
    lumen: addCompanion(engine, kit, group, "lumen", [3.2, -0.9, -1.0], 0.7, "happy")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let progress = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    const highlight = Math.floor(amount * section.objectives.length) % section.objectives.length;
    cards.forEach((item, index) => {
      const phase = amount * Math.PI * 2 - index * 0.28;
      item.card.rotation.y = item.baseRotation + Math.sin(phase) * 0.14;
      item.card.position.y = item.y + Math.sin(phase) * 0.06;
      item.tag.sprite.position.y = item.card.position.y;
      item.card.scale.z = 0.12 + (index === highlight ? 0.04 : 0);
    });

    const shelfAmount = Math.min(1, Math.max(0, (amount - 0.64) / 0.36));
    grid.visible = shelfAmount < 0.25;
    shelf.visible = shelfAmount > 0;
    shelf.position.y = THREE.MathUtils.lerp(-1.6, -0.2, shelfAmount);
    shelf.scale.setScalar(Math.max(0.05, shelfAmount));
    shelfItems.forEach(({ box, y }, index) => {
      box.position.y = y + Math.sin(shelfAmount * Math.PI + index) * 0.04;
    });
  });

  return {
    group,
    companion: "juniper",
    prop: "star",
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
        stage: "objectives-outputs",
        cardCount: section.objectives.length,
        shelfVisible: shelf.visible,
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
