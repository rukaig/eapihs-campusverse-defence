import {
  colorThemes,
  colorThemeById,
  subjectThemes,
  subjectPalettes
} from "./registry.js";

const COLOR_KEY = "cv:theme";
const SUBJECT_KEY = "cv:subject";
const listeners = new Set();

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be blocked; the presentation still works for this session.
  }
}

function systemPrefersDark() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
}

export function resolveColorChoice(choice) {
  if (choice === "system") return systemPrefersDark() ? "dark" : "light";
  return colorThemeById[choice] ? choice : "light";
}

let colorChoice = colorThemeById[readStorage(COLOR_KEY)] ? readStorage(COLOR_KEY) : "light";
let subjectChoice = subjectPalettes[readStorage(SUBJECT_KEY)] ? readStorage(SUBJECT_KEY) : "campus";

function modeFor(choice = colorChoice) {
  return colorThemeById[resolveColorChoice(choice)]?.dark ? "dark" : "light";
}

function paletteFor() {
  const resolved = resolveColorChoice(colorChoice);
  const mode = modeFor();
  const base = colorThemeById[resolved]?.palette || {};
  const subject = subjectPalettes[subjectChoice]?.[mode] || {};
  return { ...base, ...subject };
}

function cssVarName(key) {
  return "--cv-" + key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

function applyPalette() {
  const root = document.documentElement;
  const palette = paletteFor();
  const mode = modeFor();
  root.dataset.theme = resolveColorChoice(colorChoice);
  root.dataset.themeChoice = colorChoice;
  root.dataset.subject = subjectChoice;
  root.dataset.mode = mode;

  for (const [key, value] of Object.entries(palette)) {
    if (typeof value === "string" && value) root.style.setProperty(cssVarName(key), value);
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  const subjectMeta = subjectThemes.find(theme => theme.id === subjectChoice);
  if (meta && subjectMeta?.metaThemeColor?.[mode]) {
    meta.setAttribute("content", subjectMeta.metaThemeColor[mode]);
  }

  for (const listener of listeners) listener(getActiveTheme());
}

export function getActiveTheme() {
  return {
    colorChoice,
    colorResolved: resolveColorChoice(colorChoice),
    subjectChoice,
    mode: modeFor(),
    label: colorThemeById[colorChoice]?.label || colorThemes[0].label,
    subjectLabel: subjectThemes.find(theme => theme.id === subjectChoice)?.name || "Campus",
    palette: paletteFor()
  };
}

export function setColorTheme(choice) {
  if (choice !== "system" && !colorThemeById[choice]) return;
  colorChoice = choice;
  writeStorage(COLOR_KEY, choice);
  applyPalette();
}

export function setSubjectTheme(choice) {
  if (!subjectPalettes[choice]) return;
  subjectChoice = choice;
  writeStorage(SUBJECT_KEY, choice);
  applyPalette();
}

export function subscribeToTheme(listener) {
  listeners.add(listener);
  listener(getActiveTheme());
  return () => listeners.delete(listener);
}

export function listColorThemes() {
  return colorThemes.map(({ id, label, dark, palette }) => ({ id, label, dark, palette }));
}

export function listSubjectThemes() {
  return subjectThemes.map(({ id, name, family, previewColors }) => ({ id, name, family, previewColors }));
}

export function initTheme() {
  applyPalette();
  window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
    if (colorChoice === "system") applyPalette();
  });
}

export { colorThemeById, subjectThemeById } from "./registry.js";
