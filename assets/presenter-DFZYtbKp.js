import{i as l}from"./theme-manager-_LV3LoIF.js";import{c as o,e}from"./dom-G4EfQDMs.js";const{ui:s,sections:t,qaMap:a,unverified:p}=o;l();document.title=`${s.presenterTitle} · ${s.brand}`;const i=document.getElementById("app"),c=t.map(n=>`
  <li class="presenter-note">
    <h3 class="presenter-note-title">
      <span class="presenter-numeral">${e(n.numeral)}</span>
      <span>${e(n.title)}</span>
    </h3>
    <ul class="presenter-note-list">
      ${(n.notes||[]).map(r=>`<li>${e(r)}</li>`).join("")}
    </ul>
  </li>
`).join(""),d=a.map(n=>`
  <li class="presenter-qa-item">
    <h3 class="presenter-qa-question">${e(n.question)}</h3>
    <p class="presenter-qa-answer">${e(n.answer)}</p>
    <p class="presenter-qa-meta">
      <span class="presenter-qa-status">${e(n.status)}</span>
      <span>${e(n.evidence)}</span>
    </p>
  </li>
`).join(""),h=p.map(n=>`<li>${e(n)}</li>`).join("");i.innerHTML=`
  <a class="presenter-skip" href="#presenter-main">${e(s.skipLink)}</a>
  <header class="presenter-header">
    <p class="presenter-kicker">${e(s.brand)}</p>
    <h1 class="presenter-title">${e(s.presenterTitle)}</h1>
    <p class="presenter-subtitle">${e(s.presenterSubtitle)}</p>
    <nav class="presenter-actions" aria-label="${e(s.sectionIndexLabel)}">
      <a class="presenter-button" href="../">${e(s.presenterBack)}</a>
      <button class="presenter-button" type="button" data-print>${e(s.presenterPrint)}</button>
    </nav>
    <p class="presenter-print-note">${e(s.presenterPrintNote)}</p>
  </header>
  <main class="presenter-main" id="presenter-main">
    <section class="presenter-block" aria-labelledby="presenter-notes-heading">
      <h2 class="presenter-heading" id="presenter-notes-heading">${e(s.presenterNotesHeading)}</h2>
      <ol class="presenter-notes">${c}</ol>
    </section>
    <section class="presenter-block" aria-labelledby="presenter-qa-heading">
      <h2 class="presenter-heading" id="presenter-qa-heading">${e(s.presenterQaHeading)}</h2>
      <p class="presenter-intro">${e(s.presenterQaIntro)}</p>
      <ol class="presenter-qa">${d}</ol>
    </section>
    <section class="presenter-block" aria-labelledby="presenter-unverified-heading">
      <h2 class="presenter-heading" id="presenter-unverified-heading">${e(s.presenterUnverifiedHeading)}</h2>
      <p class="presenter-intro">${e(s.presenterUnverifiedIntro)}</p>
      <ul class="presenter-unverified">${h}</ul>
    </section>
  </main>
  <footer class="presenter-footer">${e(s.presenterFooter)}</footer>
`;i.querySelector("[data-print]").addEventListener("click",()=>window.print());window.__presenterKit={sectionCount:t.length,noteCount:t.reduce((n,r)=>n+(r.notes?.length||0),0),qaCount:a.length,unverifiedCount:p.length};
