// Moteur universel de quiz — chargé après questions.js
// Dépendances : window.QDATA, window.QKEY, window.QUIZ_PLAN, window.QUIZ_META

// PLAN chargé depuis questions.js (window.QUIZ_PLAN), sinon tableau vide
// Normalisation : accepte {day,title,count} (nouveau) ou {d,theme,...} (ancien)
const PLAN=(window.QUIZ_PLAN||[]).map(p=>p.d!==undefined?p:Object.assign({},p,{d:p.day,theme:p.title}));
// Métadonnées examen chargées depuis questions.js (window.QUIZ_META), sinon valeurs vides
const META=window.QUIZ_META||{};

const MOD_SIZE=10; // questions par module
const MODS_PER_DAY=5; // 5 modules × 10 q = 50 q/jour

const KEY=window.QKEY||"clf7.v2";
const PSEUDO_KEY="certifs.pseudo"; // clé stable partagée entre toutes les certifications
let store={};
try{store=JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){store={}}
store.r=store.r||{}; // results: "day-idx" -> 1 correct / 0 wrong
store.free=store.free||{}; // free training config persistence

// Pseudo : chargé depuis la clé partagée ou depuis store (rétrocompat)
function getPseudo(){try{return localStorage.getItem(PSEUDO_KEY)||""}catch(e){return""}}
function setPseudo(p){try{localStorage.setItem(PSEUDO_KEY,p)}catch(e){}}

/* ── FEATURE 1 : THEME SWITCHER — voir engine/theme.js ───── */
// getTheme, setThemeStorage, applyTheme, updateThemeBtn, toggleTheme
// définis dans engine/theme.js, chargé avant quiz.js dans chaque certif/index.html

/* ── SVG cercle de progression ─────────────────────────────
   pct : 0–100   size : taille px (défaut 52)
   color : CSS var string ex: "var(--ok)"                    */
function svgCircle(pct,size,color){
  size=size||52;
  const r=size/2-4,c=size/2;
  const circ=2*Math.PI*r;
  const dash=Math.max(0,Math.min(pct,100))/100*circ;
  const col=pct>=80?"var(--ok)":pct>=50?"var(--accent)":"var(--ko)";
  const trackCol="var(--line)";
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;flex-shrink:0" aria-hidden="true">
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${trackCol}" stroke-width="4"/>
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${color||col}" stroke-width="4"
      stroke-dasharray="${dash.toFixed(2)} ${circ.toFixed(2)}"
      stroke-linecap="round"
      transform="rotate(-90 ${c} ${c})"/>
    <text x="${c}" y="${c}" text-anchor="middle" dominant-baseline="central"
      style="font-size:${size<48?".65rem":".7rem"};font-family:var(--f-ui);fill:var(--ink);font-weight:600">${pct}%</text>
  </svg>`;
}

const SYNC_KEY="certifs.sync."+KEY; // clé localStorage pour la date de dernière synchro

function save(){
  try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}
  // Sync Firestore (best-effort, silencieux)
  const pseudo=getPseudo();
  if(typeof window.saveProgression==="function"&&pseudo&&pseudo!=="Anonyme"){
    window.saveProgression(KEY,pseudo,store.r);
    // Enregistrer la date de synchro (tentative optimiste)
    try{localStorage.setItem(SYNC_KEY,String(Date.now()))}catch(e){}
    updateSyncBadge();
  }
}

// ── Chargement de la progression Firestore au démarrage ────────────────────
// Si Firestore contient plus de réponses que le localStorage, on remplace.
async function syncFromFirestore(){
  const pseudo=getPseudo();
  if(!pseudo||pseudo==="Anonyme")return;
  if(typeof window.loadProgression!=="function")return;
  try{
    const remoteR=await window.loadProgression(KEY,pseudo);
    if(!remoteR)return;
    const localCount=Object.keys(store.r).length;
    const remoteCount=Object.keys(remoteR).length;
    if(remoteCount>localCount){
      store.r=remoteR;
      try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}
      render(); // rafraîchir l'affichage avec la progression importée
    }
  }catch(e){}
}

// loadProgression attend elle-même que Firebase soit prêt (voir firebase.js)
syncFromFirestore();
const Q=(d,i)=>{
  const r=window.QDATA[d][i];
  if(!r)return r;
  // Ancien format: opts/ans
  if(r.opts&&!r.o){r.o=r.opts;r.a=r.ans;r.e={};r.o.forEach((_,k)=>{r.e[k]=r.why||"";});r.t=r.t||"";}
  // Nouveau format: choices/answer/exp
  if(r.choices&&!r.o){
    r.o=r.choices;
    r.a=Array.isArray(r.answer)?r.answer:[r.answer];
    r.e={};r.o.forEach((_,k)=>{r.e[k]=r.exp||"";});
    r.t=r.t||"";
  }
  // Format lettre: o déjà défini, a est une lettre ("A","B","C"...) → convertir en index
  if(r.o&&typeof r.a==="string"&&r.a.length===1&&"ABCDE".includes(r.a)){
    r.a=["ABCDE".indexOf(r.a)];
    if(!r.e){r.e={};r.o.forEach((_,k)=>{r.e[k]=r.exp||"";});}
    r.t=r.t||"";
  }
  return r;
};
const total=()=>Object.values(window.QDATA).reduce((s,a)=>s+a.length,0);
const errors=()=>Object.keys(store.r).filter(k=>store.r[k]===0).map(k=>k.split("-").map(Number));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const L="ABCDE";

// Module index: day d, module m (0-based) → questions [start..end)
function modRange(d,m){const start=m*MOD_SIZE;return{start,end:Math.min(start+MOD_SIZE,window.QDATA[d].length)}}
function modStats(d,m){
  const{start,end}=modRange(d,m);let done=0,ok=0;
  for(let i=start;i<end;i++){const v=store.r[d+"-"+i];if(v!==undefined){done++;if(v===1)ok++;}}
  return{n:end-start,done,ok}
}
function dayModCount(d){return Math.ceil(window.QDATA[d].length/MOD_SIZE)}

function header(){
  const keys=Object.keys(store.r),ok=keys.filter(k=>store.r[k]===1).length;
  document.getElementById("sDone").textContent=keys.length+"/"+total();
  document.getElementById("sRate").textContent=keys.length?Math.round(ok/keys.length*100)+" %":"–";
  const n=errors().length,b=document.getElementById("errBadge");
  b.hidden=!n;b.textContent=n;

  // FEATURE 5 : Score de passage dans header
  const passEl=document.getElementById("sPass");
  if(passEl&&META.passScore){
    passEl.textContent=META.passScore+" %";
    passEl.closest("[data-pass-stat]")&&(passEl.closest("[data-pass-stat]").hidden=false);
  }

  // Afficher le pseudo dans l'en-tête
  const pseudo=getPseudo();
  const pEl=document.getElementById("userPseudo");
  if(pEl){
    if(pseudo){
      pEl.innerHTML=`👤 <b>${esc(pseudo)}</b> <button onclick="document.getElementById('changePseudo')&&document.getElementById('changePseudo').click()" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:inherit;padding:0 0 0 4px;text-decoration:underline;vertical-align:baseline">Changer</button>`;
      pEl.hidden=false;
    } else {
      pEl.hidden=true;
    }
  }

  // Theme button update
  updateThemeBtn();
}
function dayStats(d){
  const n=window.QDATA[d].length;let done=0,ok=0;
  for(let i=0;i<n;i++){const v=store.r[d+"-"+i];if(v!==undefined){done++;if(v===1)ok++}}
  return{n,done,ok}
}

/* ── MODAL PSEUDO ──────────────────────────────────────────
   Affiché une seule fois au premier lancement (pseudo absent).
   L'utilisateur peut passer ou saisir un prénom.             */
function showPseudoModal(){
  if(document.getElementById("pseudoModal"))return; // déjà affiché
  const modal=document.createElement("div");
  modal.id="pseudoModal";
  modal.style.cssText="position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:20px";
  modal.innerHTML=`<div style="background:var(--sheet);border:1px solid var(--line);border-radius:12px;padding:28px 24px;max-width:360px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,.18)">
    <h2 style="margin:0 0 6px;font-size:1.15rem">Qui fait ce quiz ?</h2>
    <p style="margin:0 0 16px;font-size:.88rem;color:var(--muted)">Entre un prénom ou pseudo pour suivre ta progression sur tous tes appareils. Tu peux toujours le modifier dans le pied de page.</p>
    <input id="pseudoInput" type="text" placeholder="Ton prénom ou pseudo" autocomplete="off" maxlength="30"
      style="width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--sheet);color:var(--ink);font-size:1rem;font-family:var(--f-body);outline:none;margin-bottom:12px">
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button id="pseudoSkip" class="btn ghost" style="padding:8px 14px;font-size:.88rem">Passer</button>
      <button id="pseudoSave" class="btn" style="padding:8px 16px;font-size:.88rem">Confirmer</button>
    </div>
  </div>`;
  document.body.appendChild(modal);

  const input=document.getElementById("pseudoInput");
  input.focus();

  function savePseudo(){
    const val=(input.value||"").trim().slice(0,30);
    if(val){setPseudo(val);}
    else{setPseudo("Anonyme");}
    modal.remove();
    header();
    updateSyncBadge();
    // Logger la connexion
    if(typeof window.logSession==="function") window.logSession(KEY,getPseudo());
  }
  function skipPseudo(){
    setPseudo("Anonyme");
    modal.remove();
    header();
  }

  document.getElementById("pseudoSave").onclick=savePseudo;
  document.getElementById("pseudoSkip").onclick=skipPseudo;
  input.addEventListener("keydown",e=>{if(e.key==="Enter")savePseudo();if(e.key==="Escape")skipPseudo();});
  // Clic sur le fond ferme aussi
  modal.addEventListener("click",e=>{if(e.target===modal)skipPseudo();});
}

/* ── FEATURE 11 : PANNEAU FICHE LATÉRALE ─────────────────── */
function initFichePanel(){
  if(!META.fiche)return; // pas de fiche
  const existing=document.getElementById("fichePanel");
  if(existing)return;

  // Bouton flottant
  const fab=document.createElement("button");
  fab.id="ficheFab";
  fab.title="Ouvrir la fiche de révision";
  fab.innerHTML="📄";
  fab.style.cssText=`position:fixed;bottom:80px;right:16px;z-index:8000;width:44px;height:44px;border-radius:50%;background:var(--accent);color:var(--sheet);border:none;font-size:1.2rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;transition:transform .15s`;
  fab.onmouseenter=()=>fab.style.transform="scale(1.1)";
  fab.onmouseleave=()=>fab.style.transform="scale(1)";
  document.body.appendChild(fab);

  // Panneau latéral
  const panel=document.createElement("div");
  panel.id="fichePanel";
  panel.setAttribute("aria-hidden","true");
  panel.style.cssText=`position:fixed;top:0;right:-420px;width:min(420px,95vw);height:100vh;z-index:9000;background:var(--sheet);border-left:1px solid var(--line);box-shadow:-4px 0 24px rgba(0,0,0,.15);transition:right .25s ease;display:flex;flex-direction:column;overflow:hidden`;
  panel.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--line);flex-shrink:0">
      <span style="font:700 1rem var(--f-display)">📄 Fiche de révision</span>
      <div style="display:flex;gap:8px">
        <a href="${META.fiche}" target="_blank" rel="noopener" style="font:500 .78rem var(--f-mono);color:var(--accent);text-decoration:none;padding:4px 8px;border:1px solid var(--accent);border-radius:4px">Ouvrir ↗</a>
        <button id="fichePanelClose" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:1.2rem;padding:2px 6px;line-height:1" title="Fermer">✕</button>
      </div>
    </div>
    <iframe src="${META.fiche}" style="flex:1;border:none;width:100%" title="Fiche de révision" loading="lazy"></iframe>`;
  document.body.appendChild(panel);

  // Overlay sombre
  const overlay=document.createElement("div");
  overlay.id="ficheOverlay";
  overlay.style.cssText="position:fixed;inset:0;z-index:8999;background:rgba(0,0,0,.3);opacity:0;pointer-events:none;transition:opacity .25s";
  document.body.appendChild(overlay);

  let open=false;
  function openPanel(){
    open=true;
    panel.style.right="0";
    panel.setAttribute("aria-hidden","false");
    overlay.style.opacity="1";
    overlay.style.pointerEvents="auto";
    fab.innerHTML="✕";
  }
  function closePanel(){
    open=false;
    panel.style.right="-420px";
    panel.setAttribute("aria-hidden","true");
    overlay.style.opacity="0";
    overlay.style.pointerEvents="none";
    fab.innerHTML="📄";
  }

  fab.onclick=()=>open?closePanel():openPanel();
  document.getElementById("fichePanelClose").onclick=closePanel;
  overlay.onclick=closePanel;
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&open)closePanel();});
}

/* ── FEATURE : BADGE SYNC FIREBASE ───────────────────────────────────────
   Petit indicateur fixe en bas de page :
   🟢  Synchronisé  · il y a Xmin   (pseudo défini + Firebase prêt)
   🔄  Synchronisation…              (Firebase pas encore prêt)
   ⚫  Non synchronisé               (Anonyme ou pas de pseudo)       */

let _syncBadgeEl=null;

function fmtSyncAge(ts){
  if(!ts)return"";
  const diff=Math.floor((Date.now()-ts)/1000);
  if(diff<5)return" · à l'instant";
  if(diff<60)return" · il y a "+diff+" s";
  const m=Math.floor(diff/60);
  if(m<60)return" · il y a "+m+" min";
  const h=Math.floor(m/60);
  return" · il y a "+h+" h";
}

function updateSyncBadge(){
  if(!_syncBadgeEl)return;
  const pseudo=getPseudo();
  if(!pseudo||pseudo==="Anonyme"){
    _syncBadgeEl.innerHTML="<span style='opacity:.5'>⚫</span> Non synchronisé";
    _syncBadgeEl.title="Entrez un pseudo pour activer la synchronisation Firebase";
    return;
  }
  let lastTs=null;
  try{const v=localStorage.getItem(SYNC_KEY);if(v)lastTs=Number(v);}catch(e){}
  _syncBadgeEl.innerHTML="🟢 Synchronisé"+fmtSyncAge(lastTs);
  _syncBadgeEl.title=lastTs?"Dernière synchro : "+new Date(lastTs).toLocaleTimeString("fr-FR"):"En attente de la première synchronisation";
}

function initSyncBadge(){
  if(document.getElementById("syncBadge"))return;
  const badge=document.createElement("div");
  badge.id="syncBadge";
  badge.style.cssText="position:fixed;bottom:14px;left:50%;transform:translateX(-50%);z-index:7000;background:var(--sheet);border:1px solid var(--line);border-radius:20px;padding:5px 14px;font:500 .75rem var(--f-mono);color:var(--muted);box-shadow:0 1px 6px rgba(0,0,0,.12);pointer-events:none;white-space:nowrap;max-width:calc(100vw - 32px);overflow:hidden;text-overflow:ellipsis";
  badge.setAttribute("aria-live","polite");
  document.body.appendChild(badge);
  _syncBadgeEl=badge;
  updateSyncBadge();
  // Rafraîchir l'âge toutes les 30 secondes
  setInterval(updateSyncBadge,30000);
}

let tab="plan",session=null,timerId=null;

/* ── FEATURE 4 : ANIMATION FADE ENTRE TABS ─────────────── */
function setTab(t){
  tab=t;
  [["plan","tabPlan"],["quiz","tabQuiz"],["free","tabFree"],["err","tabErr"]].forEach(([k,id])=>document.getElementById(id).setAttribute("aria-selected",k===t));
  const v=document.getElementById("view");
  v.style.opacity="0";
  v.style.transition="opacity .1s";
  setTimeout(()=>{
    render();
    v.style.opacity="1";
  },100);
}
document.getElementById("tabPlan").onclick=()=>setTab("plan");
document.getElementById("tabQuiz").onclick=()=>setTab("quiz");
document.getElementById("tabFree").onclick=()=>setTab("free");
document.getElementById("tabErr").onclick=()=>setTab("err");

// Bouton theme switcher — injecté si pas encore présent dans le HTML
(function injectThemeBtn(){
  if(document.getElementById("themeToggle"))return;
  const nav=document.querySelector("nav.tabs");
  if(!nav)return;
  const btn=document.createElement("button");
  btn.id="themeToggle";
  btn.title="Basculer le thème";
  btn.style.cssText="background:none;border:0;padding:8px 10px;color:var(--muted);font-size:1rem;cursor:pointer;margin-left:auto;white-space:nowrap;flex-shrink:0";
  btn.onclick=toggleTheme;
  // Insérer avant le lien fiche si présent, sinon à la fin
  const ficheLink=nav.querySelector(".tab-fiche");
  if(ficheLink){nav.insertBefore(btn,ficheLink)}else{nav.appendChild(btn)}
  updateThemeBtn();
})();

// Demander le pseudo au premier lancement (léger délai pour le rendu initial)
if(!getPseudo()){setTimeout(showPseudoModal,400);}
else{
  // Pseudo déjà connu : logger la connexion dès que Firebase est prêt
  (function waitLogSession(attempts){
    if(typeof window.logSession==="function"){window.logSession(KEY,getPseudo());return;}
    if(attempts>10)return;
    setTimeout(()=>waitLogSession(attempts+1),500);
  })(0);
}

// Initialiser le panneau fiche
setTimeout(initFichePanel,200);

// Initialiser le badge de synchronisation
setTimeout(initSyncBadge,300);

function render(){
  header();
  const v=document.getElementById("view");
  if(tab==="plan")v.innerHTML=planHTML();
  else if(tab==="err")v.innerHTML=errHTML();
  else if(tab==="free")v.innerHTML=session?(session.done?resultHTML():qHTML()):freeHTML();
  else v.innerHTML=session?(session.done?resultHTML():qHTML()):pickHTML();
  bind();
}

/* ── PLAN ─────────────────────────────────────────────── */
function dotClass(d,m){
  const s=modStats(d,m);
  if(s.done===s.n)return "moddot done";
  if(s.done>0)return "moddot partial";
  return "moddot";
}
function planHTML(){
  const examInfo=META.exam||"";
  const ficheLink=META.fiche?`<a href="${META.fiche}" target="_blank" rel="noopener">ta fiche de révision</a>`:"la fiche de révision";
  const rulesHTML=META.rules?META.rules.map(r=>`<div><b class="num">${r[0]}</b><span>${r[1]}</span></div>`).join(""):`<div><b class="num">–</b><span>voir plan ci-dessous</span></div>`;
  const nbJours=PLAN.length;
  const dureeLabel=nbJours===7?"Une semaine":nbJours===14?"Deux semaines":nbJours===15?"Quinze jours":nbJours===30?"Trente jours":`${nbJours} jours`;
  return `<p class="intro">${dureeLabel}, un bloc de domaine par jour, pondéré comme l'examen. Chaque jour est découpé en <b>5 modules de 10 questions</b>. Lis ${ficheLink}, puis fais les modules un par un.</p>
  <div class="rules">${rulesHTML}</div>
  <ol class="days">${PLAN.map(p=>{
    const s=dayStats(p.d),pct=Math.round(s.done/s.n*100);
    const nm=dayModCount(p.d);
    const dots=Array.from({length:nm},(_,m)=>`<span class="${dotClass(p.d,m)}" title="Module ${m+1}"></span>`).join("");
    const modBtns=Array.from({length:nm},(_,m)=>{
      const ms=modStats(p.d,m);
      let cls=ms.done===ms.n?"btn sec":"btn"+(ms.done>0&&ms.done<ms.n?" ghost":"");
      const label=ms.done===ms.n?`M${m+1} ✓`:ms.done>0?`M${m+1} →`:`M${m+1}`;
      const tip=ms.done?` · ${Math.round(ms.ok/ms.done*100)}%`:"";
      return `<button class="${cls}" data-mod="${p.d}-${m}" title="Module ${m+1} : q${m*MOD_SIZE+1}–${Math.min((m+1)*MOD_SIZE,s.n)}${tip}" style="padding:6px 10px;font-size:.82rem">${label}</button>`;
    }).join("");
    const ficheBlock=p.sections&&p.sections.length&&META.fiche?`
      <div class="fiche-day"><h3>📖 Fiche du jour</h3><ul class="fiche-list">${p.sections.map(sec=>{
        const lsKey=`certifs.read.${QKEY}.${p.d}.${sec.id}`;
        const statusKey=`certifs.status.${QKEY}.${p.d}.${sec.id}`;
        let checked=false;try{checked=!!localStorage.getItem(lsKey);}catch(e){}
        let status=0;try{status=parseInt(localStorage.getItem(statusKey)||"0");}catch(e){}
        const statusIcons=["🔘","✅","🔁"];
        const statusLabels=["","Compris","À revoir"];
        const statusColors=["","#1a7f4e","#a85a00"];
        const statusBg=["","#d4f0e2","#ffecd4"];
        const ic=statusIcons[status];
        const lbl=statusLabels[status];
        return `<li class="fiche-item" id="fi-${sec.id}" data-status="${status}" style="${status>0?`background:${statusBg[status]};border-left:3px solid ${statusColors[status]};padding-left:8px;border-radius:4px`:''}">
          <div style="display:flex;align-items:center;gap:8px;min-width:0">
            <label style="display:flex;align-items:center;gap:6px;min-width:0;flex:1">
              <input type="checkbox" class="fiche-cb" data-key="${lsKey}"${checked?" checked":""}> <a href="${META.fiche}#${sec.id}" target="_blank" rel="noopener">${esc(sec.titre)}</a>
            </label>
            <button class="status-btn" data-status-key="${statusKey}" data-sec-id="${sec.id}" title="Changer le statut de compréhension" style="background:none;border:none;cursor:pointer;padding:2px 4px;font-size:1rem;border-radius:4px;flex-shrink:0;line-height:1">${ic}</button>${lbl?`<span style="font-size:.7rem;font-weight:600;color:${statusColors[status]};flex-shrink:0">${lbl}</span>`:""}
          </div>
        </li>`;
      }).join("")}</ul></div>`:"";
    return `<li class="day"><div class="tag"><span>Jour</span><b>${p.d}</b></div><div class="body">
      <div><h2>${esc(p.theme)}</h2><div class="chips" style="margin-top:6px">${(p.dom||[]).map(x=>`<span class="chip">${x}</span>`).join("")}${p.time?`<span class="chip" style="background:transparent;color:var(--muted)">${p.time}</span>`:""}</div></div>
      ${ficheBlock}<div class="cols"><div><h3>À lire</h3><ul>${(p.read||p.topics||[]).map(r=>`<li>${esc(r)}</li>`).join("")}${(p.links||[]).map(l=>Array.isArray(l)?`<li><a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a></li>`:`<li><a href="${l.u}" target="_blank" rel="noopener">${esc(l.l)}</a></li>`).join("")}</ul></div>
      <div><h3>À retenir</h3><ul>${(p.focus||[]).map(r=>`<li>${esc(r)}</li>`).join("")}</ul></div></div>
      ${p.extra?`<div style="font-size:.88rem"><b>+</b> ${esc(p.extra)}</div>`:""}
      <div class="dayfoot">
        <div class="prog"><div class="moddots">${dots}</div>${svgCircle(pct,52)}<span class="num" style="font-size:.8rem;margin-left:6px">${s.done}/${s.n}${s.done?` · ${Math.round(s.ok/s.done*100)} %`:""}</span></div>
        <div class="row" style="gap:6px">${modBtns}<button class="btn ghost" data-start="${p.d}" style="padding:6px 10px;font-size:.82rem">Tout J${p.d}</button></div>
      </div>
    </div></li>`;
  }).join("")}</ol>
  <p class="note">Les questions sont originales, écrites à partir de la documentation officielle${examInfo?" ("+examInfo+")":""}.</p>
  <p class="note" style="margin-top:6px">Connecté en tant que : <b id="pseudoDisplay" style="color:var(--accent)">${esc(getPseudo()||"Anonyme")}</b> — <button id="changePseudo" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:inherit;padding:0;text-decoration:underline">Changer</button></p>`;
}

/* ── QUIZ PICK ─────────────────────────────────────────── */
function pickHTML(){
  return `<p class="intro">Choisis un module ou un lot complet. Les options sont mélangées à chaque passage.</p>
  <div class="days">${PLAN.map(p=>{
    const s=dayStats(p.d);
    const nm=dayModCount(p.d);
    const modBtns=Array.from({length:nm},(_,m)=>{
      const ms=modStats(p.d,m);
      const isDone=ms.done===ms.n;
      const cls=isDone?"btn sec":"btn"+(ms.done>0?" ghost":"");
      return `<button class="${cls}" data-mod="${p.d}-${m}" style="padding:6px 10px;font-size:.82rem" title="q${m*MOD_SIZE+1}–${Math.min((m+1)*MOD_SIZE,s.n)} · ${ms.done}/${ms.n} faites">M${m+1}${isDone?" ✓":ms.done>0?" →":""}</button>`;
    }).join("");
    return `<div class="day"><div class="tag"><span>Jour</span><b>${p.d}</b></div><div class="body"><h2>${esc(p.theme)}</h2>
      <div class="dayfoot">
        <span class="num" style="font-size:.8rem;color:var(--muted)">${s.done}/${s.n} faites${s.done?` · ${Math.round(s.ok/s.done*100)} %`:""}</span>
        <div class="row" style="gap:6px">${modBtns}<button class="btn ghost" data-start="${p.d}" style="padding:6px 10px;font-size:.82rem">Tout J${p.d}</button>
        ${s.done&&s.done<s.n?`<button class="btn sec" data-rest="${p.d}" style="padding:6px 10px;font-size:.82rem">Restantes</button>`:""}</div>
      </div>
    </div></div>`;
  }).join("")}</div>`;
}

/* ── FREE SESSION ──────────────────────────────────────── */
function freeHTML(){
  const cfg=store.free;
  const allDays=PLAN.map(p=>p.d);
  const days=cfg.days||allDays;
  const n=cfg.n||30;
  const pool=buildFreePool(days);
  const timedOn=cfg.timed||false;
  const examMins=META.examMins||60;

  return `<div class="free-panel">
    <div class="eyebrow" style="margin-bottom:4px">Session d'entraînement libre</div>
    <h2>Configure ta session</h2>
    <div class="free-opts">
      <div class="free-row">
        <label>Nombre de questions</label>
        <input type="number" id="freeN" value="${n}" min="5" max="${total()}" step="5" style="width:80px">
        <div class="preset-btns">
          <button data-preset="10">10</button>
          <button data-preset="20">20</button>
          <button data-preset="30">30</button>
          <button data-preset="50">50</button>
          <button data-preset="65">65</button>
        </div>
      </div>
      <div class="free-row" style="align-items:flex-start">
        <label style="padding-top:4px">Jours sources</label>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${allDays.map(d=>`<label style="display:flex;align-items:center;gap:4px;font-size:.85rem;cursor:pointer;font-weight:400;min-width:0"><input type="checkbox" id="fd${d}" ${days.includes(d)?"checked":""} data-fd="${d}" style="accent-color:var(--accent)"> J${d}</label>`).join("")}
        </div>
      </div>
      <!-- FEATURE 7 : Timer simulation examen -->
      <div class="free-row">
        <label>Mode simulation</label>
        <label style="display:flex;align-items:center;gap:6px;font-weight:400;font-size:.88rem;cursor:pointer">
          <input type="checkbox" id="freeTimed" ${timedOn?"checked":""} style="accent-color:var(--accent)">
          Chrono ${examMins} min (comme l'examen)
        </label>
      </div>
      <div class="free-row">
        <label>Pioche parmi</label>
        <span class="tally" id="freeTally">${Math.min(n,pool.length)} / ${pool.length} questions disponibles</span>
      </div>
    </div>
    <div class="row">
      <button class="btn" id="freeLaunch" ${pool.length<1?"disabled":""}>Lancer ${Math.min(n,pool.length)} questions</button>
      <button class="btn ghost" data-home>Retour au plan</button>
    </div>
  </div>
  <p class="note">En session libre, tes résultats <b>ne</b> sont <b>pas</b> enregistrés dans ta progression quotidienne. C'est du bonus pur.</p>`;
}

function buildFreePool(days){
  const pool=[];
  days.forEach(d=>{
    if(!window.QDATA[d])return;
    window.QDATA[d].forEach((_,i)=>pool.push([d,i]));
  });
  return pool;
}

/* ── ERRORS ────────────────────────────────────────────── */
function fmtDate(ts){
  if(!ts)return"–";
  try{
    const d=ts.toDate?ts.toDate():new Date(ts.seconds*1000);
    return d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"2-digit"});
  }catch(e){return"–"}
}

/* ── FEATURE 8 : STATS PAR DOMAINE ──────────────────────── */
function domainStatsHTML(){
  // Grouper les résultats par jour (= domaine)
  const byDay={};
  Object.keys(store.r).forEach(k=>{
    const[d]=k.split("-").map(Number);
    if(!byDay[d])byDay[d]={done:0,ok:0,n:0};
    byDay[d].done++;
    if(store.r[k]===1)byDay[d].ok++;
  });
  // Ajouter le total de questions par jour
  PLAN.forEach(p=>{
    if(!byDay[p.d])byDay[p.d]={done:0,ok:0,n:window.QDATA[p.d].length};
    else byDay[p.d].n=window.QDATA[p.d].length;
  });

  const rows=PLAN.map(p=>{
    const s=byDay[p.d]||{done:0,ok:0,n:window.QDATA[p.d].length};
    const pct=s.done?Math.round(s.ok/s.done*100):null;
    const cover=Math.round(s.done/s.n*100);
    const col=pct===null?"var(--muted)":pct>=80?"var(--ok)":pct>=50?"var(--accent)":"var(--ko)";
    return `<tr>
      <td style="padding:8px 6px 8px 0;border-bottom:1px solid var(--line)"><b>J${p.d}</b> <span style="font-size:.82rem;color:var(--muted)">${esc(p.theme)}</span></td>
      <td style="padding:8px 6px;border-bottom:1px solid var(--line);text-align:center" class="num">${s.done}/${s.n}</td>
      <td style="padding:8px 6px;border-bottom:1px solid var(--line)">
        <div style="display:flex;align-items:center;gap:6px">
          <div style="flex:1;height:6px;background:var(--line);border-radius:3px;overflow:hidden"><div style="width:${cover}%;height:100%;background:var(--accent)"></div></div>
          <span style="font-size:.78rem;color:var(--muted);white-space:nowrap">${cover} %</span>
        </div>
      </td>
      <td style="padding:8px 0 8px 6px;border-bottom:1px solid var(--line);text-align:center;font-weight:700;font-family:var(--f-mono);color:${col}">${pct!==null?pct+" %":"–"}</td>
    </tr>`;
  }).join("");

  return `<div style="margin-top:28px">
    <h3 style="font-size:1rem;margin-bottom:12px">📊 Statistiques par domaine</h3>
    <div style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse;font-size:.88rem">
      <thead><tr style="font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">
        <th style="text-align:left;padding-bottom:8px;border-bottom:2px solid var(--line)">Domaine</th>
        <th style="padding:0 6px 8px;border-bottom:2px solid var(--line)" class="num">Faites</th>
        <th style="padding:0 6px 8px;border-bottom:2px solid var(--line);min-width:120px">Couverture</th>
        <th style="padding:0 0 8px 6px;border-bottom:2px solid var(--line)">Réussite</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    </div>
  </div>`;
}

/* ── FEATURE 10 : EXPORT BILAN PDF ───────────────────────── */
function exportPDF(){
  const pseudo=getPseudo()||"Anonyme";
  const now=new Date().toLocaleDateString("fr-FR");
  const allKeys=Object.keys(store.r);
  const allOk=allKeys.filter(k=>store.r[k]===1).length;
  const globalPct=allKeys.length?Math.round(allOk/allKeys.length*100):0;
  const totalQ=total();
  const errList=errors();
  const passScore=META.passScore||700;

  const domRows=PLAN.map(p=>{
    const s=dayStats(p.d);
    const pct=s.done?Math.round(s.ok/s.done*100):null;
    return `<tr>
      <td style="padding:6px 10px 6px 0;border-bottom:1px solid #e0e0e0">J${p.d} — ${p.theme}</td>
      <td style="padding:6px;border-bottom:1px solid #e0e0e0;text-align:center">${s.done}/${s.n}</td>
      <td style="padding:6px;border-bottom:1px solid #e0e0e0;text-align:center">${Math.round(s.done/s.n*100)} %</td>
      <td style="padding:6px 0 6px 10px;border-bottom:1px solid #e0e0e0;text-align:center;font-weight:700;color:${pct===null?"#999":pct>=80?"#1d7a4f":pct>=50?"#1a5c9a":"#b4372f"}">${pct!==null?pct+" %":"–"}</td>
    </tr>`;
  }).join("");

  const errItems=errList.slice(0,30).map(([d,i])=>`<li style="margin:4px 0;font-size:11px">J${d} · ${Q(d,i).q}</li>`).join("");

  const html=`<!doctype html><html lang="fr"><head><meta charset="utf-8">
  <title>Bilan — ${META.exam||"Certification"}</title>
  <style>
    *{box-sizing:border-box}body{font:13px/1.5 "Segoe UI",Arial,sans-serif;margin:0;padding:24px;color:#15202b;max-width:800px;margin:0 auto}
    h1{font-size:22px;margin:0 0 4px}h2{font-size:16px;margin:20px 0 8px;border-bottom:2px solid #15202b;padding-bottom:4px}
    .meta{font-size:11px;color:#666;margin-bottom:20px}
    .big{font-size:48px;font-weight:700;line-height:1}
    .ok{color:#1d7a4f}.warn{color:#c17600}.ko{color:#b4372f}
    table{width:100%;border-collapse:collapse}th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding-bottom:6px;border-bottom:2px solid #15202b}
    ul{margin:0;padding-left:1.2em}.note{font-size:11px;color:#666;margin-top:6px}
    @media print{body{padding:12px}h2{page-break-after:avoid}}
  </style></head><body>
  <h1>${META.exam||"Certification"}</h1>
  <div class="meta">Bilan de révision — ${pseudo} — ${now}</div>
  <h2>Progression globale</h2>
  <div class="big ${globalPct>=passScore/10?"ok":globalPct>=60?"warn":"ko"}">${globalPct} %</div>
  <p>${allKeys.length} questions traitées sur ${totalQ} · ${allOk} correctes · ${errList.length} erreurs actives${META.passScore?` · Seuil examen : ${META.passScore} %`:""}</p>
  <h2>Par domaine</h2>
  <table><thead><tr><th>Domaine</th><th style="text-align:center">Faites</th><th style="text-align:center">Couverture</th><th style="text-align:center">Réussite</th></tr></thead><tbody>${domRows}</tbody></table>
  ${errList.length?`<h2>Points faibles (${Math.min(errList.length,30)} sur ${errList.length})</h2><ul>${errItems}</ul>${errList.length>30?`<p class="note">… et ${errList.length-30} autres erreurs.</p>`:""}`:"<h2>Points faibles</h2><p>Aucune erreur active — excellent ! 🎉</p>"}
  <p class="note" style="margin-top:24px">Rapport généré par certifs.crachdev · questions issues des documentations officielles uniquement</p>
  </body></html>`;

  const blob=new Blob([html],{type:"text/html;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download=`bilan-${(META.exam||"certif").replace(/[^a-z0-9]/gi,"-").toLowerCase()}-${now.replace(/\//g,"-")}.html`;
  document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},1000);
}

function errHTML(){
  const e=errors();
  const baseHTML=e.length
    ?`<p class="intro">${e.length} question${e.length>1?"s":""} à revoir localement. Rejoue-les jusqu'à ce que la liste soit vide.</p>
      <div class="row" style="margin-bottom:16px">
        <button class="btn" data-replay="all">Rejouer les ${e.length} erreurs</button>
        <!-- FEATURE 6 : Mode révision erreurs uniquement -->
        <button class="btn ghost" data-replay-timed style="font-size:.85rem" title="Simuler l'examen sur tes erreurs uniquement">⏱ Mode examen</button>
        <!-- FEATURE 10 : Export PDF -->
        <button class="btn sec" id="exportPdfBtn" style="font-size:.85rem">⬇ Exporter le bilan</button>
      </div>
      <ul class="missed">${e.slice(0,60).map(([d,i])=>`<li><span class="eyebrow">J${d} · ${esc(Q(d,i).t)}</span><br>${esc(Q(d,i).q)}</li>`).join("")}</ul>
      ${e.length>60?`<p class="note">… et ${e.length-60} autres.</p>`:""}`
    :`<div class="empty"><h2 style="margin-bottom:6px">Aucune erreur en attente</h2>Les questions ratées apparaîtront ici. Une question réussie au rejeu sort de la liste.</div>
      <div style="margin-top:16px"><button class="btn sec" id="exportPdfBtn" style="font-size:.85rem">⬇ Exporter le bilan</button></div>`;

  // FEATURE 8 : Stats par domaine dans onglet erreurs
  const statsHTML=domainStatsHTML();

  // Section historique Firebase (chargée en async)
  const histId="fb-hist-"+Date.now();
  const histHTML=`
  <div style="margin-top:32px">
    <h3 style="font-size:1rem;margin-bottom:4px">Historique multi-appareils</h3>
    <p class="eyebrow" style="margin-bottom:12px">Toutes tes erreurs depuis le premier quiz, tous appareils confondus</p>
    <div id="${histId}" style="color:var(--muted);font-size:.85rem">Chargement…</div>
  </div>`;

  // Charger les données Firebase en async et injecter dans le DOM
  if(typeof window.getErrors==="function"){
    window.getErrors(KEY).then(rows=>{
      const el=document.getElementById(histId);
      if(!el)return;
      if(!rows.length){el.innerHTML=`<p style="font-size:.85rem;color:var(--muted)">Aucune erreur enregistrée dans Firebase pour cette certification.</p>`;return;}

      const tbody=rows.slice(0,100).map(r=>{
        const total=(r.attempts||0)+(r.successes||0);
        const pct=total?Math.round((r.successes||0)/total*100):0;
        const bar=`<span style="display:inline-block;width:${Math.max(4,pct)}%;height:5px;border-radius:3px;background:${pct>=80?"var(--ok)":pct>=50?"var(--accent)":"var(--ko)"}"></span><span style="display:inline-block;width:${100-Math.max(4,pct)}%;height:5px;border-radius:3px;background:var(--line)"></span>`;
        return `<tr>
          <td style="padding:8px 6px 8px 0;border-bottom:1px solid var(--line);max-width:320px;font-size:.83rem">${esc(r.question||"–")}${r.question&&r.question.length>=120?"…":""}</td>
          <td style="padding:8px 6px;border-bottom:1px solid var(--line);white-space:nowrap;font-size:.78rem;color:var(--muted)">${esc(r.theme||"–")}</td>
          <td style="padding:8px 6px;border-bottom:1px solid var(--line);text-align:center" class="num">${r.attempts||0}</td>
          <td style="padding:8px 6px;border-bottom:1px solid var(--line);min-width:80px"><div style="display:flex;gap:1px;align-items:center">${bar}</div><span style="font-size:.7rem;color:var(--muted)">${pct} %</span></td>
          <td style="padding:8px 0 8px 6px;border-bottom:1px solid var(--line);white-space:nowrap;font-size:.78rem;color:var(--muted)">${fmtDate(r.lastFail)}</td>
        </tr>`;
      }).join("");

      el.innerHTML=`
        <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-family:var(--f-body)">
          <thead>
            <tr style="font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">
              <th style="text-align:left;padding-bottom:8px;border-bottom:2px solid var(--line)">Question</th>
              <th style="text-align:left;padding:0 6px 8px;border-bottom:2px solid var(--line)">Thème</th>
              <th style="padding:0 6px 8px;border-bottom:2px solid var(--line)" class="num">Échecs</th>
              <th style="text-align:left;padding:0 6px 8px;border-bottom:2px solid var(--line);min-width:80px">Réussite</th>
              <th style="text-align:left;padding:0 0 8px 6px;border-bottom:2px solid var(--line)">Dernier échec</th>
            </tr>
          </thead>
          <tbody>${tbody}</tbody>
        </table>
        </div>
        ${rows.length>100?`<p class="note" style="margin-top:8px">… et ${rows.length-100} autres erreurs.</p>`:""}`;
    }).catch(()=>{
      const el=document.getElementById(histId);
      if(el)el.innerHTML=`<p style="font-size:.85rem;color:var(--muted)">Impossible de charger l'historique Firebase.</p>`;
    });
  } else {
    setTimeout(()=>{
      const el=document.getElementById(histId);
      if(el&&typeof window.getErrors==="function"){
        window.getErrors(KEY).then(rows=>{
          if(!rows.length){el.innerHTML=`<p style="font-size:.85rem;color:var(--muted)">Aucune erreur Firebase pour cette certification.</p>`;return;}
          el.innerHTML=`<p style="font-size:.85rem;color:var(--muted)">${rows.length} erreur${rows.length>1?"s":""} chargée${rows.length>1?"s":""}. Recharge l'onglet pour voir le tableau complet.</p>`;
        });
      } else if(el){
        el.innerHTML=`<p style="font-size:.85rem;color:var(--muted)">Firebase non connecté.</p>`;
      }
    },2000);
  }

  return baseHTML+statsHTML+histHTML;
}

/* ── SESSION ───────────────────────────────────────────── */
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function start(items,label,timed,isLive){
  // isLive = free session (don't persist results)
  const examMins=META.examMins||70;
  session={
    items:shuffle(items).map(([d,i])=>({d,i,order:shuffle(Q(d,i).o.map((_,k)=>k))})),
    idx:0,sel:[],checked:false,score:0,missed:[],label,done:false,
    end:timed?Date.now()+examMins*60*1000:null,
    isLive:!!isLive
  };
  clearInterval(timerId);
  if(timed)timerId=setInterval(tick,1000);
  if(tab==="free"){}else tab="quiz";
  render();
}

function tick(){
  if(!session||!session.end)return;
  const left=Math.max(0,session.end-Date.now()),el=document.getElementById("timer");
  if(el)el.textContent=fmt(left);
  if(left===0){clearInterval(timerId);session.done=true;render()}
}
const fmt=ms=>{const s=Math.ceil(ms/1000);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")};

/* ── Q RENDER ──────────────────────────────────────────── */
function qHTML(){
  const it=session.items[session.idx],q=Q(it.d,it.i),need=q.a.length,multi=need>1;
  const opts=it.order.map((k,pos)=>{
    let cls="opt"+(multi?" sq":"");const sel=session.sel.includes(k);
    if(session.checked){if(q.a.includes(k))cls+=" good";else if(sel)cls+=" bad"}else if(sel)cls+=" sel";
    return `<button class="${cls}" data-opt="${k}" ${session.checked?"disabled":""}><span class="bub">${L[pos]}</span><span>${esc(q.o[k])}${session.checked?`<span class="why" style="display:block">${q.a.includes(k)?"✓ ":"✗ "}${esc(q.e[k])}</span>`:""}</span></button>`}).join("");
  const ok=session.checked&&isRight(q,session.sel);
  const liveBadge=session.isLive?`<span class="chip" style="background:var(--ok-soft);color:var(--ok);font-size:.7rem">Session libre</span>`:"";
  // FEATURE 5 : Score de passage
  const passBadge=META.passScore?`<span class="chip" style="background:var(--accent-soft);color:var(--accent);font-size:.7rem">Seuil : ${META.passScore} %</span>`:"";
  return `<div class="qhead">${liveBadge}${passBadge}<span class="eyebrow">${esc(session.label)} · ${esc(q.t)}</span>
    <span class="num" style="font-size:.85rem;color:var(--muted)">${session.idx+1} / ${session.items.length} · ${session.score} juste${session.score>1?"s":""}${session.end?` · <span id="timer" class="timer">${fmt(session.end-Date.now())}</span>`:""}</span></div>
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">${svgCircle(Math.round(session.idx/session.items.length*100),40,"var(--accent)")}<div class="bar" style="flex:1;margin:0"><i style="width:${session.idx/session.items.length*100}%"></i></div></div>
  <div class="qcard"><p class="qtext">${esc(q.q.replace(/ \(2 réponses\)/,""))}</p>${multi?`<div class="multi">Choisis ${need} réponses</div>`:""}
  <div class="opts">${opts}</div>
  ${session.checked?`<div class="verdict ${ok?"ok":"ko"}">${ok?"Bonne réponse.":"Raté. Relis l'explication de chaque option."}</div>`:""}
  <div class="qnav"><button class="btn ghost" data-quit>Arrêter</button>
  ${session.checked?`<button class="btn" data-next>${session.idx+1<session.items.length?"Question suivante":"Voir le résultat"}</button>`:`<button class="btn" data-check ${session.sel.length!==need?"disabled":""}>Valider</button>`}</div></div>`;
}
const isRight=(q,sel)=>sel.length===q.a.length&&sel.every(k=>q.a.includes(k));

/* ── RESULT ────────────────────────────────────────────── */
function resultHTML(){
  const n=session.items.length,answered=session.idx+(session.checked?1:0),pct=answered?Math.round(session.score/answered*100):0;
  const passScore=META.passScore||70;
  const msg=pct>=passScore?"✅ Niveau examen atteint sur ce lot.":pct>=passScore-10?"⚠️ Juste au-dessus de la barre. Rejoue tes erreurs.":"❌ En dessous de l'objectif. Relis les sections de la fiche puis rejoue tes erreurs.";
  const liveNote=session.isLive?`<p style="font-size:.85rem;color:var(--muted)">Session libre — résultats <b>non comptabilisés</b> dans ta progression quotidienne.</p>`:"";
  const passNote=META.passScore?`<p style="font-size:.82rem;color:var(--muted)">Seuil examen : <b>${META.passScore} %</b></p>`:"";
  return `<div class="result"><span class="eyebrow">${esc(session.label)} · terminé</span>
   <div class="score num" style="color:${pct>=passScore?"var(--ok)":pct>=passScore-10?"var(--accent)":"var(--ko)"}">${pct} %</div>
   <div>${session.score} bonnes réponses sur ${answered}${answered<n?` (${n-answered} non traitées)`:""}. ${msg}</div>
   ${passNote}${liveNote}
   ${session.missed.length?`<h3 style="font-size:1rem">À revoir</h3><ul class="missed">${session.missed.map(([d,i])=>`<li>${esc(Q(d,i).q)}</li>`).join("")}</ul>`:""}
   <div class="row">${session.missed.length&&!session.isLive?`<button class="btn" data-replay="session">Rejouer ces ${session.missed.length} erreurs</button>`:""}<button class="btn ghost" data-home>Retour au plan</button>${tab==="free"?`<button class="btn sec" data-backfree>Nouvelle session libre</button>`:""}</div></div>`;
}

/* ── FEATURE 9 : RACCOURCIS CLAVIER ──────────────────────── */
let _kbActive=true;
document.addEventListener("keydown",function(e){
  // Ne pas capturer si focus dans un input
  if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"||e.target.isContentEditable)return;
  if(!_kbActive)return;

  // En session quiz
  if(session&&!session.done&&!session.checked){
    // 1-4 : sélectionner une option
    const num=parseInt(e.key);
    if(num>=1&&num<=4){
      const opts=document.querySelectorAll("[data-opt]");
      const opt=opts[num-1];
      if(opt&&!opt.disabled)opt.click();
      return;
    }
    // Entrée : valider si possible
    if(e.key==="Enter"){
      const checkBtn=document.querySelector("[data-check]");
      if(checkBtn&&!checkBtn.disabled)checkBtn.click();
      return;
    }
  }
  if(session&&!session.done&&session.checked){
    // Entrée ou → : question suivante
    if(e.key==="Enter"||e.key==="ArrowRight"){
      const nextBtn=document.querySelector("[data-next]");
      if(nextBtn)nextBtn.click();
      return;
    }
  }
  // Navigation tabs (pas en session)
  if(!session){
    if(e.key==="ArrowLeft"||e.key==="ArrowRight"){
      const tabs=["plan","quiz","free","err"];
      const cur=tabs.indexOf(tab);
      const dir=e.key==="ArrowRight"?1:-1;
      const next=tabs[(cur+dir+tabs.length)%tabs.length];
      setTab(next);
      return;
    }
  }
  // T : basculer thème
  if(e.key.toLowerCase()==="t"&&!e.ctrlKey&&!e.metaKey){
    toggleTheme();
    return;
  }
  // F : ouvrir/fermer la fiche
  if(e.key.toLowerCase()==="f"&&!e.ctrlKey&&!e.metaKey){
    const fab=document.getElementById("ficheFab");
    if(fab)fab.click();
    return;
  }
});

/* ── BIND ──────────────────────────────────────────────── */
function bind(){
  // Plan tab: fiche section checkboxes
  document.querySelectorAll(".fiche-cb").forEach(cb=>cb.onchange=()=>{
    try{if(cb.checked)localStorage.setItem(cb.dataset.key,"1");else localStorage.removeItem(cb.dataset.key);}catch(e){}
  });
  // Plan tab: concept status toggle (🔘 → ✅ Compris → 🔁 À revoir → 🔘)
  const STATUS_ICONS=["🔘","✅","🔁"];
  const STATUS_LABELS=["","Compris","À revoir"];
  const STATUS_COLORS=["","#1a7f4e","#a85a00"];
  const STATUS_BG=["","#d4f0e2","#ffecd4"];
  document.querySelectorAll(".status-btn").forEach(btn=>{
    btn.onclick=()=>{
      const li=document.getElementById("fi-"+btn.dataset.secId);
      if(!li)return;
      let s=(parseInt(li.dataset.status||"0")+1)%3;
      li.dataset.status=s;
      btn.textContent=STATUS_ICONS[s];
      // update label span
      let span=btn.nextElementSibling;
      if(span&&span.tagName==="SPAN"){span.remove();}
      if(s>0){
        const lbl=document.createElement("span");
        lbl.style.cssText=`font-size:.7rem;font-weight:600;color:${STATUS_COLORS[s]};flex-shrink:0`;
        lbl.textContent=STATUS_LABELS[s];
        btn.insertAdjacentElement("afterend",lbl);
      }
      // update li background
      li.style.background=s?STATUS_BG[s]:"";
      li.style.borderLeft=s?`3px solid ${STATUS_COLORS[s]}`:"";
      li.style.paddingLeft=s?"8px":"";
      li.style.borderRadius=s?"4px":"";
      try{if(s>0)localStorage.setItem(btn.dataset.statusKey,s);else localStorage.removeItem(btn.dataset.statusKey);}catch(e){}
    };
  });
  // Plan tab: start full day
  document.querySelectorAll("[data-start]").forEach(b=>b.onclick=()=>{
    const d=+b.dataset.start,p=PLAN[d-1];
    start(window.QDATA[d].map((_,i)=>[d,i]),"Jour "+d,!!p.timed);
  });
  // Plan tab: start a module
  document.querySelectorAll("[data-mod]").forEach(b=>b.onclick=()=>{
    const[ds,ms]=b.dataset.mod.split("-"),d=+ds,m=+ms;
    const{start:s,end:e}=modRange(d,m);
    const items=Array.from({length:e-s},(_,k)=>[d,s+k]);
    start(items,`Jour ${d} · Module ${m+1}`);
  });
  // Rest of day
  document.querySelectorAll("[data-rest]").forEach(b=>b.onclick=()=>{
    const d=+b.dataset.rest;
    start(window.QDATA[d].map((_,i)=>[d,i]).filter(([,i])=>store.r[d+"-"+i]===undefined),"Jour "+d+" · restantes");
  });
  // Replay errors
  document.querySelectorAll("[data-replay]").forEach(b=>b.onclick=()=>{
    const items=b.dataset.replay==="all"?shuffle(errors()):session.missed.slice();
    start(items,"Rejeu des erreurs");
  });
  // FEATURE 6 : Mode examen sur erreurs uniquement
  const replayTimed=document.querySelector("[data-replay-timed]");
  if(replayTimed)replayTimed.onclick=()=>{
    const items=shuffle(errors());
    if(items.length)start(items,"Révision erreurs (mode examen)",true,true);
  };
  // Options
  document.querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>{
    const k=+b.dataset.opt,q=Q(session.items[session.idx].d,session.items[session.idx].i);
    if(q.a.length===1)session.sel=[k];
    else session.sel=session.sel.includes(k)?session.sel.filter(x=>x!==k):session.sel.length<q.a.length?[...session.sel,k]:session.sel;
    render();
  });
  // Check
  const c=document.querySelector("[data-check]");
  if(c)c.onclick=()=>{
    const it=session.items[session.idx],q=Q(it.d,it.i),ok=isRight(q,session.sel);
    session.checked=true;
    if(ok)session.score++;else session.missed.push([it.d,it.i]);
    // Progression quotidienne : uniquement hors session libre
    if(!session.isLive){
      const wasWrong=store.r[it.d+"-"+it.i]===0;
      store.r[it.d+"-"+it.i]=ok?1:0;save();
      // Firebase tracking (multi-appareils)
      const pseudo=getPseudo();
      if(!ok && typeof window.logError==="function"){
        window.logError(KEY,it.d,it.i,q.t,q.q,pseudo);
      } else if(ok && wasWrong && typeof window.logSuccess==="function"){
        window.logSuccess(KEY,it.d,it.i,pseudo);
      }
    } else {
      // Session libre : Firebase uniquement (pas de progression locale)
      const pseudo=getPseudo();
      if(!ok && typeof window.logError==="function"){
        window.logError(KEY,it.d,it.i,q.t,q.q,pseudo);
      } else if(ok && typeof window.logSuccess==="function"){
        window.logSuccess(KEY,it.d,it.i,pseudo);
      }
    }
    render();
  };
  // Next
  const nx=document.querySelector("[data-next]");
  if(nx)nx.onclick=()=>{
    if(session.idx+1<session.items.length){session.idx++;session.sel=[];session.checked=false}
    else{session.done=true;clearInterval(timerId);}
    render();window.scrollTo(0,0);
  };
  // Quit
  const qt=document.querySelector("[data-quit]");
  if(qt)qt.onclick=()=>{session.done=true;clearInterval(timerId);render()};
  // Home
  document.querySelectorAll("[data-home]").forEach(h=>h.onclick=()=>{session=null;setTab("plan")});
  // Changer de pseudo
  const cp=document.getElementById("changePseudo");
  if(cp)cp.onclick=()=>{
    const cur=getPseudo();
    const nv=(prompt("Entrez votre prénom ou pseudo :",cur)||"").trim().slice(0,30);
    if(nv){setPseudo(nv);render();updateSyncBadge();}
  };
  // Back to free config
  const bf=document.querySelector("[data-backfree]");
  if(bf)bf.onclick=()=>{session=null;setTab("free")};

  // FEATURE 10 : Export PDF
  const pdfBtn=document.getElementById("exportPdfBtn");
  if(pdfBtn)pdfBtn.onclick=exportPDF;

  // FREE SESSION CONFIG
  const freeN=document.getElementById("freeN");
  if(freeN){
    function syncFree(){
      const days=[];
      PLAN.forEach(p=>{const cb=document.getElementById("fd"+p.d);if(cb&&cb.checked)days.push(p.d)});
      const n=Math.max(5,Math.min(total(),parseInt(freeN.value)||30));
      const timedCb=document.getElementById("freeTimed");
      store.free={days,n,timed:timedCb?timedCb.checked:false};save();
      const pool=buildFreePool(days);
      const t=document.getElementById("freeTally");
      if(t)t.textContent=`${Math.min(n,pool.length)} / ${pool.length} questions disponibles`;
      const fl=document.getElementById("freeLaunch");
      if(fl){fl.disabled=pool.length<1;fl.textContent=`Lancer ${Math.min(n,pool.length)} questions`;}
    }
    freeN.oninput=syncFree;
    document.querySelectorAll("[data-preset]").forEach(b=>b.onclick=()=>{freeN.value=b.dataset.preset;syncFree()});
    PLAN.forEach(p=>{const cb=document.getElementById("fd"+p.d);if(cb)cb.onchange=syncFree});
    const timedCb=document.getElementById("freeTimed");
    if(timedCb)timedCb.onchange=syncFree;
    const fl=document.getElementById("freeLaunch");
    if(fl)fl.onclick=()=>{
      const days=store.free.days||PLAN.map(p=>p.d);
      const n=store.free.n||30;
      const timed=store.free.timed||false;
      const pool=shuffle(buildFreePool(days)).slice(0,n);
      start(pool,"Session libre ("+pool.length+" q)",timed,true);
    };
  }
}

// Render initial
render();

// FEATURE 12 : Vérification rappel quotidien depuis une page certif
(function(){
  try{
    const NOTIF_KEY="certifs.notif";
    const NOTIF_FIRED="certifs.notif.fired";
    function todayKey(){const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
    const raw=localStorage.getItem(NOTIF_KEY);
    if(!raw) return;
    const prefs=JSON.parse(raw)||{};
    if(!prefs.enabled||!prefs.certKey) return;
    if(prefs.certKey!==KEY) return; // uniquement si c'est la certif active
    if(localStorage.getItem(NOTIF_FIRED)===todayKey()) return;
    if(!("Notification" in window)||Notification.permission!=="granted") return;
    const now=new Date();
    if(now.getHours()!==prefs.hour||now.getMinutes()<prefs.minute) return;
    // Marquer + envoyer
    localStorage.setItem(NOTIF_FIRED,todayKey());
    const n=new Notification("📚 Rappel révision — "+(META.title||KEY),{
      body:"C'est l'heure de réviser ! Clique pour continuer →",
      tag:"certifs-daily-"+KEY,
      requireInteraction:false
    });
    n.onclick=function(){window.focus();n.close();};
  }catch(e){}
})();
