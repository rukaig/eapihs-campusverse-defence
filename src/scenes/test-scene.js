import { companionDesigns, propDesigns, createCompanion, createProp } from "../characters/index.js";

const SHARD_ROLES = ["coral600", "gold600", "lav600", "sage600", "blue700"];
const MOOD_CYCLE = ["idle", "happy", "thinking", "cheering"];

function standardMaterial(engine, role, options = {}) {
  const material = new engine.THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.62,
    metalness: 0.04,
    ...options
  });
  engine.trackMaterial(material, role);
  return material;
}

function basicMaterial(engine, role, options = {}) {
  const material = new engine.THREE.MeshBasicMaterial({ color: 0xffffff, ...options });
  engine.trackMaterial(material, role);
  return material;
}

function place(mesh, x, y, z, sx = 1, sy = sx, sz = sx) {
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  return mesh;
}

export function createTestScene({ engine, kit, index, section }) {
  const { THREE, geometry } = engine;
  const group = new THREE.Group();
  group.name = `scene-${section.id}`;

  const backdrop = place(
    new THREE.Mesh(geometry.plane, basicMaterial(engine, "bgDeep", {
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
      side: THREE.DoubleSide
    })),
    0, 0.2, -9, 48, 28, 1
  );
  group.add(backdrop);
  engine.registerLayer(backdrop, 0.08);

  const grid = new THREE.GridHelper(34, 18, 0xffffff, 0xffffff);
  grid.position.set(0, -4.15, -2.5);
  grid.material.transparent = true;
  grid.material.opacity = 0.2;
  grid.material.depthWrite = false;
  engine.trackMaterial(grid.material, "line");
  group.add(grid);
  engine.registerLayer(grid, 0.16);
  engine.registerLowGraphics(grid);

  const frameRoles = ["accentStrong", "accent", "accentSoft"];
  frameRoles.forEach((role, frameIndex) => {
    const frame = place(
      new THREE.Mesh(geometry.torus, basicMaterial(engine, role, {
        transparent: true,
        opacity: 0.9 - frameIndex * 0.18,
        depthWrite: false
      })),
      0, 0.45 - frameIndex * 0.15, -3.4 + frameIndex * 0.42,
      5.9 - frameIndex * 1.15,
      5.9 - frameIndex * 1.15,
      1
    );
    frame.rotation.z = 0.1 + index * 0.06 + frameIndex * 0.24;
    group.add(frame);
    engine.registerLayer(frame, 0.28 + frameIndex * 0.1);
    if (frameIndex === 2) engine.registerLowGraphics(frame);
  });

  for (const x of [-7.1, 7.1]) {
    const pillar = place(
      new THREE.Mesh(geometry.box, standardMaterial(engine, "accent", {
        transparent: true,
        opacity: 0.82
      })),
      x, 0.1, -1.7, 0.16, 7.4, 0.16
    );
    group.add(pillar);
    engine.registerLayer(pillar, 0.48);
    engine.registerLowGraphics(pillar);
  }

  const card = place(
    new THREE.Mesh(geometry.plane, basicMaterial(engine, "surface", {
      transparent: true,
      opacity: 0.9,
      depthWrite: false
    })),
    -5.15, 1.55, 1.1, 3.4, 1.9, 1
  );
  card.rotation.y = 0.12;
  card.userData.idleBob = { speed: 0.7, amount: 0.025, phase: index };
  group.add(card);
  engine.registerLayer(card, 0.72);

  const cardRule = place(
    new THREE.Mesh(geometry.box, basicMaterial(engine, "accent", {
      transparent: true,
      opacity: 0.95,
      depthWrite: false
    })),
    -5.75, 1.1, 1.16, 1.7, 0.06, 0.04
  );
  cardRule.rotation.y = 0.12;
  group.add(cardRule);
  engine.registerLayer(cardRule, 0.74);

  for (let i = 0; i < 7; i += 1) {
    const role = SHARD_ROLES[(i + index) % SHARD_ROLES.length];
    const shard = place(
      new THREE.Mesh(geometry.icosa, standardMaterial(engine, role, {
        transparent: true,
        opacity: 0.94,
        metalness: 0.12
      })),
      Math.sin(index * 1.7 + i * 2.1) * 6.2,
      Math.cos(index * 0.9 + i * 1.6) * 2.9,
      0.8 + (i % 3) * 1.35,
      0.26 + (i % 4) * 0.11
    );
    shard.userData.idleSpin = 0.18 + i * 0.035;
    shard.userData.idleBob = { speed: 0.55 + i * 0.08, amount: 0.07, phase: i + index };
    group.add(shard);
    engine.registerLayer(shard, 0.92 + i * 0.06);
    if (i > 3) engine.registerLowGraphics(shard);
  }

  const design = companionDesigns[index % companionDesigns.length];
  const companion = createCompanion(engine, kit, design.id);
  companion.group.scale.setScalar(0.82);
  companion.setMood(MOOD_CYCLE[index % MOOD_CYCLE.length]);
  const companionHolder = new THREE.Group();
  companionHolder.position.set(4.9, -1.35, 1.25);
  companionHolder.add(companion.group);
  companionHolder.userData.idleBob = { speed: 0.8, amount: 0.035, phase: index * 0.7 };
  group.add(companionHolder);
  engine.registerLayer(companionHolder, 0.8);

  const propDesign = propDesigns[index % propDesigns.length];
  const prop = createProp(engine, kit, propDesign.id);
  prop.group.scale.setScalar(0.62);
  const propHolder = new THREE.Group();
  propHolder.position.set(-5.05, -1.7, 1.35);
  propHolder.add(prop.group);
  group.add(propHolder);
  engine.registerLayer(propHolder, 0.66);

  return {
    group,
    companion: design.id,
    prop: propDesign.id,
    companionApi: companion,
    propApi: prop,
    setActive(active) {
      group.userData.active = active;
      if (active && index % 3 === 0) companion.say(design.tagline, { duration: 3.4 });
    },
    dispose() {
      companion.dispose();
      prop.dispose();
      group.removeFromParent();
    }
  };
}
