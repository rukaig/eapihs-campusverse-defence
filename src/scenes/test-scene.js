import { companionDesigns } from "../characters/index.js";

const SHARD_ROLES = ["coral600", "gold600", "lav600", "sage600", "blue700"];

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

function makeCompanion(engine, index) {
  const { THREE, geometry } = engine;
  const design = companionDesigns[index % companionDesigns.length];
  const roles = {
    moss: "sage600",
    pip: "coral600",
    lumen: "gold600",
    juniper: "lav600"
  };
  const bodyRole = roles[design.id] || "accent";
  const group = new THREE.Group();
  group.userData.companion = design.id;

  const body = place(
    new THREE.Mesh(geometry.sphere, standardMaterial(engine, bodyRole)),
    0, 0, 0, 0.72, 0.62, 0.64
  );
  const head = place(
    new THREE.Mesh(geometry.sphere, standardMaterial(engine, "surface")),
    0, 0.68, 0.12, 0.46, 0.44, 0.44
  );
  group.add(body, head);

  const eyeMaterial = standardMaterial(engine, "textStrong", { roughness: 0.35 });
  for (const x of [-0.17, 0.17]) {
    group.add(place(new THREE.Mesh(geometry.lowSphere, eyeMaterial), x, 0.74, 0.52, 0.055, 0.07, 0.04));
  }

  if (design.id === "moss") {
    const shell = place(
      new THREE.Mesh(geometry.icosa, standardMaterial(engine, "sage600", { roughness: 0.8 })),
      0, -0.05, -0.38, 0.86, 0.58, 0.3
    );
    group.add(shell);
    for (const x of [-0.55, 0.55]) {
      group.add(place(
        new THREE.Mesh(geometry.sphere, standardMaterial(engine, bodyRole)),
        x, -0.38, 0.18, 0.26, 0.2, 0.32
      ));
    }
  } else if (design.id === "pip") {
    const beak = place(
      new THREE.Mesh(geometry.cone, standardMaterial(engine, "gold600")),
      0, 0.66, 0.56, 0.15, 0.32, 0.15
    );
    beak.rotation.x = Math.PI / 2;
    group.add(beak);
    for (const x of [-0.62, 0.62]) {
      const wing = place(
        new THREE.Mesh(geometry.sphere, standardMaterial(engine, "coral600")),
        x, 0.12, -0.1, 0.42, 0.18, 0.3
      );
      wing.rotation.z = x < 0 ? 0.4 : -0.4;
      group.add(wing);
    }
  } else if (design.id === "lumen") {
    for (const x of [-0.58, 0.58]) {
      const wing = place(
        new THREE.Mesh(geometry.icosa, standardMaterial(engine, "surface2", { transparent: true, opacity: 0.86 })),
        x, 0.36, -0.18, 0.62, 0.38, 0.08
      );
      wing.rotation.z = x < 0 ? -0.35 : 0.35;
      group.add(wing);
    }
    for (const x of [-0.18, 0.18]) {
      const antenna = place(
        new THREE.Mesh(geometry.cone, standardMaterial(engine, "gold600")),
        x, 1.18, 0.08, 0.06, 0.34, 0.06
      );
      antenna.rotation.z = x < 0 ? 0.3 : -0.3;
      group.add(antenna);
    }
  } else {
    for (const x of [-0.29, 0.29]) {
      group.add(place(
        new THREE.Mesh(geometry.cone, standardMaterial(engine, "lav600")),
        x, 1.05, 0.05, 0.2, 0.46, 0.2
      ));
    }
    const tail = place(
      new THREE.Mesh(geometry.cone, standardMaterial(engine, "lav600")),
      -0.78, -0.12, -0.32, 0.24, 0.8, 0.24
    );
    tail.rotation.z = 1.1;
    group.add(tail);
  }

  return group;
}

export function createTestScene({ engine, index, section }) {
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

  const companion = makeCompanion(engine, index);
  companion.position.set(4.9, -1.35, 1.25);
  companion.scale.setScalar(0.82);
  companion.userData.idleBob = { speed: 0.9, amount: 0.055, phase: index * 0.7 };
  group.add(companion);
  engine.registerLayer(companion, 0.8);

  return {
    group,
    companion: companion.userData.companion,
    setActive(active) {
      group.userData.active = active;
    }
  };
}
