// Single source of truth for every word shown in the presentation.
// Edit copy here; scene and UI code only reads these values.
export const content = {
  ui: {
    brand: "EAPIHS CAMPUSVERSE · DEFENCE EDITION",
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
    timerPaused: "Paused"
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
        "Proponents: Kyle Compoto, Johndy Jade Joel L. Blanco, Rihana Ogatis, Daniella Pauleen Bangero",
        "Innovation Adviser: [Name of Innovation Adviser]",
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
      lead: "The project record names the proponents, the school evaluators, and the approving authorities.",
      points: [
        "Kyle Compoto — Innovator · Project Web Developer",
        "Johndy Jade Joel L. Blanco — Researcher · Data Engineer",
        "Rihana Ogatis — Researcher · [Role to be assigned]",
        "Daniella Pauleen Bangero — Researcher · [Role to be assigned]",
        "Sir Yvan A. Reyes — ICT Coordinator · Project Evaluator",
        "Mrs. Marivic C. Canillo and Mrs. Gina Marie G. Pinza — Project Approving Authorities"
      ],
      cards: [
        {
          label: "Still open",
          body: "Innovation adviser, two student roles, and several email addresses remain bracketed in the paper.",
          actionLabel: "Paper §I",
          actionText: "[Name of Innovation Adviser] · [Email to be added] · [Role to be assigned]"
        },
        {
          label: "Evaluation path",
          body: "Monitoring and evaluation are planned with the ICT Coordinator, Sir Yvan A. Reyes.",
          actionLabel: "Paper §VII",
          actionText: "Monitoring and evaluation will be carried out by the project group together with the ICT Coordinator, Sir Yvan A. Reyes."
        }
      ],
      notes: [
        "Read the names and roles straight from the contact table.",
        "Do not fill in the bracketed adviser name, roles, or emails from memory.",
        "Point out that the ICT Coordinator is the named evaluation lead in Part VII."
      ]
    },
    {
      id: "summary",
      numeral: "II",
      eyebrow: "Paper part two",
      title: "Project Summary",
      tagline: "One accessible place, not five disconnected habits",
      lead: "Students often have to piece their learning together from scattered places.",
      points: [
        "Five linked needs: trustworthy information, everyday technical problems, independent study, task organisation, and online study with classmates",
        "17 main pages and 10 game pages in the working app",
        "117 separate checks passed on 22 November 2026",
        "Work stays on the student's own device unless they choose to sign in",
        "Dates, greetings, daily practice, and streaks follow Philippine time"
      ],
      cards: [
        {
          label: "What the checks mean",
          body: "The 117 checks describe the app's condition; they are not proof of student learning.",
          actionLabel: "Paper §II",
          actionText: "Those checks describe the app's condition; they are not proof of student learning."
        },
        {
          label: "Stage",
          body: "The present stage is checking the prototype and preparing it for handover.",
          actionLabel: "Paper §II",
          actionText: "The original plan allowed twelve weeks in the second term of school year 2026–2027, subject to school permission and to teachers being available to review content."
        }
      ],
      notes: [
        "Lead with the five needs, then show the app as one answer to all five.",
        "Use the paper's counts: 17 main pages, 10 game pages, and 117 checks on 22 November 2026.",
        "Do not turn passing checks into a claim about better learning."
      ]
    },
    {
      id: "background",
      numeral: "III",
      eyebrow: "Paper part three",
      title: "Background and Rationale",
      tagline: "Proposed problems, not measured findings",
      lead: "The five problem areas remain the project's guide, but the evidence has not been gathered yet.",
      points: [
        "Observations, surveys, or interviews of EAPIHS students are still [not yet collected]",
        "The answer is one place for cited reading, safety-first troubleshooting, practice, tools, companions, and study rooms",
        "The solver puts urgent safety advice before ordinary study advice and never asks a student to handle a dangerous hazard",
        "12 colour themes and 16 subject looks support reading comfort, with reduced motion available",
        "Internet access may be needed for sign-in, shared work, sources, messaging, and video calls"
      ],
      cards: [
        {
          label: "Safety limit",
          body: "The keyword classifier can miss urgent wording or flag ordinary text; it is not a crisis monitor.",
          actionLabel: "Paper §III",
          actionText: "Automated answers do not replace a teacher, a counsellor, a qualified technician, or emergency services."
        },
        {
          label: "Crisis signposts",
          body: "NCMH, Hopeline, and 911 cards use official links; two NCMH numbers are unconfirmed and school review is pending.",
          actionLabel: "Paper §III",
          actionText: "No number is dialled automatically."
        }
      ],
      notes: [
        "Call the five problems proposed, because no student survey or interview has been collected.",
        "Explain the safety-first rule before mentioning any study tip.",
        "Keep the 12 themes and 16 subject looks framed as reading comfort, not as evidence of engagement."
      ]
    },
    {
      id: "objectives",
      numeral: "IV",
      eyebrow: "Paper part four",
      title: "Objectives and Outputs",
      tagline: "Nine objectives rewritten against the prototype",
      lead: "Each objective says what a student can now do, what supports it, and what is still open.",
      points: [
        "Library: 17 short explainers, 11 subjects, 4 guided paths, 45 links checked 27 Oct 2026, 10 newer entries checked 12 Nov 2026; all remain editorial drafts",
        "Solver: 12 situations; 8 of 10 listed numbers checked 14 Nov 2026; professional review outstanding",
        "Games: Campus Chess, Word Forge, Equation Forge, The Missing Margin, Pattern Pursuit, Study Shelf, Cipher Desk, Signal Garden, CSS Atelier, Cortex Run — practice only",
        "Tools: calculator; Planner with Tasks, Budget, and Notes; student and teacher views change layout only",
        "Study rooms and one-to-one video are prepared but not tried with two real accounts",
        "Four companions: Moss, Pip, Lumen, and Juniper — scripted drawings, not live helpers",
        "17 main pages, 10 game pages, 12 colour themes, 16 subject looks; earlier sweeps are baseline evidence only",
        "Profiles are owner-only; no ranking, rating, leaderboard, or public player page",
        "Open work: real sign-in, two-person video, expert review, student and teacher trials, other browsers, screen readers"
      ],
      cards: [
        {
          label: "Evidence we have",
          body: "117 checks passed on 22 November 2026, plus earlier thirteen-scenario and sweep reviews.",
          actionLabel: "Paper §IV",
          actionText: "Earlier browser reviews recorded thirteen interaction scenarios and theme and screen-size sweeps."
        },
        {
          label: "Evidence we do not claim",
          body: "No better grades, stronger engagement, or improved learning is claimed.",
          actionLabel: "Paper §IV",
          actionText: "No claim of better grades, stronger engagement, or improved learning is made, because no such evaluation has been carried out."
        }
      ],
      notes: [
        "This is the longest section; keep the nine points as short headings, then let the cards carry the proof distinction.",
        "Name the ten games from the paper. Do not present ranking, rating, or leaderboards as features.",
        "Stress that articles are editorial drafts and that no expert or student trial has been completed."
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
