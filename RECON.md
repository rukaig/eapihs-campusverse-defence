# Phase 0 — Recon for the CampusVerse defence presentation

Recon only. No presentation code was written in this phase. Source of truth for
all words, numbers and claims: `../eap-paper-revised.md`.

---

## 1. Revised paper — the eight parts, key points only

### I. Project Contacts

- Four student proponents with named roles: Kyle Compoto (Innovator / Project Web Developer), Johndy Jade Joel L. Blanco (Researcher / Data Engineer), Rihana Ogatis and Daniella Pauleen Bangero (Researchers; both roles still `[Role to be assigned]`).
- Innovation Adviser is `[Name of Innovation Adviser]`; several email fields are `[Email to be added]`.
- School contacts: Sir Yvan A. Reyes (ICT Coordinator / Project Evaluator), Mrs. Marivic C. Canillo and Mrs. Gina Marie G. Pinza (Approving Authorities).
- Anything unresolved stays bracketed; no name, role, or email is invented.

### II. Project Summary

- Five linked needs: finding trustworthy information, handling everyday technical problems, staying engaged in independent study, organising tasks and study schedules, and studying with classmates online.
- CampusVerse answers them with one accessible place instead of five disconnected habits.
- Working prototype: 17 main pages and 10 game pages.
- On 22 November 2026 the app passed 117 separate checks; those checks describe app condition, not student learning.
- Work stays on the student's device unless they choose to sign in; dates, greetings, daily practice and streaks use Philippine time.
- Present stage: checking the prototype and preparing it for handover; any paid service must be approved first.

### III. Background and Rationale

- The five problem areas are **proposed**, not measured: observations, surveys, or interviews of EAPIHS students are `[not yet collected]`.
- Design answer: cited reading, safety-first solver, practice games, study tools, companions, and study rooms on phones, tablets and computers.
- The solver puts urgent safety guidance before ordinary study advice and never asks a student to handle a gas, electrical, fire or chemical hazard.
- Crisis page shows NCMH, Hopeline and 911 cards with official links; two NCMH numbers are unconfirmed, school review is pending, and no number is dialled automatically.
- Local-first by default; Budget and Notes make no outside requests; 12 colour themes, 16 subject looks, reduced motion, Philippine time.
- Prepared is kept separate from verified; a written privacy rule is not a live test.

### IV. Objectives and Outputs

- Nine objectives rewritten against the November 2026 prototype; each says what a student can do, what supports it, and what is still open.
- Library: 17 short explainers, 11 subjects, 4 guided study paths, research-help panel, verification conditions, 45 links checked 27 Oct 2026, 10 newer entries checked 12 Nov 2026; all remain editorial drafts.
- Solver: 12 situations; 8 of 10 listed crisis numbers checked 14 Nov 2026; professional review outstanding.
- Games: ten named practice-only games; no rating, rank, leaderboard, ranked mode, or cheating claim.
- Tools: calculator; Planner with Tasks, Budget and Notes Studio; student/teacher views change layout only.
- Study rooms and one-to-one video are prepared but not tried with two real accounts; no recording, moderation or group support.
- Four companions: Moss, Pip, Lumen, Juniper — scripted drawings, not live helpers or crisis support.
- 17 main pages, 10 game pages, 12 colour themes, 16 subject looks; earlier sweep evidence is baseline only.
- Profiles are owner-only; no public player page, ranking, leaderboard or report.
- Open work: real sign-in, two-person video, clean install/offline trial, student and teacher trials, expert article review, other browsers, screen readers.
- No claim of better grades, stronger engagement, or improved learning.

### V. Project Methodology

- Connected pages, each with its own look and purpose while sharing colours, navigation and reading rules.
- Features: Knowledge Library, School Problem Solver, Game Area, companions, calculator, planner, study rooms, study assistant, private profiles, install guide.
- Main users are EAPIHS students; teacher and wider-school access depends on final scope and permissions. No teacher dashboard, parent page, or administrator area has been built.
- Proposed twelve-week schedule for S.Y. 2026–2027 is subject to school approval and available resources.
- Risks: sign-in/shared data, privacy, traceability, calls, layout, companion shortcuts, time, missing expert or school review.
- Hosted services and keys are kept server-side; none is treated as proven until used with real accounts.

### VI. Project Cost

- Development and checking happened locally; the app is shared through a small published set of pages.
- **Total cost to implement this prototype: PHP 0.**
- Free-tier web hosting and shared data services; existing school devices and internet connection.
- No paid service has been committed. A better video connection would be considered only if the one-to-one check-in proves useful and the school approves the expense.
- Real figures would be entered only after quotations and school approval; bracketed planning prices are not actual amounts.

### VII. Monitoring and Evaluation

- Monitoring with the ICT Coordinator, Sir Yvan A. Reyes; purpose is to check function, usability, accessibility, saving, content accuracy, and usefulness.
- 117 checks cover library panels, safety guidance, calculator, games, tasks, budget, notes, themes, profiles, service-worker exclusions and page reopening.
- Not covered: real sign-in, shared data, profile photos and the two-person video check-in.
- Earlier baseline: 13 interaction scenarios, 19 pages at 12 themes, and 6 screen sizes; predates the current 17-page build, so it is not a current full-app certificate.
- Tasks, budget entries, notes and practice records save sensibly; failed saves warn instead of disappearing.
- No student survey has been given; none of the 17 explainers has been reviewed by a subject specialist.
- A verified badge needs a named reviewer, review date, HTTPS and allowlisted publisher; no entry qualifies yet.
- 117 checks describe app condition, not student learning, grades, engagement or performance.

### VIII. Project Sustainability

- Depends on school ownership, accurate content and regular review of access, not a one-time effort.
- After approval, researchers and teachers should make the app available to EAPIHS students.
- Assigned teachers and members keep articles and guides current, correct mistakes, record changes, and use a named review before any status change.
- Privacy and account management are reviewed every term by the ICT Coordinator and assigned members.
- Sharing during school events hands records to the next group; a verification handover records sign-in, video, install and review results.
- Defence approach: show each feature as a student would meet it, demonstrate what works, and state plainly what awaits approval, review or real-world trial.

---

## 2. Visual reference video — extraction and style analysis

### File and extraction

- Search order: `~/Downloads` first, then the whole home folder, newest by modification time.
- Selected file: `/home/rukayl/Downloads/snaptik_7693124747588144391_v3.mp4`
- Modification time: 2026-11-24 22:10:59, newer than every other `*snaptik*` file found.
- Video: 1024×576, 30 fps, 59.9 s, 1797 frames.
- Extracted with `ffmpeg -vf fps=1/2 -q:v 2` into `reference/frames/` → 30 frames, `frame_001.jpg` … `frame_030.jpg`.

### Method and limitation

- I extracted all frames, ran OCR (Tesseract) on every frame, measured dominant colours with Pillow, and detected scene changes with ffmpeg.
- This model cannot view image pixels directly, so **no visual claim below is invented from imagination**. Frame-derived facts are marked `[measured]`; the rest is the style brief you supplied, marked `[brief]`. For design work, treat `[brief]` as authoritative.

### Layout `[measured + brief]`

- Fixed top-left brand: OCR repeatedly reads `Shopify Editions Winter '26`; bounding boxes place it at about x=42, y=4 in the 1024×576 frames.
- Edition title sits below it: OCR reads `The Renaissance Edition` at about x=12, y=54–105.
- Fixed left index: OCR on frame 011 reads `Sidekick I`, `Agentic II`, `Online III`, `Retail IV`, `Marketing V`, `Checkout VI`, `Operations VII`, `Shop app VIII`, `B2B IX`, `Finance X`, `Shipping XI`, `Developer XII`, with Roman numerals aligned at x≈118 and labels at x≈8. It occupies the lower-left area, y≈327–495.
- Section content sits in the middle/right: frame 014 OCR places the heading `Not your standard hub` at x≈206, y≈106 and the supporting paragraph at x≈205, y≈143.
- `[brief]` One full-screen scene per section; the camera moves through a 3D space as the user scrolls; the current index item is highlighted and clickable.
- Small link-style actions appear under card text (OCR examples: `Read help doc`, `Get app`, `Read help doc 2`).

### Typography `[measured + brief]`

- OCR shows small caps/tracked labels for the fixed brand and the edition title.
- Section headings are short, bold and multi-line (`Not your standard hub`, `Connections that never drop`, `Pushing boundaries`).
- `[brief]` Very large bold sans-serif section titles paired with a smaller elegant italic serif tagline; short text blocks; small link-style buttons.

### Motion and camera `[measured + brief]`

- Scene-change detection found frequent changes around 13–16 s, 26–28 s, 32–33 s, 38–40 s and 44–45 s, consistent with section-to-section transitions rather than a single static slide.
- The 39–40 s cluster has many high-score changes, consistent with a faster sequence of smaller items/cards.
- `[brief]` Scroll drives camera movement and layered parallax: background, midground, foreground, floating objects.

### Card style `[measured + brief]`

- OCR shows cream/pale panels carrying short explanatory text plus action links such as `Read help doc`.
- `[brief]` Cream-coloured info cards slide in over the scene; each has a small link-style button.

### Colours `[measured]`

Representative 8-colour quantisation from sampled frames:

- Early frames: dark umber/olive (`#3f352a`, `#2d2d25`, `#545446`) with parchment tan (`#928166`, `#cfc3ac`, `#b6936a`).
- Middle frames: deep oxblood/brown (`#1d0f0d`, `#492012`, `#2f1b14`) against warm parchment (`#afa797`).
- Later frames: muted sage/cream (`#37564f`, `#677260`, `#e7e4d0`, `#d6d2bf`) and a near-white parchment frame (`#f9f9ed`, `#0b201e`, `#401928`, `#88a490`).
- Overall: painterly warm earth palette, parchment cream, dark olive, terracotta/oxblood, sage green.

### What is 3D and what is flat parallax

- `[brief]` Real depth: camera moving through a 3D space, layered parallax, floating objects, painterly/Renaissance backdrops mixed with modern objects.
- `[brief]` Two worlds colliding is the organizing idea: historical/painterly environment + contemporary product UI.
- `[measured]` Text, labels, index and cards are flat UI layers over the moving scene; OCR bounding boxes show them pinned to screen coordinates across frames.
- Not verifiable from extracted stills: exact mesh geometry, light rigs, shadow use, or whether each background is a photograph, video texture or generated mesh. Do not claim those as facts.

---

## 3. CampusVerse app source inventory

All paths in this section are relative to the app repository root
`/home/rukayl/Documents/appli.eap-main (2)/appli.eap-main`. Counts are from the
current source, not from the paper. The paper is still the source of truth for
presentation words; this section records where it is stale.

### 3.1 Main pages — 18 root HTML shells (paper says 17)

`build.js:9-28` publishes 18 root pages. `docs/status.md:61-62` confirms 18 root
HTML pages and 11 game pages. The paper count of 17 cannot be reconciled exactly:
`404.html` and `offline.html` are utility shells with no feature module, while
`strands.html` is a current feature page absent from the paper. Excluding both
utility shells would give 16, not 17.

| Route | Page module | Purpose / one-line description |
| --- | --- | --- |
| `index.html` | `src/pages/home.js` | Home dashboard: the starting page for navigation and daily content. |
| `library.html` | `src/pages/library.js` | Searchable, filtered library of explainers and guided study paths. |
| `article.html` | `src/pages/article.js` | Opens one library article by id and shows its sources and status. |
| `solver.html` | `src/pages/solver.js` | Safety-first school problem solver with emergency guidance before study advice. |
| `emergency.html` | `src/pages/emergency.js` | Crisis and support contact cards; no number is dialled automatically. |
| `arcade.html` | `src/pages/arcade.js` | Hub that lists the practice games. |
| `companions.html` | `src/pages/companions.js` | Meets the four scripted companions and their deterministic dialogue. |
| `calculator.html` | `src/pages/calculator.js` | Calculator using a safe tokenizer/parser, with memory and history. |
| `planner.html` | `src/pages/planner.js` | Planner with hash-routed Tasks, Budget and Notes Studio tabs. |
| `groups.html` | `src/pages/groups.js` | Study-room list, creation and joining via room codes. |
| `group-chat.html` | `src/pages/group-chat-full.js` | Room chat, in-page call notices/lounge, and activity invitations. |
| `assistant.html` | `src/pages/assistant-full.js` | Full-page study assistant behind `/api/assistant`, with safety checked first. |
| `profile.html` | `src/pages/profile.js` | Owner-only profile and private avatar upload. |
| `login.html` | `src/pages/login.js` | Firebase sign-in and the local-only demo gate. |
| `install.html` | `src/pages/install.js` | Install/PWA guidance for phone or computer. |
| `strands.html` | `src/pages/strands.js` | Strands & Well-being hub: videos, prompts, ICT scenarios, hazard flows and tools. Absent from the paper. |
| `offline.html` | none | Offline fallback shell. |
| `404.html` | none | Friendly page-not-found shell. |

### 3.2 Games — 11 in source (paper names 10)

Registry: `src/data/games.js`. How each game plays is taken from each entry's
`description` and `controls` fields.

| Game | Route | How it plays |
| --- | --- | --- |
| Campus Chess | `games/chess.html` | Play White or Black against Stockfish 10 in a Web Worker. Click a piece then a highlighted square; arrow keys move focus. Undo, restart, ask for a legal-move hint, and choose a separate board palette. Five genuinely different practice levels; no rating, rank or leaderboard. |
| Word Forge | `games/word.html` | Unscramble one of 120 school words using a clue, shuffle the letters or take one hint. Type the word or click letter tiles. No timer pressure. |
| Equation Forge | `games/equation.html` | Solve linear equations for x across three difficulty bands; fractions are accepted and answers checked exactly. Type the value of x and press Enter. |
| The Missing Margin | `games/mystery.html` | Read one of three original mini-mysteries, mark suspects cleared or accused, then accuse and check the reasoning against every clue. |
| Pattern Pursuit | `games/pattern.html` | Choose the next term in number or shape sequences, with three lives and a streak. Wrong answers explain the rule. Choose one of four options. |
| Study Shelf | `games/memory.html` | Turn over pairs of subject-symbol cards with a move counter and no time pressure. Click two cards to find a pair. |
| Cipher Desk | `games/code.html` | Decode a Caesar-shifted message using adjustable shift and letter-frequency hints. Choose a shift or type the decoded message. No cryptography claims. |
| Signal Garden | `games/focus.html` | In a 45-second round, collect glowing blooms and ignore grey stones. Click/tap targets, or Tab then Enter. Pause any time; reduced motion removes drifting animation. |
| CSS Atelier | `games/css.html` | Read a design goal and choose the declaration that makes it real from a fixed bank of twelve CSS tasks. Choose one of four declarations; keyboard 1–4. Wrong answers show what the declaration does before explaining the correct one. |
| Cortex Run | `games/cortex-run.html` | A calm 90-second procedural sprint through memory, sequences and shifting rules. Tap, click or use the keyboard. No account, rating, rank or leaderboard. |
| **Canteen Crew** | `games/canteen-crew.html` | **Source addition absent from the paper.** Invite a study-room member: the runner stocks ingredients, the chef plates and serves orders, and the room shares one score. Solo practice switches between both roles. Tap a station, or use arrow keys/WASD, Enter/Space and 1–3 for recipes. |

### 3.3 The four companions — exact source data

From `src/data/companions.js`; inline SVG art is generated by
`src/app/companion-art.js`. There are no separate companion image files in
`assets/`. Dialogue is scripted, not model-generated.

- **Moss** — garden turtle, `sage` accent, tagline "Slow is a speed."
  - Look: carries a tiny garden on their shell.
  - Personality: steady, literal, kind. Best for overwhelm and planning.
  - Moods: bright "The garden is awake. One small thing, then another." · calm "No rush. Put the next step where you can see it." · sleepy "Rest is part of the plan, not a delay." · proud "You kept going. That counts more than a perfect streak." · curious "What is the smallest version of the task you keep avoiding?"
- **Pip** — coral finch, `coral` accent, tagline "Ask the bold question."
  - Look: fast little finch who hoards questions instead of facts.
  - Personality: curious, blunt, energetic. Best for starting assignments, practising aloud and getting unstuck.
  - Moods: bright "Say the question out loud. Questions get lighter in the air." · calm "You do not need the whole answer. You need the next question." · sleepy "Even birds close their eyes. Five minutes." · proud "You asked. That is how the lock opens." · curious "What would you try if you were not worried about looking silly?"
- **Lumen** — paper moth, `gold` accent, tagline "Notice the small light."
  - Look: paper moth collecting tiny moments of progress.
  - Personality: observant, gentle, dramatic. Best for revision, focus and finishing avoided work.
  - Moods: bright "One candle is enough to start. You do not need the whole sun." · calm "Dim the noise. Keep one light on the task." · sleepy "Fold your wings. Tomorrow still exists." · proud "I saw that. You did the thing you said you would do." · curious "What did you notice today that you would otherwise have missed?"
- **Juniper** — lavender fox, `lav` accent, tagline "Make room for the messy draft."
  - Look: fox with ink-stained paws.
  - Personality: inventive, warm, slightly chaotic. Best for writing, creative work and group projects.
  - Moods: bright "Draft first. Make it clever later." · calm "The page does not have to be good yet. It has to exist." · sleepy "Leave a note for tomorrow-you. They will appreciate it." · proud "Look at that. Imperfect and finished. My favourite combination." · curious "What is the most interesting wrong version of this idea?"

Limits stated in `src/pages/companions.js`: replies are written in advance,
not a chatbot, counsellor or live AI; nothing typed is sent to a model; they do
not detect emergencies, diagnose or replace human support.

### 3.4 Themes and exact hex tokens

Generated into `presentation/src/themes/registry.js` from
`src/styles/tokens.css`, `src/styles/themes/index.css` and `src/app/ui.js`.

**Colour themes (12 + Follow device).** Tokens: bg / surface / text / accent /
danger / warning / success.

| ID | Label | Mode | bg | surface | text | accent | danger | warning | success |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| light | Ivory | light | #fbf6ec | #fffdf8 | #12263a | #3f6b55 | #8e3c34 | #7d5a1d | #2f5544 |
| sakura | Sakura blossom | light | #fff4f6 | #fffbfc | #3f2630 | #b03a63 | #96352e | #7b5415 | #35634c |
| autumn | Autumn ember | light | #f7efdc | #fffaf0 | #3b2a17 | #94551a | #8f3329 | #75510f | #47663a |
| forest | Forest | light | #f2f6ee | #fbfdf8 | #1f3327 | #2f6b4a | #8f3a32 | #7a5714 | #245c3f |
| ocean | Ocean | light | #eef6fa | #fbfdff | #12303f | #0f6f8c | #93413a | #7c5a15 | #136b53 |
| sunset | Sunset | light | #fdf3e9 | #fffaf3 | #3a241b | #b1502f | #9c3229 | #805010 | #4e6b35 |
| grape | Grape | light | #f4f0fb | #fdfbff | #2c2340 | #6d4aa8 | #8f3a4a | #765314 | #3c6a4e |
| moon | Moonlit | dark | #0f1220 | #171b2d | #e9e6f2 | #c4b5fd | #fca5a5 | #fcd34d | #86efac |
| aurora | Aurora | dark | #061716 | #0c2321 | #e2f6f1 | #5eead4 | #fda4af | #fde68a | #86efac |
| dark | Night | dark | #0d1720 | #13212b | #e8e1d4 | #8fbf9f | #f0a093 | #e2c17e | #a9cfb6 |
| midnight | Midnight | dark | #0a1224 | #111c33 | #e6eefc | #38bdf8 | #fca5a5 | #fcd34d | #86efac |
| contrast | High contrast | dark | #000000 | #0a0a0a | #ffffff | #ffff00 | #ff6b6b | #ffff00 | #00ff88 |
| system | Follow device | resolves to light/dark | #fbf6ec (light) | #fffdf8 (light) | #12263a (light) | #3f6b55 (light) | #8e3c34 | #7d5a1d | #2f5544 |

Follow device is a saved choice, not a thirteenth appearance; dark appearance
IDs are dark, midnight, contrast, moon and aurora.

**Subject looks (16), each with light and dark tokens.**

| ID | Name | Family | Preview hex tokens | Light bg / accent | Dark bg / accent |
| --- | --- | --- | --- | --- | --- |
| campus | Campus | Campus | #fbf6ec, #3f6b55, #12263a, #e9ddc9 | #fbf6ec / #3f6b55 | #0d1720 / #8fbf9f |
| space | Space | Science | #0b1430, #6ea8ff, #b48cff, #f4d35e | #f4f6ff / #3f6fd4 | #070b1d / #6ea8ff |
| chemistry | Chemistry Lab | Science | #f7fbfa, #1f8a8a, #b84aa8, #e0a43a | #f7fbfa / #187676 | #0b1418 / #4fd1c5 |
| nature | Earth and Nature | Science | #f3f7ef, #4f7a4a, #9a6244, #5a8fb8 | #f3f7ef / #4f7a4a | #0f1b14 / #95c985 |
| graph-paper | Graph Paper | Mathematics | #f3f8fb, #2f5f9e, #c44536, #f2c14e | #f3f8fb / #2f5f9e | #081a33 / #7fb3ff |
| chalkboard | Chalkboard | Mathematics | #1f4633, #f7f3e8, #f2d36b, #7cc7ff | #f6f3ea / #3f6b52 | #173326 / #f2d36b |
| parchment | Parchment | History and Literature | #f6eddc, #6b4a2f, #7a2e2e, #2f6b5f | #f6eddc / #6b4a2f | #241b14 / #d4b07a |
| reading-room | Reading Room | History and Literature | #f8f2e8, #3b2d2a, #7a2f3a, #b38a3b | #f8f2e8 / #7a2f3a | #101813 / #d4b07a |
| circuit | Circuit | Technology | #f5f8f6, #1f7a4a, #b87333, #0f8fa8 | #f5f8f6 / #1f7a4a | #060b08 / #39d353 |
| ocean | Ocean | Science | #f2faf8, #178a8f, #3f7cc0, #0b2424 | #f2faf8 / #147278 | #081b24 / #4fd1cb |
| fresh-clinic | Fresh Clinic | Health and Wellbeing | #f7fbf9, #2f8f7a, #bf5a66, #1f2d2a | #f7fbf9 / #257665 | #101a1b / #63d1b8 |
| notebook | Notebook | Study Skills | #fbfaf6, #3f6fb0, #c45c8a, #e0b84a | #fbfaf6 / #3f6fb0 | #161a20 / #7fb3ff |
| newsprint | Newsprint | Media Literacy | #f5f1e8, #1a1a1a, #8b2222, #d1c9ba | #f5f1e8 / #8b2222 | #161513 / #e07a72 |
| civic-hall | Civic Hall | Civics | #f5f5f2, #2a4f87, #b38a3b, #1b2436 | #f5f5f2 / #2a4f87 | #0b1424 / #d4b06a |
| workshop | Workshop | Future Pathways | #f7f1e6, #2f5f9e, #b85a24, #2b2620 | #f7f1e6 / #2f5f9e | #171412 / #7fb3ff |
| studio | Studio | Arts and Music | #faf6f2, #b85a3a, #3f6fb0, #b35c6d | #faf6f2 / #3f6fb0 | #141427 / #8fbfff |

Full light/dark token maps for all 16 looks are in
`presentation/src/themes/registry.js`; regenerate with `npm run themes:extract`.

### 3.5 Fonts, logo, icons, illustrations and reusable asset files

- **App fonts:** system stacks only, defined at `src/styles/tokens.css:103-106`:
  display `Iowan Old Style / Palatino Linotype / Palatino / Georgia / Times New Roman / serif`;
  body `Segoe UI Variable Text / Segoe UI / system-ui / -apple-system / Helvetica Neue / Arial / sans-serif`;
  mono `Cascadia Code / Cascadia Mono / Consolas / SFMono-Regular / monospace`.
  `docs/THEMES.md:45,56` says no webfonts were added. The presentation instead
  self-hosts Manrope and Cormorant Garamond through npm, as allowed by the brief.
- **Logo / PWA icon:** `assets/campusverse-mark.svg`, declared in
  `manifest.webmanifest:13-20` with `sizes: "any"`, `type: "image/svg+xml"`.
- **Install QR:** `assets/campusverse-install-qr.svg`.
- **Icons:** 58 inline SVG path keys in `src/app/ui.js:4-63`, rendered by
  `icon()` at `:65-68` (search, book, gamepad, shield, calculator, brain, video,
  printer, copy, settings, and others).
- **Illustrations:** companion art is generated as inline SVG by
  `src/app/companion-art.js:61`. No separate companion image files exist in
  `assets/`.
- **Stockfish:** `assets/engine/stockfish.wasm`, `stockfish.wasm.js`, `NOTICE.md`,
  `COPYING.txt`. Unmodified Stockfish 10 WASM from stockfish.js 10.0.2, GPLv3,
  loaded lazily by a local Web Worker (`src/games/stockfish-client.js`).
- **No CDN** script/style/font URLs were found in the app source.

### 3.6 Feature inventory with honest status

| Feature | Route(s) | Source | What it actually does / limit |
| --- | --- | --- | --- |
| Calculator | `calculator.html` | `calculator.js`, `src/pages/calculator.js` | Scientific functions, memory and history via a tokenizer/parser; no `eval` or `Function` in app code. |
| Planner — Tasks | `planner.html#tasks` | `src/pages/planner.js`, task module | Task list and week board; local saving with warnings on failed saves. |
| Planner — Budget | `planner.html#budget` | `src/pages/planner.js`, budget module | PHP pesos/centavos planning, CSV, print, validated JSON backup; not financial advice; no outside requests. |
| Planner — Notes Studio | `planner.html#notes` | `src/pages/planner.js`, notes module | Local notes with strict HTML sanitisation and DOCX/Markdown/text/HTML/ZIP exports; browser DOCX/PDF rendering remains unverified. |
| Library | `library.html`, `article.html` | `src/data/library.js`, `src/data/sources.js` | 20 explainers, 11 categories, 10 hidden source-linked candidates, 5 study paths; 45 links checked 27 Oct 2026 and 10 newer entries checked 12 Nov 2026; all articles remain `editorial-draft`. |
| Problem solver | `solver.html` | `src/data/solver.js`, `src/services/safety.js` | 12 situations; emergency-first classifier, no hazardous repair instructions; keyword-based and explicitly limited. |
| Crisis page | `emergency.html` | `src/data/emergency-contacts.js` | NCMH, Hopeline and 911 cards; 10 numbers, 8 checked 14 Nov 2026, 2 unconfirmed; no auto-dial. |
| Study rooms | `groups.html`, `group-chat.html` | `src/pages/groups.js`, `src/services/groups*.js`, `src/data/group-activities.js` | Room creation/join, membership rules, room chat and registry-driven activities. Prepared but not verified with two real signed-in clients. |
| Messaging | `group-chat.html` | `src/pages/group-chat-full.js` | Messages live in `groups/{id}/messages`; in-page `aria-live` call notices, not push notifications. |
| Video check-in | `group-chat.html` | `src/services/video-call.js`, Firestore `groups/{id}/calls/active` | 1:1 study call with public STUN by default. Synthetic same-browser harness only; no two-client live test, TURN, recording, moderation or multi-party. |
| Study assistant | `assistant.html` | `server.js`, `server/assistant-service.js`, `server/knowledge/` | Safety check before any model call; Gemini-first with OpenAI-compatible fallback; keyword retrieval over approved notes, not fine-tuning or browsing. Live Gemini untested because no key. |
| Profile | `profile.html` | `src/pages/profile.js`, Storage rules | Owner-only profile and cropped private avatar at `avatars/{uid}`; photo upload hidden in demo and still unverified with live Storage. |
| Install guide | `install.html` | `src/pages/install.js`, `sw.js`, `manifest.webmanifest` | PWA install guidance; no clean install/update/offline trial recorded. |
| Strands & Well-being | `strands.html` | `src/data/strands.js`, `src/services/strands-model.js` | 6 strands, 18 official video links, 10 ICT scenarios, 6 hazard flows, 8 checks, 28 tools. Absent from the paper; collects no personal data. |

---

## 4. Proposed scene plan

One real 3D scene per paper part, followed by a full app tour. All text remains
in `src/content.js`; this section only describes geometry, props and poses.

### Scene I — Project Contacts · "The Register"

- **Set:** a warm school register hall; a lectern, a brass nameplate rail and a wall of role cards.
- **3D props:** lectern, quill, four nameplates, bracketed placeholder cards, school mark, two approval stamps.
- **Flat layers:** contact table text, cream info cards, brand label, Roman index.
- **Character poses:** Moss seated at the register with a steady hand; Pip hovering beside a blank question card; Lumen holding a small lamp over the adviser placeholder; Juniper Ink-paws ready with a pen.

### Scene II — Project Summary · "Five Needs, One Door"

- **Set:** five old study paths converge into one campus portal.
- **3D props:** five signposts (trust, troubleshoot, study, organise, together), scattered note cards, a search-result slab, a loose network cable, a planner book, a video-call frame.
- **Flat layers:** five-need list, 17/10/117 numbers, cream fact cards.
- **Character poses:** Moss points to the merged portal; Pip flies between two signposts; Lumen lights the portal threshold; Juniper carries a stack of notes into it.

### Scene III — Background and Rationale · "Two Worlds Colliding"

- **Set:** a Renaissance study chamber overlapping a modern device bench.
- **3D props:** parchment scrolls, globe, carved desk, laptop, router, printer, crisis contact cards, 12 theme swatches and 16 subject tiles, hazard signs placed at a safe distance.
- **Flat layers:** proposed-problems notice, safety-first rule, 12/16 counts, contact cards.
- **Character poses:** Juniper writes at the carved desk; Pip asks a bold question from the device bench; Moss keeps one small step marked on the floor; Lumen shields a single light from the clutter.

### Scene IV — Objectives and Outputs · "Nine Plinths"

- **Set:** a gallery of nine plinths arranged around the camera; the ten game tokens orbit the practice plinth.
- **3D props:** book/library plinth, safety signpost, ten game tokens (chess king, word tiles, equation balance, magnifier, pattern pieces, shelf cards, cipher wheel, signal flowers, CSS code slab, 90-second timer), calculator, planner, chat room frame, four companion markers, privacy shield.
- **Flat layers:** nine objective headings, evidence card, no-learning-claim card.
- **Character poses:** Moss beside the planning plinth; Pip at the game tokens; Lumen over the articles; Juniper at the notes/planner plinth.

### Scene V — Methodology · "The Workbench"

- **Set:** a blueprint workbench with a floating twelve-week rail and risk cards.
- **3D props:** rolled plan, calendar rail, tool rack, beneficiary silhouettes, risk cards, server-side key vault (locked), shared reading notes.
- **Flat layers:** connected-pages description, beneficiaries, schedule caveat, risk list.
- **Character poses:** Moss measures the week rail; Pip inspects a risk card; Lumen reads the key-vault label; Juniper sketches the separate page layouts.

### Scene VI — Project Cost · "The Zero-Cost Counter"

- **Set:** a quiet market counter where every price tag reads zero.
- **3D props:** large PHP 0 plinth, blank price tags, free-tier cloud tokens, device silhouettes, internet line, approval form and stamp, empty coin tray.
- **Flat layers:** PHP 0 total, free-tier/existing-resources list, approval gate.
- **Character poses:** Juniper holds the approval form; Moss places a device on the counter; Pip points at the blank price tags; Lumen lights the zero.

### Scene VII — Monitoring and Evaluation · "Evidence Observatory"

- **Set:** an observatory where 117 small check lamps light one shelf; a second empty shelf is labelled student learning.
- **3D props:** 117 check lamps, clipboard, two labelled shelves, empty survey chair, empty expert-review desk, browser/accessibility icons, save-warning indicator.
- **Flat layers:** 117 checks, uncovered items, baseline evidence, open evaluation plan.
- **Character poses:** Pip checks the lamp list; Moss writes on the clipboard; Lumen stands by the empty expert desk; Juniper turns the empty survey chair toward the audience.

### Scene VIII — Sustainability · "The Handover Library"

- **Set:** a library of evidence boxes and term calendars.
- **3D props:** labelled shelves, review seals with named reviewer fields, term calendar, privacy shield, handover key, archived boxes.
- **Flat layers:** school ownership, review cadence, verification handover, honest defence line.
- **Character poses:** all four companions hand boxes to the next group: Moss with records, Pip with questions, Lumen with review notes, Juniper with the messy first draft.

### Full app tour · "CampusVerse, in order"

- **Set:** one continuous camera flight through the main-page portals and the ten practice-game alcoves.
- **3D props:** page portals with route labels, game tokens from Scene IV, theme swatches, a Philippine-time clock, local-storage drawers, sign-in gate kept closed/labelled, install badge.
- **Flat layers:** page names, game names, route captions, prepared-versus-verified badges.
- **Character poses:** Moss at the planner/library stations; Pip at the solver/game stations; Lumen at the articles/theme stations; Juniper at the notes/group stations.
- **Honesty rule:** every prepared-but-unverified station (real sign-in, two-person video, cloud access) displays a visible "prepared, not verified" marker; no ranking, rating or leaderboard station exists.

---

## 5. Differences between the app source and the paper

The paper remains the source of truth for the presentation. These differences
are recorded so that no newer app fact is silently presented as a paper fact.

| Area | Paper says | Current source says | Classification |
| --- | --- | --- | --- |
| Main pages | 17 main pages (`eap-paper-revised.md:59,61,91,134`) | 18 root HTML pages in `build.js:9-28` and `docs/status.md:61-62` | Stale count. No exact exclusion rule is stated; utility shells are 404/offline, while Strands is a new feature page. |
| Games | 10 named games (`:83,97,105,137`) | 11 games in `src/data/games.js` | Stale count. Canteen Crew is the extra source addition. |
| Library explainers | 17 short original explainers (`:79,188`) | 20 articles in `src/data/library.js` | Stale count. |
| Study paths | 4 guided study paths (`:79`) | 5 paths in `src/data/library.js:55-86` | Stale count. |
| Library categories | 11 subjects (`:79`) | 11 `CATEGORIES` in `src/data/library.js`; 16 separate visual subject looks | Supported with terminology nuance. |
| Source links | 45 links checked 27 Oct 2026; 10 newer entries checked 12 Nov 2026 (`:79`) | Same dates and counts in `src/data/sources.js` and `src/data/library.js` | Supported. |
| Themes | 12 colour themes and 16 subject looks (`:71,91`) | 12 appearance themes + `system`, and 16 subject looks | Supported. |
| Companions | Moss, Pip, Lumen, Juniper (`:89`) | Same four in `src/data/companions.js` | Supported. |
| Checks | 117 checks passed on 22 Nov 2026 (`:61,95,139,180,190`) | 169/169 tests across 22 files in `docs/testing.md:31-43,69` | Stale count. Use 117 in the deck because the paper is authoritative. |
| Browser evidence | 13 scenarios; 19 pages × 12 themes; 6 screen sizes; predates 17-page build (`:91,182,184`) | Historical evidence confirmed, but predates the 18-page build and removal of ranking/rating pages | Supported as historical; page count stale. |
| Strands hub | Absent | `strands.html`, `src/data/strands.js`, docs and tests present | Source addition. |
| Canteen Crew | Absent | `games/canteen-crew.html`, `src/data/games.js:135-146` | Source addition. |
| Room/chat activity invites | Not described | “Play together” flow and activity invitations in room/chat docs | Source addition / still unverified with two real clients. |
| Firebase/live paths | Prepared, not live-tested | Docs still say Auth, Firestore, Storage, two-person video, clean install, CSP, Gemini live path unverified | Supported limitation. |
| No rankings/ratings | No ranking, rating, leaderboard or public player page | Docs confirm removed | Supported. |

### Internal source inconsistencies found during recon

These are app-source issues, not paper errors:

- `docs/status.md:87` still says “Search and filter across 17 explainers,” while
  the same file and the registry say 20.
- `docs/status.md:196` has a “Ten games” heading over a table of 11 games.
- `docs/status.md:223` says “161-file allowlist”; `:243` and `README.md:97-98`
  say 164.
- `docs/THEMES.md:93` says 139/139 checks; current testing doc says 169/169.
- `docs/THEMES.md:56` says service worker `campusverse-v3.2.8`; `sw.js:5` says
  `campusverse-v3.8.0`.
- `manifest.webmanifest:32` says “eight original learning games”; the registry
  has 11. `src/pages/home.js:48` says “ten games,” also stale.

### School-specific evidence caveat

The paper names Sir Yvan A. Reyes, Mrs. Marivic C. Canillo, Mrs. Gina Marie G.
Pinza and several emails. The app source only corroborates the full school name,
`EAPIHS`, and principal `Ms. Gina Marie Pinza` (`server/school-facts.js:9-13,70-75`).
The other names and emails are not corroborated by repository source; this recon
does not judge whether they are true. Keep them as paper facts, not app-verified
facts.

### Verification limits

- Current test/build counts in this section come from `docs/testing.md`; they
  were read, not rerun during recon.
- Historical 19-page sweeps and 13/13 interaction review predate the current
  18-page build.
- No student survey, expert article review, screen-reader pass, physical-device
  test, other-browser test, live two-client video test, live Gemini test, clean
  PWA install/offline trial, or CSP verification is recorded.

