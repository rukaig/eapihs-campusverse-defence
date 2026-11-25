import{i as M,g as y,s as C,l as z,a as H,b as $,c as j}from"./theme-manager-_LV3LoIF.js";import{p as k,c as P,a as A,b as S,d as N,e as q,m as B}from"./props-BO09hKTd.js";const I=document.getElementById("app"),v=!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;document.documentElement.dataset.motion=v?"reduced":"full";document.body.classList.toggle("reduced-motion",v);M();const g=document.createElement("div");g.className="lab-stage";g.setAttribute("aria-hidden","true");const w=document.createElement("header");w.className="lab-header";w.innerHTML=`
  <p class="lab-kicker">CampusVerse · character lab</p>
  <h1 class="lab-title">Four companions.<br />Nine study props.</h1>
  <p class="lab-subtitle">Procedural three.js builds from the app's real designs.</p>
  <a class="lab-back" href="../">Back to presentation</a>
`;const d=document.createElement("aside");d.className="lab-panel";d.innerHTML=`
  <h2>Lab controls</h2>
  <div class="lab-section lab-select-row">
    <label for="lab-color-theme">Colour theme</label>
    <select id="lab-color-theme"></select>
    <label for="lab-subject-theme">Subject look</label>
    <select id="lab-subject-theme"></select>
  </div>
  <div class="lab-section">
    <h2>Companion API</h2>
    <div id="lab-companions"></div>
  </div>
  <div class="lab-section">
    <h2>Props on the stand</h2>
    <ul class="lab-prop-list">
      ${k.map(e=>`<li>${e.name} — ${e.note}</li>`).join("")}
    </ul>
  </div>
`;const h=document.createElement("p");h.className="lab-hint";h.innerHTML="<strong>Head follow:</strong> move the mouse. <strong>Hold:</strong> press <kbd>H</kbd> to freeze the turntable. <strong>Theme:</strong> changes tint without erasing each character's identity.";I.append(g,w,d,h);const n=P({container:g,count:1}),s=A(n),r=new n.THREE.Group;r.name="character-turntable";n.addSection(0,r);n.setPalette(y().palette);n.setReducedMotion(v);C(e=>n.setPalette(e.palette||e));const u=d.querySelector("#lab-color-theme"),m=d.querySelector("#lab-subject-theme");for(const e of z()){const t=document.createElement("option");t.value=e.id,t.textContent=`${e.label}${e.dark?" · dark":""}`,u.appendChild(t)}for(const e of H()){const t=document.createElement("option");t.value=e.id,t.textContent=e.name,m.appendChild(t)}u.value=y().colorChoice;m.value=y().subjectChoice;u.addEventListener("change",()=>$(u.value));m.addEventListener("change",()=>j(m.value));const R=s.mesh(s.geometry.cylinder,s.material("accentSoft",{mix:.3,roughness:.82}),[0,-1.22,-.2],[6.9,.16,6.9]);r.add(R);r.add(s.mesh(s.geometry.torus,s.material("accent",{mix:.4,transparent:!0,opacity:.72}),[0,-1.13,-.2],[6.9,6.9,1],[Math.PI/2,0,0]));const G=[{id:"moss",x:-3.7,z:2,scale:.92},{id:"pip",x:-1.25,z:2.7,scale:.92},{id:"lumen",x:1.25,z:2.7,scale:.92},{id:"juniper",x:3.7,z:2,scale:.92}],U=[{id:"student",x:-5.2,z:-3.15,scale:.66},{id:"teacher",x:-2.6,z:-3.15,scale:.66},{id:"phone",x:0,z:-3.15,scale:.72},{id:"laptop",x:2.6,z:-3.15,scale:.66},{id:"books",x:5.2,z:-3.15,scale:.7},{id:"calculator",x:-3.9,z:-1.15,scale:.7},{id:"chess",x:-1.3,z:-1.15,scale:.72},{id:"board",x:1.3,z:-1.15,scale:.68},{id:"star",x:3.9,z:-1.15,scale:.72}],c=new Map,b=new Map,f=new Map;function T(e,t,o,a=.68){e.position.set(t,-1.02,o),r.add(e);const i=s.mesh(s.geometry.cylinder,s.material("surface",{mix:.2,roughness:.78}),[t,-1.11,o],[a,.12,a]);r.add(i),r.add(s.mesh(s.geometry.torus,s.material("accent",{mix:.4,transparent:!0,opacity:.78}),[t,-1.03,o],[a,a,1],[Math.PI/2,0,0]))}for(const e of G){const t=S.find(l=>l.id===e.id),o=N(n,s,t.id);o.group.scale.setScalar(e.scale);const a=new n.THREE.Group;a.name=`stand-${t.id}`,a.add(o.group),T(a,e.x,e.z,.78);const i=s.label(t.name,t.species);i.sprite.position.set(0,2.55,0),a.add(i.sprite),c.set(t.id,{api:o,holder:a,design:t,tag:i}),f.set(t.id,!1),n.registerUpdatable(({delta:l})=>{l&&(a.rotation.y+=l*.1)})}for(const e of U){const t=k.find(l=>l.id===e.id),o=q(n,s,t.id);o.group.scale.setScalar(e.scale);const a=new n.THREE.Group;a.name=`stand-${t.id}`,a.add(o.group),T(a,e.x,e.z,.62);const i=s.label(t.name,t.note.split(";")[0]);i.sprite.position.set(0,1.5,0),a.add(i.sprite),b.set(t.id,{api:o,holder:a,design:t,tag:i}),n.registerUpdatable(({delta:l})=>{l&&(a.rotation.y-=l*.09)})}n.registerUpdatable(({delta:e})=>{e&&(r.rotation.y+=e*.055)});const x=d.querySelector("#lab-companions");for(const e of S){const t=document.createElement("div");t.className="lab-figure",t.innerHTML=`
    <div class="lab-figure-name">${e.name}<span>${e.species}</span></div>
    <div class="lab-button-row">
      <button class="lab-button" type="button" data-mood="${e.id}" data-value="happy">Happy</button>
      <button class="lab-button" type="button" data-mood="${e.id}" data-value="thinking">Thinking</button>
      <button class="lab-button" type="button" data-mood="${e.id}" data-value="cheering">Cheering</button>
      <button class="lab-button" type="button" data-say="${e.id}">Say</button>
      <button class="lab-button" type="button" data-walk="${e.id}">Walk</button>
    </div>
  `,x.appendChild(t)}function E(){d.querySelectorAll("[data-mood]").forEach(e=>{const t=c.get(e.dataset.mood)?.api.getMood();e.setAttribute("aria-pressed",String(t===e.dataset.value))})}x.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;const o=t.dataset.mood||t.dataset.say||t.dataset.walk,a=c.get(o);if(a){if(t.dataset.mood)a.api.setMood(t.dataset.value);else if(t.dataset.say){const i=a.api.getMood();a.api.say(B[o]?.[i]||a.design.tagline)}else if(t.dataset.walk){const i=!f.get(o);f.set(o,i),a.api.walkTo(i?[1.05,0,-.85]:[0,0,0])}E()}});E();window.addEventListener("pointermove",e=>{n.setPointer(e.clientX/window.innerWidth*2-1,e.clientY/window.innerHeight*2-1)},{passive:!0});let p=!1;function L(){p=!p,n.setHold(p),h.querySelector("strong + strong")?.toggleAttribute("hidden",p)}window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&L()});window.__characterLab={companions:Object.fromEntries([...c].map(([e,t])=>[e,t.api])),props:Object.fromEntries([...b].map(([e,t])=>[e,t.api])),setMood(e,t){const o=c.get(e);if(!o)return null;const a=o.api.setMood(t);return E(),a},say(e,t){return c.get(e)?.api.say(t)||null},walkTo(e,t){return c.get(e)?.api.walkTo(t)||null},toggleHold:L,getState(){return{...n.getState(),companions:[...c.values()].map(e=>e.api.getState()),props:[...b.values()].map(e=>e.api.getState())}}};window.addEventListener("beforeunload",()=>{for(const e of c.values())e.api.dispose(),e.tag.dispose();for(const e of b.values())e.api.dispose(),e.tag.dispose();s.dispose(),n.dispose()});
