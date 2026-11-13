// Questions Terraform Associate — socle (questions à enrichir)
// Format: window.QDATA[jour] = [{t, q, o, a, e}, ...]

window.QKEY = "terraform-assoc-004";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META = {
  title: "Terraform Associate",
  code: "003/004",
  exam: "HashiCorp Certified: Terraform Associate",
  passScore: 70,
  examMins: 60,
  fiche: null,
  rules: [
    ["57 q · 60 min", ""],
    ["~70 %", "score de réussite"],
    ["0 pénalité", "ne jamais laisser vide"],
    ["IaC · State · Modules", "8 domaines"]
  ],
  totalQ: 250
};

// ── Plan de révision 5 jours ────────────────────────────────────────────────
window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "Infrastructure as Code & workflow Terraform",
    dom: ["D1 · IaC concepts", "D2 · Terraform purpose"],
    time: "≈ 1 h lecture + 45 min quiz",
    sections: [
      { id: "s1", titre: "🏗 Concepts IaC" },
      { id: "s2", titre: "⚡ Workflow Terraform (init · plan · apply)" }
    ],
    read: [
      "Terraform docs : What is IaC",
      "Terraform docs : Core workflow"
    ],
    links: [
      ["Terraform IaC overview", "https://developer.hashicorp.com/terraform/intro"],
      ["Core workflow", "https://developer.hashicorp.com/terraform/intro/core-workflow"]
    ],
    focus: [
      "IaC déclaratif vs impératif",
      "terraform init / plan / apply / destroy",
      "Avantages : idempotence, versioning, collaboration"
    ]
  },
  {
    d: 2,
    theme: "Langage HCL — providers, resources, variables",
    dom: ["D3 · HCL basics", "D4 · Terraform CLI"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s3", titre: "📝 HCL : blocks, arguments, expressions" },
      { id: "s4", titre: "🔌 Providers & resources" },
      { id: "s5", titre: "📊 Variables, outputs, locals" }
    ],
    read: [
      "Terraform docs : HCL language",
      "Terraform docs : Providers",
      "Terraform docs : Input variables"
    ],
    links: [
      ["HCL language", "https://developer.hashicorp.com/terraform/language"],
      ["Providers", "https://developer.hashicorp.com/terraform/language/providers"],
      ["Variables", "https://developer.hashicorp.com/terraform/language/values/variables"]
    ],
    focus: [
      "resource / data / variable / output / locals blocks",
      "terraform.tfvars vs .auto.tfvars vs env vars",
      "depends_on, lifecycle, meta-arguments"
    ]
  },
  {
    d: 3,
    theme: "State Terraform — gestion et backends",
    dom: ["D5 · Terraform modules", "D6 · Terraform state"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s6", titre: "💾 State : purpose & remote backends" },
      { id: "s7", titre: "🔒 State locking & workspaces" }
    ],
    read: [
      "Terraform docs : State",
      "Terraform docs : Backends",
      "Terraform docs : Workspaces"
    ],
    links: [
      ["State overview", "https://developer.hashicorp.com/terraform/language/state"],
      ["Remote backends", "https://developer.hashicorp.com/terraform/language/settings/backends"],
      ["Workspaces", "https://developer.hashicorp.com/terraform/language/state/workspaces"]
    ],
    focus: [
      "terraform.tfstate — rôle et risques de le versionner",
      "Backend S3 + DynamoDB locking",
      "terraform state mv / rm / pull / push"
    ]
  },
  {
    d: 4,
    theme: "Modules, registry et bonnes pratiques",
    dom: ["D5 · Modules", "D7 · Terraform Cloud"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s8", titre: "📦 Modules : source, versioning, outputs" },
      { id: "s9", titre: "🌐 Terraform Registry & HCP Terraform" }
    ],
    read: [
      "Terraform docs : Modules",
      "Terraform docs : Module sources",
      "HCP Terraform overview"
    ],
    links: [
      ["Modules overview", "https://developer.hashicorp.com/terraform/language/modules"],
      ["Module sources", "https://developer.hashicorp.com/terraform/language/modules/sources"],
      ["HCP Terraform", "https://developer.hashicorp.com/terraform/cloud-docs"]
    ],
    focus: [
      "source = \"registry/module\" vs chemin local",
      "version contraints : ~>, >=, =",
      "HCP Terraform : remote runs, sentinel policies"
    ]
  },
  {
    d: 5,
    theme: "Révision générale & examen blanc",
    dom: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    time: "60 min chrono + 30 min révision",
    sections: [
      { id: "s10", titre: "⚠️ Pièges classiques" },
      { id: "s11", titre: "🔑 Commandes à connaître" }
    ],
    read: [
      "Révision : tous les blocs HCL",
      "Révision : workflow state"
    ],
    links: [
      ["Exam review guide", "https://developer.hashicorp.com/certifications/infrastructure-automation/terraform-associate-003"],
      ["Study guide", "https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003"]
    ],
    focus: [
      "terraform fmt / validate / taint / import",
      "count vs for_each — quand utiliser quoi",
      "sensitive = true dans les variables et outputs"
    ],
    extra: "Fais un test blanc sur Udemy (Zeal Vora) ou freeCodeCamp pour mesurer ton niveau."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// À enrichir — format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {
 "1": [
  {
   "id": "tf-assoc-j1-1",
   "q": "Quel est le principal avantage d'une approche déclarative comme celle de Terraform par rapport à un script impératif ?",
   "choices": [
    "A. On décrit chaque commande à exécuter dans l'ordre exact, ce qui garantit un résultat identique à chaque exécution",
    "B. On décrit l'état final souhaité et Terraform calcule les actions nécessaires pour y parvenir",
    "C. On peut exécuter le code sans fournisseur ni état, car Terraform déduit seul les ressources existantes",
    "D. On évite tout fichier d'état, car la déclaration suffit à retrouver les ressources déjà créées"
   ],
   "answer": 1,
   "exp": "En déclaratif, on exprime le résultat voulu ; Terraform compare avec l'état réel et détermine le plan d'actions. L'impératif décrit les étapes."
  },
  {
   "id": "tf-assoc-j1-2",
   "q": "Quelle commande initialise un répertoire de travail Terraform et télécharge les providers requis ?",
   "choices": [
    "A. terraform plan -refresh-only",
    "B. terraform get -update-providers",
    "C. terraform init",
    "D. terraform providers install"
   ],
   "answer": 2,
   "exp": "terraform init configure le backend, télécharge les providers et les modules référencés dans la configuration."
  },
  {
   "id": "tf-assoc-j1-3",
   "q": "Que fait la commande terraform plan ?",
   "choices": [
    "A. Elle applique immédiatement les changements après une confirmation et met à jour le fichier d'état",
    "B. Elle valide uniquement la syntaxe des fichiers de configuration sans consulter l'état ni les providers",
    "C. Elle détruit les ressources absentes de la configuration puis crée les nouvelles ressources déclarées",
    "D. Elle compare la configuration à l'état et affiche les modifications prévues sans les appliquer"
   ],
   "answer": 3,
   "exp": "plan crée un plan d'exécution : ce qui sera créé, modifié ou détruit, sans modifier l'infrastructure."
  },
  {
   "id": "tf-assoc-j1-4",
   "q": "Quelle commande applique les changements d'un plan à l'infrastructure ?",
   "choices": [
    "A. terraform apply",
    "B. terraform deploy",
    "C. terraform execute",
    "D. terraform provision"
   ],
   "answer": 0,
   "exp": "terraform apply exécute le plan (demande une confirmation sauf avec -auto-approve)."
  },
  {
   "id": "tf-assoc-j1-5",
   "q": "Quelle option évite la demande de confirmation interactive de terraform apply ?",
   "choices": [
    "A. -force-yes",
    "B. -auto-approve",
    "C. -no-input=false",
    "D. -confirm=false"
   ],
   "answer": 1,
   "exp": "-auto-approve saute l'approbation interactive ; à utiliser avec prudence."
  },
  {
   "id": "tf-assoc-j1-6",
   "q": "Que fait terraform destroy ?",
   "choices": [
    "A. Il supprime uniquement le fichier d'état local sans toucher aux ressources existantes chez le fournisseur",
    "B. Il supprime les fichiers de configuration .tf du répertoire de travail après confirmation",
    "C. Il supprime toutes les ressources gérées par la configuration et l'état courant",
    "D. Il supprime les providers téléchargés dans le dossier .terraform sans toucher à l'infrastructure"
   ],
   "answer": 2,
   "exp": "destroy supprime l'infrastructure gérée ; équivalent à apply -destroy."
  },
  {
   "id": "tf-assoc-j1-7",
   "q": "Quel fichier Terraform enregistre le mapping entre la configuration et les ressources réelles ?",
   "choices": [
    "A. terraform.tfvars",
    "B. main.tf.lock",
    "C. providers.lock.hcl",
    "D. terraform.tfstate"
   ],
   "answer": 3,
   "exp": "Le fichier d'état (state) lie les ressources déclarées aux objets réels et stocke leurs attributs."
  },
  {
   "id": "tf-assoc-j1-8",
   "q": "Quel est le rôle du fichier .terraform.lock.hcl ?",
   "choices": [
    "A. Enregistrer les versions exactes des providers sélectionnées pour obtenir des installations reproductibles",
    "B. Verrouiller le fichier d'état pendant un apply pour empêcher les exécutions concurrentes",
    "C. Stocker les variables sensibles chiffrées utilisées par la configuration du répertoire",
    "D. Empêcher la modification des fichiers .tf par les membres de l'équipe sans autorisation"
   ],
   "answer": 0,
   "exp": "Le lock file fixe les versions de providers (et leurs checksums) ; il se versionne dans Git."
  },
  {
   "id": "tf-assoc-j1-9",
   "q": "Quelle commande vérifie la validité syntaxique d'une configuration sans accéder aux API distantes ?",
   "choices": [
    "A. terraform plan -syntax",
    "B. terraform validate",
    "C. terraform check",
    "D. terraform lint"
   ],
   "answer": 1,
   "exp": "validate vérifie la cohérence interne de la configuration, sans consulter l'état distant ni les API."
  },
  {
   "id": "tf-assoc-j1-10",
   "q": "Quelle commande reformate les fichiers de configuration selon le style canonique ?",
   "choices": [
    "A. terraform style",
    "B. terraform format -write",
    "C. terraform fmt",
    "D. terraform lint -fix"
   ],
   "answer": 2,
   "exp": "terraform fmt réécrit les fichiers .tf avec le style standard (indentation, alignement)."
  },
  {
   "id": "tf-assoc-j1-11",
   "q": "Quel est le langage de configuration de Terraform ?",
   "choices": [
    "A. YAML avec extensions Terraform",
    "B. JSON uniquement",
    "C. Python avec une bibliothèque dédiée",
    "D. HCL (HashiCorp Configuration Language)"
   ],
   "answer": 3,
   "exp": "Terraform utilise HCL ; le JSON est aussi accepté (fichiers .tf.json) mais HCL est le format principal."
  },
  {
   "id": "tf-assoc-j1-12",
   "q": "Qu'est-ce que l'Infrastructure as Code ?",
   "choices": [
    "A. Gérer et provisionner l'infrastructure via des fichiers de définition versionnés plutôt que par des actions manuelles",
    "B. Écrire des applications qui s'exécutent uniquement sur des serveurs virtualisés dans le cloud public",
    "C. Utiliser exclusivement des consoles web pour configurer des ressources de façon reproductible",
    "D. Remplacer les systèmes de supervision par des scripts de déploiement exécutés chaque nuit"
   ],
   "answer": 0,
   "exp": "L'IaC décrit l'infrastructure dans du code versionnable, testable et réutilisable."
  },
  {
   "id": "tf-assoc-j1-13",
   "q": "Quel avantage l'IaC apporte-t-elle pour la collaboration ?",
   "choices": [
    "A. Elle supprime le besoin de revue de code, car Terraform valide automatiquement la conception",
    "B. La configuration peut être versionnée, relue et partagée via un système de contrôle de version",
    "C. Elle permet de modifier directement les ressources en production sans aucune trace d'historique",
    "D. Elle impose un seul auteur par configuration afin d'éviter les conflits de fusion"
   ],
   "answer": 1,
   "exp": "Le code d'infrastructure peut être géré dans Git (revues, historique, rollback)."
  },
  {
   "id": "tf-assoc-j1-14",
   "q": "Qu'est-ce qu'un provider Terraform ?",
   "choices": [
    "A. Un fichier qui contient les variables d'environnement utilisées par toutes les ressources",
    "B. Un module réutilisable stocké dans le registry public et appelé avec un bloc module",
    "C. Un plugin qui permet à Terraform d'interagir avec les API d'une plateforme ou d'un service",
    "D. Un service hébergé qui exécute les plans à la place de la machine de l'utilisateur"
   ],
   "answer": 2,
   "exp": "Les providers (AWS, Azure, Kubernetes, etc.) exposent les ressources et data sources d'une API."
  },
  {
   "id": "tf-assoc-j1-15",
   "q": "Quel bloc déclare un provider requis et sa version dans la configuration ?",
   "choices": [
    "A. provider_version dans le bloc resource",
    "B. providers dans le bloc variable",
    "C. versions dans le bloc locals",
    "D. required_providers dans le bloc terraform"
   ],
   "answer": 3,
   "exp": "terraform { required_providers { aws = { source = ..., version = ... } } } fixe source et contrainte de version."
  },
  {
   "id": "tf-assoc-j1-16",
   "q": "Que signifie la contrainte de version ~> 5.1 ?",
   "choices": [
    "A. Toute version >= 5.1 et < 6.0",
    "B. Exactement la version 5.1 uniquement",
    "C. Toute version supérieure à 5.1 sans limite haute",
    "D. Toute version inférieure ou égale à 5.1"
   ],
   "answer": 0,
   "exp": "L'opérateur ~> (pessimistic) autorise l'incrément du dernier chiffre indiqué : ~> 5.1 couvre >= 5.1, < 6.0."
  },
  {
   "id": "tf-assoc-j1-17",
   "q": "Quelle commande affiche l'état actuel géré par Terraform sous forme lisible ?",
   "choices": [
    "A. terraform state dump",
    "B. terraform show",
    "C. terraform output -state",
    "D. terraform status"
   ],
   "answer": 1,
   "exp": "terraform show affiche l'état (ou un plan sauvegardé) dans un format lisible."
  },
  {
   "id": "tf-assoc-j1-18",
   "q": "Quelle commande liste les ressources présentes dans l'état ?",
   "choices": [
    "A. terraform list resources",
    "B. terraform show -list",
    "C. terraform state list",
    "D. terraform state ls --all"
   ],
   "answer": 2,
   "exp": "terraform state list énumère les adresses des ressources suivies dans l'état."
  },
  {
   "id": "tf-assoc-j1-19",
   "q": "Quel est le rôle de terraform refresh (ou -refresh-only) ?",
   "choices": [
    "A. Recréer toutes les ressources avec les valeurs actuelles de la configuration",
    "B. Télécharger de nouveau les providers et modules déclarés dans la configuration",
    "C. Réinitialiser le backend et supprimer les workspaces non utilisés",
    "D. Mettre à jour l'état avec l'infrastructure réelle sans modifier les ressources"
   ],
   "answer": 3,
   "exp": "Le mode refresh-only synchronise l'état avec le monde réel sans proposer de changement d'infrastructure."
  },
  {
   "id": "tf-assoc-j1-20",
   "q": "Que se passe-t-il si une ressource est modifiée manuellement hors de Terraform ?",
   "choices": [
    "A. Le prochain plan détecte la dérive et propose de la ramener à la configuration",
    "B. Terraform ignore définitivement le changement jusqu'à la suppression de la ressource",
    "C. Terraform met automatiquement la configuration à jour pour refléter la modification manuelle",
    "D. Le fichier d'état est supprimé et toutes les ressources sont recréées de zéro"
   ],
   "answer": 0,
   "exp": "Terraform détecte la dérive (drift) au refresh et planifie la correction vers l'état déclaré."
  },
  {
   "id": "tf-assoc-j1-21",
   "q": "Comment enregistrer un plan pour l'appliquer plus tard exactement tel quel ?",
   "choices": [
    "A. terraform plan -save puis terraform apply -saved",
    "B. terraform plan -out=tfplan puis terraform apply tfplan",
    "C. terraform apply -dry-run=tfplan",
    "D. terraform plan > plan.txt puis terraform apply plan.txt"
   ],
   "answer": 1,
   "exp": "Un plan sauvegardé garantit que apply exécute exactement les actions revues."
  },
  {
   "id": "tf-assoc-j1-22",
   "q": "Quel est l'effet de l'option -target ?",
   "choices": [
    "A. Définir le répertoire de destination du fichier d'état pour l'opération",
    "B. Choisir le provider cible parmi plusieurs déclarés dans la configuration",
    "C. Limiter le plan ou l'apply à certaines ressources spécifiées et leurs dépendances",
    "D. Appliquer les changements à tous les workspaces portant le même nom"
   ],
   "answer": 2,
   "exp": "-target restreint l'opération aux ressources visées ; à réserver aux cas exceptionnels."
  },
  {
   "id": "tf-assoc-j1-23",
   "q": "Que fait terraform import ?",
   "choices": [
    "A. Importer des modules depuis le registry public dans le répertoire courant",
    "B. Copier la configuration d'un autre workspace dans le workspace actif",
    "C. Télécharger l'état distant dans un fichier local lisible",
    "D. Associer une ressource existante à une adresse de ressource dans l'état"
   ],
   "answer": 3,
   "exp": "import rattache une ressource déjà existante à l'état ; la configuration correspondante doit être écrite (ou générée avec un bloc import)."
  },
  {
   "id": "tf-assoc-j1-24",
   "q": "Quel bloc de configuration permet d'importer une ressource de façon déclarative (Terraform 1.5+) ?",
   "choices": [
    "A. import",
    "B. moved",
    "C. removed",
    "D. adopt"
   ],
   "answer": 0,
   "exp": "Le bloc import { to = ..., id = ... } déclare l'import, exécuté par plan/apply."
  },
  {
   "id": "tf-assoc-j1-25",
   "q": "Qu'indique le symbole + dans la sortie d'un plan ?",
   "choices": [
    "A. Une ressource qui sera modifiée sur place",
    "B. Une ressource qui sera créée",
    "C. Une ressource qui sera détruite",
    "D. Une ressource qui sera ignorée"
   ],
   "answer": 1,
   "exp": "+ = création, - = destruction, ~ = modification en place, -/+ = remplacement."
  },
  {
   "id": "tf-assoc-j1-26",
   "q": "Qu'indique le symbole -/+ dans un plan ?",
   "choices": [
    "A. Une ressource déjà existante qui sera conservée",
    "B. Une ressource qui sera ajoutée à l'état uniquement",
    "C. Une ressource qui sera détruite puis recréée",
    "D. Une ressource qui sera déplacée vers un autre module"
   ],
   "answer": 2,
   "exp": "-/+ signifie remplacement : destruction puis création (ou l'inverse avec create_before_destroy)."
  },
  {
   "id": "tf-assoc-j1-27",
   "q": "Qu'indique le symbole ~ dans un plan ?",
   "choices": [
    "A. Une création d'une nouvelle ressource",
    "B. Une destruction d'une ressource existante",
    "C. Un remplacement complet de la ressource",
    "D. Une modification en place d'une ressource"
   ],
   "answer": 3,
   "exp": "~ = update in-place."
  },
  {
   "id": "tf-assoc-j1-28",
   "q": "Quel est le rôle du graphe de dépendances de Terraform ?",
   "choices": [
    "A. Déterminer l'ordre de création et permettre le parallélisme entre ressources indépendantes",
    "B. Afficher uniquement la liste des variables utilisées par les modules de la configuration",
    "C. Stocker l'historique des modifications effectuées sur chaque ressource gérée",
    "D. Chiffrer les dépendances entre ressources dans le fichier d'état distant"
   ],
   "answer": 0,
   "exp": "Terraform construit un graphe orienté acyclique pour ordonner et paralléliser les opérations."
  },
  {
   "id": "tf-assoc-j1-29",
   "q": "Quelle commande produit une représentation du graphe de dépendances ?",
   "choices": [
    "A. terraform tree",
    "B. terraform graph",
    "C. terraform deps",
    "D. terraform show -graph"
   ],
   "answer": 1,
   "exp": "terraform graph sort un graphe au format DOT."
  },
  {
   "id": "tf-assoc-j1-30",
   "q": "Comment Terraform déduit-il une dépendance implicite entre deux ressources ?",
   "choices": [
    "A. Par l'ordre d'apparition des blocs dans le fichier",
    "B. Par le nom de fichier .tf où chaque ressource est déclarée",
    "C. Par la référence à un attribut d'une ressource dans une autre",
    "D. Par le tri alphabétique des noms de ressources"
   ],
   "answer": 2,
   "exp": "Les références d'attributs créent des dépendances implicites ; depends_on sert aux dépendances cachées."
  },
  {
   "id": "tf-assoc-j1-31",
   "q": "Quand utilise-t-on depends_on ?",
   "choices": [
    "A. Pour importer une dépendance externe depuis le registry dans la configuration",
    "B. Pour exécuter les ressources en parallèle malgré des références entre elles",
    "C. Pour supprimer une dépendance implicite créée par une référence d'attribut",
    "D. Pour déclarer une dépendance explicite que Terraform ne peut pas déduire des références"
   ],
   "answer": 3,
   "exp": "depends_on force un ordre quand la dépendance n'est pas visible dans les expressions."
  },
  {
   "id": "tf-assoc-j1-32",
   "q": "Quel est le principal intérêt de Terraform par rapport aux outils propres à un cloud (CloudFormation, ARM) ?",
   "choices": [
    "A. Il est indépendant du fournisseur et gère de nombreux services avec un seul workflow",
    "B. Il ne nécessite aucun accès aux API des fournisseurs pour créer des ressources",
    "C. Il fournit lui-même les serveurs qui hébergent les ressources déclarées",
    "D. Il remplace tous les outils de configuration de systèmes d'exploitation"
   ],
   "answer": 0,
   "exp": "Terraform est multi-cloud/multi-service grâce aux providers."
  },
  {
   "id": "tf-assoc-j1-33",
   "q": "Terraform est-il adapté à la gestion de configuration de serveurs (installation de logiciels) comme Ansible ?",
   "choices": [
    "A. Oui, c'est son rôle principal et il remplace complètement les outils de gestion de configuration",
    "B. Il est conçu pour le provisionnement d'infrastructure ; la configuration interne relève d'autres outils",
    "C. Oui, car il exécute nativement des playbooks sur chaque machine provisionnée",
    "D. Non, il ne peut gérer que des ressources réseau et jamais de machines virtuelles"
   ],
   "answer": 1,
   "exp": "Terraform provisionne l'infrastructure ; la configuration logicielle se fait avec Ansible, cloud-init, etc."
  },
  {
   "id": "tf-assoc-j1-34",
   "q": "Que signifie l'idempotence dans le contexte de Terraform ?",
   "choices": [
    "A. Chaque apply recrée toutes les ressources pour garantir un état propre",
    "B. Les ressources sont toujours détruites avant d'être mises à jour",
    "C. Appliquer plusieurs fois la même configuration produit le même résultat sans changement supplémentaire",
    "D. Terraform exige un nouveau fichier d'état pour chaque exécution"
   ],
   "answer": 2,
   "exp": "Après convergence, un nouvel apply ne produit aucun changement."
  },
  {
   "id": "tf-assoc-j1-35",
   "q": "Quelle variable d'environnement active les journaux détaillés de Terraform ?",
   "choices": [
    "A. TF_DEBUG_MODE",
    "B. TERRAFORM_VERBOSE",
    "C. TF_TRACE_FILE",
    "D. TF_LOG"
   ],
   "answer": 3,
   "exp": "TF_LOG (TRACE, DEBUG, INFO, WARN, ERROR) active les logs ; TF_LOG_PATH les écrit dans un fichier."
  },
  {
   "id": "tf-assoc-j1-36",
   "q": "Que contient le répertoire .terraform ?",
   "choices": [
    "A. Les providers et modules téléchargés et la configuration du backend",
    "B. Les fichiers de configuration .tf de l'utilisateur",
    "C. Les variables sensibles chiffrées de l'organisation",
    "D. L'historique des plans exécutés précédemment"
   ],
   "answer": 0,
   "exp": ".terraform est un cache local créé par init ; il ne se versionne pas."
  },
  {
   "id": "tf-assoc-j1-37",
   "q": "Quels fichiers ne doit-on généralement PAS versionner dans Git ?",
   "choices": [
    "A. main.tf et variables.tf",
    "B. terraform.tfstate et le répertoire .terraform",
    "C. outputs.tf et README.md",
    "D. Le fichier .terraform.lock.hcl"
   ],
   "answer": 1,
   "exp": "L'état peut contenir des secrets et le dossier .terraform est local ; le lock file, lui, se versionne."
  },
  {
   "id": "tf-assoc-j1-38",
   "q": "Quelle est la différence entre une ressource (resource) et une source de données (data) ?",
   "choices": [
    "A. resource lit des informations ; data crée et détruit des objets",
    "B. Les deux gèrent le cycle de vie, data étant seulement plus rapide",
    "C. resource gère le cycle de vie d'un objet ; data lit des informations sur un objet existant",
    "D. data est réservé aux modules, resource au module racine"
   ],
   "answer": 2,
   "exp": "data sources interrogent sans créer ; resources créent/modifient/détruisent."
  },
  {
   "id": "tf-assoc-j1-39",
   "q": "Comment référencer l'attribut id d'une ressource aws_instance nommée web ?",
   "choices": [
    "A. resource.aws_instance.web.id",
    "B. aws_instance[web].id",
    "C. web.aws_instance.id",
    "D. aws_instance.web.id"
   ],
   "answer": 3,
   "exp": "Le format est <TYPE>.<NOM>.<ATTRIBUT>."
  },
  {
   "id": "tf-assoc-j1-40",
   "q": "À quoi sert terraform output ?",
   "choices": [
    "A. Afficher les valeurs des outputs définis dans la configuration racine",
    "B. Exporter l'état complet dans un fichier JSON signé",
    "C. Générer automatiquement la documentation des modules",
    "D. Afficher uniquement les erreurs de la dernière exécution"
   ],
   "answer": 0,
   "exp": "terraform output lit les valeurs des outputs depuis l'état."
  },
  {
   "id": "tf-assoc-j1-41",
   "q": "Que fait terraform apply -replace=ADDRESS ?",
   "choices": [
    "A. Remplace la valeur d'une variable pour la durée de l'exécution",
    "B. Force le remplacement (destruction puis recréation) de la ressource indiquée",
    "C. Remplace le provider utilisé par la ressource ciblée",
    "D. Supprime la ressource de l'état sans la détruire"
   ],
   "answer": 1,
   "exp": "-replace remplace -taint, devenu obsolète."
  },
  {
   "id": "tf-assoc-j1-42",
   "q": "Quelle commande est dépréciée au profit de apply -replace ?",
   "choices": [
    "A. terraform untaint",
    "B. terraform refresh",
    "C. terraform taint",
    "D. terraform fmt"
   ],
   "answer": 2,
   "exp": "taint marque une ressource pour recréation ; la méthode moderne est -replace."
  },
  {
   "id": "tf-assoc-j1-43",
   "q": "Qu'est-ce que le workflow de base de Terraform ?",
   "choices": [
    "A. Build, Test, Deploy",
    "B. Init, Compile, Run",
    "C. Define, Validate, Publish",
    "D. Write, Plan, Apply"
   ],
   "answer": 3,
   "exp": "Le cœur du workflow HashiCorp : Write → Plan → Apply."
  },
  {
   "id": "tf-assoc-j1-44",
   "q": "Quelle commande permet de tester des expressions HCL de manière interactive ?",
   "choices": [
    "A. terraform console",
    "B. terraform eval",
    "C. terraform repl",
    "D. terraform shell"
   ],
   "answer": 0,
   "exp": "terraform console ouvre une console pour évaluer des expressions avec l'état courant."
  },
  {
   "id": "tf-assoc-j1-45",
   "q": "Quel est l'effet de terraform plan -destroy ?",
   "choices": [
    "A. Détruire immédiatement toutes les ressources",
    "B. Montrer ce qui serait détruit sans rien supprimer",
    "C. Détruire uniquement l'état sans supprimer les ressources",
    "D. Désactiver le prochain plan pour la ressource"
   ],
   "answer": 1,
   "exp": "plan -destroy prévisualise un destroy."
  },
  {
   "id": "tf-assoc-j1-46",
   "q": "Quelle commande met à jour les providers vers la version la plus récente autorisée par les contraintes ?",
   "choices": [
    "A. terraform providers update",
    "B. terraform upgrade",
    "C. terraform init -upgrade",
    "D. terraform get -update"
   ],
   "answer": 2,
   "exp": "init -upgrade ignore le lock file existant et sélectionne les versions les plus récentes autorisées."
  },
  {
   "id": "tf-assoc-j1-47",
   "q": "Quel flag permet d'exécuter terraform sans invite interactive (CI) ?",
   "choices": [
    "A. -batch",
    "B. -noninteractive",
    "C. -quiet=true",
    "D. -input=false"
   ],
   "answer": 3,
   "exp": "-input=false désactive les invites ; souvent associé à -auto-approve en CI."
  },
  {
   "id": "tf-assoc-j1-48",
   "q": "Quelle commande vérifie la cohérence du formatage sans réécrire les fichiers ?",
   "choices": [
    "A. terraform fmt -check",
    "B. terraform fmt -dry",
    "C. terraform validate -fmt",
    "D. terraform fmt -diff-only"
   ],
   "answer": 0,
   "exp": "-check retourne un code de sortie non nul si des fichiers ne sont pas formatés."
  },
  {
   "id": "tf-assoc-j1-49",
   "q": "Quelle est la structure habituelle d'une configuration Terraform simple ?",
   "choices": [
    "A. Un fichier unique config.yaml par ressource",
    "B. main.tf, variables.tf, outputs.tf dans un même répertoire",
    "C. Un répertoire par ressource avec un fichier state.json",
    "D. Un seul fichier terraform.tf obligatoire avec toutes les sections"
   ],
   "answer": 1,
   "exp": "Les noms de fichiers sont conventionnels ; Terraform lit tous les .tf du répertoire."
  },
  {
   "id": "tf-assoc-j1-50",
   "q": "Que se passe-t-il quand plusieurs fichiers .tf sont présents dans un répertoire ?",
   "choices": [
    "A. Seul main.tf est pris en compte",
    "B. Les fichiers sont exécutés dans l'ordre alphabétique, un par un, de façon indépendante",
    "C. Terraform les charge tous comme une seule configuration",
    "D. Terraform exige de choisir le fichier à utiliser avec -file"
   ],
   "answer": 2,
   "exp": "Tous les .tf (et .tf.json) du répertoire forment un module ; l'ordre n'a pas d'importance."
  }
 ],
 "2": [
  {
   "id": "tf-assoc-j2-1",
   "q": "Comment déclare-t-on une variable d'entrée nommée region avec une valeur par défaut ?",
   "choices": [
    "A. input \"region\" { value = \"eu-west-1\" }",
    "B. var \"region\" = \"eu-west-1\"",
    "C. variable \"region\" { default = \"eu-west-1\" }",
    "D. locals \"region\" { default = \"eu-west-1\" }"
   ],
   "answer": 2,
   "exp": "Les variables d'entrée se déclarent avec un bloc variable ; l'argument default fournit la valeur par défaut."
  },
  {
   "id": "tf-assoc-j2-2",
   "q": "Comment référence-t-on la variable d'entrée region dans une expression ?",
   "choices": [
    "A. variable.region",
    "B. input.region",
    "C. local.region",
    "D. var.region"
   ],
   "answer": 3,
   "exp": "Les variables d'entrée sont accessibles via var.<nom>."
  },
  {
   "id": "tf-assoc-j2-3",
   "q": "Quel argument d'un bloc variable restreint les valeurs acceptées par une règle personnalisée ?",
   "choices": [
    "A. validation",
    "B. constraint",
    "C. rules",
    "D. allowed"
   ],
   "answer": 0,
   "exp": "Le bloc validation contient condition et error_message pour valider la valeur."
  },
  {
   "id": "tf-assoc-j2-4",
   "q": "Quel argument masque la valeur d'une variable dans la sortie CLI de plan et apply ?",
   "choices": [
    "A. hidden = true",
    "B. sensitive = true",
    "C. secret = true",
    "D. mask = true"
   ],
   "answer": 1,
   "exp": "sensitive empêche l'affichage de la valeur dans l'interface ; elle reste toutefois stockée en clair dans l'état."
  },
  {
   "id": "tf-assoc-j2-5",
   "q": "Une variable marquée sensitive est-elle chiffrée dans le fichier d'état ?",
   "choices": [
    "A. Oui, elle est toujours chiffrée avec une clé générée par Terraform",
    "B. Oui, mais seulement lorsque le backend est un stockage local",
    "C. Non, elle reste en clair dans l'état ; seul l'affichage est masqué",
    "D. Non, et elle n'apparaît d'ailleurs jamais dans l'état"
   ],
   "answer": 2,
   "exp": "sensitive n'affecte que l'affichage ; l'état doit donc être protégé (backend chiffré, accès restreint)."
  },
  {
   "id": "tf-assoc-j2-6",
   "q": "Quelle est la priorité la plus haute parmi ces sources de valeurs de variables ?",
   "choices": [
    "A. Valeur default du bloc variable",
    "B. Variable d'environnement TF_VAR_nom",
    "C. Fichier terraform.tfvars",
    "D. Option -var en ligne de commande"
   ],
   "answer": 3,
   "exp": "Les options -var et -var-file ont la priorité la plus élevée, devant *.auto.tfvars, terraform.tfvars et les variables d'environnement."
  },
  {
   "id": "tf-assoc-j2-7",
   "q": "Quel préfixe de variable d'environnement permet de définir une variable d'entrée Terraform ?",
   "choices": [
    "A. TF_VAR_",
    "B. TERRAFORM_",
    "C. TFV_",
    "D. VAR_TF_"
   ],
   "answer": 0,
   "exp": "TF_VAR_region définit la variable region."
  },
  {
   "id": "tf-assoc-j2-8",
   "q": "Quel fichier est chargé automatiquement pour fournir des valeurs de variables ?",
   "choices": [
    "A. variables.auto",
    "B. terraform.tfvars",
    "C. values.tf",
    "D. inputs.hcl"
   ],
   "answer": 1,
   "exp": "terraform.tfvars, terraform.tfvars.json et *.auto.tfvars(.json) sont chargés automatiquement."
  },
  {
   "id": "tf-assoc-j2-9",
   "q": "Comment charger un fichier de variables dont le nom est dev.tfvars ?",
   "choices": [
    "A. terraform apply -vars dev.tfvars",
    "B. terraform apply --env dev.tfvars",
    "C. terraform apply -var-file=dev.tfvars",
    "D. terraform apply -config=dev.tfvars"
   ],
   "answer": 2,
   "exp": "-var-file indique un fichier de valeurs supplémentaire."
  },
  {
   "id": "tf-assoc-j2-10",
   "q": "Quel type de variable décrit une liste de chaînes ?",
   "choices": [
    "A. array(string)",
    "B. set[string]",
    "C. string[]",
    "D. list(string)"
   ],
   "answer": 3,
   "exp": "Les types complexes s'écrivent list(string), set(string), map(string), object({...}), tuple([...])."
  },
  {
   "id": "tf-assoc-j2-11",
   "q": "Quelle est la différence entre list et set ?",
   "choices": [
    "A. list est ordonnée et accepte des doublons ; set n'est pas ordonnée et ne contient pas de doublons",
    "B. set est ordonnée et accepte des doublons ; list n'a ni ordre ni doublons",
    "C. Les deux sont identiques ; seul le nom diffère selon la version",
    "D. list contient des types différents ; set exige un type unique"
   ],
   "answer": 0,
   "exp": "Une liste conserve l'ordre et les doublons ; un set est une collection unique sans ordre."
  },
  {
   "id": "tf-assoc-j2-12",
   "q": "Qu'est-ce qu'un bloc locals ?",
   "choices": [
    "A. Un bloc qui déclare des variables d'entrée fournies par l'appelant du module",
    "B. Un bloc qui définit des valeurs nommées calculées réutilisables dans le module",
    "C. Un bloc qui définit des valeurs exportées vers le module parent",
    "D. Un bloc qui sélectionne les providers locaux installés sur la machine"
   ],
   "answer": 1,
   "exp": "Les valeurs locales évitent de répéter une expression ; elles se référencent avec local.<nom> (au singulier)."
  },
  {
   "id": "tf-assoc-j2-13",
   "q": "Comment référence-t-on une valeur locale nommée name_prefix ?",
   "choices": [
    "A. locals.name_prefix",
    "B. var.name_prefix",
    "C. local.name_prefix",
    "D. self.name_prefix"
   ],
   "answer": 2,
   "exp": "Le bloc s'appelle locals mais la référence est local.<nom>."
  },
  {
   "id": "tf-assoc-j2-14",
   "q": "À quoi sert un bloc output ?",
   "choices": [
    "A. Importer des valeurs depuis un autre workspace distant",
    "B. Définir des paramètres d'entrée pour le provider",
    "C. Écrire des logs dans un fichier à chaque exécution",
    "D. Exposer des valeurs du module, affichées après apply ou lisibles par le module appelant"
   ],
   "answer": 3,
   "exp": "Les outputs partagent des valeurs avec l'utilisateur ou avec le module parent."
  },
  {
   "id": "tf-assoc-j2-15",
   "q": "Quel argument masque la valeur d'un output sensible dans la sortie ?",
   "choices": [
    "A. sensitive = true",
    "B. secret = true",
    "C. hide = true",
    "D. redact = true"
   ],
   "answer": 0,
   "exp": "Un output sensible affiche <sensitive> à l'écran mais reste lisible via terraform output -raw ou -json."
  },
  {
   "id": "tf-assoc-j2-16",
   "q": "Comment créer plusieurs instances d'une ressource à partir d'un nombre entier ?",
   "choices": [
    "A. for_each",
    "B. count",
    "C. dynamic",
    "D. repeat"
   ],
   "answer": 1,
   "exp": "count crée N instances, accessibles par index (aws_instance.web[0])."
  },
  {
   "id": "tf-assoc-j2-17",
   "q": "Quelle expression donne l'index de l'instance courante dans une ressource utilisant count ?",
   "choices": [
    "A. each.index",
    "B. self.index",
    "C. count.index",
    "D. iterator.index"
   ],
   "answer": 2,
   "exp": "count.index vaut 0, 1, ... N-1."
  },
  {
   "id": "tf-assoc-j2-18",
   "q": "Quand préférer for_each à count ?",
   "choices": [
    "A. Quand on veut créer exactement une ressource sans la dupliquer",
    "B. Quand on veut utiliser un nombre entier calculé au moment du plan",
    "C. Quand la ressource n'a aucun argument obligatoire à définir",
    "D. Quand les instances sont identifiées par une clé stable (map ou set) et non par un index"
   ],
   "answer": 3,
   "exp": "for_each évite le décalage d'index quand un élément est retiré de la collection."
  },
  {
   "id": "tf-assoc-j2-19",
   "q": "Quelles références sont disponibles dans un bloc utilisant for_each ?",
   "choices": [
    "A. each.key et each.value",
    "B. count.index et count.value",
    "C. item.key et item.value",
    "D. for.key et for.value"
   ],
   "answer": 0,
   "exp": "each.key et each.value représentent l'élément courant de la map ou du set."
  },
  {
   "id": "tf-assoc-j2-20",
   "q": "Quel type d'argument accepte for_each ?",
   "choices": [
    "A. Uniquement un entier positif",
    "B. Une map ou un set de chaînes",
    "C. Uniquement une liste ordonnée de nombres",
    "D. Uniquement une chaîne unique"
   ],
   "answer": 1,
   "exp": "Une liste doit être convertie avec toset() pour être utilisée avec for_each."
  },
  {
   "id": "tf-assoc-j2-21",
   "q": "Comment obtenir une expression conditionnelle en HCL ?",
   "choices": [
    "A. if condition then valeur_vrai else valeur_faux",
    "B. condition && valeur_vrai || valeur_faux",
    "C. condition ? valeur_vrai : valeur_faux",
    "D. when(condition, valeur_vrai, valeur_faux)"
   ],
   "answer": 2,
   "exp": "L'opérateur ternaire est condition ? a : b."
  },
  {
   "id": "tf-assoc-j2-22",
   "q": "Que produit l'expression [for s in var.names : upper(s)] ?",
   "choices": [
    "A. Une map associant chaque nom à sa version en majuscules",
    "B. Un set de caractères uniques en majuscules",
    "C. Une chaîne unique concaténant tous les noms",
    "D. Une liste contenant chaque nom converti en majuscules"
   ],
   "answer": 3,
   "exp": "Les crochets donnent un tuple/liste ; les accolades {for ...} donnent un objet/map."
  },
  {
   "id": "tf-assoc-j2-23",
   "q": "Quelle syntaxe produit une map avec une expression for ?",
   "choices": [
    "A. {for k, v in var.tags : k => upper(v)}",
    "B. [for k, v in var.tags : k => upper(v)]",
    "C. (for k, v in var.tags : upper(v))",
    "D. map(for k, v in var.tags : upper(v))"
   ],
   "answer": 0,
   "exp": "Les accolades avec k => v créent un objet."
  },
  {
   "id": "tf-assoc-j2-24",
   "q": "À quoi sert la syntaxe splat [*] ?",
   "choices": [
    "A. Multiplier les éléments d'une liste par un facteur donné",
    "B. Extraire un attribut de chaque élément d'une liste d'objets",
    "C. Concaténer plusieurs listes en une seule liste plate",
    "D. Filtrer les éléments nuls d'une liste de chaînes"
   ],
   "answer": 1,
   "exp": "aws_instance.web[*].id équivaut à [for i in aws_instance.web : i.id]."
  },
  {
   "id": "tf-assoc-j2-25",
   "q": "Quel bloc imbriqué génère dynamiquement des blocs répétés dans une ressource ?",
   "choices": [
    "A. repeat",
    "B. for_block",
    "C. dynamic",
    "D. generate"
   ],
   "answer": 2,
   "exp": "dynamic \"nom\" { for_each = ... content { ... } } génère des blocs imbriqués."
  },
  {
   "id": "tf-assoc-j2-26",
   "q": "Quelle fonction fusionne plusieurs maps ?",
   "choices": [
    "A. concat",
    "B. union",
    "C. combine",
    "D. merge"
   ],
   "answer": 3,
   "exp": "merge(map1, map2) combine les maps ; les clés suivantes écrasent les précédentes."
  },
  {
   "id": "tf-assoc-j2-27",
   "q": "Quelle fonction concatène plusieurs listes ?",
   "choices": [
    "A. concat",
    "B. merge",
    "C. flatten",
    "D. join"
   ],
   "answer": 0,
   "exp": "concat(list1, list2) renvoie une liste unique ; flatten aplatit des listes imbriquées."
  },
  {
   "id": "tf-assoc-j2-28",
   "q": "Que fait la fonction lookup(map, clé, défaut) ?",
   "choices": [
    "A. Retourne toujours une erreur si la clé n'existe pas dans la map",
    "B. Retourne la valeur de la clé ou la valeur par défaut si la clé est absente",
    "C. Retourne l'index de la clé dans la map ordonnée",
    "D. Retourne la liste de toutes les clés de la map"
   ],
   "answer": 1,
   "exp": "lookup évite l'erreur grâce à la valeur par défaut."
  },
  {
   "id": "tf-assoc-j2-29",
   "q": "Quelle fonction lit le contenu d'un fichier texte local ?",
   "choices": [
    "A. read",
    "B. open",
    "C. file",
    "D. load"
   ],
   "answer": 2,
   "exp": "file(\"${path.module}/script.sh\") renvoie le contenu du fichier en chaîne."
  },
  {
   "id": "tf-assoc-j2-30",
   "q": "Quelle fonction applique un gabarit avec des variables sur un fichier ?",
   "choices": [
    "A. template",
    "B. render",
    "C. file",
    "D. templatefile"
   ],
   "answer": 3,
   "exp": "templatefile(path, vars) évalue le gabarit en remplaçant les variables."
  },
  {
   "id": "tf-assoc-j2-31",
   "q": "À quoi correspond path.module ?",
   "choices": [
    "A. Au chemin du répertoire du module contenant l'expression",
    "B. Au chemin du répertoire racine du dépôt Git",
    "C. Au chemin du répertoire de travail courant de la commande",
    "D. Au chemin du fichier d'état local"
   ],
   "answer": 0,
   "exp": "path.module est le chemin du module courant ; path.root celui du module racine ; path.cwd le répertoire courant."
  },
  {
   "id": "tf-assoc-j2-32",
   "q": "Quel argument de bloc ressource configure le cycle de vie particulier d'une ressource ?",
   "choices": [
    "A. behavior",
    "B. lifecycle",
    "C. policy",
    "D. options"
   ],
   "answer": 1,
   "exp": "Le méta-argument lifecycle regroupe create_before_destroy, prevent_destroy, ignore_changes, replace_triggered_by."
  },
  {
   "id": "tf-assoc-j2-33",
   "q": "Quel argument lifecycle empêche la destruction accidentelle d'une ressource ?",
   "choices": [
    "A. protect = true",
    "B. no_delete = true",
    "C. prevent_destroy = true",
    "D. keep = true"
   ],
   "answer": 2,
   "exp": "Terraform renvoie une erreur si un plan prévoit de détruire la ressource."
  },
  {
   "id": "tf-assoc-j2-34",
   "q": "Quel argument lifecycle crée la nouvelle ressource avant de détruire l'ancienne ?",
   "choices": [
    "A. replace_first = true",
    "B. recreate = true",
    "C. blue_green = true",
    "D. create_before_destroy = true"
   ],
   "answer": 3,
   "exp": "Utile pour limiter l'interruption lors d'un remplacement."
  },
  {
   "id": "tf-assoc-j2-35",
   "q": "Que fait ignore_changes dans lifecycle ?",
   "choices": [
    "A. Terraform ignore les modifications externes des attributs listés",
    "B. Terraform ignore la ressource entière lors de tous les plans futurs",
    "C. Terraform ignore les erreurs de validation des attributs listés",
    "D. Terraform masque ces attributs dans la sortie du plan uniquement"
   ],
   "answer": 0,
   "exp": "ignore_changes évite que des changements hors Terraform déclenchent une mise à jour."
  },
  {
   "id": "tf-assoc-j2-36",
   "q": "Que fait le méta-argument provider dans une ressource ?",
   "choices": [
    "A. Télécharge le provider depuis le registry au moment de l'apply",
    "B. Sélectionne une configuration de provider alternative (alias) pour la ressource",
    "C. Définit la version du provider utilisée par toute la configuration",
    "D. Désactive le provider pour la ressource concernée"
   ],
   "answer": 1,
   "exp": "provider = aws.west utilise l'alias défini."
  },
  {
   "id": "tf-assoc-j2-37",
   "q": "Comment déclare-t-on une seconde configuration d'un même provider ?",
   "choices": [
    "A. Avec un second bloc terraform required_providers",
    "B. Avec un bloc variable de type provider",
    "C. Avec un argument alias dans un second bloc provider",
    "D. Avec un second fichier .terraform.lock.hcl"
   ],
   "answer": 2,
   "exp": "provider \"aws\" { alias = \"west\" region = \"us-west-2\" }."
  },
  {
   "id": "tf-assoc-j2-38",
   "q": "Quel fournisseur est sélectionné pour une ressource sans argument provider explicite ?",
   "choices": [
    "A. Le premier provider déclaré par ordre alphabétique",
    "B. Un provider choisi aléatoirement parmi ceux disponibles",
    "C. Aucun ; une erreur est toujours levée",
    "D. Le provider par défaut déduit du préfixe du type de ressource"
   ],
   "answer": 3,
   "exp": "aws_instance utilise le provider aws (configuration sans alias)."
  },
  {
   "id": "tf-assoc-j2-39",
   "q": "Où le provider obtient-il ses identifiants de manière recommandée ?",
   "choices": [
    "A. Variables d'environnement, profils ou rôles gérés par la plateforme, hors du code",
    "B. Directement dans le bloc provider, en clair, dans le dépôt Git",
    "C. Dans un fichier terraform.tfvars versionné avec le reste du code",
    "D. Dans les commentaires du fichier main.tf pour faciliter le partage"
   ],
   "answer": 0,
   "exp": "Il faut éviter les secrets en dur ; privilégier les identités gérées, variables d'environnement ou coffres de secrets."
  },
  {
   "id": "tf-assoc-j2-40",
   "q": "Quel bloc interroge un objet existant sans le gérer ?",
   "choices": [
    "A. resource",
    "B. data",
    "C. lookup",
    "D. query"
   ],
   "answer": 1,
   "exp": "Un bloc data lit des informations (AMI, VPC, etc.) ; référence data.<type>.<nom>.<attr>."
  },
  {
   "id": "tf-assoc-j2-41",
   "q": "Comment référence-t-on un attribut d'une data source aws_ami nommée ubuntu ?",
   "choices": [
    "A. aws_ami.ubuntu.id",
    "B. resource.aws_ami.ubuntu.id",
    "C. data.aws_ami.ubuntu.id",
    "D. datasource.aws_ami.ubuntu.id"
   ],
   "answer": 2,
   "exp": "Les références de data sources commencent par data."
  },
  {
   "id": "tf-assoc-j2-42",
   "q": "Quel est le rôle du bloc provisioner local-exec ?",
   "choices": [
    "A. Exécuter une commande dans la ressource distante créée",
    "B. Exécuter un script uniquement lors du destroy",
    "C. Exécuter des tests unitaires sur la configuration",
    "D. Exécuter une commande sur la machine qui lance Terraform"
   ],
   "answer": 3,
   "exp": "local-exec s'exécute sur la machine locale ; remote-exec sur la ressource distante."
  },
  {
   "id": "tf-assoc-j2-43",
   "q": "Pourquoi HashiCorp recommande-t-elle d'utiliser les provisioners en dernier recours ?",
   "choices": [
    "A. Ils ne sont pas modélisés dans l'état et rendent la configuration moins prévisible",
    "B. Ils sont plus lents que les ressources déclaratives mais produisent les mêmes résultats",
    "C. Ils sont réservés aux utilisateurs de HCP Terraform uniquement",
    "D. Ils ne fonctionnent qu'avec un backend distant configuré"
   ],
   "answer": 0,
   "exp": "Les provisioners agissent hors du modèle déclaratif ; préférer cloud-init, images préconfigurées ou outils de configuration."
  },
  {
   "id": "tf-assoc-j2-44",
   "q": "Quel argument d'un provisioner définit son comportement en cas d'échec ?",
   "choices": [
    "A. retry",
    "B. on_failure",
    "C. error_mode",
    "D. fail_policy"
   ],
   "answer": 1,
   "exp": "on_failure = continue ou fail (par défaut)."
  },
  {
   "id": "tf-assoc-j2-45",
   "q": "À quoi sert le bloc terraform_data (ou null_resource historique) ?",
   "choices": [
    "A. Créer une machine virtuelle générique sans fournisseur précis",
    "B. Stocker l'état distant dans un format chiffré",
    "C. Déclencher des actions ou stocker des valeurs sans ressource d'infrastructure réelle",
    "D. Déclarer des variables d'environnement globales pour tous les modules"
   ],
   "answer": 2,
   "exp": "terraform_data est la ressource intégrée qui remplace avantageusement null_resource."
  },
  {
   "id": "tf-assoc-j2-46",
   "q": "Que fait la fonction cidrsubnet ?",
   "choices": [
    "A. Valide qu'une adresse IP appartient à un sous-réseau",
    "B. Liste toutes les adresses IP d'une plage CIDR",
    "C. Convertit un masque de sous-réseau en notation CIDR",
    "D. Calcule une plage CIDR de sous-réseau à partir d'un préfixe de base"
   ],
   "answer": 3,
   "exp": "cidrsubnet(prefix, newbits, netnum) calcule des sous-réseaux."
  },
  {
   "id": "tf-assoc-j2-47",
   "q": "Quel est le but de la fonction try ?",
   "choices": [
    "A. Évaluer des expressions dans l'ordre et retourner la première qui ne produit pas d'erreur",
    "B. Réessayer une opération de provider un certain nombre de fois",
    "C. Tester la connectivité réseau avant d'appliquer un plan",
    "D. Capturer les erreurs et les enregistrer dans un fichier journal"
   ],
   "answer": 0,
   "exp": "try(expr1, expr2) renvoie la première expression valide."
  },
  {
   "id": "tf-assoc-j2-48",
   "q": "Comment commenter une ligne en HCL ?",
   "choices": [
    "A. -- commentaire",
    "B. # commentaire ou // commentaire",
    "C. <!-- commentaire -->",
    "D. ; commentaire"
   ],
   "answer": 1,
   "exp": "HCL accepte # et //, et /* ... */ pour plusieurs lignes."
  },
  {
   "id": "tf-assoc-j2-49",
   "q": "Que représente un argument par rapport à un bloc ?",
   "choices": [
    "A. Un argument est un conteneur imbriqué ; un bloc assigne une valeur à un nom",
    "B. Les deux termes sont synonymes en HCL",
    "C. Un argument assigne une valeur à un nom ; un bloc est un conteneur de contenu avec un type",
    "D. Un argument n'existe qu'au niveau du module racine"
   ],
   "answer": 2,
   "exp": "Ex. ami = \"x\" est un argument ; ebs_block_device { } est un bloc."
  },
  {
   "id": "tf-assoc-j2-50",
   "q": "Quelle expression d'interpolation de chaîne est valide ?",
   "choices": [
    "A. \"#{var.env}-app\"",
    "B. \"%{var.env}-app\"",
    "C. \"{{var.env}}-app\"",
    "D. \"${var.env}-app\""
   ],
   "answer": 3,
   "exp": "L'interpolation s'écrit ${...} dans les chaînes ; %{...} sert aux directives (if/for)."
  }
 ],
 "3": [
  {
   "id": "tf-assoc-j3-1",
   "q": "Pourquoi Terraform a-t-il besoin d'un fichier d'état ?",
   "choices": [
    "A. Pour stocker les fichiers de configuration .tf sous forme compressée",
    "B. Pour mémoriser uniquement les variables sensibles utilisées par la configuration",
    "C. Pour garder l'historique des commandes exécutées par chaque utilisateur",
    "D. Pour associer la configuration aux ressources réelles et suivre leurs métadonnées et attributs"
   ],
   "answer": 3,
   "exp": "L'état fait le lien entre les adresses de ressources et les objets réels, et accélère le calcul des plans."
  },
  {
   "id": "tf-assoc-j3-2",
   "q": "Quel est l'emplacement par défaut de l'état ?",
   "choices": [
    "A. Un fichier local terraform.tfstate dans le répertoire de travail",
    "B. Un bucket distant créé automatiquement par Terraform",
    "C. Le répertoire .terraform/ du projet",
    "D. Un service hébergé géré par HashiCorp sans configuration"
   ],
   "answer": 0,
   "exp": "Sans backend déclaré, Terraform utilise le backend local."
  },
  {
   "id": "tf-assoc-j3-3",
   "q": "Quel est le principal intérêt d'un backend distant ?",
   "choices": [
    "A. Éviter l'exécution de terraform init avant le premier plan",
    "B. Partager l'état entre plusieurs membres avec verrouillage et meilleure sécurité",
    "C. Remplacer le besoin de providers pour les ressources cloud",
    "D. Supprimer la nécessité du fichier de verrouillage des providers"
   ],
   "answer": 1,
   "exp": "Un backend distant centralise l'état, supporte le verrouillage, le chiffrement et la collaboration."
  },
  {
   "id": "tf-assoc-j3-4",
   "q": "Quel bloc configure un backend ?",
   "choices": [
    "A. provider \"backend\" { type = \"s3\" }",
    "B. resource \"backend\" \"s3\" { ... }",
    "C. terraform { backend \"s3\" { ... } }",
    "D. state { type = \"s3\" }"
   ],
   "answer": 2,
   "exp": "Le backend se déclare dans le bloc terraform."
  },
  {
   "id": "tf-assoc-j3-5",
   "q": "Pourquoi le verrouillage d'état est-il important ?",
   "choices": [
    "A. Il chiffre l'état au repos avec une clé gérée par Terraform",
    "B. Il interdit toute modification de la configuration pendant un apply",
    "C. Il empêche la suppression du fichier de configuration par erreur",
    "D. Il empêche deux opérations concurrentes de corrompre l'état"
   ],
   "answer": 3,
   "exp": "Le lock évite les écritures simultanées ; certains backends le gèrent nativement."
  },
  {
   "id": "tf-assoc-j3-6",
   "q": "Quel backend S3 utilisait traditionnellement DynamoDB et pour quel usage ?",
   "choices": [
    "A. Le verrouillage de l'état",
    "B. Le stockage chiffré des plans",
    "C. L'enregistrement de l'historique des versions",
    "D. La distribution des providers aux membres de l'équipe"
   ],
   "answer": 0,
   "exp": "Le backend S3 utilisait une table DynamoDB pour le lock ; les versions récentes supportent aussi un verrou natif S3 (use_lockfile)."
  },
  {
   "id": "tf-assoc-j3-7",
   "q": "Quelle commande migre l'état vers un nouveau backend après modification de la configuration ?",
   "choices": [
    "A. terraform state migrate",
    "B. terraform init -migrate-state",
    "C. terraform backend move",
    "D. terraform apply -migrate"
   ],
   "answer": 1,
   "exp": "init -migrate-state copie l'état de l'ancien backend vers le nouveau."
  },
  {
   "id": "tf-assoc-j3-8",
   "q": "Que fait terraform init -reconfigure ?",
   "choices": [
    "A. Migre automatiquement l'état et supprime l'ancien backend",
    "B. Reconstruit le fichier de verrouillage des providers",
    "C. Reconfigure le backend en ignorant la configuration enregistrée, sans migrer l'état",
    "D. Recrée toutes les ressources gérées par la configuration"
   ],
   "answer": 2,
   "exp": "-reconfigure ignore l'ancienne configuration de backend et ne migre pas l'état."
  },
  {
   "id": "tf-assoc-j3-9",
   "q": "Quelle commande supprime une ressource de l'état sans la détruire ?",
   "choices": [
    "A. terraform destroy -state-only",
    "B. terraform state delete -keep",
    "C. terraform untrack",
    "D. terraform state rm"
   ],
   "answer": 3,
   "exp": "state rm retire l'adresse de l'état ; l'objet réel subsiste."
  },
  {
   "id": "tf-assoc-j3-10",
   "q": "Quelle commande renomme ou déplace une ressource dans l'état ?",
   "choices": [
    "A. terraform state mv",
    "B. terraform state rename",
    "C. terraform move",
    "D. terraform state relocate"
   ],
   "answer": 0,
   "exp": "state mv change l'adresse d'une ressource dans l'état."
  },
  {
   "id": "tf-assoc-j3-11",
   "q": "Quel bloc de configuration permet de déclarer un renommage de ressource sans manipuler l'état à la main ?",
   "choices": [
    "A. renamed",
    "B. moved",
    "C. relocate",
    "D. alias"
   ],
   "answer": 1,
   "exp": "Le bloc moved { from = ... to = ... } documente le déplacement et l'applique lors du plan."
  },
  {
   "id": "tf-assoc-j3-12",
   "q": "Quelle commande affiche le détail d'une ressource dans l'état ?",
   "choices": [
    "A. terraform show -resource ADDRESS --live",
    "B. terraform state describe ADDRESS",
    "C. terraform state show ADDRESS",
    "D. terraform inspect ADDRESS"
   ],
   "answer": 2,
   "exp": "state show affiche les attributs d'une ressource de l'état."
  },
  {
   "id": "tf-assoc-j3-13",
   "q": "Pourquoi l'état ne doit-il pas être commité dans Git ?",
   "choices": [
    "A. Il est trop volumineux pour être accepté par tout dépôt Git",
    "B. Git ne supporte pas les fichiers JSON de plus de 1 Mo",
    "C. Le fichier est régénéré à l'identique par terraform init",
    "D. Il peut contenir des données sensibles en clair et provoquer des conflits"
   ],
   "answer": 3,
   "exp": "L'état contient des valeurs potentiellement secrètes ; il doit résider dans un backend sécurisé."
  },
  {
   "id": "tf-assoc-j3-14",
   "q": "Que se passe-t-il si le fichier d'état est perdu et qu'on relance apply ?",
   "choices": [
    "A. Terraform ne connaît plus les ressources et tente de les créer à nouveau",
    "B. Terraform reconstruit automatiquement l'état depuis le cloud",
    "C. Terraform détruit toutes les ressources existantes avant de les recréer",
    "D. Terraform refuse d'exécuter la commande sans confirmation de l'équipe"
   ],
   "answer": 0,
   "exp": "Sans état, Terraform ignore les ressources existantes ; il faut les réimporter."
  },
  {
   "id": "tf-assoc-j3-15",
   "q": "Quelle commande force le déverrouillage d'un état resté verrouillé ?",
   "choices": [
    "A. terraform unlock --all",
    "B. terraform force-unlock LOCK_ID",
    "C. terraform state unlock",
    "D. terraform lock release"
   ],
   "answer": 1,
   "exp": "force-unlock libère un verrou orphelin ; à utiliser avec prudence."
  },
  {
   "id": "tf-assoc-j3-16",
   "q": "Comment désactiver temporairement le verrouillage lors d'un plan ?",
   "choices": [
    "A. -nolock",
    "B. -unlock",
    "C. -lock=false",
    "D. -lock-timeout=-1"
   ],
   "answer": 2,
   "exp": "-lock=false ignore le verrou ; déconseillé en travail collaboratif."
  },
  {
   "id": "tf-assoc-j3-17",
   "q": "À quoi sert -lock-timeout ?",
   "choices": [
    "A. Limiter la durée totale d'un apply",
    "B. Définir la durée de vie du verrou en secondes côté serveur",
    "C. Libérer automatiquement les verrous périmés",
    "D. Attendre un certain temps l'obtention du verrou avant d'échouer"
   ],
   "answer": 3,
   "exp": "-lock-timeout=10s laisse Terraform réessayer d'obtenir le verrou."
  },
  {
   "id": "tf-assoc-j3-18",
   "q": "Qu'est-ce qu'un workspace Terraform CLI ?",
   "choices": [
    "A. Une instance d'état distincte pour une même configuration",
    "B. Un répertoire contenant plusieurs projets indépendants",
    "C. Une organisation HCP Terraform avec ses équipes",
    "D. Une copie complète de la configuration dans un autre dossier"
   ],
   "answer": 0,
   "exp": "Les workspaces CLI permettent plusieurs états pour la même configuration (dev, prod, ...)."
  },
  {
   "id": "tf-assoc-j3-19",
   "q": "Quelle commande crée un nouveau workspace ?",
   "choices": [
    "A. terraform workspace add NAME",
    "B. terraform workspace new NAME",
    "C. terraform workspace create --name NAME",
    "D. terraform new-workspace NAME"
   ],
   "answer": 1,
   "exp": "terraform workspace new crée et sélectionne un workspace."
  },
  {
   "id": "tf-assoc-j3-20",
   "q": "Quel est le workspace par défaut ?",
   "choices": [
    "A. main",
    "B. root",
    "C. default",
    "D. production"
   ],
   "answer": 2,
   "exp": "Le workspace par défaut s'appelle default et ne peut pas être supprimé."
  },
  {
   "id": "tf-assoc-j3-21",
   "q": "Comment accéder au nom du workspace dans la configuration ?",
   "choices": [
    "A. workspace.current",
    "B. var.workspace",
    "C. path.workspace",
    "D. terraform.workspace"
   ],
   "answer": 3,
   "exp": "terraform.workspace renvoie le nom du workspace sélectionné."
  },
  {
   "id": "tf-assoc-j3-22",
   "q": "Les workspaces CLI sont-ils adaptés à une forte isolation entre environnements (prod/dev) ?",
   "choices": [
    "A. Pas toujours : ils partagent la même configuration et les mêmes identifiants ; une séparation par dossiers/projets est souvent préférable",
    "B. Oui, ils garantissent une isolation totale des permissions et des identifiants",
    "C. Oui, car chaque workspace utilise automatiquement un compte cloud distinct",
    "D. Non, car ils ne peuvent contenir qu'une seule ressource"
   ],
   "answer": 0,
   "exp": "Les workspaces ne séparent pas les droits d'accès ; une isolation forte passe par des projets/comptes distincts."
  },
  {
   "id": "tf-assoc-j3-23",
   "q": "Quelle commande liste les workspaces ?",
   "choices": [
    "A. terraform workspace show --all",
    "B. terraform workspace list",
    "C. terraform list workspaces",
    "D. terraform workspace ls --state"
   ],
   "answer": 1,
   "exp": "workspace list affiche tous les workspaces ; show affiche le courant."
  },
  {
   "id": "tf-assoc-j3-24",
   "q": "Comment lire l'état d'une autre configuration depuis celle-ci ?",
   "choices": [
    "A. Avec le bloc import",
    "B. Avec la fonction file() sur le fichier tfstate",
    "C. Avec la data source terraform_remote_state",
    "D. Avec la commande terraform state pull dans la configuration"
   ],
   "answer": 2,
   "exp": "terraform_remote_state lit les outputs d'un état distant ; l'accès doit être autorisé."
  },
  {
   "id": "tf-assoc-j3-25",
   "q": "Que peut lire terraform_remote_state dans un autre état ?",
   "choices": [
    "A. Tous les attributs de toutes les ressources",
    "B. Uniquement les variables d'entrée",
    "C. Uniquement les providers utilisés",
    "D. Uniquement les outputs de niveau racine"
   ],
   "answer": 3,
   "exp": "Seuls les outputs racine sont exposés."
  },
  {
   "id": "tf-assoc-j3-26",
   "q": "Quelle commande télécharge l'état distant pour l'afficher localement ?",
   "choices": [
    "A. terraform state pull",
    "B. terraform state fetch",
    "C. terraform pull",
    "D. terraform show --remote"
   ],
   "answer": 0,
   "exp": "state pull écrit le contenu de l'état sur stdout ; state push envoie un état local."
  },
  {
   "id": "tf-assoc-j3-27",
   "q": "Quelle commande envoie un fichier d'état local vers le backend ?",
   "choices": [
    "A. terraform state upload",
    "B. terraform state push",
    "C. terraform push",
    "D. terraform backend put"
   ],
   "answer": 1,
   "exp": "state push est dangereux et ne doit servir qu'en dernier recours."
  },
  {
   "id": "tf-assoc-j3-28",
   "q": "Quelle commande supprime les ressources orphelines détectées pendant le refresh seulement ?",
   "choices": [
    "A. terraform refresh --delete",
    "B. terraform state clean",
    "C. terraform apply -refresh-only",
    "D. terraform plan -prune"
   ],
   "answer": 2,
   "exp": "apply -refresh-only met l'état à jour (y compris la disparition d'objets) sans changer l'infrastructure."
  },
  {
   "id": "tf-assoc-j3-29",
   "q": "Qu'est-ce que la dérive de configuration (drift) ?",
   "choices": [
    "A. Une erreur de syntaxe dans les fichiers .tf",
    "B. Une version de provider incompatible avec le CLI",
    "C. Une variable sans valeur par défaut",
    "D. Un écart entre l'infrastructure réelle et l'état/la configuration"
   ],
   "answer": 3,
   "exp": "La dérive provient de modifications hors Terraform."
  },
  {
   "id": "tf-assoc-j3-30",
   "q": "Comment limiter l'accès à un backend S3 contenant des états ?",
   "choices": [
    "A. Politiques IAM restrictives, chiffrement, versioning et blocage d'accès public",
    "B. Rendre le bucket public pour faciliter la lecture par l'équipe",
    "C. Stocker l'état dans le dépôt Git privé de l'équipe",
    "D. Désactiver tout journal d'accès pour réduire les coûts"
   ],
   "answer": 0,
   "exp": "L'état est sensible : contrôle d'accès, chiffrement et versioning sont recommandés."
  },
  {
   "id": "tf-assoc-j3-31",
   "q": "Quel avantage apporte le versioning d'un bucket S3 de backend ?",
   "choices": [
    "A. Accélérer les plans en compressant l'état",
    "B. Retrouver des versions antérieures de l'état en cas d'erreur",
    "C. Supprimer le besoin de verrouillage",
    "D. Chiffrer automatiquement les variables sensibles"
   ],
   "answer": 1,
   "exp": "Le versioning permet de restaurer un état précédent."
  },
  {
   "id": "tf-assoc-j3-32",
   "q": "Quel backend est utilisé par défaut quand aucun bloc backend n'est présent ?",
   "choices": [
    "A. remote",
    "B. s3",
    "C. local",
    "D. http"
   ],
   "answer": 2,
   "exp": "Le backend local stocke terraform.tfstate sur disque."
  },
  {
   "id": "tf-assoc-j3-33",
   "q": "Quel bloc configure l'intégration avec HCP Terraform pour exécuter des plans à distance ?",
   "choices": [
    "A. remote_state",
    "B. backend_cloud",
    "C. hcp",
    "D. cloud"
   ],
   "answer": 3,
   "exp": "Le bloc cloud { organization = ... workspaces { name = ... } } dans terraform."
  },
  {
   "id": "tf-assoc-j3-34",
   "q": "Les variables d'un bloc backend peuvent-elles utiliser des variables Terraform (var.xxx) ?",
   "choices": [
    "A. Non, les valeurs du backend ne peuvent pas référencer de variables",
    "B. Oui, comme n'importe quel argument de ressource",
    "C. Oui, mais uniquement les variables de type string",
    "D. Oui, via les locals uniquement"
   ],
   "answer": 0,
   "exp": "Le backend est évalué avant les variables ; on utilise -backend-config ou un fichier."
  },
  {
   "id": "tf-assoc-j3-35",
   "q": "Comment fournir une partie de la configuration du backend sans la coder en dur ?",
   "choices": [
    "A. terraform init -var backend=fichier",
    "B. terraform init -backend-config=fichier.hcl",
    "C. terraform apply -backend=fichier",
    "D. terraform plan --backend-file=fichier"
   ],
   "answer": 1,
   "exp": "-backend-config accepte des paires clé=valeur ou un fichier (partial configuration)."
  },
  {
   "id": "tf-assoc-j3-36",
   "q": "Que stocke l'état concernant une ressource ?",
   "choices": [
    "A. Uniquement son nom local dans la configuration",
    "B. Uniquement la date de sa dernière modification",
    "C. Son identifiant réel, ses attributs et ses dépendances",
    "D. Uniquement les variables d'entrée utilisées pour la créer"
   ],
   "answer": 2,
   "exp": "L'état contient les attributs renvoyés par le provider et les métadonnées."
  },
  {
   "id": "tf-assoc-j3-37",
   "q": "Quelle est la différence entre terraform plan et terraform plan -refresh=false ?",
   "choices": [
    "A. Avec -refresh=false, le plan est automatiquement appliqué",
    "B. Avec -refresh=false, Terraform ignore la configuration",
    "C. Avec -refresh=false, le verrouillage de l'état est ignoré",
    "D. Avec -refresh=false, Terraform ne relit pas l'état réel des ressources"
   ],
   "answer": 3,
   "exp": "Désactiver le refresh accélère le plan mais peut masquer la dérive."
  },
  {
   "id": "tf-assoc-j3-38",
   "q": "Que fait terraform state replace-provider ?",
   "choices": [
    "A. Met à jour la source d'un provider dans l'état (migration de namespace)",
    "B. Remplace l'état entier par celui d'un autre projet",
    "C. Supprime tous les providers non utilisés du dossier .terraform",
    "D. Installe une version plus récente du provider"
   ],
   "answer": 0,
   "exp": "Utile lors du changement de source d'un provider."
  },
  {
   "id": "tf-assoc-j3-39",
   "q": "Quel format a le fichier d'état ?",
   "choices": [
    "A. YAML",
    "B. JSON",
    "C. XML",
    "D. Binaire propriétaire"
   ],
   "answer": 1,
   "exp": "Le tfstate est un JSON ; il ne doit pas être édité manuellement."
  },
  {
   "id": "tf-assoc-j3-40",
   "q": "Pourquoi éviter de modifier manuellement le fichier d'état ?",
   "choices": [
    "A. Le fichier est chiffré et illisible",
    "B. Terraform recalcule le fichier à chaque lancement",
    "C. Une erreur peut corrompre l'état ; il faut préférer les commandes terraform state",
    "D. Le fichier est toujours en lecture seule"
   ],
   "answer": 2,
   "exp": "Utiliser state mv/rm ou les blocs moved/removed plutôt que l'édition manuelle."
  },
  {
   "id": "tf-assoc-j3-41",
   "q": "Quel bloc (Terraform 1.7+) retire une ressource de l'état sans la détruire, de façon déclarative ?",
   "choices": [
    "A. forget",
    "B. state_rm",
    "C. detach",
    "D. removed"
   ],
   "answer": 3,
   "exp": "Le bloc removed { from = ... lifecycle { destroy = false } } retire du suivi sans destruction."
  },
  {
   "id": "tf-assoc-j3-42",
   "q": "Que se passe-t-il quand on exécute terraform destroy avec un état vide ?",
   "choices": [
    "A. Rien n'est détruit car Terraform ne suit aucune ressource",
    "B. Terraform détruit toutes les ressources du compte cloud",
    "C. Terraform tente de reconstruire l'état avant de détruire",
    "D. Terraform échoue systématiquement avec une erreur de syntaxe"
   ],
   "answer": 0,
   "exp": "Terraform ne détruit que ce qui figure dans l'état."
  },
  {
   "id": "tf-assoc-j3-43",
   "q": "Quel est le rôle du chiffrement côté serveur pour un backend S3 ?",
   "choices": [
    "A. Chiffrer les plans entre les utilisateurs",
    "B. Protéger l'état au repos",
    "C. Chiffrer les variables avant leur saisie",
    "D. Protéger les identifiants du provider dans le code"
   ],
   "answer": 1,
   "exp": "Le chiffrement au repos protège les données sensibles contenues dans l'état."
  },
  {
   "id": "tf-assoc-j3-44",
   "q": "Dans quel cas utiliser terraform import ?",
   "choices": [
    "A. Pour installer un module depuis le registry",
    "B. Pour récupérer les variables d'un autre workspace",
    "C. Pour adopter sous gestion Terraform une ressource créée manuellement",
    "D. Pour télécharger les providers manquants"
   ],
   "answer": 2,
   "exp": "import rattache l'objet réel à une adresse de l'état."
  },
  {
   "id": "tf-assoc-j3-45",
   "q": "Que doit-on écrire en plus d'un import pour que le plan ne propose pas de suppression ?",
   "choices": [
    "A. Un bloc provider supplémentaire pour l'objet importé",
    "B. Une copie du fichier d'état dans le dépôt",
    "C. Un bloc lifecycle prevent_destroy sur chaque ressource",
    "D. Le bloc resource correspondant dans la configuration"
   ],
   "answer": 3,
   "exp": "L'import ajoute à l'état ; la configuration doit décrire la ressource."
  },
  {
   "id": "tf-assoc-j3-46",
   "q": "Quelle option génère automatiquement la configuration à partir de blocs import ?",
   "choices": [
    "A. terraform plan -generate-config-out=fichier.tf",
    "B. terraform import -auto-config",
    "C. terraform plan -scan",
    "D. terraform apply -discover"
   ],
   "answer": 0,
   "exp": "-generate-config-out crée un brouillon de configuration pour les ressources importées."
  },
  {
   "id": "tf-assoc-j3-47",
   "q": "Quelle commande affiche les outputs au format JSON ?",
   "choices": [
    "A. terraform output --format=json",
    "B. terraform output -json",
    "C. terraform show -outputs",
    "D. terraform output | jq"
   ],
   "answer": 1,
   "exp": "-json donne un résultat exploitable par des scripts ; -raw pour une valeur simple."
  },
  {
   "id": "tf-assoc-j3-48",
   "q": "Quand utilise-t-on terraform output -raw NOM ?",
   "choices": [
    "A. Pour afficher tous les outputs, sensibles compris, au format tableau",
    "B. Pour déchiffrer l'état distant",
    "C. Pour obtenir une valeur de type chaîne sans guillemets pour un script",
    "D. Pour forcer la mise à jour d'un output depuis le cloud"
   ],
   "answer": 2,
   "exp": "-raw imprime la valeur brute, pratique pour l'utiliser dans un script."
  },
  {
   "id": "tf-assoc-j3-49",
   "q": "Que signifie un état \"tainted\" pour une ressource ?",
   "choices": [
    "A. Elle est protégée contre toute modification future",
    "B. Elle est exclue du graphe de dépendances",
    "C. Elle est chiffrée dans le fichier d'état",
    "D. Elle est marquée pour être recréée lors du prochain apply"
   ],
   "answer": 3,
   "exp": "Une ressource tainted (échec de création ou taint manuel) sera détruite puis recréée."
  },
  {
   "id": "tf-assoc-j3-50",
   "q": "Quel est l'effet de terraform apply -refresh-only ?",
   "choices": [
    "A. Met à jour l'état et les outputs d'après le monde réel sans modifier l'infrastructure",
    "B. Recrée toutes les ressources dérivées du plan",
    "C. Applique uniquement les changements de variables",
    "D. Supprime l'état et le reconstruit depuis la configuration"
   ],
   "answer": 0,
   "exp": "Remplace la commande refresh dépréciée, avec revue et confirmation avant écriture de l'état."
  }
 ],
 "4": [
  {
   "id": "tf-assoc-j4-1",
   "q": "Qu'est-ce qu'un module Terraform ?",
   "choices": [
    "A. Un ensemble de fichiers de configuration dans un répertoire, réutilisable comme unité",
    "B. Un plugin binaire qui communique avec l'API d'un fournisseur",
    "C. Un fichier d'état partagé entre plusieurs équipes",
    "D. Une commande du CLI qui regroupe plusieurs opérations"
   ],
   "answer": 0,
   "exp": "Tout répertoire contenant des fichiers .tf est un module ; le module racine est celui où l'on exécute les commandes."
  },
  {
   "id": "tf-assoc-j4-2",
   "q": "Comment appelle-t-on un module depuis une configuration ?",
   "choices": [
    "A. Avec un bloc resource de type module",
    "B. Avec un bloc module et un argument source",
    "C. Avec une instruction import module",
    "D. Avec la fonction module() dans un local"
   ],
   "answer": 1,
   "exp": "module \"nom\" { source = \"./chemin\" ... }."
  },
  {
   "id": "tf-assoc-j4-3",
   "q": "Quel argument est obligatoire dans un bloc module ?",
   "choices": [
    "A. version",
    "B. providers",
    "C. source",
    "D. depends_on"
   ],
   "answer": 2,
   "exp": "source indique l'emplacement du module ; version n'est valable que pour le registry."
  },
  {
   "id": "tf-assoc-j4-4",
   "q": "Quelle commande télécharge les modules référencés ?",
   "choices": [
    "A. terraform get -providers",
    "B. terraform module install",
    "C. terraform apply -modules",
    "D. terraform init"
   ],
   "answer": 3,
   "exp": "init (ou terraform get) installe les modules dans .terraform/modules."
  },
  {
   "id": "tf-assoc-j4-5",
   "q": "Comment un module parent lit-il une valeur produite par un module enfant ?",
   "choices": [
    "A. Via module.<nom>.<output>",
    "B. Via var.<nom>.<output>",
    "C. Via child.<nom>.<output>",
    "D. Via data.module.<nom>"
   ],
   "answer": 0,
   "exp": "Seuls les outputs déclarés du module enfant sont accessibles."
  },
  {
   "id": "tf-assoc-j4-6",
   "q": "Comment passe-t-on une valeur à un module enfant ?",
   "choices": [
    "A. Par une variable d'environnement TF_MODULE_ uniquement",
    "B. Par un argument du bloc module correspondant à une variable du module",
    "C. En modifiant directement le fichier du module enfant",
    "D. Par un fichier d'état partagé"
   ],
   "answer": 1,
   "exp": "Les arguments du bloc module alimentent les variables d'entrée du module."
  },
  {
   "id": "tf-assoc-j4-7",
   "q": "Un module enfant peut-il accéder à une variable du module parent sans qu'elle soit passée ?",
   "choices": [
    "A. Oui, toutes les variables sont globales entre modules",
    "B. Oui, mais uniquement les variables sensibles",
    "C. Non, la portée est locale : il faut passer les valeurs explicitement",
    "D. Oui, à condition d'utiliser le même nom de variable"
   ],
   "answer": 2,
   "exp": "Chaque module a sa propre portée ; les échanges se font par variables et outputs."
  },
  {
   "id": "tf-assoc-j4-8",
   "q": "Quelles sources de modules sont supportées ?",
   "choices": [
    "A. Uniquement des chemins locaux",
    "B. Uniquement le registry public de HashiCorp",
    "C. Uniquement des dépôts Git privés",
    "D. Chemins locaux, registry, Git, HTTP, S3 et autres"
   ],
   "answer": 3,
   "exp": "Terraform supporte de nombreux types de sources."
  },
  {
   "id": "tf-assoc-j4-9",
   "q": "Comment spécifier une version d'un module du registry ?",
   "choices": [
    "A. version = \"~> 5.0\" dans le bloc module",
    "B. ?ref=5.0 dans le bloc provider",
    "C. tag = \"5.0\" dans required_providers",
    "D. module_version = \"5.0\" dans locals"
   ],
   "answer": 0,
   "exp": "L'argument version accepte les mêmes contraintes que les providers."
  },
  {
   "id": "tf-assoc-j4-10",
   "q": "Comment épingler un module Git à un tag ?",
   "choices": [
    "A. source = \"git::https://exemple.com/mod.git\" avec version = \"v1.2.0\"",
    "B. source = \"git::https://exemple.com/mod.git?ref=v1.2.0\"",
    "C. source = \"git@exemple.com:mod.git#tag\"",
    "D. source = \"tag:v1.2.0\""
   ],
   "answer": 1,
   "exp": "Pour Git, la version se précise avec ?ref=, version n'est pas supporté hors registry."
  },
  {
   "id": "tf-assoc-j4-11",
   "q": "Le registry public Terraform héberge quels éléments ?",
   "choices": [
    "A. Uniquement des providers",
    "B. Uniquement des modules vérifiés",
    "C. Providers et modules publics",
    "D. Uniquement des politiques Sentinel"
   ],
   "answer": 2,
   "exp": "registry.terraform.io publie providers, modules et politiques."
  },
  {
   "id": "tf-assoc-j4-12",
   "q": "Quel format a une source de module du registry public ?",
   "choices": [
    "A. <PROVIDER>/<NAMESPACE>/<NOM>",
    "B. <NOM>@<VERSION>",
    "C. registry:<NOM>",
    "D. <NAMESPACE>/<NOM>/<PROVIDER>"
   ],
   "answer": 3,
   "exp": "Ex. terraform-aws-modules/vpc/aws."
  },
  {
   "id": "tf-assoc-j4-13",
   "q": "Que signifie le badge \"verified\" sur un module du registry ?",
   "choices": [
    "A. Le module est maintenu par un partenaire vérifié par HashiCorp",
    "B. Le module est garanti sans aucun bug de sécurité",
    "C. Le module est le seul autorisé en production",
    "D. Le module est signé par chaque utilisateur"
   ],
   "answer": 0,
   "exp": "Le badge atteste l'origine ; il ne garantit pas l'absence de défauts."
  },
  {
   "id": "tf-assoc-j4-14",
   "q": "Quelle convention de nom suit un dépôt de module publiable sur le registry ?",
   "choices": [
    "A. module-<PROVIDER>-<NOM>",
    "B. terraform-<PROVIDER>-<NOM>",
    "C. tf-<NOM>-<PROVIDER>",
    "D. <PROVIDER>-terraform-<NOM>"
   ],
   "answer": 1,
   "exp": "Ex. terraform-aws-vpc."
  },
  {
   "id": "tf-assoc-j4-15",
   "q": "Quels fichiers constituent la structure standard d'un module ?",
   "choices": [
    "A. Uniquement un fichier module.tf",
    "B. main.tf et terraform.tfstate",
    "C. main.tf, variables.tf, outputs.tf et README",
    "D. providers.tf et .terraform.lock.hcl uniquement"
   ],
   "answer": 2,
   "exp": "La convention facilite la lecture et la publication."
  },
  {
   "id": "tf-assoc-j4-16",
   "q": "Un module doit-il contenir des blocs provider ?",
   "choices": [
    "A. Oui, chaque module doit définir tous ses providers",
    "B. Oui, mais seulement avec alias",
    "C. Non, c'est interdit par la syntaxe HCL",
    "D. Il est conseillé de ne pas les définir : les providers se configurent dans le module racine"
   ],
   "answer": 3,
   "exp": "Les modules réutilisables déclarent required_providers et laissent la configuration à l'appelant."
  },
  {
   "id": "tf-assoc-j4-17",
   "q": "Comment transmettre un provider avec alias à un module ?",
   "choices": [
    "A. Avec l'argument providers = { aws = aws.west }",
    "B. Avec l'argument alias dans le bloc module",
    "C. Avec la variable provider_alias",
    "D. Avec depends_on = [aws.west]"
   ],
   "answer": 0,
   "exp": "L'argument providers du bloc module mappe les configurations."
  },
  {
   "id": "tf-assoc-j4-18",
   "q": "Quel méta-argument permet de créer plusieurs instances d'un module ?",
   "choices": [
    "A. repeat",
    "B. count ou for_each",
    "C. instances",
    "D. loop"
   ],
   "answer": 1,
   "exp": "count et for_each sont supportés sur les modules depuis la version 0.13."
  },
  {
   "id": "tf-assoc-j4-19",
   "q": "Que se passe-t-il lorsqu'on change la source d'un module ?",
   "choices": [
    "A. Le changement est appliqué sans aucune action",
    "B. Terraform met à jour automatiquement le fichier d'état",
    "C. Il faut relancer terraform init pour télécharger le nouveau module",
    "D. Terraform ignore le changement jusqu'au prochain destroy"
   ],
   "answer": 2,
   "exp": "init installe les modules modifiés."
  },
  {
   "id": "tf-assoc-j4-20",
   "q": "Où Terraform stocke-t-il les modules téléchargés ?",
   "choices": [
    "A. Dans le fichier terraform.tfstate",
    "B. Dans ~/.terraform.d/state",
    "C. Dans le dossier du système d'exploitation /usr/lib",
    "D. Dans .terraform/modules"
   ],
   "answer": 3,
   "exp": "Les modules sont mis en cache dans .terraform/modules."
  },
  {
   "id": "tf-assoc-j4-21",
   "q": "Comment exposer dans le module racine l'output d'un module enfant ?",
   "choices": [
    "A. Déclarer un bloc output qui référence module.<nom>.<output>",
    "B. Ajouter output = true dans le bloc module",
    "C. Utiliser terraform output -module",
    "D. Les outputs d'enfants sont toujours exposés automatiquement"
   ],
   "answer": 0,
   "exp": "Les outputs d'un enfant ne remontent pas automatiquement."
  },
  {
   "id": "tf-assoc-j4-22",
   "q": "Quel est l'avantage principal des modules ?",
   "choices": [
    "A. Suppression du besoin de providers",
    "B. Réutilisation, abstraction et cohérence des configurations",
    "C. Remplacement du fichier d'état",
    "D. Exécution plus rapide de terraform init uniquement"
   ],
   "answer": 1,
   "exp": "Les modules permettent de factoriser et standardiser."
  },
  {
   "id": "tf-assoc-j4-23",
   "q": "Qu'est-ce que HCP Terraform ?",
   "choices": [
    "A. Un fournisseur cloud de machines virtuelles de HashiCorp",
    "B. Une extension de syntaxe HCL pour les politiques",
    "C. Un service géré qui exécute Terraform à distance avec état, verrouillage et collaboration",
    "D. Un module du registry pour déployer HashiCorp Vault"
   ],
   "answer": 2,
   "exp": "HCP Terraform (anciennement Terraform Cloud) fournit état distant, runs, politiques et gestion d'équipe."
  },
  {
   "id": "tf-assoc-j4-24",
   "q": "Quelle est l'unité principale d'organisation des runs et de l'état dans HCP Terraform ?",
   "choices": [
    "A. Le module",
    "B. Le provider",
    "C. Le bloc backend",
    "D. Le workspace"
   ],
   "answer": 3,
   "exp": "Un workspace HCP contient configuration, variables, état et historique des runs."
  },
  {
   "id": "tf-assoc-j4-25",
   "q": "Quelle est la différence entre un workspace HCP Terraform et un workspace CLI ?",
   "choices": [
    "A. Un workspace HCP possède ses propres variables, permissions et historique ; le CLI ne gère que des états distincts",
    "B. Les deux sont strictement identiques",
    "C. Un workspace CLI est plus riche en fonctionnalités",
    "D. Un workspace HCP ne peut contenir aucun état"
   ],
   "answer": 0,
   "exp": "HCP workspace = environnement de gestion complet."
  },
  {
   "id": "tf-assoc-j4-26",
   "q": "Quels workflows de run HCP Terraform propose-t-il ?",
   "choices": [
    "A. Uniquement VCS-driven",
    "B. VCS-driven, CLI-driven et API-driven",
    "C. Uniquement manuel via l'interface web",
    "D. Uniquement via des webhooks externes"
   ],
   "answer": 1,
   "exp": "Ces trois workflows couvrent la plupart des usages."
  },
  {
   "id": "tf-assoc-j4-27",
   "q": "Quel langage de politique est intégré à HCP Terraform (offres supérieures) ?",
   "choices": [
    "A. Rego exclusivement",
    "B. Cedar",
    "C. Sentinel (et OPA)",
    "D. Ansible"
   ],
   "answer": 2,
   "exp": "HCP Terraform supporte Sentinel et Open Policy Agent pour la politique as code."
  },
  {
   "id": "tf-assoc-j4-28",
   "q": "Quand les politiques Sentinel sont-elles évaluées dans un run ?",
   "choices": [
    "A. Avant terraform init",
    "B. Uniquement après l'apply",
    "C. Uniquement pendant terraform destroy",
    "D. Après le plan et avant l'apply"
   ],
   "answer": 3,
   "exp": "Les vérifications de politique se placent entre plan et apply."
  },
  {
   "id": "tf-assoc-j4-29",
   "q": "Que permet la fonctionnalité d'estimation des coûts de HCP Terraform ?",
   "choices": [
    "A. Afficher une estimation du coût mensuel avant l'apply",
    "B. Facturer automatiquement chaque ressource créée",
    "C. Supprimer les ressources trop coûteuses",
    "D. Convertir les ressources vers un fournisseur moins cher"
   ],
   "answer": 0,
   "exp": "L'estimation intervient après le plan."
  },
  {
   "id": "tf-assoc-j4-30",
   "q": "Que sont les variable sets dans HCP Terraform ?",
   "choices": [
    "A. Des fichiers tfvars versionnés dans Git",
    "B. Des ensembles de variables partageables entre plusieurs workspaces ou projets",
    "C. Des listes de variables d'environnement du système",
    "D. Des modules contenant uniquement des variables"
   ],
   "answer": 1,
   "exp": "Les variable sets évitent de répéter les mêmes variables."
  },
  {
   "id": "tf-assoc-j4-31",
   "q": "Comment marquer une variable de workspace comme sensible dans HCP Terraform ?",
   "choices": [
    "A. Préfixer le nom par SECRET_",
    "B. La stocker dans un fichier .auto.tfvars",
    "C. Cocher l'option sensitive : la valeur est écrite une fois puis masquée",
    "D. Utiliser un output nommé secret"
   ],
   "answer": 2,
   "exp": "Les variables sensibles ne sont plus visibles après sauvegarde."
  },
  {
   "id": "tf-assoc-j4-32",
   "q": "Qu'est-ce qu'un registre privé dans HCP Terraform ?",
   "choices": [
    "A. Un backend S3 privé",
    "B. Un coffre-fort de secrets",
    "C. Un fichier .terraformrc personnalisé",
    "D. Un registry d'organisation pour publier modules et providers internes"
   ],
   "answer": 3,
   "exp": "Le registre privé facilite le partage interne."
  },
  {
   "id": "tf-assoc-j4-33",
   "q": "Quelle fonction de HCP Terraform détecte les écarts de configuration en continu ?",
   "choices": [
    "A. Drift detection (health assessments)",
    "B. Cost estimation",
    "C. Run tasks",
    "D. Sentinel mocks"
   ],
   "answer": 0,
   "exp": "Les évaluations de santé comparent périodiquement l'infrastructure à l'état."
  },
  {
   "id": "tf-assoc-j4-34",
   "q": "Comment connecter la CLI à HCP Terraform ?",
   "choices": [
    "A. terraform connect cloud",
    "B. terraform login puis un bloc cloud dans la configuration",
    "C. Définir TF_BACKEND=cloud uniquement",
    "D. Installer le provider tfe"
   ],
   "answer": 1,
   "exp": "login enregistre un jeton ; le bloc cloud sélectionne organisation et workspace."
  },
  {
   "id": "tf-assoc-j4-35",
   "q": "Où le jeton d'API de terraform login est-il stocké par défaut ?",
   "choices": [
    "A. Dans terraform.tfstate",
    "B. Dans .terraform.lock.hcl",
    "C. Dans credentials.tfrc.json du répertoire de configuration utilisateur",
    "D. Dans le dépôt Git du projet"
   ],
   "answer": 2,
   "exp": "Le fichier credentials.tfrc.json est local à l'utilisateur."
  },
  {
   "id": "tf-assoc-j4-36",
   "q": "Quel provider permet de gérer HCP Terraform lui-même avec Terraform ?",
   "choices": [
    "A. hcp-core",
    "B. vault",
    "C. consul",
    "D. tfe"
   ],
   "answer": 3,
   "exp": "Le provider tfe gère organisations, workspaces, variables, équipes."
  },
  {
   "id": "tf-assoc-j4-37",
   "q": "Quelle commande permet de tester un module avec des fichiers .tftest.hcl ?",
   "choices": [
    "A. terraform test",
    "B. terraform check",
    "C. terraform verify",
    "D. terraform module test"
   ],
   "answer": 0,
   "exp": "terraform test exécute les tests natifs (Terraform 1.6+)."
  },
  {
   "id": "tf-assoc-j4-38",
   "q": "Qu'est-ce qu'un bloc check ?",
   "choices": [
    "A. Un bloc qui arrête systématiquement l'apply",
    "B. Une assertion de validation de l'infrastructure produisant des avertissements",
    "C. Un bloc de configuration du backend",
    "D. Un équivalent de provisioner"
   ],
   "answer": 1,
   "exp": "check évalue des conditions sans bloquer l'apply (avertissement)."
  },
  {
   "id": "tf-assoc-j4-39",
   "q": "Quel est le rôle de precondition et postcondition ?",
   "choices": [
    "A. Définir l'ordre d'exécution des modules",
    "B. Installer des providers conditionnellement",
    "C. Valider des hypothèses avant ou après la création d'une ressource",
    "D. Remplacer le bloc variable"
   ],
   "answer": 2,
   "exp": "Elles sont déclarées dans lifecycle et bloquent en cas d'échec."
  },
  {
   "id": "tf-assoc-j4-40",
   "q": "Quelle commande vérifie la présence de modules non installés ?",
   "choices": [
    "A. terraform fmt",
    "B. terraform output",
    "C. terraform console",
    "D. terraform validate"
   ],
   "answer": 3,
   "exp": "validate échoue si un module n'est pas initialisé."
  },
  {
   "id": "tf-assoc-j4-41",
   "q": "Comment un module doit-il déclarer les providers dont il dépend ?",
   "choices": [
    "A. Dans un bloc required_providers du bloc terraform",
    "B. Dans un fichier providers.json",
    "C. Dans le fichier README du module",
    "D. Dans une variable provider_list"
   ],
   "answer": 0,
   "exp": "required_providers déclare source et contrainte de version."
  },
  {
   "id": "tf-assoc-j4-42",
   "q": "Que fait terraform get -update ?",
   "choices": [
    "A. Met à jour les providers",
    "B. Met à jour les modules déjà téléchargés",
    "C. Met à jour le CLI",
    "D. Met à jour l'état distant"
   ],
   "answer": 1,
   "exp": "get -update force le re-téléchargement des modules."
  },
  {
   "id": "tf-assoc-j4-43",
   "q": "Comment limiter l'impact des changements d'un module partagé sur plusieurs consommateurs ?",
   "choices": [
    "A. Toujours utiliser la branche principale du module",
    "B. Copier le module dans chaque projet sans suivi",
    "C. Utiliser des versions épinglées et des contraintes de version",
    "D. Désactiver terraform init"
   ],
   "answer": 2,
   "exp": "L'épinglage garantit des mises à jour contrôlées."
  },
  {
   "id": "tf-assoc-j4-44",
   "q": "Qu'indique la contrainte >= 1.2, < 2.0 ?",
   "choices": [
    "A. Uniquement 1.2 et 2.0",
    "B. Toute version supérieure à 2.0",
    "C. Toute version inférieure à 1.2",
    "D. Toute version entre 1.2 incluse et 2.0 exclue"
   ],
   "answer": 3,
   "exp": "Les contraintes se combinent avec des virgules (ET logique)."
  },
  {
   "id": "tf-assoc-j4-45",
   "q": "Quel est le comportement par défaut d'un run VCS-driven dans HCP Terraform lors d'un push ?",
   "choices": [
    "A. Un plan est lancé automatiquement ; l'apply demande généralement une confirmation",
    "B. Un apply est exécuté sans plan",
    "C. Rien ne se passe tant qu'une commande CLI n'est pas lancée",
    "D. Le dépôt est supprimé après le run"
   ],
   "answer": 0,
   "exp": "Les runs spéculatifs sur les pull requests ne s'appliquent pas."
  },
  {
   "id": "tf-assoc-j4-46",
   "q": "Qu'est-ce qu'un speculative plan ?",
   "choices": [
    "A. Un plan qui modifie l'état à titre d'essai",
    "B. Un plan de prévisualisation qui ne peut pas être appliqué",
    "C. Un plan généré par intelligence artificielle",
    "D. Un plan exécuté uniquement sur le workspace default"
   ],
   "answer": 1,
   "exp": "Typiquement utilisé sur les pull requests pour relecture."
  },
  {
   "id": "tf-assoc-j4-47",
   "q": "Quel mode d'exécution permet de faire tourner les runs sur sa propre infrastructure ?",
   "choices": [
    "A. Remote exec local",
    "B. Mode offline",
    "C. Agents HCP Terraform (mode agent)",
    "D. Mode sandbox"
   ],
   "answer": 2,
   "exp": "Les agents s'exécutent dans le réseau privé de l'organisation."
  },
  {
   "id": "tf-assoc-j4-48",
   "q": "Quel est l'intérêt des run tasks ?",
   "choices": [
    "A. Programmer des runs à heure fixe uniquement",
    "B. Exécuter des provisioners distants",
    "C. Remplacer le verrouillage de l'état",
    "D. Intégrer des outils tiers (sécurité, conformité) dans le cycle de run"
   ],
   "answer": 3,
   "exp": "Elles appellent des services externes à des étapes précises."
  },
  {
   "id": "tf-assoc-j4-49",
   "q": "Quel mécanisme HCP Terraform utilise-t-il pour contrôler l'accès par équipe ?",
   "choices": [
    "A. Permissions de projet et de workspace attribuées à des équipes",
    "B. Uniquement des fichiers .htaccess",
    "C. Uniquement des groupes IAM du cloud",
    "D. Un seul compte partagé par organisation"
   ],
   "answer": 0,
   "exp": "Les équipes reçoivent des niveaux d'accès (lecture, plan, écriture, admin)."
  },
  {
   "id": "tf-assoc-j4-50",
   "q": "Comment partager des états entre workspaces HCP sans lire l'état complet ?",
   "choices": [
    "A. En copiant les fichiers tfstate manuellement",
    "B. Avec tfe_outputs ou terraform_remote_state sur les outputs autorisés",
    "C. En utilisant le même workspace pour tout",
    "D. Avec terraform state push depuis chaque poste"
   ],
   "answer": 1,
   "exp": "Le partage se fait via les outputs ; l'accès est contrôlé."
  }
 ],
 "5": [
  {
   "id": "tf-assoc-j5-1",
   "q": "Une équipe veut garantir que tous les membres utilisent les mêmes versions de providers. Que doit-elle faire ?",
   "choices": [
    "A. Versionner le dossier .terraform entier dans Git",
    "B. Versionner le fichier .terraform.lock.hcl et définir des contraintes dans required_providers",
    "C. Demander à chaque membre d'installer manuellement le même binaire de provider",
    "D. Désactiver terraform init sur les postes des développeurs"
   ],
   "answer": 1,
   "exp": "Le lock file fige les versions exactes ; les contraintes bornent les versions acceptables."
  },
  {
   "id": "tf-assoc-j5-2",
   "q": "Un plan affiche -/+ sur une ressource après modification d'un argument. Que signifie-t-il ?",
   "choices": [
    "A. La ressource sera simplement mise à jour en place",
    "B. La ressource sera retirée de l'état sans être détruite",
    "C. L'argument modifié force le remplacement : destruction puis recréation",
    "D. La ressource sera ignorée lors de l'apply"
   ],
   "answer": 2,
   "exp": "Certains arguments sont immuables et imposent un remplacement (forces replacement)."
  },
  {
   "id": "tf-assoc-j5-3",
   "q": "Quel est le bon ordre du workflow standard ?",
   "choices": [
    "A. apply, init, plan",
    "B. plan, init, apply",
    "C. validate, apply, init",
    "D. init, plan, apply"
   ],
   "answer": 3,
   "exp": "On initialise, on prévisualise avec plan, puis on applique."
  },
  {
   "id": "tf-assoc-j5-4",
   "q": "Un collègue a modifié manuellement un groupe de sécurité dans la console. Quelle sera la conséquence au prochain plan ?",
   "choices": [
    "A. Terraform détecte la différence et propose de ramener la ressource à l'état déclaré",
    "B. Terraform ignore définitivement la modification",
    "C. Terraform met à jour la configuration pour refléter la console",
    "D. Terraform supprime le groupe de sécurité"
   ],
   "answer": 0,
   "exp": "Le refresh détecte la dérive ; le plan la corrige sauf si ignore_changes est défini."
  },
  {
   "id": "tf-assoc-j5-5",
   "q": "Vous devez créer trois sous-réseaux à partir d'une map var.subnets. Quel méta-argument convient ?",
   "choices": [
    "A. count = var.subnets",
    "B. for_each = var.subnets",
    "C. depends_on = var.subnets",
    "D. provider = var.subnets"
   ],
   "answer": 1,
   "exp": "for_each accepte une map et crée une instance par clé."
  },
  {
   "id": "tf-assoc-j5-6",
   "q": "Comment éviter que la suppression d'un élément au milieu d'une liste ne recrée d'autres ressources créées avec count ?",
   "choices": [
    "A. Utiliser count avec un nombre plus grand",
    "B. Désactiver le refresh",
    "C. Utiliser for_each avec des clés stables à la place de count",
    "D. Utiliser depends_on"
   ],
   "answer": 2,
   "exp": "Avec count, les index se décalent ; for_each identifie par clé."
  },
  {
   "id": "tf-assoc-j5-7",
   "q": "Quelle commande permet d'inspecter rapidement la valeur d'une expression ?",
   "choices": [
    "A. terraform eval",
    "B. terraform inspect",
    "C. terraform debug",
    "D. terraform console"
   ],
   "answer": 3,
   "exp": "La console évalue des expressions HCL en utilisant l'état."
  },
  {
   "id": "tf-assoc-j5-8",
   "q": "Une variable obligatoire n'a pas de valeur. Que fait Terraform en mode interactif ?",
   "choices": [
    "A. Il demande la valeur à l'utilisateur",
    "B. Il utilise une chaîne vide",
    "C. Il échoue sans rien demander",
    "D. Il lit la valeur dans l'état"
   ],
   "answer": 0,
   "exp": "En l'absence de default, Terraform invite à saisir la valeur (sauf -input=false)."
  },
  {
   "id": "tf-assoc-j5-9",
   "q": "Quel est l'effet de terraform apply -auto-approve en pipeline CI ?",
   "choices": [
    "A. Il valide la syntaxe uniquement",
    "B. Il applique sans demander de confirmation interactive",
    "C. Il ignore le verrouillage de l'état",
    "D. Il détruit les ressources non référencées"
   ],
   "answer": 1,
   "exp": "Utile en automatisation, mais il faut un plan revu en amont."
  },
  {
   "id": "tf-assoc-j5-10",
   "q": "Quelle est la meilleure pratique pour appliquer en CI exactement ce qui a été relu ?",
   "choices": [
    "A. Relancer un nouveau plan juste avant l'apply sans le sauvegarder",
    "B. Exécuter apply directement sans plan",
    "C. Sauvegarder le plan avec -out puis l'appliquer",
    "D. Modifier l'état à la main entre les deux"
   ],
   "answer": 2,
   "exp": "Un plan sauvegardé évite toute dérive entre revue et exécution."
  },
  {
   "id": "tf-assoc-j5-11",
   "q": "Quelle option évite d'afficher des secrets dans les journaux de CI ?",
   "choices": [
    "A. Désactiver le provider",
    "B. Utiliser terraform fmt",
    "C. Supprimer les outputs",
    "D. Marquer les variables et outputs comme sensitive"
   ],
   "answer": 3,
   "exp": "sensitive masque les valeurs dans la sortie CLI."
  },
  {
   "id": "tf-assoc-j5-12",
   "q": "Quel est le rôle de required_version dans le bloc terraform ?",
   "choices": [
    "A. Contraindre la version de la CLI Terraform",
    "B. Contraindre la version d'un module",
    "C. Contraindre la version du fichier d'état",
    "D. Contraindre la version du provider local"
   ],
   "answer": 0,
   "exp": "Elle empêche d'utiliser une CLI incompatible."
  },
  {
   "id": "tf-assoc-j5-13",
   "q": "Quelle commande affiche les providers requis par la configuration ?",
   "choices": [
    "A. terraform show providers",
    "B. terraform providers",
    "C. terraform list providers",
    "D. terraform plugins"
   ],
   "answer": 1,
   "exp": "providers affiche l'arborescence des providers requis."
  },
  {
   "id": "tf-assoc-j5-14",
   "q": "Lequel de ces éléments NE doit PAS être versionné dans Git ?",
   "choices": [
    "A. main.tf",
    "B. variables.tf",
    "C. terraform.tfstate",
    "D. outputs.tf"
   ],
   "answer": 2,
   "exp": "L'état doit résider dans un backend sécurisé."
  },
  {
   "id": "tf-assoc-j5-15",
   "q": "Quelle commande supprime uniquement les ressources d'une configuration, sans effacer les fichiers .tf ?",
   "choices": [
    "A. rm -rf .terraform",
    "B. terraform state rm *",
    "C. terraform fmt -delete",
    "D. terraform destroy"
   ],
   "answer": 3,
   "exp": "destroy détruit l'infrastructure ; les fichiers de configuration restent."
  },
  {
   "id": "tf-assoc-j5-16",
   "q": "Un output contient une valeur sensible. Comment la lire dans un script ?",
   "choices": [
    "A. terraform output -raw nom ou -json",
    "B. Elle est impossible à lire",
    "C. Via terraform fmt",
    "D. Via terraform validate"
   ],
   "answer": 0,
   "exp": "sensitive masque l'affichage mais la valeur reste accessible explicitement."
  },
  {
   "id": "tf-assoc-j5-17",
   "q": "Quelle affirmation sur terraform validate est correcte ?",
   "choices": [
    "A. Il applique les changements de manière sûre",
    "B. Il vérifie la syntaxe et la cohérence interne sans accéder aux ressources distantes",
    "C. Il compare la configuration à l'infrastructure réelle",
    "D. Il met à jour les providers"
   ],
   "answer": 1,
   "exp": "validate ne contacte pas les API des fournisseurs."
  },
  {
   "id": "tf-assoc-j5-18",
   "q": "Quel mécanisme déclare explicitement une dépendance sans référence d'attribut ?",
   "choices": [
    "A. lifecycle",
    "B. provider",
    "C. depends_on",
    "D. count"
   ],
   "answer": 2,
   "exp": "depends_on force l'ordre."
  },
  {
   "id": "tf-assoc-j5-19",
   "q": "Quel type de bloc lit l'état d'une ressource existante sans la gérer ?",
   "choices": [
    "A. resource",
    "B. module",
    "C. output",
    "D. data"
   ],
   "answer": 3,
   "exp": "Les data sources permettent des lectures."
  },
  {
   "id": "tf-assoc-j5-20",
   "q": "Comment injecter une variable d'entrée via l'environnement ?",
   "choices": [
    "A. export TF_VAR_nom=valeur",
    "B. export TERRAFORM_VAR_nom=valeur",
    "C. set VAR_nom=valeur",
    "D. export TF_ENV_nom=valeur"
   ],
   "answer": 0,
   "exp": "Le préfixe est TF_VAR_."
  },
  {
   "id": "tf-assoc-j5-21",
   "q": "Quel est le comportement par défaut de terraform destroy ?",
   "choices": [
    "A. Il supprime sans demander",
    "B. Il demande une confirmation avant de supprimer",
    "C. Il supprime uniquement l'état",
    "D. Il supprime uniquement les modules"
   ],
   "answer": 1,
   "exp": "Comme apply, destroy demande confirmation sauf -auto-approve."
  },
  {
   "id": "tf-assoc-j5-22",
   "q": "Comment convertir une liste en set pour for_each ?",
   "choices": [
    "A. set(var.liste)",
    "B. tolist(var.liste)",
    "C. toset(var.liste)",
    "D. tomap(var.liste)"
   ],
   "answer": 2,
   "exp": "toset supprime les doublons et retourne un set."
  },
  {
   "id": "tf-assoc-j5-23",
   "q": "Quelle fonction produit une chaîne à partir d'une liste ?",
   "choices": [
    "A. split",
    "B. format",
    "C. trimspace",
    "D. join"
   ],
   "answer": 3,
   "exp": "join(\",\", liste) concatène avec un séparateur."
  },
  {
   "id": "tf-assoc-j5-24",
   "q": "Quelle fonction découpe une chaîne en liste ?",
   "choices": [
    "A. split",
    "B. join",
    "C. regex",
    "D. chunklist"
   ],
   "answer": 0,
   "exp": "split(\",\", \"a,b\") renvoie [\"a\", \"b\"]."
  },
  {
   "id": "tf-assoc-j5-25",
   "q": "Quelle fonction retourne le premier élément non nul d'une liste d'arguments ?",
   "choices": [
    "A. try",
    "B. coalesce",
    "C. lookup",
    "D. element"
   ],
   "answer": 1,
   "exp": "coalesce renvoie le premier argument non nul ni vide."
  },
  {
   "id": "tf-assoc-j5-26",
   "q": "Quelle commande réécrit les fichiers selon le style canonique ?",
   "choices": [
    "A. terraform validate",
    "B. terraform lint",
    "C. terraform fmt",
    "D. terraform style"
   ],
   "answer": 2,
   "exp": "fmt applique la mise en forme standard."
  },
  {
   "id": "tf-assoc-j5-27",
   "q": "Une configuration doit déployer dans deux régions AWS. Que faut-il faire ?",
   "choices": [
    "A. Créer deux fichiers d'état dans le même répertoire",
    "B. Modifier la région entre deux apply",
    "C. Utiliser deux workspaces avec un seul provider sans alias",
    "D. Définir deux blocs provider avec des alias et les référencer dans les ressources"
   ],
   "answer": 3,
   "exp": "Les alias permettent plusieurs configurations d'un même provider."
  },
  {
   "id": "tf-assoc-j5-28",
   "q": "Quelle commande affiche l'arborescence de dépendances sous forme DOT ?",
   "choices": [
    "A. terraform graph",
    "B. terraform show -dot",
    "C. terraform tree",
    "D. terraform deps -graph"
   ],
   "answer": 0,
   "exp": "graph produit le format Graphviz."
  },
  {
   "id": "tf-assoc-j5-29",
   "q": "Comment adopter une ressource existante dans le code avec un bloc import ?",
   "choices": [
    "A. adopt { resource = aws_s3_bucket.b }",
    "B. import { to = aws_s3_bucket.b  id = \"nom\" }",
    "C. terraform { import = true }",
    "D. resource \"import\" \"b\" {}"
   ],
   "answer": 1,
   "exp": "Le bloc import fait partie de la configuration depuis Terraform 1.5."
  },
  {
   "id": "tf-assoc-j5-30",
   "q": "Que garantit l'idempotence d'un plan ?",
   "choices": [
    "A. Chaque apply recrée l'infrastructure",
    "B. Le plan est toujours identique d'un jour à l'autre",
    "C. Un second apply sans changement ne produit aucune modification",
    "D. L'état est supprimé après apply"
   ],
   "answer": 2,
   "exp": "Après convergence, plan renvoie « No changes »."
  },
  {
   "id": "tf-assoc-j5-31",
   "q": "Qu'est-ce qu'un provider officiel ?",
   "choices": [
    "A. Un provider écrit par n'importe quel utilisateur",
    "B. Un provider installé par défaut avec le CLI",
    "C. Un provider exécuté uniquement sur HCP Terraform",
    "D. Un provider maintenu par HashiCorp"
   ],
   "answer": 3,
   "exp": "Les niveaux du registry : official, partner, community."
  },
  {
   "id": "tf-assoc-j5-32",
   "q": "Comment vérifier l'intégrité d'un provider téléchargé ?",
   "choices": [
    "A. Via les checksums enregistrés dans le lock file",
    "B. En lisant le fichier tfstate",
    "C. En relançant terraform fmt",
    "D. En supprimant .terraform"
   ],
   "answer": 0,
   "exp": "Le lock file stocke des hachages des binaires."
  },
  {
   "id": "tf-assoc-j5-33",
   "q": "Quelle erreur survient si on modifie le backend sans réinitialiser ?",
   "choices": [
    "A. Variable manquante",
    "B. Backend configuration changed : init requis",
    "C. Provider inconnu",
    "D. Module introuvable"
   ],
   "answer": 1,
   "exp": "Terraform demande de relancer init (éventuellement avec -migrate-state)."
  },
  {
   "id": "tf-assoc-j5-34",
   "q": "Quelle valeur de lifecycle empêche la destruction d'une base de données par erreur ?",
   "choices": [
    "A. ignore_changes = all",
    "B. create_before_destroy = true",
    "C. prevent_destroy = true",
    "D. replace_triggered_by = []"
   ],
   "answer": 2,
   "exp": "prevent_destroy bloque tout plan de destruction."
  },
  {
   "id": "tf-assoc-j5-35",
   "q": "Comment renommer une ressource dans le code sans la recréer ?",
   "choices": [
    "A. Supprimer l'ancienne et créer la nouvelle",
    "B. Modifier terraform.tfstate manuellement",
    "C. Utiliser terraform taint",
    "D. Ajouter un bloc moved avec from et to"
   ],
   "answer": 3,
   "exp": "moved déclare le changement d'adresse."
  },
  {
   "id": "tf-assoc-j5-36",
   "q": "Que contient un fichier .tfvars ?",
   "choices": [
    "A. Des valeurs pour les variables d'entrée",
    "B. Des ressources à créer",
    "C. Des providers installés",
    "D. L'état distant"
   ],
   "answer": 0,
   "exp": "Il fournit des valeurs sans modifier le code."
  },
  {
   "id": "tf-assoc-j5-37",
   "q": "Quel type de valeur retourne un bloc count sur une ressource, lorsqu'on la référence entière ?",
   "choices": [
    "A. Une map d'instances",
    "B. Une liste d'instances",
    "C. Un objet unique",
    "D. Un set de chaînes"
   ],
   "answer": 1,
   "exp": "Avec count, aws_instance.web est une liste ; avec for_each, une map."
  },
  {
   "id": "tf-assoc-j5-38",
   "q": "Quel est le but d'un module racine ?",
   "choices": [
    "A. Il est stocké dans le registry public",
    "B. Il contient uniquement des variables",
    "C. Il est le répertoire où l'on exécute les commandes Terraform",
    "D. Il est toujours un module distant"
   ],
   "answer": 2,
   "exp": "Le root module est le point d'entrée de la configuration."
  },
  {
   "id": "tf-assoc-j5-39",
   "q": "Quel flag affiche le plan au format JSON pour l'outillage ?",
   "choices": [
    "A. terraform plan --json-only",
    "B. terraform export plan",
    "C. terraform plan -format=json",
    "D. terraform show -json tfplan"
   ],
   "answer": 3,
   "exp": "show -json sur un plan sauvegardé sert à l'analyse automatisée."
  },
  {
   "id": "tf-assoc-j5-40",
   "q": "Quelle est une bonne pratique pour les secrets de provider en CI ?",
   "choices": [
    "A. Utiliser des identités fédérées ou des variables d'environnement masquées",
    "B. Les écrire dans main.tf",
    "C. Les stocker dans l'état",
    "D. Les mettre dans un module public"
   ],
   "answer": 0,
   "exp": "Éviter les secrets en dur dans le code."
  },
  {
   "id": "tf-assoc-j5-41",
   "q": "Pourquoi utiliser terraform plan avant apply en production ?",
   "choices": [
    "A. Pour accélérer l'apply",
    "B. Pour relire les changements prévus et éviter les surprises",
    "C. Pour chiffrer l'état",
    "D. Pour supprimer les verrous"
   ],
   "answer": 1,
   "exp": "Le plan est la revue du changement."
  },
  {
   "id": "tf-assoc-j5-42",
   "q": "Que se passe-t-il si deux personnes lancent apply simultanément sur un backend avec verrouillage ?",
   "choices": [
    "A. Les deux s'exécutent sans conflit",
    "B. L'état est dupliqué",
    "C. La seconde exécution échoue ou attend tant que le verrou est pris",
    "D. Les ressources sont détruites"
   ],
   "answer": 2,
   "exp": "Le verrou protège l'état contre les écritures concurrentes."
  },
  {
   "id": "tf-assoc-j5-43",
   "q": "Quel élément de la configuration définit la région d'un provider AWS ?",
   "choices": [
    "A. Le bloc backend",
    "B. Le fichier .terraform.lock.hcl",
    "C. La variable TF_LOG",
    "D. L'argument region du bloc provider"
   ],
   "answer": 3,
   "exp": "provider \"aws\" { region = ... }."
  },
  {
   "id": "tf-assoc-j5-44",
   "q": "Quel fichier est généré par init pour mémoriser les modules ?",
   "choices": [
    "A. .terraform/modules/modules.json",
    "B. terraform.tfstate.backup",
    "C. modules.lock.hcl",
    "D. main.tf.json"
   ],
   "answer": 0,
   "exp": "Le manifeste de modules est stocké dans .terraform."
  },
  {
   "id": "tf-assoc-j5-45",
   "q": "Quelle commande affiche la version installée de Terraform et des providers ?",
   "choices": [
    "A. terraform --info",
    "B. terraform version",
    "C. terraform providers -v",
    "D. terraform show -version"
   ],
   "answer": 1,
   "exp": "terraform version liste CLI et providers du répertoire initialisé."
  },
  {
   "id": "tf-assoc-j5-46",
   "q": "Quelle source de données est idéale pour récupérer une AMI la plus récente ?",
   "choices": [
    "A. Un bloc resource aws_ami_copy",
    "B. Un output",
    "C. Un bloc data aws_ami avec most_recent et des filtres",
    "D. Un bloc locals"
   ],
   "answer": 2,
   "exp": "data.aws_ami avec filter permet de sélectionner."
  },
  {
   "id": "tf-assoc-j5-47",
   "q": "Quel est le principal risque de -target ?",
   "choices": [
    "A. Il supprime le fichier lock",
    "B. Il chiffre l'état",
    "C. Il désactive le backend",
    "D. Il peut laisser l'état et la configuration dans une situation incohérente"
   ],
   "answer": 3,
   "exp": "-target contourne le graphe complet ; à éviter hors cas exceptionnels."
  },
  {
   "id": "tf-assoc-j5-48",
   "q": "Quelle affirmation sur les variables d'entrée est vraie ?",
   "choices": [
    "A. Une variable sans default est obligatoire",
    "B. Une variable est toujours optionnelle",
    "C. Une variable ne peut pas avoir de type",
    "D. Une variable doit être sensible"
   ],
   "answer": 0,
   "exp": "Sans default, une valeur doit être fournie."
  },
  {
   "id": "tf-assoc-j5-49",
   "q": "Quelle commande peut aider à comprendre pourquoi un plan échoue en détail ?",
   "choices": [
    "A. terraform fmt",
    "B. TF_LOG=DEBUG terraform plan",
    "C. terraform output",
    "D. terraform workspace show"
   ],
   "answer": 1,
   "exp": "TF_LOG active les journaux détaillés."
  },
  {
   "id": "tf-assoc-j5-50",
   "q": "Quelle est la meilleure approche pour séparer les environnements dev et prod avec des droits distincts ?",
   "choices": [
    "A. Un seul workspace default pour tout",
    "B. Un seul compte et un seul état partagé",
    "C. Projets/états et comptes cloud distincts, avec une configuration réutilisable via modules",
    "D. Un fichier tfstate copié à la main"
   ],
   "answer": 2,
   "exp": "Une vraie isolation passe par des états et des identifiants séparés."
  }
 ]
};
