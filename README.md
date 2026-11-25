# EAPIHS CampusVerse — scroll-driven defence presentation

Offline Vite presentation for the innovation-paper defence. All slide copy and
speaker notes live in `src/content.js`.

## Run

With dependencies already installed (`node_modules/` present, as in this workspace):

```bash
npm run dev
```

`npm run dev` starts Vite on localhost. Nothing is fetched at runtime: three.js,
GSAP, Lenis and the fonts are local npm packages bundled into the build.

## Build and serve with no internet

```bash
npm run build
python3 -m http.server 8080 --directory dist
```

Open `http://127.0.0.1:8080/`. `dist/` is self-contained; copy that folder to a
USB drive or school machine and serve it with any static server. `base: "./"`
keeps paths relative, so a subfolder works too. No CDN, runtime internet,
account, API key or paid service is used. The built extra routes are
`/characters/` for the character lab and `/presenter/` for the printable
presenter kit.

On a fresh machine with no `node_modules/`, `npm install` normally needs network
access or a pre-filled npm cache. To build with no internet, copy `node_modules/`
with the project or populate the npm cache first. The build itself never fetches
from the network; `npm run preview` also needs the locally installed Vite.

## Editing guide

- All visible words, speaker notes, Q&A answers and unverified items live in
  `src/content.js`: `ui` holds chrome, overlay and presenter labels; `sections`
  holds the 38 slides; `qaMap` and `unverified` feed the presenter kit.
  `src/main.js`, `src/pages/presenter.js` and the scene modules only read these
  values. Add copy there, not in markup.
- Presenter kit: `src/pages/presenter.js` and `src/pages/presenter.css`; its
  print layout is the `@media print` block in that CSS. It is registered as a
  Vite input in `vite.config.js`.
- 3D sets and camera rails: `src/scenes/parts/`; register scenes in
  `src/scenes/index.js`. Stage motion, section-to-section camera continuity and
  Low graphics live in `src/scenes/stage-engine.js`.
- Colour and subject look data: `src/themes/registry.js`, regenerated with
  `npm run themes:extract`. Do not hand-edit the generated file. Run
  `npm run audit:contrast` after theme or token changes.
- Layout and responsive rules: `src/styles.css`; page-specific CSS stays in
  `src/pages/`.
- After any change: `npm run build`, serve `dist/` statically, then recheck the
  six viewport sizes, all themes, reduced motion, the presenter kit and external
  requests. Update the phase status below only with checks actually run.

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
- Phase 6 game tour: ten stops in the paper's exact order — Campus Chess, Word
  Forge, Equation Forge, The Missing Margin, Pattern Pursuit, Study Shelf, Cipher
  Desk, Signal Garden, CSS Atelier and Cortex Run. Each stop has a distinct
  procedural 3D set, a short how-it-plays description, a looping demo of one
  typical move or turn, four short function cards, complete speaker notes and a
  local-score badge. Every game stop says scores and XP stay on the student's
  device and that there is no rating, rank, leaderboard or ranked mode. Canteen
  Crew is deliberately excluded because it is a source addition absent from the
  paper. The next section, "Everything in one glance", is a presentation diagram
  with 17 page nodes and 10 game nodes linked in one constellation; it is not an
  app page or a new feature. The closing scene is now numbered XII.
- Phase 6 verification: `npm run build` passes with 38 sections and 38 stages —
  ten paper sections, 17 app-tour stops, ten game stops, the constellation
  overview and the closing scene. Headless Chromium checks report zero console or
  page errors, zero external requests and zero horizontal overflow at
  1920×1080, 1280×720, 800×360, 800×1280 and 360×800. All eleven new stages become
  active at their resting position; all eleven demo phases advance between two
  samples; the constellation reports 17 page nodes and 10 game nodes; all twelve
  colour themes plus Follow device apply with no overflow; reduced motion keeps
  one canvas with demo phase 0; the progress counter reaches 38 / 38. A DOM
  overlap sweep of the eleven new sections at two desktop viewports found no card
  or chrome collisions. Canvas capture checks confirm every new set draws visible
  geometry and that each demo changes pixels over time. Settled full-slide and
  stage-only composites are stored under `reference/phase6/`. An initial
  `kiro-cli` visual review of the first eleven settled screenshots was run before
  the camera correction; `kiro-cli` then reached its monthly request limit. A free
  OpenCode vision model reviewed the final overview stage afterwards and described
  the expected nodes and links, but it was not a full eleven-image re-review. This
  remains local headless Chromium and screenshot evidence only; it does not verify
  physical devices, Safari/Edge/Firefox, screen readers, live Firebase, two
  independent clients, student learning or school approval.
- Phase 7 polish and defence readiness: section changes now hand off camera poses
  without discarding scroll-driven local progress; Low graphics can be suggested
  automatically on slow devices and can be accepted or dismissed; a skip link and
  focus-trapped dialogs improve keyboard use; and a new `/presenter/` kit prints
  all 38 sections' speaker notes, eight Q&A answers and ten unverified items. The
  build and offline static-server steps and this editing guide are documented
  above. `npm run audit:contrast` was added. A full fact-check of `src/content.js`
  against the paper and app source corrected seven claim mismatches: the demo gate,
  profile email wording, Storage rules status, install steps, game sign-in, a
  companion proof claim and the overview map wording.
- Phase 7 verification: `npm run build` passes. Headless Chromium checks report zero
  console/page errors, zero external requests and zero horizontal overflow at
  1920×1080, 1280×720, 800×360, 800×1280, 360×800 and 375×812. The skip link takes
  focus first, the theme dialog traps Tab and restores focus on Escape, all 13
  colour choices and 16 subject looks apply, the Low graphics suggestion shows and
  both buttons work, and a section change starts a bounded camera transition that
  finishes. Reduced motion keeps one canvas and starts in Low graphics. The
  presenter kit renders 38 section notes with 114 note lines, 8 Q&A entries and 10
  unverified items; its print button and `@media print` rules are present with no
  overflow at 1440×900, 375×812, 360×800 or 800×360. `npm run audit:contrast`
  checks 1,248 used text-token pairs across 208 colour/subject combinations with
  zero AA failures. Six settled screenshots in `reference/phase7/` were reviewed
  with the free `opencode/nemotron-3.5-super-vl-free` vision model; it found a
  cramped 375px chrome row, which was fixed and re-reviewed clean.
- Still unverified: no claim of screen-reader or physical-device testing, Safari,
  Edge or Firefox coverage, live Firebase or two independent clients, student or
  teacher trials, learning impact, school approval, or professional review of
  safety and library content. The automated contrast check covers the presentation
  tokens only; it is not a full accessibility audit. The paper's counts remain the
  source of truth even where the live app source is newer.
- Next: present the deck, answer from the Q&A map, and hand the unverified list to
  the school for real accounts, devices and content review.
