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
- Phase 4 paper Parts V–VIII and close: condensed copy, cream detail cards and
  speaker notes for methodology, cost, monitoring/evaluation and sustainability.
  Part V shows an eight-entry twelve-week rail split into pre-implementation and
  implementation, with five done and three pending items, plus eight risk/solution
  pairs on its workbench set. Part VI is a calm PHP 0 scene with free-tier and
  existing-device notes and an approval gate; it deliberately omits the paper's
  bracketed price rows. Part VII is an evidence observatory with six criteria
  stations, the separate line "117 checks passed (22 Nov 2026)", and a distinct
  "Still to prove" list. Part VIII is a handover library for school ownership,
  named review, termly privacy review, school-event sharing and verification
  handover. The closing "Thank you / Questions" scene gathers all four companions.
  Each part has its own 3D set and camera rail, with scripted reactions; inactive
  sets are hidden so labels cannot leak into the next scene.
- Phase 4 verification: `npm run build` passes. Headless Chromium checks report
  zero console/page errors, zero external requests and zero horizontal overflow at
  1920×1080, 1280×720, 800×360, 800×1280 and 360×800. The built deck has ten
  sections, five Phase 4 stages, eight timeline entries (5 done / 3 pending),
  eight risk pairs, six criteria stations, six still-to-prove items, five
  handover records, section notes and four closing companions. The cost section
  contains no bracketed price rows, the exact 117-check line is present, all 12
  colour themes plus Follow device apply with no overflow, reduced motion keeps
  one canvas with no overflow, and the progress counter follows the active scene.
  Final `kiro-cli` review of settled frames in `reference/phase4/` found no
  concrete defects after the sidebar-spacing, scene-visibility and closing-frame
  fixes. This is local headless Chromium and screenshot evidence only; it does not
  verify physical devices, Safari/Edge/Firefox, screen readers, Firebase, two
  independent clients, student learning or school approval.
- Phase 5 app tour: 17 "Inside CampusVerse" stops in navigation order — Today,
  Knowledge Library, Article reader, School Problem Solver, Crisis contacts,
  Practice Arcade, Planner, Study Rooms, Room chat + video, Calculator, Animated
  Companions, Strands & Well-being, Study Assistant, Private Profile, Sign-in
  gate, Install Guide and Appearance settings. Each stop has a page name, one-line
  purpose, four short function cards, an honesty badge, a local 3D laptop or phone
  with a real screenshot or local canvas mock, and a scripted companion reaction.
  Fifteen screenshots are historical local audit captures from the app source;
  Strands and Appearance use local canvas mocks because no matching screenshot was
  available. They are presentation textures, not live app verification. The deck
  preserves "verified in local checks" versus "prepared, not verified" labels, the
  paper's 17-page/10-game/12-theme/16-subject-look counts, PHP 0 and 117 checks,
  and it shows no ranking, rating or public player page.
- Phase 5 verification: `npm run build` passes with 27 sections and 27 stages —
  ten paper sections, 17 tour stops and the closing scene. Headless Chromium checks
  report zero console/page errors, zero external requests and zero horizontal
  overflow at 1920×1080, 1280×720, 800×360, 800×1280 and 360×800. All 17 devices
  become the active stage at their resting position; all 15 screenshots load; all
  12 themes plus Follow device apply with no overflow; reduced motion keeps one
  canvas; the progress counter reaches 27 / 27. A DOM overlap sweep found no
  tour card or chrome collisions. Repeated `kiro-cli` reviews of settled frames
  found no remaining concrete defects after the shelf-panel, screen-label,
  floating-swatch, laptop-height and heading-rhythm fixes. This remains local
  headless Chromium and screenshot evidence only; it does not verify physical
  devices, Safari/Edge/Firefox, screen readers, live Firebase, two independent
  clients, student learning or school approval.
- Next: Phase 6 game tour with ten dedicated sets and the closing constellation
  overview; do not start before Phase 5 is accepted.
