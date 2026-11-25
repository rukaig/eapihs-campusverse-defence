import "../styles.css";
import "./presenter.css";
import content from "../content.js";
import { escapeHtml } from "../ui/dom.js";
import { initTheme } from "../themes/theme-manager.js";

const { ui, sections, qaMap, unverified } = content;
initTheme();

document.title = `${ui.presenterTitle} · ${ui.brand}`;

const app = document.getElementById("app");
const notes = sections.map(section => `
  <li class="presenter-note">
    <h3 class="presenter-note-title">
      <span class="presenter-numeral">${escapeHtml(section.numeral)}</span>
      <span>${escapeHtml(section.title)}</span>
    </h3>
    <ul class="presenter-note-list">
      ${(section.notes || []).map(line => `<li>${escapeHtml(line)}</li>`).join("")}
    </ul>
  </li>
`).join("");

const qa = qaMap.map(item => `
  <li class="presenter-qa-item">
    <h3 class="presenter-qa-question">${escapeHtml(item.question)}</h3>
    <p class="presenter-qa-answer">${escapeHtml(item.answer)}</p>
    <p class="presenter-qa-meta">
      <span class="presenter-qa-status">${escapeHtml(item.status)}</span>
      <span>${escapeHtml(item.evidence)}</span>
    </p>
  </li>
`).join("");

const gaps = unverified.map(item => `<li>${escapeHtml(item)}</li>`).join("");

app.innerHTML = `
  <a class="presenter-skip" href="#presenter-main">${escapeHtml(ui.skipLink)}</a>
  <header class="presenter-header">
    <p class="presenter-kicker">${escapeHtml(ui.brand)}</p>
    <h1 class="presenter-title">${escapeHtml(ui.presenterTitle)}</h1>
    <p class="presenter-subtitle">${escapeHtml(ui.presenterSubtitle)}</p>
    <nav class="presenter-actions" aria-label="${escapeHtml(ui.sectionIndexLabel)}">
      <a class="presenter-button" href="../">${escapeHtml(ui.presenterBack)}</a>
      <button class="presenter-button" type="button" data-print>${escapeHtml(ui.presenterPrint)}</button>
    </nav>
    <p class="presenter-print-note">${escapeHtml(ui.presenterPrintNote)}</p>
  </header>
  <main class="presenter-main" id="presenter-main">
    <section class="presenter-block" aria-labelledby="presenter-notes-heading">
      <h2 class="presenter-heading" id="presenter-notes-heading">${escapeHtml(ui.presenterNotesHeading)}</h2>
      <ol class="presenter-notes">${notes}</ol>
    </section>
    <section class="presenter-block" aria-labelledby="presenter-qa-heading">
      <h2 class="presenter-heading" id="presenter-qa-heading">${escapeHtml(ui.presenterQaHeading)}</h2>
      <p class="presenter-intro">${escapeHtml(ui.presenterQaIntro)}</p>
      <ol class="presenter-qa">${qa}</ol>
    </section>
    <section class="presenter-block" aria-labelledby="presenter-unverified-heading">
      <h2 class="presenter-heading" id="presenter-unverified-heading">${escapeHtml(ui.presenterUnverifiedHeading)}</h2>
      <p class="presenter-intro">${escapeHtml(ui.presenterUnverifiedIntro)}</p>
      <ul class="presenter-unverified">${gaps}</ul>
    </section>
  </main>
  <footer class="presenter-footer">${escapeHtml(ui.presenterFooter)}</footer>
`;

app.querySelector("[data-print]").addEventListener("click", () => window.print());

window.__presenterKit = {
  sectionCount: sections.length,
  noteCount: sections.reduce((total, section) => total + (section.notes?.length || 0), 0),
  qaCount: qaMap.length,
  unverifiedCount: unverified.length
};
