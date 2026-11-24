import {
  addCompanion,
  addLabel,
  addProp,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const PLATE_ROLES = ["accent", "accent", "accent", "accent", "warning", "sage600", "gold600", "gold600"];
const COLUMN_X = [-3.6, -1.2, 1.2, 3.6];

export function createTeamDesk({ engine, kit, section }) {
  const config = section.scene;
  const group = baseGroup(engine, section, {
    from: { x: -1.2, y: 1.9, z: 1.4, lookX: -0.3, lookY: 1.35, fov: 60, roll: -0.012 },
    to: { x: 1.2, y: 1.75, z: -0.4, lookX: 0.3, lookY: 1.25, fov: 56, roll: 0.012 }
  });
  group.position.y = -2.1;

  const desktop = addShape(kit, group, kit.geometry.box, surface(engine, "surface", { roughness: 0.78 }),
    [0, -0.85, -3.0], [14.6, 0.28, 6.4]);
  engine.registerLayer(desktop, 0.12);
  engine.registerLowGraphics(desktop);

  addShape(kit, group, kit.geometry.box, surface(engine, "accentStrong", { roughness: 0.72 }),
    [0, -1.45, -3.0], [14.2, 1.1, 5.8]);
  addShape(kit, group, kit.geometry.box, flat(engine, "accentSoft", { transparent: true, opacity: 0.7 }),
    [0, -0.68, -6.25], [14.6, 1.5, 0.08]);

  const tags = [];

  config.desk.forEach((person, index) => {
    const column = index % COLUMN_X.length;
    const row = Math.floor(index / COLUMN_X.length);
    const x = COLUMN_X[column];
    const z = row === 0 ? -1.4 : -4.8;
    const plate = addShape(kit, group, kit.geometry.box,
      surface(engine, PLATE_ROLES[index], { roughness: 0.58 }),
      [x, -0.46, z + 0.7], [2.2, 0.2, 0.58], [0, 0, 0]);
    engine.registerLayer(plate, 0.18 + index * 0.012);
    tags.push(addLabel(kit, group, person.name, person.role,
      [x, row === 0 ? 0.7 : -0.5, z + 0.8], [2.2, 0.58, 1]));
    addShape(kit, group, kit.geometry.cylinder, surface(engine, "lineStrong"),
      [x, -0.62, z + 0.7], [0.42, 0.06, 0.42]);
  });

  const props = [];
  COLUMN_X.forEach(x => {
    props.push(addProp(engine, kit, group, "student", [x, -1.05, -5.8], 0.46));
  });
  props.push(addProp(engine, kit, group, "teacher", [3.6, -1.05, -5.9], 0.5));

  const companions = {
    moss: addCompanion(engine, kit, group, "moss", [-5.0, -0.92, 1.6], 0.78, "thinking"),
    pip: addCompanion(engine, kit, group, "pip", [5.0, -0.92, 1.5], 0.78, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  return {
    group,
    companion: "moss",
    prop: "student",
    companionApi: companions.moss,
    companionApis: Object.values(companions),
    setActive(value) {
      active = value;
      if (value) reactions.reset();
    },
    setLocalProgress(progress) {
      if (active) reactions.setLocalProgress(progress);
    },
    getState() {
      return {
        stage: "team-desk",
        moods: Object.fromEntries(Object.entries(companions).map(([id, api]) => [id, api.getMood()])),
        bubbles: Object.fromEntries(Object.entries(companions).map(([id, api]) => [id, api.getState().bubbleVisible]))
      };
    },
    dispose() {
      for (const companion of Object.values(companions)) companion.dispose();
      for (const prop of props) prop.dispose();
      for (const tag of tags) tag.dispose();
    }
  };
}
