// Questions Kubernetes CKA — socle (questions à enrichir)
// Format: window.QDATA[jour] = [{t, q, o, a, e}, ...]

window.QKEY = "kubernetes-cka";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META = {
  title: "Kubernetes CKA",
  code: "CKA",
  exam: "Certified Kubernetes Administrator",
  passScore: 66,
  examMins: 120,
  fiche: null,
  rules: [
    ["~17 tâches · 120 min", "examen pratique terminal"],
    ["66 / 100", "score de réussite"],
    ["accès docs K8s", "autorisé pendant l'examen"],
    ["Troublesh › Archi › Net", "30 · 25 · 20 %"]
  ],
  totalQ: 250
};

// ── Plan de révision 5 jours ────────────────────────────────────────────────
const _K8S = "https://kubernetes.io/docs/";
window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "Architecture K8s & workloads de base",
    dom: ["Cluster Architecture · 25 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s1", titre: "🏛 Architecture : control plane, worker nodes" },
      { id: "s2", titre: "📦 Pods, ReplicaSets, Deployments" }
    ],
    read: [
      "K8s docs : Cluster architecture overview",
      "K8s docs : Workloads resources"
    ],
    links: [
      ["Cluster architecture", _K8S + "concepts/architecture/"],
      ["Pods", _K8S + "concepts/workloads/pods/"],
      ["Deployments", _K8S + "concepts/workloads/controllers/deployment/"]
    ],
    focus: [
      "kube-apiserver, etcd, scheduler, controller-manager, kubelet, kube-proxy",
      "kubectl run / create / apply / get / describe / delete",
      "Deployment : replicas, rolling update, rollback"
    ]
  },
  {
    d: 2,
    theme: "Réseau Kubernetes — services, ingress, DNS",
    dom: ["Networking · 20 %"],
    time: "≈ 1 h 15 lecture + 1 h quiz",
    sections: [
      { id: "s3", titre: "🌐 Services : ClusterIP, NodePort, LoadBalancer" },
      { id: "s4", titre: "🔀 Ingress, NetworkPolicies & CoreDNS" }
    ],
    read: [
      "K8s docs : Services",
      "K8s docs : Ingress",
      "K8s docs : Network policies"
    ],
    links: [
      ["Services", _K8S + "concepts/services-networking/service/"],
      ["Ingress", _K8S + "concepts/services-networking/ingress/"],
      ["Network policies", _K8S + "concepts/services-networking/network-policies/"]
    ],
    focus: [
      "ClusterIP (interne) vs NodePort (port statique) vs LB (cloud)",
      "Ingress controller vs Ingress resource",
      "NetworkPolicy : ingress/egress rules, podSelector, namespaceSelector"
    ]
  },
  {
    d: 3,
    theme: "Stockage — PV, PVC, StorageClasses",
    dom: ["Storage · 10 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s5", titre: "💾 PersistentVolume, PVC, StorageClass" },
      { id: "s6", titre: "📁 ConfigMaps & Secrets — volumes et envVars" }
    ],
    read: [
      "K8s docs : Persistent volumes",
      "K8s docs : ConfigMaps"
    ],
    links: [
      ["Persistent volumes", _K8S + "concepts/storage/persistent-volumes/"],
      ["Storage classes", _K8S + "concepts/storage/storage-classes/"],
      ["ConfigMaps", _K8S + "concepts/configuration/configmap/"]
    ],
    focus: [
      "accessModes : RWO, ROX, RWX — qui supporte quoi",
      "Reclaim policies : Retain, Recycle, Delete",
      "Secret base64 ≠ chiffrement — étapes pour les consommer"
    ]
  },
  {
    d: 4,
    theme: "Sécurité K8s — RBAC, SecurityContext, TLS",
    dom: ["Security · 15 %"],
    time: "≈ 1 h lecture + 1 h quiz",
    sections: [
      { id: "s7", titre: "🔒 RBAC : Role, ClusterRole, Bindings" },
      { id: "s8", titre: "🛡 SecurityContext, ServiceAccounts, TLS" }
    ],
    read: [
      "K8s docs : RBAC authorization",
      "K8s docs : Configure a security context"
    ],
    links: [
      ["RBAC", _K8S + "reference/access-authn-authz/rbac/"],
      ["Security context", _K8S + "tasks/configure-pod-container/security-context/"],
      ["TLS in K8s", _K8S + "tasks/tls/"]
    ],
    focus: [
      "Role (namespace) vs ClusterRole (cluster) ; RoleBinding vs ClusterRoleBinding",
      "kubectl auth can-i — vérifier les permissions",
      "runAsNonRoot, readOnlyRootFilesystem, capabilities"
    ]
  },
  {
    d: 5,
    theme: "Troubleshooting & révision finale",
    dom: ["Troubleshooting · 30 %"],
    time: "120 min exercices pratiques + 30 min révision",
    sections: [
      { id: "s9", titre: "🔍 Diagnostic : node, pod, service failures" },
      { id: "s10", titre: "⚠️ Commandes kubectl indispensables" }
    ],
    read: [
      "K8s docs : Troubleshooting applications",
      "K8s docs : Troubleshoot clusters"
    ],
    links: [
      ["Troubleshoot apps", _K8S + "tasks/debug/debug-application/"],
      ["Troubleshoot clusters", _K8S + "tasks/debug/debug-cluster/"],
      ["kubectl cheat sheet", _K8S + "reference/kubectl/quick-reference/"]
    ],
    focus: [
      "kubectl describe pod / events / logs / exec -it",
      "Node NotReady : vérifier kubelet, containerd, network plugin",
      "Pendant l'examen : utiliser kubernetes.io/docs sans restriction"
    ],
    extra: "Entraîne-toi sur Killer.sh (2 sessions incluses avec l'achat de l'examen CKA)."
  }
];

// ── Questions ────────────────────────────────────────────────────────────────
// Note : Le CKA est un examen PRATIQUE terminal, pas QCM.
// Ces questions servent à réviser les concepts théoriques avant l'exam.
// À enrichir — format : { t: "thème", q: "question", o: ["A","B","C","D"], a: 0, e: "explication" }
window.QDATA = {
 "1": [
  {
   "id": "cka-j1-1",
   "q": "Quel composant du plan de contrôle stocke l'état du cluster Kubernetes ?",
   "choices": [
    "A. kube-scheduler",
    "B. etcd",
    "C. kube-proxy",
    "D. kubelet"
   ],
   "answer": 1,
   "exp": "etcd est la base clé-valeur cohérente qui contient tout l'état du cluster."
  },
  {
   "id": "cka-j1-2",
   "q": "Quel composant décide sur quel nœud un pod non planifié sera exécuté ?",
   "choices": [
    "A. kube-controller-manager",
    "B. kubelet",
    "C. kube-scheduler",
    "D. kube-apiserver"
   ],
   "answer": 2,
   "exp": "Le scheduler affecte les pods aux nœuds selon les ressources, affinités, taints, etc."
  },
  {
   "id": "cka-j1-3",
   "q": "Quel composant est le point d'entrée de l'API Kubernetes ?",
   "choices": [
    "A. etcd",
    "B. kube-scheduler",
    "C. cloud-controller-manager",
    "D. kube-apiserver"
   ],
   "answer": 3,
   "exp": "Tous les clients et composants passent par l'API server."
  },
  {
   "id": "cka-j1-4",
   "q": "Quel agent s'exécute sur chaque nœud et gère le cycle de vie des pods ?",
   "choices": [
    "A. kubelet",
    "B. kube-proxy",
    "C. containerd",
    "D. coredns"
   ],
   "answer": 0,
   "exp": "Le kubelet applique les PodSpecs et rapporte l'état au plan de contrôle."
  },
  {
   "id": "cka-j1-5",
   "q": "Quel composant implémente les règles de service sur les nœuds ?",
   "choices": [
    "A. kubelet",
    "B. kube-proxy",
    "C. kube-scheduler",
    "D. etcd"
   ],
   "answer": 1,
   "exp": "kube-proxy programme iptables/IPVS pour router le trafic des Services."
  },
  {
   "id": "cka-j1-6",
   "q": "Quel est le rôle du kube-controller-manager ?",
   "choices": [
    "A. Stocker les données du cluster",
    "B. Planifier les pods sur les nœuds",
    "C. Exécuter les boucles de contrôle qui rapprochent l'état réel de l'état désiré",
    "D. Exposer l'API aux utilisateurs"
   ],
   "answer": 2,
   "exp": "Il regroupe les contrôleurs (nœuds, réplication, endpoints, etc.)."
  },
  {
   "id": "cka-j1-7",
   "q": "Quelle est la plus petite unité déployable dans Kubernetes ?",
   "choices": [
    "A. Container",
    "B. ReplicaSet",
    "C. Node",
    "D. Pod"
   ],
   "answer": 3,
   "exp": "Un Pod regroupe un ou plusieurs conteneurs partageant réseau et stockage."
  },
  {
   "id": "cka-j1-8",
   "q": "Quelle commande crée rapidement un pod nginx ?",
   "choices": [
    "A. kubectl run nginx --image=nginx",
    "B. kubectl create pod nginx --image=nginx",
    "C. kubectl new pod nginx",
    "D. kubectl start nginx --image=nginx"
   ],
   "answer": 0,
   "exp": "kubectl run crée un pod impératif."
  },
  {
   "id": "cka-j1-9",
   "q": "Quel flag génère un manifeste YAML sans créer la ressource ?",
   "choices": [
    "A. --generate-only",
    "B. --dry-run=client -o yaml",
    "C. --output=manifest",
    "D. --preview"
   ],
   "answer": 1,
   "exp": "--dry-run=client -o yaml est très utilisé à l'examen CKA."
  },
  {
   "id": "cka-j1-10",
   "q": "Quelle ressource garantit un nombre de réplicas de pods identiques ?",
   "choices": [
    "A. Pod",
    "B. Service",
    "C. ReplicaSet",
    "D. ConfigMap"
   ],
   "answer": 2,
   "exp": "Le ReplicaSet maintient le nombre de pods désiré."
  },
  {
   "id": "cka-j1-11",
   "q": "Quelle ressource gère les mises à jour progressives et le rollback d'applications sans état ?",
   "choices": [
    "A. StatefulSet",
    "B. DaemonSet",
    "C. Job",
    "D. Deployment"
   ],
   "answer": 3,
   "exp": "Un Deployment gère des ReplicaSets et les stratégies de mise à jour."
  },
  {
   "id": "cka-j1-12",
   "q": "Quelle commande met à jour l'image d'un déploiement ?",
   "choices": [
    "A. kubectl set image deployment/web nginx=nginx:1.27",
    "B. kubectl update image deployment/web nginx=nginx:1.27",
    "C. kubectl edit image web nginx:1.27",
    "D. kubectl patch image web nginx:1.27"
   ],
   "answer": 0,
   "exp": "kubectl set image modifie l'image d'un conteneur existant."
  },
  {
   "id": "cka-j1-13",
   "q": "Quelle commande annule le dernier déploiement ?",
   "choices": [
    "A. kubectl rollback deployment/web",
    "B. kubectl rollout undo deployment/web",
    "C. kubectl undo deployment/web",
    "D. kubectl rollout revert web"
   ],
   "answer": 1,
   "exp": "rollout undo revient à la révision précédente (ou --to-revision)."
  },
  {
   "id": "cka-j1-14",
   "q": "Quelle commande suit l'avancement d'un déploiement ?",
   "choices": [
    "A. kubectl get rollout web",
    "B. kubectl watch deployment/web",
    "C. kubectl rollout status deployment/web",
    "D. kubectl describe rollout web"
   ],
   "answer": 2,
   "exp": "rollout status attend la fin du déploiement."
  },
  {
   "id": "cka-j1-15",
   "q": "Quelle commande affiche l'historique des révisions d'un déploiement ?",
   "choices": [
    "A. kubectl get revisions deployment/web",
    "B. kubectl describe history web",
    "C. kubectl history deployment/web",
    "D. kubectl rollout history deployment/web"
   ],
   "answer": 3,
   "exp": "rollout history liste les révisions."
  },
  {
   "id": "cka-j1-16",
   "q": "Quelle commande met à l'échelle un déploiement à 5 réplicas ?",
   "choices": [
    "A. kubectl scale deployment web --replicas=5",
    "B. kubectl replicas deployment web 5",
    "C. kubectl set replicas web=5",
    "D. kubectl resize deployment web 5"
   ],
   "answer": 0,
   "exp": "scale modifie le nombre de réplicas."
  },
  {
   "id": "cka-j1-17",
   "q": "Quelle stratégie de déploiement est utilisée par défaut ?",
   "choices": [
    "A. Recreate",
    "B. RollingUpdate",
    "C. BlueGreen",
    "D. Canary"
   ],
   "answer": 1,
   "exp": "RollingUpdate remplace progressivement les pods."
  },
  {
   "id": "cka-j1-18",
   "q": "Quel paramètre limite le nombre de pods indisponibles pendant une mise à jour progressive ?",
   "choices": [
    "A. maxSurge",
    "B. minReadySeconds",
    "C. maxUnavailable",
    "D. progressDeadlineSeconds"
   ],
   "answer": 2,
   "exp": "maxUnavailable contrôle les pods indisponibles ; maxSurge les pods supplémentaires."
  },
  {
   "id": "cka-j1-19",
   "q": "Quelle ressource garantit un pod par nœud ?",
   "choices": [
    "A. Deployment",
    "B. StatefulSet",
    "C. ReplicaSet",
    "D. DaemonSet"
   ],
   "answer": 3,
   "exp": "DaemonSet exécute un pod sur chaque nœud (agents de log, monitoring)."
  },
  {
   "id": "cka-j1-20",
   "q": "Quelle ressource fournit des identités stables et un stockage persistant par pod ?",
   "choices": [
    "A. StatefulSet",
    "B. Deployment",
    "C. DaemonSet",
    "D. Job"
   ],
   "answer": 0,
   "exp": "Les pods d'un StatefulSet ont un nom ordinal stable."
  },
  {
   "id": "cka-j1-21",
   "q": "Quelle ressource exécute une tâche jusqu'à complétion ?",
   "choices": [
    "A. Deployment",
    "B. Job",
    "C. DaemonSet",
    "D. Service"
   ],
   "answer": 1,
   "exp": "Un Job relance les pods jusqu'à ce que le nombre de complétions soit atteint."
  },
  {
   "id": "cka-j1-22",
   "q": "Quelle ressource exécute des Jobs selon un calendrier ?",
   "choices": [
    "A. Job",
    "B. DaemonSet",
    "C. CronJob",
    "D. Schedule"
   ],
   "answer": 2,
   "exp": "Un CronJob utilise la syntaxe cron pour créer des Jobs."
  },
  {
   "id": "cka-j1-23",
   "q": "Quel objet stocke des données de configuration non confidentielles ?",
   "choices": [
    "A. Secret",
    "B. PersistentVolume",
    "C. ServiceAccount",
    "D. ConfigMap"
   ],
   "answer": 3,
   "exp": "Un ConfigMap contient des paires clé-valeur ou des fichiers de configuration."
  },
  {
   "id": "cka-j1-24",
   "q": "Quel objet stocke des données sensibles en base64 ?",
   "choices": [
    "A. Secret",
    "B. ConfigMap",
    "C. StorageClass",
    "D. Namespace"
   ],
   "answer": 0,
   "exp": "Un Secret est encodé en base64 (pas chiffré par défaut)."
  },
  {
   "id": "cka-j1-25",
   "q": "Les Secrets sont-ils chiffrés par défaut dans etcd ?",
   "choices": [
    "A. Oui, avec AES-256 automatiquement",
    "B. Non, ils sont seulement encodés en base64 sauf configuration du chiffrement au repos",
    "C. Oui, avec le certificat du kubelet",
    "D. Oui, mais uniquement les Secrets de type TLS"
   ],
   "answer": 1,
   "exp": "Il faut activer EncryptionConfiguration pour chiffrer au repos."
  },
  {
   "id": "cka-j1-26",
   "q": "Comment injecter un ConfigMap comme variables d'environnement dans un pod ?",
   "choices": [
    "A. volumes avec emptyDir",
    "B. hostPath avec configMap",
    "C. envFrom avec configMapRef",
    "D. initContainers avec configMap"
   ],
   "answer": 2,
   "exp": "envFrom charge toutes les clés ; env/valueFrom ne cible qu'une clé."
  },
  {
   "id": "cka-j1-27",
   "q": "Quel champ définit les ressources minimales garanties pour un conteneur ?",
   "choices": [
    "A. resources.limits",
    "B. resources.min",
    "C. resources.guarantee",
    "D. resources.requests"
   ],
   "answer": 3,
   "exp": "requests est utilisé par le scheduler ; limits plafonne l'usage."
  },
  {
   "id": "cka-j1-28",
   "q": "Que se passe-t-il si un conteneur dépasse sa limite mémoire ?",
   "choices": [
    "A. Il est tué (OOMKilled)",
    "B. Il est mis en pause",
    "C. Il est throttlé comme pour le CPU",
    "D. Il est déplacé sur un autre nœud"
   ],
   "answer": 0,
   "exp": "La mémoire est incompressible : dépassement = OOMKilled."
  },
  {
   "id": "cka-j1-29",
   "q": "Que se passe-t-il si un conteneur dépasse sa limite CPU ?",
   "choices": [
    "A. Il est tué immédiatement",
    "B. Il est ralenti (throttling)",
    "C. Il est supprimé du cluster",
    "D. Il change de nœud"
   ],
   "answer": 1,
   "exp": "Le CPU est compressible."
  },
  {
   "id": "cka-j1-30",
   "q": "Quelle classe QoS reçoit un pod dont requests = limits pour tous les conteneurs ?",
   "choices": [
    "A. Burstable",
    "B. BestEffort",
    "C. Guaranteed",
    "D. Critical"
   ],
   "answer": 2,
   "exp": "Guaranteed est la plus protégée en cas de pression de ressources."
  },
  {
   "id": "cka-j1-31",
   "q": "Quel mécanisme repousse les pods d'un nœud sauf s'ils le tolèrent ?",
   "choices": [
    "A. Labels et selectors",
    "B. Annotations",
    "C. Finalizers",
    "D. Taints et tolerations"
   ],
   "answer": 3,
   "exp": "Une taint sur le nœud nécessite une toleration sur le pod."
  },
  {
   "id": "cka-j1-32",
   "q": "Comment ajouter une taint à un nœud ?",
   "choices": [
    "A. kubectl taint nodes node1 key=value:NoSchedule",
    "B. kubectl label nodes node1 key=value:NoSchedule",
    "C. kubectl annotate node node1 taint=NoSchedule",
    "D. kubectl cordon node1 key=value"
   ],
   "answer": 0,
   "exp": "La syntaxe est key=value:effet."
  },
  {
   "id": "cka-j1-33",
   "q": "Quel effet de taint expulse aussi les pods déjà en cours d'exécution sans toleration ?",
   "choices": [
    "A. NoSchedule",
    "B. NoExecute",
    "C. PreferNoSchedule",
    "D. Evict"
   ],
   "answer": 1,
   "exp": "NoExecute évince les pods existants."
  },
  {
   "id": "cka-j1-34",
   "q": "Quel champ du pod le contraint à certains nœuds via leurs labels ?",
   "choices": [
    "A. tolerations",
    "B. priorityClassName",
    "C. nodeSelector",
    "D. topologyKey"
   ],
   "answer": 2,
   "exp": "nodeSelector est le mécanisme le plus simple."
  },
  {
   "id": "cka-j1-35",
   "q": "Que permet nodeAffinity de plus que nodeSelector ?",
   "choices": [
    "A. Aucune différence",
    "B. Seulement du placement sur des nœuds master",
    "C. Uniquement l'affectation d'IP",
    "D. Des règles plus expressives (opérateurs, préférences souples)"
   ],
   "answer": 3,
   "exp": "nodeAffinity offre required/preferred avec des expressions."
  },
  {
   "id": "cka-j1-36",
   "q": "Quel mécanisme répartit les pods entre zones ou nœuds ?",
   "choices": [
    "A. topologySpreadConstraints",
    "B. nodeName",
    "C. hostPort",
    "D. podPriority"
   ],
   "answer": 0,
   "exp": "topologySpreadConstraints équilibre la répartition."
  },
  {
   "id": "cka-j1-37",
   "q": "Quelle commande empêche de nouveaux pods d'être planifiés sur un nœud sans évincer les existants ?",
   "choices": [
    "A. kubectl drain node1",
    "B. kubectl cordon node1",
    "C. kubectl taint node1 NoExecute",
    "D. kubectl delete node node1"
   ],
   "answer": 1,
   "exp": "cordon rend le nœud non planifiable."
  },
  {
   "id": "cka-j1-38",
   "q": "Quelle commande évince les pods d'un nœud avant maintenance ?",
   "choices": [
    "A. kubectl cordon node1",
    "B. kubectl evict node1",
    "C. kubectl drain node1 --ignore-daemonsets",
    "D. kubectl stop node1"
   ],
   "answer": 2,
   "exp": "drain cordonne puis évince ; --ignore-daemonsets est souvent requis."
  },
  {
   "id": "cka-j1-39",
   "q": "Quelle commande rétablit la planification d'un nœud après maintenance ?",
   "choices": [
    "A. kubectl resume node1",
    "B. kubectl enable node1",
    "C. kubectl schedule node1",
    "D. kubectl uncordon node1"
   ],
   "answer": 3,
   "exp": "uncordon rend le nœud planifiable."
  },
  {
   "id": "cka-j1-40",
   "q": "Quel type de sonde redémarre un conteneur qui ne répond plus ?",
   "choices": [
    "A. livenessProbe",
    "B. readinessProbe",
    "C. startupProbe",
    "D. lifecycleProbe"
   ],
   "answer": 0,
   "exp": "liveness échoue → le kubelet redémarre le conteneur."
  },
  {
   "id": "cka-j1-41",
   "q": "Quel type de sonde retire un pod des endpoints d'un Service tant qu'il n'est pas prêt ?",
   "choices": [
    "A. livenessProbe",
    "B. readinessProbe",
    "C. startupProbe",
    "D. healthProbe"
   ],
   "answer": 1,
   "exp": "readiness contrôle l'éligibilité au trafic."
  },
  {
   "id": "cka-j1-42",
   "q": "À quoi sert startupProbe ?",
   "choices": [
    "A. Vérifier la connexion réseau externe",
    "B. Vérifier la configuration du cluster",
    "C. Différer liveness/readiness pour les applications lentes à démarrer",
    "D. Initialiser les volumes du pod"
   ],
   "answer": 2,
   "exp": "startupProbe protège les démarrages longs."
  },
  {
   "id": "cka-j1-43",
   "q": "À quoi sert un initContainer ?",
   "choices": [
    "A. Remplacer le conteneur principal",
    "B. Surveiller le pod en continu",
    "C. Mettre à jour l'image",
    "D. Exécuter des tâches d'initialisation avant le démarrage des conteneurs principaux"
   ],
   "answer": 3,
   "exp": "Les init containers s'exécutent séquentiellement jusqu'à complétion."
  },
  {
   "id": "cka-j1-44",
   "q": "Quel est l'intérêt du motif sidecar ?",
   "choices": [
    "A. Ajouter une fonction auxiliaire (logs, proxy) dans le même pod",
    "B. Exécuter un pod sur un autre nœud",
    "C. Dupliquer un déploiement pour la haute disponibilité",
    "D. Créer un volume partagé entre namespaces"
   ],
   "answer": 0,
   "exp": "Les conteneurs d'un pod partagent réseau et volumes."
  },
  {
   "id": "cka-j1-45",
   "q": "Quelle commande affiche les logs du conteneur précédent après un crash ?",
   "choices": [
    "A. kubectl logs pod --last",
    "B. kubectl logs pod --previous",
    "C. kubectl logs pod -p --crash",
    "D. kubectl describe logs pod"
   ],
   "answer": 1,
   "exp": "--previous lit les logs de l'instance précédente."
  },
  {
   "id": "cka-j1-46",
   "q": "Quelle commande exécute un shell dans un pod ?",
   "choices": [
    "A. kubectl run -it pod sh",
    "B. kubectl attach pod --shell",
    "C. kubectl exec -it pod -- sh",
    "D. kubectl ssh pod"
   ],
   "answer": 2,
   "exp": "exec permet d'exécuter une commande dans un conteneur."
  },
  {
   "id": "cka-j1-47",
   "q": "Quelle commande change le namespace par défaut du contexte courant ?",
   "choices": [
    "A. kubectl use namespace dev",
    "B. kubectl set namespace dev",
    "C. kubectl ns dev",
    "D. kubectl config set-context --current --namespace=dev"
   ],
   "answer": 3,
   "exp": "On modifie le contexte courant."
  },
  {
   "id": "cka-j1-48",
   "q": "Que fait un ResourceQuota ?",
   "choices": [
    "A. Limite la consommation agrégée de ressources dans un namespace",
    "B. Limite les ressources d'un seul pod",
    "C. Limite le nombre de nœuds du cluster",
    "D. Limite le débit réseau d'un service"
   ],
   "answer": 0,
   "exp": "Un quota plafonne CPU, mémoire, nombre d'objets par namespace."
  },
  {
   "id": "cka-j1-49",
   "q": "Que fait un LimitRange ?",
   "choices": [
    "A. Limite le nombre de namespaces",
    "B. Définit des limites/valeurs par défaut de ressources par pod ou conteneur dans un namespace",
    "C. Limite le débit disque du cluster",
    "D. Définit les quotas d'API par utilisateur"
   ],
   "answer": 1,
   "exp": "LimitRange applique min/max/défaut."
  },
  {
   "id": "cka-j1-50",
   "q": "Que fait kubectl apply -f manifeste.yaml ?",
   "choices": [
    "A. Supprime et recrée toujours la ressource",
    "B. Affiche seulement le manifeste",
    "C. Crée ou met à jour la ressource de manière déclarative",
    "D. Valide uniquement la syntaxe YAML"
   ],
   "answer": 2,
   "exp": "apply compare l'état désiré avec l'état courant."
  }
 ],
 "2": [
  {
   "id": "cka-j2-1",
   "q": "Quel type de Service est accessible uniquement à l'intérieur du cluster ?",
   "choices": [
    "A. NodePort",
    "B. LoadBalancer",
    "C. ClusterIP",
    "D. ExternalName"
   ],
   "answer": 2,
   "exp": "ClusterIP est le type par défaut avec une IP virtuelle interne."
  },
  {
   "id": "cka-j2-2",
   "q": "Quel type de Service expose un port statique sur chaque nœud ?",
   "choices": [
    "A. ClusterIP",
    "B. Headless",
    "C. ExternalName",
    "D. NodePort"
   ],
   "answer": 3,
   "exp": "NodePort ouvre un port (30000-32767 par défaut) sur tous les nœuds."
  },
  {
   "id": "cka-j2-3",
   "q": "Quelle est la plage de ports NodePort par défaut ?",
   "choices": [
    "A. 30000-32767",
    "B. 1024-65535",
    "C. 8000-9000",
    "D. 10250-10259"
   ],
   "answer": 0,
   "exp": "La plage est configurable via --service-node-port-range."
  },
  {
   "id": "cka-j2-4",
   "q": "Quel type de Service provisionne un équilibreur de charge du fournisseur cloud ?",
   "choices": [
    "A. NodePort",
    "B. LoadBalancer",
    "C. ClusterIP",
    "D. ExternalName"
   ],
   "answer": 1,
   "exp": "LoadBalancer s'appuie sur le cloud-controller-manager."
  },
  {
   "id": "cka-j2-5",
   "q": "Quel type de Service renvoie un enregistrement CNAME vers un nom externe ?",
   "choices": [
    "A. ClusterIP",
    "B. NodePort",
    "C. ExternalName",
    "D. LoadBalancer"
   ],
   "answer": 2,
   "exp": "ExternalName mappe le service à un DNS externe sans proxy."
  },
  {
   "id": "cka-j2-6",
   "q": "Comment crée-t-on un Service headless ?",
   "choices": [
    "A. type: Headless",
    "B. headless: true",
    "C. clusterIP: 0.0.0.0",
    "D. clusterIP: None"
   ],
   "answer": 3,
   "exp": "Sans IP virtuelle, le DNS retourne directement les IP des pods."
  },
  {
   "id": "cka-j2-7",
   "q": "Quelle commande expose un déploiement comme Service ?",
   "choices": [
    "A. kubectl expose deployment web --port=80",
    "B. kubectl service create web --port=80",
    "C. kubectl publish deployment web",
    "D. kubectl open deployment web"
   ],
   "answer": 0,
   "exp": "expose crée un Service pour la ressource."
  },
  {
   "id": "cka-j2-8",
   "q": "Comment un Service sélectionne-t-il ses pods ?",
   "choices": [
    "A. Par le nom du pod uniquement",
    "B. Par un selector sur les labels des pods",
    "C. Par l'adresse IP du pod",
    "D. Par l'annotation du déploiement"
   ],
   "answer": 1,
   "exp": "Le selector associe le Service à des pods par labels."
  },
  {
   "id": "cka-j2-9",
   "q": "Quel objet liste les adresses IP des pods derrière un Service ?",
   "choices": [
    "A. Ingress",
    "B. NetworkPolicy",
    "C. Endpoints / EndpointSlice",
    "D. ConfigMap"
   ],
   "answer": 2,
   "exp": "Les EndpointSlices référencent les pods prêts."
  },
  {
   "id": "cka-j2-10",
   "q": "Quelle est la forme du nom DNS complet d'un Service ?",
   "choices": [
    "A. service.cluster.local.namespace",
    "B. namespace.service.local",
    "C. svc.service.namespace.cluster",
    "D. service.namespace.svc.cluster.local"
   ],
   "answer": 3,
   "exp": "Format : <service>.<namespace>.svc.<cluster-domain>."
  },
  {
   "id": "cka-j2-11",
   "q": "Quel composant fournit la résolution DNS dans le cluster ?",
   "choices": [
    "A. CoreDNS",
    "B. kube-proxy",
    "C. etcd",
    "D. Calico"
   ],
   "answer": 0,
   "exp": "CoreDNS tourne en Deployment dans kube-system."
  },
  {
   "id": "cka-j2-12",
   "q": "Quel fichier d'un pod indique le serveur DNS utilisé ?",
   "choices": [
    "A. /etc/hosts",
    "B. /etc/resolv.conf",
    "C. /etc/kubernetes/dns",
    "D. /var/run/dns"
   ],
   "answer": 1,
   "exp": "Le kubelet configure resolv.conf avec l'IP du service kube-dns."
  },
  {
   "id": "cka-j2-13",
   "q": "Quel objet gère le routage HTTP/HTTPS externe vers des Services ?",
   "choices": [
    "A. NetworkPolicy",
    "B. Endpoints",
    "C. Ingress",
    "D. StorageClass"
   ],
   "answer": 2,
   "exp": "Ingress définit des règles ; un Ingress Controller les applique."
  },
  {
   "id": "cka-j2-14",
   "q": "Un objet Ingress seul suffit-il à exposer une application ?",
   "choices": [
    "A. Oui, Kubernetes l'implémente nativement",
    "B. Oui, mais uniquement sur cloud",
    "C. Non, il faut un NodePort uniquement",
    "D. Non, un Ingress Controller doit être installé"
   ],
   "answer": 3,
   "exp": "L'Ingress est une spécification ; le controller (nginx, traefik...) l'exécute."
  },
  {
   "id": "cka-j2-15",
   "q": "Quel champ de l'Ingress sélectionne le controller à utiliser ?",
   "choices": [
    "A. ingressClassName",
    "B. controllerName",
    "C. className",
    "D. provider"
   ],
   "answer": 0,
   "exp": "ingressClassName référence un objet IngressClass."
  },
  {
   "id": "cka-j2-16",
   "q": "Quelle API est le successeur de Ingress, plus expressif ?",
   "choices": [
    "A. Service Mesh API",
    "B. Gateway API",
    "C. Ingress v2",
    "D. NetworkRoute API"
   ],
   "answer": 1,
   "exp": "Gateway API sépare les rôles (GatewayClass, Gateway, HTTPRoute)."
  },
  {
   "id": "cka-j2-17",
   "q": "Quel pathType fait correspondre exactement le chemin ?",
   "choices": [
    "A. Prefix",
    "B. ImplementationSpecific",
    "C. Exact",
    "D. Regex"
   ],
   "answer": 2,
   "exp": "Les valeurs sont Exact, Prefix et ImplementationSpecific."
  },
  {
   "id": "cka-j2-18",
   "q": "Que fait une NetworkPolicy ?",
   "choices": [
    "A. Gère les certificats TLS",
    "B. Déploie un load balancer",
    "C. Attribue des IP aux nœuds",
    "D. Contrôle le trafic entrant/sortant des pods au niveau IP/port"
   ],
   "answer": 3,
   "exp": "Une NetworkPolicy filtre le trafic de couche 3/4."
  },
  {
   "id": "cka-j2-19",
   "q": "Que se passe-t-il si aucune NetworkPolicy ne sélectionne un pod ?",
   "choices": [
    "A. Tout le trafic est autorisé",
    "B. Tout le trafic est bloqué",
    "C. Seul le trafic sortant est autorisé",
    "D. Seul le trafic du namespace est autorisé"
   ],
   "answer": 0,
   "exp": "Par défaut, les pods sont non isolés."
  },
  {
   "id": "cka-j2-20",
   "q": "Quelle condition est nécessaire pour que les NetworkPolicy soient appliquées ?",
   "choices": [
    "A. Le kubelet avec l'option --enforce-network",
    "B. Un plugin CNI qui les supporte (Calico, Cilium...)",
    "C. Un Service de type NodePort",
    "D. Un Ingress Controller"
   ],
   "answer": 1,
   "exp": "Le plugin réseau doit implémenter les NetworkPolicy."
  },
  {
   "id": "cka-j2-21",
   "q": "Comment créer une politique « deny all » en entrée dans un namespace ?",
   "choices": [
    "A. NetworkPolicy avec podSelector: {} et ingress: - {}",
    "B. Supprimer toutes les NetworkPolicy du namespace",
    "C. NetworkPolicy avec podSelector: {} et policyTypes: [Ingress] sans règles",
    "D. Ajouter un label deny=true aux pods"
   ],
   "answer": 2,
   "exp": "Un podSelector vide sélectionne tous les pods ; l'absence de règles interdit tout."
  },
  {
   "id": "cka-j2-22",
   "q": "Quel champ de NetworkPolicy limite l'accès depuis des pods d'un autre namespace ?",
   "choices": [
    "A. podSelector uniquement",
    "B. nodeSelector",
    "C. serviceSelector",
    "D. namespaceSelector"
   ],
   "answer": 3,
   "exp": "namespaceSelector choisit les namespaces sources."
  },
  {
   "id": "cka-j2-23",
   "q": "Qu'est-ce que le CNI ?",
   "choices": [
    "A. Container Network Interface : standard pour les plugins réseau des conteneurs",
    "B. Cluster Node Interface",
    "C. Container Naming Index",
    "D. Central Network Infrastructure"
   ],
   "answer": 0,
   "exp": "Le CNI configure le réseau des pods."
  },
  {
   "id": "cka-j2-24",
   "q": "Où se trouvent par défaut les binaires des plugins CNI sur un nœud ?",
   "choices": [
    "A. /usr/lib/cni",
    "B. /opt/cni/bin",
    "C. /etc/cni/plugins",
    "D. /var/lib/cni/bin"
   ],
   "answer": 1,
   "exp": "La configuration se trouve dans /etc/cni/net.d."
  },
  {
   "id": "cka-j2-25",
   "q": "Quel principe fondamental du réseau Kubernetes s'applique aux pods ?",
   "choices": [
    "A. Les pods partagent l'IP du nœud",
    "B. Les pods ne communiquent que via des Services",
    "C. Chaque pod a sa propre IP et peut communiquer avec tout autre pod sans NAT",
    "D. Les pods d'un même namespace partagent une IP"
   ],
   "answer": 2,
   "exp": "Modèle réseau plat sans NAT entre pods."
  },
  {
   "id": "cka-j2-26",
   "q": "Quel flag du kube-apiserver définit la plage d'IP des Services ?",
   "choices": [
    "A. --pod-network-cidr",
    "B. --cluster-cidr",
    "C. --service-range",
    "D. --service-cluster-ip-range"
   ],
   "answer": 3,
   "exp": "--pod-network-cidr est utilisé avec kubeadm pour les pods."
  },
  {
   "id": "cka-j2-27",
   "q": "Comment les conteneurs d'un même pod communiquent-ils ?",
   "choices": [
    "A. Via localhost, car ils partagent le même namespace réseau",
    "B. Via un Service dédié",
    "C. Via l'IP du nœud",
    "D. Via un Ingress interne"
   ],
   "answer": 0,
   "exp": "Un pod partage une pile réseau unique."
  },
  {
   "id": "cka-j2-28",
   "q": "Quel mode de kube-proxy utilise des tables de hachage pour de meilleures performances à grande échelle ?",
   "choices": [
    "A. iptables",
    "B. ipvs",
    "C. userspace",
    "D. ebpf-native"
   ],
   "answer": 1,
   "exp": "Le mode ipvs utilise IPVS ; iptables est le défaut."
  },
  {
   "id": "cka-j2-29",
   "q": "Quelle commande affiche les Services du cluster avec leurs IP ?",
   "choices": [
    "A. kubectl list services",
    "B. kubectl describe network",
    "C. kubectl get svc -A",
    "D. kubectl get endpoints --all-services"
   ],
   "answer": 2,
   "exp": "-A pour tous les namespaces."
  },
  {
   "id": "cka-j2-30",
   "q": "Comment tester la résolution DNS depuis un pod temporaire ?",
   "choices": [
    "A. kubectl dns web",
    "B. kubectl exec nodes -- nslookup web",
    "C. kubectl get dns web",
    "D. kubectl run test --rm -it --image=busybox -- nslookup web"
   ],
   "answer": 3,
   "exp": "Pod éphémère avec busybox."
  },
  {
   "id": "cka-j2-31",
   "q": "Quel port écoute le Service DNS du cluster ?",
   "choices": [
    "A. 53 (UDP/TCP)",
    "B. 8080",
    "C. 443",
    "D. 10250"
   ],
   "answer": 0,
   "exp": "CoreDNS écoute sur le port 53."
  },
  {
   "id": "cka-j2-32",
   "q": "Quel champ de Service redirige le trafic vers un port différent du conteneur ?",
   "choices": [
    "A. nodePort",
    "B. targetPort",
    "C. containerPort",
    "D. hostPort"
   ],
   "answer": 1,
   "exp": "port = port du Service ; targetPort = port du pod."
  },
  {
   "id": "cka-j2-33",
   "q": "Que fait hostPort dans la spec d'un conteneur ?",
   "choices": [
    "A. Expose le conteneur via un Service",
    "B. Ouvre un port NodePort",
    "C. Lie un port du conteneur au port de l'hôte du nœud",
    "D. Configure l'Ingress"
   ],
   "answer": 2,
   "exp": "hostPort limite la planification (conflits de ports)."
  },
  {
   "id": "cka-j2-34",
   "q": "Quel champ d'un pod utilise le réseau de l'hôte ?",
   "choices": [
    "A. hostPort: true",
    "B. useHostIP: true",
    "C. nodeNetwork: true",
    "D. hostNetwork: true"
   ],
   "answer": 3,
   "exp": "Le pod partage l'espace réseau du nœud."
  },
  {
   "id": "cka-j2-35",
   "q": "Quelle annotation d'un Service de type LoadBalancer dépend généralement du cloud ?",
   "choices": [
    "A. Annotations spécifiques au fournisseur (ex. type de LB)",
    "B. kubernetes.io/lb-class uniquement",
    "C. Aucune annotation n'est possible",
    "D. service.k8s.io/cloud"
   ],
   "answer": 0,
   "exp": "Les options avancées passent par des annotations propres au cloud."
  },
  {
   "id": "cka-j2-36",
   "q": "Quelle commande liste les Ingress ?",
   "choices": [
    "A. kubectl get routes",
    "B. kubectl get ingress",
    "C. kubectl list ingress",
    "D. kubectl describe gateway"
   ],
   "answer": 1,
   "exp": "get ingress ou get ing."
  },
  {
   "id": "cka-j2-37",
   "q": "Quel est le rôle de externalTrafficPolicy: Local ?",
   "choices": [
    "A. Forcer le trafic vers un autre nœud",
    "B. Désactiver le NAT interne",
    "C. Préserver l'IP source du client et ne router que vers les pods du nœud",
    "D. Activer IPVS"
   ],
   "answer": 2,
   "exp": "Local évite un saut supplémentaire et préserve l'IP source."
  },
  {
   "id": "cka-j2-38",
   "q": "Quel objet permet d'utiliser des IP supplémentaires pour LoadBalancer en bare metal ?",
   "choices": [
    "A. kube-proxy",
    "B. CoreDNS",
    "C. kubelet",
    "D. Un composant comme MetalLB"
   ],
   "answer": 3,
   "exp": "MetalLB fournit des LoadBalancers sur bare metal."
  },
  {
   "id": "cka-j2-39",
   "q": "Comment un pod accède-t-il à un Service d'un autre namespace par DNS ?",
   "choices": [
    "A. service.namespace",
    "B. service seul",
    "C. namespace/service",
    "D. service:namespace"
   ],
   "answer": 0,
   "exp": "service.namespace (ou le FQDN) résout depuis un autre namespace."
  },
  {
   "id": "cka-j2-40",
   "q": "Où se trouve la configuration de CoreDNS ?",
   "choices": [
    "A. Fichier /etc/coredns sur chaque pod",
    "B. ConfigMap coredns dans kube-system",
    "C. Secret coredns",
    "D. CRD DNSConfig"
   ],
   "answer": 1,
   "exp": "Le Corefile est stocké dans un ConfigMap."
  },
  {
   "id": "cka-j2-41",
   "q": "Quelle valeur de dnsPolicy utilise le DNS du cluster pour un pod en hostNetwork ?",
   "choices": [
    "A. ClusterFirst",
    "B. Default",
    "C. ClusterFirstWithHostNet",
    "D. None"
   ],
   "answer": 2,
   "exp": "Nécessaire pour résoudre les services depuis un pod hostNetwork."
  },
  {
   "id": "cka-j2-42",
   "q": "Quel champ permet de personnaliser /etc/resolv.conf d'un pod ?",
   "choices": [
    "A. dnsPolicy uniquement",
    "B. resolvConf",
    "C. hostAliases",
    "D. dnsConfig"
   ],
   "answer": 3,
   "exp": "dnsConfig ajoute nameservers, searches et options."
  },
  {
   "id": "cka-j2-43",
   "q": "Quel champ ajoute des entrées à /etc/hosts d'un pod ?",
   "choices": [
    "A. hostAliases",
    "B. dnsConfig",
    "C. extraHosts",
    "D. hostEntries"
   ],
   "answer": 0,
   "exp": "hostAliases ajoute des mappages IP/nom."
  },
  {
   "id": "cka-j2-44",
   "q": "Quelle commande permet de rediriger un port local vers un pod ?",
   "choices": [
    "A. kubectl proxy web 8080:80",
    "B. kubectl port-forward pod/web 8080:80",
    "C. kubectl forward web 8080",
    "D. kubectl expose pod web --local"
   ],
   "answer": 1,
   "exp": "port-forward est utile pour du débogage."
  },
  {
   "id": "cka-j2-45",
   "q": "Quel protocole utilise l'Ingress pour le TLS ?",
   "choices": [
    "A. mTLS automatique entre pods",
    "B. IPsec entre nœuds",
    "C. Terminaison TLS avec un Secret de type kubernetes.io/tls",
    "D. SSH tunnel"
   ],
   "answer": 2,
   "exp": "Le champ tls référence un Secret avec certificat et clé."
  },
  {
   "id": "cka-j2-46",
   "q": "Quel type de Secret stocke un certificat TLS ?",
   "choices": [
    "A. Opaque",
    "B. kubernetes.io/dockerconfigjson",
    "C. kubernetes.io/basic-auth",
    "D. kubernetes.io/tls"
   ],
   "answer": 3,
   "exp": "Le Secret contient tls.crt et tls.key."
  },
  {
   "id": "cka-j2-47",
   "q": "Quelle commande vérifie l'accessibilité d'un Service depuis un pod ?",
   "choices": [
    "A. kubectl exec pod -- curl http://svc:port",
    "B. kubectl ping svc",
    "C. kubectl test svc",
    "D. kubectl dial svc"
   ],
   "answer": 0,
   "exp": "curl ou wget depuis un pod valide la connectivité."
  },
  {
   "id": "cka-j2-48",
   "q": "Que signifie un Service sans endpoints ?",
   "choices": [
    "A. Le DNS est cassé",
    "B. Aucun pod prêt ne correspond au selector",
    "C. Le Service est de type headless",
    "D. Le Service est de type ExternalName"
   ],
   "answer": 1,
   "exp": "Vérifier les labels et la readiness."
  },
  {
   "id": "cka-j2-49",
   "q": "Quel composant expose une API de nœud sur le port 10250 ?",
   "choices": [
    "A. kube-proxy",
    "B. etcd",
    "C. kubelet",
    "D. scheduler"
   ],
   "answer": 2,
   "exp": "Le kubelet écoute sur 10250 ; l'API server sur 6443 ; etcd sur 2379."
  },
  {
   "id": "cka-j2-50",
   "q": "Quel port écoute par défaut le kube-apiserver ?",
   "choices": [
    "A. 8080",
    "B. 2379",
    "C. 10257",
    "D. 6443"
   ],
   "answer": 3,
   "exp": "6443/TCP en HTTPS ; etcd 2379-2380."
  }
 ],
 "3": [
  {
   "id": "cka-j3-1",
   "q": "Quelle ressource représente un morceau de stockage provisionné dans le cluster ?",
   "choices": [
    "A. PersistentVolumeClaim",
    "B. StorageClass",
    "C. VolumeSnapshot",
    "D. PersistentVolume"
   ],
   "answer": 3,
   "exp": "Un PV est une ressource de stockage du cluster, indépendante du cycle de vie des pods."
  },
  {
   "id": "cka-j3-2",
   "q": "Quelle ressource représente la demande de stockage d'un utilisateur ?",
   "choices": [
    "A. PersistentVolumeClaim",
    "B. PersistentVolume",
    "C. StorageClass",
    "D. ConfigMap"
   ],
   "answer": 0,
   "exp": "Un PVC est lié à un PV correspondant."
  },
  {
   "id": "cka-j3-3",
   "q": "Quel objet décrit des « classes » de stockage et le provisionnement dynamique ?",
   "choices": [
    "A. PersistentVolume",
    "B. StorageClass",
    "C. VolumeAttachment",
    "D. CSIDriver"
   ],
   "answer": 1,
   "exp": "Une StorageClass définit le provisioner et ses paramètres."
  },
  {
   "id": "cka-j3-4",
   "q": "Quel mode d'accès permet une lecture/écriture par un seul nœud ?",
   "choices": [
    "A. ReadOnlyMany",
    "B. ReadWriteMany",
    "C. ReadWriteOnce",
    "D. ReadWriteOncePod"
   ],
   "answer": 2,
   "exp": "RWO : monté en lecture/écriture par un seul nœud (plusieurs pods possibles sur ce nœud)."
  },
  {
   "id": "cka-j3-5",
   "q": "Quel mode d'accès restreint le volume à un seul pod ?",
   "choices": [
    "A. ReadWriteOnce",
    "B. ReadWriteMany",
    "C. ReadOnlyMany",
    "D. ReadWriteOncePod"
   ],
   "answer": 3,
   "exp": "RWOP garantit un seul pod en lecture/écriture."
  },
  {
   "id": "cka-j3-6",
   "q": "Quel mode d'accès permet la lecture par plusieurs nœuds ?",
   "choices": [
    "A. ReadOnlyMany",
    "B. ReadWriteOnce",
    "C. ReadWriteOncePod",
    "D. ExclusiveRead"
   ],
   "answer": 0,
   "exp": "ROX : lecture seule sur plusieurs nœuds."
  },
  {
   "id": "cka-j3-7",
   "q": "Quelle est la politique de rétention par défaut d'un PV provisionné dynamiquement ?",
   "choices": [
    "A. Retain",
    "B. Delete",
    "C. Recycle",
    "D. Archive"
   ],
   "answer": 1,
   "exp": "Le reclaimPolicy par défaut d'une StorageClass est Delete."
  },
  {
   "id": "cka-j3-8",
   "q": "Que fait la politique Retain à la suppression du PVC ?",
   "choices": [
    "A. Le PV est supprimé immédiatement",
    "B. Le PV est vidé puis réutilisé automatiquement",
    "C. Le PV et ses données sont conservés (état Released)",
    "D. Le PV est copié vers une autre StorageClass"
   ],
   "answer": 2,
   "exp": "Retain nécessite un nettoyage manuel avant réutilisation."
  },
  {
   "id": "cka-j3-9",
   "q": "Quel état indique qu'un PVC est lié à un PV ?",
   "choices": [
    "A. Pending",
    "B. Released",
    "C. Available",
    "D. Bound"
   ],
   "answer": 3,
   "exp": "Un PVC non lié reste en Pending."
  },
  {
   "id": "cka-j3-10",
   "q": "Pourquoi un PVC reste-t-il en état Pending ?",
   "choices": [
    "A. Aucun PV ne correspond ou aucune StorageClass ne provisionne",
    "B. Le pod est en cours d'exécution",
    "C. Le PV est de type hostPath",
    "D. Le namespace est supprimé"
   ],
   "answer": 0,
   "exp": "Vérifier capacité, accessModes, storageClassName."
  },
  {
   "id": "cka-j3-11",
   "q": "Quel champ d'un PVC référence la classe de stockage ?",
   "choices": [
    "A. className",
    "B. storageClassName",
    "C. provisioner",
    "D. volumeClass"
   ],
   "answer": 1,
   "exp": "Une valeur \"\" désactive le provisionnement dynamique."
  },
  {
   "id": "cka-j3-12",
   "q": "Comment utiliser un PVC dans un pod ?",
   "choices": [
    "A. env.persistentVolume",
    "B. spec.storage",
    "C. volumes.persistentVolumeClaim.claimName + volumeMounts",
    "D. initContainers.pvc"
   ],
   "answer": 2,
   "exp": "Le volume référence le claim ; le conteneur le monte avec volumeMounts."
  },
  {
   "id": "cka-j3-13",
   "q": "Quel type de volume est éphémère et lié à la vie du pod ?",
   "choices": [
    "A. persistentVolumeClaim",
    "B. nfs",
    "C. hostPath",
    "D. emptyDir"
   ],
   "answer": 3,
   "exp": "emptyDir est créé au démarrage du pod et supprimé avec lui."
  },
  {
   "id": "cka-j3-14",
   "q": "Quel type de volume monte un répertoire du nœud dans le pod ?",
   "choices": [
    "A. hostPath",
    "B. emptyDir",
    "C. configMap",
    "D. projected"
   ],
   "answer": 0,
   "exp": "hostPath est risqué : à éviter en production."
  },
  {
   "id": "cka-j3-15",
   "q": "Quel type de volume expose un ConfigMap comme fichiers ?",
   "choices": [
    "A. emptyDir",
    "B. configMap",
    "C. hostPath",
    "D. secret"
   ],
   "answer": 1,
   "exp": "Chaque clé devient un fichier."
  },
  {
   "id": "cka-j3-16",
   "q": "Quel volume permet à plusieurs sources d'être projetées dans un même répertoire ?",
   "choices": [
    "A. emptyDir",
    "B. local",
    "C. projected",
    "D. nfs"
   ],
   "answer": 2,
   "exp": "projected combine secrets, configMaps, serviceAccountToken, downwardAPI."
  },
  {
   "id": "cka-j3-17",
   "q": "Quel est le rôle du CSI ?",
   "choices": [
    "A. Cluster Storage Index",
    "B. Central Snapshot Interface",
    "C. Container Secret Injection",
    "D. Container Storage Interface : standard pour intégrer des pilotes de stockage"
   ],
   "answer": 3,
   "exp": "Le CSI permet à des fournisseurs d'exposer du stockage sans modifier Kubernetes."
  },
  {
   "id": "cka-j3-18",
   "q": "Quel paramètre d'une StorageClass retarde la liaison jusqu'à la planification du pod ?",
   "choices": [
    "A. volumeBindingMode: WaitForFirstConsumer",
    "B. reclaimPolicy: Delay",
    "C. bindingMode: Late",
    "D. scheduleBinding: true"
   ],
   "answer": 0,
   "exp": "Évite de créer un volume dans une zone incompatible."
  },
  {
   "id": "cka-j3-19",
   "q": "Quel paramètre permet d'agrandir un volume existant ?",
   "choices": [
    "A. expandable: true",
    "B. allowVolumeExpansion: true",
    "C. resizePolicy: Auto",
    "D. volumeResize: enabled"
   ],
   "answer": 1,
   "exp": "Il faut ensuite modifier la taille demandée du PVC."
  },
  {
   "id": "cka-j3-20",
   "q": "Peut-on réduire la taille d'un PVC ?",
   "choices": [
    "A. Oui, librement",
    "B. Oui, si le pod est arrêté",
    "C. Non, seule l'extension est supportée",
    "D. Oui, avec reclaimPolicy Retain"
   ],
   "answer": 2,
   "exp": "Kubernetes ne supporte pas la réduction de PVC."
  },
  {
   "id": "cka-j3-21",
   "q": "Quelle classe est marquée par défaut ?",
   "choices": [
    "A. La première créée",
    "B. Celle nommée default",
    "C. Celle utilisée par le PV le plus ancien",
    "D. Celle avec l'annotation storageclass.kubernetes.io/is-default-class: \"true\""
   ],
   "answer": 3,
   "exp": "Une seule classe devrait être par défaut."
  },
  {
   "id": "cka-j3-22",
   "q": "Que contient un VolumeSnapshot ?",
   "choices": [
    "A. Une copie à un instant donné d'un volume persistant",
    "B. La configuration d'une StorageClass",
    "C. Les logs d'un pod",
    "D. Un backup d'etcd"
   ],
   "answer": 0,
   "exp": "Les snapshots nécessitent le CSI snapshotter."
  },
  {
   "id": "cka-j3-23",
   "q": "Comment sauvegarder etcd ?",
   "choices": [
    "A. kubectl backup etcd",
    "B. etcdctl snapshot save",
    "C. kubeadm backup",
    "D. kubectl snapshot etcd"
   ],
   "answer": 1,
   "exp": "L'examen CKA demande souvent etcdctl snapshot save avec certificats."
  },
  {
   "id": "cka-j3-24",
   "q": "Quelles options TLS sont nécessaires pour etcdctl sur un cluster kubeadm ?",
   "choices": [
    "A. --token et --server",
    "B. --kubeconfig uniquement",
    "C. --cacert, --cert, --key et --endpoints",
    "D. --user et --password"
   ],
   "answer": 2,
   "exp": "Les fichiers se trouvent dans /etc/kubernetes/pki/etcd."
  },
  {
   "id": "cka-j3-25",
   "q": "Quelle commande restaure un snapshot etcd ?",
   "choices": [
    "A. etcdctl restore backup",
    "B. kubectl restore etcd",
    "C. etcdctl member restore",
    "D. etcdctl snapshot restore (ou etcdutl)"
   ],
   "answer": 3,
   "exp": "On restaure dans un nouveau répertoire de données et on met à jour le manifeste statique."
  },
  {
   "id": "cka-j3-26",
   "q": "Quel répertoire contient les manifestes de pods statiques du plan de contrôle ?",
   "choices": [
    "A. /etc/kubernetes/manifests",
    "B. /var/lib/kubelet/pods",
    "C. /etc/kubernetes/pki",
    "D. /opt/k8s"
   ],
   "answer": 0,
   "exp": "Le kubelet surveille ce répertoire."
  },
  {
   "id": "cka-j3-27",
   "q": "Quel paramètre du kubelet définit le chemin des pods statiques ?",
   "choices": [
    "A. manifestDir",
    "B. staticPodPath",
    "C. podPath",
    "D. staticManifests"
   ],
   "answer": 1,
   "exp": "Défini dans la configuration du kubelet."
  },
  {
   "id": "cka-j3-28",
   "q": "Quelle commande planifie une mise à niveau de cluster avec kubeadm ?",
   "choices": [
    "A. kubeadm update cluster",
    "B. kubeadm upgrade check",
    "C. kubeadm upgrade plan",
    "D. kubectl upgrade"
   ],
   "answer": 2,
   "exp": "upgrade plan indique les versions disponibles."
  },
  {
   "id": "cka-j3-29",
   "q": "Quelle est la séquence de mise à niveau d'un nœud de travail ?",
   "choices": [
    "A. uncordon, upgrade, drain",
    "B. delete node, join, upgrade",
    "C. upgrade seulement",
    "D. drain, mise à niveau de kubeadm/kubelet, uncordon"
   ],
   "answer": 3,
   "exp": "On évince les pods, met à jour les paquets puis rend le nœud planifiable."
  },
  {
   "id": "cka-j3-30",
   "q": "Quel est l'écart de versions maximum toléré entre kubelet et kube-apiserver ?",
   "choices": [
    "A. Le kubelet ne doit pas être plus récent que l'API server (et jusqu'à trois versions mineures plus ancien)",
    "B. Il doit toujours être identique",
    "C. Le kubelet peut être plus récent de deux versions",
    "D. Aucun écart toléré"
   ],
   "answer": 0,
   "exp": "Politique de skew : kubelet <= apiserver et en retard d'au plus 3 versions mineures."
  },
  {
   "id": "cka-j3-31",
   "q": "Quelle commande génère un jeton pour joindre un nœud ?",
   "choices": [
    "A. kubectl join token",
    "B. kubeadm token create --print-join-command",
    "C. kubeadm node add",
    "D. kubectl get token"
   ],
   "answer": 1,
   "exp": "La commande affiche la ligne kubeadm join complète."
  },
  {
   "id": "cka-j3-32",
   "q": "Quel composant gère le provisionnement dynamique ?",
   "choices": [
    "A. kube-scheduler",
    "B. kubelet seul",
    "C. Le provisioner de la StorageClass",
    "D. kube-proxy"
   ],
   "answer": 2,
   "exp": "Il crée PV selon la demande."
  },
  {
   "id": "cka-j3-33",
   "q": "Que fait storageClassName: \"\" dans un PVC ?",
   "choices": [
    "A. Utilise la classe par défaut",
    "B. Crée une classe vide",
    "C. Provoque une erreur",
    "D. Désactive le provisionnement dynamique et cherche un PV statique sans classe"
   ],
   "answer": 3,
   "exp": "Utile pour lier un PV créé manuellement."
  },
  {
   "id": "cka-j3-34",
   "q": "Quelle commande liste les PV ?",
   "choices": [
    "A. kubectl get pv",
    "B. kubectl get volumes",
    "C. kubectl list pv",
    "D. kubectl describe disks"
   ],
   "answer": 0,
   "exp": "Les PV sont non namespacés."
  },
  {
   "id": "cka-j3-35",
   "q": "Un PV est-il namespacé ?",
   "choices": [
    "A. Oui, comme un pod",
    "B. Non, c'est une ressource de cluster",
    "C. Oui, mais uniquement dans kube-system",
    "D. Seulement les PV de type NFS"
   ],
   "answer": 1,
   "exp": "Les PVC sont namespacés ; les PV non."
  },
  {
   "id": "cka-j3-36",
   "q": "Quelle commande explique les champs d'une ressource ?",
   "choices": [
    "A. kubectl docs pv",
    "B. kubectl help pv.spec",
    "C. kubectl explain pv.spec",
    "D. kubectl describe spec pv"
   ],
   "answer": 2,
   "exp": "explain donne la documentation de l'API."
  },
  {
   "id": "cka-j3-37",
   "q": "Quel type de volume permet à un pod d'utiliser un disque local d'un nœud précis avec affinité automatique ?",
   "choices": [
    "A. hostPath",
    "B. emptyDir",
    "C. nfs",
    "D. local PV"
   ],
   "answer": 3,
   "exp": "Les PV local portent nodeAffinity."
  },
  {
   "id": "cka-j3-38",
   "q": "Quel champ d'un volume emptyDir le stocke en mémoire ?",
   "choices": [
    "A. medium: Memory",
    "B. type: tmpfs",
    "C. storage: ram",
    "D. memory: true"
   ],
   "answer": 0,
   "exp": "medium: Memory utilise tmpfs."
  },
  {
   "id": "cka-j3-39",
   "q": "Que permet subPath dans volumeMounts ?",
   "choices": [
    "A. Changer la taille du volume",
    "B. Monter un sous-répertoire ou fichier du volume",
    "C. Activer la lecture seule",
    "D. Créer un lien symbolique entre nœuds"
   ],
   "answer": 1,
   "exp": "Utile pour partager un volume entre plusieurs conteneurs avec chemins distincts."
  },
  {
   "id": "cka-j3-40",
   "q": "Que fait readOnly: true dans volumeMounts ?",
   "choices": [
    "A. Rend le PV en lecture seule pour tous",
    "B. Désactive le CSI",
    "C. Monte le volume en lecture seule dans le conteneur",
    "D. Change le mode d'accès du PVC"
   ],
   "answer": 2,
   "exp": "Option locale au montage."
  },
  {
   "id": "cka-j3-41",
   "q": "Quel champ d'un Secret monté en volume met à jour automatiquement son contenu ?",
   "choices": [
    "A. Aucune mise à jour jamais",
    "B. Seulement au redémarrage du nœud",
    "C. Seulement avec un initContainer",
    "D. Les mises à jour sont propagées sauf avec subPath"
   ],
   "answer": 3,
   "exp": "Les montages subPath ne reçoivent pas les mises à jour."
  },
  {
   "id": "cka-j3-42",
   "q": "Que stocke le champ data d'un Secret ?",
   "choices": [
    "A. Des valeurs encodées en base64",
    "B. Des valeurs chiffrées en AES",
    "C. Des valeurs en clair",
    "D. Des hachages SHA-256"
   ],
   "answer": 0,
   "exp": "stringData permet de saisir en clair (encodé à l'enregistrement)."
  },
  {
   "id": "cka-j3-43",
   "q": "Comment créer un Secret générique depuis la ligne de commande ?",
   "choices": [
    "A. kubectl create secret nom --value=clé:valeur",
    "B. kubectl create secret generic nom --from-literal=clé=valeur",
    "C. kubectl secret add nom clé valeur",
    "D. kubectl set secret nom clé=valeur"
   ],
   "answer": 1,
   "exp": "Existe aussi --from-file."
  },
  {
   "id": "cka-j3-44",
   "q": "Quelle commande décode un Secret ?",
   "choices": [
    "A. kubectl decode secret nom",
    "B. kubectl describe secret nom --decode",
    "C. kubectl get secret nom -o jsonpath='{.data.clé}' | base64 -d",
    "D. kubectl get secret nom --plain"
   ],
   "answer": 2,
   "exp": "base64 -d permet de lire la valeur."
  },
  {
   "id": "cka-j3-45",
   "q": "Que signifie l'état Released d'un PV ?",
   "choices": [
    "A. Le PV est lié à un PVC",
    "B. Le PV est supprimé",
    "C. Le PV est en cours de création",
    "D. Le PVC lié a été supprimé mais le PV n'est pas encore réutilisable"
   ],
   "answer": 3,
   "exp": "Avec Retain, il faut nettoyer manuellement le claimRef."
  },
  {
   "id": "cka-j3-46",
   "q": "Quel est le rôle de claimRef dans un PV ?",
   "choices": [
    "A. Lier explicitement le PV à un PVC précis",
    "B. Définir la capacité du volume",
    "C. Définir la classe de stockage",
    "D. Définir l'AZ"
   ],
   "answer": 0,
   "exp": "Permet de pré-lier un PV."
  },
  {
   "id": "cka-j3-47",
   "q": "Quelle commande vérifie la capacité et l'usage CPU/mémoire des nœuds ?",
   "choices": [
    "A. kubectl get usage",
    "B. kubectl top nodes",
    "C. kubectl describe resources",
    "D. kubectl stats nodes"
   ],
   "answer": 1,
   "exp": "Nécessite metrics-server."
  },
  {
   "id": "cka-j3-48",
   "q": "Quel composant fournit les métriques de ressources pour kubectl top ?",
   "choices": [
    "A. Prometheus",
    "B. etcd",
    "C. metrics-server",
    "D. kube-state-metrics seulement"
   ],
   "answer": 2,
   "exp": "metrics-server agrège les métriques du kubelet."
  },
  {
   "id": "cka-j3-49",
   "q": "Quel est l'avantage principal d'un StatefulSet avec volumeClaimTemplates ?",
   "choices": [
    "A. Tous les réplicas partagent un PVC unique",
    "B. Les PVC sont supprimés à chaque mise à jour",
    "C. Les PV sont créés automatiquement sans StorageClass",
    "D. Chaque réplica obtient son propre PVC stable"
   ],
   "answer": 3,
   "exp": "Chaque pod conserve son volume lors des redémarrages."
  },
  {
   "id": "cka-j3-50",
   "q": "Que devient le PVC d'un StatefulSet lors du scale down ?",
   "choices": [
    "A. Il est conservé par défaut (selon persistentVolumeClaimRetentionPolicy)",
    "B. Il est supprimé immédiatement",
    "C. Il est fusionné avec un autre PVC",
    "D. Il est converti en emptyDir"
   ],
   "answer": 0,
   "exp": "La politique de rétention est configurable depuis les versions récentes."
  }
 ],
 "4": [
  {
   "id": "cka-j4-1",
   "q": "Quel mécanisme Kubernetes contrôle qui peut faire quoi sur quelles ressources ?",
   "choices": [
    "A. RBAC",
    "B. NetworkPolicy",
    "C. PodSecurity",
    "D. ResourceQuota"
   ],
   "answer": 0,
   "exp": "RBAC (Role-Based Access Control) autorise les actions selon des rôles."
  },
  {
   "id": "cka-j4-2",
   "q": "Quelle ressource RBAC définit des permissions dans un namespace ?",
   "choices": [
    "A. ClusterRole",
    "B. Role",
    "C. RoleBinding",
    "D. ServiceAccount"
   ],
   "answer": 1,
   "exp": "Role est namespacé ; ClusterRole est global."
  },
  {
   "id": "cka-j4-3",
   "q": "Quelle ressource attache un Role à un sujet dans un namespace ?",
   "choices": [
    "A. ClusterRoleBinding",
    "B. ServiceAccount",
    "C. RoleBinding",
    "D. SubjectAccessReview"
   ],
   "answer": 2,
   "exp": "RoleBinding lie rôle et sujets (users, groups, serviceaccounts)."
  },
  {
   "id": "cka-j4-4",
   "q": "Peut-on utiliser un RoleBinding pour référencer un ClusterRole ?",
   "choices": [
    "A. Non, c'est interdit",
    "B. Oui, avec des droits cluster-wide",
    "C. Non, seulement avec ClusterRoleBinding",
    "D. Oui, les permissions sont alors limitées au namespace du binding"
   ],
   "answer": 3,
   "exp": "Pratique pour réutiliser un ClusterRole dans plusieurs namespaces."
  },
  {
   "id": "cka-j4-5",
   "q": "Quelle commande crée un Role en ligne de commande ?",
   "choices": [
    "A. kubectl create role pod-reader --verb=get,list --resource=pods",
    "B. kubectl create rbac pod-reader get,list pods",
    "C. kubectl add role pod-reader pods",
    "D. kubectl grant role pod-reader get pods"
   ],
   "answer": 0,
   "exp": "create role/rolebinding sont rapides pour l'examen."
  },
  {
   "id": "cka-j4-6",
   "q": "Quelle commande vérifie si un utilisateur peut effectuer une action ?",
   "choices": [
    "A. kubectl whoami can create pods",
    "B. kubectl auth can-i create pods --as jane",
    "C. kubectl check permission jane pods",
    "D. kubectl rbac test jane pods"
   ],
   "answer": 1,
   "exp": "auth can-i teste l'autorisation avec --as pour usurper."
  },
  {
   "id": "cka-j4-7",
   "q": "Quel sujet RBAC représente l'identité d'un pod ?",
   "choices": [
    "A. User",
    "B. Group",
    "C. ServiceAccount",
    "D. Node"
   ],
   "answer": 2,
   "exp": "Les pods utilisent un ServiceAccount pour s'authentifier à l'API."
  },
  {
   "id": "cka-j4-8",
   "q": "Comment associer un ServiceAccount à un pod ?",
   "choices": [
    "A. spec.account",
    "B. metadata.serviceAccount",
    "C. spec.identity",
    "D. spec.serviceAccountName"
   ],
   "answer": 3,
   "exp": "Par défaut, le ServiceAccount default du namespace est utilisé."
  },
  {
   "id": "cka-j4-9",
   "q": "Quelle option empêche le montage automatique du token de ServiceAccount ?",
   "choices": [
    "A. automountServiceAccountToken: false",
    "B. disableToken: true",
    "C. mountToken: none",
    "D. noToken: true"
   ],
   "answer": 0,
   "exp": "Réduit la surface d'attaque."
  },
  {
   "id": "cka-j4-10",
   "q": "Quel type d'authentification utilise un certificat client pour un utilisateur ?",
   "choices": [
    "A. Tokens statiques uniquement",
    "B. Certificats X.509 signés par la CA du cluster",
    "C. Mots de passe basic uniquement",
    "D. OAuth uniquement"
   ],
   "answer": 1,
   "exp": "Le CN du certificat est le nom d'utilisateur, O le groupe."
  },
  {
   "id": "cka-j4-11",
   "q": "Quelle ressource permet de demander la signature d'un certificat utilisateur ?",
   "choices": [
    "A. Certificate",
    "B. TLSRequest",
    "C. CertificateSigningRequest",
    "D. SigningPolicy"
   ],
   "answer": 2,
   "exp": "On approuve avec kubectl certificate approve."
  },
  {
   "id": "cka-j4-12",
   "q": "Quelle commande approuve une CSR ?",
   "choices": [
    "A. kubectl approve csr nom",
    "B. kubectl csr sign nom",
    "C. kubectl cert accept nom",
    "D. kubectl certificate approve nom"
   ],
   "answer": 3,
   "exp": "La commande émet ensuite le certificat signé."
  },
  {
   "id": "cka-j4-13",
   "q": "Où se trouvent généralement les certificats du plan de contrôle avec kubeadm ?",
   "choices": [
    "A. /etc/kubernetes/pki",
    "B. /var/lib/kubernetes/certs",
    "C. /opt/kube/pki",
    "D. /usr/share/kubernetes/pki"
   ],
   "answer": 0,
   "exp": "On y trouve ca.crt, apiserver.crt, etcd/..."
  },
  {
   "id": "cka-j4-14",
   "q": "Quelle commande vérifie l'expiration des certificats avec kubeadm ?",
   "choices": [
    "A. kubeadm certs list",
    "B. kubeadm certs check-expiration",
    "C. kubectl get certs",
    "D. kubeadm check tls"
   ],
   "answer": 1,
   "exp": "On peut renouveler avec kubeadm certs renew."
  },
  {
   "id": "cka-j4-15",
   "q": "Quel est le fichier kubeconfig par défaut ?",
   "choices": [
    "A. /etc/kubernetes/config",
    "B. ~/.kubeconfig",
    "C. ~/.kube/config",
    "D. /var/kube/config"
   ],
   "answer": 2,
   "exp": "KUBECONFIG peut pointer vers d'autres fichiers."
  },
  {
   "id": "cka-j4-16",
   "q": "Quel élément d'un kubeconfig lie un utilisateur à un cluster ?",
   "choices": [
    "A. namespace",
    "B. token",
    "C. manifest",
    "D. context"
   ],
   "answer": 3,
   "exp": "Un context associe cluster, user et namespace."
  },
  {
   "id": "cka-j4-17",
   "q": "Quelle commande change de contexte ?",
   "choices": [
    "A. kubectl config use-context nom",
    "B. kubectl use context nom",
    "C. kubectl context switch nom",
    "D. kubectl set-context nom"
   ],
   "answer": 0,
   "exp": "Les contexts s'affichent avec config get-contexts."
  },
  {
   "id": "cka-j4-18",
   "q": "Quel champ du pod permet de forcer l'exécution sans privilèges root ?",
   "choices": [
    "A. privileged: false uniquement",
    "B. securityContext.runAsNonRoot: true",
    "C. runAs: user",
    "D. rootless: true"
   ],
   "answer": 1,
   "exp": "runAsNonRoot refuse de démarrer un conteneur en UID 0."
  },
  {
   "id": "cka-j4-19",
   "q": "Quel champ définit l'UID d'exécution d'un conteneur ?",
   "choices": [
    "A. securityContext.userId",
    "B. spec.uid",
    "C. securityContext.runAsUser",
    "D. containerUser"
   ],
   "answer": 2,
   "exp": "Existe aussi runAsGroup et fsGroup."
  },
  {
   "id": "cka-j4-20",
   "q": "Que fait readOnlyRootFilesystem: true ?",
   "choices": [
    "A. Rend les volumes en lecture seule",
    "B. Rend l'image immuable côté registry",
    "C. Désactive le réseau",
    "D. Monte le système de fichiers racine du conteneur en lecture seule"
   ],
   "answer": 3,
   "exp": "Limite l'impact d'une compromission."
  },
  {
   "id": "cka-j4-21",
   "q": "Que fait allowPrivilegeEscalation: false ?",
   "choices": [
    "A. Empêche un processus d'acquérir plus de privilèges que son parent",
    "B. Bloque l'accès à l'API server",
    "C. Interdit l'exécution en root uniquement",
    "D. Désactive les capabilities du noyau"
   ],
   "answer": 0,
   "exp": "Empêche setuid et similaires."
  },
  {
   "id": "cka-j4-22",
   "q": "Comment retirer toutes les capabilities Linux d'un conteneur ?",
   "choices": [
    "A. capabilities: none",
    "B. securityContext.capabilities.drop: [\"ALL\"]",
    "C. securityContext.noCaps: true",
    "D. privileged: false"
   ],
   "answer": 1,
   "exp": "On ajoute ensuite seulement celles nécessaires avec add."
  },
  {
   "id": "cka-j4-23",
   "q": "Qu'implique privileged: true ?",
   "choices": [
    "A. Le conteneur est plus rapide",
    "B. Le conteneur ignore les quotas uniquement",
    "C. Le conteneur a des accès quasi équivalents à root sur l'hôte",
    "D. Le conteneur ne peut pas accéder au réseau"
   ],
   "answer": 2,
   "exp": "À éviter sauf cas particuliers."
  },
  {
   "id": "cka-j4-24",
   "q": "Quel mécanisme natif a remplacé PodSecurityPolicy ?",
   "choices": [
    "A. OPA Gatekeeper uniquement",
    "B. SELinux uniquement",
    "C. NetworkPolicy",
    "D. Pod Security Admission"
   ],
   "answer": 3,
   "exp": "PSP est supprimé en 1.25."
  },
  {
   "id": "cka-j4-25",
   "q": "Quels niveaux de Pod Security Standards existent ?",
   "choices": [
    "A. privileged, baseline, restricted",
    "B. low, medium, high",
    "C. open, standard, locked",
    "D. dev, test, prod"
   ],
   "answer": 0,
   "exp": "restricted est le plus strict."
  },
  {
   "id": "cka-j4-26",
   "q": "Comment appliquer un niveau PSA à un namespace ?",
   "choices": [
    "A. Annotation security=high sur le pod",
    "B. Labels pod-security.kubernetes.io/enforce=restricted",
    "C. Un objet PodSecurity dans kube-system",
    "D. Un paramètre du kubelet"
   ],
   "answer": 1,
   "exp": "Modes : enforce, audit, warn."
  },
  {
   "id": "cka-j4-27",
   "q": "Quel contrôleur d'admission ajoute les valeurs par défaut des LimitRange ?",
   "choices": [
    "A. ResourceQuota",
    "B. NamespaceLifecycle",
    "C. LimitRanger",
    "D. ServiceAccount"
   ],
   "answer": 2,
   "exp": "Les contrôleurs d'admission sont activés via --enable-admission-plugins."
  },
  {
   "id": "cka-j4-28",
   "q": "À quoi servent les ValidatingAdmissionWebhooks ?",
   "choices": [
    "A. Chiffrer les secrets",
    "B. Authentifier les utilisateurs",
    "C. Créer des PV",
    "D. Valider ou rejeter des requêtes API via un service externe"
   ],
   "answer": 3,
   "exp": "Ils interviennent après l'authentification et l'autorisation."
  },
  {
   "id": "cka-j4-29",
   "q": "Quelle option du kube-apiserver active le chiffrement des secrets au repos ?",
   "choices": [
    "A. --encryption-provider-config",
    "B. --secrets-encrypt=true",
    "C. --etcd-encryption",
    "D. --secure-secrets"
   ],
   "answer": 0,
   "exp": "Le fichier définit les providers (aescbc, secretbox, kms)."
  },
  {
   "id": "cka-j4-30",
   "q": "Quel mode d'autorisation du kube-apiserver est utilisé pour les pods du kubelet ?",
   "choices": [
    "A. ABAC",
    "B. Node",
    "C. AlwaysAllow",
    "D. Webhook uniquement"
   ],
   "answer": 1,
   "exp": "Les modes courants : Node,RBAC."
  },
  {
   "id": "cka-j4-31",
   "q": "Quelle commande crée un ServiceAccount ?",
   "choices": [
    "A. kubectl create sa-account nom",
    "B. kubectl add serviceaccount nom",
    "C. kubectl create serviceaccount nom",
    "D. kubectl new sa nom"
   ],
   "answer": 2,
   "exp": "Abréviation : sa."
  },
  {
   "id": "cka-j4-32",
   "q": "Comment obtenir un token temporaire pour un ServiceAccount ?",
   "choices": [
    "A. kubectl get token nom",
    "B. kubectl describe token nom",
    "C. kubectl sa token nom",
    "D. kubectl create token nom"
   ],
   "answer": 3,
   "exp": "Depuis 1.24, les tokens longue durée ne sont plus créés automatiquement."
  },
  {
   "id": "cka-j4-33",
   "q": "Quel est le rôle d'un ImagePullSecret ?",
   "choices": [
    "A. Fournir des identifiants pour tirer une image d'un registry privé",
    "B. Chiffrer l'image",
    "C. Signer l'image",
    "D. Limiter la taille de l'image"
   ],
   "answer": 0,
   "exp": "Se référence via imagePullSecrets dans le pod ou le ServiceAccount."
  },
  {
   "id": "cka-j4-34",
   "q": "Comment créer un secret de registry ?",
   "choices": [
    "A. kubectl create secret registry nom",
    "B. kubectl create secret docker-registry nom --docker-server=... --docker-username=...",
    "C. kubectl login registry",
    "D. kubectl set registry nom"
   ],
   "answer": 1,
   "exp": "Type kubernetes.io/dockerconfigjson."
  },
  {
   "id": "cka-j4-35",
   "q": "Qu'est-ce que AppArmor/seccomp dans le contexte K8s ?",
   "choices": [
    "A. Des plugins CNI",
    "B. Des outils de sauvegarde",
    "C. Des profils de sécurité du noyau appliqués aux conteneurs",
    "D. Des moteurs de runtime"
   ],
   "answer": 2,
   "exp": "seccompProfile: RuntimeDefault est recommandé."
  },
  {
   "id": "cka-j4-36",
   "q": "Quelle option de securityContext active le profil seccomp par défaut du runtime ?",
   "choices": [
    "A. seccomp: true",
    "B. securityProfile: default",
    "C. runtimeSeccomp: on",
    "D. seccompProfile.type: RuntimeDefault"
   ],
   "answer": 3,
   "exp": "Réduit les appels système disponibles."
  },
  {
   "id": "cka-j4-37",
   "q": "Quel port de l'API server est protégé par TLS par défaut ?",
   "choices": [
    "A. 6443",
    "B. 8080",
    "C. 2380",
    "D. 10255"
   ],
   "answer": 0,
   "exp": "Le port non sécurisé 8080 n'existe plus."
  },
  {
   "id": "cka-j4-38",
   "q": "Quel outil de benchmarking vérifie la conformité CIS du cluster ?",
   "choices": [
    "A. kube-hunter",
    "B. kube-bench",
    "C. kubeadm",
    "D. kubelet-check"
   ],
   "answer": 1,
   "exp": "kube-bench applique le CIS Kubernetes Benchmark."
  },
  {
   "id": "cka-j4-39",
   "q": "Quelle commande liste les rôles de cluster ?",
   "choices": [
    "A. kubectl get roles -A",
    "B. kubectl describe rbac",
    "C. kubectl get clusterroles",
    "D. kubectl list roles"
   ],
   "answer": 2,
   "exp": "Les rôles intégrés incluent cluster-admin, admin, edit, view."
  },
  {
   "id": "cka-j4-40",
   "q": "Quel ClusterRole intégré donne un accès en lecture seule à la plupart des ressources ?",
   "choices": [
    "A. edit",
    "B. admin",
    "C. cluster-admin",
    "D. view"
   ],
   "answer": 3,
   "exp": "view n'inclut pas les secrets."
  },
  {
   "id": "cka-j4-41",
   "q": "Peut-on utiliser des wildcards dans les rules d'un Role ?",
   "choices": [
    "A. Oui, avec * pour les verbes ou ressources",
    "B. Non",
    "C. Seulement pour les ClusterRoles",
    "D. Seulement pour les namespaces"
   ],
   "answer": 0,
   "exp": "À éviter par principe de moindre privilège."
  },
  {
   "id": "cka-j4-42",
   "q": "Qu'est-ce que le principe du moindre privilège ?",
   "choices": [
    "A. Donner cluster-admin aux équipes",
    "B. N'accorder que les permissions strictement nécessaires",
    "C. Désactiver RBAC",
    "D. Utiliser un compte partagé"
   ],
   "answer": 1,
   "exp": "Concept clé de sécurité."
  },
  {
   "id": "cka-j4-43",
   "q": "Quelle option kubelet désactive l'accès anonyme ?",
   "choices": [
    "A. --no-anon",
    "B. --auth=strict",
    "C. --anonymous-auth=false",
    "D. --deny-anonymous"
   ],
   "answer": 2,
   "exp": "Combiné avec le webhook d'autorisation."
  },
  {
   "id": "cka-j4-44",
   "q": "Qu'est-ce que l'audit logging de l'API server ?",
   "choices": [
    "A. Chiffrement des journaux",
    "B. Rotation des certificats",
    "C. Sauvegarde etcd",
    "D. Enregistrement des requêtes API selon une politique"
   ],
   "answer": 3,
   "exp": "Configuré via --audit-policy-file et --audit-log-path."
  },
  {
   "id": "cka-j4-45",
   "q": "Quel objet limite quels volumes un pod peut monter ?",
   "choices": [
    "A. Pod Security Standards (restricted)",
    "B. ResourceQuota",
    "C. StorageClass",
    "D. LimitRange"
   ],
   "answer": 0,
   "exp": "Le niveau restricted limite les types de volumes."
  },
  {
   "id": "cka-j4-46",
   "q": "Quel outil permet de scanner les vulnérabilités d'images ?",
   "choices": [
    "A. kubectl scan",
    "B. Trivy",
    "C. kube-bench",
    "D. etcdctl"
   ],
   "answer": 1,
   "exp": "Trivy est un scanner open source courant."
  },
  {
   "id": "cka-j4-47",
   "q": "Quelle bonne pratique concerne les tags d'image ?",
   "choices": [
    "A. Toujours utiliser latest",
    "B. Ne jamais utiliser de registry privé",
    "C. Éviter latest et épingler par digest ou version",
    "D. Utiliser des tags aléatoires"
   ],
   "answer": 2,
   "exp": "Un digest garantit l'immuabilité."
  },
  {
   "id": "cka-j4-48",
   "q": "Que fait kubectl auth whoami ?",
   "choices": [
    "A. Liste les permissions",
    "B. Affiche les rôles",
    "C. Liste les namespaces",
    "D. Affiche l'identité authentifiée de l'utilisateur courant"
   ],
   "answer": 3,
   "exp": "Disponible dans les versions récentes."
  },
  {
   "id": "cka-j4-49",
   "q": "Quel est l'effet d'un ClusterRoleBinding vers cluster-admin ?",
   "choices": [
    "A. Accorde tous les droits sur tout le cluster au sujet",
    "B. Accorde les droits dans un seul namespace",
    "C. Accorde uniquement la lecture",
    "D. N'a aucun effet"
   ],
   "answer": 0,
   "exp": "Il faut l'utiliser avec précaution."
  },
  {
   "id": "cka-j4-50",
   "q": "Quel flag active RBAC sur l'API server ?",
   "choices": [
    "A. --rbac=true",
    "B. --authorization-mode=Node,RBAC",
    "C. --enable-rbac",
    "D. --auth=rbac"
   ],
   "answer": 1,
   "exp": "Configuration standard de kubeadm."
  }
 ],
 "5": [
  {
   "id": "cka-j5-1",
   "q": "Un pod est en CrashLoopBackOff. Quelle est la première commande utile ?",
   "choices": [
    "A. kubectl delete pod",
    "B. kubectl logs pod --previous",
    "C. kubectl scale deployment --replicas=0",
    "D. kubectl cordon node"
   ],
   "answer": 1,
   "exp": "Les logs de l'instance précédente montrent la cause du crash."
  },
  {
   "id": "cka-j5-2",
   "q": "Un pod reste en ImagePullBackOff. Que vérifier ?",
   "choices": [
    "A. Les NetworkPolicy uniquement",
    "B. Les quotas CPU",
    "C. Nom/tag de l'image, accès au registry, imagePullSecrets",
    "D. Le certificat du kubelet"
   ],
   "answer": 2,
   "exp": "describe pod indique l'erreur de pull."
  },
  {
   "id": "cka-j5-3",
   "q": "Un pod reste en Pending sans événement de planification. Quelle est une cause probable ?",
   "choices": [
    "A. Le pod a fini son exécution",
    "B. L'image est corrompue",
    "C. Le Service est de type headless",
    "D. Ressources insuffisantes, taints ou affinités non satisfaites"
   ],
   "answer": 3,
   "exp": "kubectl describe pod affiche les raisons FailedScheduling."
  },
  {
   "id": "cka-j5-4",
   "q": "Un nœud est NotReady. Où commencer ?",
   "choices": [
    "A. systemctl status kubelet et journalctl -u kubelet",
    "B. kubectl logs node",
    "C. kubectl delete node",
    "D. kubectl get ingress"
   ],
   "answer": 0,
   "exp": "Le kubelet signale l'état du nœud."
  },
  {
   "id": "cka-j5-5",
   "q": "Où voir les logs du kubelet sur un nœud systemd ?",
   "choices": [
    "A. /var/log/kubelet.yaml",
    "B. journalctl -u kubelet",
    "C. kubectl logs kubelet",
    "D. docker logs kubelet"
   ],
   "answer": 1,
   "exp": "Le kubelet est un service systemd."
  },
  {
   "id": "cka-j5-6",
   "q": "Quel est l'état d'un pod dont un conteneur a quitté avec un code 137 ?",
   "choices": [
    "A. Terminé avec succès",
    "B. Bloqué par une NetworkPolicy",
    "C. Tué par SIGKILL, souvent OOMKilled",
    "D. Image introuvable"
   ],
   "answer": 2,
   "exp": "137 = 128 + 9 (SIGKILL)."
  },
  {
   "id": "cka-j5-7",
   "q": "Comment voir la dernière raison de terminaison d'un conteneur ?",
   "choices": [
    "A. kubectl get pod -o name",
    "B. kubectl top pod",
    "C. kubectl logs --all",
    "D. kubectl describe pod → Last State"
   ],
   "answer": 3,
   "exp": "Last State affiche Reason et Exit Code."
  },
  {
   "id": "cka-j5-8",
   "q": "Quelle commande affiche les événements récents du cluster triés par date ?",
   "choices": [
    "A. kubectl get events --sort-by=.metadata.creationTimestamp",
    "B. kubectl events --sort",
    "C. kubectl get logs --sort",
    "D. kubectl describe events"
   ],
   "answer": 0,
   "exp": "Utile pour un diagnostic global."
  },
  {
   "id": "cka-j5-9",
   "q": "Un Service ne répond pas. Quelle vérification est essentielle ?",
   "choices": [
    "A. Redémarrer tous les nœuds",
    "B. kubectl get endpoints svc : y a-t-il des pods ?",
    "C. Supprimer le Service",
    "D. Changer la StorageClass"
   ],
   "answer": 1,
   "exp": "Endpoints vides = selector erroné ou pods non prêts."
  },
  {
   "id": "cka-j5-10",
   "q": "Un pod ne résout pas les noms DNS. Que contrôler ?",
   "choices": [
    "A. Les PV",
    "B. Les quotas",
    "C. Les pods CoreDNS dans kube-system et resolv.conf",
    "D. Le scheduler"
   ],
   "answer": 2,
   "exp": "Tester avec nslookup depuis un pod."
  },
  {
   "id": "cka-j5-11",
   "q": "Le kube-apiserver est indisponible. Où chercher avec kubeadm ?",
   "choices": [
    "A. kubectl logs apiserver",
    "B. kubectl describe apiserver",
    "C. journalctl -u etcd",
    "D. Les logs du conteneur via crictl et le manifeste statique"
   ],
   "answer": 3,
   "exp": "Comme kubectl ne répond pas, utiliser crictl ps/logs."
  },
  {
   "id": "cka-j5-12",
   "q": "Quel outil permet d'inspecter des conteneurs sans Docker sur un nœud ?",
   "choices": [
    "A. crictl",
    "B. docker ps",
    "C. kubectl exec",
    "D. podman uniquement"
   ],
   "answer": 0,
   "exp": "crictl parle au runtime CRI."
  },
  {
   "id": "cka-j5-13",
   "q": "Quel fichier modifier pour changer les paramètres de l'API server sur kubeadm ?",
   "choices": [
    "A. /etc/kubernetes/admin.conf",
    "B. /etc/kubernetes/manifests/kube-apiserver.yaml",
    "C. /var/lib/kubelet/config.yaml",
    "D. /etc/kubernetes/pki/apiserver.crt"
   ],
   "answer": 1,
   "exp": "Le kubelet recrée automatiquement le pod statique."
  },
  {
   "id": "cka-j5-14",
   "q": "Quel est le rôle de /var/lib/kubelet/config.yaml ?",
   "choices": [
    "A. Configuration de l'API server",
    "B. Certificats etcd",
    "C. Configuration du kubelet",
    "D. Manifeste de scheduler"
   ],
   "answer": 2,
   "exp": "Le kubelet y lit sa KubeletConfiguration."
  },
  {
   "id": "cka-j5-15",
   "q": "Le scheduler est en panne. Que se passe-t-il pour les nouveaux pods ?",
   "choices": [
    "A. Ils sont planifiés par kubelet",
    "B. Ils sont supprimés",
    "C. Ils s'exécutent sur le master automatiquement",
    "D. Ils restent Pending car non planifiés"
   ],
   "answer": 3,
   "exp": "Les pods existants continuent de fonctionner."
  },
  {
   "id": "cka-j5-16",
   "q": "Le controller-manager est en panne. Quelle conséquence ?",
   "choices": [
    "A. Les boucles de réconciliation s'arrêtent (pas de nouveaux réplicas, etc.)",
    "B. Les pods existants sont supprimés",
    "C. L'API devient inaccessible",
    "D. Le DNS est cassé"
   ],
   "answer": 0,
   "exp": "Les pods déjà en cours restent actifs."
  },
  {
   "id": "cka-j5-17",
   "q": "Quel flag permet de lister les ressources avec plus de détails (IP, nœud) ?",
   "choices": [
    "A. --details",
    "B. -o wide",
    "C. -o long",
    "D. --full"
   ],
   "answer": 1,
   "exp": "-o wide ajoute IP et NODE."
  },
  {
   "id": "cka-j5-18",
   "q": "Quelle commande liste tous les pods d'un cluster avec leur nœud ?",
   "choices": [
    "A. kubectl get nodes -o pods",
    "B. kubectl describe pods --all",
    "C. kubectl get pods -A -o wide",
    "D. kubectl list pods"
   ],
   "answer": 2,
   "exp": "-A = all namespaces."
  },
  {
   "id": "cka-j5-19",
   "q": "Quel flag filtre par label ?",
   "choices": [
    "A. --filter app=web",
    "B. --label=app/web",
    "C. -f app=web",
    "D. -l app=web"
   ],
   "answer": 3,
   "exp": "-l ou --selector."
  },
  {
   "id": "cka-j5-20",
   "q": "Comment trier les pods par redémarrages ?",
   "choices": [
    "A. kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'",
    "B. kubectl sort pods restart",
    "C. kubectl get pods -s restart",
    "D. kubectl top pods --sort"
   ],
   "answer": 0,
   "exp": "--sort-by accepte du JSONPath."
  },
  {
   "id": "cka-j5-21",
   "q": "Quel format de sortie permet d'extraire une valeur précise ?",
   "choices": [
    "A. -o text",
    "B. -o jsonpath='{...}'",
    "C. -o brief",
    "D. -o raw"
   ],
   "answer": 1,
   "exp": "jsonpath et custom-columns sont fréquents dans l'examen."
  },
  {
   "id": "cka-j5-22",
   "q": "Comment obtenir uniquement les noms des nœuds ?",
   "choices": [
    "A. kubectl get nodes --names",
    "B. kubectl nodes list",
    "C. kubectl get nodes -o jsonpath='{.items[*].metadata.name}'",
    "D. kubectl get nodes -o names"
   ],
   "answer": 2,
   "exp": "jsonpath sur les items."
  },
  {
   "id": "cka-j5-23",
   "q": "Comment créer rapidement un manifeste de Deployment sans l'appliquer ?",
   "choices": [
    "A. kubectl generate deployment web",
    "B. kubectl apply --preview",
    "C. kubectl deploy web --yaml",
    "D. kubectl create deployment web --image=nginx --dry-run=client -o yaml"
   ],
   "answer": 3,
   "exp": "Technique centrale pour gagner du temps."
  },
  {
   "id": "cka-j5-24",
   "q": "Quelle commande force la suppression immédiate d'un pod bloqué en Terminating ?",
   "choices": [
    "A. kubectl delete pod nom --force --grace-period=0",
    "B. kubectl kill pod nom",
    "C. kubectl delete pod nom --now-only",
    "D. kubectl stop pod nom"
   ],
   "answer": 0,
   "exp": "À utiliser prudemment."
  },
  {
   "id": "cka-j5-25",
   "q": "Quel est le temps de grâce par défaut avant l'arrêt forcé d'un pod ?",
   "choices": [
    "A. 5 secondes",
    "B. 30 secondes",
    "C. 2 minutes",
    "D. 10 minutes"
   ],
   "answer": 1,
   "exp": "terminationGracePeriodSeconds vaut 30 par défaut."
  },
  {
   "id": "cka-j5-26",
   "q": "Quelle commande remplace une ressource en la supprimant puis recréant ?",
   "choices": [
    "A. kubectl apply --recreate",
    "B. kubectl patch --replace",
    "C. kubectl replace --force -f fichier.yaml",
    "D. kubectl reset -f fichier.yaml"
   ],
   "answer": 2,
   "exp": "Utile lorsque des champs immuables doivent changer."
  },
  {
   "id": "cka-j5-27",
   "q": "Quel est le comportement d'un champ immuable lors d'un apply ?",
   "choices": [
    "A. Il est modifié sans conséquences",
    "B. Il est ignoré silencieusement",
    "C. Il redémarre le nœud",
    "D. L'API refuse la modification"
   ],
   "answer": 3,
   "exp": "Il faut recréer la ressource."
  },
  {
   "id": "cka-j5-28",
   "q": "Comment vérifier la version du cluster ?",
   "choices": [
    "A. kubectl version",
    "B. kubectl cluster --version",
    "C. kubeadm info",
    "D. kubectl get version"
   ],
   "answer": 0,
   "exp": "Affiche client et serveur."
  },
  {
   "id": "cka-j5-29",
   "q": "Quelle commande affiche les informations du cluster et des endpoints ?",
   "choices": [
    "A. kubectl get cluster",
    "B. kubectl cluster-info",
    "C. kubectl describe cluster",
    "D. kubectl info"
   ],
   "answer": 1,
   "exp": "Affiche l'URL du control plane et CoreDNS."
  },
  {
   "id": "cka-j5-30",
   "q": "Quel est le composant responsable de l'exécution des conteneurs sur un nœud ?",
   "choices": [
    "A. kube-proxy",
    "B. CoreDNS",
    "C. Le runtime de conteneurs (containerd, CRI-O)",
    "D. kube-scheduler"
   ],
   "answer": 2,
   "exp": "Le kubelet pilote le runtime via CRI."
  },
  {
   "id": "cka-j5-31",
   "q": "Quel est le socket CRI typique de containerd ?",
   "choices": [
    "A. tcp://localhost:2375",
    "B. unix:///var/run/docker.sock uniquement",
    "C. http://localhost:8080",
    "D. unix:///run/containerd/containerd.sock"
   ],
   "answer": 3,
   "exp": "Utilisé par crictl."
  },
  {
   "id": "cka-j5-32",
   "q": "Pourquoi un pod reste-t-il en ContainerCreating longtemps ?",
   "choices": [
    "A. Problème de volume, de CNI ou de pull d'image",
    "B. Le pod est terminé",
    "C. Le Service est absent",
    "D. Le namespace est supprimé"
   ],
   "answer": 0,
   "exp": "describe pod montre les événements FailedMount, etc."
  },
  {
   "id": "cka-j5-33",
   "q": "Que signifie l'état Evicted ?",
   "choices": [
    "A. Le pod est terminé normalement",
    "B. Le pod a été évincé (pression de ressources du nœud)",
    "C. Le pod est en cours de création",
    "D. Le pod est en pause"
   ],
   "answer": 1,
   "exp": "Souvent dû à la mémoire ou au disque."
  },
  {
   "id": "cka-j5-34",
   "q": "Quelle taint est ajoutée automatiquement à un nœud NotReady ?",
   "choices": [
    "A. node.kubernetes.io/ready",
    "B. node-role.kubernetes.io/failed",
    "C. node.kubernetes.io/not-ready",
    "D. kubernetes.io/down"
   ],
   "answer": 2,
   "exp": "Les pods sont évincés après tolerationSeconds."
  },
  {
   "id": "cka-j5-35",
   "q": "Quel est le comportement par défaut de tolerationSeconds pour not-ready ?",
   "choices": [
    "A. 30 secondes",
    "B. 1 heure",
    "C. Immédiat",
    "D. 300 secondes"
   ],
   "answer": 3,
   "exp": "Ajouté automatiquement par l'admission controller."
  },
  {
   "id": "cka-j5-36",
   "q": "Comment tester un manifeste côté serveur sans le créer ?",
   "choices": [
    "A. kubectl apply --dry-run=server -f fichier.yaml",
    "B. kubectl apply --test",
    "C. kubectl validate -f fichier.yaml",
    "D. kubectl create --check"
   ],
   "answer": 0,
   "exp": "Le serveur valide réellement le manifeste."
  },
  {
   "id": "cka-j5-37",
   "q": "Quelle commande compare un manifeste local à l'état du cluster ?",
   "choices": [
    "A. kubectl compare -f fichier.yaml",
    "B. kubectl diff -f fichier.yaml",
    "C. kubectl status -f fichier.yaml",
    "D. kubectl get diff"
   ],
   "answer": 1,
   "exp": "Affiche les différences."
  },
  {
   "id": "cka-j5-38",
   "q": "Quelle commande copie un fichier entre un pod et la machine locale ?",
   "choices": [
    "A. kubectl scp",
    "B. kubectl transfer",
    "C. kubectl cp",
    "D. kubectl push"
   ],
   "answer": 2,
   "exp": "kubectl cp ns/pod:/chemin ./local."
  },
  {
   "id": "cka-j5-39",
   "q": "Comment exécuter une commande dans un conteneur spécifique d'un pod ?",
   "choices": [
    "A. kubectl exec pod --container=cmd",
    "B. kubectl run pod:conteneur cmd",
    "C. kubectl attach -c conteneur cmd",
    "D. kubectl exec pod -c conteneur -- cmd"
   ],
   "answer": 3,
   "exp": "-c sélectionne le conteneur."
  },
  {
   "id": "cka-j5-40",
   "q": "Quelle est la commande pour afficher les ressources consommées par pod ?",
   "choices": [
    "A. kubectl top pod",
    "B. kubectl usage pod",
    "C. kubectl stats pod",
    "D. kubectl describe usage"
   ],
   "answer": 0,
   "exp": "Nécessite metrics-server."
  },
  {
   "id": "cka-j5-41",
   "q": "Quel objet crée automatiquement des pods lorsqu'un nœud rejoint le cluster ?",
   "choices": [
    "A. Deployment",
    "B. DaemonSet",
    "C. StatefulSet",
    "D. CronJob"
   ],
   "answer": 1,
   "exp": "Agents de journalisation, CNI, etc."
  },
  {
   "id": "cka-j5-42",
   "q": "Quel est le rôle d'un PodDisruptionBudget ?",
   "choices": [
    "A. Limiter les ressources CPU",
    "B. Définir un budget de stockage",
    "C. Limiter les interruptions volontaires de pods (drain, mise à jour)",
    "D. Contrôler le trafic réseau"
   ],
   "answer": 2,
   "exp": "minAvailable/maxUnavailable."
  },
  {
   "id": "cka-j5-43",
   "q": "Quel autoscaler ajuste le nombre de réplicas selon la charge CPU ?",
   "choices": [
    "A. VerticalPodAutoscaler",
    "B. ClusterAutoscaler",
    "C. PodAutoscaler",
    "D. HorizontalPodAutoscaler"
   ],
   "answer": 3,
   "exp": "HPA nécessite metrics-server et des requests CPU."
  },
  {
   "id": "cka-j5-44",
   "q": "Quelle commande crée un HPA ?",
   "choices": [
    "A. kubectl autoscale deployment web --min=2 --max=5 --cpu-percent=80",
    "B. kubectl scale hpa web 2 5",
    "C. kubectl create hpa web --cpu=80",
    "D. kubectl set hpa web 2-5"
   ],
   "answer": 0,
   "exp": "Crée une ressource HorizontalPodAutoscaler."
  },
  {
   "id": "cka-j5-45",
   "q": "Quel autoscaler ajuste les ressources demandées d'un pod ?",
   "choices": [
    "A. HorizontalPodAutoscaler",
    "B. VerticalPodAutoscaler",
    "C. ClusterAutoscaler",
    "D. NodeAutoscaler"
   ],
   "answer": 1,
   "exp": "VPA recommande/ajuste requests et limits."
  },
  {
   "id": "cka-j5-46",
   "q": "Quel autoscaler ajoute ou retire des nœuds ?",
   "choices": [
    "A. HPA",
    "B. VPA",
    "C. Cluster Autoscaler",
    "D. PDB"
   ],
   "answer": 2,
   "exp": "Dépend du cloud provider."
  },
  {
   "id": "cka-j5-47",
   "q": "Quelle commande décrit l'allocation de ressources d'un nœud ?",
   "choices": [
    "A. kubectl get node nom --usage",
    "B. kubectl top node nom -d",
    "C. kubectl node info nom",
    "D. kubectl describe node nom"
   ],
   "answer": 3,
   "exp": "Section Allocated resources."
  },
  {
   "id": "cka-j5-48",
   "q": "Quel alias de ressource désigne les pods dans kubectl ?",
   "choices": [
    "A. po",
    "B. pd",
    "C. pod-s",
    "D. pds"
   ],
   "answer": 0,
   "exp": "Alias courants : po, svc, deploy, ns, no, pv, pvc, cm, sa."
  },
  {
   "id": "cka-j5-49",
   "q": "Quelle documentation est autorisée à l'examen CKA ?",
   "choices": [
    "A. Tout le web",
    "B. kubernetes.io/docs et ses sous-domaines officiels",
    "C. Aucune",
    "D. Uniquement l'aide kubectl"
   ],
   "answer": 1,
   "exp": "La navigation est limitée aux sites autorisés."
  },
  {
   "id": "cka-j5-50",
   "q": "Quel score minimum est requis pour réussir la CKA ?",
   "choices": [
    "A. 50 %",
    "B. 80 %",
    "C. 66 %",
    "D. 90 %"
   ],
   "answer": 2,
   "exp": "Examen pratique de 2 heures, score de passage de 66 %."
  }
 ]
};
