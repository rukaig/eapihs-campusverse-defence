// Shared helpers for the paper-part 3D sets. All visible strings are supplied
// by content.js; these helpers only place geometry and theme-aware materials.
import { createCompanion, createProp } from "../../characters/index.js";

export function surface(engine, role, options = {}) {
  const material = new engine.THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.64,
    metalness: 0.03,
    ...options
  });
  engine.trackMaterial(material, role);
  return material;
}

export function flat(engine, role, options = {}) {
  const material = new engine.THREE.MeshBasicMaterial({ color: 0xffffff, ...options });
  engine.trackMaterial(material, role);
  return material;
}

export function addShape(kit, parent, shape, surfaceMaterial, position, scale, rotation) {
  const object = kit.mesh(shape, surfaceMaterial, position, scale, rotation);
  parent.add(object);
  return object;
}

export function addLabel(kit, parent, title, subtitle, position, scale = [1.85, 0.48, 1]) {
  const tag = kit.label(title, subtitle);
  tag.sprite.position.set(position[0], position[1], position[2]);
  tag.sprite.scale.set(scale[0], scale[1], scale[2]);
  parent.add(tag.sprite);
  return tag;
}

export function addCompanion(engine, kit, parent, id, position, scale = 0.82, mood = "idle") {
  const companion = createCompanion(engine, kit, id);
  companion.group.position.set(position[0], position[1], position[2]);
  companion.group.scale.setScalar(scale);
  companion.setMood(mood);
  parent.add(companion.group);
  return companion;
}

export function addProp(engine, kit, parent, id, position, scale = 0.7) {
  const prop = createProp(engine, kit, id);
  prop.group.position.set(position[0], position[1], position[2]);
  prop.group.scale.setScalar(scale);
  parent.add(prop.group);
  return prop;
}

export function wireReactions(companions, reactions = []) {
  const fired = new Set();

  function setLocalProgress(progress) {
    reactions.forEach((reaction, index) => {
      if (progress < reaction.threshold || fired.has(index)) return;
      fired.add(index);
      const companion = companions[reaction.companion];
      if (!companion) return;
      companion.setMood(reaction.mood);
      companion.say(reaction.text);
    });
  }

  function reset() {
    fired.clear();
  }

  return { setLocalProgress, reset };
}

export function baseGroup(engine, section, camera) {
  const group = new engine.THREE.Group();
  group.name = `scene-${section.id}`;
  group.userData.camera = camera;
  return group;
}
