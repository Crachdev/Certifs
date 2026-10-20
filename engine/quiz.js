// Moteur universel de quiz — chargé après questions.js
// Dépendances : window.QDATA, window.QKEY, window.QUIZ_PLAN, window.QUIZ_META

// PLAN chargé depuis questions.js (window.QUIZ_PLAN), sinon tableau vide
const PLAN=window.QUIZ_PLAN||[];
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
      style="font-size:${size<48?".65rem":".7rem"};font-family:var(--f-ui);fill:var(--fg);font-weight:600">${pct}%</text>
  </svg>`;
}

function save(){try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}
const Q=(d,i)=>window.QDATA[d][i];
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
  // Afficher le pseudo dans l'en-tête si disponible
  const pseudo=getPseudo();
  const pEl=document.getElementById("userPseudo");
  if(pEl){pEl.textContent=pseudo||"";pEl.hidden=!pseudo;}
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
  modal.innerHTML=`<div style="background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:28px 24px;max-width:360px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,.18)">
    <h2 style="margin:0 0 6px;font-size:1.15rem">Qui fait ce quiz ?</h2>
    <p style="margin:0 0 16px;font-size:.88rem;color:var(--muted)">Entre un prénom ou pseudo pour suivre ta progression sur tous tes appareils. Tu peux toujours le modifier dans le pied de page.</p>
    <input id="pseudoInput" type="text" placeholder="Ton prénom ou pseudo" autocomplete="off" maxlength="30"
      style="width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg);font-size:1rem;font-family:var(--f-body);outline:none;margin-bottom:12px">
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
    header(); // mettre à jour l'affichage du pseudo
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

let tab="plan",session=null,timerId=null;
function setTab(t){
  tab=t;
  [["plan","tabPlan"],["quiz","tabQuiz"],["free","tabFree"],["err","tabErr"]].forEach(([k,id])=>document.getElementById(id).setAttribute("aria-selected",k===t));
  render();
}
document.getElementById("tabPlan").onclick=()=>setTab("plan");
document.getElementById("tabQuiz").onclick=()=>setTab("quiz");
document.getElementById("tabFree").onclick=()=>setTab("free");
document.getElementById("tabErr").onclick=()=>setTab("err");

// Demander le pseudo au premier lancement (léger délai pour le rendu initial)
if(!getPseudo()){setTimeout(showPseudoModal,400);}

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
  return `<p class="intro">Une semaine, un bloc de domaine par jour, pondéré comme l'examen. Chaque jour est découpé en <b>5 modules de 10 questions</b>. Lis ${ficheLink}, puis fais les modules un par un.</p>
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
    return `<li class="day"><div class="tag"><span>Jour</span><b>${p.d}</b></div><div class="body">
      <div><h2>${esc(p.theme)}</h2><div class="chips" style="margin-top:6px">${p.dom.map(x=>`<span class="chip">${x}</span>`).join("")}<span class="chip" style="background:transparent;color:var(--muted)">${p.time}</span></div></div>
      <div class="cols"><div><h3>À lire</h3><ul>${p.read.map(r=>`<li>${esc(r)}</li>`).join("")}${p.links.map(l=>`<li><a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a></li>`).join("")}</ul></div>
      <div><h3>À retenir</h3><ul>${p.focus.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></div></div>
      ${p.extra?`<div style="font-size:.88rem"><b>+</b> ${esc(p.extra)}</div>`:""}
      <div class="dayfoot">
        <div class="prog"><div class="moddots">${dots}</div>${svgCircle(pct,52)}<span class="num" style="font-size:.8rem;margin-left:6px">${s.done}/${s.n}${s.done?` · ${Math.round(s.ok/s.done*100)} %`:""}</span></div>
        <div class="row" style="gap:6px">${modBtns}<button class="btn ghost" data-start="${p.d}" style="padding:6px 10px;font-size:.82rem">Tout J${p.d}</button></div>
      </div>
    </div></li>`;
  }).join("")}</ol>
  <p class="note">Ta progression est enregistrée dans ce navigateur uniquement. Les questions sont originales, écrites à partir de la documentation officielle${examInfo?" ("+examInfo+")":""}.</p>
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
  const allDays=[1,2,3,4,5,6,7];
  const days=cfg.days||allDays;
  const n=cfg.n||30;
  const pool=buildFreePool(days);
  return `<div class="free-panel">
    <div class="eyebrow" style="margin-bottom:4px">Session d'entraînement libre</div>
    <h2>Configure ta session</h2>
    <div class="free-opts">
      <div class="free-row">
        <label>Nombre de questions</label>
        <input type="number" id="freeN" value="${n}" min="5" max="350" step="5" style="width:80px">
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

function errHTML(){
  const e=errors();
  const baseHTML=e.length
    ?`<p class="intro">${e.length} question${e.length>1?"s":""} à revoir localement. Rejoue-les jusqu'à ce que la liste soit vide.</p>
      <div class="row" style="margin-bottom:16px"><button class="btn" data-replay="all">Rejouer les ${e.length} erreurs</button></div>
      <ul class="missed">${e.slice(0,60).map(([d,i])=>`<li><span class="eyebrow">J${d} · ${esc(Q(d,i).t)}</span><br>${esc(Q(d,i).q)}</li>`).join("")}</ul>
      ${e.length>60?`<p class="note">… et ${e.length-60} autres.</p>`:""}`
    :`<div class="empty"><h2 style="margin-bottom:6px">Aucune erreur en attente</h2>Les questions ratées apparaîtront ici. Une question réussie au rejeu sort de la liste.</div>`;

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
    // Firebase pas encore prêt, réessayer dans 2s
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

  return baseHTML+histHTML;
}

/* ── SESSION ───────────────────────────────────────────── */
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function start(items,label,timed,isLive){
  // isLive = free session (don't persist results)
  session={
    items:shuffle(items).map(([d,i])=>({d,i,order:shuffle(Q(d,i).o.map((_,k)=>k))})),
    idx:0,sel:[],checked:false,score:0,missed:[],label,done:false,
    end:timed?Date.now()+70*60*1000:null,
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
  return `<div class="qhead">${liveBadge}<span class="eyebrow">${esc(session.label)} · ${esc(q.t)}</span>
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
  const msg=pct>=80?"Niveau examen atteint sur ce lot.":pct>=70?"Juste au-dessus de la barre. Rejoue tes erreurs.":"En dessous de l'objectif. Relis les sections de la fiche puis rejoue tes erreurs.";
  const liveNote=session.isLive?`<p style="font-size:.85rem;color:var(--muted)">Session libre — résultats <b>non comptabilisés</b> dans ta progression quotidienne.</p>`:"";
  return `<div class="result"><span class="eyebrow">${esc(session.label)} · terminé</span>
   <div class="score num" style="color:${pct>=80?"var(--ok)":pct>=70?"var(--accent)":"var(--ko)"}">${pct} %</div>
   <div>${session.score} bonnes réponses sur ${answered}${answered<n?` (${n-answered} non traitées)`:""}. ${msg}</div>
   ${liveNote}
   ${session.missed.length?`<h3 style="font-size:1rem">À revoir</h3><ul class="missed">${session.missed.map(([d,i])=>`<li>${esc(Q(d,i).q)}</li>`).join("")}</ul>`:""}
   <div class="row">${session.missed.length&&!session.isLive?`<button class="btn" data-replay="session">Rejouer ces ${session.missed.length} erreurs</button>`:""}<button class="btn ghost" data-home>Retour au plan</button>${tab==="free"?`<button class="btn sec" data-backfree>Nouvelle session libre</button>`:""}</div></div>`;
}

/* ── BIND ──────────────────────────────────────────────── */
function bind(){
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
    if(nv){setPseudo(nv);render();}
  };
  // Back to free config
  const bf=document.querySelector("[data-backfree]");
  if(bf)bf.onclick=()=>{session=null;setTab("free")};

  // FREE SESSION CONFIG
  const freeN=document.getElementById("freeN");
  if(freeN){
    function syncFree(){
      const days=[];
      [1,2,3,4,5,6,7].forEach(d=>{const cb=document.getElementById("fd"+d);if(cb&&cb.checked)days.push(d)});
      const n=Math.max(5,Math.min(350,parseInt(freeN.value)||30));
      store.free={days,n};save();
      const pool=buildFreePool(days);
      const t=document.getElementById("freeTally");
      if(t)t.textContent=`${Math.min(n,pool.length)} / ${pool.length} questions disponibles`;
      const fl=document.getElementById("freeLaunch");
      if(fl){fl.disabled=pool.length<1;fl.textContent=`Lancer ${Math.min(n,pool.length)} questions`;}
    }
    freeN.oninput=syncFree;
    document.querySelectorAll("[data-preset]").forEach(b=>b.onclick=()=>{freeN.value=b.dataset.preset;syncFree()});
    [1,2,3,4,5,6,7].forEach(d=>{const cb=document.getElementById("fd"+d);if(cb)cb.onchange=syncFree});
    const fl=document.getElementById("freeLaunch");
    if(fl)fl.onclick=()=>{
      const days=store.free.days||[1,2,3,4,5,6,7];
      const n=store.free.n||30;
      const pool=shuffle(buildFreePool(days)).slice(0,n);
      start(pool,"Session libre ("+pool.length+" q)",false,true);
    };
  }
}
