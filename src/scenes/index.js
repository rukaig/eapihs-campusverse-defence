// Phase 1 keeps the scene layer modular but intentionally flat.
// Phase 2 replaces mount() with three.js scenes; the public shape stays stable.
export function initScenes(sections, stage) {
  sections.forEach((section, index) => {
    section.element.dataset.scene = section.id;
    section.element.dataset.sceneIndex = String(index);
  });
  return {
    setActive() {},
    setHold() {},
    setLowGraphics() {},
    updateTheme() {},
    dispose() {
      stage.replaceChildren();
    }
  };
}
