// Single source of truth for every word shown in the presentation.
// Edit copy here; scene and UI code only reads these values.
export const content = {
  ui: {
    brand: "CampusVerse - Innovation Defence",
    brandShort: "CampusVerse",
    editionTagline: "A scroll-driven paper defence · November 2026",
    sectionIndexLabel: "Sections",
    appTourLabel: "IX · App tour",
    chapterLabels: {
      IX: "IX · App tour",
      X: "X · Game tour",
      XI: "XI · One glance"
    },
    themeButton: "Themes",
    themeButtonShort: "Theme",
    helpButton: "?",
    holdButton: "Hold scene",
    resumeButton: "Resume scene",
    themeTitle: "Theme",
    colourThemeTitle: "Colour theme",
    subjectLookTitle: "Subject look",
    followDevice: "Follow device",
    notesTitle: "Speaker notes",
    timerTitle: "Presenter timer",
    timerStart: "Start",
    timerPause: "Pause",
    timerReset: "Reset",
    lowGraphicsButton: "Graphics",
    lowGraphicsButtonShort: "Gfx",
    charactersButton: "Characters",
    charactersButtonShort: "Chars",
    lowGraphicsOn: "Low graphics: on",
    lowGraphicsOff: "Low graphics: off",
    helpTitle: "Presenter controls",
    close: "Close",
    sourceButtonPrefix: "Source",
    helpLines: [
      "→ / ↓ / Space / PageDown — next section",
      "← / ↑ / PageUp — previous section",
      "1–9, 0 — jump to section 1–10",
      "T — theme picker   F — fullscreen",
      "P — presenter timer   N — speaker notes",
      "G — low graphics   R — hold scene   ? — help"
    ],
    notesUnavailable: "[Speaker notes to be added.]",
    timerRunning: "Running",
    timerPaused: "Paused",
    loadingTitle: "EAPIHS CampusVerse",
    loadingText: "Preparing the 3D stage",
    progressLabel: "Presentation progress",
    skipLink: "Skip to the current section",
    lowGraphicsSuggestion: "This device looks slow. Low graphics can help.",
    lowGraphicsSuggestionAccept: "Use low graphics",
    lowGraphicsSuggestionDismiss: "Not now",
    presenterButton: "Presenter kit",
    presenterButtonShort: "Kit",
    presenterTitle: "Presenter kit",
    presenterSubtitle: "Speaker notes, Q&A map and unverified work · November 2026",
    presenterBack: "Back to the defence",
    presenterPrint: "Print or save as PDF",
    presenterPrintNote: "Use your browser's print dialog and choose Save as PDF.",
    presenterNotesHeading: "Speaker notes",
    presenterQaHeading: "Q&A map",
    presenterQaIntro: "Short answers that keep prepared work separate from verified work.",
    presenterUnverifiedHeading: "Unverified work",
    presenterUnverifiedIntro: "Say these plainly if asked; do not describe them as passed checks.",
    presenterFooter: "CampusVerse innovation defence · local presentation evidence only"
  },

  sections: [
    {
      id: "opening",
      numeral: "00",
      eyebrow: "Innovation paper defence · Senior High School · 3I's",
      title: "EAPIHS CampusVerse",
      tagline: "An Interactive Educational Platform",
      lead: "Learn Something New Every Day",
      points: [
        "Emilia Ambalada Poblete Integrated High School",
        "3I's: Inquiries, Investigation and Immersion",
        "Four proponents · adviser name still [to be added]",
        "November 2026 — revised edition"
      ],
      cards: [
        {
          label: "Working prototype",
          body: "A student can read, practise, plan, and study with classmates from one place.",
          actionLabel: "Paper §II",
          actionText: "CampusVerse answers five linked needs with one accessible place instead of five disconnected habits."
        },
        {
          label: "Honest scope",
          body: "Prepared and verified are kept separate throughout this defence.",
          actionLabel: "Paper §I",
          actionText: "Anything that still needs school approval, a named reviewer, or a real price is left in square brackets rather than invented."
        }
      ],
      notes: [
        "Open with the paper title and the five needs, not with a feature list.",
        "Name all four proponents. The adviser line is still a bracketed placeholder in the paper.",
        "Say plainly that this is a working prototype and that the defence will separate what exists from what is still unverified."
      ]
    },
    {
      id: "contacts",
      numeral: "I",
      eyebrow: "Paper part one",
      title: "Project Contacts",
      tagline: "The people named in the revised paper",
      lead: "The paper names the team, the evaluator, and the approving authorities.",
      points: [
        "Four proponents: Kyle, Johndy, Rihana and Daniella",
        "Innovation Adviser: [Name to be added]",
        "Evaluator: Sir Yvan A. Reyes · ICT Coordinator",
        "Approving authorities: Mrs. Marivic C. Canillo · Mrs. Gina Marie G. Pinza"
      ],
      cards: [
        {
          label: "Still open",
          body: "Two student roles and the adviser name remain bracketed in the paper.",
          actionLabel: "Paper §I",
          actionText: "Rihana Ogatis and Daniella Pauleen Bangero — [Role to be assigned]. Innovation Adviser — [Name to be added]."
        },
        {
          label: "Evaluation path",
          body: "Monitoring and evaluation are planned with the ICT Coordinator.",
          actionLabel: "Paper §VII",
          actionText: "Monitoring and evaluation will be carried out by the project group together with the ICT Coordinator, Sir Yvan A. Reyes."
        }
      ],
      scene: {
        id: "team-desk",
        desk: [
          { name: "Kyle Compoto", role: "Project Web Developer" },
          { name: "Johndy Jade Joel L. Blanco", role: "Data Engineer" },
          { name: "Rihana Ogatis", role: "[Role to be assigned]" },
          { name: "Daniella Pauleen Bangero", role: "[Role to be assigned]" },
          { name: "Innovation Adviser", role: "[Name to be added]" },
          { name: "Sir Yvan A. Reyes", role: "Project Evaluator" },
          { name: "Mrs. Marivic C. Canillo", role: "Approving Authority" },
          { name: "Mrs. Gina Marie G. Pinza", role: "Approving Authority" }
        ],
        reactions: [
          { companion: "moss", mood: "thinking", threshold: 0.12, text: "Names first. Placeholders stay placeholders." },
          { companion: "pip", mood: "cheering", threshold: 0.58, text: "The approval path is visible now." }
        ]
      },
      notes: [
        "Read the desk cards from left to right: proponents, adviser, evaluator, approving authorities.",
        "Keep the two student roles and the adviser name bracketed; do not fill them from memory.",
        "No email addresses are shown. The ICT Coordinator is the named evaluation lead in Part VII."
      ]
    },
    {
      id: "summary",
      numeral: "II",
      eyebrow: "Paper part two",
      title: "Project Summary",
      tagline: "One accessible place, not five disconnected habits",
      lead: "Five linked needs become one accessible place in a working prototype.",
      points: [
        "Five needs: reliable information · everyday tech problems · staying engaged · organising tasks · studying together",
        "17 main pages · 10 games · phone and computer",
        "Work stays on the device unless the student signs in",
        "Philippine time: dates, greetings, practice and streaks"
      ],
      cards: [
        {
          label: "Working prototype",
          body: "Prepared paths are shown; unverified paths are named, not hidden.",
          actionLabel: "Paper §II",
          actionText: "The project is a working prototype, so prepared but untested paths are stated plainly."
        },
        {
          label: "What checks mean",
          body: "117 checks passed on 22 November 2026 — app condition, not learning.",
          actionLabel: "Paper §II",
          actionText: "Those checks describe the app's condition; they are not proof of student learning."
        }
      ],
      scene: {
        id: "five-needs",
        needs: [
          "Reliable information",
          "Everyday tech problems",
          "Staying engaged",
          "Organising tasks",
          "Studying together"
        ],
        hub: "CampusVerse",
        reactions: [
          { companion: "lumen", mood: "happy", threshold: 0.18, text: "Five small needs. One place to notice." },
          { companion: "moss", mood: "thinking", threshold: 0.62, text: "One place, not five disconnected habits." }
        ]
      },
      notes: [
        "Lead with the five needs, then let the 3D paths converge on one place.",
        "Use the paper's counts: 17 main pages, 10 games, and 117 checks on 22 November 2026.",
        "Say working prototype, and never turn passing checks into a learning claim."
      ]
    },
    {
      id: "background",
      numeral: "III",
      eyebrow: "Paper part three",
      title: "Background and Rationale",
      tagline: "Proposed problems, not measured findings",
      lead: "The five problem areas guide the design, but the evidence is still planned.",
      points: [
        "Five problem areas are PROPOSED, not measured",
        "Observations, surveys and interviews: not yet gathered",
        "Answer: cited reading, safety-first help, practice, tools, companions and study rooms",
        "Not a teacher, counsellor, technician or emergency service"
      ],
      cards: [
        {
          label: "Safety first",
          body: "Urgent advice comes before study advice; no guide asks a student to handle a dangerous hazard.",
          actionLabel: "Paper §III",
          actionText: "Automated answers do not replace a teacher, a counsellor, a qualified technician, or emergency services."
        },
        {
          label: "Limits",
          body: "The keyword classifier can miss urgent wording; it is not a crisis monitor.",
          actionLabel: "Paper §III",
          actionText: "Two NCMH numbers are unconfirmed and school review is pending; no number is dialled automatically."
        }
      ],
      scene: {
        id: "scattered-learning",
        scattered: [
          "A note from a teacher",
          "A search result",
          "A tip from a friend",
          "A task list",
          "A separate chat"
        ],
        stamp: "PROPOSED",
        mergeLabel: "CampusVerse",
        safetyLabel: "Safety first",
        themes: "12 themes · 16 looks",
        reactions: [
          { companion: "pip", mood: "thinking", threshold: 0.14, text: "Proposed is not the same as proven." },
          { companion: "moss", mood: "happy", threshold: 0.58, text: "Safety first. Then the study tip." }
        ]
      },
      notes: [
        "Call the five problems proposed, because no student survey or interview has been collected.",
        "Let the scattered pieces merge, then give the safety-first limit before any study advice.",
        "Keep the 12 themes and 16 subject looks framed as reading comfort, not as evidence of engagement."
      ]
    },
    {
      id: "objectives",
      numeral: "IV",
      eyebrow: "Paper part four",
      title: "Objectives and Outputs",
      tagline: "Nine student-facing objectives, then a delivery shelf",
      lead: "One general objective, nine short objectives, then the outputs a panel can see.",
      points: [
        "One accessible place for reading, practice, tools and studying together",
        "Each objective says what works now, what supports it and what stays open",
        "Outputs: prototype, cited library, safety-first solver, ten games, tools, group/video, evidence record",
        "No claim of better grades, stronger engagement or improved learning"
      ],
      objectives: [
        { title: "1. Traceable reading", line: "Read cited explainers; verified review is still open." },
        { title: "2. Safer help", line: "Get first-aid signposts; professional review is still open." },
        { title: "3. Practice games", line: "Play ten practice games; no ranks or ratings." },
        { title: "4. Academic tools", line: "Use calculator, Tasks, Budget and Notes; views change layout only." },
        { title: "5. Study together", line: "Create rooms and chat; two-account proof is still open." },
        { title: "6. Companions", line: "Meet four scripted companions; they are not live helpers." },
        { title: "7. Student devices", line: "Use themes and six checked sizes; other-browser proof is open." },
        { title: "8. Protected accounts", line: "Owner-only profiles; live account checks are still open." },
        { title: "9. Test and improve", line: "117 checks passed; student, expert and screen-reader trials remain." }
      ],
      outputs: [
        "Working prototype",
        "Cited articles with draft status",
        "Safety-first solver and contact sheet",
        "Ten-game practice area",
        "Calculator, planner, budget and notes",
        "Group and video features prepared, not proven",
        "Record of checks, gaps and improvements"
      ],
      cards: [
        {
          label: "Evidence we have",
          body: "117 checks passed on 22 November 2026; earlier sweeps are baseline only.",
          actionLabel: "Paper §IV",
          actionText: "Earlier browser reviews recorded thirteen interaction scenarios and theme and screen-size sweeps."
        },
        {
          label: "Evidence we do not claim",
          body: "No better grades, stronger engagement or improved learning is claimed.",
          actionLabel: "Paper §IV",
          actionText: "No claim of better grades, stronger engagement, or improved learning is made, because no such evaluation has been carried out."
        }
      ],
      scene: {
        id: "objectives-outputs",
        general: "General objective",
        generalText: "An accessible, easy-to-use place that brings reading, practice, tools and study together — honest about what is tested.",
        shelfLabel: "Expected outputs",
        reactions: [
          { companion: "juniper", mood: "cheering", threshold: 0.22, text: "Nine objectives, plainly written." },
          { companion: "moss", mood: "thinking", threshold: 0.52, text: "Each one says what works and what stays open." },
          { companion: "lumen", mood: "happy", threshold: 0.82, text: "The shelf shows what can be demonstrated." }
        ]
      },
      notes: [
        "Give the general objective once, then let the nine cards rotate; do not read every line aloud.",
        "The tenth move is the delivery shelf: these are the things a panel can actually be shown.",
        "Articles stay editorial drafts, and no expert or student trial has been completed."
      ]
    },
    {
      id: "methodology",
      numeral: "V",
      eyebrow: "Paper part five",
      title: "Project Methodology",
      tagline: "Connected pages, one shared reading contract",
      lead: "Each activity keeps its own layout while sharing colours, navigation, sources and safety rules.",
      points: [
        "Web app: installable pages; work stays on the device until sign-in.",
        "Optional hosted sign-in and data; assistant keys stay server-side.",
        "Different because reading, safety, games, tools and companions share one place.",
        "Students first; wider access depends on approved school permissions."
      ],
      timeline: [
        { weeks: "Weeks 1–2", title: "Plan, problem and design", state: "done", group: "pre" },
        { weeks: "Weeks 1–2", title: "Approval and student evidence", state: "pending", group: "pre" },
        { weeks: "Weeks 3–4", title: "Pages, themes and install", state: "done", group: "build" },
        { weeks: "Weeks 3–4", title: "Sign-in trial with real accounts", state: "pending", group: "build" },
        { weeks: "Weeks 3–6", title: "Articles and solver drafts", state: "done", group: "build" },
        { weeks: "Weeks 5–8", title: "Ten games and planner tools", state: "done", group: "build" },
        { weeks: "Weeks 7–8", title: "Rooms and two-person call trial", state: "pending", group: "build" },
        { weeks: "Weeks 9–12", title: "Checks, revision and records", state: "done", group: "build" }
      ],
      risks: [
        { risk: "Sign-in or shared data fails", solution: "Review prepared limits; try real accounts." },
        { risk: "Student information exposed", solution: "Owner-only profiles; collect only what is needed." },
        { risk: "Sources cannot be traced", solution: "List sources; keep drafts hidden; require named review." },
        { risk: "Video calls or messages fail", solution: "Trial two separate users; add a relay only after approval." },
        { risk: "Layout breaks on devices", solution: "Six checked sizes; extend to real devices." },
        { risk: "Companions become shortcuts", solution: "Scripted hints hide answers." },
        { risk: "Time runs short", solution: "Core features first; report integrations as future work." },
        { risk: "No expert or school review", solution: "Keep pending labels; commission a named review." }
      ],
      cards: [
        {
          label: "Innovation difference",
          body: "Several learning functions in one place, with sources shown and safety before convenience.",
          actionLabel: "Paper §V",
          actionText: "The project does not claim to be more effective than other tools. That would need evaluation results which have not been gathered."
        },
        {
          label: "Built-in habits",
          body: "Local-first work, reduced motion, Philippine time, and no outside requests from Budget or Notes.",
          actionLabel: "Paper §III",
          actionText: "Student work is kept on the student's own device by default, and the Budget and Notes sections make no outside requests at all."
        }
      ],
      scene: {
        id: "workbench",
        railLabel: "Twelve-week plan",
        preLabel: "Pre-implementation",
        buildLabel: "Implementation",
        doneLabel: "Done",
        pendingLabel: "Pending",
        risksTitle: "Eight risk pairs",
        riskColumn: "Risk",
        solutionColumn: "Solution",
        reactions: [
          { companion: "moss", mood: "thinking", threshold: 0.14, text: "Build the core first. Name the rest." },
          { companion: "pip", mood: "cheering", threshold: 0.62, text: "Eight risks, eight honest responses." }
        ]
      },
      notes: [
        "Describe the architecture as separate pages with shared tokens and reading rules.",
        "Point to the twelve-week rail: completed work is done; approvals, student evidence and live access stay pending.",
        "Do not imply a teacher dashboard, parent page or administrator area exists."
      ]
    },
    {
      id: "cost",
      numeral: "VI",
      eyebrow: "Paper part six",
      title: "Project Cost",
      tagline: "A prototype with no expenses committed",
      lead: "Development and checking happened locally; the app is shared through a small published set of pages.",
      points: [
        "Total implementation cost: PHP 0.",
        "Free-tier hosting and shared data services.",
        "Existing school devices and internet connection.",
        "A better video connection would need school approval first."
      ],
      cards: [
        {
          label: "Why zero",
          body: "No subscription was bought for this build; free options cover the prototype.",
          actionLabel: "Paper §VI",
          actionText: "A better video connection would be considered only if the one-to-one check-in proves useful and the school approves the expense."
        },
        {
          label: "Approval gate",
          body: "Any paid service is a proposal until the school approves it.",
          actionLabel: "Paper §VI",
          actionText: "State the total as PHP 0; do not invent a price for a service that has not been approved."
        }
      ],
      scene: {
        id: "zero-cost",
        total: "PHP 0",
        totalLabel: "Total implementation cost",
        freeLabel: "Free tier",
        deviceLabel: "Existing devices",
        approvalLabel: "Approval gate",
        approvalText: "Paid service only after school approval",
        reactions: [
          { companion: "lumen", mood: "happy", threshold: 0.2, text: "Zero committed. No invented prices." },
          { companion: "juniper", mood: "thinking", threshold: 0.66, text: "Ask first. Approve before spending." }
        ]
      },
      notes: [
        "State the total as PHP 0 and do not invent amounts.",
        "Name services by category, not by a paid vendor or price.",
        "If asked about video quality, say a relay is only a proposal until the school approves it."
      ]
    },
    {
      id: "evaluation",
      numeral: "VII",
      eyebrow: "Paper part seven",
      title: "Monitoring and Evaluation",
      tagline: "App condition is not student learning",
      lead: "Six criteria guide the next review; the recorded checks describe the app, not student learning.",
      points: [
        "117 checks passed (22 Nov 2026) — app condition, not learning.",
        "Six stations: Functionality · Usability · Accessibility and responsiveness · Reliability · Information quality · Student feedback",
        "Earlier sweeps: thirteen scenarios and six sizes — baseline only.",
        "No student survey or expert article review has happened."
      ],
      criteria: [
        { station: "Functionality", status: "117 checks" },
        { station: "Usability", status: "Trial pending" },
        { station: "Accessibility and responsiveness", status: "Baseline sweep" },
        { station: "Reliability", status: "Local saves checked" },
        { station: "Information quality", status: "Named review pending" },
        { station: "Student feedback", status: "Survey pending" }
      ],
      stillToProve: [
        "Real sign-in",
        "Two-person video trial",
        "Expert review of articles",
        "Student trial and survey",
        "Other browsers",
        "Screen readers"
      ],
      cards: [
        {
          label: "What 117 means",
          body: "Internal evidence about pages, checks and behaviour — not proof of learning.",
          actionLabel: "Paper §VII",
          actionText: "The method, participants, instruments and success standards still need to be set before any student trial."
        },
        {
          label: "Information quality",
          body: "A verified badge needs a named reviewer, a review date, HTTPS and an allowlisted publisher.",
          actionLabel: "Paper §VII",
          actionText: "No entry qualifies yet, and no subject specialist has reviewed the seventeen explainers."
        }
      ],
      scene: {
        id: "evidence-observatory",
        tally: "117 checks passed (22 Nov 2026)",
        stationCount: "Six criteria",
        stillLabel: "Still to prove",
        reactions: [
          { companion: "pip", mood: "cheering", threshold: 0.16, text: "117 checks, clearly labelled." },
          { companion: "moss", mood: "thinking", threshold: 0.64, text: "Checks describe the app, not learning." }
        ]
      },
      notes: [
        "Separate 117 passing checks from human evaluation every time the number is mentioned.",
        "Call the earlier sweeps baseline evidence, not a current full-app certificate.",
        "Be clear that no student survey and no expert article review have happened."
      ]
    },
    {
      id: "sustainability",
      numeral: "VIII",
      eyebrow: "Paper part eight",
      title: "Project Sustainability",
      tagline: "School ownership, review, handover",
      lead: "Sustainability depends on school ownership, accurate content and regular review of access.",
      points: [
        "After approval, make the app available to EAPIHS students.",
        "Named content review before any article or source status changes.",
        "Termly privacy review by the ICT Coordinator and assigned members.",
        "Share at school events; hand records and remaining checks to the next team."
      ],
      handover: [
        "School ownership",
        "Named content review",
        "Termly privacy review",
        "School-event sharing",
        "Verification handover"
      ],
      cards: [
        {
          label: "Verification handover",
          body: "Record sign-in, video, install and review results; keep unverified paths labelled.",
          actionLabel: "Paper §VIII",
          actionText: "Anything unverified should still be clearly labelled when the records are handed over."
        },
        {
          label: "Closing line",
          body: "A future team should inherit evidence, not claims.",
          actionLabel: "Paper §VIII",
          actionText: "Present each feature as a student would meet it, demonstrate what works and state what is still waiting for approval, review or trial."
        }
      ],
      scene: {
        id: "handover-library",
        handoverLabel: "Handover records",
        ownershipLabel: "School ownership",
        reviewLabel: "Named review",
        privacyLabel: "Termly privacy",
        eventLabel: "School events",
        finalLabel: "Evidence, not claims",
        reactions: [
          { companion: "juniper", mood: "cheering", threshold: 0.18, text: "Pack the records, not the promises." },
          { companion: "moss", mood: "happy", threshold: 0.68, text: "Review every term. Keep names and dates." }
        ]
      },
      notes: [
        "End on ownership and evidence, not on a promise of future grades.",
        "Name the term-by-term privacy review as the mechanism that keeps access current.",
        "Ask for approval and review rather than assuming implementation has begun."
      ]
    },
    {
      "id": "tour-today",
      "chapter": "IX",
      "numeral": "01",
      "eyebrow": "Inside CampusVerse · app page 01",
      "title": "Today",
      "tagline": "The daily front door",
      "lead": "Home gathers navigation, the Philippine-time clock and the day's starting points in one calm dashboard.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Start here",
          "body": "One place to reach reading, tools and study rooms.",
          "actionLabel": "Page",
          "actionText": "index.html · src/pages/home.js"
        },
        {
          "label": "Philippine time",
          "body": "Greeting, dates and daily content follow Asia/Manila.",
          "actionLabel": "Proof",
          "actionText": "117 local checks include the PHT clock and page reopening."
        },
        {
          "label": "No cloud required",
          "body": "Local data and reading work without a network call.",
          "actionLabel": "Limit",
          "actionText": "Games and shared rooms need a local demo profile or sign-in."
        },
        {
          "label": "Own layout",
          "body": "The dashboard is not a repeated card template.",
          "actionLabel": "Paper",
          "actionText": "Each main page keeps its own visual identity."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "home",
        "device": "laptop",
        "screenshot": "index-1280.png",
        "screenLabel": "index.html",
        "screenNote": "Local audit screenshot",
        "set": "desk",
        "deskRole": "surface2",
        "camera": {
          "from": {
            "x": -1.4,
            "y": 2.0,
            "z": 6.2,
            "lookX": -0.4,
            "lookY": 0.9,
            "fov": 58,
            "roll": -0.008
          },
          "to": {
            "x": 1.2,
            "y": 1.5,
            "z": 3.4,
            "lookX": 0.3,
            "lookY": 0.7,
            "fov": 54,
            "roll": 0.008
          }
        },
        "companion": "moss",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "moss",
            "mood": "thinking",
            "threshold": 0.14,
            "text": "One door, then a next step."
          },
          {
            "companion": "moss",
            "mood": "happy",
            "threshold": 0.55,
            "text": "The clock is on Manila time."
          }
        ]
      },
      "notes": [
        "Show the dashboard before any feature: this is where a student begins.",
        "Name the Philippine-time clock, but do not claim that it was checked on real devices.",
        "Local-first means work stays on the device until sign-in is chosen."
      ]
    },
    {
      "id": "tour-library",
      "chapter": "IX",
      "numeral": "02",
      "eyebrow": "Inside CampusVerse · app page 02",
      "title": "Knowledge Library",
      "tagline": "Read with the source in view",
      "lead": "Search, filter and read explainers that show their source list and admit their draft status.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "17 explainers",
          "body": "Original short reading across 11 subjects.",
          "actionLabel": "Paper",
          "actionText": "The paper's counts are used in the defence."
        },
        {
          "label": "4 study paths",
          "body": "Trust, planning, daily problems and subject foundations.",
          "actionLabel": "Paper",
          "actionText": "Guided paths are published in the library."
        },
        {
          "label": "Research help",
          "body": "Ask, check the publisher, open the source, record it.",
          "actionLabel": "Status",
          "actionText": "45 links checked 27 Oct 2026; 10 newer entries checked 12 Nov 2026."
        },
        {
          "label": "APA + review gate",
          "body": "Copy an APA citation; no reviewer or date is invented.",
          "actionLabel": "Limit",
          "actionText": "A verified badge needs a named reviewer, review date, HTTPS and an allowlisted publisher."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "library",
        "device": "phone",
        "screenshot": "library-375.png",
        "screenLabel": "library.html",
        "screenNote": "Local audit screenshot",
        "set": "shelf",
        "deskRole": "accentSoft",
        "camera": {
          "from": {
            "x": 1.6,
            "y": 1.8,
            "z": 5.6,
            "lookX": 0.3,
            "lookY": 0.9,
            "fov": 57,
            "roll": 0.01
          },
          "to": {
            "x": -1.3,
            "y": 1.4,
            "z": 3.0,
            "lookX": -0.1,
            "lookY": 0.7,
            "fov": 53,
            "roll": -0.006
          }
        },
        "companion": "lumen",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "lumen",
            "mood": "curious",
            "threshold": 0.16,
            "text": "Who stands behind this page?"
          },
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.58,
            "text": "Sources stay beside the reading."
          }
        ]
      },
      "notes": [
        "Use the paper's 17 explainers and 11 subjects, even though the source now contains more entries.",
        "Open one article and point to the source list and the editorial-draft label.",
        "A checked link is a network check, not a fact check."
      ]
    },
    {
      "id": "tour-article",
      "chapter": "IX",
      "numeral": "03",
      "eyebrow": "Inside CampusVerse · app page 03",
      "title": "Article reader",
      "tagline": "One explanation, traceable",
      "lead": "An article opens by id with its sources, status and citation beside the reading.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Read by id",
          "body": "A library card opens one focused explanation.",
          "actionLabel": "Page",
          "actionText": "article.html · src/pages/article.js"
        },
        {
          "label": "Sources shown",
          "body": "Publisher links stay visible next to the text.",
          "actionLabel": "Status",
          "actionText": "Link checks are recorded with dates; no endorsement is claimed."
        },
        {
          "label": "Citation copy",
          "body": "APA-style citation can be copied for a student's notes.",
          "actionLabel": "Paper",
          "actionText": "Citations follow a recognised style [2]."
        },
        {
          "label": "Print view",
          "body": "The article can be printed from the page.",
          "actionLabel": "Limit",
          "actionText": "All entries remain editorial drafts; none is subject-specialist reviewed."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "article",
        "device": "laptop",
        "screenshot": "article-1280.png",
        "screenLabel": "article.html",
        "screenNote": "Local audit screenshot",
        "set": "shelf",
        "deskRole": "surface",
        "camera": {
          "from": {
            "x": -1.8,
            "y": 1.6,
            "z": 6.4,
            "lookX": -0.2,
            "lookY": 1.0,
            "fov": 59,
            "roll": -0.012
          },
          "to": {
            "x": 1.4,
            "y": 1.3,
            "z": 3.6,
            "lookX": 0.4,
            "lookY": 0.8,
            "fov": 55,
            "roll": 0.01
          }
        },
        "companion": "lumen",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.15,
            "text": "One light, one source list."
          },
          {
            "companion": "lumen",
            "mood": "thinking",
            "threshold": 0.52,
            "text": "Draft means draft."
          }
        ]
      },
      "notes": [
        "This is the page behind the library card, not a new public article collection.",
        "Point to the source list and the status label, not to a grade or review badge.",
        "No article has been approved by a named subject specialist."
      ]
    },
    {
      "id": "tour-solver",
      "chapter": "IX",
      "numeral": "04",
      "eyebrow": "Inside CampusVerse · app page 04",
      "title": "School Problem Solver",
      "tagline": "Safety before troubleshooting",
      "lead": "Twelve school situations are answered with urgent guidance first and ordinary advice only after it.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "12 situations",
          "body": "Gas, electricity, fire, health, focus, study, writing and more.",
          "actionLabel": "Page",
          "actionText": "solver.html · src/data/solver.js"
        },
        {
          "label": "Safety first",
          "body": "Urgent wording suppresses ordinary study advice.",
          "actionLabel": "Rule",
          "actionText": "Emergency guidance always appears before troubleshooting."
        },
        {
          "label": "No hazard repair",
          "body": "Never asks a student to open, reset or investigate a hazard.",
          "actionLabel": "Rule",
          "actionText": "Move away only if safe, contact help and follow instructions."
        },
        {
          "label": "Limited detector",
          "body": "Keyword-based, not a monitor or emergency service.",
          "actionLabel": "Limit",
          "actionText": "Professional review is still outstanding."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "solver",
        "device": "phone",
        "screenshot": "solver-375.png",
        "screenLabel": "solver.html",
        "screenNote": "Local audit screenshot",
        "set": "kiosk",
        "deskRole": "warning",
        "camera": {
          "from": {
            "x": 1.9,
            "y": 2.1,
            "z": 5.8,
            "lookX": 0.4,
            "lookY": 0.9,
            "fov": 56,
            "roll": 0.014
          },
          "to": {
            "x": -1.4,
            "y": 1.6,
            "z": 3.2,
            "lookX": -0.2,
            "lookY": 0.65,
            "fov": 52,
            "roll": -0.01
          }
        },
        "companion": "pip",
        "mood": "idle",
        "prop": "star",
        "reactions": [
          {
            "companion": "pip",
            "mood": "thinking",
            "threshold": 0.14,
            "text": "Ask the bold question first."
          },
          {
            "companion": "pip",
            "mood": "happy",
            "threshold": 0.56,
            "text": "Safety stays in front."
          }
        ]
      },
      "notes": [
        "Demonstrate an urgent phrase and show that safety text comes before study tips.",
        "Never describe the classifier as complete or as a crisis service.",
        "Gas, electrical, fire and chemical hazards are escalation flows, not repair guides."
      ]
    },
    {
      "id": "tour-crisis",
      "chapter": "IX",
      "numeral": "05",
      "eyebrow": "Inside CampusVerse · app page 05",
      "title": "Crisis contacts",
      "tagline": "Numbers to check, not dial",
      "lead": "NCMH, Hopeline and 911 cards link to official pages; the page itself never starts a call.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Three services",
          "body": "NCMH, Hopeline and 911 are presented as contact cards.",
          "actionLabel": "Page",
          "actionText": "emergency.html · src/data/emergency-contacts.js"
        },
        {
          "label": "Official links",
          "body": "Each card opens the source that publishes the number.",
          "actionLabel": "Rule",
          "actionText": "Nothing here dials automatically."
        },
        {
          "label": "8 of 10 checked",
          "body": "Eight numbers checked against official pages on 14 Nov 2026.",
          "actionLabel": "Limit",
          "actionText": "Two NCMH numbers remain marked unconfirmed."
        },
        {
          "label": "Review pending",
          "body": "School review of the contact sheet is still open.",
          "actionLabel": "Limit",
          "actionText": "Do not present the page as an emergency service."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "crisis",
        "device": "phone",
        "screenshot": "emergency-375.png",
        "screenLabel": "emergency.html",
        "screenNote": "Local audit screenshot",
        "set": "kiosk",
        "deskRole": "coral600",
        "camera": {
          "from": {
            "x": -1.7,
            "y": 2.2,
            "z": 5.4,
            "lookX": -0.3,
            "lookY": 0.8,
            "fov": 58,
            "roll": -0.01
          },
          "to": {
            "x": 1.3,
            "y": 1.5,
            "z": 2.9,
            "lookX": 0.2,
            "lookY": 0.6,
            "fov": 54,
            "roll": 0.012
          }
        },
        "companion": "moss",
        "mood": "idle",
        "prop": "star",
        "reactions": [
          {
            "companion": "moss",
            "mood": "calm",
            "threshold": 0.16,
            "text": "Check the number before you call."
          },
          {
            "companion": "moss",
            "mood": "thinking",
            "threshold": 0.57,
            "text": "School review is still open."
          }
        ]
      },
      "notes": [
        "State plainly that the page shows links, not auto-dialling.",
        "Name the checked and unconfirmed counts exactly; do not smooth over the two unconfirmed numbers.",
        "This is a signpost, not counselling or emergency response."
      ]
    },
    {
      "id": "tour-arcade",
      "chapter": "IX",
      "numeral": "06",
      "eyebrow": "Inside CampusVerse · app page 06",
      "title": "Practice Arcade",
      "tagline": "Ten games, no leaderboard",
      "lead": "The game hub opens ten different practice activities with their own rules and controls.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Ten games",
          "body": "Chess, words, equations, mysteries, patterns and more.",
          "actionLabel": "Page",
          "actionText": "arcade.html · games/*.html"
        },
        {
          "label": "Practice only",
          "body": "No rating, rank, leaderboard or school-issued score.",
          "actionLabel": "Rule",
          "actionText": "Practice outcomes are not measured improvement."
        },
        {
          "label": "Different rules",
          "body": "Each game has a separate start, help, pause and restart flow.",
          "actionLabel": "Paper",
          "actionText": "Ten genuinely different practice activities are an objective."
        },
        {
          "label": "Local chess",
          "body": "Stockfish 10 runs in a local Web Worker.",
          "actionLabel": "Limit",
          "actionText": "Positions are not sent to a server; levels are practice descriptions."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "arcade",
        "device": "laptop",
        "screenshot": "arcade-1280.png",
        "screenLabel": "arcade.html",
        "screenNote": "Local audit screenshot",
        "set": "bridge",
        "deskRole": "lav600",
        "camera": {
          "from": {
            "x": 1.7,
            "y": 1.9,
            "z": 6.1,
            "lookX": 0.1,
            "lookY": 0.9,
            "fov": 57,
            "roll": 0.009
          },
          "to": {
            "x": -1.2,
            "y": 1.4,
            "z": 3.5,
            "lookX": -0.1,
            "lookY": 0.7,
            "fov": 53,
            "roll": -0.008
          }
        },
        "companion": "pip",
        "mood": "idle",
        "prop": "chess",
        "reactions": [
          {
            "companion": "pip",
            "mood": "cheering",
            "threshold": 0.13,
            "text": "Ten doors, no scoreboard."
          },
          {
            "companion": "pip",
            "mood": "happy",
            "threshold": 0.54,
            "text": "Practice is the point."
          }
        ]
      },
      "notes": [
        "Name the ten games only as practice; do not imply a rank or measured gain.",
        "Chess uses a local engine and a separate board palette.",
        "The paper's ten-game count is intentional even though the current source has eleven pages."
      ]
    },
    {
      "id": "tour-planner",
      "chapter": "IX",
      "numeral": "07",
      "eyebrow": "Inside CampusVerse · app page 07",
      "title": "Planner",
      "tagline": "Tasks, Budget, Notes",
      "lead": "One planner holds the weekly task board, a pesos-and-centavos budget and a local notes studio.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Tasks",
          "body": "Task list and week board with local saving and warnings.",
          "actionLabel": "Page",
          "actionText": "planner.html#tasks"
        },
        {
          "label": "Budget",
          "body": "PHP planning, CSV, print and validated JSON backup.",
          "actionLabel": "Limit",
          "actionText": "Planning aid only; no bank, wallet or financial advice."
        },
        {
          "label": "Notes Studio",
          "body": "Local notes with strict HTML sanitisation and exports.",
          "actionLabel": "Limit",
          "actionText": "DOCX/PDF browser rendering remains unverified."
        },
        {
          "label": "Local-first",
          "body": "Student and teacher views change layout, never permissions.",
          "actionLabel": "Proof",
          "actionText": "Budget and Notes make no outside requests."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "planner",
        "device": "laptop",
        "screenshot": "planner-1280.png",
        "screenLabel": "planner.html",
        "screenNote": "Local audit screenshot",
        "set": "desk",
        "deskRole": "blue700",
        "camera": {
          "from": {
            "x": -1.3,
            "y": 2.0,
            "z": 6.6,
            "lookX": -0.5,
            "lookY": 0.95,
            "fov": 58,
            "roll": -0.007
          },
          "to": {
            "x": 1.1,
            "y": 1.5,
            "z": 3.7,
            "lookX": 0.2,
            "lookY": 0.75,
            "fov": 54,
            "roll": 0.009
          }
        },
        "companion": "juniper",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "juniper",
            "mood": "thinking",
            "threshold": 0.15,
            "text": "Three tabs, one quiet plan."
          },
          {
            "companion": "juniper",
            "mood": "happy",
            "threshold": 0.58,
            "text": "Save a copy before you leave."
          }
        ]
      },
      "notes": [
        "Keep the original Tasks behaviour unchanged when describing the added tabs.",
        "Budget uses integer centavos and neutralises spreadsheet formulas on export.",
        "Notes sanitises HTML on load, paste, import and export."
      ]
    },
    {
      "id": "tour-groups",
      "chapter": "IX",
      "numeral": "08",
      "eyebrow": "Inside CampusVerse · app page 08",
      "title": "Study Rooms",
      "tagline": "A place to study together",
      "lead": "Rooms can be created or joined with a code, with member-only metadata and registry-driven activities.",
      "status": {
        "text": "Prepared, not verified",
        "kind": "prepared"
      },
      "points": [],
      "cards": [
        {
          "label": "Create or join",
          "body": "Room codes open a shared study space.",
          "actionLabel": "Page",
          "actionText": "groups.html · src/pages/groups.js"
        },
        {
          "label": "Member rules",
          "body": "Only current members can be listed as players or invitees.",
          "actionLabel": "Rule",
          "actionText": "Owners delete rooms; narrow membership mutations are enforced."
        },
        {
          "label": "Activities",
          "body": "A published registry decides which shared games can be invited.",
          "actionLabel": "Rule",
          "actionText": "Raw game ids from a URL or chat are not trusted."
        },
        {
          "label": "Still to prove",
          "body": "Two real signed-in clients have not been tried.",
          "actionLabel": "Status",
          "actionText": "Prepared with rules and synthetic checks, not live-verified."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "groups",
        "device": "phone",
        "screenshot": "groups-375.png",
        "screenLabel": "groups.html",
        "screenNote": "Local audit screenshot",
        "set": "bridge",
        "deskRole": "sage600",
        "camera": {
          "from": {
            "x": 1.5,
            "y": 2.0,
            "z": 5.9,
            "lookX": 0.2,
            "lookY": 0.9,
            "fov": 57,
            "roll": 0.01
          },
          "to": {
            "x": -1.4,
            "y": 1.4,
            "z": 3.2,
            "lookX": -0.2,
            "lookY": 0.65,
            "fov": 53,
            "roll": -0.009
          }
        },
        "companion": "moss",
        "mood": "idle",
        "prop": "board",
        "reactions": [
          {
            "companion": "moss",
            "mood": "curious",
            "threshold": 0.16,
            "text": "One room, one clear member list."
          },
          {
            "companion": "moss",
            "mood": "thinking",
            "threshold": 0.56,
            "text": "Two real clients still to test."
          }
        ]
      },
      "notes": [
        "Describe Firestore rules as prepared, not as a live-access certificate.",
        "Group list queries use memberIds plus createdAt so the composite index applies.",
        "There is no public player page, ranking or leaderboard."
      ]
    },
    {
      "id": "tour-chat",
      "chapter": "IX",
      "numeral": "09",
      "eyebrow": "Inside CampusVerse · app page 09",
      "title": "Room chat + video",
      "tagline": "Messages and a 1:1 check-in",
      "lead": "Room messages and activity invitations share the room; the one-to-one video check-in remains a trial gate.",
      "status": {
        "text": "Prepared, not verified",
        "kind": "prepared"
      },
      "points": [],
      "cards": [
        {
          "label": "Room messages",
          "body": "Chat lives in group messages, not an unbounded array.",
          "actionLabel": "Page",
          "actionText": "group-chat.html · groups/{id}/messages"
        },
        {
          "label": "In-page notices",
          "body": "Call notices and lounges use aria-live, not push alerts.",
          "actionLabel": "Limit",
          "actionText": "The Node WebSocket module is legacy and unused."
        },
        {
          "label": "One-to-one video",
          "body": "Firestore signaling with public STUN by default.",
          "actionLabel": "Status",
          "actionText": "Awaiting two-person test."
        },
        {
          "label": "Not included",
          "body": "No TURN relay, recording, moderation or multi-party call.",
          "actionLabel": "Status",
          "actionText": "Prepared, not verified with separate real users."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "chat",
        "device": "phone",
        "screenshot": "group-chat-375.png",
        "screenLabel": "group-chat.html",
        "screenNote": "Local audit screenshot",
        "set": "bridge",
        "deskRole": "blue700",
        "camera": {
          "from": {
            "x": -1.6,
            "y": 1.9,
            "z": 5.7,
            "lookX": -0.2,
            "lookY": 0.85,
            "fov": 58,
            "roll": -0.011
          },
          "to": {
            "x": 1.4,
            "y": 1.4,
            "z": 3.1,
            "lookX": 0.2,
            "lookY": 0.65,
            "fov": 54,
            "roll": 0.008
          }
        },
        "companion": "juniper",
        "mood": "idle",
        "prop": "board",
        "reactions": [
          {
            "companion": "juniper",
            "mood": "thinking",
            "threshold": 0.15,
            "text": "Messages stay in the room."
          },
          {
            "companion": "juniper",
            "mood": "calm",
            "threshold": 0.55,
            "text": "Video waits for two people."
          }
        ]
      },
      "notes": [
        "Show the call label as awaiting two-person test; do not call it a verified call.",
        "The synthetic same-browser harness is local evidence only.",
        "No recording, moderation, multi-party support or TURN relay is claimed."
      ]
    },
    {
      "id": "tour-calculator",
      "chapter": "IX",
      "numeral": "10",
      "eyebrow": "Inside CampusVerse · app page 10",
      "title": "Calculator",
      "tagline": "A safe parser, not eval",
      "lead": "Scientific arithmetic, memory and history are evaluated by a tokenizer and parser.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Scientific",
          "body": "Powers, roots, percentages, logs, trigonometry and constants.",
          "actionLabel": "Page",
          "actionText": "calculator.html · calculator.js"
        },
        {
          "label": "Safe input",
          "body": "No eval or Function for any user expression.",
          "actionLabel": "Rule",
          "actionText": "The tokenizer/parser path handles every calculation."
        },
        {
          "label": "Memory + history",
          "body": "Past work can be reviewed and reused.",
          "actionLabel": "Proof",
          "actionText": "Calculator behaviour is among the 117 local checks."
        },
        {
          "label": "Clear errors",
          "body": "Impossible input produces a visible error.",
          "actionLabel": "Limit",
          "actionText": "No result is sent to a server."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "calculator",
        "device": "phone",
        "screenshot": "calculator-375.png",
        "screenLabel": "calculator.html",
        "screenNote": "Local audit screenshot",
        "set": "desk",
        "deskRole": "surface",
        "camera": {
          "from": {
            "x": 1.8,
            "y": 1.7,
            "z": 5.5,
            "lookX": 0.3,
            "lookY": 0.9,
            "fov": 56,
            "roll": 0.012
          },
          "to": {
            "x": -1.2,
            "y": 1.3,
            "z": 3.0,
            "lookX": -0.1,
            "lookY": 0.65,
            "fov": 52,
            "roll": -0.007
          }
        },
        "companion": "pip",
        "mood": "idle",
        "prop": "calculator",
        "reactions": [
          {
            "companion": "pip",
            "mood": "cheering",
            "threshold": 0.14,
            "text": "Ask the equation, not eval."
          },
          {
            "companion": "pip",
            "mood": "happy",
            "threshold": 0.55,
            "text": "Every step stays local."
          }
        ]
      },
      "notes": [
        "Explicitly say the calculator does not use eval or Function.",
        "The parser was built for calculator input, not arbitrary code.",
        "History is on the device; no network request is part of a calculation."
      ]
    },
    {
      "id": "tour-companions",
      "chapter": "IX",
      "numeral": "11",
      "eyebrow": "Inside CampusVerse · app page 11",
      "title": "Animated Companions",
      "tagline": "Four scripted study partners",
      "lead": "Moss, Pip, Lumen and Juniper give deterministic encouragement, hints and short explanations.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Four personalities",
          "body": "Steady, bold, observant and ink-pawed.",
          "actionLabel": "Page",
          "actionText": "companions.html · src/data/companions.js"
        },
        {
          "label": "Scripted moods",
          "body": "Bright, calm, sleepy, proud and curious lines are written in advance.",
          "actionLabel": "Limit",
          "actionText": "They are drawings, not live helpers or therapists."
        },
        {
          "label": "Hints, not answers",
          "body": "Content rules keep complete answers hidden.",
          "actionLabel": "Limit",
          "actionText": "No companion is crisis support."
        },
        {
          "label": "No cross-device memory",
          "body": "Visit counts stay in the current browser.",
          "actionLabel": "Status",
          "actionText": "Scripted companions; no check record is claimed."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "companions",
        "device": "laptop",
        "screenshot": "companions-1280.png",
        "screenLabel": "companions.html",
        "screenNote": "Local audit screenshot",
        "set": "shelf",
        "deskRole": "gold600",
        "camera": {
          "from": {
            "x": -1.5,
            "y": 1.8,
            "z": 6.0,
            "lookX": -0.3,
            "lookY": 0.9,
            "fov": 59,
            "roll": -0.01
          },
          "to": {
            "x": 1.3,
            "y": 1.4,
            "z": 3.3,
            "lookX": 0.2,
            "lookY": 0.7,
            "fov": 55,
            "roll": 0.011
          }
        },
        "companion": "lumen",
        "mood": "idle",
        "prop": "star",
        "reactions": [
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.13,
            "text": "Small light, small step."
          },
          {
            "companion": "lumen",
            "mood": "curious",
            "threshold": 0.54,
            "text": "Written lines, not a live mind."
          }
        ]
      },
      "notes": [
        "Use the exact names Moss, Pip, Lumen and Juniper.",
        "Say scripted and deterministic; do not imply an AI companion.",
        "They never replace a teacher, counsellor or emergency service."
      ]
    },
    {
      "id": "tour-strands",
      "chapter": "IX",
      "numeral": "12",
      "eyebrow": "Inside CampusVerse · app page 12",
      "title": "Strands & Well-being",
      "tagline": "Calm prompts, no data",
      "lead": "The hub gathers official links, safe ICT scenarios, hazard flows and reflection prompts without collecting personal data.",
      "status": {
        "text": "Prepared, not verified",
        "kind": "prepared"
      },
      "points": [],
      "cards": [
        {
          "label": "Official links",
          "body": "18 video links to official channels, never embedded players.",
          "actionLabel": "Limit",
          "actionText": "A link check is not a fact check or endorsement."
        },
        {
          "label": "ICT + hazards",
          "body": "10 ordinary scenarios and 6 terminal hazard flows.",
          "actionLabel": "Rule",
          "actionText": "Hazards point to emergency help and adult escalation only."
        },
        {
          "label": "Reflection only",
          "body": "Citizenship checks have no input, score or persistence.",
          "actionLabel": "Limit",
          "actionText": "Prompts are study aids, not diagnosis or counselling."
        },
        {
          "label": "No collection",
          "body": "No analytics, cloud storage or mood history.",
          "actionLabel": "Status",
          "actionText": "Local deterministic tools only."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "strands",
        "device": "laptop",
        "screenshot": null,
        "screenLabel": "strands.html",
        "screenNote": "Local source mock",
        "set": "shelf",
        "deskRole": "sage600",
        "camera": {
          "from": {
            "x": 1.6,
            "y": 2.1,
            "z": 6.3,
            "lookX": 0.1,
            "lookY": 1.0,
            "fov": 57,
            "roll": 0.008
          },
          "to": {
            "x": -1.2,
            "y": 1.5,
            "z": 3.6,
            "lookX": -0.1,
            "lookY": 0.75,
            "fov": 53,
            "roll": -0.01
          }
        },
        "companion": "moss",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "moss",
            "mood": "calm",
            "threshold": 0.15,
            "text": "Observe, change one thing, record."
          },
          {
            "companion": "moss",
            "mood": "thinking",
            "threshold": 0.56,
            "text": "No mood history here."
          }
        ],
        "mock": {
          "header": "Strands & Well-being",
          "sub": "Official links · reflection · safe ICT",
          "tiles": [
            "Videos",
            "Well-being prompts",
            "ICT scenarios",
            "Hazard flows",
            "Citizenship checks",
            "Tool registry"
          ],
          "footer": "No personal data collected"
        }
      },
      "notes": [
        "This hub is a source addition absent from the paper; keep it honest.",
        "Official videos remain links, never downloaded or rehosted files.",
        "Urgent classifications suppress ordinary troubleshooting text."
      ]
    },
    {
      "id": "tour-assistant",
      "chapter": "IX",
      "numeral": "13",
      "eyebrow": "Inside CampusVerse · app page 13",
      "title": "Study Assistant",
      "tagline": "Safety before any model call",
      "lead": "The assistant checks urgent language first, then uses approved notes through a server-side route.",
      "status": {
        "text": "Prepared, not verified",
        "kind": "prepared"
      },
      "points": [],
      "cards": [
        {
          "label": "Safety gate",
          "body": "Urgent guidance runs before any provider request.",
          "actionLabel": "Rule",
          "actionText": "The assistant is not an emergency service."
        },
        {
          "label": "Server route",
          "body": "Gemini-first with an OpenAI-compatible fallback behind /api/assistant.",
          "actionLabel": "Limit",
          "actionText": "Provider keys stay in .env or a hosting secret store."
        },
        {
          "label": "Approved notes",
          "body": "Keyword retrieval over server knowledge notes.",
          "actionLabel": "Limit",
          "actionText": "Retrieval-augmented prompting, not fine-tuning or browsing."
        },
        {
          "label": "Live path untested",
          "body": "No live Gemini key has been exercised.",
          "actionLabel": "Status",
          "actionText": "Prepared, not verified; answers may be English or Filipino."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "assistant",
        "device": "laptop",
        "screenshot": "assistant-1280.png",
        "screenLabel": "assistant.html",
        "screenNote": "Local audit screenshot",
        "set": "kiosk",
        "deskRole": "lav600",
        "camera": {
          "from": {
            "x": -1.9,
            "y": 1.9,
            "z": 6.2,
            "lookX": -0.2,
            "lookY": 0.95,
            "fov": 58,
            "roll": -0.013
          },
          "to": {
            "x": 1.4,
            "y": 1.4,
            "z": 3.4,
            "lookX": 0.3,
            "lookY": 0.7,
            "fov": 54,
            "roll": 0.009
          }
        },
        "companion": "pip",
        "mood": "idle",
        "prop": "star",
        "reactions": [
          {
            "companion": "pip",
            "mood": "curious",
            "threshold": 0.14,
            "text": "Ask, but safety first."
          },
          {
            "companion": "pip",
            "mood": "thinking",
            "threshold": 0.55,
            "text": "Retrieval is not a policy database."
          }
        ]
      },
      "notes": [
        "Do not claim live Gemini verification while the key is empty or untested.",
        "Describe keyword retrieval precisely; avoid saying fine-tuned or browsing.",
        "English or Filipino answers do not mean full app localisation."
      ]
    },
    {
      "id": "tour-profile",
      "chapter": "IX",
      "numeral": "14",
      "eyebrow": "Inside CampusVerse · app page 14",
      "title": "Private Profile",
      "tagline": "Owner-only, never public",
      "lead": "A student can edit a private profile and a cropped avatar, with no public player page or report.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Owner-only",
          "body": "Profile reads and writes are restricted to the owner.",
          "actionLabel": "Page",
          "actionText": "profile.html · src/pages/profile.js"
        },
        {
          "label": "Private avatar",
          "body": "The only upload is a cropped image at avatars/{uid}.",
          "actionLabel": "Limit",
          "actionText": "Live Storage upload is still unverified."
        },
        {
          "label": "No public identity",
          "body": "No ranking, rating, leaderboard or player page exists.",
          "actionLabel": "Limit",
          "actionText": "Firestore profiles omit email; local sign-in may keep it."
        },
        {
          "label": "Demo is local",
          "body": "Demo mode is unsecured and stays in this browser.",
          "actionLabel": "Status",
          "actionText": "Prepared, not production authentication."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "profile",
        "device": "phone",
        "screenshot": "profile-375.png",
        "screenLabel": "profile.html",
        "screenNote": "Local audit screenshot",
        "set": "table",
        "deskRole": "blue700",
        "camera": {
          "from": {
            "x": 1.7,
            "y": 1.8,
            "z": 5.6,
            "lookX": 0.3,
            "lookY": 0.85,
            "fov": 56,
            "roll": 0.011
          },
          "to": {
            "x": -1.3,
            "y": 1.3,
            "z": 3.0,
            "lookX": -0.1,
            "lookY": 0.6,
            "fov": 52,
            "roll": -0.008
          }
        },
        "companion": "juniper",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "juniper",
            "mood": "thinking",
            "threshold": 0.16,
            "text": "Private by design."
          },
          {
            "companion": "juniper",
            "mood": "happy",
            "threshold": 0.55,
            "text": "No public player page."
          }
        ]
      },
      "notes": [
        "Never show a public profile, ranking or report screen.",
        "Storage rules are written locally but unpublished and unverified; a live avatar upload has not been demonstrated.",
        "Demo mode is explicitly local and unsecured."
      ]
    },
    {
      "id": "tour-login",
      "chapter": "IX",
      "numeral": "15",
      "eyebrow": "Inside CampusVerse · app page 15",
      "title": "Sign-in gate",
      "tagline": "Firebase, or local demo",
      "lead": "Firebase sign-in is prepared for real accounts. The automatic ?demo=1 path is ignored when Firebase is configured; a labelled local demo tab remains available.",
      "status": {
        "text": "Prepared, not verified",
        "kind": "prepared"
      },
      "points": [],
      "cards": [
        {
          "label": "Firebase auth",
          "body": "Real sign-in is wired to the live project configuration.",
          "actionLabel": "Status",
          "actionText": "Prepared, not verified with real student accounts."
        },
        {
          "label": "Demo gate",
          "body": "The automatic ?demo=1 path is ignored when Firebase is configured.",
          "actionLabel": "Rule",
          "actionText": "A labelled local demo tab still opens with ?mode=demo."
        },
        {
          "label": "Prepared rules",
          "body": "Owner-only and group access rules compile cleanly.",
          "actionLabel": "Limit",
          "actionText": "A written rule is not a live access test."
        },
        {
          "label": "Keys in private",
          "body": "Public client config is separate from server secrets.",
          "actionLabel": "Rule",
          "actionText": "No provider key belongs in browser code or the build."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "login",
        "device": "laptop",
        "screenshot": "login-1280.png",
        "screenLabel": "login.html",
        "screenNote": "Local audit screenshot",
        "set": "kiosk",
        "deskRole": "textStrong",
        "camera": {
          "from": {
            "x": -1.6,
            "y": 2.0,
            "z": 6.0,
            "lookX": -0.3,
            "lookY": 0.9,
            "fov": 58,
            "roll": -0.009
          },
          "to": {
            "x": 1.3,
            "y": 1.5,
            "z": 3.3,
            "lookX": 0.2,
            "lookY": 0.7,
            "fov": 54,
            "roll": 0.01
          }
        },
        "companion": "moss",
        "mood": "idle",
        "prop": "star",
        "reactions": [
          {
            "companion": "moss",
            "mood": "calm",
            "threshold": 0.15,
            "text": "Demo is not production."
          },
          {
            "companion": "moss",
            "mood": "thinking",
            "threshold": 0.56,
            "text": "Real accounts still need a trial."
          }
        ]
      },
      "notes": [
        "Keep real sign-in and demo mode visibly separate.",
        "Do not say Firebase Auth or Firestore has been live-verified.",
        "Never place a key in browser code, dist, tests or docs."
      ]
    },
    {
      "id": "tour-install",
      "chapter": "IX",
      "numeral": "16",
      "eyebrow": "Inside CampusVerse · app page 16",
      "title": "Install Guide",
      "tagline": "Return to the app easily",
      "lead": "PWA metadata and a QR explain return visits; separate written steps cover iPhone/iPad and Android.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "PWA basics",
          "body": "Manifest, icons and a local service worker support return visits.",
          "actionLabel": "Page",
          "actionText": "install.html · manifest.webmanifest · sw.js"
        },
        {
          "label": "QR + URL",
          "body": "A bundled QR and copyable address reduce typing errors.",
          "actionLabel": "Proof",
          "actionText": "Service-worker exclusions are among the 117 local checks."
        },
        {
          "label": "Platform steps",
          "body": "iPhone/iPad and Android steps are written separately.",
          "actionLabel": "Limit",
          "actionText": "Computers use the browser install prompt or menu; no device trial."
        },
        {
          "label": "Open trial",
          "body": "A clean install and offline trial remain pending.",
          "actionLabel": "Status",
          "actionText": "Prepared, not verified end to end."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "install",
        "device": "phone",
        "screenshot": "install-375.png",
        "screenLabel": "install.html",
        "screenNote": "Local audit screenshot",
        "set": "table",
        "deskRole": "accentSoft",
        "camera": {
          "from": {
            "x": 1.6,
            "y": 1.9,
            "z": 5.8,
            "lookX": 0.2,
            "lookY": 0.85,
            "fov": 57,
            "roll": 0.013
          },
          "to": {
            "x": -1.2,
            "y": 1.4,
            "z": 3.1,
            "lookX": -0.1,
            "lookY": 0.6,
            "fov": 53,
            "roll": -0.007
          }
        },
        "companion": "juniper",
        "mood": "idle",
        "prop": "books",
        "reactions": [
          {
            "companion": "juniper",
            "mood": "happy",
            "threshold": 0.15,
            "text": "Install once, return easily."
          },
          {
            "companion": "juniper",
            "mood": "thinking",
            "threshold": 0.56,
            "text": "Clean install still to try."
          }
        ]
      },
      "notes": [
        "Do not claim a clean install or offline trial that has not happened.",
        "Service-worker caching is same-origin only.",
        "The QR and URL are local guidance, not an external service."
      ]
    },
    {
      "id": "tour-appearance",
      "chapter": "IX",
      "numeral": "17",
      "eyebrow": "Inside CampusVerse · app page 17",
      "title": "Appearance",
      "tagline": "Theme, subject, motion",
      "lead": "Twelve colour themes, sixteen subject looks and reduced motion are saved before the page paints.",
      "status": {
        "text": "Verified in local checks",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "12 colour themes",
          "body": "Ivory through High contrast, plus Follow device.",
          "actionLabel": "Proof",
          "actionText": "Themes are among the 117 local checks."
        },
        {
          "label": "16 subject looks",
          "body": "An additive skin layer over the chosen colour theme.",
          "actionLabel": "Rule",
          "actionText": "Subject looks do not change page content."
        },
        {
          "label": "Reduced motion",
          "body": "A saved preference is applied with the theme before paint.",
          "actionLabel": "Limit",
          "actionText": "New colours need a fresh contrast audit; no screen-reader claim is made."
        },
        {
          "label": "Local settings",
          "body": "Preferences stay in this browser.",
          "actionLabel": "Status",
          "actionText": "Verified in local checks, not on physical devices or other browsers."
        }
      ],
      "scene": {
        "id": "app-tour",
        "pageId": "appearance",
        "device": "laptop",
        "screenshot": null,
        "screenLabel": "settings panel",
        "screenNote": "Local source mock",
        "set": "desk",
        "deskRole": "accent",
        "camera": {
          "from": {
            "x": -1.4,
            "y": 2.1,
            "z": 6.4,
            "lookX": -0.4,
            "lookY": 0.95,
            "fov": 59,
            "roll": -0.008
          },
          "to": {
            "x": 1.2,
            "y": 1.5,
            "z": 3.5,
            "lookX": 0.3,
            "lookY": 0.7,
            "fov": 55,
            "roll": 0.012
          }
        },
        "companion": "lumen",
        "mood": "idle",
        "prop": "star",
        "reactions": [
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.14,
            "text": "Twelve colours, sixteen skins."
          },
          {
            "companion": "lumen",
            "mood": "calm",
            "threshold": 0.55,
            "text": "Motion can be reduced."
          }
        ],
        "mock": {
          "header": "Appearance",
          "sub": "Colour · subject look · motion",
          "tiles": [
            "12 colour themes",
            "Follow device",
            "16 subject looks",
            "Reduced motion",
            "Saved before paint",
            "Local browser only"
          ],
          "footer": "Contrast audit still required for new colours"
        }
      },
      "notes": [
        "Appearance settings is a panel, not an eighteenth HTML route; it is the required final tour stop.",
        "Follow device is a saved choice, not a thirteenth theme.",
        "Do not claim a screen-reader or cross-browser audit from the local contrast check."
      ]
    },
    {
      "id": "game-chess",
      "chapter": "X",
      "numeral": "01",
      "eyebrow": "Inside CampusVerse · game 01",
      "title": "Campus Chess",
      "tagline": "Five-level practice opponent",
      "lead": "Click a piece, then a highlighted square. Five practice levels and pass-and-play share the same local board.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Five levels",
          "body": "Distinct practice depth, time and skill settings.",
          "actionLabel": "Limit",
          "actionText": "Levels are practice descriptions, not Elo or FIDE ratings."
        },
        {
          "label": "Pass-and-play",
          "body": "Two people can alternate sides on one device.",
          "actionLabel": "Rule",
          "actionText": "A local demo profile or Firebase sign-in opens the game page."
        },
        {
          "label": "Local engine",
          "body": "Stockfish 10 runs in a Web Worker on the device.",
          "actionLabel": "Limit",
          "actionText": "Positions are not sent to a server; hints stay local."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "chess",
        "set": "board",
        "role": "sage600",
        "companion": "pip",
        "mood": "cheering",
        "prop": "chess",
        "demo": "A knight lifts, arcs to an L-shaped square and settles while the board token pulses.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "pip",
            "mood": "thinking",
            "threshold": 0.12,
            "text": "Pick a level, then move a piece."
          },
          {
            "companion": "pip",
            "mood": "cheering",
            "threshold": 0.58,
            "text": "A knight's move, in practice."
          }
        ]
      },
      "notes": [
        "The five levels are genuinely different practice settings, not verified rating equivalents.",
        "Chess uses a local engine and a separate board palette; positions never leave the device.",
        "There is no rating, rank, leaderboard or measured improvement claim."
      ]
    },
    {
      "id": "game-word",
      "chapter": "X",
      "numeral": "02",
      "eyebrow": "Inside CampusVerse · game 02",
      "title": "Word Forge",
      "tagline": "Unscramble with a clue",
      "lead": "Unscramble one of 120 school words using a clue, shuffle the letters or take one hint. Type the word or click letter tiles.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "120 words",
          "body": "A fixed word bank drawn from school topics.",
          "actionLabel": "Paper",
          "actionText": "The paper names ten different practice games, not a content library."
        },
        {
          "label": "Gentle hints",
          "body": "Shuffle the tiles or reveal one hint when stuck.",
          "actionLabel": "Rule",
          "actionText": "Hints support practice; they are not graded answers."
        },
        {
          "label": "No timer",
          "body": "There is no countdown pressure in this game.",
          "actionLabel": "Limit",
          "actionText": "Completion feedback stays on the device."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "word",
        "set": "forge",
        "role": "gold600",
        "companion": "lumen",
        "mood": "happy",
        "prop": "star",
        "demo": "Six letter bars shuffle across the anvil, then click into an ordered word strip.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "lumen",
            "mood": "curious",
            "threshold": 0.14,
            "text": "Letters can be rearranged."
          },
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.56,
            "text": "One hint is enough."
          }
        ]
      },
      "notes": [
        "This is a spelling and clue game, not a measured vocabulary assessment.",
        "The letters and word bank are fixed; no generated content is used.",
        "Scores and XP stay local, with no ranking or leaderboard."
      ]
    },
    {
      "id": "game-equation",
      "chapter": "X",
      "numeral": "03",
      "eyebrow": "Inside CampusVerse · game 03",
      "title": "Equation Forge",
      "tagline": "Solve for x",
      "lead": "Solve linear equations for x across three difficulty bands. Fractions are accepted and answers are checked exactly.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Three bands",
          "body": "Linear equations increase in difficulty across three bands.",
          "actionLabel": "Rule",
          "actionText": "Each band is practice, not a school placement test."
        },
        {
          "label": "Exact check",
          "body": "Type the value of x and press Enter.",
          "actionLabel": "Proof",
          "actionText": "Fraction answers are accepted and checked exactly."
        },
        {
          "label": "Clear feedback",
          "body": "The response tells whether the value satisfies the equation.",
          "actionLabel": "Limit",
          "actionText": "No result is sent to a server or recorded publicly."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "equation",
        "set": "balance",
        "role": "blue700",
        "companion": "juniper",
        "mood": "thinking",
        "prop": "calculator",
        "demo": "A balance beam tilts, an x tile drops onto the lighter pan and the beam returns to level.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "juniper",
            "mood": "thinking",
            "threshold": 0.13,
            "text": "Keep both sides level."
          },
          {
            "companion": "juniper",
            "mood": "proud",
            "threshold": 0.57,
            "text": "The x tile is correct."
          }
        ]
      },
      "notes": [
        "Equations are checked exactly; a near miss is not rounded into a pass.",
        "The three bands are practice settings, not grade levels or certification.",
        "Local scores and XP are not a ranking or leaderboard."
      ]
    },
    {
      "id": "game-mystery",
      "chapter": "X",
      "numeral": "04",
      "eyebrow": "Inside CampusVerse · game 04",
      "title": "The Missing Margin",
      "tagline": "Mark, accuse, check",
      "lead": "Read one of three original mini-mysteries, mark suspects cleared or accused, then accuse and check the reasoning against every clue.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Three mysteries",
          "body": "Short original cases with their own clue sets.",
          "actionLabel": "Paper",
          "actionText": "The game is listed among ten different practice activities."
        },
        {
          "label": "Suspect board",
          "body": "Mark each suspect cleared or accused before choosing.",
          "actionLabel": "Rule",
          "actionText": "The check compares the accusation with every clue."
        },
        {
          "label": "Reasoning first",
          "body": "Feedback explains which clues support the answer.",
          "actionLabel": "Limit",
          "actionText": "This is practice reasoning, not an exam result."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "mystery",
        "set": "dossier",
        "role": "lav600",
        "companion": "lumen",
        "mood": "curious",
        "prop": "books",
        "demo": "Clue pins light in sequence and an accusation marker moves to the supported suspect.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "lumen",
            "mood": "curious",
            "threshold": 0.15,
            "text": "Which clue rules them out?"
          },
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.58,
            "text": "The margin is solved."
          }
        ]
      },
      "notes": [
        "The mysteries are original and do not claim a real case or specialist review.",
        "The check is against the written clues, not against an external answer key.",
        "No rank, leaderboard or public player page is attached to the result."
      ]
    },
    {
      "id": "game-pattern",
      "chapter": "X",
      "numeral": "05",
      "eyebrow": "Inside CampusVerse · game 05",
      "title": "Pattern Pursuit",
      "tagline": "Next term, four choices",
      "lead": "Choose the next term in number or shape sequences. Three lives and a streak keep the practice light; wrong answers explain the rule.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Sequences",
          "body": "Number and shape patterns share one clear track.",
          "actionLabel": "Rule",
          "actionText": "Choose one of four options for the next term."
        },
        {
          "label": "Three lives",
          "body": "Wrong answers explain the rule before play continues.",
          "actionLabel": "Limit",
          "actionText": "A streak is local practice feedback, not a rank."
        },
        {
          "label": "Quick turns",
          "body": "Each turn is short enough to pause and resume.",
          "actionLabel": "Paper",
          "actionText": "Games include start, restart and completion feedback."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "pattern",
        "set": "track",
        "role": "coral600",
        "companion": "pip",
        "mood": "cheering",
        "prop": "star",
        "demo": "A highlight runs along five sequence nodes, then selects the matching option pedestal.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "pip",
            "mood": "cheering",
            "threshold": 0.14,
            "text": "What comes next?"
          },
          {
            "companion": "pip",
            "mood": "proud",
            "threshold": 0.57,
            "text": "The rule holds."
          }
        ]
      },
      "notes": [
        "Pattern Pursuit is a short practice loop, not a psychometric or aptitude test.",
        "Wrong turns explain the rule; they are not a grade.",
        "Scores and XP remain on the student's device with no ranking."
      ]
    },
    {
      "id": "game-memory",
      "chapter": "X",
      "numeral": "06",
      "eyebrow": "Inside CampusVerse · game 06",
      "title": "Study Shelf",
      "tagline": "Pairs without pressure",
      "lead": "Turn over pairs of subject-symbol cards with a move counter and no time pressure. Click two cards to find a pair.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Subject symbols",
          "body": "Pairs use recognisable school-subject symbols.",
          "actionLabel": "Paper",
          "actionText": "The games are practice activities, not subject placement tests."
        },
        {
          "label": "Move counter",
          "body": "A move count replaces a countdown timer.",
          "actionLabel": "Rule",
          "actionText": "There is no time pressure in this game."
        },
        {
          "label": "Turn and match",
          "body": "Click two cards to reveal and compare them.",
          "actionLabel": "Limit",
          "actionText": "The board resets locally on restart."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "memory",
        "set": "shelf",
        "role": "sage600",
        "companion": "moss",
        "mood": "calm",
        "prop": "books",
        "demo": "Two cards rotate open on a shelf, hold as a match, then close for the next turn.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "moss",
            "mood": "calm",
            "threshold": 0.15,
            "text": "Turn one card, then another."
          },
          {
            "companion": "moss",
            "mood": "proud",
            "threshold": 0.58,
            "text": "A matching pair."
          }
        ]
      },
      "notes": [
        "Study Shelf is a memory practice game with no time limit.",
        "The subject symbols are decorative; no curriculum mapping is claimed.",
        "Local scores and XP are not a leaderboard."
      ]
    },
    {
      "id": "game-code",
      "chapter": "X",
      "numeral": "07",
      "eyebrow": "Inside CampusVerse · game 07",
      "title": "Cipher Desk",
      "tagline": "Shift and read",
      "lead": "Decode a Caesar-shifted message using an adjustable shift and letter-frequency hints. There is no cryptography claim beyond the classroom puzzle.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Adjustable shift",
          "body": "Turn the shift wheel until the message reads clearly.",
          "actionLabel": "Rule",
          "actionText": "The puzzle stays inside a fixed classroom cipher."
        },
        {
          "label": "Letter hints",
          "body": "Frequency hints point toward likely letters.",
          "actionLabel": "Limit",
          "actionText": "Hints are aids, not solutions or security advice."
        },
        {
          "label": "Type the result",
          "body": "Enter the decoded message or choose a shift.",
          "actionLabel": "Paper",
          "actionText": "The game is one of ten distinct practice activities."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "cipher",
        "set": "desk",
        "role": "blue700",
        "companion": "juniper",
        "mood": "curious",
        "prop": "board",
        "demo": "Three rotor wheels step to a new shift while a decoded message strip slides into place.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "juniper",
            "mood": "curious",
            "threshold": 0.14,
            "text": "Try another shift."
          },
          {
            "companion": "juniper",
            "mood": "happy",
            "threshold": 0.57,
            "text": "The message reads."
          }
        ]
      },
      "notes": [
        "Caesar shifts are a classroom puzzle, not a secure communication system.",
        "The frequency hint is deterministic and does not imply model-generated answers.",
        "No score, XP or rank leaves the device."
      ]
    },
    {
      "id": "game-focus",
      "chapter": "X",
      "numeral": "08",
      "eyebrow": "Inside CampusVerse · game 08",
      "title": "Signal Garden",
      "tagline": "Collect blooms, ignore stones",
      "lead": "In a 45-second round, collect glowing blooms and ignore grey stones. Click or tap targets, or use Tab and Enter; pause any time.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "45-second round",
          "body": "A short focus round collects glowing blooms.",
          "actionLabel": "Rule",
          "actionText": "Pause is available at any point in the round."
        },
        {
          "label": "Two targets",
          "body": "Glowing blooms count; grey stones do not.",
          "actionLabel": "Limit",
          "actionText": "Reduced motion removes the drifting animation."
        },
        {
          "label": "Keyboard path",
          "body": "Tab to a target, then press Enter.",
          "actionLabel": "Paper",
          "actionText": "Games include keyboard support where useful."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "signal",
        "set": "garden",
        "role": "sage600",
        "companion": "moss",
        "mood": "happy",
        "prop": "star",
        "demo": "A glowing bloom rises and pulses while a grey stone stays flat; a collect ring sweeps past.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "moss",
            "mood": "calm",
            "threshold": 0.13,
            "text": "Bloom, not stone."
          },
          {
            "companion": "moss",
            "mood": "proud",
            "threshold": 0.56,
            "text": "One clean round."
          }
        ]
      },
      "notes": [
        "Signal Garden uses a 45-second round; Cortex Run uses 90-second rounds.",
        "Reduced motion removes drift, and the round can be paused.",
        "The score is local practice feedback, not ranking evidence."
      ]
    },
    {
      "id": "game-css",
      "chapter": "X",
      "numeral": "09",
      "eyebrow": "Inside CampusVerse · game 09",
      "title": "CSS Atelier",
      "tagline": "Choose from a fixed bank",
      "lead": "Read a design goal and choose the declaration that makes it real. Only declarations from a fixed bank of twelve CSS tasks may reach the preview.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "Fixed task bank",
          "body": "Eight tasks per run come from a fixed bank.",
          "actionLabel": "Rule",
          "actionText": "Only approved declarations reach the live preview."
        },
        {
          "label": "Four choices",
          "body": "Pick one of four declarations for each goal.",
          "actionLabel": "Limit",
          "actionText": "User-authored CSS is never injected into the page."
        },
        {
          "label": "Wrong answers",
          "body": "Feedback says what the chosen declaration does first.",
          "actionLabel": "Paper",
          "actionText": "The explanation follows with the correct declaration."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "css",
        "set": "atelier",
        "role": "lav600",
        "companion": "lumen",
        "mood": "thinking",
        "prop": "laptop",
        "demo": "A declaration chip slides from the task bank into the preview panel and the panel lights up.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "lumen",
            "mood": "thinking",
            "threshold": 0.14,
            "text": "Which declaration fits?"
          },
          {
            "companion": "lumen",
            "mood": "proud",
            "threshold": 0.58,
            "text": "Preview updated."
          }
        ]
      },
      "notes": [
        "CSS Atelier is a fixed task game; it never injects user-authored CSS.",
        "The preview change comes only from declarations in the bank.",
        "Completion is local practice, not a ranking or verified skill score."
      ]
    },
    {
      "id": "game-cortex",
      "chapter": "X",
      "numeral": "10",
      "eyebrow": "Inside CampusVerse · game 10",
      "title": "Cortex Run",
      "tagline": "90-second rounds",
      "lead": "A calm 90-second procedural sprint through memory, sequences and shifting rules. Tap, click or use the keyboard; no cloud account or network is needed for the game logic.",
      "status": {
        "text": "Local scores · no ranking",
        "kind": "checks"
      },
      "points": [],
      "cards": [
        {
          "label": "90 seconds",
          "body": "Each round lasts ninety seconds, with a clear finish.",
          "actionLabel": "Rule",
          "actionText": "The timer is visible and the round can be restarted."
        },
        {
          "label": "Three modes",
          "body": "Memory, sequences and shifting rules rotate through the round.",
          "actionLabel": "Limit",
          "actionText": "Tasks are procedural practice, not an aptitude test."
        },
        {
          "label": "Keyboard ready",
          "body": "Tap, click or use the keyboard to respond.",
          "actionLabel": "Paper",
          "actionText": "Games include visible focus and reduced-motion behaviour."
        },
        {
          "label": "Local progress",
          "body": "Scores and XP stay on the student's device.",
          "actionLabel": "Rule",
          "actionText": "No rating, rank, leaderboard or ranked mode."
        }
      ],
      "scene": {
        "id": "game-tour",
        "game": "cortex",
        "set": "timer",
        "role": "coral600",
        "companion": "pip",
        "mood": "cheering",
        "prop": "star",
        "demo": "A timer ring turns while three station tokens cycle through memory, sequence and rule prompts.",
        "camera": {
        "from": {
          "x": 0,
          "y": 1.4,
          "z": 18,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 58,
          "roll": -0.008
        },
        "to": {
          "x": 0.8,
          "y": 1.0,
          "z": 14,
          "lookX": 1.2,
          "lookY": -1.4,
          "fov": 54,
          "roll": 0.008
        }
      },
        "reactions": [
          {
            "companion": "pip",
            "mood": "cheering",
            "threshold": 0.12,
            "text": "Ninety seconds."
          },
          {
            "companion": "pip",
            "mood": "proud",
            "threshold": 0.57,
            "text": "Round complete."
          }
        ]
      },
      "notes": [
        "Cortex Run is the only game with 90-second rounds in this deck.",
        "Procedural tasks are practice, not a measured learning gain.",
        "A local demo profile or Firebase sign-in opens the page; no cloud save, rating, rank or leaderboard is attached to the result."
      ]
    },
    {
      "id": "overview",
      "chapter": "XI",
      "numeral": "XI",
      "eyebrow": "Inside CampusVerse · overview",
      "title": "Everything in one glance",
      "tagline": "17 pages · 10 games",
      "lead": "The camera flies through a constellation built from the paper's 17-page and 10-game counts, with page nodes and game nodes sharing one connected diagram.",
      "status": {
        "text": "Diagram · not an app screen",
        "kind": "prepared"
      },
      "points": [],
      "cards": [
        {
          "label": "17 page nodes",
          "body": "The diagram uses the paper's count, not a verified page-by-page map.",
          "actionLabel": "Paper",
          "actionText": "The paper describes seventeen main pages."
        },
        {
          "label": "10 game nodes",
          "body": "Each practice game has its own distinct node.",
          "actionLabel": "Paper",
          "actionText": "The paper names ten games and no leaderboard."
        },
        {
          "label": "One connected space",
          "body": "Links show how the parts meet in one app.",
          "actionLabel": "Limit",
          "actionText": "The constellation is a presentation diagram, not an app screen."
        },
        {
          "label": "Then the close",
          "body": "The defence ends on evidence and open work.",
          "actionLabel": "Paper",
          "actionText": "Prepared and verified claims stay separate to the end."
        }
      ],
      "scene": {
        "id": "constellation",
        "companion": "lumen",
        "mood": "happy",
        "prop": "star",
        "camera": {
        "from": {
          "x": 0.4,
          "y": 2.6,
          "z": 24,
          "lookX": 2.2,
          "lookY": 0.2,
          "fov": 62,
          "roll": -0.01
        },
        "to": {
          "x": 0.8,
          "y": 1.4,
          "z": 20,
          "lookX": 2.2,
          "lookY": 0.2,
          "fov": 54,
          "roll": 0.01
        }
      },
        "reactions": [
          {
            "companion": "lumen",
            "mood": "happy",
            "threshold": 0.12,
            "text": "Every page has a place."
          },
          {
            "companion": "lumen",
            "mood": "proud",
            "threshold": 0.58,
            "text": "Ten games, no leaderboard."
          }
        ]
      },
      "notes": [
        "This overview is a presentation device, not an eighteenth app page or a new feature.",
        "Page nodes and game nodes are distinguished by shape and colour; no public player identity appears.",
        "Use it to close the tour before the final Thank you and Questions scene."
      ]
    },
    {
      id: "closing",
      numeral: "XII",
      eyebrow: "Defence close",
      title: "Thank you",
      tagline: "Questions",
      lead: "CampusVerse brings several learning functions together and is honest about what has and has not been tested.",
      points: [
        "Working: library, safety-first solver, ten games, tools, companions and themes.",
        "Prepared but unverified: real sign-in, shared data and two-person video.",
        "Still open: student survey, expert review, other browsers and screen readers.",
        "Cost: PHP 0; any paid service needs school approval."
      ],
      cards: [
        {
          label: "Ask us",
          body: "We can demonstrate the prototype and show the gaps we recorded.",
          actionLabel: "Paper §VIII",
          actionText: "A future team should inherit evidence rather than claims."
        },
        {
          label: "Do not claim",
          body: "No better grades, stronger engagement or improved learning.",
          actionLabel: "Paper §IV",
          actionText: "No such evaluation has been carried out."
        }
      ],
      scene: {
        id: "thank-you",
        mark: "CampusVerse",
        line: "Evidence, not claims",
        reactions: [
          { companion: "moss", mood: "happy", threshold: 0.06, text: "Thanks for listening." },
          { companion: "pip", mood: "cheering", threshold: 0.17, text: "Questions are welcome." },
          { companion: "lumen", mood: "happy", threshold: 0.28, text: "Show the evidence." },
          { companion: "juniper", mood: "cheering", threshold: 0.39, text: "Then hand it on." }
        ]
      },
      notes: [
        "Close with the prepared-versus-verified distinction; it is the safest position to defend.",
        "All four companions are present: Moss, Pip, Lumen and Juniper.",
        "Do not end with a learning-impact claim; the paper explicitly refuses one."
      ]
    }
  ],
  qaMap: [
    {
      question: "Is CampusVerse finished?",
      answer: "It is a working prototype with 17 main pages and 10 practice games. Sign-in, shared data and two-person video are prepared but not verified.",
      evidence: "Paper §II and §IV",
      status: "Prepared is not verified"
    },
    {
      question: "What do the 117 checks prove?",
      answer: "They describe app condition on 22 November 2026. They are not student feedback, a learning measure, or a school approval.",
      evidence: "Paper §II and §VII",
      status: "App checks only"
    },
    {
      question: "Are the library articles verified?",
      answer: "No. The 17 explainers remain editorial drafts. A verified badge needs a named reviewer, a review date and a checked publisher.",
      evidence: "Paper §IV and §VII",
      status: "Editorial draft"
    },
    {
      question: "Does the solver replace emergency help?",
      answer: "No. Urgent guidance comes first and points to emergency services or a responsible adult. The keyword classifier is limited.",
      evidence: "Paper §III",
      status: "Safety-first limit"
    },
    {
      question: "Does the app improve grades or engagement?",
      answer: "That was not measured. No claim of better grades, stronger engagement or improved learning is made.",
      evidence: "Paper §IV and §VII",
      status: "Not measured"
    },
    {
      question: "What does PHP 0 cover?",
      answer: "Local development and checking cost PHP 0. A paid service needs quotations and school approval before any figure is treated as real.",
      evidence: "Paper §VI",
      status: "Prototype cost"
    },
    {
      question: "Does two-person video work?",
      answer: "The 1:1 call is prepared with Firestore signaling and public STUN. A two-account call and TURN relay are not verified.",
      evidence: "Paper §IV and §V",
      status: "Not verified"
    },
    {
      question: "What should happen next?",
      answer: "Hand over for school ownership, real sign-in and video trials, student and teacher observation, source review and termly privacy review.",
      evidence: "Paper §VIII",
      status: "Open work"
    }
  ],
  unverified: [
    "Real Firebase sign-in and shared data with two independent accounts.",
    "Two-person video, TURN relay, recording, moderation and multi-party calls.",
    "Private profile avatar upload end to end with the live Storage bucket.",
    "Student and teacher trials, usability observation and screen-reader testing.",
    "Subject-specialist review of any library explainer or verified badge.",
    "Professional review of solver guidance and confirmation of crisis contact details.",
    "Clean install and offline use on school-managed devices.",
    "Safari, Edge, Firefox and physical-device checks.",
    "Live owner-only Firestore and Storage rules under real accounts.",
    "School approval of the branded paper, contacts and final scope."
  ]

};

export default content;
