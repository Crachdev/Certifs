// Moteur universel de quiz — chargé après questions.js et config.js
// Dépendances : window.QDATA, window.QUIZ_CONFIG

const DOC="https://claude.ai/code/artifact/9dda6fd5-2f57-473f-b38f-f1fbf7b0899d";
const G="https://docs.aws.amazon.com/fr_fr/aws-certification/latest/cloud-practitioner-02/";
const PLAN=[
 {d:1,theme:"Infrastructure mondiale, calcul et conteneurs",dom:["D3 · 34 %"],time:"≈ 1 h lecture + 1 h 15 quiz",
  read:["Fiche : Infrastructure mondiale","Fiche : Calcul (EC2, Lambda, Beanstalk, Auto Scaling, ELB)","Fiche : Conteneurs"],
  links:[["Guide officiel, domaine 3",G+"cloud-practitioner-02-domain3.html"]],
  focus:["Région, AZ, edge location : qui contient quoi","Familles EC2 (C, R, I, G)","Auto Scaling = élasticité, ELB = répartition"]},
 {d:2,theme:"Stockage, bases de données et migration",dom:["D3 · 34 %","D1 · 24 %"],time:"≈ 1 h lecture + 1 h 15 quiz",
  read:["Fiche : Stockage (S3, EBS, EFS, FSx, Storage Gateway, Backup)","Fiche : Bases de données","Fiche : Migration & transfert"],
  links:[["Services au programme",G+"clf-02-in-scope-services.html"]],
  focus:["Les 7 classes S3 et leurs délais","Multi-AZ (disponibilité) vs Read Replica (performance)","DMS + SCT, Snowball"]},
 {d:3,theme:"Réseau, IA/ML, analytique et services annexes",dom:["D3 · 34 %"],time:"≈ 1 h 15 lecture + 1 h 15 quiz",
  read:["Fiche : Réseau & diffusion de contenu","Fiche : IA/ML & analytique","Fiche : Autres services au programme"],
  links:[["Guide officiel, domaine 3",G+"cloud-practitioner-02-domain3.html"]],
  focus:["Security group (stateful) vs NACL (stateless, peut refuser)","VPN vs Direct Connect, CloudFront vs Global Accelerator","Un verbe par service d'IA ; SQS vs SNS"]},
 {d:4,theme:"Responsabilité partagée, IAM et services de sécurité",dom:["D2 · 30 %"],time:"≈ 1 h lecture + 1 h 15 quiz",
  read:["Fiche : Responsabilité partagée","Fiche : IAM & identités","Fiche : Sécurité & conformité"],
  links:[["Guide officiel, domaine 2",G+"cloud-practitioner-02-domain2.html"]],
  focus:["EC2 vs RDS vs Lambda : qui corrige quoi","Tâches réservées au root","GuardDuty vs Inspector vs Macie, KMS vs CloudHSM"]},
 {d:5,theme:"Gouvernance, conformité et concepts cloud",dom:["D2 · 30 %","D1 · 24 %"],time:"≈ 1 h lecture + 1 h 15 quiz",
  read:["Fiche : Monitoring, audit & gouvernance","Fiche : Concepts cloud (6 avantages, Well-Architected, CAF, 7 R, économie)"],
  links:[["Guide officiel, domaine 1",G+"cloud-practitioner-02-domain1.html"]],
  focus:["CloudTrail = qui · CloudWatch = comment · Config = quoi","Les 6 piliers et leurs mots-clés","Les 7 R de la migration"],
  extra:"Ce soir : un test blanc complet sur MeasureUp ou Tutorials Dojo pour mesurer ton niveau réel."},
 {d:6,theme:"Tarification, gestion des coûts et support",dom:["D4 · 12 %"],time:"≈ 45 min lecture + 1 h 15 quiz",
  read:["Fiche : Tarification","Fiche : Gestion des coûts & facturation","Fiche : Support & ressources","Fiche : Écarts examen vs réalité 2026"],
  links:[["Guide officiel, domaine 4",G+"cloud-practitioner-02-domain4.html"]],
  focus:["Spot, réservées, Savings Plans, hôtes dédiés","Budgets (alerte) vs Cost Explorer (analyse) vs Pricing Calculator (avant)","Plans de support version examen : 1 h, 30 min, 15 min, TAM"],
  extra:"Rejoue tes erreurs des jours 1 à 5 dans l'onglet « Mes erreurs »."},
 {d:7,theme:"Examen blanc et révision finale",dom:["D1","D2","D3","D4","pondéré"],time:"70 min chrono + 1 h révision",
  read:["Fiche : Mots-clés examen → service","Fiche : Pièges classiques"],
  links:[["Format de l'examen",G+"cloud-practitioner-02.html"]],
  focus:["Examen blanc de 50 questions en 70 minutes","Rejouer toutes les erreurs restantes","Relire les deux tableaux de la fiche la veille au soir"],
  extra:"Objectif : 80 % ou plus avant de réserver ou de passer l'examen.",timed:true}
];

const MOD_SIZE=10; // questions par module
const MODS_PER_DAY=5; // 5 modules × 10 q = 50 q/jour

const KEY=window.QKEY||"clf7.v2";
let store={};
try{store=JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){store={}}
store.r=store.r||{}; // results: "day-idx" -> 1 correct / 0 wrong
store.free=store.free||{}; // free training config persistence

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
}
function dayStats(d){
  const n=window.QDATA[d].length;let done=0,ok=0;
  for(let i=0;i<n;i++){const v=store.r[d+"-"+i];if(v!==undefined){done++;if(v===1)ok++}}
  return{n,done,ok}
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
  return `<p class="intro">Une semaine, un bloc de domaine par jour, pondéré comme l'examen. Chaque jour est découpé en <b>5 modules de 10 questions</b>. Lis les sections de <a href="${DOC}" target="_blank" rel="noopener">ta fiche de révision</a>, puis fais les modules un par un.</p>
  <div class="rules">
    <div><b class="num">65 q · 90 min</b><span>dont 15 non notées</span></div>
    <div><b class="num">700 / 1000</b><span>score de réussite</span></div>
    <div><b class="num">0 pénalité</b><span>ne jamais laisser vide</span></div>
    <div><b class="num">D3 › D2 › D1 › D4</b><span>34 · 30 · 24 · 12 %</span></div>
  </div>
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
        <div class="prog"><div class="moddots">${dots}</div><div class="bar" style="max-width:160px"><i style="width:${pct}%"></i></div><span class="num" style="font-size:.8rem">${s.done}/${s.n}${s.done?` · ${Math.round(s.ok/s.done*100)} %`:""}</span></div>
        <div class="row" style="gap:6px">${modBtns}<button class="btn ghost" data-start="${p.d}" style="padding:6px 10px;font-size:.82rem">Tout J${p.d}</button></div>
      </div>
    </div></li>`;
  }).join("")}</ol>
  <p class="note">Ta progression est enregistrée dans ce navigateur uniquement. Les questions sont originales, écrites à partir du guide d'examen officiel CLF-C02 ; elles ne reproduisent pas de questions d'examen réelles.</p>`;
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
function errHTML(){
  const e=errors();
  if(!e.length)return `<div class="empty"><h2 style="margin-bottom:6px">Aucune erreur en attente</h2>Les questions ratées apparaîtront ici. Une question réussie au rejeu sort de la liste.</div>`;
  const byDay={};e.forEach(([d])=>byDay[d]=(byDay[d]||0)+1);
  return `<p class="intro">${e.length} question${e.length>1?"s":""} à revoir. Rejoue-les jusqu'à ce que la liste soit vide.</p>
  <div class="row" style="margin-bottom:16px"><button class="btn" data-replay="all">Rejouer les ${e.length} erreurs</button></div>
  <ul class="missed">${e.slice(0,60).map(([d,i])=>`<li><span class="eyebrow">J${d} · ${esc(Q(d,i).t)}</span><br>${esc(Q(d,i).q)}</li>`).join("")}</ul>
  ${e.length>60?`<p class="note">… et ${e.length-60} autres.</p>`:""}`;
}

/* ── SESSION ───────────────────────────────────────────── */
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function start(items,label,timed,isLive){
  // isLive = free session (don't persist results)
  session={
    items:items.map(([d,i])=>({d,i,order:shuffle(Q(d,i).o.map((_,k)=>k))})),
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
  <div class="bar" style="max-width:none;margin-bottom:14px"><i style="width:${session.idx/session.items.length*100}%"></i></div>
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
    // Only persist to store.r if NOT a live session
    if(!session.isLive){store.r[it.d+"-"+it.i]=ok?1:0;save();}
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
