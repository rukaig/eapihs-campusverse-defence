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

function renderTimelineGroup(label, items, config) {
  return `
    <div class="timeline-group">
      <p class="timeline-group-label">${escapeHtml(label)}</p>
      <ul class="timeline-items">
        ${items.map(item => `
          <li class="timeline-item ${item.state === "done" ? "is-done" : "is-pending"}">
            <span class="timeline-weeks">${escapeHtml(item.weeks)}</span>
            <span class="timeline-title">${escapeHtml(item.title)}</span>
            <span class="timeline-state">${escapeHtml(item.state === "done" ? config.doneLabel : config.pendingLabel)}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

function renderSectionExtras(section) {
  const blocks = [];
  if (section.scene?.generalText) {
    blocks.push(`
      <div class="objective-general">
        <p class="mini-label">${escapeHtml(section.scene.general)}</p>
        <p>${escapeHtml(section.scene.generalText)}</p>
      </div>
    `);
  }
  if (section.objectives) {
    blocks.push(`
      <ol class="objective-list">
        ${section.objectives.map(item => `
          <li class="objective-item">
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.line)}</span>
          </li>
        `).join("")}
      </ol>
    `);
  }
  if (section.outputs) {
    blocks.push(`
      <div class="output-shelf">
        <p class="mini-label">${escapeHtml(section.scene.shelfLabel)}</p>
        <ul class="output-list">
          ${section.outputs.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `);
  }
  if (section.timeline) {
    const config = section.scene;
    blocks.push(`
      <div class="timeline-panel">
        <p class="mini-label">${escapeHtml(config.railLabel)}</p>
        <div class="timeline-groups">
          ${renderTimelineGroup(config.preLabel, section.timeline.filter(item => item.group === "pre"), config)}
          ${renderTimelineGroup(config.buildLabel, section.timeline.filter(item => item.group === "build"), config)}
        </div>
      </div>
    `);
  }
  if (section.risks) {
    const config = section.scene;
    blocks.push(`
      <div class="risk-panel">
        <p class="mini-label">${escapeHtml(config.risksTitle)}</p>
        <div class="risk-headings" aria-hidden="true">
          <span>${escapeHtml(config.riskColumn)}</span>
          <span>${escapeHtml(config.solutionColumn)}</span>
        </div>
        <ol class="risk-list">
          ${section.risks.map(item => `
            <li class="risk-pair">
              <span class="risk-text">${escapeHtml(item.risk)}</span>
              <span class="risk-solution">${escapeHtml(item.solution)}</span>
            </li>
          `).join("")}
        </ol>
      </div>
    `);
  }
  if (section.criteria) {
    blocks.push(`
      <div class="criteria-panel">
        <p class="mini-label">${escapeHtml(section.scene.stationCount)}</p>
        <ol class="criteria-list">
          ${section.criteria.map(item => `
            <li class="criteria-station">
              <strong>${escapeHtml(item.station)}</strong>
              <span>${escapeHtml(item.status)}</span>
            </li>
          `).join("")}
        </ol>
      </div>
    `);
  }
  if (section.stillToProve) {
    blocks.push(`
      <div class="still-panel">
        <p class="mini-label">${escapeHtml(section.scene.stillLabel)}</p>
        <ul class="still-list">
          ${section.stillToProve.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `);
  }
  if (section.handover) {
    blocks.push(`
      <div class="handover-panel">
        <p class="mini-label">${escapeHtml(section.scene.handoverLabel)}</p>
        <ul class="handover-list">
          ${section.handover.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `);
  }
  return blocks.join("");
}

const { ui, sections } = content;
const reduced = Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
document.documentElement.dataset.motion = reduced ? "reduced" : "full";

const loading = document.createElement("div");
loading.id = "loading-screen";
loading.className = "loading-screen";
loading.innerHTML = `
  <div class="loading-inner">
    <p class="loading-eyebrow">${escapeHtml(ui.brand)}</p>
    <h2 class="loading-title">${escapeHtml(ui.loadingTitle)}</h2>
    <p class="loading-text">${escapeHtml(ui.loadingText)}</p>
    <span class="loading-line"><span></span></span>
  </div>
`;
document.body.prepend(loading);

const app = document.getElementById("app");

const stage = document.createElement("div");
stage.className = "stage";
stage.id = "stage";
stage.setAttribute("aria-hidden", "true");

const brand = document.createElement("div");
brand.className = "chrome brand";
brand.innerHTML = `
  <span class="brand-name">${escapeHtml(ui.brand)}</span>
  <span class="brand-sub">${escapeHtml(ui.editionTagline)}</span>
`;

const actions = document.createElement("div");
actions.className = "chrome chrome-actions";
actions.innerHTML = `
  <button class="chrome-button" type="button" data-open-theme>${escapeHtml(ui.themeButton)}</button>
  <button class="chrome-button" type="button" data-toggle-low>${escapeHtml(ui.lowGraphicsButton)}</button>
  <a class="chrome-button" href="./characters/">${escapeHtml(ui.charactersButton)}</a>
  <button class="chrome-button" type="button" data-open-help>${escapeHtml(ui.helpButton)}</button>
`;

const sideIndex = document.createElement("nav");
sideIndex.className = "chrome side-index";
sideIndex.setAttribute("aria-label", ui.sectionIndexLabel);
const chapterLabels = ui.chapterLabels || { IX: ui.appTourLabel };
let lastChapter = "";
const indexButtons = sections.map((section, index) => {
  const divider = section.chapter && section.chapter !== lastChapter
    ? `<p class="index-divider">${escapeHtml(chapterLabels[section.chapter] || section.chapter)}</p>`
    : "";
  lastChapter = section.chapter || "";
  return `
    ${divider}
    <button class="index-button${section.chapter ? " is-tour" : ""}" type="button" data-index="${index}" aria-current="false">
      <span class="numeral">${escapeHtml(section.numeral)}</span>
      <span class="index-name">${escapeHtml(section.title)}</span>
    </button>
  `;
}).join("");
sideIndex.innerHTML = `
  <p class="side-index-label">${escapeHtml(ui.sectionIndexLabel)}</p>
  ${indexButtons}
`;

const deck = document.createElement("main");
deck.className = "deck";
deck.innerHTML = sections.map((section, index) => `
  <section class="section" id="section-${escapeHtml(section.id)}" data-section-index="${index}" data-chapter="${escapeHtml(section.chapter || "")}">
    <div class="section-inner">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <div class="heading-row">
        ${index === 0 ? `<h1 class="title">${escapeHtml(section.title)}</h1>` : `<h2 class="title">${escapeHtml(section.title)}</h2>`}
        <p class="tagline">${escapeHtml(section.tagline)}</p>
      </div>
      ${section.status ? `<p class="status-chip ${escapeHtml(section.status.kind)}">${escapeHtml(section.status.text)}</p>` : ""}
      <p class="lead">${escapeHtml(section.lead)}</p>
      <ul class="points">${section.points.map(point => `<li class="point">${escapeHtml(point)}</li>`).join("")}</ul>
      ${renderSectionExtras(section)}
      <div class="cards">${renderCards(section.cards, ui)}</div>
    </div>
  </section>
`).join("");

const progress = document.createElement("div");
progress.className = "progress chrome";
progress.setAttribute("role", "progressbar");
progress.setAttribute("aria-label", ui.progressLabel);
progress.setAttribute("aria-valuemin", "0");
progress.setAttribute("aria-valuemax", String(sections.length - 1));
progress.setAttribute("aria-valuenow", "0");
progress.innerHTML = `
  <span class="progress-label">${escapeHtml(ui.progressLabel)}</span>
  <span class="progress-track"><span class="progress-fill"></span></span>
  <span class="progress-count">00 / ${String(sections.length).padStart(2, "0")}</span>
`;

const overlayRoot = document.createElement("div");
overlayRoot.innerHTML = renderOverlays(ui);

const statusPill = document.createElement("div");
statusPill.className = "status-pill";
statusPill.hidden = true;

app.append(stage, brand, actions, sideIndex, deck, progress, overlayRoot, statusPill);
document.title = `${sections[0].title}: ${sections[0].tagline}`;

initTheme();

const overlays = wireOverlays(overlayRoot, ui);
const sectionElements = [...deck.querySelectorAll(".section")];
const sectionsWithElements = sections.map((section, index) => ({ ...section, element: sectionElements[index] }));
sectionElements.forEach((element, index) => wireCards(element, sections[index].cards));

const sceneApi = initScenes(sectionsWithElements, stage, getActiveTheme().palette);
sceneApi.setReducedMotion(reduced);
subscribeToTheme(theme => sceneApi.updateTheme(theme));

let activeIndex = 0;
let scrollRatio = 0;
let holding = false;
let lowGraphics = reduced;

const progressFill = progress.querySelector(".progress-fill");
const progressCount = progress.querySelector(".progress-count");

function updateProgress(ratio) {
  const clamped = Math.min(1, Math.max(0, ratio));
  scrollRatio = clamped;
  progressFill.style.transform = `scaleX(${clamped})`;
  const index = Math.min(sections.length - 1, Math.max(0, activeIndex));
  progressCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}`;
  progress.setAttribute("aria-valuenow", String(index));
}

function updateStatus() {
  statusPill.hidden = !holding && !lowGraphics;
  statusPill.textContent = holding ? ui.holdButton : (lowGraphics ? ui.lowGraphicsOn : "");
}

function setActive(index) {
  if (index < 0 || index >= sections.length || index === activeIndex) return;
  activeIndex = index;
  updateProgress(scrollRatio);
  sideIndex.querySelectorAll("[data-index]").forEach(button => {
    button.setAttribute("aria-current", String(Number(button.dataset.index) === index));
  });
  overlays.setNotes(sections[index]);
  sceneApi.setActive(index, sections[index]);
}

function goTo(index) {
  if (index < 0 || index >= sections.length) return;
  sectionElements[index].scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
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

if (lowGraphics) {
  document.body.classList.add("low-graphics");
  sceneApi.setLowGraphics(true);
}
updateStatus();

window.addEventListener("pointermove", event => {
  sceneApi.setPointer(
    (event.clientX / window.innerWidth) * 2 - 1,
    (event.clientY / window.innerHeight) * 2 - 1
  );
}, { passive: true });

initControls({
  getIndex: () => activeIndex,
  count: sections.length,
  goTo,
  overlays,
  onToggleHold: toggleHold,
  onToggleLowGraphics: toggleLowGraphics
});

ScrollTrigger.create({
  trigger: document.body,
  start: "top top",
  end: "bottom bottom",
  invalidateOnRefresh: true,
  onUpdate: self => updateProgress(self.progress),
  onRefresh: self => updateProgress(self.progress)
});

sectionsWithElements.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section.element,
    start: "top 55%",
    end: "bottom 45%",
    onEnter: () => setActive(index),
    onEnterBack: () => setActive(index)
  });

  ScrollTrigger.create({
    trigger: section.element,
    start: "top top",
    end: "bottom bottom",
    invalidateOnRefresh: true,
    onUpdate: self => sceneApi.setSectionProgress(index, self.progress),
    onRefresh: self => sceneApi.setSectionProgress(index, self.progress)
  });

  const inner = section.element.querySelector(".section-inner");
  gsap.timeline({
    scrollTrigger: {
      trigger: section.element,
      start: "top 45%",
      end: "bottom 55%",
      scrub: true,
      invalidateOnRefresh: true
    }
  })
    .fromTo(inner,
      { opacity: 0, y: reduced ? 0 : 36 },
      { opacity: 1, y: 0, duration: 0.15, ease: "none" }
    )
    .to(inner, { opacity: 1, duration: 0.7 })
    .to(inner,
      { opacity: 0, y: reduced ? 0 : -28, duration: 0.15, ease: "none" }
    );
});

overlays.setNotes(sections[0]);
sideIndex.querySelector('[data-index="0"]').setAttribute("aria-current", "true");
document.body.classList.toggle("reduced-motion", reduced);
updateProgress(0);

function hideLoading() {
  loading.classList.add("is-hidden");
  window.setTimeout(() => loading.remove(), 650);
}

requestAnimationFrame(() => requestAnimationFrame(() => {
  const fonts = document.fonts?.ready || Promise.resolve();
  Promise.race([
    fonts,
    new Promise(resolve => window.setTimeout(resolve, 1400))
  ]).then(() => {
    ScrollTrigger.refresh();
    hideLoading();
  });
}));

window.addEventListener("beforeunload", () => sceneApi.dispose());

window.__campusversePresentation = {
  goTo,
  getActive: () => ({ index: activeIndex, section: sections[activeIndex].id }),
  getActiveTheme,
  getStageState: () => sceneApi.getState(),
  getCharacters: () => sceneApi.getCharacters(),
  toggleHold,
  toggleLowGraphics,
  scrollToProgress(ratio) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: max * ratio, behavior: "auto" });
  }
};
