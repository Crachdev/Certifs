// AWS SAA-C03 — Sprint 30 jours — 1500 questions
// Domaine 1 : Architectures résilientes (J1–J8)
// Domaine 2 : Performances (J9–J16)
// Domaine 3 : Sécurité (J17–J24)
// Domaine 4 : Coût optimisé (J25–J30)

window.QKEY = "aws-saa-c03";

window.QUIZ_META = {
  title: "AWS Solutions Architect Associate",
  code: "SAA-C03",
  fiche: "fiche.html",
  passScore: 72,
  examMins: 130,
  totalQ: 1500
};

window.QUIZ_PLAN = [
  { day:1,  title:"J1 — ELB & Load Balancing",           count:50 },
  { day:2,  title:"J2 — Auto Scaling Groups",             count:50 },
  { day:3,  title:"J3 — RDS Haute Disponibilité",         count:50 },
  { day:4,  title:"J4 — Route 53",                        count:50 },
  { day:5,  title:"J5 — S3 Résilience",                   count:50 },
  { day:6,  title:"J6 — CloudFront & Global Accelerator", count:50 },
  { day:7,  title:"J7 — Découplage SQS/SNS/EventBridge",  count:50 },
  { day:8,  title:"J8 — Patterns Multi-Région",           count:50 },
  { day:9,  title:"J9 — EC2 & Compute Performances",      count:50 },
  { day:10, title:"J10 — EBS, EFS & Stockage",            count:50 },
  { day:11, title:"J11 — Aurora & RDS Performances",      count:50 },
  { day:12, title:"J12 — DynamoDB",                       count:50 },
  { day:13, title:"J13 — ElastiCache",                    count:50 },
  { day:14, title:"J14 — Kinesis & Streaming",            count:50 },
  { day:15, title:"J15 — CloudFront Performances",        count:50 },
  { day:16, title:"J16 — Lambda & Serverless Perf.",      count:50 },
  { day:17, title:"J17 — IAM & Permissions",              count:50 },
  { day:18, title:"J18 — VPC & Réseau Sécurité",          count:50 },
  { day:19, title:"J19 — Chiffrement & KMS",              count:50 },
  { day:20, title:"J20 — S3 Sécurité",                    count:50 },
  { day:21, title:"J21 — CloudTrail, Config & GuardDuty", count:50 },
  { day:22, title:"J22 — WAF, Shield & Inspector",        count:50 },
  { day:23, title:"J23 — Conformité & Gouvernance",       count:50 },
  { day:24, title:"J24 — Secrets & Certificates",         count:50 },
  { day:25, title:"J25 — EC2 Coût Optimisé",              count:50 },
  { day:26, title:"J26 — S3 Coût & Lifecycle",            count:50 },
  { day:27, title:"J27 — Serverless & Coût",              count:50 },
  { day:28, title:"J28 — Databases Coût Optimisé",        count:50 },
  { day:29, title:"J29 — Réseau & Transfert Coût",        count:50 },
  { day:30, title:"J30 — Révision Générale",              count:50 }
];

window.QDATA = {};

// ─────────────────────────────────────────────────────────────
// J1 — ELB & Load Balancing (50 questions)
// ─────────────────────────────────────────────────────────────
window.QDATA[1] = [
  {
    id:"saa-j1-1",
    q:"Une application web reçoit du trafic HTTP et HTTPS. Elle doit router les requêtes vers différents microservices selon le chemin URL (/api → service A, /web → service B). Quel load balancer AWS choisir ?",
    choices:["Application Load Balancer (ALB)","Network Load Balancer (NLB)","Gateway Load Balancer (GWLB)","Classic Load Balancer (CLB)"],
    answer:0,
    exp:"L'ALB opère en couche 7 (HTTP/HTTPS) et supporte le routage basé sur les chemins URL, les en-têtes, les méthodes HTTP, etc. C'est le seul LB AWS à offrir ces capacités de routage avancées."
  },
  {
    id:"saa-j1-2",
    q:"Votre application doit gérer des millions de connexions TCP avec une latence ultra-faible et une adresse IP statique. Quel load balancer utiliser ?",
    choices:["Network Load Balancer (NLB)","Application Load Balancer (ALB)","Classic Load Balancer (CLB)","Gateway Load Balancer (GWLB)"],
    answer:0,
    exp:"Le NLB opère en couche 4 (TCP/UDP/TLS), supporte des millions de requêtes par seconde avec latence ultra-faible (<1ms), et fournit une adresse IP statique par AZ (ou Elastic IP). Idéal pour les workloads hautes performances."
  },
  {
    id:"saa-j1-3",
    q:"Un partenaire doit filtrer le trafic réseau à l'aide d'appliances virtuelles tierces (firewall, IDS/IPS) avant qu'il n'atteigne votre application. Quel service AWS facilite cette architecture ?",
    choices:["Gateway Load Balancer (GWLB)","Network Load Balancer (NLB)","Application Load Balancer (ALB)","AWS Transit Gateway"],
    answer:0,
    exp:"Le GWLB permet de déployer, mettre à l'échelle et gérer des appliances virtuelles réseau tierces. Il opère en couche 3 et utilise le protocole GENEVE pour encapsuler le trafic vers les appliances."
  },
  {
    id:"saa-j1-4",
    q:"Vous configurez un ALB avec deux règles de listener : règle 1 route /api/* vers le TG-API, règle 2 route /web/* vers le TG-WEB. Une requête arrive sur /unknown. Que se passe-t-il ?",
    choices:["La règle par défaut s'applique (action default)","La requête est rejetée avec 404","La règle 1 s'applique car elle est définie en premier","L'ALB retourne 503"],
    answer:0,
    exp:"Chaque listener ALB a une règle par défaut (priorité la plus basse) qui traite les requêtes ne correspondant à aucune autre règle. Elle peut retourner une réponse fixe ou router vers un target group par défaut."
  },
  {
    id:"saa-j1-5",
    q:"Quelle est la différence principale entre un ALB et un NLB concernant les adresses IP ?",
    choices:["Le NLB supporte les Elastic IPs statiques ; l'ALB a des IPs dynamiques","L'ALB supporte les Elastic IPs ; le NLB a des IPs dynamiques","Les deux supportent les Elastic IPs","Les deux ont des IPs dynamiques"],
    answer:0,
    exp:"Le NLB peut avoir une Elastic IP par AZ (adresse statique fixe), ce qui est crucial pour les partenaires qui whitelist des IPs. L'ALB a des IPs qui peuvent changer car il scale automatiquement."
  },
  {
    id:"saa-j1-6",
    q:"Votre application e-commerce nécessite que les sessions utilisateurs soient toujours envoyées au même backend pendant leur panier d'achat. Quelle fonctionnalité ALB activer ?",
    choices:["Sticky sessions (session affinity)","Cross-zone load balancing","Connection draining","Health checks avancés"],
    answer:0,
    exp:"Les sticky sessions (ou session affinity) permettent d'associer un client à une instance spécifique via un cookie. L'ALB utilise un cookie AWSALB. Attention : cela peut créer des déséquilibres de charge."
  },
  {
    id:"saa-j1-7",
    q:"Un ALB distribue le trafic entre 3 instances dans AZ-A et 1 instance dans AZ-B. Avec le cross-zone load balancing activé, quel pourcentage de trafic chaque instance reçoit-elle ?",
    choices:["25% chacune (distribution uniforme sur toutes les instances)","33% pour chaque instance en AZ-A, 100% pour l'instance en AZ-B","50% vers AZ-A (16.7% chaque), 50% vers AZ-B","Dépend des health checks"],
    answer:0,
    exp:"Avec cross-zone LB activé, le trafic est distribué uniformément entre TOUTES les instances quel que soit leur AZ. 4 instances = 25% chacune. Sans cross-zone, chaque AZ reçoit 50%, donc AZ-A 16.7%/instance, AZ-B 50%."
  },
  {
    id:"saa-j1-8",
    q:"Le cross-zone load balancing est activé par défaut sur quel(s) type(s) de load balancer ?",
    choices:["ALB uniquement","NLB et GWLB uniquement","ALB, NLB et GWLB","Aucun, il faut toujours l'activer manuellement"],
    answer:0,
    exp:"Le cross-zone LB est activé par défaut sur l'ALB (et ne peut pas être désactivé au niveau LB, seulement au niveau TG). Pour le NLB et le GWLB, il est désactivé par défaut et son activation génère des frais inter-AZ."
  },
  {
    id:"saa-j1-9",
    q:"Vous retirez une instance EC2 d'un target group ALB alors qu'elle traite des requêtes longues. Comment éviter d'interrompre brutalement les connexions actives ?",
    choices:["Activer Connection Draining (Deregistration Delay)","Utiliser des sticky sessions","Augmenter les health check intervals","Configurer un graceful shutdown dans l'OS"],
    answer:0,
    exp:"Le Connection Draining (appelé Deregistration Delay pour ALB/NLB) permet à l'instance en cours de déregistrement de finir de traiter ses requêtes actives pendant un délai configurable (1–3600s, défaut 300s)."
  },
  {
    id:"saa-j1-10",
    q:"Un health check ALB envoie des requêtes GET /health toutes les 30 secondes. Après 3 échecs consécutifs, l'instance est marquée unhealthy. Quel paramètre contrôle le nombre d'échecs nécessaires ?",
    choices:["Unhealthy threshold","Healthy threshold","Health check interval","Health check timeout"],
    answer:0,
    exp:"L'Unhealthy threshold définit le nombre de checks consécutifs en échec pour marquer une instance unhealthy. L'Healthy threshold définit le nombre de succès consécutifs pour la marquer healthy à nouveau."
  },
  {
    id:"saa-j1-11",
    q:"Votre ALB doit terminer le SSL/TLS et transmettre le trafic HTTP en clair vers les backends. Quelle configuration utiliser ?",
    choices:["HTTPS listener sur l'ALB, HTTP vers les targets","HTTP listener sur l'ALB, HTTPS vers les targets","HTTPS listener et HTTPS vers les targets (end-to-end TLS)","Pas possible avec l'ALB"],
    answer:0,
    exp:"L'ALB peut terminer SSL/TLS (SSL offloading) : le listener écoute sur HTTPS/443, décrypte le trafic, puis le transmet en HTTP vers les backends. Cela réduit la charge CPU sur les instances. Le certificat est géré sur l'ALB (via ACM)."
  },
  {
    id:"saa-j1-12",
    q:"Quel protocole le NLB supporte-t-il nativement pour le pass-through TLS (sans termination) ?",
    choices:["TCP","TLS pass-through","UDP","GENEVE"],
    answer:1,
    exp:"Le NLB peut opérer en mode TLS pass-through : il ne décrypte pas le trafic TLS mais le transmet tel quel aux backends qui gèrent le TLS eux-mêmes. Il peut aussi terminer TLS si configuré avec un certificat ACM."
  },
  {
    id:"saa-j1-13",
    q:"Un ALB doit servir plusieurs applications HTTPS sur le même listener (port 443) avec des certificats différents. Quelle fonctionnalité utiliser ?",
    choices:["SNI (Server Name Indication)","Multiple listeners sur des ports différents","Host-based routing avec un seul certificat wildcard","Ce n'est pas possible avec l'ALB"],
    answer:0,
    exp:"L'ALB supporte SNI : le client indique le hostname dans le handshake TLS, l'ALB sélectionne le bon certificat parmi plusieurs. Jusqu'à 25 certificats peuvent être associés à un listener (via ACM ou IAM)."
  },
  {
    id:"saa-j1-14",
    q:"Vous avez un ALB avec un listener HTTP:80. Vous voulez rediriger automatiquement tous les visiteurs vers HTTPS. Quelle est la meilleure approche ?",
    choices:["Créer une action 'Redirect' sur le listener HTTP vers HTTPS:443","Configurer la redirection dans chaque instance backend","Utiliser CloudFront devant l'ALB","Modifier les règles du Security Group"],
    answer:0,
    exp:"L'ALB supporte nativement les actions de redirection sur les listeners. Sur le listener HTTP:80, créer une règle par défaut avec action 'Redirect to HTTPS' (code 301 ou 302). C'est la méthode la plus simple et la plus efficace."
  },
  {
    id:"saa-j1-15",
    q:"Quelle est la différence entre un ALB et un NLB concernant la préservation de l'IP source du client ?",
    choices:["Le NLB préserve l'IP source native ; l'ALB utilise X-Forwarded-For","L'ALB préserve l'IP source native ; le NLB utilise X-Forwarded-For","Les deux préservent l'IP source native","Les deux utilisent X-Forwarded-For"],
    answer:0,
    exp:"Le NLB, opérant en L4, préserve l'IP source originale du client que les backends voient directement. L'ALB, opérant en L7, termine la connexion et remplace l'IP source par son IP propre. L'IP originale est transmise via l'en-tête X-Forwarded-For."
  },
  {
    id:"saa-j1-16",
    q:"Un target group ALB contient des instances Lambda au lieu d'instances EC2. Quelle affirmation est vraie ?",
    choices:["L'ALB peut invoquer Lambda directement comme target","Lambda ne peut pas être dans un target group ALB","Lambda nécessite un NLB pour être un target","Seul l'API Gateway peut invoquer Lambda"],
    answer:0,
    exp:"L'ALB supporte les fonctions Lambda comme targets. L'ALB convertit la requête HTTP en événement JSON Lambda. Le trafic HTTPS est déchiffré par l'ALB avant d'appeler Lambda. Les health checks Lambda vérifient que la fonction répond."
  },
  {
    id:"saa-j1-17",
    q:"Votre application est déployée dans 2 AZ. L'AZ-A a 5 instances, l'AZ-B a 1 instance. Sans cross-zone load balancing, quelle instance reçoit le plus de trafic ?",
    choices:["L'instance unique de AZ-B (50% du trafic)","Chaque instance de AZ-A (10% chacune)","Toutes les instances reçoivent le même trafic","L'instance la plus puissante"],
    answer:0,
    exp:"Sans cross-zone LB, chaque AZ reçoit 50% du trafic. AZ-A a 5 instances = 10% chacune. AZ-B a 1 instance = 50% pour elle seule. L'instance de AZ-B est donc surchargée. Cross-zone LB résout ce déséquilibre."
  },
  {
    id:"saa-j1-18",
    q:"Quel type de load balancer AWS utilise le protocole GENEVE et opère en couche réseau (L3) ?",
    choices:["Gateway Load Balancer (GWLB)","Network Load Balancer (NLB)","Application Load Balancer (ALB)","Classic Load Balancer (CLB)"],
    answer:0,
    exp:"Le GWLB opère en couche 3 et utilise le protocole GENEVE (port 6081) pour encapsuler et transférer le trafic vers les appliances virtuelles. Il est conçu pour les architectures de sécurité réseau avec des tiers firewall/IDS."
  },
  {
    id:"saa-j1-19",
    q:"Un listener ALB a deux règles : règle 1 (priorité 1) : si header 'X-Version: beta' → TG-Beta ; règle 2 (priorité 2) : si path '/api/*' → TG-API. Une requête GET /api/users avec header 'X-Version: beta' est reçue. Quel TG reçoit la requête ?",
    choices:["TG-Beta (règle 1 a la priorité la plus haute)","TG-API (le path match est plus spécifique)","Les deux TG reçoivent la requête","L'ALB retourne une erreur de conflit"],
    answer:0,
    exp:"L'ALB évalue les règles dans l'ordre de priorité numérique croissante. La règle 1 (priorité 1, la plus haute) matche en premier car le header correspond. L'ALB s'arrête à la première règle qui matche et route vers TG-Beta."
  },
  {
    id:"saa-j1-20",
    q:"Vous souhaitez que l'ALB réponde directement avec une page HTML personnalisée (sans backend) pour certaines URLs de maintenance. Quelle action de règle utiliser ?",
    choices:["Fixed-response action","Redirect action","Forward action vers un S3 TG","Ce n'est pas possible avec l'ALB"],
    answer:0,
    exp:"L'ALB supporte l'action 'Fixed-response' qui permet de renvoyer directement une réponse HTTP avec un code de statut, un type de contenu et un corps personnalisé, sans toucher aux backends. Idéal pour les pages de maintenance."
  },
  {
    id:"saa-j1-21",
    q:"Quel est le délai de Deregistration Delay par défaut pour les target groups ALB/NLB ?",
    choices:["300 secondes","60 secondes","600 secondes","0 secondes (désactivé)"],
    answer:0,
    exp:"Le Deregistration Delay (Connection Draining) est par défaut de 300 secondes (5 minutes). Il est configurable de 0 (désactivé, déconnexion immédiate) à 3600 secondes (1 heure) selon la durée des requêtes longues."
  },
  {
    id:"saa-j1-22",
    q:"Votre ALB dessert une application avec deux hostname : app1.example.com et app2.example.com, chacun routant vers des target groups différents. Quel type de règle utiliser ?",
    choices:["Host-based routing (condition Host header)","Path-based routing","Query string routing","Méthode HTTP routing"],
    answer:0,
    exp:"Le host-based routing utilise la condition 'Host header' dans les règles ALB. Selon le hostname dans la requête HTTP (app1.example.com ou app2.example.com), l'ALB route vers le target group correspondant. Plusieurs domaines, un seul ALB."
  },
  {
    id:"saa-j1-23",
    q:"Un NLB dans une architecture VPC reçoit des connexions TCP depuis Internet. Quelle affirmation concernant les Security Groups est vraie pour le NLB ?",
    choices:["Le NLB n'a pas de Security Group ; les SG des instances EC2 doivent autoriser l'IP du NLB ou 0.0.0.0/0","Le NLB a son propre Security Group comme l'ALB","Le NLB bloque automatiquement le trafic non autorisé","Les SG ne s'appliquent pas aux NLB ni à leurs targets"],
    answer:0,
    exp:"Contrairement à l'ALB, le NLB n'a pas de Security Group associé. Il passe le trafic TCP directement. Les Security Groups des instances EC2 cibles voient l'IP source originale du client ou l'IP du NLB selon la configuration. Les SG des instances doivent autoriser ce trafic."
  },
  {
    id:"saa-j1-24",
    q:"Vous devez exposer un service interne via un NLB pour des clients dans d'autres VPCs AWS sans VPC Peering ni Transit Gateway. Quelle solution utiliser ?",
    choices:["AWS PrivateLink (VPC Endpoint Service)","VPC Peering","Internet Gateway + NLB public","AWS Direct Connect"],
    answer:0,
    exp:"AWS PrivateLink permet d'exposer un service backend (via NLB) à d'autres VPCs via des VPC Endpoints, sans routing via Internet, sans VPC peering ni route tables complexes. Les clients créent un Interface Endpoint dans leur VPC."
  },
  {
    id:"saa-j1-25",
    q:"Quel type de health check l'ALB utilise-t-il par défaut pour les targets HTTP ?",
    choices:["HTTP GET vers le chemin /","TCP connection check","HTTPS ping","ICMP ping"],
    answer:0,
    exp:"L'ALB envoie des requêtes HTTP GET vers un chemin configurable (défaut '/') sur le port configuré. La target est healthy si le code de réponse correspond aux codes HTTP attendus (défaut 200). Le chemin, port, protocole et codes sont tous configurables."
  },
  {
    id:"saa-j1-26",
    q:"Vous avez un ALB qui route le trafic vers un Auto Scaling Group. Après un scale-out, les nouvelles instances ne reçoivent pas de trafic pendant 2 minutes. Pourquoi ?",
    choices:["Le délai de warm-up / registration delay du target group","Les health checks n'ont pas encore validé l'instance","Les deux raisons","Les instances ne sont pas dans la même AZ que l'ALB"],
    answer:2,
    exp:"Deux facteurs : (1) le Slow Start Duration / registration delay laisse le temps à l'instance de s'initialiser avant de recevoir du trafic plein, (2) les health checks doivent passer le Healthy Threshold (ex: 3 checks consécutifs OK) avant que l'instance soit 'healthy' dans le TG."
  },
  {
    id:"saa-j1-27",
    q:"Quelle fonctionnalité ALB permet de tester un nouveau microservice en envoyant 10% du trafic vers une nouvelle version et 90% vers l'ancienne ?",
    choices:["Weighted target groups","Blue/green deployment via deux ALB","A/B testing via CloudFront","Lambda canary deployment"],
    answer:0,
    exp:"L'ALB supporte les weighted target groups : une action Forward peut distribuer le trafic entre plusieurs target groups avec des poids (1–999). Par exemple, 90% vers TG-v1, 10% vers TG-v2. Idéal pour les déploiements progressifs (canary/blue-green)."
  },
  {
    id:"saa-j1-28",
    q:"Dans le cadre d'une architecture multi-comptes AWS, comment un ALB dans le Compte A peut-il router vers des instances EC2 dans le Compte B ?",
    choices:["Via VPC Peering entre les deux comptes + target group avec IPs","Ce n'est pas possible, les targets doivent être dans le même compte","Via AWS Transit Gateway uniquement","Via AWS PrivateLink uniquement"],
    answer:0,
    exp:"Les ALB target groups peuvent inclure des adresses IP (pas seulement des instances du même compte). Avec VPC Peering ou Transit Gateway entre les VPCs des deux comptes, les IPs privées des instances du Compte B peuvent être des targets dans un TG du Compte A."
  },
  {
    id:"saa-j1-29",
    q:"Quel est le protocole de niveau application supporté nativement par l'ALB pour les applications temps réel (chat, streaming) ?",
    choices:["WebSockets","MQTT","AMQP","gRPC uniquement"],
    answer:0,
    exp:"L'ALB supporte nativement les WebSockets (connexions HTTP Upgrade). Les connexions WebSocket persistent jusqu'à leur fermeture. L'ALB supporte aussi HTTP/2 et gRPC. Le NLB supporte WebSockets via TCP pass-through."
  },
  {
    id:"saa-j1-30",
    q:"Un ALB Access Log révèle de nombreuses requêtes avec le code 502. Quelle est la cause la plus probable ?",
    choices:["Les instances backend retournent des réponses invalides ou se sont écrasées","Le client a annulé la requête","L'ALB est surchargé","Le certificat SSL est expiré"],
    answer:0,
    exp:"Un code 502 (Bad Gateway) de l'ALB indique que la réponse reçue du backend est invalide ou que la connexion avec le backend a été interrompue (backend crash, timeout, réponse malformée). Vérifier les logs d'application des instances."
  },
  {
    id:"saa-j1-31",
    q:"Vous voulez que l'ALB restreigne l'accès à votre application uniquement aux IPs de votre entreprise (plage 203.0.113.0/24). Quelle approche utiliser ?",
    choices:["Security Group sur l'ALB n'autorisant que 203.0.113.0/24","NACLs sur le subnet de l'ALB","WAF avec règle IP whitelist","Les deux SG et WAF sont valides"],
    answer:3,
    exp:"Les Security Groups de l'ALB peuvent restreindre l'accès par IP source. AWS WAF peut aussi filtrer par IP avec plus de flexibilité (geo-blocking, rate limiting). Pour une restriction simple par CIDR, les deux approches fonctionnent, mais le SG est plus simple et sans coût supplémentaire."
  },
  {
    id:"saa-j1-32",
    q:"Votre NLB exposé sur Internet doit avoir une adresse IP fixe que vous communiquez à vos partenaires. Comment configurer cela ?",
    choices:["Associer une Elastic IP à chaque sous-réseau NLB (une par AZ)","Utiliser une adresse IP publique statique auto-assignée","Configurer un Elastic IP sur le NLB global","Ce n'est pas possible, les LB ont des IPs dynamiques"],
    answer:0,
    exp:"Le NLB supporte les Elastic IPs : lors de la création ou modification du NLB, vous pouvez associer une Elastic IP à chaque sous-réseau activé (une par AZ). Ces IPs sont statiques et ne changent pas. L'ALB n'offre pas cette fonctionnalité."
  },
  {
    id:"saa-j1-33",
    q:"Votre application utilise des connexions TCP longues (ex: gaming, IoT). Après 350 secondes d'inactivité, les connexions sont coupées. Quel paramètre ajuster sur le NLB ?",
    choices:["Idle timeout (350s → 400s ou plus)","Connection draining","Health check interval","Sticky session timeout"],
    answer:0,
    exp:"Le NLB a un idle timeout TCP de 350 secondes par défaut (non modifiable pour TCP). Pour les connexions TCP longues, utiliser des TCP keepalives côté application. Pour UDP, le timeout est configurable. L'ALB a un idle connection timeout de 60s par défaut, configurable jusqu'à 4000s."
  },
  {
    id:"saa-j1-34",
    q:"Quelle est la limite maximale du nombre de règles par listener pour un ALB ?",
    choices:["100 règles","50 règles","1000 règles","10 règles"],
    answer:0,
    exp:"Un listener ALB supporte jusqu'à 100 règles (hors règle par défaut), avec 5 conditions par règle et 5 valeurs par condition. Des limites supplémentaires s'appliquent selon le nombre total d'ALBs et de target groups par région."
  },
  {
    id:"saa-j1-35",
    q:"Un ALB doit authentifier les utilisateurs via Cognito avant d'accéder à l'application. Quelle fonctionnalité utiliser ?",
    choices:["OIDC/Cognito authentication action sur le listener","Lambda authorizer","API Gateway + Cognito","IAM authentication"],
    answer:0,
    exp:"L'ALB supporte nativement l'authentification via OIDC (OpenID Connect) et Amazon Cognito comme action de règle. L'ALB redirige les utilisateurs non authentifiés vers la page de login et valide les tokens. Cela ne nécessite aucun code d'authentification dans l'application."
  },
  {
    id:"saa-j1-36",
    q:"Dans quel cas le Classic Load Balancer (CLB) est-il ENCORE recommandé par AWS ?",
    choices:["Pour les applications EC2-Classic legacy (aucun nouveau déploiement recommandé)","Pour les applications TCP haute performance","Pour les architectures multi-domaines","Pour les applications nécessitant WAF intégré"],
    answer:0,
    exp:"Le CLB est un service legacy pour EC2-Classic, qui n'est plus disponible pour les nouveaux comptes AWS. Pour les nouvelles architectures, AWS recommande ALB (L7) ou NLB (L4). Le CLB ne supporte pas les VPCs modernes de manière optimale."
  },
  {
    id:"saa-j1-37",
    q:"Un target group ALB a 3 instances. L'instance C est marquée 'unhealthy' par les health checks. Comment l'ALB gère-t-il le trafic ?",
    choices:["L'ALB envoie uniquement le trafic vers les instances A et B (healthy)","L'ALB continue d'envoyer du trafic vers C en espérant qu'elle récupère","L'ALB envoie moins de trafic vers C proportionnellement","L'ALB arrête tout le trafic jusqu'à la récupération de C"],
    answer:0,
    exp:"L'ALB arrête d'envoyer du trafic vers les instances unhealthy. Seules les instances A et B (healthy) reçoivent les requêtes. L'ALB continue de faire des health checks sur C et la réintègre automatiquement quand elle redevient healthy (après le healthy threshold)."
  },
  {
    id:"saa-j1-38",
    q:"Vous souhaitez que l'ALB log toutes les requêtes dans S3 pour l'audit. Quelle fonctionnalité activer ?",
    choices:["Access Logs vers S3","CloudWatch Logs","AWS CloudTrail","AWS Config"],
    answer:0,
    exp:"L'ALB supporte les Access Logs : chaque requête est loggée dans S3 avec des détails (timestamp, IPs, ports, codes de réponse, latences, etc.). Les logs sont compressés en gzip. CloudTrail log les appels API AWS, pas le trafic HTTP."
  },
  {
    id:"saa-j1-39",
    q:"Un NLB forward des connexions TCP vers des instances EC2. Quelle affirmation concernant la source IP dans les paquets reçus par les EC2 est correcte ?",
    choices:["Les EC2 voient l'IP source originale du client (sans proxy)","Les EC2 voient l'IP du NLB","Les EC2 voient l'IP de l'interface réseau du NLB dans leur subnet","Dépend de la configuration Proxy Protocol"],
    answer:0,
    exp:"Par défaut pour TCP/UDP, le NLB préserve l'IP source originale du client dans les paquets. Les instances EC2 voient directement l'IP du client. Pour récupérer l'IP avec Proxy Protocol v2 activé, les backends doivent parser l'en-tête PP2."
  },
  {
    id:"saa-j1-40",
    q:"Votre ALB dessert du trafic vers des targets dans 3 AZ. L'une des AZ connaît une panne totale. Comment l'ALB réagit-il automatiquement ?",
    choices:["L'ALB arrête de router vers l'AZ en panne et distribue le trafic vers les 2 AZ restantes","L'ALB attend que les health checks échouent 3 fois avant de rediriger","L'ALB nécessite une intervention manuelle pour désactiver l'AZ","L'ALB génère une alerte CloudWatch mais continue à essayer l'AZ"],
    answer:0,
    exp:"L'ALB monitore en continu la santé des AZ. Si toutes les instances dans une AZ sont unhealthy (ou l'AZ est inaccessible), l'ALB exclut automatiquement cette AZ et distribue le trafic vers les AZ restantes avec des instances healthy."
  },
  {
    id:"saa-j1-41",
    q:"Qu'est-ce que le 'Slow Start Mode' pour un target group ALB ?",
    choices:["Une période pendant laquelle une nouvelle target reçoit progressivement plus de trafic","Une fonctionnalité de throttling pour limiter le trafic","Un mode de démarrage lent de l'ALB lui-même","Une option de health check progressif"],
    answer:0,
    exp:"Le Slow Start Mode (30–900 secondes) permet à une nouvelle instance qui rejoint un TG de recevoir progressivement plus de trafic au lieu d'être immédiatement bombardée à 100%. Utile pour les applications qui nécessitent un 'warm-up' (JVM, caches)."
  },
  {
    id:"saa-j1-42",
    q:"Vous configurez un ALB avec plusieurs target groups pour des microservices. Quel paramètre au niveau du target group définit le protocole de communication entre l'ALB et les instances ?",
    choices:["Protocol (HTTP, HTTPS, gRPC)","Listener protocol","Security Group protocol","Network ACL protocol"],
    answer:0,
    exp:"Le Target Group Protocol définit comment l'ALB communique avec les targets (HTTP, HTTPS, gRPC). C'est distinct du protocole du Listener (comment les clients communiquent avec l'ALB). Par exemple : Listener HTTPS → TG HTTP (SSL offloading)."
  },
  {
    id:"saa-j1-43",
    q:"Un load balancer doit traiter du trafic UDP pour une application de jeux vidéo. Quel type de LB AWS choisir ?",
    choices:["Network Load Balancer (NLB)","Application Load Balancer (ALB)","Gateway Load Balancer (GWLB)","Classic Load Balancer (CLB)"],
    answer:0,
    exp:"Seul le NLB supporte le protocole UDP (en plus de TCP, TLS). L'ALB ne supporte que HTTP/HTTPS/gRPC. Le NLB UDP est idéal pour les jeux, DNS, streaming, IoT. Le CLB supporte TCP et SSL mais pas UDP nativement."
  },
  {
    id:"saa-j1-44",
    q:"Pour une application critique, vous souhaitez que les health checks ALB détectent les instances défaillantes le plus rapidement possible. Quelle configuration minimale utiliser ?",
    choices:["Interval: 5s, Unhealthy threshold: 2, Timeout: 2s","Interval: 30s, Unhealthy threshold: 3, Timeout: 5s","Interval: 10s, Unhealthy threshold: 5, Timeout: 10s","Interval: 60s, Unhealthy threshold: 2, Timeout: 30s"],
    answer:0,
    exp:"Pour une détection rapide : interval minimum (5s), timeout court (2s), unhealthy threshold minimum (2 échecs). Résultat : instance détectée comme unhealthy en 10–12 secondes (2 × 5s). Défaut AWS : 30s interval, 5 unhealthy threshold = 2.5 minutes de détection."
  },
  {
    id:"saa-j1-45",
    q:"Quelle est la différence entre un 'weighted target group' ALB et 'least outstanding requests' comme algorithme de routage ?",
    choices:["Weighted = distribution du trafic entre TG ; Least outstanding = algorithme de sélection d'instance dans un TG","Ce sont deux noms pour la même fonctionnalité","Weighted est pour NLB, Least outstanding est pour ALB","Least outstanding s'applique entre TG, Weighted dans un TG"],
    answer:0,
    exp:"Weighted Target Groups distribue le % de trafic ENTRE plusieurs target groups (canary deployment). Least Outstanding Requests (LOR) est un algorithme de sélection de la meilleure instance DANS un target group (alternative à Round Robin). Ce sont deux niveaux différents."
  },
  {
    id:"saa-j1-46",
    q:"Votre application est hébergée en multi-région (us-east-1 et eu-west-1). Chaque région a un ALB. Comment router les utilisateurs vers la région la plus proche avec basculement automatique ?",
    choices:["Route 53 avec Latency-based routing + health checks sur les ALBs","ALB Global Accelerator uniquement","CloudFront avec origins dans les deux régions","Transit Gateway entre les deux régions"],
    answer:0,
    exp:"Route 53 Latency-based routing envoie les utilisateurs vers la région avec la plus faible latence réseau. Les health checks Route 53 sur les ALBs permettent le basculement automatique si une région devient indisponible. C'est l'architecture multi-région standard."
  },
  {
    id:"saa-j1-47",
    q:"Quel mécanisme l'ALB utilise-t-il pour les sticky sessions basées sur la durée (time-based) ?",
    choices:["Cookie AWSALB avec une durée configurable","Cookie de session serveur","JWT avec expiration","Header X-Session-ID"],
    answer:0,
    exp:"L'ALB génère un cookie AWSALB (et AWSALBCORS pour les CORS) qui est envoyé au client. Ce cookie contient un identifiant de la target et a une durée configurable (1 seconde à 7 jours). L'ALB lit ce cookie sur les requêtes suivantes pour router vers la même instance."
  },
  {
    id:"saa-j1-48",
    q:"Vous devez déplacer toutes les requêtes vers /api/v1/* vers /api/v2/* (redirection 301) au niveau de l'ALB. Comment faire ?",
    choices:["Règle ALB avec condition path /api/v1/* et action Redirect vers /api/v2/*","Modifier chaque backend pour faire la redirection","Utiliser CloudFront Functions","Ce n'est pas possible avec l'ALB"],
    answer:0,
    exp:"L'ALB supporte les redirections comme actions de règle. Une règle avec la condition 'Path is /api/v1/*' et l'action 'Redirect to /api/v2/{path}' (en utilisant les variables de remplacement) effectue la redirection 301/302 sans toucher aux backends."
  },
  {
    id:"saa-j1-49",
    q:"Quel est l'avantage du 'Target Group' par rapport à l'enregistrement direct des instances dans le CLB ?",
    choices:["Réutilisation d'un TG entre plusieurs ALBs/NLBs, health checks indépendants, support Lambda/IP","Les TG sont plus rapides que l'enregistrement direct","Les TG permettent plus d'instances","Les TG supportent IPv6 exclusivement"],
    answer:0,
    exp:"Un Target Group est une ressource autonome réutilisable : un même TG peut être associé à plusieurs LBs, les health checks sont gérés indépendamment, les TG supportent diverses cibles (EC2, ECS, Lambda, IPs), et les règles peuvent router vers plusieurs TG (weighted)."
  },
  {
    id:"saa-j1-50",
    q:"Un Application Load Balancer génère une erreur 504 (Gateway Timeout). Quelle est la cause la plus probable ?",
    choices:["Le backend n'a pas répondu dans le délai imparti (idle timeout de l'ALB)","Le client a trop tardé à envoyer la requête","Le certificat SSL est invalide","L'ALB n'a plus de capacité"],
    answer:0,
    exp:"Un 504 Gateway Timeout de l'ALB signifie que la cible (instance EC2, container, Lambda) n'a pas répondu dans le délai de l'idle timeout (60s par défaut, jusqu'à 4000s). Causes : application lente, deadlock, GC pause. Augmenter l'idle timeout ou optimiser l'application."
  }
];

// ─────────────────────────────────────────────────────────────
// J2 — Auto Scaling Groups (50 questions)
// ─────────────────────────────────────────────────────────────
window.QDATA[2] = [
  {
    id:"saa-j2-1",
    q:"Quelle politique de scaling ASG augmente ou diminue le nombre d'instances par un montant fixe (ex: +2 instances) lorsqu'une alarme CloudWatch se déclenche ?",
    choices:["Simple scaling","Target tracking scaling","Step scaling","Scheduled scaling"],
    answer:0,
    exp:"Simple scaling ajoute ou retire un nombre fixe d'instances quand une alarme CloudWatch se déclenche, puis attend un cooldown avant d'agir à nouveau. C'est la politique la plus basique et la moins réactive."
  },
  {
    id:"saa-j2-2",
    q:"Quelle politique ASG maintient automatiquement une métrique à une valeur cible (ex: CPU à 50%) en ajustant le nombre d'instances ?",
    choices:["Target tracking scaling","Step scaling","Simple scaling","Scheduled scaling"],
    answer:0,
    exp:"Target Tracking Scaling est la politique recommandée par AWS. Elle ajuste automatiquement la capacité pour maintenir une métrique cible (CPU, ALBRequestCountPerTarget, SQS queue depth, etc.). AWS calcule le scaling automatiquement, similaire à un thermostat."
  },
  {
    id:"saa-j2-3",
    q:"La politique de scaling Step Scaling est préférable à Simple Scaling dans quel cas ?",
    choices:["Quand on veut des actions de scaling différentes selon l'intensité de l'alarme (seuils multiples)","Quand on veut une configuration plus simple","Quand la métrique est stable","Quand on utilise des instances Spot"],
    answer:0,
    exp:"Step Scaling définit différentes actions selon les 'steps' (seuils) de la métrique. Ex: CPU 60-70%→+1 instance, CPU 70-80%→+2 instances, CPU>80%→+3 instances. Plus précis que Simple Scaling, permet une réponse proportionnelle à l'intensité du problème."
  },
  {
    id:"saa-j2-4",
    q:"Vous savez que chaque vendredi à 18h, le trafic double pendant 2 heures. Quelle politique ASG utiliser pour préparer la capacité à l'avance ?",
    choices:["Scheduled scaling","Target tracking scaling","Step scaling","Predictive scaling"],
    answer:0,
    exp:"Scheduled Scaling définit des actions à des dates/heures précises (cron ou one-time). Idéal pour les patterns prévisibles et récurrents. On peut configurer une augmentation de capacité avant le pic pour éviter le délai de démarrage des instances."
  },
  {
    id:"saa-j2-5",
    q:"Quelle politique ASG utilise le machine learning pour analyser l'historique des métriques et anticiper le scaling avant que le pic n'arrive ?",
    choices:["Predictive scaling","Target tracking scaling","Scheduled scaling","Step scaling"],
    answer:0,
    exp:"Predictive Scaling utilise le ML pour analyser les patterns historiques de trafic et provisioner proactivement la capacité AVANT le pic prévu. Il combine l'analyse historique avec des prévisions pour le futur. Peut être utilisé avec Target Tracking pour l'ajustement fin."
  },
  {
    id:"saa-j2-6",
    q:"Un ASG est configuré avec min=2, desired=4, max=8. Une alarme CloudWatch se déclenche pour ajouter 3 instances. Combien d'instances l'ASG aura-t-il au total ?",
    choices:["7","8 (capped by max)","5","4+3=7"],
    answer:0,
    exp:"L'ASG a actuellement 4 instances (desired). +3 = 7 instances. 7 ≤ max(8), donc l'ASG peut aller à 7. L'ASG respecte toujours les limites min et max. Si le calcul dépasse max, l'ASG se limite à max."
  },
  {
    id:"saa-j2-7",
    q:"Après un scale-out, l'ASG ne déclenche pas de nouvelle action de scaling pendant un certain temps. Quel mécanisme explique ce comportement ?",
    choices:["Cooldown period","Health check grace period","Instance warm-up period","Scaling lock"],
    answer:0,
    exp:"Le Cooldown Period (défaut 300s) est un délai après une action de scaling pendant lequel l'ASG n'effectue pas d'autre scaling. Il laisse le temps aux métriques de se stabiliser après l'ajout/suppression d'instances. Target Tracking et Step Scaling peuvent remplacer le cooldown par des warm-up periods."
  },
  {
    id:"saa-j2-8",
    q:"Quelle est la différence entre 'Health Check Grace Period' et 'Default Cooldown' dans un ASG ?",
    choices:["Grace period = délai avant le premier health check d'une nouvelle instance ; Cooldown = pause entre deux actions de scaling","Ce sont deux noms pour la même chose","Grace period s'applique aux health checks EC2, Cooldown aux health checks ALB","Grace period est en secondes, Cooldown en minutes"],
    answer:0,
    exp:"Health Check Grace Period (défaut 300s) : délai après le lancement d'une instance avant que l'ASG ne commence à vérifier sa santé. Évite de terminer une instance qui s'initialise encore. Default Cooldown : pause entre deux événements de scaling pour laisser les métriques se stabiliser."
  },
  {
    id:"saa-j2-9",
    q:"Quelle politique de terminaison ASG termine d'abord les instances dans l'AZ avec le plus d'instances, puis sélectionne l'instance la plus ancienne launch configuration ?",
    choices:["Default termination policy","OldestInstance","NewestInstance","ClosestToNextInstanceHour"],
    answer:0,
    exp:"La Default Termination Policy d'AWS : (1) choisir l'AZ avec le plus d'instances, (2) trouver l'instance avec la launch configuration la plus ancienne, (3) si égalité, terminer l'instance la plus proche de l'heure de facturation suivante. Cette logique préserve les configurations récentes."
  },
  {
    id:"saa-j2-10",
    q:"Vous déployez une nouvelle version d'application via un ASG. Vous voulez remplacer toutes les instances existantes par de nouvelles instances avec la nouvelle configuration. Quelle fonctionnalité utiliser ?",
    choices:["Instance Refresh","Scheduled scaling","Terminate and replace manuellement","Blue/Green deployment avec deux ASG"],
    answer:0,
    exp:"Instance Refresh remplace progressivement les instances d'un ASG avec une nouvelle Launch Template. On configure un 'minimum healthy percentage' (ex: 90%) pour s'assurer que l'application reste disponible pendant le remplacement. AWS gère automatiquement le rolling update."
  },
  {
    id:"saa-j2-11",
    q:"Quelle est la différence entre Launch Configuration et Launch Template dans ASG ?",
    choices:["Launch Template est plus récent, supporte le versioning, les instances Spot, les blended policies et les types d'instances multiples ; Launch Configuration est legacy","Launch Configuration est plus récent","Ce sont des termes équivalents","Launch Template ne supporte pas les instances Spot"],
    answer:0,
    exp:"Launch Template (recommandé par AWS) : versioning, référence à d'autres LT, support multi-instance types, Spot Fleet, instances dédiées, et toutes les nouvelles fonctionnalités EC2. Launch Configuration est legacy (non mis à jour par AWS), sans versioning, à éviter pour les nouvelles architectures."
  },
  {
    id:"saa-j2-12",
    q:"Un ASG utilise des instances Spot. Certaines instances sont récupérées par AWS (Spot interruption). Comment l'ASG gère-t-il automatiquement cette situation ?",
    choices:["L'ASG détecte la terminaison, lance de nouvelles instances Spot ou On-Demand selon la configuration","L'ASG ne fait rien, les instances Spot ne sont pas gérées","L'ASG met l'ASG en pause","L'ASG alerte CloudWatch mais ne relance pas"],
    answer:0,
    exp:"L'ASG reçoit une notification 2 minutes avant la récupération Spot. Il peut lancer des instances de remplacement (Spot ou On-Demand selon la configuration de Mixed Instances Policy). AWS recommande de configurer plusieurs types d'instances et AZs pour maximiser la disponibilité Spot."
  },
  {
    id:"saa-j2-13",
    q:"Quelle configuration ASG permet de combiner des instances On-Demand et Spot dans le même groupe avec un pourcentage configurable ?",
    choices:["Mixed Instances Policy","Blended capacity","Spot Fleet intégré","Launch Configuration mixte"],
    answer:0,
    exp:"Mixed Instances Policy permet de définir : un pourcentage de base On-Demand, un pourcentage Spot pour le reste, plusieurs Launch Templates avec différents types d'instances. AWS optimise automatiquement pour la disponibilité et le coût."
  },
  {
    id:"saa-j2-14",
    q:"Votre ASG est attaché à un ALB. Une instance passe en 'unhealthy' selon le health check ALB. Que fait l'ASG ?",
    choices:["L'ASG termine l'instance unhealthy et en lance une nouvelle","L'ASG ignore les health checks ALB par défaut","L'ASG attend le Default Cooldown avant d'agir","L'ASG notifie l'admin et attend une action manuelle"],
    answer:0,
    exp:"Si le type de health check ASG est 'ELB', l'ASG respecte les health checks ALB. Une instance unhealthy selon l'ALB sera terminée par l'ASG et remplacée par une nouvelle. Par défaut, l'ASG n'utilise que les health checks EC2 ; configurer ELB health check pour utiliser ceux de l'ALB."
  },
  {
    id:"saa-j2-15",
    q:"Comment un ASG calcule-t-il la nouvelle capacité souhaitée lors d'un scale-in avec Target Tracking (CPU cible 50%, CPU actuel 30%) ?",
    choices:["Il réduit le nombre d'instances proportionnellement pour que CPU revienne à 50%","Il supprime une instance et attend","Il supprime toutes les instances excédentaires en une fois","Il attend 5 minutes puis recalcule"],
    answer:0,
    exp:"Target Tracking calcule : new_capacity = current_capacity × (current_metric / target_metric). Ex: 10 instances, CPU 30%, cible 50% → 10 × (30/50) = 6 instances. L'ASG réduit à 6 instances. Le scale-in a un cooldown de 300s par défaut pour éviter les oscillations."
  },
  {
    id:"saa-j2-16",
    q:"Votre ASG doit conserver au moins une instance en service même pendant la maintenance. Quelle fonctionnalité utiliser pour protéger une instance spécifique ?",
    choices:["Instance Scale-In Protection","Lifecycle Hook sur Terminate","ASG Suspension","Instance Standby"],
    answer:0,
    exp:"Instance Scale-In Protection empêche l'ASG de terminer une instance spécifique lors d'un scale-in automatique. L'instance reste protégée jusqu'à ce que vous désactiviez manuellement la protection. Utile pour les instances ayant de l'état ou des tâches longues en cours."
  },
  {
    id:"saa-j2-17",
    q:"Qu'est-ce qu'un Lifecycle Hook ASG ?",
    choices:["Un mécanisme pour mettre une instance en pause (Pending ou Terminating) et exécuter des actions personnalisées avant qu'elle soit InService ou terminée","Un hook CloudWatch pour les événements ASG","Une politique de scaling avancée","Un mécanisme de health check personnalisé"],
    answer:0,
    exp:"Les Lifecycle Hooks mettent une instance en attente lors du lancement (Pending:Wait) ou de la terminaison (Terminating:Wait). Pendant ce temps, vous pouvez exécuter des scripts (via SNS, SQS, Lambda) : installation de logiciel, copie de logs, désinscription d'un registry, etc."
  },
  {
    id:"saa-j2-18",
    q:"Un ASG a min=1, desired=1, max=3. La seule instance EC2 tombe en panne. Que fait l'ASG ?",
    choices:["Lance automatiquement une nouvelle instance pour maintenir desired=1","Réduit desired à 0 (min=0 dans ce cas)","Envoie une alerte mais n'agit pas","Attend l'intervention manuelle"],
    answer:0,
    exp:"L'ASG maintient toujours le nombre d'instances au niveau 'desired'. Si l'instance unique échoue, l'ASG la détecte via les health checks EC2 (ou ELB), la termine, et lance immédiatement une nouvelle instance pour revenir à desired=1."
  },
  {
    id:"saa-j2-19",
    q:"Quelle métrique prédéfinie est disponible pour Target Tracking Scaling afin de scaler un ASG basé sur la charge de l'ALB ?",
    choices:["ALBRequestCountPerTarget","ALBRequestCount","ALBLatency","ALBConnectionCount"],
    answer:0,
    exp:"'ALBRequestCountPerTarget' est la métrique prédéfinie pour scaler un ASG attaché à un ALB. Elle mesure le nombre de requêtes par instance dans le target group. L'ASG scale pour maintenir ce nombre à la valeur cible. C'est plus précis que CPU car corrélé directement avec la charge web."
  },
  {
    id:"saa-j2-20",
    q:"Votre ASG lance de nouvelles instances lors d'un scale-out, mais elles ne deviennent pas InService car l'application prend 5 minutes à démarrer. Que se passe-t-il ?",
    choices:["L'ASG les marque unhealthy si le Health Check Grace Period est dépassé avant le démarrage","L'ASG attend indéfiniment","L'ASG les termine immédiatement et essaie un autre type d'instance","L'ASG lance des instances supplémentaires pour compenser"],
    answer:0,
    exp:"Si l'application met plus de temps à démarrer que le Health Check Grace Period (défaut 300s), l'ASG peut marquer l'instance comme unhealthy et la terminer. Augmenter le grace period (ex: 600s) ou utiliser un Lifecycle Hook pour gérer correctement le warm-up."
  },
  {
    id:"saa-j2-21",
    q:"Comment désactiver temporairement le scaling automatique d'un ASG sans supprimer les politiques de scaling ?",
    choices:["Suspendre les processus ASG (Launch, Terminate, AZRebalance, etc.)","Supprimer les politiques de scaling temporairement","Mettre desired=min=max","Désactiver les alarmes CloudWatch"],
    answer:0,
    exp:"ASG Suspend/Resume Processes permet de suspendre des processus spécifiques : Launch, Terminate, HealthCheck, AZRebalance, AlarmNotification, ScheduledActions, AddToLoadBalancer. Utile pour les maintenances. Les processus peuvent être repris individuellement."
  },
  {
    id:"saa-j2-22",
    q:"Quelle est la différence entre 'Standby' et 'Detach' pour une instance EC2 dans un ASG ?",
    choices:["Standby = instance toujours dans l'ASG mais hors rotation (maintenance) ; Detach = retire définitivement l'instance de l'ASG","Ce sont des synonymes","Standby termine l'instance ; Detach la garde","Standby est temporaire, Detach est permanent mais les deux maintiennent l'instance dans l'ASG"],
    answer:0,
    exp:"Standby : l'instance reste dans l'ASG (compte dans la capacité si desired est ajusté) mais ne reçoit pas de trafic. Utile pour maintenance/debug. Detach : l'instance quitte l'ASG et peut devenir une instance EC2 autonome. L'ASG peut lancer une instance de remplacement."
  },
  {
    id:"saa-j2-23",
    q:"Un ASG distribue ses instances sur 3 AZ. AZ-A a 4 instances, AZ-B a 4 instances, AZ-C a 2 instances. L'ASG décide de faire un scale-in. Quelle AZ aura une instance terminée en premier ?",
    choices:["AZ-A ou AZ-B (celle avec le plus d'instances, 4)","AZ-C (celle avec le moins d'instances)","L'ASG choisit aléatoirement","L'instance la plus ancienne quelle que soit l'AZ"],
    answer:0,
    exp:"La Default Termination Policy commence par rééquilibrer les AZs : terminer dans l'AZ avec le plus d'instances. AZ-A et AZ-B ont toutes les deux 4 instances. L'ASG choisit entre A et B, puis applique les autres critères (launch config plus ancienne, plus proche de la prochaine heure)."
  },
  {
    id:"saa-j2-24",
    q:"Votre Launch Template spécifie une User Data script pour installer et configurer l'application. Quand ce script s'exécute-t-il ?",
    choices:["Au premier démarrage de l'instance EC2 (via cloud-init)","À chaque démarrage de l'instance","Lors de la création du Launch Template","Lorsque l'ASG déploie une mise à jour"],
    answer:0,
    exp:"La User Data s'exécute via cloud-init au PREMIER démarrage de l'instance. Elle configure l'environnement, installe les dépendances, démarre les services. Par défaut, elle ne s'exécute qu'une fois. Pour l'exécuter à chaque démarrage, utiliser '#cloud-boothook' ou un service systemd."
  },
  {
    id:"saa-j2-25",
    q:"Quelle est la capacité maximale (max instances) supportée par un seul ASG dans AWS ?",
    choices:["2500 instances","1000 instances","500 instances","10000 instances"],
    answer:0,
    exp:"Un ASG peut gérer jusqu'à 2500 instances au maximum. Cette limite peut être augmentée via un service limit increase. Dans la pratique, pour de très grands déploiements, il est recommandé d'utiliser plusieurs ASG."
  },
  {
    id:"saa-j2-26",
    q:"Votre application doit recevoir une notification lorsqu'une instance ASG est lancée ou terminée pour mettre à jour un registre de configuration. Quelle intégration utiliser ?",
    choices:["ASG Lifecycle Hooks + SNS/SQS/Lambda","CloudWatch Events uniquement","EC2 instance metadata","AWS Config"],
    answer:0,
    exp:"Les Lifecycle Hooks avec SNS, SQS ou EventBridge (puis Lambda) permettent d'exécuter du code lors des transitions d'état. EventBridge peut aussi capturer les événements ASG (EC2 Instance Launch/Terminate) pour déclencher des automations."
  },
  {
    id:"saa-j2-27",
    q:"Quel paramètre ASG définit le nombre d'instances lancées lors de la création initiale du groupe ?",
    choices:["Desired capacity","Minimum capacity","Maximum capacity","Initial capacity"],
    answer:0,
    exp:"La Desired Capacity est le nombre d'instances que l'ASG cherche à maintenir à tout moment. Lors de la création, l'ASG lance immédiatement autant d'instances que la desired capacity. Elle peut être modifiée manuellement ou par les politiques de scaling."
  },
  {
    id:"saa-j2-28",
    q:"Comment un ASG assure-t-il la haute disponibilité en multi-AZ sans configuration supplémentaire ?",
    choices:["Il distribue automatiquement les instances sur toutes les AZ configurées et rebalance si une AZ a trop peu d'instances","Il déploie dans une seule AZ par défaut","Il nécessite un NLB pour la distribution multi-AZ","Il réplique les données entre AZ automatiquement"],
    answer:0,
    exp:"L'ASG distribue automatiquement les instances sur toutes les AZ configurées en respectant l'équilibre. Si une AZ est indisponible, il lance des instances dans les autres AZ. Le processus 'AZRebalance' corrige les déséquilibres entre AZs."
  },
  {
    id:"saa-j2-29",
    q:"Vous utilisez Target Tracking sur CPUUtilization (cible 60%). Votre CPU est à 60% mais vous avez des instances sous-utilisées. Que fait l'ASG ?",
    choices:["Rien (la cible est atteinte, pas d'action nécessaire)","Scale-in pour optimiser","Scale-out pour avoir de la marge","Recalcule toutes les 1 minute"],
    answer:0,
    exp:"Target Tracking ne prend une action que si la métrique s'écarte de la cible. Si CPU = 60% (= target), aucune action. Si CPU > 60% → scale-out. Si CPU < 60% de façon prolongée → scale-in. L'algorithme inclut un buffer de 10% avant de déclencher un scale-in."
  },
  {
    id:"saa-j2-30",
    q:"Quelle est la recommandation AWS pour choisir entre Simple Scaling, Step Scaling et Target Tracking ?",
    choices:["Préférer Target Tracking pour la plupart des cas ; Step Scaling pour des contrôles plus fins ; Simple Scaling est legacy","Toujours utiliser Simple Scaling car c'est le plus rapide","Step Scaling est toujours préférable car plus précis","Les trois sont équivalents"],
    answer:0,
    exp:"AWS recommande Target Tracking pour la majorité des cas (simple, efficace, peu de configuration). Step Scaling pour des réponses différenciées selon l'intensité du problème. Simple Scaling est considéré legacy car son cooldown fixe le rend moins réactif que les alternatives."
  },
  {
    id:"saa-j2-31",
    q:"Votre application e-commerce connaît des pics prévisibles le Black Friday. Quelle combinaison de politiques ASG est la plus efficace ?",
    choices:["Predictive Scaling + Target Tracking","Simple Scaling uniquement","Scheduled Scaling uniquement","Step Scaling uniquement"],
    answer:0,
    exp:"Predictive Scaling anticipe les pics basé sur l'historique ML. Target Tracking gère les variations imprévues en temps réel. Cette combinaison couvre les deux cas : le pic prévisible (Predictive) et les variations inattendues (Target Tracking). C'est l'approche recommandée pour les workloads avec patterns historiques."
  },
  {
    id:"saa-j2-32",
    q:"Lors d'une Instance Refresh, quel paramètre 'MinHealthyPercentage' à 80% garantit exactement ?",
    choices:["Au moins 80% des instances du desired restent InService pendant le refresh","80% des instances sont remplacées en même temps","Le refresh s'arrête si CPU > 80%","20% des instances sont en Standby pendant le refresh"],
    answer:0,
    exp:"MinHealthyPercentage=80% signifie : pendant le refresh, l'ASG maintient au moins 80% de la desired capacity en état InService et healthy. Ex: desired=10 → au moins 8 instances InService pendant le refresh. L'ASG remplace les 20% restants (2 instances) et attend qu'elles soient healthy avant de continuer."
  },
  {
    id:"saa-j2-33",
    q:"Un ASG utilise une Launch Template avec l'image AMI ami-123456. Vous créez une nouvelle version de la LT avec l'AMI ami-789012. Les instances existantes sont-elles automatiquement remplacées ?",
    choices:["Non, les instances existantes continuent avec l'ancienne AMI ; seules les nouvelles instances utilisent la nouvelle version","Oui, l'ASG remplace immédiatement toutes les instances","Non, et aucun mécanisme ne permet de les remplacer","Oui, mais seulement lors du prochain scale-out"],
    answer:0,
    exp:"Mettre à jour la Launch Template ne remplace PAS automatiquement les instances existantes. Pour mettre à jour les instances, utiliser Instance Refresh (remplacement progressif) ou mettre à jour manuellement en terminant les vieilles instances."
  },
  {
    id:"saa-j2-34",
    q:"Comment configurer un ASG pour utiliser un mélange de types d'instances (m5.large, m5.xlarge, c5.large) pour optimiser la disponibilité Spot ?",
    choices:["Mixed Instances Policy dans le Launch Template avec plusieurs instance overrides","Créer un ASG séparé par type d'instance","Utiliser AWS Spot Fleet indépendamment","Ce n'est pas possible, un ASG n'accepte qu'un seul type d'instance"],
    answer:0,
    exp:"Mixed Instances Policy permet de définir plusieurs types d'instances comme overrides dans le Launch Template. L'ASG (et Spot Fleet intégré) choisit parmi ces types selon la disponibilité Spot et le coût. Augmenter la diversité des types améliore la disponibilité Spot."
  },
  {
    id:"saa-j2-35",
    q:"Quelle est la durée maximale d'un Lifecycle Hook avant qu'une instance passe automatiquement à l'état suivant si aucune action n'est prise ?",
    choices:["48 heures (172800 secondes)","1 heure","24 heures","1 semaine"],
    answer:0,
    exp:"Un Lifecycle Hook a un Heartbeat Timeout maximum de 48 heures (172800 secondes). Le défaut est de 3600 secondes (1 heure). Si l'action personnalisée ne complète pas dans ce délai et n'envoie pas de signal 'CONTINUE', l'instance peut être terminée (action par défaut : ABANDON)."
  },
  {
    id:"saa-j2-36",
    q:"Votre ASG lance des instances dans un VPC avec des subnets privés. Les instances doivent télécharger des packages depuis Internet. Quelle configuration réseau est nécessaire ?",
    choices:["NAT Gateway dans les subnets publics avec route table des subnets privés pointant vers le NAT","Internet Gateway directement dans les subnets privés","Elastic IP sur chaque instance ASG","VPC Endpoint pour chaque service AWS nécessaire"],
    answer:0,
    exp:"Les instances dans des subnets privés accèdent à Internet via un NAT Gateway (ou NAT Instance) dans les subnets publics. La route table des subnets privés doit avoir une route 0.0.0.0/0 → NAT Gateway. Les Elastic IPs ne peuvent pas être assignées aux instances dans les subnets privés directement."
  },
  {
    id:"saa-j2-37",
    q:"Vous souhaitez qu'une instance EC2 dans un ASG exécute des tâches de nettoyage (logs, désinscription d'un service) avant d'être terminée lors d'un scale-in. Quelle solution utiliser ?",
    choices:["Lifecycle Hook sur l'événement 'autoscaling:EC2_INSTANCE_TERMINATING'","User Data avec un script de shutdown","CloudWatch Events sur EC2 state change","ASG Termination Policy personnalisée"],
    answer:0,
    exp:"Un Lifecycle Hook sur 'autoscaling:EC2_INSTANCE_TERMINATING' met l'instance en état 'Terminating:Wait'. Pendant ce délai, une Lambda (ou SQS consumer) peut exécuter les tâches de nettoyage, puis envoyer un signal 'CompleteLifecycleAction' avec 'CONTINUE' pour procéder à la terminaison."
  },
  {
    id:"saa-j2-38",
    q:"Quelle différence entre 'Scale Out' et 'Scale Up' (Vertical Scaling) dans le contexte ASG ?",
    choices:["Scale Out = ajouter des instances (horizontal) ; Scale Up = utiliser des instances plus grandes (vertical, non géré par ASG nativement)","Ce sont des synonymes dans AWS","ASG gère les deux types","Scale Up = ajouter des instances, Scale Out = augmenter la taille des instances"],
    answer:0,
    exp:"Scale Out (horizontal) : ASG ajoute des instances supplémentaires. C'est ce qu'ASG fait nativement. Scale Up (vertical) : remplacer les instances par des types plus grands. L'ASG ne fait pas de vertical scaling directement ; il faudrait mettre à jour le Launch Template et faire un Instance Refresh."
  },
  {
    id:"saa-j2-39",
    q:"Votre ASG a un warming pool. Quel est l'avantage du warming pool ?",
    choices:["Des instances pré-initialisées prêtes à rejoindre l'ASG rapidement lors d'un scale-out","Un pool d'instances Spot à prix réduit","Un ensemble d'AMIs pré-configurées","Un buffer de capacité réservé"],
    answer:0,
    exp:"Un Warm Pool (Warming Pool) contient des instances EC2 initialisées et arrêtées (ou en cours d'exécution) qui peuvent rejoindre l'ASG rapidement lors d'un scale-out. Élimine le délai d'initialisation de l'application. Les instances en Warm Pool sont facturées à un tarif réduit si arrêtées."
  },
  {
    id:"saa-j2-40",
    q:"Un ASG est configuré avec Launch Template spécifiant un IAM Instance Profile. À quoi sert ce Instance Profile ?",
    choices:["Permet aux instances EC2 d'appeler des services AWS (S3, DynamoDB, SSM) avec des permissions IAM sans credentials hardcodés","Définit l'identité réseau de l'instance","Associe une Elastic IP à l'instance","Configure les Security Groups de l'instance"],
    answer:0,
    exp:"Un Instance Profile attache un rôle IAM à une instance EC2. L'instance peut appeler les API AWS selon les permissions du rôle (via les credentials temporaires du metadata endpoint). C'est la pratique recommandée : jamais de credentials hardcodés sur les instances."
  },
  {
    id:"saa-j2-41",
    q:"Lors d'un Instance Refresh avec 'Skip Matching' activé, que se passe-t-il ?",
    choices:["Les instances déjà à jour avec la nouvelle Launch Template ne sont pas remplacées","Toutes les instances sont remplacées quelle que soit leur configuration","Les instances Spot sont ignorées","Les instances protégées par Scale-In Protection sont remplacées"],
    answer:0,
    exp:"'Skip Matching' (par défaut activé dans Instance Refresh) : l'ASG compare la configuration actuelle de chaque instance avec la nouvelle LT. Si une instance a déjà la bonne configuration (même AMI, même type), elle n'est pas remplacée. Évite des remplacements inutiles et accélère le refresh."
  },
  {
    id:"saa-j2-42",
    q:"Votre application a des sessions utilisateurs stockées en mémoire sur les instances EC2. Lors d'un scale-in, les sessions des utilisateurs sur les instances terminées sont perdues. Comment résoudre ce problème architecturalement ?",
    choices:["Externaliser les sessions dans ElastiCache Redis ou DynamoDB","Augmenter la durée de Deregistration Delay","Activer les sticky sessions sur l'ALB","Utiliser des instances avec plus de RAM"],
    answer:0,
    exp:"La bonne pratique est de rendre les instances EC2 'stateless' : externaliser l'état (sessions) dans un datastore partagé comme ElastiCache Redis ou DynamoDB. Ainsi, n'importe quelle instance peut servir n'importe quel utilisateur, et le scale-in ne perd pas de sessions."
  },
  {
    id:"saa-j2-43",
    q:"Vous avez configuré un ASG avec Target Tracking sur CPU à 70%. Vous ajoutez une CloudWatch Alarm personnalisée de Step Scaling sur la même métrique. Que se passe-t-il si les deux politiques se déclenchent simultanément ?",
    choices:["L'ASG prend la décision la plus 'grande' (highest capacity change wins)","Les deux politiques s'annulent","La politique Target Tracking prend toujours le dessus","La politique Step Scaling prend toujours le dessus"],
    answer:0,
    exp:"Lorsque plusieurs politiques de scaling s'appliquent simultanément, l'ASG prend l'action qui résulte en la plus grande capacité (scale-out) ou la plus petite capacité (scale-in). Le principe : l'ASG choisit le changement le plus conservateur pour garantir la performance."
  },
  {
    id:"saa-j2-44",
    q:"Comment un ASG garantit-il que les instances sont distribuées équitablement entre les AZ lors d'un scale-out ?",
    choices:["Le processus AZRebalance crée des instances dans les AZ sous-représentées","L'ASG distribue round-robin entre les AZ","L'ASG choisit toujours l'AZ avec le moins d'instances","L'administrateur doit configurer les poids par AZ"],
    answer:0,
    exp:"Lors du scale-out, l'ASG lance les nouvelles instances dans les AZ qui ont le moins d'instances pour maintenir l'équilibre. Le processus AZRebalance corrige proactivement les déséquilibres (ex: après une panne AZ). Les instances excédentaires dans les AZ surchargées sont terminées après lancement de nouvelles dans les AZ déficitaires."
  },
  {
    id:"saa-j2-45",
    q:"Quelle est la limite par défaut du nombre d'ASGs par région dans AWS ?",
    choices:["200 ASGs par région","100 ASGs par région","50 ASGs par région","500 ASGs par région"],
    answer:0,
    exp:"La limite par défaut est de 200 ASGs par région. Cette limite peut être augmentée via un support ticket. Chaque ASG peut avoir jusqu'à 2500 instances, avec une limite de 5000 instances EC2 par ASG dans les comptes avec augmentation de quota."
  },
  {
    id:"saa-j2-46",
    q:"Votre ASG lance des instances mais elles passent en 'Impaired' (EC2 health check failed). Quelle configuration ASG permet de remplacer automatiquement ces instances ?",
    choices:["ASG Health Check Type = 'EC2' (par défaut) remplace les instances avec status checks failed","ASG ne remplace pas les instances Impaired automatiquement","Configurer Health Check Type = 'ELB'","Utiliser un Lifecycle Hook sur EC2_INSTANCE_IMPAIRED"],
    answer:0,
    exp:"Avec Health Check Type = 'EC2' (défaut), l'ASG remplace les instances dont les EC2 System Status Checks ou Instance Status Checks échouent. Ces checks détectent les problèmes hardware et software de l'instance. L'instance est terminée et remplacée automatiquement."
  },
  {
    id:"saa-j2-47",
    q:"Vous souhaitez tester la résilience de votre ASG en terminant une instance. Quel outil AWS peut automatiser ce type de chaos engineering ?",
    choices:["AWS Fault Injection Simulator (FIS)","AWS Config","AWS CloudTrail","AWS Systems Manager"],
    answer:0,
    exp:"AWS Fault Injection Simulator (FIS) permet d'injecter des pannes contrôlées : terminer des instances EC2, arrêter des services, injecter de la latence réseau. C'est l'outil AWS dédié au chaos engineering pour tester la résilience des architectures."
  },
  {
    id:"saa-j2-48",
    q:"Dans un ASG avec Launch Template, quel est l'avantage de référencer l'AMI par son SSM Parameter Store path plutôt que directement par son ID ?",
    choices:["Mise à jour automatique de l'AMI sans modifier la Launch Template (en mettant à jour le paramètre SSM)","Meilleures performances de démarrage","Coût réduit","Support des AMIs dans d'autres régions"],
    answer:0,
    exp:"En référençant l'AMI via un paramètre SSM (ex: /aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64), mettre à jour le paramètre SSM suffit pour que l'ASG utilise la nouvelle AMI lors du prochain Instance Refresh, sans modifier la Launch Template."
  },
  {
    id:"saa-j2-49",
    q:"Votre équipe SRE veut recevoir une notification Slack à chaque fois qu'une instance est lancée ou terminée par l'ASG. Quelle architecture utiliser ?",
    choices:["EventBridge rule sur EC2 Auto Scaling events → SNS → Lambda → Slack Webhook","CloudWatch Logs → Kibana → Slack","AWS Config → SNS → Slack","CloudTrail → S3 → Lambda → Slack"],
    answer:0,
    exp:"EventBridge capte les événements ASG (EC2 Instance Launch Successful, EC2 Instance Terminate Successful, etc.). Une règle EventBridge déclenche une Lambda ou SNS qui appelle le webhook Slack. C'est l'architecture event-driven standard pour les notifications d'événements AWS."
  },
  {
    id:"saa-j2-50",
    q:"Un ASG a desired=5 instances. Vous mettez manuellement desired=0. Que se passe-t-il ?",
    choices:["L'ASG termine toutes les instances si min=0 est configuré","L'ASG refuse de descendre en dessous de min","L'ASG garde 1 instance minimum par sécurité","L'ASG suspend le scaling automatique"],
    answer:0,
    exp:"Si min=0 est configuré, mettre desired=0 termine toutes les instances. L'ASG respecte la desired capacity entre min et max. Si min>0 (ex: min=2), mettre desired=0 est refusé ou corrigé à min. Cette configuration est utile pour les environnements dev/test à arrêter en dehors des heures de travail."
  }
];

// ─────────────────────────────────────────────────────────────
// J3 — RDS Haute Disponibilité (50 questions)
// ─────────────────────────────────────────────────────────────
window.QDATA[3] = [
  {
    id:"saa-j3-1",
    q:"Comment fonctionne le Multi-AZ de RDS en cas de panne de l'instance primaire ?",
    choices:["Failover automatique vers le standby (synchrone) en 60-120 secondes via mise à jour du DNS endpoint","Failover manuel requis vers le standby","Le standby prend le trafic instantanément sans coupure","Basculement vers une Read Replica"],
    answer:0,
    exp:"RDS Multi-AZ utilise la réplication synchrone vers un standby dans une autre AZ. En cas de panne, AWS effectue un failover automatique en 60-120 secondes en mettant à jour le DNS de l'endpoint. Les applications qui utilisent l'endpoint DNS reconnectent automatiquement après le TTL DNS."
  },
  {
    id:"saa-j3-2",
    q:"Dans un déploiement RDS Multi-AZ standard, l'instance standby peut-elle être utilisée pour des requêtes de lecture ?",
    choices:["Non, le standby est uniquement pour le failover, pas pour les lectures","Oui, pour les lectures SELECT seulement","Oui, si activé dans la configuration","Oui avec le Multi-AZ DB Cluster uniquement"],
    answer:0,
    exp:"Dans un Multi-AZ DB Instance standard (1 primary + 1 standby), le standby n'est PAS lisible. Il existe uniquement pour le failover. Pour des lectures distribuées, utiliser les Read Replicas (réplication asynchrone). Le Multi-AZ DB Cluster (1 writer + 2 readers) permet des lectures sur les readers."
  },
  {
    id:"saa-j3-3",
    q:"Quelle est la différence de réplication entre RDS Multi-AZ et RDS Read Replicas ?",
    choices:["Multi-AZ = synchrone (0 perte de données) ; Read Replicas = asynchrone (légère latence/lag possible)","Multi-AZ = asynchrone ; Read Replicas = synchrone","Les deux sont synchrones","Les deux sont asynchrones"],
    answer:0,
    exp:"Multi-AZ utilise la réplication SYNCHRONE : chaque transaction est confirmée sur le primaire ET le standby avant d'être acquittée au client. 0 perte de données garantie. Read Replicas utilisent la réplication ASYNCHRONE : il peut y avoir un petit lag, et en cas de panne du primaire, quelques transactions peuvent être perdues."
  },
  {
    id:"saa-j3-4",
    q:"Vous avez un RDS MySQL avec Multi-AZ et 3 Read Replicas. Vous effectuez une mise à jour de version mineure. Quel est l'impact sur la disponibilité ?",
    choices:["Court failover (~60s) car AWS met à jour le standby puis bascule, puis met à jour l'ancien primaire","Downtime de plusieurs minutes","Aucun downtime car les Read Replicas prennent le relais","Rolling update sans interruption"],
    answer:0,
    exp:"Pour une maintenance planifiée (patch, mise à jour) sur un RDS Multi-AZ, AWS met d'abord à jour le standby, effectue un failover vers le standby mis à jour (60-120s de coupure), puis met à jour l'ancien primaire. Les applications subissent une courte interruption lors du failover."
  },
  {
    id:"saa-j3-5",
    q:"Jusqu'à combien de Read Replicas peut-on créer pour un RDS MySQL/MariaDB ?",
    choices:["15 Read Replicas","5 Read Replicas","3 Read Replicas","10 Read Replicas"],
    answer:0,
    exp:"RDS MySQL et MariaDB supportent jusqu'à 15 Read Replicas par instance source (avec MySQL 8.0+). RDS PostgreSQL supporte 5 Read Replicas. Amazon Aurora MySQL supporte 15 Aurora Replicas dans un cluster. Les Read Replicas peuvent être dans la même région ou cross-region."
  },
  {
    id:"saa-j3-6",
    q:"Votre application lit intensivement une base RDS MySQL. L'instance primaire est surchargée en lecture. Quelle architecture améliore les performances de lecture ?",
    choices:["Créer des Read Replicas et configurer l'application pour lire depuis l'endpoint de lecture","Augmenter la taille de l'instance primaire (vertical scaling)","Activer Multi-AZ pour distribuer les lectures","Utiliser ElastiCache comme couche de cache devant RDS"],
    answer:0,
    exp:"Les Read Replicas distribuent la charge de lecture sur plusieurs instances. L'application utilise un endpoint spécifique par replica pour les requêtes SELECT et l'endpoint primaire pour les écritures. ElastiCache est une alternative complémentaire pour les données fréquemment lues."
  },
  {
    id:"saa-j3-7",
    q:"Comment promouvoir une RDS Read Replica en instance indépendante (standalone) ?",
    choices:["Via la console RDS ou l'API : 'Promote Read Replica' — crée une instance indépendante avec sa propre configuration","Impossible, une Read Replica ne peut pas devenir standalone","Automatiquement lors d'un failover du primaire","Via une snapshot et restauration"],
    answer:0,
    exp:"'Promote Read Replica' crée une nouvelle instance RDS indépendante à partir de la replica. Après la promotion, elle n'est plus synchronisée avec le primaire original. Utile pour créer des environnements de test/dev à partir de la production, ou pour faire un upgrade en créant une Read Replica dans une nouvelle version."
  },
  {
    id:"saa-j3-8",
    q:"Amazon Aurora est compatible avec quels moteurs de base de données ?",
    choices:["MySQL et PostgreSQL","MySQL, PostgreSQL et Oracle","MySQL uniquement","Tous les moteurs RDS (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server)"],
    answer:0,
    exp:"Aurora est compatible avec MySQL (wire-compatible, même pilote JDBC/ODBC) et PostgreSQL. Aurora n'est pas disponible pour Oracle, SQL Server ou MariaDB. Aurora utilise son propre moteur de stockage optimisé, offrant des performances 3x PostgreSQL et 5x MySQL standard."
  },
  {
    id:"saa-j3-9",
    q:"Quelle est l'architecture de stockage d'un cluster Aurora en termes de réplication ?",
    choices:["6 copies de données réparties sur 3 AZ (2 par AZ), peut tolérer la perte de 2 copies pour les écritures et 3 copies pour les lectures","3 copies dans 3 AZ (1 par AZ)","Réplication vers S3 uniquement","Dépend du nombre d'Aurora Replicas"],
    answer:0,
    exp:"Aurora répartit automatiquement 6 copies du volume de données sur 3 AZ (2 segments par AZ). Pour les écritures, Aurora nécessite 4/6 copies disponibles. Pour les lectures, 3/6. Peut tolérer la perte d'une AZ entière (2 copies) sans perte de données ni interruption de service."
  },
  {
    id:"saa-j3-10",
    q:"Quel est le délai de failover d'Aurora lors d'une panne du writer ?",
    choices:["30 secondes (moins d'une minute pour la promotion d'un Reader)","60-120 secondes comme RDS Multi-AZ","Instantané (zéro downtime)","5-10 minutes"],
    answer:0,
    exp:"Le failover Aurora est généralement inférieur à 30 secondes si un Aurora Replica est disponible dans le cluster. Il est plus rapide que RDS Multi-AZ car les Readers partagent le même volume de stockage distribué ; aucune réplication de données n'est nécessaire, juste une promotion DNS."
  },
  {
    id:"saa-j3-11",
    q:"Quelle fonctionnalité Aurora permet aux applications de continuer à lire pendant un failover, même avec une légère latence acceptable ?",
    choices:["Aurora Reader Endpoint (distribue automatiquement entre les Replicas disponibles)","Aurora Writer Endpoint","Aurora Custom Endpoint","Aurora Serverless endpoint"],
    answer:0,
    exp:"L'Aurora Reader Endpoint est un endpoint DNS qui distribue les connexions de lecture entre tous les Aurora Replicas disponibles. Pendant un failover, les Replicas restants continuent de servir les lectures via le Reader Endpoint. L'Aurora Writer Endpoint pointe vers le writer actuel."
  },
  {
    id:"saa-j3-12",
    q:"Votre base de données Aurora a des périodes de trafic irrégulier (nuits et weekends quasi vides, pics en journée). Quelle configuration Aurora optimise les coûts ?",
    choices:["Aurora Serverless v2 (scale automatique par ACU en quelques secondes)","Aurora Provisioned avec instance de grande taille","RDS Multi-AZ standard avec Reserved Instance","Aurora Global Database"],
    answer:0,
    exp:"Aurora Serverless v2 scale automatiquement et quasi-instantanément entre un minimum et maximum d'ACUs (Aurora Capacity Units) selon la charge réelle. On ne paie que les ACUs consommées. Idéal pour les workloads imprévisibles. Aurora Serverless v1 était limité à des patterns spécifiques."
  },
  {
    id:"saa-j3-13",
    q:"Quel est l'avantage d'Aurora Global Database par rapport à la Cross-Region Read Replica RDS standard ?",
    choices:["Réplication < 1 seconde entre régions (RPO ~0s), failover global < 1 minute, moins d'impact sur le writer","La Cross-Region RR est identique en performances","Aurora Global Database ne supporte que MySQL","Aurora Global Database ne permet pas le failover entre régions"],
    answer:0,
    exp:"Aurora Global Database utilise un mécanisme de réplication au niveau stockage (< 1 seconde entre régions). Les Cross-Region RRs RDS standard ont une réplication asynchrone plus lente. En cas de disaster recovery, Aurora Global peut promouvoir une région secondaire en < 1 minute avec RPO proche de 0."
  },
  {
    id:"saa-j3-14",
    q:"RDS Proxy améliore les performances dans quel scénario ?",
    choices:["Applications avec de nombreuses connexions courtes (Lambda, microservices) qui saturent le pool de connexions RDS","Applications avec de longues connexions persistantes","Applications de reporting avec de longues requêtes","Applications utilisant des procédures stockées"],
    answer:0,
    exp:"RDS Proxy maintient un pool de connexions persistantes vers RDS/Aurora. Les clients (notamment Lambda qui ouvre/ferme des connexions à chaque invocation) se connectent au proxy, qui réutilise les connexions existantes. Réduit drastiquement le nombre de connexions actives sur RDS et améliore la latence de connexion."
  },
  {
    id:"saa-j3-15",
    q:"Un développeur veut tester le failover RDS Multi-AZ sans attendre une vraie panne. Comment déclencher un failover manuel ?",
    choices:["Reboot RDS instance avec 'Failover' checkbox (ou via l'API)","Arrêter l'instance primaire","Supprimer le standby et en créer un nouveau","Ce n'est pas possible manuellement"],
    answer:0,
    exp:"'Reboot with Failover' déclenche un failover Multi-AZ planifié : l'instance standby devient le nouveau primaire. Utile pour les tests de résilience et les maintenances forcées. L'interruption est similaire à un failover automatique (60-120s). Disponible via console, CLI et API."
  },
  {
    id:"saa-j3-16",
    q:"Votre RDS PostgreSQL primaire est dans us-east-1. Vous créez une Cross-Region Read Replica dans eu-west-1. Votre application en Europe peut-elle lire depuis cette Replica ?",
    choices:["Oui, l'endpoint de la Cross-Region Replica est accessible depuis eu-west-1","Non, les Read Replicas sont réservées aux applications dans la même région","Oui, mais seulement via Direct Connect","Oui, mais avec une latence de réplication de plusieurs minutes"],
    answer:0,
    exp:"Une Cross-Region Read Replica a son propre endpoint DNS dans la région cible. Les applications dans eu-west-1 peuvent se connecter directement à cet endpoint pour des lectures. La réplication asynchrone entre régions ajoute un délai variable (généralement quelques secondes). Les données passent par Internet chiffré."
  },
  {
    id:"saa-j3-17",
    q:"Dans un scénario de Disaster Recovery, si vous promouvez une Cross-Region Read Replica en primaire, qu'arrive-t-il à la réplication avec l'ancien primaire ?",
    choices:["La réplication est rompue, la replica devient une instance indépendante","La réplication continue et les deux instances se synchronisent","L'ancien primaire devient Read Replica de la nouvelle","AWS gère automatiquement le re-synchronisation"],
    answer:0,
    exp:"Promouvoir une Read Replica brise la chaîne de réplication. Elle devient une instance RDS indépendante (nouveau primaire pour la région DR). L'ancien primaire (si récupéré) ne se re-synchronise pas automatiquement. Pour reconstruire la réplication, il faudrait créer une nouvelle Read Replica depuis le nouveau primaire."
  },
  {
    id:"saa-j3-18",
    q:"Quelle est la fenêtre de rétention maximale des backups automatiques RDS ?",
    choices:["35 jours","7 jours","14 jours","90 jours"],
    answer:0,
    exp:"La rétention des backups automatiques RDS est configurable de 1 à 35 jours. La valeur par défaut est 7 jours (ou 1 jour pour les instances créées avant juin 2016). Les backups au-delà de 35 jours nécessitent des snapshots manuels (rétention illimitée)."
  },
  {
    id:"saa-j3-19",
    q:"Amazon Aurora peut effectuer des sauvegardes continues vers S3. Quel est le RPO minimal possible avec Aurora ?",
    choices:["1 seconde (point-in-time recovery jusqu'à 1 seconde)","5 minutes (granularité des backups Aurora)","15 minutes","0 seconde (synchrone avec S3)"],
    answer:0,
    exp:"Aurora effectue des sauvegardes continues du volume de stockage partagé vers S3 avec une granularité de 1 seconde pour le Point-in-Time Recovery. On peut restaurer à n'importe quel moment dans la fenêtre de rétention (1-35 jours) avec une précision à la seconde."
  },
  {
    id:"saa-j3-20",
    q:"Qu'est-ce que le 'Multi-AZ DB Cluster' d'Amazon RDS (différent du Multi-AZ DB Instance) ?",
    choices:["1 writer + 2 reader instances dans 3 AZ différentes, les readers sont lisibles, failover < 35 secondes","Identique au Multi-AZ DB Instance standard","3 instances writer actives simultanément","Disponible uniquement pour Aurora"],
    answer:0,
    exp:"Multi-AZ DB Cluster (disponible pour MySQL 8 et PostgreSQL 13+) = 1 writer instance + 2 reader instances dans 3 AZ distinctes. Les readers sont lisibles (contrairement au standby traditionnel). Réplication semi-synchrone pour écriture quorum. Failover < 35 secondes car les readers deviennent writers."
  },
  {
    id:"saa-j3-21",
    q:"Votre application utilise RDS MySQL sans Multi-AZ ni Read Replicas. L'instance EC2 et RDS sont dans la même AZ. Quel est le principal Single Point of Failure ?",
    choices:["L'AZ unique (panne AZ = indisponibilité complète)","La connexion Internet","L'instance EC2","Le subnet VPC"],
    answer:0,
    exp:"Sans Multi-AZ, si l'AZ connaît une panne (physique, réseau, alimentation), l'instance RDS est inaccessible. L'application tombe jusqu'à la restauration de l'AZ ou la restauration manuelle dans une autre AZ depuis un snapshot. Multi-AZ résout ce SPOF."
  },
  {
    id:"saa-j3-22",
    q:"Comment RDS gère-t-il les mises à jour des Security Groups associés à une instance en production ?",
    choices:["Les modifications de Security Groups s'appliquent immédiatement sans redémarrage de l'instance RDS","Les modifications nécessitent un redémarrage de l'instance RDS","Les modifications s'appliquent lors de la prochaine fenêtre de maintenance","Les modifications ne peuvent pas être faites en production"],
    answer:0,
    exp:"Les modifications des Security Groups associés à une instance RDS s'appliquent immédiatement. C'est l'un des avantages des Security Groups (stateful, dynamiques) vs NACLs. Aucun redémarrage de RDS n'est nécessaire pour les changements de Security Groups."
  },
  {
    id:"saa-j3-23",
    q:"Quel service permet de migrer une base de données Oracle vers Amazon Aurora PostgreSQL avec un minimum de downtime ?",
    choices:["AWS Database Migration Service (DMS)","AWS Schema Conversion Tool (SCT) seul","pg_dump/restore manuel","AWS Snowball"],
    answer:0,
    exp:"AWS DMS (Database Migration Service) permet la migration avec CDC (Change Data Capture) pour une migration à chaud avec downtime minimal. AWS SCT convertit le schéma et le code SQL propriétaire Oracle en PostgreSQL. Les deux outils s'utilisent conjointement pour migrer Oracle → Aurora PostgreSQL."
  },
  {
    id:"saa-j3-24",
    q:"Votre RDS est chiffré avec AWS KMS. Vous créez un snapshot. Le snapshot est-il chiffré ?",
    choices:["Oui, les snapshots héritent automatiquement du chiffrement de l'instance source","Non, les snapshots ne sont jamais chiffrés","Oui, mais avec une clé KMS différente automatiquement générée","Dépend du paramètre de chiffrement lors de la création du snapshot"],
    answer:0,
    exp:"Les snapshots RDS héritent automatiquement de la configuration de chiffrement de l'instance source. Si l'instance est chiffrée (KMS), tous ses snapshots, backups automatiques et Read Replicas créés depuis cette instance seront également chiffrés avec la même clé KMS."
  },
  {
    id:"saa-j3-25",
    q:"Vous souhaitez activer le chiffrement sur une instance RDS MySQL non chiffrée existante en production. Quelle est la procédure ?",
    choices:["Créer un snapshot → copier le snapshot avec chiffrement activé → restaurer depuis le snapshot chiffré","Activer le chiffrement directement sur l'instance via la console","Activer via Parameter Group","Recréer l'instance avec chiffrement activé et migrer via DMS"],
    answer:0,
    exp:"On ne peut pas activer le chiffrement sur une instance RDS existante non chiffrée directement. La procédure : (1) snapshot de l'instance, (2) copie du snapshot avec chiffrement KMS activé, (3) restauration d'une nouvelle instance depuis le snapshot chiffré. Prévoir une migration des données et une coupure."
  },
  {
    id:"saa-j3-26",
    q:"Quelle est la différence entre les 'Automated Backups' et les 'Manual Snapshots' dans RDS ?",
    choices:["Automated Backups : rétention 1-35j, supprimés à la suppression de l'instance, PITR possible ; Manual Snapshots : rétention illimitée, persistent après suppression de l'instance","Identical en fonctionnalité","Automated Backups s'exécutent plus fréquemment","Manual Snapshots prennent moins de temps"],
    answer:0,
    exp:"Automated Backups : créés automatiquement pendant la fenêtre de backup, rétention configurable 1-35j, supprimés quand l'instance est supprimée (sauf si rétention finale activée), permettent le Point-in-Time Recovery. Manual Snapshots : créés manuellement, rétention indéfinie, persistent même après suppression de l'instance."
  },
  {
    id:"saa-j3-27",
    q:"Aurora Backtrack permet de 'rembobiner' une base de données Aurora à un état antérieur. Quelle est sa limite ?",
    choices:["Maximum 72 heures dans le passé, sans créer de nouvelle instance","Maximum 7 jours dans le passé","Illimité selon la rétention de backup","24 heures uniquement"],
    answer:0,
    exp:"Aurora Backtrack peut revenir jusqu'à 72 heures dans le passé (si configuré lors de la création). Il opère IN-PLACE (sur le même cluster, sans créer une nouvelle instance), ce qui le rend plus rapide qu'une restauration de snapshot. Idéal pour récupérer d'une suppression accidentelle de données."
  },
  {
    id:"saa-j3-28",
    q:"Votre application Java utilise un pool de connexions (HikariCP, 20 connexions max). Votre Lambda scale à 500 instances simultanées, chacune avec 1 connexion. Votre RDS max_connections est 100. Que se passe-t-il ?",
    choices:["Les connexions Lambda dépassent max_connections, les nouvelles connexions sont refusées avec 'too many connections'","Lambda utilise automatiquement le pool de connexions","RDS scale automatiquement max_connections","Lambda se connecte via le VPC Endpoint sans limite"],
    answer:0,
    exp:"500 Lambda × 1 connexion = 500 connexions, dépassant la limite RDS. Solution : RDS Proxy qui maintient un pool côté RDS et muliplexe des milliers de connexions Lambda vers un petit pool RDS. Avec RDS Proxy, les 500 Lambdas se connectent au proxy, qui maintient 10-20 connexions vers RDS."
  },
  {
    id:"saa-j3-29",
    q:"Comment configurer Aurora pour que les requêtes de lecture soient automatiquement dirigées vers les Replicas sans modifier le code applicatif ?",
    choices:["Utiliser l'Aurora Reader Endpoint dans la chaîne de connexion de l'application","Modifier chaque requête SELECT pour cibler un endpoint spécifique","Utiliser l'Aurora Custom Endpoint","Configurer un proxy applicatif"],
    answer:0,
    exp:"L'Aurora Reader Endpoint (un seul DNS) distribue automatiquement les connexions de lecture entre tous les Aurora Replicas disponibles en round-robin. L'application n'a qu'à utiliser cet endpoint pour ses lectures, sans connaître le nombre ou les endpoints individuels des Replicas."
  },
  {
    id:"saa-j3-30",
    q:"Quel type de stockage RDS est recommandé pour les bases de données de production avec des workloads I/O élevés et variables ?",
    choices:["General Purpose SSD (gp3) ou Provisioned IOPS SSD (io1/io2) selon les besoins","Magnetic (Standard) pour les coûts","Cold HDD pour l'archivage","Instance Store pour les meilleures performances"],
    answer:0,
    exp:"gp3 : équilibre coût/performance, jusqu'à 16,000 IOPS, recommandé pour la plupart des workloads. io1/io2 : IOPS provisionnées jusqu'à 256,000 (io2 Block Express), pour les bases critiques avec besoins I/O intensifs et prévisibles. Magnetic est legacy. RDS ne supporte pas Instance Store (non persistent)."
  },
  {
    id:"saa-j3-31",
    q:"Qu'est-ce que le 'Enhanced Monitoring' de RDS et en quoi diffère-t-il des métriques CloudWatch standard ?",
    choices:["Enhanced Monitoring capture les métriques au niveau OS (CPU par processus, mémoire, disque) toutes les 1-60s ; CloudWatch standard : métriques au niveau hypervisor toutes les 60s","Ce sont des noms différents pour la même fonctionnalité","Enhanced Monitoring est gratuit, CloudWatch est payant","Enhanced Monitoring ne fonctionne qu'avec Multi-AZ"],
    answer:0,
    exp:"Enhanced Monitoring utilise un agent sur l'instance RDS pour capturer des métriques granulaires au niveau OS (CPU par processus, threads, mémoire détaillée, I/O disque) avec une granularité de 1 à 60 secondes. Les métriques vont dans CloudWatch Logs. Les métriques CloudWatch standard viennent de l'hypervisor avec moins de détails."
  },
  {
    id:"saa-j3-32",
    q:"Votre RDS PostgreSQL subit des problèmes de performance. Vous activez Performance Insights. Que permet cet outil ?",
    choices:["Visualiser la charge DB (DB Load) par SQL, utilisateur, hôte, wait event pour identifier les goulots d'étranglement","Analyser les logs d'erreurs RDS","Optimiser automatiquement les index","Identifier les requêtes lentes dans CloudWatch"],
    answer:0,
    exp:"Performance Insights affiche le 'DB Load' (sessions actives attendant une ressource) ventilé par : requête SQL, hôte appelant, utilisateur, wait event (CPU, I/O lock, etc.). Identifie visuellement les requêtes qui consomment le plus de ressources. Rétention gratuite 7j, jusqu'à 2 ans payant."
  },
  {
    id:"saa-j3-33",
    q:"Vous devez migrer une base Oracle 19c avec des procédures stockées complexes vers AWS. Quelle combinaison d'outils AWS est recommandée ?",
    choices:["AWS SCT (conversion de schéma/code) + AWS DMS (migration des données avec CDC)","AWS DMS seul","AWS DataSync","Dump Oracle + import manuel S3 → RDS"],
    answer:0,
    exp:"AWS Schema Conversion Tool (SCT) analyse le code Oracle (procédures, fonctions, triggers, packages) et le convertit en code compatible PostgreSQL/Aurora, avec un rapport sur la complexité de conversion. AWS DMS migre ensuite les données avec CDC pour minimiser le downtime."
  },
  {
    id:"saa-j3-34",
    q:"Votre RDS est configuré en Multi-AZ. Pendant quels événements AWS peut-il déclencher un failover automatique ?",
    choices:["Panne de l'instance primaire, panne de l'AZ, panne réseau, maintenance planifiée OS/DB","Uniquement panne matérielle","Uniquement si vous configurez des CloudWatch Alarms","Jamais automatiquement, toujours manuel"],
    answer:0,
    exp:"RDS déclenche un failover automatique Multi-AZ lors de : panne de l'instance EC2 primaire, panne de l'AZ primaire, perte de connectivité réseau, problème de stockage, maintenance OS/DB planifiée. AWS peut aussi déclencher un failover si les health checks échouent de façon répétée."
  },
  {
    id:"saa-j3-35",
    q:"Quelle est la différence entre 'RDS for MySQL' et 'Aurora MySQL' pour la scalabilité de stockage ?",
    choices:["RDS MySQL : scale manuel jusqu'à 64 TiB, Aurora MySQL : scale automatique de 10 GiB à 128 TiB","Identiques en capacité de stockage","Aurora MySQL est limité à 1 TiB","RDS MySQL scale automatiquement comme Aurora"],
    answer:0,
    exp:"RDS MySQL : stockage EBS géré, doit être monitoré et augmenté manuellement (ou avec auto-scaling activé). Jusqu'à 64 TiB. Aurora MySQL : stockage distribué qui s'étend automatiquement par incréments de 10 GiB jusqu'à 128 TiB sans interruption. Pas de provisioning de stockage nécessaire."
  },
  {
    id:"saa-j3-36",
    q:"Votre instance RDS atteint régulièrement 95% d'utilisation CPU. Quelle est la première action recommandée avant de modifier le type d'instance ?",
    choices:["Analyser les requêtes lentes avec Performance Insights/Slow Query Log et optimiser les index","Passer immédiatement à une instance plus grande","Activer Multi-AZ pour répartir la charge","Créer des Read Replicas et migrer toutes les requêtes"],
    answer:0,
    exp:"Avant de scaler, identifier la cause avec Performance Insights ou les slow query logs. Souvent, 1-2 requêtes non optimisées consomment 90% du CPU. Optimiser ces requêtes (index, réécriture) peut résoudre le problème sans coût supplémentaire. Le vertical scaling est coûteux et temporaire si la cause racine n'est pas traitée."
  },
  {
    id:"saa-j3-37",
    q:"Qu'est-ce que l'option 'Deletion Protection' sur RDS et quand est-elle recommandée ?",
    choices:["Empêche la suppression accidentelle de l'instance RDS via console/API/CLI, recommandée en production","Empêche la suppression des données dans la base","Protège les snapshots contre la suppression","Active le Multi-AZ automatiquement pour prévenir la perte de données"],
    answer:0,
    exp:"Deletion Protection empêche toute suppression de l'instance RDS via console, CLI ou API. Pour supprimer une instance protégée, il faut d'abord désactiver la protection. Recommandée pour toutes les instances de production pour éviter les suppressions accidentelles par des scripts ou des humains."
  },
  {
    id:"saa-j3-38",
    q:"Votre base RDS Aurora MySQL a un writer et 2 readers dans le même cluster. Comment router les requêtes de reporting (longues) vers les readers sans impacter le writer ?",
    choices:["Utiliser le Reader Endpoint ou créer un Custom Endpoint dédié au reporting","Utiliser le Cluster Endpoint (writer) pour tout","Créer une Read Replica séparée hors du cluster","Configurer Query Routing dans l'application"],
    answer:0,
    exp:"Aurora Custom Endpoints permettent de créer des endpoints pointant vers un sous-ensemble de Replicas. Créer un 'reporting endpoint' pointant vers le(s) reader(s) dédié(s) au reporting. Les Replicas de reporting peuvent avoir des instances plus grandes si nécessaire. Les applications utilisent l'endpoint approprié."
  },
  {
    id:"saa-j3-39",
    q:"Qu'est-ce que l'Aurora Machine Learning (Aurora ML) ?",
    choices:["Intégration native SQL pour appeler SageMaker ou Comprehend depuis des requêtes SQL Aurora","Un outil d'optimisation des requêtes par ML","Aurora Serverless avec ML pour scaler","Un service de prédiction automatique de capacité"],
    answer:0,
    exp:"Aurora ML permet d'appeler des modèles ML (Amazon SageMaker, Amazon Comprehend) directement depuis des requêtes SQL. Ex: SELECT aurora_ml.predict('model_endpoint', features) FROM table. Utile pour l'analyse sentimentale, la détection de fraude, les recommandations intégrées dans la requête SQL."
  },
  {
    id:"saa-j3-40",
    q:"Votre RDS est dans un subnet privé. Votre application Lambda dans le même VPC doit se connecter à RDS. Comment configurer la connectivité ?",
    choices:["Lambda dans le même VPC, Security Group Lambda autorisé dans le Security Group RDS","Lambda publique avec accès Internet vers RDS","VPC Endpoint pour RDS","Direct Connect entre Lambda et RDS"],
    answer:0,
    exp:"Lambda peut être configurée dans un VPC (avec subnets et Security Groups). Le SG de RDS doit autoriser le port de la DB (3306/5432) depuis le SG de Lambda. Lambda accède à RDS via l'IP privée. Attention : Lambda dans un VPC nécessite NAT Gateway pour accéder à Internet ou aux APIs AWS."
  },
  {
    id:"saa-j3-41",
    q:"Quel est le comportement de RDS lorsque le storage auto-scaling est activé et que le disque atteint 90% de capacité ?",
    choices:["RDS augmente automatiquement le stockage par incréments (10% ou 5 GiB, selon le maximum défini)","RDS envoie une alerte mais n'agit pas","RDS refuse les nouvelles écritures","RDS failover vers le standby"],
    answer:0,
    exp:"Avec Storage Auto Scaling activé, RDS augmente automatiquement le stockage quand l'utilisation dépasse un seuil (défaut: 90% ou moins de 10 GiB libres). L'augmentation est d'au moins 5 GiB ou 10% du stockage actuel. Un Maximum Storage Threshold limite le scaling automatique maximal."
  },
  {
    id:"saa-j3-42",
    q:"Quelle différence entre RDS 'Parameter Group' et 'Option Group' ?",
    choices:["Parameter Group : paramètres moteur DB (memory, connections, timeout) ; Option Group : fonctionnalités additionnelles du moteur (Oracle APEX, MySQL memcached, etc.)","Ce sont des synonymes","Option Group est pour les paramètres réseau","Parameter Group est uniquement pour les instances Multi-AZ"],
    answer:0,
    exp:"Parameter Group contient les paramètres de configuration du moteur DB (innodb_buffer_pool_size, max_connections, etc.). Option Group active des fonctionnalités additionnelles spécifiques au moteur : Oracle APEX/XMLDB, SQL Server TDE, MySQL memcached plugin. Certains options nécessitent un redémarrage."
  },
  {
    id:"saa-j3-43",
    q:"Comment partager un snapshot RDS avec un autre compte AWS ?",
    choices:["Modifier les permissions du snapshot pour y inclure l'ID du compte cible (ou le rendre public)","Exporter le snapshot vers S3 et partager le bucket S3","Copier le snapshot dans le compte cible via CLI","Les snapshots ne peuvent pas être partagés entre comptes"],
    answer:0,
    exp:"Un snapshot RDS peut être partagé avec des comptes AWS spécifiques ou rendu public. Le compte cible voit le snapshot partagé et peut le copier dans son propre compte ou restaurer directement une instance. Les snapshots chiffrés nécessitent de partager aussi la clé KMS."
  },
  {
    id:"saa-j3-44",
    q:"Qu'est-ce que l'Aurora I/O Optimized tier et dans quel cas l'utiliser ?",
    choices:["Un mode de stockage Aurora sans frais par I/O, recommandé quand le coût I/O dépasse 25% de la facture Aurora totale","Un mode haute performance pour les SSD NVMe","Un mode de stockage S3 pour Aurora","Un niveau de service garanti pour les I/O Aurora"],
    answer:0,
    exp:"Aurora I/O Optimized (disponible depuis 2023) : pas de frais par I/O read/write (inclus dans le prix de l'instance). Recommandé quand le coût des I/O Aurora dépasse ~25% du total Aurora (car le prix de l'instance est majoré). Idéal pour les workloads très write-intensive."
  },
  {
    id:"saa-j3-45",
    q:"Votre base RDS Multi-AZ subit un failover. Comment votre application Java avec JDBC peut-elle se reconnecter automatiquement sans modification de code ?",
    choices:["Utiliser l'endpoint DNS RDS (pas d'IP hardcodée), configurer le JDBC reconnect et un TTL DNS court","Hardcoder les IPs primaire et standby dans la config","Utiliser AWS SDK pour détecter le failover","Implémenter un circuit breaker dans l'application"],
    answer:0,
    exp:"L'endpoint DNS RDS pointe vers l'IP de l'instance active. Après failover, le DNS est mis à jour. L'application JDBC doit : (1) utiliser l'endpoint DNS (jamais l'IP), (2) avoir un connectTimeout et socketTimeout configurés, (3) avoir la reconnexion automatique activée. Le TTL DNS RDS est de 5 secondes."
  },
  {
    id:"saa-j3-46",
    q:"Quel type d'instance RDS propose le ratio mémoire/vCPU le plus élevé, recommandé pour les grandes bases de données ?",
    choices:["db.r-series (Memory Optimized)","db.m-series (General Purpose)","db.t-series (Burstable)","db.x-series (Extra Large)"],
    answer:0,
    exp:"Les instances db.r (db.r6g, db.r7g, etc.) sont mémoire-optimisées pour les bases de données nécessitant un grand buffer pool (MySQL InnoDB, PostgreSQL shared_buffers). Les db.m sont general purpose. Les db.t sont burstable (développement/test). Les db.x ont le plus de mémoire absolue (db.x2g)."
  },
  {
    id:"saa-j3-47",
    q:"Qu'est-ce que les 'Trusted Language Extensions (TLE)' dans Aurora PostgreSQL ?",
    choices:["Extensions PostgreSQL personnalisées exécutées dans un sandbox sécurisé, sans droits superuser","Une fonctionnalité de chiffrement des données","Un mécanisme d'audit des requêtes SQL","Des extensions préinstallées comme pgcrypto ou PostGIS"],
    answer:0,
    exp:"Trusted Language Extensions permettent aux développeurs d'écrire des extensions PostgreSQL personnalisées (en PL/pgSQL, JavaScript, etc.) dans un environnement sécurisé et sandboxé, sans nécessiter d'accès superuser au moteur. Facilitent l'ajout de fonctionnalités sans risque de sécurité."
  },
  {
    id:"saa-j3-48",
    q:"Comment Aurora Zero-ETL avec Redshift améliore-t-il l'analytique sur les données transactionnelles ?",
    choices:["Réplication quasi-temps réel d'Aurora vers Redshift sans pipeline ETL, pour l'analytique sur données fraîches","Export périodique vers S3 puis Redshift Spectrum","Aurora Query Federation vers Redshift","Aurora ML intégré avec Redshift ML"],
    answer:0,
    exp:"Aurora Zero-ETL vers Redshift réplique les données d'Aurora (MySQL ou PostgreSQL) vers Redshift en quasi-temps réel (minutes) sans construire ni maintenir de pipeline ETL personnalisé. Les données sont disponibles dans Redshift pour les analyses sans délai d'extraction et transformation manuel."
  },
  {
    id:"saa-j3-49",
    q:"Quelle option RDS permet d'exporter des snapshots vers S3 au format Parquet pour des analyses avec Athena ?",
    choices:["RDS Snapshot Export to S3","Aurora Backtrack","RDS Data API","AWS DMS vers S3"],
    answer:0,
    exp:"RDS Snapshot Export to S3 exporte les données d'un snapshot RDS ou Aurora vers S3 au format Apache Parquet. Les données exportées peuvent être analysées avec Amazon Athena, AWS Glue, et SageMaker. Utile pour des analyses ponctuelles sur des données historiques sans impact sur la production."
  },
  {
    id:"saa-j3-50",
    q:"Dans quelle situation utiliser Amazon RDS vs Amazon DynamoDB pour une nouvelle application ?",
    choices:["RDS pour les données relationnelles avec transactions ACID complexes et jointures ; DynamoDB pour les accès clé-valeur haute performance à l'échelle massive","DynamoDB pour tout car plus scalable","RDS pour tout car plus familier","Dépend uniquement du budget"],
    answer:0,
    exp:"RDS (relationnel) : schéma fixe, SQL, transactions ACID, jointures complexes, reporting. Adapté : e-commerce, ERP, CRM. DynamoDB (NoSQL) : schéma flexible, latence milliseconde garantie à n'importe quelle échelle, pas de jointures. Adapté : gaming, IoT, sessions, profils utilisateurs, catalogue de produits à haute volumétrie."
  }
];

// ─────────────────────────────────────────────────────────────
// J4 — Route 53 (50 questions)
// ─────────────────────────────────────────────────────────────
window.QDATA[4] = [
  {
    id:"saa-j4-1",
    q:"Quelle est la différence entre un enregistrement DNS Alias et un enregistrement CNAME dans Route 53 ?",
    choices:["Alias : peut pointer vers un apex de domaine (example.com), natif AWS, gratuit pour les requêtes ; CNAME : seulement pour sous-domaines, payant par requête","Ils sont identiques","CNAME peut pointer vers l'apex, Alias non","Alias est plus rapide mais payant"],
    answer:0,
    exp:"Alias : extension AWS-native, peut pointer vers un apex (example.com) ET des ressources AWS (ALB, CloudFront, S3, etc.), les requêtes sont gratuites. CNAME : standard DNS, NE PEUT PAS être utilisé sur un apex de domaine (zone apex), payant par requête, peut pointer vers n'importe quel hostname."
  },
  {
    id:"saa-j4-2",
    q:"Quelle politique de routage Route 53 envoie toutes les requêtes vers un seul endpoint AWS (ALB, EC2, etc.) sans logique de distribution ?",
    choices:["Simple routing","Failover routing","Weighted routing","Latency routing"],
    answer:0,
    exp:"Simple Routing : un seul enregistrement DNS pointe vers un seul endpoint. Pas de health checks, pas de logique de distribution. Si plusieurs valeurs sont spécifiées, Route 53 retourne toutes les IPs et le client choisit. Idéal pour les architectures simples à un seul endpoint."
  },
  {
    id:"saa-j4-3",
    q:"Avec la politique de routage Weighted de Route 53, si vous avez 3 enregistrements avec poids 10, 20 et 70, quel pourcentage de trafic le premier reçoit-il ?",
    choices:["10%","33% (répartition uniforme)","50%","100%"],
    answer:0,
    exp:"Route 53 Weighted routing : le trafic est réparti proportionnellement aux poids. Total = 10+20+70 = 100. Enregistrement 1 reçoit 10/100 = 10%, enregistrement 2 reçoit 20%, enregistrement 3 reçoit 70%. Les poids peuvent être n'importe quelle valeur 0-255 et ne doivent pas totaliser 100."
  },
  {
    id:"saa-j4-4",
    q:"Quelle politique Route 53 route les utilisateurs vers la région AWS avec la plus faible latence réseau mesurée depuis leur localisation ?",
    choices:["Latency-based routing","Geolocation routing","Proximity routing (Traffic Flow)","Simple routing"],
    answer:0,
    exp:"Latency-based routing : Route 53 retourne l'enregistrement pointant vers la région AWS avec la plus faible latence réseau mesurée entre l'utilisateur et les régions AWS configurées. Basé sur des mesures de latence AWS, pas nécessairement la région géographiquement la plus proche."
  },
  {
    id:"saa-j4-5",
    q:"Quelle politique Route 53 route les utilisateurs vers des endpoints spécifiques selon leur continent, pays ou état US ?",
    choices:["Geolocation routing","Latency-based routing","Proximity routing","IP-based routing"],
    answer:0,
    exp:"Geolocation routing : Route 53 utilise la localisation géographique de l'utilisateur (détectée par l'IP) pour router vers l'endpoint configuré pour ce pays/continent. Un enregistrement 'Default' est requis pour les localisations non configurées. Différent de Latency : même si un autre endpoint est plus proche en latence, la géolocalisation primordialise la règle géo."
  },
  {
    id:"saa-j4-6",
    q:"Votre application doit respecter des lois de conformité sur la souveraineté des données (RGPD : les utilisateurs européens doivent utiliser des serveurs en Europe). Quelle politique Route 53 utiliser ?",
    choices:["Geolocation routing","Latency-based routing","Failover routing","Weighted routing"],
    answer:0,
    exp:"Geolocation routing garantit que les utilisateurs dans une région géographique spécifique (ex: Europe) sont routés vers un endpoint spécifique (serveurs EU), quelle que soit la latence. Conforme aux exigences de localisation des données RGPD."
  },
  {
    id:"saa-j4-7",
    q:"Quelle politique Route 53 route le trafic vers un endpoint primaire, et bascule vers un endpoint secondaire uniquement si le primaire est défaillant ?",
    choices:["Failover routing","Latency routing","Weighted routing","Simple routing"],
    answer:0,
    exp:"Failover routing associe un enregistrement 'Primary' et un enregistrement 'Secondary'. Route 53 surveille la santé du primaire via un health check. Si le primaire est unhealthy, Route 53 retourne l'enregistrement secondaire. Fournit un Active-Passive DR automatique."
  },
  {
    id:"saa-j4-8",
    q:"Route 53 Multivalue Answer routing peut retourner jusqu'à combien d'enregistrements sains par requête DNS ?",
    choices:["8 enregistrements sains","10 enregistrements sains","Tous les enregistrements configurés","1 enregistrement sain uniquement"],
    answer:0,
    exp:"Multivalue Answer routing retourne jusqu'à 8 enregistrements sains aléatoirement sélectionnés parmi tous les enregistrements configurés. Différent de Simple routing (qui peut retourner plusieurs valeurs mais sans health checks). Multivalue est 'NOT a substitute for a load balancer' selon AWS."
  },
  {
    id:"saa-j4-9",
    q:"Qu'est-ce qu'un Route 53 Health Check et comment surveille-t-il un endpoint ?",
    choices:["Route 53 envoie des requêtes HTTP/HTTPS/TCP à l'endpoint depuis plusieurs localisations mondiales et le marque unhealthy si > 18% des checkers échouent","Route 53 utilise CloudWatch pour vérifier les métriques","Route 53 attend que les applications signalent leur état","Route 53 surveille uniquement le DNS, pas l'application"],
    answer:0,
    exp:"Route 53 Health Checks : des agents dans le monde entier envoient des requêtes HTTP/HTTPS/TCP à l'endpoint. Si > 18% des agents signalent un échec, l'endpoint est marqué unhealthy. Les health checks peuvent aussi surveiller une CloudWatch Alarm (pour les resources privées non accessibles depuis Internet)."
  },
  {
    id:"saa-j4-10",
    q:"Comment surveiller la santé d'une instance RDS (privée, sans accès Internet) avec Route 53 Health Checks ?",
    choices:["Créer une CloudWatch Alarm sur les métriques RDS, configurer le Health Check Route 53 pour surveiller cette Alarm","Route 53 ne peut pas surveiller les ressources privées","Exposer l'endpoint RDS sur Internet temporairement","Utiliser un Elastic IP pour rendre RDS accessible"],
    answer:0,
    exp:"Pour les ressources dans des VPCs privés (RDS, instances internes) : créer une CloudWatch Alarm basée sur les métriques souhaitées (CPU, connexions, etc.), puis configurer le Route 53 Health Check pour surveiller l'état de cette Alarm. Si l'Alarm passe en ALARM, le health check échoue."
  },
  {
    id:"saa-j4-11",
    q:"Qu'est-ce qu'un 'Calculated Health Check' dans Route 53 ?",
    choices:["Un health check parent qui combine le résultat de plusieurs health checks enfants (AND/OR logic)","Un health check basé sur une formule mathématique","Un health check qui calcule la latence","Un health check qui surveille un CloudFront distribution"],
    answer:0,
    exp:"Un Calculated Health Check (ou Health Check Combiné) agrège jusqu'à 256 health checks enfants avec une logique configurable (par exemple : healthy si au moins 3/5 enfants sont sains). Utile pour définir la santé globale d'un service multi-composant."
  },
  {
    id:"saa-j4-12",
    q:"Votre domaine example.com est hébergé sur GoDaddy. Vous souhaitez utiliser Route 53 pour la gestion DNS. Quelle est la procédure ?",
    choices:["Créer une Hosted Zone Route 53 → noter les Name Servers → mettre à jour les NS dans GoDaddy","Transférer le domaine vers AWS Route 53 obligatoirement","Créer une Hosted Zone et pointer uniquement les sous-domaines vers Route 53","Impossible si le domaine est externe à AWS"],
    answer:0,
    exp:"Route 53 peut gérer le DNS pour n'importe quel domaine, même enregistré ailleurs. (1) Créer une Public Hosted Zone dans Route 53 pour example.com. (2) Route 53 fournit 4 Name Servers. (3) Dans GoDaddy (ou autre registrar), remplacer les NS par les 4 NS Route 53. Les requêtes DNS passent par Route 53."
  },
  {
    id:"saa-j4-13",
    q:"Qu'est-ce que le TTL (Time to Live) DNS et quel impact a-t-il sur la migration d'un endpoint ?",
    choices:["TTL = durée de mise en cache de l'enregistrement par les resolvers. Un TTL élevé réduit les coûts mais ralentit la propagation des changements DNS","TTL = durée de vie de la requête DNS","TTL élevé accélère la résolution DNS car les caches sont plus performants","TTL ne s'applique pas aux enregistrements Alias Route 53"],
    answer:0,
    exp:"TTL = durée pendant laquelle les DNS resolvers mettent en cache un enregistrement. TTL bas (60s) : changements propagés rapidement mais plus de requêtes DNS (coût). TTL haut (86400s=1j) : moins de requêtes DNS mais changements lents à propager. Avant une migration : réduire le TTL 48h avant pour accélérer le basculement."
  },
  {
    id:"saa-j4-14",
    q:"Quelle politique Route 53 permet de créer une architecture Active-Active multi-région avec basculement automatique ?",
    choices:["Latency-based routing avec Health Checks sur chaque région","Failover routing (seulement Active-Passive)","Simple routing","Weighted routing avec poids égaux"],
    answer:0,
    exp:"Latency-based routing avec Health Checks : les deux régions reçoivent du trafic (Active-Active). Si une région est unhealthy, Route 53 cesse de router vers elle. Weighted routing avec poids égaux est aussi Active-Active mais sans basculement automatique sur panne (il faut combiner avec health checks)."
  },
  {
    id:"saa-j4-15",
    q:"Route 53 Resolver fournit quelles fonctionnalités dans un VPC ?",
    choices:["DNS resolver interne au VPC à l'adresse VPC+2 (169.254.169.253), avec Inbound/Outbound Endpoints pour le DNS hybride (on-premises)","Uniquement la résolution DNS publique","Uniquement la résolution DNS pour les services AWS","Ne fonctionne que si un DNS custom est configuré"],
    answer:0,
    exp:"Route 53 Resolver : (1) DNS Server intégré au VPC (adresse VPC+2 ou 169.254.169.253) qui résout les noms publics et privés. (2) Inbound Endpoints : permettent aux serveurs on-premises d'interroger le DNS privé du VPC via Direct Connect/VPN. (3) Outbound Endpoints : permettent aux instances VPC de résoudre des noms on-premises."
  },
  {
    id:"saa-j4-16",
    q:"Votre enterprise a un DNS on-premises (Active Directory) avec le domaine corp.example.com. Les instances EC2 dans le VPC doivent résoudre ce domaine. Quelle configuration Route 53 utiliser ?",
    choices:["Route 53 Resolver Outbound Endpoint + Forwarding Rule vers les DNS servers on-premises","Route 53 Resolver Inbound Endpoint","Créer une Private Hosted Zone pour corp.example.com","Modifier le DHCP Options Set du VPC pour pointer vers le DNS on-premises"],
    answer:0,
    exp:"Route 53 Resolver Outbound Endpoint + Forwarding Rules : les instances EC2 interrogent Route 53 Resolver (VPC+2). Pour corp.example.com, une Forwarding Rule dit à Route 53 Resolver de transmettre les requêtes aux DNS on-premises via l'Outbound Endpoint (Direct Connect/VPN). Les réponses reviennent via le même chemin."
  },
  {
    id:"saa-j4-17",
    q:"Qu'est-ce qu'une 'Private Hosted Zone' Route 53 et comment diffère-t-elle d'une 'Public Hosted Zone' ?",
    choices:["Private : accessible uniquement depuis des VPCs associés (noms DNS privés) ; Public : accessible depuis Internet (noms DNS publics)","Private : pour les ressources privées, Public : pour les ressources publiques","Private est chiffrée, Public ne l'est pas","Elles sont identiques en fonctionnalité"],
    answer:0,
    exp:"Public Hosted Zone : héberge des enregistrements DNS résolus depuis Internet (et les VPCs). Private Hosted Zone : héberge des enregistrements DNS résolus UNIQUEMENT depuis des VPCs explicitement associés. Un VPC peut associer plusieurs Private Hosted Zones. Utile pour les noms DNS internes (db.internal, api.prod)."
  },
  {
    id:"saa-j4-18",
    q:"Quelle politique Route 53 utilise la géolocalisation pour prioriser les endpoints proches (bias), pas uniquement la géographie exacte ?",
    choices:["Geoproximity routing (Traffic Flow uniquement)","Geolocation routing","Latency routing","IP-based routing"],
    answer:0,
    exp:"Geoproximity routing (disponible dans Route 53 Traffic Flow) route le trafic vers les endpoints géographiquement proches avec un 'bias' ajustable (-99 à +99) pour étendre/rétrécir la zone d'influence d'un endpoint. Différent de Geolocation (par pays/continent fixe)."
  },
  {
    id:"saa-j4-19",
    q:"Route 53 IP-Based routing permet de router selon quel critère ?",
    choices:["CIDR de l'adresse IP du client (pour les FAIs ou réseaux spécifiques)","Pays de l'adresse IP (comme Geolocation)","Région AWS de l'adresse IP","Type d'adresse IP (IPv4 ou IPv6)"],
    answer:0,
    exp:"IP-Based routing (disponible depuis 2022) : définir des listes de CIDRs (plages IP) et associer chaque liste à un endpoint. Ex: router les IPs d'un FAI spécifique vers un certain datacenter. Plus précis que Geolocation (au niveau réseau/AS) mais nécessite de maintenir les listes de CIDRs."
  },
  {
    id:"saa-j4-20",
    q:"Votre architecture blue/green utilise Route 53 Weighted routing (Blue=100%, Green=0%). Comment effectuer un basculement progressif vers Green ?",
    choices:["Réduire progressivement le poids de Blue et augmenter celui de Green (ex: 90/10, 70/30, 50/50, 0/100)","Modifier uniquement l'enregistrement Blue pour pointer vers Green","Utiliser un Failover routing à la place","Changer le TTL et attendre la propagation"],
    answer:0,
    exp:"Weighted routing permet des déploiements canary/blue-green progressifs. En ajustant les poids : 90(Blue)/10(Green) → 70/30 → 50/50 → 0/100. À chaque étape, monitorer les métriques de Green. Si un problème survient, remettre Blue à 100%. Les applications doivent être sans état ou les deux versions doivent être compatibles."
  },
  {
    id:"saa-j4-21",
    q:"Route 53 peut-il être utilisé pour le routage DNS interne dans un VPC sans accès Internet ?",
    choices:["Oui, avec des Private Hosted Zones et l'activation de enableDnsHostnames + enableDnsSupport sur le VPC","Non, Route 53 nécessite Internet","Oui, mais seulement avec un NAT Gateway","Non, utiliser un DNS server EC2 interne"],
    answer:0,
    exp:"Pour utiliser Route 53 Private Hosted Zones dans un VPC : (1) Activer 'enableDnsHostnames' et 'enableDnsSupport' sur le VPC, (2) Créer une Private Hosted Zone et l'associer au VPC. Les instances dans le VPC peuvent résoudre les noms de la PHZ via le Resolver DNS intégré (VPC+2)."
  },
  {
    id:"saa-j4-22",
    q:"Votre application distribue du contenu depuis plusieurs régions. Quelle combinaison Route 53 + CDN offre la meilleure performance globale pour les utilisateurs finaux ?",
    choices:["Route 53 Latency routing → CloudFront distributions dans chaque région (ou Global Accelerator)","Route 53 Simple routing → un seul CloudFront","Route 53 Geolocation → régions par continent","Route 53 Failover → CloudFront principal et secondaire"],
    answer:0,
    exp:"Route 53 Latency routing distribue les utilisateurs vers le CloudFront/région le plus rapide. CloudFront met en cache le contenu aux edge locations. Cette combinaison offre une double optimisation : Latency routing pour le choix de région optimale + CloudFront pour la mise en cache aux edges."
  },
  {
    id:"saa-j4-23",
    q:"Qu'est-ce que la fonctionnalité DNSSEC de Route 53 ?",
    choices:["Signature cryptographique des enregistrements DNS pour prévenir le DNS spoofing/cache poisoning","Chiffrement du trafic DNS","Authentification des requêtes DNS","Prévention des attaques DDoS sur le DNS"],
    answer:0,
    exp:"DNSSEC (DNS Security Extensions) : Route 53 signe cryptographiquement les enregistrements DNS avec une clé privée. Les resolvers qui supportent DNSSEC peuvent vérifier l'authenticité des réponses DNS via la clé publique. Prévient les attaques de DNS cache poisoning et spoofing."
  },
  {
    id:"saa-j4-24",
    q:"Un enregistrement Route 53 A pointe vers 203.0.113.1. Cette IP n'est plus valide. Votre TTL est de 300s. Après combien de temps les clients reçoivent-ils la bonne IP après votre correction ?",
    choices:["Jusqu'à 300 secondes (selon l'expiration du cache DNS des clients)","Instantanément","24 heures","Dépend du FAI du client"],
    answer:0,
    exp:"Après modification de l'enregistrement Route 53, les clients qui ont l'ancien enregistrement en cache continueront à utiliser l'ancienne IP jusqu'à l'expiration de leur TTL (300s = 5 minutes dans cet exemple). Les nouveaux clients qui interrogent le DNS reçoivent immédiatement la nouvelle IP."
  },
  {
    id:"saa-j4-25",
    q:"Route 53 Resolver DNS Firewall permet de faire quoi ?",
    choices:["Filtrer les requêtes DNS sortantes pour bloquer les domaines malveillants ou non autorisés","Chiffrer les requêtes DNS","Prioriser certaines requêtes DNS","Analyser le contenu des réponses DNS"],
    answer:0,
    exp:"Route 53 Resolver DNS Firewall permet de créer des règles qui filtrent les requêtes DNS des instances VPC : bloquer des domaines malveillants (liste gérée par AWS ou custom), autoriser uniquement des domaines approuvés (allowlist), ou logger les tentatives d'accès à des domaines suspects."
  },
  {
    id:"saa-j4-26",
    q:"Quelle est la différence entre les requêtes de type 'A' et 'AAAA' dans Route 53 ?",
    choices:["A : adresse IPv4 (32 bits) ; AAAA : adresse IPv6 (128 bits)","A : alias record ; AAAA : standard record","A : pour les applications, AAAA : pour les APIs","A et AAAA sont identiques dans Route 53"],
    answer:0,
    exp:"Enregistrement A : mappe un hostname vers une adresse IPv4 (ex: 203.0.113.1). Enregistrement AAAA : mappe un hostname vers une adresse IPv6 (ex: 2001:0db8:85a3::8a2e:0370:7334). Alias A : mappe vers une ressource AWS en IPv4. Alias AAAA : mappe vers une ressource AWS en IPv6."
  },
  {
    id:"saa-j4-27",
    q:"Votre Hosted Zone contient l'enregistrement : www.example.com → CNAME → app.example.com → A → 1.2.3.4. Combien de requêtes DNS supplémentaires le client doit-il faire pour résoudre www.example.com ?",
    choices:["2 requêtes (CNAME resolution + A record resolution)","1 requête (CNAME résolu directement)","0 requête supplémentaire (Route 53 retourne l'IP directement)","Dépend du TTL"],
    answer:0,
    exp:"Un CNAME nécessite une résolution supplémentaire : (1) Résoudre www.example.com → CNAME app.example.com, (2) Résoudre app.example.com → A 1.2.3.4. C'est pourquoi les enregistrements Alias sont préférés : Route 53 résout directement l'Alias et retourne l'IP finale en une seule réponse DNS."
  },
  {
    id:"saa-j4-28",
    q:"Dans Route 53 Traffic Flow, qu'est-ce qu'un 'Traffic Policy' ?",
    choices:["Un diagramme visuel de flux de routage combinant plusieurs politiques de routage complexes, versionnables et réutilisables","Une simple règle de routage basique","Un mécanisme de limitation du trafic (throttling)","Une politique IAM pour Route 53"],
    answer:0,
    exp:"Route 53 Traffic Flow : interface graphique pour créer des politiques de routage complexes (combinaisons de Latency + Failover + Geoproximity, etc.). Les Traffic Policies sont versionnées et réutilisables pour plusieurs enregistrements. Idéal pour les architectures multi-régions complexes."
  },
  {
    id:"saa-j4-29",
    q:"Votre application a des endpoints dans us-east-1 (poids 70) et eu-west-1 (poids 30) avec Weighted routing et health checks. L'endpoint us-east-1 devient unhealthy. Que se passe-t-il ?",
    choices:["Route 53 envoie 100% du trafic vers eu-west-1 tant que us-east-1 est unhealthy","Route 53 envoie toujours 70% vers us-east-1 même s'il est unhealthy","Route 53 désactive tous les enregistrements et retourne NXDOMAIN","Route 53 envoie 50% vers chaque endpoint"],
    answer:0,
    exp:"Lorsque des health checks sont associés aux enregistrements Weighted, Route 53 exclut les enregistrements unhealthy et redistribue le trafic proportionnellement entre les enregistrements sains. Si seul eu-west-1 est sain, il reçoit 100% du trafic jusqu'à la récupération de us-east-1."
  },
  {
    id:"saa-j4-30",
    q:"Route 53 peut enregistrer et gérer des domaines. Quel TLD (Top Level Domain) peut-il enregistrer ?",
    choices:["Plus de 300 TLDs génériques (.com, .org, .net, .io, .cloud, etc.) et de nombreux TLDs géographiques (.co.uk, .de, etc.)","Uniquement .com et .net","Uniquement les domaines .aws et .amazon","Tous les TLDs dans le monde"],
    answer:0,
    exp:"Route 53 est un registrar accrédité ICANN et supporte plus de 300 TLDs. Certains TLDs géographiques (ccTLDs) ne sont pas disponibles. Pour les TLDs non supportés, utiliser un registrar externe et configurer Route 53 comme DNS. Les transferts de domaines sont aussi possibles."
  },
  {
    id:"saa-j4-31",
    q:"Quelle est la SLA de disponibilité de Route 53 selon AWS ?",
    choices:["100% (SLA garanti à 100% de disponibilité)","99.99%","99.9%","99.95%"],
    answer:0,
    exp:"Amazon Route 53 a une SLA de 100% de disponibilité pour le service DNS. AWS s'engage à une disponibilité totale du service de résolution DNS. En cas d'indisponibilité, AWS accorde des crédits de service. Route 53 utilise une infrastructure Anycast distribuée mondialement pour garantir cette SLA."
  },
  {
    id:"saa-j4-32",
    q:"Votre application doit router différemment les utilisateurs selon leur type d'appareil (mobile vs desktop) basé sur le User-Agent. Route 53 peut-il faire ce routage ?",
    choices:["Non, Route 53 route uniquement basé sur DNS (IP, géolocalisation, latence) ; utiliser CloudFront Functions ou Lambda@Edge pour le routing basé sur User-Agent","Oui, avec Geolocation routing","Oui, avec un Custom Health Check sur User-Agent","Oui, avec IP-Based routing"],
    answer:0,
    exp:"Route 53 est un service DNS pur et ne peut pas inspecter les en-têtes HTTP (User-Agent). Pour le routage basé sur les caractéristiques de la requête HTTP, utiliser CloudFront avec CloudFront Functions (légères) ou Lambda@Edge (plus puissantes) qui peuvent inspecter et modifier les requêtes."
  },
  {
    id:"saa-j4-33",
    q:"Comment Route 53 détermine-t-il la localisation géographique d'un client pour le Geolocation routing ?",
    choices:["Par l'adresse IP du DNS resolver récursif du client (pas directement l'IP du client)","Par l'adresse IP du client directement","Par le langue du navigateur","Par un cookie géographique"],
    answer:0,
    exp:"Route 53 utilise l'adresse IP du DNS resolver récursif (généralement le DNS du FAI du client) pour déterminer la géolocalisation. L'IP du client final n'est pas visible par Route 53. Cela peut créer des inexactitudes si les clients utilisent des DNS publics (8.8.8.8 de Google = US)."
  },
  {
    id:"saa-j4-34",
    q:"Qu'est-ce qu'un 'Delegation Set' dans Route 53 et pourquoi l'utiliser ?",
    choices:["Un ensemble fixe de 4 Name Servers réutilisable pour plusieurs Hosted Zones (facilite la gestion d'un grand nombre de domaines avec les mêmes NS)","Les enregistrements NS d'une Hosted Zone","Un groupe de Health Checks","Un ensemble de règles de routage"],
    answer:0,
    exp:"Un Delegation Set (ou Reusable Delegation Set) permet d'associer un même ensemble de 4 Name Servers à plusieurs Hosted Zones. Utile pour : (1) les entreprises gérant beaucoup de domaines (mêmes NS chez tous les registrars), (2) les registrars/hébergeurs construisant sur Route 53 pour leurs clients."
  },
  {
    id:"saa-j4-35",
    q:"Votre domaine example.com a un SOA record. À quoi sert le SOA (Start of Authority) record ?",
    choices:["Contient les informations d'administration de la zone DNS (serveur DNS primaire, email du contact, TTLs par défaut, numéro de série)","Pointe vers les serveurs de messagerie","Délègue une sous-zone DNS","Définit les health checks de la zone"],
    answer:0,
    exp:"Le SOA record contient : le nom du Name Server primaire, l'email de l'administrateur DNS (@ remplacé par .), le numéro de série (incrémenter lors des mises à jour pour la réplication), refresh/retry/expire intervals pour les DNS secondaires, et le TTL minimum. Route 53 crée automatiquement le SOA."
  },
  {
    id:"saa-j4-36",
    q:"Comment configurer un sous-domaine (api.example.com) pour être géré dans une Hosted Zone séparée de example.com dans Route 53 ?",
    choices:["Créer une Hosted Zone pour api.example.com + ajouter un enregistrement NS dans example.com pointant vers les NS de la nouvelle zone (délégation)","Créer uniquement un enregistrement A dans la Hosted Zone example.com","Utiliser un CNAME dans example.com","Ce n'est pas possible avec Route 53"],
    answer:0,
    exp:"La délégation de sous-domaine : (1) Créer une Hosted Zone Route 53 pour api.example.com avec ses 4 NS. (2) Dans la Hosted Zone example.com, créer un enregistrement NS pour api.example.com pointant vers les 4 NS de la nouvelle zone. Les requêtes pour api.example.com sont déléguées."
  },
  {
    id:"saa-j4-37",
    q:"Votre application utilise un ALB. L'URL de l'ALB est my-alb-123456.us-east-1.elb.amazonaws.com. Vous voulez que les utilisateurs accèdent via www.example.com. Quelle est la configuration Route 53 correcte ?",
    choices:["Enregistrement Alias A pour www.example.com → my-alb-123456.us-east-1.elb.amazonaws.com","Enregistrement CNAME pour www.example.com → my-alb-123456.us-east-1.elb.amazonaws.com","Enregistrement A avec l'IP de l'ALB","Enregistrement CNAME pour example.com (apex)"],
    answer:0,
    exp:"Pour un sous-domaine (www) vers un ALB : un Alias A ou CNAME fonctionnent. Alias est préféré car : (1) gratuit pour les requêtes Route 53, (2) se met à jour automatiquement si l'IP de l'ALB change. Pour l'apex (example.com), seul l'Alias fonctionne (pas le CNAME)."
  },
  {
    id:"saa-j4-38",
    q:"Qu'est-ce que Route 53 Application Recovery Controller (ARC) ?",
    choices:["Un service qui aide à orchestrer le basculement entre régions de manière contrôlée, avec des routing controls et des safety rules","Un service de monitoring des applications","Un load balancer multi-régions","Un DNS resolver avancé"],
    answer:0,
    exp:"Route 53 ARC permet une gestion fine du failover multi-régions : (1) Routing Controls : interrupteurs on/off pour router le trafic vers/depuis des cellules (régions). (2) Safety Rules : règles qui empêchent des basculements mal configurés (ex: au moins 1 région doit être active). Idéal pour les architectures critiques."
  },
  {
    id:"saa-j4-39",
    q:"Votre Hosted Zone Route 53 a un enregistrement A pour db.internal.example.com → 10.0.1.5 (IP privée). Cette Hosted Zone est-elle publique ou privée, et pourquoi ?",
    choices:["Privée, car les IPs privées ne sont pas routables sur Internet et la zone doit être associée à un VPC","Publique, les enregistrements A avec IPs privées sont valides","Les deux peuvent contenir des IPs privées","Dépend de la région AWS"],
    answer:0,
    exp:"Un enregistrement avec une IP privée (RFC 1918 : 10.x, 172.16-31.x, 192.168.x) dans une Public Hosted Zone serait inutile car les clients Internet ne peuvent pas atteindre ces IPs. Ces enregistrements doivent être dans une Private Hosted Zone associée aux VPCs où les ressources sont hébergées."
  },
  {
    id:"saa-j4-40",
    q:"Quel est le coût de création d'une Hosted Zone Route 53 et quel est le modèle de facturation des requêtes DNS ?",
    choices:["0,50$/mois par zone + 0,40$/million de requêtes (premiers 1 milliard) ; requêtes vers Alias AWS resources gratuites","0,10$ par requête DNS","Forfait illimité mensuel","Gratuit pour les ressources AWS uniquement"],
    answer:0,
    exp:"Route 53 facturation : 0,50$/mois par Hosted Zone (premiere 25 zones à 0,50$, au-delà 0,10$). Requêtes : 0,40$/million (premiers milliard), 0,20$/million au-delà. Les requêtes vers des enregistrements Alias pointant vers des ressources AWS (ALB, CloudFront, S3, etc.) sont gratuites."
  },
  {
    id:"saa-j4-41",
    q:"Votre application doit retourner des résultats DNS différents selon que la requête provient d'un VPC spécifique ou d'Internet. Comment configurer Route 53 ?",
    choices:["Créer une Private Hosted Zone (pour le VPC) et une Public Hosted Zone (pour Internet) avec le même nom de domaine et des valeurs différentes : Route 53 retourne la réponse de la PHZ aux VPCs associés","Une seule Hosted Zone avec deux enregistrements","Utiliser des Latency policies pour discriminer entre VPC et Internet","Ce n'est pas possible"],
    answer:0,
    exp:"'Split-view DNS' : deux Hosted Zones avec le même nom de domaine — une Public (Internet) et une Private (VPC associé). Route 53 retourne les enregistrements de la PHZ aux instances du VPC, et les enregistrements de la zone publique aux clients Internet. Les deux peuvent avoir des valeurs différentes pour le même nom."
  },
  {
    id:"saa-j4-42",
    q:"Comment un Health Check Route 53 peut-il surveiller une application derrière un ALB configuré pour refuser les requêtes sans un header spécifique ?",
    choices:["Configurer les Health Checks Route 53 pour inclure un header personnalisé dans la requête HTTP","Les Health Checks Route 53 ne supportent pas les headers personnalisés","Utiliser CloudWatch Alarms à la place","Ce n'est pas possible"],
    answer:2,
    exp:"Les Route 53 Health Checks standard ne supportent pas l'ajout de headers HTTP personnalisés dans les requêtes de vérification. Solution alternative : configurer une CloudWatch Alarm basée sur les métriques de l'ALB (HealthyHostCount, HTTPCode_ELB_5XX, etc.) et configurer le Health Check Route 53 pour surveiller cette Alarm."
  },
  {
    id:"saa-j4-43",
    q:"Votre architecture a des endpoints dans 3 régions. Avec Failover routing Route 53, combien d'endpoints 'Primary' peut-on configurer ?",
    choices:["Un seul Primary (puis un Secondary) ; pour 3+ régions, utiliser Latency ou Weighted avec Health Checks","3 Primary sont possibles","Autant que souhaité","Dépend du nombre de Hosted Zones"],
    answer:0,
    exp:"Failover routing Route 53 est strictement binaire : un enregistrement Primary et un enregistrement Secondary. Pour distribuer le trafic entre 3+ régions avec basculement, utiliser Latency-based routing (distribue vers la région la plus rapide, exclut automatiquement les régions unhealthy) ou Weighted routing avec health checks."
  },
  {
    id:"saa-j4-44",
    q:"Qu'est-ce que le 'resolver query logging' Route 53 et à quoi sert-il ?",
    choices:["Journalisation de toutes les requêtes DNS faites depuis des VPCs vers CloudWatch Logs ou S3, utile pour l'audit de sécurité et le troubleshooting","Journalisation des modifications de la Hosted Zone","Journalisation des health checks","Journalisation des appels API Route 53 (aussi disponible via CloudTrail)"],
    answer:0,
    exp:"Route 53 Resolver Query Logging enregistre toutes les requêtes DNS faites depuis les instances VPC, y compris la requête, le type, la réponse et l'IP source. Utile pour : (1) audit de sécurité (détection d'exfiltration DNS, domaines malveillants), (2) troubleshooting de résolution DNS, (3) analyse de patterns de trafic."
  },
  {
    id:"saa-j4-45",
    q:"Quel enregistrement DNS utiliser pour pointer un nom de domaine vers un serveur de messagerie (Mail Exchanger) ?",
    choices:["MX record (Mail Exchange) avec une priorité","A record vers le serveur mail","CNAME vers le serveur mail","TXT record avec l'adresse mail"],
    answer:0,
    exp:"MX record : spécifie le(s) serveur(s) de messagerie pour un domaine avec une priorité (nombre plus bas = priorité plus haute). Ex: 10 mail1.example.com, 20 mail2.example.com. Les serveurs SMTP utilisent les MX records pour savoir où livrer les emails pour ce domaine. Route 53 supporte les MX records."
  },
  {
    id:"saa-j4-46",
    q:"Votre Geolocation routing Route 53 a des enregistrements pour 'Europe' et 'Amérique du Nord'. Un utilisateur du Japon fait une requête. Que reçoit-il ?",
    choices:["L'enregistrement 'Default' si configuré, sinon NODATA/NXDOMAIN","L'enregistrement 'Europe' (le plus proche géographiquement)","L'enregistrement 'Amérique du Nord' (le moins peuplé)","Une erreur DNS"],
    answer:0,
    exp:"Avec Geolocation routing, un enregistrement 'Default' est FORTEMENT recommandé pour gérer les localisations non explicitement configurées. Sans Default, les utilisateurs dans des localisations non configurées reçoivent NODATA. L'utilisateur du Japon (non couvert par Europe ou Amérique du Nord) utiliserait le Default."
  },
  {
    id:"saa-j4-47",
    q:"Quelle différence entre les enregistrements SPF et DKIM pour la messagerie email, stockés dans Route 53 ?",
    choices:["SPF (TXT record) : liste les IPs autorisées à envoyer des emails pour le domaine ; DKIM (TXT record) : clé publique pour vérifier la signature cryptographique des emails","SPF est pour la réception, DKIM pour l'envoi","SPF et DKIM sont identiques","DKIM est un type d'enregistrement Route 53 spécifique"],
    answer:0,
    exp:"SPF (Sender Policy Framework) : TXT record listant les serveurs/IPs autorisés à envoyer des emails au nom du domaine. Prévient le spoofing. DKIM (DomainKeys Identified Mail) : TXT record contenant la clé publique RSA pour vérifier la signature cryptographique ajoutée par le serveur d'envoi. Tous deux sont des TXT records dans Route 53."
  },
  {
    id:"saa-j4-48",
    q:"Votre application en us-east-1 et eu-west-1 utilise Latency routing. Un utilisateur de Bangalore (Inde) obtient systématiquement us-east-1 malgré une latence similaire. Pourquoi ?",
    choices:["Route 53 se base sur la latence mesurée par AWS depuis ses PoPs vers ses régions, pas forcément la latence réelle de l'utilisateur final","Route 53 utilise toujours la région la plus ancienne par défaut","us-east-1 a toujours une meilleure SLA","Bangalore est dans la région us-east-1 selon la géolocalisation"],
    answer:0,
    exp:"Route 53 Latency routing est basé sur des mesures AWS de latence entre ses PoPs de résolution DNS et les régions AWS, pas sur la latence réelle de l'utilisateur vers l'application. Ces mesures peuvent ne pas correspondre à la latence réelle de l'utilisateur. Pour la latence utilisateur réelle, ajouter des régions AP (ap-south-1 Mumbai)."
  },
  {
    id:"saa-j4-49",
    q:"Route 53 Resolver Endpoints nécessitent des sous-réseaux dans plusieurs AZ. Pourquoi ?",
    choices:["Haute disponibilité : chaque endpoint a des ENIs dans plusieurs AZ pour éviter les SPOFs et tolérer une panne d'AZ","Meilleure performance de résolution DNS","Exigence réglementaire AWS","Pour le load balancing des requêtes DNS"],
    answer:0,
    exp:"Les Route 53 Resolver Endpoints créent des ENIs (Elastic Network Interfaces) dans les subnets spécifiés. En créant des ENIs dans plusieurs AZ, l'endpoint DNS reste disponible même si une AZ est indisponible. AWS recommande au minimum 2 AZ pour chaque endpoint. Chaque ENI a sa propre adresse IP pour les forwarding rules."
  },
  {
    id:"saa-j4-50",
    q:"Votre organisation utilise AWS Organizations. Comment partager des Hosted Zones Route 53 entre les comptes de l'organisation ?",
    choices:["Associer une Private Hosted Zone à des VPCs dans d'autres comptes (via CLI/SDK, puis accepter l'association dans l'autre compte)","Dupliquer la Hosted Zone dans chaque compte","Utiliser Resource Access Manager (RAM) pour partager les Hosted Zones","Les Hosted Zones ne peuvent pas être partagées entre comptes"],
    answer:0,
    exp:"Pour partager une Private Hosted Zone entre comptes : (1) Depuis le compte propriétaire, créer une 'Hosted Zone Association Authorization' pour le VPC de l'autre compte. (2) Dans l'autre compte, accepter l'association. La PHZ est alors accessible depuis les VPCs de tous les comptes associés. Pour les PHZs centralisées DNS dans AWS Organizations."
  }
];

// ─────────────────────────────────────────────────────────────
// J5 — S3 Résilience (50 questions)
// ─────────────────────────────────────────────────────────────
window.QDATA[5] = [
  {
    id:"saa-j5-1",
    q:"Quelle est la durabilité de stockage promise par Amazon S3 Standard ?",
    choices:["99.999999999% (11 nines) de durabilité","99.99% de durabilité","99.9% de durabilité","100% de durabilité"],
    answer:0,
    exp:"Amazon S3 Standard offre 99.999999999% (11 nines) de durabilité des objets sur une année donnée. Cela signifie que si vous stockez 10 millions d'objets, vous pouvez vous attendre à perdre en moyenne 1 objet tous les 10 000 ans. Cette durabilité est obtenue par la réplication automatique sur au moins 3 AZ."
  },
  {
    id:"saa-j5-2",
    q:"Quelle est la disponibilité (availability) de S3 Standard versus S3 Standard-IA ?",
    choices:["S3 Standard : 99.99% ; S3 Standard-IA : 99.9%","S3 Standard : 99.9% ; S3 Standard-IA : 99.99%","Les deux ont 99.99% de disponibilité","Les deux ont 99.9% de disponibilité"],
    answer:0,
    exp:"S3 Standard : 99.99% de disponibilité. S3 Standard-IA (Infrequent Access) : 99.9% de disponibilité. Les deux ont la même durabilité (11 nines). La différence : Standard-IA est moins cher pour le stockage mais facture des frais de retrieval et a une disponibilité légèrement inférieure."
  },
  {
    id:"saa-j5-3",
    q:"Comment S3 Cross-Region Replication (CRR) améliore-t-il la résilience d'une application ?",
    choices:["Réplique automatiquement les objets vers un bucket dans une autre région AWS, permettant la DR et la réduction de latence pour les utilisateurs régionaux","Réplique les objets entre AZ dans la même région","Crée des copies locales pour améliorer les performances de lecture","Synchronise les buckets S3 avec des serveurs on-premises"],
    answer:0,
    exp:"S3 Cross-Region Replication (CRR) réplique asynchroniquement les objets d'un bucket source vers un bucket destination dans une région différente. Avantages : (1) DR multi-région (perte d'une région), (2) réduction de latence pour les utilisateurs dans d'autres régions, (3) conformité réglementaire (copie dans une région spécifique), (4) agrégation de logs."
  },
  {
    id:"saa-j5-4",
    q:"Quelle est la différence entre S3 Cross-Region Replication (CRR) et Same-Region Replication (SRR) ?",
    choices:["CRR : réplication vers une autre région AWS (DR multi-région, latence réduite) ; SRR : réplication dans la même région (agrégation de logs, compliance, copies entre comptes)","CRR est asynchrone, SRR est synchrone","SRR est gratuit, CRR est payant","SRR réplique les versions, CRR ne réplique que les nouveaux objets"],
    answer:0,
    exp:"CRR (Cross-Region Replication) : source et destination dans des régions différentes. Utilisations : DR, réduction de latence pour utilisateurs globaux, compliance géographique. SRR (Same-Region Replication) : source et destination dans la même région. Utilisations : agrégation de logs de plusieurs buckets, copie entre comptes dans la même région, compliance."
  },
  {
    id:"saa-j5-5",
    q:"Pour activer S3 Replication (CRR ou SRR), quels prérequis sont nécessaires ?",
    choices:["Activer le Versioning sur les buckets source ET destination + configurer une IAM Role avec les permissions nécessaires","Seul le Versioning sur le bucket source est requis","Aucun prérequis, la réplication est activée par défaut","Désactiver les lifecycle policies avant d'activer la réplication"],
    answer:0,
    exp:"Prérequis S3 Replication : (1) Activer le Versioning sur le bucket SOURCE, (2) Activer le Versioning sur le bucket DESTINATION, (3) Créer et attacher une IAM Role qui permet à S3 de lire depuis la source et d'écrire vers la destination. Sans Versioning sur les deux buckets, la configuration de réplication échoue."
  },
  {
    id:"saa-j5-6",
    q:"Après activation de S3 CRR, les objets existants dans le bucket source sont-ils répliqués ?",
    choices:["Non par défaut. Seuls les nouveaux objets sont répliqués ; pour les objets existants, utiliser S3 Batch Replication","Oui, tous les objets existants sont répliqués automatiquement","Dépend de la configuration de la règle de réplication","Les objets existants sont répliqués uniquement s'ils ont été modifiés récemment"],
    answer:0,
    exp:"S3 Replication ne réplique pas rétroactivement les objets existants. Par défaut, seuls les nouveaux objets (créés après l'activation de la règle de réplication) sont répliqués. Pour répliquer les objets existants, utiliser S3 Batch Replication : un job qui réplique tous les objets sélectionnés (ou filtrés par préfixe/tag)."
  },
  {
    id:"saa-j5-7",
    q:"Votre application stocke des données critiques dans S3. Vous devez garantir un RPO < 15 minutes en cas de panne régionale. Quelle fonctionnalité S3 utiliser ?",
    choices:["S3 Replication Time Control (RTC) garantit que 99.99% des objets sont répliqués en moins de 15 minutes","S3 CRR standard (asynchrone) avec monitoring CloudWatch","S3 Transfer Acceleration","S3 Intelligent-Tiering"],
    answer:0,
    exp:"S3 Replication Time Control (RTC) est une fonctionnalité payante qui garantit SLA : 99.99% des objets répliqués en moins de 15 minutes. Sans RTC, la réplication S3 est asynchrone (généralement en secondes à minutes, mais sans SLA). Pour des RPO stricts, RTC avec son SLA contractuel est nécessaire."
  },
  {
    id:"saa-j5-8",
    q:"Qu'est-ce que S3 Versioning et comment améliore-t-il la résilience ?",
    choices:["S3 Versioning conserve plusieurs versions de chaque objet, permettant la récupération en cas de suppression accidentelle ou de corruption","S3 Versioning crée des copies automatiques dans d'autres régions","S3 Versioning chiffre automatiquement les versions précédentes","S3 Versioning est requis uniquement pour la conformité HIPAA"],
    answer:0,
    exp:"S3 Versioning : chaque modification/suppression d'un objet crée une nouvelle version tout en conservant les précédentes. Avantages : (1) Protection contre les suppressions accidentelles (un 'delete' crée un delete marker, récupérable), (2) Protection contre les overwrite accidentels, (3) Récupération de n'importe quelle version précédente. Coût : stockage de toutes les versions."
  },
  {
    id:"saa-j5-9",
    q:"Avec S3 Versioning activé, que se passe-t-il lorsqu'un utilisateur supprime un objet sans spécifier de Version ID ?",
    choices:["Un 'delete marker' est créé comme nouvelle version courante. L'objet semble supprimé mais toutes les versions sont conservées","L'objet et toutes ses versions sont définitivement supprimés","L'objet est déplacé vers la Recycle Bin S3","La suppression est bloquée jusqu'à ce qu'un Version ID soit spécifié"],
    answer:0,
    exp:"Avec Versioning activé, une suppression sans Version ID crée un 'delete marker' : un objet spécial qui devient la version courante. L'objet semble supprimé (ListObjects ne le retourne pas) mais toutes les versions précédentes sont conservées. Pour récupérer : supprimer le delete marker. Pour supprimer définitivement une version : spécifier son Version ID."
  },
  {
    id:"saa-j5-10",
    q:"Qu'est-ce que S3 Object Lock et quelle résilience offre-t-il ?",
    choices:["Empêche la suppression ou modification d'objets pendant une période définie (WORM : Write Once Read Many), protège contre la suppression malveillante ou accidentelle","Chiffre les objets et empêche le déchiffrement non autorisé","Limite le nombre d'accès à un objet","Bloque les accès publics au bucket"],
    answer:0,
    exp:"S3 Object Lock implémente le modèle WORM (Write Once, Read Many). Modes : (1) Governance mode : seuls les users avec permission s3:BypassGovernanceRetention peuvent supprimer/modifier, (2) Compliance mode : PERSONNE (même root) ne peut supprimer avant expiration de la rétention. Protège contre les ransomwares, suppressions malveillantes, et exigences réglementaires (SEC 17a-4)."
  },
  {
    id:"saa-j5-11",
    q:"Quelle est la différence entre un 'Retention Period' et un 'Legal Hold' dans S3 Object Lock ?",
    choices:["Retention Period : protection pour une durée déterminée (expire automatiquement) ; Legal Hold : protection sans date d'expiration (désactivée manuellement)","Legal Hold est plus sécurisé qu'un Retention Period","Retention Period s'applique au bucket, Legal Hold à l'objet","Ils sont identiques"],
    answer:0,
    exp:"Retention Period : définit une date d'expiration de la protection (ex: 7 ans). Protection automatiquement levée à l'expiration. Legal Hold : protection sans date d'expiration. Doit être désactivée manuellement avec la permission s3:PutObjectLegalHold. Un objet peut avoir les deux simultanément : la protection la plus restrictive s'applique."
  },
  {
    id:"saa-j5-12",
    q:"Votre entreprise est victime d'un ransomware qui a chiffré et supprimé des données S3. Quelle combinaison de fonctionnalités S3 aurait MIEUX protégé ces données ?",
    choices:["S3 Versioning + S3 Object Lock (Compliance mode) + MFA Delete","S3 Versioning seul","S3 CRR vers une autre région","S3 Server-Side Encryption (SSE-S3)"],
    answer:0,
    exp:"Protection optimale contre ransomware : (1) S3 Versioning conserve les versions avant chiffrement/suppression, (2) S3 Object Lock Compliance mode empêche la suppression des versions même par l'admin, (3) MFA Delete exige un second facteur pour supprimer des versions. Cette combinaison rend impossible la destruction des données même avec des credentials volés."
  },
  {
    id:"saa-j5-13",
    q:"Qu'est-ce que MFA Delete dans S3 et quand est-il recommandé ?",
    choices:["Exige une authentification MFA pour supprimer des versions d'objets ou désactiver le Versioning. Recommandé pour les buckets contenant des données critiques","Exige MFA pour accéder aux objets S3","Exige MFA pour créer de nouveaux buckets","Exige MFA pour modifier les politiques de bucket"],
    answer:0,
    exp:"MFA Delete : protection additionnelle qui exige un token MFA en plus des credentials IAM pour (1) supprimer définitivement des versions d'objets, (2) suspendre/désactiver le Versioning du bucket. Activation : uniquement via le CLI en tant que root user. Ne peut pas être configuré via la console. Recommandé pour les données les plus sensibles."
  },
  {
    id:"saa-j5-14",
    q:"Quelle est la limite de taille d'un objet S3 et comment uploader un fichier de 10 GB ?",
    choices:["Limite objet : 5 TB. Pour les fichiers > 100 MB, recommandé d'utiliser S3 Multipart Upload. Obligatoire > 5 GB","Limite objet : 100 GB","Limite objet : 5 GB avec upload simple, illimité avec Multipart","Pas de limite de taille d'objet"],
    answer:0,
    exp:"S3 : taille max d'un objet = 5 TB. Pour un seul PUT : max 5 GB. Pour les fichiers > 100 MB : AWS recommande Multipart Upload. Obligatoire pour les fichiers > 5 GB. Multipart Upload : découpe le fichier en parties (5 MB à 5 GB chacune), les uploade en parallèle, puis les assemble. Avantages : reprise sur interruption, parallélisation, meilleur throughput."
  },
  {
    id:"saa-j5-15",
    q:"S3 Transfer Acceleration permet d'améliorer les performances d'upload en utilisant quoi ?",
    choices:["Le réseau backbone AWS global (CloudFront Edge Locations) pour router les données depuis l'utilisateur jusqu'au bucket S3 via le chemin réseau le plus rapide","Des instances EC2 dédiées comme relais","Des Direct Connect links","La compression des données avant l'upload"],
    answer:0,
    exp:"S3 Transfer Acceleration : les uploads/downloads passent par les CloudFront Edge Locations les plus proches de l'utilisateur. Les données sont ensuite routées vers le bucket S3 via le réseau interne AWS optimisé (backbone), plus rapide qu'Internet public. Utile pour les uploads internationaux ou depuis des réseaux lents. Coût additionnel par GB transféré."
  },
  {
    id:"saa-j5-16",
    q:"Qu'est-ce que S3 Event Notifications et comment améliore-t-il la résilience d'une architecture ?",
    choices:["Envoie des notifications (vers SNS, SQS, Lambda, EventBridge) lorsque des événements S3 se produisent (upload, suppression, réplication, etc.), permettant des réactions automatiques aux changements","Alerte les administrateurs par email lors d'erreurs S3","Envoie des métriques CloudWatch en temps réel","Monitore la disponibilité du service S3"],
    answer:0,
    exp:"S3 Event Notifications : pour chaque événement (s3:ObjectCreated, s3:ObjectRemoved, s3:Replication, etc.), S3 peut envoyer une notification à SNS, SQS, Lambda ou EventBridge. Utilisations résilience : déclencher un traitement de sauvegarde après chaque upload, alerter en cas de suppression inattendue, déclencher une validation de conformité, lancer une réplication manuelle."
  },
  {
    id:"saa-j5-17",
    q:"Quelle est la différence entre S3 Standard, S3 Standard-IA, S3 One Zone-IA et S3 Glacier en termes de résilience ?",
    choices:["Standard : 3+ AZ, haute dispo. Standard-IA : 3+ AZ, haute dispo mais moindre. One Zone-IA : 1 AZ seulement (non résilient à la panne d'AZ). Glacier : 3+ AZ, archivage","Toutes ont la même résilience","One Zone-IA est plus résilient que Standard","Glacier n'a que 2 AZ"],
    answer:0,
    exp:"Résilience par classe : S3 Standard & Standard-IA : répliqué sur ≥3 AZ (résilient panne d'AZ), 99.99% dispo. S3 One Zone-IA : stocké dans UNE SEULE AZ, si l'AZ est détruite → données perdues. 99.5% dispo. Glacier Instant/Flexible/Deep Archive : répliqué sur ≥3 AZ. One Zone-IA : pour données reproductibles ou qui peuvent être recréées."
  },
  {
    id:"saa-j5-18",
    q:"Votre application a besoin d'un accès à des données S3 avec une latence en millisecondes et les données sont rarement accédées. Quelle classe S3 utiliser ?",
    choices:["S3 Standard-IA (accès en millisecondes, moins cher que Standard pour le stockage, frais de retrieval)","S3 Glacier Instant Retrieval","S3 Glacier Flexible Retrieval","S3 Standard (toujours pour accès fréquent)"],
    answer:0,
    exp:"S3 Standard-IA : accès instantané en millisecondes (comme S3 Standard), mais moins cher pour le stockage. Frais de retrieval par GB récupéré. Idéal pour données accédées moins d'une fois par mois mais qui doivent être accessibles immédiatement quand nécessaire. Glacier Instant Retrieval : aussi en millisecondes, pour données accédées ~1x/trimestre."
  },
  {
    id:"saa-j5-19",
    q:"Quelle est la différence de temps de récupération entre S3 Glacier Instant Retrieval, Flexible Retrieval et Deep Archive ?",
    choices:["Instant : millisecondes ; Flexible : minutes à heures (Expedited 1-5min, Standard 3-5h, Bulk 5-12h) ; Deep Archive : 12h (Standard) ou 48h (Bulk)","Toutes les classes Glacier récupèrent en < 1 heure","Instant : 1 heure ; Flexible : 24h ; Deep Archive : 72h","Dépend de la région AWS"],
    answer:0,
    exp:"S3 Glacier Instant Retrieval : récupération en millisecondes (comme Standard). S3 Glacier Flexible Retrieval : Expedited (1-5 min, coût élevé), Standard (3-5h, coût moyen), Bulk (5-12h, coût bas). S3 Glacier Deep Archive : Standard (~12h), Bulk (~48h). Plus le retrieval est lent, moins c'est cher. Choisir selon le RTO requis."
  },
  {
    id:"saa-j5-20",
    q:"Qu'est-ce que S3 Intelligent-Tiering et comment gère-t-il automatiquement les coûts ?",
    choices:["Déplace automatiquement les objets entre tiers (Frequent Access → Infrequent Access → Archive Instant Access → Archive Access) selon les patterns d'accès, sans frais de retrieval","Compresse automatiquement les objets pour réduire les coûts","Duplique les objets sur plusieurs régions automatiquement","Supprime automatiquement les objets non accédés"],
    answer:0,
    exp:"S3 Intelligent-Tiering : surveille les patterns d'accès. Si un objet n'est pas accédé pendant 30 jours → déplacé vers IA tier (40% moins cher). Optionnel : après 90 jours → Archive Instant Access (68% moins cher). Optionnel : après 90-180 jours → Archive Access. PAS de frais de retrieval (contrairement à Standard-IA). Frais de monitoring par 1000 objets/mois."
  },
  {
    id:"saa-j5-21",
    q:"Comment les S3 Lifecycle Policies contribuent-elles à la résilience et à la gestion des coûts ?",
    choices:["Automatisent la transition des objets entre classes S3 (Standard → IA → Glacier) selon l'âge et les patterns d'accès, et la suppression des versions/objets expirés","Créent automatiquement des backups des objets","Répliquent les objets entre régions automatiquement","Chiffrent les objets après une période définie"],
    answer:0,
    exp:"S3 Lifecycle Policies permettent d'automatiser le cycle de vie des objets : (1) Transition rules : déplacer vers une classe moins chère après X jours (ex: Standard → Glacier après 90 jours), (2) Expiration rules : supprimer les objets ou delete markers expirés, (3) Avec Versioning : supprimer les vieilles versions après N jours pour maîtriser les coûts."
  },
  {
    id:"saa-j5-22",
    q:"Votre bucket S3 contient des backups quotidiens. Vous voulez conserver les 30 derniers jours en Standard, puis archiver en Glacier pendant 1 an, puis supprimer. Comment configurer ?",
    choices:["Lifecycle Policy avec transition vers Glacier après 30 jours + expiration après 395 jours (30+365)","Créer deux buckets séparés et déplacer manuellement les fichiers","Utiliser S3 Intelligent-Tiering avec archiving activé","Lambda Function déclenchée quotidiennement"],
    answer:0,
    exp:"Lifecycle Policy sur le bucket : Transition rule : déplacer vers S3 Glacier Flexible Retrieval après 30 jours. Expiration rule : supprimer les objets après 395 jours (30 jours en Standard + 365 jours en Glacier = 395 jours depuis la création). Cette automatisation élimine la gestion manuelle et garantit la conformité avec la politique de rétention."
  },
  {
    id:"saa-j5-23",
    q:"Qu'est-ce que S3 Block Public Access et pourquoi est-il important pour la sécurité ?",
    choices:["Empêche l'exposition publique accidentelle des buckets S3 en bloquant les ACLs publiques et les bucket policies publiques, même si elles sont créées par erreur","Chiffre automatiquement les objets publics","Bloque les accès depuis des IPs non autorisées","Applique automatiquement un WAF sur les accès S3"],
    answer:0,
    exp:"S3 Block Public Access : 4 paramètres configurables au niveau bucket ET compte AWS. BlockPublicAcls : rejette les nouvelles ACLs publiques. IgnorePublicAcls : ignore toutes les ACLs publiques existantes. BlockPublicPolicy : bloque les bucket policies accordant un accès public. RestrictPublicBuckets : restreint l'accès public même avec une policy publique existante. Recommandé : activer tout au niveau compte."
  },
  {
    id:"saa-j5-24",
    q:"Comment sécuriser un bucket S3 pour qu'uniquement votre VPC puisse y accéder (sans passer par Internet) ?",
    choices:["Créer un VPC Endpoint S3 (Gateway type) + bucket policy avec condition 'aws:sourceVpce' limitant l'accès à l'endpoint","Utiliser des Security Groups pour bloquer l'accès Internet au bucket S3","Configurer un Network ACL sur le subnet du bucket","Mettre le bucket S3 dans un VPC privé"],
    answer:0,
    exp:"Pour l'accès S3 privé depuis un VPC : (1) Créer un S3 VPC Gateway Endpoint (gratuit) → le trafic S3 reste sur le réseau AWS sans passer par Internet. (2) Bucket Policy avec condition 'aws:sourceVpce': 'vpce-xxxx' (ou 'aws:sourceVpc') → seul le trafic depuis votre VPC est autorisé. Les instances EC2 n'ont pas besoin d'IGW/NAT Gateway pour accéder à S3."
  },
  {
    id:"saa-j5-25",
    q:"Qu'est-ce qu'un S3 Presigned URL et comment améliore-t-il la résilience des architectures ?",
    choices:["URL temporaire signée avec vos credentials IAM permettant à n'importe qui de télécharger/uploader un objet S3 spécifique sans credentials AWS, pendant une durée limitée","URL qui accélère le téléchargement S3 via CloudFront","URL pour accéder aux objets S3 dans plusieurs régions","URL pour accéder à S3 depuis une application mobile sans SDK AWS"],
    answer:0,
    exp:"S3 Presigned URL : généré par AWS SDK ou CLI en utilisant les credentials de l'entité qui le crée. Encode les permissions et une expiration (défaut : 1h, max : 7 jours avec STS, 12h avec IAM user). Usage : (1) Partager des objets privés temporairement, (2) Permettre des uploads directs depuis un navigateur (bypass du serveur), (3) Téléchargements sécurisés depuis des apps mobiles."
  },
  {
    id:"saa-j5-26",
    q:"Quelle est la différence entre SSE-S3, SSE-KMS et SSE-C pour le chiffrement S3 ?",
    choices:["SSE-S3 : AWS gère les clés (AES-256) ; SSE-KMS : clés gérées dans KMS (audit trail, rotation, access control) ; SSE-C : vous fournissez vos clés (AWS chiffre mais ne stocke pas les clés)","SSE-S3 est le moins sécurisé, SSE-C est le plus sécurisé","SSE-KMS est gratuit, SSE-S3 est payant","Ils offrent tous le même niveau de sécurité"],
    answer:0,
    exp:"SSE-S3 : S3 gère la création, rotation et protection des clés. Simple, transparent, gratuit. SSE-KMS : vous créez des clés CMK dans AWS KMS. Avantages : audit CloudTrail de chaque accès, rotation automatique, contrôle d'accès IAM granulaire, envelope encryption. SSE-C : vous fournissez la clé dans chaque requête API. AWS chiffre/déchiffre mais ne stocke jamais la clé."
  },
  {
    id:"saa-j5-27",
    q:"Votre organisation exige que tous les nouveaux objets S3 soient chiffrés. Comment appliquer cela au niveau du bucket ?",
    choices:["Activer le Default Encryption du bucket (SSE-S3 ou SSE-KMS) : tous les objets uploadés sans encryption header sont automatiquement chiffrés avec le setting par défaut","Créer une bucket policy qui refuse (Deny) les requêtes PUT sans l'header 'x-amz-server-side-encryption'","Configurer AWS Config pour détecter les objets non chiffrés","Les deux : Default Encryption ET une bucket policy de refus sont complémentaires"],
    answer:3,
    exp:"Approche complète : (1) Activer Default Encryption → chiffre automatiquement tout ce qui arrive sans en-tête de chiffrement. (2) Bucket Policy avec Deny si aws:SecureTransport est false et si l'en-tête x-amz-server-side-encryption est absent → prévient les uploads explicitement non chiffrés. Cette double protection est la best practice AWS pour garantir que 100% des objets sont chiffrés."
  },
  {
    id:"saa-j5-28",
    q:"Qu'est-ce que S3 Access Points et comment simplifie-t-il la gestion des accès à grande échelle ?",
    choices:["Des endpoints nommés avec leur propre politique d'accès (Access Point Policy), permettant de définir des accès différenciés pour différentes applications/équipes sans complexifier la bucket policy","Des buckets S3 secondaires créés pour améliorer les performances","Des VPC Endpoints S3 avec nom personnalisé","Des IAM Roles dédiées pour chaque application accédant à S3"],
    answer:0,
    exp:"S3 Access Points : chaque Access Point a son propre hostname, sa propre politique d'accès (avec conditions IAM), et peut être restreint à un VPC spécifique. Au lieu d'une bucket policy complexe avec des conditions pour chaque application, chaque équipe/application a son propre Access Point avec sa politique simple. Max 10 000 Access Points par bucket."
  },
  {
    id:"saa-j5-29",
    q:"Votre application doit traiter des millions de petits fichiers stockés dans S3. Quelle fonctionnalité S3 permet de faire des requêtes SQL directement sur les données S3 sans télécharger les fichiers ?",
    choices:["S3 Select et Glacier Select permettent d'exécuter des expressions SQL simples pour filtrer des données directement dans S3/Glacier","AWS Athena (service séparé, pas une fonctionnalité S3)","S3 Query Engine","DynamoDB est préférable pour les petits fichiers"],
    answer:0,
    exp:"S3 Select : permet d'exécuter des expressions SQL SELECT sur un seul objet S3 (CSV, JSON, Parquet avec ou sans Gzip/Bzip2) et de récupérer uniquement les données filtrées. Réduit le transfert réseau et les coûts de calcul jusqu'à 400%. Glacier Select : même fonctionnalité pour les objets archivés. Pour des requêtes cross-objets, Athena est plus approprié."
  },
  {
    id:"saa-j5-30",
    q:"Comment S3 Object Ownership (ACL disabled / Bucket owner enforced) améliore-t-il la gestion des permissions ?",
    choices:["Désactive les ACLs S3 : tous les objets dans le bucket appartiennent au propriétaire du bucket quelle que soit l'identité qui les a uploadés. Simplifie la gestion en utilisant uniquement les bucket policies et IAM policies","Transfère automatiquement la propriété des objets uploadés par d'autres comptes","Empêche les cross-account uploads","Ne change pas les permissions existantes"],
    answer:0,
    exp:"Avant S3 Object Ownership 'Bucket owner enforced' : un objet uploadé par le compte A dans le bucket du compte B appartenait au compte A (qui gardait le contrôle). Avec 'Bucket owner enforced' : (1) Tous les ACLs sont désactivés, (2) Le propriétaire du bucket possède automatiquement tous les objets. Simplifie en utilisant uniquement les policies pour gérer les accès."
  },
  {
    id:"saa-j5-31",
    q:"Qu'est-ce que l'accès consistant (strong consistency) de S3 et depuis quand est-il disponible ?",
    choices:["Depuis décembre 2020, S3 offre la strong consistency pour toutes les opérations (PUT, GET, LIST, DELETE) : après une écriture réussie, tous les lecteurs voient immédiatement la version la plus récente","S3 a toujours offert la strong consistency depuis son lancement","S3 offre only eventual consistency pour les opérations de liste","Strong consistency n'est disponible que dans certaines régions"],
    answer:0,
    exp:"Avant décembre 2020 : S3 avait eventual consistency pour certaines opérations (read-after-write pour les nouveaux objets, eventual pour les updates/deletes). Depuis décembre 2020 : S3 offre la strong read-after-write consistency GRATUITE pour toutes les opérations. Après un PUT/DELETE réussi, tous les GETs et LISTs suivants retournent la version la plus récente."
  },
  {
    id:"saa-j5-32",
    q:"Quelle est la limite de débit (throughput) de S3 par prefix et comment l'optimiser ?",
    choices:["3500 requêtes PUT/COPY/POST/DELETE et 5500 requêtes GET/HEAD par seconde par prefix. Distribuer les objets sur plusieurs prefixes pour augmenter le débit total","1000 requêtes par seconde pour tout le bucket","Pas de limite de débit avec S3","100 requêtes par seconde par bucket"],
    answer:0,
    exp:"S3 scale automatiquement jusqu'à 3500 req/s pour PUT/COPY/POST/DELETE et 5500 req/s pour GET/HEAD PAR PREFIX. Un prefix est le chemin avant le nom d'objet (ex: bucket/images/ vs bucket/videos/ sont deux prefixes). En distribuant les objets sur 4 prefixes, on atteint 22000 req/s pour les lectures. Avec SSE-KMS, les limites KMS peuvent devenir le goulot d'étranglement."
  },
  {
    id:"saa-j5-33",
    q:"Qu'est-ce que S3 Batch Operations et dans quel cas d'usage de résilience est-il utile ?",
    choices:["Exécute des opérations en masse sur des milliards d'objets S3 (copier, taguer, chiffrer, restaurer depuis Glacier, appeler Lambda). Utile pour chiffrer rétroactivement tous les objets ou répliquer les objets existants","Traite les requêtes S3 en batch pour améliorer les performances","Crée des copies automatiques des buckets entiers","Service de monitoring des opérations S3 en masse"],
    answer:0,
    exp:"S3 Batch Operations : permet d'exécuter une opération sur une liste d'objets S3 (jusqu'à milliards). Opérations supportées : Copy, Invoke Lambda Function, Replace ACL, Replace tags, Restore from Glacier, Apply Object Lock. Cas d'usage résilience : chiffrer tous les objets existants (SSE-KMS), lancer la réplication d'objets existants (S3 Batch Replication), restaurer tous les archives Glacier."
  },
  {
    id:"saa-j5-34",
    q:"Comment S3 Storage Lens fournit-il de la visibilité sur la résilience et l'utilisation du stockage ?",
    choices:["Dashboard analytique S3 affichant métriques d'utilisation, d'activité et de recommandations (objets non versionnés, buckets sans chiffrement, buckets avec accès public) à travers les comptes et régions de l'organisation","Service de sauvegarde automatique S3","Outil de migration de données entre buckets","Moniteur de performance pour les requêtes S3"],
    answer:0,
    exp:"S3 Storage Lens : dashboard centralisé donnant une visibilité sur l'utilisation S3 à l'échelle d'une organisation AWS. Métriques de résilience : identifie les buckets sans Versioning, sans chiffrement, avec accès public, les objets incompletly uploaded multipart. Recommandations actionables. Peut exporter les métriques vers un bucket S3. Free tier disponible (métriques de base)."
  },
  {
    id:"saa-j5-35",
    q:"Votre application doit archiver des données de manière conforme (SEC 17a-4). Quelle configuration S3 utiliser ?",
    choices:["S3 Object Lock en mode Compliance + S3 Glacier (archivage long terme) + S3 Versioning","S3 Standard avec backup quotidien","S3 Intelligent-Tiering avec archiving","DynamoDB pour les données réglementaires"],
    answer:0,
    exp:"Conformité SEC 17a-4 (et similaires) : exige l'immuabilité des données. S3 Object Lock Compliance mode : PERSONNE (même l'administrateur AWS, même le compte root) ne peut supprimer ou modifier les objets pendant la période de rétention. Glacier fournit l'archivage longue durée à bas coût. Versioning préserve l'historique. Cette combinaison répond aux exigences WORM réglementaires."
  },
  {
    id:"saa-j5-36",
    q:"Qu'est-ce que S3 Requester Pays et dans quel contexte est-il utilisé ?",
    choices:["Le requester (celui qui télécharge) paie les frais de transfert de données, pas le propriétaire du bucket. Utile pour les datasets publics partagés avec des tiers","Le propriétaire du bucket paie toujours (comportement par défaut)","Les coûts sont partagés équitablement entre requester et propriétaire","Uniquement pour les buckets privés d'entreprise"],
    answer:0,
    exp:"S3 Requester Pays : par défaut, le propriétaire du bucket paie le stockage ET le data transfer. Avec Requester Pays activé : le requester paie les frais de transfert et de requêtes (le propriétaire garde les frais de stockage). Utilisé pour : partager de larges datasets publics (satellite imagery, genomics data) où le propriétaire ne veut pas payer les coûts de téléchargement."
  },
  {
    id:"saa-j5-37",
    q:"Comment surveiller l'activité sur un bucket S3 et détecter les accès non autorisés ?",
    choices:["S3 Server Access Logging + CloudTrail pour les appels API S3 + AWS Macie pour la détection de données sensibles et d'accès anormaux","Uniquement CloudWatch Metrics pour les erreurs HTTP","Les bucket policies suffisent pour la sécurité","SNS Notifications pour chaque accès"],
    answer:0,
    exp:"Monitoring S3 : (1) S3 Server Access Logging : logs détaillés de chaque requête (IP, user agent, objet, opération, response code). Stockés dans un autre bucket S3. (2) CloudTrail : logs des appels API S3 (console, SDK, CLI). (3) AWS Macie : ML-based detection de données sensibles (PII, secrets) et d'activités anormales. (4) S3 Event Notifications pour alertes en temps réel."
  },
  {
    id:"saa-j5-38",
    q:"Votre application utilise S3 pour stocker des images uploadées par des utilisateurs. Les images ne sont plus accédées après 60 jours. Quelle est la configuration S3 la plus économique tout en maintenant une haute disponibilité ?",
    choices:["S3 Intelligent-Tiering ou Lifecycle Policy : Standard (0-30j) → Standard-IA (30-60j) → Glacier Instant Retrieval (60j+) selon le RTO requis","S3 Glacier dès l'upload","S3 Standard pour toujours","S3 One Zone-IA pour toutes les images"],
    answer:0,
    exp:"Approche optimale : Lifecycle Policy → S3 Standard (0-30 jours pour accès fréquent) → S3 Standard-IA (30-60 jours, moins cher, accès en ms) → S3 Glacier Instant Retrieval (>60 jours, 68% moins cher que Standard, accès en ms si nécessaire). Alternative : S3 Intelligent-Tiering si les patterns d'accès sont imprévisibles (gère automatiquement les transitions)."
  },
  {
    id:"saa-j5-39",
    q:"Qu'est-ce qu'un S3 Multi-Region Access Point (MRAP) et comment améliore-t-il la résilience ?",
    choices:["Un endpoint global qui route automatiquement les requêtes vers le bucket S3 le plus proche ou le plus sain dans plusieurs régions, avec basculement automatique","Un bucket S3 déployé dans plusieurs régions automatiquement","Un load balancer devant plusieurs buckets S3","Un VPC Endpoint multi-régions"],
    answer:0,
    exp:"S3 Multi-Region Access Points (MRAP) : un seul endpoint ARN global qui route les requêtes vers le bucket S3 le plus proche (géographiquement) et le plus sain. Avec S3 Replication active entre les buckets, le MRAP offre un failover automatique : si un bucket dans une région est dégradé, les requêtes basculent vers le bucket répliqué dans une autre région."
  },
  {
    id:"saa-j5-40",
    q:"Votre application cloud-native génère 1 million de logs par jour dans S3. Comment interroger efficacement ces logs sans les déplacer vers une base de données ?",
    choices:["Amazon Athena : service de requêtes SQL interactives sur les données S3 (CSV, JSON, Parquet, ORC, Avro) avec pay-per-query","S3 Select (uniquement pour un seul fichier à la fois, pas adapté)","Amazon RDS avec un ETL depuis S3","Amazon Redshift Spectrum"],
    answer:0,
    exp:"Amazon Athena est serverless et interroge directement S3 : définir le schéma dans le Glue Data Catalog, écrire des requêtes SQL standard. Facturation : $5/TB de données scannées. Optimiser avec Parquet/ORC (columnar) pour réduire les données scannées. Idéal pour : analyse de logs, rapports ad-hoc, big data analytics sans ETL. Redshift Spectrum : pour des requêtes complexes combinant S3 et Redshift."
  },
  {
    id:"saa-j5-41",
    q:"Comment S3 Object Tags permettent-ils une gestion fine des politiques de cycle de vie et des coûts ?",
    choices:["Les tags sur les objets S3 permettent des règles Lifecycle spécifiques par tag (ex: archiver seulement les objets tagués env=prod), des politiques IAM/bucket policy conditionnelles, et un suivi des coûts par tag","Les tags sont uniquement pour l'organisation visuelle dans la console","Les tags S3 sont uniquement pour la facturation AWS","Les tags ne peuvent pas être utilisés dans les politiques de réplication"],
    answer:0,
    exp:"S3 Object Tags : paires clé-valeur sur les objets. Utilisations : (1) Lifecycle rules conditionnelles (archiver si tag 'retention=1year'), (2) Bucket policies/IAM avec conditions sur les tags, (3) AWS Cost Allocation Tags pour le cost tracking par projet/équipe, (4) S3 Replication Rules filtrées par tag, (5) S3 Object Lock avec periods différentes par type d'objet."
  },
  {
    id:"saa-j5-42",
    q:"Qu'est-ce que S3 Glacier Vault Lock et comment diffère-t-il de S3 Object Lock ?",
    choices:["Glacier Vault Lock : politique d'immutabilité sur un Vault Glacier entier avec un workflow de validation (en cours puis verrouillée définitivement). S3 Object Lock : au niveau objet/bucket S3 avec Governance/Compliance mode","Ils sont identiques et interchangeables","Vault Lock est plus flexible car modifiable","Object Lock est pour S3, Vault Lock uniquement pour les migrations vers Glacier"],
    answer:0,
    exp:"S3 Glacier (ancien service) a Vault Lock Policy : (1) Créer une Vault Lock Policy (état 'InProgress'). (2) Vérifier en 24h. (3) Compléter le lock → politique IMMUABLE à jamais (ne peut pas être modifiée ou supprimée). S3 Object Lock (service S3 moderne) : au niveau des objets dans les buckets S3 standard. Les deux servent des exigences WORM réglementaires mais avec des APIs et workflows différents."
  },
  {
    id:"saa-j5-43",
    q:"Votre enterprise veut centraliser les données S3 de 50 comptes AWS dans un compte de log archive. Quelle solution utiliser ?",
    choices:["S3 Same-Region ou Cross-Region Replication depuis chaque compte source vers le compte archive + bucket policy sur le compte archive autorisant les écritures cross-account","Copier manuellement les fichiers mensuellement","AWS DataSync avec un agent centralisé","DMS (Database Migration Service)"],
    answer:0,
    exp:"Centralisation multi-comptes S3 : (1) Dans le compte archive, créer un bucket S3 avec une bucket policy autorisant les IAM roles des comptes sources à répliquer vers ce bucket. (2) Dans chaque compte source, configurer S3 Replication vers le bucket centralisé avec 'Account' replication configuration pour transférer la propriété. AWS Organizations + S3 Storage Lens pour la vue consolidée."
  },
  {
    id:"saa-j5-44",
    q:"Comment protéger un bucket S3 contre les suppressions accidentelles par des administrateurs IAM ?",
    choices:["S3 Versioning + MFA Delete + S3 Object Lock (Governance mode pour les admins IAM ordinaires, Compliance mode pour une protection maximale) + bucket policy avec Deny sur les suppressions","Les permissions IAM suffisent","S3 Block Public Access protège contre les suppressions","Il est impossible de protéger contre les administrateurs IAM"],
    answer:0,
    exp:"Protection multi-couches : (1) S3 Versioning : chaque delete crée un delete marker (récupérable). (2) S3 Object Lock Compliance mode : PERSONNE ne peut supprimer pendant la période de rétention. (3) MFA Delete : exige MFA pour supprimer des versions. (4) Bucket policy avec Deny explicite + conditions (aws:MultiFactorAuthPresent, Null checks). (5) AWS Organizations SCP pour limiter les permissions."
  },
  {
    id:"saa-j5-45",
    q:"Qu'est-ce que S3 Inventory et comment contribue-t-il à la gestion de la résilience ?",
    choices:["Génère des rapports hebdomadaires ou quotidiens listant les objets dans un bucket avec leurs métadonnées (taille, date de modification, classe de stockage, statut de chiffrement, statut de réplication, Object Lock), exportés vers S3","Inventaire en temps réel des objets S3","Outil de migration pour déplacer des objets entre buckets","Service de comptage des objets S3"],
    answer:0,
    exp:"S3 Inventory : génère des rapports CSV, ORC ou Parquet des objets d'un bucket avec leurs métadonnées. Fréquence : quotidienne ou hebdomadaire. Utile pour : (1) Vérifier que tous les objets critiques ont le Versioning actif, (2) Identifier les objets non chiffrés, (3) Vérifier le statut de réplication CRR, (4) Alimenter S3 Batch Operations pour des corrections en masse."
  },
  {
    id:"saa-j5-46",
    q:"Votre application doit streamer de larges fichiers S3 vers des instances EC2 dans le même VPC sans exposer les données sur Internet. Quelle architecture utiliser ?",
    choices:["S3 VPC Gateway Endpoint + IAM Role pour l'instance EC2 → les données restent sur le réseau AWS privé","S3 Transfer Acceleration","NAT Gateway pour acheminer le trafic vers S3","Direct Connect vers S3"],
    answer:0,
    exp:"Architecture pour accès S3 privé : (1) S3 VPC Gateway Endpoint (Gateway type, gratuit) → le trafic entre VPC et S3 reste sur le backbone AWS, sans IGW ni NAT Gateway. (2) IAM Role attachée aux instances EC2 avec les permissions S3 nécessaires. (3) Bucket policy optionnelle pour restreindre l'accès uniquement depuis le VPC endpoint. Cette architecture est sécurisée et économique."
  },
  {
    id:"saa-j5-47",
    q:"Comment S3 Event Notifications et SQS peuvent-ils créer une architecture découplée résiliente pour le traitement de fichiers S3 ?",
    choices:["S3 → SQS (Standard ou FIFO) → consumers EC2/Lambda : SQS bufferise les notifications S3, les consumers traitent à leur rythme, retentent en cas d'échec, dead letter queue pour les messages non traités","S3 → Lambda direct (sans SQS) est toujours préférable","S3 → SNS → consumers est équivalent à S3 → SQS","Utiliser un cron job pour vérifier régulièrement les nouveaux fichiers S3"],
    answer:0,
    exp:"Pattern S3 → SQS → Consumers : (1) S3 envoie une notification SQS pour chaque nouveau fichier. (2) SQS bufferise les messages (jusqu'à 14 jours) : les consumers peuvent être temporairement indisponibles sans perdre de messages. (3) Visibility timeout : si le consumer échoue, le message redevient visible pour un autre consumer (retries automatiques). (4) Dead Letter Queue (DLQ) : capture les messages non traités après N tentatives."
  },
  {
    id:"saa-j5-48",
    q:"Qu'est-ce que l'accélération multipart upload et comment améliore-t-il la résilience des uploads S3 ?",
    choices:["Divise le fichier en parties uploadées en parallèle. En cas d'échec d'une partie, seule cette partie est re-uploadée (pas tout le fichier). Améliore les performances ET la résilience aux interruptions réseau","Ne fonctionne qu'avec des fichiers > 1 TB","Désactivé par défaut et coûteux à activer","Uniquement disponible avec Transfer Acceleration"],
    answer:0,
    exp:"S3 Multipart Upload avantages : (1) Parallélisme : plusieurs threads uploadent des parties simultanément → throughput amélioré. (2) Résilience : si une partie échoue, re-uploader uniquement cette partie. (3) Reprise sur interruption : reprendre un upload interrompu. (4) Taille minimum des parties : 5 MB (sauf la dernière). (5) Abort incomplete multipart uploads avec Lifecycle Policy pour éviter les coûts de stockage."
  },
  {
    id:"saa-j5-49",
    q:"Votre entreprise exige une protection des données au repos avec des clés gérées en interne (HSM). Quelle option S3 utiliser ?",
    choices:["SSE-C (Server-Side Encryption with Customer-Provided Keys) ou SSE-KMS avec AWS CloudHSM comme Custom Key Store","SSE-S3 avec une clé personnalisée","S3 Client-Side Encryption avec KMS","AWS Shield pour le chiffrement S3"],
    answer:0,
    exp:"Pour des clés gérées en interne : (1) SSE-C : vous fournissez la clé de chiffrement dans chaque requête API (AWS chiffre/déchiffre mais ne stocke pas la clé). (2) SSE-KMS avec Custom Key Store (AWS CloudHSM) : vos clés sont stockées et générées dans vos HSM, AWS KMS agit comme proxy. (3) Client-Side Encryption : chiffrer avant d'envoyer à S3, AWS ne voit jamais les données en clair."
  },
  {
    id:"saa-j5-50",
    q:"Comment monitorer les coûts S3 et éviter les dépassements budget dans une architecture multi-comptes ?",
    choices:["AWS Cost Explorer + S3 Cost Allocation Tags + AWS Budgets avec alertes + S3 Storage Lens pour l'optimisation + AWS Organizations pour la vue consolidée","CloudWatch Alarms sur les métriques S3","Vérifier la facture AWS manuellement chaque mois","Désactiver les fonctionnalités coûteuses comme le Versioning"],
    answer:0,
    exp:"Monitoring coûts S3 multi-comptes : (1) Cost Allocation Tags : taguer les buckets et objets par projet/équipe pour le cost breakdown. (2) AWS Budgets : alertes quand les coûts S3 dépassent un seuil. (3) S3 Storage Lens : identifie les opportunités d'optimisation (objets incomplets, surprovisioning). (4) Cost Explorer : analyse des tendances. (5) AWS Organizations : vue consolidée des coûts S3 de tous les comptes."
  }
];

// ─────────────────────────────────────────────────────────────
// J6 — CloudFront & Global Accelerator (50 questions)
// ─────────────────────────────────────────────────────────────
window.QDATA[6] = [
  {
    id:"saa-j6-1",
    q:"Qu'est-ce qu'Amazon CloudFront et comment améliore-t-il les performances et la résilience ?",
    choices:["CDN (Content Delivery Network) AWS avec 400+ Points of Presence (Edge Locations) mondiaux qui met en cache le contenu proche des utilisateurs, réduisant la latence et déchargeant les origins","Service de DNS global AWS","Load balancer distribué mondialement","Service de réseau privé mondial"],
    answer:0,
    exp:"Amazon CloudFront : CDN mondial avec 400+ PoPs (Edge Locations + Regional Edge Caches). Il met en cache les réponses au niveau des PoPs pour servir les requêtes futures sans aller à l'origin. Avantages : (1) Latence réduite pour les utilisateurs finaux, (2) Origin shielding (protection DDoS), (3) Réduction des coûts (moins de requêtes à l'origin), (4) HTTPS avec certificats ACM."
  },
  {
    id:"saa-j6-2",
    q:"Quels types d'origins CloudFront supporte-t-il ?",
    choices:["S3 (avec OAC/OAI), ALB/NLB/EC2 (avec adresse publique), API Gateway, et toute origin HTTP/HTTPS custom (y compris on-premises)","Uniquement S3 et ALB","Uniquement les services AWS dans la même région","Uniquement les services avec HTTPS"],
    answer:0,
    exp:"CloudFront origins supportées : (1) Amazon S3 bucket (avec Origin Access Control/OAC pour sécuriser l'accès), (2) ALB (Application Load Balancer), (3) NLB (Network Load Balancer), (4) EC2 instance (IP publique requise), (5) API Gateway, (6) MediaStore Container, (7) Any HTTP/HTTPS endpoint (on-premises, autre cloud). CloudFront peut aussi avoir plusieurs origins dans une distribution (Origin Groups)."
  },
  {
    id:"saa-j6-3",
    q:"Qu'est-ce qu'un Origin Access Control (OAC) dans CloudFront et pourquoi l'utiliser ?",
    choices:["Mécanisme de sécurité qui permet à CloudFront d'accéder à un bucket S3 privé, en remplaçant l'OAI (Origin Access Identity), avec signature AWS SigV4 et support des buckets dans toutes les régions","Un IAM user créé pour accéder à S3","Un certificat SSL pour sécuriser la connexion à l'origin","Un group IAM qui contrôle l'accès à CloudFront"],
    answer:0,
    exp:"OAC (Origin Access Control) : successeur de l'OAI (Origin Access Identity), plus moderne et sécurisé. Permet à CloudFront d'accéder à un bucket S3 privé sans le rendre public. Configure la bucket policy S3 pour autoriser uniquement les requêtes signées par CloudFront OAC (SigV4). Avantages sur OAI : support de toutes les régions S3, support SSE-KMS, support S3 Object Lambda."
  },
  {
    id:"saa-j6-4",
    q:"Comment fonctionne le cache CloudFront et comment l'invalider ?",
    choices:["CloudFront met en cache les réponses selon les Cache-Control/TTL headers. Pour invalider, créer une Invalidation en spécifiant les paths (ex: /images/*). Coût : 1000 premières invalidations gratuites/mois, puis $0.005/path","CloudFront vide son cache automatiquement toutes les heures","Les objets en cache ne peuvent pas être invalidés avant expiration du TTL","L'invalidation est automatique lors des mises à jour de l'origin"],
    answer:0,
    exp:"Cache CloudFront : les objets sont mis en cache selon le TTL (défini par les Cache-Control headers de l'origin ou le comportement CloudFront). Pour forcer une mise à jour : (1) Cache Invalidation : spécifier des paths à invalider (/*  pour tout invalider, coûteux). (2) Versioning d'URL : meilleure pratique - inclure un hash/version dans le nom du fichier (app.v2.js) → nouvelle URL = nouveau cache."
  },
  {
    id:"saa-j6-5",
    q:"Qu'est-ce qu'un CloudFront Distribution Behavior et comment permet-il de servir différents types de contenu ?",
    choices:["Règle qui associe un pattern de chemin (path pattern) à un origin et des paramètres de cache (TTL, headers, cookies, query strings à inclure dans la cache key)","Configuration du réseau CloudFront","Type de contenu (images, vidéos, HTML) servi par CloudFront","Distribution géographique des PoPs CloudFront"],
    answer:0,
    exp:"Un CloudFront Behavior définit : (1) Path pattern (ex: /api/* → ALB, /static/* → S3, /* → default origin), (2) Origin à utiliser, (3) Cache policy (TTL, cache key), (4) Origin Request policy (headers/cookies/QS à transmettre à l'origin), (5) Viewer Protocol Policy (HTTP vs HTTPS), (6) Functions/Lambda@Edge à exécuter. Permet de router différents URLs vers différents origins."
  },
  {
    id:"saa-j6-6",
    q:"Quelle est la différence entre CloudFront Functions et Lambda@Edge ?",
    choices:["CloudFront Functions : JavaScript léger, exécuté uniquement au viewer (Viewer Request/Response), faible latence (sub-ms), moins cher. Lambda@Edge : Node.js/Python, exécuté aux viewer ET origin events, plus puissant mais plus lent et coûteux","CloudFront Functions supporte plus de runtimes","Lambda@Edge s'exécute uniquement à l'origin, Functions uniquement au viewer","Ils sont identiques mais déployés dans des régions différentes"],
    answer:0,
    exp:"CloudFront Functions : uniquement Viewer Request et Viewer Response, JavaScript ES5.1, max 1ms, 2 MB code size, millions req/s. Utilisations : URL rewrites/redirects, auth tokens, header manipulation. Lambda@Edge : Viewer Request/Response + Origin Request/Response, Node.js ou Python, jusqu'à 5-30s, 1-50 MB code, coût plus élevé. Utilisations : A/B testing, auth complexe, manipulation de réponse body."
  },
  {
    id:"saa-j6-7",
    q:"Votre site web global nécessite une redirection HTTPS forcée et un header de sécurité (HSTS). Comment configurer CloudFront ?",
    choices:["CloudFront Behavior : Viewer Protocol Policy = 'Redirect HTTP to HTTPS' + CloudFront Functions sur Viewer Response pour ajouter le header 'Strict-Transport-Security'","Configurer l'ALB origin pour faire les redirections","Utiliser AWS WAF pour les redirections HTTPS","Configurer Route 53 pour les redirections HTTPS"],
    answer:0,
    exp:"(1) Viewer Protocol Policy = 'Redirect HTTP to HTTPS' : CloudFront répond avec un 301/302 redirect pour les requêtes HTTP. (2) Pour les headers de sécurité (HSTS, CSP, X-Frame-Options) : CloudFront Response Headers Policy ou CloudFront Functions sur Viewer Response. Ces configurations améliorent la sécurité sans modification de l'application origin."
  },
  {
    id:"saa-j6-8",
    q:"Comment CloudFront peut-il servir un site web S3 statique tout en masquant l'URL S3 (bucket.s3.amazonaws.com) et en sécurisant le bucket ?",
    choices:["CloudFront Distribution avec S3 origin + Origin Access Control (OAC) + bucket policy permettant uniquement l'accès via OAC + domaine custom avec certificat ACM","S3 Static Website Hosting activé avec CloudFront devant","Route 53 ALIAS vers le bucket S3 direct","API Gateway devant S3"],
    answer:0,
    exp:"Architecture S3 + CloudFront sécurisé : (1) Bucket S3 privé (Block Public Access activé). (2) CloudFront Distribution avec origin = bucket S3. (3) OAC (Origin Access Control) créé et associé. (4) Bucket policy : autoriser uniquement les GET depuis le service 'cloudfront.amazonaws.com' avec condition 'AWS:SourceArn': distribution ARN. (5) Certificat ACM en us-east-1 pour HTTPS. Les utilisateurs voient uniquement votre domaine."
  },
  {
    id:"saa-j6-9",
    q:"Qu'est-ce que la CloudFront Signed URLs / Signed Cookies et quand les utiliser ?",
    choices:["Mécanisme permettant de restreindre l'accès à du contenu CloudFront à des utilisateurs autorisés. Signed URL : pour un seul fichier. Signed Cookie : pour plusieurs fichiers (session)","Mécanisme pour chiffrer les communications entre CloudFront et l'origin","Mécanisme pour les APIs protégées par signature","Mechanism pour le rate limiting des requêtes CloudFront"],
    answer:0,
    exp:"CloudFront Signed URLs : URL contenant une signature cryptographique permettant l'accès à un objet spécifique pendant une durée limitée. Utilisé pour : streaming vidéo payant, téléchargement sécurisé. Signed Cookies : même concept mais pour plusieurs fichiers (ex: accès à toute une section d'un site pour les abonnés). Prérequis : CloudFront Key Groups ou Trusted Signers configurés."
  },
  {
    id:"saa-j6-10",
    q:"Quelle est la différence entre CloudFront Signed URLs et S3 Presigned URLs ?",
    choices:["CloudFront Signed URL : accès via CloudFront Edge (peut inclure IP restriction, date expiration, et chemin) ; S3 Presigned URL : accès direct au bucket S3 (bypasse CloudFront, utilise credentials IAM)","Elles sont identiques","S3 Presigned URL est plus sécurisée","CloudFront Signed URL nécessite des frais supplémentaires"],
    answer:0,
    exp:"CloudFront Signed URL : signé avec une CloudFront Key Pair, passe par les Edge Locations CloudFront, peut imposer des restrictions IP, date de début/fin, chemin. S3 Presigned URL : signé avec des credentials IAM (user/role), accès direct au bucket S3, TTL max 7 jours (STS token) ou 12h (IAM user). Pour un site derrière CloudFront, préférer CloudFront Signed URLs pour maintenir la cohérence d'accès."
  },
  {
    id:"saa-j6-11",
    q:"Comment AWS WAF s'intègre avec CloudFront pour protéger une application web ?",
    choices:["AWS WAF Web ACL associé à une CloudFront Distribution filtre les requêtes malveillantes (SQL injection, XSS, bots) AVANT qu'elles n'atteignent l'origin, au niveau des Edge Locations","AWS WAF est attaché directement à l'ALB, pas à CloudFront","CloudFront a son propre WAF intégré différent d'AWS WAF","AWS WAF ne peut être utilisé qu'avec ALB ou API Gateway"],
    answer:0,
    exp:"AWS WAF + CloudFront : le Web ACL est appliqué aux Edge Locations de CloudFront, filtrant les requêtes avant qu'elles n'atteignent votre origin (ALB, EC2, Lambda, S3). Avantages : (1) Protection DDoS Layer 7 au plus proche des attaquants, (2) Réduction de la charge sur l'origin, (3) Règles gérées par AWS (AWSManagedRulesCommonRuleSet), (4) Rate limiting basé sur IP."
  },
  {
    id:"saa-j6-12",
    q:"Votre site CloudFront distribue du contenu payant. Les utilisateurs doivent payer avant d'accéder. Comment implémenter ce contrôle d'accès ?",
    choices:["Lambda@Edge ou CloudFront Functions sur Viewer Request pour vérifier un JWT/token d'authentification + CloudFront Signed URLs générées par l'application après paiement","Configurer une bucket policy S3 avec les IPs des clients","Utiliser Amazon Cognito directement avec CloudFront","Bloquer les accès avec AWS WAF puis les débloquer après paiement"],
    answer:0,
    exp:"Workflow : (1) Utilisateur paie → application génère une CloudFront Signed URL (ou Signed Cookie) avec expiration appropriée. (2) Utilisateur accède au contenu via la Signed URL → CloudFront Edge valide la signature. (3) Optionnel : Lambda@Edge sur Viewer Request pour vérifier un JWT, appeler une API de validation. Cette architecture est serverless, scalable, et sécurisée au niveau des Edge Locations."
  },
  {
    id:"saa-j6-13",
    q:"Qu'est-ce que CloudFront Origin Groups et Origin Failover ?",
    choices:["Un Origin Group contient une primary origin et une secondary origin. Si la primary retourne une erreur 4xx/5xx (ou timeout), CloudFront bascule automatiquement vers la secondary pour ce même objet","Origin Groups permet de combiner plusieurs S3 buckets en un seul origin","Origin Groups distribue le trafic entre plusieurs origins en round-robin","C'est une fonctionnalité uniquement pour les distributions vidéo"],
    answer:0,
    exp:"CloudFront Origin Groups : pour l'Origin Failover. Configurer une primary origin et une secondary. Si la primary retourne des codes d'erreur configurés (ex: 500, 502, 503, 504), CloudFront retente la requête sur la secondary. Utilisations : (1) DR multi-région (primary us-east-1, secondary eu-west-1), (2) Fallback S3 si ALB origin est défaillant, (3) Active-passive origins."
  },
  {
    id:"saa-j6-14",
    q:"Comment CloudFront gère-t-il les certifications SSL/TLS pour les domaines custom ?",
    choices:["Utiliser AWS Certificate Manager (ACM) pour provisionner un certificat SSL. IMPORTANT : le certificat doit être créé dans la région us-east-1 pour être utilisable avec CloudFront (limitation globale)","Les certificats ACM peuvent être dans n'importe quelle région","CloudFront génère automatiquement ses propres certificats","Seuls les certificats auto-signés sont supportés"],
    answer:0,
    exp:"CloudFront + HTTPS : (1) AWS Certificate Manager (ACM) : créer le certificat DANS us-east-1 (obligatoire pour CloudFront, même si votre stack est ailleurs). (2) Dans la distribution CloudFront : configurer le Alternate Domain Names (CNAME) et sélectionner le certificat ACM. (3) Route 53 : créer un ALIAS record vers la distribution CloudFront. Les certificats CloudFront default (*.cloudfront.net) sont inclus."
  },
  {
    id:"saa-j6-15",
    q:"Qu'est-ce que le CloudFront Price Class et comment affecte-t-il les coûts et performances ?",
    choices:["Price Class permet de choisir quels Edge Locations utiliser (All : monde entier et moins cher en frais, 100 : uniquement NA/Europe, 200 : exclut certaines régions chères). Réduire les régions = coûts plus bas mais latence plus élevée pour les utilisateurs exclus","Price Class affecte uniquement le prix, pas les performances","Price Class 100 est le plus cher car il a le moins de PoPs","Toutes les Price Classes ont les mêmes coûts"],
    answer:0,
    exp:"CloudFront Price Classes : Price Class All : tous les edge locations mondiaux (Asie, Amérique du Sud, etc.), meilleure performance globale, coût le plus élevé. Price Class 200 : exclut les régions les plus chères (Asie du Sud, Amérique du Sud). Price Class 100 : uniquement NA + Europe, coût le plus bas, latence élevée pour Asie/Amérique du Sud. Choisir selon la distribution géographique des utilisateurs et le budget."
  },
  {
    id:"saa-j6-16",
    q:"Qu'est-ce qu'AWS Global Accelerator et en quoi diffère-t-il de CloudFront ?",
    choices:["Global Accelerator : optimise les performances des applications TCP/UDP en routant le trafic via le backbone AWS global (Anycast IPs statiques). Principalement pour les applications non-HTTP/non-web ou nécessitant des IPs statiques. CloudFront : CDN avec cache pour le contenu web HTTP/HTTPS","Ils sont identiques mais pour des services différents","CloudFront est plus rapide que Global Accelerator","Global Accelerator est uniquement pour les applications gaming"],
    answer:0,
    exp:"Global Accelerator : (1) Fournit 2 adresses IP Anycast statiques mondiales → les utilisateurs se connectent au PoP le plus proche, (2) Le trafic est routé sur le backbone AWS privé (plus rapide qu'Internet), (3) Supporte TCP et UDP, (4) Failover automatique entre régions (< 30 secondes), (5) Pas de cache (différent de CloudFront). Idéal pour : IoT, gaming, VoIP, applications TCP non-HTTP."
  },
  {
    id:"saa-j6-17",
    q:"Quelle est la différence de comportement entre CloudFront et Global Accelerator face à une panne régionale ?",
    choices:["Global Accelerator : failover en < 30 secondes vers une autre région (détection health check). CloudFront : fallback via Origin Groups si configuré, sinon erreur. Les deux redirigent via le réseau AWS global","Global Accelerator n'a pas de mécanisme de failover","CloudFront failover est plus rapide que Global Accelerator","Ils ont le même comportement de failover"],
    answer:0,
    exp:"Global Accelerator : détecte en continu la santé des endpoints dans chaque région. Si une région devient unhealthy, bascule automatiquement vers la prochaine région saine en < 30 secondes. Les 2 IPs Anycast statiques ne changent pas. CloudFront + Origin Groups : si l'origin primaire retourne des erreurs, CloudFront essaie la secondary. Sans Origin Groups, CloudFront retourne l'erreur au client."
  },
  {
    id:"saa-j6-18",
    q:"Votre application TCP (non-HTTP) a des utilisateurs en Asie, Europe et Amérique du Nord. Elle est hébergée en us-east-1. Comment optimiser les performances globales ?",
    choices:["AWS Global Accelerator avec endpoints en us-east-1 (et optionnellement d'autres régions) : les utilisateurs se connectent au PoP AWS le plus proche et le trafic TCP passe sur le backbone AWS","CloudFront (ne supporte pas le TCP non-HTTP)","Route 53 Latency routing","Déployer des instances EC2 dans chaque région"],
    answer:0,
    exp:"Pour les applications TCP/UDP non-HTTP : Global Accelerator est le service approprié. Les utilisateurs Asie connectent au PoP AWS en Asie → backbone AWS vers us-east-1. Latence réduite par rapport à traverser l'Internet public pour tout le chemin. Option avancée : déployer des endpoints dans plusieurs régions (us-east-1, ap-southeast-1, eu-west-1) → Global Accelerator route vers l'endpoint sain le plus proche."
  },
  {
    id:"saa-j6-19",
    q:"Comment CloudFront gère-t-il les applications dynamiques (APIs) différemment du contenu statique ?",
    choices:["Pour les APIs/contenu dynamique : désactiver le cache (TTL=0) ou utiliser une cache policy sans cache. CloudFront achemine quand même les requêtes via le réseau AWS → améliore les performances sans caching","CloudFront ne peut pas gérer les APIs dynamiques","Les APIs dynamiques doivent utiliser un Behavior séparé avec cache activé","CloudFront ne peut pas désactiver le cache"],
    answer:0,
    exp:"Même sans cache, CloudFront apporte de la valeur aux APIs : (1) Connexion persistante CloudFront-origin sur le réseau AWS privé (réduction latence), (2) Protection DDoS Layer 7 avec AWS WAF, (3) HTTPS avec TLS termination aux Edge Locations, (4) Compression automatique (gzip/Brotli). Configurer un Behavior séparé pour l'API path (ex: /api/*) avec Cache Policy 'CachingDisabled'."
  },
  {
    id:"saa-j6-20",
    q:"Qu'est-ce que CloudFront Regional Edge Caches et comment améliorent-ils les performances ?",
    choices:["Caches intermédiaires plus larges entre les Edge Locations et l'origin. Si un objet n'est pas dans l'Edge Location, CloudFront vérifie le Regional Edge Cache avant de contacter l'origin → moins de requêtes origin","Caches dédiés à une région AWS spécifique","Points de présence plus grands que les Edge Locations normales","Remplacent les Edge Locations pour le contenu régional"],
    answer:0,
    exp:"Hiérarchie CloudFront : Edge Location (PoP proche de l'utilisateur) → Regional Edge Cache (13 dans le monde, plus de capacité) → Origin. Si l'objet n'est pas en Edge Location, le Regional Edge Cache est vérifié avant l'origin. Avantages : réduction du nombre de requêtes à l'origin, meilleur hit ratio, latence moindre pour les objets peu populaires."
  },
  {
    id:"saa-j6-21",
    q:"Comment Global Accelerator améliore-t-il la gestion de la DDoS pour les applications TCP/UDP ?",
    choices:["AWS Shield Standard est automatiquement intégré à Global Accelerator. Les 2 Anycast IPs sont les points d'entrée → AWS absorbe les attaques aux PoPs CloudFront/Global Accelerator avant qu'elles atteignent l'origin","Global Accelerator n'a pas de protection DDoS intégrée","La protection DDoS doit être configurée séparément sur chaque endpoint","AWS WAF est requis séparément pour Global Accelerator"],
    answer:0,
    exp:"Global Accelerator + AWS Shield Standard (inclus gratuitement) : (1) Les 2 Anycast IPs statiques reçoivent le trafic aux PoPs les plus proches des utilisateurs. (2) AWS Shield Standard absorbe les attaques DDoS volumétriques au niveau de l'infrastructure AWS globale. (3) AWS Shield Advanced (payant) offre une protection supplémentaire avec AWS DDoS Response Team (DRT). L'origin réelle est masquée derrière les IPs GA."
  },
  {
    id:"saa-j6-22",
    q:"Votre application CloudFront présente des erreurs de cache 'miss' élevés. Comment améliorer le cache hit ratio ?",
    choices:["Réduire le nombre de Query Strings, Headers et Cookies inclus dans la Cache Key (ne garder que les indispensables) + augmenter le TTL default + utiliser des Cache Policies optimisées","Activer Transfer Acceleration","Réduire le nombre de Behaviors","Augmenter le nombre d'Edge Locations"],
    answer:0,
    exp:"Améliorer le Cache Hit Ratio CloudFront : (1) Minimiser la Cache Key : inclure uniquement les Query Strings et Headers qui changent vraiment le contenu (ex: pas Content-Language si votre contenu est mono-langue). (2) Augmenter le Default TTL. (3) Normaliser les Query Strings (ordre alphabétique) avant d'atteindre CloudFront. (4) Activer la compression (gzip/Brotli) : même objet compressé = taille réduite sans cache miss. (5) Origin Shield : cache centralisé devant l'origin."
  },
  {
    id:"saa-j6-23",
    q:"Qu'est-ce que CloudFront Origin Shield et quel bénéfice apporte-t-il ?",
    choices:["Un cache additionnel centralisé dans une région AWS entre les Regional Edge Caches et l'origin. Réduit la charge sur l'origin en centralisant les requêtes cache-miss","Protection contre les attaques sur l'origin","Load balancer entre plusieurs origins","Service de monitoring de l'origin"],
    answer:0,
    exp:"CloudFront Origin Shield : couche de cache supplémentaire dans une région AWS que vous choisissez. Sans Origin Shield : chaque Regional Edge Cache (13 dans le monde) contacte indépendamment votre origin en cas de cache miss. Avec Origin Shield : tous les Regional Edge Caches passent par Origin Shield → une seule région contacte l'origin. Réduction drastique de la charge origin."
  },
  {
    id:"saa-j6-24",
    q:"Quel type de contenu NE DEVRAIT PAS être mis en cache par CloudFront ?",
    choices:["Contenu dynamique et personnalisé par utilisateur (panier d'achat, profil utilisateur, données bancaires), APIs en temps réel, contenu modifié très fréquemment sans versioning","Images statiques","Vidéos streaming","CSS et JavaScript"],
    answer:0,
    exp:"Ne pas mettre en cache : (1) Contenu personnalisé par session/user (shopping cart, profil, données bancaires) → cache TTL=0 ou no-cache headers, (2) APIs en temps réel (cours bourse, tracking), (3) POST/PUT/DELETE requests (non-cachables par nature). Mettre en cache : images, CSS, JS (avec versioning dans les URLs), vidéos, PDFs, contenu statique. Best practice : inclure un hash dans les URLs des assets statiques."
  },
  {
    id:"saa-j6-25",
    q:"Comment implémenter un déploiement A/B testing avec CloudFront ?",
    choices:["Lambda@Edge sur Viewer Request : inspecter ou créer un cookie, router vers l'origin A ou B selon le cookie. Mettre le cookie dans la cache key pour éviter que les utilisateurs B voient la version A","Utiliser deux distributions CloudFront séparées et Route 53","Créer des Behaviors séparés pour /version-a/* et /version-b/*","Utiliser CloudFront Weighted Routing (n'existe pas dans CloudFront)"],
    answer:0,
    exp:"A/B Testing avec Lambda@Edge : (1) Viewer Request trigger : vérifier si le cookie 'experiment' existe. Si non, assigner aléatoirement (ex: 10% = B, 90% = A) et définir le cookie. (2) Router vers l'origin approprié selon le cookie. (3) Inclure le cookie dans la cache key → les utilisateurs groupe B voient toujours la version B. (4) Origin Request trigger : transmettre le cookie à l'origin pour le tracking."
  },
  {
    id:"saa-j6-26",
    q:"Comment CloudFront s'intègre avec AWS Certificate Manager (ACM) pour les certificats SSL ?",
    choices:["Créer le certificat ACM dans us-east-1 (N. Virginia) obligatoirement → CloudFront déploie automatiquement le certificat sur tous ses Edge Locations mondiaux","Créer le certificat dans chaque région où vous avez des Edge Locations","Acheter un certificat SSL externe et l'importer dans CloudFront","CloudFront génère automatiquement les certificats via Let's Encrypt"],
    answer:0,
    exp:"CloudFront + ACM : (1) La distribution CloudFront est un service global, les certificats doivent être dans us-east-1. (2) ACM provisionne le certificat gratuit avec renouvellement automatique. (3) CloudFront déploie ce certificat sur tous ses Edge Locations mondiaux. (4) Configurer le Viewer Certificate dans la distribution. (5) Pour SNI (Server Name Indication) : standard, gratuit. Pour IP dédiée : $600/mois."
  },
  {
    id:"saa-j6-27",
    q:"Votre application utilise CloudFront devant un ALB. Vous voulez que l'ALB accepte uniquement le trafic de CloudFront (pas d'accès direct). Comment ?",
    choices:["Configurer l'ALB Security Group pour autoriser uniquement les IPs des Edge Locations CloudFront + utiliser un Custom Header secret que CloudFront envoie à l'origin, vérifié par l'ALB","Utiliser un NLB à la place de l'ALB","Désactiver l'accès Internet à l'ALB","Configurer un VPC Endpoint pour CloudFront"],
    answer:0,
    exp:"Protéger l'ALB origin : (1) Custom Header : CloudFront envoie un header secret (ex: X-CloudFront-Secret: abc123) à l'origin. L'ALB ou le WAF attaché à l'ALB vérifie ce header. (2) IP Restriction : maintenir la liste des IPs CloudFront (aws.amazon.com/cloudfront/details#edge-locations) dans le Security Group ALB. (3) AWS Managed Prefix List pour CloudFront dans les Security Groups (maintenu automatiquement par AWS)."
  },
  {
    id:"saa-j6-28",
    q:"Qu'est-ce que CloudFront Real-time Logs et comment diffèrent-ils des Standard Logs ?",
    choices:["Real-time Logs : envoi immédiat (< 1 seconde) vers Kinesis Data Streams avec sampling rate configurable. Standard Logs : livraison dans un bucket S3 en 1-24h, tous les accès, format log file. Real-time pour monitoring immédiat, Standard pour l'archivage","Real-time Logs sont uniquement pour les distributions premium","Standard Logs sont en temps réel, Real-time Logs sont en différé","Ils sont identiques mais à des prix différents"],
    answer:0,
    exp:"CloudFront Standard Logs (Access Logs) : livraison vers S3 en 1-24h, tous les accès, sans coût additionnel CloudFront (coût S3 seulement). Real-time Logs : envoi vers Kinesis Data Streams en temps réel (< 1 seconde de délai), sampling rate configurable (1-100%), choix des champs à inclure. Coût additionnel par 1000 lignes. Utile pour les dashboards en temps réel (latence, hit ratio, erreurs)."
  },
  {
    id:"saa-j6-29",
    q:"Comment Global Accelerator permet-il un déploiement Blue/Green sans changement DNS ?",
    choices:["Modifier le poids des endpoints dans Global Accelerator (100% → Blue, puis progressivement vers Green) sans changer les 2 Anycast IPs → pas de propagation DNS, basculement instantané","Créer une nouvelle distribution Global Accelerator pour chaque déploiement","Utiliser Route 53 avec Global Accelerator","Global Accelerator ne supporte pas le Blue/Green"],
    answer:0,
    exp:"Global Accelerator Blue/Green : (1) L'accelerator a 2 IPs Anycast statiques (ne changent jamais). (2) Configurer des endpoints pour Blue (100%) et Green (0%). (3) Progressivement modifier les poids : 90/10, 70/30, etc. (4) Si problème avec Green : remettre Blue à 100%. (5) Les clients ne voient pas de changement d'IP → pas de TTL DNS à attendre. Basculement en secondes, pas en minutes."
  },
  {
    id:"saa-j6-30",
    q:"Qu'est-ce que la CloudFront Geo Restriction et comment fonctionne-t-elle ?",
    choices:["Allowlist ou Blocklist de pays pour restreindre ou autoriser l'accès à votre distribution CloudFront selon la localisation géographique du client (détectée par IP)","Restriction d'accès selon la région AWS de l'origin","Limitation de bande passante par pays","Chiffrement géographique des données"],
    answer:0,
    exp:"CloudFront Geo Restriction (ou Geographic Restrictions) : permet d'autoriser (allowlist) uniquement certains pays à accéder à votre distribution, ou de bloquer (blocklist) des pays spécifiques. Les requêtes des pays bloqués reçoivent une erreur 403 Forbidden. Utile pour : conformité légale (contenu sous droits géographiques), embargo, réduction des coûts de distribution. Pour des règles plus complexes : Lambda@Edge avec GeoIP."
  },
  {
    id:"saa-j6-31",
    q:"Comment implémenter un rate limiting sur une API CloudFront + AWS WAF ?",
    choices:["AWS WAF Rate-based rule : définir un seuil (ex: 2000 req/5min) par IP. Les IPs dépassant le seuil sont bloquées automatiquement pour une durée configurable. Associer le Web ACL à la distribution CloudFront","CloudFront a un rate limiting natif par IP","Utiliser Lambda@Edge pour le rate limiting","API Gateway gère le rate limiting, pas CloudFront"],
    answer:0,
    exp:"Rate limiting avec CloudFront + WAF : (1) Créer un Web ACL dans AWS WAF (région us-east-1 pour CloudFront). (2) Ajouter une Rate-based rule : ex 1000 requêtes/5 min par IP. (3) Action : BLOCK les IPs qui dépassent le seuil (automatiquement pendant 5 minutes après que les requêtes passent sous le seuil). (4) Associer le Web ACL à la distribution CloudFront. Peut être combiné avec des règles gérées (AWS Managed Rules)."
  },
  {
    id:"saa-j6-32",
    q:"Votre infrastructure utilise Global Accelerator avec des endpoints EC2 dans us-east-1 et eu-west-1. Comment le failover fonctionne-t-il en cas de panne de us-east-1 ?",
    choices:["Global Accelerator détecte via health checks que les endpoints us-east-1 sont unhealthy et route automatiquement tout le trafic vers eu-west-1 en < 30 secondes, sans changement DNS","Les 2 IPs Anycast changent automatiquement pour pointer vers eu-west-1","Les utilisateurs américains doivent manuellement changer d'URL","Global Accelerator ne supporte pas le failover automatique"],
    answer:0,
    exp:"Global Accelerator Failover : health checks sont envoyés en permanence aux endpoints dans chaque région. Si us-east-1 devient unhealthy (HTTP check échoue, TCP timeout), Global Accelerator bascule automatiquement le trafic vers eu-west-1 en moins de 30 secondes. Les 2 Anycast IPs ne changent pas → les clients ne font rien de particulier (pas de DNS TTL à attendre)."
  },
  {
    id:"saa-j6-33",
    q:"Qu'est-ce que CloudFront Functions pour l'authentification et quelle est la limite d'exécution ?",
    choices:["CloudFront Functions peut valider des JWTs simples (vérification de signature HMAC), faire des redirections basées sur des headers, modifier des URLs. Limite : 1ms d'exécution, 2MB de code, uniquement Viewer Request/Response","CloudFront Functions peut appeler des APIs externes pour valider les tokens","Pas de limite d'exécution pour CloudFront Functions","CloudFront Functions supportent Python et Node.js"],
    answer:0,
    exp:"CloudFront Functions : JavaScript ES5.1 uniquement, exécution ≤ 1ms, code size ≤ 2MB, uniquement Viewer Request et Viewer Response. Pour une auth simple (JWT signature HMAC validation, header normalization, URL rewrite) : CloudFront Functions suffisent. Pour une auth complexe (appel API, DB lookup, traitement lourd) : Lambda@Edge (up to 30s, Node.js/Python, Origin Request/Response aussi)."
  },
  {
    id:"saa-j6-34",
    q:"Comment CloudFront peut-il améliorer les performances pour les utilisateurs de téléphonie mobile avec des connexions lentes ?",
    choices:["CloudFront compression automatique (gzip/Brotli), optimisation des images à la volée (avec Lambda@Edge ou CloudFront Functions), TCP connection pooling vers l'origin sur le réseau AWS","CloudFront ne peut pas optimiser pour le mobile","Utiliser CloudFront Price Class 100 pour le mobile","Les connexions mobiles ne bénéficient pas de CloudFront"],
    answer:0,
    exp:"CloudFront optimisations mobile : (1) Compression Brotli/gzip automatique : active si Compress Objects Automatically = Yes et l'objet est compressible (HTML, CSS, JS, JSON). (2) HTTP/2 et HTTP/3 (QUIC) aux Edge Locations : réduction du latency pour les connexions mobiles instables. (3) TCP keepalive vers l'origin : réutilisation des connexions. (4) Lambda@Edge : redimensionner les images selon le User-Agent device."
  },
  {
    id:"saa-j6-35",
    q:"Comment configurer CloudFront pour servir un SPA (Single Page Application) React/Vue avec React Router ?",
    choices:["Custom Error Response : pour les erreurs 403/404 (chemin non trouvé dans S3), retourner index.html avec HTTP 200. Cela permet à React Router de gérer le routing côté client","Créer un Behavior pour chaque route de l'application","Désactiver le cache pour le SPA","Utiliser Lambda@Edge pour le routing SPA"],
    answer:0,
    exp:"SPA avec CloudFront + S3 : (1) La distribution CloudFront sert index.html pour la route racine. (2) Quand un utilisateur accède directement à /about ou /dashboard, S3 retourne 403/404 (fichier n'existe pas). (3) Custom Error Response dans CloudFront : HTTP 403 → index.html avec HTTP 200, HTTP 404 → index.html avec HTTP 200. (4) React Router prend alors le relai pour le routing côté client."
  },
  {
    id:"saa-j6-36",
    q:"Qu'est-ce que l'AWS Global Accelerator Custom Routing Accelerator ?",
    choices:["Permet de mapper des ports spécifiques de l'accelerator vers des endpoints spécifiques (EC2, ports) dans les régions. Utile pour les applications qui nécessitent du traffic routing deterministe vers un serveur spécifique (gaming, VoIP)","Remplace le Standard Accelerator pour toutes les applications","Utilisé uniquement pour le routage DNS","Custom Routing est pour les APIs REST uniquement"],
    answer:0,
    exp:"Global Accelerator Custom Routing : standard accelerator route vers le endpoint le plus sain. Custom Routing : mapper des ports spécifiques de l'accelerator vers des combinaisons spécifiques instance/port dans les VPCs. Exemple : jeu multijoueur où chaque session doit aller vers un serveur de jeu spécifique. L'application contrôle le mapping port↔instance. Les 2 Anycast IPs + ports spécifiques = session fixée à un serveur."
  },
  {
    id:"saa-j6-37",
    q:"Votre application web utilise des WebSockets pour les notifications en temps réel. CloudFront peut-il gérer les connexions WebSocket ?",
    choices:["Oui, CloudFront supporte nativement les WebSockets (protocole HTTP/1.1 Upgrade). Configurer le Behavior pour l'endpoint WebSocket sans caching (TTL=0)","Non, utiliser Global Accelerator pour les WebSockets","Oui mais uniquement avec Lambda@Edge","Non, les WebSockets nécessitent un NLB direct"],
    answer:0,
    exp:"CloudFront supporte les WebSockets nativement depuis 2018 : les connexions HTTP qui se 'upgradent' en WebSocket passent transparentement à travers CloudFront vers l'origin. Configuration : (1) Behavior avec Allowed HTTP Methods incluant tous les verbes. (2) Cache Policy : No-cache (TTL=0) pour l'endpoint WebSocket. (3) Viewer Protocol Policy : HTTPS only pour sécurité. L'origin (ALB, EC2) gère la connexion WebSocket persistante."
  },
  {
    id:"saa-j6-38",
    q:"Comment mesurer et surveiller les performances de CloudFront avec les outils AWS natifs ?",
    choices:["CloudWatch métriques CloudFront (Requests, BytesDownloaded, BytesUploaded, 4xxErrorRate, 5xxErrorRate, CacheHitRate) + CloudFront Real-time Dashboard dans la console + Real-time Logs vers Kinesis","Uniquement via les logs S3 Access Logs de CloudFront","CloudTrail pour toutes les métriques de performance","Pingdom ou New Relic uniquement"],
    answer:0,
    exp:"Monitoring CloudFront : (1) CloudWatch Metrics : Requests, BytesDownloaded, 4xx/5xx Error Rates, Cache Hit Rate (CacheHitRate = Hits/(Hits+Misses)). (2) CloudFront Console Reports : Cache Statistics, Popular Objects, Top Referrers, Usage Reports (dans la console). (3) Real-time Logs → Kinesis Data Streams → Lambda/OpenSearch pour dashboards custom. (4) AWS CloudFront Functions métriques dans CloudWatch."
  },
  {
    id:"saa-j6-39",
    q:"Comment réduire les coûts de transfert de données entre CloudFront et une origin S3 dans la même région ?",
    choices:["Pas de frais de transfert entre CloudFront et S3 dans la même région AWS. Utiliser S3 comme origin CloudFront élimine le data transfer out cost entre S3 et CloudFront","Les transferts CloudFront→S3 coûtent le même prix qu'Internet","Utiliser S3 Transfer Acceleration pour réduire les coûts","Compresser les objets avant de les stocker dans S3"],
    answer:0,
    exp:"Modèle de coût CloudFront + S3 : (1) Data Transfer S3 → CloudFront (même région) : GRATUIT (no data transfer out charges). (2) CloudFront → Internet : facturation par Data Transfer Out to Internet (moins cher que les frais S3 Direct Data Transfer Out). (3) HTTP Requests : facturation par 10 000 requêtes. En utilisant CloudFront devant S3, vous réduisez les coûts de data transfer ET améliorez les performances."
  },
  {
    id:"saa-j6-40",
    q:"Votre distribution CloudFront sert des millions d'utilisateurs. Comment implémenter un 'dark mode' switch côté serveur (via cookie) sans dupliquer le cache ?",
    choices:["CloudFront Cache Policy : inclure le cookie 'theme' (light/dark) dans la Cache Key → CloudFront maintient 2 versions en cache (une par valeur de cookie). Chaque version est correctement servie selon le cookie","Désactiver complètement le cache pour les pages avec dark mode","Utiliser deux distributions CloudFront (une light, une dark)","Lambda@Edge pour modifier dynamiquement le CSS"],
    answer:0,
    exp:"Cache avec variations de cookies : configurer la Cache Policy de CloudFront pour inclure uniquement les cookies nécessaires dans la cache key (ex: 'theme=light' et 'theme=dark'). CloudFront maintient 2 entrées cache pour la même URL selon la valeur du cookie. Best practice : utiliser un cookie spécifique et limitez les valeurs possibles pour éviter une explosion du nombre d'entrées cache."
  },
  {
    id:"saa-j6-41",
    q:"Comment Global Accelerator gère-t-il les endpoints dans plusieurs régions avec des poids différents ?",
    choices:["Chaque endpoint group (par région) a un trafic dial (0-100%) configurable. Des endpoint weights (0-255) distribuent le trafic au sein d'un endpoint group. Combinés : permet de faire du blue/green et du weighted routing entre régions","Global Accelerator distribue toujours équitablement entre les régions","Les poids ne sont configurables qu'entre endpoints dans la même région","Global Accelerator utilise uniquement le latency routing, sans poids"],
    answer:0,
    exp:"Global Accelerator routing : (1) Traffic Dial par endpoint group (région) : % du trafic total vers cette région (0-100%). (2) Endpoint Weight dans un endpoint group : distribution au sein d'un groupe (ALB weight 128 reçoit 2x plus qu'un ALB weight 64). (3) Health Checks : exclut automatiquement les endpoints unhealthy. Combinaison : 10% trafic vers eu-west-1 (canary) + 90% us-east-1."
  },
  {
    id:"saa-j6-42",
    q:"Qu'est-ce que l'AWS Shield Advanced et comment s'intègre-t-il à CloudFront ?",
    choices:["Protection DDoS avancée ($3000/mois) : détection et mitigation automatiques des attaques L3/L4/L7, AWS DDoS Response Team (DRT) 24/7, remboursement des coûts AWS liés aux attaques DDoS, rapports détaillés. S'intègre nativement à CloudFront et Global Accelerator","AWS Shield Standard (gratuit) est identique à Shield Advanced","Shield Advanced est uniquement pour les ALBs et NLBs","Shield Advanced nécessite un agent sur les instances EC2"],
    answer:0,
    exp:"AWS Shield Advanced ($3000/mois + data transfer costs) : (1) Protection DDoS Layer 3/4/7 avancée pour CloudFront, Global Accelerator, ALB, NLB, Elastic IPs. (2) Mitigation en temps réel avec règles AWS WAF automatiques. (3) AWS DDoS Response Team (DRT) : support direct pendant une attaque. (4) Cost protection : remboursement des frais AWS scalingliés à une attaque. (5) Threat intelligence et rapports. Shield Standard : inclus gratuitement, protection basique L3/L4."
  },
  {
    id:"saa-j6-43",
    q:"Comment configurer CloudFront pour qu'il serve deux versions d'une API selon la version demandée dans l'URL ?",
    choices:["Créer deux Behaviors dans la distribution : /v1/* → origin ALB-v1, /v2/* → origin ALB-v2. Le /* default Behavior peut pointer vers la version courante","Une seule distribution ne peut gérer qu'une version","Utiliser deux distributions CloudFront séparées","Lambda@Edge pour le routing de version est obligatoire"],
    answer:0,
    exp:"Multi-version avec CloudFront Behaviors : (1) Behavior /v1/* → pointant vers l'origin de l'API v1 (ALB, API Gateway, etc.). (2) Behavior /v2/* → pointant vers l'origin de l'API v2. (3) Behavior /* (Default) → version courante ou page d'accueil. Chaque Behavior peut avoir ses propres paramètres de cache, headers, etc. Pas de limite stricte sur le nombre de Behaviors (max 25 par distribution)."
  },
  {
    id:"saa-j6-44",
    q:"Quelle est la différence entre CloudFront et AWS Global Accelerator en termes de mise en cache ?",
    choices:["CloudFront met en cache les réponses HTTP au niveau des Edge Locations (CDN). Global Accelerator ne met PAS en cache : il route le trafic TCP/UDP directement vers l'origin via le backbone AWS","Global Accelerator met en cache les objets statiques","Les deux mettent en cache de manière identique","CloudFront ne met en cache que les images, Global Accelerator met en cache les APIs"],
    answer:0,
    exp:"Différence fondamentale : CloudFront = CDN avec CACHE. Les réponses sont mises en cache aux Edge Locations, réduisant les requêtes origin. Global Accelerator = réseau de routage SANS CACHE. Chaque requête arrive à l'origin (via le backbone AWS optimisé). Choisir : CloudFront pour le contenu cacheable (images, vidéos, pages statiques, APIs avec cache-control). Global Accelerator pour le contenu non-cacheable (TCP, gaming, finance temps-réel)."
  },
  {
    id:"saa-j6-45",
    q:"Comment auditer les accès à une distribution CloudFront pour la conformité ?",
    choices:["CloudTrail enregistre les appels API de configuration CloudFront + CloudFront Access Logs vers S3 enregistrent chaque requête HTTP (viewer IP, path, response code, bytes, edge location)","CloudFront ne génère pas de logs d'audit","Uniquement via AWS Config pour les changements de configuration","AWS Macie analyse automatiquement les logs CloudFront"],
    answer:0,
    exp:"Audit CloudFront : (1) AWS CloudTrail : logs de tous les appels API CloudFront (création/modification distribution, invalidations, etc.) → audit de la configuration. (2) CloudFront Standard Access Logs : logs de chaque requête HTTP (viewer IP, date/heure, edge PoP, URL, response code, bytes envoyés, referrer, user-agent). Livrés dans un bucket S3 toutes les heures. (3) Real-time Logs : pour l'analyse en quasi-temps réel via Kinesis."
  },
  {
    id:"saa-j6-46",
    q:"Votre distribution CloudFront fait face à des attaques de type HTTP flood (DDoS L7). Quelle est la première ligne de défense ?",
    choices:["AWS WAF Rate-based rules associé à la distribution CloudFront + AWS Shield Advanced pour les grandes attaques. Les attaques sont absorbées aux Edge Locations CloudFront, loin de l'origin","Augmenter la capacité de l'origin (Auto Scaling)","Contacter AWS Support pour bloquer les IPs","Désactiver CloudFront et utiliser Global Accelerator"],
    answer:0,
    exp:"Protection HTTP flood avec CloudFront : (1) AWS WAF Rate-based rules : bloquer les IPs dépassant X req/5min. (2) AWS WAF Managed Rules (IP Reputation, Bot Control) : bloquer les IPs malveillantes connues. (3) CloudFront Geo Restriction : bloquer les pays sources de l'attaque. (4) Shield Advanced : mitigation automatique + DRT support. Ces protections s'appliquent aux Edge Locations → l'origin n'est pas atteinte."
  },
  {
    id:"saa-j6-47",
    q:"Comment CloudFront peut-il améliorer les performances pour le streaming vidéo adaptatif (HLS, DASH) ?",
    choices:["CloudFront met en cache les segments vidéo HLS/DASH (fichiers .ts, .m4s, .mpd, .m3u8) aux Edge Locations. Les manifestes sont servis avec un TTL court, les segments avec un TTL long. CloudFront supporte Range requests pour la reprise","HLS nécessite un service de streaming dédié, pas CloudFront","CloudFront ne supporte pas le streaming vidéo adaptatif","Utiliser AWS Elemental MediaStore au lieu de CloudFront"],
    answer:0,
    exp:"CloudFront pour HLS/DASH : (1) Segments video (.ts, .m4s) : cache-control max-age long → mis en cache aux Edge Locations → servitude depuis le cache. (2) Manifestes (.m3u8, .mpd) : TTL court ou no-cache pour les live streams, cache-able pour le VOD. (3) Range Requests : CloudFront supporte les Range headers → players peuvent reprendre le téléchargement. (4) Origin : S3 (VOD) ou AWS Elemental MediaPackage (live)."
  },
  {
    id:"saa-j6-48",
    q:"Qu'est-ce que le CloudFront Field-Level Encryption et quand l'utiliser ?",
    choices:["Chiffre des champs spécifiques des requêtes HTTP POST (ex: numéro de carte bancaire) avec une clé publique RSA. Seule votre application avec la clé privée peut déchiffrer. Les données restent chiffrées même dans CloudFront","Chiffre toute la communication entre utilisateurs et CloudFront","Chiffre les données stockées dans le cache CloudFront","Chiffre les connexions entre CloudFront et l'origin"],
    answer:0,
    exp:"CloudFront Field-Level Encryption : (1) Configurer quels champs POST chiffrer (ex: 'creditCardNumber'). (2) CloudFront Edge chiffre ces champs avec votre clé publique RSA 2048 bits. (3) Les données chiffrées traversent l'origin (ALB, EC2) et les couches intermédiaires sans être déchiffrées. (4) Seul le microservice final avec votre clé privée peut déchiffrer. Protection contre les accès non-autorisés dans vos propres couches intermédiaires."
  },
  {
    id:"saa-j6-49",
    q:"Comment utiliser CloudFront pour héberger une application multi-tenant où chaque tenant a son propre sous-domaine ?",
    choices:["Wildcard Certificate ACM (*.example.com) + CloudFront Distribution avec Alternate Domain Names *.example.com + Lambda@Edge sur Viewer Request pour router selon le Host header vers l'origin du tenant","Créer une distribution CloudFront par tenant (non scalable)","Route 53 Wildcard record suffisant sans CloudFront","SNI CloudFront supporte uniquement les domaines fixes, pas les wildcards"],
    answer:0,
    exp:"Multi-tenant CloudFront : (1) Certificat ACM wildcard *.example.com en us-east-1. (2) Distribution CloudFront avec alternate domain name *.example.com. (3) Lambda@Edge sur Origin Request : inspecter le Host header (tenant1.example.com) → déterminer l'origin du tenant (ALB-tenant1 ou paramètre dans DynamoDB). (4) Route 53 wildcard A record → CloudFront distribution. Une seule distribution, N tenants."
  },
  {
    id:"saa-j6-50",
    q:"Votre architecture nécessite à la fois un CDN (CloudFront) et une accélération des performances globales pour une API non-HTTP. Comment combiner les deux services ?",
    choices:["Utiliser CloudFront pour le contenu web statique et les APIs HTTP, et Global Accelerator séparément pour les applications TCP/UDP non-HTTP. Les deux peuvent coexister pour des workloads différents","Global Accelerator doit être déployé derrière CloudFront","CloudFront peut remplacer Global Accelerator dans tous les cas","Les deux services ne peuvent pas être utilisés simultanément"],
    answer:0,
    exp:"Architecture hybride : (1) CloudFront : website, API REST (HTTP/HTTPS), contenus statiques, streaming vidéo. Les Edge Locations avec cache réduisent la charge origin. (2) Global Accelerator : UDP gaming, VoIP TCP, IoT, apps nécessitant des IPs statiques. Routage sur backbone AWS sans cache. Les deux services utilisent le même réseau de PoPs AWS mais ont des cas d'usage distincts et complémentaires."
  }
];

window.QDATA[7] = [
{id:"saa-j7-1",q:"Une application e-commerce doit traiter des commandes sans en perdre aucune, même si le service de traitement est temporairement indisponible. Quelle solution AWS convient le mieux ?",choices:["Amazon SNS avec abonnements HTTP","Amazon SQS Standard Queue","Amazon EventBridge avec règles","AWS Step Functions"],answer:1,exp:"SQS Standard Queue est un service de messagerie durables qui stocke les messages jusqu'à ce qu'ils soient traités. Même si le consommateur est indisponible, les messages sont conservés (jusqu'à 14 jours), garantissant qu'aucune commande n'est perdue."},
{id:"saa-j7-2",q:"Votre application publie des événements vers plusieurs services (email, SMS, analytics, archivage). Chaque service doit recevoir une copie de chaque événement. Quelle architecture AWS est la plus adaptée ?",choices:["SQS avec plusieurs consommateurs sur la même queue","SNS Topic avec plusieurs abonnements","EventBridge avec plusieurs règles","SQS FIFO avec groupes de messages"],answer:1,exp:"SNS (Simple Notification Service) implémente le pattern fan-out : un message publié sur un Topic SNS est automatiquement livré à tous les abonnés (SQS, Lambda, HTTP, email, SMS). C'est la solution native AWS pour la distribution 1-vers-N."},
{id:"saa-j7-3",q:"Une application doit traiter des transactions financières dans un ordre strict. Les transactions du même compte doivent être traitées séquentiellement. Quel service SQS utilisez-vous ?",choices:["SQS Standard Queue avec visibility timeout élevé","SQS FIFO Queue avec Message Group ID par compte","SQS Standard Queue avec Dead Letter Queue","SQS FIFO Queue sans Message Group ID"],answer:1,exp:"SQS FIFO avec Message Group ID garantit l'ordre strict des messages au sein d'un groupe. En utilisant l'ID de compte comme Message Group ID, toutes les transactions d'un compte sont traitées dans l'ordre d'arrivée."},
{id:"saa-j7-4",q:"Un message SQS est en cours de traitement par un consommateur. Pendant 30 secondes, le message est invisible aux autres consommateurs. Après 30 secondes, le message redevient visible. Quel paramètre SQS contrôle cela ?",choices:["Message Retention Period","Delivery Delay","Visibility Timeout","Receive Message Wait Time"],answer:2,exp:"Le Visibility Timeout est la durée pendant laquelle un message récupéré est invisible pour les autres consommateurs. Si le traitement n'est pas terminé avant l'expiration, le message redevient visible et peut être traité par un autre consommateur. La valeur par défaut est 30 secondes."},
{id:"saa-j7-5",q:"Après 5 tentatives de traitement infructueuses, les messages doivent être redirigés vers une queue séparée pour analyse. Comment configurer cela dans SQS ?",choices:["Configurer une Dead Letter Queue (DLQ) avec maxReceiveCount=5","Utiliser SQS FIFO avec un message group dédié aux erreurs","Créer une Lambda qui surveille les erreurs et déplace les messages","Configurer un SNS Topic pour capturer les échecs"],answer:0,exp:"La Dead Letter Queue (DLQ) est une queue SQS dédiée aux messages qui ont échoué. En configurant maxReceiveCount=5, les messages qui ont été récupérés 5 fois sans succès sont automatiquement envoyés vers la DLQ pour inspection et débogage."},
{id:"saa-j7-6",q:"Votre Lambda consomme des messages SQS. Après traitement, si Lambda échoue et lève une exception, que se passe-t-il avec le message SQS ?",choices:["Le message est automatiquement supprimé de la queue","Le message redevient visible dans la queue après le Visibility Timeout","Le message est envoyé directement à la DLQ","Le message est archivé dans S3"],answer:1,exp:"Quand Lambda échoue, elle ne supprime pas le message SQS (DeleteMessage n'est pas appelé). Après l'expiration du Visibility Timeout, le message redevient visible dans la queue et peut être récupéré par une autre invocation Lambda. C'est pourquoi le Visibility Timeout doit dépasser le timeout Lambda."},
{id:"saa-j7-7",q:"Une application publie des notifications vers 100 000 abonnés mobiles iOS et Android. Quel service AWS gère efficacement l'envoi de push notifications à grande échelle ?",choices:["Amazon SNS avec subscriptions directes","Amazon SNS avec Amazon Device Messaging (ADM)","Amazon SNS avec Platform Application (APNS/FCM)","Amazon Pinpoint uniquement"],answer:2,exp:"SNS supporte les push notifications mobiles via des Platform Applications qui s'intègrent avec APNS (Apple Push Notification Service) pour iOS et FCM (Firebase Cloud Messaging) pour Android. SNS gère la livraison à grande échelle vers des endpoints mobiles."},
{id:"saa-j7-8",q:"Vous souhaitez réduire le nombre d'appels API à votre base de données en regroupant plusieurs messages SQS en un seul traitement. Quelle fonctionnalité Lambda/SQS utilisez-vous ?",choices:["Lambda Destinations","SQS Long Polling","Lambda Event Source Mapping avec batch size","SQS Message Attributes"],answer:2,exp:"L'Event Source Mapping Lambda-SQS permet de configurer un batch size (jusqu'à 10 000 messages) : Lambda reçoit un lot de messages en une seule invocation. Cela réduit les appels répétitifs à la base de données en traitant plusieurs messages ensemble."},
{id:"saa-j7-9",q:"Un service SQS reçoit des messages mais votre consommateur fait du polling toutes les secondes sans trouver de messages la plupart du temps. Comment optimiser cela pour réduire les coûts ?",choices:["Augmenter le Visibility Timeout","Activer le Long Polling (WaitTimeSeconds > 0)","Activer le Short Polling","Utiliser SQS FIFO à la place"],answer:1,exp:"Le Long Polling (WaitTimeSeconds entre 1-20 secondes) permet à SQS d'attendre qu'un message soit disponible avant de répondre, réduisant les réponses vides et le nombre d'appels API. Le Short Polling (par défaut) répond immédiatement, même si la queue est vide, générant des coûts inutiles."},
{id:"saa-j7-10",q:"Votre application envoie des messages SQS volumineux de 300 KB mais SQS a une limite de 256 KB par message. Quelle est la solution recommandée par AWS ?",choices:["Compresser les messages avec GZIP","Utiliser la SQS Extended Client Library avec S3","Découper les messages manuellement","Utiliser SNS à la place de SQS"],answer:1,exp:"La SQS Extended Client Library stocke automatiquement les payloads dépassant 256 KB dans S3 et envoie dans SQS un message de référence contenant le pointeur S3. Le consommateur utilise la même bibliothèque pour récupérer automatiquement le payload depuis S3."},
{id:"saa-j7-11",q:"Un Topic SNS doit envoyer des notifications par email aux administrateurs ET stocker tous les événements dans une queue SQS pour traitement asynchrone. Quelle configuration choisissez-vous ?",choices:["Deux Topics SNS séparés, un par destination","Un Topic SNS avec deux subscriptions : Email et SQS","Une queue SQS qui envoie vers SNS","Lambda intermédiaire entre SNS et SQS"],answer:1,exp:"Un seul Topic SNS peut avoir plusieurs abonnements de types différents. En ajoutant une subscription Email et une subscription SQS au même Topic, chaque message publié est livré simultanément aux administrateurs par email et stocké dans SQS pour traitement."},
{id:"saa-j7-12",q:"Amazon EventBridge reçoit des événements AWS CloudTrail (AppConfig, EC2, S3). Vous souhaitez déclencher une Lambda uniquement pour les événements EC2 de type 'TerminateInstances'. Comment configurer cela ?",choices:["Créer une règle EventBridge avec un event pattern filtrant source=ec2 et detail-type=TerminateInstances","Créer une règle EventBridge sans filtre et filtrer dans Lambda","Utiliser CloudWatch Events à la place","Configurer SNS pour filtrer les événements EC2"],answer:0,exp:"EventBridge Rules utilisent des Event Patterns pour filtrer les événements. En spécifiant source: ['aws.ec2'] et detail.eventName: ['TerminateInstances'] dans le pattern, seuls ces événements spécifiques déclenchent la Lambda, réduisant les invocations inutiles."},
{id:"saa-j7-13",q:"Vous devez créer un pipeline de traitement où chaque étape dépend de la précédente : validation → enrichissement → notification. Si une étape échoue, le processus doit s'arrêter. Quel service AWS convient le mieux ?",choices:["Chaîne de Lambdas connectées par SQS","Amazon EventBridge avec règles en cascade","AWS Step Functions","SNS avec filtres de messages"],answer:2,exp:"AWS Step Functions orchestre des workflows séquentiels avec gestion des erreurs intégrée. Chaque état peut être conditionnel, et en cas d'échec, l'exécution s'arrête et peut déclencher une compensation. C'est la solution idéale pour des flux de traitement complexes avec dépendances."},
{id:"saa-j7-14",q:"Plusieurs équipes indépendantes doivent publier des événements métier (commandes, paiements, livraisons) sur un bus partagé. D'autres équipes consomment sélectivement ces événements. Quel service AWS implémente ce pattern ?",choices:["SQS avec queues partagées","SNS avec un seul Topic global","Amazon EventBridge avec un Event Bus personnalisé","Kinesis Data Streams"],answer:2,exp:"EventBridge Custom Event Bus est conçu pour l'intégration d'applications. Les producteurs publient des événements sur le bus ; les consommateurs créent des règles avec des event patterns pour ne recevoir que les événements pertinents. C'est l'architecture event-driven native d'AWS."},
{id:"saa-j7-15",q:"Un Topic SNS envoie des messages vers une Lambda. Dans certains cas, la Lambda est temporairement surchargée et ne peut pas traiter les messages immédiatement. Que se passe-t-il avec les messages non livrés ?",choices:["SNS les stocke jusqu'à 14 jours","SNS retente la livraison selon une retry policy, puis les envoie à une DLQ si configurée","Les messages sont perdus immédiatement","SNS met les messages en attente indéfiniment"],answer:1,exp:"SNS retente automatiquement la livraison en cas d'échec avec un backoff exponentiel. Si la DLQ (Dead Letter Queue) est configurée pour l'abonnement SNS, les messages qui échouent après toutes les tentatives y sont envoyés. Sans DLQ, les messages peuvent être perdus."},
{id:"saa-j7-16",q:"Une queue SQS FIFO reçoit des messages de plusieurs producteurs. Chaque producteur doit garantir qu'il n'envoie pas de doublons, même en cas de retry réseau. Quel mécanisme SQS utiliser ?",choices:["Message Deduplication ID avec Content-Based Deduplication","Visibility Timeout étendu","Dead Letter Queue","Message Group ID uniquement"],answer:0,exp:"SQS FIFO supporte la déduplication via le Message Deduplication ID. Avec Content-Based Deduplication activé, SQS calcule automatiquement un hash SHA-256 du corps du message. Tout message identique reçu dans les 5 minutes est ignoré, éliminant les doublons dus aux retries."},
{id:"saa-j7-17",q:"Votre application doit traiter des images uploadées dans S3. Dès qu'une image est uploadée, elle doit être envoyée pour traitement. Quelle est l'architecture la plus simple ?",choices:["Polling Lambda qui surveille S3 toutes les minutes","S3 Event Notification vers SQS, Lambda consume la queue","CloudWatch Events qui vérifie S3","Kinesis Data Streams pour capturer les événements S3"],answer:1,exp:"S3 Event Notifications peuvent envoyer directement vers SQS, SNS ou Lambda. En publiant les événements S3 (s3:ObjectCreated) vers SQS, et en configurant Lambda comme consommateur, chaque upload déclenche automatiquement le traitement. SQS agit comme buffer pour gérer les pics de charge."},
{id:"saa-j7-18",q:"Amazon EventBridge Scheduler doit déclencher une Lambda tous les jours à 8h00 UTC pour générer des rapports. Comment configurer cette planification ?",choices:["cron(0 8 * * ? *) comme expression de planification","rate(1 day) comme expression de planification","Créer une règle EventBridge avec cron(0 8 * * ? *)","Utiliser CloudWatch Logs Metric Filter"],answer:2,exp:"EventBridge (anciennement CloudWatch Events) supporte les règles planifiées avec des expressions cron ou rate. L'expression cron(0 8 * * ? *) déclenche à 8h00 UTC chaque jour. Les ? dans les champs sont requis car cron AWS ne supporte pas les astérisques simultanés sur day-of-month et day-of-week."},
{id:"saa-j7-19",q:"Une application utilise SNS pour envoyer des alertes. Certains abonnés ne doivent recevoir que les alertes 'CRITICAL', d'autres toutes les alertes. Comment configurer cela sans plusieurs Topics SNS ?",choices:["Créer des queues SQS différentes par niveau","Utiliser SNS Message Filtering avec des filter policies par abonnement","Créer un Lambda qui route les messages","Utiliser EventBridge à la place de SNS"],answer:1,exp:"SNS Message Filtering permet de définir une filter policy par abonnement. L'abonné 'CRITICAL uniquement' reçoit une policy {\"severity\":[\"CRITICAL\"]} ; l'abonné 'tout' ne reçoit pas de filter policy (ou une policy permissive). Les messages doivent inclure les attributs correspondants."},
{id:"saa-j7-20",q:"Votre SQS Standard Queue traite des messages avec 10 consommateurs Lambda concurrents. Certains messages sont traités deux fois à cause de la nature at-least-once delivery. Comment éliminer les doublons ?",choices:["Passer à SQS FIFO Queue","Implémenter l'idempotence côté consommateur","Réduire le nombre de consommateurs à 1","Augmenter le Visibility Timeout à 24 heures"],answer:1,exp:"SQS Standard offre une livraison at-least-once et un ordonnancement best-effort — les doublons sont possibles par conception. La solution recommandée est l'idempotence côté application : utiliser l'ID de message SQS comme clé d'idempotence dans DynamoDB ou ElastiCache pour ignorer les messages déjà traités."},
{id:"saa-j7-21",q:"Un Event Bus EventBridge reçoit des événements d'une application tierce via l'API PutEvents. Vous souhaitez archiver tous ces événements pour pouvoir les rejouer plus tard. Quelle fonctionnalité EventBridge utilisez-vous ?",choices:["EventBridge Pipes","EventBridge Archive","EventBridge Schema Registry","EventBridge Scheduler"],answer:1,exp:"EventBridge Archive capture automatiquement tous les événements d'un Event Bus et les stocke pendant une période configurable (ou indéfiniment). En cas de besoin, EventBridge Replay permet de rejouer ces événements archivés vers le même bus ou un autre bus."},
{id:"saa-j7-22",q:"Votre application publie des messages dans SQS mais certains messages ne doivent être traités qu'après 30 minutes (ex: annulation d'une commande si non confirmée). Comment implémenter cela ?",choices:["Delivery Delay sur le message (jusqu'à 15 minutes) puis une seconde queue","SQS Message Timer avec delay de 30 minutes","Delivery Delay de la queue configuré à 30 minutes","Utiliser EventBridge Scheduler pour décaler l'envoi"],answer:3,exp:"SQS Delivery Delay est limité à 15 minutes maximum par message. Pour des délais de 30 minutes, EventBridge Scheduler peut déclencher l'envoi du message SQS au bon moment. Alternativement, Step Functions peut attendre 30 minutes avant d'envoyer le message."},
{id:"saa-j7-23",q:"Un service Lambda doit être déclenché par des événements de PLUSIEURS sources : S3, DynamoDB Streams, et SQS. Comment architecturer cette Lambda ?",choices:["Créer une Lambda séparée par source d'événements","Utiliser une Lambda avec plusieurs Event Source Mappings","Créer un SNS Topic qui agrège toutes les sources","Utiliser EventBridge pour normaliser tous les événements"],answer:1,exp:"Une seule Lambda peut avoir plusieurs Event Source Mappings configurés simultanément (SQS, DynamoDB Streams, Kinesis, etc.). Chaque mapping est indépendant et déclenche la même fonction Lambda avec un event dont la structure varie selon la source (accessible via event['Records'][0]['eventSource'])."},
{id:"saa-j7-24",q:"Dans une architecture microservices, le service A doit notifier plusieurs autres services d'une mise à jour. Les services B et C sont critiques et ne doivent pas manquer les notifications. Le service D est optionnel. Quelle architecture ?",choices:["SNS Topic avec subscriptions SQS pour B et C, et subscription Lambda directe pour D","SQS FIFO Queue avec tous les services en consommateurs","Appels API synchrones de A vers B, C et D","EventBridge avec event patterns différents par service"],answer:0,exp:"Pour B et C (critiques) : SNS→SQS garantit que les messages sont conservés même si ces services sont indisponibles. Pour D (optionnel) : une subscription Lambda directe sur SNS est acceptable car les pertes de messages sont tolérées. Ce pattern fan-out hybride est recommandé par AWS."},
{id:"saa-j7-25",q:"Quelle est la différence principale entre Amazon SQS et Amazon Kinesis Data Streams ?",choices:["SQS est pour les messages < 256 KB, Kinesis pour les grands volumes uniquement","SQS supprime les messages après consommation ; Kinesis conserve les données et permet la relecture par plusieurs consommateurs","SQS est serverless, Kinesis nécessite des serveurs","SQS supporte uniquement JSON, Kinesis supporte tous les formats"],answer:1,exp:"SQS supprime les messages après leur traitement réussi ; chaque message est consommé une fois. Kinesis conserve les données pendant 24h à 365 jours et plusieurs consommateurs peuvent lire le même flux indépendamment. SQS est pour la messagerie, Kinesis pour le streaming de données en temps réel avec multiple readers."},
{id:"saa-j7-26",q:"Un Topic SNS doit envoyer des messages vers une queue SQS dans un autre compte AWS. Quelle condition doit être remplie ?",choices:["Les deux comptes doivent être dans la même organisation AWS","La queue SQS doit avoir une resource policy qui autorise sns:SendMessage depuis le Topic SNS","SNS ne peut pas envoyer vers des comptes différents","Il faut VPC Peering entre les deux comptes"],answer:1,exp:"Pour qu'un Topic SNS cross-account puisse publier vers une queue SQS, la queue SQS doit avoir une Resource Policy (Access Policy) qui autorise explicitement l'action sqs:SendMessage avec la condition que le Principal soit le Topic SNS (via son ARN)."},
{id:"saa-j7-27",q:"EventBridge reçoit un événement avec detail-type: 'OrderPlaced'. Vous souhaitez transformer cet événement avant de l'envoyer à Lambda (renommer des champs, extraire des données). Quelle fonctionnalité EventBridge utilisez-vous ?",choices:["EventBridge Archive","Input Transformer dans la règle EventBridge","EventBridge Pipes","SNS Message Attributes"],answer:1,exp:"L'Input Transformer d'EventBridge permet de personnaliser l'événement avant sa livraison à la cible. Vous définissez des Input Paths pour extraire des champs de l'événement, puis un Input Template pour construire le payload transformé envoyé à Lambda."},
{id:"saa-j7-28",q:"Vous avez une SQS FIFO Queue avec un seul Message Group ID pour tous les messages. Quel est l'impact sur le débit ?",choices:["Aucun impact, le débit reste le même","Le débit est limité à 300 messages/seconde car un seul groupe est traité séquentiellement","Le débit augmente car les messages sont groupés","Les messages sont traités en parallèle au sein du groupe"],answer:1,exp:"Dans SQS FIFO, les messages d'un même Message Group ID sont traités séquentiellement et ne peuvent pas être traités en parallèle. Avec un seul groupe, le débit est limité à 300 TPS (ou 3000 avec batching). Pour paralléliser, utilisez plusieurs Message Group IDs différents."},
{id:"saa-j7-29",q:"Un système de notifications doit envoyer des SMS aux utilisateurs dans plusieurs pays. Comment SNS gère-t-il les SMS internationaux ?",choices:["SNS SMS ne fonctionne que dans la région us-east-1","SNS envoie des SMS directement via des opérateurs téléphoniques sans configuration supplémentaire","SNS utilise Amazon Pinpoint pour les SMS internationaux uniquement","SNS est limité aux USA pour les SMS"],answer:1,exp:"Amazon SNS peut envoyer des SMS dans de nombreux pays directement. Il n'est pas nécessaire de configurer des intégrations opérateurs : SNS gère cela via ses partenaires de livraison SMS. Les frais varient par pays et par type de message (Promotional vs Transactional)."},
{id:"saa-j7-30",q:"Votre application Lambda traite des messages SQS. Le Visibility Timeout de la queue est 30 secondes mais votre Lambda timeout est 60 secondes. Quel problème peut survenir ?",choices:["La Lambda sera throttlée après 30 secondes","Le message redevient visible avant la fin du traitement Lambda, causant un traitement double","SQS supprime automatiquement le message après 30 secondes","Le Lambda timeout sera automatiquement réduit à 30 secondes"],answer:1,exp:"Si le Visibility Timeout (30s) est inférieur au Lambda timeout (60s), le message redevient visible dans SQS avant que Lambda termine. Une autre invocation Lambda récupère ce même message, créant un traitement double. La règle est : Visibility Timeout >= Lambda timeout * 6 (pour les retries)."},
{id:"saa-j7-31",q:"Quelle est la capacité maximale de rétention des messages dans Amazon SQS ?",choices:["24 heures","7 jours","14 jours","30 jours"],answer:2,exp:"SQS peut conserver les messages pendant 1 minute minimum à 14 jours maximum (Message Retention Period). La valeur par défaut est 4 jours. Au-delà de la période de rétention, les messages sont automatiquement supprimés, qu'ils aient été traités ou non."},
{id:"saa-j7-32",q:"Dans un système SNS→SQS, comment protéger les messages contre la perte si la queue SQS est temporairement inaccessible ?",choices:["SNS stocke les messages localement pendant 24h","Configurer une DLQ sur l'abonnement SNS","SNS retente automatiquement jusqu'à 23 jours pour les endpoints SQS","Il n'est pas possible de protéger contre cette perte"],answer:2,exp:"Pour les endpoints SQS (et Lambda), SNS retente la livraison avec backoff exponentiel jusqu'à 23 jours. Durant cette période, si la queue SQS redevient accessible, SNS lui livrera les messages. Pour les endpoints HTTP/HTTPS, la retry policy est configurable mais plus courte."},
{id:"saa-j7-33",q:"Vous devez orchestrer un workflow complexe avec des branches conditionnelles, des états parallèles et une gestion des erreurs. Quel service AWS est le plus adapté ?",choices:["Amazon EventBridge avec règles multiples","AWS Step Functions Standard Workflow","Chaîne Lambda avec SNS entre chaque étape","SQS avec queues différentes par état"],answer:1,exp:"AWS Step Functions Standard Workflow est conçu pour les workflows complexes longue durée (jusqu'à 1 an). Il supporte les branches conditionnelles (Choice state), les états parallèles (Parallel state), la gestion des erreurs avec Catch/Retry, les délais (Wait state), et visualise graphiquement l'exécution."},
{id:"saa-j7-34",q:"Amazon SNS envoie des messages vers un endpoint HTTP externe. L'endpoint est parfois lent à répondre. Comment SNS gère-t-il les timeouts ?",choices:["SNS attend indéfiniment la réponse","SNS a un timeout de 15 secondes pour les connexions HTTP et applique la retry policy en cas d'échec","SNS envoie toujours une seule tentative vers HTTP","SNS convertit automatiquement en HTTPS si HTTP échoue"],answer:1,exp:"SNS impose un timeout de connexion (15s) et de socket (15s) pour les endpoints HTTP/HTTPS. En cas d'échec (timeout, erreur 4xx/5xx), SNS applique la retry policy configurée. Par défaut, SNS retente avec backoff exponentiel sur plusieurs minutes."},
{id:"saa-j7-35",q:"Vous souhaitez que des événements de votre application SaaS puissent être reçus par des applications tierces clientes via EventBridge. Quelle fonctionnalité utilisez-vous ?",choices:["EventBridge Archive","EventBridge Custom Bus partagé","EventBridge Schema Registry","Amazon EventBridge Partner Event Sources"],answer:3,exp:"EventBridge Partner Event Sources permet aux fournisseurs SaaS (Zendesk, Datadog, PagerDuty, etc.) de publier des événements directement sur les Event Buses de leurs clients AWS. Les fournisseurs non-partenaires peuvent utiliser les API PutEvents pour publier sur un Custom Bus."},
{id:"saa-j7-36",q:"Quelle est la différence entre SNS et EventBridge pour la gestion des événements ?",choices:["SNS est gratuit, EventBridge est payant","EventBridge offre un filtrage plus avancé, une intégration SaaS, l'archivage et le replay; SNS est optimisé pour les notifications simples et le fan-out","SNS est pour les grands volumes, EventBridge pour les petits volumes","Aucune différence fonctionnelle"],answer:1,exp:"SNS est optimisé pour les notifications et le fan-out simple (pub/sub) vers de nombreux abonnés. EventBridge offre un filtrage d'événements avancé avec patterns complexes, l'intégration avec des sources SaaS tierces, l'archivage/replay, le Schema Registry, et un routing plus sophistiqué entre services AWS."},
{id:"saa-j7-37",q:"Un service Lambda publie 10 000 messages/minute dans SQS FIFO. Combien de consumers Lambda parallèles peut-on avoir pour traiter ces messages avec 10 Message Group IDs différents ?",choices:["Un seul consumer car c'est FIFO","Jusqu'à 10 consumers parallèles, un par Message Group ID","Unlimited consumers indépendamment des groups","Maximum 300 consumers"],answer:1,exp:"Dans SQS FIFO, le parallélisme est limité par le nombre de Message Group IDs actifs. Avec 10 Message Group IDs distincts, 10 consumers Lambda peuvent traiter des messages en parallèle (un groupe par consumer). Chaque groupe est traité séquentiellement au sein du consumer qui le traite."},
{id:"saa-j7-38",q:"EventBridge Pipes connecte une source à une cible avec filtrage et enrichissement optionnels. Quelle combinaison n'est PAS supportée nativement par EventBridge Pipes ?",choices:["DynamoDB Stream → Lambda","SQS → EventBridge Bus","Kinesis → StepFunctions","S3 directement comme source"],answer:3,exp:"EventBridge Pipes supporte comme sources : SQS, Kinesis, DynamoDB Streams, MSK, MQ, et SelfManaged Kafka. S3 n'est pas directement supporté comme source Pipes. Pour S3, il faut passer par S3 Event Notifications → SQS → Pipes, ou EventBridge directement."},
{id:"saa-j7-39",q:"Une queue SQS reçoit des messages de plusieurs producteurs à des débits variables (parfois 1 msg/s, parfois 10 000 msg/s). Comment SQS gère-t-il automatiquement ces variations ?",choices:["SQS requiert un pré-provisionnement de capacité","SQS scale automatiquement sans configuration préalable","SQS throttle au-delà de 1 000 messages/seconde","SQS nécessite des shard supplémentaires comme Kinesis"],answer:1,exp:"SQS est un service entièrement géré et auto-scalable. Il n'y a pas de configuration de capacité à prévoir : SQS gère automatiquement les pics de charge, qu'il s'agisse de 1 ou de 100 000 messages/seconde. C'est un avantage majeur par rapport à Kinesis qui nécessite de dimensionner les shards."},
{id:"saa-j7-40",q:"Comment configurer SNS pour envoyer des messages chiffrés à une queue SQS chiffrée avec une clé KMS ?",choices:["SNS ne supporte pas le chiffrement","Activer SSE sur SNS Topic et SQS Queue, puis donner à SNS la permission d'utiliser la clé KMS de SQS","Chiffrer manuellement les messages avant publication","Utiliser un VPC Endpoint pour sécuriser la transmission"],answer:1,exp:"Pour SNS→SQS chiffré : 1) Activer SSE-SQS avec une clé KMS, 2) La politique de la clé KMS doit autoriser sns.amazonaws.com à appeler kms:GenerateDataKey et kms:Decrypt. Sans cette permission KMS, SNS ne peut pas publier dans la queue chiffrée."},
{id:"saa-j7-41",q:"Votre application doit envoyer des emails transactionnels (confirmations de commande) à grande échelle. Quel service AWS est le plus approprié ?",choices:["Amazon SNS Email subscription","Amazon SES (Simple Email Service)","Amazon Pinpoint","Lambda avec SMTP externe"],answer:1,exp:"Amazon SES est le service AWS dédié à l'envoi d'emails à grande échelle. SES offre des taux d'envoi élevés, la gestion des bounces/complaints, les listes de suppression, les DKIM/SPF/DMARC, et est optimisé pour les emails transactionnels et marketing. SNS Email est pour les notifications simples, pas pour les emails formatés."},
{id:"saa-j7-42",q:"Un workflow Step Functions Standard a une exécution qui a commencé il y a 2 jours. Quelle est la durée maximale d'une exécution Step Functions Standard ?",choices:["24 heures","7 jours","1 an","Illimitée"],answer:2,exp:"Step Functions Standard Workflows peuvent s'exécuter jusqu'à 1 an (365 jours). Cette longue durée les rend adaptés aux processus métier de longue durée comme les workflows d'approbation humaine, les processus d'intégration complexes, et les workflows avec des étapes qui peuvent prendre des jours ou semaines."},
{id:"saa-j7-43",q:"Quelle est la différence entre Step Functions Standard et Express Workflows ?",choices:["Standard est asynchrone, Express est synchrone uniquement","Standard : durée max 1 an, audit exact, coût/transition ; Express : durée max 5 min, haut volume, coût/exécution","Standard est plus récent qu'Express","Il n'y a pas de différence fonctionnelle"],answer:1,exp:"Standard : durée max 1 an, exactly-once execution, audit détaillé dans Step Functions console, facturé par transition d'état. Express : durée max 5 minutes, at-least-once execution, volume élevé jusqu'à 100 000 exécutions/seconde, facturé par nombre d'exécutions et durée. Express est pour les workflows haute fréquence courte durée."},
{id:"saa-j7-44",q:"Dans SQS, qu'est-ce que le 'poison pill message' et comment le gérer ?",choices:["Un message chiffré malveillant","Un message qui fait systématiquement échouer les consommateurs, restant dans la queue indéfiniment","Un message prioritaire qui dépasse la limite de 256 KB","Un message envoyé par un compte AWS non autorisé"],answer:1,exp:"Un poison pill message est un message que les consumers ne peuvent pas traiter correctement (data corrompue, format invalide, bug applicatif). Sans DLQ, ce message atteint le maxReceiveCount puis expire, bloquant potentiellement toute la queue. La DLQ capture ces messages pour investigation sans bloquer le traitement normal."},
{id:"saa-j7-45",q:"Comment EventBridge peut-il déclencher des actions automatiques en réponse à des changements de configuration AWS (ex: instance EC2 démarrée non-conforme) ?",choices:["Polling CloudTrail toutes les 5 minutes","Règle EventBridge basée sur les événements CloudTrail ou changements d'état AWS","CloudWatch Alarms avec actions automatiques","AWS Config Rules avec SNS"],answer:1,exp:"EventBridge reçoit nativement les événements de tous les services AWS. Une règle EventBridge peut surveiller les événements EC2 (state-change), CloudTrail (API calls), ou AWS Config (configuration changes) et déclencher automatiquement une Lambda de remédiation, un Step Functions workflow, ou une notification SNS."},
{id:"saa-j7-46",q:"Votre système de paiement utilise SQS. Les messages de paiement échoués doivent être analysés mais il ne faut surtout pas les perdre. Quelle architecture SQS mettre en place ?",choices:["Queue principale sans DLQ, les messages expirent et sont loggés dans CloudWatch","Queue principale + DLQ + CloudWatch Alarm sur le nombre de messages dans la DLQ","Queue principale uniquement avec Visibility Timeout étendu","SNS Topic qui envoie vers plusieurs queues SQS"],answer:1,exp:"Architecture recommandée : 1) Queue principale avec maxReceiveCount=3, 2) DLQ pour capturer les messages qui échouent 3 fois, 3) Alarme CloudWatch sur ApproximateNumberOfMessagesVisible dans la DLQ pour alerter immédiatement l'équipe. Les messages dans la DLQ peuvent être inspectés et rejoués."},
{id:"saa-j7-47",q:"Amazon SNS peut envoyer vers quel ensemble de destinations ?",choices:["SQS, Lambda, HTTP/HTTPS, Email, SMS, Mobile Push","SQS, Lambda, Kinesis, DynamoDB, S3, EC2","SQS, Lambda, HTTP uniquement","Lambda, SQS, et RDS uniquement"],answer:0,exp:"SNS supporte les types d'abonnements suivants : SQS queues, Lambda functions, HTTP/HTTPS endpoints, Email/Email-JSON, SMS (messages texte), et Mobile Push Notifications (via APNS pour iOS, FCM pour Android, etc.). Cette diversité fait de SNS un hub de notification polyvalent."},
{id:"saa-j7-48",q:"Un service SQS utilise Long Polling avec WaitTimeSeconds=20. Quel est l'avantage par rapport au Short Polling ?",choices:["Les messages arrivent 20 secondes plus vite","Réduction des requêtes API vides et des coûts ; le serveur attend jusqu'à 20s avant de répondre si aucun message n'est disponible","Les messages peuvent faire jusqu'à 1 MB avec Long Polling","Long Polling garantit l'ordre des messages"],answer:1,exp:"Long Polling (WaitTimeSeconds=1-20) : SQS attend jusqu'à 20 secondes qu'un message soit disponible avant de répondre. Cela élimine les réponses vides coûteuses du Short Polling et réduit la latence car les messages sont livrés dès leur arrivée. Résultat : moins d'appels API = moins de coûts."},
{id:"saa-j7-49",q:"EventBridge Schema Registry capture automatiquement les schémas des événements. Quel est son principal avantage pour les développeurs ?",choices:["Il réduit le coût des événements EventBridge","Il génère automatiquement du code (bindings) pour les langages supportés à partir des schémas détectés","Il valide les événements avant de les router","Il remplace la documentation API"],answer:1,exp:"EventBridge Schema Registry découvre et enregistre automatiquement les schémas des événements. Les développeurs peuvent télécharger des code bindings générés (Python, Java, TypeScript) directement depuis la console ou l'IDE (via AWS Toolkit), facilitant la désérialisation des événements sans écrire de code boilerplate."},
{id:"saa-j7-50",q:"Vous avez une application qui publie des messages SQS depuis une instance EC2 dans un VPC. Pour des raisons de sécurité, les données ne doivent pas transiter par Internet. Comment configurer cela ?",choices:["Utiliser AWS PrivateLink / VPC Endpoint pour SQS","Configurer un NAT Gateway","Utiliser VPN Site-to-Site vers AWS","Mettre l'instance EC2 dans un subnet public"],answer:0,exp:"AWS PrivateLink crée un VPC Endpoint de type Interface pour SQS. Le trafic entre l'instance EC2 et SQS reste entièrement dans le réseau AWS sans jamais transiter par Internet. C'est la solution recommandée pour les applications sensibles qui doivent communiquer avec les services AWS en respectant les exigences de sécurité réseau."}
];

window.QDATA[8] = [
{id:"saa-j8-1",q:"Une application critique doit rester disponible même en cas de panne complète d'une région AWS. Quelle architecture minimale garantit une haute disponibilité multi-région ?",choices:["Déployer dans deux AZs dans la même région","Déployer dans deux régions AWS avec Route 53 en Failover routing","Utiliser CloudFront comme CDN mondial","Augmenter les instances dans une seule région"],answer:1,exp:"Pour une résilience multi-région, il faut déployer l'application dans au moins deux régions et configurer Route 53 avec une Failover Routing Policy : région primaire active, région secondaire en standby. Health checks Route 53 détectent la panne et basculent automatiquement le DNS vers la région secondaire."},
{id:"saa-j8-2",q:"Quelle stratégie de reprise après sinistre offre le meilleur RTO (Recovery Time Objective) mais au coût le plus élevé ?",choices:["Backup & Restore","Pilot Light","Warm Standby","Multi-Site Active/Active"],answer:3,exp:"Multi-Site Active/Active (Hot Standby) : toutes les régions sont actives simultanément avec du trafic en production. RTO quasi nul car le basculement est instantané (Route 53 redirige le trafic). C'est la stratégie la plus coûteuse car toute l'infrastructure est en production dans toutes les régions en permanence."},
{id:"saa-j8-3",q:"Vous souhaitez répliquer une base de données RDS MySQL vers une région secondaire pour la reprise après sinistre. Quelle fonctionnalité RDS utilisez-vous ?",choices:["RDS Multi-AZ Deployment","RDS Read Replica dans une autre région","RDS Cross-Region Automated Backups","AWS DMS (Database Migration Service)"],answer:1,exp:"RDS Cross-Region Read Replica réplique asynchroniquement les données vers une autre région. En cas de sinistre, la Read Replica peut être promue en instance principale (promote to standalone). Le processus de promotion prend quelques minutes et constitue la stratégie DR recommandée pour RDS."},
{id:"saa-j8-4",q:"Qu'est-ce que le RPO (Recovery Point Objective) dans le contexte de la reprise après sinistre ?",choices:["Le temps nécessaire pour restaurer le service (RTO)","La quantité maximale de données perdues admissible, exprimée en temps","Le nombre maximum d'instances de remplacement","Le pourcentage de disponibilité cible du service"],answer:1,exp:"RPO (Recovery Point Objective) représente la quantité maximale de données qu'une organisation peut se permettre de perdre, exprimée en temps. Exemple : RPO = 1 heure signifie qu'en cas de sinistre, on peut tolérer de perdre jusqu'à 1 heure de données. RPO détermine la fréquence des sauvegardes."},
{id:"saa-j8-5",q:"Amazon S3 Cross-Region Replication (CRR) est configurée entre us-east-1 (source) et eu-west-1 (destination). Un objet existant dans le bucket source AVANT l'activation de CRR sera-t-il répliqué ?",choices:["Oui, automatiquement lors de l'activation de CRR","Non, CRR ne réplique que les nouveaux objets créés après son activation","Oui, mais uniquement si l'objet a été modifié","Non, mais S3 Batch Replication peut répliquer les objets existants"],answer:3,exp:"CRR réplique uniquement les nouveaux objets créés APRÈS son activation. Les objets existants ne sont pas répliqués automatiquement. Pour répliquer les objets existants, il faut utiliser S3 Batch Replication, qui permet de répliquer des objets existants vers le bucket de destination."},
{id:"saa-j8-6",q:"Dans le pattern Pilot Light, comment décrire l'état de la région secondaire ?",choices:["Région secondaire identique à la primaire, trafic actif","Région secondaire avec seulement les composants core (DB répliquée), prêts à être démarrés rapidement","Région secondaire éteinte, restaurée depuis des backups","Région secondaire en attente de configuration manuelle"],answer:1,exp:"Pilot Light : seuls les composants essentiels (base de données répliquée, configuration minimale) tournent dans la région secondaire. En cas de sinistre, les autres composants (serveurs d'application, load balancers) sont démarrés rapidement via des scripts ou CloudFormation. RTO de l'ordre de 10-30 minutes."},
{id:"saa-j8-7",q:"Route 53 Latency Routing Policy dirige les utilisateurs vers quelle région ?",choices:["La région la plus proche géographiquement","La région avec la latence réseau la plus faible pour l'utilisateur","La région principale configurée","La région avec le moins de charge"],answer:1,exp:"Route 53 Latency Routing Policy mesure la latence réseau réelle entre l'utilisateur et chaque région AWS configurée, puis dirige l'utilisateur vers la région offrant la latence la plus faible. Ce n'est pas basé sur la distance géographique mais sur la latence réseau mesurée."},
{id:"saa-j8-8",q:"DynamoDB Global Tables réplique les données entre plusieurs régions. Quel type de réplication utilise-t-il ?",choices:["Réplication synchrone (strongly consistent cross-region)","Réplication asynchrone multi-active","Réplication en mode active-passive uniquement","Snapshots quotidiens entre régions"],answer:1,exp:"DynamoDB Global Tables utilise la réplication multi-active asynchrone : toutes les régions peuvent accepter des lectures ET des écritures. Les données sont répliquées vers toutes les régions généralement en moins d'une seconde. Chaque région dispose d'une copie complète, permettant un accès local à faible latence."},
{id:"saa-j8-9",q:"AWS Aurora Global Database permet quelle configuration de réplication ?",choices:["Multi-AZ uniquement","Une région primaire en écriture et jusqu'à 5 régions secondaires en lecture avec réplication < 1 seconde","Réplication bidirectionnelle entre toutes les régions","Réplication vers S3 uniquement"],answer:1,exp:"Aurora Global Database : 1 région primaire (lectures/écritures) + jusqu'à 5 régions secondaires (lectures uniquement). La réplication est < 1 seconde grâce au réseau backbone AWS. En cas de panne régionale, une région secondaire peut être promue en primaire en < 1 minute (RTO < 1 min, RPO < 1 sec)."},
{id:"saa-j8-10",q:"Comment AWS CloudFormation StackSets facilite-t-il les déploiements multi-régions ?",choices:["Il déploie automatiquement dans toutes les régions sans configuration","Il permet de déployer un même template CloudFormation dans plusieurs régions et comptes depuis une seule opération","Il maintient la synchronisation en temps réel entre les stacks","Il crée automatiquement des DR plans"],answer:1,exp:"CloudFormation StackSets étend CloudFormation pour permettre la création, mise à jour et suppression de stacks dans plusieurs comptes AWS et régions depuis une seule opération administrative. Idéal pour déployer une infrastructure identique dans plusieurs régions simultanément."},
{id:"saa-j8-11",q:"Votre application utilise des secrets stockés dans AWS Secrets Manager en us-east-1. Comment rendre ces secrets disponibles dans eu-west-1 pour votre infrastructure DR ?",choices:["Copier manuellement les secrets dans chaque région","AWS Secrets Manager Replication vers plusieurs régions","Utiliser Systems Manager Parameter Store à la place","Stocker les secrets dans S3 Cross-Region Replication"],answer:1,exp:"AWS Secrets Manager supporte la réplication multi-régions. Un secret peut être répliqué vers plusieurs régions cibles en quelques clics ou via API. Les secrets répliqués sont des copies read-only qui se synchronisent automatiquement avec le secret primaire."},
{id:"saa-j8-12",q:"Route 53 Weighted Routing Policy avec des poids de 90 et 10 est utilisée pour basculer progressivement du trafic vers une nouvelle région. Comment cette approche s'appelle-t-elle ?",choices:["Failover progressif","Blue/Green deployment","Canary deployment / Traffic shifting","A/B testing régional"],answer:2,exp:"Ce pattern est appelé Canary deployment ou Traffic shifting. En envoyant initialement 10% du trafic vers la nouvelle région, on peut valider son comportement avec un impact limité. Si les métriques sont bonnes, on augmente progressivement (20%, 50%, 100%). Route 53 Weighted Routing est l'outil idéal pour ce pattern."},
{id:"saa-j8-13",q:"Pour une application multi-région, les identifiants générés (IDs) doivent être uniques globalement sans coordination inter-régions. Quelle approche utilisez-vous ?",choices:["Auto-increment dans chaque région (risque de collision)","UUIDs v4 (aléatoires) générés côté client ou application","Compteur global DynamoDB","Route 53 health checks pour séquencer la génération"],answer:1,exp:"Les UUIDs v4 sont générés aléatoirement avec 122 bits d'entropie, rendant les collisions statistiquement impossibles. Chaque région peut générer des IDs indépendamment sans coordination. Alternative : ULIDs (UUID triable par temps) ou les IDs basés sur timestamp+random pattern."},
{id:"saa-j8-14",q:"AWS Route 53 Geolocation Routing Policy dirige les utilisateurs vers des régions en fonction de quoi ?",choices:["La latence réseau mesurée","La localisation géographique (pays/continent) de l'utilisateur","La charge actuelle de chaque région","Les préférences configurées par l'utilisateur"],answer:1,exp:"Route 53 Geolocation Routing dirige les requêtes DNS vers des ressources selon la localisation géographique de l'utilisateur. Exemple : utilisateurs de France → région eu-west-3 (Paris), utilisateurs des USA → us-east-1. Utile pour la conformité RGPD (données en Europe), la localisation du contenu, et les restrictions régionales."},
{id:"saa-j8-15",q:"Dans une architecture Active/Active multi-région, comment gérer les conflits d'écriture dans DynamoDB Global Tables ?",choices:["DynamoDB résout automatiquement les conflits en utilisant last-writer-wins","Il n'y a pas de conflits possibles grâce à la réplication synchrone","L'application doit implémenter la résolution de conflits côté code","DynamoDB Global Tables ne supporte pas les écritures multi-régions"],answer:0,exp:"DynamoDB Global Tables utilise automatiquement une politique de résolution de conflits 'last-writer-wins' basée sur les timestamps. L'écriture avec le timestamp le plus récent gagne. Pour les applications nécessitant une logique de résolution plus complexe, il faut implémenter cette logique au niveau applicatif."},
{id:"saa-j8-16",q:"Comment AWS Transit Gateway aide-t-il dans une architecture multi-région ?",choices:["Il remplace VPC Peering dans une seule région","Transit Gateway avec peering inter-régions connecte des VPCs dans différentes régions via le réseau backbone AWS","Il est uniquement pour les connexions on-premises","Il gère automatiquement le failover DNS"],answer:1,exp:"AWS Transit Gateway peut être peeré entre régions (inter-region peering), créant un hub centralisé de connectivité. Un TGW dans us-east-1 peeré avec un TGW dans eu-west-1 permet aux VPCs attachés dans chaque région de communiquer via le réseau backbone privé AWS, sans traverser Internet."},
{id:"saa-j8-17",q:"Votre application stocke des sessions utilisateurs dans ElastiCache Redis en us-east-1. En cas de failover vers eu-west-1, comment gérer les sessions existantes ?",choices:["Les sessions sont automatiquement répliquées par ElastiCache","Les utilisateurs devront se reconnecter (sessions perdues) ou utiliser ElastiCache Global Datastore","Utiliser S3 pour stocker les sessions","Augmenter le TTL des sessions pour couvrir le failover"],answer:1,exp:"ElastiCache Redis Global Datastore réplique les données entre régions (réplication asynchrone < 1 seconde). En cas de failover, la région secondaire peut être promue. Sans Global Datastore, les sessions Redis sont locales à chaque région et les utilisateurs doivent se reconnecter lors d'un failover régional."},
{id:"saa-j8-18",q:"Quelle est la stratégie DR la moins coûteuse mais avec le RTO le plus élevé ?",choices:["Multi-Site Active/Active","Warm Standby","Pilot Light","Backup & Restore"],answer:3,exp:"Backup & Restore : seules les sauvegardes (snapshots RDS, S3 backups, AMIs) sont stockées dans la région secondaire. En cas de sinistre, toute l'infrastructure doit être recréée depuis ces sauvegardes. RTO élevé (heures à jours) mais coût minimal car aucune infrastructure active dans la région secondaire."},
{id:"saa-j8-19",q:"Amazon S3 est-il un service régional ou global ?",choices:["Global avec réplication automatique entre toutes les régions","Régional, chaque bucket est dans une région spécifique","Global avec un namespace commun mais stockage régional","Dépend de la classe de stockage"],answer:1,exp:"S3 est un service régional : chaque bucket est créé dans une région AWS spécifique et les données y restent sauf configuration explicite de réplication (CRR). Le namespace S3 (noms de buckets) est global et unique, mais les données sont stockées dans la région choisie lors de la création du bucket."},
{id:"saa-j8-20",q:"Pour réduire la latence d'une application multi-région, vous stockez des copies en lecture des données dans chaque région. Quel service AWS facilite cette architecture pour les données relationnelles ?",choices:["RDS Multi-AZ dans chaque région","Aurora Global Database avec régions secondaires en lecture","DynamoDB Global Tables uniquement","RDS Read Replicas dans chaque région"],answer:1,exp:"Aurora Global Database est la solution optimale : réplication < 1 seconde vers jusqu'à 5 régions secondaires. Les applications dans chaque région lisent localement (faible latence), les écritures sont dirigées vers la région primaire. En cas de sinistre, une région secondaire peut être promue en < 1 minute."},
{id:"saa-j8-21",q:"Route 53 Health Checks peuvent surveiller quoi pour détecter une panne régionale ?",choices:["Uniquement les endpoints HTTP/HTTPS publics","Endpoints HTTP/HTTPS/TCP, métriques CloudWatch, et autres Health Checks (calculated health checks)","Uniquement les instances EC2","Les logs CloudWatch Logs"],answer:1,exp:"Route 53 Health Checks surveillent : 1) Endpoints HTTP/HTTPS/TCP (vérification de disponibilité et de contenu), 2) Métriques CloudWatch (Alarm state) pour des conditions complexes, 3) Calculated Health Checks qui combinent plusieurs health checks avec des opérateurs AND/OR. Ils déclenchent le failover DNS automatique."},
{id:"saa-j8-22",q:"Qu'est-ce que le pattern 'Strangler Fig' dans une migration multi-région ?",choices:["Arrêter l'ancienne région brutalement","Migrer graduellement les fonctionnalités de l'ancienne architecture vers la nouvelle tout en maintenant les deux en parallèle","Réplication complète puis bascule instantanée","Test de charge sur la nouvelle région avant migration"],answer:1,exp:"Le Strangler Fig pattern (inspiré d'un figuier étrangleur) consiste à remplacer progressivement les composants de l'ancienne architecture par de nouveaux, les deux coexistant pendant la transition. Pour les migrations régionales, on déplace fonctionnalité par fonctionnalité vers la nouvelle région, avec Route 53 Weighted pour répartir le trafic."},
{id:"saa-j8-23",q:"AWS Global Accelerator utilise quoi pour acheminer le trafic vers la région la plus proche en santé ?",choices:["Le réseau public Internet avec BGP anycast","Le réseau backbone privé AWS avec des points d'entrée anycast","DNS Round Robin uniquement","CloudFront PoPs comme points d'entrée"],answer:1,exp:"Global Accelerator utilise le réseau backbone privé AWS (non Internet) pour acheminer le trafic. Les deux adresses IP statiques anycast permettent aux utilisateurs d'entrer dans le réseau AWS via le PoP le plus proche, puis le trafic est routé sur le backbone privé vers la région la plus performante."},
{id:"saa-j8-24",q:"Dans une architecture multi-région, les lambdas dans chaque région doivent utiliser des paramètres de configuration spécifiques à la région (endpoints, noms de tables). Comment gérer cela proprement ?",choices:["Encoder les valeurs en dur dans le code Lambda","Utiliser AWS Systems Manager Parameter Store dans chaque région avec les mêmes clés de paramètre","Passer les valeurs comme variables d'environnement dans CloudFormation","Utiliser un seul fichier de configuration global dans S3"],answer:1,exp:"La bonne pratique : même nom de paramètre dans Parameter Store dans chaque région, avec des valeurs régionales différentes. Exemple : /app/db-endpoint retourne l'endpoint RDS local dans us-east-1 et l'endpoint local dans eu-west-1. Lambda lit le paramètre sans hard-coding et fonctionne dans n'importe quelle région."},
{id:"saa-j8-25",q:"Une entreprise doit stocker des données clients européens uniquement en Europe (conformité RGPD). Quelle combinaison de services AWS enforce cela techniquement ?",choices:["Bonne pratique organisationnelle uniquement, pas d'enforcement technique","AWS Organizations SCP + S3 Bucket Policy avec condition aws:RequestedRegion","IAM Policies avec restriction de région","VPC dans une région européenne uniquement"],answer:1,exp:"Pour enforcer la résidence des données : 1) AWS Organizations SCP (Service Control Policy) peut restreindre la création de ressources à des régions européennes spécifiques, 2) S3 Bucket Policies avec la condition aws:RequestedRegion empêchent les accès depuis des régions non-autorisées. Ces deux mécanismes combinés offrent une protection robuste."},
{id:"saa-j8-26",q:"Vous devez tester le failover de votre infrastructure multi-région sans provoquer une vraie panne. Quel service AWS facilite les tests de chaos engineering ?",choices:["AWS Fault Injection Service (FIS)","AWS Config","CloudWatch Synthetics","AWS Shield"],answer:0,exp:"AWS Fault Injection Service (FIS) permet de conduire des expériences de chaos engineering contrôlées : injecter des latences, arrêter des instances, simuler des pannes AZ ou régionales, sans affecter la production réelle. FIS supporte les experime templates avec des 'stop conditions' pour arrêter le test si les métriques dépassent des seuils."},
{id:"saa-j8-27",q:"Quelle est la différence entre Route 53 Failover Policy et Route 53 Geolocation Policy ?",choices:["Failover redirige selon la localisation, Geolocation selon la santé","Failover bascule vers un endpoint secondaire si le primaire est en panne ; Geolocation dirige selon la localisation géographique de l'utilisateur","Aucune différence, les deux font la même chose","Failover est plus rapide que Geolocation"],answer:1,exp:"Failover Policy : surveille la santé du primaire via Health Checks ; si défaillant, bascule vers le secondaire. Utilisé pour la DR. Geolocation Policy : route le trafic selon la localisation géographique (pays/continent) de l'utilisateur, indépendamment de la santé des ressources. Utilisé pour la localisation du contenu et la conformité."},
{id:"saa-j8-28",q:"Dans le cadre d'un déploiement multi-région, AWS CodePipeline peut-il déployer automatiquement dans plusieurs régions simultanément ?",choices:["Non, CodePipeline est limité à une région","Oui, avec des actions cross-région dans le pipeline","Oui, mais uniquement avec CodeDeploy","Non, il faut des pipelines séparés par région"],answer:1,exp:"CodePipeline supporte les cross-region actions : une étape du pipeline peut déployer dans une région différente de celle du pipeline. AWS réplique automatiquement les artefacts vers la région cible via un bucket S3 intermédiaire. Cela permet un pipeline unique qui déploie dans plusieurs régions séquentiellement ou en parallèle."},
{id:"saa-j8-29",q:"Amazon ECR (Elastic Container Registry) supporta-t-il la réplication d'images entre régions ?",choices:["Non, les images doivent être poussées manuellement dans chaque région","Oui, ECR Cross-Region Replication réplique automatiquement les images vers d'autres régions","Oui, mais uniquement via S3 Cross-Region Replication","Non, utilisez Docker Hub à la place"],answer:1,exp:"Amazon ECR supporte la réplication cross-région et cross-compte. En configurant une règle de réplication, chaque nouveau push d'image est automatiquement répliqué vers les régions cibles. Cela accélère les déploiements multi-régions et garantit que les images sont disponibles localement dans chaque région."},
{id:"saa-j8-30",q:"Une application financière avec RPO=0 et RTO=0 est-elle réalisable sur AWS ? Quelle est la solution la plus proche ?",choices:["RPO=0 est impossible, RPO=5min avec RDS est le minimum","Multi-Site Active/Active avec DynamoDB Global Tables et Aurora Global Database offre RPO~0 et RTO~0","C'est uniquement possible avec un stockage on-premises","AWS garantit RPO=0 et RTO=0 nativement"],answer:1,exp:"RPO=0 et RTO=0 sont théoriquement impossibles (latence de réplication, DNS propagation), mais AWS peut s'en approcher très près. Architecture : DynamoDB Global Tables (réplication < 1s), Aurora Global Database (< 1s), Route 53 avec TTL très bas et health checks rapides. En pratique : RPO < 1s, RTO < 1 minute."},
{id:"saa-j8-31",q:"Vous migrez d'une région vers une autre. Comment migrer vos snapshots RDS existants vers la nouvelle région ?",choices:["Les snapshots RDS sont automatiquement disponibles dans toutes les régions","Copier les snapshots RDS vers la région cible via l'action 'Copy Snapshot'","Restaurer le snapshot et créer une Read Replica cross-région","Utiliser AWS DMS pour migrer les données"],answer:1,exp:"Les snapshots RDS sont régionaux par défaut. Pour les déplacer vers une autre région, vous utilisez l'action 'Copy Snapshot' depuis la console RDS ou l'API CopyDBSnapshot avec la région de destination spécifiée. Le snapshot copié peut être chiffré avec une clé KMS de la région de destination."},
{id:"saa-j8-32",q:"Dans une architecture multi-région, comment AWS KMS gère-t-il les clés de chiffrement ?",choices:["Les clés KMS sont globales et partagées entre toutes les régions","KMS est régional : chaque région a ses propres clés. Les données chiffrées dans us-east-1 ne peuvent être déchiffrées qu'avec la clé correspondante dans us-east-1","KMS réplique automatiquement les clés entre régions","Les clés peuvent être exportées et importées entre régions librement"],answer:1,exp:"AWS KMS est un service régional. Les CMKs (Customer Master Keys) sont spécifiques à une région. Pour chiffrer des données répliquées dans une autre région, il faut rechiffrer avec une clé KMS de la région destination. Exception : KMS Multi-Region Keys permettent d'avoir des clés liées entre régions (même key material)."},
{id:"saa-j8-33",q:"Qu'est-ce que KMS Multi-Region Keys et quand les utiliser ?",choices:["Clés partagées entre comptes AWS dans la même région","Clés interrégionales liées partageant le même key material, permettant de chiffrer dans une région et déchiffrer dans une autre","Clés qui se répliquent automatiquement vers toutes les régions","Clés pour chiffrer les données S3 Cross-Region Replication"],answer:1,exp:"KMS Multi-Region Keys sont des paires de clés dans différentes régions qui partagent le même key material. Une clé chiffrée dans us-east-1 peut être déchiffrée dans eu-west-1 sans rechiffrement. Cas d'usage : DynamoDB Global Tables avec chiffrement, Aurora Global Database, réplication de Secrets Manager."},
{id:"saa-j8-34",q:"Warm Standby diffère de Pilot Light principalement par quoi ?",choices:["Le RTO uniquement","Warm Standby maintient une version réduite mais fonctionnelle de l'application en production dans la région secondaire ; Pilot Light maintient seulement les données","La technologie de réplication utilisée","Le nombre de régions supportées"],answer:1,exp:"Pilot Light : seules les données sont répliquées (DB), l'infrastructure applicative est arrêtée. Au failover, il faut démarrer les serveurs (10-30 min). Warm Standby : une version réduite (scaled down) mais fonctionnelle de l'application tourne dans la région secondaire. Au failover, on scale up rapidement (minutes). RTO Warm Standby < RTO Pilot Light."},
{id:"saa-j8-35",q:"Amazon SQS est-il un service régional ou peut-il opérer nativement entre régions ?",choices:["SQS est global et partage les queues entre régions","SQS est régional. Pour une architecture multi-région, chaque région a ses propres queues","SQS peut automatiquement répliquer les messages entre régions","SQS avec Global Accelerator devient multi-région"],answer:1,exp:"SQS est un service régional. Chaque queue SQS existe dans une région spécifique. Dans une architecture multi-région, vous créez des queues dans chaque région. Les messages peuvent être envoyés cross-région via l'API SQS (en spécifiant l'URL de la queue de l'autre région), mais les queues elles-mêmes sont régionales."},
{id:"saa-j8-36",q:"Dans une architecture Active/Active avec deux régions, comment gérer l'authentification des utilisateurs pour éviter qu'ils doivent se connecter à nouveau lors d'un failover ?",choices:["Chaque région gère son propre pool d'utilisateurs Cognito","Amazon Cognito avec User Pool répliqué, ou token JWT vérifié localement sans état serveur","AWS IAM pour l'authentification inter-régions","VPN entre les régions pour partager les sessions"],answer:1,exp:"Options : 1) Tokens JWT (Cognito, Auth0) : les tokens sont validés avec la clé publique de l'IdP, pas de session serveur. L'utilisateur reste connecté lors du failover si le token est valide dans les deux régions. 2) Amazon Cognito Custom Domain avec réplication du User Pool. Les JWTs sans état sont la solution la plus élégante pour le multi-région."},
{id:"saa-j8-37",q:"Un rapport de conformité AWS exige de démontrer que vos sauvegardes S3 sont protégées contre la suppression accidentelle, même cross-région. Quelle configuration S3 utiliser ?",choices:["S3 Versioning uniquement","S3 Cross-Region Replication + S3 Object Lock sur le bucket destination","S3 Lifecycle rules pour archiver en Glacier","S3 Access Points avec restriction géographique"],answer:1,exp:"S3 Cross-Region Replication vers un bucket avec S3 Object Lock en mode COMPLIANCE : les objets répliqués ne peuvent être supprimés par personne (ni même le root account) pendant la période de rétention. Cette configuration offre une protection maximale pour la conformité et la DR."},
{id:"saa-j8-38",q:"Route 53 Geoproximity Routing Policy permet quoi de plus que Geolocation Routing ?",choices:["Elle est plus rapide que Geolocation","Elle peut décaler les frontières géographiques avec un 'bias' pour orienter plus ou moins de trafic vers certaines régions","Elle supporte davantage de régions","Elle intègre les Health Checks nativement"],answer:1,exp:"Geoproximity (disponible via Traffic Flow) permet d'ajuster les frontières géographiques avec un 'bias' (de -99 à +99). Un bias positif attire plus de trafic vers une ressource en élargissant sa zone de couverture. Utile pour transférer progressivement du trafic d'une région vers une autre lors d'une migration."},
{id:"saa-j8-39",q:"AWS Backup prend-il en charge les sauvegardes cross-région ?",choices:["Non, AWS Backup est limité à une région","Oui, AWS Backup permet de copier automatiquement les sauvegardes vers une région secondaire","Oui, mais uniquement pour S3","Oui, mais manuellement seulement"],answer:1,exp:"AWS Backup supporte la copie cross-région des backups via des 'Cross-Region Copy Rules' dans les plans de sauvegarde. Les sauvegardes de RDS, DynamoDB, EFS, EC2, EBS et autres services peuvent être automatiquement copiées vers une région DR. Cela simplifie la gestion centralisée des sauvegardes multi-régions."},
{id:"saa-j8-40",q:"Lors d'un failover Aurora Global Database, quel est l'état de la région primaire si elle est toujours accessible ?",choices:["Elle devient automatiquement une région secondaire","La région primaire doit être manuellement retirée de la configuration Global Database","La région primaire continue d'accepter les écritures en parallèle (split-brain)","Aurora gère automatiquement la transition sans action manuelle"],answer:1,exp:"Lors d'un managed failover Aurora Global Database, si la région primaire est toujours accessible, AWS la détache automatiquement du Global Cluster pour éviter le split-brain. Elle peut ensuite être rattachée comme région secondaire. Si la région primaire est inaccessible, la promotion de la secondaire est initiée manuellement."},
{id:"saa-j8-41",q:"Quand utiliser AWS Global Accelerator plutôt que CloudFront pour une architecture multi-région ?",choices:["Pour les sites web statiques uniquement","Pour les applications qui nécessitent des adresses IP statiques, des protocoles non-HTTP (TCP/UDP), ou une latence ultra-faible pour les applications temps réel","Global Accelerator est toujours meilleur que CloudFront","CloudFront est toujours meilleur pour les applications web"],answer:1,exp:"Global Accelerator est préférable pour : adresses IP statiques anycast (pare-feu simplifié), protocoles TCP/UDP (non-HTTP comme gaming, IoT, VoIP), applications temps réel nécessitant une connexion persistante, et endpoints non-HTTP (ALB, NLB, instances EC2). CloudFront est optimisé pour HTTP/HTTPS avec caching."},
{id:"saa-j8-42",q:"Dans une architecture multi-région Active/Active, comment gérer les ID auto-incrémentés dans RDS MySQL pour éviter les collisions ?",choices:["Utiliser le même auto-increment dans chaque région","Configurer RDS avec auto_increment_offset différent par région (ex: 1,3 et 2,3 pour 2 régions)","Supprimer les auto-increments et utiliser des UUIDs","Utiliser une seule région pour les écritures"],answer:1,exp:"Technique classique pour MySQL multi-master : configurer auto_increment_increment=N (nombre de régions) et auto_increment_offset=unique par région. Région 1 génère 1,3,5,7... Région 2 génère 2,4,6,8... Mais la solution moderne recommandée est d'utiliser des UUIDs ou des ULID pour les IDs distribués."},
{id:"saa-j8-43",q:"Qu'est-ce que le 'split-brain' dans le contexte multi-région et comment AWS aide à l'éviter ?",choices:["Une panne réseau entre régions","Une situation où deux régions croient simultanément être la région primaire, créant des données divergentes","Un problème de configuration DNS","Une surcharge de trafic sur une région"],answer:1,exp:"Split-brain : lors d'une partition réseau, deux nœuds croient être le master et acceptent des écritures divergentes. AWS aide à l'éviter via : Aurora Global Database (promote manuel avec détachement automatique de l'ancien primary), Route 53 avec health checks stricts, et des patterns de quorum pour les décisions de failover."},
{id:"saa-j8-44",q:"Comment AWS Organizations et les Service Control Policies (SCPs) contribuent-ils à une architecture multi-région bien gouvernée ?",choices:["Les SCPs n'ont aucun rapport avec le multi-région","Les SCPs peuvent restreindre les actions à des régions spécifiques, enforcer des tags DR, et empêcher la suppression accidentelle de ressources DR","Les SCPs gèrent automatiquement le failover","Les SCPs remplacent IAM dans une architecture multi-région"],answer:1,exp:"Exemples de SCPs pour le multi-région : 1) Restreindre la création de ressources à des régions approuvées (Deny avec condition aws:RequestedRegion), 2) Empêcher la suppression de ressources tagguées 'DR=true', 3) Forcer l'activation de certains services DR dans les nouveaux comptes, 4) Restreindre la désactivation des sauvegardes automatiques."},
{id:"saa-j8-45",q:"Amazon Route 53 avec TTL=60 secondes versus TTL=300 secondes, quel est l'impact lors d'un failover DNS ?",choices:["Aucun impact, le failover est instantané quoi qu'il arrive","TTL=60s : les clients actualisent leur résolution DNS en 60s maximum après failover. TTL=300s : les clients peuvent utiliser l'ancienne IP pendant 5 minutes","TTL plus long = failover plus rapide","Le TTL n'affecte pas la vitesse de failover"],answer:1,exp:"Le TTL DNS détermine combien de temps les résolveurs DNS cachent une réponse. Avec TTL=60s, au pire un client continue 60s à utiliser l'ancienne IP après failover. Avec TTL=300s, jusqu'à 5 minutes. Pour le DR, réduire le TTL avant un failover planifié est une bonne pratique. Attention : TTL très bas = charge accrue sur Route 53."},
{id:"saa-j8-46",q:"Votre application multi-région utilise DynamoDB Global Tables. Une écriture faite dans us-east-1 est-elle immédiatement cohérente dans eu-west-1 ?",choices:["Oui, la réplication DynamoDB Global Tables est synchrone","Non, la réplication est asynchrone, avec un délai généralement < 1 seconde","Oui, si l'option 'strongly consistent' est activée","Non, le délai minimum est de 5 secondes"],answer:1,exp:"DynamoDB Global Tables utilise la réplication asynchrone. Une écriture dans us-east-1 est généralement répliquée vers eu-west-1 en moins d'une seconde, mais ce n'est pas garanti de façon synchrone. Les lectures dans une région secondaire sont 'eventually consistent' par rapport aux écritures dans la région primaire."},
{id:"saa-j8-47",q:"Quelle est la meilleure pratique pour tester régulièrement vos procédures de reprise après sinistre sur AWS ?",choices:["Simuler manuellement une panne en production pour voir si le DR fonctionne","Utiliser AWS FIS pour des tests contrôlés, documenter les procédures de runbook, et effectuer des 'game days' planifiés","Ne tester qu'avant les audits de conformité","Tester uniquement dans des environnements de développement"],answer:1,exp:"Bonnes pratiques DR testing : 1) AWS Fault Injection Service (FIS) pour des injections de pannes contrôlées, 2) Game days planifiés où l'équipe simule un sinistre et exécute les procédures DR, 3) Runbooks documentés et testés régulièrement, 4) Métriques RTO/RPO mesurées et comparées aux objectifs, 5) Automatisation des tests DR via CI/CD."},
{id:"saa-j8-48",q:"AWS CloudEndure Migration / AWS Application Migration Service (MGN) aide à quoi dans un contexte multi-région ?",choices:["Il gère le failover DNS automatiquement","Il réplique en continu les serveurs source vers AWS, permettant une migration ou un DR avec un RTO minimal","Il remplace Route 53 pour le routage géographique","Il optimise les coûts inter-régions"],answer:1,exp:"AWS Application Migration Service (MGN, anciennement CloudEndure) effectue une réplication continue au niveau bloc des serveurs (physiques, virtuels, cloud) vers AWS. Pour la DR, MGN peut répliquer vos serveurs on-premises ou d'une région AWS vers une autre, avec un RPO de quelques secondes et un RTO de minutes (boot des instances de test/recovery)."},
{id:"saa-j8-49",q:"Dans une architecture multi-région, les buckets S3 dans chaque région doivent avoir des noms uniques globalement. Quelle convention de nommage est recommandée ?",choices:["Toujours utiliser le même nom dans chaque région","Inclure le nom de la région dans le nom du bucket (ex: mon-app-us-east-1, mon-app-eu-west-1)","Utiliser des UUIDs comme noms de bucket","Les noms de buckets S3 n'ont pas besoin d'être uniques entre régions"],answer:1,exp:"Les noms de buckets S3 sont globalement uniques dans tout AWS (même namespace mondial). La convention recommandée est d'inclure la région dans le nom : mon-app-us-east-1, mon-app-eu-west-1. Cela évite les conflits de noms et indique clairement dans quelle région chaque bucket se trouve dans les scripts et configurations."},
{id:"saa-j8-50",q:"Résumé Architecture Domain 1 : Une application requiert RTO < 15 min et RPO < 5 min avec coût modéré. Quelle combinaison de services AWS réalise ces objectifs ?",choices:["Backup & Restore avec snapshots RDS quotidiens","Warm Standby : Aurora Cross-Region Read Replica + Route 53 Failover + EC2 Auto Scaling réduit dans la région secondaire","Multi-Site Active/Active avec toute l'infrastructure dupliquée","Pilot Light avec serveurs d'application éteints dans la région secondaire"],answer:1,exp:"Warm Standby répond exactement à ces critères : Aurora Cross-Region Read Replica (RPO < 1 minute grâce à la réplication < 1s), Route 53 Failover avec health checks (détection en 1-3 minutes), et un ASG avec capacité réduite dans la région secondaire qui scale up au failover (10-15 min). Coût inférieur à Active/Active mais RTO et RPO bien meilleurs que Backup & Restore ou Pilot Light."}
];
