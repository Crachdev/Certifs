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
  totalQ: 250
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
window.QDATA = {
 "1": [
  {
   "id": "dca-j1-1",
   "q": "Quelle instruction Dockerfile définit l'image de base ?",
   "choices": [
    "A. BASE",
    "B. FROM",
    "C. IMAGE",
    "D. USING"
   ],
   "answer": 1,
   "exp": "FROM initialise une nouvelle étape de build à partir d'une image de base."
  },
  {
   "id": "dca-j1-2",
   "q": "Quelle instruction exécute une commande pendant la construction de l'image ?",
   "choices": [
    "A. CMD",
    "B. ENTRYPOINT",
    "C. RUN",
    "D. START"
   ],
   "answer": 2,
   "exp": "RUN crée une nouvelle couche avec le résultat de la commande."
  },
  {
   "id": "dca-j1-3",
   "q": "Quelle est la différence principale entre CMD et ENTRYPOINT ?",
   "choices": [
    "A. CMD est exécuté au build ; ENTRYPOINT au runtime uniquement",
    "B. Les deux sont identiques",
    "C. ENTRYPOINT ne peut pas être surchargé",
    "D. ENTRYPOINT définit l'exécutable fixe ; CMD fournit des arguments par défaut remplaçables"
   ],
   "answer": 3,
   "exp": "CMD est facilement remplacé par les arguments de docker run ; ENTRYPOINT nécessite --entrypoint."
  },
  {
   "id": "dca-j1-4",
   "q": "Quelle forme d'instruction CMD est recommandée ?",
   "choices": [
    "A. La forme exec (tableau JSON)",
    "B. La forme shell",
    "C. Une chaîne entre guillemets simples",
    "D. La forme backticks"
   ],
   "answer": 0,
   "exp": "La forme exec évite un shell intermédiaire et gère mieux les signaux."
  },
  {
   "id": "dca-j1-5",
   "q": "Quelle est la différence entre COPY et ADD ?",
   "choices": [
    "A. COPY gère les URL ; ADD ne copie que des fichiers",
    "B. ADD peut extraire des archives locales et récupérer des URL ; COPY copie simplement",
    "C. Ils sont identiques",
    "D. ADD est réservé aux images multi-étapes"
   ],
   "answer": 1,
   "exp": "La recommandation est d'utiliser COPY sauf besoin spécifique d'ADD."
  },
  {
   "id": "dca-j1-6",
   "q": "Quelle instruction documente le port écouté par le conteneur ?",
   "choices": [
    "A. PORT",
    "B. PUBLISH",
    "C. EXPOSE",
    "D. LISTEN"
   ],
   "answer": 2,
   "exp": "EXPOSE est informatif ; la publication se fait avec -p ou -P."
  },
  {
   "id": "dca-j1-7",
   "q": "Quelle instruction définit une variable disponible au build uniquement ?",
   "choices": [
    "A. ENV",
    "B. VAR",
    "C. LET",
    "D. ARG"
   ],
   "answer": 3,
   "exp": "ENV persiste dans l'image et le conteneur ; ARG n'existe que pendant le build."
  },
  {
   "id": "dca-j1-8",
   "q": "Quelle instruction définit une variable d'environnement persistante dans l'image ?",
   "choices": [
    "A. ENV",
    "B. ARG",
    "C. SET",
    "D. EXPORT"
   ],
   "answer": 0,
   "exp": "ENV est disponible au runtime."
  },
  {
   "id": "dca-j1-9",
   "q": "Quelle instruction définit le répertoire de travail ?",
   "choices": [
    "A. CD",
    "B. WORKDIR",
    "C. DIR",
    "D. PATH"
   ],
   "answer": 1,
   "exp": "WORKDIR crée le répertoire s'il n'existe pas."
  },
  {
   "id": "dca-j1-10",
   "q": "Quelle instruction définit l'utilisateur avec lequel s'exécute le conteneur ?",
   "choices": [
    "A. RUNAS",
    "B. UID",
    "C. USER",
    "D. LOGIN"
   ],
   "answer": 2,
   "exp": "Éviter root améliore la sécurité."
  },
  {
   "id": "dca-j1-11",
   "q": "Quelle instruction déclare un point de montage de volume ?",
   "choices": [
    "A. MOUNT",
    "B. STORAGE",
    "C. DATA",
    "D. VOLUME"
   ],
   "answer": 3,
   "exp": "VOLUME crée un volume anonyme à l'exécution si aucun n'est fourni."
  },
  {
   "id": "dca-j1-12",
   "q": "Quelle instruction ajoute une métadonnée clé-valeur à l'image ?",
   "choices": [
    "A. LABEL",
    "B. META",
    "C. TAG",
    "D. INFO"
   ],
   "answer": 0,
   "exp": "LABEL aide à l'organisation et à l'automatisation."
  },
  {
   "id": "dca-j1-13",
   "q": "Quelle instruction définit une vérification de santé ?",
   "choices": [
    "A. CHECK",
    "B. HEALTHCHECK",
    "C. PROBE",
    "D. STATUS"
   ],
   "answer": 1,
   "exp": "Elle permet à Docker d'indiquer healthy/unhealthy."
  },
  {
   "id": "dca-j1-14",
   "q": "Qu'est-ce qu'un build multi-étapes ?",
   "choices": [
    "A. Construire plusieurs images en parallèle",
    "B. Utiliser plusieurs registries",
    "C. Utiliser plusieurs FROM pour ne copier que les artefacts nécessaires dans l'image finale",
    "D. Utiliser plusieurs Dockerfile dans un même contexte"
   ],
   "answer": 2,
   "exp": "Réduit la taille de l'image finale."
  },
  {
   "id": "dca-j1-15",
   "q": "Comment copier un artefact depuis une étape précédente ?",
   "choices": [
    "A. COPY builder:/app/bin /app",
    "B. ADD --stage=builder /app/bin /app",
    "C. IMPORT builder /app/bin",
    "D. COPY --from=builder /app/bin /app"
   ],
   "answer": 3,
   "exp": "--from référence le nom ou l'index de l'étape."
  },
  {
   "id": "dca-j1-16",
   "q": "Comment construire une image à partir d'un Dockerfile dans le répertoire courant ?",
   "choices": [
    "A. docker build -t nom:tag .",
    "B. docker create image nom:tag",
    "C. docker image make nom:tag",
    "D. docker compile -t nom ."
   ],
   "answer": 0,
   "exp": "Le point désigne le contexte de build."
  },
  {
   "id": "dca-j1-17",
   "q": "À quoi sert .dockerignore ?",
   "choices": [
    "A. Ignorer des couches existantes",
    "B. Exclure des fichiers du contexte de build",
    "C. Ignorer des erreurs de build",
    "D. Définir des variables d'environnement"
   ],
   "answer": 1,
   "exp": "Réduit la taille du contexte et évite d'inclure des secrets."
  },
  {
   "id": "dca-j1-18",
   "q": "Pourquoi l'ordre des instructions du Dockerfile est-il important ?",
   "choices": [
    "A. Pour déterminer le nom de l'image",
    "B. Pour fixer la taille maximale de l'image",
    "C. Pour optimiser le cache des couches",
    "D. Pour chiffrer les couches"
   ],
   "answer": 2,
   "exp": "Placer les instructions rarement modifiées en premier."
  },
  {
   "id": "dca-j1-19",
   "q": "Qu'est-ce qu'une couche (layer) d'image ?",
   "choices": [
    "A. Un conteneur en cours d'exécution",
    "B. Un volume persistant",
    "C. Un réseau virtuel",
    "D. Un ensemble de modifications du système de fichiers en lecture seule"
   ],
   "answer": 3,
   "exp": "Les couches sont immuables et partagées entre images."
  },
  {
   "id": "dca-j1-20",
   "q": "Quelle commande affiche l'historique des couches d'une image ?",
   "choices": [
    "A. docker history image",
    "B. docker image layers image",
    "C. docker inspect --layers image",
    "D. docker layers image"
   ],
   "answer": 0,
   "exp": "Montre chaque instruction et sa taille."
  },
  {
   "id": "dca-j1-21",
   "q": "Quelle commande affiche la configuration détaillée d'une image ?",
   "choices": [
    "A. docker image show image",
    "B. docker image inspect image",
    "C. docker describe image",
    "D. docker info image"
   ],
   "answer": 1,
   "exp": "Le résultat est en JSON."
  },
  {
   "id": "dca-j1-22",
   "q": "Quelle commande liste les images locales ?",
   "choices": [
    "A. docker list images",
    "B. docker images --remote",
    "C. docker image ls",
    "D. docker ps -i"
   ],
   "answer": 2,
   "exp": "docker images est équivalent."
  },
  {
   "id": "dca-j1-23",
   "q": "Quelle commande supprime les images non utilisées (dangling) ?",
   "choices": [
    "A. docker image clean",
    "B. docker rmi --all-dangling",
    "C. docker image delete --unused",
    "D. docker image prune"
   ],
   "answer": 3,
   "exp": "-a supprime toutes les images non utilisées par un conteneur."
  },
  {
   "id": "dca-j1-24",
   "q": "Qu'est-ce qu'une image dangling ?",
   "choices": [
    "A. Une image sans tag ni référence (<none>)",
    "B. Une image corrompue",
    "C. Une image en cours de téléchargement",
    "D. Une image multi-architecture"
   ],
   "answer": 0,
   "exp": "Elles résultent souvent de builds successifs."
  },
  {
   "id": "dca-j1-25",
   "q": "Comment attribuer un nouveau tag à une image ?",
   "choices": [
    "A. docker image rename source cible",
    "B. docker tag source:tag cible:tag",
    "C. docker label source cible",
    "D. docker push --tag cible"
   ],
   "answer": 1,
   "exp": "Le tag est un alias vers le même ID d'image."
  },
  {
   "id": "dca-j1-26",
   "q": "Quelle commande envoie une image vers un registry ?",
   "choices": [
    "A. docker upload",
    "B. docker send",
    "C. docker push",
    "D. docker publish"
   ],
   "answer": 2,
   "exp": "Il faut être authentifié avec docker login."
  },
  {
   "id": "dca-j1-27",
   "q": "Quelle commande télécharge une image depuis un registry ?",
   "choices": [
    "A. docker fetch",
    "B. docker get",
    "C. docker download",
    "D. docker pull"
   ],
   "answer": 3,
   "exp": "docker run télécharge aussi automatiquement."
  },
  {
   "id": "dca-j1-28",
   "q": "Quel registry est utilisé par défaut ?",
   "choices": [
    "A. Docker Hub",
    "B. GitHub Container Registry",
    "C. Quay.io",
    "D. Amazon ECR"
   ],
   "answer": 0,
   "exp": "docker.io est le registry par défaut."
  },
  {
   "id": "dca-j1-29",
   "q": "Comment référencer une image d'un registry privé ?",
   "choices": [
    "A. image@registry.exemple.com",
    "B. registry.exemple.com:5000/nom/image:tag",
    "C. registry.exemple.com/image:tag@local",
    "D. private:image:tag"
   ],
   "answer": 1,
   "exp": "Le nom contient l'hôte du registry."
  },
  {
   "id": "dca-j1-30",
   "q": "Quelle commande permet de s'authentifier à un registry ?",
   "choices": [
    "A. docker auth registry.exemple.com",
    "B. docker connect registry.exemple.com",
    "C. docker login registry.exemple.com",
    "D. docker signin registry.exemple.com"
   ],
   "answer": 2,
   "exp": "Les identifiants sont stockés dans ~/.docker/config.json."
  },
  {
   "id": "dca-j1-31",
   "q": "Quel est l'avantage de référencer une image par digest ?",
   "choices": [
    "A. Réduit la taille",
    "B. Accélère le build",
    "C. Évite l'authentification",
    "D. Garantit l'immuabilité (même contenu à chaque pull)"
   ],
   "answer": 3,
   "exp": "nom@sha256:... pointe vers un contenu précis."
  },
  {
   "id": "dca-j1-32",
   "q": "Comment déployer un registry privé simple avec Docker ?",
   "choices": [
    "A. Exécuter l'image registry:2",
    "B. Exécuter l'image dockerhub:private",
    "C. Activer docker daemon --registry",
    "D. Créer un conteneur docker-registry:latest"
   ],
   "answer": 0,
   "exp": "L'image officielle est registry (distribution)."
  },
  {
   "id": "dca-j1-33",
   "q": "Quelle commande recherche des images sur Docker Hub ?",
   "choices": [
    "A. docker find",
    "B. docker search",
    "C. docker hub query",
    "D. docker image lookup"
   ],
   "answer": 1,
   "exp": "Disponible depuis la CLI."
  },
  {
   "id": "dca-j1-34",
   "q": "Que signifie le tag latest ?",
   "choices": [
    "A. Toujours la dernière version publiée",
    "B. Une version stable garantie",
    "C. Un tag par défaut, pas forcément la dernière version",
    "D. Un tag réservé aux images officielles"
   ],
   "answer": 2,
   "exp": "Il faut éviter latest en production."
  },
  {
   "id": "dca-j1-35",
   "q": "Qu'est-ce que Docker Content Trust ?",
   "choices": [
    "A. Un chiffrement des volumes",
    "B. Un scanner de vulnérabilités",
    "C. Un registre privé",
    "D. Un mécanisme de signature et vérification des images"
   ],
   "answer": 3,
   "exp": "Activé via DOCKER_CONTENT_TRUST=1."
  },
  {
   "id": "dca-j1-36",
   "q": "Quelle commande exporte une image dans une archive tar ?",
   "choices": [
    "A. docker save -o image.tar image",
    "B. docker export image.tar",
    "C. docker image pack image",
    "D. docker tar image"
   ],
   "answer": 0,
   "exp": "docker save conserve les couches et les tags."
  },
  {
   "id": "dca-j1-37",
   "q": "Quelle commande charge une image depuis une archive créée par docker save ?",
   "choices": [
    "A. docker import image.tar",
    "B. docker load -i image.tar",
    "C. docker restore image.tar",
    "D. docker unpack image.tar"
   ],
   "answer": 1,
   "exp": "docker import sert aux exports de conteneurs."
  },
  {
   "id": "dca-j1-38",
   "q": "Quelle commande exporte le système de fichiers d'un conteneur ?",
   "choices": [
    "A. docker save conteneur",
    "B. docker commit conteneur",
    "C. docker export conteneur > fs.tar",
    "D. docker copy conteneur"
   ],
   "answer": 2,
   "exp": "export n'inclut pas l'historique."
  },
  {
   "id": "dca-j1-39",
   "q": "Quelle commande crée une image à partir d'un conteneur modifié ?",
   "choices": [
    "A. docker build --from",
    "B. docker image create",
    "C. docker snapshot",
    "D. docker commit"
   ],
   "answer": 3,
   "exp": "Peu recommandé : préférer un Dockerfile."
  },
  {
   "id": "dca-j1-40",
   "q": "Quelle image de base est connue pour sa petite taille ?",
   "choices": [
    "A. alpine",
    "B. ubuntu",
    "C. debian",
    "D. fedora"
   ],
   "answer": 0,
   "exp": "Alpine utilise musl libc et busybox."
  },
  {
   "id": "dca-j1-41",
   "q": "Quel est le rôle de BuildKit ?",
   "choices": [
    "A. Registry privé",
    "B. Moteur de build moderne avec cache avancé et parallélisme",
    "C. Orchestrateur",
    "D. Scanner de sécurité"
   ],
   "answer": 1,
   "exp": "Activé par défaut dans les versions récentes."
  },
  {
   "id": "dca-j1-42",
   "q": "Comment passer un secret au build sans l'inscrire dans l'image ?",
   "choices": [
    "A. ARG avec la valeur du secret",
    "B. ENV avec la valeur du secret",
    "C. docker build --secret et RUN --mount=type=secret",
    "D. COPY du fichier secret"
   ],
   "answer": 2,
   "exp": "Les secrets BuildKit ne sont pas écrits dans les couches."
  },
  {
   "id": "dca-j1-43",
   "q": "Pourquoi éviter ARG pour des mots de passe ?",
   "choices": [
    "A. Ils sont chiffrés mais lents",
    "B. Ils sont ignorés",
    "C. Ils sont limités à 8 caractères",
    "D. Ils restent visibles dans l'historique de l'image"
   ],
   "answer": 3,
   "exp": "docker history peut révéler les ARG."
  },
  {
   "id": "dca-j1-44",
   "q": "Comment construire pour une architecture différente ?",
   "choices": [
    "A. docker buildx build --platform linux/arm64",
    "B. docker build --arch arm64",
    "C. docker build --cpu arm64",
    "D. docker cross-build arm64"
   ],
   "answer": 0,
   "exp": "buildx supporte le multi-plateforme."
  },
  {
   "id": "dca-j1-45",
   "q": "Quel est l'effet de --no-cache sur docker build ?",
   "choices": [
    "A. Désactive l'envoi au registry",
    "B. Ignore le cache et reconstruit toutes les couches",
    "C. Supprime les images intermédiaires",
    "D. Réduit la taille"
   ],
   "answer": 1,
   "exp": "Utile pour récupérer les dernières mises à jour."
  },
  {
   "id": "dca-j1-46",
   "q": "Quelle instruction permet de déclencher une instruction lors d'un build enfant ?",
   "choices": [
    "A. TRIGGER",
    "B. AFTER",
    "C. ONBUILD",
    "D. HOOK"
   ],
   "answer": 2,
   "exp": "ONBUILD s'exécute lorsque l'image sert de base."
  },
  {
   "id": "dca-j1-47",
   "q": "Quelle commande affiche l'espace disque utilisé par Docker ?",
   "choices": [
    "A. docker df",
    "B. docker disk usage",
    "C. docker info --disk",
    "D. docker system df"
   ],
   "answer": 3,
   "exp": "Montre images, conteneurs, volumes et cache."
  },
  {
   "id": "dca-j1-48",
   "q": "Quelle commande nettoie images, conteneurs et réseaux inutilisés ?",
   "choices": [
    "A. docker system prune",
    "B. docker clean all",
    "C. docker prune",
    "D. docker gc"
   ],
   "answer": 0,
   "exp": "Ajouter --volumes pour les volumes."
  },
  {
   "id": "dca-j1-49",
   "q": "Quel format décrit les images selon l'initiative ouverte ?",
   "choices": [
    "A. Docker Manifest uniquement",
    "B. OCI Image Format",
    "C. Appc",
    "D. LXC"
   ],
   "answer": 1,
   "exp": "La spécification OCI standardise images et runtimes."
  },
  {
   "id": "dca-j1-50",
   "q": "Quel élément identifie de manière unique un contenu de couche ?",
   "choices": [
    "A. Un nom de fichier",
    "B. Un numéro de version",
    "C. Un hash SHA-256 (digest)",
    "D. Un horodatage"
   ],
   "answer": 2,
   "exp": "Les couches sont adressées par contenu."
  }
 ],
 "2": [
  {
   "id": "dca-j2-1",
   "q": "Quel est le driver réseau par défaut pour des conteneurs sur un hôte unique ?",
   "choices": [
    "A. host",
    "B. overlay",
    "C. bridge",
    "D. macvlan"
   ],
   "answer": 2,
   "exp": "Le réseau bridge par défaut s'appelle docker0."
  },
  {
   "id": "dca-j2-2",
   "q": "Quel driver réseau supprime l'isolation réseau entre le conteneur et l'hôte ?",
   "choices": [
    "A. bridge",
    "B. none",
    "C. overlay",
    "D. host"
   ],
   "answer": 3,
   "exp": "Le conteneur utilise directement la pile réseau de l'hôte."
  },
  {
   "id": "dca-j2-3",
   "q": "Quel driver désactive tout accès réseau pour un conteneur ?",
   "choices": [
    "A. none",
    "B. bridge",
    "C. host",
    "D. null"
   ],
   "answer": 0,
   "exp": "Seul le loopback est disponible."
  },
  {
   "id": "dca-j2-4",
   "q": "Quel driver permet la communication entre conteneurs sur plusieurs hôtes dans Swarm ?",
   "choices": [
    "A. bridge",
    "B. overlay",
    "C. macvlan",
    "D. host"
   ],
   "answer": 1,
   "exp": "Overlay utilise VXLAN."
  },
  {
   "id": "dca-j2-5",
   "q": "Quel driver attribue une adresse MAC propre à chaque conteneur sur le réseau physique ?",
   "choices": [
    "A. bridge",
    "B. overlay",
    "C. macvlan",
    "D. ipvlan L2 uniquement"
   ],
   "answer": 2,
   "exp": "macvlan fait apparaître le conteneur comme un périphérique physique."
  },
  {
   "id": "dca-j2-6",
   "q": "Quelle commande crée un réseau bridge défini par l'utilisateur ?",
   "choices": [
    "A. docker network add mon-reseau",
    "B. docker create network mon-reseau",
    "C. docker network new mon-reseau",
    "D. docker network create mon-reseau"
   ],
   "answer": 3,
   "exp": "Le driver par défaut est bridge."
  },
  {
   "id": "dca-j2-7",
   "q": "Quel avantage ont les réseaux bridge personnalisés par rapport au bridge par défaut ?",
   "choices": [
    "A. Résolution DNS automatique entre conteneurs par leur nom",
    "B. Débit plus élevé garanti",
    "C. Support multi-hôte",
    "D. Chiffrement par défaut"
   ],
   "answer": 0,
   "exp": "Le bridge par défaut ne fournit pas de DNS par nom."
  },
  {
   "id": "dca-j2-8",
   "q": "Comment connecter un conteneur en cours d'exécution à un réseau ?",
   "choices": [
    "A. docker network attach reseau conteneur",
    "B. docker network connect reseau conteneur",
    "C. docker connect conteneur reseau",
    "D. docker run --join reseau"
   ],
   "answer": 1,
   "exp": "On peut aussi déconnecter avec disconnect."
  },
  {
   "id": "dca-j2-9",
   "q": "Quel flag publie le port 80 du conteneur sur le port 8080 de l'hôte ?",
   "choices": [
    "A. -p 80:8080",
    "B. -P 8080:80",
    "C. -p 8080:80",
    "D. --expose 8080:80"
   ],
   "answer": 2,
   "exp": "Format hôte:conteneur."
  },
  {
   "id": "dca-j2-10",
   "q": "Quelle est la différence entre -p et -P ?",
   "choices": [
    "A. Aucune",
    "B. -P est pour UDP uniquement",
    "C. -p est pour les réseaux overlay",
    "D. -P publie tous les ports exposés sur des ports aléatoires de l'hôte ; -p définit des mappings explicites"
   ],
   "answer": 3,
   "exp": "-P utilise les ports EXPOSE."
  },
  {
   "id": "dca-j2-11",
   "q": "Comment publier un port uniquement sur l'interface locale de l'hôte ?",
   "choices": [
    "A. -p 127.0.0.1:8080:80",
    "B. -p localhost 8080:80",
    "C. --local -p 8080:80",
    "D. -p 8080:80/local"
   ],
   "answer": 0,
   "exp": "On précise l'adresse IP de liaison."
  },
  {
   "id": "dca-j2-12",
   "q": "Comment publier un port UDP ?",
   "choices": [
    "A. -p 53:53 --udp",
    "B. -p 53:53/udp",
    "C. -u 53:53",
    "D. -p udp:53:53"
   ],
   "answer": 1,
   "exp": "Le suffixe /udp précise le protocole."
  },
  {
   "id": "dca-j2-13",
   "q": "Quelle commande liste les réseaux Docker ?",
   "choices": [
    "A. docker networks",
    "B. docker net list",
    "C. docker network ls",
    "D. docker ls network"
   ],
   "answer": 2,
   "exp": "Montre bridge, host et none par défaut."
  },
  {
   "id": "dca-j2-14",
   "q": "Quelle commande affiche les détails d'un réseau, y compris les conteneurs connectés ?",
   "choices": [
    "A. docker network show",
    "B. docker network describe",
    "C. docker inspect --network-only",
    "D. docker network inspect"
   ],
   "answer": 3,
   "exp": "Le résultat inclut le sous-réseau et la passerelle."
  },
  {
   "id": "dca-j2-15",
   "q": "Comment attribuer une adresse IP fixe à un conteneur sur un réseau défini par l'utilisateur ?",
   "choices": [
    "A. --ip avec un sous-réseau défini",
    "B. --static-ip",
    "C. -p ip:fixe",
    "D. --addr"
   ],
   "answer": 0,
   "exp": "Nécessite un réseau avec --subnet."
  },
  {
   "id": "dca-j2-16",
   "q": "Quel est le rôle du DNS embarqué de Docker ?",
   "choices": [
    "A. Résoudre les noms externes uniquement",
    "B. Résoudre les noms de conteneurs et alias sur les réseaux utilisateur",
    "C. Chiffrer le trafic",
    "D. Remplacer le DNS de l'hôte"
   ],
   "answer": 1,
   "exp": "Disponible à l'adresse 127.0.0.11 dans le conteneur."
  },
  {
   "id": "dca-j2-17",
   "q": "Comment spécifier un serveur DNS pour un conteneur ?",
   "choices": [
    "A. --nameserver 8.8.8.8",
    "B. --resolver 8.8.8.8",
    "C. --dns 8.8.8.8",
    "D. --dns-ip 8.8.8.8"
   ],
   "answer": 2,
   "exp": "Peut aussi se définir dans daemon.json."
  },
  {
   "id": "dca-j2-18",
   "q": "Quel flag donne un alias réseau à un conteneur ?",
   "choices": [
    "A. --alias-net",
    "B. --hostname-alias",
    "C. --dns-name",
    "D. --network-alias"
   ],
   "answer": 3,
   "exp": "Permet plusieurs noms résolubles."
  },
  {
   "id": "dca-j2-19",
   "q": "Comment lier deux conteneurs de façon moderne ?",
   "choices": [
    "A. Les placer sur le même réseau utilisateur",
    "B. Utiliser --link",
    "C. Utiliser --share-net",
    "D. Utiliser --pair"
   ],
   "answer": 0,
   "exp": "--link est déprécié."
  },
  {
   "id": "dca-j2-20",
   "q": "Quel flag permet à un conteneur de partager la pile réseau d'un autre ?",
   "choices": [
    "A. --share-network nom",
    "B. --network container:nom",
    "C. --link-net nom",
    "D. --network-from nom"
   ],
   "answer": 1,
   "exp": "Utile pour les sidecars."
  },
  {
   "id": "dca-j2-21",
   "q": "Que fait --add-host ?",
   "choices": [
    "A. Ajoute un hôte au swarm",
    "B. Ajoute un DNS",
    "C. Ajoute une entrée dans /etc/hosts du conteneur",
    "D. Ajoute un réseau"
   ],
   "answer": 2,
   "exp": "Format --add-host nom:ip."
  },
  {
   "id": "dca-j2-22",
   "q": "Que fait --hostname ?",
   "choices": [
    "A. Définit le nom du conteneur",
    "B. Définit le nom du réseau",
    "C. Définit le nom DNS externe",
    "D. Définit le nom d'hôte interne du conteneur"
   ],
   "answer": 3,
   "exp": "--name définit le nom du conteneur."
  },
  {
   "id": "dca-j2-23",
   "q": "Quel réseau est créé automatiquement lors de l'initialisation d'un swarm pour le trafic ingress ?",
   "choices": [
    "A. ingress",
    "B. bridge",
    "C. gwbridge uniquement",
    "D. overlay-default"
   ],
   "answer": 0,
   "exp": "Il gère le routing mesh ; docker_gwbridge sert à la sortie."
  },
  {
   "id": "dca-j2-24",
   "q": "Qu'est-ce que le routing mesh ?",
   "choices": [
    "A. Un VPN entre nœuds",
    "B. Un mécanisme où un port publié est accessible sur tous les nœuds du swarm",
    "C. Un DNS global",
    "D. Un équilibreur externe"
   ],
   "answer": 1,
   "exp": "Le trafic est redirigé vers un conteneur du service."
  },
  {
   "id": "dca-j2-25",
   "q": "Quel mode de publication contourne le routing mesh ?",
   "choices": [
    "A. mode=ingress",
    "B. mode=overlay",
    "C. mode=host",
    "D. mode=bridge"
   ],
   "answer": 2,
   "exp": "Le port n'est ouvert que sur les nœuds exécutant la tâche."
  },
  {
   "id": "dca-j2-26",
   "q": "Comment chiffrer le trafic d'un réseau overlay ?",
   "choices": [
    "A. docker network create --secure",
    "B. ajouter un VPN obligatoire",
    "C. utiliser macvlan",
    "D. docker network create --opt encrypted -d overlay"
   ],
   "answer": 3,
   "exp": "Utilise IPsec."
  },
  {
   "id": "dca-j2-27",
   "q": "Quels ports faut-il ouvrir pour la communication Swarm ?",
   "choices": [
    "A. 2377/tcp, 7946/tcp+udp, 4789/udp",
    "B. 80 et 443 uniquement",
    "C. 22 et 3389",
    "D. 5000 et 8080"
   ],
   "answer": 0,
   "exp": "2377 gestion, 7946 découverte, 4789 VXLAN."
  },
  {
   "id": "dca-j2-28",
   "q": "Que fait docker network prune ?",
   "choices": [
    "A. Supprime tous les réseaux",
    "B. Supprime les réseaux inutilisés",
    "C. Supprime les conteneurs inutilisés",
    "D. Supprime les volumes"
   ],
   "answer": 1,
   "exp": "Les réseaux par défaut ne sont pas supprimés."
  },
  {
   "id": "dca-j2-29",
   "q": "Quel effet a --network host sur le mappage de ports -p ?",
   "choices": [
    "A. Il est obligatoire",
    "B. Il double le port",
    "C. Il est ignoré",
    "D. Il change le protocole"
   ],
   "answer": 2,
   "exp": "Le conteneur utilise directement les ports de l'hôte."
  },
  {
   "id": "dca-j2-30",
   "q": "Quelle commande affiche les ports mappés d'un conteneur ?",
   "choices": [
    "A. docker network ports conteneur",
    "B. docker inspect --ports",
    "C. docker ps --mapping",
    "D. docker port conteneur"
   ],
   "answer": 3,
   "exp": "Peut aussi se lire avec docker ps."
  },
  {
   "id": "dca-j2-31",
   "q": "Comment tester la connectivité depuis un conteneur vers un autre par nom ?",
   "choices": [
    "A. docker exec c1 ping c2 (sur réseau utilisateur)",
    "B. docker ping c1 c2",
    "C. docker network test c1 c2",
    "D. docker link c1 c2"
   ],
   "answer": 0,
   "exp": "Le nom est résolu par le DNS embarqué."
  },
  {
   "id": "dca-j2-32",
   "q": "Que fait iptables avec Docker ?",
   "choices": [
    "A. Docker désactive iptables",
    "B. Docker crée des règles pour le NAT et le filtrage des conteneurs",
    "C. Docker ne l'utilise jamais",
    "D. Docker remplace iptables par nftables obligatoirement"
   ],
   "answer": 1,
   "exp": "Docker gère les chaînes DOCKER et DOCKER-USER."
  },
  {
   "id": "dca-j2-33",
   "q": "Quelle chaîne iptables permet d'ajouter des règles personnalisées avant celles de Docker ?",
   "choices": [
    "A. DOCKER",
    "B. FORWARD-DOCKER",
    "C. DOCKER-USER",
    "D. INPUT-DOCKER"
   ],
   "answer": 2,
   "exp": "Docker n'écrase pas cette chaîne."
  },
  {
   "id": "dca-j2-34",
   "q": "Quel flag du daemon désactive la manipulation d'iptables ?",
   "choices": [
    "A. --no-nat",
    "B. --firewall=off",
    "C. --ip-masq=false",
    "D. --iptables=false"
   ],
   "answer": 3,
   "exp": "À utiliser avec précaution."
  },
  {
   "id": "dca-j2-35",
   "q": "Quel flag modifie le sous-réseau du bridge par défaut ?",
   "choices": [
    "A. --bip dans daemon.json",
    "B. --subnet-default",
    "C. --bridge-ip-range",
    "D. --net-cidr"
   ],
   "answer": 0,
   "exp": "bip = bridge IP."
  },
  {
   "id": "dca-j2-36",
   "q": "Que signifie la communication inter-conteneurs (icc) ?",
   "choices": [
    "A. Chiffrer les conteneurs",
    "B. Autoriser ou non la communication entre conteneurs du bridge par défaut",
    "C. Isoler les volumes",
    "D. Partager la mémoire"
   ],
   "answer": 1,
   "exp": "--icc=false les isole."
  },
  {
   "id": "dca-j2-37",
   "q": "Quel est le rôle d'une IP virtuelle (VIP) de service Swarm ?",
   "choices": [
    "A. Chiffrer le trafic",
    "B. Fournir une IP publique",
    "C. Équilibrer le trafic vers les tâches d'un service",
    "D. Remplacer le DNS"
   ],
   "answer": 2,
   "exp": "Mode d'endpoint par défaut : vip."
  },
  {
   "id": "dca-j2-38",
   "q": "Quel mode d'endpoint retourne les IP des tâches via DNS ?",
   "choices": [
    "A. vip",
    "B. host",
    "C. nat",
    "D. dnsrr"
   ],
   "answer": 3,
   "exp": "dnsrr = DNS round-robin."
  },
  {
   "id": "dca-j2-39",
   "q": "Comment attacher un conteneur autonome à un overlay Swarm ?",
   "choices": [
    "A. Créer le réseau avec --attachable",
    "B. Utiliser --link",
    "C. C'est impossible",
    "D. Utiliser --network host"
   ],
   "answer": 0,
   "exp": "Sans attachable, seuls les services peuvent l'utiliser."
  },
  {
   "id": "dca-j2-40",
   "q": "Quel flag attribue un réseau à un service Swarm ?",
   "choices": [
    "A. --net-overlay",
    "B. --network",
    "C. --attach",
    "D. --link-net"
   ],
   "answer": 1,
   "exp": "docker service create --network mon-overlay."
  },
  {
   "id": "dca-j2-41",
   "q": "Quelle commande affiche la configuration IP d'un conteneur ?",
   "choices": [
    "A. docker ip conteneur",
    "B. docker network ip conteneur",
    "C. docker inspect -f '{{.NetworkSettings.IPAddress}}' conteneur",
    "D. docker ps --ip"
   ],
   "answer": 2,
   "exp": "Utilise un template Go."
  },
  {
   "id": "dca-j2-42",
   "q": "Que fait --expose ?",
   "choices": [
    "A. Publie un port sur l'hôte",
    "B. Ouvre un port du pare-feu",
    "C. Désactive un port",
    "D. Documente un port sans le publier"
   ],
   "answer": 3,
   "exp": "Équivalent à EXPOSE."
  },
  {
   "id": "dca-j2-43",
   "q": "Quel protocole l'overlay utilise-t-il pour encapsuler le trafic ?",
   "choices": [
    "A. VXLAN",
    "B. GRE",
    "C. IPsec uniquement",
    "D. SSH"
   ],
   "answer": 0,
   "exp": "Port UDP 4789."
  },
  {
   "id": "dca-j2-44",
   "q": "Que fait docker run --network none ?",
   "choices": [
    "A. Le conteneur utilise le réseau host",
    "B. Le conteneur n'a que l'interface loopback",
    "C. Le conteneur partage le réseau d'un autre",
    "D. Le conteneur n'a pas de nom"
   ],
   "answer": 1,
   "exp": "Utile pour des traitements isolés."
  },
  {
   "id": "dca-j2-45",
   "q": "Comment exposer un service interne à un proxy inverse ?",
   "choices": [
    "A. Publier tous les services",
    "B. Utiliser host",
    "C. Les placer sur le même réseau et ne publier que le proxy",
    "D. Désactiver DNS"
   ],
   "answer": 2,
   "exp": "Réduit la surface d'attaque."
  },
  {
   "id": "dca-j2-46",
   "q": "Quelle commande connecte un conteneur à plusieurs réseaux ?",
   "choices": [
    "A. docker run --multi-network",
    "B. docker connect --all",
    "C. docker net add",
    "D. docker network connect (après docker run)"
   ],
   "answer": 3,
   "exp": "Un conteneur peut appartenir à plusieurs réseaux."
  },
  {
   "id": "dca-j2-47",
   "q": "Quel espace de noms Linux isole le réseau d'un conteneur ?",
   "choices": [
    "A. net",
    "B. pid",
    "C. mnt",
    "D. uts"
   ],
   "answer": 0,
   "exp": "Chaque namespace isole une ressource."
  },
  {
   "id": "dca-j2-48",
   "q": "Quelle commande indique les statistiques réseau d'un conteneur ?",
   "choices": [
    "A. docker network stats",
    "B. docker stats",
    "C. docker top",
    "D. docker events"
   ],
   "answer": 1,
   "exp": "stats affiche CPU, mémoire et I/O réseau."
  },
  {
   "id": "dca-j2-49",
   "q": "Quel fichier du conteneur liste les serveurs DNS ?",
   "choices": [
    "A. /etc/hosts",
    "B. /etc/network/dns",
    "C. /etc/resolv.conf",
    "D. /etc/docker/dns"
   ],
   "answer": 2,
   "exp": "Géré par Docker."
  },
  {
   "id": "dca-j2-50",
   "q": "Quelle option permet d'utiliser une plage d'IP spécifique pour les conteneurs d'un réseau ?",
   "choices": [
    "A. --range",
    "B. --ip-pool",
    "C. --subnet-range",
    "D. --ip-range"
   ],
   "answer": 3,
   "exp": "Doit rester dans le --subnet."
  }
 ],
 "3": [
  {
   "id": "dca-j3-1",
   "q": "Quelle est la différence entre un volume et un bind mount ?",
   "choices": [
    "A. Un volume est stocké dans l'image ; un bind mount dans le conteneur",
    "B. Ils sont identiques",
    "C. Un bind mount est géré par Docker",
    "D. Un volume est géré par Docker ; un bind mount lie un chemin précis de l'hôte"
   ],
   "answer": 3,
   "exp": "Les volumes sont recommandés pour la persistance."
  },
  {
   "id": "dca-j3-2",
   "q": "Où Docker stocke-t-il les volumes par défaut sur Linux ?",
   "choices": [
    "A. /var/lib/docker/volumes",
    "B. /etc/docker/volumes",
    "C. /opt/docker/data",
    "D. /usr/share/docker"
   ],
   "answer": 0,
   "exp": "Le chemin dépend du data-root."
  },
  {
   "id": "dca-j3-3",
   "q": "Quelle commande crée un volume nommé ?",
   "choices": [
    "A. docker create volume nom",
    "B. docker volume create nom",
    "C. docker volume new nom",
    "D. docker storage add nom"
   ],
   "answer": 1,
   "exp": "Le volume peut ensuite être monté avec -v nom:/chemin."
  },
  {
   "id": "dca-j3-4",
   "q": "Quelle syntaxe monte un volume nommé dans un conteneur ?",
   "choices": [
    "A. -v /app/data:data",
    "B. --mount data /app/data",
    "C. -v data:/app/data",
    "D. -m data:/app/data"
   ],
   "answer": 2,
   "exp": "On peut aussi utiliser --mount type=volume,src=data,dst=/app/data."
  },
  {
   "id": "dca-j3-5",
   "q": "Quelle option est recommandée par Docker pour plus de clarté ?",
   "choices": [
    "A. -v",
    "B. --volumes-from",
    "C. --bind",
    "D. --mount"
   ],
   "answer": 3,
   "exp": "--mount est explicite et échoue si le chemin n'existe pas pour un bind."
  },
  {
   "id": "dca-j3-6",
   "q": "Que se passe-t-il avec -v /chemin/inexistant:/app pour un bind mount ?",
   "choices": [
    "A. Docker crée le répertoire sur l'hôte",
    "B. Docker échoue toujours",
    "C. Docker ignore le montage",
    "D. Docker utilise un volume anonyme"
   ],
   "answer": 0,
   "exp": "Avec --mount, une erreur est renvoyée."
  },
  {
   "id": "dca-j3-7",
   "q": "Quel type de montage est éphémère et stocké en mémoire ?",
   "choices": [
    "A. volume",
    "B. tmpfs",
    "C. bind",
    "D. overlay"
   ],
   "answer": 1,
   "exp": "Les données disparaissent à l'arrêt."
  },
  {
   "id": "dca-j3-8",
   "q": "Que fait docker volume prune ?",
   "choices": [
    "A. Supprime tous les volumes",
    "B. Sauvegarde les volumes",
    "C. Supprime les volumes non utilisés",
    "D. Réduit la taille des volumes"
   ],
   "answer": 2,
   "exp": "Attention aux pertes de données."
  },
  {
   "id": "dca-j3-9",
   "q": "Quelle commande affiche les détails d'un volume ?",
   "choices": [
    "A. docker volume show",
    "B. docker volume describe",
    "C. docker volume stat",
    "D. docker volume inspect"
   ],
   "answer": 3,
   "exp": "Indique le point de montage."
  },
  {
   "id": "dca-j3-10",
   "q": "Que fait --volumes-from ?",
   "choices": [
    "A. Monte les volumes d'un autre conteneur",
    "B. Copie les volumes vers l'hôte",
    "C. Supprime les volumes",
    "D. Liste les volumes"
   ],
   "answer": 0,
   "exp": "Utile pour des sauvegardes."
  },
  {
   "id": "dca-j3-11",
   "q": "Comment monter un volume en lecture seule ?",
   "choices": [
    "A. -v data:/app:readonly",
    "B. -v data:/app:ro",
    "C. --readonly data",
    "D. -v ro:data:/app"
   ],
   "answer": 1,
   "exp": "Le suffixe :ro."
  },
  {
   "id": "dca-j3-12",
   "q": "Quel est le comportement d'un volume anonyme à la suppression du conteneur avec --rm ?",
   "choices": [
    "A. Il est conservé",
    "B. Il est copié",
    "C. Il est supprimé avec le conteneur",
    "D. Il devient nommé"
   ],
   "answer": 2,
   "exp": "--rm supprime aussi les volumes anonymes associés."
  },
  {
   "id": "dca-j3-13",
   "q": "Quel storage driver est recommandé sur la plupart des distributions Linux modernes ?",
   "choices": [
    "A. aufs",
    "B. devicemapper",
    "C. vfs",
    "D. overlay2"
   ],
   "answer": 3,
   "exp": "overlay2 est le défaut."
  },
  {
   "id": "dca-j3-14",
   "q": "Qu'est-ce que le copy-on-write ?",
   "choices": [
    "A. Copier un fichier dans la couche inscriptible uniquement lors d'une modification",
    "B. Copier les fichiers à chaque lecture",
    "C. Écrire deux fois chaque fichier",
    "D. Compresser les fichiers"
   ],
   "answer": 0,
   "exp": "Optimise l'espace disque."
  },
  {
   "id": "dca-j3-15",
   "q": "Où sont écrites les modifications d'un conteneur ?",
   "choices": [
    "A. Dans l'image",
    "B. Dans la couche inscriptible du conteneur",
    "C. Dans le registry",
    "D. Dans le daemon.json"
   ],
   "answer": 1,
   "exp": "Perdues à la suppression du conteneur."
  },
  {
   "id": "dca-j3-16",
   "q": "Quel plugin permet d'utiliser un stockage distant pour les volumes ?",
   "choices": [
    "A. Un plugin réseau",
    "B. Un plugin d'authentification",
    "C. Un volume driver (plugin)",
    "D. Un plugin de logs"
   ],
   "answer": 2,
   "exp": "Par exemple NFS, cloud storage."
  },
  {
   "id": "dca-j3-17",
   "q": "Quelle commande permet de monter un volume NFS via le driver local ?",
   "choices": [
    "A. docker nfs create nom",
    "B. docker mount nfs nom",
    "C. docker volume nfs nom",
    "D. docker volume create --driver local --opt type=nfs --opt o=addr=...,rw --opt device=:/export nom"
   ],
   "answer": 3,
   "exp": "Le driver local accepte les options de mount."
  },
  {
   "id": "dca-j3-18",
   "q": "Quelle commande sauvegarde un volume ?",
   "choices": [
    "A. Lancer un conteneur temporaire qui archive le volume monté",
    "B. docker volume backup",
    "C. docker save volume",
    "D. docker export volume"
   ],
   "answer": 0,
   "exp": "Il n'existe pas de commande native de sauvegarde."
  },
  {
   "id": "dca-j3-19",
   "q": "Qu'est-ce qu'un utilisateur rootless Docker ?",
   "choices": [
    "A. Un conteneur sans réseau",
    "B. Un daemon exécuté sans privilèges root",
    "C. Un conteneur sans volumes",
    "D. Une image sans root"
   ],
   "answer": 1,
   "exp": "Réduit les risques en cas de compromission du daemon."
  },
  {
   "id": "dca-j3-20",
   "q": "Quel flag exécute un conteneur avec un utilisateur non root ?",
   "choices": [
    "A. --rootless",
    "B. --uid 1000",
    "C. --user 1000:1000",
    "D. --no-root"
   ],
   "answer": 2,
   "exp": "Peut aussi se définir par USER."
  },
  {
   "id": "dca-j3-21",
   "q": "Quelle option retire toutes les capabilities Linux ?",
   "choices": [
    "A. --no-caps",
    "B. --cap-none",
    "C. --drop-all",
    "D. --cap-drop ALL"
   ],
   "answer": 3,
   "exp": "On peut ensuite ajouter avec --cap-add."
  },
  {
   "id": "dca-j3-22",
   "q": "Que fait --privileged ?",
   "choices": [
    "A. Donne au conteneur presque tous les accès de l'hôte",
    "B. Limite les ressources",
    "C. Active le mode debug",
    "D. Chiffre le conteneur"
   ],
   "answer": 0,
   "exp": "À éviter."
  },
  {
   "id": "dca-j3-23",
   "q": "Quel flag rend le système de fichiers racine du conteneur en lecture seule ?",
   "choices": [
    "A. --ro-root",
    "B. --read-only",
    "C. --fs-readonly",
    "D. --immutable"
   ],
   "answer": 1,
   "exp": "On peut combiner avec --tmpfs."
  },
  {
   "id": "dca-j3-24",
   "q": "Quel flag empêche l'obtention de nouveaux privilèges ?",
   "choices": [
    "A. --no-privileges",
    "B. --secure",
    "C. --security-opt no-new-privileges",
    "D. --drop-priv"
   ],
   "answer": 2,
   "exp": "Empêche setuid."
  },
  {
   "id": "dca-j3-25",
   "q": "Qu'est-ce que seccomp dans Docker ?",
   "choices": [
    "A. Un pare-feu réseau",
    "B. Un chiffrement de disque",
    "C. Un scanner d'images",
    "D. Un filtre d'appels système appliqué aux conteneurs"
   ],
   "answer": 3,
   "exp": "Un profil par défaut est appliqué."
  },
  {
   "id": "dca-j3-26",
   "q": "Qu'est-ce qu'AppArmor/SELinux ?",
   "choices": [
    "A. Des modules de sécurité Linux (MAC) appliqués aux conteneurs",
    "B. Des outils de build",
    "C. Des orchestrateurs",
    "D. Des registries"
   ],
   "answer": 0,
   "exp": "Ajoutent un contrôle d'accès obligatoire."
  },
  {
   "id": "dca-j3-27",
   "q": "Quelle commande vérifie les vulnérabilités d'une image avec Docker ?",
   "choices": [
    "A. docker scan-all image",
    "B. docker scout cves image",
    "C. docker verify image",
    "D. docker audit image"
   ],
   "answer": 1,
   "exp": "Docker Scout remplace docker scan."
  },
  {
   "id": "dca-j3-28",
   "q": "Que fait Docker Content Trust ?",
   "choices": [
    "A. Chiffre les volumes",
    "B. Analyse les vulnérabilités",
    "C. Vérifie la signature des images lors du pull/push",
    "D. Restreint le réseau"
   ],
   "answer": 2,
   "exp": "DOCKER_CONTENT_TRUST=1."
  },
  {
   "id": "dca-j3-29",
   "q": "Comment limiter la mémoire d'un conteneur ?",
   "choices": [
    "A. --ram 512m",
    "B. --mem-max 512m",
    "C. --limit-ram 512m",
    "D. --memory 512m"
   ],
   "answer": 3,
   "exp": "Un dépassement entraîne un arrêt OOM."
  },
  {
   "id": "dca-j3-30",
   "q": "Comment limiter l'usage CPU à 1,5 cœur ?",
   "choices": [
    "A. --cpus 1.5",
    "B. --cpu-limit 1.5",
    "C. --cores 1.5",
    "D. --cpu-max 150"
   ],
   "answer": 0,
   "exp": "Alternative : --cpu-shares (poids relatif)."
  },
  {
   "id": "dca-j3-31",
   "q": "Quelle est la différence entre --cpu-shares et --cpus ?",
   "choices": [
    "A. Aucune",
    "B. cpu-shares est un poids relatif ; cpus est une limite absolue",
    "C. cpus est un poids ; shares est une limite",
    "D. Seul cpus fonctionne"
   ],
   "answer": 1,
   "exp": "Les shares ne s'appliquent qu'en cas de contention."
  },
  {
   "id": "dca-j3-32",
   "q": "Quelle commande modifie les limites d'un conteneur en cours d'exécution ?",
   "choices": [
    "A. docker modify",
    "B. docker limit",
    "C. docker update",
    "D. docker resize"
   ],
   "answer": 2,
   "exp": "Peut modifier CPU, mémoire, restart."
  },
  {
   "id": "dca-j3-33",
   "q": "Que fait --pids-limit ?",
   "choices": [
    "A. Limite les ports",
    "B. Limite les volumes",
    "C. Limite les réseaux",
    "D. Limite le nombre de processus dans le conteneur"
   ],
   "answer": 3,
   "exp": "Protège contre les fork bombs."
  },
  {
   "id": "dca-j3-34",
   "q": "Quel flag définit la politique de redémarrage ?",
   "choices": [
    "A. --restart",
    "B. --auto-restart",
    "C. --on-failure",
    "D. --keepalive"
   ],
   "answer": 0,
   "exp": "Valeurs : no, on-failure, always, unless-stopped."
  },
  {
   "id": "dca-j3-35",
   "q": "Quelle politique de redémarrage ne redémarre pas après un arrêt manuel du daemon ?",
   "choices": [
    "A. always",
    "B. unless-stopped",
    "C. on-failure",
    "D. no"
   ],
   "answer": 1,
   "exp": "unless-stopped respecte un arrêt manuel."
  },
  {
   "id": "dca-j3-36",
   "q": "Quel est le rôle de Docker secrets ?",
   "choices": [
    "A. Chiffrer les images",
    "B. Sécuriser le registry",
    "C. Stocker et distribuer des données sensibles aux services Swarm",
    "D. Remplacer les volumes"
   ],
   "answer": 2,
   "exp": "Les secrets sont montés dans /run/secrets/."
  },
  {
   "id": "dca-j3-37",
   "q": "Comment créer un secret Swarm ?",
   "choices": [
    "A. docker secret add nom mdp",
    "B. docker swarm secret nom",
    "C. docker create secret nom",
    "D. echo mdp | docker secret create nom -"
   ],
   "answer": 3,
   "exp": "On peut lire depuis un fichier ou stdin."
  },
  {
   "id": "dca-j3-38",
   "q": "Où un secret est-il disponible dans le conteneur ?",
   "choices": [
    "A. /run/secrets/<nom>",
    "B. /etc/secrets/<nom>",
    "C. /var/secrets/<nom>",
    "D. /secrets/<nom>"
   ],
   "answer": 0,
   "exp": "Stocké en mémoire (tmpfs)."
  },
  {
   "id": "dca-j3-39",
   "q": "Les secrets Swarm sont-ils chiffrés au repos ?",
   "choices": [
    "A. Non, jamais",
    "B. Oui, dans le journal Raft des managers",
    "C. Seulement avec TLS",
    "D. Seulement avec un plugin"
   ],
   "answer": 1,
   "exp": "Les données Raft sont chiffrées."
  },
  {
   "id": "dca-j3-40",
   "q": "Quel mécanisme chiffre la communication entre nœuds Swarm ?",
   "choices": [
    "A. SSH",
    "B. VPN",
    "C. TLS mutuel",
    "D. IPsec uniquement"
   ],
   "answer": 2,
   "exp": "Les certificats sont renouvelés automatiquement."
  },
  {
   "id": "dca-j3-41",
   "q": "Quel est l'effet de l'autolock Swarm ?",
   "choices": [
    "A. Verrouille les services",
    "B. Verrouille les réseaux",
    "C. Verrouille les images",
    "D. Exige une clé de déverrouillage au redémarrage d'un manager"
   ],
   "answer": 3,
   "exp": "Protège les clés Raft."
  },
  {
   "id": "dca-j3-42",
   "q": "Quelle commande affiche les logs d'un conteneur ?",
   "choices": [
    "A. docker logs",
    "B. docker log show",
    "C. docker output",
    "D. docker tail"
   ],
   "answer": 0,
   "exp": "Utilise le logging driver."
  },
  {
   "id": "dca-j3-43",
   "q": "Quel logging driver est le défaut ?",
   "choices": [
    "A. syslog",
    "B. json-file",
    "C. journald",
    "D. none"
   ],
   "answer": 1,
   "exp": "Les logs sont stockés dans des fichiers JSON."
  },
  {
   "id": "dca-j3-44",
   "q": "Comment éviter que les logs ne saturent le disque ?",
   "choices": [
    "A. Désactiver Docker",
    "B. Supprimer les logs à la main",
    "C. Configurer max-size et max-file pour json-file",
    "D. Utiliser latest"
   ],
   "answer": 2,
   "exp": "Options log-opt dans daemon.json."
  },
  {
   "id": "dca-j3-45",
   "q": "Quel fichier configure le daemon Docker sur Linux ?",
   "choices": [
    "A. /etc/docker/config.yaml",
    "B. /var/lib/docker/daemon.conf",
    "C. /etc/dockerd.conf",
    "D. /etc/docker/daemon.json"
   ],
   "answer": 3,
   "exp": "Redémarrer le daemon après modification."
  },
  {
   "id": "dca-j3-46",
   "q": "Que fait live-restore ?",
   "choices": [
    "A. Garde les conteneurs actifs pendant l'arrêt du daemon",
    "B. Restaure les images",
    "C. Restaure les volumes",
    "D. Redémarre les réseaux"
   ],
   "answer": 0,
   "exp": "Option dans daemon.json."
  },
  {
   "id": "dca-j3-47",
   "q": "Quel groupe Linux donne accès au socket Docker ?",
   "choices": [
    "A. wheel",
    "B. docker",
    "C. sudo",
    "D. root-docker"
   ],
   "answer": 1,
   "exp": "Équivaut quasiment à un accès root."
  },
  {
   "id": "dca-j3-48",
   "q": "Pourquoi ne pas exposer le socket Docker TCP sans TLS ?",
   "choices": [
    "A. Cela ralentit Docker",
    "B. Cela empêche le build",
    "C. N'importe qui pourrait contrôler le daemon",
    "D. Cela désactive les volumes"
   ],
   "answer": 2,
   "exp": "Utiliser TLS mutuel (port 2376)."
  },
  {
   "id": "dca-j3-49",
   "q": "Comment protéger l'accès distant au daemon ?",
   "choices": [
    "A. Mot de passe en clair",
    "B. Aucun besoin",
    "C. HTTP basique",
    "D. TLS avec certificats client"
   ],
   "answer": 3,
   "exp": "--tlsverify."
  },
  {
   "id": "dca-j3-50",
   "q": "Quel outil de CIS aide à auditer la configuration Docker ?",
   "choices": [
    "A. Docker Bench for Security",
    "B. docker audit",
    "C. docker harden",
    "D. docker lint"
   ],
   "answer": 0,
   "exp": "Il applique le CIS Docker Benchmark."
  }
 ],
 "4": [
  {
   "id": "dca-j4-1",
   "q": "Quelle commande initialise un cluster Swarm ?",
   "choices": [
    "A. docker swarm init",
    "B. docker swarm create",
    "C. docker cluster init",
    "D. docker swarm start"
   ],
   "answer": 0,
   "exp": "Le nœud devient manager."
  },
  {
   "id": "dca-j4-2",
   "q": "Quelle commande affiche le jeton pour joindre un worker ?",
   "choices": [
    "A. docker swarm token worker",
    "B. docker swarm join-token worker",
    "C. docker node token worker",
    "D. docker swarm show worker"
   ],
   "answer": 1,
   "exp": "Idem avec manager."
  },
  {
   "id": "dca-j4-3",
   "q": "Quel est le rôle des managers dans Swarm ?",
   "choices": [
    "A. Exécuter uniquement les conteneurs",
    "B. Stocker les images",
    "C. Maintenir l'état du cluster via Raft et planifier les tâches",
    "D. Gérer le DNS externe"
   ],
   "answer": 2,
   "exp": "Les managers forment un quorum Raft."
  },
  {
   "id": "dca-j4-4",
   "q": "Combien de managers faut-il pour tolérer la perte d'un manager ?",
   "choices": [
    "A. 1",
    "B. 2",
    "C. 4 exactement",
    "D. 3"
   ],
   "answer": 3,
   "exp": "Quorum = (N/2)+1 ; 3 managers tolèrent 1 panne."
  },
  {
   "id": "dca-j4-5",
   "q": "Combien de pannes de managers tolère un cluster de 5 managers ?",
   "choices": [
    "A. 2",
    "B. 1",
    "C. 3",
    "D. 4"
   ],
   "answer": 0,
   "exp": "Quorum de 3 sur 5."
  },
  {
   "id": "dca-j4-6",
   "q": "Quel algorithme garantit la cohérence entre managers ?",
   "choices": [
    "A. Paxos",
    "B. Raft",
    "C. Gossip uniquement",
    "D. Two-phase commit"
   ],
   "answer": 1,
   "exp": "Raft élit un leader."
  },
  {
   "id": "dca-j4-7",
   "q": "Quelle commande crée un service répliqué ?",
   "choices": [
    "A. docker run --replicas 3 nginx",
    "B. docker swarm deploy nginx 3",
    "C. docker service create --replicas 3 nginx",
    "D. docker service start nginx --count 3"
   ],
   "answer": 2,
   "exp": "Mode par défaut : replicated."
  },
  {
   "id": "dca-j4-8",
   "q": "Quel mode de service exécute une tâche par nœud ?",
   "choices": [
    "A. replicated",
    "B. spread",
    "C. daemon",
    "D. global"
   ],
   "answer": 3,
   "exp": "--mode global."
  },
  {
   "id": "dca-j4-9",
   "q": "Quelle commande met à l'échelle un service ?",
   "choices": [
    "A. docker service scale web=5",
    "B. docker service resize web 5",
    "C. docker scale web=5",
    "D. docker service replicas web 5"
   ],
   "answer": 0,
   "exp": "Peut aussi se faire avec update --replicas."
  },
  {
   "id": "dca-j4-10",
   "q": "Quelle commande met à jour l'image d'un service ?",
   "choices": [
    "A. docker service upgrade web nginx:1.27",
    "B. docker service update --image nginx:1.27 web",
    "C. docker service image web nginx:1.27",
    "D. docker update service web"
   ],
   "answer": 1,
   "exp": "La mise à jour est progressive."
  },
  {
   "id": "dca-j4-11",
   "q": "Quel flag contrôle le nombre de tâches mises à jour en parallèle ?",
   "choices": [
    "A. --update-batch",
    "B. --rolling-size",
    "C. --update-parallelism",
    "D. --update-count"
   ],
   "answer": 2,
   "exp": "Avec --update-delay."
  },
  {
   "id": "dca-j4-12",
   "q": "Quelle commande annule une mise à jour de service ?",
   "choices": [
    "A. docker service undo web",
    "B. docker service revert web",
    "C. docker rollback web",
    "D. docker service rollback web"
   ],
   "answer": 3,
   "exp": "Revient à la spécification précédente."
  },
  {
   "id": "dca-j4-13",
   "q": "Quelle commande liste les tâches d'un service ?",
   "choices": [
    "A. docker service ps web",
    "B. docker service tasks web",
    "C. docker task ls web",
    "D. docker service status web"
   ],
   "answer": 0,
   "exp": "Montre le nœud et l'état."
  },
  {
   "id": "dca-j4-14",
   "q": "Quelle commande affiche les nœuds du swarm ?",
   "choices": [
    "A. docker swarm nodes",
    "B. docker node ls",
    "C. docker cluster ls",
    "D. docker nodes"
   ],
   "answer": 1,
   "exp": "À exécuter sur un manager."
  },
  {
   "id": "dca-j4-15",
   "q": "Comment retirer temporairement un nœud de la planification ?",
   "choices": [
    "A. docker node pause nœud",
    "B. docker node cordon nœud",
    "C. docker node update --availability drain nœud",
    "D. docker node remove nœud"
   ],
   "answer": 2,
   "exp": "Les tâches sont reprogrammées ailleurs."
  },
  {
   "id": "dca-j4-16",
   "q": "Comment promouvoir un worker en manager ?",
   "choices": [
    "A. docker node update --manager nœud",
    "B. docker swarm promote nœud",
    "C. docker node elevate nœud",
    "D. docker node promote nœud"
   ],
   "answer": 3,
   "exp": "Retour avec demote."
  },
  {
   "id": "dca-j4-17",
   "q": "Quel mécanisme contraint le placement d'un service ?",
   "choices": [
    "A. --constraint (ex. node.role==worker)",
    "B. --where",
    "C. --place",
    "D. --target"
   ],
   "answer": 0,
   "exp": "Supporte labels, hostname, etc."
  },
  {
   "id": "dca-j4-18",
   "q": "Quel flag répartit les tâches selon un label ?",
   "choices": [
    "A. --spread zone",
    "B. --placement-pref spread=node.labels.zone",
    "C. --balance zone",
    "D. --distribute zone"
   ],
   "answer": 1,
   "exp": "Évite d'avoir toutes les tâches dans une même zone."
  },
  {
   "id": "dca-j4-19",
   "q": "Quelle est la différence entre un service et une stack ?",
   "choices": [
    "A. Un service regroupe plusieurs stacks",
    "B. Ils sont identiques",
    "C. Une stack regroupe plusieurs services définis dans un fichier compose",
    "D. Une stack est un conteneur seul"
   ],
   "answer": 2,
   "exp": "docker stack deploy -c fichier.yml nom."
  },
  {
   "id": "dca-j4-20",
   "q": "Quelle commande déploie une stack ?",
   "choices": [
    "A. docker compose up -d",
    "B. docker swarm deploy app",
    "C. docker service stack app",
    "D. docker stack deploy -c docker-compose.yml app"
   ],
   "answer": 3,
   "exp": "Utilise la version de fichier compatible."
  },
  {
   "id": "dca-j4-21",
   "q": "Quel mot-clé compose est utilisé uniquement par Swarm ?",
   "choices": [
    "A. deploy",
    "B. build",
    "C. depends_on",
    "D. profiles"
   ],
   "answer": 0,
   "exp": "deploy définit replicas, resources, placement."
  },
  {
   "id": "dca-j4-22",
   "q": "Quelle clé compose ignore build lorsqu'on déploie une stack ?",
   "choices": [
    "A. image",
    "B. build n'est pas supporté par docker stack deploy",
    "C. ports",
    "D. volumes"
   ],
   "answer": 1,
   "exp": "Il faut pousser l'image avant."
  },
  {
   "id": "dca-j4-23",
   "q": "Quelle commande lance les services d'un fichier compose hors Swarm ?",
   "choices": [
    "A. docker stack up",
    "B. docker run -f compose.yml",
    "C. docker compose up -d",
    "D. docker compose start --swarm"
   ],
   "answer": 2,
   "exp": "-d pour l'arrière-plan."
  },
  {
   "id": "dca-j4-24",
   "q": "Quelle commande arrête et supprime conteneurs et réseaux d'un projet compose ?",
   "choices": [
    "A. docker compose stop",
    "B. docker compose rm --all",
    "C. docker compose clean",
    "D. docker compose down"
   ],
   "answer": 3,
   "exp": "--volumes supprime aussi les volumes."
  },
  {
   "id": "dca-j4-25",
   "q": "Quel fichier est lu par défaut par docker compose ?",
   "choices": [
    "A. compose.yaml ou docker-compose.yml",
    "B. stack.yaml",
    "C. services.yml",
    "D. docker.yml"
   ],
   "answer": 0,
   "exp": "compose.yaml est préféré."
  },
  {
   "id": "dca-j4-26",
   "q": "Comment définir une dépendance de démarrage dans compose ?",
   "choices": [
    "A. requires",
    "B. depends_on",
    "C. after",
    "D. needs"
   ],
   "answer": 1,
   "exp": "Avec condition: service_healthy pour attendre la santé."
  },
  {
   "id": "dca-j4-27",
   "q": "Comment utiliser des variables d'environnement depuis un fichier ?",
   "choices": [
    "A. vars_file",
    "B. environment_file uniquement",
    "C. env_file ou fichier .env",
    "D. import_env"
   ],
   "answer": 2,
   "exp": ".env est lu pour l'interpolation."
  },
  {
   "id": "dca-j4-28",
   "q": "Quelle commande valide un fichier compose et affiche la configuration résolue ?",
   "choices": [
    "A. docker compose validate",
    "B. docker compose check",
    "C. docker compose lint",
    "D. docker compose config"
   ],
   "answer": 3,
   "exp": "Utile pour déboguer."
  },
  {
   "id": "dca-j4-29",
   "q": "Comment définir plusieurs profils dans compose ?",
   "choices": [
    "A. profiles",
    "B. stages",
    "C. groups",
    "D. modes"
   ],
   "answer": 0,
   "exp": "--profile active un profil."
  },
  {
   "id": "dca-j4-30",
   "q": "Quel flag permet de combiner plusieurs fichiers compose ?",
   "choices": [
    "A. --merge",
    "B. -f fichier1.yml -f fichier2.yml",
    "C. --include",
    "D. --overlay"
   ],
   "answer": 1,
   "exp": "Les fichiers suivants écrasent les précédents."
  },
  {
   "id": "dca-j4-31",
   "q": "Comment limiter les ressources d'un service Swarm ?",
   "choices": [
    "A. resources.max",
    "B. limits.service",
    "C. deploy.resources.limits",
    "D. cpu_limit"
   ],
   "answer": 2,
   "exp": "reservations garantit un minimum."
  },
  {
   "id": "dca-j4-32",
   "q": "Quelle clé définit une politique de redémarrage pour Swarm ?",
   "choices": [
    "A. restart uniquement",
    "B. restart_swarm",
    "C. on_failure",
    "D. deploy.restart_policy"
   ],
   "answer": 3,
   "exp": "deploy.restart_policy.condition."
  },
  {
   "id": "dca-j4-33",
   "q": "Quelle clé définit un healthcheck dans compose ?",
   "choices": [
    "A. healthcheck",
    "B. probe",
    "C. health",
    "D. check"
   ],
   "answer": 0,
   "exp": "test, interval, timeout, retries."
  },
  {
   "id": "dca-j4-34",
   "q": "Que fait docker stack rm ?",
   "choices": [
    "A. Supprime les images",
    "B. Supprime tous les services de la stack",
    "C. Supprime les volumes",
    "D. Supprime le swarm"
   ],
   "answer": 1,
   "exp": "Les volumes ne sont pas supprimés."
  },
  {
   "id": "dca-j4-35",
   "q": "Quelle commande affiche les services d'une stack ?",
   "choices": [
    "A. docker stack ls nom",
    "B. docker service stack nom",
    "C. docker stack services nom",
    "D. docker stack show nom"
   ],
   "answer": 2,
   "exp": "stack ps pour les tâches."
  },
  {
   "id": "dca-j4-36",
   "q": "Qu'est-ce que le quorum perdu dans Swarm ?",
   "choices": [
    "A. Les workers sont indisponibles",
    "B. Le registry est indisponible",
    "C. Le DNS est indisponible",
    "D. La majorité des managers est indisponible : pas de modifications possibles"
   ],
   "answer": 3,
   "exp": "Les services existants continuent de tourner."
  },
  {
   "id": "dca-j4-37",
   "q": "Comment récupérer un cluster sans quorum ?",
   "choices": [
    "A. docker swarm init --force-new-cluster sur un manager restant",
    "B. Redémarrer les workers",
    "C. Supprimer les services",
    "D. Réinstaller Docker partout"
   ],
   "answer": 0,
   "exp": "Crée un cluster à un seul manager à partir des données."
  },
  {
   "id": "dca-j4-38",
   "q": "Quelle commande permet à un nœud de quitter le swarm ?",
   "choices": [
    "A. docker node exit",
    "B. docker swarm leave",
    "C. docker swarm quit",
    "D. docker node leave"
   ],
   "answer": 1,
   "exp": "--force pour un manager."
  },
  {
   "id": "dca-j4-39",
   "q": "Que fait docker node rm ?",
   "choices": [
    "A. Supprime Docker du nœud",
    "B. Efface les volumes",
    "C. Retire un nœud arrêté de la liste du swarm",
    "D. Redémarre le nœud"
   ],
   "answer": 2,
   "exp": "Le nœud doit être down."
  },
  {
   "id": "dca-j4-40",
   "q": "Comment verrouiller un swarm pour protéger les clés ?",
   "choices": [
    "A. docker swarm lock",
    "B. docker swarm secure",
    "C. docker swarm encrypt",
    "D. docker swarm update --autolock=true"
   ],
   "answer": 3,
   "exp": "Fournit une clé de déverrouillage."
  },
  {
   "id": "dca-j4-41",
   "q": "Quelle commande affiche la clé de déverrouillage ?",
   "choices": [
    "A. docker swarm unlock-key",
    "B. docker swarm key",
    "C. docker secret key",
    "D. docker swarm show-key"
   ],
   "answer": 0,
   "exp": "Il faut la conserver en lieu sûr."
  },
  {
   "id": "dca-j4-42",
   "q": "Quelle commande déverrouille un manager après redémarrage ?",
   "choices": [
    "A. docker swarm open",
    "B. docker swarm unlock",
    "C. docker node unlock",
    "D. docker swarm resume"
   ],
   "answer": 1,
   "exp": "Demande la clé."
  },
  {
   "id": "dca-j4-43",
   "q": "Quel est le comportement par défaut en cas d'échec d'une mise à jour de service ?",
   "choices": [
    "A. Rollback automatique",
    "B. Continue",
    "C. Pause",
    "D. Suppression du service"
   ],
   "answer": 2,
   "exp": "--update-failure-action permet de changer."
  },
  {
   "id": "dca-j4-44",
   "q": "Quelle option indique qu'un service attend un certain temps entre les lots de mise à jour ?",
   "choices": [
    "A. --update-wait",
    "B. --rolling-delay",
    "C. --update-pause",
    "D. --update-delay"
   ],
   "answer": 3,
   "exp": "Format 10s, 1m."
  },
  {
   "id": "dca-j4-45",
   "q": "Quel est le rôle de Docker Trusted Registry/Mirantis Secure Registry ?",
   "choices": [
    "A. Registry d'entreprise avec contrôle d'accès et scan",
    "B. Orchestrateur",
    "C. Plugin réseau",
    "D. Moteur de build"
   ],
   "answer": 0,
   "exp": "Composant de la plateforme Mirantis."
  },
  {
   "id": "dca-j4-46",
   "q": "Quel est le rôle d'UCP (Universal Control Plane) ?",
   "choices": [
    "A. Registry",
    "B. Interface et API de gestion de clusters Swarm et Kubernetes",
    "C. Moteur de logs",
    "D. Plugin de stockage"
   ],
   "answer": 1,
   "exp": "Fait partie de Mirantis Kubernetes Engine."
  },
  {
   "id": "dca-j4-47",
   "q": "Quelle commande affiche les événements Docker en temps réel ?",
   "choices": [
    "A. docker logs --events",
    "B. docker monitor",
    "C. docker events",
    "D. docker watch"
   ],
   "answer": 2,
   "exp": "Filtrable avec --filter."
  },
  {
   "id": "dca-j4-48",
   "q": "Comment obtenir l'état de santé d'un conteneur ?",
   "choices": [
    "A. docker health conteneur",
    "B. docker ps --health-only",
    "C. docker stats --health",
    "D. docker inspect --format '{{.State.Health.Status}}' conteneur"
   ],
   "answer": 3,
   "exp": "Valeurs : starting, healthy, unhealthy."
  },
  {
   "id": "dca-j4-49",
   "q": "Quelle commande attache le terminal au processus principal d'un conteneur ?",
   "choices": [
    "A. docker attach",
    "B. docker connect",
    "C. docker enter",
    "D. docker shell"
   ],
   "answer": 0,
   "exp": "exec ouvre un nouveau processus."
  },
  {
   "id": "dca-j4-50",
   "q": "Quelle commande ouvre un shell dans un conteneur en cours d'exécution ?",
   "choices": [
    "A. docker run -it conteneur sh",
    "B. docker exec -it conteneur sh",
    "C. docker attach --shell conteneur",
    "D. docker ssh conteneur"
   ],
   "answer": 1,
   "exp": "exec ajoute un processus dans le conteneur existant."
  }
 ],
 "5": [
  {
   "id": "dca-j5-1",
   "q": "Quelle commande lance un conteneur nginx en arrière-plan publié sur le port 8080 ?",
   "choices": [
    "A. docker run -p 80:8080 nginx --detach-all",
    "B. docker run -d -p 8080:80 nginx",
    "C. docker start -d nginx 8080",
    "D. docker run -P 8080 nginx"
   ],
   "answer": 1,
   "exp": "-d détache ; -p hôte:conteneur."
  },
  {
   "id": "dca-j5-2",
   "q": "Quelle commande liste tous les conteneurs, y compris arrêtés ?",
   "choices": [
    "A. docker ps",
    "B. docker container list --stopped",
    "C. docker ps -a",
    "D. docker ls -all"
   ],
   "answer": 2,
   "exp": "-a inclut les conteneurs arrêtés."
  },
  {
   "id": "dca-j5-3",
   "q": "Quelle commande arrête proprement un conteneur ?",
   "choices": [
    "A. docker kill",
    "B. docker rm",
    "C. docker pause",
    "D. docker stop"
   ],
   "answer": 3,
   "exp": "stop envoie SIGTERM puis SIGKILL après le délai."
  },
  {
   "id": "dca-j5-4",
   "q": "Quelle est la différence entre docker stop et docker kill ?",
   "choices": [
    "A. stop envoie SIGTERM puis SIGKILL ; kill envoie SIGKILL par défaut",
    "B. Aucune",
    "C. kill est plus doux",
    "D. stop supprime le conteneur"
   ],
   "answer": 0,
   "exp": "kill accepte -s pour choisir le signal."
  },
  {
   "id": "dca-j5-5",
   "q": "Quelle commande supprime un conteneur arrêté ?",
   "choices": [
    "A. docker delete",
    "B. docker rm",
    "C. docker destroy",
    "D. docker remove-all"
   ],
   "answer": 1,
   "exp": "-f force la suppression d'un conteneur en cours."
  },
  {
   "id": "dca-j5-6",
   "q": "Quel flag supprime automatiquement le conteneur à son arrêt ?",
   "choices": [
    "A. --auto-delete",
    "B. --once",
    "C. --rm",
    "D. --ephemeral"
   ],
   "answer": 2,
   "exp": "Utile pour les tâches ponctuelles."
  },
  {
   "id": "dca-j5-7",
   "q": "Comment passer une variable d'environnement à un conteneur ?",
   "choices": [
    "A. --var CLE=valeur",
    "B. -v CLE=valeur",
    "C. --set CLE=valeur",
    "D. -e CLE=valeur"
   ],
   "answer": 3,
   "exp": "--env-file charge un fichier."
  },
  {
   "id": "dca-j5-8",
   "q": "Quelle commande affiche l'utilisation des ressources en direct ?",
   "choices": [
    "A. docker stats",
    "B. docker top",
    "C. docker usage",
    "D. docker ps --stats"
   ],
   "answer": 0,
   "exp": "CPU, mémoire, réseau et I/O."
  },
  {
   "id": "dca-j5-9",
   "q": "Quelle commande suspend les processus d'un conteneur ?",
   "choices": [
    "A. docker stop",
    "B. docker pause",
    "C. docker freeze",
    "D. docker suspend"
   ],
   "answer": 1,
   "exp": "Utilise les cgroups freezer."
  },
  {
   "id": "dca-j5-10",
   "q": "Quel code de sortie indique qu'un conteneur a été tué par SIGKILL ?",
   "choices": [
    "A. 0",
    "B. 1",
    "C. 137",
    "D. 143"
   ],
   "answer": 2,
   "exp": "143 correspond à SIGTERM."
  },
  {
   "id": "dca-j5-11",
   "q": "Quel état est atteint par un conteneur dont le processus principal se termine ?",
   "choices": [
    "A. Paused",
    "B. Created",
    "C. Dead uniquement",
    "D. Exited"
   ],
   "answer": 3,
   "exp": "Un conteneur vit tant que son processus principal tourne."
  },
  {
   "id": "dca-j5-12",
   "q": "Pourquoi un conteneur nginx lancé en mode daemon off est-il utile ?",
   "choices": [
    "A. Le processus reste au premier plan, ce qui garde le conteneur actif",
    "B. Il accélère nginx",
    "C. Il désactive les logs",
    "D. Il active TLS"
   ],
   "answer": 0,
   "exp": "Un conteneur s'arrête si le processus principal passe en arrière-plan."
  },
  {
   "id": "dca-j5-13",
   "q": "Comment voir les logs en continu ?",
   "choices": [
    "A. docker logs --watch",
    "B. docker logs -f",
    "C. docker tail",
    "D. docker logs --stream-all"
   ],
   "answer": 1,
   "exp": "--tail limite le nombre de lignes."
  },
  {
   "id": "dca-j5-14",
   "q": "Quelle commande liste les images avec leurs digests ?",
   "choices": [
    "A. docker image digest",
    "B. docker inspect digests",
    "C. docker images --digests",
    "D. docker ls --sha"
   ],
   "answer": 2,
   "exp": "Affiche la colonne DIGEST."
  },
  {
   "id": "dca-j5-15",
   "q": "Quelle commande supprime une image ?",
   "choices": [
    "A. docker rm image",
    "B. docker image kill image",
    "C. docker delete image",
    "D. docker rmi image"
   ],
   "answer": 3,
   "exp": "L'image ne doit pas être utilisée."
  },
  {
   "id": "dca-j5-16",
   "q": "Quel est le rôle de docker context ?",
   "choices": [
    "A. Gérer plusieurs endpoints Docker (hôtes distants)",
    "B. Gérer les contextes de build",
    "C. Gérer les namespaces",
    "D. Gérer les volumes"
   ],
   "answer": 0,
   "exp": "docker context use change la cible."
  },
  {
   "id": "dca-j5-17",
   "q": "Quelle variable permet de cibler un daemon distant ?",
   "choices": [
    "A. DOCKER_REMOTE",
    "B. DOCKER_HOST",
    "C. DOCKER_URL",
    "D. DOCKER_TARGET"
   ],
   "answer": 1,
   "exp": "Ex. ssh://utilisateur@hôte."
  },
  {
   "id": "dca-j5-18",
   "q": "Quelle commande affiche la configuration du daemon et ses ressources ?",
   "choices": [
    "A. docker daemon status",
    "B. docker system config",
    "C. docker info",
    "D. docker version --all"
   ],
   "answer": 2,
   "exp": "Inclut le storage driver, les plugins et Swarm."
  },
  {
   "id": "dca-j5-19",
   "q": "Quelle commande affiche les versions du client et du serveur ?",
   "choices": [
    "A. docker --about",
    "B. docker info --version",
    "C. docker status",
    "D. docker version"
   ],
   "answer": 3,
   "exp": "Les deux sections client/serveur."
  },
  {
   "id": "dca-j5-20",
   "q": "Quelle instruction Dockerfile est la plus appropriée pour installer des paquets de façon optimisée ?",
   "choices": [
    "A. Combiner les commandes dans un seul RUN et nettoyer le cache",
    "B. Un RUN par paquet",
    "C. Un ADD par paquet",
    "D. Utiliser COPY"
   ],
   "answer": 0,
   "exp": "Réduit le nombre de couches et leur taille."
  },
  {
   "id": "dca-j5-21",
   "q": "Que fait l'image multi-architecture (manifest list) ?",
   "choices": [
    "A. Compresse l'image",
    "B. Permet d'utiliser un même tag pour plusieurs plateformes",
    "C. Chiffre l'image",
    "D. Supprime les couches"
   ],
   "answer": 1,
   "exp": "Le client choisit la variante adaptée."
  },
  {
   "id": "dca-j5-22",
   "q": "Quelle commande inspecte le manifest d'une image distante ?",
   "choices": [
    "A. docker image remote inspect",
    "B. docker pull --manifest",
    "C. docker manifest inspect",
    "D. docker inspect --remote"
   ],
   "answer": 2,
   "exp": "Parfois nécessite le mode expérimental."
  },
  {
   "id": "dca-j5-23",
   "q": "Quelle est la différence entre ENTRYPOINT en forme shell et en forme exec ?",
   "choices": [
    "A. Aucune",
    "B. La forme exec lance via sh",
    "C. La forme shell est plus rapide",
    "D. La forme shell lance via /bin/sh -c et ne transmet pas bien les signaux"
   ],
   "answer": 3,
   "exp": "Utiliser la forme exec pour gérer SIGTERM."
  },
  {
   "id": "dca-j5-24",
   "q": "Que fait docker run --init ?",
   "choices": [
    "A. Ajoute un processus init (tini) pour gérer les zombies et les signaux",
    "B. Initialise un swarm",
    "C. Initialise le réseau",
    "D. Initialise un volume"
   ],
   "answer": 0,
   "exp": "Utile pour des applications qui ne gèrent pas PID 1."
  },
  {
   "id": "dca-j5-25",
   "q": "Pourquoi PID 1 est-il particulier dans un conteneur ?",
   "choices": [
    "A. Il est toujours root",
    "B. Il reçoit les signaux et doit réaper les processus zombies",
    "C. Il est immuable",
    "D. Il est réservé au daemon"
   ],
   "answer": 1,
   "exp": "Les applications ne gèrent pas toujours ce rôle."
  },
  {
   "id": "dca-j5-26",
   "q": "Que contient un contexte de build ?",
   "choices": [
    "A. Seulement le Dockerfile",
    "B. Seulement les images",
    "C. Les fichiers envoyés au daemon pour le build",
    "D. Les volumes"
   ],
   "answer": 2,
   "exp": "Un contexte volumineux ralentit le build."
  },
  {
   "id": "dca-j5-27",
   "q": "Comment construire à partir d'un Dockerfile nommé autrement ?",
   "choices": [
    "A. docker build --file-name MonDockerfile",
    "B. docker build -d MonDockerfile",
    "C. docker build --source MonDockerfile",
    "D. docker build -f MonDockerfile ."
   ],
   "answer": 3,
   "exp": "-f précise le fichier."
  },
  {
   "id": "dca-j5-28",
   "q": "Comment définir un argument de build ?",
   "choices": [
    "A. docker build --build-arg VERSION=1.0 .",
    "B. docker build -e VERSION=1.0 .",
    "C. docker build --env VERSION=1.0 .",
    "D. docker build --var VERSION=1.0 ."
   ],
   "answer": 0,
   "exp": "Il faut déclarer ARG dans le Dockerfile."
  },
  {
   "id": "dca-j5-29",
   "q": "Quelle différence existe entre docker run et docker create ?",
   "choices": [
    "A. create le démarre aussi",
    "B. create prépare le conteneur sans le démarrer",
    "C. run ne crée rien",
    "D. Aucune"
   ],
   "answer": 1,
   "exp": "docker start le démarre ensuite."
  },
  {
   "id": "dca-j5-30",
   "q": "Quelle commande renomme un conteneur ?",
   "choices": [
    "A. docker name",
    "B. docker container mv",
    "C. docker rename",
    "D. docker tag"
   ],
   "answer": 2,
   "exp": "Fonctionne même en cours d'exécution."
  },
  {
   "id": "dca-j5-31",
   "q": "Que signifie l'option -it ?",
   "choices": [
    "A. Image temporaire",
    "B. Isolation totale",
    "C. Intégration continue",
    "D. Interactif avec pseudo-TTY"
   ],
   "answer": 3,
   "exp": "-i garde stdin ; -t alloue un TTY."
  },
  {
   "id": "dca-j5-32",
   "q": "Comment limiter le nombre de redémarrages d'un conteneur en cas d'échec ?",
   "choices": [
    "A. --restart on-failure:3",
    "B. --max-restarts 3",
    "C. --restart-limit 3",
    "D. --retries 3"
   ],
   "answer": 0,
   "exp": "Format on-failure:N."
  },
  {
   "id": "dca-j5-33",
   "q": "Quelle commande liste les plugins installés ?",
   "choices": [
    "A. docker plugins",
    "B. docker plugin ls",
    "C. docker ls plugin",
    "D. docker info --plugins"
   ],
   "answer": 1,
   "exp": "Installer avec docker plugin install."
  },
  {
   "id": "dca-j5-34",
   "q": "Quel format de sortie permet d'extraire une valeur d'inspect ?",
   "choices": [
    "A. --jsonpath",
    "B. --query",
    "C. --format avec un template Go",
    "D. --select"
   ],
   "answer": 2,
   "exp": "Ex. --format '{{.State.Status}}'."
  },
  {
   "id": "dca-j5-35",
   "q": "Quelle commande affiche les modifications du système de fichiers d'un conteneur ?",
   "choices": [
    "A. docker changes",
    "B. docker history conteneur",
    "C. docker inspect --fs",
    "D. docker diff"
   ],
   "answer": 3,
   "exp": "A = ajouté, C = modifié, D = supprimé."
  },
  {
   "id": "dca-j5-36",
   "q": "Quel est l'effet de docker run --memory-swap -1 ?",
   "choices": [
    "A. Swap illimité",
    "B. Swap désactivé",
    "C. Mémoire illimitée",
    "D. Erreur"
   ],
   "answer": 0,
   "exp": "Combiné avec --memory."
  },
  {
   "id": "dca-j5-37",
   "q": "Quelle commande vérifie le résumé de sécurité d'une image avec Docker Scout ?",
   "choices": [
    "A. docker image secure",
    "B. docker scout quickview",
    "C. docker scan quick",
    "D. docker verify"
   ],
   "answer": 1,
   "exp": "Fournit un aperçu des vulnérabilités."
  },
  {
   "id": "dca-j5-38",
   "q": "Qu'est-ce que le daemon dockerd ?",
   "choices": [
    "A. Le client CLI",
    "B. Un registry",
    "C. Le service qui gère images, conteneurs, réseaux et volumes",
    "D. Un orchestrateur"
   ],
   "answer": 2,
   "exp": "Le CLI communique avec lui via l'API REST."
  },
  {
   "id": "dca-j5-39",
   "q": "Quel composant exécute réellement les conteneurs sous dockerd ?",
   "choices": [
    "A. kubelet",
    "B. systemd uniquement",
    "C. CRI-O",
    "D. containerd puis runc"
   ],
   "answer": 3,
   "exp": "runc implémente la spécification OCI."
  },
  {
   "id": "dca-j5-40",
   "q": "Quel socket par défaut utilise le client Docker sous Linux ?",
   "choices": [
    "A. /var/run/docker.sock",
    "B. /tmp/docker.sock",
    "C. /etc/docker.sock",
    "D. /run/containerd/docker.sock"
   ],
   "answer": 0,
   "exp": "Peut être monté dans un conteneur, au risque de sécurité."
  },
  {
   "id": "dca-j5-41",
   "q": "Pourquoi monter /var/run/docker.sock dans un conteneur est-il risqué ?",
   "choices": [
    "A. Cela ralentit le conteneur",
    "B. Cela donne un contrôle quasi root sur l'hôte",
    "C. Cela désactive les logs",
    "D. Cela bloque le réseau"
   ],
   "answer": 1,
   "exp": "Le conteneur peut piloter le daemon."
  },
  {
   "id": "dca-j5-42",
   "q": "Quel est le rôle des cgroups dans Docker ?",
   "choices": [
    "A. Isoler le réseau",
    "B. Isoler les fichiers",
    "C. Limiter et comptabiliser les ressources des conteneurs",
    "D. Chiffrer"
   ],
   "answer": 2,
   "exp": "Les namespaces fournissent l'isolation."
  },
  {
   "id": "dca-j5-43",
   "q": "Quel est le rôle des namespaces Linux dans Docker ?",
   "choices": [
    "A. Limiter la mémoire",
    "B. Stocker les images",
    "C. Gérer les registries",
    "D. Isoler les processus, le réseau, les montages, etc."
   ],
   "answer": 3,
   "exp": "pid, net, mnt, uts, ipc, user."
  },
  {
   "id": "dca-j5-44",
   "q": "Quelle option active le user namespace remapping ?",
   "choices": [
    "A. userns-remap dans daemon.json",
    "B. --user-remap",
    "C. --root-map",
    "D. --no-root-ns"
   ],
   "answer": 0,
   "exp": "Mappe root du conteneur vers un UID non privilégié de l'hôte."
  },
  {
   "id": "dca-j5-45",
   "q": "Quel est l'intérêt de docker compose watch ?",
   "choices": [
    "A. Surveiller le réseau",
    "B. Resynchroniser ou reconstruire automatiquement lors de changements de fichiers",
    "C. Surveiller les registries",
    "D. Chiffrer les volumes"
   ],
   "answer": 1,
   "exp": "Accélère le développement."
  },
  {
   "id": "dca-j5-46",
   "q": "Quel est l'effet de docker compose up --build ?",
   "choices": [
    "A. Supprime les images",
    "B. Met à jour le registry",
    "C. Reconstruit les images avant de démarrer",
    "D. Arrête les services"
   ],
   "answer": 2,
   "exp": "Utile après modification du Dockerfile."
  },
  {
   "id": "dca-j5-47",
   "q": "Quelle commande affiche les logs d'un service compose ?",
   "choices": [
    "A. docker logs compose service",
    "B. docker compose show service",
    "C. docker service logs --compose",
    "D. docker compose logs service"
   ],
   "answer": 3,
   "exp": "-f pour suivre."
  },
  {
   "id": "dca-j5-48",
   "q": "Que fait docker compose exec ?",
   "choices": [
    "A. Exécute une commande dans un conteneur de service en cours",
    "B. Crée un nouveau service",
    "C. Redémarre le projet",
    "D. Construit l'image"
   ],
   "answer": 0,
   "exp": "Équivalent de docker exec ciblant un service."
  },
  {
   "id": "dca-j5-49",
   "q": "Quel est le comportement de docker compose down sans options ?",
   "choices": [
    "A. Supprime aussi les volumes nommés",
    "B. Supprime conteneurs et réseaux, mais conserve les volumes nommés",
    "C. Supprime les images",
    "D. Supprime le fichier compose"
   ],
   "answer": 1,
   "exp": "--volumes pour supprimer aussi les volumes."
  },
  {
   "id": "dca-j5-50",
   "q": "Quelle est la meilleure pratique pour les secrets en développement avec compose ?",
   "choices": [
    "A. Les mettre dans l'image",
    "B. Les mettre dans le Dockerfile",
    "C. Utiliser la section secrets avec des fichiers locaux",
    "D. Les stocker dans le README"
   ],
   "answer": 2,
   "exp": "Les secrets sont montés comme fichiers."
  }
 ]
};
