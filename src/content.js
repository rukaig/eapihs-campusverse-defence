// Single source of truth for every word shown in the presentation.
// Edit copy here; scene and UI code only reads these values.
export const content = {
  ui: {
    brand: "CampusVerse - Innovation Defence",
    editionTagline: "A scroll-driven paper defence · November 2026",
    sectionIndexLabel: "Sections",
    themeButton: "Themes",
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
    charactersButton: "Characters",
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
    progressLabel: "Presentation progress"
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
      tagline: "Connected pages, conservative habits",
      lead: "The group built connected pages in which each feature has its own look and purpose while sharing colours, navigation, and reading rules.",
      points: [
        "Knowledge Library, School Problem Solver, Game Area, companions, calculator, planner, study rooms, assistant, private profiles, and install guide",
        "Students are the main beneficiaries; teacher and wider-school access depends on final scope and permissions",
        "The proposed twelve-week schedule is subject to school approval and available resources",
        "Risks include sign-in, privacy, traceability, calls, layout, companion shortcuts, time, and missing review",
        "Prepared access limits and released rules are not the same as a live test with real accounts"
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
      notes: [
        "Describe the architecture as separate pages with shared tokens and reading rules.",
        "Do not imply a teacher dashboard, parent page, or administrator area exists; the paper says none has been built.",
        "Use the risk table to show that unverified paths are named, not hidden."
      ]
    },
    {
      id: "cost",
      numeral: "VI",
      eyebrow: "Paper part six",
      title: "Project Cost",
      tagline: "A prototype with no expenses committed",
      lead: "Development and checking took place locally, and the app is shared through a small published set of pages.",
      points: [
        "Total implementation cost: PHP 0",
        "Free-tier hosting and shared data services",
        "Existing school devices and internet connection",
        "No paid service has been committed",
        "Any paid service, including a better video connection, needs school approval first"
      ],
      cards: [
        {
          label: "Why zero",
          body: "The prototype uses web tools with free options; no subscription was bought for this build.",
          actionLabel: "Paper §VI",
          actionText: "No paid service has been committed: a better video connection would be considered only if the one-to-one check-in proves useful and the school approves the expense."
        },
        {
          label: "Approval gate",
          body: "A real figure would be entered only after quotations and school approval.",
          actionLabel: "Paper §VI",
          actionText: "Any paid service must be approved before it is used."
        }
      ],
      notes: [
        "State the total as PHP 0. Do not read the paper's bracketed price fields as actual amounts.",
        "Name the free-tier services by category, not by a paid vendor or price.",
        "If the panel asks about video quality, say a relay would be considered only after approval."
      ]
    },
    {
      id: "evaluation",
      numeral: "VII",
      eyebrow: "Paper part seven",
      title: "Monitoring and Evaluation",
      tagline: "App condition is not student learning",
      lead: "Monitoring is meant to find out whether the prototype works, whether students can use it, and whether content is accurate and traceable.",
      points: [
        "117 checks cover library panels, safety guidance, calculator, games, tasks, budget, notes, themes, profiles, and page reopening",
        "Real sign-in, shared data, profile photos, and the two-person video check-in are not yet covered by such proof",
        "Earlier review: thirteen scenarios and nineteen pages across twelve themes and six screen sizes — baseline only",
        "Tasks, budget entries, notes, and practice records have sensible saving; failed saves show a warning",
        "No student survey has been given; no subject specialist has reviewed the seventeen explainers"
      ],
      cards: [
        {
          label: "Open before release",
          body: "Real accounts, separate users, clean install, offline trial, student and teacher trials, other browsers, and screen readers.",
          actionLabel: "Paper §VII",
          actionText: "The method, participants, instruments, and success standards still need to be set before any student trial."
        },
        {
          label: "Information quality",
          body: "A verified badge needs a named reviewer, a review date, HTTPS, and an allowlisted publisher; no entry qualifies yet.",
          actionLabel: "Paper §VII",
          actionText: "Teacher review is therefore the gate for this criterion, not a formality."
        }
      ],
      notes: [
        "Separate 117 passing checks from human evaluation every time the number is mentioned.",
        "The sweep predates the current seventeen-page build, so call it baseline evidence.",
        "Be clear that no student survey and no expert article review have happened."
      ]
    },
    {
      id: "sustainability",
      numeral: "VIII",
      eyebrow: "Paper part eight",
      title: "Project Sustainability",
      tagline: "School ownership, accurate content, regular review",
      lead: "Sustainability depends on school ownership, accurate content, and regular review of access rather than on a one-time effort.",
      points: [
        "After approval, researchers and teachers should make the app available to EAPIHS students",
        "Assigned teachers and members keep articles and guides current and record changes",
        "A named review is recorded before any source or article changes status",
        "Privacy and account management are reviewed every term by the ICT Coordinator and assigned members",
        "A verification handover should record sign-in, video, install, and review results"
      ],
      cards: [
        {
          label: "Handover",
          body: "The next group should inherit evidence rather than claims.",
          actionLabel: "Paper §VIII",
          actionText: "Anything unverified should still be clearly labelled."
        },
        {
          label: "Defence approach",
          body: "Present each feature as a student would meet it, demonstrate what works, and state what awaits approval, review, or trial.",
          actionLabel: "Paper §VIII",
          actionText: "That approach is stronger than overclaiming: it shows that the team knows both the value of the prototype and the limits of its proof."
        }
      ],
      notes: [
        "End on ownership and evidence, not on a promise of future grades.",
        "Name the term-by-term privacy review as the mechanism that keeps access current.",
        "Ask for approval and review rather than assuming implementation has begun."
      ]
    },
    {
      id: "closing",
      numeral: "IX",
      eyebrow: "Defence position",
      title: "Show the Prototype",
      tagline: "Name the proof still needed",
      lead: "The group should present each feature as a student would meet it, give a short demonstration of what works, and state plainly which parts are still waiting for approval, review, or a real-world trial.",
      points: [
        "Working: library, safety-first solver, ten practice games, calculator, planner, companions, themes, and install option",
        "Prepared but unverified: real sign-in, shared data, two-person video, profile photos, and cloud access rules",
        "Not done: student surveys, expert article review, physical-device and other-browser checks, screen-reader review",
        "No claim of better grades, stronger engagement, or improved learning",
        "Cost: PHP 0, with any paid service subject to school approval"
      ],
      cards: [
        {
          label: "One sentence",
          body: "CampusVerse brings several learning functions together, and it is honest about what has and has not been tested.",
          actionLabel: "Paper §II",
          actionText: "The project is a working prototype, so wherever something has been prepared but not yet tried with real accounts, two separate users, or a named reviewer, this paper says so plainly."
        },
        {
          label: "Panel invitation",
          body: "Judge the prototype by what can be shown and by the clarity of its remaining verification plan.",
          actionLabel: "Paper §VIII",
          actionText: "A future team should inherit evidence rather than claims."
        }
      ],
      notes: [
        "Close with the prepared-versus-verified distinction; it is the safest position to defend.",
        "Repeat the PHP 0 total only if cost comes up again.",
        "Do not end with a learning-impact claim; the paper explicitly refuses one."
      ]
    }
  ]
};

export default content;
