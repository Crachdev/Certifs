/**
 * FEATURE 12 — Rappels quotidiens
 * Module de notifications de révision (visite-déclenchée + Web Notifications API)
 * Compatible GitHub Pages (aucun backend requis)
 */

(function(){
  "use strict";

  const NOTIF_KEY   = "certifs.notif";   // préférences stockées
  const NOTIF_FIRED = "certifs.notif.fired"; // date du dernier rappel envoyé

  // Catalogue des certifs (labels courts pour la notification)
  const CERT_LABELS = {
    "az802.v1": "AZ-802 Windows Server",
    "az900.v1": "AZ-900 Azure Fundamentals",
    "ai901.v1": "AI-901 Azure AI Fundamentals",
    "sc900.v1": "SC-900 Security & Compliance",
    "ms900.v1": "MS-900 Microsoft 365",
    "clf7.v2":  "CLF-C02 AWS Cloud Practitioner",
    "aif.v1":   "AIF-C01 AWS AI Practitioner",
    "gcdl.v1":  "GCDL Google Cloud Digital Leader",
    "ghf.v1":   "GitHub Foundations"
  };

  const CERT_URLS = {
    "az802.v1": "az-802-windows-server/",
    "az900.v1": "az-900-azure-fundamentals/",
    "ai901.v1": "ai-901-azure-ai-fundamentals/",
    "sc900.v1": "sc-900-security-compliance-identity/",
    "ms900.v1": "ms-900-microsoft-365/",
    "clf7.v2":  "aws-clf-c02/",
    "aif.v1":   "aws-ai-practitioner/",
    "gcdl.v1":  "google-cloud-digital-leader/",
    "ghf.v1":   "github-foundations/"
  };

  // Icônes emoji par éditeur
  const CERT_ICONS = {
    "az802.v1":"🪟","az900.v1":"☁️","ai901.v1":"🤖","sc900.v1":"🔒",
    "ms900.v1":"📧","clf7.v2":"🟠","aif.v1":"🧠","gcdl.v1":"🌐","ghf.v1":"🐙"
  };

  /* ── Lecture / écriture prefs ── */
  function getPrefs(){
    try{
      const raw=localStorage.getItem(NOTIF_KEY);
      if(raw) return Object.assign({enabled:false,certKey:"",hour:9,minute:0},JSON.parse(raw));
    }catch(e){}
    return {enabled:false,certKey:"",hour:9,minute:0};
  }

  function savePrefs(p){
    try{localStorage.setItem(NOTIF_KEY,JSON.stringify(p));}catch(e){}
  }

  /* ── Vérification : faut-il envoyer un rappel ? ── */
  function todayKey(){
    const d=new Date();
    return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
  }

  function alreadyFiredToday(){
    try{return localStorage.getItem(NOTIF_FIRED)===todayKey();}catch(e){return false;}
  }

  function markFiredToday(){
    try{localStorage.setItem(NOTIF_FIRED,todayKey());}catch(e){}
  }

  function isTimeToFire(prefs){
    const now=new Date();
    return now.getHours()===prefs.hour && now.getMinutes()>=prefs.minute;
  }

  /* ── Envoi de la notification navigateur ── */
  function sendNotification(prefs){
    if(!("Notification" in window)) return;
    if(Notification.permission!=="granted") return;

    const certKey=prefs.certKey;
    const label=CERT_LABELS[certKey]||"ta certification";
    const icon=CERT_ICONS[certKey]||"📚";
    const baseUrl=window.location.origin+window.location.pathname.replace(/[^/]*$/,"");
    const url=baseUrl+(CERT_URLS[certKey]||"");

    const msgs=[
      `${icon} Rappel révision — ${label}`,
      `📖 Aujourd'hui : ${label}`,
      `✏️ C'est l'heure de réviser ${label} !`,
      `🎯 Quelques questions ${label} aujourd'hui ?`
    ];
    const body=msgs[Math.floor(Math.random()*msgs.length)];

    // Essai Service Worker en premier (persist background), sinon direct
    if("serviceWorker" in navigator && navigator.serviceWorker.controller){
      navigator.serviceWorker.controller.postMessage({
        type:"SHOW_NOTIF",
        title: body,
        body: "Clique pour ouvrir le quiz →",
        url: url,
        certKey: certKey
      });
    } else {
      const n=new Notification(body,{
        body:"Clique pour ouvrir le quiz →",
        icon: baseUrl+"engine/notif-icon.png",
        tag:"certifs-daily-"+certKey,
        requireInteraction:false
      });
      n.onclick=function(){window.focus();window.location.href=url;n.close();};
    }

    markFiredToday();
  }

  /* ── Vérification au chargement de la page ── */
  function checkAndNotify(){
    const prefs=getPrefs();
    if(!prefs.enabled || !prefs.certKey) return;
    if(Notification.permission!=="granted") return;
    if(alreadyFiredToday()) return;
    if(!isTimeToFire(prefs)) return;
    sendNotification(prefs);
  }

  /* ── Demande de permission ── */
  function requestPermission(callback){
    if(!("Notification" in window)){
      callback("unsupported"); return;
    }
    if(Notification.permission==="granted"){
      callback("granted"); return;
    }
    if(Notification.permission==="denied"){
      callback("denied"); return;
    }
    Notification.requestPermission().then(result=>callback(result));
  }

  /* ── Rendu du widget ── */
  function renderWidget(container){
    const prefs=getPrefs();
    const supported="Notification" in window;
    const perm=supported?Notification.permission:"unsupported";

    // Génère les options certifs
    const certOptions=Object.entries(CERT_LABELS).map(([k,v])=>{
      const icon=CERT_ICONS[k]||"📚";
      const sel=k===prefs.certKey?" selected":"";
      return `<option value="${k}"${sel}>${icon} ${v}</option>`;
    }).join("");

    // Heure formatée
    const hh=String(prefs.hour).padStart(2,"0");
    const mm=String(prefs.minute).padStart(2,"0");

    // Message de statut permission
    let permMsg="";
    if(perm==="denied") permMsg=`<p class="notif-warn">⚠️ Les notifications sont bloquées dans ce navigateur. Autorisez-les dans les paramètres du site.</p>`;
    else if(perm==="unsupported") permMsg=`<p class="notif-warn">⚠️ Votre navigateur ne supporte pas les notifications.</p>`;

    container.innerHTML=`
<div class="notif-widget" id="notifWidget">
  <div class="notif-header" id="notifToggleHeader">
    <span class="notif-icon">🔔</span>
    <span class="notif-title">Rappels quotidiens</span>
    <span class="notif-status ${prefs.enabled&&perm==="granted"?"on":"off"}">${prefs.enabled&&perm==="granted"?"Actif":"Inactif"}</span>
    <button class="notif-chevron" id="notifChevron" aria-label="Ouvrir/fermer" aria-expanded="false">▾</button>
  </div>
  <div class="notif-body" id="notifBody" hidden>
    ${permMsg}
    <div class="notif-row">
      <label class="notif-label" for="notifCert">Certification active</label>
      <select id="notifCert" class="notif-select">
        <option value="">— Choisir —</option>
        ${certOptions}
      </select>
    </div>
    <div class="notif-row">
      <label class="notif-label" for="notifHour">Heure du rappel</label>
      <div class="notif-time-wrap">
        <input id="notifHour" type="number" min="0" max="23" value="${hh}" class="notif-time-input" aria-label="Heure">
        <span class="notif-sep">:</span>
        <input id="notifMin" type="number" min="0" max="59" step="5" value="${mm}" class="notif-time-input" aria-label="Minutes">
      </div>
    </div>
    <div class="notif-actions">
      <button id="notifSave" class="btn-notif-save" ${!supported||perm==="unsupported"?"disabled":""}>
        ${prefs.enabled&&perm==="granted"?"✓ Enregistré — modifier":"🔔 Activer les rappels"}
      </button>
      ${prefs.enabled?`<button id="notifDisable" class="btn-notif-off">Désactiver</button>`:""}
    </div>
  </div>
</div>`;

    // Toggle accordéon
    const header=container.querySelector("#notifToggleHeader");
    const body=container.querySelector("#notifBody");
    const chevron=container.querySelector("#notifChevron");
    if(header){
      header.style.cursor="pointer";
      header.onclick=function(){
        const open=!body.hidden;
        body.hidden=open;
        chevron.textContent=open?"▾":"▴";
        chevron.setAttribute("aria-expanded",String(!open));
      };
    }

    // Bouton activer/enregistrer
    const saveBtn=container.querySelector("#notifSave");
    if(saveBtn){
      saveBtn.onclick=function(){
        const certSel=container.querySelector("#notifCert");
        const hourIn=container.querySelector("#notifHour");
        const minIn=container.querySelector("#notifMin");
        const certKey=certSel?certSel.value:"";
        const hour=Math.max(0,Math.min(23,parseInt(hourIn?hourIn.value:9)||9));
        const minute=Math.max(0,Math.min(59,parseInt(minIn?minIn.value:0)||0));

        if(!certKey){
          alert("Choisissez d'abord une certification.");
          return;
        }

        requestPermission(function(result){
          if(result==="granted"){
            const p={enabled:true,certKey,hour,minute};
            savePrefs(p);
            renderWidget(container); // re-render pour mettre à jour le statut
            // Ouvrir le body au re-render
            const b=container.querySelector("#notifBody");
            const ch=container.querySelector("#notifChevron");
            if(b){b.hidden=false;if(ch){ch.textContent="▴";ch.setAttribute("aria-expanded","true");}}
            // Test immédiat optionnel : on vérifie après 1s si la notification doit partir
            setTimeout(checkAndNotify,1000);
          } else if(result==="denied"){
            alert("Les notifications ont été bloquées. Autorisez-les dans les paramètres de votre navigateur puis réessayez.");
          } else {
            alert("Impossible d'activer les notifications sur ce navigateur.");
          }
        });
      };
    }

    // Bouton désactiver
    const offBtn=container.querySelector("#notifDisable");
    if(offBtn){
      offBtn.onclick=function(){
        const p=getPrefs();
        p.enabled=false;
        savePrefs(p);
        renderWidget(container);
        const b=container.querySelector("#notifBody");
        if(b) b.hidden=false;
      };
    }
  }

  /* ── Init ── */
  function init(){
    // Vérification rappel à chaque chargement
    if(document.readyState==="loading"){
      document.addEventListener("DOMContentLoaded",checkAndNotify);
    } else {
      setTimeout(checkAndNotify, 800); // léger délai pour laisser la page se stabiliser
    }

    // Montage widget si container présent
    const container=document.getElementById("notifWidgetContainer");
    if(container){
      renderWidget(container);
    }
  }

  // Exposer l'API pour usage depuis d'autres scripts
  window.CertifNotif={
    init,
    renderWidget,
    checkAndNotify,
    getPrefs,
    savePrefs,
    requestPermission
  };

  init();
})();
