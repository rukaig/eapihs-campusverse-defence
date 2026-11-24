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
      id: "closing",
      numeral: "IX",
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
  ]
};

export default content;
