import "../styles.css";
import "./characters.css";
import { createStageEngine } from "../scenes/stage-engine.js";
import {
  companionDesigns,
  propDesigns,
  createCharacterKit,
  createCompanion,
  createProp,
  moodLines
} from "../characters/index.js";
import {
  initTheme,
  subscribeToTheme,
  getActiveTheme,
  listColorThemes,
  listSubjectThemes,
  setColorTheme,
  setSubjectTheme
} from "../themes/theme-manager.js";

const app = document.getElementById("app");
const reduced = Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
document.documentElement.dataset.motion = reduced ? "reduced" : "full";
document.body.classList.toggle("reduced-motion", reduced);
initTheme();

const stage = document.createElement("div");
stage.className = "lab-stage";
stage.setAttribute("aria-hidden", "true");

const header = document.createElement("header");
header.className = "lab-header";
header.innerHTML = `
  <p class="lab-kicker">CampusVerse · character lab</p>
  <h1 class="lab-title">Four companions.<br />Nine study props.</h1>
  <p class="lab-subtitle">Procedural three.js builds from the app's real designs.</p>
  <a class="lab-back" href="../">Back to presentation</a>
`;

const panel = document.createElement("aside");
panel.className = "lab-panel";
panel.innerHTML = `
  <h2>Lab controls</h2>
  <div class="lab-section lab-select-row">
    <label for="lab-color-theme">Colour theme</label>
    <select id="lab-color-theme"></select>
    <label for="lab-subject-theme">Subject look</label>
    <select id="lab-subject-theme"></select>
  </div>
  <div class="lab-section">
    <h2>Companion API</h2>
    <div id="lab-companions"></div>
  </div>
  <div class="lab-section">
    <h2>Props on the stand</h2>
    <ul class="lab-prop-list">
      ${propDesigns.map(item => `<li>${item.name} — ${item.note}</li>`).join("")}
    </ul>
  </div>
`;

const hint = document.createElement("p");
hint.className = "lab-hint";
hint.innerHTML = `<strong>Head follow:</strong> move the mouse. <strong>Hold:</strong> press <kbd>H</kbd> to freeze the turntable. <strong>Theme:</strong> changes tint without erasing each character's identity.`;

app.append(stage, header, panel, hint);

const engine = createStageEngine({ container: stage, count: 1 });
const kit = createCharacterKit(engine);
const turntable = new engine.THREE.Group();
turntable.name = "character-turntable";
engine.addSection(0, turntable);
engine.setPalette(getActiveTheme().palette);
engine.setReducedMotion(reduced);
subscribeToTheme(theme => engine.setPalette(theme.palette || theme));

const colorSelect = panel.querySelector("#lab-color-theme");
const subjectSelect = panel.querySelector("#lab-subject-theme");
for (const theme of listColorThemes()) {
  const option = document.createElement("option");
  option.value = theme.id;
  option.textContent = `${theme.label}${theme.dark ? " · dark" : ""}`;
  colorSelect.appendChild(option);
}
for (const theme of listSubjectThemes()) {
  const option = document.createElement("option");
  option.value = theme.id;
  option.textContent = theme.name;
  subjectSelect.appendChild(option);
}
colorSelect.value = getActiveTheme().colorChoice;
subjectSelect.value = getActiveTheme().subjectChoice;
colorSelect.addEventListener("change", () => setColorTheme(colorSelect.value));
subjectSelect.addEventListener("change", () => setSubjectTheme(subjectSelect.value));

const platform = kit.mesh(kit.geometry.cylinder,
  kit.material("accentSoft", { mix: 0.3, roughness: 0.82 }),
  [0, -1.22, -0.2], [6.9, 0.16, 6.9]);
turntable.add(platform);
turntable.add(kit.mesh(kit.geometry.torus,
  kit.material("accent", { mix: 0.4, transparent: true, opacity: 0.72 }),
  [0, -1.13, -0.2], [6.9, 6.9, 1], [Math.PI / 2, 0, 0]));

const companionLayout = [
  { id: "moss", x: -3.7, z: 2.0, scale: 0.92 },
  { id: "pip", x: -1.25, z: 2.7, scale: 0.92 },
  { id: "lumen", x: 1.25, z: 2.7, scale: 0.92 },
  { id: "juniper", x: 3.7, z: 2.0, scale: 0.92 }
];

const propLayout = [
  { id: "student", x: -5.2, z: -3.15, scale: 0.66 },
  { id: "teacher", x: -2.6, z: -3.15, scale: 0.66 },
  { id: "phone", x: 0, z: -3.15, scale: 0.72 },
  { id: "laptop", x: 2.6, z: -3.15, scale: 0.66 },
  { id: "books", x: 5.2, z: -3.15, scale: 0.7 },
  { id: "calculator", x: -3.9, z: -1.15, scale: 0.7 },
  { id: "chess", x: -1.3, z: -1.15, scale: 0.72 },
  { id: "board", x: 1.3, z: -1.15, scale: 0.68 },
  { id: "star", x: 3.9, z: -1.15, scale: 0.72 }
];

const companions = new Map();
const props = new Map();
const walkToggled = new Map();

function addPedestal(holder, x, z, radius = 0.68) {
  holder.position.set(x, -1.02, z);
  turntable.add(holder);
  const pedestal = kit.mesh(kit.geometry.cylinder,
    kit.material("surface", { mix: 0.2, roughness: 0.78 }),
    [x, -1.11, z], [radius, 0.12, radius]);
  turntable.add(pedestal);
  turntable.add(kit.mesh(kit.geometry.torus,
    kit.material("accent", { mix: 0.4, transparent: true, opacity: 0.78 }),
    [x, -1.03, z], [radius, radius, 1], [Math.PI / 2, 0, 0]));
}

for (const item of companionLayout) {
  const design = companionDesigns.find(entry => entry.id === item.id);
  const companion = createCompanion(engine, kit, design.id);
  companion.group.scale.setScalar(item.scale);
  const holder = new engine.THREE.Group();
  holder.name = `stand-${design.id}`;
  holder.add(companion.group);
  addPedestal(holder, item.x, item.z, 0.78);
  const tag = kit.label(design.name, design.species);
  tag.sprite.position.set(0, 2.55, 0);
  holder.add(tag.sprite);
  companions.set(design.id, { api: companion, holder, design, tag });
  walkToggled.set(design.id, false);
  engine.registerUpdatable(({ delta }) => {
    if (delta) holder.rotation.y += delta * 0.1;
  });
}

for (const item of propLayout) {
  const design = propDesigns.find(entry => entry.id === item.id);
  const prop = createProp(engine, kit, design.id);
  prop.group.scale.setScalar(item.scale);
  const holder = new engine.THREE.Group();
  holder.name = `stand-${design.id}`;
  holder.add(prop.group);
  addPedestal(holder, item.x, item.z, 0.62);
  const tag = kit.label(design.name, design.note.split(";")[0]);
  tag.sprite.position.set(0, 1.5, 0);
  holder.add(tag.sprite);
  props.set(design.id, { api: prop, holder, design, tag });
  engine.registerUpdatable(({ delta }) => {
    if (delta) holder.rotation.y -= delta * 0.09;
  });
}

engine.registerUpdatable(({ delta }) => {
  if (delta) turntable.rotation.y += delta * 0.055;
});

const companionList = panel.querySelector("#lab-companions");
for (const design of companionDesigns) {
  const figure = document.createElement("div");
  figure.className = "lab-figure";
  figure.innerHTML = `
    <div class="lab-figure-name">${design.name}<span>${design.species}</span></div>
    <div class="lab-button-row">
      <button class="lab-button" type="button" data-mood="${design.id}" data-value="happy">Happy</button>
      <button class="lab-button" type="button" data-mood="${design.id}" data-value="thinking">Thinking</button>
      <button class="lab-button" type="button" data-mood="${design.id}" data-value="cheering">Cheering</button>
      <button class="lab-button" type="button" data-say="${design.id}">Say</button>
      <button class="lab-button" type="button" data-walk="${design.id}">Walk</button>
    </div>
  `;
  companionList.appendChild(figure);
}

function refreshMoodButtons() {
  panel.querySelectorAll("[data-mood]").forEach(button => {
    const current = companions.get(button.dataset.mood)?.api.getMood();
    button.setAttribute("aria-pressed", String(current === button.dataset.value));
  });
}

companionList.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = button.dataset.mood || button.dataset.say || button.dataset.walk;
  const entry = companions.get(id);
  if (!entry) return;
  if (button.dataset.mood) {
    entry.api.setMood(button.dataset.value);
  } else if (button.dataset.say) {
    const mood = entry.api.getMood();
    entry.api.say(moodLines[id]?.[mood] || entry.design.tagline);
  } else if (button.dataset.walk) {
    const toggled = !walkToggled.get(id);
    walkToggled.set(id, toggled);
    entry.api.walkTo(toggled ? [1.05, 0, -0.85] : [0, 0, 0]);
  }
  refreshMoodButtons();
});

refreshMoodButtons();

window.addEventListener("pointermove", event => {
  engine.setPointer(
    (event.clientX / window.innerWidth) * 2 - 1,
    (event.clientY / window.innerHeight) * 2 - 1
  );
}, { passive: true });

let holding = false;
function toggleHold() {
  holding = !holding;
  engine.setHold(holding);
  hint.querySelector("strong + strong")?.toggleAttribute("hidden", holding);
}
window.addEventListener("keydown", event => {
  if (event.key.toLowerCase() === "h") toggleHold();
});

window.__characterLab = {
  companions: Object.fromEntries([...companions].map(([id, entry]) => [id, entry.api])),
  props: Object.fromEntries([...props].map(([id, entry]) => [id, entry.api])),
  setMood(id, mood) {
    const entry = companions.get(id);
    if (!entry) return null;
    const result = entry.api.setMood(mood);
    refreshMoodButtons();
    return result;
  },
  say(id, text) {
    return companions.get(id)?.api.say(text) || null;
  },
  walkTo(id, position) {
    return companions.get(id)?.api.walkTo(position) || null;
  },
  toggleHold,
  getState() {
    return {
      ...engine.getState(),
      companions: [...companions.values()].map(entry => entry.api.getState()),
      props: [...props.values()].map(entry => entry.api.getState())
    };
  }
};

window.addEventListener("beforeunload", () => {
  for (const entry of companions.values()) {
    entry.api.dispose();
    entry.tag.dispose();
  }
  for (const entry of props.values()) {
    entry.api.dispose();
    entry.tag.dispose();
  }
  kit.dispose();
  engine.dispose();
});
