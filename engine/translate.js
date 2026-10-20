// translate.js — module FR ↔ EN pour le moteur de quiz
// Charge APRÈS quiz.js. Swap window.QDATA pour traduire les questions.
// La fonction Q=(d,i)=>window.QDATA[d][i] dans quiz.js accèdera toujours
// à window.QDATA, donc swapper ce dernier suffit pour tout traduire.
// API : MyMemory (gratuite, sans clé) — https://mymemory.translated.net

(function(){
  /* ── Clés de stockage ──────────────────────────────────── */
  const PREF_KEY ="tr.lang";
  // Clé de cache spécifique à cette certification
  const CACHE_KEY=(window.QKEY||"quiz")+".trEN";

  /* ── État ──────────────────────────────────────────────── */
  let lang="fr";           // langue active : "fr" | "en"
  let busy=false;          // traduction en cours
  let trCache={};          // cache en mémoire : texte FR → texte EN
  let QDATA_FR=null;       // sauvegarde de window.QDATA original (FR)
  let QDATA_EN={};         // version traduite (complétée au fil des appels)

  // Restaurer préférence de langue
  try{ lang=localStorage.getItem(PREF_KEY)||"fr"; }catch(e){ lang="fr"; }

  // Charger le cache de traductions depuis localStorage
  try{ trCache=JSON.parse(localStorage.getItem(CACHE_KEY)||"{}")||{}; }catch(e){ trCache={}; }

  function saveCache(){ try{ localStorage.setItem(CACHE_KEY,JSON.stringify(trCache)); }catch(e){} }
  function savePref(){  try{ localStorage.setItem(PREF_KEY,lang); }catch(e){} }

  /* ── Traduction via MyMemory ───────────────────────────── */
  async function trText(text){
    if(!text||typeof text!=="string"||!text.trim()) return text;
    const key=text.slice(0,200); // clé tronquée pour éviter clés trop longues
    if(trCache[key]) return trCache[key];

    const url="https://api.mymemory.translated.net/get?q="+encodeURIComponent(text.slice(0,500))+"&langpair=fr|en&de=certifs@crachdev.local";
    try{
      const res=await fetch(url,{signal:AbortSignal.timeout?AbortSignal.timeout(8000):undefined});
      if(!res.ok) return text;
      const data=await res.json();
      const result=data?.responseData?.translatedText||text;
      trCache[key]=result;
      return result;
    }catch(e){
      return text; // fallback silencieux en cas d'erreur réseau
    }
  }

  /* ── Traduction d'un objet question ──────────────────────
     qObj = { t, q, o:[], a:[], e:[] }
     On traduit t, q, o[], e[] en parallèle.                  */
  async function trQuestion(qObj){
    const all=await Promise.all([
      trText(qObj.t),
      trText(qObj.q),
      ...qObj.o.map(trText),
      ...qObj.e.map(trText),
    ]);
    const nOpts=qObj.o.length;
    return {
      ...qObj,
      t:all[0],
      q:all[1],
      o:all.slice(2,2+nOpts),
      e:all.slice(2+nOpts)
    };
  }

  /* ── Pré-traduction d'un jour entier ─────────────────────
     On traduit toutes les questions d'un jour s'il n'est pas
     déjà dans QDATA_EN, puis on sauvegarde le cache.          */
  async function ensureDayTranslated(day){
    if(!QDATA_FR||!QDATA_FR[day]) return;
    if(QDATA_EN[day]) return; // déjà traduit
    QDATA_EN[day]=await Promise.all(QDATA_FR[day].map(trQuestion));
    saveCache(); // persister le cache après chaque jour traduit
  }

  /* ── Swap de window.QDATA ────────────────────────────────
     C'est le cœur du mécanisme : Q=(d,i)=>window.QDATA[d][i]
     dans quiz.js lit toujours window.QDATA dynamiquement.     */
  function activateLang(l){
    if(!QDATA_FR) return; // pas encore initialisé
    if(l==="en"){
      // Ne swapper que les jours déjà traduits (les autres restent en FR)
      const merged={};
      for(const day of Object.keys(QDATA_FR)){
        merged[day]=QDATA_EN[day]||QDATA_FR[day];
      }
      window.QDATA=merged;
    } else {
      window.QDATA=QDATA_FR;
    }
  }

  /* ── Bouton dans la nav ───────────────────────────────────*/
  function injectStyles(){
    if(document.getElementById("tr-styles")) return;
    const s=document.createElement("style");
    s.id="tr-styles";
    s.textContent=`
.tr-btn{
  display:inline-flex;align-items:center;gap:5px;
  margin-left:6px;padding:6px 12px;
  border:1.5px solid var(--line);border-radius:20px;
  background:var(--sheet);color:var(--muted);
  font:600 .73rem var(--f-mono);cursor:pointer;
  white-space:nowrap;transition:border-color .15s,color .15s,background .15s;
  align-self:center;flex-shrink:0;
}
.tr-btn:hover:not(.loading){border-color:var(--accent);color:var(--accent)}
.tr-btn.active{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
.tr-btn.loading{opacity:.55;cursor:wait}
.tr-badge{
  font-size:.62rem;padding:1px 5px;border-radius:3px;
  background:var(--accent);color:var(--sheet);margin-left:3px;
  vertical-align:middle;
}
    `;
    document.head.appendChild(s);
  }

  function getBtnLabel(){
    if(busy) return '⌛ …';
    if(lang==="en") return '🇫🇷 Français<span class="tr-badge">EN✓</span>';
    return '🇬🇧 English<span class="tr-badge">FR</span>';
  }

  function injectBtn(){
    if(document.getElementById("trToggleBtn")) return;
    const nav=document.querySelector("nav.tabs");
    if(!nav) return;
    const btn=document.createElement("button");
    btn.id="trToggleBtn";
    btn.type="button";
    btn.className="tr-btn"+(lang==="en"?" active":"");
    btn.innerHTML=getBtnLabel();
    btn.title="Traduire les questions en anglais / Revenir en français";
    btn.onclick=toggleLang;
    // Insérer avant .tab-fiche ou en fin de nav
    const fiche=nav.querySelector(".tab-fiche");
    if(fiche) nav.insertBefore(btn,fiche);
    else nav.appendChild(btn);
  }

  function updateBtn(){
    const btn=document.getElementById("trToggleBtn");
    if(!btn) return;
    btn.innerHTML=getBtnLabel();
    if(lang==="en"&&!busy) btn.classList.add("active");
    else if(!busy)         btn.classList.remove("active");
    if(busy) btn.classList.add("loading");
    else     btn.classList.remove("loading");
  }

  /* ── Toggle FR↔EN ────────────────────────────────────────*/
  async function toggleLang(){
    if(busy) return;
    busy=true;
    updateBtn();

    const newLang=lang==="fr"?"en":"fr";

    if(newLang==="en"&&QDATA_FR){
      // Traduire tous les jours de QDATA en parallèle
      await Promise.all(Object.keys(QDATA_FR).map(ensureDayTranslated));
    }

    lang=newLang;
    savePref();
    activateLang(lang);
    busy=false;
    updateBtn();

    // Re-rendre le quiz avec les nouvelles données
    if(typeof render==="function") render();
    injectBtn(); // s'assurer que le bouton est toujours là après render()
    updateBtn();
  }

  /* ── Initialisation ───────────────────────────────────────
     On attend que quiz.js ait fini de charger window.QDATA,
     ce qui se passe synchroniquement au chargement du script.
     Ici on est déjà après quiz.js donc QDATA est disponible.  */
  function init(){
    if(!window.QDATA){
      // Sécurité : si QDATA n'est pas encore là, réessayer plus tard
      setTimeout(init,50);
      return;
    }
    // Sauvegarder la version FR originale
    QDATA_FR=window.QDATA;

    injectStyles();
    injectBtn();

    // Si la préférence est EN et qu'on a un cache complet, activer immédiatement
    if(lang==="en"){
      // Tenter d'utiliser le cache localStorage pour reconstruire QDATA_EN
      // (les textes sont dans trCache, mais on n'a pas les objets complets)
      // On lance la traduction en arrière-plan et on affiche en FR en attendant
      // (une meilleure UX serait de stocker QDATA_EN complet mais c'est > 1 MB)
      busy=true;
      updateBtn();
      Promise.all(Object.keys(QDATA_FR).map(ensureDayTranslated)).then(()=>{
        activateLang("en");
        busy=false;
        updateBtn();
        if(typeof render==="function") render();
        injectBtn();
        updateBtn();
      });
    }

    // Pré-traduire en arrière-plan le jour 1 et le jour 2 pour accélérer le premier toggle
    if(lang==="fr"&&QDATA_FR){
      const days=Object.keys(QDATA_FR);
      const prefetchDays=days.slice(0,2); // pré-charger J1 et J2
      prefetchDays.forEach(day=>{
        ensureDayTranslated(day).catch(()=>{});
      });
    }
  }

  // Démarrer après que le DOM soit prêt (quiz.js s'exécute au chargement)
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init);
  } else {
    // DOM déjà prêt (script chargé en bas du body)
    init();
  }

})();
