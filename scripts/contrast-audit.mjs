import { colorThemes, colorThemeById, subjectThemes, subjectPalettes } from "../src/themes/registry.js";

function rgb(hex) {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map(c => c + c).join("") : value;
  return [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16) / 255);
}

function luminance(hex) {
  const [r, g, b] = rgb(hex).map(channel => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

const pairs = [
  ["text", "bg", 4.5],
  ["textMuted", "bg", 4.5],
  ["text", "surface", 4.5],
  ["textMuted", "surface", 4.5],
  ["onAccent", "accent", 4.5],
  ["onAccent", "accentStrong", 4.5],
];

const failures = [];
let combinations = 0;
for (const theme of colorThemes) {
  const resolved = theme.id === "system" ? "light" : theme.id;
  const mode = colorThemeById[resolved]?.dark ? "dark" : "light";
  for (const subject of subjectThemes) {
    combinations += 1;
    const palette = { ...(colorThemeById[resolved]?.palette || {}), ...(subjectPalettes[subject.id]?.[mode] || {}) };
    for (const [fg, bg, min] of pairs) {
      if (!palette[fg] || !palette[bg]) continue;
      const value = ratio(palette[fg], palette[bg]);
      if (value < min) {
        failures.push({
          theme: theme.id,
          subject: subject.id,
          mode,
          pair: `${fg}/${bg}`,
          ratio: Number(value.toFixed(2)),
          min
        });
      }
    }
  }
}

console.log(JSON.stringify({ combinations, checks: combinations * pairs.length, failures: failures.length, examples: failures.slice(0, 20), byTheme: [...new Set(failures.map(f => f.theme))] }, null, 2));
