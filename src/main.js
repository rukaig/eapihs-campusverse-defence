import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "./content.js";
import { escapeHtml } from "./ui/dom.js";
import { renderCards, wireCards } from "./ui/cards.js";
import { renderOverlays, wireOverlays } from "./ui/overlays.js";
import { initControls } from "./ui/controls.js";
import { initTheme, subscribeToTheme, getActiveTheme } from "./themes/theme-manager.js";
import { initScenes } from "./scenes/index.js";

gsap.registerPlugin(ScrollTrigger);

const { ui, sections } = content;
const app = document.getElementById("app");
const stage = document.createElement("div");
stage.className = "stage";
stage.id = "stage";
stage.setAttribute("aria-hidden", "true");

const brand = document.createElement("div");
brand.className = "chrome brand";
brand.innerHTML = escapeHtml(ui.brand);

const actions = document.createElement("div");
actions.className = "chrome chrome-actions";
actions.innerHTML = `
  <button class="chrome-button" type="button" data-open-theme>${escapeHtml(ui.themeButton)}</button>
  <button class="chrome-button" type="button" data-toggle-low>${escapeHtml(ui.lowGraphicsButton)}</button>
  <button class="chrome-button" type="button" data-open-help>${escapeHtml(ui.helpButton)}</button>
`;

const sideIndex = document.createElement("nav");
sideIndex.className = "chrome side-index";
sideIndex.setAttribute("aria-label", ui.sectionIndexLabel);
sideIndex.innerHTML = `
  <p class="side-index-label">${escapeHtml(ui.sectionIndexLabel)}</p>
  ${sections.map((section, index) => `
    <button class="index-button" type="button" data-index="${index}" aria-current="false">
      <span class="numeral">${escapeHtml(section.numeral)}</span>
      <span class="index-name">${escapeHtml(section.title)}</span>
    </button>
  `).join("")}
`;

const deck = document.createElement("main");
deck.className = "deck";
deck.innerHTML = sections.map((section, index) => `
  <section class="section" id="section-${escapeHtml(section.id)}" data-section-index="${index}">
    <div class="section-inner">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <div class="heading-row">
        ${index === 0 ? `<h1 class="title">${escapeHtml(section.title)}</h1>` : `<h2 class="title">${escapeHtml(section.title)}</h2>`}
        <p class="tagline">${escapeHtml(section.tagline)}</p>
      </div>
      <p class="lead">${escapeHtml(section.lead)}</p>
      <ul class="points">${section.points.map(point => `<li class="point">${escapeHtml(point)}</li>`).join("")}</ul>
      <div class="cards">${renderCards(section.cards, ui)}</div>
    </div>
  </section>
`).join("");

const overlayRoot = document.createElement("div");
overlayRoot.innerHTML = renderOverlays(ui);

const statusPill = document.createElement("div");
statusPill.className = "status-pill";
statusPill.hidden = true;

app.append(stage, brand, actions, sideIndex, deck, overlayRoot, statusPill);
document.title = `${sections[0].title}: ${sections[0].tagline}`;

initTheme();

const overlays = wireOverlays(overlayRoot, ui);
const sectionElements = [...deck.querySelectorAll(".section")];
const sectionsWithElements = sections.map((section, index) => ({ ...section, element: sectionElements[index] }));
sectionElements.forEach((element, index) => wireCards(element, sections[index].cards));

const sceneApi = initScenes(sectionsWithElements, stage);
subscribeToTheme(theme => sceneApi.updateTheme(theme));

let activeIndex = 0;
let holding = false;
let lowGraphics = false;

function updateStatus() {
  statusPill.hidden = !holding && !lowGraphics;
  statusPill.textContent = holding ? ui.holdButton : (lowGraphics ? ui.lowGraphicsOn : "");
}

function setActive(index) {
  if (index < 0 || index >= sections.length || index === activeIndex) return;
  activeIndex = index;
  sideIndex.querySelectorAll("[data-index]").forEach(button => {
    button.setAttribute("aria-current", String(Number(button.dataset.index) === index));
  });
  overlays.setNotes(sections[index]);
  sceneApi.setActive(index, sections[index]);
}

function goTo(index) {
  if (index < 0 || index >= sections.length) return;
  sectionElements[index].scrollIntoView({
    behavior: document.documentElement.dataset.motion === "reduced" ? "auto" : "smooth",
    block: "start"
  });
  setActive(index);
}

sideIndex.querySelectorAll("[data-index]").forEach(button => {
  button.addEventListener("click", () => goTo(Number(button.dataset.index)));
});

actions.querySelector("[data-open-theme]").addEventListener("click", () => overlays.open("theme"));
actions.querySelector("[data-open-help]").addEventListener("click", () => overlays.open("help"));
actions.querySelector("[data-toggle-low]").addEventListener("click", toggleLowGraphics);

function toggleHold() {
  holding = !holding;
  document.body.classList.toggle("hold-scene", holding);
  sceneApi.setHold(holding);
  updateStatus();
}

function toggleLowGraphics() {
  lowGraphics = !lowGraphics;
  document.body.classList.toggle("low-graphics", lowGraphics);
  sceneApi.setLowGraphics(lowGraphics);
  updateStatus();
}

initControls({
  getIndex: () => activeIndex,
  count: sections.length,
  goTo,
  overlays,
  onToggleHold: toggleHold,
  onToggleLowGraphics: toggleLowGraphics
});

sectionsWithElements.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section.element,
    start: "top 55%",
    end: "bottom 45%",
    onEnter: () => setActive(index),
    onEnterBack: () => setActive(index)
  });
});

const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
document.documentElement.dataset.motion = reduced ? "reduced" : "full";
document.body.classList.toggle("reduced-motion", Boolean(reduced));

if (reduced) {
  document.querySelectorAll(".index-button").forEach(button => {
    button.addEventListener("click", () => scrollTo(0, sectionElements[Number(button.dataset.index)].offsetTop));
  });
}

overlays.setNotes(sections[0]);
sideIndex.querySelector('[data-index="0"]').setAttribute("aria-current", "true");
document.fonts?.ready.then(() => ScrollTrigger.refresh());

window.addEventListener("beforeunload", () => sceneApi.dispose());

window.__campusversePresentation = {
  goTo,
  getActive: () => ({ index: activeIndex, section: sections[activeIndex].id }),
  getActiveTheme,
  toggleHold,
  toggleLowGraphics
};
