import { propDesigns } from "./designs.js";

function makeBase(kit, id) {
  const { THREE } = kit;
  const group = new THREE.Group();
  group.name = `prop-${id}`;
  const pivot = new THREE.Group();
  group.add(pivot);
  return { THREE, group, pivot, parts: {}, disposables: [], phase: Math.random() * Math.PI * 2, animate() {} };
}

function buildStudent(kit) {
  const rig = makeBase(kit, "student");
  const { geometry } = kit;
  const skin = kit.material("surface2", { mix: 0.25 });
  const hair = kit.material("textStrong", { mix: 0.2 });
  const shirt = kit.material("accent", { mix: 0.35 });
  const trousers = kit.material("blue700", { mix: 0.4 });
  const bag = kit.material("warning", { mix: 0.4 });
  const ink = kit.material("textStrong", { mix: 0.2 });

  rig.pivot.add(kit.mesh(geometry.sphere, skin, [0, 1.72, 0], [0.29, 0.31, 0.28]));
  rig.pivot.add(kit.mesh(geometry.sphere, hair, [0, 1.85, -0.02], [0.3, 0.16, 0.29]));
  rig.pivot.add(kit.mesh(geometry.box, shirt, [0, 1.14, 0], [0.62, 0.72, 0.36]));
  rig.pivot.add(kit.mesh(geometry.box, bag, [0, 1.13, -0.29], [0.5, 0.58, 0.2]));
  for (const sign of [-1, 1]) {
    rig.pivot.add(kit.mesh(geometry.box, skin, [sign * 0.42, 1.12, 0], [0.16, 0.62, 0.18], [0, 0, sign * 0.08]));
    rig.pivot.add(kit.mesh(geometry.box, trousers, [sign * 0.18, 0.48, 0], [0.22, 0.72, 0.26]));
    rig.pivot.add(kit.mesh(geometry.lowSphere, ink, [sign * 0.1, 1.75, 0.25], [0.025, 0.03, 0.02]));
  }
  rig.pivot.add(kit.mesh(geometry.box, kit.material("surface", { mix: 0.2 }), [0.48, 0.92, 0.16], [0.28, 0.34, 0.06], [0, 0, -0.18]));
  return rig;
}

function buildTeacher(kit) {
  const rig = makeBase(kit, "teacher");
  const { THREE, geometry } = kit;
  const skin = kit.material("surface2", { mix: 0.25 });
  const hair = kit.material("textMuted", { mix: 0.3 });
  const cardigan = kit.material("accentStrong", { mix: 0.35 });
  const shirt = kit.material("surface", { mix: 0.2 });
  const trousers = kit.material("blue700", { mix: 0.35 });
  const ink = kit.material("textStrong", { mix: 0.2 });
  const gold = kit.material("gold600", { mix: 0.35 });

  rig.pivot.add(kit.mesh(geometry.sphere, skin, [0, 1.76, 0], [0.29, 0.31, 0.28]));
  rig.pivot.add(kit.mesh(geometry.sphere, hair, [0, 1.87, -0.03], [0.3, 0.14, 0.29]));
  rig.pivot.add(kit.mesh(geometry.box, shirt, [0, 1.16, 0.02], [0.4, 0.7, 0.36]));
  rig.pivot.add(kit.mesh(geometry.box, cardigan, [0, 1.12, -0.16], [0.62, 0.72, 0.28]));
  for (const sign of [-1, 1]) {
    rig.pivot.add(kit.mesh(geometry.box, cardigan, [sign * 0.39, 1.11, 0.02], [0.16, 0.6, 0.2], [0, 0, sign * 0.06]));
    rig.pivot.add(kit.mesh(geometry.box, trousers, [sign * 0.18, 0.47, 0], [0.22, 0.72, 0.26]));
    const glasses = kit.mesh(new THREE.TorusGeometry(0.085, 0.012, 6, 18), ink,
      [sign * 0.11, 1.78, 0.27]);
    rig.disposables.push(glasses.geometry);
    rig.pivot.add(glasses);
  }
  rig.pivot.add(kit.mesh(geometry.box, ink, [0, 1.78, 0.27], [0.06, 0.012, 0.012]));
  rig.pivot.add(kit.mesh(geometry.box, gold, [0.52, 1.42, 0.08], [0.035, 0.92, 0.035], [0, 0, -0.28]));
  rig.pivot.add(kit.mesh(geometry.plane, kit.material("accentSoft", { mix: 0.25, side: THREE.DoubleSide }),
    [-0.72, 1.28, -0.45], [1.05, 0.78, 1]));
  return rig;
}

function buildPhone(kit) {
  const rig = makeBase(kit, "phone");
  const { geometry } = kit;
  const body = kit.material("textStrong", { mix: 0.22 });
  const screen = kit.material("accent", { mix: 0.3, emissive: 0x1d2b24, emissiveIntensity: 0.22 });
  const soft = kit.material("surface", { mix: 0.2 });

  rig.pivot.add(kit.mesh(geometry.box, body, [0, 0.98, 0], [0.64, 1.18, 0.14]));
  rig.parts.screen = kit.mesh(geometry.plane, screen, [0, 1.0, 0.075], [0.54, 1.0, 1]);
  rig.pivot.add(rig.parts.screen);
  rig.pivot.add(kit.mesh(geometry.lowSphere, soft, [0, 1.49, 0.08], [0.032, 0.032, 0.02]));
  rig.pivot.add(kit.mesh(geometry.box, soft, [0, 0.5, 0.076], [0.26, 0.022, 0.012]));
  rig.pivot.rotation.z = -0.06;
  rig.animate = ({ time }) => {
    rig.parts.screen.scale.y = 1 + Math.sin(time * 1.4 + rig.phase) * 0.012;
  };
  return rig;
}

function buildLaptop(kit) {
  const rig = makeBase(kit, "laptop");
  const { THREE, geometry } = kit;
  const frame = kit.material("lineStrong", { mix: 0.35 });
  const deck = kit.material("surface2", { mix: 0.25 });
  const screen = kit.material("accentSoft", { mix: 0.3, side: THREE.DoubleSide });
  const ink = kit.material("textStrong", { mix: 0.2 });

  rig.pivot.add(kit.mesh(geometry.box, frame, [0, 0.18, 0.2], [1.52, 0.1, 0.92]));
  rig.pivot.add(kit.mesh(geometry.box, deck, [0, 0.24, 0.2], [1.36, 0.02, 0.76]));
  rig.pivot.add(kit.mesh(geometry.box, ink, [0, 0.25, 0.46], [0.42, 0.014, 0.22]));
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 7; column += 1) {
      rig.pivot.add(kit.mesh(geometry.box, frame,
        [-0.52 + column * 0.17, 0.26, -0.02 + row * 0.15], [0.12, 0.015, 0.1]));
    }
  }
  rig.parts.screenPivot = new THREE.Group();
  rig.parts.screenPivot.position.set(0, 0.24, -0.27);
  rig.parts.screenPivot.rotation.x = -0.16;
  rig.parts.screenPivot.add(kit.mesh(geometry.box, frame, [0, 0.48, 0], [1.52, 0.98, 0.08]));
  rig.parts.screenPivot.add(kit.mesh(geometry.plane, screen, [0, 0.48, 0.046], [1.36, 0.8, 1]));
  rig.pivot.add(rig.parts.screenPivot);
  return rig;
}

function buildBooks(kit) {
  const rig = makeBase(kit, "books");
  const { geometry } = kit;
  const covers = [
    kit.material("coral600", { mix: 0.4 }),
    kit.material("gold600", { mix: 0.4 }),
    kit.material("blue700", { mix: 0.4 })
  ];
  const pages = kit.material("surface", { mix: 0.2 });
  const stripe = kit.material("surface2", { mix: 0.2 });

  [
    { y: 0.18, rotation: 0.06, scale: [1.18, 0.24, 0.82] },
    { y: 0.47, rotation: -0.08, scale: [1.06, 0.22, 0.76] },
    { y: 0.75, rotation: 0.12, scale: [1.12, 0.2, 0.8] }
  ].forEach((item, index) => {
    rig.pivot.add(kit.mesh(geometry.box, covers[index], [0, item.y, 0], item.scale, [0, item.rotation, 0]));
    rig.pivot.add(kit.mesh(geometry.box, pages,
      [0.08, item.y, 0.41], [item.scale[0] - 0.2, item.scale[1] - 0.06, 0.02], [0, item.rotation, 0]));
    rig.pivot.add(kit.mesh(geometry.box, stripe,
      [-item.scale[0] * 0.36, item.y, 0.42], [0.08, item.scale[1] - 0.04, 0.02], [0, item.rotation, 0]));
  });
  rig.pivot.add(kit.mesh(geometry.box, kit.material("accent", { mix: 0.3 }),
    [0.28, 0.62, 0.45], [0.08, 0.62, 0.02], [0, 0, 0.08]));
  return rig;
}

function buildCalculator(kit) {
  const rig = makeBase(kit, "calculator");
  const { geometry } = kit;
  const body = kit.material("surface2", { mix: 0.22 });
  const screen = kit.material("accentSoft", { mix: 0.3 });
  const button = kit.material("lineStrong", { mix: 0.35 });
  const accent = kit.material("accent", { mix: 0.35 });

  rig.pivot.add(kit.mesh(geometry.box, body, [0, 0.94, 0], [0.9, 1.34, 0.16]));
  rig.pivot.add(kit.mesh(geometry.plane, screen, [0, 1.36, 0.085], [0.74, 0.34, 1]));
  for (let row = 0; row < 5; row += 1) {
    for (let column = 0; column < 4; column += 1) {
      rig.pivot.add(kit.mesh(geometry.box, row === 4 && column === 3 ? accent : button,
        [-0.3 + column * 0.2, 1.1 - row * 0.19, 0.09], [0.14, 0.12, 0.03]));
    }
  }
  rig.pivot.rotation.z = 0.04;
  return rig;
}

function buildChess(kit) {
  const rig = makeBase(kit, "chess");
  const { geometry } = kit;
  const base = kit.material("accentStrong", { mix: 0.35 });
  const figure = kit.material("surface", { mix: 0.2 });
  const top = kit.material("accent", { mix: 0.35 });

  rig.pivot.add(kit.mesh(geometry.cylinder, base, [0, 0.08, 0], [0.46, 0.1, 0.46]));
  rig.pivot.add(kit.mesh(geometry.pawn, figure, [0, 0.12, 0], [0.94, 1, 0.94]));
  rig.pivot.add(kit.mesh(geometry.sphere, top, [0, 1.14, 0], [0.24, 0.24, 0.24]));
  rig.pivot.add(kit.mesh(geometry.torus, base, [0, 0.87, 0], [0.29, 0.29, 1], [Math.PI / 2, 0, 0]));
  rig.animate = ({ time }) => {
    rig.pivot.rotation.y = Math.sin(time * 0.6 + rig.phase) * 0.16;
  };
  return rig;
}

function buildBoard(kit) {
  const rig = makeBase(kit, "board");
  const { THREE, geometry } = kit;
  const deck = kit.material("accent", { mix: 0.4 });
  const grip = kit.material("textStrong", { mix: 0.2 });
  const metal = kit.material("lineStrong", { mix: 0.35 });
  const glow = kit.material("accent", {
    mix: 0.5, transparent: true, opacity: 0.42, side: THREE.DoubleSide, depthWrite: false
  });

  rig.pivot.add(kit.mesh(geometry.box, deck, [0, 0.92, 0], [1.92, 0.12, 0.56], [0, 0, -0.05]));
  rig.pivot.add(kit.mesh(geometry.plane, grip, [0, 0.99, 0], [1.7, 0.46, 1], [-Math.PI / 2, 0, -0.05]));
  for (const sign of [-1, 1]) {
    rig.pivot.add(kit.mesh(geometry.box, metal, [sign * 0.66, 0.79, 0], [0.12, 0.12, 0.42]));
    for (const side of [-1, 1]) {
      rig.pivot.add(kit.mesh(geometry.cylinder, grip,
        [sign * 0.66, 0.68, side * 0.28], [0.15, 0.11, 0.15], [0, 0, Math.PI / 2]));
    }
  }
  rig.parts.glow = kit.mesh(geometry.torus, glow, [0, 0.45, 0], [1.05, 1.05, 1], [Math.PI / 2, 0, 0]);
  rig.pivot.add(rig.parts.glow);
  rig.pivot.rotation.y = -0.24;
  rig.animate = ({ time }) => {
    rig.pivot.position.y = Math.sin(time * 1.6 + rig.phase) * 0.09;
    rig.parts.glow.scale.x = 1.05 + Math.sin(time * 2.2) * 0.08;
    rig.parts.glow.scale.y = 1.05 + Math.sin(time * 2.2) * 0.08;
  };
  return rig;
}

function buildStar(kit) {
  const rig = makeBase(kit, "star");
  const { THREE, geometry } = kit;
  const gold = kit.material("gold600", {
    mix: 0.42, emissive: 0x5a3d0d, emissiveIntensity: 0.28, metalness: 0.18, roughness: 0.4
  });
  const ribbon = kit.material("coral600", { mix: 0.4 });
  const center = kit.material("surface", { mix: 0.2 });
  const halo = kit.material("accentSoft", { mix: 0.3, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });

  rig.parts.star = kit.mesh(geometry.star, gold, [0, 1.04, 0], [0.78, 0.78, 0.78]);
  rig.pivot.add(rig.parts.star);
  rig.pivot.add(kit.mesh(geometry.sphere, center, [0, 1.04, 0.16], [0.17, 0.17, 0.07]));
  for (const sign of [-1, 1]) {
    rig.pivot.add(kit.mesh(geometry.box, ribbon,
      [sign * 0.16, 0.38, -0.02], [0.17, 0.64, 0.06], [0, 0, sign * 0.22]));
  }
  rig.parts.halo = kit.mesh(geometry.torus, halo, [0, 1.04, -0.12], [0.96, 0.96, 1]);
  rig.pivot.add(rig.parts.halo);
  rig.animate = ({ time }) => {
    rig.parts.star.rotation.z = Math.sin(time * 0.8 + rig.phase) * 0.08;
    rig.parts.halo.scale.x = 0.96 + Math.sin(time * 1.6) * 0.04;
    rig.parts.halo.scale.y = rig.parts.halo.scale.x;
  };
  return rig;
}

const BUILDERS = {
  student: buildStudent,
  teacher: buildTeacher,
  phone: buildPhone,
  laptop: buildLaptop,
  books: buildBooks,
  calculator: buildCalculator,
  chess: buildChess,
  board: buildBoard,
  star: buildStar
};

export function createProp(engine, kit, id, options = {}) {
  const design = propDesigns.find(item => item.id === id) || propDesigns[0];
  const rig = (BUILDERS[design.id] || buildStudent)(kit);

  function update(frame) {
    const delta = frame.delta || 0;
    rig.time = (rig.time || 0) + delta;
    rig.animate({ time: rig.time, delta, pointer: frame.pointer, pose: { limb: 0, cheer: 0 } });
    if (rig.baseY === undefined) rig.baseY = rig.pivot.position.y;
    rig.pivot.position.y = rig.baseY + Math.sin(rig.time * 1.1 + rig.phase) * 0.025;
  }

  const api = {
    id: design.id,
    name: design.name,
    note: design.note,
    group: rig.group,
    update,
    getState() {
      return {
        id: design.id,
        position: rig.group.position.toArray().map(value => Number(value.toFixed(3)))
      };
    },
    dispose() {
      unregister();
      for (const shape of rig.disposables) shape.dispose();
      rig.group.removeFromParent();
    }
  };

  const unregister = options.autoRegister === false
    ? () => {}
    : engine.registerUpdatable(api.update);
  return api;
}
