// Questions Docker DCA — socle (questions à enrichir)
// Format: window.QDATA[jour] = [{t, q, o, a, e}, ...]

window.QKEY = "docker-dca";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META = {
  title: "Docker DCA",
  code: "DCA",
  exam: "Docker Certified Associate",
  passScore: 65,
  examMins: 90,
  fiche: null,
  rules: [
    ["55 q · 90 min", "13 QCM + 42 DOMC"],
    ["score non publié", "résultats immédiats"],
    ["0 pénalité", "ne jamais laisser vide"],
    ["Orches › Image › Net", "25 · 20 · 15 %"]
  ],
  totalQ: 0
};

// ── Plan de révision 5 jours ────────────────────────────────────────────────
window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "Images Docker — build, layers & registry",
    dom: ["Image Management · 20 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s1", titre: "🖼 Dockerfile & layers" },
      { id: "s2", titre: "📦 Docker Hub & registries privés" }
    ],
    read: [
      "Docker docs : Dockerfile reference",
      "Docker docs : Build best practices"
    ],
    links: [
      ["Dockerfile reference", "https://docs.docker.com/reference/dockerfile/"],
      ["Build guide", "https://docs.docker.com/build/guide/"],
      ["Docker Hub", "https://docs.docker.com/docker-hub/"]
    ],
    focus: [
      "COPY vs ADD, CMD vs ENTRYPOINT",
      "Multi-stage builds : réduire la taille de l'image",
      "docker image inspect / history / prune"
    ]
  },
  {
    d: 2,
    theme: "Réseau Docker — drivers et communication",
    dom: ["Networking · 15 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s3", titre: "🌐 Network drivers : bridge, host, overlay, macvlan, none" },
      { id: "s4", titre: "🔗 DNS interne & communication inter-conteneurs" }
    ],
    read: [
      "Docker docs : Networking overview",
      "Docker docs : Network drivers"
    ],
    links: [
      ["Networking overview", "https://docs.docker.com/network/"],
      ["Bridge networks", "https://docs.docker.com/network/drivers/bridge/"],
      ["Overlay networks", "https://docs.docker.com/network/drivers/overlay/"]
    ],
    focus: [
      "Bridge (défaut, NAT) vs Host (port partagé) vs Overlay (Swarm)",
      "docker network create / connect / inspect",
      "Port mapping : -p 8080:80 vs --network=host"
    ]
  },
  {
    d: 3,
    theme: "Stockage, volumes et sécurité",
    dom: ["Storage · 10 %", "Security · 15 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s5", titre: "💾 Volumes, bind mounts, tmpfs" },
      { id: "s6", titre: "🔒 Sécurité : namespaces, capabilities, secrets" }
    ],
    read: [
      "Docker docs : Storage overview",
      "Docker docs : Docker secrets"
    ],
    links: [
      ["Storage overview", "https://docs.docker.com/storage/"],
      ["Volumes", "https://docs.docker.com/storage/volumes/"],
      ["Docker secrets", "https://docs.docker.com/engine/swarm/secrets/"]
    ],
    focus: [
      "Volume (géré par Docker) vs bind mount (chemin hôte)",
      "docker volume create / inspect / prune",
      "Secrets Swarm : stockés chiffrés dans Raft"
    ]
  },
  {
    d: 4,
    theme: "Orchestration Docker Swarm & Docker Compose",
    dom: ["Orchestration · 25 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s7", titre: "🐝 Swarm : manager / worker, services, stacks" },
      { id: "s8", titre: "🔧 Docker Compose v3 — services, networks, volumes" }
    ],
    read: [
      "Docker docs : Swarm overview",
      "Docker docs : Deploy stack to Swarm",
      "Docker docs : Compose file reference"
    ],
    links: [
      ["Swarm overview", "https://docs.docker.com/engine/swarm/"],
      ["Services", "https://docs.docker.com/engine/swarm/how-swarm-mode-works/services/"],
      ["Compose file reference", "https://docs.docker.com/reference/compose-file/"]
    ],
    focus: [
      "docker swarm init / join / leave",
      "Service global vs repliqué ; rolling update",
      "docker stack deploy -c compose.yml mon-app"
    ]
  },
  {
    d: 5,
    theme: "Révision générale & examen blanc",
    dom: ["Image", "Net", "Storage", "Security", "Orches", "Installa"],
    time: "90 min chrono + 30 min révision",
    sections: [
      { id: "s9", titre: "⚠️ Pièges classiques" },
      { id: "s10", titre: "🔑 Commandes indispensables" }
    ],
    read: [
      "Révision : toutes les commandes docker",
      "Révision : Swarm vs Kubernetes"
    ],
    links: [
      ["Docker exam study guide", "https://training.mirantis.com/dca-certification-exam/"],
      ["Docker CLI reference", "https://docs.docker.com/reference/cli/docker/"]
    ],
    focus: [
      "docker system df / prune -a",
      "DOMC : lire chaque option avec attention (vrai/faux indépendant)",
      "Installation : daemon.json, storage driver (overlay2)"
    ],
    extra: "Rejoue tes erreurs des jours 1–4, puis fais un mock exam DCA sur Udemy."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// À enrichir — format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {};
