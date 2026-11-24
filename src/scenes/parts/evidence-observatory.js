import {
  addCompanion,
  addLabel,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const STATION_ROLES = ["sage600", "coral600", "blue700", "gold600", "lav600", "accent"];

export function createEvidenceObservatory({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, {
    from: { x: -1.4, y: 2.4, z: 6.0, lookX: -0.4, lookY: 0.9, fov: 60, roll: -0.01 },
    to: { x: 1.2, y: 1.4, z: 1.2, lookX: 0.5, lookY: 0.4, fov: 52, roll: 0.008 }
  });
  group.position.y = -1.3;

  const tags = [];
  const deck = addShape(kit, group, kit.geometry.box,
    surface(engine, "surface", { roughness: 0.8 }),
    [0, -1.15, -2.6], [12.6, 0.18, 3.0]);
  engine.registerLayer(deck, 0.1);

  tags.push(addLabel(kit, group, config.tally, "", [0, 0.38, -3.5], [3.4, 0.72, 1]));
  tags.push(addLabel(kit, group, config.stationCount, "", [-3.9, 0.62, -2.1], [1.9, 0.46, 1]));

  const stations = section.criteria.map((item, index) => {
    const x = (index - (section.criteria.length - 1) / 2) * 2.0;
    const z = -2.45 + Math.abs(index - 2.5) * 0.18;
    const plinth = addShape(kit, group, kit.geometry.box,
      surface(engine, STATION_ROLES[index], { roughness: 0.64 }),
      [x, -0.72, z], [1.55, 0.52, 1.1]);
    const lamp = addShape(kit, group, kit.geometry.sphere,
      flat(engine, "onAccent", { transparent: true, opacity: 0.9 }),
      [x, -0.38, z + 0.1], [0.13, 0.13, 0.13]);
    engine.registerLowGraphics(lamp);
    tags.push(addLabel(kit, group, item.station, "", [x, -0.12, z + 0.1], [1.85, 0.48, 1]));
    return { plinth, lamp, x, z, index };
  });

  const stillShelf = new THREE.Group();
  stillShelf.position.set(4.7, -0.72, 0.6);
  stillShelf.visible = false;
  group.add(stillShelf);
  addShape(kit, stillShelf, kit.geometry.box,
    surface(engine, "surface2", { roughness: 0.82 }),
    [0, -0.52, 0], [3.0, 0.16, 1.5]);
  for (let index = 0; index < section.stillToProve.length; index += 1) {
    addShape(kit, stillShelf, kit.geometry.box,
      surface(engine, "warning", { roughness: 0.7, transparent: true, opacity: 0.9 }),
      [(index % 3 - 1) * 0.86, -0.15 - Math.floor(index / 3) * 0.32, 0],
      [0.7, 0.2, 0.5]);
  }
  tags.push(addLabel(kit, stillShelf, config.stillLabel, "", [0, 0.46, 0.14], [2.2, 0.5, 1]));

  const companions = {
    pip: addCompanion(engine, kit, group, "pip", [-4.5, -1.0, 0.9], 0.72, "cheering"),
    moss: addCompanion(engine, kit, group, "moss", [3.4, -1.02, 1.1], 0.72, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let progress = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    const lit = Math.round(amount * stations.length);
    stations.forEach((station, index) => {
      const on = index < lit;
      station.lamp.scale.setScalar(on ? 0.2 : 0.13);
      station.plinth.position.y = -0.72 + (on ? 0.04 : 0);
    });
    const stillAmount = Math.min(1, Math.max(0, (amount - 0.58) / 0.42));
    stillShelf.visible = stillAmount > 0;
    stillShelf.scale.setScalar(Math.max(0.05, stillAmount));
  });

  return {
    group,
    companion: "pip",
    prop: "board",
    companionApi: companions.pip,
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
        stage: "evidence-observatory",
        stationCount: stations.length,
        litStations: active ? Math.round(progress * stations.length) : 0,
        stillVisible: stillShelf.visible,
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
