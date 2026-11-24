import { createStageEngine } from "./stage-engine.js";
import { createTestScene } from "./test-scene.js";
import { createCharacterKit } from "../characters/index.js";

// Scene registry. Every section registers one scene; Phase 2 can replace the
// test-scene factory with part-specific sets without changing the public API.
export function initScenes(sections, stageElement, initialPalette = {}) {
  sections.forEach((section, index) => {
    section.element.dataset.scene = section.id;
    section.element.dataset.sceneIndex = String(index);
  });

  const engine = createStageEngine({ container: stageElement, count: sections.length });
  const kit = createCharacterKit(engine);
  const scenes = sections.map((section, index) => {
    const scene = createTestScene({ engine, kit, index, section });
    engine.addSection(index, scene.group);
    return scene;
  });

  engine.setPalette(initialPalette);

  return {
    setActive(index, section) {
      scenes.forEach((scene, current) => scene.setActive(current === index));
      engine.setActive(index);
    },
    setHold(value) {
      engine.setHold(value);
    },
    setLowGraphics(value) {
      engine.setLowGraphics(value);
    },
    setReducedMotion(value) {
      engine.setReducedMotion(value);
    },
    updateTheme(theme) {
      engine.setPalette(theme.palette || theme);
    },
    setScrollProgress(progress) {
      engine.setScrollProgress(progress);
    },
    setPointer(x, y) {
      engine.setPointer(x, y);
    },
    getState() {
      return {
        ...engine.getState(),
        scenes: scenes.map(scene => ({
          id: scene.group.name,
          companion: scene.companion,
          prop: scene.prop
        }))
      };
    },
    getCharacters() {
      return {
        companions: scenes.map(scene => scene.companionApi.getState()),
        props: scenes.map(scene => scene.propApi.getState())
      };
    },
    dispose() {
      for (const scene of scenes) scene.dispose();
      kit.dispose();
      engine.dispose();
      stageElement.replaceChildren();
    }
  };
}
