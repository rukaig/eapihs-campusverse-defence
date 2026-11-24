// Development-only generator. Reads the CampusVerse app's real theme sources
// and writes src/themes/registry.js. The built presentation never reads these
// files at runtime; everything is bundled locally.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const presentationRoot = resolve(here, "..");
const appRoot = resolve(process.env.APP_SOURCE || resolve(presentationRoot, ".."));

const tokenCss = readFileSync(resolve(appRoot, "src/styles/tokens.css"), "utf8");
const subjectCss = readFileSync(resolve(appRoot, "src/styles/themes/index.css"), "utf8");
const uiJs = readFileSync(resolve(appRoot, "src/app/ui.js"), "utf8");

function parseBlocks(source) {
  const css = source.replace(/\/\*[\s\S]*?\*\//g, "");
  const blocks = [];
  const pattern = /([^{}]+)\{([^{}]*)\}/g;
  let match;
  while ((match = pattern.exec(css))) {
    const selector = match[1].trim().replace(/\s+/g, " ");
    const declarations = {};
    for (const line of match[2].split(";")) {
      const colon = line.indexOf(":");
      if (colon < 0) continue;
      const name = line.slice(0, colon).trim();
      const value = line.slice(colon + 1).trim();
      if (name.startsWith("--") && value) declarations[name] = value;
    }
    blocks.push({ selector, declarations });
  }
  return blocks;
}

function resolveVars(value, scopes) {
  let output = value;
  for (let pass = 0; pass < 6; pass += 1) {
    const next = output.replace(/var\((--[a-zA-Z0-9-]+)(?:\s*,\s*([^)]*))?\)/g, (all, name, fallback) => {
      for (const scope of scopes) {
        if (scope[name] !== undefined) return scope[name];
      }
      return fallback !== undefined ? fallback.trim() : all;
    });
    if (next === output) break;
    output = next;
  }
  return output;
}

function mergedDeclarations(scopes) {
  const merged = {};
  for (const scope of scopes) Object.assign(merged, scope);
  const out = {};
  for (const [name, raw] of Object.entries(merged)) out[name] = resolveVars(raw, scopes);
  return out;
}

const tokenBlocks = parseBlocks(tokenCss);
const rootTokens = tokenBlocks.find(block => block.selector === ":root")?.declarations || {};
const colorTokenBlocks = {};
for (const block of tokenBlocks) {
  const found = block.selector.match(/html\[data-theme="([^"]+)"\]/);
  if (found) colorTokenBlocks[found[1]] = block.declarations;
}

const themeChoicePattern = /\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)"\s*\}/g;
const colorThemes = [];
let choiceMatch;
while ((choiceMatch = themeChoicePattern.exec(uiJs))) {
  const [, id, label] = choiceMatch;
  const modeDeclarations = colorTokenBlocks[id] || {};
  const palette = mergedDeclarations([rootTokens, modeDeclarations]);
  colorThemes.push({
    id,
    label,
    dark: id === "dark" || id === "midnight" || id === "contrast" || id === "moon" || id === "aurora",
    palette: {
      bg: palette["--bg"],
      bgDeep: palette["--bg-deep"],
      surface: palette["--surface"],
      surface2: palette["--surface-2"],
      text: palette["--text"],
      textStrong: palette["--text-strong"],
      textMuted: palette["--text-muted"],
      line: palette["--line"],
      lineStrong: palette["--line-strong"],
      link: palette["--link"],
      accent: palette["--accent"],
      accentStrong: palette["--accent-strong"],
      accentSoft: palette["--accent-soft"],
      danger: palette["--danger"],
      warning: palette["--warning"],
      success: palette["--success"],
      focus: palette["--focus"],
      onDark: palette["--on-dark"],
      onLight: palette["--on-light"],
      onAccent: palette["--on-accent"],
      sage600: palette["--sage-600"],
      lav600: palette["--lav-600"],
      coral600: palette["--coral-600"],
      gold600: palette["--gold-600"],
      blue700: palette["--blue-700"]
    }
  });
}

const subjectMetaPattern = /\{\s*id:\s*"([^"]+)",\s*family:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*preview:\s*\[([^\]]+)\],\s*meta:\s*\{\s*light:\s*"([^"]+)",\s*dark:\s*"([^"]+)"\s*\}\s*\}/g;
const subjectThemes = [];
let subjectMatch;
while ((subjectMatch = subjectMetaPattern.exec(uiJs))) {
  const [, id, family, name, description, previewRaw, light, dark] = subjectMatch;
  subjectThemes.push({
    id,
    family,
    name,
    description,
    previewColors: previewRaw.match(/#[0-9a-fA-F]{3,8}/g) || [],
    metaThemeColor: { light, dark }
  });
}

const subjectBlocks = parseBlocks(subjectCss);
const baseBySubject = {};
const modeBySubject = {};
for (const block of subjectBlocks) {
  const subject = block.selector.match(/html\[data-subject="([^"]+)"\]/);
  if (!subject) continue;
  const id = subject[1];
  const mode = block.selector.match(/\[data-mode="(light|dark)"\]/);
  if (mode) {
    modeBySubject[id] ||= {};
    modeBySubject[id][mode[1]] = block.declarations;
  } else {
    baseBySubject[id] ||= {};
    Object.assign(baseBySubject[id], block.declarations);
  }
}

const subjectPalettes = {};
for (const theme of subjectThemes) {
  subjectPalettes[theme.id] = {};
  for (const mode of ["light", "dark"]) {
    const modeBase = mode === "dark" ? (colorTokenBlocks.dark || {}) : {};
    const palette = mergedDeclarations([
      rootTokens,
      modeBase,
      baseBySubject[theme.id] || {},
      modeBySubject[theme.id]?.[mode] || {}
    ]);
    subjectPalettes[theme.id][mode] = {
      bg: palette["--bg"],
      bgDeep: palette["--bg-deep"],
      surface: palette["--surface"],
      surface2: palette["--surface-2"],
      text: palette["--text"],
      textStrong: palette["--text-strong"],
      textMuted: palette["--text-muted"],
      line: palette["--line"],
      accent: palette["--accent"],
      accentStrong: palette["--accent-strong"],
      accentSoft: palette["--accent-soft"],
      onAccent: palette["--on-accent"],
      sage600: palette["--sage-600"],
      lav600: palette["--lav-600"],
      coral600: palette["--coral-600"],
      gold600: palette["--gold-600"],
      blue700: palette["--blue-700"]
    };
  }
}

if (colorThemes.length !== 13 || subjectThemes.length !== 16) {
  throw new Error(`Expected 13 colour choices and 16 subject looks, got ${colorThemes.length} and ${subjectThemes.length}`);
}

const output = `// Generated from the CampusVerse app source by scripts/extract-app-themes.mjs.
// Do not hand-edit; rerun \`npm run themes:extract\` after the app changes.
export const colorThemes = ${JSON.stringify(colorThemes, null, 2)};

export const subjectThemes = ${JSON.stringify(subjectThemes, null, 2)};

export const subjectPalettes = ${JSON.stringify(subjectPalettes, null, 2)};

export const colorThemeById = Object.fromEntries(colorThemes.map(theme => [theme.id, theme]));
export const subjectThemeById = Object.fromEntries(subjectThemes.map(theme => [theme.id, theme]));
`;

mkdirSync(resolve(presentationRoot, "src/themes"), { recursive: true });
writeFileSync(resolve(presentationRoot, "src/themes/registry.js"), output, "utf8");
console.log(`Wrote registry: ${colorThemes.length} colour choices, ${subjectThemes.length} subject looks.`);
