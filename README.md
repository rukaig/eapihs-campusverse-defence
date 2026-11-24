# EAPIHS CampusVerse — scroll-driven defence presentation

Offline Vite presentation for the innovation-paper defence. All slide copy and
speaker notes live in `src/content.js`.

## Run

```bash
npm install
npm run dev
```

Build a static folder that works offline when served from any plain static host:

```bash
npm run build
npm run preview
```

`vite.config.js` uses `base: "./"`, so `dist/` can be copied into a subfolder.

## Theme data

`src/themes/registry.js` is generated from the actual CampusVerse app source:

```bash
npm run themes:extract
```

It copies the app's 12 colour choices plus "Follow device", and all 16 subject
looks with their light/dark token values. The presentation never fetches them
at runtime.

## Phase status

- Phase 0: recon in `RECON.md` (paper summary, video style analysis, scene plan,
  full app-source inventory and paper-vs-source differences).
- Phase 1 foundation: offline Vite scaffold, persistent three.js stage, scroll
  camera rail, mouse parallax, fog/lights, loading screen, app-derived theme
  registry with live recolour, video-style UI shell, progress indicator,
  presenter controls, and one reusable test scene registered for all sections.
- Phase 2 characters: procedural 3D Moss, Pip, Lumen and Juniper built from the
  app's SVG shapes and exact source data, with idle motion, blink, head-follow,
  three moods, speech bubbles, `say()` / `setMood()` / `walkTo()`, theme-aware
  identity colours, plus nine original study props. Debug turntable is at
  `/characters` in dev and `/characters/` in the built folder.
- Next: replace the test scene with the eight paper-part scenes and full app
  tour from `RECON.md`.
