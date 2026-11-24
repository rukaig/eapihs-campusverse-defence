// Design briefs for the procedural three.js companions. Names, species, accents,
// and taglines come from the app's src/data/companions.js. Phase 2 builds the
// rounded-primitive models from these briefs; no model files are required.
export const companionDesigns = [
  { id: "moss", name: "Moss", species: "Garden turtle", accent: "sage", tagline: "Slow is a speed." },
  { id: "pip", name: "Pip", species: "Coral finch", accent: "coral", tagline: "Ask the bold question." },
  { id: "lumen", name: "Lumen", species: "Paper moth", accent: "gold", tagline: "Notice the small light." },
  { id: "juniper", name: "Juniper", species: "Lavender fox", accent: "lav", tagline: "Make room for the messy draft." }
];

export function getCompanionDesign(id) {
  return companionDesigns.find(item => item.id === id) || companionDesigns[0];
}
