import {
  addCompanion,
  addProp,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const TAU = Math.PI * 2;

function ease(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function mix(a, b, t) {
  return a + (b - a) * t;
}

function createStage(engine, kit, parent, role) {
  const plinth = addShape(kit, parent, kit.geometry.cylinder,
    surface(engine, role, { roughness: 0.78 }),
    [0.7, -1.32, -0.55], [3.5, 0.13, 3.5]);
  engine.registerLayer(plinth, 0.12);
  const halo = addShape(kit, parent, kit.geometry.torus,
    flat(engine, "accentSoft", { transparent: true, opacity: 0.28, depthWrite: false }),
    [0.7, -1.14, -0.55], [3.7, 3.7, 1], [Math.PI / 2, 0, 0]);
  engine.registerLayer(halo, 0.16);
  engine.registerLowGraphics(halo);
  return halo;
}

function buildChess(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.5, -0.35);
  root.rotation.y = -0.16;
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, "textStrong", { roughness: 0.58 }),
    [0, -0.18, 0], [3.7, 0.16, 3.7]);
  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1) {
      addShape(kit, root, kit.geometry.box,
        surface(engine, (x + y) % 2 ? "surface" : role, { roughness: 0.7 }),
        [(x - 3.5) * 0.44, -0.07, (y - 3.5) * 0.44], [0.42, 0.05, 0.42]);
    }
  }

  const knight = new engine.THREE.Group();
  knight.position.set(-0.88, 0.04, 0.44);
  root.add(knight);
  addShape(kit, knight, kit.geometry.cylinder,
    surface(engine, "onDark", { roughness: 0.42 }), [0, 0.06, 0], [0.13, 0.16, 0.13]);
  addShape(kit, knight, kit.geometry.cone,
    surface(engine, "onDark", { roughness: 0.42 }), [0.03, 0.24, 0], [0.12, 0.32, 0.12], [0, 0, -0.24]);

  const opponent = addShape(kit, root, kit.geometry.icosa,
    surface(engine, "coral600", { roughness: 0.5 }),
    [0.88, 0.12, -0.88], [0.18, 0.24, 0.18]);
  engine.registerLowGraphics(opponent);
  const target = addShape(kit, root, kit.geometry.torus,
    flat(engine, "warning", { transparent: true, opacity: 0.85, depthWrite: false }),
    [0.44, 0.02, 1.32], [0.36, 0.36, 1], [Math.PI / 2, 0, 0]);
  engine.registerLowGraphics(target);

  const from = [-0.88, 0.04, 0.44];
  const to = [0.44, 0.04, 1.32];
  return {
    animate(t) {
      const move = ease(Math.min(1, t / 0.52));
      knight.position.x = mix(from[0], to[0], move);
      knight.position.z = mix(from[2], to[2], move);
      knight.position.y = from[1] + Math.sin(move * Math.PI) * 0.42;
      knight.rotation.y = move * 0.7;
      target.scale.setScalar(0.34 + Math.sin(t * TAU) * 0.05);
    }
  };
}

function buildForge(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.55, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, "textStrong", { roughness: 0.56 }),
    [0, -0.78, 0], [2.7, 0.22, 1.25]);
  addShape(kit, root, kit.geometry.cone,
    surface(engine, "lineStrong", { roughness: 0.5 }),
    [1.45, -0.7, 0], [0.35, 0.9, 0.35], [0, 0, -Math.PI / 2]);
  const glow = addShape(kit, root, kit.geometry.torus,
    flat(engine, role, { transparent: true, opacity: 0.36, depthWrite: false }),
    [0, -0.6, 0], [1.7, 0.8, 1], [Math.PI / 2, 0, 0]);
  engine.registerLowGraphics(glow);

  const bars = [];
  for (let index = 0; index < 6; index += 1) {
    const bar = addShape(kit, root, kit.geometry.box,
      surface(engine, index % 2 ? "surface2" : role, { roughness: 0.58 }),
      [0, 0, 0], [0.3, 0.44, 0.16]);
    bars.push(bar);
  }
  const hammer = addShape(kit, root, kit.geometry.box,
    surface(engine, "lineStrong", { roughness: 0.5 }),
    [0, 1.0, 0.15], [0.18, 0.8, 0.18], [0, 0, 0.35]);
  engine.registerLowGraphics(hammer);

  const orderedX = [-1.05, -0.63, -0.21, 0.21, 0.63, 1.05];
  const scatteredX = [-1.25, -0.15, 0.95, -0.85, 0.35, 1.25];
  return {
    animate(t) {
      const set = ease(Math.min(1, Math.max(0, (t - 0.12) / 0.5)));
      bars.forEach((bar, index) => {
        bar.position.x = mix(scatteredX[index], orderedX[index], set);
        bar.position.y = 0.02 + Math.sin(t * TAU + index) * 0.05 * (1 - set);
        bar.rotation.y = (1 - set) * Math.sin(t * TAU + index * 0.7) * 0.6;
      });
      hammer.position.y = 1.0 - Math.max(0, 1 - Math.abs(t - 0.62) / 0.12) * 0.36;
      glow.scale.x = 1.7 + Math.sin(t * TAU) * 0.08;
    }
  };
}

function buildBalance(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.55, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.cylinder,
    surface(engine, "lineStrong", { roughness: 0.52 }),
    [0, -0.95, 0], [0.14, 1.55, 0.14]);
  const beam = addShape(kit, root, kit.geometry.box,
    surface(engine, role, { roughness: 0.56 }),
    [0, -0.18, 0], [3.4, 0.12, 0.16]);
  for (const sign of [-1, 1]) {
    addShape(kit, root, kit.geometry.box,
      surface(engine, "surface2", { roughness: 0.7 }),
      [sign * 1.5, -0.52, 0], [0.9, 0.08, 0.7]);
    addShape(kit, root, kit.geometry.cylinder,
      surface(engine, "textMuted", { roughness: 0.5 }),
      [sign * 1.5, -0.34, 0], [0.02, 0.34, 0.02]);
  }
  const xTile = addShape(kit, root, kit.geometry.box,
    surface(engine, "accentStrong", { roughness: 0.5 }),
    [0, 0.62, 0], [0.42, 0.42, 0.16]);
  const check = addShape(kit, root, kit.geometry.torus,
    flat(engine, "success", { transparent: true, opacity: 0.75, depthWrite: false }),
    [0, -0.18, 0.22], [0.5, 0.5, 1]);
  engine.registerLowGraphics(check);

  return {
    animate(t) {
      const settle = ease(Math.min(1, Math.max(0, (t - 0.25) / 0.45)));
      xTile.position.y = mix(0.62, -0.42, settle);
      xTile.rotation.y = settle * Math.PI * 0.5;
      beam.rotation.z = (1 - settle) * Math.sin(t * TAU * 1.5) * 0.16;
      check.scale.setScalar(0.4 + settle * 0.16);
    }
  };
}

function buildDossier(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.4, -0.35);
  root.rotation.x = -0.12;
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, "surface2", { roughness: 0.82 }),
    [0, 0, -0.12], [3.7, 2.1, 0.12]);
  addShape(kit, root, kit.geometry.box,
    surface(engine, role, { roughness: 0.68 }),
    [-1.5, 0.76, -0.03], [0.55, 0.1, 0.06]);

  const suspects = [];
  for (let index = 0; index < 4; index += 1) {
    const x = -1.25 + index * 0.83;
    suspects.push(addShape(kit, root, kit.geometry.lowSphere,
      surface(engine, "lineStrong", { roughness: 0.6 }),
      [x, -0.12, 0.06], [0.22, 0.22, 0.22]));
    addShape(kit, root, kit.geometry.cone,
      surface(engine, "warning", { roughness: 0.56 }),
      [x, 0.5, 0.08], [0.09, 0.24, 0.09], [Math.PI, 0, 0]);
  }
  const marker = addShape(kit, root, kit.geometry.torus,
    flat(engine, "coral600", { transparent: true, opacity: 0.9, depthWrite: false }),
    [0, -0.12, 0.25], [0.32, 0.32, 1]);
  engine.registerLowGraphics(marker);

  return {
    animate(t) {
      const step = Math.min(3, Math.floor(t / 0.22));
      const local = ease(Math.min(1, (t - step * 0.22) / 0.18));
      const startX = -1.25 + step * 0.83;
      const endX = Math.min(1.24, startX + 0.83);
      marker.position.x = mix(startX, endX, local);
      marker.scale.setScalar(0.3 + Math.sin(t * TAU * 2) * 0.04);
      suspects.forEach((item, index) => {
        item.scale.setScalar(index === step ? 0.27 : 0.22);
      });
    }
  };
}

function buildTrack(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.5, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, "lineStrong", { roughness: 0.62 }),
    [0, -0.55, 0], [4.5, 0.12, 0.5]);
  const nodes = [];
  for (let index = 0; index < 5; index += 1) {
    const shape = index % 2 ? kit.geometry.icosa : kit.geometry.lowSphere;
    nodes.push(addShape(kit, root, shape,
      surface(engine, index === 4 ? "surface2" : role, { roughness: 0.56 }),
      [-1.8 + index * 0.9, -0.22, 0], [0.22, 0.22, 0.22]));
  }
  for (let index = 0; index < 4; index += 1) {
    addShape(kit, root, kit.geometry.box,
      surface(engine, "surface", { roughness: 0.72 }),
      [-1.35 + index * 0.9, -1.05, 0.2], [0.62, 0.36, 0.1]);
  }
  const cursor = addShape(kit, root, kit.geometry.torus,
    flat(engine, "warning", { transparent: true, opacity: 0.85, depthWrite: false }),
    [-1.8, -0.22, 0.3], [0.32, 0.32, 1]);
  const choice = addShape(kit, root, kit.geometry.box,
    surface(engine, "accentStrong", { roughness: 0.5 }),
    [-1.35, -1.05, 0.28], [0.42, 0.18, 0.06]);
  engine.registerLowGraphics(cursor);
  engine.registerLowGraphics(choice);

  return {
    animate(t) {
      const step = Math.min(4, Math.floor(t / 0.2));
      const local = ease(Math.min(1, (t - step * 0.2) / 0.16));
      const startX = -1.8 + Math.min(4, step) * 0.9;
      const endX = Math.min(1.8, startX + 0.9);
      cursor.position.x = mix(startX, endX, local * (step < 4 ? 1 : 0));
      choice.position.x = -1.35 + Math.min(3, Math.floor(t / 0.25)) * 0.9;
      choice.position.y = -1.05 + Math.sin(t * TAU) * 0.05;
      nodes.forEach((node, index) => node.scale.setScalar(index === Math.min(4, step) ? 0.28 : 0.22));
    }
  };
}

function buildShelf(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.35, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, role, { roughness: 0.76 }),
    [0, 0, -0.2], [3.5, 2.2, 0.12]);
  const cards = [];
  for (let index = 0; index < 8; index += 1) {
    const column = index % 4;
    const row = Math.floor(index / 4);
    const card = addShape(kit, root, kit.geometry.box,
      surface(engine, "surface", { roughness: 0.66 }),
      [-1.25 + column * 0.82, 0.42 - row * 0.86, 0.02], [0.58, 0.68, 0.08]);
    cards.push(card);
  }
  const counter = addShape(kit, root, kit.geometry.box,
    surface(engine, "textStrong", { roughness: 0.5 }),
    [0, -1.28, 0.12], [0.72, 0.12, 0.1]);

  return {
    animate(t) {
      cards.forEach((card, index) => {
        const pair = Math.floor(t / 0.5) % 4;
        const active = index === pair || index === pair + 4;
        const target = active ? Math.abs(Math.sin(t * Math.PI * 2)) * Math.PI : Math.PI;
        card.rotation.y = mix(card.rotation.y, target, 0.28);
      });
      counter.scale.x = 0.72 + Math.sin(t * TAU) * 0.06;
    }
  };
}

function buildDesk(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.5, -0.35);
  root.rotation.x = -0.1;
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, role, { roughness: 0.76 }),
    [0, -0.95, 0], [3.6, 0.16, 1.5]);
  const rotors = [];
  for (let index = 0; index < 3; index += 1) {
    const rotor = addShape(kit, root, kit.geometry.cylinder,
      surface(engine, index === 1 ? "surface2" : "textStrong", { roughness: 0.52 }),
      [-0.95 + index * 0.95, 0.05, 0], [0.42, 0.12, 0.42], [Math.PI / 2, 0, 0]);
    rotors.push(rotor);
  }
  const strip = addShape(kit, root, kit.geometry.plane,
    flat(engine, "accentSoft"),
    [0, -0.62, 0.58], [2.6, 0.3, 1]);
  engine.registerLowGraphics(strip);

  return {
    animate(t) {
      rotors.forEach((rotor, index) => {
        rotor.rotation.z = Math.sin(t * TAU * 0.5 + index * 0.8) * 0.65 + index * 0.4;
      });
      strip.scale.x = 2.6 - Math.min(1, t / 0.7) * 0.4;
      strip.position.x = Math.min(1, t / 0.7) * 0.2;
    }
  };
}

function buildGarden(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.62, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.cylinder,
    surface(engine, role, { roughness: 0.84 }),
    [0, -0.5, 0], [2.5, 0.12, 2.5]);
  const blooms = [];
  const stones = [];
  for (let index = 0; index < 6; index += 1) {
    const angle = index / 6 * TAU;
    const x = Math.cos(angle) * 1.45;
    const z = Math.sin(angle) * 1.2;
    if (index % 2 === 0) {
      const bloom = new engine.THREE.Group();
      bloom.position.set(x, -0.28, z);
      root.add(bloom);
      addShape(kit, bloom, kit.geometry.cylinder,
        surface(engine, "success", { roughness: 0.58 }), [0, 0.22, 0], [0.035, 0.45, 0.035]);
      addShape(kit, bloom, kit.geometry.lowSphere,
        surface(engine, "gold600", { roughness: 0.46 }),
        [0, 0.5, 0], [0.18, 0.18, 0.18]);
      blooms.push(bloom);
    } else {
      stones.push(addShape(kit, root, kit.geometry.icosa,
        surface(engine, "textMuted", { roughness: 0.8 }),
        [x, -0.24, z], [0.2, 0.14, 0.2]));
    }
  }
  const ring = addShape(kit, root, kit.geometry.torus,
    flat(engine, "warning", { transparent: true, opacity: 0.8, depthWrite: false }),
    [-1.5, -0.18, 0], [0.3, 0.3, 1], [Math.PI / 2, 0, 0]);
  engine.registerLowGraphics(ring);

  return {
    animate(t) {
      blooms.forEach((bloom, index) => {
        bloom.position.y = -0.28 + Math.sin(t * TAU + index) * 0.06;
        bloom.scale.setScalar(0.9 + Math.sin(t * TAU * 1.5 + index) * 0.1);
      });
      stones.forEach(stone => stone.scale.setScalar(0.2));
      ring.position.x = mix(-1.5, 1.5, ease(Math.min(1, t / 0.68)));
      ring.scale.setScalar(0.3 + Math.sin(t * TAU * 2) * 0.03);
    }
  };
}

function buildAtelier(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.45, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  addShape(kit, root, kit.geometry.box,
    surface(engine, "textStrong", { roughness: 0.56 }),
    [0.75, 0.1, -0.1], [2.0, 1.6, 0.12]);
  const preview = addShape(kit, root, kit.geometry.plane,
    flat(engine, "accentSoft"),
    [0.75, 0.1, -0.025], [1.6, 1.2, 1]);
  engine.registerLowGraphics(preview);

  addShape(kit, root, kit.geometry.box,
    surface(engine, role, { roughness: 0.72 }),
    [-1.25, 0.1, 0], [1.1, 2.0, 0.12]);
  const chips = [];
  for (let index = 0; index < 4; index += 1) {
    const chip = addShape(kit, root, kit.geometry.box,
      surface(engine, "surface", { roughness: 0.62 }),
      [-1.25, 0.7 - index * 0.45, 0.1], [0.82, 0.24, 0.08]);
    chips.push(chip);
  }
  const flying = addShape(kit, root, kit.geometry.box,
    surface(engine, "accentStrong", { roughness: 0.5 }),
    [-1.25, 0.25, 0.22], [0.56, 0.18, 0.06]);

  return {
    animate(t) {
      chips.forEach((chip, index) => chip.scale.x = index === 1 ? 0.9 : 0.82);
      const travel = ease(Math.min(1, Math.max(0, (t - 0.2) / 0.42)));
      flying.position.x = mix(-1.25, 0.75, travel);
      flying.position.y = mix(0.25, 0.1, travel) + Math.sin(travel * Math.PI) * 0.28;
      preview.scale.set(1.6 + travel * 0.08, 1.2 + travel * 0.06, 1);
    }
  };
}

function buildTimer(engine, kit, parent, role) {
  const root = new engine.THREE.Group();
  root.position.set(0.9, -0.5, -0.35);
  parent.add(root);
  engine.registerLayer(root, 0.17);

  const ring = addShape(kit, root, kit.geometry.torus,
    flat(engine, role, { transparent: true, opacity: 0.78, depthWrite: false }),
    [0, 0.15, -0.1], [1.55, 1.55, 1]);
  engine.registerLowGraphics(ring);
  const hand = addShape(kit, root, kit.geometry.box,
    surface(engine, "textStrong", { roughness: 0.5 }),
    [0, 0.15, 0], [0.06, 1.35, 0.06]);

  const stations = [];
  for (let index = 0; index < 3; index += 1) {
    const station = new engine.THREE.Group();
    station.position.set(-1.1 + index * 1.1, -1.05, 0.15);
    root.add(station);
    addShape(kit, station, kit.geometry.cylinder,
      surface(engine, "surface2", { roughness: 0.7 }), [0, -0.12, 0], [0.36, 0.12, 0.36]);
    stations.push(addShape(kit, station, index === 1 ? kit.geometry.box : kit.geometry.icosa,
      surface(engine, index === 2 ? "accentStrong" : role, { roughness: 0.54 }),
      [0, 0.12, 0], [0.2, 0.2, 0.2]));
  }

  return {
    animate(t) {
      ring.rotation.z = -t * TAU / 4;
      hand.rotation.z = -t * TAU / 4;
      stations.forEach((station, index) => {
        const active = Math.floor(t * 3) % 3 === index;
        station.scale.setScalar(active ? 1.18 : 0.92);
      });
    }
  };
}

const SETS = {
  chess: buildChess,
  word: buildForge,
  equation: buildBalance,
  mystery: buildDossier,
  pattern: buildTrack,
  memory: buildShelf,
  cipher: buildDesk,
  signal: buildGarden,
  css: buildAtelier,
  cortex: buildTimer
};

export function createGameTour({ engine, kit, section }) {
  const config = section.scene;
  const group = baseGroup(engine, section, config.camera);
  group.position.y = -0.18;

  const halo = createStage(engine, kit, group, config.role);
  const builder = SETS[config.game] || buildChess;
  const set = builder(engine, kit, group, config.role);
  const companion = addCompanion(engine, kit, group, config.companion,
    [-2.35, -1.05, 1.0], 0.76, config.mood);
  const prop = config.prop
    ? addProp(engine, kit, group, config.prop, [2.75, -1.05, 0.85], 0.62)
    : null;
  const reactions = wireReactions({ [config.companion]: companion }, config.reactions);

  let active = false;
  let progress = 0;
  let loopTime = 0;
  let phase = 0;
  const unregister = engine.registerUpdatable(frame => {
    if (!active) return;
    loopTime = (loopTime + frame.delta) % 4;
    phase = loopTime / 4;
    set.animate(phase);
    halo.rotation.z = phase * 0.12;
    if (prop) prop.update?.(frame);
  });

  return {
    group,
    companion: config.companion,
    prop: config.prop || "none",
    companionApi: companion,
    companionApis: [companion],
    setActive(value) {
      active = value;
      if (value) {
        loopTime = 0;
        reactions.reset();
      }
    },
    setLocalProgress(value) {
      progress = value;
      if (active) reactions.setLocalProgress(value);
    },
    getState() {
      return {
        stage: "game-tour",
        game: config.game,
        set: config.set,
        demo: config.demo,
        demoPhase: Number(phase.toFixed(3)),
        localProgress: Number(progress.toFixed(3)),
        mood: companion.getMood(),
        bubble: companion.getState().bubbleVisible
      };
    },
    dispose() {
      unregister();
      companion.dispose();
      if (prop) prop.dispose();
    }
  };
}

function addLink(engine, kit, parent, a, b, material) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.sqrt(dx * dx + dy * dy) || 0.001;
  const mesh = addShape(kit, parent, kit.geometry.cylinder, material,
    [(a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2],
    [0.014, length, 0.014], [0, 0, Math.atan2(dy, dx) - Math.PI / 2]);
  return mesh;
}

export function createConstellation({ engine, kit, section }) {
  const config = section.scene;
  const group = baseGroup(engine, section, config.camera);
  group.position.y = -0.25;

  const root = new engine.THREE.Group();
  root.scale.setScalar(1.35);
  group.add(root);
  engine.registerLayer(root, 0.12);

  const pageMaterial = surface(engine, "sage600", { roughness: 0.46, metalness: 0.08 });
  const gameMaterial = surface(engine, "gold600", { roughness: 0.46, metalness: 0.08 });
  const linkMaterial = flat(engine, "lineStrong", { transparent: true, opacity: 0.72, depthWrite: false });
  const nodes = [];
  const points = [];
  const center = { x: 2.0, y: 0.1, z: -0.8 };

  for (let index = 0; index < 17; index += 1) {
    const angle = index / 17 * TAU;
    const radius = 1.5 + index * 0.07;
    const point = {
      x: center.x + Math.cos(angle) * radius * 1.25,
      y: center.y + Math.sin(angle) * radius,
      z: center.z + Math.sin(index * 1.7) * 0.35
    };
    points.push(point);
    nodes.push(addShape(kit, root, kit.geometry.lowSphere, pageMaterial,
      [point.x, point.y, point.z], [0.34, 0.34, 0.34]));
  }
  for (let index = 0; index < 10; index += 1) {
    const angle = index / 10 * TAU + 0.3;
    const radius = 0.85 + index * 0.1;
    const point = {
      x: center.x + Math.cos(angle) * radius * 1.1,
      y: center.y + Math.sin(angle) * radius,
      z: center.z + 0.55 + Math.cos(index * 1.3) * 0.3
    };
    points.push(point);
    nodes.push(addShape(kit, root, kit.geometry.box, gameMaterial,
      [point.x, point.y, point.z], [0.4, 0.4, 0.4], [0, Math.PI / 4, Math.PI / 4]));
  }

  const links = [];
  for (let index = 0; index < points.length - 1; index += 1) {
    links.push(addLink(engine, kit, root, points[index], points[index + 1], linkMaterial));
  }
  links.push(addLink(engine, kit, root, points[16], points[0], linkMaterial));
  for (const link of links) engine.registerLowGraphics(link);

  const pulse = addShape(kit, root, kit.geometry.lowSphere,
    flat(engine, "warning", { transparent: true, opacity: 0.9, depthWrite: false }),
    [points[0].x, points[0].y, points[0].z], [0.1, 0.1, 0.1]);
  engine.registerLowGraphics(pulse);
  const companion = addCompanion(engine, kit, group, config.companion,
    [-2.4, -1.08, 1.1], 0.74, config.mood);
  const prop = addProp(engine, kit, group, config.prop, [2.85, -1.1, 0.9], 0.6);
  const reactions = wireReactions({ [config.companion]: companion }, config.reactions);

  let active = false;
  let progress = 0;
  let loopTime = 0;
  let phase = 0;
  const unregister = engine.registerUpdatable(frame => {
    if (!active) return;
    loopTime = (loopTime + frame.delta) % 8;
    phase = loopTime / 8;
    const pathIndex = phase * (points.length - 1);
    const from = points[Math.floor(pathIndex)];
    const to = points[Math.min(points.length - 1, Math.floor(pathIndex) + 1)];
    const local = ease(pathIndex - Math.floor(pathIndex));
    pulse.position.x = mix(from.x, to.x, local);
    pulse.position.y = mix(from.y, to.y, local);
    pulse.position.z = mix(from.z, to.z, local);
    nodes.forEach((node, index) => {
      node.scale.setScalar(index === Math.floor(pathIndex) ? 0.2 : 0.14);
    });
    root.rotation.y = phase * 0.1;
    prop.update?.(frame);
  });

  return {
    group,
    companion: config.companion,
    prop: config.prop || "none",
    companionApi: companion,
    companionApis: [companion],
    setActive(value) {
      active = value;
      if (value) {
        loopTime = 0;
        reactions.reset();
      }
    },
    setLocalProgress(value) {
      progress = value;
      if (active) reactions.setLocalProgress(value);
    },
    getState() {
      return {
        stage: "constellation",
        pageNodes: 17,
        gameNodes: 10,
        demoPhase: Number(phase.toFixed(3)),
        localProgress: Number(progress.toFixed(3)),
        mood: companion.getMood(),
        bubble: companion.getState().bubbleVisible
      };
    },
    dispose() {
      unregister();
      companion.dispose();
      prop.dispose();
    }
  };
}
