// Design briefs transcribed from the app source recorded in RECON.md.
// Names, species, accents and taglines are not invented for the presentation.

export const companionDesigns = [
  { id: "moss", name: "Moss", species: "Garden turtle", accent: "sage", tagline: "Slow is a speed." },
  { id: "pip", name: "Pip", species: "Coral finch", accent: "coral", tagline: "Ask the bold question." },
  { id: "lumen", name: "Lumen", species: "Paper moth", accent: "gold", tagline: "Notice the small light." },
  { id: "juniper", name: "Juniper", species: "Lavender fox", accent: "lav", tagline: "Make room for the messy draft." }
];

export const propDesigns = [
  { id: "student", name: "Student", note: "Generic, original study-day figure" },
  { id: "teacher", name: "Teacher", note: "Generic, original classroom figure" },
  { id: "phone", name: "Phone", note: "Small offline study screen" },
  { id: "laptop", name: "Laptop", note: "Open workbench computer" },
  { id: "books", name: "Books", note: "Stack of study books" },
  { id: "calculator", name: "Calculator", note: "Safe parser, no live expression" },
  { id: "chess", name: "Chess piece", note: "Practice pawn; no rating or rank" },
  { id: "board", name: "Floating board", note: "Skateboard-style hover prop" },
  { id: "star", name: "Star badge", note: "Recognition mark, not a trophy" }
];

export function getCompanionDesign(id) {
  return companionDesigns.find(item => item.id === id) || companionDesigns[0];
}

export function getPropDesign(id) {
  return propDesigns.find(item => item.id === id) || propDesigns[0];
}
