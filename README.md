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
- Phase 3 paper Parts I–IV: condensed copy, cream detail cards and speaker notes
  for contacts, summary, background and objectives/outputs. Four distinct
  procedural sets replace the test scene — a team register desk, five needs
  converging into one portal, scattered study objects merging into CampusVerse
  with proposal and safety limits, and nine rotating objective cards leading to
  a delivery shelf. Each part has its own camera rail; companions react at
  scripted local progress points instead of only decorating the set. Section
  fades, header protection and responsive gutters were tuned with repeated
  `kiro-cli` screenshot reviews in `reference/phase3/`.
- Phase 3 verification: `npm run build` passes; headless Chromium checks at
  1920×1080, 1280×720, 800×360, 800×1280 and 360×800 report zero console or
  page errors, zero external requests and zero horizontal overflow. The built
  deck has one stage canvas, four distinct part stages, speaker notes, nine
  objective cards, seven outputs and no contact emails. Reduced motion keeps
  one canvas with no overflow, and `/characters/` still returns 200. Remaining
  `kiro-cli` caveat: a few 3D labels or subtitle lines can still overlap body
  copy at isolated mid-scroll positions; these are recorded as unsure rather
  than claimed visually perfect.
- Next: paper Parts V–VIII (methodology, cost, monitoring/evaluation and
  sustainability), then the full app tour from `RECON.md`.
