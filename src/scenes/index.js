import { createStageEngine } from "./stage-engine.js";
import { createTestScene } from "./test-scene.js";
import { createCharacterKit } from "../characters/index.js";
import { createTeamDesk } from "./parts/team-desk.js";
import { createFiveNeeds } from "./parts/five-needs.js";
import { createScatteredLearning } from "./parts/scattered-learning.js";
import { createObjectivesOutputs } from "./parts/objectives-outputs.js";
import { createWorkbench } from "./parts/workbench.js";
import { createZeroCost } from "./parts/zero-cost.js";
import { createEvidenceObservatory } from "./parts/evidence-observatory.js";
import { createHandoverLibrary } from "./parts/handover-library.js";
import { createThankYou } from "./parts/thank-you.js";
import { createAppTour } from "./parts/app-tour.js";
import { createGameTour, createConstellation } from "./parts/game-tour.js";

const PART_SCENES = {
  "team-desk": createTeamDesk,
  "five-needs": createFiveNeeds,
  "scattered-learning": createScatteredLearning,
  "objectives-outputs": createObjectivesOutputs,
  "workbench": createWorkbench,
  "zero-cost": createZeroCost,
  "evidence-observatory": createEvidenceObservatory,
  "handover-library": createHandoverLibrary,
  "thank-you": createThankYou,
  "app-tour": createAppTour,
  "game-tour": createGameTour,
  "constellation": createConstellation
};

// Scene registry. Every paper part and the closing scene has its own 3D set;
// the reusable foundation scene remains as a fallback only.
export function initScenes(sections, stageElement, initialPalette = {}) {
  sections.forEach((section, index) => {
    section.element.dataset.scene = section.id;
    section.element.dataset.sceneIndex = String(index);
  });

  const engine = createStageEngine({ container: stageElement, count: sections.length });
  const kit = createCharacterKit(engine);
  const scenes = sections.map((section, index) => {
    const factory = PART_SCENES[section.scene?.id] || createTestScene;
    const scene = factory({ engine, kit, index, section });
    engine.addSection(index, scene.group);
    return scene;
  });

  engine.setPalette(initialPalette);

  let currentIndex = 0;
  let currentLocal = 0;

  return {
    setActive(index, section) {
      currentIndex = index;
      currentLocal = 0;
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
      const floatIndex = progress * Math.max(1, sections.length - 1);
      currentIndex = Math.min(sections.length - 1, Math.max(0, Math.round(floatIndex)));
      currentLocal = Math.min(1, Math.max(0, (floatIndex - currentIndex + 0.35) / 0.7));
      scenes.forEach((scene, index) => {
        scene.setLocalProgress?.(index === currentIndex ? currentLocal : 0);
      });
    },
    setSectionProgress(index, progress) {
      if (index !== currentIndex) return;
      currentLocal = Math.min(1, Math.max(0, Number(progress) || 0));
      engine.setSectionProgress(index, currentLocal);
      scenes[index]?.setLocalProgress?.(currentLocal);
    },
    setPointer(x, y) {
      engine.setPointer(x, y);
    },
    getState() {
      const engineState = engine.getState();
      const active = engineState.activeIndex;
      return {
        ...engineState,
        activeSceneIndex: active,
        localProgress: Number(currentLocal.toFixed(3)),
        scenes: scenes.map((scene, index) => ({
          id: scene.group.name,
          companion: scene.companion,
          prop: scene.prop,
          localProgress: Number((index === active ? currentLocal : 0).toFixed(3)),
          ...(scene.getState?.() || {})
        }))
      };
    },
    getCharacters() {
      return {
        companions: scenes.flatMap(scene =>
          (scene.companionApis || [scene.companionApi]).filter(Boolean).map(api => api.getState())
        ),
        props: scenes.map(scene => scene.propApi?.getState()).filter(Boolean)
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
