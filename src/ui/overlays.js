import { escapeHtml } from "./dom.js";
import {
  getActiveTheme,
  listColorThemes,
  listSubjectThemes,
  setColorTheme,
  setSubjectTheme,
  subscribeToTheme
} from "../themes/theme-manager.js";

function overlay(id, title, body, closeLabel) {
  return `
    <section class="overlay" id="overlay-${id}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="overlay-panel">
        <div class="overlay-head">
          <h2 class="overlay-title">${escapeHtml(title)}</h2>
          <button class="overlay-close" type="button" data-close-overlay="${id}" aria-label="${escapeHtml(closeLabel)}">×</button>
        </div>
        <div class="overlay-body">${body}</div>
      </div>
    </section>
  `;
}

export function renderOverlays(ui) {
  const colorButtons = listColorThemes().map(theme => `
    <button class="theme-option" type="button" data-color-theme="${escapeHtml(theme.id)}" aria-pressed="false">
      <span class="swatch" style="background:${escapeHtml(theme.dark ? "#0d1720" : "#fbf6ec")}"></span>
      <span>${escapeHtml(theme.label)}</span>
    </button>
  `).join("");

  const subjectButtons = listSubjectThemes().map(theme => {
    const swatch = theme.previewColors[0] || "#fbf6ec";
    return `
      <button class="theme-option" type="button" data-subject-theme="${escapeHtml(theme.id)}" aria-pressed="false" title="${escapeHtml(theme.family)}">
        <span class="swatch" style="background:${escapeHtml(swatch)}"></span>
        <span>${escapeHtml(theme.name)}</span>
      </button>
    `;
  }).join("");

  const themeBody = `
    <div class="theme-groups">
      <div>
        <h3 class="theme-group-title">${escapeHtml(ui.colourThemeTitle)}</h3>
        <div class="theme-grid">${colorButtons}</div>
      </div>
      <div>
        <h3 class="theme-group-title">${escapeHtml(ui.subjectLookTitle)}</h3>
        <div class="theme-grid">${subjectButtons}</div>
      </div>
    </div>
  `;

  const notesBody = `<div data-notes-body>${escapeHtml(ui.notesUnavailable)}</div>`;
  const timerBody = `
    <p class="timer-display" data-timer-display>00:00</p>
    <p class="timer-status" data-timer-status>${escapeHtml(ui.timerPaused)}</p>
    <div class="timer-actions">
      <button type="button" data-timer-toggle>${escapeHtml(ui.timerStart)}</button>
      <button type="button" data-timer-reset>${escapeHtml(ui.timerReset)}</button>
    </div>
  `;
  const helpBody = `<ul class="notes-list">${ui.helpLines.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`;

  return [
    overlay("theme", ui.themeTitle, themeBody, ui.close),
    overlay("notes", ui.notesTitle, notesBody, ui.close),
    overlay("timer", ui.timerTitle, timerBody, ui.close),
    overlay("help", ui.helpTitle, helpBody, ui.close)
  ].join("");
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function wireOverlays(root, ui) {
  const overlays = new Map(
    ["theme", "notes", "timer", "help"].map(id => [id, root.querySelector(`#overlay-${id}`)])
  );

  let elapsed = 0;
  let running = false;
  let interval = null;

  const display = root.querySelector("[data-timer-display]");
  const status = root.querySelector("[data-timer-status]");
  const toggle = root.querySelector("[data-timer-toggle]");
  const reset = root.querySelector("[data-timer-reset]");
  const notesBody = root.querySelector("[data-notes-body]");

  function renderTimer() {
    display.textContent = formatTime(elapsed);
    status.textContent = running ? ui.timerRunning : ui.timerPaused;
    toggle.textContent = running ? ui.timerPause : ui.timerStart;
  }

  function open(name) {
    if (!overlays.has(name)) return;
    closeAll();
    overlays.get(name).classList.add("is-open");
  }

  function close(name) {
    overlays.get(name)?.classList.remove("is-open");
  }

  function closeAll() {
    overlays.forEach(node => node.classList.remove("is-open"));
  }

  function isOpen() {
    return [...overlays.values()].some(node => node.classList.contains("is-open"));
  }

  root.querySelectorAll("[data-close-overlay]").forEach(button => {
    button.addEventListener("click", () => close(button.dataset.closeOverlay));
  });

  overlays.forEach((node, id) => {
    node.addEventListener("click", event => {
      if (event.target === node) close(id);
    });
  });

  toggle.addEventListener("click", () => {
    running = !running;
    if (running) {
      interval = window.setInterval(() => {
        elapsed += 1;
        renderTimer();
      }, 1000);
    } else if (interval) {
      window.clearInterval(interval);
      interval = null;
    }
    renderTimer();
  });

  reset.addEventListener("click", () => {
    elapsed = 0;
    if (interval) window.clearInterval(interval);
    interval = null;
    running = false;
    renderTimer();
  });

  function syncThemeButtons() {
    const active = getActiveTheme();
    root.querySelectorAll("[data-color-theme]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.colorTheme === active.colorChoice));
    });
    root.querySelectorAll("[data-subject-theme]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.subjectTheme === active.subjectChoice));
    });
  }

  root.querySelectorAll("[data-color-theme]").forEach(button => {
    button.addEventListener("click", () => {
      setColorTheme(button.dataset.colorTheme);
      syncThemeButtons();
    });
  });

  root.querySelectorAll("[data-subject-theme]").forEach(button => {
    button.addEventListener("click", () => {
      setSubjectTheme(button.dataset.subjectTheme);
      syncThemeButtons();
    });
  });

  subscribeToTheme(syncThemeButtons);
  renderTimer();

  return {
    open,
    close,
    closeAll,
    isOpen,
    setNotes(section) {
      notesBody.innerHTML = (section.notes || [])
        .map(line => `<p>${escapeHtml(line)}</p>`)
        .join("") || escapeHtml(ui.notesUnavailable);
    }
  };
}
