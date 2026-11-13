// Questions AWS CloudOps Engineer Associate — SOA-C03
// Format: window.QDATA[jour] = [{id, q, choices, answer, exp}, ...]
// 750 questions · 15 jours · 50 questions/jour

window.QKEY = "aws-soa-c03";

// ── Métadonnées examen ──────────────────────────────────────────────────────
window.QUIZ_META={
  title:"AWS CloudOps Engineer Associate",
  code:"SOA-C03",
  exam:"AWS CloudOps Engineer Associate SOA-C03",
  passScore:72,
  examMins:130,
  fiche:"fiche.html",
  rules:[
    ["50 q · 130 min","dont 15 non notées"],
    ["score minimum","720 / 1000"],
    ["5 domaines · 16-22% chacun",""]
  ],
  totalQ: 750
};

// ── Plan de révision 15 jours ────────────────────────────────────────────────
const _G="https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03/sysops-administrator-associate-03.html";
const _CW="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/";
const _CT="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/";
const _SM="https://docs.aws.amazon.com/systems-manager/latest/userguide/";
const _CF="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/";
const _VPC="https://docs.aws.amazon.com/vpc/latest/userguide/";
const _IAM="https://docs.aws.amazon.com/IAM/latest/UserGuide/";

window.QUIZ_PLAN=[
 {d:1,theme:"Domaine 1 — CloudWatch : métriques, alarmes, logs",dom:["Domaine 1 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"cloudwatch-metrics-namespaces",titre:"CloudWatch Metrics & Namespaces"},{id:"cloudwatch-alarms-statuts-ok-alarm",titre:"CloudWatch Alarms (statuts OK/ALARM/INSUFFICIENT_DATA)"},{id:"cloudwatch-logs-log-groups",titre:"CloudWatch Logs & Log Groups"},{id:"metric-filters-insights",titre:"Metric Filters & Insights"},{id:"cloudwatch-agent",titre:"CloudWatch Agent"}],
  read:["Concepts CloudWatch","Alarmes composites","Subscriptions Logs"],
  links:[["CloudWatch Guide",_CW],["Documentation officielle",_G]],
  focus:["Différence métriques standard vs custom","Actions d'alarme : SNS, EC2, Auto Scaling","Log Insights query syntax","Retention policies"]},

 {d:2,theme:"Domaine 1 — EventBridge, CloudTrail, X-Ray",dom:["Domaine 1 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"eventbridge-rules-targets",titre:"EventBridge Rules & Targets"},{id:"cloudtrail-trails-events-insights",titre:"CloudTrail — trails, events, Insights"},{id:"aws-x-ray-traces-segments",titre:"AWS X-Ray — traces, segments"},{id:"amazon-managed-grafana-prometheus",titre:"Amazon Managed Grafana/Prometheus"}],
  read:["EventBridge event patterns","CloudTrail Lake","X-Ray sampling rules"],
  links:[["CloudTrail Guide",_CT],["Documentation officielle",_G]],
  focus:["CloudTrail management vs data events","EventBridge vs CloudWatch Events","X-Ray pour microservices","Alertes sur activité suspecte via CloudTrail Insights"]},

 {d:3,theme:"Domaine 1 — Optimisation des performances",dom:["Domaine 1 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"ec2-types-d-instances-enhanced",titre:"EC2 : types d'instances, Enhanced Networking"},{id:"ebs-types-de-volumes-iops-throughput",titre:"EBS : types de volumes, IOPS, throughput"},{id:"s3-classes-de-stockage-transfer",titre:"S3 : classes de stockage, Transfer Acceleration"},{id:"rds-performance-insights-read-replicas",titre:"RDS : Performance Insights, read replicas"},{id:"systems-manager-automation-pour",titre:"Systems Manager Automation pour remédiation"}],
  read:["EBS io1 vs io2 vs gp3","RDS Performance Insights","S3 Intelligent-Tiering"],
  links:[["Systems Manager",_SM],["Documentation officielle",_G]],
  focus:["Métriques EBS : VolumeReadBytes, BurstBalance","Performance Insights : compteurs DB","Remédiation automatique via SSM Automation","Identifier bottlenecks avec CloudWatch"]},

 {d:4,theme:"Domaine 2 — Haute disponibilité et scalabilité",dom:["Domaine 2 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"auto-scaling-groups-politiques-cooldown",titre:"Auto Scaling Groups : politiques, cooldown"},{id:"elastic-load-balancing-alb-nlb-gwlb",titre:"Elastic Load Balancing : ALB, NLB, GWLB"},{id:"elasticache-redis-vs-memcached",titre:"ElastiCache : Redis vs Memcached"},{id:"amazon-rds-multi-az",titre:"Amazon RDS Multi-AZ"},{id:"amazon-aurora-cluster-replicas",titre:"Amazon Aurora : cluster, replicas"}],
  read:["Politiques de scaling (target tracking, step, scheduled)","ALB vs NLB","ElastiCache Redis cluster mode"],
  links:[["Documentation officielle",_G]],
  focus:["Target tracking vs step scaling","Health checks ELB et impact ASG","Redis vs Memcached — cas d'usage","Multi-AZ failover automatique RDS"]},

 {d:5,theme:"Domaine 2 — Route 53, CloudFront, résilience",dom:["Domaine 2 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"route-53-routing-policies-failover",titre:"Route 53 : routing policies (failover, latency, weighted, geolocation)"},{id:"route-53-health-checks",titre:"Route 53 Health Checks"},{id:"cloudfront-distributions-origins",titre:"CloudFront : distributions, origins, behaviors"},{id:"global-accelerator",titre:"Global Accelerator"},{id:"disaster-recovery-strategies",titre:"Disaster Recovery strategies"}],
  read:["Route 53 routing policies","CloudFront TTL et invalidation","DR : RTO et RPO"],
  links:[["Documentation officielle",_G]],
  focus:["Failover routing avec health checks","Active-active vs active-passive","CloudFront + S3 / ALB","RPO/RTO des 4 stratégies DR"]},

 {d:6,theme:"Domaine 2 — Backup et continuité",dom:["Domaine 2 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"aws-backup-vaults-plans-regles-de",titre:"AWS Backup : vaults, plans, règles de rétention"},{id:"snapshots-ebs-rds-aurora",titre:"Snapshots EBS, RDS, Aurora"},{id:"s3-versioning-replication",titre:"S3 Versioning & Replication"},{id:"dynamodb-backup-pitr",titre:"DynamoDB backup PITR"},{id:"strategies-dr-pilot-light-warm-standby",titre:"Stratégies DR : pilot light, warm standby, active/active"}],
  read:["AWS Backup cross-account","S3 Cross-Region Replication","DynamoDB global tables"],
  links:[["Documentation officielle",_G]],
  focus:["AWS Backup vs snapshots natifs","Cross-region replication S3","PITR DynamoDB (35 jours)","Warm standby vs pilot light"]},

 {d:7,theme:"Domaine 3 — AMI, EC2 Image Builder, containers",dom:["Domaine 3 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"ami-creation-sharing-copying",titre:"AMI : création, sharing, copying"},{id:"ec2-image-builder-pipelines-composants",titre:"EC2 Image Builder : pipelines, composants"},{id:"amazon-ecr-repositories-lifecycle",titre:"Amazon ECR : repositories, lifecycle policies"},{id:"amazon-ecs-task-definitions-services",titre:"Amazon ECS : task definitions, services"},{id:"aws-fargate",titre:"AWS Fargate"}],
  read:["EC2 Image Builder pipelines","ECR image scanning","ECS task definitions"],
  links:[["Documentation officielle",_G]],
  focus:["AMI golden image workflow","Image Builder vs manuellement","ECR lifecycle policies pour coûts","ECS service rolling updates"]},

 {d:8,theme:"Domaine 3 — CloudFormation, CDK, StackSets",dom:["Domaine 3 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"cloudformation-stacks-templates",titre:"CloudFormation : stacks, templates, paramètres"},{id:"change-sets-drift-detection",titre:"Change Sets & Drift Detection"},{id:"cloudformation-stacksets",titre:"CloudFormation StackSets"},{id:"aws-cdk",titre:"AWS CDK"},{id:"aws-ram-resource-access-manager",titre:"AWS RAM (Resource Access Manager)"}],
  read:["CloudFormation drift detection","StackSets avec AWS Organizations","CDK constructs levels (L1/L2/L3)"],
  links:[["CloudFormation Guide",_CF],["Documentation officielle",_G]],
  focus:["Change Sets avant update","Drift detection — ressources non conformes","StackSets multi-comptes / multi-régions","RAM vs StackSets"]},

 {d:9,theme:"Domaine 3 — Systems Manager et automatisation",dom:["Domaine 3 (22%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"ssm-agent-managed-instances",titre:"SSM Agent & Managed Instances"},{id:"ssm-parameter-store-vs-secrets-manager",titre:"SSM Parameter Store vs Secrets Manager"},{id:"run-command-session-manager",titre:"Run Command & Session Manager"},{id:"patch-manager-maintenance-windows",titre:"Patch Manager & Maintenance Windows"},{id:"ssm-automation-runbooks",titre:"SSM Automation Runbooks"},{id:"lambda-eventbridge-pour-l-automatisation",titre:"Lambda + EventBridge pour l'automatisation"}],
  read:["SSM Parameter Store tiers","Patch baselines","SSM Automation runbooks"],
  links:[["Systems Manager",_SM],["Documentation officielle",_G]],
  focus:["Parameter Store Standard vs Advanced","Patch Manager stratégies","Run Command sans SSH/RDP","Automation multi-step"]},

 {d:10,theme:"Domaine 4 — IAM, SCPs, Identity Center",dom:["Domaine 4 (16%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"iam-policies-roles-mfa",titre:"IAM : policies, roles, MFA"},{id:"service-control-policies-scps",titre:"Service Control Policies (SCPs)"},{id:"iam-identity-center-sso",titre:"IAM Identity Center (SSO)"},{id:"federated-identity-saml-2-0-oidc",titre:"Federated identity : SAML 2.0, OIDC"},{id:"iam-access-analyzer",titre:"IAM Access Analyzer"},{id:"iam-policy-simulator",titre:"IAM Policy Simulator"}],
  read:["Permission boundaries","SCPs vs IAM policies","IAM Identity Center permission sets"],
  links:[["IAM Guide",_IAM],["Documentation officielle",_G]],
  focus:["Évaluation des policies (deny explicite > allow)","SCPs bloquent même root","Identity Center vs IAM users","Access Analyzer — ressources exposées"]},

 {d:11,theme:"Domaine 4 — Chiffrement, audit, conformité",dom:["Domaine 4 (16%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"aws-kms-cmk-key-policies-rotation",titre:"AWS KMS : CMK, key policies, rotation"},{id:"acm-certificats-renouvellement",titre:"ACM : certificats, renouvellement"},{id:"secrets-manager-rotation-automatique",titre:"Secrets Manager : rotation automatique"},{id:"aws-config-rules-conformance-packs",titre:"AWS Config : rules, conformance packs"},{id:"security-hub-guardduty-inspector",titre:"Security Hub, GuardDuty, Inspector"},{id:"cloudtrail-pour-audit",titre:"CloudTrail pour audit"}],
  read:["KMS key policies vs IAM","Config managed vs custom rules","GuardDuty findings"],
  links:[["Documentation officielle",_G]],
  focus:["KMS CMK customer-managed vs AWS-managed","Secrets Manager vs Parameter Store SecureString","Config — remédiation automatique","Security Hub — scores conformité"]},

 {d:12,theme:"Domaine 5 — VPC fondamentaux",dom:["Domaine 5 (18%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"vpc-cidr-subnets-publics-prives",titre:"VPC : CIDR, subnets publics/privés"},{id:"route-tables-igw-nat-gateway",titre:"Route tables, IGW, NAT Gateway"},{id:"security-groups-vs-nacls",titre:"Security Groups vs NACLs"},{id:"vpc-flow-logs",titre:"VPC Flow Logs"},{id:"vpc-endpoints-gateway-vs-interface",titre:"VPC Endpoints (Gateway vs Interface)"}],
  read:["NAT Gateway vs NAT Instance","Security Groups stateful vs NACLs stateless","VPC Flow Logs fields"],
  links:[["VPC Guide",_VPC],["Documentation officielle",_G]],
  focus:["Règles SG vs NACL (stateful/stateless)","Gateway Endpoint S3/DynamoDB gratuit","Interface Endpoint (PrivateLink)","Flow Logs — dépannage connectivité"]},

 {d:13,theme:"Domaine 5 — VPC avancé et connectivité hybride",dom:["Domaine 5 (18%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"vpc-peering",titre:"VPC Peering"},{id:"aws-transit-gateway",titre:"AWS Transit Gateway"},{id:"aws-privatelink",titre:"AWS PrivateLink"},{id:"site-to-site-vpn",titre:"Site-to-Site VPN"},{id:"aws-direct-connect",titre:"AWS Direct Connect"},{id:"route-53-resolver-inbound-outbound",titre:"Route 53 Resolver (Inbound/Outbound)"}],
  read:["Transit Gateway vs VPC Peering","Direct Connect vs VPN","PrivateLink vs VPC Endpoints"],
  links:[["VPC Guide",_VPC],["Documentation officielle",_G]],
  focus:["Peering non transitif","Transit Gateway hub-and-spoke","PrivateLink pour SaaS","Route 53 Resolver pour DNS hybride"]},

 {d:14,theme:"Domaine 5 — CloudFront, WAF, Shield, Network Firewall",dom:["Domaine 5 (18%)"],time:"≈ 1 h lecture + 1 h quiz",
  sections:[{id:"cloudfront-cache-behaviors-signed-urls",titre:"CloudFront : cache behaviors, signed URLs/cookies"},{id:"aws-waf-webacls-rules-managed-rule",titre:"AWS WAF : WebACLs, rules, managed rule groups"},{id:"aws-shield-standard-vs-advanced",titre:"AWS Shield Standard vs Advanced"},{id:"aws-network-firewall",titre:"AWS Network Firewall"},{id:"elb-access-logs-vpc-flow-logs",titre:"ELB access logs, VPC Flow Logs — troubleshooting"}],
  read:["WAF managed rule groups","Shield Advanced DDoS response","Network Firewall stateful rules"],
  links:[["Documentation officielle",_G]],
  focus:["WAF rate-based rules","Shield Advanced — SRT et protection financière","Network Firewall vs Security Groups","CloudFront signed URLs — TTL et restriction"]},

 {d:15,theme:"Révision générale — Mock Exam",dom:["Tous les domaines"],time:"≈ 2 h quiz",
  sections:[{id:"domaine-1-monitoring-22",titre:"Domaine 1 : Monitoring (22%)"},{id:"domaine-2-reliability-22",titre:"Domaine 2 : Reliability (22%)"},{id:"domaine-3-deployment-22",titre:"Domaine 3 : Deployment (22%)"},{id:"domaine-4-security-16",titre:"Domaine 4 : Security (16%)"},{id:"domaine-5-networking-18",titre:"Domaine 5 : Networking (18%)"}],
  read:["Relire les fiches de chaque domaine","Revoir les points faibles identifiés"],
  links:[["Documentation officielle",_G],["AWS Certification",_G]],
  focus:["Questions à la difficulté examen","Gestion du temps : 130 min / 50 questions","Élimination des distracteurs","Révision des erreurs"]}
];

// ── Questions ────────────────────────────────────────────────────────────────
window.QDATA = { 1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],13:[],14:[],15:[] };

// ── Jour 1 — CloudWatch : métriques, alarmes, logs ──────────────────────────
window.QDATA[1,
  {
    id: "aws-soa-c03-j1-21",
    q: "Quel est l'impact d'activer les 'Detailed Monitoring' sur une instance EC2 ?",
    choices: ["A. Les métriques sont publiées toutes les 1 minute au lieu de 5 minutes, avec un coût supplémentaire","B. Les métriques incluent la mémoire et le disk automatiquement","C. Les métriques sont gratuites et publiées à la seconde","D. Cela active automatiquement l'agent CloudWatch"],
    answer: 0,
    exp: "Detailed Monitoring EC2 publie les métriques (CPU, réseau, disque) toutes les 1 minute au lieu de 5 minutes (Basic Monitoring). C'est payant. Cela n'inclut PAS la mémoire ou les métriques OS — celles-ci nécessitent l'agent CloudWatch. Utile pour les ASG qui nécessitent des métriques plus fréquentes pour le scaling."
  },
  {
    id: "aws-soa-c03-j1-22",
    q: "Une application publie des métriques CloudWatch via l'API PutMetricData. Quelle est la limite maximale de points de données par appel API ?",
    choices: ["A. 100 points","B. 150 points","C. 1000 points","D. 10000 points"],
    answer: 1,
    exp: "PutMetricData accepte jusqu'à 1000 métriques différentes mais seulement 150 points de données (MetricDatum) par appel API. La taille de payload est limitée à 40 KB. Pour des publications fréquentes, il est recommandé de batcher les appels PutMetricData."
  },
  {
    id: "aws-soa-c03-j1-23",
    q: "Vous souhaitez créer un dashboard CloudWatch partagé entre plusieurs comptes AWS sans répliquer les données. Quelle fonctionnalité utiliser ?",
    choices: ["A. CloudWatch Cross-Account Observability avec un compte monitoring central","B. Exporter les métriques vers S3 et créer un dashboard Grafana","C. Partager le dashboard via un lien public CloudWatch","D. Utiliser AWS Organizations pour synchroniser les dashboards"],
    answer: 0,
    exp: "CloudWatch Cross-Account Observability permet à un compte 'monitoring' de voir les métriques, logs et traces de comptes 'source' sans copier les données. Le dashboard central affiche des widgets provenant de plusieurs comptes. Configuration : le compte source autorise le partage, le compte monitoring crée les liens."
  },
  {
    id: "aws-soa-c03-j1-24",
    q: "Une alarme CloudWatch doit récupérer automatiquement une instance EC2 en cas de défaillance système. Quelle action d'alarme faut-il configurer ?",
    choices: ["A. EC2 Reboot — redémarre l'instance","B. EC2 Stop — arrête et redémarre l'instance","C. EC2 Recover — migre l'instance sur un nouvel hôte en conservant l'IP et les volumes EBS","D. EC2 Terminate — termine et recrée l'instance"],
    answer: 2,
    exp: "L'action EC2 Recover migre l'instance vers un autre hôte physique en préservant l'IP privée, l'IP publique Elastic IP, les métadonnées, les volumes EBS attachés. Utilisée avec la métrique StatusCheckFailed_System qui détecte les pannes hardware. L'adresse IP reste identique — différent d'un Reboot."
  },
  {
    id: "aws-soa-c03-j1-25",
    q: "Comment configurer CloudWatch pour envoyer des logs d'une flotte d'instances EC2 Auto Scaling vers un groupe de logs centralisé ?",
    choices: ["A. Chaque instance publie dans un groupe de logs différent par InstanceId","B. Configurer l'agent CloudWatch avec le même log group name sur toutes les instances via SSM Parameter Store","C. Utiliser VPC Flow Logs pour centraliser","D. Activer CloudTrail pour capturer les logs applicatifs"],
    answer: 1,
    exp: "La bonne pratique : stocker la config de l'agent CloudWatch dans SSM Parameter Store, et utiliser SSM State Manager pour déployer cette config sur toutes les instances (y compris les nouvelles). Toutes les instances écrivent dans le même log group, avec un log stream par instance (InstanceId). Configuration unifiée et centralisée."
  },
  {
    id: "aws-soa-c03-j1-26",
    q: "Quelle est la différence entre une alarme CloudWatch 'Standard Resolution' et 'High Resolution' ?",
    choices: ["A. Standard = période minimale 1 min, High Resolution = période minimale 10 secondes","B. Standard = alertes par email uniquement, High Resolution = SNS + Lambda","C. Standard gratuite, High Resolution payante par alerte","D. Standard pour EC2 uniquement, High Resolution pour toutes les ressources"],
    answer: 0,
    exp: "Les alarmes Standard Resolution évaluent les métriques avec une période minimale de 60 secondes. Les alarmes High Resolution peuvent évaluer des métriques high-resolution (1 seconde) avec des périodes de 10 ou 30 secondes. Coût supplémentaire pour High Resolution alarms. Utile pour les applications sensibles à la latence."
  },
  {
    id: "aws-soa-c03-j1-27",
    q: "Un ops admin veut voir les requêtes CloudWatch Logs Insights les plus lentes dans une application. Quelle requête utiliser ?",
    choices: ["A. fields @timestamp, @duration | sort @duration desc | limit 20","B. stats count(*) by @logStream | sort count desc","C. filter @message like /ERROR/ | count() by bin(1h)","D. fields @timestamp | filter @duration > 1000"],
    answer: 0,
    exp: "La requête Logs Insights `fields @timestamp, @duration | sort @duration desc | limit 20` trie par durée décroissante et affiche les 20 requêtes les plus longues. Le champ @duration est automatiquement parsé pour Lambda, API Gateway et certains services AWS. Pour des logs custom, utiliser `parse` pour extraire la durée."
  },
  {
    id: "aws-soa-c03-j1-28",
    q: "Que signifie 'DatapointsToAlarm' dans une configuration d'alarme CloudWatch ?",
    choices: ["A. Le nombre total de points de données collectés","B. Le nombre minimum de points de données ALARM requis dans la fenêtre d'évaluation pour déclencher l'alarme","C. Le délai en secondes avant qu'une alarme se déclenche","D. Le nombre d'actions à exécuter quand l'alarme se déclenche"],
    answer: 1,
    exp: "DatapointsToAlarm est utilisé avec EvaluationPeriods pour créer des alarmes 'M out of N'. Par exemple : EvaluationPeriods=5, DatapointsToAlarm=3 signifie que l'alarme se déclenche si 3 des 5 dernières périodes dépassent le seuil (M=3, N=5). Cela réduit les fausses alertes dues aux anomalies ponctuelles."
  },
  {
    id: "aws-soa-c03-j1-29",
    q: "Comment supprimer automatiquement les anciens groupes de logs CloudWatch créés par Lambda pour réduire les coûts ?",
    choices: ["A. Lambda supprime ses propres groupes de logs après 30 jours","B. Configurer une règle de rétention sur le groupe de logs ou utiliser une Lambda de nettoyage avec EventBridge","C. Activer 'Auto-Delete' dans les paramètres CloudWatch Logs","D. Utiliser S3 Lifecycle sur le bucket d'export"],
    answer: 1,
    exp: "Il n'y a pas de suppression automatique des groupes de logs Lambda. Options : 1) Configurer une politique de rétention (1-10 ans ou Never Expire) sur chaque groupe de logs. 2) Lambda de nettoyage planifiée via EventBridge qui appelle DeleteLogGroup pour les groupes anciens/vides. 3) AWS Config + remédiation automatique."
  },
  {
    id: "aws-soa-c03-j1-30",
    q: "Quelle est la limite maximale de rétention configurable pour un groupe de logs CloudWatch ?",
    choices: ["A. 1 an","B. 2 ans","C. 5 ans","D. 10 ans et 'Never Expire' (illimité)"],
    answer: 3,
    exp: "CloudWatch Logs propose des politiques de rétention de 1 jour à 10 ans (3650 jours), plus l'option 'Never Expire' (aucune expiration). Par défaut, les nouveaux groupes de logs ont 'Never Expire'. Il est recommandé de définir une politique de rétention pour maîtriser les coûts."
  },
  {
    id: "aws-soa-c03-j1-31",
    q: "Un SysOps admin doit créer un tableau de bord CloudWatch affichant les métriques d'une application multi-régions. Quelle est la limitation principale ?",
    choices: ["A. Les dashboards CloudWatch ne peuvent afficher que des métriques d'une seule région","B. Les dashboards CloudWatch peuvent afficher des métriques de toutes les régions dans un seul dashboard","C. Les widgets cross-région ont un délai supplémentaire de 5 minutes","D. Les dashboards cross-région nécessitent un abonnement Enterprise"],
    answer: 1,
    exp: "Les dashboards CloudWatch peuvent afficher des métriques de MULTIPLE régions dans un seul dashboard. Lors de l'ajout d'un widget, vous pouvez sélectionner n'importe quelle région. Cela permet une vue centralisée d'une application multi-régions sans quitter la console."
  },
  {
    id: "aws-soa-c03-j1-32",
    q: "Quelle fonctionnalité CloudWatch permet de détecter automatiquement des anomalies dans une métrique sans définir de seuil fixe ?",
    choices: ["A. CloudWatch Alarms avec DatapointsToAlarm","B. CloudWatch Anomaly Detection avec bande d'anomalie dynamique","C. CloudWatch Synthetics","D. CloudWatch Contributor Insights"],
    answer: 1,
    exp: "CloudWatch Anomaly Detection utilise Machine Learning pour modéliser le comportement normal d'une métrique (y compris les patterns journaliers/hebdomadaires) et crée une bande 'attendue'. Une alarme se déclenche quand la métrique sort de cette bande. Plus intelligent qu'un seuil fixe qui nécessite une calibration manuelle."
  },
  {
    id: "aws-soa-c03-j1-33",
    q: "Comment CloudWatch Contributor Insights aide-t-il au dépannage ?",
    choices: ["A. Il identifie les 'top contributors' — les entités (IP, user, path) qui génèrent le plus de trafic ou d'erreurs dans les logs","B. Il calcule automatiquement les métriques custom depuis les logs","C. Il crée des alertes basées sur les patterns de logs","D. Il visualise les traces distribuées comme X-Ray"],
    answer: 0,
    exp: "CloudWatch Contributor Insights analyse les logs en temps réel et identifie les 'top N contributors' — par exemple les 10 adresses IP qui génèrent le plus d'erreurs, les paths API les plus lents, les users avec le plus de requêtes. Utile pour trouver rapidement la source de problèmes dans des applications à grande échelle."
  },
  {
    id: "aws-soa-c03-j1-34",
    q: "Quelle est la différence entre les namespaces AWS/EC2 et CWAgent dans CloudWatch ?",
    choices: ["A. AWS/EC2 contient les métriques publiées automatiquement par AWS (CPU, réseau), CWAgent contient les métriques collectées par l'agent (mémoire, disk, processus)","B. CWAgent est plus précis et remplace AWS/EC2","C. AWS/EC2 est en temps réel, CWAgent a un délai de 5 minutes","D. Les deux namespaces contiennent les mêmes métriques"],
    answer: 0,
    exp: "AWS/EC2 : métriques publiées par l'hyperviseur AWS sans accès à l'OS (CPUUtilization, NetworkIn/Out, DiskReadBytes pour instance store). CWAgent (ou CloudWatchAgent) : métriques OS publiées par l'agent installé dans l'instance (mem_used_percent, disk_used_percent, processus, etc.). Complémentaires."
  },
  {
    id: "aws-soa-c03-j1-35",
    q: "Un alarm CloudWatch doit se déclencher si une fonction Lambda dépasse 500 ms pendant 3 périodes consécutives de 1 minute. Quelle configuration est correcte ?",
    choices: ["A. MetricName=Duration, Statistic=Average, Threshold=500, Period=60, EvaluationPeriods=3","B. MetricName=Duration, Statistic=Sum, Threshold=500, Period=60, EvaluationPeriods=1","C. MetricName=Latency, Statistic=p99, Threshold=500, Period=180, EvaluationPeriods=1","D. MetricName=Duration, Statistic=Maximum, Threshold=500, Period=180, EvaluationPeriods=3"],
    answer: 0,
    exp: "Pour Lambda Duration : MetricName=Duration (en ms), Statistic=Average pour la durée moyenne par minute, Threshold=500 ms, Period=60s (1 minute), EvaluationPeriods=3 (3 périodes consécutives). Le namespace est AWS/Lambda. L'option A est la seule qui correspond aux exigences de l'énoncé."
  },
  {
    id: "aws-soa-c03-j1-36",
    q: "Quelle commande AWS CLI publie une métrique custom CloudWatch avec deux dimensions ?",
    choices: ["A. aws cloudwatch put-metric-data --namespace MyApp --metric-name Latency --value 150 --dimensions Name=Service,Value=API Name=Region,Value=eu-west-1","B. aws cloudwatch create-metric --name Latency --value 150","C. aws cloudwatch publish --metric Latency --namespace MyApp --tags Service=API","D. aws cloudwatch put-metric --namespace MyApp --metric Latency=150"],
    answer: 0,
    exp: "La commande put-metric-data avec --dimensions permet de spécifier plusieurs dimensions (Name=Key,Value=Val). Les dimensions identifient uniquement la métrique. Chaque combinaison unique de dimensions crée une série de métriques distincte. L'unité par défaut est None; spécifier --unit Milliseconds pour les latences."
  },
  {
    id: "aws-soa-c03-j1-37",
    q: "Qu'est-ce que les 'Embedded Metric Format' (EMF) dans CloudWatch ?",
    choices: ["A. Un format de logs structurés JSON qui permet à CloudWatch d'extraire automatiquement des métriques des logs","B. Un format de dashboard CloudWatch en JSON","C. Un format de configuration de l'agent CloudWatch","D. Un protocole de transfert de métriques entre régions"],
    answer: 0,
    exp: "EMF (Embedded Metric Format) permet d'écrire des métriques comme du JSON dans les logs CloudWatch. CloudWatch parse automatiquement ces JSON et crée des métriques custom sans appel à PutMetricData. Avantage : corrélation log/métrique, réduction du code, support natif dans Lambda via l'EMF library."
  },
  {
    id: "aws-soa-c03-j1-38",
    q: "Une alarme en état ALARM doit envoyer une notification SNS mais aussi exécuter un runbook SSM Automation. Combien d'actions peut-on configurer sur une alarme CloudWatch ?",
    choices: ["A. Une seule action par état","B. Jusqu'à 5 actions par état d'alarme","C. Jusqu'à 3 actions par état, 5 actions au total","D. Illimité"],
    answer: 1,
    exp: "Une alarme CloudWatch peut avoir jusqu'à 5 actions par état (ALARM, OK, INSUFFICIENT_DATA), soit 15 actions au total. Les types d'actions possibles : SNS, EC2 (stop/reboot/terminate/recover), ASG, Systems Manager OpsItem, Systems Manager Automation. Donc SNS + SSM Automation ensemble est possible."
  },
  {
    id: "aws-soa-c03-j1-39",
    q: "Comment vérifier qu'un agent CloudWatch est correctement installé et en fonctionnement sur une instance EC2 Linux ?",
    choices: ["A. Vérifier dans la console EC2 que 'CloudWatch Agent' est listed","B. Exécuter : sudo systemctl status amazon-cloudwatch-agent et vérifier les logs /opt/aws/amazon-cloudwatch-agent/logs/","C. Appeler l'API DescribeInstances et chercher le champ 'cloudWatchAgent'","D. Vérifier que les métriques apparaissent immédiatement dans le namespace AWS/EC2"],
    answer: 1,
    exp: "Sur Linux : systemctl status amazon-cloudwatch-agent vérifie que le service est actif. Les logs de l'agent sont dans /opt/aws/amazon-cloudwatch-agent/logs/amazon-cloudwatch-agent.log. Les métriques apparaissent dans le namespace CWAgent (pas AWS/EC2) après quelques minutes. Via SSM Run Command avec le document 'AmazonCloudWatch-ManageAgent' aussi possible."
  },
  {
    id: "aws-soa-c03-j1-40",
    q: "Quelle est la limite de métriques custom par compte AWS dans CloudWatch ?",
    choices: ["A. 10,000 métriques","B. Illimitée — vous pouvez créer autant de métriques que nécessaire","C. 100,000 métriques par région","D. 500 métriques par service"],
    answer: 1,
    exp: "Il n'y a pas de limite au nombre de métriques custom dans CloudWatch (vous payez par métrique). Cependant, il y a des limites de débit (TPS) pour l'API PutMetricData : 1000 TPS par compte. Les dimensions créent des métriques distinctes — une métrique avec 10 combinaisons de dimensions compte comme 10 métriques pour la facturation."
  },
  {
    id: "aws-soa-c03-j1-41",
    q: "Un ops admin remarque que les alarmes CloudWatch ne se déclenchent pas malgré des métriques dépassant le seuil. Quelle vérification effectuer en premier ?",
    choices: ["A. Vérifier que les 'Actions enabled' sont activées sur l'alarme","B. Vérifier que le seuil est configuré en valeur absolue et non en pourcentage","C. Redémarrer le service CloudWatch dans la console","D. Supprimer et recréer l'alarme"],
    answer: 0,
    exp: "'Actions enabled' est un paramètre qui peut être désactivé (par exemple lors de la maintenance) pour supprimer temporairement les notifications sans supprimer l'alarme. Si désactivé, l'alarme change d'état mais n'exécute aucune action. Vérifier 'Actions enabled = true' est la première chose à contrôler."
  },
  {
    id: "aws-soa-c03-j1-42",
    q: "Quelle est la durée maximale de rétention des données métriques CloudWatch pour une résolution de 1 seconde (High Resolution) ?",
    choices: ["A. 24 heures","B. 3 heures","C. 7 jours","D. 15 mois"],
    answer: 1,
    exp: "Rétention des métriques CloudWatch selon la résolution : <60s (High Resolution) → 3 heures. 1 minute → 15 jours. 5 minutes → 63 jours. 1 heure → 15 mois (455 jours). Les données sont automatiquement agrégées vers des résolutions plus basses après la période de rétention fine."
  },
  {
    id: "aws-soa-c03-j1-43",
    q: "Comment CloudWatch Synthetics Canaries diffère-t-il d'une alarme CloudWatch standard ?",
    choices: ["A. Canaries simulent des requêtes utilisateur réelles (HTTP, Selenium) pour monitorer la disponibilité et les performances de bout en bout","B. Canaries analysent les logs existants pour détecter des patterns","C. Canaries collectent des métriques système comme l'agent CloudWatch","D. Canaries sont déclenchés par des événements EventBridge uniquement"],
    answer: 0,
    exp: "Synthetics Canaries exécutent des scripts (Node.js ou Python) sur un planning défini qui simulent les parcours utilisateurs : API calls HTTP, navigation web via Selenium (Puppeteer). Ils créent des métriques sur la disponibilité, la latence, les captures d'écran. Différent des alarmes qui réagissent à des métriques existantes — les canaries testent activement."
  },
  {
    id: "aws-soa-c03-j1-44",
    q: "Vous avez 500 EC2 instances à monitorer. Comment créer efficacement une alarme pour chaque instance sans configuration manuelle ?",
    choices: ["A. Créer une CloudFormation stack avec 500 alarmes définies","B. Utiliser des alarmes métriques sur des métriques sans dimension (agrégation de compte)","C. Utiliser AWS CDK ou Terraform avec une boucle pour générer les alarmes","D. Utiliser CloudWatch alarms avec des expressions de métriques et une alarme composite"],
    answer: 2,
    exp: "Pour créer des alarmes à grande échelle, AWS CDK (Python/TypeScript) ou Terraform avec une boucle sur les InstanceId est l'approche la plus scalable et maintenable. Alternative AWS native : EventBridge + Lambda qui crée automatiquement une alarme quand une nouvelle instance EC2 démarre (état 'running' via EventBridge rule)."
  },
  {
    id: "aws-soa-c03-j1-45",
    q: "Qu'est-ce qu'une 'metric math expression' dans CloudWatch et quel est son avantage ?",
    choices: ["A. Une formule qui combine plusieurs métriques pour créer une nouvelle métrique dérivée directement dans un widget ou une alarme","B. Un langage de requête pour CloudWatch Logs Insights","C. Un moyen d'importer des métriques depuis des sources externes","D. Une fonctionnalité pour convertir les métriques en dollars de coût"],
    answer: 0,
    exp: "Metric Math permet de combiner plusieurs métriques avec des expressions mathématiques (SUM, AVG, RATE, IF, ANOMALY_DETECTION_BAND) directement dans les widgets de dashboard ou les alarmes. Exemple : ErrorRate = (m1/m2)*100 où m1=Errors et m2=Requests. Pas besoin de publier une métrique dérivée séparément."
  },
  {
    id: "aws-soa-c03-j1-46",
    q: "Un SysOps doit archiver les logs CloudWatch d'une application pendant 7 ans pour conformité. Quelle est l'approche recommandée ?",
    choices: ["A. Configurer la rétention CloudWatch Logs à 7 ans directement","B. Exporter les logs vers S3 via une subscription Kinesis Firehose, puis configurer une lifecycle S3 vers Glacier Deep Archive après 90 jours","C. Utiliser CloudTrail Lake avec rétention 7 ans","D. Activer CloudWatch Logs archiving dans les paramètres du groupe de logs"],
    answer: 1,
    exp: "La bonne pratique pour archivage long terme : 1) Subscription filter vers Kinesis Firehose → S3 (logs chauds). 2) S3 Lifecycle : transition vers S3 Glacier Flexible Retrieval après 30-90 jours, puis Glacier Deep Archive après un an (le moins cher, retrieval en heures). Coût optimal pour 7 ans. CloudWatch Logs peut avoir 10 ans max mais coûte plus cher que Glacier."
  },
  {
    id: "aws-soa-c03-j1-47",
    q: "Quel est le comportement d'une alarme CloudWatch quand l'instance EC2 associée est arrêtée ?",
    choices: ["A. L'alarme se supprime automatiquement","B. L'alarme reste active mais passe en état INSUFFICIENT_DATA car aucune métrique n'est publiée","C. L'alarme reste en état OK pendant l'arrêt","D. L'alarme déclenche immédiatement ses actions de state ALARM"],
    answer: 1,
    exp: "Quand une instance EC2 est arrêtée, elle ne publie plus de métriques. L'alarme passe en état INSUFFICIENT_DATA (si configurée ainsi) ou reste dans son état selon le paramètre 'treat missing data'. Si 'treat missing data = breaching', l'alarme passerait en ALARM. Comportement par défaut : INSUFFICIENT_DATA."
  },
  {
    id: "aws-soa-c03-j1-48",
    q: "Comment utiliser CloudWatch pour calculer automatiquement le taux d'erreur d'une API Gateway en pourcentage ?",
    choices: ["A. Créer une alarme sur la métrique ErrorRate directement dans AWS/ApiGateway","B. Utiliser une expression de métriques : (m1/m2)*100 où m1=5XXError et m2=Count","C. Activer API Gateway Access Logs et créer un Metric Filter","D. Utiliser AWS Service Health Dashboard"],
    answer: 1,
    exp: "Metric Math dans CloudWatch permet de calculer le taux d'erreur : EXPRESSION = (m1/m2)*100 où m1 = métrique 5XXError (ou 4XXError) et m2 = Count du namespace AWS/ApiGateway. Cette expression peut être utilisée dans un widget de dashboard ou comme base d'une alarme. Plus simple qu'un Metric Filter sur les Access Logs."
  },
  {
    id: "aws-soa-c03-j1-49",
    q: "Quelle est la fréquence minimale d'évaluation pour une alarme CloudWatch standard ?",
    choices: ["A. 10 secondes","B. 30 secondes","C. 1 minute","D. 5 minutes"],
    answer: 2,
    exp: "La période minimale pour une alarme CloudWatch standard est de 60 secondes (1 minute). Pour des évaluations plus fréquentes, il faut publier des métriques High Resolution (1-30 secondes) et créer une alarme High Resolution qui peut évaluer toutes les 10 ou 30 secondes."
  },
  {
    id: "aws-soa-c03-j1-50",
    q: "Un SysOps admin doit créer un dashboard opérationnel montrant l'état de santé de toute l'infrastructure. Quelle fonctionnalité CloudWatch permet d'afficher l'état de plusieurs alarmes sous forme de feux tricolores ?",
    choices: ["A. CloudWatch Composite Alarms avec visualisation","B. Widget 'Alarm Status' dans les CloudWatch Dashboards","C. AWS Service Health Dashboard","D. AWS Trusted Advisor avec intégration CloudWatch"],
    answer: 1,
    exp: "Le widget 'Alarm Status' dans CloudWatch Dashboards affiche l'état actuel (OK/ALARM/INSUFFICIENT_DATA) de plusieurs alarmes sous forme de tableau avec des indicateurs de couleur (vert/rouge). Idéal pour les dashboards opérationnels. Combiné avec des widgets de métriques, il fournit une vue complète de la santé du système."
  }
]=[
{id:"aws-soa-c03-j1-1",q:"Une alarme CloudWatch est en état INSUFFICIENT_DATA depuis 15 minutes. Quelle est la cause la plus probable ?",choices:["A. Le seuil configuré est trop bas","B. La métrique n'a reçu aucune donnée pendant la période d'évaluation","C. L'action SNS associée a échoué","D. L'alarme a été désactivée manuellement"],answer:1,exp:"INSUFFICIENT_DATA signifie qu'il n'y a pas assez de données pour évaluer l'alarme — la métrique n'a pas envoyé de points pendant la période d'évaluation. Ce n'est pas une erreur, c'est un état de transition ou d'absence de données."},
{id:"aws-soa-c03-j1-2",q:"Vous souhaitez recevoir une alerte CloudWatch quand une instance EC2 utilise plus de 80% de CPU pendant 5 minutes consécutives. Quelle configuration est correcte ?",choices:["A. Threshold=80, Period=300s, EvaluationPeriods=1, Statistic=Average","B. Threshold=80, Period=60s, EvaluationPeriods=5, Statistic=Maximum","C. Threshold=80, Period=60s, EvaluationPeriods=1, Statistic=Average","D. Threshold=80, Period=300s, EvaluationPeriods=5, Statistic=Sum"],answer:0,exp:"Pour déclencher après 5 minutes consécutives : Period=300s (5 min) et EvaluationPeriods=1 suffit (1 période de 5 min), ou Period=60s avec EvaluationPeriods=5. L'option A est correcte car elle surveille la moyenne sur une période de 5 minutes."},
{id:"aws-soa-c03-j1-3",q:"Quelle est la différence principale entre une métrique CloudWatch standard et une métrique custom ?",choices:["A. Les métriques standard ont une résolution maximale de 1 minute, les custom de 1 seconde","B. Les métriques custom coûtent plus cher et ne peuvent pas déclencher d'alarmes","C. Les métriques standard sont limitées à EC2, les custom à Lambda","D. Les métriques standard expirent après 15 mois, les custom après 3 mois"],answer:0,exp:"Les métriques standard (publiées par AWS) ont une granularité minimale de 1 minute. Les métriques custom peuvent être publiées en haute résolution (1 seconde = High Resolution). Les deux peuvent déclencher des alarmes. La rétention est de 15 mois pour les deux."},
{id:"aws-soa-c03-j1-4",q:"Un développeur a publié une métrique custom 'ActiveConnections' dans le namespace 'MyApp'. Après 24h, la métrique n'apparaît plus dans CloudWatch. Quelle est la raison ?",choices:["A. Les métriques custom expirent après 24 heures","B. Aucune donnée n'a été publiée pour cette métrique depuis 24h — CloudWatch ne retient que les métriques actives","C. Le namespace 'MyApp' est réservé et les données ont été supprimées","D. Les métriques custom nécessitent l'approbation d'AWS pour persister"],answer:1,exp:"CloudWatch conserve les données des métriques jusqu'à 15 mois. Cependant, si aucune donnée n'est publiée, la métrique peut disparaître de la console (elle n'est plus 'active'). Ce n'est pas une expiration mais une absence de publication."},
{id:"aws-soa-c03-j1-5",q:"Vous devez surveiller l'utilisation mémoire des instances EC2. L'agent CloudWatch est installé. Quelle action supplémentaire est requise ?",choices:["A. Activer les métriques détaillées dans la console EC2","B. Configurer l'agent CloudWatch pour collecter la métrique mem_used_percent dans le fichier de configuration","C. Créer une alarme sur la métrique MemoryUtilization du namespace AWS/EC2","D. Installer le CloudWatch SDK sur chaque instance"],answer:1,exp:"La métrique MemoryUtilization n'existe PAS dans le namespace AWS/EC2 par défaut — AWS n'a pas accès à la mémoire de l'OS. L'agent CloudWatch doit être configuré avec collectd/procstat pour collecter mem_used_percent et la publier comme métrique custom."},
{id:"aws-soa-c03-j1-6",q:"Quelle alarme composite CloudWatch permet d'envoyer une notification uniquement si DEUX conditions sont vraies simultanément ?",choices:["A. Une alarme avec EvaluationPeriods=2","B. Une alarme composite utilisant l'opérateur AND entre deux alarmes filles","C. Une règle EventBridge avec deux sources","D. Une alarme avec DatapointsToAlarm=2"],answer:1,exp:"Les alarmes composites (Composite Alarms) combinent plusieurs alarmes filles via des opérateurs logiques AND/OR/NOT. Exemple : ALARM(CPUAlarm) AND ALARM(NetworkAlarm). Cela réduit les fausses alertes en n'alertant que si plusieurs conditions se produisent ensemble."},
{id:"aws-soa-c03-j1-7",q:"Un groupe de logs CloudWatch reçoit des milliers d'événements par seconde. Comment rechercher efficacement les erreurs 'OOM' sans exporter tous les logs ?",choices:["A. Utiliser CloudWatch Logs Insights avec une requête comme : fields @timestamp, @message | filter @message like /OOM/","B. Exporter les logs vers S3 puis les analyser avec Athena","C. Créer un Metric Filter sur le groupe de logs pour compter les occurrences de OOM","D. A et C sont deux approches valides selon le besoin"],answer:3,exp:"Les deux approches sont valides. CloudWatch Logs Insights permet des requêtes ad hoc rapides. Les Metric Filters transforment les patterns de logs en métriques pour des alarmes continues. Le choix dépend du besoin : analyse ponctuelle (Insights) vs surveillance continue (Metric Filter)."},
{id:"aws-soa-c03-j1-8",q:"Quelle est la durée de rétention par défaut des logs dans CloudWatch Logs ?",choices:["A. 7 jours","B. 30 jours","C. 1 an","D. Les logs ne sont jamais supprimés par défaut"],answer:3,exp:"Par défaut, la rétention des logs CloudWatch Logs est 'Never Expire' (jamais supprimés). Vous devez configurer explicitement une politique de rétention (1 jour à 10 ans) pour chaque groupe de logs. Attention : cela peut entraîner des coûts importants."},
{id:"aws-soa-c03-j1-9",q:"Vous créez un Metric Filter sur un groupe de logs pour compter les erreurs HTTP 500. Après création, vous remarquez que le filtre ne comptabilise pas les erreurs des 24 dernières heures. Pourquoi ?",choices:["A. Les Metric Filters ne traitent que les nouveaux logs publiés après leur création","B. Le pattern du filtre est incorrect","C. Les Metric Filters nécessitent une période de warmup de 24 heures","D. Les logs doivent être dans la région us-east-1 pour être filtrés"],answer:0,exp:"Les Metric Filters CloudWatch ne sont pas rétroactifs. Ils commencent à compter les occurrences uniquement dans les nouveaux logs publiés APRÈS la création du filtre. Pour les données historiques, il faut utiliser CloudWatch Logs Insights."},
{id:"aws-soa-c03-j1-10",q:"Une alarme CloudWatch doit arrêter une instance EC2 si le CPU est inférieur à 10% pendant 60 minutes. Quelle configuration est correcte ?",choices:["A. ComparisonOperator=LessThanThreshold, Threshold=10, Period=300, EvaluationPeriods=12, Actions=[EC2 Stop]","B. ComparisonOperator=LessThanOrEqualToThreshold, Threshold=10, Period=60, EvaluationPeriods=1, Actions=[EC2 Stop]","C. ComparisonOperator=LessThanThreshold, Threshold=10, Period=3600, EvaluationPeriods=1, Actions=[EC2 Stop]","D. ComparisonOperator=GreaterThanThreshold, Threshold=10, Period=300, EvaluationPeriods=12, Actions=[EC2 Stop]"],answer:0,exp:"Pour 60 minutes : Period=300s (5 min) × EvaluationPeriods=12 = 60 min. L'opérateur LessThanThreshold avec seuil=10 et l'action EC2 Stop est correct. L'option C (Period=3600) est valide aussi mais l'option A est plus précise avec 12 périodes de 5 minutes."},
{id:"aws-soa-c03-j1-11",q:"Comment CloudWatch Logs Insights facture son utilisation ?",choices:["A. Par nombre de requêtes exécutées","B. Par volume de données analysées (scanné) lors de chaque requête","C. Par groupe de logs configuré","D. Forfait mensuel fixe par région"],answer:1,exp:"CloudWatch Logs Insights facture au volume de données scannées lors de chaque requête (en GB). Plus la fenêtre temporelle est large ou le groupe de logs volumineux, plus le coût est élevé. Optimiser les requêtes et limiter la plage temporelle réduit les coûts."},
{id:"aws-soa-c03-j1-12",q:"Quel service permet d'agréger et visualiser des métriques CloudWatch provenant de plusieurs comptes AWS dans un tableau de bord centralisé ?",choices:["A. CloudWatch Cross-Account Observability","B. AWS Organizations avec AWS Config","C. CloudTrail Lake","D. Amazon Managed Grafana uniquement"],answer:0,exp:"CloudWatch Cross-Account Observability (anciennement Cross-Account Cross-Region) permet de partager des métriques, logs et traces entre comptes. Un compte 'monitoring' central peut visualiser des données de plusieurs comptes 'source'. Amazon Managed Grafana peut aussi consommer CloudWatch mais ce n'est pas la réponse principale."},
{id:"aws-soa-c03-j1-13",q:"Une Lambda function génère des logs CloudWatch. L'équipe veut exporter ces logs vers S3 quotidiennement. Quelle approche est la plus simple ?",choices:["A. Créer une règle EventBridge déclenchant une Lambda qui appelle CreateExportTask chaque nuit","B. Configurer une souscription Kinesis Firehose sur le groupe de logs vers S3","C. Utiliser AWS Glue pour ETL vers S3","D. Activer 'Export to S3' dans les paramètres du groupe de logs"],answer:1,exp:"Une subscription filter avec Kinesis Data Firehose est la solution temps-réel/quasi-temps-réel la plus simple pour streaming vers S3. L'option A (CreateExportTask) fonctionne mais est asynchrone et limitée à 1 export actif par compte. Firehose est la bonne pratique pour les exports continus."},
{id:"aws-soa-c03-j1-14",q:"Quelle dimension est utilisée par défaut dans la métrique CPUUtilization du namespace AWS/EC2 ?",choices:["A. InstanceId","B. InstanceType","C. AvailabilityZone","D. AutoScalingGroupName"],answer:0,exp:"La métrique CPUUtilization dans AWS/EC2 utilise la dimension InstanceId par défaut pour identifier l'instance spécifique. D'autres dimensions existent (AutoScalingGroupName, ImageId, InstanceType) mais InstanceId est la plus granulaire et la plus commune."},
{id:"aws-soa-c03-j1-15",q:"Vous configurez une alarme sur une métrique avec 'Treat missing data as: breaching'. Que se passe-t-il si aucune donnée n'est reçue pendant la période d'évaluation ?",choices:["A. L'alarme reste en état INSUFFICIENT_DATA","B. L'alarme passe en état ALARM comme si le seuil était dépassé","C. L'alarme est automatiquement désactivée","D. Une notification est envoyée mais l'alarme reste OK"],answer:1,exp:"Avec 'Treat missing data as: breaching', CloudWatch traite les points manquants comme s'ils dépassaient le seuil. L'alarme passe en ALARM. Les autres options : 'missing' → INSUFFICIENT_DATA, 'notBreaching' → reste OK, 'ignore' → maintient l'état précédent."},
{id:"aws-soa-c03-j1-16",q:"Quelle est la résolution maximale pour une métrique CloudWatch en haute résolution (High Resolution) ?",choices:["A. 1 seconde","B. 5 secondes","C. 10 secondes","D. 30 secondes"],answer:0,exp:"Les métriques High Resolution peuvent être publiées avec une granularité de 1 seconde (StorageResolution=1). Les métriques standard ont une résolution de 60 secondes. Les alarmes High Resolution peuvent évaluer les métriques à 10 ou 30 secondes."},
{id:"aws-soa-c03-j1-17",q:"Un ops engineer veut être alerté si le nombre d'erreurs dans les logs dépasse 100 en 5 minutes. Quelle est la bonne séquence d'actions ?",choices:["A. 1) Créer un Metric Filter sur le groupe de logs 2) Créer une alarme sur la métrique résultante 3) Configurer une action SNS","B. 1) Créer une alarme directement sur le groupe de logs 2) Configurer l'action","C. 1) Exporter les logs vers S3 2) Créer une règle Athena 3) Alerter","D. 1) Créer une règle EventBridge sur le groupe de logs 2) Déclencher SNS"],answer:0,exp:"La séquence correcte : 1) Metric Filter pour convertir le pattern d'erreur en métrique (compte +1 à chaque match). 2) Alarme CloudWatch sur cette métrique custom avec seuil=100, Period=300s. 3) Action SNS pour notification. C'est l'approche standard pour alerter sur des patterns de logs."},
{id:"aws-soa-c03-j1-18",q:"Quelle statistique CloudWatch calcule la valeur médiane d'une métrique ?",choices:["A. Average","B. p50","C. Median","D. p99"],answer:1,exp:"CloudWatch supporte les statistiques percentile : p50 correspond à la médiane (50e percentile). p99 correspond au 99e percentile (utile pour les latences). CloudWatch ne propose pas de statistique 'Median' explicitement — c'est p50."},
{id:"aws-soa-c03-j1-19",q:"Vous avez 50 instances EC2 dans un Auto Scaling Group. Comment créer une alarme qui se déclenche si la moyenne du CPU dépasse 80% pour le groupe entier (pas par instance) ?",choices:["A. Créer 50 alarmes individuelles par instance EC2","B. Créer une alarme sur la métrique CPUUtilization avec la dimension AutoScalingGroupName","C. Créer une alarme composite qui agrège les alarmes de chaque instance","D. Utiliser CloudWatch Container Insights"],answer:1,exp:"En utilisant la dimension AutoScalingGroupName dans la métrique AWS/EC2 CPUUtilization, CloudWatch calcule automatiquement la moyenne de toutes les instances du groupe. C'est bien plus simple que 50 alarmes individuelles. Cette agrégation est native pour les ASG."},
{id:"aws-soa-c03-j1-20",q:"Un alarm CloudWatch en état OK déclenche quand même des notifications SNS. Quelle est la cause probable ?",choices:["A. L'alarme est configurée avec 'Actions enabled = False'","B. L'alarme a une action configurée pour l'état OK (OK actions)","C. SNS envoie automatiquement des confirmations d'état OK","D. CloudWatch envoie des notifications même en état OK par défaut"],answer:1,exp:"CloudWatch permet de configurer des actions pour CHAQUE état : ALARM, OK et INSUFFICIENT_DATA. Si une action SNS est ajoutée dans 'OK actions', une notification est envoyée quand l'alarme repasse en état OK. C'est utile pour signaler la résolution d'un incident."}
];

// ── Jour 2 — EventBridge, CloudTrail, X-Ray ─────────────────────────────────
window.QDATA[2,
  {
    id: "aws-soa-c03-j2-21",
    q: "Quelle est la limite de règles EventBridge par bus d'événements ?",
    choices: ["A. 100 règles","B. 300 règles","C. 2000 règles (limite par défaut, augmentable)","D. Illimitée"],
    answer: 2,
    exp: "La limite par défaut d'EventBridge est 300 règles par bus (default et custom), augmentable via une demande de quota. Il est recommandé de consolider les règles similaires avec des patterns complexes plutôt que créer des règles séparées. Limite également : 5 targets par règle (augmentable jusqu'à 100 avec Service Quotas)."
  },
  {
    id: "aws-soa-c03-j2-22",
    q: "Un trail CloudTrail doit être protégé contre la suppression accidentelle. Quelles mesures appliquer ?",
    choices: ["A. Activer S3 Object Lock sur le bucket avec mode Compliance + MFA Delete sur le bucket","B. Chiffrer les logs avec KMS","C. Créer un trail dans plusieurs régions simultanément","D. Activer CloudTrail Log File Integrity Validation"],
    answer: 0,
    exp: "Pour protéger les logs CloudTrail : 1) S3 Object Lock (mode Compliance + WORM) empêche la suppression/modification pendant la période de rétention, même par root. 2) MFA Delete exige un token MFA pour supprimer des versions. 3) Bucket policy restrictive. Log File Integrity Validation détecte les altérations mais ne les prévient pas."
  },
  {
    id: "aws-soa-c03-j2-23",
    q: "Quel EventBridge pattern correspond à TOUS les événements de suppression dans un compte AWS, quelle que soit la ressource ?",
    choices: ["A. {\"detail-type\": [{\"prefix\": \"Delete\"}]}","B. {\"detail\": {\"eventName\": [{\"prefix\": \"Delete\"}]}}","C. {\"source\": [\"aws.ec2\"], \"detail\": {\"eventName\": [\"DeleteInstance\"]}}","D. {\"detail\": {\"requestParameters\": {\"action\": [\"delete\"]}}}"],
    answer: 1,
    exp: "Dans les événements CloudTrail relayés vers EventBridge, le nom de l'action API est dans le champ detail.eventName. Le pattern {\"detail\": {\"eventName\": [{\"prefix\": \"Delete\"}]}} correspond à toutes les API calls dont le nom commence par 'Delete' (DeleteBucket, DeleteStack, etc.), indépendamment de la source. C'est la bonne syntaxe de prefix matching."
  },
  {
    id: "aws-soa-c03-j2-24",
    q: "Comment X-Ray gère-t-il les appels vers des services AWS comme DynamoDB sans modifier le code ?",
    choices: ["A. X-Ray intercepte automatiquement tous les appels via l'hyperviseur","B. Le X-Ray SDK patch automatiquement les clients AWS SDK (boto3, aws-sdk) pour instrumenter les appels","C. DynamoDB publie ses traces directement vers X-Ray","D. Il faut utiliser OpenTelemetry avec un collector séparé"],
    answer: 1,
    exp: "Le X-Ray SDK inclut un 'patcher' qui instrumente automatiquement les clients AWS SDK : X-Ray.patch_all() (Python) ou xray_recorder.configure() (Node.js). Après le patching, les appels vers DynamoDB, S3, SQS etc. créent automatiquement des sous-segments dans les traces sans modification du code métier."
  },
  {
    id: "aws-soa-c03-j2-25",
    q: "Quelle est la différence entre CloudTrail 'read-only events' et 'write-only events' ?",
    choices: ["A. Read-only : Get/List/Describe, Write-only : Create/Update/Delete","B. Read-only sont enregistrés en temps réel, Write-only en batch","C. Read-only sont gratuits, Write-only payants","D. Read-only concernent S3, Write-only concernent EC2"],
    answer: 0,
    exp: "Dans CloudTrail, vous pouvez filtrer les data events par type : Read events (Get, List, Describe, Head — consultation sans modification) et Write events (Create, Update, Delete, Put — modifications). Cette filtration réduit le volume de logs et les coûts pour les data events S3/DynamoDB très verbeux."
  },
  {
    id: "aws-soa-c03-j2-26",
    q: "Un service EventBridge reçoit des événements mais une cible Lambda ne les traite pas. Quelle fonctionnalité de debugging utiliser ?",
    choices: ["A. Activer CloudTrail pour capturer les invocations Lambda","B. Vérifier les dead-letter queue (DLQ) et le journal d'erreurs EventBridge dans les métriques CloudWatch (FailedInvocations)","C. Redémarrer le service EventBridge via la console","D. Vérifier les VPC Flow Logs pour des problèmes réseau"],
    answer: 1,
    exp: "Pour déboguer EventBridge : 1) Métriques CloudWatch : FailedInvocations, ThrottledRules, MatchedEvents. 2) EventBridge Archive + Replay pour retester les événements. 3) Dead-Letter Queue sur la target pour capturer les événements non traités. 4) CloudWatch Logs sur la fonction Lambda pour voir les erreurs d'exécution."
  },
  {
    id: "aws-soa-c03-j2-27",
    q: "Un audit de sécurité demande de retrouver toutes les modifications de Security Groups effectuées au cours des 90 derniers jours. Quel service interroger ?",
    choices: ["A. AWS Config — historique de configuration des Security Groups","B. VPC Flow Logs — enregistre les changements de Security Groups","C. CloudTrail — events name: AuthorizeSecurityGroupIngress/Revoke...","D. A et C sont toutes deux correctes"],
    answer: 3,
    exp: "Deux sources complémentaires : CloudTrail enregistre les API calls (AuthorizeSecurityGroupIngress, RevokeSecurityGroupEgress, etc.) avec l'utilisateur, l'heure, les paramètres. AWS Config maintient un historique des configurations avec l'état exact du Security Group à chaque modification. Config est plus facile pour voir QUOI a changé, CloudTrail pour savoir QUI et QUAND."
  },
  {
    id: "aws-soa-c03-j2-28",
    q: "Quel est le rôle du 'segment document' dans X-Ray ?",
    choices: ["A. Un fichier JSON envoyé à X-Ray décrivant le travail réalisé par un service (nom, durée, metadata, erreurs, sous-segments)","B. Un certificat SSL pour chiffrer les traces X-Ray","C. Un rapport généré par X-Ray pour l'analyse forensique","D. La configuration du sampling rate dans X-Ray"],
    answer: 0,
    exp: "Un segment document est un objet JSON que le service envoie au X-Ray daemon décrivant : nom du service, début/fin (timestamp), durée, annotations (clés/valeurs searchables), metadata, erreurs/fautes, et les sous-segments pour les appels en aval. Le daemon les collecte et les envoie à l'API X-Ray en batch."
  },
  {
    id: "aws-soa-c03-j2-29",
    q: "EventBridge peut-il recevoir des événements provenant d'applications on-premise ?",
    choices: ["A. Non — EventBridge est limité aux services AWS","B. Oui — via l'API PutEvents avec un bus custom, depuis n'importe quelle source capable d'appeler l'API AWS","C. Oui — uniquement via Direct Connect","D. Oui — via un agent EventBridge installé on-premise"],
    answer: 1,
    exp: "EventBridge peut recevoir des événements de n'importe quelle source via l'API PutEvents sur un bus custom. Les applications on-premise, mobiles ou tierces peuvent appeler cette API (avec des credentials IAM appropriés). Utile pour intégrer des systèmes existants dans une architecture event-driven AWS."
  },
  {
    id: "aws-soa-c03-j2-30",
    q: "Comment CloudTrail protège-t-il l'intégrité des logs contre la falsification ?",
    choices: ["A. Les logs sont en lecture seule dans S3 par défaut","B. Log File Integrity Validation crée des fichiers digest avec hash SHA-256 de chaque log, signés numériquement","C. KMS chiffre les logs et empêche toute modification","D. CloudTrail stocke une copie dans plusieurs régions automatiquement"],
    answer: 1,
    exp: "Log File Integrity Validation (activable lors de la création du trail) génère un digest file toutes les heures contenant les hash SHA-256 de tous les fichiers de log de l'heure. Ces digests sont signés avec une clé privée AWS. La commande CLI `aws cloudtrail validate-logs` vérifie l'intégrité de bout en bout."
  },
  {
    id: "aws-soa-c03-j2-31",
    q: "Quelle fonctionnalité de X-Ray permet d'ajouter des métadonnées business à une trace (ex: orderId, customerId) pour faciliter la recherche ?",
    choices: ["A. X-Ray Segments metadata","B. X-Ray Annotations (indexées et searchables) versus Metadata (non indexées)","C. X-Ray Tags sur les groupes de traces","D. X-Ray Custom Namespaces"],
    answer: 1,
    exp: "X-Ray distingue Annotations et Metadata. Les Annotations sont des paires clé-valeur (string/number/boolean) indexées qui permettent de filtrer/rechercher les traces (ex: orderId='12345'). Les Metadata sont des données plus riches (JSON arbitraire) attachées aux segments mais non indexées. Utiliser Annotations pour ce qu'on veut filtrer."
  },
  {
    id: "aws-soa-c03-j2-32",
    q: "Un SysOps doit configurer CloudTrail pour enregistrer UNIQUEMENT les suppressions de ressources sensibles (IAM policies, KMS keys). Comment restreindre les événements enregistrés ?",
    choices: ["A. CloudTrail enregistre tout par défaut — impossible de filtrer uniquement certains events","B. Créer un trail avec des filtres d'événements avancés (Advanced Event Selectors) ciblant les eventNames spécifiques","C. Créer plusieurs trails séparés par type d'événement","D. Utiliser EventBridge pour filtrer et CloudTrail Lake pour stocker"],
    answer: 1,
    exp: "CloudTrail Advanced Event Selectors permettent de filtrer précisément les événements enregistrés en combinant conditions sur eventCategory, readOnly, resources.ARN, resources.type, etc. Pour logger uniquement les suppressions IAM/KMS : eventName like 'Delete%' ET source in [iam.amazonaws.com, kms.amazonaws.com]."
  },
  {
    id: "aws-soa-c03-j2-33",
    q: "Quelle option EventBridge permet de retenter l'envoi d'un événement vers une cible qui a échoué ?",
    choices: ["A. EventBridge retente automatiquement avec une politique de retry configurable (délai et nombre de tentatives)","B. Les événements échoués sont perdus — il faut implémenter le retry dans la target","C. Configurer un SQS FIFO comme target pour garantir la livraison","D. Activer EventBridge Archive pour rejouer les événements manuellement"],
    answer: 0,
    exp: "EventBridge a une politique de retry intégrée : par défaut, il retente pendant 24 heures avec backoff exponentiel (jusqu'à 185 fois). Cette politique est configurable (MaximumRetryAttempts, MaximumEventAgeInSeconds). En cas d'échec définitif, les événements peuvent être envoyés à une DLQ (SQS ou SNS)."
  },
  {
    id: "aws-soa-c03-j2-34",
    q: "Un ops admin doit analyser tous les accès à un bucket S3 contenant des données sensibles. Quelle combinaison de services utiliser ?",
    choices: ["A. S3 Server Access Logs uniquement","B. CloudTrail data events (S3) + Macie pour la classification des données","C. VPC Flow Logs + CloudWatch Logs","D. S3 Server Access Logs + Athena pour l'analyse"],
    answer: 1,
    exp: "La combinaison optimale : CloudTrail Data Events S3 (qui, quand, quelle API : GetObject, PutObject, DeleteObject avec l'identité IAM) + Amazon Macie (détecte les données sensibles PII dans S3 et les accès suspects). Pour l'analyse des accès S3, CloudTrail est plus précis que les Server Access Logs (qui ne capturent pas l'identité IAM complète)."
  },
  {
    id: "aws-soa-c03-j2-35",
    q: "Comment configurer X-Ray pour tracer les fonctions Lambda sans modifier le code ?",
    choices: ["A. Activer 'Active tracing' dans la configuration Lambda (X-Ray tracing mode)","B. Installer le X-Ray SDK dans le code Lambda","C. Créer un layer Lambda avec le X-Ray daemon","D. Utiliser CloudWatch Lambda Insights à la place de X-Ray"],
    answer: 0,
    exp: "En activant 'Active tracing' dans les paramètres Lambda (console ou IaC), Lambda instrumente automatiquement les invocations et envoie des segments X-Ray. Pas besoin de modifier le code pour le segment principal. Pour les sous-segments (appels DynamoDB, S3 etc.), le X-Ray SDK est nécessaire dans le code. Configuration IaC : Tracing: Active sur la ressource AWS::Lambda::Function."
  },
  {
    id: "aws-soa-c03-j2-36",
    q: "Quelle est la limite de targets par règle EventBridge ?",
    choices: ["A. 1 target par règle","B. 5 targets par règle (par défaut, augmentable jusqu'à 100)","C. 10 targets par règle (fixe)","D. Illimitée — EventBridge fan-out natif"],
    answer: 1,
    exp: "Par défaut, une règle EventBridge peut avoir jusqu'à 5 targets. Cette limite est augmentable jusqu'à 100 via Service Quotas. Pour un vrai fan-out à grande échelle, l'approche recommandée est : EventBridge → SNS → multiple SQS/Lambda subscribers. Chaque target peut être un service différent (Lambda, SQS, SNS, Step Functions, etc.)."
  },
  {
    id: "aws-soa-c03-j2-37",
    q: "Quel champ dans un événement CloudTrail indique si une action a été effectuée depuis la console web AWS ?",
    choices: ["A. eventSource = console.amazonaws.com","B. userAgent contient 'signin.amazonaws.com' ou 'console.amazonaws.com'","C. requestParameters.webConsole = true","D. eventType = ConsoleAction"],
    answer: 1,
    exp: "Le champ userAgent dans les logs CloudTrail indique le client. Pour la console AWS : il contient généralement 'aws-internal/3' ou 'signin.amazonaws.com'. Pour l'AWS CLI : 'aws-cli/2.x'. Pour les SDK : 'botocore/x.x' (Python), 'aws-sdk-js/x.x'. Pour les appels automatisés (Lambda, etc.) : souvent vide ou le nom du service."
  },
  {
    id: "aws-soa-c03-j2-38",
    q: "Quel est le service recommandé pour corréler et analyser les logs CloudTrail dans une requête SQL, sans configuration Athena ?",
    choices: ["A. Amazon Athena avec une table externe sur S3","B. CloudTrail Lake avec SQL queries natives","C. Amazon OpenSearch Service","D. AWS Glue + Redshift"],
    answer: 1,
    exp: "CloudTrail Lake est un data lake managé qui permet d'exécuter des requêtes SQL directement sur les événements CloudTrail sans configurer Athena, Glue ou Crawler. Les données sont stockées dans CloudTrail Lake (jusqu'à 7 ans). La requête SQL est exécutée via l'API CloudTrail StartQuery ou la console. Plus simple qu'Athena pour les équipes sans expertise SQL+Glue."
  },
  {
    id: "aws-soa-c03-j2-39",
    q: "Dans X-Ray, quelle est la différence entre une 'Fault', une 'Error' et un 'Throttle' ?",
    choices: ["A. Fault=5xx (erreur serveur), Error=4xx (erreur client), Throttle=429 (trop de requêtes)","B. Fault=timeout, Error=exception, Throttle=circuit breaker","C. Fault=erreur X-Ray, Error=erreur applicative, Throttle=erreur réseau","D. Ce sont des synonymes dans la terminologie X-Ray"],
    answer: 0,
    exp: "Dans X-Ray : Fault = erreur 5xx (problème côté serveur, bug, exception non gérée). Error = erreur 4xx (problème côté client : 400 Bad Request, 404 Not Found, 401 Unauthorized). Throttle = 429 Too Many Requests (rate limiting). Ces classifications apparaissent dans la Service Map avec des couleurs différentes pour faciliter le diagnostic."
  },
  {
    id: "aws-soa-c03-j2-40",
    q: "Comment EventBridge Schema Registry aide-t-il les développeurs ?",
    choices: ["A. Il stocke automatiquement les schémas (structures JSON) des événements et génère du code de binding dans les langages supportés","B. Il valide les événements entrants et rejette ceux non conformes","C. Il transforme les événements d'un format vers un autre automatiquement","D. Il stocke les règles EventBridge sous forme de schéma"],
    answer: 0,
    exp: "EventBridge Schema Registry découvre automatiquement les schémas des événements qui passent par un bus. Pour chaque schéma, vous pouvez générer du code binding (TypeScript, Java, Python) qui vous donne des classes typées pour travailler avec ces événements. Cela accélère le développement et réduit les erreurs de désérialisation."
  },
  {
    id: "aws-soa-c03-j2-41",
    q: "Un audit révèle qu'un bucket S3 a été rendu public le 15 du mois. Comment retrouver QUI a effectué ce changement ?",
    choices: ["A. Consulter S3 Server Access Logs","B. Consulter CloudTrail pour l'event PutBucketAcl ou PutBucketPolicy avec le timestamp correspondant","C. Consulter VPC Flow Logs","D. Consulter AWS Config pour l'historique de configuration"],
    answer: 1,
    exp: "CloudTrail enregistre les API calls PutBucketAcl, PutBucketPolicy, PutPublicAccessBlock — avec l'identité IAM (userIdentity.arn), l'adresse IP source, le timestamp. Pour retrouver QUI : filtrer CloudTrail sur eventName = PutBucketAcl, eventTime ≈ 15 du mois, resources.ARN = arn:aws:s3:::bucket-name. AWS Config montre QUOI a changé."
  },
  {
    id: "aws-soa-c03-j2-42",
    q: "Quelle est la façon recommandée de monitorer les performances de bout-en-bout d'une application microservices déployée sur ECS ?",
    choices: ["A. Métriques CloudWatch Container Insights uniquement","B. X-Ray pour le tracing distribué + Container Insights pour les métriques cluster/task","C. CloudWatch Logs Insights sur les logs applicatifs","D. AWS Personal Health Dashboard"],
    answer: 1,
    exp: "La combinaison optimale : X-Ray (tracing distribué — voir les appels entre microservices, identifier les goulots) + CloudWatch Container Insights (métriques ECS : CPU/mémoire par task, cluster health). X-Ray donne la vue des transactions, Container Insights donne la vue infrastructure. Complémentaires."
  },
  {
    id: "aws-soa-c03-j2-43",
    q: "Comment configurer EventBridge pour router les événements vers différentes cibles selon le contenu (content-based routing) ?",
    choices: ["A. Créer plusieurs règles avec des patterns de filtrage différents sur le même bus","B. Utiliser une Lambda intermédiaire pour router manuellement","C. EventBridge ne supporte pas le content-based routing","D. Utiliser SNS avec des filter policies à la place"],
    answer: 0,
    exp: "Le content-based routing EventBridge se fait via des règles avec des patterns différents : chaque règle filtre sur différentes valeurs des champs de l'événement (detail.status, detail.type, source, etc.) et route vers sa propre target. EventBridge évalue toutes les règles en parallèle — plusieurs règles peuvent matcher le même événement."
  },
  {
    id: "aws-soa-c03-j2-44",
    q: "Qu'est-ce que le 'X-Ray daemon' et pourquoi est-il nécessaire ?",
    choices: ["A. Un agent qui collecte les segments/sous-segments des applications et les envoie en batch à l'API X-Ray pour optimiser le débit","B. Un service AWS managé qui s'exécute automatiquement","C. Un processus qui génère des traces synthétiques pour les tests","D. Un daemon uniquement nécessaire pour les applications non-Lambda"],
    answer: 0,
    exp: "Le X-Ray daemon est un processus léger (UDP port 2000) qui reçoit les données de trace des SDK X-Ray et les envoie en batch à l'API X-Ray. Il optimise le débit en bufferisant les segments. Pour Lambda, AWS gère un daemon intégré. Sur EC2/ECS/on-premise, il faut le déployer séparément. Sur ECS, il peut être un sidecar container."
  },
  {
    id: "aws-soa-c03-j2-45",
    q: "Un CloudTrail trail envoie des logs vers un bucket S3 dans un autre compte. Quelle configuration est nécessaire sur le bucket ?",
    choices: ["A. Activer S3 Cross-Region Replication vers le compte destination","B. Configurer une bucket policy sur le bucket destination autorisant le service principal 'cloudtrail.amazonaws.com' à faire des PutObject","C. Utiliser S3 Access Points pour les accès cross-compte","D. Créer un VPC Endpoint pour CloudTrail dans le compte source"],
    answer: 1,
    exp: "Pour CloudTrail cross-account vers S3 : le bucket destination doit avoir une bucket policy autorisant le service cloudtrail.amazonaws.com à effectuer des s3:PutObject avec la condition que le chemin inclut l'account ID source. Format : {Effect:Allow, Principal:{Service:cloudtrail.amazonaws.com}, Action:s3:PutObject, Resource: arn:aws:s3:::bucket/prefix/AWSLogs/AccountId/*}."
  },
  {
    id: "aws-soa-c03-j2-46",
    q: "Dans EventBridge, comment transformer le payload d'un événement avant de l'envoyer à une target ?",
    choices: ["A. Utiliser EventBridge Input Transformer pour reformater l'événement avec des templates JSON","B. Utiliser une Lambda intermédiaire pour transformer chaque événement","C. Utiliser EventBridge Schema Registry pour normaliser le format","D. Transformation non supportée — EventBridge livre l'événement as-is"],
    answer: 0,
    exp: "EventBridge Input Transformer permet de reformater l'événement avant livraison. Vous définissez des 'Input Paths' (expressions JSONPath) pour extraire des champs, puis un 'Input Template' pour composer le nouveau format. Exemple : extraire detail.instance-id et créer un message personnalisé pour SNS. Pas besoin de Lambda pour des transformations simples."
  },
  {
    id: "aws-soa-c03-j2-47",
    q: "Quelle est la rétention maximale des traces dans AWS X-Ray ?",
    choices: ["A. 24 heures","B. 7 jours","C. 30 jours","D. 90 jours"],
    answer: 1,
    exp: "X-Ray conserve les données de trace pendant 30 jours. Après 30 jours, les traces sont automatiquement supprimées. Pour une rétention plus longue, il faut exporter les traces vers S3 (via l'API GetTraceSummaries + GetTrace) ou utiliser des outils comme AWS Distro for OpenTelemetry avec un backend persistant."
  },
  {
    id: "aws-soa-c03-j2-48",
    q: "Comment auditer les connexions console AWS de tous les utilisateurs IAM dans un compte de manière centralisée ?",
    choices: ["A. Activer IAM Access Analyzer","B. Créer un trail CloudTrail multi-régions qui capture les ConsoleLogin events dans us-east-1 (service global)","C. Utiliser AWS Config rule 'iam-user-mfa-enabled'","D. Activer CloudWatch Logs pour IAM"],
    answer: 1,
    exp: "Les ConsoleLogin events CloudTrail sont enregistrés dans la région us-east-1 car IAM est un service global. Pour auditer toutes les connexions : créer un trail multi-régions (capte aussi us-east-1) et filtrer eventName = ConsoleLogin. Les détails incluent : userIdentity.userName, sourceIPAddress, additionalEventData.MFAUsed."
  },
  {
    id: "aws-soa-c03-j2-49",
    q: "Quelle est la différence entre EventBridge 'default event bus' et un 'custom event bus' ?",
    choices: ["A. Le default bus reçoit les événements des services AWS, les custom buses reçoivent les événements custom ou SaaS","B. Le default bus est public, les custom buses sont privés","C. Le default bus ne peut pas avoir de règles, les custom buses oui","D. Le default bus est gratuit, les custom buses sont payants"],
    answer: 0,
    exp: "Default event bus : reçoit automatiquement tous les événements des services AWS (EC2 state changes, S3 events, etc.) et des partenaires SaaS activés. Custom event bus : créé pour les événements custom de vos applications ou pour isoler différents contextes (un bus par domaine métier). Les deux supportent les règles et targets."
  },
  {
    id: "aws-soa-c03-j2-50",
    q: "Un X-Ray service map montre une latence élevée entre un service API et DynamoDB. Comment identifier les requêtes DynamoDB spécifiques responsables ?",
    choices: ["A. Filtrer les traces X-Ray par annotation 'DynamoDB.TableName' et trier par durée","B. Consulter DynamoDB CloudWatch métriques SuccessfulRequestLatency","C. Analyser les VPC Flow Logs entre le service et DynamoDB","D. Utiliser CloudWatch Logs Insights sur les logs DynamoDB"],
    answer: 0,
    exp: "Dans X-Ray, les sous-segments des appels DynamoDB contiennent les métadonnées : TableName, Operation (GetItem, Query, Scan). Filtrer les traces par annotation aws.table_name ou aws.operation et trier par durée pour identifier les requêtes lentes. La Service Map montre la latence agrégée — cliquer sur le lien ouvre les traces filtrées."
  }
]=[
{id:"aws-soa-c03-j2-1",q:"Quelle est la différence entre un événement 'management event' et un 'data event' dans CloudTrail ?",choices:["A. Les management events concernent les opérations sur les ressources AWS (CreateBucket, RunInstances), les data events concernent les opérations sur les données (GetObject, PutItem)","B. Les management events sont gratuits, les data events sont payants","C. Les data events sont enregistrés par défaut, les management events nécessitent une configuration","D. A et B sont correctes"],answer:3,exp:"A et B sont toutes deux correctes. Les management events (control plane : créer/modifier/supprimer des ressources) sont enregistrés par défaut et inclus dans CloudTrail gratuitement (premiers 90 jours dans l'historique des événements). Les data events (opérations sur les données : S3 GetObject, Lambda Invoke, DynamoDB) sont désactivés par défaut et facturés supplémentairement."},
{id:"aws-soa-c03-j2-2",q:"Vous devez détecter automatiquement quand un utilisateur root se connecte à votre compte AWS. Quelle solution est la plus appropriée ?",choices:["A. Créer une alarme CloudWatch sur la métrique RootAccountUsage","B. Créer une règle EventBridge sur CloudTrail pour l'événement ConsoleLogin où userIdentity.type = Root","C. Activer AWS Config et créer une règle root-account-mfa-enabled","D. Configurer GuardDuty pour les connexions root"],answer:1,exp:"EventBridge + CloudTrail est la solution standard : CloudTrail enregistre l'événement ConsoleLogin, EventBridge filtre sur userIdentity.type='Root' et peut déclencher SNS/Lambda. La règle de pattern EventBridge : {\"detail-type\":[\"AWS Console Sign In via CloudTrail\"],\"detail\":{\"userIdentity\":{\"type\":[\"Root\"]}}}"},
{id:"aws-soa-c03-j2-3",q:"Combien de temps CloudTrail conserve-t-il les événements dans l'historique des événements de la console sans configuration de trail ?",choices:["A. 7 jours","B. 30 jours","C. 90 jours","D. 1 an"],answer:2,exp:"L'historique des événements CloudTrail dans la console AWS est conservé 90 jours sans configuration de trail. Pour une rétention plus longue, il faut créer un trail qui envoie les logs vers S3 (conservation illimitée). CloudTrail Lake permet aussi une rétention configurable de 7 ans."},
{id:"aws-soa-c03-j2-4",q:"Une règle EventBridge doit se déclencher tous les jours à 6h00 UTC. Quel type de source d'événement faut-il configurer ?",choices:["A. Source: aws.scheduler, avec une expression cron","B. Source: events.amazonaws.com avec une schedule expression","C. EventBridge Scheduler avec cron(0 6 * * ? *)","D. B et C sont toutes deux correctes"],answer:3,exp:"Deux options valides : 1) EventBridge Rules avec une schedule expression (cron ou rate) — ancienne méthode. 2) EventBridge Scheduler — service dédié plus récent avec plus de fonctionnalités (timezone, flexible window). La syntaxe cron AWS : cron(minutes heures jour mois jour-semaine année), donc cron(0 6 * * ? *) = 6h00 UTC chaque jour."},
{id:"aws-soa-c03-j2-5",q:"Quel service AWS X-Ray utilise pour regrouper les requêtes appartenant à la même transaction distribuée ?",choices:["A. Trace ID","B. Session ID","C. Correlation ID","D. Request ID"],answer:0,exp:"X-Ray utilise un Trace ID unique pour regrouper tous les segments et sous-segments d'une transaction distribuée. Ce Trace ID est propagé entre les services via les headers HTTP (X-Amzn-Trace-Id). Chaque composant de la transaction génère un segment, tous liés par le même Trace ID."},
{id:"aws-soa-c03-j2-6",q:"Vous analysez une trail CloudTrail et remarquez que l'utilisateur IAM 'john' a supprimé un bucket S3. Dans quel champ du log trouvez-vous l'adresse IP source de l'action ?",choices:["A. sourceIPAddress","B. userAgent","C. requestParameters.ipAddress","D. eventSource"],answer:0,exp:"Dans les logs CloudTrail, le champ 'sourceIPAddress' contient l'adresse IP source de la requête. 'eventSource' indique le service AWS (s3.amazonaws.com). 'userAgent' contient le client utilisé (AWS Console, CLI, SDK). 'requestParameters' contient les paramètres de la requête API."},
{id:"aws-soa-c03-j2-7",q:"Quelle fonctionnalité de CloudTrail détecte automatiquement les activités inhabituelles comme des appels API anormaux ?",choices:["A. CloudTrail Insights","B. CloudTrail Lake","C. CloudTrail Data Events","D. CloudTrail Digest Files"],answer:0,exp:"CloudTrail Insights analyse les événements de management pour détecter les activités API inhabituelles (pics soudains d'erreurs, volumes anormaux d'appels). C'est une fonctionnalité optionnelle et payante. CloudTrail Lake est un data lake pour l'analyse de logs. Les Digest Files vérifient l'intégrité des logs."},
{id:"aws-soa-c03-j2-8",q:"EventBridge reçoit un événement d'une source personnalisée. Quelle est la limite de taille maximale d'un événement EventBridge ?",choices:["A. 64 KB","B. 256 KB","C. 1 MB","D. 10 MB"],answer:1,exp:"La taille maximale d'un événement EventBridge est de 256 KB. Pour des payloads plus volumineux, il est recommandé de stocker les données dans S3 et de n'inclure que la référence (ARN S3) dans l'événement."},
{id:"aws-soa-c03-j2-9",q:"Dans X-Ray, qu'est-ce qu'un 'subsegment' ?",choices:["A. Un appel vers un service AWS ou externe dans le cadre d'un segment principal","B. Un segment créé par un service en aval dans la trace distribuée","C. Une erreur capturée dans la trace","D. Un échantillon de trace non envoyé à X-Ray"],answer:0,exp:"Dans X-Ray, un segment représente le travail effectué par une application. Un subsegment représente les appels en aval (downstream calls) : appels vers des services AWS (DynamoDB, S3), APIs externes, bases de données. Les subsegments permettent de voir précisément où le temps est passé dans une requête."},
{id:"aws-soa-c03-j2-10",q:"Vous voulez créer un bus d'événements EventBridge privé qui reçoit des événements d'un compte AWS partenaire. Quelle fonctionnalité utiliser ?",choices:["A. EventBridge Archive","B. EventBridge Custom Bus avec Resource-based policy","C. EventBridge SaaS Partner Integration","D. EventBridge Pipes"],answer:1,exp:"Pour recevoir des événements d'un autre compte AWS sur un bus custom, il faut créer un bus custom et y attacher une resource-based policy autorisant le compte source (PutEvents). EventBridge SaaS Integrations est pour des partenaires certifiés (Datadog, Shopify, etc.). Les Pipes connectent sources et targets point-à-point."},
{id:"aws-soa-c03-j2-11",q:"Quel est le délai maximal de livraison garanti par EventBridge pour les règles ?",choices:["A. 100 ms","B. 500 ms","C. Aucune garantie de délai exact — livraison best-effort avec retry","D. 1 seconde garantie par SLA"],answer:2,exp:"EventBridge garantit la livraison 'at-least-once' mais ne garantit pas un délai exact. La latence typique est de millisecondes à quelques secondes. En cas d'échec, EventBridge retente avec backoff exponentiel. Pour des garanties plus strictes, utiliser EventBridge avec SQS comme target pour bufferiser."},
{id:"aws-soa-c03-j2-12",q:"Un trail CloudTrail multi-régions est configuré. Quel bucket S3 reçoit les logs ?",choices:["A. Un bucket S3 dans chaque région","B. Un bucket S3 unique centralisé dans la région de création du trail","C. Un bucket S3 par région avec réplication vers un bucket central","D. Les logs sont stockés dans CloudTrail Lake automatiquement"],answer:1,exp:"Un trail multi-régions envoie tous les logs vers un seul bucket S3 centralisé, configuré lors de la création du trail. Les logs sont organisés dans des préfixes par région (AWSLogs/accountId/CloudTrail/region/). Cela simplifie l'analyse centralisée des activités dans toutes les régions."},
{id:"aws-soa-c03-j2-13",q:"Comment X-Ray gère-t-il le sampling (échantillonnage) des traces ?",choices:["A. X-Ray enregistre 100% des requêtes par défaut","B. X-Ray applique par défaut 1 requête par seconde + 5% des requêtes supplémentaires par hôte","C. X-Ray ne trace que les erreurs et exceptions","D. L'échantillonnage est fixé à 10% et ne peut pas être modifié"],answer:1,exp:"La règle de sampling X-Ray par défaut : 1 requête par seconde (reservoir) + 5% des requêtes supplémentaires. Cela évite de saturer le service et réduit les coûts. Les règles de sampling sont configurables via la console X-Ray ou l'API pour ajuster selon les besoins."},
{id:"aws-soa-c03-j2-14",q:"Quelle est la différence entre EventBridge Archive et EventBridge Replay ?",choices:["A. Archive stocke les événements passés, Replay les rejoue depuis l'archive vers un bus","B. Archive est pour les événements custom, Replay pour les événements AWS natifs","C. Archive nécessite S3, Replay nécessite Kinesis","D. Ce sont deux noms pour la même fonctionnalité"],answer:0,exp:"EventBridge Archive capture et stocke les événements d'un bus (custom ou default). EventBridge Replay permet de rejouer ces événements archivés vers un bus pour retester des workflows, déboguer ou rejouer après une panne. Les deux fonctionnent ensemble : archive d'abord, puis replay au besoin."},
{id:"aws-soa-c03-j2-15",q:"Dans CloudTrail, comment vérifier qu'un fichier de log n'a pas été altéré après sa création ?",choices:["A. Utiliser les CloudTrail Digest Files avec Log File Integrity Validation","B. Chiffrer les logs avec KMS","C. Activer S3 MFA Delete","D. Utiliser CloudTrail Insights"],answer:0,exp:"Log File Integrity Validation génère des fichiers digest (toutes les heures) contenant les hashes SHA-256 des fichiers de logs. Ces digests sont eux-mêmes signés numériquement. Avec l'AWS CLI (validate-logs), vous pouvez vérifier qu'aucun log n'a été modifié ou supprimé."},
{id:"aws-soa-c03-j2-16",q:"Comment EventBridge Pipes diffère-t-il d'une règle EventBridge standard ?",choices:["A. Pipes connecte une source à un target en point-à-point avec transformation, filtrage et enrichissement intégrés","B. Pipes est limité aux services AWS, les règles peuvent cibler des webhooks externes","C. Pipes ne supporte pas Lambda comme target","D. Les règles sont déclenchées par des événements, Pipes par un polling"],answer:0,exp:"EventBridge Pipes crée des connexions point-à-point entre une source (SQS, Kinesis, DynamoDB Streams, Kafka) et un target (Lambda, StepFunctions, API Gateway), avec filtrage, enrichissement optionnel (Lambda, API Gateway) et transformation native. Plus simple que d'orchestrer manuellement ces connexions."},
{id:"aws-soa-c03-j2-17",q:"Vous activez CloudTrail pour l'organisation AWS Organizations. Quel est l'avantage principal ?",choices:["A. Les logs sont automatiquement chiffrés avec KMS","B. Un trail organisationnel couvre automatiquement tous les comptes membres, actuels et futurs","C. Le coût est réduit de 50% pour les organisations","D. Les logs sont automatiquement envoyés vers CloudWatch Logs"],answer:1,exp:"Un trail organisationnel créé dans le compte de gestion s'applique automatiquement à TOUS les comptes membres, y compris les nouveaux comptes ajoutés ultérieurement. Cela garantit une couverture complète sans configuration compte par compte. Les comptes membres ne peuvent pas désactiver ce trail."},
{id:"aws-soa-c03-j2-18",q:"Dans X-Ray Service Map, qu'indique un nœud rouge ?",choices:["A. Une latence élevée (>1 seconde)","B. Des erreurs (4xx) ou des fautes (5xx) détectées dans les traces","C. Un service non instrumenté avec X-Ray","D. Un service désactivé"],answer:1,exp:"Dans la Service Map X-Ray, les couleurs indiquent la santé : vert = OK, orange = erreurs 4xx (client errors), rouge = fautes 5xx (server errors). Un nœud rouge signifie que le service retourne des erreurs serveur. Cette visualisation aide à identifier rapidement le service défaillant dans une architecture microservices."},
{id:"aws-soa-c03-j2-19",q:"Quel champ CloudTrail permet d'identifier si une action a été réalisée via la console AWS, l'AWS CLI ou un SDK ?",choices:["A. eventSource","B. userAgent","C. requestParameters","D. eventType"],answer:1,exp:"Le champ 'userAgent' identifie le client utilisé : 'signin.amazonaws.com' pour la console, 'aws-cli/...' pour le CLI, 'aws-sdk-python/...' pour les SDK. L'eventSource identifie le service AWS (ec2.amazonaws.com). Ce champ est utile pour détecter les accès programmatiques inattendus."},
{id:"aws-soa-c03-j2-20",q:"CloudTrail Lake versus un trail S3 classique : quelle est la principale différence opérationnelle ?",choices:["A. CloudTrail Lake est moins cher que S3 pour le stockage","B. CloudTrail Lake permet d'exécuter des requêtes SQL directement sur les événements sans ETL vers Athena","C. CloudTrail Lake ne supporte pas les data events","D. CloudTrail Lake est disponible uniquement pour AWS Organizations"],answer:1,exp:"CloudTrail Lake est un data lake managé qui permet d'exécuter des requêtes SQL (via l'API CloudTrail) directement sur les événements, sans avoir à configurer Athena, Glue ou exporter vers S3. Rétention jusqu'à 7 ans. Plus simple pour l'analyse mais potentiellement plus cher pour de grands volumes."}
];

// ── Jour 3 — Optimisation des performances ───────────────────────────────────
window.QDATA[3,
  {
    id: "aws-soa-c03-j3-21",
    q: "Qu'est-ce que l'EC2 Nitro System et quel avantage apporte-t-il aux instances modernes ?",
    choices: ["A. Un hyperviseur léger basé sur KVM qui offre des performances bare-metal, un réseau amélioré (ENA, EFA) et un stockage NVMe haute performance","B. Un système de monitoring intégré qui remplace CloudWatch","C. Un système de chiffrement automatique pour tous les volumes EBS","D. Un système de répartition de charge entre régions AWS"],
    answer: 0,
    exp: "Nitro System est l'hyperviseur de nouvelle génération d'AWS (basé sur KVM + hardware offload). Il déplace les fonctions de virtualisation vers du hardware dédié, libérant presque 100% des ressources CPU/mémoire pour l'instance. Avantages : performances quasi bare-metal, ENA jusqu'à 100 Gbps, NVMe local, support EFA pour HPC, démarrage plus rapide."
  },
  {
    id: "aws-soa-c03-j3-22",
    q: "Un ops admin doit migrer des volumes EBS gp2 vers gp3 sans downtime. Quelle est l'approche correcte ?",
    choices: ["A. Créer un snapshot du volume gp2, créer un nouveau volume gp3 depuis le snapshot, remplacer le volume","B. Modifier directement le type du volume dans la console EC2 ou via ModifyVolume — changement à chaud sans redémarrage","C. Arrêter l'instance, changer le type, puis redémarrer","D. Utiliser AWS DMS pour migrer les données"],
    answer: 1,
    exp: "La modification de type de volume EBS (gp2→gp3) se fait à chaud via ModifyVolume sans arrêter l'instance. Le changement est progressif (quelques minutes) et l'instance continue de fonctionner normalement. Depuis gp3, vous pouvez aussi modifier les IOPS (jusqu'à 16,000) et le throughput (jusqu'à 1,000 MB/s) indépendamment."
  },
  {
    id: "aws-soa-c03-j3-23",
    q: "Quelle est la différence entre IOPS et throughput pour les volumes EBS ?",
    choices: ["A. IOPS = nombre d'opérations I/O par seconde (petits blocs), Throughput = volume de données par seconde (en MB/s, grands blocs)","B. IOPS mesure la latence, Throughput mesure les IOPS","C. IOPS est pour les lectures, Throughput pour les écritures","D. IOPS s'applique aux SSD, Throughput aux HDD"],
    answer: 0,
    exp: "IOPS (Input/Output Operations Per Second) mesure le nombre d'opérations I/O par seconde — optimal pour les petites I/O aléatoires (8-16 KB) comme les bases de données OLTP. Throughput (MB/s) mesure le volume de données par seconde — optimal pour les grandes I/O séquentielles (128 KB+) comme le streaming, big data. gp3 optimise les deux séparément."
  },
  {
    id: "aws-soa-c03-j3-24",
    q: "Un bucket S3 reçoit 10,000 requêtes PUT par seconde. Quelles lignes directrices suivre pour éviter le throttling S3 ?",
    choices: ["A. Créer plusieurs buckets S3 et distribuer la charge","B. S3 gère automatiquement jusqu'à 3,500 PUT/s par préfixe — utiliser des préfixes aléatoires pour distribuer la charge","C. Activer S3 Transfer Acceleration pour augmenter le débit","D. Utiliser S3 Multipart Upload obligatoirement"],
    answer: 1,
    exp: "S3 supporte 3,500 requêtes PUT/COPY/POST/DELETE et 5,500 GET/HEAD par seconde par préfixe. Pour 10,000 PUT/s : utiliser plusieurs préfixes distincts (ex: dates, hashes) pour distribuer sur 3+ préfixes. S3 scale automatiquement pour chaque préfixe. Transfer Acceleration aide pour la latence, pas le débit par préfixe."
  },
  {
    id: "aws-soa-c03-j3-25",
    q: "Que se passe-t-il quand un volume EBS io1 atteint ses IOPS provisionnées ?",
    choices: ["A. Les I/O sont mises en file d'attente, augmentant la latence (throttling)","B. AWS augmente automatiquement les IOPS provisionnées","C. Le volume passe en mode lecture seule","D. L'instance redémarre automatiquement"],
    answer: 0,
    exp: "Quand les IOPS provisionnées d'un volume io1/io2 sont atteintes, les I/O supplémentaires sont throttled : elles sont mises en attente (queue), ce qui augmente la latence. La métrique VolumeQueueLength dans CloudWatch augmente. Solution : augmenter les IOPS provisionnées via ModifyVolume ou optimiser l'application pour réduire les I/O."
  },
  {
    id: "aws-soa-c03-j3-26",
    q: "Quelle est la stratégie de migration S3 recommandée pour transférer 500 TB de données depuis on-premise vers AWS dans les délais les plus courts ?",
    choices: ["A. AWS DataSync via Direct Connect","B. AWS Snowball Edge (ou Snowball) pour transférer physiquement les données","C. S3 Transfer Acceleration avec multipart upload","D. Rsync via VPN site-to-site"],
    answer: 1,
    exp: "Pour 500 TB, les solutions physiques (Snowball Edge : 80-100 TB par device, ou Snowmobile : jusqu'à 100 PB) sont plus rapides que le réseau. Règle de base : si le transfert réseau dépasse la semaine, utiliser Snowball. 500 TB via un réseau 1 Gbps prend ~45 jours. Plusieurs Snowball Edges en parallèle permettent un transfert en quelques jours."
  },
  {
    id: "aws-soa-c03-j3-27",
    q: "Une instance RDS PostgreSQL est surchargée. Performance Insights montre que le principal wait event est 'LockManager'. Quelle est la cause probable ?",
    choices: ["A. Les IOPS storage sont insuffisantes","B. Des transactions bloquées attendent des verrous sur les mêmes ressources (deadlocks ou long-running transactions)","C. La connexion réseau entre le client et RDS est lente","D. Le CPU de l'instance est saturé"],
    answer: 1,
    exp: "Le wait event LockManager dans PostgreSQL/RDS indique que des sessions attendent des verrous (row-level locks, table locks). Causes : transactions longues qui maintiennent des verrous, deadlocks, ou queries concurrentes sur les mêmes lignes. Diagnostic : pg_locks, pg_stat_activity. Solutions : optimiser les transactions, réduire leur durée, ajouter des index."
  },
  {
    id: "aws-soa-c03-j3-28",
    q: "Comment réduire le coût EBS sans sacrifier les performances pour un workload avec 90% de lectures et 10% d'écritures ?",
    choices: ["A. Utiliser sc1 (Cold HDD) pour toutes les données","B. Utiliser io2 avec Maximum IOPS","C. Mettre en cache les lectures avec ElastiCache et utiliser gp3 pour le storage principal","D. Passer à des instances storage-optimized"],
    answer: 2,
    exp: "La combinaison ElastiCache (Redis/Memcached) + gp3 réduit les IOPS requises sur le volume EBS en cachant les lectures fréquentes. 90% des lectures viennent du cache (sub-milliseconde, sans IOPS EBS). Seules les 10% d'écritures et les cache misses touchent l'EBS. gp3 (moins cher que io1/io2) suffit alors."
  },
  {
    id: "aws-soa-c03-j3-29",
    q: "Quelle est la limite maximale de taille d'un seul volume EBS pour les types gp3 et io2 ?",
    choices: ["A. 1 TB","B. 16 TB","C. 64 TB","D. 128 TB"],
    answer: 1,
    exp: "La taille maximale d'un volume EBS gp2, gp3, io1 est de 16 TB (16,384 GB). Pour io2 Block Express, la limite est de 64 TB. Pour des besoins supérieurs, utiliser RAID 0 (stripping) de plusieurs volumes EBS ou Amazon EFS (élastique, pas de limite de taille fixe)."
  },
  {
    id: "aws-soa-c03-j3-30",
    q: "Un ops admin doit surveiller l'espace disque disponible sur des instances EC2 Linux. Quelle approche utiliser ?",
    choices: ["A. Monitorer la métrique DiskSpaceUtilization dans le namespace AWS/EC2","B. Installer l'agent CloudWatch et configurer disk_free ou disk_used_percent dans la config de l'agent","C. Créer une cron job qui publie les métriques via AWS CLI","D. Utiliser AWS Trusted Advisor pour les alertes disk space"],
    answer: 1,
    exp: "Il n'existe PAS de métrique DiskSpaceUtilization dans AWS/EC2 (AWS n'a pas accès à l'OS). L'agent CloudWatch avec le plugin disk publie disk_used_percent, disk_free, etc. dans le namespace CWAgent. Configuration via JSON dans SSM Parameter Store. Déploiement via SSM State Manager pour toute la flotte."
  },
  {
    id: "aws-soa-c03-j3-31",
    q: "Quelle est la différence entre EBS Throughput-Optimized HDD (st1) et Cold HDD (sc1) ?",
    choices: ["A. st1 est optimisé pour les accès séquentiels fréquents (logs, big data), sc1 pour les données rarement accédées (archives)","B. st1 supporte NVMe, sc1 non","C. st1 est attachable à toutes les instances, sc1 uniquement aux instances storage-optimized","D. st1 coûte moins cher que sc1"],
    answer: 0,
    exp: "st1 (Throughput Optimized HDD) : idéal pour les workloads avec accès séquentiels fréquents — big data, logs, streaming. Throughput jusqu'à 500 MB/s. sc1 (Cold HDD) : le moins cher, pour les données rarement accédées. Throughput jusqu'à 250 MB/s. Ni st1 ni sc1 ne peuvent être utilisés comme volume de démarrage (boot volume)."
  },
  {
    id: "aws-soa-c03-j3-32",
    q: "Comment optimiser les coûts EC2 pour une application avec une charge prévisible en semaine (8h-20h) et quasi-nulle la nuit et le week-end ?",
    choices: ["A. Utiliser des On-Demand instances et les arrêter manuellement","B. Combiner Reserved Instances (pour la charge de base) + Scheduled Auto Scaling (pour les pics prévisibles)","C. Utiliser uniquement des Spot Instances","D. Utiliser des On-Demand instances avec Compute Savings Plans pour réduire les coûts"],
    answer: 1,
    exp: "Stratégie optimale : Reserved Instances (1 ou 3 ans) pour la charge de base toujours active + Scheduled Scaling pour scaler à des heures précises (scale out à 8h, scale in à 20h). Les Reserved Instances réduisent le coût de base (-40-60% vs On-Demand). Le Scheduled Scaling évite de payer des instances inutilisées."
  },
  {
    id: "aws-soa-c03-j3-33",
    q: "Qu'est-ce que l'EC2 Instance Connect et comment sécurise-t-il l'accès SSH ?",
    choices: ["A. Un VPN AWS qui chiffre les connexions SSH existantes","B. Un service qui génère des clés SSH temporaires (60 secondes) directement dans l'instance via l'API AWS, sans clé permanente","C. Un tunnel SSH via Session Manager","D. Un certificat SSL pour l'authentification SSH"],
    answer: 1,
    exp: "EC2 Instance Connect génère une paire de clés SSH éphémère (valide 60 secondes) et pousse la clé publique dans l'instance via l'API AWS. L'accès est contrôlé par IAM (ec2-instance-connect:SendSSHPublicKey). Plus sécurisé que les clés permanentes car aucune clé à gérer. Fonctionne via la console, le navigateur ou le CLI."
  },
  {
    id: "aws-soa-c03-j3-34",
    q: "Un SysOps admin doit s'assurer que les nouvelles instances EC2 dans un compte ne peuvent pas utiliser de types d'instances coûteux (ex: m5.4xlarge et plus). Quelle approche utiliser ?",
    choices: ["A. Créer une SCP AWS Organizations qui refuse les types d'instances non autorisés","B. Configurer des limites dans la console EC2","C. Utiliser AWS Config avec une règle custom qui détecte les instances non conformes","D. A et C sont deux approches valides selon le niveau de contrôle souhaité"],
    answer: 3,
    exp: "Deux approches : 1) SCP Organizations : prévention (Deny ec2:RunInstances avec condition sur InstanceType) — empêche le lancement. 2) AWS Config rule custom : détection et remédiation (notification ou arrêt automatique via SSM Automation). SCP est préventif (guardrail), Config est détectif. Les deux sont complémentaires pour une défense en profondeur."
  },
  {
    id: "aws-soa-c03-j3-35",
    q: "Quelle fonctionnalité S3 protège contre la suppression accidentelle d'objets individuels dans un bucket ?",
    choices: ["A. S3 Versioning uniquement","B. S3 MFA Delete sur le bucket","C. S3 Versioning + MFA Delete ou S3 Object Lock (mode Governance/Compliance)","D. S3 Cross-Region Replication"],
    answer: 2,
    exp: "Plusieurs protections : S3 Versioning conserve toutes les versions (delete crée un 'delete marker', pas une suppression réelle). MFA Delete exige un token MFA pour supprimer des versions définitivement. S3 Object Lock en mode Governance ou Compliance empêche la suppression pendant la période de rétention. Combinées, elles offrent une protection robuste."
  },
  {
    id: "aws-soa-c03-j3-36",
    q: "Qu'est-ce qu'un 'Multi-Attach' EBS et dans quel cas l'utiliser ?",
    choices: ["A. Un volume EBS attaché à plusieurs instances EC2 simultanément (max 16 instances), pour io1/io2 uniquement","B. Un volume EBS répliqué automatiquement dans plusieurs AZ","C. La capacité de déplacer un volume EBS entre instances sans redémarrage","D. L'attachement simultané d'un volume EBS et EFS à la même instance"],
    answer: 0,
    exp: "EBS Multi-Attach permet d'attacher un seul volume io1 ou io2 à jusqu'à 16 instances Nitro dans la même AZ simultanément. L'application doit gérer la cohérence des écritures (cluster file system : OCFS2, GFS2). Cas d'usage : bases de données cluster (Oracle RAC), applications HA custom. Non disponible pour gp2/gp3/st1/sc1."
  },
  {
    id: "aws-soa-c03-j3-37",
    q: "Comment réduire les coûts de transfert de données S3 vers les instances EC2 dans la même région ?",
    choices: ["A. Utiliser S3 Transfer Acceleration","B. Accéder à S3 depuis EC2 dans la même région — le transfert intra-région est gratuit","C. Créer un VPC Endpoint Gateway pour S3","D. B et C sont toutes deux correctes"],
    answer: 3,
    exp: "Deux approches pour réduire les coûts de transfert : 1) Le transfert entre S3 et EC2 dans la même région AWS est gratuit. 2) Un VPC Gateway Endpoint pour S3 (gratuit) route le trafic via le réseau interne AWS sans NAT Gateway, réduisant les coûts NAT. Les deux ensemble optimisent les coûts : pas de frais de transfert et pas de NAT Gateway fees."
  },
  {
    id: "aws-soa-c03-j3-38",
    q: "Qu'est-ce que les 'EC2 Spot Instances' et quel est leur principal risque ?",
    choices: ["A. Des instances réservées achetées en avance avec réduction, risque de ne pas être disponibles à la réservation","B. Des instances utilisent la capacité EC2 non utilisée avec jusqu'à 90% de réduction, risque d'interruption avec 2 minutes de préavis si AWS reprend la capacité","C. Des instances temporaires créées pour les tests, supprimées automatiquement après 24h","D. Des instances avec garantie SLA réduite (99% vs 99.9%)"],
    answer: 1,
    exp: "Les Spot Instances utilisent la capacité EC2 excédentaire à jusqu'à 90% moins cher que l'On-Demand. Risque : AWS peut interrompre l'instance avec 2 minutes de préavis (Spot interruption) si la capacité est requise. Idéal pour workloads tolerants aux interruptions : batch processing, CI/CD, ML training. Spot Fleet et ASG avec mixed instances réduisent le risque d'interruption."
  },
  {
    id: "aws-soa-c03-j3-39",
    q: "Quelle est la limite maximale d'objets dans un bucket S3 ?",
    choices: ["A. 1 million d'objets","B. 100 millions d'objets","C. Illimitée — S3 est un service de stockage élastique sans limite d'objets","D. 1 milliard d'objets"],
    answer: 2,
    exp: "S3 n'a pas de limite sur le nombre d'objets dans un bucket ni sur la taille totale du bucket. Chaque objet peut faire jusqu'à 5 TB (5 GB pour PUT, multipart upload au-delà). Limitation pratique : les opérations de listing peuvent être lentes pour des buckets avec des milliards d'objets — utiliser S3 Inventory pour l'analyse."
  },
  {
    id: "aws-soa-c03-j3-40",
    q: "Comment SSM Patch Manager détermine-t-il quels patches appliquer à une instance ?",
    choices: ["A. Il applique tous les patches disponibles automatiquement","B. Il utilise une 'Patch Baseline' qui définit les règles d'approbation (auto-approve delays, severité, produits) et une 'Patch Group' pour cibler les instances","C. Il se base sur les recommandations AWS Trusted Advisor","D. L'administrateur approuve manuellement chaque patch dans la console"],
    answer: 1,
    exp: "SSM Patch Manager fonctionne via : 1) Patch Baseline : définit les critères d'approbation (auto-approve patches après X jours, severity, classification, produits). AWS fournit des baselines prédéfinies, vous pouvez créer des custom. 2) Patch Groups (tag PatchGroup) : associent les instances à une baseline. 3) Maintenance Windows : définissent quand patcher."
  },
  {
    id: "aws-soa-c03-j3-41",
    q: "Qu'est-ce que l'EC2 Auto Recovery et comment diffère-t-il de l'Auto Scaling ?",
    choices: ["A. Auto Recovery répare une instance défaillante sur le MÊME hôte, Auto Scaling crée de nouvelles instances sur différents hôtes","B. Auto Recovery migre l'instance vers un nouvel hôte en conservant l'IP et les EBS attachés quand une défaillance système est détectée","C. Auto Recovery et Auto Scaling sont synonymes","D. Auto Recovery est manuel, Auto Scaling est automatique"],
    answer: 1,
    exp: "EC2 Auto Recovery (via alarme CloudWatch + action EC2 Recover) migre automatiquement une instance vers un hôte sain quand StatusCheckFailed_System détecte une panne matérielle. L'IP privée, l'EIP, les EBS attachés et les métadonnées sont conservés. Auto Scaling crée/supprime des instances. Auto Recovery répare une instance spécifique — complémentaires."
  },
  {
    id: "aws-soa-c03-j3-42",
    q: "Quelle est la différence entre EBS Snapshots et EBS Backups dans AWS Backup ?",
    choices: ["A. Les deux créent des snapshots EBS — AWS Backup ajoute une gestion centralisée des politiques de rétention, cross-account, cross-region, et conformité","B. EBS Snapshots sont complets, AWS Backup fait des sauvegardes incrémentielles","C. AWS Backup est plus rapide que les snapshots natifs EBS","D. EBS Snapshots sont dans S3, AWS Backup dans Glacier automatiquement"],
    answer: 0,
    exp: "EBS Snapshots natifs et AWS Backup créent tous les deux des snapshots EBS dans S3 (incrementaux). La différence : AWS Backup est un service centralisé de gestion des sauvegardes multi-services (EBS, RDS, DynamoDB, EFS, S3...) avec politiques de rétention centralisées, cross-account backup, conformité SOX/HIPAA, et vault avec lock (WORM)."
  },
  {
    id: "aws-soa-c03-j3-43",
    q: "Comment configurer une instance EC2 pour qu'elle utilise une adresse IP statique publique qui persiste après les redémarrages ?",
    choices: ["A. L'adresse IP publique par défaut est statique et ne change pas","B. Allouer une Elastic IP (EIP) et l'associer à l'instance","C. Configurer une IP statique dans le système d'exploitation de l'instance","D. Utiliser un Network Load Balancer avec une IP statique"],
    answer: 1,
    exp: "Les adresses IP publiques EC2 par défaut changent à chaque arrêt/démarrage. Une Elastic IP (EIP) est une adresse IPv4 statique dédiée que vous contrôlez : elle reste associée à votre compte et peut être réassociée entre instances. Coût : gratuit si associée à une instance en cours d'exécution, payant si allouée mais non utilisée."
  },
  {
    id: "aws-soa-c03-j3-44",
    q: "Un SysOps admin doit s'assurer que les buckets S3 dans son compte ne sont jamais publics. Quelle est la solution la plus proactive ?",
    choices: ["A. Vérifier manuellement chaque bucket périodiquement","B. Activer S3 Block Public Access au niveau COMPTE pour bloquer tout accès public, quelle que soit la configuration du bucket","C. Utiliser AWS Config rule 's3-bucket-public-read-prohibited'","D. B et C sont deux approches valides et complémentaires"],
    answer: 3,
    exp: "Deux couches complémentaires : 1) S3 Block Public Access au niveau compte (préventif) bloque absolument toute configuration qui rendrait un bucket public, même avec une bucket policy permissive. 2) AWS Config rule (détectif) surveille la conformité et peut déclencher une remédiation. La combinaison garantit prévention + détection/remédiation."
  },
  {
    id: "aws-soa-c03-j3-45",
    q: "Quelle instance EC2 est recommandée pour une charge de travail de Machine Learning entraînement avec GPU ?",
    choices: ["A. R5 (Memory Optimized)","B. P4 ou P3 (GPU Instances — Accelerated Computing)","C. C5 (Compute Optimized)","D. I3 (Storage Optimized)"],
    answer: 1,
    exp: "Les instances P (P3, P4d, P4de) et les instances Trn (AWS Trainium) sont conçues pour le ML training : équipées de GPU NVIDIA (Tesla V100 pour P3, A100 pour P4d) ou de chips Trainium. P4d.24xlarge : 8 GPU A100, 400 Gbps réseau. Les instances G (G4, G5) sont pour l'inférence ML et les graphiques. R5 est pour la mémoire, pas les GPU."
  },
  {
    id: "aws-soa-c03-j3-46",
    q: "Comment mesurer et surveiller le ratio lecture/écriture sur un volume EBS pour optimiser la configuration ?",
    choices: ["A. Utiliser les métriques CloudWatch VolumeReadOps et VolumeWriteOps du namespace AWS/EBS","B. Activer EBS Volume Performance Insights","C. Utiliser iostat sur l'instance Linux","D. A et C sont deux approches complémentaires"],
    answer: 3,
    exp: "Deux approches complémentaires : 1) Métriques CloudWatch (VolumeReadOps, VolumeWriteOps, VolumeReadBytes, VolumeWriteBytes, VolumeQueueLength) — vue externe, sans accès à l'OS. 2) iostat ou iotop sur Linux (via l'agent CloudWatch ou Session Manager) — vue interne de l'OS avec breakdown par processus. Ensemble, ils permettent une analyse complète."
  },
  {
    id: "aws-soa-c03-j3-47",
    q: "Qu'est-ce que la fonctionnalité 'EBS Fast Snapshot Restore (FSR)' et quel problème résout-elle ?",
    choices: ["A. Accélère la création de snapshots EBS de 10x","B. Élimine le délai de 'warming up' lors de la restauration d'un volume depuis un snapshot en initialisant les blocs en avance","C. Crée des snapshots en temps réel sans impact sur les IOPS","D. Permet de restaurer des snapshots supprimés depuis la corbeille"],
    answer: 1,
    exp: "Quand un volume EBS est créé depuis un snapshot, les premiers accès aux blocs non encore initialisés depuis S3 sont plus lents (latence de 50-100ms). FSR pré-initialise tous les blocs du volume avant utilisation, éliminant cette latence initiale. Utile pour le boot depuis des snapshots et les environnements de test/dev à rotation rapide. FSR est payant."
  },
  {
    id: "aws-soa-c03-j3-48",
    q: "Un SysOps admin observe que les coûts S3 Glacier sont élevés. Quelle est la cause probable si l'application supprime souvent des objets peu après leur archivage ?",
    choices: ["A. Les suppressions de fichiers Glacier sont gratuites","B. Des frais de suppression anticipée s'appliquent — Glacier Flexible Retrieval a une durée minimale de 90 jours, Glacier Deep Archive de 180 jours","C. Les coûts élevés viennent des requêtes de listing trop fréquentes","D. Glacier facture des frais de bande passante pour les suppressions"],
    answer: 1,
    exp: "S3 Glacier a des durées minimales de stockage : Instant Retrieval = 90 jours, Flexible Retrieval = 90 jours, Deep Archive = 180 jours. Si un objet est supprimé avant la durée minimale, AWS facture le temps restant pro-rata. Pour des données avec cycle de vie court, utiliser S3 Standard-IA (durée min 30 jours) ou S3 Standard."
  },
  {
    id: "aws-soa-c03-j3-49",
    q: "Comment AWS Compute Optimizer améliore-t-il les recommandations avec le temps ?",
    choices: ["A. Les recommandations restent fixes après le premier calcul","B. Compute Optimizer analyse en continu les métriques CloudWatch des 14 derniers jours (ou plus avec Compute Optimizer Enhanced Infrastructure Metrics payant) et affine ses recommandations","C. Compute Optimizer requiert une validation manuelle hebdomadaire","D. Les recommandations sont mises à jour uniquement lors des événements de scaling"],
    answer: 1,
    exp: "Compute Optimizer analyse les métriques CloudWatch des 14 derniers jours par défaut. Avec Enhanced Infrastructure Metrics (option payante), l'historique passe à 93 jours pour des recommandations plus précises tenant compte des patterns hebdomadaires et mensuels. Les recommandations se mettent à jour automatiquement quand le comportement de la workload change."
  },
  {
    id: "aws-soa-c03-j3-50",
    q: "Un ops admin remarque que les instances EC2 d'un ASG utilisent en permanence 95% CPU. Quel type de politique de scaling est le plus adapté pour maintenir CPU à 70% ?",
    choices: ["A. Simple scaling avec une alarme CloudWatch CPU>80%","B. Target Tracking Scaling avec CPUUtilization target = 70%","C. Step Scaling avec plusieurs paliers","D. Scheduled Scaling basé sur l'historique"],
    answer: 1,
    exp: "Target Tracking Scaling est la politique la plus simple et efficace pour maintenir une métrique à une valeur cible. Configurer CPUUtilization target = 70% : l'ASG ajuste automatiquement le nombre d'instances pour maintenir la CPU proche de 70%. AWS crée automatiquement les alarmes CloudWatch nécessaires. Plus intelligent que Simple Scaling ou Step Scaling pour ce cas."
  }
]=[
{id:"aws-soa-c03-j3-1",q:"Un volume EBS gp2 de 100 GB présente des latences élevées. Quelle métrique CloudWatch doit-on vérifier en premier ?",choices:["A. VolumeReadBytes","B. BurstBalance","C. VolumeQueueLength","D. VolumeThroughputPercentage"],answer:1,exp:"BurstBalance indique le pourcentage de crédit burst restant pour gp2. Les volumes gp2 accumulent des crédits quand le trafic est faible et les consomment lors de pics. Un BurstBalance faible (proche de 0%) explique les latences élevées. Solution : migrer vers gp3 (IOPS provisionnées, sans burst credits)."},
{id:"aws-soa-c03-j3-2",q:"Quelle est la principale différence entre les volumes EBS gp2 et gp3 ?",choices:["A. gp3 supporte le chiffrement, gp2 non","B. gp3 permet de provisionner IOPS et throughput indépendamment de la taille, gp2 lie les IOPS à la taille","C. gp2 est plus rapide que gp3 pour toutes les charges de travail","D. gp3 est uniquement disponible pour les instances m6i et plus récentes"],answer:1,exp:"gp2 : les IOPS sont liées à la taille (3 IOPS/GB, max 16,000 IOPS pour 5,333+ GB) avec burst. gp3 : IOPS (jusqu'à 16,000) et throughput (jusqu'à 1,000 MB/s) sont configurables indépendamment de la taille, sans burst credits. gp3 est généralement 20% moins cher et plus prévisible."},
{id:"aws-soa-c03-j3-3",q:"Une application nécessite 50,000 IOPS avec une latence inférieure à 1 ms. Quel type de volume EBS est approprié ?",choices:["A. gp3 (16,000 IOPS max)","B. io1 ou io2 Block Express (jusqu'à 256,000 IOPS)","C. st1 (HDD optimisé pour le throughput)","D. sc1 (Cold HDD)"],answer:1,exp:"io1/io2 Block Express sont conçus pour les workloads I/O intensives nécessitant une haute performance et une faible latence. io2 Block Express supporte jusqu'à 256,000 IOPS et 4,000 MB/s par volume, avec une durabilité de 99.999%. Les volumes sc1/st1 sont des HDD avec une latence bien supérieure."},
{id:"aws-soa-c03-j3-4",q:"Comment S3 Transfer Acceleration améliore-t-il les performances des uploads ?",choices:["A. En compressant les données avant l'upload","B. En routant le trafic via le réseau AWS CloudFront edge locations vers S3","C. En utilisant plusieurs threads parallèles automatiquement","D. En préallouant de la bande passante dédiée pour chaque requête"],answer:1,exp:"S3 Transfer Acceleration utilise les edge locations CloudFront comme points d'entrée. Les données sont transférées vers l'edge location la plus proche via Internet standard, puis transitent sur le réseau privé optimisé AWS vers S3. Cela réduit la latence pour les uploads longue distance, surtout entre continents."},
{id:"aws-soa-c03-j3-5",q:"RDS Performance Insights montre que le principal 'wait event' est 'io/file/innodb/datafile'. Que cela indique-t-il ?",choices:["A. L'instance attend des réponses réseau des applications clientes","B. Les requêtes attendent que les opérations I/O disque se terminent — le storage est un goulot","C. La mémoire RAM est insuffisante pour le buffer pool","D. CPU est saturé et les threads attendent leur tour"],answer:1,exp:"Le wait event 'io/file/innodb/datafile' indique que les threads MySQL attendent les I/O du fichier de données InnoDB. Cela pointe vers un problème de storage : IOPS insuffisantes, BurstBalance épuisé, ou volume sous-dimensionné. Solution : augmenter les IOPS provisionnées ou migrer vers io1/io2."},
{id:"aws-soa-c03-j3-6",q:"Quelle classe de stockage S3 est la moins chère pour des données rarement accédées qui doivent être récupérables en quelques millisecondes ?",choices:["A. S3 Standard-IA","B. S3 One Zone-IA","C. S3 Glacier Instant Retrieval","D. S3 Glacier Flexible Retrieval"],answer:2,exp:"S3 Glacier Instant Retrieval offre la même latence de récupération en millisecondes que S3 Standard, mais à un coût de stockage inférieur. Idéal pour des données accédées 1-2 fois par an. Standard-IA et One Zone-IA sont plus chères que Glacier Instant. Glacier Flexible Retrieval prend des minutes à heures."},
{id:"aws-soa-c03-j3-7",q:"Un workflow SSM Automation doit remédier automatiquement aux instances EC2 non conformes (sans tag 'Environment'). Quel runbook AWS prédéfini peut aider ?",choices:["A. AWS-RestartEC2Instance","B. AWS-AddTagsToAWSResources","C. AWS-EnableS3BucketEncryption","D. AWS-PatchInstanceWithRollback"],answer:1,exp:"AWS-AddTagsToAWSResources est un runbook SSM prédéfini qui ajoute des tags à des ressources AWS. Combiné avec AWS Config (détection de non-conformité) et EventBridge (déclencheur), il peut automatiquement taguer les ressources non conformes. C'est un exemple de remédiation automatique."},
{id:"aws-soa-c03-j3-8",q:"Quelle fonctionnalité EC2 améliore les performances réseau pour les instances compatibles ?",choices:["A. Elastic Network Adapter (ENA) avec Enhanced Networking","B. VPC Flow Logs activés","C. Instance Metadata Service v2 (IMDSv2)","D. Nitro System uniquement"],answer:0,exp:"Enhanced Networking avec ENA (Elastic Network Adapter) fournit un réseau haute performance : jusqu'à 100 Gbps, plus faible latence, moins de jitter, et des PPS (packets per second) plus élevés. Disponible sur les instances compatibles (C5, M5, R5, etc.). Basé sur SR-IOV (Single Root I/O Virtualization)."},
{id:"aws-soa-c03-j3-9",q:"Une instance RDS MySQL présente des performances dégradées. Performance Insights montre une forte attente 'CPU'. Quelle est la première action recommandée ?",choices:["A. Augmenter la taille du volume EBS","B. Identifier les requêtes SQL qui consomment le plus de CPU via Performance Insights Top SQL","C. Activer Multi-AZ pour distribuer la charge","D. Créer un read replica immédiatement"],answer:1,exp:"Performance Insights > Top SQL permet d'identifier les requêtes consommant le plus de ressources. C'est le point de départ du diagnostic. Une fois les requêtes identifiées, on peut optimiser (index, réécriture), mettre en cache (ElastiCache), ou rediriger vers un read replica. Multi-AZ ne distribue pas la charge de lecture."},
{id:"aws-soa-c03-j3-10",q:"Quel type d'instance EC2 est optimisé pour les applications nécessitant un accès à des centaines de gigaoctets de RAM ?",choices:["A. Compute Optimized (C-series)","B. Memory Optimized (R, X, z1d series)","C. Storage Optimized (I, D, H series)","D. GPU Instances (P, G series)"],answer:1,exp:"Les instances Memory Optimized (R : 32 GB à 24 TB, X : jusqu'à 24 TB, z1d : haute fréquence CPU + mémoire) sont conçues pour les workloads intensifs en mémoire : SAP HANA, bases de données in-memory, traitement big data. Les instances X2idn/X2iedn offrent jusqu'à 24 TB de RAM."},
{id:"aws-soa-c03-j3-11",q:"Comment S3 Intelligent-Tiering optimise-t-il les coûts automatiquement ?",choices:["A. Compresse automatiquement tous les objets","B. Déplace automatiquement les objets entre les tiers de fréquence d'accès (Frequent, Infrequent, Archive) selon les patterns réels","C. Supprime automatiquement les objets non accédés depuis 90 jours","D. Duplique les objets dans plusieurs régions automatiquement"],answer:1,exp:"S3 Intelligent-Tiering surveille les patterns d'accès et déplace automatiquement les objets vers le tier approprié : Frequent Access (accès récent), Infrequent Access (non accédé depuis 30 jours), Archive Instant (90 jours), Archive Access (90-180+ jours). Pas de frais de récupération, mais un coût de monitoring par objet."},
{id:"aws-soa-c03-j3-12",q:"Qu'est-ce que Placement Groups dans EC2 et quel type offre la plus faible latence réseau entre instances ?",choices:["A. Cluster Placement Group — instances dans la même AZ, même rack hardware, latence réseau minimale","B. Spread Placement Group — instances sur racks séparés, la plus faible latence","C. Partition Placement Group — optimisé pour Hadoop/Kafka","D. Regional Placement Group — distribution multi-régions"],answer:0,exp:"Cluster Placement Groups placent les instances très proches (même rack, même AZ) pour minimiser la latence réseau (< 10 μs) et maximiser le débit (jusqu'à 25 Gbps). Idéal pour HPC, ML training, applications sensibles à la latence. Spread = haute disponibilité. Partition = charge de travail distribuée tolérante aux pannes."},
{id:"aws-soa-c03-j3-13",q:"Quelle métrique CloudWatch surveiller pour détecter un problème de throttling sur une table DynamoDB ?",choices:["A. ConsumedWriteCapacityUnits","B. SuccessfulRequestLatency","C. SystemErrors","D. ProvisionedWriteCapacityUnits"],answer:0,exp:"ConsumedWriteCapacityUnits > ProvisionedWriteCapacityUnits indique du throttling. Il faut aussi surveiller ThrottledRequests directement. ConsumedReadCapacityUnits pour les lectures. SuccessfulRequestLatency mesure la latence des requêtes réussies (pas le throttling). Pour éviter le throttling : DynamoDB On-Demand ou augmenter les WCU."},
{id:"aws-soa-c03-j3-14",q:"Un SysOps admin doit s'assurer que toutes les nouvelles instances EC2 sont déployées avec l'agent CloudWatch installé et configuré. Quelle approche est la plus scalable ?",choices:["A. Former les développeurs pour installer l'agent manuellement","B. Créer une AMI golden image avec l'agent pré-installé + SSM State Manager pour la configuration","C. Utiliser un script User Data sur chaque instance individuellement","D. Activer CloudWatch Agent dans les paramètres EC2 de la console"],answer:1,exp:"La bonne pratique : AMI golden image avec l'agent CloudWatch pré-installé + SSM State Manager pour maintenir la configuration souhaitée (association SSM qui s'applique à toutes les instances avec un tag donné). State Manager détecte et corrige les dérives automatiquement, ce qui n'est pas possible avec User Data seul."},
{id:"aws-soa-c03-j3-15",q:"Quelle est la limite de débit (throughput) maximum pour un volume EBS gp3 ?",choices:["A. 250 MB/s","B. 500 MB/s","C. 1,000 MB/s","D. 2,000 MB/s"],answer:2,exp:"gp3 supporte jusqu'à 1,000 MB/s de throughput (configurable indépendamment des IOPS). Par défaut, un gp3 a 125 MB/s gratuits inclus. Pour io2 Block Express, le maximum est 4,000 MB/s. gp2 est limité à 250 MB/s maximum."},
{id:"aws-soa-c03-j3-16",q:"Comment optimiser les coûts S3 pour des logs d'accès vieux de plus de 90 jours qui ne sont accédés qu'en cas d'audit ?",choices:["A. Supprimer les logs après 90 jours","B. Configurer une règle de lifecycle S3 pour transitionner vers S3 Glacier Flexible Retrieval après 90 jours","C. Activer S3 Replication vers une autre région","D. Chiffrer les logs avec SSE-S3"],answer:1,exp:"Les règles de lifecycle S3 permettent de transitionner automatiquement les objets vers des classes de stockage moins chères. S3 Glacier Flexible Retrieval est idéal pour des archives rarement accédées (récupération en minutes/heures) à un coût très bas. Pour des audits urgents, Glacier Instant Retrieval est préférable."},
{id:"aws-soa-c03-j3-17",q:"Quelle instance EC2 est idéale pour des applications nécessitant un stockage local NVMe haute vitesse avec des centaines de milliers d'IOPS ?",choices:["A. M5 avec volume EBS io2","B. I3 ou I4i (Storage Optimized avec NVMe instance store)","C. R5 avec EBS gp3","D. C5 avec EBS io1"],answer:1,exp:"Les instances Storage Optimized (I3, I3en, I4i) incluent des disques NVMe SSD locaux (instance store) avec des millions d'IOPS à très faible latence. Idéales pour : bases de données NoSQL (Cassandra, MongoDB), caches distribués, Elasticsearch. Attention : données non persistantes si l'instance s'arrête."},
{id:"aws-soa-c03-j3-18",q:"Un SysOps admin observe que les lectures EFS d'une application sont lentes. Quelle métrique EFS CloudWatch indique un throttling ?",choices:["A. BurstCreditBalance","B. MeteredIOBytes","C. PermittedThroughput","D. StorageBytes"],answer:0,exp:"BurstCreditBalance pour EFS fonctionne comme pour EBS gp2 : les crédits s'accumulent quand le débit est faible et se consomment lors de pics. Un BurstCreditBalance bas (proche de 0) provoque du throttling. Solution : passer en mode Provisioned Throughput ou Elastic Throughput (EFS), ou réduire le débit requis."},
{id:"aws-soa-c03-j3-19",q:"Qu'est-ce que AWS Compute Optimizer et quel problème résout-il ?",choices:["A. Un service qui optimise les coûts en arrêtant les instances inutilisées","B. Un service qui analyse l'utilisation des ressources et recommande des types d'instances EC2 et volumes EBS plus adaptés","C. Un outil de déploiement qui optimise le placement des instances","D. Un service de réservation automatique des Reserved Instances"],answer:1,exp:"AWS Compute Optimizer utilise Machine Learning pour analyser les métriques CloudWatch des 14 derniers jours et recommande des types d'instances EC2, groupes ASG, volumes EBS, et fonctions Lambda optimaux. Il identifie les ressources sur-provisionnées (réduction de coûts) ou sous-provisionnées (amélioration des performances)."},
{id:"aws-soa-c03-j3-20",q:"Une application web connaît des latences élevées lors de pics de trafic. L'instance RDS atteint les IOPS maximales. Quelle est la première action à entreprendre sans modifier le code ?",choices:["A. Activer Multi-AZ RDS","B. Augmenter les IOPS provisionnées du volume RDS ou migrer vers io2","C. Créer immédiatement un read replica","D. Activer RDS Proxy"],answer:1,exp:"Si le goulot d'étranglement est les IOPS storage, l'action immédiate est d'augmenter les IOPS provisionnées (storage scaling) ou de migrer vers un volume io2 avec plus d'IOPS. RDS supporte le scale storage sans downtime. Multi-AZ ne distribue pas la charge. Les read replicas aident pour les lectures, pas pour les IOPS storage."}
];

// ── Jour 4 — Haute disponibilité et scalabilité ───────────────────────────────
window.QDATA[4,
  {
    id: "aws-soa-c03-j4-21",
    q: "Quelle est la différence entre un ASG 'Desired Capacity', 'Minimum Capacity' et 'Maximum Capacity' ?",
    choices: ["A. Desired = nombre actuel d'instances, Min = limite basse du scaling, Max = limite haute du scaling","B. Desired = objectif souhaité, Min = seuil de scaling in, Max = seuil de scaling out","C. Desired = instances actives, Min = instances en veille, Max = instances disponibles en pool","D. Les trois paramètres sont identiques dans un ASG standard"],
    answer: 0,
    exp: "Dans un ASG : Desired Capacity = nombre d'instances que l'ASG cherche à maintenir actuellement. Minimum = plancher — l'ASG ne descendra jamais en dessous. Maximum = plafond — l'ASG ne montera jamais au-dessus. Desired est toujours entre Min et Max. Lors d'un scale-in, l'ASG respecte le Minimum. Lors d'un scale-out, il respecte le Maximum."
  },
  {
    id: "aws-soa-c03-j4-22",
    q: "Qu'est-ce que le 'health check grace period' dans un Auto Scaling Group et pourquoi est-il important ?",
    choices: ["A. La période pendant laquelle une instance peut échouer les health checks sans être terminée (pour laisser le temps à l'application de démarrer)","B. La fréquence à laquelle l'ASG vérifie la santé des instances","C. Le délai avant qu'une alarme CloudWatch déclenche un scaling event","D. La période de warmup après un scale-out avant d'accepter des requêtes"],
    answer: 0,
    exp: "Le health check grace period (défaut : 300 secondes) est le délai accordé à une instance fraîchement lancée avant que l'ASG commence à vérifier sa santé. Pendant ce temps, les health checks échoués sont ignorés. Essentiel pour les applications qui prennent du temps à démarrer — sans ce délai, l'ASG terminerait prématurément des instances saines en cours de démarrage."
  },
  {
    id: "aws-soa-c03-j4-23",
    q: "Un ALB health check retourne 'UnHealthy' pour 2 instances sur 5. Que fait l'ASG ?",
    choices: ["A. Rien — l'ASG ne se base que sur les checks EC2 système, pas les checks ELB","B. Lance de nouvelles instances et termine les unhealthy (si l'ASG utilise le type de health check ELB)","C. Réduit le desired capacity de 2","D. Envoie une alarme SNS mais ne modifie pas les instances"],
    answer: 1,
    exp: "Si l'ASG est configuré pour utiliser les health checks ELB (en plus des checks EC2), les instances que l'ELB marque comme Unhealthy sont terminées par l'ASG et remplacées par de nouvelles instances. Par défaut, l'ASG n'utilise que les checks EC2 (status checks). Activer 'ELB health checks' dans l'ASG pour ce comportement."
  },
  {
    id: "aws-soa-c03-j4-24",
    q: "Quelle politique ALB permet de router les requêtes d'un même utilisateur vers la même instance backend ?",
    choices: ["A. Round Robin (défaut)","B. Least Outstanding Requests","C. Sticky Sessions (Session Affinity) avec un cookie AWSALB","D. Weighted Target Groups"],
    answer: 2,
    exp: "Sticky Sessions (Session Affinity) dans ALB utilise un cookie (AWSALB) pour maintenir un utilisateur sur la même instance cible pendant la durée du cookie (1 seconde à 7 jours). Utile pour les applications stateful avec sessions en mémoire. Limitation : réduit l'équilibre de charge. Mieux : externaliser les sessions dans ElastiCache."
  },
  {
    id: "aws-soa-c03-j4-25",
    q: "Quelle est la différence entre un NLB (Network Load Balancer) et un ALB (Application Load Balancer) pour les connexions TCP long-lived ?",
    choices: ["A. NLB supporte TCP long-lived avec idle timeout fixe, ALB termine la connexion TCP après chaque requête HTTP","B. NLB opère au niveau couche 4 (TCP/UDP) avec des connexions persistantes et latence ultra-faible (<1ms), ALB opère couche 7 (HTTP) et ne supporte pas TCP brut","C. Les deux supportent TCP long-lived de manière identique","D. ALB est plus rapide que NLB pour TCP long-lived grâce au HTTP/2"],
    answer: 1,
    exp: "NLB opère au niveau TCP/UDP (couche 4) avec une latence ultra-faible et supporte les connexions TCP persistantes (gaming, IoT, WebSocket, etc.). Il préserve l'IP source de l'origine. ALB opère au niveau HTTP/HTTPS (couche 7) et peut router basé sur le contenu (host, path, headers). ALB supporte WebSocket mais avec plus de latence que NLB."
  },
  {
    id: "aws-soa-c03-j4-26",
    q: "Comment configurer un Auto Scaling Group pour qu'il scale-out plus vite mais scale-in lentement pour éviter les oscillations ?",
    choices: ["A. Utiliser des politiques différentes : Step Scaling (scale-out rapide) + période de cooldown longue pour scale-in","B. Configurer instance warmup time plus court pour le scale-out","C. Utiliser Target Tracking avec 'disable scale-in' et une alarme séparée pour le scale-in","D. A et C sont deux approches possibles"],
    answer: 3,
    exp: "Deux approches : 1) Scale-out aggressif (Step Scaling avec plusieurs steps, cooldown court ou 0s) + scale-in conservateur (période de cooldown plus longue, ex: 600s). 2) Target Tracking avec 'disable scale in = true' (ne scale jamais in automatiquement) + politique de scale-in séparée avec un seuil conservateur et cooldown long."
  },
  {
    id: "aws-soa-c03-j4-27",
    q: "Qu'est-ce que le 'Connection Draining' (ou 'Deregistration Delay') dans un ELB ?",
    choices: ["A. La capacité de l'ELB à rejeter les connexions pendant la maintenance","B. Le délai accordé aux requêtes en cours de traitement par une instance en cours de désinscription, avant que l'ELB ne force la fermeture","C. La suppression des connexions idle après un timeout","D. Le mécanisme de répartition de charge quand une instance est surchargée"],
    answer: 1,
    exp: "Connection Draining (ALB/NLB) ou Deregistration Delay : quand une instance est retirée du target group (scale-in, déploiement), l'ELB n'envoie plus de nouvelles connexions mais attend que les requêtes en cours se terminent (délai par défaut : 300 secondes, configurable 1-3600s). Après ce délai, les connexions restantes sont fermées de force."
  },
  {
    id: "aws-soa-c03-j4-28",
    q: "Quelle est la limite maximale par défaut d'instances dans un Auto Scaling Group ?",
    choices: ["A. 100 instances","B. 500 instances","C. 2000 instances (limite par défaut, augmentable via Service Quotas)","D. Illimitée"],
    answer: 1,
    exp: "La limite par défaut d'un ASG est de 500 instances maximum (MaxSize). Cette limite peut être augmentée via une demande de Service Quotas. Pour les très grands déploiements (milliers d'instances), plusieurs ASG peuvent être combinés. La limite par défaut du compte pour les instances EC2 varie aussi par type d'instance."
  },
  {
    id: "aws-soa-c03-j4-29",
    q: "Comment implémenter un 'Blue/Green deployment' avec un ALB et des Auto Scaling Groups ?",
    choices: ["A. Modifier le Launch Template de l'ASG existant et redéployer","B. Créer un nouveau Target Group (Green) avec la nouvelle version, puis modifier les règles du Listener ALB pour basculer le trafic (100% ou graduellement via Weighted Target Groups)","C. Utiliser Rolling Update directement dans l'ASG","D. Recréer l'ASG complet avec la nouvelle configuration"],
    answer: 1,
    exp: "Blue/Green avec ALB : 1) Blue = ASG existant dans Target Group Blue. 2) Déployer Green = nouveau ASG (nouvelle version) dans Target Group Green. 3) Listener Rule ALB : basculer graduellement (Weighted Target Groups : 90% Blue / 10% Green, puis 50/50, puis 100% Green). En cas de problème, rollback immédiat en remettant 100% sur Blue."
  },
  {
    id: "aws-soa-c03-j4-30",
    q: "Quelle est la différence entre ElastiCache Redis et Memcached pour la haute disponibilité ?",
    choices: ["A. Redis supporte les clusters multi-AZ avec réplication et failover automatique, Memcached est multi-nœud mais sans réplication","B. Les deux ont exactement les mêmes capacités de HA","C. Memcached a une meilleure HA car il distribue les données automatiquement","D. Redis est limité à une seule AZ, Memcached est multi-AZ"],
    answer: 0,
    exp: "Redis ElastiCache : supporte la réplication (primary + replicas), Multi-AZ avec failover automatique, snapshots, cluster mode (sharding horizontal). Memcached : partitioning horizontal automatique sur plusieurs nœuds, mais SANS réplication — si un nœud tombe, ses données sont perdues. Pour la haute disponibilité avec persistence, Redis est requis."
  },
  {
    id: "aws-soa-c03-j4-31",
    q: "Quelle métrique CloudWatch surveiller pour détecter un déséquilibre de charge entre les cibles d'un target group ALB ?",
    choices: ["A. HealthyHostCount","B. RequestCountPerTarget — comparer entre les instances du target group","C. TargetResponseTime","D. HTTPCode_Target_5XX_Count"],
    answer: 1,
    exp: "RequestCountPerTarget affiche le nombre de requêtes par target (instance) dans le target group. Un déséquilibre (une instance reçoit 10x plus que les autres) peut indiquer un problème de sticky sessions mal configuré, un problème de Cross-Zone Load Balancing, ou des instances avec capacité différente. Afficher par dimension TargetGroup+Target pour comparer."
  },
  {
    id: "aws-soa-c03-j4-32",
    q: "Qu'est-ce que le 'Cross-Zone Load Balancing' et quel est son comportement par défaut pour ALB vs NLB ?",
    choices: ["A. ALB : activé par défaut (gratuit), NLB : désactivé par défaut (payant si activé)","B. Les deux ont le Cross-Zone activé par défaut","C. ALB : désactivé par défaut, NLB : activé par défaut","D. Cross-Zone Load Balancing n'existe que pour ALB"],
    answer: 0,
    exp: "Cross-Zone Load Balancing distribue le trafic uniformément entre toutes les cibles dans toutes les AZ, pas seulement celles de la même AZ que le nœud ELB. ALB : toujours activé, sans coût de transfert inter-AZ. NLB : désactivé par défaut, activable mais avec coût de transfert inter-AZ. CLB : configurable. GWLB : activé par défaut, coût si activé."
  },
  {
    id: "aws-soa-c03-j4-33",
    q: "Un SysOps admin doit s'assurer que les nouvelles instances EC2 dans un ASG sont opérationnelles avant de recevoir du trafic. Quelle fonctionnalité utiliser ?",
    choices: ["A. Health Check Grace Period uniquement","B. Lifecycle Hook 'EC2_INSTANCE_LAUNCHING' + script de warmup + signal CompleteLifecycleAction","C. ELB Connection Draining","D. Instance Refresh avec 'minimum healthy percentage'"],
    answer: 1,
    exp: "Lifecycle Hooks permettent d'intercepter les événements de cycle de vie ASG. Le hook EC2_INSTANCE_LAUNCHING met l'instance en état 'Pending:Wait' pendant le démarrage. Un script (via SSM Automation, Lambda, SQS) peut exécuter des tâches (config applicative, enregistrement service discovery) et signaler la completion via CompleteLifecycleAction. L'instance n'est mise InService qu'après le signal."
  },
  {
    id: "aws-soa-c03-j4-34",
    q: "Quelle est la stratégie recommandée pour les connexions de base de données dans une architecture EC2 + RDS avec haute disponibilité ?",
    choices: ["A. Utiliser l'endpoint de l'instance RDS primaire directement","B. Utiliser RDS Proxy pour pooler les connexions et gérer le failover automatiquement","C. Utiliser les adresses IP directes des instances RDS","D. Configurer les applications pour tenter les deux endpoints (primary et standby) en séquence"],
    answer: 1,
    exp: "RDS Proxy est un proxy de connexion managé qui : 1) Poole les connexions (réduit le nombre de connexions directes à RDS, crucial pour Lambda avec beaucoup d'invocations). 2) Gère transparentement le failover Multi-AZ (réduit le temps de failover de ~30s à < 10s). 3) Supporte IAM auth et Secrets Manager. L'endpoint Proxy reste stable même après le failover RDS."
  },
  {
    id: "aws-soa-c03-j4-35",
    q: "Comment un ALB gère-t-il les connexions HTTPS ? Quelle est l'entité qui déchiffre le SSL/TLS ?",
    choices: ["A. L'ALB déchiffre le SSL/TLS (SSL termination) et communique en HTTP avec les backends, ou en HTTPS pour l'end-to-end encryption","B. L'ALB transmet les paquets chiffrés directement aux backends (SSL pass-through)","C. Les backends ne peuvent pas recevoir du trafic HTTPS depuis l'ALB","D. L'ALB utilise AWS Shield pour gérer le SSL"],
    answer: 0,
    exp: "ALB effectue le SSL/TLS termination : il déchiffre le trafic HTTPS en utilisant un certificat ACM. La communication avec les backends peut être en HTTP (pas de chiffrement) ou HTTPS (re-chiffrement end-to-end). Pour le SSL pass-through sans inspection du contenu, utiliser NLB (couche 4 — il ne déchiffre pas). ALB nécessite un certificat SSL valide (ACM ou importé)."
  },
  {
    id: "aws-soa-c03-j4-36",
    q: "Quelle fonctionnalité Aurora améliore la performance des lectures par rapport à une RDS MySQL standard ?",
    choices: ["A. Aurora utilise NVMe SSD local pour les lectures","B. Aurora Replicas permettent de distribuer les lectures (jusqu'à 15 replicas dans un cluster, même volume de stockage partagé)","C. Aurora ne supporte pas les read replicas","D. Aurora compresse automatiquement les données pour des lectures plus rapides"],
    answer: 1,
    exp: "Aurora utilise une architecture de stockage partagé (6 copies dans 3 AZ) où tous les réplicas Aurora lisent le même stockage. Cela permet d'avoir jusqu'à 15 Aurora Replicas avec une latence de réplication de quelques millisecondes (vs minutes pour RDS Read Replicas). L'Aurora Reader Endpoint distribue automatiquement les connexions de lecture entre les replicas."
  },
  {
    id: "aws-soa-c03-j4-37",
    q: "Qu'est-ce que l'EC2 Instance Refresh dans un Auto Scaling Group ?",
    choices: ["A. Un redémarrage de toutes les instances simultanément","B. Un processus de remplacement progressif des instances pour déployer une nouvelle configuration (Launch Template), avec contrôle du pourcentage sain minimum","C. La mise à jour de l'AMI en place sans remplacer les instances","D. Un health check forcé sur toutes les instances"],
    answer: 1,
    exp: "Instance Refresh remplace progressivement les instances d'un ASG avec une nouvelle configuration (Launch Template version, nouvelle AMI). Le paramètre 'MinHealthyPercentage' garantit qu'un certain pourcentage d'instances reste opérationnel pendant le refresh. Remplace les scripts de déploiement Rolling Update manuels. Supporte aussi 'skip matching' pour ne remplacer que les instances outdatées."
  },
  {
    id: "aws-soa-c03-j4-38",
    q: "Comment configurer un Load Balancer AWS pour gérer des pics de trafic importants (ex: Black Friday) ?",
    choices: ["A. Augmenter manuellement le nombre de nœuds ELB dans la console","B. Contacter AWS à l'avance pour 'pre-warm' le Load Balancer si un pic soudain important est attendu","C. L'ELB scale automatiquement et aucune action n'est requise","D. B et C sont toutes deux correctes"],
    answer: 3,
    exp: "ALB/NLB scalent automatiquement pour gérer les augmentations de trafic progressives. Cependant, pour des pics SOUDAINS et TRÈS importants (Black Friday, lancement produit), l'ELB peut ne pas scale assez vite. Dans ce cas, contacter AWS Support à l'avance pour pre-worm l'ELB. Pour les architectures modernes, NLB est préférable car il scale plus rapidement."
  },
  {
    id: "aws-soa-c03-j4-39",
    q: "Quelle est la différence entre un 'scale-out' (scaling horizontal) et un 'scale-up' (scaling vertical) ?",
    choices: ["A. Scale-out = ajouter plus d'instances, scale-up = passer à une instance plus grande","B. Scale-out = ajouter de la RAM, scale-up = ajouter des CPU","C. Les deux termes sont synonymes dans AWS","D. Scale-out est pour les bases de données, scale-up pour les serveurs web"],
    answer: 0,
    exp: "Scale-out (horizontal) : ajouter plus d'instances identiques — géré par Auto Scaling Groups. Préféré dans le cloud car élastique, résilient, et moins de downtime. Scale-up (vertical) : passer à une instance plus grande (m5.large → m5.xlarge) — nécessite un redémarrage, limite fixe. AWS recommande le scaling horizontal pour les applications stateless."
  },
  {
    id: "aws-soa-c03-j4-40",
    q: "Un SysOps admin observe que les nouvelles instances lancées par l'ASG restent 'Pending' indéfiniment. Quelle est la cause probable ?",
    choices: ["A. L'ASG a atteint son maximum capacity","B. Un Lifecycle Hook EC2_INSTANCE_LAUNCHING est configuré et n'a pas reçu de signal de completion (timeout atteint)","C. L'AMI utilisée dans le Launch Template est corrompue","D. La politique IAM de l'ASG n'autorise pas le lancement d'instances"],
    answer: 1,
    exp: "Quand un Lifecycle Hook est configuré, l'instance reste en état Pending:Wait jusqu'à recevoir un CompleteLifecycleAction signal (via SSM, Lambda, CLI) ou jusqu'au timeout (délai par défaut : 3600 secondes). Si la Lambda/SSM Automation qui envoie le signal échoue ou n'est pas déclenchée, l'instance reste bloquée en Pending:Wait."
  },
  {
    id: "aws-soa-c03-j4-41",
    q: "Quelle est la différence entre RDS Multi-AZ (standby) et Aurora Multi-AZ (replicas) ?",
    choices: ["A. RDS Multi-AZ : standby passif non accessible en lecture, failover automatique en ~1-2 min. Aurora Multi-AZ : replicas actifs pour la lecture, failover automatique en ~30s","B. Les deux ont la même architecture de failover","C. RDS Multi-AZ permet les lectures, Aurora Multi-AZ non","D. Aurora Multi-AZ n'existe pas — Aurora est single-AZ par défaut"],
    answer: 0,
    exp: "RDS Multi-AZ standard : 1 instance primaire + 1 standby dans une autre AZ. Le standby est passif (pas de trafic), réplication synchrone. Failover automatique en ~1-2 minutes. Aurora Multi-AZ : primaire + jusqu'à 15 Aurora Replicas dans différentes AZ, tous actifs pour la lecture sur le même volume partagé. Failover en ~30 secondes car les replicas connaissent déjà le volume."
  },
  {
    id: "aws-soa-c03-j4-42",
    q: "Qu'est-ce que le 'Warm Pool' dans les Auto Scaling Groups et quel problème résout-il ?",
    choices: ["A. Un pool d'instances pré-lancées et pré-initialisées, maintenues en état Stopped ou Running, pour réduire le temps de scale-out","B. Un pool d'instances de remplacement en cas de défaillance","C. Un groupe d'instances réservées pour les tests de performance","D. Des instances warm standby pour le Disaster Recovery"],
    answer: 0,
    exp: "Warm Pools maintiennent un pool d'instances pré-lancées (état Stopped, Hibernated ou Running) prêtes à être mise InService immédiatement. Réduit drastiquement le temps de scale-out (quelques secondes vs plusieurs minutes pour un cold start). Utile pour les applications avec long bootstrap time (installation de packages, téléchargement de données). Les instances Warm Pool ne reçoivent pas de trafic."
  },
  {
    id: "aws-soa-c03-j4-43",
    q: "Comment un NLB (Network Load Balancer) préserve-t-il l'adresse IP source du client ?",
    choices: ["A. Le NLB modifie l'IP source comme l'ALB","B. Le NLB opère au niveau TCP et préserve nativement l'IP source du client — les instances voient directement l'IP du client","C. Le NLB utilise X-Forwarded-For comme l'ALB","D. L'IP source est préservée uniquement pour UDP, pas TCP"],
    answer: 1,
    exp: "NLB opère au niveau couche 4 (TCP/UDP) : il ne modifie pas les paquets IP, donc les instances backend voient directement l'adresse IP source du client. ALB opère couche 7 et termine la connexion TCP — les instances voient l'IP du nœud ALB dans le header TCP, avec l'IP client dans le header HTTP X-Forwarded-For. Pour les applications qui vérifient l'IP source, NLB est requis."
  },
  {
    id: "aws-soa-c03-j4-44",
    q: "Quelle politique de scaling ASG est la plus appropriée pour anticiper les pics de trafic connus à l'avance (ex: heure de déjeuner) ?",
    choices: ["A. Target Tracking Scaling","B. Scheduled Scaling avec des actions définies à heures fixes","C. Step Scaling avec des alarmes CloudWatch","D. Predictive Scaling basé sur ML"],
    answer: 1,
    exp: "Scheduled Scaling permet de définir des actions de scaling à des heures précises (cron ou date/heure). Idéal pour les patterns prévisibles comme : scale out à 11h30 (avant le déjeuner), scale in à 14h00. Predictive Scaling (ML) prédit aussi les pics mais nécessite des données historiques. Les deux peuvent être combinés."
  },
  {
    id: "aws-soa-c03-j4-45",
    q: "Un ALB reçoit des erreurs 503. Quelle est la cause la plus probable ?",
    choices: ["A. L'ALB est lui-même surchargé","B. Toutes les cibles du target group sont unhealthy ou le target group est vide","C. Le certificat SSL est expiré","D. Les Security Groups de l'ALB bloquent le trafic entrant"],
    answer: 1,
    exp: "HTTP 503 'Service Unavailable' depuis un ALB signifie que l'ALB n'a aucune cible saine à qui envoyer le trafic : soit toutes les instances du target group sont unhealthy, soit le target group est vide. Vérifier : HealthyHostCount < 1, les health checks des cibles, les Security Groups entre ALB et cibles (port health check autorisé?)."
  },
  {
    id: "aws-soa-c03-j4-46",
    q: "Qu'est-ce que la politique 'Predictive Scaling' dans un Auto Scaling Group ?",
    choices: ["A. Une politique qui prédit les pannes d'instances et les remplace préventivement","B. Une politique basée sur ML qui analyse les patterns historiques de trafic pour scaler proactivement avant les pics prévisibles","C. Une politique qui scale en fonction des prédictions de coûts AWS","D. Une politique de scaling uniquement disponible pour les instances Spot"],
    answer: 1,
    exp: "Predictive Scaling utilise le Machine Learning d'AWS pour analyser les métriques historiques CloudWatch (jusqu'à 14 semaines) et prédire les pics de charge futurs. Il crée des scheduled scaling actions automatiquement pour scale out AVANT les pics (proactif), évitant la latence des politiques réactives (Target Tracking). Peut être combiné avec Target Tracking pour une gestion optimale."
  },
  {
    id: "aws-soa-c03-j4-47",
    q: "Comment configurer un ALB pour rediriger automatiquement tout le trafic HTTP vers HTTPS ?",
    choices: ["A. Modifier le Security Group de l'ALB pour bloquer le port 80","B. Ajouter une règle au Listener HTTP (port 80) avec action 'Redirect' vers HTTPS (port 443)","C. Configurer cette redirection dans les Security Groups","D. Supprimer le Listener HTTP du Load Balancer"],
    answer: 1,
    exp: "La bonne pratique : créer un Listener sur le port 80 avec une règle par défaut 'Redirect' → HTTPS (port 443, Status Code 301 Moved Permanently). Cela préserve le path et les query strings. Alternative incorrecte : supprimer le Listener 80 fait une 'connection refused' au lieu d'une redirection propre."
  },
  {
    id: "aws-soa-c03-j4-48",
    q: "Quelle est la limite de connexions simultanées par défaut pour ElastiCache Redis par nœud ?",
    choices: ["A. 65,000 connexions","B. Illimitées — Redis gère toutes les connexions","C. Dépend du type de nœud (instance type) mais généralement des dizaines de milliers","D. 1,000 connexions par nœud"],
    answer: 2,
    exp: "La limite de connexions ElastiCache Redis dépend du type de nœud : par exemple cache.r6g.large supporte jusqu'à 65,000 connexions simultanées. Les types plus petits ont des limites plus basses. En pratique, surveiller la métrique CurrConnections et configurer une alarme. Pour réduire le nombre de connexions, utiliser un connection pooler comme ioredis ou redis-py avec pool_size."
  },
  {
    id: "aws-soa-c03-j4-49",
    q: "Un SysOps admin doit configurer l'ASG pour maintenir les instances dans une AZ spécifique en cas de problème. Quelle fonctionnalité utiliser ?",
    choices: ["A. Availability Zone Rebalancing uniquement","B. Configure l'ASG avec une seule AZ pour limiter l'exposition","C. AZ Rebalancing peut être suspendu, et des actions de scaling peuvent être configurées par AZ","D. Configurer des subnets dans une seule AZ dans le Launch Template"],
    answer: 3,
    exp: "En configurant l'ASG avec des subnets uniquement dans l'AZ souhaitée, les instances ne seront lancées que dans cette AZ. L'ASG respecte les subnets configurés. Pour plus de contrôle, utiliser les politiques de scalin par AZ. Note : cette approche réduit la résilience — en production, les ASG multi-AZ sont recommandés."
  },
  {
    id: "aws-soa-c03-j4-50",
    q: "Comment réduire les coûts d'un ALB qui reçoit peu de trafic mais doit rester disponible 24h/24 ?",
    choices: ["A. Supprimer l'ALB et n'en créer qu'au besoin","B. Utiliser AWS Global Accelerator à la place de l'ALB","C. L'ALB ne peut pas être optimisé pour les coûts — le coût fixe est incompressible","D. Remplacer par un NLB si les fonctionnalités couche 7 ne sont pas requises, ou utiliser API Gateway pour les APIs REST"],
    answer: 3,
    exp: "ALB a un coût fixe (Load Balancer Capacity Units). Si les fonctionnalités couche 7 ne sont pas nécessaires, NLB peut être moins cher pour certains workloads. Pour les APIs REST avec peu de trafic, API Gateway (pay-per-request, 0 coût fixe) est souvent moins cher qu'un ALB. Évaluer avec le calculateur de coûts AWS selon le volume de trafic réel."
  }
]=[
{id:"aws-soa-c03-j4-1",q:"Un Auto Scaling Group est configuré avec une politique de Target Tracking sur CPUUtilization à 60%. Que se passe-t-il si le CPU monte à 80% ?",choices:["A. L'ASG lance immédiatement autant d'instances que nécessaire pour revenir à 60%","B. L'ASG attend le cooldown period avant de lancer des instances","C. L'ASG désactive la politique et envoie une alerte CloudWatch","D. L'ASG lance une instance toutes les 5 minutes jusqu'à ce que le CPU redescende"],answer:0,exp:"La Target Tracking calcule automatiquement le nombre d'instances nécessaires pour maintenir la métrique cible. Elle lance les instances requises immédiatement (sans attendre le cooldown comme pour les step policies). La formule approximative : instances à ajouter = ceil(80/60 × instances_actuelles - instances_actuelles)."},
{id:"aws-soa-c03-j4-2",q:"Quelle est la différence entre un ALB (Application Load Balancer) et un NLB (Network Load Balancer) ?",choices:["A. ALB travaille au niveau OSI 7 (HTTP/HTTPS), NLB au niveau 4 (TCP/UDP/TLS)","B. ALB supporte plus de trafic que NLB","C. NLB ne supporte pas le SSL termination","D. ALB est gratuit, NLB est payant"],answer:0,exp:"ALB (Layer 7) : routage basé sur le chemin URL, host-based routing, redirects, authentication, WebSocket. NLB (Layer 4) : latence ultra-faible (< 1ms), millions de requêtes/seconde, IP statiques, TCP/UDP, preserve client IP. NLB supporte TLS termination. Choisir selon le besoin : fonctionnalités HTTP (ALB) vs performance pure (NLB)."},
{id:"aws-soa-c03-j4-3",q:"Combien de temps dure le cooldown period par défaut dans un Auto Scaling Group ?",choices:["A. 60 secondes","B. 300 secondes","C. 600 secondes","D. Pas de cooldown par défaut"],answer:1,exp:"Le cooldown period par défaut est 300 secondes (5 minutes) pour les politiques Simple Scaling. Pendant ce délai, l'ASG n'effectue pas d'autres actions de scaling. Les politiques Target Tracking et Step Scaling ont un concept similaire (warmup period). Le cooldown empêche des cycles de scale-out/in rapides."},
{id:"aws-soa-c03-j4-4",q:"Quelle différence fondamentale existe entre ElastiCache Redis et Memcached ?",choices:["A. Redis supporte le clustering multi-nœuds, Memcached est toujours single-node","B. Redis supporte la persistance, les structures de données complexes et la réplication ; Memcached est plus simple et multi-thread","C. Memcached est plus rapide que Redis pour toutes les opérations","D. Redis est gratuit, Memcached est payant sur AWS"],answer:1,exp:"Redis : persistance (RDB/AOF), réplication (primary/replica), clustering, structures de données complexes (sorted sets, listes, pub/sub), Lua scripting, transactions. Memcached : simple, multi-thread (meilleur CPU scaling), plus facile à scaler horizontalement. Choisir Redis pour fonctionnalités avancées, Memcached pour cache pur simple."},
{id:"aws-soa-c03-j4-5",q:"Un RDS MySQL Multi-AZ effectue un failover. Combien de temps prend typiquement ce failover ?",choices:["A. Quelques secondes (< 5s)","B. 1 à 2 minutes","C. 5 à 10 minutes","D. Jusqu'à 30 minutes selon la taille de la base"],answer:1,exp:"Un failover RDS Multi-AZ prend typiquement 60-120 secondes (1-2 minutes). Pendant ce temps : AWS détecte la panne, promeut le replica standby en primary, met à jour le DNS endpoint. L'application doit gérer les erreurs de connexion et se reconnecter. Aurora est plus rapide (< 30 secondes en général)."},
{id:"aws-soa-c03-j4-6",q:"Quelle politique de scaling ASG est la plus appropriée pour anticiper une charge prévisible chaque lundi matin ?",choices:["A. Target Tracking sur CPUUtilization","B. Step Scaling sur une alarme CloudWatch","C. Scheduled Scaling avec une action programmée pour dimanche soir","D. Dynamic Scaling basé sur SQS"],answer:2,exp:"Scheduled Scaling permet de programmer des actions à des heures précises. Pour une charge prévisible chaque lundi matin, programmer une scale-out le dimanche soir permet d'avoir la capacité prête avant le pic. Target Tracking et Step Scaling sont réactifs (après que le CPU monte), pas proactifs."},
{id:"aws-soa-c03-j4-7",q:"Qu'est-ce que l'ALB Slow Start Mode ?",choices:["A. L'ALB réduit le trafic vers les instances en fin de vie","B. L'ALB augmente progressivement le trafic vers une nouvelle instance pendant une période de warmup","C. L'ALB ralentit les requêtes pour éviter le DDoS","D. Un mode de test où l'ALB simule un trafic réduit"],answer:1,exp:"Slow Start Mode permet à une nouvelle instance EC2 de s'initialiser progressivement avant de recevoir sa pleine charge de trafic. Pendant la période configurée (30-900 secondes), l'ALB augmente graduellement le poids de trafic vers la nouvelle instance. Idéal pour les applications avec un long temps de démarrage (JVM, chargement de cache)."},
{id:"aws-soa-c03-j4-8",q:"Un ALB distribue le trafic vers 10 instances EC2. Comment configurer le routage pour envoyer 20% du trafic vers un groupe cible de test ?",choices:["A. Créer deux target groups et configurer une règle de listener avec Weighted Target Groups (80/20)","B. Utiliser Route 53 Weighted Routing","C. Configurer deux ALB distincts et diviser avec DNS","D. Utiliser des ASG avec des capacités différentes"],answer:0,exp:"Les Weighted Target Groups ALB permettent de distribuer le trafic entre plusieurs target groups avec des poids (1-999). Pour 80/20, configurer le target group de production avec weight=800 et le target group de test avec weight=200. Idéal pour le canary deployment et les blue/green deployments sans changer DNS."},
{id:"aws-soa-c03-j4-9",q:"Qu'est-ce que la Connection Draining (ou Deregistration Delay) sur un ALB ?",choices:["A. L'ALB ferme immédiatement toutes les connexions quand une instance est déregistrée","B. L'ALB attend que les connexions existantes se terminent avant de déregistrer définitivement une instance (par défaut 300s)","C. L'ALB redirige les connexions vers un autre ALB en cas de surcharge","D. Une fonctionnalité pour limiter le nombre de connexions par instance"],answer:1,exp:"Connection Draining (ALB) / Deregistration Delay permet aux instances en cours de déregistrement de terminer les requêtes en cours avant d'être retirées. Par défaut 300 secondes. Pendant ce délai, l'ALB arrête d'envoyer de nouvelles requêtes mais maintient les connexions existantes. Important pour les déploiements sans interruption."},
{id:"aws-soa-c03-j4-10",q:"Amazon Aurora est 5x plus rapide que MySQL standard. Quelle architecture explique ce gain ?",choices:["A. Aurora utilise des instances EC2 avec des processeurs plus rapides","B. Aurora découple le compute du storage avec un storage distribué SSD partagé, répliqué 6 fois sur 3 AZ","C. Aurora charge toute la base en mémoire RAM","D. Aurora utilise un protocole réseau propriétaire entre client et base"],answer:1,exp:"Aurora Architecture : le storage distribué (Aurora Storage) est partagé entre l'instance writer et les replicas read. Les données sont répliquées 6 fois sur 3 AZ automatiquement. Cela élimine le goulot d'étranglement I/O, accélère les replicas (pas besoin de répliquer les données, seulement les logs), et permet un failover très rapide (< 30s)."},
{id:"aws-soa-c03-j4-11",q:"Un ASG dispose de 5 instances. Une politique Step Scaling est configurée : +2 instances si CPU > 70%, +4 si CPU > 90%. Le CPU passe de 50% à 95%. Combien d'instances seront lancées ?",choices:["A. 2 instances (seuil 70% déclenché en premier)","B. 4 instances (seuil le plus élevé atteint)","C. 6 instances (cumul des deux paliers)","D. L'ASG lance d'abord 2 puis évalue de nouveau"],answer:1,exp:"Step Scaling évalue le palier en fonction de la valeur actuelle. Si la métrique est à 95%, seul le palier supérieur (CPU > 90% → +4) s'applique. Les paliers ne sont PAS cumulatifs. Si la métrique était passée progressivement de 71% puis à 95%, le palier applicable est le plus haut atteint."},
{id:"aws-soa-c03-j4-12",q:"Quel health check de l'ALB permet de vérifier qu'une application répond correctement au niveau HTTP ?",choices:["A. Health check TCP sur le port de l'application","B. Health check HTTP avec un path comme /health et un code HTTP attendu (200)","C. Health check basé sur les métriques CloudWatch","D. Health check EC2 via Systems Manager"],answer:1,exp:"L'ALB envoie des requêtes HTTP GET vers un path configurable (ex: /health). Une réponse avec un code HTTP 2xx/3xx dans la plage configurée indique que l'instance est healthy. Le health check HTTP est plus précis que TCP (vérifie que l'application fonctionne, pas seulement que le port est ouvert)."},
{id:"aws-soa-c03-j4-13",q:"Quelle fonctionnalité Aurora permet de créer jusqu'à 15 replicas de lecture avec failover automatique et priorisation ?",choices:["A. Aurora Multi-Master","B. Aurora Read Replicas avec Failover Priority","C. Aurora Global Database","D. Aurora Serverless"],answer:1,exp:"Aurora supporte jusqu'à 15 read replicas avec une priorité de failover configurable (Tier 0 = haute priorité). En cas de panne du writer, Aurora promeut automatiquement le replica avec la priorité la plus haute. Aurora Multi-Master permet plusieurs writers. Aurora Global Database permet la réplication multi-régions."},
{id:"aws-soa-c03-j4-14",q:"Comment configurer un ALB pour rediriger automatiquement tout le trafic HTTP vers HTTPS ?",choices:["A. Modifier les Security Groups pour bloquer le port 80","B. Créer une règle de listener sur le port 80 avec l'action Redirect vers HTTPS (port 443)","C. Configurer un header HTTP dans le target group","D. Utiliser AWS WAF pour bloquer les requêtes HTTP"],answer:1,exp:"Sur l'ALB, créer un listener sur le port 80 avec l'action 'Redirect' vers port 443 (HTTPS) avec le code de statut 301 (permanent) ou 302 (temporaire). C'est la méthode native ALB, sans coût supplémentaire, et bien plus propre que de bloquer avec les Security Groups."},
{id:"aws-soa-c03-j4-15",q:"Quelle est la limite maximale de capacity units pour un ASG en mode Standard ?",choices:["A. 100 instances","B. 500 instances","C. 2500 instances ou plus selon demande","D. Pas de limite par défaut"],answer:2,exp:"La limite par défaut d'un ASG est 500 instances, mais elle peut être augmentée via Service Quotas. Certains comptes peuvent avoir jusqu'à 2,500+ instances par ASG. Pour de très grands déploiements, il peut être nécessaire de soumettre une demande d'augmentation de limite."},
{id:"aws-soa-c03-j4-16",q:"Un NLB doit conserver l'adresse IP source du client dans les requêtes vers les instances EC2 backend. Quelle configuration est requise ?",choices:["A. Activer 'Preserve client IP' dans le target group NLB","B. Configurer X-Forwarded-For header sur le NLB","C. Les NLB préservent toujours l'IP source automatiquement","D. Utiliser un ALB à la place qui supporte X-Forwarded-For"],answer:0,exp:"Pour les target groups NLB de type 'Instance' (pas IP), l'IP source du client est préservée par défaut. Pour les target groups de type 'IP', activer 'Preserve client IP' est nécessaire. Les ALB, eux, remplacent l'IP source et utilisent X-Forwarded-For pour transmettre l'IP originale."},
{id:"aws-soa-c03-j4-17",q:"Qu'est-ce qu'ElastiCache Redis Cluster Mode ?",choices:["A. Un mode où Redis est déployé dans plusieurs VPC","B. Un mode qui partitionne les données sur plusieurs shards (nœuds primaires) pour scale horizontalement","C. Un mode haute disponibilité avec un nœud primaire et plusieurs secondaires dans une seule partition","D. Un mode de test sans réplication"],answer:1,exp:"Redis Cluster Mode Enabled : les données sont partitionnées sur jusqu'à 500 shards, chaque shard ayant son propre nœud primaire et jusqu'à 5 replicas. Permet de scaler la capacité de cache bien au-delà d'un seul nœud. Cluster Mode Disabled = single shard avec réplication (1 primary + 5 replicas max)."},
{id:"aws-soa-c03-j4-18",q:"Quelle action déclencherait un 'scale in' (réduction) dans un ASG avec Target Tracking à 60% CPU ?",choices:["A. CPU descend à 40% pendant plusieurs minutes","B. Une instance EC2 dans l'ASG redémarre","C. Un health check ELB échoue pour une instance","D. Le nombre minimum d'instances est atteint"],answer:0,exp:"Target Tracking déclenche un scale in quand la métrique est suffisamment en dessous de la cible (60%) pendant un temps suffisant. L'ASG protège contre le scale in trop agressif avec un stabilization window (par défaut 15 minutes). Un health check ELB échoué déclenche le remplacement de l'instance, pas un scale in."},
{id:"aws-soa-c03-j4-19",q:"Quel service AWS fournit une mise en cache managée pour les API calls avec réduction de latence et de coûts de compute ?",choices:["A. ElastiCache Redis en frontal d'une API","B. API Gateway avec cache intégré","C. CloudFront avec TTL configuré","D. B et C sont toutes deux valides selon le cas d'usage"],answer:3,exp:"API Gateway cache intégré : simple à configurer pour les API REST, TTL par méthode, invalidation par clé de cache. CloudFront : CDN global, cache au edge pour toutes les requêtes HTTP/HTTPS, plus adapté pour les API publiques mondiales. Les deux sont valides. ElastiCache serait une couche de cache applicative, pas automatique."},
{id:"aws-soa-c03-j4-20",q:"Quelle est la différence entre 'Termination Policy: Default' et 'Termination Policy: OldestInstance' dans un ASG ?",choices:["A. Default supprime les instances dans l'AZ avec le plus d'instances, puis les plus anciennes. OldestInstance supprime toujours la plus ancienne quelle que soit l'AZ","B. Default est identique à OldestInstance","C. Default supprime aléatoirement, OldestInstance est déterministe","D. OldestInstance est plus rapide car elle n'évalue pas l'AZ"],answer:0,exp:"Default policy : 1) Choisit l'AZ avec le plus d'instances 2) Si AMI non-current, l'instance avec la vieille AMI 3) L'instance la plus proche du prochain billing hour. OldestInstance : supprime simplement l'instance la plus ancienne. OldestLaunchConfiguration et OldestLaunchTemplate sont aussi disponibles."}
];

// ── Jour 5 — Route 53, CloudFront, résilience ─────────────────────────────────
window.QDATA[5,
  {
    id: "aws-soa-c03-j5-21",
    q: "Qu'est-ce qu'une 'Alias record' dans Route 53 et comment diffère-t-elle d'un enregistrement CNAME ?",
    choices: ["A. Alias : peut pointer vers des ressources AWS (ALB, CloudFront, S3) et est gratuit pour les queries, fonctionne à l'apex du domaine. CNAME : pointe vers un autre hostname, payant, ne fonctionne pas à l'apex","B. Les deux sont identiques mais avec des noms différents","C. CNAME : spécifique à AWS, Alias : standard DNS","D. Alias : pour les enregistrements A uniquement, CNAME : pour tout type d'enregistrement"],
    answer: 0,
    exp: "Record Alias Route 53 : pointe vers des ressources AWS natives (ALB, NLB, CloudFront, S3 website, autre record R53). Avantages : fonctionne à l'apex (zone apex, ex: example.com), queries gratuites, suivi automatique des changements d'IP de la cible. CNAME : ne peut pas être à l'apex, payant par query, pointe vers n'importe quel hostname."
  },
  {
    id: "aws-soa-c03-j5-22",
    q: "Quelle est la différence entre Route 53 'Latency-Based Routing' et 'Geolocation Routing' ?",
    choices: ["A. Latency-Based : route vers la région AWS avec la latence mesurée la plus faible pour l'utilisateur. Geolocation : route selon la localisation géographique de l'utilisateur (pays, continent)","B. Latency-Based est pour les adresses IP statiques, Geolocation pour les ressources AWS","C. Les deux mesurent la latence mais avec des métriques différentes","D. Geolocation est plus précis que Latency-Based pour les décisions de routing"],
    answer: 0,
    exp: "Latency-Based Routing : Route 53 mesure la latence vers les régions AWS depuis la localisation de l'utilisateur et route vers la région avec la latence la plus faible. Geolocation Routing : route selon la localisation géographique (IP GeoIP) — peut être différent de la latence optimale (ex: utilisateur en Europe routé vers US si c'est plus proche par politique d'entreprise)."
  },
  {
    id: "aws-soa-c03-j5-23",
    q: "Comment Route 53 Health Checks détecte-t-il les défaillances d'un endpoint ?",
    choices: ["A. Route 53 envoie des sondes depuis une seule région AWS vers l'endpoint","B. Route 53 envoie des sondes depuis plusieurs régions AWS (15+ health checkers géographiquement distribués) et agrège les résultats","C. Route 53 utilise les métriques CloudWatch pour déterminer la santé","D. Les health checks sont uniquement basés sur les codes HTTP retournés"],
    answer: 1,
    exp: "Route 53 utilise des health checkers géographiquement distribués (15+ régions). Un endpoint est considéré sain si ≥18% des health checkers le rapportent comme sain (seuil configurable). Cela évite les faux positifs causés par des problèmes réseau locaux. Les health checks peuvent vérifier HTTP, HTTPS, TCP, et optionnellement la présence d'une chaîne dans le corps de la réponse."
  },
  {
    id: "aws-soa-c03-j5-24",
    q: "Un SysOps admin doit configurer Route 53 pour basculer automatiquement le trafic vers une région DR si la région primaire est défaillante. Quelle configuration utiliser ?",
    choices: ["A. Weighted Routing avec 100% primaire et 0% DR (modifier manuellement en cas de panne)","B. Failover Routing avec un record Primary (avec health check) et un record Secondary (DR)","C. Latency-Based Routing entre les deux régions","D. Geolocation Routing avec une règle par région"],
    answer: 1,
    exp: "Failover Routing Route 53 : configurer un enregistrement Primary (pointe vers la région principale, avec health check associé) et un enregistrement Secondary (pointe vers la région DR). Si le health check du Primary échoue, Route 53 bascule automatiquement tout le trafic vers le Secondary. Fonctionne avec Active/Passive DR."
  },
  {
    id: "aws-soa-c03-j5-25",
    q: "Quelle est la différence entre CloudFront TTL minimum, maximum et par défaut ?",
    choices: ["A. TTL par défaut = 86400s (24h), TTL minimum = 0s (si l'origin dit no-cache), TTL maximum = 31536000s (1 an) — ces valeurs bornent les headers cache-control de l'origine","B. TTL minimum = maximum = par défaut = 86400s","C. TTL minimum s'applique aux erreurs, TTL maximum aux succès","D. Ces paramètres ne peuvent être configurés qu'au niveau du compte CloudFront"],
    answer: 0,
    exp: "CloudFront respecte les headers Cache-Control de l'origine mais les borde par les TTL configurés sur le comportement : si l'origine envoie Cache-Control: max-age=60 mais le TTL minimum est 300, CloudFront cache 300 secondes. Si l'origine envoie max-age=3600 mais le TTL maximum est 1800, CloudFront cache 1800s. Le TTL par défaut s'applique si l'origine n'envoie pas de header Cache-Control."
  },
  {
    id: "aws-soa-c03-j5-26",
    q: "Comment invalider le cache CloudFront pour une URL spécifique et quel est le coût ?",
    choices: ["A. Modifier l'URL pour inclure un paramètre de version (cache busting) — gratuit, pas de coût d'invalidation","B. Envoyer une invalidation CloudFront pour /path/file.jpg — les 1000 premières invalidations par mois sont gratuites, ensuite payantes","C. Supprimer et recréer la distribution CloudFront","D. Attendre l'expiration du TTL — les invalidations ne sont pas supportées"],
    answer: 1,
    exp: "Les invalidations CloudFront suppriment les objets cachés avant leur TTL. Les 1000 premières invalidation paths par mois sont gratuits, ensuite $0.005 par path. Pour les déploiements fréquents, le cache busting (versioning dans les URLs : /app.v1.2.3.js) est gratuit et plus efficace. Les invalidations avec wildcard (/*) comptent comme 1 path."
  },
  {
    id: "aws-soa-c03-j5-27",
    q: "Quelle politique Route 53 permet d'envoyer 20% du trafic vers une nouvelle version d'une application pour un A/B testing ?",
    choices: ["A. Failover Routing","B. Weighted Routing — assigner Weight=20 au nouveau record et Weight=80 à l'ancien","C. Latency-Based Routing","D. Geolocation Routing avec 20% des régions vers le nouveau"],
    answer: 1,
    exp: "Weighted Routing Route 53 : chaque enregistrement reçoit un 'weight' (0-255). Le pourcentage de trafic est proportionnel : weight/(somme des weights). Pour 20% sur le nouveau : Weight=20 sur le nouveau record, Weight=80 sur l'ancien. Total = 100, donc 20% → nouveau, 80% → ancien. Utile pour canary deployments et A/B testing."
  },
  {
    id: "aws-soa-c03-j5-28",
    q: "Qu'est-ce que Global Accelerator et comment diffère-t-il de CloudFront ?",
    choices: ["A. Global Accelerator : accélère le trafic TCP/UDP vers des applications en utilisant le réseau AWS privé et des anycast IPs statiques. CloudFront : CDN pour le contenu HTTP/S avec caching aux edge locations","B. Global Accelerator cache le contenu comme CloudFront","C. Global Accelerator est un DNS service, CloudFront est un CDN","D. Les deux servent le même objectif mais Global Accelerator est plus récent"],
    answer: 0,
    exp: "Global Accelerator : fournit 2 anycast IP statiques mondiales, route le trafic sur le réseau interne AWS depuis la edge location la plus proche (réduit la latence et les pertes de paquets). Idéal pour TCP/UDP non-HTTP, gaming, VoIP, IoT, et HTTP avec IP statiques requises. CloudFront : CDN avec caching, pour HTTP/HTTPS avec TTL. GA n'a pas de caching."
  },
  {
    id: "aws-soa-c03-j5-29",
    q: "Route 53 Resolver : qu'est-ce que les 'Resolver Endpoints' et à quoi servent-ils ?",
    choices: ["A. Inbound Endpoint : permet aux serveurs DNS on-premise de résoudre les noms de domaine AWS (VPC). Outbound Endpoint : permet aux instances EC2 de résoudre les noms on-premise","B. Les deux types d'endpoints sont identiques","C. Resolver Endpoints remplacent les private hosted zones","D. Les Resolver Endpoints ne fonctionnent qu'avec Direct Connect"],
    answer: 0,
    exp: "Route 53 Resolver Endpoints permettent la résolution DNS hybride : Inbound Endpoint (DNS on-premise → peut résoudre *.vpc.internal dans AWS), Outbound Endpoint (instances EC2 → peuvent résoudre *.corp.internal on-premise via des Forwarding Rules qui pointent vers les DNS on-premise). Essentiel pour les architectures hybrides."
  },
  {
    id: "aws-soa-c03-j5-30",
    q: "Comment CloudFront gère-t-il les requêtes avec des query strings dans la clé de cache ?",
    choices: ["A. CloudFront ignore toujours les query strings","B. Par défaut, CloudFront ignore les query strings — configurable pour les inclure dans la clé de cache (Forward All, Forward Whitelist)","C. CloudFront inclut toujours toutes les query strings dans la clé de cache","D. Les query strings ne peuvent pas être utilisées avec CloudFront"],
    answer: 1,
    exp: "Par défaut, CloudFront ignore les query strings (ne les inclut pas dans la clé de cache). Tous les objets avec ou sans query string partagent le même objet caché. Pour les APIs dynamiques, configurer 'Forward: All' (inclut les query strings dans la clé) ou 'Forward: Whitelist' (uniquement certains paramètres). L'option 'None+Forward' permet de passer les query strings à l'origine sans les cacher."
  },
  {
    id: "aws-soa-c03-j5-31",
    q: "Qu'est-ce que la stratégie DR 'Multi-Site Active/Active' et quel est son RTO ?",
    choices: ["A. Les deux sites sont actifs simultanément, le trafic est distribué entre eux — RTO quasi nul (le site restant absorbe le trafic)","B. Un site actif, l'autre en attente — RTO de quelques minutes","C. Les deux sites sont actifs mais un seul reçoit du trafic — RTO de 15-30 minutes","D. Active/Active nécessite des serveurs physiques dédiés — non applicable au cloud"],
    answer: 0,
    exp: "Multi-Site Active/Active : les deux (ou plus) régions reçoivent du trafic simultanément (via Route 53 Latency-Based ou Weighted Routing). En cas de panne d'une région, le trafic est redirigé automatiquement vers l'autre. RTO ≈ 0 (le site restant déjà en production absorbe le trafic). Coût élevé (infrastructure dupliquée). Idéal pour les applications critiques avec RTO/RPO de secondes."
  },
  {
    id: "aws-soa-c03-j5-32",
    q: "Comment configurer Route 53 pour résoudre le problème de 'split-view DNS' (noms internes différents des noms externes) ?",
    choices: ["A. Créer un enregistrement CNAME avec un TTL bas","B. Créer deux hosted zones avec le même domaine : une public (internet) et une private (associée au VPC) — Route 53 retourne automatiquement la réponse privée pour les requêtes depuis le VPC","C. Utiliser deux comptes AWS distincts pour les DNS internes et externes","D. Modifier le resolver DNS dans les instances EC2"],
    answer: 1,
    exp: "Split-view DNS dans Route 53 : créer une hosted zone publique (example.com) et une private hosted zone avec le même nom (example.com) associée au VPC. Les requêtes depuis le VPC retournent les réponses de la zone privée (IPs internes), les requêtes depuis internet retournent les réponses publiques. Transparent pour les applications."
  },
  {
    id: "aws-soa-c03-j5-33",
    q: "Quelle est la différence entre les stratégies DR 'Pilot Light' et 'Warm Standby' ?",
    choices: ["A. Pilot Light : seule l'infrastructure core (DB) tourne en DR, le scale-out est nécessaire lors du failover. Warm Standby : infrastructure DR minimale mais fonctionnelle en permanence (pas besoin de provisionner lors du failover)","B. Les deux sont identiques — différence de terminologie uniquement","C. Pilot Light a un RTO plus court que Warm Standby","D. Warm Standby utilise des instances Spot, Pilot Light des On-Demand"],
    answer: 0,
    exp: "Pilot Light : seules les composantes critiques tournent (ex: réplication DB) — le reste est arrêté ou en AMI. Lors du failover, démarrer les instances et configurer DNS. RTO : minutes à heures. Warm Standby : infrastructure complète mais à échelle réduite (ex: 2 instances vs 10). Lors du failover, scale out. RTO : minutes. Warm Standby > coût et > RTO garanti que Pilot Light."
  },
  {
    id: "aws-soa-c03-j5-34",
    q: "Comment optimiser les coûts CloudFront pour servir du contenu depuis S3 ?",
    choices: ["A. Utiliser CloudFront avec une Origin Access Control (OAC) pour S3 — le trafic reste sur le réseau AWS et les transferts S3 vers CloudFront sont gratuits","B. Utiliser S3 Transfer Acceleration à la place de CloudFront","C. Payer par région CloudFront pour optimiser la couverture géographique","D. Désactiver CloudFront et servir directement depuis S3"],
    answer: 0,
    exp: "Avec CloudFront + S3 OAC : 1) Le transfert de données entre S3 et CloudFront (intra-région) est gratuit. 2) CloudFront réduit les requêtes vers S3 (caching). 3) Les frais CloudFront pour les utilisateurs finaux sont moins chers que les frais S3 direct. 4) OAC (Origin Access Control) garantit que seul CloudFront peut accéder au bucket S3 (plus sécurisé qu'OAI)."
  },
  {
    id: "aws-soa-c03-j5-35",
    q: "Qu'est-ce que le 'Route 53 Resolver DNS Firewall' et quel problème résout-il ?",
    choices: ["A. Un firewall qui protège les serveurs DNS Route 53 contre les attaques DDoS","B. Un service qui filtre les requêtes DNS depuis les instances VPC pour bloquer l'accès à des domaines malveillants (C&C, phishing)","C. Un firewall qui bloque les accès DNS depuis internet vers les private hosted zones","D. Un VPN qui chiffre les requêtes DNS dans le VPC"],
    answer: 1,
    exp: "Route 53 Resolver DNS Firewall permet de créer des règles qui filtrent les requêtes DNS depuis les instances VPC : bloquer les domaines malveillants (liste AWS Managed : botnet, malware, phishing), autoriser uniquement les domaines approuvés (allowlist), ou alerter sur des accès suspects. Protège contre les exfiltrations de données via DNS et les connexions vers des serveurs C&C."
  },
  {
    id: "aws-soa-c03-j5-36",
    q: "Comment CloudFront gère-t-il les origines multiples (multi-origin) avec des comportements de cache différents ?",
    choices: ["A. CloudFront ne supporte qu'une seule origine par distribution","B. Configurer plusieurs 'Cache Behaviors' (par path pattern) sur la même distribution, chacun pointant vers une origine différente","C. Utiliser plusieurs distributions CloudFront et un DNS pour router entre elles","D. CloudFront distribue automatiquement entre plusieurs origines avec round-robin"],
    answer: 1,
    exp: "Une distribution CloudFront supporte plusieurs origines et comportements de cache (Cache Behaviors) par path pattern. Exemple : /api/* → ALB (pas de cache), /static/* → S3 (cache long), /* → ALB (cache court). Les behaviors sont évalués dans l'ordre de spécificité. Cela permet une architecture flexible avec caching optimisé par type de contenu."
  },
  {
    id: "aws-soa-c03-j5-37",
    q: "Un SysOps admin observe des délais importants dans la résolution DNS Route 53. Quelle est la cause la plus probable ?",
    choices: ["A. Route 53 est surchargé — il faut demander une augmentation de capacité","B. Le TTL des enregistrements est très bas (ex: 60s) — les caches DNS resolver expirent fréquemment et interrogent Route 53","C. Les health checks consomment trop de bande passante","D. Le nombre de zones hébergées est trop élevé"],
    answer: 1,
    exp: "Un TTL bas (60s) force chaque resolver DNS à interroger Route 53 toutes les minutes au lieu d'utiliser la réponse en cache. Cela augmente la latence (aller-retour vers Route 53) et les coûts (nombre de queries). Un TTL plus élevé (300s, 3600s) améliore la performance mais ralentit la propagation des changements DNS. Équilibre selon les besoins de mobilité."
  },
  {
    id: "aws-soa-c03-j5-38",
    q: "Quelle est la stratégie recommandée pour CloudFront et les certificats SSL/TLS ?",
    choices: ["A. Utiliser un certificat ACM dans n'importe quelle région AWS","B. Utiliser un certificat ACM provisionné obligatoirement dans us-east-1 (N. Virginia) pour les distributions CloudFront","C. Utiliser uniquement des certificats auto-signés pour CloudFront","D. CloudFront ne supporte pas HTTPS — utiliser ALB pour SSL termination"],
    answer: 1,
    exp: "CloudFront est un service global dont la présence régionale centralisée pour la gestion des certificats est us-east-1. Les certificats ACM pour CloudFront DOIVENT être créés dans la région us-east-1 (même si votre infrastructure est dans eu-west-1). C'est une restriction technique de CloudFront. ACM renouvelle automatiquement les certificats."
  },
  {
    id: "aws-soa-c03-j5-39",
    q: "Comment Route 53 gère-t-il les requêtes DNS vers des zones privées depuis des VPCs dans d'autres comptes AWS ?",
    choices: ["A. Les private hosted zones ne sont accessibles que depuis des VPCs dans le même compte","B. Associer la private hosted zone à des VPCs dans d'autres comptes via une autorisation cross-account (CreateVPCAssociationAuthorization + AssociateVPCWithHostedZone)","C. Utiliser le VPC peering pour partager les zones DNS","D. Utiliser AWS RAM (Resource Access Manager) pour partager les zones privées"],
    answer: 1,
    exp: "Pour associer une private hosted zone à un VPC dans un autre compte : 1) Dans le compte de la zone : CreateVPCAssociationAuthorization (autorise le VPC spécifique). 2) Dans le compte du VPC : AssociateVPCWithHostedZone. 3) Supprimer l'autorisation (facultatif). Les VPCs en d'autres comptes peuvent alors résoudre les noms dans la zone privée."
  },
  {
    id: "aws-soa-c03-j5-40",
    q: "Quel est le comportement de CloudFront quand l'origine retourne une erreur 5xx ?",
    choices: ["A. CloudFront retourne immédiatement l'erreur au client","B. CloudFront peut cacher les pages d'erreur personnalisées et retenter l'origine selon la politique de retry configurée","C. CloudFront bascule automatiquement vers une origine secondaire","D. CloudFront retourne toujours une erreur 503 générique"],
    answer: 1,
    exp: "CloudFront peut configurer des 'Custom Error Responses' : pour des codes d'erreur spécifiques (500, 502, 503, 504), retourner une page d'erreur personnalisée depuis S3 avec un TTL cache. CloudFront retente automatiquement vers l'origine en cas d'erreur 5xx (Origin Connection Attempts). Pour le basculement automatique, configurer Origin Group avec Origin Failover."
  },
  {
    id: "aws-soa-c03-j5-41",
    q: "Quelle fonctionnalité Route 53 permet de créer des enregistrements DNS basés sur des politiques de localisation précises (état américain, pays, continent) ?",
    choices: ["A. Latency-Based Routing","B. Geolocation Routing avec des granularités continent, pays, ou état US","C. Geoproximity Routing avec des bias values","D. IP-based Routing avec des préfixes CIDR"],
    answer: 1,
    exp: "Geolocation Routing : route basé sur la localisation géographique détectée par l'IP. Granularité : continent, pays, et états des États-Unis. Utile pour : servir du contenu localisé par langue/région, respecter des réglementations (RGPD), ou diriger vers des datacenters régionaux. Toujours définir un enregistrement 'default' pour les IP non mappées."
  },
  {
    id: "aws-soa-c03-j5-42",
    q: "Comment implémenter un déploiement Canary avec CloudFront pour tester une nouvelle version sur 5% du trafic ?",
    choices: ["A. Modifier le TTL de CloudFront pour 5% des objets","B. Utiliser Lambda@Edge pour inspecter les requêtes et router 5% vers l'origine nouvelle version","C. Configurer deux distributions CloudFront et un DNS Weighted Record à 5%/95%","D. B ou C sont deux approches valides"],
    answer: 3,
    exp: "Deux approches : 1) Lambda@Edge sur CloudFront : inspecter la requête, ajouter un cookie/header pour router 5% vers un path différent ou une origine alternative. 2) Deux distributions CloudFront + Route 53 Weighted Record (5% → nouvelle distribution, 95% → ancienne). L'option Lambda@Edge est plus fine et peut utiliser des critères plus complexes (AB testing par user segment)."
  },
  {
    id: "aws-soa-c03-j5-43",
    q: "Un ops admin doit s'assurer que les enregistrements DNS Route 53 sont mis à jour automatiquement quand des instances EC2 sont lancées par un ASG. Quelle approche utiliser ?",
    choices: ["A. Route 53 met à jour automatiquement les enregistrements pour les instances ASG","B. Utiliser une Lambda déclenchée par un Lifecycle Hook ASG (EC2_INSTANCE_LAUNCHING) pour créer/supprimer les enregistrements Route 53","C. Utiliser AWS Service Discovery (Cloud Map) qui s'intègre avec Route 53 et ECS/EKS/EC2","D. B et C sont deux approches valides selon le contexte"],
    answer: 3,
    exp: "Deux approches : 1) Lifecycle Hook + Lambda : hook lors du lancement/terminaison d'instances, Lambda appelle l'API Route 53 pour créer/supprimer les enregistrements. 2) AWS Cloud Map (Service Discovery) : enregistre automatiquement les services et intègre Route 53 pour la résolution DNS. Cloud Map est plus adapté aux microservices, Lambda est plus flexible pour les patterns custom."
  },
  {
    id: "aws-soa-c03-j5-44",
    q: "Quelle est la différence entre CloudFront 'Standard Logs' et 'Real-time Logs' ?",
    choices: ["A. Standard Logs : livraison en batch vers S3 (délai de 24h), Real-time Logs : livraison en quasi temps-réel vers Kinesis Data Streams","B. Standard Logs sont pour les requêtes HTTP, Real-time Logs pour HTTPS","C. Standard Logs sont gratuits, Real-time Logs payants et moins détaillés","D. Les deux sont identiques — différence uniquement de format"],
    answer: 0,
    exp: "CloudFront Standard Logs : agrégés et livrés vers S3 avec un délai de quelques heures, utiles pour l'analyse a posteriori. Real-time Logs : livraison en temps réel (<1 seconde) vers Kinesis Data Streams, puis vers Elasticsearch, S3, ou Redshift. Configurables par cache behavior. Real-time Logs permettent l'analyse en direct du trafic CloudFront."
  },
  {
    id: "aws-soa-c03-j5-45",
    q: "Un SysOps admin doit configurer Route 53 pour résoudre des noms internes comme 'db.internal' depuis les instances EC2. Quelle est la solution la plus simple ?",
    choices: ["A. Modifier le fichier /etc/hosts sur chaque instance","B. Créer une Private Hosted Zone 'internal' associée au VPC et ajouter un enregistrement A pour 'db.internal'","C. Configurer un serveur BIND DNS dans le VPC","D. Utiliser des IPs ElasticIP avec des noms courts dans les Security Groups"],
    answer: 1,
    exp: "La solution native AWS : créer une Private Hosted Zone 'internal' (ou tout nom de domaine interne) associée au VPC. Ajouter les enregistrements A/CNAME nécessaires. Les instances EC2 dans le VPC associé résolvent automatiquement ces noms via le resolver Route 53 (169.254.169.253). Simple, managé, sans serveur DNS à maintenir."
  },
  {
    id: "aws-soa-c03-j5-46",
    q: "Qu'est-ce que CloudFront Origin Access Control (OAC) et pourquoi remplace-t-il OAI ?",
    choices: ["A. OAC restreint l'accès au bucket S3 origin uniquement à CloudFront, supporte les nouveaux services S3 (SSE-KMS, S3 Object Lambda, S3 static sites) là où OAI échouait","B. OAC est l'ancienne méthode, OAI est la nouvelle","C. OAC est pour les origines HTTP, OAI pour les origines S3","D. Les deux sont identiques avec des noms différents selon la région"],
    answer: 0,
    exp: "Origin Access Control (OAC) remplace Origin Access Identity (OAI) pour les distributions CloudFront vers S3. OAC supporte : SSE-KMS (chiffrement S3 avec CMK), S3 dans toutes les régions (y compris nouvelles régions), S3 Object Lambda, S3 static website hosting. OAI ne supportait pas SSE-KMS et était limité à certains services. AWS recommande de migrer vers OAC."
  },
  {
    id: "aws-soa-c03-j5-47",
    q: "Comment configurer un domaine apex (example.com sans www) avec HTTPS sur CloudFront ?",
    choices: ["A. Impossible — les domaines apex ne supportent pas les certificats SSL","B. Créer un certificat ACM dans us-east-1 avec example.com + www.example.com dans les SANs, créer une distribution CloudFront, et créer un Alias Record Route 53 pour example.com → CloudFront","C. Utiliser un CNAME pour example.com pointant vers CloudFront","D. Utiliser un NLB avec une Elastic IP pour l'apex HTTPS"],
    answer: 1,
    exp: "Pour un domaine apex avec HTTPS CloudFront : 1) Certificat ACM (us-east-1) avec example.com dans les CN ou SANs. 2) Distribution CloudFront avec le certificat ACM et alternate domain names (example.com, www.example.com). 3) Route 53 Alias Record pour example.com → distribution CloudFront (Alias fonctionne à l'apex, contrairement à CNAME). 4) Optionnel : Lambda@Edge pour rediriger example.com vers www."
  },
  {
    id: "aws-soa-c03-j5-48",
    q: "Quelle est la stratégie pour réduire les coûts Route 53 dans un environnement avec des milliers de requêtes DNS par seconde ?",
    choices: ["A. Augmenter les TTL des enregistrements pour réduire le nombre de requêtes vers Route 53","B. Supprimer les health checks coûteux","C. Utiliser des private hosted zones à la place des public hosted zones","D. Migrer vers un DNS provider moins cher"],
    answer: 0,
    exp: "La stratégie principale pour réduire les coûts Route 53 est d'augmenter les TTL des enregistrements DNS. Les requêtes DNS sont facturées à $0.40/million pour le premier milliard. Un TTL de 300s au lieu de 60s réduit les requêtes de 5x. Les health checks coûtent séparément ($0.50/check/mois pour HTTP). Équilibre entre coût et temps de propagation des changements."
  },
  {
    id: "aws-soa-c03-j5-49",
    q: "Comment tester le failover Route 53 en production sans interruption de service ?",
    choices: ["A. Désactiver manuellement le service primaire et observer le comportement","B. Configurer un health check secondaire basé sur une URL de test, puis désactiver ce check pour simuler un failover — sans toucher au service réel","C. Utiliser Route 53 Application Recovery Controller (ARC) avec des readiness checks pour valider la configuration DR","D. B et C sont deux approches valides pour des tests non-destructifs"],
    answer: 3,
    exp: "Deux approches de test non-destructif : 1) Health check sur une URL de test (/healthcheck-test) que vous pouvez 'casser' indépendamment du vrai service — simule un failover Route 53 sans impact. 2) Route 53 Application Recovery Controller (ARC) : valide la readiness des stacks DR et permet des tests de failover contrôlés avec tableau de bord dédié. ARC est la solution AWS recommandée pour les tests DR formels."
  },
  {
    id: "aws-soa-c03-j5-50",
    q: "Quelle est la valeur TTL recommandée pour les enregistrements Route 53 avant une migration ou un basculement DNS planifié ?",
    choices: ["A. Augmenter le TTL à 86400s (24h) pour réduire les requêtes DNS","B. Réduire le TTL à 60s plusieurs jours avant le changement, effectuer le changement, puis remonter le TTL","C. Le TTL n'a pas d'impact sur la vitesse de propagation DNS","D. Supprimer et recréer les enregistrements pour forcer la propagation immédiate"],
    answer: 1,
    exp: "Stratégie pre-migration DNS : 1) Plusieurs jours avant : réduire le TTL à 60s (ou moins). Attendre que tous les caches DNS mondiaux expirent leur cache (attendre la durée de l'ancien TTL). 2) Effectuer le changement DNS. 3) Vérifier que le trafic bascule. 4) Après validation : remonter le TTL à une valeur normale (300s ou 3600s). Cette approche garantit une propagation rapide lors du changement."
  }
]=[
{id:"aws-soa-c03-j5-1",q:"Quelle politique de routing Route 53 dirige le trafic vers la ressource saine la plus proche de l'utilisateur ?",choices:["A. Weighted Routing","B. Latency-based Routing avec Health Checks","C. Geolocation Routing","D. Failover Routing"],answer:1,exp:"Latency-based Routing dirige les requêtes vers la région AWS avec la plus faible latence réseau pour l'utilisateur. Combiné avec des Health Checks, si la ressource la plus proche est unhealthy, Route 53 bascule automatiquement vers la prochaine meilleure option. Différent de Geolocation (basé sur la localisation géographique, pas la latence)."},
{id:"aws-soa-c03-j5-2",q:"Quel type d'enregistrement Route 53 est OBLIGATOIRE pour pointer un domaine apex (example.com sans sous-domaine) vers un ALB ?",choices:["A. CNAME record","B. A record avec l'IP de l'ALB","C. Alias record (type A ou AAAA)","D. TXT record"],answer:2,exp:"Un CNAME ne peut pas être créé pour un apex de domaine (zone apex). La solution AWS est l'Alias Record : Route 53 gère la résolution vers les ressources AWS (ALB, CloudFront, S3, etc.) sans exposer d'IP. Gratuit pour les requêtes vers des ressources AWS dans la même hosted zone. Mise à jour automatique si l'IP de l'ALB change."},
{id:"aws-soa-c03-j5-3",q:"Un health check Route 53 marque une ressource comme unhealthy. Après combien d'échecs consécutifs (par défaut) ?",choices:["A. 1 échec","B. 3 échecs","C. 5 échecs","D. 10 échecs"],answer:1,exp:"Par défaut, Route 53 considère une ressource unhealthy après 3 vérifications consécutives échouées. Les health checkers Route 53 sont distribués mondialement. La fréquence par défaut est 30 secondes (ou 10 secondes en mode rapide). Configurable entre 1 et 10 échecs consécutifs."},
{id:"aws-soa-c03-j5-4",q:"Quelle stratégie de Disaster Recovery offre le RTO le plus bas ?",choices:["A. Backup and Restore","B. Pilot Light","C. Warm Standby","D. Multi-Site Active/Active"],answer:3,exp:"Multi-Site Active/Active : les deux sites gèrent du trafic simultanément, donc le RTO est quasi nul (minutes à secondes — juste le temps de rediriger le DNS). Warm Standby : minutes. Pilot Light : minutes à heures. Backup and Restore : heures à jours. Le coût augmente avec le RTO décroissant."},
{id:"aws-soa-c03-j5-5",q:"Qu'est-ce que CloudFront Origin Shield ?",choices:["A. Un WAF intégré qui protège l'origine","B. Une couche de cache supplémentaire entre les edge locations et l'origine pour réduire la charge sur l'origine","C. Un certificat SSL/TLS pour l'origine","D. Une IP dédiée pour les connexions origin-edge"],answer:1,exp:"Origin Shield est une couche de cache centralisée entre les PoPs CloudFront et l'origine. Avantages : réduit les cache misses qui atteignent l'origine (consolidation des requêtes), diminue la charge sur l'origine, améliore la disponibilité. Idéal quand l'origine est une ressource limité (serveur on-prem, API coûteuse)."},
{id:"aws-soa-c03-j5-6",q:"Route 53 Failover Routing nécessite un enregistrement primaire et un secondaire. Quel type d'enregistrement Route 53 doit être ACTIVE pour que le failover fonctionne ?",choices:["A. Les deux enregistrements doivent avoir le même TTL","B. L'enregistrement primaire doit avoir un Health Check associé","C. L'enregistrement secondaire ne peut pas être un Alias","D. Les deux enregistrements doivent être dans la même région"],answer:1,exp:"Pour le Failover Routing, l'enregistrement PRIMARY doit avoir un Health Check associé. Si le primary est unhealthy, Route 53 bascule vers le SECONDARY. L'enregistrement secondary peut aussi avoir un health check (optionnel). Les deux peuvent être des Alias. Le TTL n'a pas besoin d'être identique."},
{id:"aws-soa-c03-j5-7",q:"Quelle est la différence entre CloudFront TTL et la directive Cache-Control max-age ?",choices:["A. CloudFront TTL override toujours Cache-Control","B. Cache-Control max-age override toujours CloudFront TTL","C. CloudFront utilise Cache-Control si présent, sinon utilise le Default TTL configuré. Les Min/Max TTL CloudFront bornent la valeur finale","D. Les deux sont indépendants et CloudFront ignore les headers HTTP"],answer:2,exp:"CloudFront respecte Cache-Control max-age/s-maxage si l'objet a ces headers ET si la valeur est entre CloudFront Min TTL et Max TTL. Si max-age < Min TTL, CloudFront utilise Min TTL. Si max-age > Max TTL, CloudFront utilise Max TTL. Si pas de Cache-Control, CloudFront utilise Default TTL."},
{id:"aws-soa-c03-j5-8",q:"Un SysOps admin doit s'assurer que les utilisateurs peuvent accéder aux ressources même si une région AWS entière tombe. Quelle configuration Route 53 est nécessaire ?",choices:["A. Route 53 avec Latency-based Routing vers deux régions + Health Checks","B. Route 53 avec Failover Routing vers deux régions + Health Checks sur chaque endpoint","C. Route 53 avec Weighted Routing 50/50 vers deux régions","D. A et B sont toutes deux valides"],answer:3,exp:"A et B fonctionnent toutes les deux. Latency-based avec health checks : les utilisateurs vont vers la région la plus rapide, et en cas de panne, Route 53 bascule automatiquement. Failover : une région primaire, l'autre secondaire avec basculement automatique. Weighted 50/50 sans health checks ne bascule PAS automatiquement."},
{id:"aws-soa-c03-j5-9",q:"Comment invalider le cache CloudFront pour forcer la mise à jour d'un fichier spécifique ?",choices:["A. Changer le TTL du comportement CloudFront à 0","B. Créer une invalidation CloudFront pour le chemin de l'objet (ex: /images/logo.png ou /*)","C. Vider manuellement le cache sur chaque edge location","D. Supprimer et recréer la distribution CloudFront"],answer:1,exp:"Les invalidations CloudFront forcent les edge locations à récupérer une nouvelle version depuis l'origine à la prochaine requête. On peut invalider un fichier spécifique (/path/file.jpg) ou des chemins avec wildcard (/images/*). Les 1,000 premières invalidations par mois sont gratuites. Alternative : versionner les fichiers (logo_v2.png)."},
{id:"aws-soa-c03-j5-10",q:"Quelle stratégie DR correspond à : 'Les ressources minimales (DB, quelques instances) tournent en permanence dans la région DR, mais le trafic n'y est pas encore dirigé' ?",choices:["A. Backup and Restore","B. Pilot Light","C. Warm Standby","D. Multi-Site Active/Active"],answer:1,exp:"Pilot Light : les composants critiques (base de données avec réplication, infrastructure de base) tournent en permanence mais au minimum. En cas de disaster, on 'allume' rapidement le reste (scale out les instances, modifier le DNS). Warm Standby va plus loin : tous les composants tournent, juste sous-dimensionnés."},
{id:"aws-soa-c03-j5-11",q:"Un utilisateur accède à votre site CloudFront depuis la France. Dans quel ordre CloudFront cherche-t-il l'objet ?",choices:["A. Région S3 d'origine → Edge Location Paris → Navigateur","B. Edge Location Paris → Regional Edge Cache → Origin","C. Navigateur → Edge Paris → Origin → Cache global","D. Edge Paris uniquement, sans passer par un cache régional"],answer:1,exp:"Hiérarchie de cache CloudFront (depuis la requête client) : 1) Edge Location locale (Paris) → si cache miss : 2) Regional Edge Cache (niveau intermédiaire) → si cache miss : 3) Origin (S3, ALB, etc.). Origin Shield est une couche optionnelle supplémentaire entre le Regional Cache et l'Origin."},
{id:"aws-soa-c03-j5-12",q:"Qu'est-ce que Route 53 Resolver ?",choices:["A. Un service qui résout les noms DNS pour les enregistrements Route 53 uniquement","B. Un service DNS qui permet la résolution DNS entre VPC et réseaux on-premises via endpoints inbound/outbound","C. Un load balancer DNS qui distribue les requêtes entre plusieurs nameservers","D. Un service de cache DNS pour accélérer la résolution"],answer:1,exp:"Route 53 Resolver facilite la résolution DNS hybride entre VPC et réseaux on-premises. Inbound Endpoint : permet aux serveurs on-prem de résoudre des noms DNS dans le VPC. Outbound Endpoint : permet aux instances EC2 de résoudre des noms DNS on-prem. Les Forwarding Rules définissent quels domaines sont résolus où."},
{id:"aws-soa-c03-j5-13",q:"Quelle est la différence entre les Signed URLs et les Signed Cookies CloudFront ?",choices:["A. Signed URLs limitent l'accès à un seul fichier ; Signed Cookies permettent l'accès à plusieurs fichiers avec une seule authentification","B. Signed Cookies sont plus sécurisés que les Signed URLs","C. Signed URLs expirent automatiquement, les Signed Cookies non","D. Les Signed Cookies nécessitent HTTPS, les Signed URLs fonctionnent en HTTP"],answer:0,exp:"Signed URLs : restrictes l'accès à un seul objet spécifique. Idéal pour distribuer des téléchargements individuels (factures PDF, vidéos spécifiques). Signed Cookies : restreignent l'accès à plusieurs objets ou à des patterns de chemins. Idéal pour les sites avec contenu premium (toutes les vidéos d'un cours, tous les fichiers d'un abonnement)."},
{id:"aws-soa-c03-j5-14",q:"Route 53 Weighted Routing avec un poids de 0 sur un enregistrement. Que se passe-t-il ?",choices:["A. L'enregistrement reçoit 0% du trafic et est effectivement désactivé","B. L'enregistrement reçoit autant de trafic que les autres enregistrements","C. L'enregistrement reçoit 1% du trafic minimum","D. Route 53 retourne une erreur"],answer:0,exp:"Un poids de 0 signifie que Route 53 n'envoie aucune requête vers cet enregistrement. Si TOUS les enregistrements ont un poids de 0, Route 53 les traite tous de façon équitable (comme si tous avaient un poids). Utile pour désactiver temporairement un endpoint sans le supprimer."},
{id:"aws-soa-c03-j5-15",q:"Comment AWS Global Accelerator diffère-t-il de CloudFront ?",choices:["A. Global Accelerator optimise les applications TCP/UDP non-HTTP ; CloudFront est spécifique au HTTP/HTTPS avec cache","B. CloudFront est plus rapide que Global Accelerator pour toutes les requêtes","C. Global Accelerator ne supporte pas les ALB","D. CloudFront utilise les IP Anycast comme Global Accelerator"],answer:0,exp:"Global Accelerator utilise des IP Anycast stables et le réseau AWS pour acheminer le trafic TCP/UDP vers les endpoints les plus proches. Idéal pour les applications non-HTTP (gaming UDP, IoT, VoIP) et les API sensibles à la latence. CloudFront est un CDN avec cache pour HTTP/HTTPS. Les deux utilisent les edge locations AWS."},
{id:"aws-soa-c03-j5-16",q:"Qu'est-ce que le RPO (Recovery Point Objective) dans le contexte de la business continuity ?",choices:["A. Le temps maximal acceptable pour restaurer un service après une panne","B. La quantité maximale de données qu'on peut se permettre de perdre en cas de panne (exprimée en temps)","C. Le nombre de régions nécessaires pour la redondance","D. Le budget alloué à la récupération après sinistre"],answer:1,exp:"RPO = Recovery Point Objective : la quantité maximale de données qu'on accepte de perdre, exprimée en temps. RPO = 1h signifie qu'on peut perdre 1 heure de données au maximum. RTO = Recovery Time Objective : le temps maximal acceptable pour remettre le service en ligne. DR strategies : RPO/RTO plus bas = coût plus élevé."},
{id:"aws-soa-c03-j5-17",q:"CloudFront peut distribuer du contenu dynamique (non mis en cache). Comment configure-t-on CloudFront pour ne PAS mettre en cache certaines requêtes ?",choices:["A. Désactiver CloudFront pour ces URL","B. Configurer un comportement (behavior) avec TTL minimum = 0 et TTL par défaut = 0","C. Utiliser Cache-Control: no-cache dans les headers de l'origine","D. B ou C fonctionnent — le TTL 0 ou no-cache empêche la mise en cache"],answer:3,exp:"Deux méthodes : 1) Comportement CloudFront avec TTL Min et Default à 0 (CloudFront ne cache pas). 2) L'origine retourne Cache-Control: no-cache ou max-age=0 (CloudFront respecte ces headers). Les deux sont valides. Option C seule suffit si l'origine contrôle ses headers. Option B est côté CloudFront."},
{id:"aws-soa-c03-j5-18",q:"Quelle est la TTL minimum pour les enregistrements Route 53 dans une Hosted Zone privée ?",choices:["A. 0 secondes","B. 1 seconde","C. 60 secondes","D. 300 secondes"],answer:1,exp:"La TTL minimum pour Route 53 est de 1 seconde (pour les hosted zones publiques et privées). Une TTL très basse permet des changements rapides mais augmente le nombre de requêtes DNS (et les coûts). Pour le failover rapide, une TTL de 60 secondes est souvent recommandée."},
{id:"aws-soa-c03-j5-19",q:"Dans une architecture CloudFront + S3, comment sécuriser l'accès au bucket S3 pour qu'il ne soit accessible que via CloudFront ?",choices:["A. Mettre le bucket S3 en mode privé et utiliser une Origin Access Control (OAC) ou Origin Access Identity (OAI)","B. Configurer un security group sur le bucket S3","C. Activer le chiffrement SSE-S3","D. Configurer un VPC endpoint pour S3"],answer:0,exp:"Origin Access Control (OAC, recommandé) ou Origin Access Identity (OAI, legacy) permettent à CloudFront de s'authentifier auprès de S3 avec une identité spéciale. La bucket policy S3 autorise seulement cette identité, bloquant l'accès direct au bucket depuis Internet. OAC supporte SSE-KMS contrairement à OAI."},
{id:"aws-soa-c03-j5-20",q:"Geolocation Routing Route 53 dirige le trafic vers des ressources différentes selon la localisation des utilisateurs. Que se passe-t-il si un utilisateur provient d'un pays pour lequel aucun enregistrement n'est configuré ?",choices:["A. Route 53 retourne NXDOMAIN (aucune réponse)","B. Route 53 utilise l'enregistrement Default si configuré, sinon retourne NXDOMAIN","C. Route 53 bascule automatiquement vers Latency-based Routing","D. Route 53 utilise l'enregistrement le plus proche géographiquement"],answer:1,exp:"Avec Geolocation Routing, si aucun enregistrement ne correspond au pays de l'utilisateur, Route 53 utilise l'enregistrement Default (si configuré). Sans Default, Route 53 retourne NXDOMAIN. Il est donc recommandé de toujours créer un enregistrement Default pour couvrir tous les pays non explicitement configurés."}
];

// ── Jour 6 — Backup et continuité ─────────────────────────────────────────────
window.QDATA[6,
  {
    id: "aws-soa-c03-j6-21",
    q: "Qu'est-ce que le RPO (Recovery Point Objective) et comment l'atteindre avec RDS ?",
    choices: ["A. RPO = durée maximum d'interruption acceptable. Se réduit avec Multi-AZ","B. RPO = perte de données maximale acceptable. Se réduit avec des sauvegardes plus fréquentes, réplication synchrone (Multi-AZ) ou des read replicas cross-région","C. RPO = coût de la reprise après sinistre","D. RPO et RTO sont synonymes"],
    answer: 1,
    exp: "RPO (Recovery Point Objective) = quantité maximale de données qu'on peut se permettre de perdre. Pour RDS : Multi-AZ (réplication synchrone) = RPO quasi nul. Automated Backups = RPO = temps depuis la dernière sauvegarde (jusqu'à 5 minutes avec PITR). Read Replica cross-région = RPO = latence de réplication asynchrone. Choisir selon l'objectif RPO métier."
  },
  {
    id: "aws-soa-c03-j6-22",
    q: "Comment AWS DynamoDB assure-t-il la haute disponibilité par défaut ?",
    choices: ["A. Les données DynamoDB sont répliquées dans 3 AZ d'une région automatiquement","B. DynamoDB nécessite une configuration Multi-AZ manuelle comme RDS","C. DynamoDB est un service mono-AZ par défaut","D. La HA DynamoDB nécessite la création de tables Global Tables"],
    answer: 0,
    exp: "DynamoDB réplique automatiquement toutes les données dans 3 zones de disponibilité d'une région. Cette réplication est transparente, sans configuration. SLA = 99.999% disponibilité pour les tables standard. Pas besoin de configurer Multi-AZ manuellement. Pour les régions multiples, utiliser Global Tables (réplication active-active cross-région)."
  },
  {
    id: "aws-soa-c03-j6-23",
    q: "Quelle est la différence entre AWS Backup Vault Lock et S3 Object Lock ?",
    choices: ["A. AWS Backup Vault Lock protège les recovery points dans AWS Backup contre suppression/modification (WORM). S3 Object Lock protège les objets S3 individuellement","B. Les deux sont identiques mais pour des services différents","C. S3 Object Lock est plus sécurisé que Backup Vault Lock","D. Backup Vault Lock est uniquement pour les sauvegardes RDS"],
    answer: 0,
    exp: "AWS Backup Vault Lock : mode WORM sur un vault AWS Backup entier — aucun recovery point ne peut être supprimé avant la période de rétention minimale, même par root. S3 Object Lock : mode WORM sur des objets S3 individuels (Governance ou Compliance). Les deux peuvent être utilisés ensemble pour une protection maximale des sauvegardes."
  },
  {
    id: "aws-soa-c03-j6-24",
    q: "Un SysOps admin configure la réplication S3 Cross-Region. Quels objets sont répliqués par défaut ?",
    choices: ["A. Tous les objets existants et futurs","B. Uniquement les nouveaux objets créés APRÈS l'activation de la règle de réplication","C. Uniquement les objets avec un tag 'replicate=true'","D. Uniquement les objets de moins de 1 GB"],
    answer: 1,
    exp: "S3 CRR/SRR réplique par défaut uniquement les NOUVEAUX objets créés après l'activation de la règle. Les objets existants ne sont PAS répliqués automatiquement. Pour répliquer les objets existants, utiliser S3 Batch Replication (opération ponctuelle sur les objets existants). La réplication est asynchrone — quelques secondes à minutes de délai."
  },
  {
    id: "aws-soa-c03-j6-25",
    q: "Comment configurer RDS pour minimiser le temps de failover en cas de panne de la zone de disponibilité primaire ?",
    choices: ["A. Augmenter la fréquence des snapshots","B. Activer Multi-AZ (synchronous standby) + configurer RDS Proxy pour absorber les reconnexions","C. Créer plusieurs read replicas dans la même AZ","D. Utiliser Aurora Serverless v2"],
    answer: 1,
    exp: "Pour minimiser le temps de failover RDS : 1) Multi-AZ : failover automatique vers le standby en ~1-2 minutes (détection + basculement DNS). 2) RDS Proxy : maintient un pool de connexions — les applications se reconnectent au Proxy sans timeout, le Proxy gère le basculement transparentement. Sans Proxy, les applications doivent gérer la reconnexion. Combo = failover quasi transparent."
  },
  {
    id: "aws-soa-c03-j6-26",
    q: "Qu'est-ce que le 'Point-in-Time Recovery' (PITR) pour DynamoDB et quelle est sa granularité ?",
    choices: ["A. PITR permet de restaurer une table à n'importe quelle seconde dans les 35 derniers jours","B. PITR permet de restaurer à n'importe quel point dans les 35 derniers jours (granularité seconde)","C. PITR permet uniquement de restaurer aux sauvegardes quotidiennes","D. PITR a une granularité de 5 minutes"],
    answer: 1,
    exp: "DynamoDB PITR : restauration à n'importe quel point dans les 35 derniers jours (granularité seconde). La restauration crée une NOUVELLE table (pas de restauration en place). Le PITR est activé/désactivé par table. Coût = stockage des données de sauvegarde. Différent des 'On-Demand Backups' (snapshots complets ponctuels, rétention illimitée)."
  },
  {
    id: "aws-soa-c03-j6-27",
    q: "Un ops admin doit s'assurer que les lambda functions continuent à traiter les messages SQS en cas de pic soudain. Quelle configuration SQS/Lambda utiliser ?",
    choices: ["A. Augmenter manuellement le nombre de lambdas","B. Lambda Event Source Mapping avec SQS : Lambda scale automatiquement (jusqu'à 1000 instances concurrentes pour les queues standard, 10 pour les FIFO)","C. Utiliser SNS à la place de SQS pour le scaling automatique","D. Configurer Reserved Concurrency sur la Lambda"],
    answer: 1,
    exp: "Avec SQS standard comme Event Source Mapping Lambda : Lambda scale automatiquement en fonction du nombre de messages. Pour les queues standard : jusqu'à 1000 exécutions concurrentes par batch. Pour les queues FIFO : jusqu'à 10 par groupe de messages. Lambda peut processer plusieurs batches en parallèle. La queue agit comme buffer pendant les pics."
  },
  {
    id: "aws-soa-c03-j6-28",
    q: "Comment configurer Aurora Global Database pour la reprise après sinistre et quel est son RPO/RTO ?",
    choices: ["A. Aurora Global : RPO < 1 seconde (réplication async ~1s), RTO < 1 minute (failover manuel ou automatique)","B. Aurora Global : RPO = 5 minutes, RTO = 10 minutes","C. Aurora Global : RPO nul, RTO nul (synchrone)","D. Aurora Global ne supporte pas le failover inter-régions"],
    answer: 0,
    exp: "Aurora Global Database : réplication asynchrone cross-région avec un lag typique de <1 seconde. RPO < 1 seconde dans la pratique. RTO : failover manuel = quelques minutes (promouvoir la région secondaire), failover automatique (Managed Failover) = <1 minute. Différent de Multi-AZ (synchrone, même région). Global = cross-région pour le DR."
  },
  {
    id: "aws-soa-c03-j6-29",
    q: "Qu'est-ce que le 'SQS Dead Letter Queue' (DLQ) et quel problème résout-il ?",
    choices: ["A. Une queue pour les messages envoyés par erreur, supprimée automatiquement","B. Une queue qui reçoit les messages qui n'ont pas été traités avec succès après le nombre maximum de tentatives (maxReceiveCount), pour analyse et retraitement","C. Une queue chiffrée pour les messages sensibles","D. Une queue haute priorité pour les messages critiques"],
    answer: 1,
    exp: "SQS DLQ reçoit automatiquement les messages qui ont dépassé le MaxReceiveCount (nombre de fois qu'un message peut être reçu sans être supprimé). Utile pour : identifier les messages problématiques sans perdre les données, analyser les erreurs, retraiter après correction. La DLQ est une queue SQS normale. Configurer une alarme CloudWatch sur ApproximateNumberOfMessagesVisible de la DLQ."
  },
  {
    id: "aws-soa-c03-j6-30",
    q: "Quelle est la différence entre la stratégie DR 'Backup and Restore' et 'Pilot Light' en termes de RTO ?",
    choices: ["A. Backup and Restore : RTO heures à jours (reconstruction complète). Pilot Light : RTO minutes à heures (infrastructure core déjà prête, scale-out nécessaire)","B. Les deux ont le même RTO","C. Backup and Restore a toujours un RTO plus court","D. Pilot Light ne supporte pas le failover automatique"],
    answer: 0,
    exp: "Backup and Restore : RTO le plus long (heures à jours) — il faut restaurer les données depuis les backups, recréer l'infrastructure, reconfigurer. Pilot Light : RTO plus court (minutes à heures) — les composantes core (DB répliquée) tournent, mais il faut démarrer les autres serveurs et les configurer. Warm Standby > Pilot Light (toute l'infra tourne à petite échelle)."
  },
  {
    id: "aws-soa-c03-j6-31",
    q: "Comment implémenter un circuit breaker dans une architecture microservices sur AWS ?",
    choices: ["A. Utiliser AWS App Mesh avec des politiques de retry et timeout","B. Utiliser AWS App Mesh (Envoy proxy) ou des libraries comme Resilience4j/Hystrix dans le code, avec AWS CloudWatch pour détecter les failures","C. Utiliser NLB avec health checks pour désactiver automatiquement les services défaillants","D. Utiliser Lambda avec des retry policies configurées"],
    answer: 1,
    exp: "Le circuit breaker pattern : AWS App Mesh (service mesh basé sur Envoy) fournit des circuit breakers natifs (outlier detection, retry policies, timeout) sans modifier le code. Alternative : libraries dans le code (Resilience4j pour Java, Circuit Breaker pour .NET). Combiné avec CloudWatch métriques pour alerter quand le circuit s'ouvre."
  },
  {
    id: "aws-soa-c03-j6-32",
    q: "Un SysOps admin observe une latence élevée dans une queue SQS. Quelle métrique surveiller ?",
    choices: ["A. SentMessageSize","B. ApproximateAgeOfOldestMessage — indique combien de temps le message le plus ancien attend dans la queue","C. NumberOfMessagesSent","D. SQSErrors"],
    answer: 1,
    exp: "ApproximateAgeOfOldestMessage est la métrique clé pour la latence SQS : elle indique l'âge du message le plus ancien dans la queue (en secondes). Si cette valeur augmente, les messages s'accumulent plus vite qu'ils ne sont traités. Configurer une alarme CloudWatch sur cette métrique pour détecter les backlogs."
  },
  {
    id: "aws-soa-c03-j6-33",
    q: "Quelle fonctionnalité S3 permet d'assurer qu'un objet critique (ex: certificat SSL) ne sera jamais supprimé par erreur, même par un admin ?",
    choices: ["A. S3 Versioning activé + MFA Delete","B. S3 Object Lock en mode Compliance + période de rétention longue — même root ne peut pas supprimer","C. S3 Cross-Region Replication pour avoir des copies","D. IAM Policy avec Deny sur s3:DeleteObject"],
    answer: 1,
    exp: "S3 Object Lock en mode Compliance : aucun utilisateur (y compris root et AWS) ne peut supprimer ou modifier l'objet pendant la période de rétention. Mode Governance : les utilisateurs avec l'autorisation s3:BypassGovernanceRetention peuvent contourner. Pour une protection maximale contre la suppression accidentelle : mode Compliance."
  },
  {
    id: "aws-soa-c03-j6-34",
    q: "Comment fonctionnent les SNS Message Filtering policies ?",
    choices: ["A. SNS filtre les messages selon leur taille — les grands messages sont filtrés","B. Chaque subscription SQS/Lambda peut avoir une 'filter policy' JSON qui ne reçoit que les messages dont les attributs correspondent aux critères définis","C. SNS filtre les messages basé sur l'adresse IP de l'émetteur","D. Les filter policies ne sont disponibles que pour les subscriptions email"],
    answer: 1,
    exp: "SNS Message Filtering : chaque subscription (SQS, Lambda, HTTP, email) peut avoir une filter policy JSON. SNS livre le message uniquement aux subscribers dont la filter policy correspond aux attributs du message. Exemple : filtre {\"event_type\": [\"order_placed\"]} → la subscription ne reçoit que les messages avec l'attribut event_type=order_placed. Réduit le fanout inutile."
  },
  {
    id: "aws-soa-c03-j6-35",
    q: "Quelle est la limite maximale de messages en vol (in-flight) pour une queue SQS standard ?",
    choices: ["A. 1,000 messages","B. 120,000 messages pour les queues standard, 20,000 pour les FIFO","C. 10,000 messages quelle que soit la queue","D. Illimitée"],
    answer: 1,
    exp: "Messages in-flight (reçus mais pas encore supprimés) : queues standard = 120,000 messages max. Queues FIFO = 20,000 messages max. Si la limite est atteinte, ReceiveMessage retourne une erreur. Solution : augmenter le nombre de consumers pour traiter plus rapidement, ou augmenter la visibility timeout pour réduire les relivraisons."
  },
  {
    id: "aws-soa-c03-j6-36",
    q: "Comment AWS Step Functions améliore la résilience d'un workflow complexe ?",
    choices: ["A. Step Functions exécute toutes les étapes en parallèle pour accélérer le traitement","B. Step Functions gère les retry automatiques avec backoff exponentiel, les catch (erreur handling), et maintient l'état du workflow — idéal pour les workflows long-running","C. Step Functions remplace SNS pour la notification d'erreurs","D. Step Functions s'intègre uniquement avec Lambda"],
    answer: 1,
    exp: "Step Functions pour la résilience : 1) Retry automatique avec backoff exponentiel configurable par type d'erreur. 2) Catch blocks pour gérer les erreurs et router vers des chemins alternatifs. 3) État persistant — le workflow reprend là où il s'est arrêté après un retry. 4) Timeout par état et par exécution. 5) Idempotency avec Express vs Standard workflows."
  },
  {
    id: "aws-soa-c03-j6-37",
    q: "Qu'est-ce que le 'SQS Long Polling' et pourquoi est-il recommandé sur le Short Polling ?",
    choices: ["A. Long Polling attend jusqu'à 20 secondes pour qu'un message apparaisse — réduit les requêtes API vides et les coûts vs Short Polling qui interroge immédiatement","B. Long Polling livre les messages plus rapidement","C. Short Polling est recommandé pour les queues FIFO","D. Long Polling est identique au Short Polling mais avec un délai forcé"],
    answer: 0,
    exp: "Short Polling : ReceiveMessage retourne immédiatement (avec ou sans message) — beaucoup de requêtes vides, coûts élevés. Long Polling : ReceiveMessage attend jusqu'à 20 secondes (WaitTimeSeconds=20) qu'un message apparaisse — réduit les requêtes vides de 90%+ et les coûts. Configuration : WaitTimeSeconds > 0 dans ReceiveMessage ou configurer la queue avec ReceiveMessageWaitTimeSeconds."
  },
  {
    id: "aws-soa-c03-j6-38",
    q: "Quelle est la différence entre EventBridge Archive et EventBridge Replay ?",
    choices: ["A. Archive stocke les événements passés, Replay réinjecte des événements archivés dans le bus pour les retraiter","B. Archive est pour les événements d'erreur uniquement","C. Replay crée de nouveaux événements basés sur des patterns","D. Les deux fonctionnalités sont identiques"],
    answer: 0,
    exp: "EventBridge Archive : configure un bus pour stocker une copie de tous les événements (ou filtrés) pendant une période définie (rétention configurable). EventBridge Replay : réinjecte dans un bus des événements archivés pour une période donnée — utile pour retraiter des événements après un bug corrigé, tester une nouvelle règle, ou récupérer après une panne d'une target."
  },
  {
    id: "aws-soa-c03-j6-39",
    q: "Comment configurer RDS Automated Backups pour un RPO de 5 minutes ?",
    choices: ["A. Configurer un snapshot RDS toutes les 5 minutes","B. Activer Automated Backups + Point-in-Time Recovery (PITR) — RDS journalise les transactions toutes les 5 minutes vers S3, permettant une restauration à n'importe quel point","C. Augmenter la fréquence des snapshots à 5 minutes","D. Utiliser DMS pour une réplication continue"],
    answer: 1,
    exp: "RDS PITR avec Automated Backups : RDS archive les transaction logs vers S3 toutes les 5 minutes. Cela permet de restaurer à n'importe quel point dans les dernières X jours (1-35 jours configurables). RPO réel = latence de journalisation des logs (~5 minutes). La restauration crée une nouvelle instance RDS. PITR est inclus dans les Automated Backups."
  },
  {
    id: "aws-soa-c03-j6-40",
    q: "Quelle approche utiliser pour réduire les coûts SQS dans un système avec des milliers de petits messages par seconde ?",
    choices: ["A. Utiliser SNS à la place de SQS","B. SQS Batching : envoyer et recevoir des messages par lots de jusqu'à 10 (SendMessageBatch / ReceiveMessage avec MaxNumberOfMessages=10)","C. Compresser les messages avant envoi","D. Utiliser des queues FIFO au lieu de Standard"],
    answer: 1,
    exp: "SQS est facturé par requête API. SendMessageBatch envoie jusqu'à 10 messages en une seule requête (1 charge = 10 messages). ReceiveMessage avec MaxNumberOfMessages=10 récupère jusqu'à 10 messages. Réduction potentielle des coûts de 10x. Avec Long Polling, réduction supplémentaire des requêtes vides."
  },
  {
    id: "aws-soa-c03-j6-41",
    q: "Quel est le délai maximum de rétention d'un message dans une queue SQS ?",
    choices: ["A. 24 heures","B. 7 jours","C. 14 jours","D. 30 jours"],
    answer: 2,
    exp: "SQS message retention : de 1 minute à 14 jours (1,209,600 secondes). Par défaut : 4 jours. Après la période de rétention, le message est automatiquement supprimé. Pour une rétention plus longue, utiliser S3 (stocker les messages volumineux dans S3 et mettre le pointeur S3 dans le message SQS — Extended Client Library)."
  },
  {
    id: "aws-soa-c03-j6-42",
    q: "Comment implémenter un mécanisme de 'saga pattern' avec compensation pour des transactions distribuées sur AWS ?",
    choices: ["A. Utiliser RDS Multi-AZ avec transactions XA distribuées","B. AWS Step Functions avec des états de compensation (rollback steps) déclenchés en cas d'erreur dans le workflow","C. DynamoDB Transactions pour toutes les opérations cross-services","D. Utiliser SQS FIFO pour garantir l'ordre des opérations"],
    answer: 1,
    exp: "Le Saga Pattern gère les transactions distribuées sans transaction 2PC. Avec Step Functions : 1) Chaque étape du saga est un état. 2) En cas d'erreur, les états 'compensation' (rollback) sont exécutés en ordre inverse. 3) Les retries automatiques gèrent les erreurs transitoires. 4) Le workflow est visible et auditable. Alternative : Choreography saga avec EventBridge."
  },
  {
    id: "aws-soa-c03-j6-43",
    q: "Quelle fonctionnalité Kinesis Data Streams protège contre la perte de données lors d'une panne temporaire des consumers ?",
    choices: ["A. Kinesis réplique les données vers S3 automatiquement","B. Les données restent dans le stream pour la période de rétention configurée (24h par défaut, jusqu'à 365 jours avec Enhanced Fan-Out)","C. Les consumers Kinesis ont un DLQ automatique","D. Kinesis utilise Multi-AZ pour la résilience"],
    answer: 1,
    exp: "Kinesis Data Streams conserve les données dans le stream pendant la période de rétention (24h par défaut, configurable jusqu'à 365 jours). Les consumers peuvent reprendre la lecture là où ils se sont arrêtés (via checkpoint/shard iterator). Pas de perte de données si le consumer reprend avant l'expiration de la rétention. Les shards répliquent les données dans 3 AZ."
  },
  {
    id: "aws-soa-c03-j6-44",
    q: "Comment gérer les erreurs de déduplication dans SQS FIFO ?",
    choices: ["A. SQS FIFO ne supporte pas la déduplication","B. Activer 'Content-Based Deduplication' (hash SHA-256 du body) ou fournir un MessageDeduplicationId unique — les messages en double dans la fenêtre de 5 minutes sont supprimés","C. Utiliser des queues standard avec un attribut d'ID unique","D. La déduplication doit être gérée côté application uniquement"],
    answer: 1,
    exp: "SQS FIFO déduplication : deux options. 1) Content-Based Deduplication : SQS calcule SHA-256 du corps du message et déduplique sur 5 minutes. 2) MessageDeduplicationId : l'émetteur fournit un ID unique explicite. Les messages avec le même ID dans une fenêtre de 5 minutes sont dédupliqués. Utile pour les scénarios 'exactly once processing'."
  },
  {
    id: "aws-soa-c03-j6-45",
    q: "Quelle est la stratégie recommandée pour gérer les erreurs dans une architecture Lambda + SQS ?",
    choices: ["A. Laisser Lambda crasher et SQS relivrer le message","B. Dans Lambda : try/catch pour les erreurs non-récupérables, laisser lever les exceptions pour les erreurs récupérables (SQS retente). Configurer une DLQ pour les messages définitivement en échec","C. Supprimer manuellement les messages en erreur","D. Utiliser SNS à la place de SQS pour les erreurs"],
    answer: 1,
    exp: "Stratégie d'erreurs Lambda + SQS : 1) Erreurs récupérables (timeout réseau) : lever l'exception → SQS remet en file → Lambda retente. 2) Erreurs non-récupérables (données invalides) : catch + supprimer le message + logger dans CloudWatch. 3) Messages persistants en erreur → DLQ après MaxReceiveCount tentatives. 4) Alarme CloudWatch sur la DLQ."
  },
  {
    id: "aws-soa-c03-j6-46",
    q: "Quelle est la différence entre 'SQS Visibility Timeout' et 'SQS Message Retention Period' ?",
    choices: ["A. Visibility Timeout : durée pendant laquelle un message est invisible après reception (processing time). Retention Period : durée maximale avant suppression automatique du message","B. Les deux sont synonymes","C. Visibility Timeout est pour les queues FIFO, Retention pour les Standard","D. Retention Period s'applique uniquement aux DLQ"],
    answer: 0,
    exp: "Visibility Timeout (0-12h, défaut 30s) : après qu'un consumer lit un message, il devient invisible pour les autres consumers pendant ce délai — temps alloué pour le traitement. Si le consumer ne supprime pas le message dans ce délai, il redevient visible (relivraison). Retention Period (1 min - 14 jours) : durée maximale de conservation du message dans la queue."
  },
  {
    id: "aws-soa-c03-j6-47",
    q: "Un SysOps admin doit s'assurer que les workflows AWS Step Functions échoués sont alertés. Quelle est l'approche recommandée ?",
    choices: ["A. Monitorer les logs Step Functions manuellement","B. EventBridge s'intègre nativement avec Step Functions — créer une règle qui capte les events d'execution FAILED et envoie une notification SNS","C. Step Functions envoie automatiquement des emails en cas d'échec","D. Utiliser CloudTrail pour détecter les échecs Step Functions"],
    answer: 1,
    exp: "Step Functions publie des événements d'exécution sur EventBridge (statut : RUNNING, SUCCEEDED, FAILED, TIMED_OUT, ABORTED). Créer une règle EventBridge : source = aws.states, detail.status = FAILED → target = SNS (email/SMS). Cette approche est préférable à l'inspection manuelle des logs."
  },
  {
    id: "aws-soa-c03-j6-48",
    q: "Comment tester la résilience d'une architecture AWS en simulant des pannes ?",
    choices: ["A. Arrêter manuellement les instances EC2 en production","B. AWS Fault Injection Simulator (FIS) permet d'injecter des pannes controlées (CPU stress, arrêt d'instances, latence réseau) dans un environnement de test ou production","C. Utiliser AWS Config pour simuler des configurations incorrectes","D. Désactiver les health checks ALB temporairement"],
    answer: 1,
    exp: "AWS Fault Injection Simulator (FIS) est le service de Chaos Engineering AWS. Il permet d'injecter des pannes contrôlées : arrêt EC2, panne AZ, latence réseau, pression mémoire/CPU, panne RDS. Les 'experiments' sont définis avec des 'actions', 'targets' et des 'stop conditions' (arrêt automatique si les métriques dépassent un seuil). Idéal pour valider la résilience."
  },
  {
    id: "aws-soa-c03-j6-49",
    q: "Quelle est la différence entre Amazon MQ et Amazon SQS pour la messagerie ?",
    choices: ["A. Amazon MQ : broker managé compatible JMS/AMQP/MQTT/STOMP (ActiveMQ, RabbitMQ) — pour migrer des applications legacy. SQS : service cloud-native, simple, hautement scalable","B. Les deux sont identiques avec des APIs différentes","C. SQS supporte JMS, Amazon MQ non","D. Amazon MQ est plus scalable que SQS"],
    answer: 0,
    exp: "Amazon MQ est un broker de messages managé (ActiveMQ ou RabbitMQ) pour les applications qui utilisent des protocoles standards (JMS, AMQP, MQTT, STOMP, OpenWire). Idéal pour migrer des applications on-premise sans modifier le code. SQS est cloud-native, serverless, hautement scalable, simple API. Pour les nouvelles applications cloud, SQS est recommandé. Amazon MQ pour les migrations."
  },
  {
    id: "aws-soa-c03-j6-50",
    q: "Un SysOps admin configure une architecture 'Fan-out' où un événement doit être traité par plusieurs services indépendants. Quelle est la combinaison recommandée ?",
    choices: ["A. SQS → plusieurs Lambda","B. SNS → plusieurs SQS (une par consumer) — découplage, chaque consumer a sa propre queue avec sa vitesse de traitement","C. EventBridge → plusieurs Lambda directement","D. SQS FIFO → plusieurs consumers"],
    answer: 1,
    exp: "Pattern Fan-out SNS → SQS : SNS publie une fois, livre à plusieurs SQS queues. Avantages : chaque consumer a sa propre queue (isolation), rythme de traitement indépendant, DLQ par consumer, replay possible. EventBridge est aussi une option pour le fan-out avec filtrage par content. SQS direct ne fait pas de fan-out natif."
  }
]=[
{id:"aws-soa-c03-j6-1",q:"Quelle est la différence entre AWS Backup et les snapshots natifs EBS ?",choices:["A. AWS Backup est plus rapide que les snapshots natifs","B. AWS Backup fournit une gestion centralisée des sauvegardes multi-services, multi-comptes avec politiques et audit ; les snapshots natifs sont spécifiques à un service","C. Les snapshots natifs supportent la réplication cross-region, AWS Backup non","D. AWS Backup ne supporte pas EBS"],answer:1,exp:"AWS Backup centralise la gestion des sauvegardes pour de nombreux services AWS (EBS, RDS, DynamoDB, EFS, S3, etc.) avec des plans de sauvegarde, des règles de rétention, des vaults, et des rapports d'audit. Les snapshots natifs EBS/RDS fonctionnent mais nécessitent une gestion service par service. AWS Backup supporte aussi les snapshots cross-account et cross-region."},
{id:"aws-soa-c03-j6-2",q:"Quelle est la rétention maximale configurée par défaut pour les snapshots RDS automatiques ?",choices:["A. 1 jour","B. 7 jours","C. 35 jours","D. Les snapshots ne sont jamais supprimés par défaut"],answer:1,exp:"Les snapshots RDS automatiques ont une rétention par défaut de 7 jours (configurable de 1 à 35 jours). Les snapshots manuels n'expirent pas automatiquement — ils doivent être supprimés manuellement. La fenêtre de sauvegarde automatique est configurable."},
{id:"aws-soa-c03-j6-3",q:"Comment S3 Cross-Region Replication (CRR) différencie-t-elle de S3 Same-Region Replication (SRR) ?",choices:["A. CRR réplique vers une autre région pour la résilience géographique ; SRR réplique dans la même région (comptes différents ou agrégation de logs)","B. CRR est synchrone, SRR est asynchrone","C. SRR est gratuit, CRR est payant","D. CRR supporte uniquement S3 Standard, SRR supporte toutes les classes"],answer:0,exp:"CRR : réplication vers une région différente, utile pour DR géographique, réduction de latence pour utilisateurs distants, conformité réglementaire. SRR : réplication dans la même région vers un autre bucket ou compte, utile pour l'agrégation de logs, copie entre dev/prod dans le même compte, conformité de résidence des données. Les deux sont asynchrones."},
{id:"aws-soa-c03-j6-4",q:"Qu'est-ce que le Point-in-Time Recovery (PITR) DynamoDB et quelle est sa fenêtre de rétention ?",choices:["A. Snapshots quotidiens avec une rétention de 7 jours","B. Sauvegarde continue permettant la restauration à n'importe quel point dans les 35 derniers jours","C. Réplication en temps réel vers une autre table avec 24h de lag","D. Export vers S3 toutes les heures avec une rétention configurable"],answer:1,exp:"DynamoDB PITR (Point-in-Time Recovery) permet de restaurer une table à n'importe quelle seconde dans les 35 derniers jours. La sauvegarde est continue et automatique (pas un snapshot à des intervalles). Après activation, vous pouvez restaurer vers un nouveau nom de table avec RestoreTableToPointInTime."},
{id:"aws-soa-c03-j6-5",q:"Un SysOps admin doit s'assurer que les snapshots EBS dans toutes les régions AWS sont supprimés après 90 jours. Quelle est la solution la plus scalable ?",choices:["A. Créer un script Lambda qui s'exécute quotidiennement dans chaque région","B. Utiliser Amazon Data Lifecycle Manager (DLM) avec une politique de lifecycle dans chaque région","C. Configurer AWS Backup avec une règle de rétention de 90 jours pour les ressources EBS","D. B et C sont toutes deux valides"],answer:3,exp:"Amazon DLM automatise la création et suppression des snapshots EBS selon des politiques de lifecycle. AWS Backup offre aussi cette fonctionnalité avec une gestion centralisée multi-services. Les deux sont valides. DLM est plus spécifique à EBS/EBS-backed AMI. AWS Backup est plus général et supporte la gestion cross-account."},
{id:"aws-soa-c03-j6-6",q:"Quelle fonctionnalité S3 permet de protéger les objets contre la suppression accidentelle ?",choices:["A. S3 Server-Side Encryption","B. S3 Versioning + MFA Delete","C. S3 Cross-Region Replication","D. S3 Bucket Policy avec Deny sur s3:DeleteObject"],answer:1,exp:"S3 Versioning conserve toutes les versions d'un objet, donc une suppression 'logique' crée un delete marker sans supprimer les versions précédentes. MFA Delete ajoute une authentification multifactorielle obligatoire pour supprimer définitivement des versions ou désactiver le versioning. Les deux ensemble offrent une protection maximale."},
{id:"aws-soa-c03-j6-7",q:"Dans une stratégie DR Warm Standby, quelle est la principale différence avec Pilot Light ?",choices:["A. Warm Standby utilise une région différente, Pilot Light utilise la même région","B. Warm Standby a tous les composants opérationnels mais sous-dimensionnés (peut gérer un trafic réduit) ; Pilot Light a seulement les composants critiques actifs","C. Pilot Light est plus cher que Warm Standby","D. Warm Standby ne nécessite pas de réplication de données"],answer:1,exp:"Pilot Light : seuls les composants critiques (DB répliquée, infrastructure minimale) tournent en DR. En cas de bascule, il faut démarrer les autres composants. Warm Standby : tous les composants tournent, mais à capacité réduite (1 instance au lieu de 10). En cas de bascule, il faut juste scale up. Warm Standby = RTO plus bas, coût plus élevé."},
{id:"aws-soa-c03-j6-8",q:"Comment répliquer une base RDS en temps quasi-réel vers une autre région pour le DR ?",choices:["A. Utiliser AWS Database Migration Service (DMS)","B. Créer un Cross-Region Read Replica RDS","C. Configurer S3 Cross-Region Replication sur les sauvegardes RDS","D. Utiliser AWS Backup avec réplication cross-region"],answer:1,exp:"Un Cross-Region Read Replica RDS réplique les données de façon asynchrone vers une autre région. En cas de disaster, on peut promouvoir ce replica en instance standalone (write). La réplication est quasi-temps-réel (secondes à minutes de lag). DMS est pour les migrations, pas la réplication continue. Les sauvegardes S3/Backup ont un RPO plus élevé."},
{id:"aws-soa-c03-j6-9",q:"Qu'est-ce qu'un AWS Backup Vault Lock ?",choices:["A. Un verrou qui empêche la modification des plans de sauvegarde","B. Une fonctionnalité WORM qui rend les sauvegardes immuables pour une période définie, protégeant contre la suppression même par root","C. Un chiffrement supplémentaire pour les vaults","D. Une autorisation IAM pour accéder aux vaults"],answer:1,exp:"Backup Vault Lock implémente la politique WORM (Write Once Read Many) sur les sauvegardes dans le vault. Une fois activé, personne — même l'administrateur ou root — ne peut supprimer les sauvegardes avant l'expiration de la période de rétention. Idéal pour les exigences de conformité réglementaire (HIPAA, PCI-DSS, SEC 17a-4)."},
{id:"aws-soa-c03-j6-10",q:"Une entreprise a besoin de restaurer une base de données Aurora à l'état exact qu'elle avait il y a 2 jours à 14h30. Quelle fonctionnalité utiliser ?",choices:["A. Restaurer à partir du dernier snapshot automatique","B. Utiliser Backtrack Aurora pour revenir rapidement à ce point dans le temps","C. Point-in-Time Restore Aurora vers ce timestamp exact","D. B ou C selon si Backtrack est activé"],answer:3,exp:"Deux options selon la configuration : Aurora Backtrack (si activé) permet de 'rembobiner' la DB en place sans créer une nouvelle instance (très rapide, mais fenêtre limitée à 72h max). Aurora PITR (toujours disponible) crée un nouveau cluster restauré au timestamp exact. Backtrack est plus rapide mais crée un temps d'arrêt bref."},
{id:"aws-soa-c03-j6-11",q:"Comment S3 Object Lock diffère-t-il de S3 MFA Delete ?",choices:["A. Object Lock protège les objets individuels avec des règles de rétention WORM (compliance/governance mode) ; MFA Delete protège les opérations de suppression avec authentification","B. MFA Delete est pour S3 Standard, Object Lock est pour Glacier","C. Object Lock nécessite une approbation AWS, MFA Delete est self-service","D. Les deux font exactement la même chose"],answer:0,exp:"Object Lock (WORM) : empêche la suppression ou modification des objets pendant une période définie. Compliance Mode : même root ne peut pas supprimer. Governance Mode : certains utilisateurs avec permission peuvent bypasser. MFA Delete : exige un code MFA pour supprimer des versions ou modifier le versioning. Complémentaires, pas identiques."},
{id:"aws-soa-c03-j6-12",q:"Un admin doit créer des snapshots EBS cohérents d'une application multi-volumes (root + data) sans arrêter l'instance. Quelle fonctionnalité utiliser ?",choices:["A. Amazon Data Lifecycle Manager avec une politique multi-volume","B. EBS Multi-Volume Snapshots — snaphots coordonnés de tous les volumes d'une instance en un seul appel API","C. AWS Backup avec crash-consistent snapshots","D. Utiliser create-snapshot en boucle sur chaque volume"],answer:1,exp:"EBS Multi-Volume Snapshots (via CreateSnapshots API) crée des snapshots simultanés et cohérents de tous les volumes attachés à une instance EC2. Ils ont le même ID de snapshot group. Cela garantit la cohérence entre le volume root et les volumes de données au même instant. DLM supporte aussi les multi-volume snapshots."},
{id:"aws-soa-c03-j6-13",q:"Quelle est la différence entre un snapshot EBS et une AMI (Amazon Machine Image) ?",choices:["A. Les snapshots sont pour les données, les AMI sont pour le système d'exploitation uniquement","B. Une AMI inclut le snapshot du volume root + la configuration de lancement (architecture, kernelId, mapping des volumes) ; un snapshot est juste une copie du volume","C. Les AMI peuvent être partagées entre régions, les snapshots non","D. Les snapshots sont chiffrés, les AMI non"],answer:1,exp:"Un snapshot EBS est une copie point-in-time d'un volume EBS (données brutes). Une AMI comprend : un ou plusieurs snapshots EBS (y compris le root volume), les permissions de lancement, le mapping des périphériques de bloc (device mapping). Une AMI permet de lancer de nouvelles instances EC2 identiques. Les deux peuvent être copiés cross-region."},
{id:"aws-soa-c03-j6-14",q:"Dans AWS Backup, qu'est-ce qu'un 'Backup Plan' ?",choices:["A. Un document IAM définissant les permissions de sauvegarde","B. Une politique qui définit quand sauvegarder (schedule), combien de temps conserver (retention), et vers quel vault stocker","C. Un runbook SSM pour la restauration","D. Un rapport CloudWatch sur les sauvegardes effectuées"],answer:1,exp:"Un Backup Plan dans AWS Backup définit : 1) Les règles de sauvegarde (fréquence/schedule, fenêtre de démarrage, rétention). 2) Le vault de destination. 3) Les ressources à sauvegarder (par tags ou ARN). C'est l'équivalent d'une politique de sauvegarde centralisée applicable à plusieurs services AWS."},
{id:"aws-soa-c03-j6-15",q:"Comment DynamoDB Global Tables contribue-t-il à la stratégie de DR multi-régions ?",choices:["A. DynamoDB Global Tables réplique la table en lecture seule dans d'autres régions","B. DynamoDB Global Tables réplique la table en mode actif-actif dans plusieurs régions avec réplication multi-master","C. DynamoDB Global Tables crée des sauvegardes quotidiennes dans d'autres régions","D. DynamoDB Global Tables est uniquement pour améliorer les performances de lecture"],answer:1,exp:"DynamoDB Global Tables est une solution active-active multi-régions : les tables dans chaque région acceptent lectures ET écritures. La réplication est automatique et quasi-temps-réel (< 1 seconde typiquement). En cas de panne régionale, les applications peuvent continuer sur une autre région sans interruption. RPO quasi nul, RTO quasi nul."},
{id:"aws-soa-c03-j6-16",q:"Un SysOps admin doit vérifier que toutes les ressources critiques ont bien été sauvegardées hier. Quel service AWS fournit un rapport de conformité des sauvegardes ?",choices:["A. AWS Config","B. AWS Backup Audit Manager","C. CloudWatch Logs","D. AWS Trusted Advisor"],answer:1,exp:"AWS Backup Audit Manager génère des rapports de conformité sur les activités de sauvegarde : jobs réussis/échoués, ressources protégées vs non protégées, conformité aux politiques de rétention. Idéal pour les audits de conformité (SOC, HIPAA). Les rapports peuvent être exportés vers S3 et intégrés avec Security Hub."},
{id:"aws-soa-c03-j6-17",q:"Quelle fonctionnalité S3 permet de récupérer la version précédente d'un objet accidentellement modifié ?",choices:["A. S3 Cross-Region Replication","B. S3 Versioning — chaque modification crée une nouvelle version, les anciennes restent accessibles","C. S3 Object Lock en mode Governance","D. S3 Intelligent-Tiering"],answer:1,exp:"S3 Versioning conserve toutes les versions d'un objet. Lors d'un écrasement (PUT), la nouvelle version devient current, l'ancienne reste stockée. Pour récupérer, il faut spécifier le VersionId de la version précédente. S3 Versioning doit être activé sur le bucket. Les versions supplémentaires ont un coût de stockage."},
{id:"aws-soa-c03-j6-18",q:"Combien de temps prend un Restore from Snapshot pour une instance RDS ?",choices:["A. Quelques secondes — les données sont récupérées instantanément","B. Variable selon la taille de la DB — de quelques minutes à plusieurs heures","C. Toujours exactement 1 heure","D. Dépend du type d'instance mais jamais plus de 30 minutes"],answer:1,exp:"La restauration d'un snapshot RDS crée une nouvelle instance DB. Le temps dépend de la taille de la base de données et du type d'instance. Pour de grandes bases, cela peut prendre plusieurs heures. Aurora Restore est plus rapide grâce à son architecture de storage distribuée (minutes pour restaurer, avec accès aux données pendant la restauration)."},
{id:"aws-soa-c03-j6-19",q:"Quelle fonctionnalité AWS empêche la suppression accidentelle d'un stack CloudFormation critique ?",choices:["A. Stack Termination Protection","B. CloudFormation Drift Detection","C. Stack Policy","D. A et C sont toutes deux valides selon le cas"],answer:3,exp:"Stack Termination Protection empêche la suppression accidentelle du stack entier via la console ou l'API (doit être explicitement désactivé avant de pouvoir supprimer). Stack Policy contrôle les mises à jour des ressources dans le stack (prévient les mises à jour accidentelles de ressources critiques). Les deux servent des protections complémentaires."},
{id:"aws-soa-c03-j6-20",q:"Dans une architecture multi-comptes, comment AWS Backup permet-il de gérer les sauvegardes de façon centralisée ?",choices:["A. AWS Backup ne supporte pas le multi-comptes","B. Via AWS Organizations, un Backup Policy peut être appliqué à tous les comptes membres depuis le compte de gestion","C. En créant des cross-account IAM roles pour chaque compte","D. En utilisant AWS Control Tower uniquement"],answer:1,exp:"AWS Backup intégré avec AWS Organizations permet de créer des Backup Policies au niveau organisation qui s'appliquent automatiquement à tous les comptes membres. Les sauvegardes peuvent aussi être copiées cross-account dans des vaults centralisés. Cela garantit que toutes les ressources de l'organisation sont sauvegardées selon les politiques définies centralement."}
];

// ── Jour 7 — AMI, EC2 Image Builder, containers ───────────────────────────────
window.QDATA[7,
  {
    id: "aws-soa-c03-j7-21",
    q: "Quelle est la différence entre CloudFormation 'ChangeSet' et 'Stack Update' direct ?",
    choices: ["A. ChangeSet permet de prévisualiser les modifications qu'un update va effectuer avant de les appliquer — évite les surprises","B. ChangeSet est plus rapide qu'un Stack Update direct","C. ChangeSet uniquement disponible pour les stacks en production","D. Stack Update direct crée un ChangeSet automatiquement"],
    answer: 0,
    exp: "CloudFormation ChangeSet : génère un aperçu des modifications (ajout/modification/suppression de ressources) AVANT de les appliquer. Utile pour : valider l'impact d'un changement, révision en équipe, CI/CD gate. Stack Update direct applique immédiatement les changements sans aperçu. Best practice : toujours utiliser un ChangeSet en production."
  },
  {
    id: "aws-soa-c03-j7-22",
    q: "Qu'est-ce qu'un 'CloudFormation Stack Policy' et à quoi sert-il ?",
    choices: ["A. Une policy IAM qui contrôle qui peut créer des stacks","B. Une politique JSON attachée à un stack qui protège certaines ressources contre les mises à jour ou remplacements accidentels","C. Une politique de coûts qui alerte quand un stack dépasse un budget","D. Une politique de rétention pour les stacks supprimés"],
    answer: 1,
    exp: "Stack Policy est un document JSON qui définit quelles ressources d'un stack peuvent être mises à jour et comment (Allow/Deny par type de resource ou logical ID). Protège les ressources critiques (bases de données, instances) contre les mises à jour accidentelles. Exemple : Deny sur Update sur AWS::RDS::DBInstance. Pour mettre à jour une ressource protégée, il faut temporairement modifier la Stack Policy."
  },
  {
    id: "aws-soa-c03-j7-23",
    q: "Comment gérer les secrets (mots de passe, API keys) dans un template CloudFormation ?",
    choices: ["A. Les hardcoder dans le template comme paramètres par défaut","B. Utiliser des paramètres SSM SecureString ou Secrets Manager ARNs dans le template, et résoudre dynamiquement au déploiement","C. Chiffrer les valeurs en Base64 dans le template","D. Utiliser des variables d'environnement CloudFormation"],
    answer: 1,
    exp: "Bonnes pratiques pour les secrets dans CFN : 1) SSM Parameter Store SecureString : {{resolve:ssm-secure:/prod/db/password}} dans le template. 2) Secrets Manager : {{resolve:secretsmanager:prod/db:SecretString:password}}. Ces références sont résolues au moment du déploiement CFN. Jamais en clair dans le template. Les templates CFN peuvent être dans des repos git publics !"
  },
  {
    id: "aws-soa-c03-j7-24",
    q: "Un déploiement Elastic Beanstalk échoue et l'application est inaccessible. Comment effectuer un rollback rapide ?",
    choices: ["A. Redéployer la version précédente depuis le tableau de bord Elastic Beanstalk","B. Modifier le Load Balancer pour pointer vers l'ancienne version","C. Recréer l'environnement depuis zéro","D. Modifier manuellement le code sur les instances"],
    answer: 0,
    exp: "Elastic Beanstalk conserve l'historique des versions de l'application. Pour rollback : dans la console Beanstalk, sélectionner l'environnement → Actions → 'Deploy' et choisir la version précédente. Pour les déploiements Rolling/Canary, Beanstalk peut aussi rollback automatiquement si les health checks échouent (option 'Deployment preferences')."
  },
  {
    id: "aws-soa-c03-j7-25",
    q: "Quelle est la différence entre AWS CDK et AWS CloudFormation ?",
    choices: ["A. CDK génère du CloudFormation (CDK synth) depuis du code TypeScript/Python/Java — CDK est une abstraction de niveau supérieur avec des constructs réutilisables","B. CloudFormation est plus puissant que CDK","C. CDK ne supporte que TypeScript","D. Les deux sont identiques — CDK est juste l'interface CLI de CloudFormation"],
    answer: 0,
    exp: "AWS CDK (Cloud Development Kit) : écrivez votre infrastructure en code (TypeScript, Python, Java, .NET, Go). La commande 'cdk synth' génère un template CloudFormation. Avantages : logique de programmation (boucles, conditions), abstractions réutilisables (L2 constructs), test unitaires. CDK compile vers CFN — l'infrastructure réelle est déployée par CloudFormation."
  },
  {
    id: "aws-soa-c03-j7-26",
    q: "Qu'est-ce qu'un 'CloudFormation Nested Stack' et quand l'utiliser ?",
    choices: ["A. Un stack créé à l'intérieur d'une Lambda function","B. Un stack inclus dans un autre stack (parent) via AWS::CloudFormation::Stack — permet de modulariser les templates volumineux et de réutiliser des composantes","C. Un stack dans une région différente du stack parent","D. Un stack qui s'auto-déploie lors d'une modification"],
    answer: 1,
    exp: "Nested Stacks : un stack parent référence des stacks enfants (AWS::CloudFormation::Stack resource). Avantages : 1) Contournement de la limite de 500 ressources par stack. 2) Modularisation : template VPC, template sécurité, template applicatif. 3) Réutilisabilité : même stack enfant référencé par plusieurs parents. Best practice : utiliser des stacks séparés pour les ressources avec des cycles de vie différents."
  },
  {
    id: "aws-soa-c03-j7-27",
    q: "Comment SSM Automation diffère-t-il de SSM Run Command ?",
    choices: ["A. Run Command : exécute des scripts sur des instances EC2. Automation : exécute des workflows multi-étapes qui peuvent inclure des appels API AWS, des Lambda, des approbations humaines","B. Les deux sont identiques avec des interfaces différentes","C. Automation est plus lent que Run Command","D. Run Command peut appeler des APIs AWS, Automation non"],
    answer: 0,
    exp: "SSM Run Command : exécute des scripts/commandes directement sur les instances EC2 (shell, PowerShell) via l'agent SSM. SSM Automation : workflows multi-étapes qui orchestrent des actions AWS (créer snapshot, patch instances, valider la conformité, envoyer notification SNS, attendre approbation). Automation peut aussi exécuter Run Command comme une étape. Plus puissant pour les remédiation complexes."
  },
  {
    id: "aws-soa-c03-j7-28",
    q: "Qu'est-ce que l'EC2 Image Builder et comment simplifie-t-il la gestion des AMIs ?",
    choices: ["A. Un service qui achète des AMIs sur AWS Marketplace automatiquement","B. Un service managé qui automatise la création, les tests, et la distribution des AMIs via des pipelines — incluant les mises à jour OS et les contrôles de sécurité","C. Un éditeur d'images graphiques pour les instances EC2","D. Un service de conversion d'images Docker en AMIs"],
    answer: 1,
    exp: "EC2 Image Builder automatise le cycle de vie des AMIs : 1) Recipe : définit les composantes (packages, scripts de configuration). 2) Pipeline : schedule ou déclenchement manuel. 3) Build : crée l'instance, applique les composantes, crée l'AMI. 4) Test : execute des tests sur l'AMI (InSpec, etc.). 5) Distribution : publie l'AMI dans plusieurs régions/comptes. Élimine la gestion manuelle des AMIs."
  },
  {
    id: "aws-soa-c03-j7-29",
    q: "Quelle est la stratégie recommandée pour déployer une application multi-tier (frontend, backend, database) avec CloudFormation ?",
    choices: ["A. Un seul template CloudFormation monolithique","B. Stacks séparés par couche (VPC/Network, Database, Application) ou utiliser AWS Service Catalog pour grouper les stacks liés","C. Déployer les trois couches manuellement et importer dans CFN","D. Utiliser uniquement Terraform au lieu de CloudFormation"],
    answer: 1,
    exp: "Stacks séparés par couche selon les cycles de vie : 1) VPC/Network (rarement changé). 2) Database (changements moins fréquents). 3) Application (déploiements fréquents). Les stacks utilisent des exports/imports (Fn::ImportValue) pour partager les outputs (VPC ID, Subnet IDs, DB endpoint). Avantage : mettre à jour la couche application sans risquer la couche réseau."
  },
  {
    id: "aws-soa-c03-j7-30",
    q: "Comment CodeDeploy gère-t-il les déploiements 'Blue/Green' sur EC2 ?",
    choices: ["A. CodeDeploy crée un nouveau groupe d'instances (Green), déploie l'application, switch le trafic via ALB, puis termine les anciennes instances (Blue)","B. CodeDeploy modifie les instances existantes en place","C. Blue/Green nécessite une configuration Route 53 manuelle","D. CodeDeploy Blue/Green n'est disponible que pour ECS"],
    answer: 0,
    exp: "CodeDeploy Blue/Green sur EC2 : 1) Crée de nouvelles instances (Green) depuis le même Launch Template/ASG. 2) Déploie la nouvelle version sur les instances Green. 3) Enregistre les instances Green dans le Load Balancer. 4) Désenregistre les instances Blue (selon la config : immédiatement, ou après X minutes). 5) Optionnel : termine les instances Blue. Supporte le rollback automatique."
  },
  {
    id: "aws-soa-c03-j7-31",
    q: "Quelle est la différence entre CodeDeploy 'AllAtOnce', 'HalfAtATime' et 'OneAtATime' ?",
    choices: ["A. AllAtOnce : déploie sur toutes les instances simultanément (downtime possible). HalfAtATime : par moitiés successives. OneAtATime : instance par instance (plus lent, zéro downtime avec ALB)","B. Les trois déploient au même rythme avec des noms différents","C. OneAtATime est le plus rapide","D. AllAtOnce nécessite une maintenance window"],
    answer: 0,
    exp: "Deployment configurations CodeDeploy : AllAtOnce = déploiement simultané (rapide, risqué — downtime si erreur). HalfAtATime = 50% à la fois (compromis). OneAtATime = 1 instance à la fois (lent, safer — avec ALB, le trafic est redirigé pendant le déploiement). Configurations custom possibles : ex: 25% à la fois. Le choix dépend du SLA et de la tolérance au risque."
  },
  {
    id: "aws-soa-c03-j7-32",
    q: "Qu'est-ce que l'AWS Service Catalog et quel problème résout-il en entreprise ?",
    choices: ["A. Un catalogue des prix des services AWS","B. Un service qui permet aux équipes IT de créer des portfolios de produits approuvés (templates CFN) que les utilisateurs peuvent auto-provisionner — avec governance et conformité","C. Un outil de monitoring des services AWS utilisés","D. Un marketplace interne pour partager des AMIs"],
    answer: 1,
    exp: "AWS Service Catalog : permet aux admins de créer des 'Portfolios' (collections de 'Products' = templates CFN) et de les partager avec des équipes. Les utilisateurs provisionnent des 'produits' approuvés depuis un catalogue. Avantages : 1) Governance (seulement les produits approuvés). 2) Self-service pour les développeurs. 3) Conformité (tags obligatoires, contraintes). 4) Réutilisabilité."
  },
  {
    id: "aws-soa-c03-j7-33",
    q: "Comment CodePipeline gère-t-il les approbations manuelles dans un pipeline CI/CD ?",
    choices: ["A. CodePipeline ne supporte pas les approbations manuelles","B. Une étape 'Manual Approval' peut être insérée dans le pipeline — le pipeline se met en pause jusqu'à ce qu'un utilisateur autorisé approuve ou rejette via console/CLI/SNS","C. Les approbations sont gérées par CodeBuild uniquement","D. L'approbation est automatique après 24h sans action"],
    answer: 1,
    exp: "CodePipeline Manual Approval Stage : le pipeline se met en pause et envoie une notification SNS aux reviewers. Un reviewer approuve/rejette via console, CLI ou API. En cas d'approbation, le pipeline continue. En cas de rejet (avec commentaire), le pipeline s'arrête. Utile pour : validation pré-prod, déploiement prod nécessitant 4 eyes, conformité SOX."
  },
  {
    id: "aws-soa-c03-j7-34",
    q: "Quelle fonctionnalité CloudFormation permet de gérer des ressources créées manuellement (non créées par CFN) ?",
    choices: ["A. CloudFormation Import (resource import) — importe des ressources existantes dans un stack sans les recréer","B. CloudFormation Drift Detection uniquement","C. Supprimer et recréer les ressources via CFN","D. CloudFormation ne peut pas gérer les ressources existantes"],
    answer: 0,
    exp: "Resource Import (CFN) : permet d'importer des ressources existantes (créées manuellement ou hors CFN) dans un stack CloudFormation. La ressource n'est pas recréée, elle est juste 'adoptée' par le stack. Prérequis : DeletionPolicy=Retain sur la ressource. Utile pour : migrer des ressources legacy sous CFN, corriger des stacks incohérents."
  },
  {
    id: "aws-soa-c03-j7-35",
    q: "Qu'est-ce que le 'CloudFormation Drift Detection' et comment l'utiliser ?",
    choices: ["A. Détecte les modifications apportées aux ressources d'un stack EN DEHORS de CloudFormation (console, CLI, SDK) et affiche les différences","B. Détecte les erreurs de syntaxe dans les templates CFN","C. Suit les modifications de version des templates","D. Alerte quand un stack est sur le point d'expirer"],
    answer: 0,
    exp: "Drift Detection compare l'état actuel des ressources d'un stack avec leur état défini dans le template CFN. Si quelqu'un a modifié une ressource manuellement (ex: modifié un Security Group via console), Drift Detection affiche les différences. Actions : 1) Modifier le template pour correspondre à l'état réel (accepter le drift). 2) Corriger la ressource pour correspondre au template."
  },
  {
    id: "aws-soa-c03-j7-36",
    q: "Comment CodeBuild accède-t-il aux secrets (tokens, passwords) pendant le build ?",
    choices: ["A. Les variables d'environnement en plaintext dans buildspec.yml","B. Référencer des paramètres SSM Parameter Store ou Secrets Manager dans le buildspec.yml avec la syntaxe {{parameter-store/path}} — CodeBuild les résout sans exposer les valeurs","C. Passer les secrets via des paramètres CodePipeline en clair","D. Stocker les secrets dans les artifacts CodeBuild"],
    answer: 1,
    exp: "CodeBuild peut accéder aux secrets via : 1) SSM Parameter Store : dans env section de buildspec.yml : `parameter-store: DB_PASS: /prod/db/password`. 2) Secrets Manager : `secrets-manager: API_KEY: arn:aws:secretsmanager:...`. Les valeurs sont injectées comme variables d'environnement dans le build. Les logs ne montrent pas les valeurs si masquées. Jamais en plaintext dans buildspec.yml."
  },
  {
    id: "aws-soa-c03-j7-37",
    q: "Quelle est la stratégie de déploiement ECS la plus adaptée pour un service avec un SLA strict (zéro downtime) ?",
    choices: ["A. Recreate : arrêter l'ancienne version avant de déployer la nouvelle","B. Rolling Update avec 'minimumHealthyPercent=100' et 'maximumPercent=200'","C. Blue/Green avec CodeDeploy — shift du trafic avec validation avant terminaison des instances bleues","D. B et C sont toutes deux valides selon les contraintes"],
    answer: 3,
    exp: "Zéro downtime ECS : 1) Rolling Update : minimum 100% healthy = pas de réduction de capacité, maximum 200% = doubler les instances pendant le déploiement. Zéro downtime mais consomme 2x la capacité. 2) Blue/Green (CodeDeploy) : crée un nouveau task set Green, shift graduel du trafic (canary, linear, all-at-once), validation des health checks avant de terminer Blue. Blue/Green permet un rollback instantané."
  },
  {
    id: "aws-soa-c03-j7-38",
    q: "Comment AWS Config Rules et CloudFormation interagissent pour l'auto-remédiation ?",
    choices: ["A. CloudFormation crée les Config Rules automatiquement","B. Config Rule détecte une non-conformité → EventBridge → SSM Automation remediation (qui peut appeler CFN ou modifier directement la ressource)","C. Config redeploie automatiquement les stacks non conformes","D. Les deux services n'interagissent pas"],
    answer: 1,
    exp: "Flux d'auto-remédiation : 1) Config Rule évalue la ressource et marque 'NON_COMPLIANT'. 2) Action de remédiation déclenchée : SSM Automation document pré-défini (ex: AWS-EnableVpcFlowLogs). 3) SSM Automation corrige la ressource (peut créer un CFN stack ou appeler directement l'API). 4) Config réévalue et marque 'COMPLIANT'. Entièrement automatisé."
  },
  {
    id: "aws-soa-c03-j7-39",
    q: "Qu'est-ce qu'un 'CodePipeline Artifact' et où est-il stocké ?",
    choices: ["A. Les artifacts CodePipeline sont stockés dans ECR","B. Les artifacts sont stockés dans un bucket S3 (ArtifactStore) et passés entre les étapes du pipeline — chaque étape peut lire les artifacts en entrée et produire de nouveaux artifacts en sortie","C. Les artifacts sont stockés dans CodeCommit","D. Les artifacts sont temporaires et supprimés à la fin du pipeline"],
    answer: 1,
    exp: "CodePipeline stocke les artifacts dans un bucket S3 chiffré. Chaque stage du pipeline peut avoir des InputArtifacts (ce qu'il reçoit) et OutputArtifacts (ce qu'il produit). Exemple : Stage Source → artifact 'SourceOutput' (code ZIP). Stage Build → artifact 'BuildOutput' (binaires compilés). Stage Deploy → lit 'BuildOutput'. Le bucket S3 doit être dans la même région que le pipeline."
  },
  {
    id: "aws-soa-c03-j7-40",
    q: "Quelle est la limite maximale de ressources dans un seul template CloudFormation ?",
    choices: ["A. 100 ressources","B. 200 ressources","C. 500 ressources","D. Illimitée"],
    answer: 2,
    exp: "Un template CloudFormation peut contenir jusqu'à 500 ressources. Au-delà, utiliser des Nested Stacks (chaque stack enfant peut avoir 500 ressources). Limite additionnelle : 200 paramètres, 200 outputs, 200 mappings, 200 conditions. La taille maximale d'un template est 1 MB (S3) ou 51,200 bytes (upload direct)."
  },
  {
    id: "aws-soa-c03-j7-41",
    q: "Comment automatiser le patching d'une flotte d'instances EC2 avec des fenêtres de maintenance spécifiques ?",
    choices: ["A. Utiliser cron jobs sur chaque instance","B. SSM Patch Manager + SSM Maintenance Windows : définir quand (schedule), quoi (Patch Group + Baseline), et sur quelles instances (targets)","C. AWS Config avec une règle de patch compliance","D. CodeDeploy avec un deployment group de patch"],
    answer: 1,
    exp: "Flux de patching SSM : 1) Patch Baseline : définit quels patches approuver (severity, classification, auto-approval). 2) Patch Group (tag PatchGroup) : associe les instances à une baseline. 3) Maintenance Window : définit le schedule (ex: samedi 2h-6h). 4) Task dans la Maintenance Window : appelle SSM Automation ou Run Command 'AWS-RunPatchBaseline'. Notifications via SNS."
  },
  {
    id: "aws-soa-c03-j7-42",
    q: "Qu'est-ce que la fonctionnalité 'CloudFormation StackSets' et quel est son cas d'usage principal ?",
    choices: ["A. Créer plusieurs stacks identiques dans un même compte","B. Déployer des stacks CloudFormation dans plusieurs comptes et/ou régions AWS depuis un seul template, géré centralement","C. Cloner un stack existant pour l'environnement de test","D. Partager des stacks entre équipes dans un même compte"],
    answer: 1,
    exp: "CloudFormation StackSets : déploie un template CFN dans plusieurs comptes AWS et/ou régions depuis un compte 'administrator'. Cas d'usage : 1) Déployer les guardrails de sécurité (Config Rules, IAM policies, CloudTrail) dans tous les comptes d'une organisation. 2) Déployer une infrastructure multi-régions. Fonctionne avec AWS Organizations pour cibler tous les comptes automatiquement."
  },
  {
    id: "aws-soa-c03-j7-43",
    q: "Comment gérer les dépendances entre ressources dans CloudFormation quand la dépendance implicite n'est pas détectable ?",
    choices: ["A. L'ordre de création est toujours alphabétique dans CFN","B. Utiliser la propriété DependsOn pour forcer un ordre de création explicite entre ressources","C. Les ressources CFN sont toujours créées en parallèle","D. Utiliser des paramètres pour contrôler l'ordre"],
    answer: 1,
    exp: "CloudFormation détecte les dépendances implicites via les références (Ref, Fn::GetAtt). Pour les dépendances non détectables (ex: une ressource dépend d'une autre sans la référencer), utiliser DependsOn. Exemple : un EC2 avec DependsOn sur une NAT Gateway — assure que la NAT Gateway est créée avant l'instance EC2."
  },
  {
    id: "aws-soa-c03-j7-44",
    q: "Qu'est-ce qu'un 'EC2 Launch Template' par rapport à un 'Launch Configuration' et pourquoi migrer ?",
    choices: ["A. Les deux sont identiques — les Launch Configurations sont juste plus anciens","B. Launch Template : versioning, support des dernières fonctionnalités (instances mixtes, Spot, Nitro), modification sans recréer. Launch Configuration : legacy, pas de versioning, dépréciée en 2023","C. Launch Configuration supporte plus de types d'instances","D. Launch Template est uniquement pour ECS, Launch Configuration pour EC2"],
    answer: 1,
    exp: "Launch Templates remplacent les Launch Configurations (AWS a arrêté d'ajouter de nouvelles fonctionnalités aux LC). Avantages des LT : 1) Versioning (v1, v2, default). 2) Support de toutes les nouvelles fonctionnalités : instance type overrides, Spot mixed fleet, instance metadata v2, Nitro Enclaves. 3) Réutilisable pour ASG, Fleet EC2, Spot Fleet. Migration recommandée."
  },
  {
    id: "aws-soa-c03-j7-45",
    q: "Comment CodeDeploy gère-t-il les hooks dans les déploiements EC2/On-Premises ?",
    choices: ["A. Les hooks sont définis dans buildspec.yml","B. appspec.yml définit des hooks (BeforeInstall, AfterInstall, ApplicationStart, ValidateService) qui s'exécutent à des étapes spécifiques du déploiement","C. Les hooks CodeDeploy nécessitent une Lambda function","D. appspec.yml n'existe que pour ECS"],
    answer: 1,
    exp: "appspec.yml est le fichier de configuration CodeDeploy qui définit : 1) Les fichiers à copier (source → destination). 2) Les hooks : scripts à exécuter avant/après chaque phase. Hooks EC2 : BeforeBlockTraffic, BlockTraffic, AfterBlockTraffic, ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, ValidateService, BeforeAllowTraffic, AllowTraffic, AfterAllowTraffic."
  },
  {
    id: "aws-soa-c03-j7-46",
    q: "Quelle est la stratégie pour gérer les mises à jour de stacks CloudFormation avec des changements 'breaking' (recréation de ressources) ?",
    choices: ["A. Toujours accepter la suppression/recréation automatique de CFN","B. Identifier les changements de remplacement via ChangeSet, planifier une maintenance window, utiliser DeletionPolicy=Snapshot pour les DB avant le changement","C. Ne jamais effectuer de changements breaking","D. Utiliser des paramètres CFN pour désactiver les ressources avant le changement"],
    answer: 1,
    exp: "Pour les changements qui impliquent le remplacement de ressources : 1) ChangeSet pour identifier les ressources qui seront remplacées (Replacement=True dans la vue de changement). 2) DeletionPolicy=Snapshot sur les RDS/ElastiCache avant le changement — un snapshot est créé avant la suppression. 3) Planifier une maintenance window. 4) Tester en préproduction d'abord."
  },
  {
    id: "aws-soa-c03-j7-47",
    q: "Qu'est-ce que l'option 'CloudFormation DeletionPolicy' et quelles valeurs sont disponibles ?",
    choices: ["A. Delete (défaut) : supprime la ressource. Retain : garde la ressource après suppression du stack. Snapshot : crée un snapshot avant suppression (RDS, ElastiCache, Redshift)","B. DeletionPolicy n'existe que pour les buckets S3","C. Les trois valeurs sont : Delete, Archive, Backup","D. DeletionPolicy n'est disponible que pour les stacks StackSets"],
    answer: 0,
    exp: "DeletionPolicy contrôle ce qui arrive à une ressource quand le stack est supprimé ou quand la ressource est retirée du template : Delete (défaut, la ressource est supprimée), Retain (la ressource reste, orpheline), Snapshot (crée un snapshot final avant suppression — pour RDS, ElastiCache, Redshift). Best practice : Retain/Snapshot sur les ressources stateful."
  },
  {
    id: "aws-soa-c03-j7-48",
    q: "Comment implémenter l'immutable infrastructure avec EC2 et CodeDeploy ?",
    choices: ["A. Modifier les instances existantes en place lors de chaque déploiement","B. Créer de nouvelles AMIs pour chaque version (Packer/EC2 Image Builder), déployer de nouvelles instances, basculer le trafic, terminer les anciennes — jamais modifier les instances en production","C. Utiliser SSM Run Command pour mettre à jour le code sur les instances","D. L'immutable infrastructure ne s'applique pas à EC2"],
    answer: 1,
    exp: "Immutable Infrastructure : chaque déploiement crée de nouvelles instances depuis une nouvelle AMI (baked image avec l'application installée). Flux : 1) Build → nouvelle AMI via EC2 Image Builder ou Packer. 2) Mettre à jour le Launch Template avec la nouvelle AMI. 3) Instance Refresh ASG (ou Blue/Green). 4) Les nouvelles instances démarrent proprement. 5) Terminer les anciennes. Avantage : reproductibilité, pas de configuration drift."
  },
  {
    id: "aws-soa-c03-j7-49",
    q: "Quelle est la différence entre CodeCommit et GitHub dans le contexte AWS ?",
    choices: ["A. CodeCommit est un service Git managé dans AWS — intégration native avec CodePipeline, IAM pour l'authentification, chiffrement at rest. GitHub est externe à AWS","B. CodeCommit supporte uniquement SVN","C. GitHub est officiellement recommandé par AWS au lieu de CodeCommit","D. Les deux sont identiques"],
    answer: 0,
    exp: "AWS CodeCommit est un service de repositories Git hébergé dans AWS, avec intégration native IAM (authentification via credentials IAM ou SSH), chiffrement au repos avec KMS, et intégration directe avec CodePipeline sans configuration supplémentaire. GitHub est externe mais aussi supporté par CodePipeline via connections OAuth/GitHub Apps. Note : AWS a réduit les investissements sur CodeCommit en 2023, mais il reste disponible."
  },
  {
    id: "aws-soa-c03-j7-50",
    q: "Comment optimiser les coûts d'un pipeline CodePipeline + CodeBuild qui s'exécute fréquemment ?",
    choices: ["A. Utiliser des instances EC2 Reserved pour CodeBuild","B. Utiliser CodeBuild avec des compute types appropriés (arm1.small pour les builds simples), cacher les dépendances (npm, maven) dans S3 pour éviter les re-téléchargements","C. Limiter le nombre d'exécutions du pipeline à 1 par jour","D. Supprimer les stages de test pour accélérer les builds"],
    answer: 1,
    exp: "Optimisation coûts CodeBuild : 1) Choisir le compute type minimal suffisant (arm1.small est moins cher que general1.medium). 2) Activer le cache CodeBuild : stocker les dépendances (node_modules, .m2/repository) dans S3 ou localement — réduit le temps de build de 50-70%. 3) Build badge + notifications pour éviter les builds redondants. CodeBuild factue à la minute."
  }
]=[
{id:"aws-soa-c03-j7-1",q:"Qu'est-ce qu'une 'Golden AMI' et pourquoi l'utiliser ?",choices:["A. Une AMI achetée sur AWS Marketplace avec licence premium","B. Une AMI pré-configurée avec l'OS durci, les agents (CloudWatch, SSM), les configurations de sécurité et les mises à jour — base standardisée pour toutes les instances","C. Une AMI avec des crédits CPU illimités","D. L'AMI par défaut fournie par AWS pour chaque région"],answer:1,exp:"Une Golden AMI est une image de machine personnalisée servant de base standardisée pour votre organisation : OS durci selon vos politiques, agents installés (CloudWatch, SSM, antivirus), configurations de sécurité appliquées, dernières mises à jour. Avantages : déploiements plus rapides, cohérence, conformité garantie dès le lancement."},
{id:"aws-soa-c03-j7-2",q:"Comment EC2 Image Builder automatise-t-il la création des AMI ?",choices:["A. Il surveille les mises à jour AWS et recrée les AMI automatiquement","B. Via des pipelines qui définissent : l'image de base, les composants à installer/configurer, les tests à exécuter, et le planning de reconstruction","C. Il clone automatiquement les AMI existantes vers toutes les régions","D. Il génère des AMI en analysant les instances EC2 en production"],answer:1,exp:"EC2 Image Builder : Pipeline = Image Recipe (base AMI + components) + Infrastructure Config (instance type, VPC pour build) + Distribution Config (régions cibles). Les Composants sont des scripts de build/validate/test. Le pipeline peut être déclenché manuellement, selon un schedule, ou lors de mises à jour de l'AMI de base."},
{id:"aws-soa-c03-j7-3",q:"Quelle est la différence entre un conteneur ECS lancé en mode EC2 et en mode Fargate ?",choices:["A. EC2 : vous gérez les instances sous-jacentes ; Fargate : AWS gère l'infrastructure de compute (serverless containers)","B. Fargate est limité à 1 vCPU max, EC2 n'a pas de limite","C. EC2 supporte Docker, Fargate utilise un format de conteneur propriétaire","D. Fargate ne supporte pas les task definitions ECS"],answer:0,exp:"EC2 launch type : vous provisionnez et gérez les instances EC2 (ECS cluster), plus de contrôle sur l'infrastructure. Fargate : AWS gère le compute, vous définissez seulement le CPU/mémoire par task. Fargate = moins de gestion opérationnelle, paiement à l'usage. EC2 = meilleur coût pour les workloads stables, plus de personnalisation."},
{id:"aws-soa-c03-j7-4",q:"Quelle politique de lifecycle ECR supprime automatiquement les images non utilisées pour réduire les coûts ?",choices:["A. ECR Image Scanning Policy","B. ECR Lifecycle Policy — règles basées sur le nombre d'images, l'âge, ou les tags","C. ECR Repository Policy","D. ECR Replication Rule"],answer:1,exp:"Les ECR Lifecycle Policies définissent des règles pour supprimer automatiquement les images. Exemples : garder seulement les 10 dernières images non-taguées, supprimer les images non-taguées de plus de 30 jours, garder les N dernières images tagguées 'prod'. Cela réduit les coûts de stockage ECR sans intervention manuelle."},
{id:"aws-soa-c03-j7-5",q:"Comment partager une AMI privée avec un autre compte AWS ?",choices:["A. Changer les permissions de l'AMI pour ajouter l'ID du compte AWS cible","B. Copier l'AMI dans le compte cible via la console","C. Utiliser AWS Resource Access Manager (RAM) pour partager l'AMI","D. A ou C selon le cas d'usage"],answer:3,exp:"Deux méthodes : 1) Modify Image Attribute pour ajouter le compte cible (LaunchPermissions) — le compte cible peut alors lancer des instances. 2) AWS RAM pour partager des AMI dans une Organisation AWS. Note : pour partager des AMI chiffrées avec KMS, il faut aussi partager la clé KMS avec le compte cible."},
{id:"aws-soa-c03-j7-6",q:"Un admin remarque que la tâche ECS s'arrête continuellement avec le code d'erreur 'OutOfMemoryError'. Quelle est l'action corrective ?",choices:["A. Réduire le nombre de conteneurs dans la task definition","B. Augmenter la valeur 'memory' dans la task definition pour allouer plus de RAM au conteneur","C. Changer l'instance type EC2 dans le cluster","D. Activer le swap pour ECS"],answer:1,exp:"Dans une task definition ECS, les paramètres 'memory' (limite stricte) et 'memoryReservation' (soft limit) définissent la mémoire allouée au conteneur. Si l'application dépasse la limite 'memory', ECS tue le conteneur (OOM). La solution est d'augmenter la valeur memory dans la task definition."},
{id:"aws-soa-c03-j7-7",q:"Quelle est la différence entre l'ID AMI (ami-xxxxxxxx) et le snapshot sous-jacent ?",choices:["A. L'AMI et le snapshot sont la même chose avec des noms différents","B. L'AMI est un 'template' de lancement qui référence un ou plusieurs snapshots EBS ; le snapshot est la copie réelle des données disque","C. L'AMI stocke les données, le snapshot stocke la configuration","D. Les snapshots sont temporaires, les AMI sont permanentes"],answer:1,exp:"Une AMI est essentiellement un pointeur/template qui contient : les métadonnées de lancement (architecture, virtualisation, mapping des volumes) et les références aux snapshots EBS. Les snapshots EBS contiennent les données réelles du disque. Supprimer une AMI (deregister) ne supprime pas automatiquement les snapshots sous-jacents."},
{id:"aws-soa-c03-j7-8",q:"Qu'est-ce qu'une ECS Service dans le contexte de ECS ?",choices:["A. Un service AWS qui gère ECS (similaire à RDS pour les bases de données)","B. Un composant ECS qui maintient un nombre désiré de tasks en cours d'exécution, avec load balancing et déploiement continu","C. Un ensemble de clusters ECS dans une région","D. La couche réseau d'ECS gérant les communications entre conteneurs"],answer:1,exp:"Un ECS Service est un composant long-running qui : maintient le desired count de tasks, les redistribue si elles échouent, s'intègre avec l'ALB/NLB pour la distribution du trafic, et supporte le rolling update (déploiement sans interruption). Contrairement aux tasks standalone (batch jobs), les services sont conçus pour des workloads continus."},
{id:"aws-soa-c03-j7-9",q:"EC2 Image Builder crée une AMI dans us-east-1. Comment déployer cette AMI automatiquement dans 5 régions supplémentaires ?",choices:["A. Copier manuellement l'AMI dans chaque région via la console","B. Configurer une Distribution Configuration dans Image Builder avec les régions cibles","C. Utiliser AWS Organizations pour distribuer les AMI","D. Créer 5 pipelines Image Builder, un par région"],answer:1,exp:"La Distribution Configuration d'EC2 Image Builder définit les comptes AWS et régions cibles où l'AMI sera automatiquement copiée après création. Cela peut inclure le partage avec d'autres comptes. Un seul pipeline peut gérer la distribution dans plusieurs régions simultanément."},
{id:"aws-soa-c03-j7-10",q:"Qu'est-ce que l'ECR Image Scanning et quand se déclenche-t-il ?",choices:["A. ECR analyse les images pour détecter les vulnérabilités CVE. Peut être configuré en 'scan on push' (automatique à chaque push) ou 'manual' (à la demande)","B. ECR analyse uniquement les images lors du pull pour le déploiement","C. ECR Image Scanning nécessite Amazon Inspector séparé","D. Le scanning n'est disponible que pour les images publiques ECR"],answer:0,exp:"ECR Basic Scanning (powered by Clair) et Enhanced Scanning (powered by Amazon Inspector) détectent les vulnérabilités dans les images. 'Scan on push' active le scan automatique à chaque push d'image. Les résultats incluent le CVE, la sévérité (Critical, High, Medium...). Enhanced Scanning offre une analyse continue et plus détaillée."},
{id:"aws-soa-c03-j7-11",q:"Quelle commande Docker est utilisée pour authentifier le Docker CLI avec ECR ?",choices:["A. docker login --username AWS --password $(aws ecr get-login-password)","B. aws ecr authenticate","C. docker ecr login","D. aws ecr get-authorization-token | docker login"],answer:0,exp:"La commande standard pour s'authentifier avec ECR est : aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com. Le token ECR expire après 12 heures. Dans les pipelines CI/CD, utiliser le IAM role de l'instance/service pour éviter les secrets."},
{id:"aws-soa-c03-j7-12",q:"Comment ECS déploie-t-il une nouvelle version d'une application sans interruption ?",choices:["A. ECS remplace toutes les tasks simultanément (blue/green automatique)","B. ECS utilise le Rolling Update : remplace progressivement les anciennes tasks par de nouvelles selon minimum/maximum healthy percent","C. ECS n'a pas de mécanisme de déploiement sans interruption","D. ECS nécessite CodeDeploy pour tout déploiement"],answer:1,exp:"ECS Rolling Update (déploiement par défaut) : paramètres Minimum Healthy Percent (% de tasks actives pendant le déploiement) et Maximum Percent (% max de tasks pouvant être active). Exemple: 50/200 = arrête 50% avant de lancer les nouvelles. ECS Blue/Green via CodeDeploy est aussi possible mais nécessite une configuration supplémentaire."},
{id:"aws-soa-c03-j7-13",q:"Quelle est la limite de taille maximale d'une image Docker pour ECR ?",choices:["A. 1 GB","B. 10 GB","C. Pas de limite de taille par image (limite sur le repository total)","D. 20 GB par image, 500 GB par repository"],answer:2,exp:"Il n'y a pas de limite de taille par image dans ECR. La limite pratique est la taille totale du repository et les quotas de stockage. ECR stocke les layers de l'image (chaque layer est dédupliqué), donc les images partageant des layers communs ne multiplient pas le stockage."},
{id:"aws-soa-c03-j7-14",q:"Un développeur veut tester une nouvelle version d'une AMI sans impacter la production. Quelle approche utiliser avec EC2 Image Builder ?",choices:["A. Créer un pipeline séparé pour la version de test","B. Utiliser la même AMI en production et test","C. Utiliser les Image Builder Components avec des tests stages (validate phase) avant la distribution","D. Désactiver le pipeline de production pendant les tests"],answer:2,exp:"EC2 Image Builder comprend une phase de test/validation dans le pipeline : après la build, une instance est lancée depuis la nouvelle AMI et les composants de test (Validate) s'exécutent. Si les tests échouent, l'AMI n'est pas distribuée. Cela permet de valider automatiquement la nouvelle AMI avant déploiement."},
{id:"aws-soa-c03-j7-15",q:"Qu'est-ce qu'un conteneur 'sidecar' dans une ECS Task Definition ?",choices:["A. Une task de backup qui tourne en parallèle","B. Un conteneur supplémentaire dans la même task qui partage le réseau et les volumes avec le conteneur principal (logging, monitoring, proxy)","C. Un conteneur réservé aux tests","D. Le conteneur ECS infra-agent gérant les communications réseau"],answer:1,exp:"Un sidecar est un conteneur auxiliaire dans la même task definition. Il partage le namespace réseau (localhost) et peut partager des volumes. Cas d'usage : agent de log (Fluentd), proxy de service mesh (Envoy), agent de monitoring (Datadog), collecteur de métriques. Les sidecars sont souvent des conteneurs 'essential: false' (non critiques pour la task)."},
{id:"aws-soa-c03-j7-16",q:"Comment AMI Sharing fonctionne-t-elle avec les images chiffrées avec CMK KMS ?",choices:["A. Les AMI chiffrées avec CMK ne peuvent pas être partagées","B. L'AMI peut être partagée mais le compte cible doit avoir accès à la CMK du compte source ET doit re-chiffrer avec sa propre CMK lors de la copie","C. AWS déchiffre automatiquement l'AMI lors du partage","D. Il faut d'abord supprimer le chiffrement avant de partager"],answer:1,exp:"Pour partager une AMI chiffrée avec CMK : 1) Partager l'AMI (LaunchPermissions). 2) Partager la CMK KMS avec le compte cible (key policy kms:DescribeKey, kms:ReEncrypt, kms:CreateGrant). 3) Le compte cible doit copier l'AMI dans son compte avec sa propre CMK pour l'utiliser normalement. Ne pas oublier l'étape de partage de la clé KMS."},
{id:"aws-soa-c03-j7-17",q:"Qu'est-ce que l'ECS Container Insights ?",choices:["A. Un outil pour optimiser les images Docker","B. Une fonctionnalité CloudWatch qui collecte, agrège et analyse les métriques et logs des clusters ECS (CPU, mémoire, réseau, tasks)","C. L'interface de monitoring intégrée dans la console ECS","D. Un service de scanning de vulnérabilités pour les conteneurs ECS"],answer:1,exp:"Container Insights pour ECS collecte des métriques détaillées sur les clusters, services et tasks (utilisation CPU/mémoire, nombre de tasks running/stopped, erreurs réseau) et les publie dans CloudWatch sous le namespace /aws/ecs. Fonctionne aussi pour EKS. Permet la création d'alarmes sur les performances des conteneurs."},
{id:"aws-soa-c03-j7-18",q:"Comment déployer automatiquement une nouvelle image Docker vers ECS quand une nouvelle image est poussée dans ECR ?",choices:["A. ECS se met à jour automatiquement quand une nouvelle image est disponible dans ECR","B. Configurer une règle EventBridge sur l'événement ECR image push → déclencher un CodePipeline ou une Lambda qui force un ECS service redeploy","C. Activer 'Auto Deploy' dans les paramètres du service ECS","D. Utiliser ECS Scheduled Tasks pour vérifier ECR toutes les heures"],answer:1,exp:"ECS ne surveille pas automatiquement ECR. Pour un pipeline automatique : EventBridge Rule sur l'événement ECR (ECR Image Action) → CodePipeline avec source ECR → déploiement ECS. Alternative plus simple : Lambda qui appelle UpdateService (force new deployment) déclenchée par l'événement ECR push."},
{id:"aws-soa-c03-j7-19",q:"Quelle est la limite maximale de mémoire pour un conteneur Fargate ?",choices:["A. 8 GB","B. 16 GB","C. 30 GB","D. 120 GB"],answer:3,exp:"Fargate supporte jusqu'à 120 GB de mémoire et 16 vCPU par task (Fargate Platform Version 1.4+). Les combinaisons CPU/mémoire sont prédéfinies (0.5 vCPU → 1-4 GB, 1 vCPU → 2-8 GB, ..., 16 vCPU → 32-120 GB). Pour des besoins en mémoire plus élevés, utiliser ECS avec des instances EC2 dédiées."},
{id:"aws-soa-c03-j7-20",q:"Qu'est-ce qu'un composant 'Build' dans EC2 Image Builder et comment diffère-t-il d'un composant 'Test' ?",choices:["A. Build installe et configure le logiciel sur l'AMI en cours de création ; Test valide que l'AMI fonctionne correctement avant distribution","B. Build est exécuté sur l'instance de build, Test sur l'instance de production","C. Build et Test font la même chose, juste à des étapes différentes","D. Build est en Python, Test est en Bash"],answer:0,exp:"Dans Image Builder, les composants ont trois phases : Build (installation, configuration), Validate (exécuté après le build, sur la même instance), et Test (exécuté sur une instance fraîche lancée depuis l'AMI créée). Un échec en phase Build/Validate annule la création. Un échec en Test empêche la distribution mais l'AMI existe."}
];

// ── Jour 8 — CloudFormation, CDK, StackSets ────────────────────────────────────
window.QDATA[8,
  {
    id: "aws-soa-c03-j8-21",
    q: "Qu'est-ce qu'AWS OpsWorks et quand est-il recommandé par rapport à CloudFormation ?",
    choices: ["A. OpsWorks est plus puissant que CloudFormation pour tout type de déploiement","B. OpsWorks Stacks (Chef/Puppet) : pour les équipes qui utilisent déjà Chef ou Puppet et veulent les conserver sur AWS. CFN : infrastructure as code généraliste","C. OpsWorks remplace CodeDeploy","D. OpsWorks gère uniquement les bases de données"],
    answer: 1,
    exp: "AWS OpsWorks Stacks (basé sur Chef) et OpsWorks for Chef/Puppet Automate sont des services de configuration management. Recommandés quand une équipe a déjà des investissements en Chef ou Puppet et veut les gérer depuis AWS. Pour les nouveaux projets, CloudFormation, CDK ou Terraform sont généralement préférés. AWS annonce la fin d'OpsWorks Stacks en mai 2024."
  },
  {
    id: "aws-soa-c03-j8-22",
    q: "Comment AWS Elastic Beanstalk gère-t-il les mises à jour de l'environnement avec 'Immutable Deployments' ?",
    choices: ["A. Immutable crée un nouveau Auto Scaling Group temporaire, déploie la nouvelle version, valide les health checks, puis remplace l'ancien ASG — aucune modification en place","B. Immutable modifie les instances existantes sans downtime","C. Immutable nécessite un arrêt complet de l'environnement","D. Immutable n'est disponible que pour les environnements Docker"],
    answer: 0,
    exp: "Beanstalk Immutable Deployment : 1) Crée un ASG temporaire avec 1 instance. 2) Déploie la nouvelle version. 3) Health check. 4) Si OK : transfère toutes les instances vers le nouvel ASG. 5) Supprime l'ancien ASG. Zéro modification en place. Plus long et coûteux (double capacité temporaire) mais le plus sûr. Rollback rapide : supprimer le nouvel ASG."
  },
  {
    id: "aws-soa-c03-j8-23",
    q: "Quelle fonctionnalité SSM permet d'exécuter des scripts sur des instances EC2 sans accès SSH ou RDP ?",
    choices: ["A. SSM Run Command via l'agent SSM (AmazonSSMAgent) pré-installé, sans ouverture de ports inbound","B. SSM Session Manager nécessite un bastion host","C. Les scripts doivent être exécutés depuis CloudShell","D. AWS Config exécute les scripts de remédiation"],
    answer: 0,
    exp: "SSM Run Command : exécute des commandes/scripts via l'agent SSM sans SSH ni port 22 ouvert. L'agent communique via HTTPS outbound (port 443) vers les endpoints SSM. Prérequis : agent SSM installé + IAM role avec AmazonSSMFullAccess ou politique minimale. Les sorties des commandes sont capturables dans S3 ou CloudWatch Logs."
  },
  {
    id: "aws-soa-c03-j8-24",
    q: "Qu'est-ce que l'AWS Systems Manager Session Manager et comment diffère-t-il de SSH ?",
    choices: ["A. Session Manager fournit un accès shell sécurisé aux instances sans port 22, via l'agent SSM — sessions chiffrées, auditées dans CloudTrail, sans clé SSH","B. Session Manager nécessite un VPN pour fonctionner","C. Session Manager est uniquement pour Windows (RDP)","D. Session Manager et SSH sont identiques en termes de sécurité"],
    answer: 0,
    exp: "Session Manager : accès shell interactif via l'agent SSM, sans port 22 ouvert, sans bastion host, sans clé SSH. Avantages sécurité : 1) Sessions chiffrées end-to-end (TLS). 2) Toutes les commandes logguées dans CloudTrail et optionnellement dans S3/CloudWatch. 3) Accès contrôlé par IAM (pas de partage de clés SSH). 4) Fonctionne dans des instances sans IP publique."
  },
  {
    id: "aws-soa-c03-j8-25",
    q: "Comment Terraform diffère-t-il de CloudFormation pour la gestion de l'infrastructure AWS ?",
    choices: ["A. Terraform est multi-cloud (AWS, Azure, GCP, etc.) avec un état local/remote (tfstate). CloudFormation est AWS uniquement avec état géré par AWS","B. CloudFormation supporte plus de ressources AWS que Terraform","C. Terraform n'a pas de concept de drift detection","D. CloudFormation est open source, Terraform est propriétaire"],
    answer: 0,
    exp: "Terraform (HashiCorp) : multi-cloud, HCL language, état stocké dans tfstate (local ou Terraform Cloud/S3), plan/apply workflow, large écosystème de providers. CloudFormation : AWS uniquement, YAML/JSON, état géré par AWS (pas de fichier tfstate à gérer), intégration native AWS (IAM, CDK, Service Catalog). Pour AWS uniquement, les deux sont valides — souvent une question d'expertise et de préférence d'équipe."
  },
  {
    id: "aws-soa-c03-j8-26",
    q: "Qu'est-ce que l'AWS Proton et quel problème résout-il pour les équipes plateforme ?",
    choices: ["A. Un monitoring service pour les applications containerisées","B. Un service qui permet aux équipes plateforme de définir des templates d'infrastructure standardisés (environnements + services) que les développeurs déploient en self-service","C. Une alternative à CloudFormation pour les déploiements simples","D. Un service de déploiement de containers similaire à ECS"],
    answer: 1,
    exp: "AWS Proton : permet aux équipes plateforme de créer des 'Environment Templates' et 'Service Templates' (CFN ou Terraform) standardisés. Les développeurs déploient leurs applications dans ces environnements sans gérer l'infrastructure eux-mêmes. Résout le problème de gouvernance : standardisation de l'infra tout en permettant le self-service. Avec GitOps : mise à jour propagée automatiquement."
  },
  {
    id: "aws-soa-c03-j8-27",
    q: "Comment gérer les rollbacks automatiques dans CodeDeploy en cas d'échec de health checks ?",
    choices: ["A. Les rollbacks CodeDeploy sont uniquement manuels","B. Configurer 'Automatic Rollback' dans le Deployment Group — si les health checks échouent ou si une alarme CloudWatch se déclenche, CodeDeploy re-déploie automatiquement la version précédente","C. CodeDeploy attend toujours une intervention humaine pour les rollbacks","D. Les rollbacks automatiques ne fonctionnent que pour Lambda"],
    answer: 1,
    exp: "CodeDeploy Automatic Rollback : configurable dans le Deployment Group avec deux triggers : 1) Deployment fails (health checks ALB échouent). 2) Alarm threshold met (alarme CloudWatch définie, ex: error rate élevé). En cas de rollback, CodeDeploy re-déploie la dernière révision réussie. Les logs indiquent 'AUTOMATIC_ROLLBACK'."
  },
  {
    id: "aws-soa-c03-j8-28",
    q: "Quelle est la différence entre ECS Fargate et ECS EC2 Launch Type ?",
    choices: ["A. Fargate : serverless — AWS gère les instances sous-jacentes, paiement par vCPU/mémoire utilisés par task. EC2 : vous gérez les instances du cluster, paiement par instance EC2","B. Fargate est plus rapide pour démarrer les containers","C. EC2 Launch Type est moins cher dans tous les cas","D. Fargate ne supporte pas les volumes EFS"],
    answer: 0,
    exp: "ECS Fargate : vous ne gérez pas d'instances EC2 — AWS provisionne, scale, patch les machines sous-jacentes. Paiement granulaire par task (vCPU + mémoire). Idéal pour : simplifier ops, charges variables. ECS EC2 : vous gérez un cluster d'instances EC2 (scaling, patching, sizing). Paiement par instance. Idéal pour : workloads stables, instances reservées, besoins spécifiques (GPU, instance store)."
  },
  {
    id: "aws-soa-c03-j8-29",
    q: "Comment CodePipeline peut-il être déclenché automatiquement lors d'un push sur une branche GitHub ?",
    choices: ["A. CodePipeline poll GitHub toutes les minutes","B. GitHub webhook → EventBridge (ou CodeStar Connections) → CodePipeline trigger. Les connections CodeStar (GitHub App) sont préférées aux webhooks manuels","C. Il faut configurer une Lambda pour déclencher CodePipeline","D. CodePipeline ne peut pas s'intégrer avec GitHub — utiliser CodeCommit"],
    answer: 1,
    exp: "Intégration GitHub → CodePipeline : 1) CodeStar Connections (recommandé) : crée une connexion OAuth/GitHub App entre AWS et GitHub. CodePipeline reçoit des événements push via la connexion. 2) Webhook : créer manuellement un webhook GitHub pointant vers une URL CodePipeline. Les connexions CodeStar sont plus fiables et sécurisées que les webhooks."
  },
  {
    id: "aws-soa-c03-j8-30",
    q: "Qu'est-ce que l'EC2 UserData et quand est-il exécuté ?",
    choices: ["A. UserData est exécuté à chaque démarrage de l'instance par défaut","B. UserData est exécuté UNE SEULE FOIS lors du premier démarrage de l'instance (par cloud-init) — pour l'installation de packages, la configuration initiale","C. UserData est un script qui s'exécute sur demande via SSM","D. UserData est exécuté toutes les heures en production"],
    answer: 1,
    exp: "UserData s'exécute lors du PREMIER démarrage de l'instance (via cloud-init). Par défaut, ne s'exécute qu'une seule fois. Logs dans /var/log/cloud-init-output.log. Pour re-exécuter à chaque démarrage : modifier le script pour vérifier l'exécution précédente ou utiliser SSM State Manager. Utile pour : installation de packages, configuration, rejoindre un domaine AD, démarrer des services."
  },
  {
    id: "aws-soa-c03-j8-31",
    q: "Comment déployer une Lambda function avec une nouvelle version sans interrompre le trafic existant ?",
    choices: ["A. Modifier directement la version $LATEST et espérer que le déploiement soit rapide","B. Lambda Aliases + Traffic Shifting : publier une nouvelle version, créer/modifier un alias pour router X% vers la nouvelle version (canary), avec CodeDeploy Lambda ou manuellement","C. Mettre à jour la fonction Lambda force un redéploiement sans interruption automatiquement","D. Utiliser un NLB pour distribuer le trafic entre les versions Lambda"],
    answer: 1,
    exp: "Déploiement sans downtime Lambda : 1) Publier une nouvelle version (1, 2, 3...). 2) Lambda Alias (ex: 'prod') permet de pointer vers une version avec weight split : 95% → v1, 5% → v2. 3) CodeDeploy Linear/Canary/AllAtOnce gère le shift progressif avec rollback automatique si CloudWatch alarms déclenchées. L'alias garde une URL stable."
  },
  {
    id: "aws-soa-c03-j8-32",
    q: "Quelle est la différence entre EKS Fargate et EKS Managed Node Groups ?",
    choices: ["A. EKS Fargate : chaque pod tourne dans une VM isolée gérée par AWS. EKS Managed Node Groups : nœuds EC2 gérés (provisioning, patching) mais pas serverless","B. EKS Fargate supporte DaemonSets, Managed Node Groups non","C. EKS Managed Node Groups sont moins chers que Fargate dans tous les cas","D. Les deux sont identiques — différence uniquement de terminologie"],
    answer: 0,
    exp: "EKS Fargate : chaque pod tourne dans une micro-VM Fargate isolée (pas de partage de nœuds). AWS gère tout. Limitations : pas de DaemonSets, pas de volumes hostPath, pas de privilèges Docker. EKS Managed Node Groups : nœuds EC2 gérés par AWS (Auto Scaling, patching via Launch Templates EKS-optimized AMI). Vous contrôlez le type d'instance et les configurations avancées."
  },
  {
    id: "aws-soa-c03-j8-33",
    q: "Un SysOps admin doit s'assurer que tous les nouveaux buckets S3 créés dans un compte ont le chiffrement activé. Quelle est l'approche la plus automatisée ?",
    choices: ["A. Envoyer des rappels manuels à l'équipe","B. AWS Config rule 's3-bucket-server-side-encryption-enabled' + remédiation automatique SSM Automation pour activer SSE-S3 sur les buckets non conformes","C. Créer une SCP qui refuse la création de buckets sans chiffrement","D. B et C sont valides et complémentaires (préventif + détectif)"],
    answer: 3,
    exp: "Défense en profondeur : 1) SCP préventive : Deny s3:CreateBucket si condition aws:RequestedEncryption non définie (empêche la création). 2) Config Rule + Auto-remediation (détectif + correctif) : si un bucket existant n'est pas chiffré, SSM Automation active SSE automatiquement. Les deux ensemble assurent qu'aucun bucket non chiffré n'existe."
  },
  {
    id: "aws-soa-c03-j8-34",
    q: "Qu'est-ce que l'AWS CloudShell et quand est-il utile ?",
    choices: ["A. Un service de monitoring cloud","B. Un terminal de ligne de commande basé sur navigateur, préconfigured avec AWS CLI et les outils courants, sans configuration locale nécessaire","C. Un service de déploiement de containers","D. Un éditeur de templates CloudFormation graphique"],
    answer: 1,
    exp: "AWS CloudShell est un terminal bash dans le navigateur (console AWS) avec AWS CLI, Python, Node.js, git, etc. pré-installés. Authentifié avec les credentials de la session console. 1 GB de stockage persistant. Utile pour : exécuter des commandes AWS CLI sans configurer un environnement local, scripts d'administration, test rapide de pipelines. Pas d'accès aux instances EC2."
  },
  {
    id: "aws-soa-c03-j8-35",
    q: "Comment tester une modification de CloudFormation avant de l'appliquer en production ?",
    choices: ["A. L'appliquer directement en production et annuler si nécessaire","B. Utiliser cfn-lint pour la validation syntaxique + AWS CloudFormation Guard (cfn-guard) pour les règles de conformité + déployer en développement/staging d'abord","C. Envoyer le template à AWS Support pour validation","D. Utiliser la preview mode de la console CFN"],
    answer: 1,
    exp: "Pipeline de validation CFN : 1) cfn-lint : validation syntaxique et vérification des types. 2) CloudFormation Guard (cfn-guard) : règles personnalisées (ex: tous les S3 doivent être chiffrés). 3) Déployer en dev/staging : valider le ChangeSet. 4) Appliquer en production avec ChangeSet review. 5) Optionnel : cfn-nag pour les checks de sécurité."
  },
  {
    id: "aws-soa-c03-j8-36",
    q: "Quelle est la différence entre les registres de conteneurs ECR Public Gallery et ECR Private ?",
    choices: ["A. ECR Public : images disponibles publiquement, gratuites pour 50 GB/mois, optimisé pour la distribution mondiale. ECR Private : images privées dans votre compte, chiffrées, contrôle IAM","B. ECR Public est plus lent qu'ECR Private","C. ECR Private ne supporte pas la multi-architecture","D. Les deux ont les mêmes fonctionnalités mais des URLs différentes"],
    answer: 0,
    exp: "ECR Public (gallery.ecr.aws) : partage d'images publiques (open source, outils, images de base). Gratuit pour 50 GB/mois de transfert vers internet. ECR Private : registre dans votre compte, chiffré au repos (KMS), contrôle d'accès IAM, scan de vulnérabilités (Basic + Enhanced avec Inspector), tags immuables. Utilisé pour les images propriétaires."
  },
  {
    id: "aws-soa-c03-j8-37",
    q: "Un ops admin remarque que les déploiements CloudFormation échouent avec l'erreur 'ROLLBACK_IN_PROGRESS'. Quelle est la première action ?",
    choices: ["A. Supprimer le stack et recommencer","B. Consulter les 'Stack Events' dans la console CFN pour trouver l'événement avec statut 'CREATE_FAILED' et le message d'erreur précis","C. Contacter AWS Support","D. Augmenter les permissions IAM du rôle CFN"],
    answer: 1,
    exp: "Diagnostic de ROLLBACK_IN_PROGRESS : dans la console CloudFormation → Stack Events tab → trouver l'événement 'CREATE_FAILED' ou 'UPDATE_FAILED' avec le message d'erreur détaillé. Erreurs courantes : permission IAM manquante, quota de service dépassé, dépendance circulaire, format de paramètre incorrect. L'événement ROLLBACK vient APRÈS l'erreur réelle."
  },
  {
    id: "aws-soa-c03-j8-38",
    q: "Comment AWS Amplify facilite-t-il le déploiement d'applications frontend sur AWS ?",
    choices: ["A. Amplify est un service de monitoring frontend","B. Amplify Hosting : déploiement continu depuis GitHub/GitLab/BitBucket, CDN global CloudFront, prévisualisations de PR, domaine custom avec HTTPS automatique — pour les SPAs et sites statiques","C. Amplify gère uniquement les applications React","D. Amplify remplace CloudFormation pour les applications web"],
    answer: 1,
    exp: "AWS Amplify Hosting : CI/CD intégré (connecte le repo Git, build automatique à chaque push), distribution via CloudFront, HTTPS avec ACM, domaines custom, branch previews (URL de preview par PR). Idéal pour : React, Vue, Angular, Next.js, Gatsby. Build configuré dans amplify.yml. Simplifie drastiquement le déploiement frontend sans gérer l'infrastructure."
  },
  {
    id: "aws-soa-c03-j8-39",
    q: "Qu'est-ce que le 'CodeDeploy Deployment Group' et comment est-il configuré ?",
    choices: ["A. Un groupe d'instances EC2 cibles avec des tags, ASG, ou ECS services — avec des configurations de déploiement, health checks, et politiques de rollback","B. Un groupe de développeurs avec accès à CodeDeploy","C. Un ensemble de pipelines CodePipeline liés","D. Un groupe de Lambda functions à déployer ensemble"],
    answer: 0,
    exp: "Deployment Group CodeDeploy : définit les cibles de déploiement (EC2 avec tags, ASG, ECS service, Lambda function), la configuration (AllAtOnce, etc.), les load balancers, les rollback automatiques, et les alarmes CloudWatch. Un Application CodeDeploy peut avoir plusieurs Deployment Groups (ex: staging, production) avec des configurations différentes."
  },
  {
    id: "aws-soa-c03-j8-40",
    q: "Comment utiliser AWS Config pour maintenir une 'configuration baseline' d'une organisation ?",
    choices: ["A. Config Rules définissent l'état souhaité. L'Aggregator collecte les données de conformité de tous les comptes. Les remédiation automatisées corrigent les non-conformités","B. Config est uniquement pour l'audit historique","C. Config ne supporte pas les organisations multi-comptes","D. Config Rules ne peuvent pas être automatiquement remédiées"],
    answer: 0,
    exp: "Conformité avec Config : 1) Config Rules (managed ou custom) définissent les standards. 2) Config Aggregator collecte les données de conformité de tous les comptes de l'org. 3) Conformance Packs groupent les règles liées (ex: pack CIS, PCI-DSS). 4) Remédiation automatique SSM Automation pour les violations. 5) Dashboard de conformité centralisé."
  },
  {
    id: "aws-soa-c03-j8-41",
    q: "Quelle est la stratégie recommandée pour gérer plusieurs environnements (dev, staging, prod) avec CloudFormation ?",
    choices: ["A. Un seul template avec des paramètres pour l'environnement","B. Des templates séparés par environnement","C. Un seul template avec des paramètres + des fichiers de configuration par environnement (dev.json, staging.json, prod.json) ou utiliser CFN Stacksets avec des paramètre overrides","D. Utiliser Terraform au lieu de CloudFormation pour ce cas"],
    answer: 2,
    exp: "Approche recommandée : un seul template CloudFormation paramétré (taille d'instance, nombre d'instances, etc.) + des fichiers de paramètres par environnement (dev-params.json, staging-params.json, prod-params.json). La commande CLI : aws cloudformation deploy --parameter-overrides file://prod-params.json. Dans les pipelines CI/CD : même étape, fichier de paramètres différent selon la branche."
  },
  {
    id: "aws-soa-c03-j8-42",
    q: "Qu'est-ce que AWS AppConfig et comment se distingue-t-il de SSM Parameter Store ?",
    choices: ["A. Les deux sont identiques","B. AppConfig : déploiement de configurations applicatives avec validation, déploiement graduel (canary), rollback automatique — pour les feature flags et configurations dynamiques. SSM Param Store : stockage de paramètres statiques","C. SSM Param Store supporte les déploiements graduels","D. AppConfig est uniquement pour les applications mobiles"],
    answer: 1,
    exp: "AWS AppConfig étend SSM Parameter Store avec des fonctionnalités de déploiement : 1) Validation avant déploiement (JSON Schema ou Lambda validator). 2) Déploiement progressif (Linear, Exponential). 3) Rollback automatique si CloudWatch alarme se déclenche. 4) Feature flags dynamiques sans redéploiement. SSM Param Store est pour les secrets/paramètres statiques. AppConfig pour les configurations dynamiques."
  },
  {
    id: "aws-soa-c03-j8-43",
    q: "Comment ECS gère-t-il la mise à jour de secrets (Secrets Manager) sans redéployer les containers ?",
    choices: ["A. Les containers ECS lisent les secrets au runtime via l'API Secrets Manager — les changements de secrets nécessitent un re-déploiement pour être pris en compte dans les variables d'environnement injectées au démarrage","B. ECS met à jour automatiquement les secrets dans les containers en cours d'exécution","C. Les secrets Secrets Manager dans ECS sont mis en cache indéfiniment","D. Les containers ECS ne peuvent pas utiliser Secrets Manager"],
    answer: 0,
    exp: "Dans ECS, les secrets Secrets Manager/SSM sont injectés comme variables d'environnement AU DÉMARRAGE du container (via le task definition). Si le secret change, les containers en cours d'exécution continuent avec l'ancienne valeur jusqu'au redémarrage. Pour les mises à jour de secrets sans redéploiement, l'application doit appeler l'API Secrets Manager directement au runtime."
  },
  {
    id: "aws-soa-c03-j8-44",
    q: "Quelle est la différence entre ECS Task et ECS Service ?",
    choices: ["A. Task : exécution ponctuelle d'un ou plusieurs containers. Service : maintient un nombre défini de tasks en cours d'exécution (avec ALB, auto-restart, rolling updates)","B. Les deux sont identiques","C. Service est pour le développement, Task pour la production","D. Task gère plusieurs services simultanément"],
    answer: 0,
    exp: "ECS Task : exécution unique ou ponctuelle (batch job, migration DB, cronjob). ECS Service : maintient N replicas d'une task en cours d'exécution, gère le redémarrage automatique, l'enregistrement/désenregistrement ALB, les rolling updates. Pour les APIs/microservices = Service. Pour les jobs ponctuels = Task."
  },
  {
    id: "aws-soa-c03-j8-45",
    q: "Comment configurer le monitoring de coûts AWS pour recevoir des alertes avant de dépasser le budget ?",
    choices: ["A. Consulter le Cost Explorer manuellement chaque semaine","B. Créer un AWS Budget avec un montant seuil et une action de notification SNS — AWS Budgets envoie une alerte quand les coûts atteignent un pourcentage du budget","C. Activer CloudWatch Billing Alerts dans la région us-east-1","D. B et C sont toutes deux valides"],
    answer: 3,
    exp: "Deux services pour les alertes budgétaires : 1) AWS Budgets : définir un budget mensuel (coût, utilisation, réservations, Savings Plans) avec des alertes à différents seuils (80%, 100%, prévision 110%). Notifications via SNS ou email. 2) CloudWatch Billing Alarms (dans us-east-1) : alarme sur la métrique EstimatedCharges. AWS Budgets est plus flexible et détaillé."
  },
  {
    id: "aws-soa-c03-j8-46",
    q: "Qu'est-ce que l'AWS Launch Wizard et quel est son cas d'usage ?",
    choices: ["A. Un assistant de déploiement guidé pour des applications enterprise spécifiques (SAP, SQL Server, Active Directory) avec des bonnes pratiques AWS intégrées","B. Un wizard pour créer des AMIs personnalisées","C. Un outil de migration de serveurs on-premise vers EC2","D. Un assistant de configuration de VPC"],
    answer: 0,
    exp: "AWS Launch Wizard : déploiement guidé pour des applications enterprise complexes : SAP HANA/S4, Microsoft SQL Server HA, Active Directory, Tableau, etc. Il dimensionne automatiquement l'infrastructure selon les guidelines des éditeurs, déploie avec les meilleures pratiques AWS, et génère un template CloudFormation de l'infrastructure créée."
  },
  {
    id: "aws-soa-c03-j8-47",
    q: "Un ops admin doit s'assurer que les instances EC2 dans un ASG restent patched. Quelle est l'approche la plus automatisée ?",
    choices: ["A. Se connecter manuellement à chaque instance","B. SSM Patch Manager + Maintenance Windows automatiques + EC2 Image Builder pour créer de nouvelles AMIs patchées périodiquement","C. Utiliser Amazon Inspector pour patcher automatiquement","D. Activer auto-update dans le OS de l'instance"],
    answer: 1,
    exp: "Approche complète de patching : 1) SSM Patch Manager + Maintenance Windows : patching automatique des instances existantes. 2) EC2 Image Builder (pipeline hebdomadaire) : crée des AMIs patchées à partir d'une AMI de base + patches + tests. 3) Instance Refresh ASG avec la nouvelle AMI : remplace les instances existantes par de nouvelles. Combinaison pour les deux approches : instances existantes patchées + nouvelles instances propres."
  },
  {
    id: "aws-soa-c03-j8-48",
    q: "Comment gérer les permissions granulaires pour les actions CodePipeline dans un environnement multi-équipe ?",
    choices: ["A. Donner les permissions admin à toutes les équipes","B. IAM policies avec des conditions sur les ressources (Pipeline ARN, Stage, Action) — ex: permission de déclencher uniquement les pipelines avec un tag spécifique","C. Un seul compte AWS pour toutes les équipes","D. Les permissions CodePipeline ne peuvent pas être grantées granulaires"],
    answer: 1,
    exp: "Contrôle d'accès CodePipeline avec IAM : 1) Conditions ResourceTag pour limiter l'accès aux pipelines tagués (ex: team=backend). 2) Actions IAM spécifiques : codepipeline:StartPipelineExecution (déclencher), codepipeline:GetPipeline (voir), codepipeline:PutApprovalResult (approuver). 3) IAM Identity Center avec des permission sets par équipe."
  },
  {
    id: "aws-soa-c03-j8-49",
    q: "Qu'est-ce que l'AWS CDK8s et quel est son rapport avec Kubernetes ?",
    choices: ["A. CDK8s est le nom de code de CDK v8","B. CDK8s est un framework open-source pour définir des manifestes Kubernetes (yaml) en utilisant des langages de programmation (TypeScript, Python) — générer des manifests K8s depuis du code","C. CDK8s déploie des applications Kubernetes sur AWS uniquement","D. CDK8s remplace Helm pour la gestion des packages Kubernetes"],
    answer: 1,
    exp: "CDK for Kubernetes (CDK8s) est un framework open-source (non AWS uniquement) qui permet de générer des manifestes Kubernetes YAML depuis du code TypeScript, Python, Java ou Go. Avantages : logique de programmation (boucles, conditions), réutilisabilité, test unitaires. Génère des manifests K8s standard — compatible avec n'importe quel cluster Kubernetes."
  },
  {
    id: "aws-soa-c03-j8-50",
    q: "Quelle est la stratégie recommandée pour déployer une architecture serverless (API Gateway + Lambda + DynamoDB) avec IaC ?",
    choices: ["A. Déployer manuellement via la console AWS","B. AWS SAM (Serverless Application Model) ou Serverless Framework — abstractions de haut niveau sur CloudFormation spécifiques aux architectures serverless","C. CloudFormation pur avec toutes les ressources définies manuellement","D. Terraform avec des modules community serverless"],
    answer: 1,
    exp: "AWS SAM (Serverless Application Model) est une extension de CloudFormation pour les architectures serverless : ressources simplifiées (AWS::Serverless::Function, AWS::Serverless::Api, AWS::Serverless::Table), déploiement local avec sam local, sam build/deploy. Génère des templates CFN en arrière-plan. Serverless Framework est une alternative multi-cloud. Les deux réduisent la verbosité de CFN pur pour le serverless."
  }
]=[
{id:"aws-soa-c03-j8-1",q:"Qu'est-ce qu'un CloudFormation Change Set et pourquoi l'utiliser ?",choices:["A. Un export de template CloudFormation vers un autre compte","B. Un aperçu des modifications qui seront apportées aux ressources lors d'une mise à jour de stack, avant exécution","C. Un historique des modifications passées sur une stack","D. Un ensemble de stacks liées entre elles par des cross-stack references"],answer:1,exp:"Un Change Set permet de prévisualiser les changements (ressources à créer, modifier, supprimer) avant d'appliquer une mise à jour. Cela évite les suppressions accidentelles de ressources critiques. Les actions possibles : Add, Modify, Remove. 'Replacement: true' indique qu'une ressource sera supprimée et recrée (interruption de service potentielle)."},
{id:"aws-soa-c03-j8-2",q:"Quelle est la différence entre CloudFormation Drift Detection et Change Sets ?",choices:["A. Drift Detection compare l'état actuel des ressources avec le template CloudFormation ; Change Sets prévisualisent les futures modifications","B. Ils font la même chose avec des noms différents","C. Drift Detection fonctionne uniquement sur les ressources EC2 ; Change Sets sur tous les services","D. Drift Detection nécessite des permissions supplémentaires, Change Sets non"],answer:0,exp:"Drift Detection identifie les divergences entre la configuration actuelle des ressources et ce qui est défini dans le template (modifications manuelles hors CloudFormation). Change Sets prévisualisent l'impact d'un update de template avant application. Les deux servent la gouvernance mais dans des directions différentes : passé vs futur."},
{id:"aws-soa-c03-j8-3",q:"Comment CloudFormation gère-t-il une erreur lors du déploiement d'un stack Update ?",choices:["A. L'update s'arrête et les ressources déjà modifiées restent dans leur état modifié","B. Par défaut, CloudFormation effectue un rollback automatique vers l'état précédent","C. L'erreur est ignorée et le déploiement continue","D. CloudFormation supprime le stack entier et le recrée"],answer:1,exp:"En cas d'échec lors d'un stack update, CloudFormation effectue un rollback automatique et restaure toutes les ressources à leur état précédent (état défini avant l'update). Ce comportement peut être désactivé avec DisableRollback=true. Les stacks en état UPDATE_ROLLBACK_FAILED nécessitent une intervention manuelle."},
{id:"aws-soa-c03-j8-4",q:"Qu'est-ce qu'une CloudFormation Stack Policy et comment diffère-t-elle des IAM policies ?",choices:["A. Les deux contrôlent les accès, les Stack Policies sont pour les ressources dans le stack, les IAM pour les utilisateurs","B. Une Stack Policy protège les ressources dans un stack contre les mises à jour accidentelles lors d'un stack update","C. Les IAM policies contrôlent qui peut créer des stacks, les Stack Policies contrôlent qui peut les supprimer","D. Stack Policies et IAM policies sont identiques pour CloudFormation"],answer:1,exp:"Une Stack Policy définit les ressources protégées contre les updates dans un stack CloudFormation. Elle s'applique aux actions 'Update:*' sur les types de ressources spécifiés. Par exemple : interdire la mise à jour des tables DynamoDB de production. Différent des IAM policies qui contrôlent qui peut appeler les APIs CloudFormation."},
{id:"aws-soa-c03-j8-5",q:"CloudFormation StackSets permet de déployer des stacks dans plusieurs comptes et régions. Quelle est la différence entre 'Service-managed' et 'Self-managed' StackSets ?",choices:["A. Service-managed utilise AWS Organizations pour gérer automatiquement les permissions et déploiements ; Self-managed nécessite la création manuelle des IAM roles","B. Service-managed est plus rapide, Self-managed offre plus de contrôle","C. Self-managed supporte plus de ressources AWS","D. Les deux sont identiques — c'est juste une préférence d'interface"],answer:0,exp:"Service-managed StackSets intégré avec AWS Organizations : AWS gère automatiquement les IAM roles dans les comptes membres, les nouveaux comptes peuvent être inclus automatiquement. Self-managed : vous créez et gérez les IAM roles AWSCloudFormationStackSetAdministrationRole et AWSCloudFormationStackSetExecutionRole dans chaque compte. Service-managed est recommandé pour les organisations."},
{id:"aws-soa-c03-j8-6",q:"Dans AWS CDK, quelle est la différence entre un 'Construct' de niveau L1, L2 et L3 ?",choices:["A. L1 = interfaces console, L2 = API, L3 = SDK","B. L1 = ressources CloudFormation brutes (CFN Resources), L2 = abstractions haut niveau avec valeurs par défaut sensées, L3 = patterns multi-ressources (Solutions Constructs)","C. Les niveaux correspondent aux versions du CDK","D. L3 coûte plus cher que L1 et L2"],answer:1,exp:"CDK L1 (CFN constructs) : équivalent 1:1 aux ressources CloudFormation, nommés CfnXxx (ex: CfnBucket). L2 (AWS constructs) : abstractions avec valeurs par défaut intelligentes, méthodes pratiques (ex: Bucket avec grant*, versioned=true). L3 (Solutions Constructs) : patterns prêts à l'emploi regroupant plusieurs services (ex: LambdaToS3)."},
{id:"aws-soa-c03-j8-7",q:"Quelle fonctionnalité CloudFormation permet d'importer des ressources AWS existantes dans un stack sans les recréer ?",choices:["A. CloudFormation Update","B. CloudFormation Resource Import","C. CloudFormation Drift Detection","D. AWS Config Resource Recorder"],answer:1,exp:"CloudFormation Resource Import permet d'adopter des ressources existantes dans un stack sans les supprimer/recréer. Prérequis : la ressource doit avoir DeletionPolicy=Retain dans le template et un identifiant unique (ResourceIdentifier). Après import, la ressource est gérée par CloudFormation."},
{id:"aws-soa-c03-j8-8",q:"Qu'est-ce que le paramètre DeletionPolicy dans CloudFormation et quelles sont ses valeurs ?",choices:["A. Définit l'ordre de suppression des ressources dans un stack. Valeurs : First, Last, Parallel","B. Définit ce qui se passe avec une ressource quand elle est supprimée du template ou que le stack est supprimé. Valeurs : Delete (défaut), Retain, Snapshot","C. Contrôle si CloudFormation peut supprimer des ressources en production. Valeurs : Allow, Deny","D. Configure la durée de vie du stack. Valeurs : 24h, 7j, 30j, Forever"],answer:1,exp:"DeletionPolicy contrôle le comportement lors de la suppression d'une ressource : Delete (par défaut) = supprime la ressource. Retain = conserve la ressource même après suppression du stack. Snapshot = crée un snapshot final avant suppression (pour RDS, ElastiCache, Redshift). Important pour les ressources de production."},
{id:"aws-soa-c03-j8-9",q:"Comment partager des outputs d'un stack CloudFormation avec d'autres stacks dans la même région ?",choices:["A. Utiliser des paramètres SSM Parameter Store","B. Utiliser les Cross-Stack References avec Export/ImportValue","C. Copier manuellement les valeurs entre templates","D. Utiliser CloudFormation StackSets"],answer:1,exp:"Cross-Stack References : dans le stack source, définir un Output avec Export Name. Dans le stack cible, utiliser !ImportValue avec le nom de l'export. Limitation : ne fonctionne que dans la même région et le même compte. L'export ne peut pas être modifié ou supprimé si d'autres stacks l'importent. Alternative cross-région : SSM Parameter Store."},
{id:"aws-soa-c03-j8-10",q:"Quelle commande CDK synthétise le code en templates CloudFormation ?",choices:["A. cdk compile","B. cdk synth","C. cdk build","D. cdk generate"],answer:1,exp:"'cdk synth' synthétise le code CDK (TypeScript, Python, Java, etc.) en templates CloudFormation JSON/YAML dans le répertoire 'cdk.out'. C'est la première étape avant le déploiement. 'cdk deploy' exécute synth implicitement puis déploie. 'cdk diff' compare le template synthétisé avec le stack déployé."},
{id:"aws-soa-c03-j8-11",q:"Un stack CloudFormation est en état 'ROLLBACK_COMPLETE'. Quelle action peut-on effectuer ?",choices:["A. Réessayer le déploiement avec le même template","B. Uniquement supprimer le stack et le recréer","C. Mettre à jour le stack avec un template corrigé","D. Annuler le rollback et passer en UPDATE_COMPLETE"],answer:1,exp:"Un stack en état ROLLBACK_COMPLETE a échoué lors de sa création initiale et a effectué un rollback. Dans cet état, la seule action possible est de SUPPRIMER le stack (DeleteStack). Après suppression, vous pouvez recréer le stack avec un template corrigé. Les stacks en UPDATE_ROLLBACK_COMPLETE permettent des mises à jour."},
{id:"aws-soa-c03-j8-12",q:"Qu'est-ce que CloudFormation Nested Stacks et quand les utiliser ?",choices:["A. Des stacks qui s'exécutent en parallèle dans plusieurs régions","B. Des stacks enfants créés par un stack parent — permettent de modulariser des templates complexes en composants réutilisables","C. Des stacks qui héritent les permissions du stack parent","D. Des stacks utilisées uniquement dans les environnements de test"],answer:1,exp:"Nested Stacks : un template CloudFormation peut créer d'autres stacks (AWS::CloudFormation::Stack resource). Avantages : modularisation des templates (network stack, security stack, app stack), réutilisation, contournement de la limite de 500 ressources par stack. L'update du stack parent peut déclencher l'update des stacks enfants."},
{id:"aws-soa-c03-j8-13",q:"Comment CloudFormation gère-t-il les dépendances entre ressources dans un template ?",choices:["A. Les ressources sont toujours créées dans l'ordre où elles apparaissent dans le template YAML","B. CloudFormation résout automatiquement les dépendances via les références (!Ref, !GetAtt). DependsOn peut forcer une dépendance explicite","C. L'admin doit spécifier l'ordre dans une section 'Order' du template","D. Toutes les ressources sont créées en parallèle"],answer:1,exp:"CloudFormation construit automatiquement un graphe de dépendances à partir des références entre ressources (!Ref, !GetAtt, !Sub). Les ressources indépendantes sont créées en parallèle. DependsOn permet d'exprimer des dépendances qui ne sont pas capturables par des références (ex: attendre qu'une base de données soit prête avant de lancer l'application)."},
{id:"aws-soa-c03-j8-14",q:"Quelle est la limite maximale de ressources dans un seul template CloudFormation ?",choices:["A. 100 ressources","B. 200 ressources","C. 500 ressources","D. 1000 ressources"],answer:2,exp:"Un template CloudFormation peut contenir au maximum 500 ressources. Pour les architectures plus larges, utiliser les Nested Stacks (stack parent créant plusieurs stacks enfants) ou les StackSets. La limite est par template/stack, pas par déploiement total."},
{id:"aws-soa-c03-j8-15",q:"Qu'est-ce qu'AWS RAM (Resource Access Manager) et comment diffère-t-il de CloudFormation StackSets ?",choices:["A. RAM partage des ressources existantes entre comptes AWS (VPC subnets, Transit Gateway, AMIs) ; StackSets déploie des stacks CloudFormation dans plusieurs comptes","B. RAM remplace StackSets pour le multi-comptes","C. RAM est pour les ressources réseau uniquement","D. StackSets utilise RAM en interne pour le partage de ressources"],answer:0,exp:"AWS RAM partage des ressources existantes (non créées à nouveau) entre comptes AWS dans une Organisation : subnets VPC, Transit Gateways, Route 53 Resolver Rules, Licence Manager, etc. StackSets déploie et gère des templates CloudFormation dans plusieurs comptes/régions. Cas d'usage différents."},
{id:"aws-soa-c03-j8-16",q:"Un SysOps admin veut s'assurer qu'un bucket S3 créé par CloudFormation n'est pas supprimé même si quelqu'un supprime le stack. Quelle configuration appliquer ?",choices:["A. Ajouter UpdateReplacePolicy: Retain au bucket","B. Ajouter DeletionPolicy: Retain et UpdateReplacePolicy: Retain au bucket S3 dans le template","C. Activer S3 MFA Delete sur le bucket","D. Créer une Stack Policy interdisant la suppression du bucket"],answer:1,exp:"DeletionPolicy: Retain → conserve le bucket lors de la suppression du stack. UpdateReplacePolicy: Retain → conserve l'ancien bucket si une modification nécessite son remplacement (ex: changement de nom de bucket). Les deux ensemble protègent le bucket dans tous les scénarios. Sans UpdateReplacePolicy, le bucket serait supprimé lors d'un remplacement."},
{id:"aws-soa-c03-j8-17",q:"Qu'est-ce que CloudFormation Hooks ?",choices:["A. Des intégrations webhook avec des outils tiers","B. Des points d'extension qui permettent d'exécuter une validation avant et après les opérations CloudFormation sur des ressources spécifiques","C. Des liens entre stacks CloudFormation","D. Des notifications CloudWatch lors de changements de stack"],answer:1,exp:"CloudFormation Hooks interceptent les opérations de stack (CREATE, UPDATE, DELETE) sur des types de ressources spécifiques pour exécuter des validations personnalisées. Exemple : vérifier que chaque bucket S3 a le chiffrement activé avant sa création. Les hooks peuvent être en TypeScript/Python/Java. Ils permettent de faire respecter les standards de conformité."},
{id:"aws-soa-c03-j8-18",q:"Quelle est la différence entre les CloudFormation Parameters et les SSM Parameter Store References dans un template ?",choices:["A. Les deux sont identiques — SSM Parameters sont juste stockés dans SSM","B. CF Parameters demandent une valeur à l'utilisateur lors du déploiement ; SSM Parameter References récupèrent automatiquement la valeur depuis SSM Parameter Store (peut être mise à jour sans modifier le template)","C. SSM Parameter References ne supportent pas les SecureStrings","D. CF Parameters supportent plus de types de données"],answer:1,exp:"CF Parameters : valeurs saisies à chaque déploiement/update. SSM Parameter Store comme source de paramètres (Type: AWS::SSM::Parameter::Value<String>) : CloudFormation récupère la valeur actuelle depuis SSM au moment du déploiement. Avantage : mettre à jour la valeur dans SSM sans modifier le template CF, puis redéployer."},
{id:"aws-soa-c03-j8-19",q:"CloudFormation StackSets déploie dans 10 régions. Comment contrôler le déploiement pour limiter le blast radius en cas d'erreur ?",choices:["A. Déployer une région à la fois en séquence","B. Utiliser les paramètres MaxConcurrentRegions et FailureTolerancePercentage pour contrôler le déploiement parallèle","C. Déployer manuellement région par région","D. Utiliser un CloudFormation changeset par région"],answer:1,exp:"StackSets Operation Preferences : MaxConcurrentRegions (nombre de régions déployées en parallèle), MaxConcurrentAccounts (nombre de comptes en parallèle dans une région), FailureTolerancePercentage (% d'échecs tolérés avant arrêt). Pour limiter le blast radius : MaxConcurrentRegions=1 déploie séquentiellement région par région."},
{id:"aws-soa-c03-j8-20",q:"Dans CDK, qu'est-ce que cdk bootstrap et pourquoi est-il nécessaire ?",choices:["A. Installe le CDK CLI sur votre machine","B. Crée les ressources d'infrastructure nécessaires au déploiement CDK dans un compte/région (bucket S3 pour les assets, IAM roles)","C. Initialise un nouveau projet CDK avec les fichiers de base","D. Compile le code CDK en templates CloudFormation"],answer:1,exp:"'cdk bootstrap' crée le CDKToolkit stack dans un compte/région : un bucket S3 pour stocker les assets (bundles Lambda, images Docker), un ECR repository pour les images, et des IAM roles pour le déploiement. Doit être exécuté une fois par compte/région avant le premier 'cdk deploy'. Sans bootstrap, le déploiement échoue si des assets sont nécessaires."}
];

// ── Jour 9 — Systems Manager et automatisation ────────────────────────────────
window.QDATA[9,
  {
    id: "aws-soa-c03-j9-21",
    q: "Qu'est-ce que l'AWS CodeGuru Reviewer et comment aide-t-il dans un pipeline CI/CD ?",
    choices: ["A. Un outil de monitoring des performances de code en production","B. Un service ML qui analyse automatiquement les pull requests pour détecter les problèmes de code (sécurité, performance, bonnes pratiques AWS SDK)","C. Un service de documentation automatique du code","D. Un outil de test de charge pour les APIs"],
    answer: 1,
    exp: "CodeGuru Reviewer utilise le ML pour analyser les pull requests GitHub/BitBucket/CodeCommit et détecter : vulnérabilités de sécurité (secrets exposés, injection), problèmes de performance (ressources non fermées, N+1 queries), anti-patterns AWS SDK. Les recommandations apparaissent directement dans les PR comments. S'intègre nativement dans CodePipeline."
  },
  {
    id: "aws-soa-c03-j9-22",
    q: "Quelle est la différence entre 'CloudFormation Wait Conditions' et 'CloudFormation CreationPolicy' ?",
    choices: ["A. Les deux permettent à CFN d'attendre un signal externe — CreationPolicy est recommandée pour EC2/ASG (signalement via cfn-signal), WaitCondition pour les cas plus complexes","B. WaitCondition est plus récente et remplace CreationPolicy","C. CreationPolicy ne supporte pas EC2","D. Les deux sont identiques — différence uniquement syntaxique"],
    answer: 0,
    exp: "CreationPolicy : attachée directement à une ressource EC2 ou ASG — CFN attend un signal cfn-signal avant de marquer la ressource comme CREATE_COMPLETE. Plus simple et intégrée. WaitCondition : ressource séparée AWS::CloudFormation::WaitCondition + WaitConditionHandle — plus flexible pour les signaux provenant de sources externes. Best practice actuelle : utiliser CreationPolicy pour EC2/ASG."
  },
  {
    id: "aws-soa-c03-j9-23",
    q: "Un SysOps admin doit s'assurer qu'aucune instance EC2 n'est lancée sans tag 'Owner'. Quelle est l'approche préventive ?",
    choices: ["A. Vérifier manuellement les instances sans tag","B. SCP avec Deny sur ec2:RunInstances si le tag 'Owner' n'est pas présent dans la requête (condition aws:RequestTag/Owner)","C. AWS Config Rule pour détecter les instances sans tag","D. Créer une Lambda qui tag automatiquement les nouvelles instances"],
    answer: 1,
    exp: "SCP préventive : Deny ec2:RunInstances avec condition StringNotLike aws:RequestTag/Owner '*' (ou condition Null aws:RequestTag/Owner 'true'). Cela refuse le lancement de toute instance EC2 sans le tag Owner. Combiné avec Config Rule + remediation pour les ressources existantes. La SCP est la couche préventive — plus forte qu'une Lambda réactive."
  },
  {
    id: "aws-soa-c03-j9-24",
    q: "Qu'est-ce que le CloudFormation 'Custom Resource' et quel est son cas d'usage ?",
    choices: ["A. Une ressource CloudFormation premium payante","B. Un mécanisme pour provisioner des ressources non supportées nativement par CFN, en appelant une Lambda ou un SNS topic lors des événements Create/Update/Delete","C. Une ressource qui s'auto-configure sans paramètre","D. Une ressource importée depuis un autre stack"],
    answer: 1,
    exp: "Custom Resources (AWS::CloudFormation::CustomResource ou Custom::MyType) appellent une Lambda ou un SNS Topic lors de Create, Update, Delete du stack. Cas d'usage : 1) Ressources non supportées par CFN (ex: Route 53 Resolver règles, services tiers). 2) Logique complexe (générer un mot de passe, appeler une API externe). 3) Pre/post déploiement hooks."
  },
  {
    id: "aws-soa-c03-j9-25",
    q: "Comment AWS Config 'Conformance Packs' aide-t-il à gérer la conformité réglementaire ?",
    choices: ["A. Les Conformance Packs sont des groupes de Config Rules prédéfinies correspondant à des standards (CIS, NIST, PCI-DSS, HIPAA) — déployables en une seule opération","B. Les Conformance Packs remplacent les Config Rules individuelles","C. Les Conformance Packs ne supportent que les règles AWS managed","D. Les Conformance Packs génèrent automatiquement des rapports d'audit PDF"],
    answer: 0,
    exp: "Conformance Packs : collections de Config Rules et de remédiation groupées par cadre réglementaire. AWS fournit des packs pré-construits (CIS Benchmarks, PCI-DSS, HIPAA, NIST). Déploiement via un seul template YAML qui contient toutes les règles. Affichage du score de conformité global. Déploiement multi-comptes via StackSets. Personnalisable avec des règles custom."
  },
  {
    id: "aws-soa-c03-j9-26",
    q: "Qu'est-ce que l'AWS App2Container (A2C) et quel problème résout-il ?",
    choices: ["A. Un service de création de containers Docker pour les nouvelles applications","B. Un outil qui analyse et containerise automatiquement des applications Java et .NET existantes (non-containerisées) sur EC2 ou on-premise pour les déployer sur ECS ou EKS","C. Un service de migration de containers Docker vers Fargate","D. Un outil de monitoring des performances des containers"],
    answer: 1,
    exp: "App2Container (A2C) est un outil en ligne de commande qui : 1) Analyse une application Java (Tomcat/Spring) ou .NET (IIS) en cours d'exécution. 2) Crée un Dockerfile basé sur les dépendances détectées. 3) Génère des manifestes ECS/EKS (task definitions, Kubernetes YAML). 4) Crée un pipeline CodePipeline optionnel. Simplifie la modernisation des applications legacy."
  },
  {
    id: "aws-soa-c03-j9-27",
    q: "Comment surveiller et optimiser l'utilisation des Reserved Instances AWS ?",
    choices: ["A. Les RI sont utilisées automatiquement — pas de monitoring nécessaire","B. AWS Cost Explorer RI Utilization Report + RI Coverage Report pour identifier les RI sous-utilisées et les instances non couvertes","C. AWS Trusted Advisor vérifie l'utilisation des RI mensuellement","D. B et C sont valides — Trusted Advisor et Cost Explorer sont complémentaires"],
    answer: 3,
    exp: "Monitoring RI : 1) Cost Explorer RI Utilization Report : pourcentage d'utilisation des RI achetées (objectif : >80%). 2) Cost Explorer RI Coverage Report : pourcentage des heures On-Demand couvertes par des RI. 3) Trusted Advisor (Premium) : alerte sur les RI sous-utilisées. Actions : convertir les RI non utilisées (Convertible RI), les vendre sur le Marketplace RI."
  },
  {
    id: "aws-soa-c03-j9-28",
    q: "Quelle est la différence entre 'Standard Reserved Instances' et 'Convertible Reserved Instances' ?",
    choices: ["A. Standard RI : remise plus importante (-40-60%), ne peut pas changer de famille d'instance. Convertible RI : remise moins importante (-31-54%), peut être échangée contre une autre instance type (même valeur ou supérieure)","B. Les deux sont identiques","C. Convertible RI a une remise plus importante que Standard RI","D. Standard RI peut être modifiée librement, Convertible RI ne peut pas"],
    answer: 0,
    exp: "Standard RI : réduction maximale (-40-72% vs On-Demand), famille d'instance et région fixes. Peut modifier AZ, taille dans la même famille (instance size flexibility). Convertible RI : réduction inférieure (-31-66%), mais peut être échangée (merge/split) contre d'autres types d'instances Convertible de valeur égale ou supérieure. Plus de flexibilité mais moins d'économies."
  },
  {
    id: "aws-soa-c03-j9-29",
    q: "Qu'est-ce qu'un 'Savings Plan' et comment diffère-t-il des Reserved Instances ?",
    choices: ["A. Savings Plans : engagement de dépense horaire ($/h) sur 1 ou 3 ans, flexible sur les types d'instance et régions. RI : engagement sur un type d'instance spécifique","B. Les Savings Plans sont moins avantageux financièrement que les RI","C. Savings Plans sont uniquement pour Lambda et Fargate","D. Les RI ont été remplacées par les Savings Plans"],
    answer: 0,
    exp: "Savings Plans : vous vous engagez à dépenser un montant horaire minimum (ex: $10/h) sur 1 ou 3 ans. Types : Compute SP (toutes familles, régions, OS — le plus flexible), EC2 Instance SP (famille + région fixes — comme RI standard), SageMaker SP. La réduction s'applique automatiquement jusqu'à l'engagement. RI est attachée à un type d'instance spécifique. SP = plus flexible, RI = plus de réduction dans certains cas."
  },
  {
    id: "aws-soa-c03-j9-30",
    q: "Comment utiliser AWS Cost Anomaly Detection pour surveiller les coûts ?",
    choices: ["A. Vérifier manuellement Cost Explorer chaque jour","B. Cost Anomaly Detection utilise le ML pour détecter les comportements inhabituels dans les dépenses (pics inattendus) et envoie des alertes SNS","C. Configurer des alarmes CloudWatch sur les métriques de facturation","D. B et C sont deux approches valides"],
    answer: 1,
    exp: "Cost Anomaly Detection : ML analyse les patterns de dépenses historiques et alerte quand une anomalie est détectée (pic inattendu d'un service, d'un compte, d'un tag). Configuration : créer un 'Monitor' (service, compte, cost category, tag) et des 'Subscriptions' (seuil et notification SNS). Plus intelligent que les alarmes fixes — s'adapte aux tendances saisonnières."
  },
  {
    id: "aws-soa-c03-j9-31",
    q: "Qu'est-ce qu'un 'CloudFormation Module' et quel avantage apporte-t-il par rapport aux Custom Resources ?",
    choices: ["A. Un module CloudFormation est un template packagé et réutilisable enregistré dans le CloudFormation Registry — crée des ressources propriétaires avec des schémas définis","B. Les modules sont moins puissants que les Custom Resources","C. Les modules ne peuvent pas être partagés entre comptes","D. Les modules et Custom Resources sont identiques"],
    answer: 0,
    exp: "CloudFormation Modules (via Registry) : templates réutilisables qui s'intègrent nativement comme des ressources CFN (ex: MyCompany::Network::VPC). Avantages vs Custom Resources : 1) Validation native des schémas. 2) Pas de Lambda à maintenir. 3) Interface familière. 4) Partage via AWS Service Catalog ou Registry public. Les CloudFormation Hooks permettent des validations pre/post déploiement."
  },
  {
    id: "aws-soa-c03-j9-32",
    q: "Un SysOps admin configure AWS Budgets pour alerter à 80% du budget mensuel. Quelle est la granularité minimale d'une alerte Budget ?",
    choices: ["A. Par jour","B. Par heure","C. Par mois (un seul budget par période de facturation)","D. Les alertes Budgets peuvent être configurées en temps réel"],
    answer: 0,
    exp: "AWS Budgets alerte au niveau mensuel (ou trimestriel, annuel, personnalisé). La granularité de notification est journalière — AWS Budgets évalue les dépenses et envoie une alerte si le seuil est dépassé lors de l'évaluation quotidienne. Les alertes 'Forecasted' prédisent si le budget sera dépassé à la fin du mois. L'évaluation se fait généralement 1 à 2 fois par jour."
  },
  {
    id: "aws-soa-c03-j9-33",
    q: "Comment optimiser les coûts d'une base de données RDS Aurora avec des charges variables ?",
    choices: ["A. Toujours utiliser Aurora Provisioned avec la taille maximum","B. Aurora Serverless v2 : scale automatique en ACUs (Aurora Capacity Units) selon la charge, minimum peut être 0 ACU en pause (coût quasi nul pendant l'inactivité)","C. Utiliser RDS Standard au lieu d'Aurora","D. Acheter des RI Aurora 3 ans"],
    answer: 1,
    exp: "Aurora Serverless v2 : scale automatiquement entre un minimum et maximum d'ACUs (Aurora Capacity Units) en fraction de seconde. Peut descendre à 0 ACU avec le mode pause (après X minutes d'inactivité — pour les environnements dev/test). Idéal pour les charges imprévisibles ou variables. Coût : par ACU-heure utilisée. Peut être moins cher qu'une instance provisionnée pour les charges à-coups."
  },
  {
    id: "aws-soa-c03-j9-34",
    q: "Qu'est-ce que l'AWS Compute Optimizer et quelles ressources analyse-t-il ?",
    choices: ["A. Analyse uniquement les instances EC2","B. Analyse EC2 instances, ASG, EBS volumes, Lambda functions, et ECS services sur Fargate pour recommander des redimensionnements optimaux","C. Analyse les coûts des services S3 et RDS","D. Compute Optimizer n'est disponible que pour les comptes Enterprise"],
    answer: 1,
    exp: "AWS Compute Optimizer utilise le ML pour analyser les métriques d'utilisation (CPU, mémoire, réseau, I/O) et recommande : EC2 instance rightsizing (up/down), ASG recommendations, EBS volume type/size (gp2→gp3), Lambda memory rightsizing (trop de mémoire = coût élevé, trop peu = timeout), ECS Fargate. Économies potentielles identifiées dans le dashboard."
  },
  {
    id: "aws-soa-c03-j9-35",
    q: "Un SysOps admin observe que les coûts EC2 sont élevés car de nombreuses instances tournent inutilement le week-end. Quelle solution mettre en place ?",
    choices: ["A. Envoyer des rappels à l'équipe chaque vendredi","B. Instance Scheduler (AWS Solution) ou EventBridge + Lambda : démarrer/arrêter les instances EC2 selon un planning (schedule tags sur les instances)","C. Acheter des Spot Instances pour le week-end","D. Passer en mode Hibernate les instances le week-end"],
    answer: 1,
    exp: "Instance Scheduler est une solution AWS déployable via CFN qui utilise des tags sur les instances pour définir les horaires de démarrage/arrêt. Alternative : EventBridge Scheduler + Lambda (aws ec2 stop-instances, aws ec2 start-instances) sur un cron. Les instances arrêtées ne facturent que le stockage EBS. Économies potentielles : 60-70% sur les instances dev/test."
  },
  {
    id: "aws-soa-c03-j9-36",
    q: "Qu'est-ce que le 'rightsizing' EC2 et comment l'implémenter en production ?",
    choices: ["A. Changer la taille des instances sans impact sur les applications","B. Analyser l'utilisation réelle (CPU, mémoire, réseau) sur une période représentative et passer à un type d'instance plus adapté (down: économies, up: performance)","C. Acheter des RI pour les instances actuelles sans changer de taille","D. Rightsizing ne s'applique pas aux instances en production"],
    answer: 1,
    exp: "Rightsizing : analyser les métriques CloudWatch (CPU <20% = over-provisioned) et les recommandations Compute Optimizer sur 14+ jours. En production : 1) Identifier les instances candidates (utilisation faible). 2) Modifier en maintenance window (arrêt + change type). 3) Valider les performances. 4) Pour les RI : les Convertible RI peuvent être échangées vers le nouveau type."
  },
  {
    id: "aws-soa-c03-j9-37",
    q: "Comment mettre en place la gouvernance des coûts dans une organisation multi-comptes AWS ?",
    choices: ["A. Monitorer un seul compte centralement","B. Consolidated Billing + Cost Allocation Tags + AWS Budgets par compte/équipe/projet + Cost Explorer multi-comptes depuis le Management Account","C. Utiliser un outil tiers uniquement (Cloudability, Spot.io)","D. Limiter les droits IAM pour empêcher la création de ressources coûteuses"],
    answer: 1,
    exp: "Gouvernance des coûts multi-comptes : 1) Consolidated Billing dans AWS Organizations (facture unique, économies de volume). 2) Cost Allocation Tags activés (team, project, env) pour l'allocation des coûts. 3) AWS Budgets par compte avec notifications. 4) Cost Explorer (Management Account) pour la vue consolidée. 5) Service Control Policies pour prévenir la création de ressources non autorisées."
  },
  {
    id: "aws-soa-c03-j9-38",
    q: "Qu'est-ce que l'AWS Cost and Usage Report (CUR) et comment l'analyser ?",
    choices: ["A. Un rapport mensuel envoyé par email automatiquement","B. Un rapport CSV/Parquet détaillé de tous les coûts et usages, livré dans S3, analysable avec Athena, Redshift, ou QuickSight","C. Un rapport disponible uniquement dans la console Cost Explorer","D. CUR remplace entièrement Cost Explorer"],
    answer: 1,
    exp: "Cost and Usage Report (CUR) : rapport CSV ou Parquet livré dans un bucket S3 (horaire, quotidien, ou mensuel). Données les plus granulaires disponibles (resource ID, tags, usage type). Analyses : 1) Athena + SQL queries sur les données CUR. 2) QuickSight pour les visualisations. 3) Redshift pour les analyses à grande échelle. Idéal pour les FinOps avancés et les chargebacks internes."
  },
  {
    id: "aws-soa-c03-j9-39",
    q: "Comment réduire les coûts de transfert de données inter-AZ dans une architecture VPC ?",
    choices: ["A. Utiliser AWS Direct Connect pour le trafic inter-AZ","B. Déployer les ressources qui communiquent fréquemment dans la même AZ, utiliser des VPC Endpoints pour les services AWS, et activer Cross-Zone Load Balancing avec précaution","C. Les transferts inter-AZ sont toujours gratuits","D. Utiliser S3 comme intermédiaire pour toutes les communications"],
    answer: 1,
    exp: "Coûts inter-AZ ($0.01/GB chaque direction) : 1) Co-localiser les ressources qui communiquent fréquemment dans la même AZ (accepter le risque de panne AZ unique). 2) VPC Endpoints (Gateway pour S3/DynamoDB, gratuits) évitent le trafic via NAT Gateway. 3) Analyser les coûts de transfert dans Cost Explorer (filtrer par 'Data Transfer'). 4) Pour les applications conteneurisées, pod affinity rules dans EKS."
  },
  {
    id: "aws-soa-c03-j9-40",
    q: "Qu'est-ce que le 'Spot Instance Advisor' et comment aide-t-il à choisir les types d'instances Spot ?",
    choices: ["A. Un service qui achète automatiquement des Spot Instances au meilleur prix","B. Un outil web qui affiche les taux d'interruption historiques et les économies par type d'instance et région — aide à choisir les instances Spot avec le moins de risque d'interruption","C. Un monitoring en temps réel des prix Spot","D. Un assistant IA pour optimiser les flottes Spot"],
    answer: 1,
    exp: "Spot Instance Advisor (console EC2) affiche pour chaque combinaison region+type d'instance : 1) Fréquence d'interruption (< 5%, 5-10%, >20%). 2) Économies vs On-Demand. Les instances avec faible fréquence d'interruption (<5%) sont les plus stables. Diversifier sur plusieurs types d'instances avec Spot Fleet ou ASG mixed instances pour réduire le risque global."
  },
  {
    id: "aws-soa-c03-j9-41",
    q: "Un SysOps admin observe des coûts NAT Gateway élevés. Quelle est la stratégie d'optimisation ?",
    choices: ["A. Augmenter la taille du NAT Gateway","B. Analyser le trafic NAT (VPC Flow Logs), ajouter des VPC Endpoints pour les services AWS fréquemment accédés (S3, DynamoDB, ECR, SSM), et vérifier si les EC2 accèdent à des ressources inter-AZ","C. Remplacer le NAT Gateway par une NAT Instance EC2","D. Supprimer le NAT Gateway et utiliser l'IPv6"],
    answer: 1,
    exp: "Optimisation NAT Gateway : 1) VPC Gateway Endpoints (S3, DynamoDB) : gratuits, éliminent le trafic S3/DynamoDB via NAT. 2) VPC Interface Endpoints (ECR, SSM, Secrets Manager) : réduisent les frais NAT pour ces services ($7.3/endpoint/mois mais rentable si trafic élevé). 3) VPC Flow Logs pour identifier les top consumers de NAT Gateway. 4) Co-localiser les instances dans la même AZ que la ressource accédée."
  },
  {
    id: "aws-soa-c03-j9-42",
    q: "Qu'est-ce que l'AWS Cost Categories et quel problème résout-il ?",
    choices: ["A. Une classification automatique des coûts par service AWS","B. Un système de règles personnalisées pour regrouper les coûts par dimension métier (équipe, projet, environnement) basé sur les tags, comptes, services","C. Un outil pour comparer les coûts entre régions AWS","D. Cost Categories remplace les Cost Allocation Tags"],
    answer: 1,
    exp: "AWS Cost Categories : définit des règles personnalisées pour catégoriser les coûts par groupe métier. Exemple : toutes les ressources du compte 123456789 avec tag team=backend → catégorie 'Backend Team'. Visible dans Cost Explorer, Budgets, et CUR. Utile quand les tags sont insuffisants ou quand on veut regrouper plusieurs comptes/services sous une même catégorie métier."
  },
  {
    id: "aws-soa-c03-j9-43",
    q: "Comment AWS Graviton (ARM) réduit-il les coûts par rapport aux instances Intel/AMD ?",
    choices: ["A. Les instances Graviton coûtent exactement la même chose mais sont plus rapides","B. Les instances Graviton (c7g, m7g, r7g) coûtent généralement 20-40% moins cher que les instances x86 équivalentes pour des performances souvent supérieures","C. Graviton est uniquement pour les workloads ML","D. Les économies Graviton ne s'appliquent qu'aux Spot Instances"],
    answer: 1,
    exp: "AWS Graviton (ARM64) : processeurs custom AWS qui offrent le meilleur ratio prix/performance pour de nombreux workloads. Économies : c7g vs c6i ≈ -20% de coût, m7g vs m6i ≈ -20%. Applications compatibles : la plupart des workloads Linux (Java, Python, Go, Node.js, containers). Migration : changer le type d'instance dans le Launch Template, utiliser une AMI ARM, recompiler les binaires si nécessaire."
  },
  {
    id: "aws-soa-c03-j9-44",
    q: "Quelle est la différence entre un 'Zonal Reserved Instance' et un 'Regional Reserved Instance' ?",
    choices: ["A. Zonal RI : réservation dans une AZ spécifique, garantit la capacité. Regional RI : réservation dans toute la région, flexible sur l'AZ, instance size flexibility","B. Les deux sont identiques","C. Regional RI offre une réduction plus importante que Zonal RI","D. Zonal RI peut être utilisée dans plusieurs régions"],
    answer: 0,
    exp: "Regional RI (défaut) : s'applique à toutes les AZ de la région, bénéfice de l'instance size flexibility (m5.large peut être utilisée pour 2x m5.xlarge), mais ne garantit pas la capacité. Zonal RI : s'applique à une AZ spécifique, réserve la capacité dans cette AZ (Capacity Reservation incluse), mais pas de size flexibility. Choisir Regional pour la flexibilité, Zonal si la garantie de capacité est requise."
  },
  {
    id: "aws-soa-c03-j9-45",
    q: "Un ops admin remarque que Cost Explorer montre des coûts EBS élevés. Comment identifier les volumes EBS inutilisés ?",
    choices: ["A. Vérifier manuellement chaque volume","B. Utiliser AWS Cost Explorer filtré par service EBS + identifier les volumes 'available' (non attachés) via l'API describe-volumes, ou utiliser Compute Optimizer pour les recommandations EBS","C. Supprimer tous les snapshots EBS","D. Utiliser AWS Config pour lister les volumes EBS"],
    answer: 1,
    exp: "Identification des volumes EBS inutilisés : 1) CLI : aws ec2 describe-volumes --filters Name=status,Values=available → liste les volumes non attachés. 2) AWS Cost Explorer filtré EBS + dimension ResourceId. 3) Compute Optimizer : recommande le changement de type (gp2→gp3) et identifie les volumes sur-provisionnés. 4) AWS Config rule 'ec2-volume-inuse-check' pour les volumes non attachés."
  },
  {
    id: "aws-soa-c03-j9-46",
    q: "Comment implémenter une alerte de coût pour chaque équipe dans une organisation multi-comptes ?",
    choices: ["A. Un seul budget pour toute l'organisation","B. AWS Budgets par compte membre (un budget par compte avec notification au responsable d'équipe) ou par tag (si les ressources sont tagguées par équipe)","C. Utiliser uniquement Cost Explorer pour les revues mensuelles","D. Créer des RI pour chaque équipe pour prévoir les coûts"],
    answer: 1,
    exp: "Alertes de coût par équipe : 1) Par compte : Budgets dans chaque compte membre (ou depuis le management account en ciblant un compte spécifique). 2) Par tag : Budget filtré par tag team=backend. 3) Notifications : SNS → email du responsable. 4) Optionnel : Budget Actions pour limiter automatiquement les droits IAM si le budget est dépassé."
  },
  {
    id: "aws-soa-c03-j9-47",
    q: "Qu'est-ce qu'une 'Capacity Reservation' EC2 et quand est-elle utile ?",
    choices: ["A. Un moyen de réserver des instances EC2 pour une utilisation exclusive payant à l'avance","B. Reserve de la capacité EC2 dans une AZ spécifique sans engagement temporel — garantit que les instances peuvent être lancées même en cas de pénurie de capacité dans l'AZ","C. Identique à une Reserved Instance","D. Une réservation automatique par l'ASG lors d'un scale-out"],
    answer: 1,
    exp: "Capacity Reservation : réserve de la capacité EC2 (sans engagement de durée, payant à l'heure de réservation) dans une AZ spécifique. Garantit que les instances peuvent être lancées même en cas de pénurie de capacité AWS. Utile pour les déploiements planifiés (Black Friday), les plans DR actifs, les workloads critiques. Peut être combiné avec RI et Savings Plans pour optimiser les coûts."
  },
  {
    id: "aws-soa-c03-j9-48",
    q: "Comment réduire les frais de support AWS tout en maintenant un accès à l'expertise technique ?",
    choices: ["A. Utiliser uniquement le support gratuit (Basic)","B. Évaluer le plan support selon le besoin réel : Developer pour les environnements de test, Business pour la production (avec TAM au niveau Enterprise). Utiliser AWS re:Post pour les questions techniques","C. Acheter uniquement le plan Enterprise","D. Utiliser AWS IQ pour trouver des experts à la demande au lieu d'un plan support fixe"],
    answer: 1,
    exp: "Optimisation support : Business ($100/mois + 3-10% des frais AWS) vs Enterprise ($15,000/mois + 0-10%). Pour les PME en production : Business est généralement suffisant (réponse 1h pour critiques, accès API). Developer ($29/mois) pour les environnements non-prod. AWS re:Post (communauté) et AWS Trusted Advisor (Business+) réduisent les besoins de support direct."
  },
  {
    id: "aws-soa-c03-j9-49",
    q: "Quelle est la stratégie d'optimisation des coûts Lambda pour des fonctions invoquées fréquemment ?",
    choices: ["A. Augmenter la mémoire Lambda pour accélérer l'exécution (moins de millisecondes facturées) si le temps de calcul CPU est le facteur limitant","B. Diminuer toujours la mémoire Lambda pour réduire les coûts","C. Utiliser Lambda Reserved Concurrency pour éviter le scaling","D. Migrer vers EC2 pour les fonctions fréquentes"],
    answer: 0,
    exp: "Lambda optimisation coûts : Lambda est facturée par durée × mémoire. Si augmenter la mémoire réduit la durée de 2x (CPU-bound workload), le coût peut rester identique ou diminuer. AWS Lambda Power Tuning (open source) teste différentes tailles mémoire pour trouver le sweet spot coût/performance. Les fonctions avec beaucoup d'invocations bénéficient de Graviton2 (20% moins cher, utiliser l'architecture arm64)."
  },
  {
    id: "aws-soa-c03-j9-50",
    q: "Comment AWS Trusted Advisor aide-t-il à optimiser les coûts ?",
    choices: ["A. Trusted Advisor facture des frais supplémentaires pour les recommandations de coût","B. Trusted Advisor identifie : instances EC2 sous-utilisées, volumes EBS non attachés, Load Balancers sans trafic, RI sous-utilisées, Elastic IPs non associées — avec estimation d'économies","C. Trusted Advisor ne surveille que la sécurité","D. Trusted Advisor est disponible uniquement pour le plan Enterprise"],
    answer: 1,
    exp: "Trusted Advisor (plan Business+) surveille 5 catégories : Cost Optimization (instances sous-utilisées, EBS inutilisés, EIP non associées, RI basse utilisation), Performance, Security, Fault Tolerance, Service Limits. Les checks de cost optimization sont gratuits pour Basic/Developer mais les verts/oranges/rouges détaillés nécessitent Business+. Économies potentielles souvent importantes."
  }
]=[
{id:"aws-soa-c03-j9-1",q:"Qu'est-ce qu'AWS Systems Manager Session Manager et quel est son avantage principal ?",choices:["A. Un service de gestion des sessions CloudFormation","B. Un accès shell sécurisé aux instances EC2 sans ouvrir les ports 22/3389, sans bastion, via IAM","C. Un outil de monitoring des sessions utilisateurs","D. Un service de gestion des credentials SSH"],answer:1,exp:"Session Manager permet d'accéder en mode shell aux instances EC2 (et on-premises) sans ports SSH/RDP ouverts, sans bastion host, en utilisant uniquement IAM pour l'autorisation. Les sessions peuvent être auditées via CloudTrail et les logs envoyés sur S3/CloudWatch Logs. Prérequis : agent SSM installé + IAM role avec AmazonSSMManagedInstanceCore."},
{id:"aws-soa-c03-j9-2",q:"Quelle est la différence entre AWS Systems Manager Run Command et State Manager ?",choices:["A. Run Command est pour Linux, State Manager pour Windows","B. Run Command exécute des commandes ad-hoc une seule fois ; State Manager maintient une configuration définie en continu (état cible)","C. State Manager est plus rapide que Run Command","D. Ils font exactement la même chose avec des interfaces différentes"],answer:1,exp:"Run Command : exécution ponctuelle de commandes/scripts sur des instances (patch, installation, configuration). State Manager : association qui s'applique régulièrement pour maintenir un état cible (ex: s'assurer qu'un agent est toujours installé, appliquer des configurations). State Manager utilise des associations SSM qui s'exécutent selon un schedule."},
{id:"aws-soa-c03-j9-3",q:"Comment AWS Systems Manager Patch Manager détermine quels patchs appliquer ?",choices:["A. Il applique tous les patchs disponibles sans distinction","B. Via des Patch Baselines qui définissent les règles de conformité (severity, classification, auto-approval delay)","C. Via des AWS Config Rules","D. Via CloudWatch Alarms qui déclenchent les patchs"],answer:1,exp:"Patch Baselines définissent les règles : quels patchs sont considérés conformes (par produit, severity, classification, CVE), délai d'auto-approbation. Patch Groups associent des instances à une baseline via des tags. Maintenance Windows orchestrent l'exécution des patchs. Les rapports de conformité sont visibles dans Patch Manager et exportables vers Systems Manager Compliance."},
{id:"aws-soa-c03-j9-4",q:"Qu'est-ce qu'AWS Systems Manager Parameter Store et comment diffère-t-il de Secrets Manager ?",choices:["A. Parameter Store stocke uniquement des strings, Secrets Manager stocke tous les types de secrets","B. Parameter Store est un stockage hiérarchique de configuration/secrets (gratuit pour Standard) ; Secrets Manager offre la rotation automatique des secrets et est payant","C. Secrets Manager est plus sécurisé que Parameter Store","D. Parameter Store ne supporte pas le chiffrement"],answer:1,exp:"Parameter Store : stockage hiérarchique de config (/prod/app/db-url), Standard (gratuit, 10KB max), Advanced (payant, 8KB max, TTL). Secrets Manager : conçu pour les secrets nécessitant une rotation automatique (RDS, Redshift, DocumentDB), multi-région, payant. Les deux supportent KMS pour le chiffrement. Choisir selon le besoin de rotation automatique."},
{id:"aws-soa-c03-j9-5",q:"Qu'est-ce qu'un AWS Systems Manager Document (SSM Document) ?",choices:["A. Un fichier de documentation AWS officiel","B. Un fichier JSON/YAML définissant les actions à exécuter sur des instances (Run Command, State Manager, Automation)","C. Un certificat SSL stocké dans Systems Manager","D. Un contrat de support AWS"],answer:1,exp:"Un SSM Document définit les étapes et paramètres d'une action : Command documents (Run Command, State Manager), Automation documents (runbooks automatisés), Policy documents (Session Manager). AWS fournit des documents prédéfinis (AWS-RunShellScript, AWS-UpdateSSMAgent). Vous pouvez créer des documents personnalisés pour des processus spécifiques."},
{id:"aws-soa-c03-j9-6",q:"Comment AWS Systems Manager Automation peut-il être utilisé pour remédier automatiquement aux incidents ?",choices:["A. Automation ne peut pas répondre automatiquement aux incidents","B. En créant des runbooks Automation déclenchés par des CloudWatch Alarms ou EventBridge events pour des actions correctives automatiques","C. Uniquement via des appels Lambda","D. Automation nécessite toujours une approbation manuelle"],answer:1,exp:"Systems Manager Automation peut être déclenché par : CloudWatch Alarms, EventBridge rules, AWS Config remediation actions, ou manuellement. Exemple : CloudWatch Alarm détecte CPU > 90% → EventBridge → SSM Automation runbook → restart service ou scale out. Les runbooks peuvent inclure des étapes d'approbation ou être entièrement automatiques."},
{id:"aws-soa-c03-j9-7",q:"Qu'est-ce que l'AWS Systems Manager Inventory et quel est son rôle dans la conformité ?",choices:["A. Un inventaire de facturation des services AWS","B. Collecte des métadonnées des instances gérées (applications installées, OS, services, patchs) pour la visibilité et la conformité","C. Un service de découverte du réseau","D. Un registre DNS privé des instances"],answer:1,exp:"Systems Manager Inventory collecte des données sur les instances : applications installées, patchs, configurations réseau, services Windows, fichiers, registre Windows. Les données sont stockées dans un bucket S3 et peuvent être interrogées avec Athena. Utilisé avec AWS Config pour la conformité et avec Systems Manager Compliance pour le reporting d'état des patchs."},
{id:"aws-soa-c03-j9-8",q:"Comment AWS Systems Manager Maintenance Windows fonctionne-t-il ?",choices:["A. Met automatiquement les instances en maintenance lors d'AWS updates","B. Définit des créneaux planifiés pour exécuter des tâches (patches, Run Command, Lambda, Step Functions) avec contrôle de la simultanéité et de la tolérance aux erreurs","C. Redémarre automatiquement les instances chaque semaine","D. Suspend le monitoring CloudWatch pendant les fenêtres définies"],answer:1,exp:"Maintenance Windows : planification (cron/rate), targets (instances par tag ou ID), tasks (Run Command, Automation, Lambda, Step Functions), MaxConcurrency (nombre d'instances simultanées), MaxErrors (seuil d'arrêt). Idéal pour les patchs en production avec contrôle du déploiement progressif. Les résultats sont trackés dans le service."},
{id:"aws-soa-c03-j9-9",q:"Quelle est la méthode recommandée pour gérer les instances EC2 on-premises avec AWS Systems Manager ?",choices:["A. Les instances on-premises ne peuvent pas être gérées avec Systems Manager","B. Enregistrer les serveurs comme 'Managed Instances' en créant une activation SSM et en installant l'agent SSM","C. Utiliser AWS Direct Connect uniquement","D. Installer CloudWatch Agent uniquement"],answer:1,exp:"Hybrid Activations : créer une activation (activation code + ID) dans la console SSM, installer l'agent SSM sur le serveur on-premises, enregistrer avec l'activation. Les serveurs apparaissent comme 'mi-' (Managed Instances) au lieu de 'i-'. Ils peuvent ensuite utiliser Session Manager, Run Command, Patch Manager, etc. comme les instances EC2."},
{id:"aws-soa-c03-j9-10",q:"Un administrateur veut s'assurer que toutes les instances EC2 ont l'agent CloudWatch installé. Quelle approche Systems Manager est la plus adaptée ?",choices:["A. Run Command exécuté manuellement chaque semaine","B. State Manager association avec AWS-ConfigureAWSPackage pour installer/maintenir CloudWatch Agent en état cible","C. Créer une AMI avec CloudWatch Agent préinstallé uniquement","D. EventBridge rule déclenchant Lambda pour chaque nouvelle instance"],answer:1,exp:"State Manager est conçu exactement pour maintenir un état de configuration continu. Une association avec AWS-ConfigureAWSPackage (action Install, package AmazonCloudWatchAgent) s'applique régulièrement à toutes les instances ciblées (via tag ou Resource Groups). Elle s'applique aussi aux nouvelles instances ajoutées au target group, ce que Run Command ad-hoc ne fait pas."},
{id:"aws-soa-c03-j9-11",q:"Quelle est la différence entre SSM Parameter Store Standard et Advanced ?",choices:["A. Standard est pour les strings, Advanced pour les SecureStrings","B. Standard : gratuit, 10 000 paramètres max, 4KB par valeur, pas d'expiration. Advanced : payant ($0.05/param/mois), 100 000 paramètres, 8KB, TTL/expiration, notifications","C. Advanced supporte la réplication multi-régions","D. Standard ne supporte pas KMS"],answer:1,exp:"Standard Tier : 10 000 paramètres par région, 4KB valeur max, pas de TTL, gratuit. Advanced Tier : 100 000 paramètres, 8KB, TTL configurable (expiration automatique), notifications EventBridge sur expiration, $0.05 par paramètre par mois. Utile pour les secrets nécessitant expiration forcée sans Secrets Manager."},
{id:"aws-soa-c03-j9-12",q:"Comment AWS Systems Manager OpsCenter facilite-t-il la résolution des incidents ?",choices:["A. OpsCenter remplace PagerDuty et les outils tiers d'alerting","B. Agrège les OpsItems (problèmes opérationnels) depuis CloudWatch, Security Hub, Config, et les associe avec les ressources AWS et les runbooks de remédiation","C. Crée des tickets Jira automatiquement","D. OpsCenter est uniquement pour les instances EC2"],answer:1,exp:"OpsCenter agrège des OpsItems (problèmes opérationnels) créés automatiquement depuis CloudWatch Alarms, AWS Health, Security Hub, Config, ou manuellement. Chaque OpsItem est associé aux ressources AWS concernées, aux runbooks de remédiation SSM Automation recommandés, et à l'historique des changements. Facilite le diagnostic et la résolution centralisée."},
{id:"aws-soa-c03-j9-13",q:"Quelle est la commande AWS CLI pour envoyer une commande Run Command sur plusieurs instances taguées 'Environment:Production' ?",choices:["A. aws ssm send-command --targets 'Key=tag:Environment,Values=Production' --document-name 'AWS-RunShellScript'","B. aws ec2 run-instances --tag Environment=Production --script 'command'","C. aws cloudwatch run-command --environment Production","D. aws ssm execute-command --tag Environment=Production"],answer:0,exp:"La commande correcte utilise 'aws ssm send-command' avec '--targets Key=tag:EnvironmentKey,Values=Value' pour cibler par tag. Les targets supportent : tag:key=value (instances avec ce tag), InstanceIds (liste d'IDs), ResourceGroup (AWS Resource Groups). Le paramètre '--document-name' spécifie le SSM Document à exécuter."},
{id:"aws-soa-c03-j9-14",q:"Qu'est-ce que AWS AppConfig et comment s'intègre-t-il avec Systems Manager ?",choices:["A. AppConfig gère les configurations d'applications Kubernetes uniquement","B. AppConfig permet de déployer des configurations d'applications de façon contrôlée (déploiement progressif, rollback automatique), stockées dans Parameter Store ou S3","C. AppConfig est un service de déploiement d'applications sans rapport avec Systems Manager","D. AppConfig remplace CloudFormation pour les déploiements"],answer:1,exp:"AWS AppConfig (partie de Systems Manager) : déploie des configurations d'applications (feature flags, paramètres) de façon contrôlée. Sources : SSM Parameter Store, SSM Document, S3. Deployment strategies : AllAtOnce, Linear, Exponential. Moniteur : CloudWatch Alarms déclenchent un rollback automatique si erreurs détectées. Idéal pour les feature flags et changements de configuration sans redéploiement."},
{id:"aws-soa-c03-j9-15",q:"Comment SSM Agent reçoit-il les instructions de Systems Manager ?",choices:["A. L'agent contacte périodiquement les endpoints SSM via HTTPS","B. Systems Manager push les instructions directement vers l'agent","C. Les instructions passent par SNS","D. Via des messages SQS créés par Systems Manager"],answer:0,exp:"L'agent SSM utilise un modèle pull : il contacte régulièrement les endpoints Systems Manager (ssm.region.amazonaws.com, ssmmessages.region.amazonaws.com) via HTTPS outbound. L'instance a besoin de connectivity HTTPS sortante vers ces endpoints (via NAT Gateway, VPC Endpoints, ou Internet Gateway). Pas de port entrant nécessaire."},
{id:"aws-soa-c03-j9-16",q:"Quelle fonctionnalité de Systems Manager permet de suivre les changements de configuration des instances au fil du temps ?",choices:["A. CloudTrail","B. Systems Manager Change Tracker en combinaison avec AWS Config","C. CloudWatch Logs","D. VPC Flow Logs"],answer:1,exp:"Change Manager (Systems Manager) + AWS Config : Change Manager gère les demandes de changement avec workflow d'approbation, période de gel, notifications SNS. AWS Config enregistre les changements de configuration des ressources. Ensemble, ils offrent une traçabilité complète des changements opérationnels avec contexte (qui, quand, quoi). Systems Manager Change Calendar définit les périodes où les changements sont bloqués."},
{id:"aws-soa-c03-j9-17",q:"Un SysOps admin doit exécuter un script de mise à jour sur 500 instances EC2 avec un maximum de 10 instances simultanément. Comment configurer Run Command ?",choices:["A. Exécuter Run Command 10 fois avec 50 instances chacune","B. Utiliser Run Command avec MaxConcurrency=10 et MaxErrors pour définir le seuil d'arrêt","C. Créer un Auto Scaling Group avec 10 instances maximum","D. Utiliser Lambda avec Step Functions pour orchestrer"],answer:1,exp:"Run Command supporte MaxConcurrency (nombre ou pourcentage d'instances simultanées : '10' ou '5%') et MaxErrors (nombre ou pourcentage d'erreurs avant arrêt). Pour 500 instances avec 10 max simultanées : MaxConcurrency=10, MaxErrors selon la tolérance aux erreurs. Cela protège contre les mises à jour défaillantes généralisées."},
{id:"aws-soa-c03-j9-18",q:"Quelle est la différence entre SSM Session Manager et SSH traditionnel en termes de sécurité ?",choices:["A. SSH est plus sécurisé car il utilise des clés cryptographiques","B. Session Manager : pas de ports ouverts, accès contrôlé par IAM, sessions auditées, pas de gestion de clés SSH, logs vers S3/CloudWatch","C. Les deux ont le même niveau de sécurité","D. Session Manager ne chiffre pas les communications"],answer:1,exp:"SSH : port 22 ouvert, gestion des clés SSH, bastion host nécessaire, logs difficiles à centraliser. Session Manager : aucun port entrant requis (communications HTTPS outbound via agent), autorisation IAM fine (par utilisateur, instance, durée), audit automatique des sessions dans CloudTrail, logs de session dans S3/CloudWatch Logs, pas de clés SSH à gérer."},
{id:"aws-soa-c03-j9-19",q:"Comment AWS Systems Manager Fleet Manager facilite-t-il la gestion des instances Windows ?",choices:["A. Fleet Manager est exclusivement pour les instances Linux","B. Fleet Manager fournit une interface GUI dans la console AWS pour gérer les instances Windows (gestionnaire de fichiers, registre, services, utilisateurs locaux) sans RDP","C. Fleet Manager remplace Active Directory","D. Fleet Manager est un outil de déploiement d'applications"],answer:1,exp:"Fleet Manager offre une interface graphique dans la console AWS Systems Manager pour gérer les instances gérées, notamment Windows : navigateur de fichiers (créer, modifier, supprimer des fichiers), registre Windows (visualiser et modifier), gestionnaire de services Windows, utilisateurs et groupes locaux, logs d'événements. Tout sans ouvrir de port RDP."},
{id:"aws-soa-c03-j9-20",q:"Quelle combinaison AWS Systems Manager est recommandée pour une gestion automatique complète des patchs en production ?",choices:["A. Run Command exécuté manuellement chaque mois","B. Patch Manager avec Patch Baselines + Maintenance Windows + Patch Groups pour orchestrer les patchs par environnement avec contrôle de la simultanéité","C. CloudFormation avec User Data pour les patchs au lancement uniquement","D. Lambda + CloudWatch Events pour les patchs à minuit"],answer:1,exp:"Combinaison recommandée : Patch Baselines (règles de compliance), Patch Groups (tag 'Patch Group' sur les instances pour cibler les bonnes baselines), Maintenance Windows (planification, MaxConcurrency, MaxErrors), Systems Manager Compliance (reporting). Cette approche permet des patchs différenciés par environnement (dev/staging/prod) avec contrôle du déploiement progressif."}
];

// ── Jour 10 — IAM, SCPs, IAM Identity Center ──────────────────────────────────
window.QDATA[10,
  {
    id: "aws-soa-c03-j10-21",
    q: "Quelle est la différence entre AWS KMS 'AWS Managed Keys' et 'Customer Managed Keys' (CMK) ?",
    choices: ["A. AWS Managed : crées et gérées par AWS pour les services (S3, RDS, etc.), rotation automatique annuelle, non configurables. CMK : crées par le client, rotation configurable, policies personnalisées","B. AWS Managed sont plus sécurisées que les CMK","C. Les CMK coûtent moins cher que les AWS Managed Keys","D. Les deux ont les mêmes fonctionnalités"],
    answer: 0,
    exp: "AWS Managed Keys (aws/s3, aws/rds) : créées automatiquement par AWS lors de l'activation du chiffrement sur un service. Rotation automatique annuelle. Pas de contrôle sur la policy. Gratuites. Customer Managed Keys (CMK) : créées par le client. Contrôle total sur la key policy et les grants. Rotation configurable (automatique annuelle ou manuelle). Utilisables cross-account et cross-service. $1/mois + $0.03/10K API calls."
  },
  {
    id: "aws-soa-c03-j10-22",
    q: "Qu'est-ce qu'un 'KMS Key Policy' et comment diffère-t-il d'une IAM Policy pour le contrôle d'accès KMS ?",
    choices: ["A. Les deux sont identiques","B. Key Policy : doit explicitement autoriser les IAM entities (Deny implicite si absent de la policy). IAM Policy : complète mais ne suffit pas seule si la Key Policy n'autorise pas les IAM principals","C. La IAM Policy prend toujours la priorité sur la Key Policy","D. Key Policy est pour les CMK uniquement, IAM Policy pour les AWS Managed Keys"],
    answer: 1,
    exp: "Modèle d'autorisation KMS : BOTH Key Policy ET IAM Policy doivent autoriser l'accès (intersection). La Key Policy par défaut donne le plein accès au compte root — les IAM policies suffisent alors. Si la Key Policy ne donne pas accès aux IAM entities, les policies IAM ne peuvent pas contourner. Best practice : Key Policy restrictive + IAM policies granulaires."
  },
  {
    id: "aws-soa-c03-j10-23",
    q: "Qu'est-ce que l'AWS Certificate Manager (ACM) et quelle est sa limitation principale ?",
    choices: ["A. ACM gère les certificats SSL/TLS : provisioning, déploiement, renouvellement automatique. Limitation : les certificats ACM ne peuvent PAS être exportés — uniquement utilisables avec les services AWS intégrés (ELB, CloudFront, API Gateway)","B. ACM peut exporter les certificats en PFX","C. ACM crée uniquement des certificats auto-signés","D. ACM nécessite une validation manuelle par AWS"],
    answer: 0,
    exp: "ACM : provisioning gratuit de certificats SSL/TLS, renouvellement automatique, déploiement en un clic sur ALB/CloudFront/API Gateway. Limitation : les certificats publics ACM ne sont PAS exportables (clé privée non accessible). Pour les serveurs on-premise ou les services non-AWS, utiliser ACM Private CA ou importer un certificat externe dans ACM."
  },
  {
    id: "aws-soa-c03-j10-24",
    q: "Comment implémenter une rotation automatique des secrets dans AWS Secrets Manager ?",
    choices: ["A. Modifier manuellement les secrets périodiquement","B. Configurer la rotation automatique dans Secrets Manager avec une fonction Lambda (prédéfinie pour RDS, Redshift, DocumentDB) qui génère un nouveau secret et met à jour la cible","C. Secrets Manager ne supporte pas la rotation automatique","D. Utiliser SSM Parameter Store pour la rotation automatique"],
    answer: 1,
    exp: "Secrets Manager rotation automatique : 1) Activer la rotation avec une fréquence (ex: tous les 30 jours). 2) Choisir une Lambda de rotation (AWS fournit des templates pour RDS MySQL/PostgreSQL, Redshift, DocumentDB) ou créer une custom. 3) La Lambda génère un nouveau credential, l'applique sur la DB, valide, et met à jour le secret. Les applications qui lisent le secret via SDK obtiennent le nouveau automatiquement."
  },
  {
    id: "aws-soa-c03-j10-25",
    q: "Qu'est-ce qu'AWS IAM Access Analyzer et quel est son cas d'usage ?",
    choices: ["A. Analyse les patterns d'accès IAM pour recommander des politiques least-privilege","B. Identifie les ressources partagées avec des entités externes (hors de la zone de confiance) : S3 buckets publics, IAM roles assumables cross-account","C. Surveille les tentatives de connexion IAM en temps réel","D. B et A sont toutes deux des fonctionnalités d'Access Analyzer"],
    answer: 3,
    exp: "IAM Access Analyzer a deux fonctionnalités principales : 1) External Access Analysis : scanne les resource-based policies (S3, IAM roles, KMS, Lambda, SQS, SNS) et identifie les ressources accessibles depuis l'extérieur de la zone de confiance (account ou org). 2) Unused Access Analysis : identifie les IAM roles/users avec des permissions non utilisées pour recommander le least-privilege."
  },
  {
    id: "aws-soa-c03-j10-26",
    q: "Quelle est la différence entre AWS Shield Standard et AWS Shield Advanced ?",
    choices: ["A. Shield Standard : protection DDoS automatique gratuite pour tous les services AWS. Shield Advanced : protection avancée payante avec SRT (Shield Response Team), couverture des coûts de scaling liés à une attaque DDoS","B. Shield Standard protège uniquement CloudFront","C. Shield Advanced est identique à Shield Standard avec une interface différente","D. Shield Standard nécessite une configuration manuelle"],
    answer: 0,
    exp: "Shield Standard : inclus gratuitement, protection automatique contre les attaques DDoS L3/L4 communes (SYN floods, UDP floods). Shield Advanced ($3,000/mois) : protection avancée L7, SRT 24/7, détection avancée, protection des coûts de scaling liés aux attaques, intégration WAF, réduction des coûts WAF et CloudFront pendant une attaque. Pour les applications critiques exposées à internet."
  },
  {
    id: "aws-soa-c03-j10-27",
    q: "Comment AWS WAF (Web Application Firewall) protège-t-il contre les attaques web courantes ?",
    choices: ["A. WAF inspecte le trafic réseau niveau TCP/IP","B. WAF filtre le trafic HTTP/HTTPS en utilisant des 'Web ACL Rules' : IP rules, geographic rules, rate limiting, AWS Managed Rules (OWASP Top 10, bot mitigation, reputation lists)","C. WAF remplace les Security Groups pour les applications web","D. WAF est uniquement disponible avec CloudFront"],
    answer: 1,
    exp: "AWS WAF : protection couche 7 (HTTP) pour CloudFront, ALB, API Gateway, AppSync. Règles : 1) IP Sets (bloquer/autoriser des IPs). 2) Geo Rules (bloquer des pays). 3) Rate-Based Rules (limite de requêtes par IP). 4) Regex patterns. 5) AWS Managed Rules (OWASP Top 10 : SQLi, XSS, etc.). 6) Bot Control. 7) Account Takeover Protection. Logs vers S3/CloudWatch/Kinesis."
  },
  {
    id: "aws-soa-c03-j10-28",
    q: "Qu'est-ce qu'AWS Macie et pour quel type de données est-il particulièrement utile ?",
    choices: ["A. Un service de monitoring réseau","B. Un service ML qui découvre et protège les données sensibles (PII, PHI, données financières, credentials) dans les buckets S3","C. Un service de chiffrement automatique des bases de données","D. Un antivirus pour les instances EC2"],
    answer: 1,
    exp: "Amazon Macie utilise le ML pour : 1) Découvrir automatiquement les données sensibles dans S3 (PII, PHI, numéros de CB, credentials, etc.). 2) Évaluer les risques de sécurité des buckets S3 (accès public, chiffrement manquant). 3) Générer des alertes sur les accès anormaux. Idéal pour : conformité RGPD, HIPAA, PCI-DSS — identifier où se trouvent les données sensibles."
  },
  {
    id: "aws-soa-c03-j10-29",
    q: "Comment AWS Security Hub centralise-t-il les alertes de sécurité dans un environnement multi-comptes ?",
    choices: ["A. Security Hub collecte et normalise les findings de plusieurs services AWS (GuardDuty, Inspector, Macie, IAM AA, Firewall Manager) et des solutions partenaires dans un tableau de bord central","B. Security Hub remplace GuardDuty","C. Security Hub nécessite une configuration séparée dans chaque compte","D. Security Hub est uniquement pour les grands comptes Enterprise"],
    answer: 0,
    exp: "Security Hub : tableau de bord central de sécurité qui : 1) Agrège les findings de GuardDuty, Inspector, Macie, IAM Access Analyzer, Firewall Manager et 100+ intégrations partenaires. 2) Normalise au format ASFF (AWS Security Finding Format). 3) Évalue la conformité (CIS, PCI-DSS, FSBP). 4) Déclenche des automatisations via EventBridge. Configuration multi-comptes via Organizations."
  },
  {
    id: "aws-soa-c03-j10-30",
    q: "Quelle est la différence entre GuardDuty 'Threat Intelligence' et IAM Access Analyzer ?",
    choices: ["A. GuardDuty analyse les logs (CloudTrail, VPC Flow Logs, DNS) pour détecter les activités malveillantes en cours. Access Analyzer examine les policies pour détecter les accès potentiels (non-malveillants par définition)","B. Les deux détectent les mêmes types de menaces","C. IAM Access Analyzer est plus puissant que GuardDuty","D. GuardDuty analyse uniquement les EC2 instances"],
    answer: 0,
    exp: "GuardDuty : détection de menaces en cours (comportemental) — analyse CloudTrail events, VPC Flow Logs, DNS logs, Kubernetes audit logs pour détecter : compromission de credentials, communication avec des IPs malveillantes (threat intel), cryptomining, mouvement latéral. Access Analyzer : statique — examine les resource policies pour trouver les accès involontaires à des tiers. Complémentaires."
  },
  {
    id: "aws-soa-c03-j10-31",
    q: "Comment configurer AWS Config pour évaluer la conformité des Security Groups ?",
    choices: ["A. Config ne peut pas évaluer les Security Groups","B. Utiliser la Config Rule managée 'restricted-ssh' (pas de SSH depuis 0.0.0.0/0) ou créer des Config Rules custom avec Lambda pour des validations complexes","C. Utiliser VPC Flow Logs pour vérifier les Security Groups","D. Utiliser Inspector pour évaluer les Security Groups"],
    answer: 1,
    exp: "AWS Config Rules pour Security Groups : Managed Rules disponibles : restricted-ssh (pas de port 22 ouvert à 0.0.0.0/0), restricted-common-ports, vpc-sg-open-only-to-authorized-ports. Pour des règles plus complexes : Config Custom Rule avec Lambda (analyse le Security Group avec boto3). Remédiation automatique : SSM Automation pour révoquer les règles non conformes."
  },
  {
    id: "aws-soa-c03-j10-32",
    q: "Qu'est-ce que l'AWS Organizations Service Control Policy (SCP) et comment est-elle différente d'une IAM Policy ?",
    choices: ["A. SCP : s'applique à un compte entier ou une OU (guardrails, Deny ou Allow sur des services), ne donne pas de permissions. IAM Policy : donne des permissions à des identités dans un compte","B. SCP donne des permissions aux utilisateurs IAM","C. SCP et IAM Policy sont identiques","D. SCP ne peut que faire des Deny, jamais des Allow"],
    answer: 0,
    exp: "SCP (Service Control Policy) : définit les permissions MAXIMALES disponibles dans un compte/OU — même l'administrateur du compte ne peut pas dépasser les limites SCP. Ne donne pas de permissions en soi. IAM Policy : donne des permissions à des identités (users, roles, groups) dans un compte. Modèle : IAM permissions ∩ SCP = permissions effectives."
  },
  {
    id: "aws-soa-c03-j10-33",
    q: "Comment Amazon Inspector améliore-t-il la sécurité des workloads EC2 et containers ?",
    choices: ["A. Inspector scanne manuellement les instances sur demande","B. Inspector v2 analyse en continu : vulnérabilités OS/packages (CVEs) sur EC2 et containers (ECR), code exposé (Lambda), et génère des findings avec score CVSS priorisés","C. Inspector est un IDS/IPS réseau","D. Inspector remplace GuardDuty pour la détection de menaces"],
    answer: 1,
    exp: "Amazon Inspector v2 : scan continu et automatique de : 1) Instances EC2 : vulnérabilités OS, packages via l'agent (ou sans agent via SSM). 2) Images ECR : scan à chaque push, vulnérabilités dans les layers. 3) Lambda functions : vulnérabilités dans les packages et permissions excessives. Les findings incluent un score de criticité CVSS et une guidance de remédiation."
  },
  {
    id: "aws-soa-c03-j10-34",
    q: "Quelle est la stratégie pour implémenter le principe du 'least privilege' pour les rôles IAM EC2 ?",
    choices: ["A. Donner le rôle AdministratorAccess à toutes les instances","B. Analyser les permissions utilisées réellement (IAM Access Analyzer Unused Access, CloudTrail), générer une policy avec les permissions minimales nécessaires, réviser périodiquement","C. Ne jamais utiliser de rôles IAM sur EC2","D. Utiliser des users IAM avec clés d'accès sur les instances"],
    answer: 1,
    exp: "Least privilege pour les rôles EC2 : 1) Identifier les APIs réellement appelées via CloudTrail (90 jours). 2) IAM Access Analyzer 'Unused Access' : identifie les permissions jamais utilisées. 3) AWS Policy Generator ou IAM Policy Simulator pour affiner. 4) Révision périodique. Jamais: AdministratorAccess en production. Jamais : access keys dans le code (utiliser les rôles IAM à la place)."
  },
  {
    id: "aws-soa-c03-j10-35",
    q: "Qu'est-ce que le 'AWS PrivateLink' et quel problème de sécurité résout-il ?",
    choices: ["A. Un VPN entre AWS et on-premise","B. Permet d'accéder aux services AWS ou à des services tiers depuis un VPC via un Endpoint privé, sans traverser internet — le trafic reste sur le réseau AWS","C. Un pare-feu pour les services AWS","D. Un service de chiffrement des communications inter-VPC"],
    answer: 1,
    exp: "AWS PrivateLink (VPC Interface Endpoint) : crée une Elastic Network Interface (ENI) dans le VPC qui reçoit une IP privée. Tout le trafic vers le service (AWS ou SaaS tiers) traverse le réseau interne AWS sans passer par internet ou une NAT Gateway. Avantages : 1) Sécurité (pas d'exposition internet). 2) Pas besoin d'IGW ou NAT. 3) Conformité (données ne sortent pas du réseau AWS)."
  },
  {
    id: "aws-soa-c03-j10-36",
    q: "Comment AWS Firewall Manager centralise-t-il la gestion des règles de sécurité dans une organisation ?",
    choices: ["A. Firewall Manager gère les firewalls physiques des datacenters AWS","B. Firewall Manager déploie et maintient centralement des règles WAF, Security Groups, Shield Advanced, et Network Firewall dans tous les comptes de l'organisation depuis un compte administrateur","C. Firewall Manager remplace les Security Groups","D. Firewall Manager est uniquement pour CloudFront"],
    answer: 1,
    exp: "AWS Firewall Manager : centralisé depuis le compte admin de l'organisation pour déployer des politiques de sécurité sur tous les comptes : 1) WAF rules sur ALB/CloudFront/API Gateway. 2) Shield Advanced sur toutes les ressources protégées. 3) Security Group policies (règles communes obligatoires). 4) AWS Network Firewall. 5) DNS Firewall. Nouveaux comptes héritent automatiquement des politiques."
  },
  {
    id: "aws-soa-c03-j10-37",
    q: "Qu'est-ce que l'AWS Network Firewall et comment diffère-t-il des Security Groups et NACLs ?",
    choices: ["A. Network Firewall est un pare-feu stateful managé avec Deep Packet Inspection (DPI) — filtre le trafic entrant/sortant du VPC avec des règles Suricata (IDS/IPS). Security Groups et NACLs ne font que du filtrage L3/L4 basique","B. Network Firewall remplace les Security Groups","C. Les trois sont identiques — différence uniquement de niveau OSI","D. Network Firewall gère uniquement le trafic inter-VPC"],
    answer: 0,
    exp: "Comparaison : Security Groups (stateful, L3/L4, instance-level), NACLs (stateless, L3/L4, subnet-level), Network Firewall (stateful + stateless, L3-L7, VPC-level, DPI, signatures IDS/IPS Suricata, domains filtering). Network Firewall est positionné à la sortie du VPC (Transit Gateway ou Internet Gateway) pour inspecter tout le trafic est-ouest et nord-sud."
  },
  {
    id: "aws-soa-c03-j10-38",
    q: "Comment implémenter l'authentification MFA pour les accès à la console AWS en entreprise ?",
    choices: ["A. Activer MFA sur chaque compte IAM individuellement","B. Utiliser AWS IAM Identity Center (SSO) avec MFA enforced — intégration avec l'Identity Provider d'entreprise (AD, Okta) + MFA via authenticator app ou hardware token","C. MFA n'est pas supporté sur AWS","D. Utiliser les Access Keys IAM au lieu de la console pour éviter le besoin de MFA"],
    answer: 1,
    exp: "MFA enterprise : 1) IAM Identity Center (AWS SSO) + AD/LDAP : SSO depuis un portail unique avec MFA enforced. Supporte TOTP (Authenticator app) et MFA matériel (Yubikey). 2) Pour les comptes root et les admins IAM : MFA virtuel (TOTP) ou hardware MFA (FIDO2). 3) SCP pour refuser les actions sans MFA : Condition aws:MultiFactorAuthPresent: 'false' → Deny."
  },
  {
    id: "aws-soa-c03-j10-39",
    q: "Qu'est-ce que le 'AWS CloudTrail Data Events' et pourquoi est-il distinct des Management Events ?",
    choices: ["A. Data Events enregistrent les opérations sur les données (GetObject S3, GetItem DynamoDB) — très verbeux et payants. Management Events enregistrent les actions de gestion (CreateBucket, RunInstances) — inclus par défaut","B. Les deux types d'events sont identiques","C. Data Events sont enregistrés en temps réel, Management Events en batch","D. Data Events ne peuvent pas être envoyés vers CloudWatch"],
    answer: 0,
    exp: "CloudTrail Management Events : actions de contrôle (CreateBucket, RunInstances, PutBucketPolicy) — inclus par défaut dans tout trail, 1 copie gratuite par région. Data Events : opérations sur les données (S3 GetObject/PutObject, Lambda Invoke, DynamoDB GetItem) — pas inclus par défaut, très volumineux, payants. À activer sélectivement (ex: uniquement pour les buckets S3 sensibles)."
  },
  {
    id: "aws-soa-c03-j10-40",
    q: "Comment AWS IAM Roles Anywhere permet-il aux workloads on-premise d'accéder aux services AWS ?",
    choices: ["A. Les workloads on-premise utilisent des Access Keys IAM","B. IAM Roles Anywhere : les serveurs on-premise s'authentifient avec un certificat X.509 émis par une CA de confiance (AWS Private CA ou tierce) pour obtenir des credentials IAM temporaires (STS AssumeRoleWithX509)","C. VPN + rôle IAM attaché aux instances on-premise","D. IAM Roles Anywhere nécessite Direct Connect"],
    answer: 1,
    exp: "IAM Roles Anywhere étend les rôles IAM aux workloads non-AWS : 1) Enregistrer la CA dans IAM Roles Anywhere. 2) Les serveurs on-premise ont des certificats X.509 émis par cette CA. 3) Le serveur appelle IAM Roles Anywhere avec son certificat → reçoit des credentials IAM temporaires. 4) Utilise ces credentials pour appeler les APIs AWS. Plus sécurisé que les Access Keys longue durée."
  },
  {
    id: "aws-soa-c03-j10-41",
    q: "Quelle est la stratégie pour détecter et remédier automatiquement les IAM policies trop permissives ?",
    choices: ["A. Révision manuelle mensuelle des policies IAM","B. IAM Access Analyzer (finding sur les accès externes) + AWS Config rules (iam-no-inline-policy, iam-policy-no-statements-with-admin-access) + remédiation SSM Automation","C. Supprimer périodiquement tous les rôles IAM et recréer","D. Utiliser GuardDuty pour détecter les permissions excessives"],
    answer: 1,
    exp: "Détection des policies permissives : 1) AWS Config rule 'iam-policy-no-statements-with-admin-access' : détecte les policies avec Action:* Effect:Allow. 2) Access Analyzer Unused Access : identifie les permissions jamais utilisées. 3) Remédiation : SSM Automation qui retire les wildcard permissions et les remplace par des permissions spécifiques. 4) EventBridge → Lambda pour notification immédiate."
  },
  {
    id: "aws-soa-c03-j10-42",
    q: "Qu'est-ce que la 'Permission Boundary' IAM et dans quel contexte est-elle utilisée ?",
    choices: ["A. Permission Boundary est identique à une SCP","B. Permission Boundary définit les permissions MAXIMALES qu'une identity IAM peut avoir — même si une policy accorde plus, la permission boundary limite les permissions effectives. Utilisée pour déléguer la création de rôles IAM à des équipes sans risque d'escalade de privilèges","C. Permission Boundary s'applique à tous les comptes d'une organisation","D. Permission Boundary est utilisée pour les rôles cross-account uniquement"],
    answer: 1,
    exp: "Permission Boundary : politique IAM attachée à un user/role qui définit le plafond des permissions. Permissions effectives = Identity Policy ∩ Permission Boundary. Cas d'usage : déléguer à des développeurs la création de rôles IAM pour leurs applications, avec une Permission Boundary qui les empêche de créer des rôles admin ou d'escalader les privilèges. Différent de SCP (niveau organisation)."
  },
  {
    id: "aws-soa-c03-j10-43",
    q: "Comment auditer les accès aux données sensibles dans DynamoDB ?",
    choices: ["A. CloudWatch Logs sur DynamoDB","B. Activer CloudTrail Data Events pour DynamoDB (enregistre GetItem, PutItem, DeleteItem avec l'identité IAM) + optionnellement Streams pour capturer les modifications de données","C. VPC Flow Logs pour les connexions DynamoDB","D. Amazon Inspector pour les accès DynamoDB"],
    answer: 1,
    exp: "Audit accès DynamoDB : CloudTrail Data Events pour DynamoDB enregistre toutes les API calls (GetItem, PutItem, Query, Scan, DeleteItem) avec l'identité IAM, l'IP source, le timestamp. Utile pour l'audit forensique. DynamoDB Streams capture les modifications de données (insert/modify/delete) avec les ancienne/nouvelle valeurs — utile pour l'audit de conformité et les workflows event-driven."
  },
  {
    id: "aws-soa-c03-j10-44",
    q: "Quelle est la différence entre chiffrement 'at rest' et 'in transit' pour les services AWS ?",
    choices: ["A. Les deux sont identiques — différence uniquement de terminologie","B. At rest : données chiffrées lors du stockage (EBS, S3, RDS via KMS/SSE). In transit : données chiffrées lors du transport (TLS/SSL pour HTTPS, VPN, Direct Connect avec MACSec)","C. At rest est géré par AWS uniquement, in transit par le client uniquement","D. In transit s'applique uniquement aux connexions internet"],
    answer: 1,
    exp: "Chiffrement at rest : données chiffrées sur le support de stockage. Services : S3 SSE (AES-256 ou KMS), EBS encryption (KMS), RDS encryption (KMS), DynamoDB encryption. Chiffrement in transit : données chiffrées lors du transport. Services : HTTPS (TLS 1.2+) pour toutes les APIs AWS, VPN IPSec, Direct Connect + MACSec, MSK TLS entre brokers. Les deux sont requis pour une conformité complète."
  },
  {
    id: "aws-soa-c03-j10-45",
    q: "Comment AWS Secrets Manager diffère-t-il de SSM Parameter Store pour la gestion des secrets ?",
    choices: ["A. Les deux sont identiques","B. Secrets Manager : rotation automatique native, coût ($0.40/secret/mois), conçu pour les secrets (DB credentials, API keys). SSM Parameter Store : gratuit pour Standard, rotation manuelle, pour paramètres et secrets simples","C. SSM Parameter Store est plus sécurisé","D. Secrets Manager ne supporte pas la rotation automatique"],
    answer: 1,
    exp: "Secrets Manager vs SSM Param Store SecureString : Secrets Manager : $0.40/secret + $0.05/10K API calls, rotation automatique native (Lambda), versioning intégré, conçu pour les credentials de base de données. SSM Parameter Store Standard : gratuit (< 10K params), Secure String avec KMS, pas de rotation auto native. Advanced Parameter : $0.05/param/mois. Choisir Secrets Manager pour les credentials avec rotation requise."
  },
  {
    id: "aws-soa-c03-j10-46",
    q: "Qu'est-ce que l'AWS Security Lake et quel problème résout-il ?",
    choices: ["A. Un lac de données pour stocker les logs de sécurité de manière centralisée (CloudTrail, VPC Flow Logs, Route 53 DNS, Security Hub findings) au format OCSF, queryable avec Athena","B. Un service de chiffrement pour les data lakes S3","C. Un service de monitoring réseau","D. Security Lake remplace CloudTrail"],
    answer: 0,
    exp: "Amazon Security Lake centralise automatiquement les données de sécurité (CloudTrail, VPC Flow Logs, Route 53 DNS, AWS WAF, Security Hub findings, EventBridge, sources tierces) dans un S3 lake au format standard OCSF (Open Cybersecurity Schema Framework). Queryable avec Athena, Glue. Facilite les analyses de sécurité centralisées et la compliance."
  },
  {
    id: "aws-soa-c03-j10-47",
    q: "Comment configurer une politique de mot de passe forte pour les utilisateurs IAM dans un compte AWS ?",
    choices: ["A. Modifier les mots de passe manuellement pour chaque utilisateur","B. Configurer l'Account Password Policy IAM : longueur minimum, complexité (majuscules, chiffres, caractères spéciaux), expiration, historique, prévention de réutilisation","C. Utiliser AWS Cognito pour gérer les mots de passe IAM","D. Les mots de passe IAM ne peuvent pas être configurés centralement"],
    answer: 1,
    exp: "IAM Account Password Policy (définie au niveau du compte) : longueur minimum (1-128 caractères, min recommandé 14), caractères requis (majuscules, minuscules, chiffres, non-alphanumériques), expiration (1-1095 jours), historique de réutilisation (1-24 mots de passe), 'Allow users to change password'. Applique à TOUS les users IAM du compte."
  },
  {
    id: "aws-soa-c03-j10-48",
    q: "Qu'est-ce que l'AWS Detective et comment complète-t-il GuardDuty ?",
    choices: ["A. Detective est identique à GuardDuty","B. Detective analyse et visualise les données de sécurité pour faciliter les investigations forensiques après qu'un incident ait été détecté — GuardDuty détecte, Detective aide à investiguer","C. Detective prévient les incidents de sécurité","D. Detective remplace CloudTrail pour l'audit"],
    answer: 1,
    exp: "Amazon Detective facilite l'investigation forensique : analyse automatiquement CloudTrail, VPC Flow Logs, GuardDuty findings et construit un graphe de comportement. Quand GuardDuty génère un finding (ex: IP suspecte), Detective visualise : toutes les ressources qui ont communiqué avec cette IP, les patterns temporels, les anomalies. Réduit le temps d'investigation de jours à heures."
  },
  {
    id: "aws-soa-c03-j10-49",
    q: "Comment implémenter une 'defense in depth' (défense en profondeur) pour une application web AWS ?",
    choices: ["A. Utiliser uniquement WAF pour toute la protection","B. Couches de protection : CloudFront + Shield + WAF (edge) → ALB (Security Groups) → EC2 avec NACLs/SG (subnet) → RDS/DB (SG privé) + KMS → IAM least privilege + Secrets Manager + GuardDuty monitoring","C. Un seul Security Group pour toute l'application","D. Utiliser uniquement VPN pour sécuriser les accès"],
    answer: 1,
    exp: "Defense in depth (couches) : 1) Edge : CloudFront (DDoS Shield, géo-restriction) + WAF (OWASP rules, rate limiting). 2) Réseau : ALB (SG restreint, HTTPS uniquement) + NACLs. 3) Compute : SG instances (port applicatif uniquement depuis ALB), IMDSv2 obligatoire, SSM pour les accès. 4) Data : RDS dans subnet privé, chiffrement KMS, Secrets Manager. 5) Monitoring : GuardDuty, Security Hub, CloudTrail."
  },
  {
    id: "aws-soa-c03-j10-50",
    q: "Qu'est-ce que l'AWS Artifact et quel est son rapport avec la conformité ?",
    choices: ["A. Un service de création d'artefacts de code (binaires, containers)","B. Un portail de self-service pour accéder aux rapports de conformité AWS (SOC, PCI, ISO, HIPAA, etc.) et aux accords de niveau de service (NDA, BAA)","C. Un service de sauvegarde des configurations","D. Un outil d'audit des ressources AWS"],
    answer: 1,
    exp: "AWS Artifact : portail qui donne accès aux rapports d'audit de tiers (AWS SOC 1/2/3, ISO 27001, PCI DSS, FedRAMP, HIPAA) pour démontrer la conformité de l'infrastructure AWS. Accès aux Business Associate Agreements (BAA pour HIPAA) et Non-Disclosure Agreements. Permet aux entreprises de montrer que leur cloud provider est conforme."
  }
]=[
{id:"aws-soa-c03-j10-1",q:"Quelle est la différence entre une IAM Policy basée sur les ressources et une IAM Policy basée sur l'identité ?",choices:["A. Les deux sont identiques — c'est juste une convention de nommage","B. Identity-based : attachée à un utilisateur/rôle/groupe IAM pour définir ses permissions. Resource-based : attachée à une ressource (S3 bucket, SQS queue) pour définir qui peut y accéder","C. Resource-based policies ne supportent pas les conditions","D. Identity-based policies ne supportent pas les cross-account access"],answer:1,exp:"Identity-based policies : attachées à des principals IAM (users, roles, groups), définissent ce que ce principal peut faire. Resource-based policies : attachées à des ressources AWS (S3, SQS, SNS, KMS), définissent qui peut effectuer des actions sur cette ressource, supportent les cross-account en spécifiant des ARNs de comptes externes. Les deux peuvent coexister pour le même accès."},
{id:"aws-soa-c03-j10-2",q:"Comment fonctionnent les Service Control Policies (SCPs) dans AWS Organizations ?",choices:["A. Les SCPs remplacent les IAM policies dans les comptes membres","B. Les SCPs définissent les permissions maximales autorisées dans les OU/comptes — elles ne accordent pas de permissions mais les limitent","C. Les SCPs s'appliquent uniquement au compte root de l'organisation","D. Les SCPs sont appliquées uniquement aux utilisateurs IAM, pas aux rôles"],answer:1,exp:"Les SCPs fixent les guardrails de permissions : elles ne accordent pas de permissions mais définissent le plafond. Un utilisateur IAM avec Admin policy dans un compte fils ne peut faire que ce que la SCP autorise. Les SCPs s'appliquent à tous les principals du compte (sauf le compte root de l'organisation). Elles sont héritées hiérarchiquement : Organization → OU → compte."},
{id:"aws-soa-c03-j10-3",q:"Qu'est-ce qu'AWS IAM Identity Center (successeur de AWS SSO) et quel problème résout-il ?",choices:["A. Un service de création d'utilisateurs IAM en masse","B. Fournit un point d'accès unique (SSO) pour les utilisateurs vers plusieurs comptes AWS et applications SAML/OIDC, avec gestion centralisée des accès","C. Un service d'authentification multifacteur uniquement","D. Un remplacement de Active Directory pour les entreprises"],answer:1,exp:"IAM Identity Center : SSO centralisé pour les organisations AWS multi-comptes. Les utilisateurs s'authentifient une seule fois (via Identity Center, Active Directory, ou IdP externe SAML) et accèdent à plusieurs comptes AWS et applications d'entreprise. Les Permission Sets définissent les accès. Élimine la gestion d'utilisateurs IAM séparés dans chaque compte."},
{id:"aws-soa-c03-j10-4",q:"Quelle est la différence entre les IAM Roles pour EC2 et les IAM Users pour les applications ?",choices:["A. Les deux sont équivalents pour les applications","B. Les IAM Roles pour EC2 (Instance Profiles) fournissent des credentials temporaires et automatiquement rotatifs via IMDS ; les IAM Users nécessitent des access keys long-term à gérer","C. Les IAM Roles ne supportent pas toutes les APIs AWS","D. Les IAM Users sont plus sécurisés car les clés ne changent pas"],answer:1,exp:"Instance Profiles (IAM Roles pour EC2) : credentials temporaires (STS) disponibles via IMDS (169.254.169.254), rotation automatique toutes ~6h, aucune clé à stocker ou gérer. IAM Users avec access keys : long-term credentials qui ne changent pas automatiquement, risque de compromission si exposées, nécessitent rotation manuelle. Best practice : toujours utiliser des roles pour les applications sur AWS."},
{id:"aws-soa-c03-j10-5",q:"Comment implémenter le principe du moindre privilège avec IAM en pratique ?",choices:["A. Donner des permissions AdministratorAccess et laisser les utilisateurs décider","B. Commencer avec des permissions minimales, utiliser IAM Access Analyzer pour identifier les permissions inutilisées, analyser les Access Advisor reports, et affiner progressivement","C. Utiliser des Managed Policies AWS uniquement pour toutes les permissions","D. Créer un utilisateur IAM unique partagé entre toutes les applications"],answer:1,exp:"Principe du moindre privilège en pratique : IAM Access Analyzer → analyse les accès depuis internet/comptes externes, identifie les permissions inutilisées (feature 'Unused Access'). Service Last Accessed reports → voir quand un service a été utilisé pour la dernière fois. IAM Policy Simulator → tester les politiques avant application. CloudTrail → auditer les APIs appelées réellement."},
{id:"aws-soa-c03-j10-6",q:"Qu'est-ce qu'une IAM Permission Boundary et quand l'utiliser ?",choices:["A. Une limite physique sur le nombre de permissions IAM dans un compte","B. Une politique IAM qui définit les permissions maximales qu'une entité IAM (user ou role) peut avoir — le développeur ne peut pas créer des roles avec plus de permissions que les siennes","C. Une restriction sur les régions accessibles","D. Une limite sur le nombre d'appels API par heure"],answer:1,exp:"Permission Boundaries : définissent le maximum de permissions qu'un user ou role peut avoir. Utile pour la délégation : permettre aux développeurs de créer des IAM roles pour leurs applications sans pouvoir créer des roles avec plus de permissions qu'eux-mêmes. Les permissions effectives = intersection(identity-based policy, permission boundary). Ne s'appliquent pas aux resource-based policies ou SCPs."},
{id:"aws-soa-c03-j10-7",q:"Comment fonctionne AWS STS AssumeRole pour le cross-account access ?",choices:["A. STS copie les permissions de l'utilisateur vers l'autre compte","B. L'utilisateur du compte A appelle STS AssumeRole avec l'ARN d'un role dans le compte B, obtient des credentials temporaires valides pour ce role","C. AssumeRole nécessite un VPC peering entre les comptes","D. STS AssumeRole ne fonctionne qu'entre comptes de la même Organisation"],answer:1,exp:"Cross-account avec STS : 1) Compte B : créer un role avec trust policy autorisant le compte A. 2) Compte A : donner à l'utilisateur sts:AssumeRole permission sur le role ARN du compte B. 3) L'utilisateur appelle STS AssumeRole → reçoit des credentials temporaires (AccessKey, SecretKey, SessionToken) pour le compte B. Durée : 15min à 12h. External ID pour les tiers."},
{id:"aws-soa-c03-j10-8",q:"Quelle est la différence entre AWS Organizations et IAM pour la gestion des comptes ?",choices:["A. Organizations remplace entièrement IAM","B. Organizations gère la hiérarchie de comptes AWS, la facturation consolidée, les SCPs pour les guardrails. IAM gère les identités et permissions dans chaque compte individuel","C. IAM peut gérer des comptes AWS directement","D. Organizations n'est disponible que pour les grandes entreprises"],answer:1,exp:"AWS Organizations : structure hiérarchique (OUs), facturation consolidée, SCPs pour les guardrails cross-comptes, déploiement automatique de services (Config, CloudTrail, Security Hub) via l'organisation. IAM : gestion des identités (users, roles, policies) au sein d'un compte. Les deux sont complémentaires. Identity Center fédère les deux en gérant l'accès aux comptes de l'organisation."},
{id:"aws-soa-c03-j10-9",q:"Un utilisateur IAM dispose de plusieurs politiques. Quelle est la règle d'évaluation des politiques ?",choices:["A. La politique la plus permissive gagne","B. Deny explicite > Allow explicite. Par défaut tout est implicitement Deny. Une seule politique avec Deny suffit pour bloquer l'accès même si d'autres autorisent","C. L'ordre des politiques dans IAM détermine quelle politique est appliquée","D. Les politiques Managed AWS ont priorité sur les politiques Custom"],answer:1,exp:"Évaluation IAM : 1) Deny explicite → accès refusé (priorité absolue). 2) Allow explicite (au moins une politique) → accès autorisé. 3) Aucun Allow → Deny implicite. Les SCPs et Permission Boundaries sont vérifiées en plus. Si SCP bloque, même un Allow IAM ne suffit pas. L'évaluation considère toutes les politiques attachées au principal."},
{id:"aws-soa-c03-j10-10",q:"Comment AWS IAM Access Analyzer aide-t-il la sécurité ?",choices:["A. Il analyse le code source des applications pour trouver des failles","B. Identifie les ressources AWS partagées avec l'extérieur (internet, autres comptes) et les permissions inutilisées (Unused Access Analyzer)","C. Bloque automatiquement les accès suspects","D. Génère des IAM policies automatiquement"],answer:1,exp:"IAM Access Analyzer (External Access Analyzer) : identifie les ressources accessibles depuis internet ou d'autres comptes AWS hors de la zone de confiance (S3, KMS, IAM roles, SQS, Lambda, etc.). Génère des findings avec PoLP recommendations. Unused Access Analyzer : identifie les accès non utilisés (unused roles, permissions, password). Policy Validation : vérifie la syntaxe et les meilleures pratiques."},
{id:"aws-soa-c03-j10-11",q:"Quelle est la meilleure pratique AWS concernant les Access Keys pour les utilisateurs IAM ?",choices:["A. Créer une access key unique partagée entre tous les développeurs","B. Éviter les access keys pour les opérations sur AWS si possible. Si nécessaire : ne pas les partager, les stocker dans Secrets Manager, les faire tourner régulièrement, utiliser aws configure profiles","C. Les access keys peuvent être stockées dans le code source versionné en privé","D. Utiliser la même access key pour tous les environnements"],answer:1,exp:"Best practices Access Keys : ne jamais partager, ne jamais commiter dans le code (même repo privé), rotation régulière (AWS Config rule access-keys-rotated), supprimer les clés non utilisées, préférer des roles IAM quand possible (sur EC2, Lambda, ECS). Pour les pipelines CI/CD : utiliser OIDC pour obtenir des credentials temporaires au lieu de stocker des access keys long-term."},
{id:"aws-soa-c03-j10-12",q:"Qu'est-ce qu'une IAM Condition et comment l'utiliser pour restreindre l'accès par IP ?",choices:["A. Les conditions ne peuvent pas filtrer par IP dans IAM","B. Utiliser la clé de condition aws:SourceIp dans la policy pour autoriser/refuser selon l'IP source ou aws:VpcSourceIp pour les requêtes depuis un VPC","C. Les restrictions IP doivent être configurées dans les Security Groups uniquement","D. IAM Conditions ne s'appliquent qu'aux actions EC2"],answer:1,exp:"IAM Conditions avec IP : aws:SourceIp (IP publique, pour internet) et aws:VpcSourceIp (IP dans un VPC, pour les requêtes via VPC Endpoints). Exemple : refuser l'accès S3 si l'IP n'est pas dans 203.0.113.0/24. Les conditions peuvent combiner des opérateurs : StringEquals, ArnLike, Bool, IpAddress, DateGreaterThan, etc. Utiliser aws:MultiFactorAuthPresent pour exiger MFA."},
{id:"aws-soa-c03-j10-13",q:"Comment implémenter le MFA enforcing pour les utilisateurs IAM qui veulent accéder aux ressources ?",choices:["A. Activer MFA dans la console IAM globalement — c'est automatique","B. Créer une IAM policy avec Deny sur toutes les actions sauf quelques-unes avec condition 'aws:MultiFactorAuthPresent: false', et attacher cette policy","C. Configurer MFA dans AWS Shield","D. Utiliser AWS WAF pour enforcer le MFA"],answer:1,exp:"MFA Enforcement : créer une Deny policy avec condition Condition: BoolIfExists: aws:MultiFactorAuthPresent: 'false'. Cette policy refuse toutes les actions sauf iam:GetSessionToken, iam:CreateVirtualMFADevice, iam:EnableMFADevice, iam:ListMFADevices (pour permettre à l'utilisateur de configurer son MFA). Attacher à tous les users ou utiliser un groupe IAM."},
{id:"aws-soa-c03-j10-14",q:"Quelle est la différence entre un IAM Role Session et une IAM User Session ?",choices:["A. Les deux ont exactement les mêmes caractéristiques","B. IAM Role Session : credentials temporaires avec expiration (15min-12h), renouvelables. IAM User : credentials permanentes (access keys) ou session avec password jusqu'à déconnexion","C. Les sessions de role sont moins sécurisées","D. Les sessions de role ne supportent pas MFA"],answer:1,exp:"Role Session (STS) : AccessKeyId + SecretAccessKey + SessionToken temporaire, durée configurable (15min-12h). Avantages : expiration automatique, pas de credentials permanents à gérer, auditables via CloudTrail (roleSessionName). User Session : access keys long-term (ne changent que si rotées manuellement) ou console session via password. Best practice : toujours préférer les roles."},
{id:"aws-soa-c03-j10-15",q:"Comment AWS IAM Identity Center (IAM IC) fédère-t-il avec Active Directory ?",choices:["A. IAM IC ne peut pas se connecter à Active Directory","B. Via AWS Managed Microsoft AD ou AD Connector pour sync bidirectionnelle, ou SAML 2.0 pour ADFS ou Azure AD","C. Uniquement via LDAP direct","D. IAM IC remplace Active Directory"],answer:1,exp:"IAM Identity Center et Active Directory : AWS Managed Microsoft AD (créé dans AWS, synchronisation bidirectionnelle avec IAM IC), AD Connector (proxy vers AD on-premises, sans sync), ou SAML 2.0 (ADFS, Azure AD, Okta). Les groupes AD peuvent être mappés à des Permission Sets IAM IC pour un accès basé sur les groupes. SCIM protocol pour le provisioning automatique des utilisateurs."},
{id:"aws-soa-c03-j10-16",q:"Qu'est-ce qu'une Resource-based Policy sur un bucket S3 et comment diffère-t-elle d'un S3 ACL ?",choices:["A. Les deux sont identiques — les ACL sont juste un ancien nom pour les bucket policies","B. Bucket Policy : JSON, granulaire, basée sur IAM pour les comptes AWS et services. S3 ACL : héritage, moins granulaire, pour les individus et prédéfinis AWS","C. Les ACL supportent plus de conditions que les bucket policies","D. Les bucket policies ne peuvent pas refuser l'accès"],answer:1,exp:"Bucket Policy : contrôle complet en JSON (qui peut faire quoi sur quel objet), supporte les conditions IAM, recommandée. S3 ACL : contrôle d'accès legacy par liste (READ, WRITE, FULL_CONTROL) pour des comptes canoniques AWS ou prédéfinis (AllUsers, AuthenticatedUsers). Best practice actuelle : désactiver les ACLs (Bucket Ownership Controls = BucketOwnerEnforced) et utiliser uniquement les bucket policies."},
{id:"aws-soa-c03-j10-17",q:"Comment une SCP avec un Deny explicite affecte-t-elle le compte root d'un compte membre AWS ?",choices:["A. Les SCPs ne s'appliquent pas au compte root des comptes membres — le root est toujours admin","B. Les SCPs s'appliquent à tous les identités dans le compte membre, Y COMPRIS le root du compte membre (mais pas le management account root)","C. Les SCPs bloquent uniquement les utilisateurs IAM, pas le root","D. Le root peut toujours outrepasser les SCPs en appelant AWS Support"],answer:1,exp:"Les SCPs s'appliquent à TOUTES les identités IAM dans le compte membre, y compris le compte root (email+password). C'est une des raisons d'utiliser les SCPs : empêcher même le root du compte membre de dépasser les guardrails définis par l'organisation. Exception : les SCPs ne s'appliquent pas au management account (compte root de l'organisation)."},
{id:"aws-soa-c03-j10-18",q:"Qu'est-ce qu'un IAM Policy Variable et comment l'utiliser ?",choices:["A. Une variable définie dans CloudFormation et utilisée dans IAM","B. Un placeholder dans une policy IAM (ex: ${aws:username}) remplacé dynamiquement lors de l'évaluation","C. Un paramètre passé lors de l'appel AssumeRole","D. Les policy variables ne sont supportées que dans les bucket policies S3"],answer:1,exp:"Policy Variables : permettent des politiques dynamiques. ${aws:username} → nom de l'utilisateur IAM. ${aws:userid} → ID unique. ${aws:PrincipalTag/TagKey} → valeur de tag du principal. Exemple : permettre à chaque utilisateur d'accéder uniquement à son propre 'dossier' S3 avec Resource: arn:aws:s3:::mybucket/home/${aws:username}/*, créant une seule policy réutilisable pour tous les utilisateurs."},
{id:"aws-soa-c03-j10-19",q:"Comment auditer les accès IAM pour vérifier la conformité dans une organisation multi-comptes ?",choices:["A. Se connecter manuellement à chaque compte et vérifier les policies IAM","B. AWS Config avec rules IAM + Security Hub + IAM Access Analyzer au niveau organisation + CloudTrail Organization Trail","C. Uniquement via les rapports de facturation AWS","D. IAM Credential Report exporté de chaque compte manuellement"],answer:1,exp:"Audit IAM multi-comptes : CloudTrail Organization Trail (tous les events dans tous les comptes dans un seul bucket S3), AWS Config Organization (rules IAM déployées dans tous les comptes depuis le management account), IAM Access Analyzer (Unused Access findings aggregés), Security Hub (consolidated findings cross-comptes), IAM Credential Reports (un par compte pour les users/keys/MFA)."},
{id:"aws-soa-c03-j10-20",q:"Qu'est-ce qu'un Service-linked Role et comment diffère-t-il d'un rôle IAM classique ?",choices:["A. Les service-linked roles sont créés par l'utilisateur mais ont un nom spécifique","B. Un service-linked role est créé automatiquement par un service AWS, pré-configuré avec les permissions exactes nécessaires, ne peut être modifié que partiellement, et ne peut être supprimé que si le service ne l'utilise plus","C. Les service-linked roles ont des permissions illimitées","D. Les service-linked roles sont temporaires et expirent après 24h"],answer:1,exp:"Service-linked Roles (SLR) : créés automatiquement lors de l'activation d'un service (ECS, ES, EC2 ASG, etc.), préfixés aws-service-role/, avec des trust policies et permissions définies par AWS. Vous ne pouvez pas modifier leurs permissions (elles appartiennent au service). Vous ne pouvez les supprimer que si le service n'en a plus besoin. Exemple : AWSServiceRoleForAutoScaling pour les ASG."}
];

// ── Jour 11 — Chiffrement, audit et conformité ────────────────────────────────
window.QDATA[11,
  {
    id: "aws-soa-c03-j11-21",
    q: "Qu'est-ce que l'AWS Control Tower et comment aide-t-il à gérer un environnement multi-comptes ?",
    choices: ["A. Control Tower crée et gère un landing zone avec des guardrails (preventive et detective) sur une organisation AWS Organizations","B. Control Tower est uniquement un outil de monitoring","C. Control Tower remplace IAM pour la gestion des permissions","D. Control Tower gère uniquement les coûts multi-comptes"],
    answer: 0,
    exp: "AWS Control Tower : automatise la création d'une 'Landing Zone' (structure d'organisation AWS avec les meilleures pratiques). Configure automatiquement : comptes Management, Log Archive, Audit. Guardrails : preventive (SCP) pour interdire les actions non conformes, detective (Config Rules) pour détecter les non-conformités. Account Factory pour créer de nouveaux comptes conformes. Tableau de bord de conformité centralisé."
  },
  {
    id: "aws-soa-c03-j11-22",
    q: "Quelle est la différence entre 'CloudTrail Organization Trail' et un trail par compte ?",
    choices: ["A. Organization Trail s'applique automatiquement à tous les comptes de l'organisation, stocke les logs dans un bucket S3 centralisé — impossible de désactiver depuis les comptes membres","B. Les deux sont identiques","C. Organization Trail est moins sécurisé","D. Les trails par compte ne peuvent pas être centralisés"],
    answer: 0,
    exp: "Organization Trail (créé depuis le Management Account) : s'applique automatiquement à TOUS les comptes membres. Les logs sont envoyés dans un bucket S3 centralisé dans le Management Account. Les comptes membres ne peuvent pas désactiver ce trail (protection contre les acteurs malveillants). Garantit un audit trail complet de l'organisation."
  },
  {
    id: "aws-soa-c03-j11-23",
    q: "Un SysOps admin doit s'assurer que personne ne peut désactiver GuardDuty dans les comptes membres. Comment ?",
    choices: ["A. SCP avec Deny sur guardduty:DeleteDetector et guardduty:DisassociateFromMasterAccount pour tous les comptes membres","B. IAM Policy dans chaque compte membre","C. GuardDuty ne peut pas être désactivé par définition","D. Utiliser Config pour réactiver GuardDuty automatiquement"],
    answer: 0,
    exp: "Protection GuardDuty : SCP au niveau de l'organisation : Deny sur guardduty:DeleteDetector, guardduty:DisassociateFromMasterAccount, guardduty:StopMonitoringMembers. Ces actions refusées même pour l'admin du compte membre. GuardDuty Organizations (depuis le Security Account) centralise la gestion et empêche la désactivation depuis les comptes membres."
  },
  {
    id: "aws-soa-c03-j11-24",
    q: "Qu'est-ce que l'AWS IAM Identity Center (SSO) et comment simplifie-t-il l'accès multi-comptes ?",
    choices: ["A. Un service de création automatique d'utilisateurs IAM dans chaque compte","B. Un portail SSO centralisé qui permet aux utilisateurs de se connecter une seule fois pour accéder à plusieurs comptes AWS avec des permission sets définis","C. Un service uniquement pour les connexions externes (Google, Okta)","D. IAM Identity Center remplace les rôles IAM dans tous les comptes"],
    answer: 1,
    exp: "IAM Identity Center (AWS SSO) : portail unique pour accéder à plusieurs comptes AWS et applications. Concepts : 1) Users/Groups (dans Identity Center ou sync depuis AD/Okta). 2) Permission Sets (politiques IAM templates). 3) Account assignments (quel groupe → quel compte avec quel Permission Set). L'utilisateur se connecte au portail → voit ses comptes → assume le rôle IAM via federation."
  },
  {
    id: "aws-soa-c03-j11-25",
    q: "Comment implémenter la conformité PCI-DSS sur AWS pour le traitement des paiements ?",
    choices: ["A. AWS s'occupe de toute la conformité PCI-DSS automatiquement","B. Shared Responsibility Model : AWS est PCI-DSS Level 1 certifié pour l'infrastructure. Le client doit configurer ses services conformément aux exigences PCI : chiffrement, contrôle d'accès, logging, segmentation réseau","C. PCI-DSS ne s'applique pas aux environnements cloud","D. Acheter un plan AWS Support Enterprise garantit la conformité PCI"],
    answer: 1,
    exp: "PCI-DSS sur AWS = Shared Responsibility : AWS (infrastructure physique, hyperviseur) est certifié PCI Level 1. Le client est responsable de sa configuration : 1) Réseau : VPC segmenté, Security Groups restrictifs. 2) Chiffrement : KMS pour les données de cartes at rest et in transit. 3) Logging : CloudTrail, VPC Flow Logs activés. 4) Accès : IAM least privilege, MFA. 5) AWS Artifact pour les rapports de conformité AWS."
  },
  {
    id: "aws-soa-c03-j11-26",
    q: "Quelle est la différence entre 'AWS Managed Microsoft AD' et 'AD Connector' ?",
    choices: ["A. AWS Managed Microsoft AD : crée un Active Directory réel dans AWS (avec DC managés). AD Connector : proxy qui redirige les requêtes d'authentification vers un AD on-premise existant","B. Les deux créent un Active Directory complet","C. AD Connector est plus sécurisé que Managed Microsoft AD","D. AWS Managed Microsoft AD ne supporte pas la jointure de domaine EC2"],
    answer: 0,
    exp: "AWS Managed Microsoft AD : déploie des Domain Controllers Windows Server managés dans 2 AZ, réplication complète AD, support Kerberos/LDAP/RADIUS. AD Connector : proxy léger — les requêtes sont redirigées vers l'AD on-premise via Direct Connect/VPN. Pas de cache local. Utile pour l'authentification SSO via IAM Identity Center vers un AD existant sans dupliquer les données d'annuaire."
  },
  {
    id: "aws-soa-c03-j11-27",
    q: "Comment détecter automatiquement une instance EC2 compromise (cryptominer, C2 communication) ?",
    choices: ["A. Vérifier manuellement les instances régulièrement","B. GuardDuty analyse les VPC Flow Logs, DNS logs, et CloudTrail pour détecter : communications avec des IPs de C&C connues, DNS lookups suspects (DGA), activité de cryptomining","C. Inspector détecte les instances compromises","D. CloudWatch alarms sur CPU élevé détectent le cryptomining"],
    answer: 1,
    exp: "GuardDuty détecte les compromissions : 1) CryptoCurrency : UnauthorizedAccess:EC2/BitcoinTool (communication avec pools de mining). 2) C2 : UnauthorizedAccess:EC2/MaliciousIPCaller.Custom. 3) DNS : Trojan:EC2/BlackholeTraffic (DGA). Actions : GuardDuty finding → EventBridge → Lambda (isoler l'instance en modifiant le Security Group, snapshot EBS pour forensics, notifier SNS)."
  },
  {
    id: "aws-soa-c03-j11-28",
    q: "Qu'est-ce que l'AWS Security Token Service (STS) AssumeRole et quel est son cas d'usage ?",
    choices: ["A. STS crée des utilisateurs IAM permanents","B. AssumeRole génère des credentials temporaires (Access Key, Secret Key, Session Token) valides de 15 min à 12h pour qu'une entité assume un rôle IAM — pour le cross-account access et la federation","C. STS est utilisé uniquement pour les instances EC2","D. Les credentials STS n'expirent jamais"],
    answer: 1,
    exp: "STS AssumeRole : permet à une entité (user IAM, instance EC2, Lambda, utilisateur fédéré) d'assumer temporairement un rôle IAM. Use cases : 1) Cross-account : compte A → assume rôle dans compte B. 2) Federation : utilisateur AD → assume rôle IAM via SAML/OIDC. 3) Instance EC2 → assume rôle pour services AWS. Les credentials temporaires expirent automatiquement (15 min à 12h)."
  },
  {
    id: "aws-soa-c03-j11-29",
    q: "Un ops admin configure une politique IAM complexe. Comment tester si la politique accorde les bonnes permissions ?",
    choices: ["A. Appliquer la politique en production et vérifier","B. IAM Policy Simulator : simule l'effet d'une politique pour des actions spécifiques sans l'appliquer. IAM Access Analyzer policy validation : vérifie la syntaxe et les bonnes pratiques","C. Contacter AWS Support pour validation","D. Essayer les commandes CLI directement"],
    answer: 1,
    exp: "Outils de validation IAM : 1) IAM Policy Simulator (console/API) : teste si une combinaison identity policy + resource policy accorde ou refuse une action spécifique sur une ressource. Utile pour déboguer les denied. 2) IAM Access Analyzer policy validation : vérifie la syntaxe, détecte les wildcards, les conditions incorrectes, et les bonnes pratiques. 3) CLI : aws iam simulate-principal-policy."
  },
  {
    id: "aws-soa-c03-j11-30",
    q: "Qu'est-ce que le 'VPC Endpoint Policy' et comment l'utiliser pour la sécurité ?",
    choices: ["A. Une politique qui contrôle la bande passante du VPC Endpoint","B. Une resource policy attachée à un VPC Endpoint qui contrôle quelles identités IAM et quelles ressources S3/DynamoDB/etc sont accessibles via cet endpoint","C. Une règle de firewall pour les VPC Endpoints","D. VPC Endpoints n'ont pas de politiques associées"],
    answer: 1,
    exp: "VPC Endpoint Policy : resource policy attachée à l'endpoint (Gateway ou Interface) qui contrôle l'accès. Exemple Gateway Endpoint S3 : permettre uniquement l'accès à des buckets spécifiques depuis le VPC. Exemple Interface Endpoint : restreindre à des rôles IAM spécifiques. Combiné avec une S3 Bucket Policy (aws:SourceVpc condition), peut forcer que S3 ne soit accessible QUE via le VPC Endpoint."
  },
  {
    id: "aws-soa-c03-j11-31",
    q: "Comment AWS Organizations aide-t-il à gérer la sécurité à l'échelle enterprise ?",
    choices: ["A. Organizations gère uniquement la facturation consolidée","B. Organizations centralise : SCPs (guardrails), CloudTrail Organization Trail, GuardDuty Organizations (central findings), Security Hub Organizations (compliance centralisée), et AWS Config Aggregator","C. Organizations crée automatiquement des politiques IAM dans chaque compte","D. Organizations remplace IAM pour la gestion des utilisateurs"],
    answer: 1,
    exp: "AWS Organizations pour la sécurité enterprise : 1) SCP (Service Control Policies) : guardrails sur tous les comptes. 2) Organization Trail : CloudTrail centralisé. 3) GuardDuty Organizations : déléguer admin, findings centralisés. 4) Security Hub Organizations : score de conformité centralisé. 5) Config Aggregator : vue de conformité multi-comptes. 6) Firewall Manager : règles WAF/SG centralisées. 7) Account Factory (Control Tower)."
  },
  {
    id: "aws-soa-c03-j11-32",
    q: "Quelle est la différence entre 'Resource-based Policy' et 'Identity-based Policy' en IAM ?",
    choices: ["A. Resource-based : attachée à une ressource (S3 bucket, Lambda, KMS key) — définit qui peut accéder à la ressource. Identity-based : attachée à un utilisateur/rôle IAM — définit ce qu'il peut faire","B. Les deux sont identiques","C. Resource-based est uniquement pour les buckets S3","D. Identity-based est plus restrictive que Resource-based"],
    answer: 0,
    exp: "Identity-based policies : attachées à des users/roles/groups IAM — définissent ce que l'identité PEUT faire ('je peux mettre dans ce bucket'). Resource-based policies : attachées à la ressource elle-même (bucket policy, role trust policy, Lambda resource policy, KMS key policy, SNS/SQS policy) — définissent QUI peut accéder à cette ressource ('ce bucket accepte ces identités'). Pour le cross-account : les deux doivent autoriser."
  },
  {
    id: "aws-soa-c03-j11-33",
    q: "Comment sécuriser les accès à l'instance metadata service (IMDS) sur EC2 pour prévenir les attaques SSRF ?",
    choices: ["A. Désactiver complètement IMDS sur toutes les instances","B. Activer IMDSv2 (obligatoire via launch template ou enforce) : nécessite un token PUT request avant de lire les métadonnées — les requêtes SSRF simples ne peuvent pas obtenir le token","C. Modifier les Security Groups pour bloquer l'accès à 169.254.169.254","D. Utiliser des Access Keys IAM au lieu des rôles d'instance"],
    answer: 1,
    exp: "IMDSv2 (Instance Metadata Service v2) : protection contre SSRF. Flux : 1) Requête PUT à http://169.254.169.254/latest/api/token (avec TTL header) → retourne un token. 2) Requête GET avec le token dans le header pour accéder aux métadonnées. Les attaques SSRF qui font une simple requête GET ne peuvent pas obtenir le token (PUT n'est pas forwardé). Forcer IMDSv2 via Launch Template (HttpTokens=required) ou SCP."
  },
  {
    id: "aws-soa-c03-j11-34",
    q: "Qu'est-ce que l'AWS Nitro Enclave et quel problème de sécurité résout-il ?",
    choices: ["A. Un service de chiffrement des données au repos","B. Un environnement d'exécution isolé dans l'hyperviseur Nitro — traite des données ultra-sensibles sans accès depuis l'instance parent (même root ne peut pas accéder), idéal pour la cryptographie, le traitement de données PII","C. Un monitoring de sécurité pour les instances EC2","D. Nitro Enclave remplace KMS pour le chiffrement"],
    answer: 1,
    exp: "Nitro Enclave : partition isolée de la mémoire et du CPU de l'instance EC2, protégée par l'hyperviseur Nitro. Pas de stockage persistant, pas de réseau externe, pas d'accès SSH. Communique avec l'instance via un canal virtuel local. Utilisations : traitement de clés cryptographiques, déchiffrement de données PII, ML inference sur données sensibles. Combiné avec KMS pour le déchiffrement."
  },
  {
    id: "aws-soa-c03-j11-35",
    q: "Comment implémenter une 'just-in-time' (JIT) access pour les accès privilégiés sur AWS ?",
    choices: ["A. Créer des users IAM permanents avec accès admin","B. STS AssumeRole avec durée limitée + IAM Identity Center avec access requests + AWS Verified Access pour des accès temporaires approuvés","C. Utiliser AWS Secrets Manager pour stocker les credentials admin","D. Désactiver les accès après 24h automatiquement"],
    answer: 1,
    exp: "JIT Access sur AWS : 1) IAM Identity Center avec 'Permission Sets' de durée limitée — les utilisateurs demandent l'accès, approbation par un manager. 2) STS AssumeRole avec durée minimale (15 min) pour les opérations ponctuelles. 3) AWS SSO temporal access via API. 4) AWS Verified Access (pour les applications internes) — accès contextuel basé sur l'identité et l'état de l'appareil."
  },
  {
    id: "aws-soa-c03-j11-36",
    q: "Qu'est-ce que le 'S3 Block Public Access' au niveau compte et comment est-il différent des bucket policies ?",
    choices: ["A. Les deux sont identiques","B. Block Public Access (compte) : override qui désactive TOUTE configuration d'accès public sur tous les buckets du compte, quelle que soit la bucket policy. Les bucket policies ne peuvent pas contourner ce paramètre","C. Block Public Access uniquement désactive les ACLs S3","D. Block Public Access est uniquement pour les nouveaux buckets"],
    answer: 1,
    exp: "S3 Block Public Access (niveau compte) : 4 options qui OVERRIDENT les configurations de bucket individuelles : 1) BlockPublicAcls. 2) IgnorePublicAcls. 3) BlockPublicPolicy (refuse les bucket policies qui accordent accès public). 4) RestrictPublicBuckets. Activé par défaut sur les nouveaux comptes depuis 2023. Garantit qu'aucun bucket ne sera accidentellement rendu public même si un développeur modifie la bucket policy."
  },
  {
    id: "aws-soa-c03-j11-37",
    q: "Comment auditer et détecter les changements de configuration non autorisés sur les ressources AWS ?",
    choices: ["A. Vérifier manuellement les ressources","B. AWS Config enregistre l'historique de configuration des ressources. CloudTrail enregistre qui a fait le changement. EventBridge déclenche des alertes en temps réel sur les changements","C. CloudWatch alarms détectent les changements de configuration","D. Inspector audite les configurations des ressources"],
    answer: 1,
    exp: "Audit des changements de configuration : 1) AWS Config : enregistre chaque changement de configuration (snapshot before/after), Timeline des modifications, compare à la baseline. 2) CloudTrail : qui (IAM identity), quand, depuis où (IP) a fait le changement. 3) EventBridge : alerte en temps réel sur les changements spécifiques (ex: changement de Security Group). Combinaison pour le forensique complet."
  },
  {
    id: "aws-soa-c03-j11-38",
    q: "Qu'est-ce que l'AWS Verified Access et comment améliore-t-il l'accès aux applications internes ?",
    choices: ["A. Un VPN pour accéder aux applications internes","B. Un service Zero Trust Network Access (ZTNA) qui vérifie l'identité et la posture de l'appareil avant d'accorder l'accès à des applications — sans VPN, sans exposer les applications sur internet","C. Un remplaçant pour ALB dans les VPC privés","D. Verified Access ne fonctionne qu'avec AWS IAM Identity Center"],
    answer: 1,
    exp: "AWS Verified Access : Zero Trust Access pour les applications internes. Évalue chaque requête selon : identité (IAM Identity Center, Okta) + état de l'appareil (CrowdStrike, Jamf, Tenable). Sans VPN. L'application reste dans le VPC privé. Fournit une URL publique sécurisée. Policy en Cedar Language. Logs vers S3/CloudWatch. Idéal pour le remote work sécurisé."
  },
  {
    id: "aws-soa-c03-j11-39",
    q: "Comment gérer les clés KMS pour le chiffrement cross-compte (un compte crypte, un autre déchiffre) ?",
    choices: ["A. Copier la clé KMS dans chaque compte","B. KMS CMK dans le compte source avec une Key Policy qui autorise le compte destinataire à utiliser la clé (kms:Decrypt). Le compte destinataire a une IAM policy qui l'autorise","C. Utiliser des AWS Managed Keys pour le cross-account","D. Exporter la clé KMS comme fichier et l'importer dans l'autre compte"],
    answer: 1,
    exp: "KMS cross-account : 1) Key Policy dans le compte A : permettre au compte B (ou rôle spécifique) d'utiliser la clé (kms:Decrypt, kms:GenerateDataKey). 2) IAM Policy dans le compte B : autoriser le rôle à utiliser la clé ARN du compte A. Les deux doivent autoriser (intersection). La clé reste dans le compte A — le compte B ne peut pas la gérer, seulement l'utiliser pour les opérations autorisées."
  },
  {
    id: "aws-soa-c03-j11-40",
    q: "Quelle est la stratégie pour protéger les buckets S3 contre les ransomwares ?",
    choices: ["A. Chiffrer les buckets S3","B. Activer S3 Versioning + MFA Delete + S3 Object Lock (Governance ou Compliance) + S3 Replication vers un autre compte avec accès restreint","C. Restreindre l'accès à S3 avec des Security Groups","D. Sauvegarder S3 dans un autre service"],
    answer: 1,
    exp: "Protection S3 contre ransomware : 1) Versioning : preserve les versions précédentes des objets. 2) MFA Delete : suppression/désactivation du versioning nécessite MFA. 3) Object Lock (Compliance) : WORM — même si un attaquant compromet un compte admin, ne peut pas supprimer. 4) Réplication cross-compte vers un compte avec SCP restrictive. 5) Pas de permissions s3:DeleteObject pour les applications normales."
  },
  {
    id: "aws-soa-c03-j11-41",
    q: "Comment AWS CloudHSM diffère-t-il de KMS pour la gestion des clés cryptographiques ?",
    choices: ["A. Les deux sont identiques","B. CloudHSM : HSM dédié sous votre contrôle exclusif (single-tenant, FIPS 140-2 Level 3). KMS : service multi-tenant managé (AWS peut accéder en théorie). CloudHSM nécessite plus de gestion mais offre une conformité stricte","C. KMS est plus sécurisé que CloudHSM","D. CloudHSM ne supporte pas les opérations cryptographiques standard"],
    answer: 1,
    exp: "KMS vs CloudHSM : KMS = service managé multi-tenant, AWS contrôle l'HSM sous-jacent (niveau 2), simple à utiliser, intégration native avec les services AWS. CloudHSM = HSM physique dédié dans votre VPC (single-tenant, FIPS 140-2 Level 3), vous avez le contrôle exclusif des clés (AWS ne peut pas récupérer les clés), nécessite une gestion active. Utilisé pour : conformité stricte, opérations cryptographiques custom."
  },
  {
    id: "aws-soa-c03-j11-42",
    q: "Qu'est-ce que le 'AWS IAM Condition Key' aws:SourceVpce et dans quel contexte est-il utilisé ?",
    choices: ["A. Restreint l'accès IAM aux instances dans un VPC spécifique","B. Dans une S3 Bucket Policy : force que les requêtes viennent uniquement via un VPC Endpoint spécifique — les requêtes directes via internet sont refusées","C. aws:SourceVpce est un tag pour les VPC Endpoints","D. Cette condition n'existe pas dans IAM"],
    answer: 1,
    exp: "aws:SourceVpce dans une bucket policy S3 : Condition { StringEquals: { aws:SourceVpce: vpce-xxx } } — force que toutes les requêtes S3 passent par le VPC Endpoint spécifié. Combiné avec aws:SourceVpc pour plus de flexibilité. Utilisation : forcer que les accès S3 de production ne passent JAMAIS par internet, uniquement par le VPC Endpoint. Renforcé par S3 Block Public Access."
  },
  {
    id: "aws-soa-c03-j11-43",
    q: "Un SysOps admin détecte que des credentials IAM ont été exposés dans un dépôt Git public. Quelles sont les premières actions ?",
    choices: ["A. Changer le mot de passe du compte AWS","B. Immédiatement désactiver/supprimer les credentials IAM exposés + Consulter CloudTrail pour toutes les actions effectuées + Vérifier les ressources créées/modifiées + Contacter AWS Support si activité suspecte","C. Attendre que les credentials expirent","D. Changer la région AWS principale"],
    answer: 1,
    exp: "Réponse à incident credentials exposés : 1) IMMÉDIATEMENT désactiver (puis supprimer) les access keys exposées dans la console IAM. 2) CloudTrail : filtrer par les access keys exposées pour voir TOUTES les actions effectuées. 3) Identifier et supprimer/révoquer les ressources créées par l'attaquant (instances EC2, users IAM, rôles). 4) Vérifier les autres comptes (si cross-account). 5) AWS Support si activité non reconnue."
  },
  {
    id: "aws-soa-c03-j11-44",
    q: "Comment AWS Cognito sécurise-t-il les applications mobiles et web pour l'authentification utilisateur ?",
    choices: ["A. Cognito crée des users IAM pour chaque utilisateur de l'application","B. Cognito User Pools : directory d'utilisateurs avec auth (MFA, federation sociale). Cognito Identity Pools : échange un token Cognito/social contre des credentials AWS temporaires pour accéder aux services AWS","C. Cognito est uniquement pour les applications internes","D. Cognito remplace IAM Identity Center"],
    answer: 1,
    exp: "Cognito : 1) User Pool : annuaire d'utilisateurs (inscription, connexion, MFA, fédération avec Google/Facebook/SAML). Génère JWT tokens. 2) Identity Pool (Federated Identities) : échange tokens (Cognito, Google, SAML) contre des credentials AWS STS temporaires. Les utilisateurs peuvent accéder directement à S3, DynamoDB, etc. avec des credentials temporaires limitées. Architecture classique : app mobile → Cognito User Pool (JWT) → Cognito Identity Pool → STS credentials → S3."
  },
  {
    id: "aws-soa-c03-j11-45",
    q: "Qu'est-ce que l'AWS Security Hub 'Finding Aggregation' et pourquoi est-il important ?",
    choices: ["A. Finding Aggregation regroupe les findings par service uniquement","B. Permet de consolider les findings Security Hub de plusieurs régions vers une région d'agrégation centrale — vision unifiée de toute la posture de sécurité multi-régions","C. Finding Aggregation est uniquement disponible pour le compte Management","D. Chaque région doit être monitorée séparément"],
    answer: 1,
    exp: "Security Hub Finding Aggregation (cross-region) : désigne une région comme région d'agrégation centrale. Tous les findings des autres régions sont répliqués vers cette région centrale. Avantages : tableau de bord unique pour toute l'empreinte multi-régions, alertes centralisées, corrélation de findings cross-région. Combiné avec Organizations pour le multi-comptes."
  },
  {
    id: "aws-soa-c03-j11-46",
    q: "Comment implémenter la segmentation réseau pour respecter le principe de moindre privilège au niveau réseau ?",
    choices: ["A. Un seul grand subnet pour toutes les ressources","B. Subnets séparés par tier (public, private app, private data) + Security Groups restrictifs (uniquement les ports nécessaires entre tiers) + NACLs comme couche défensive supplémentaire","C. Utiliser uniquement des Security Groups sans NACLs","D. Mettre toutes les ressources en public subnet avec des Security Groups"],
    answer: 1,
    exp: "Segmentation réseau best practices : 1) Subnets par tier : public (ALB), private app (EC2, ECS), private data (RDS, ElastiCache). 2) Security Groups : ALB accepte 443 depuis internet. EC2 accepte uniquement depuis le SG de l'ALB. RDS accepte uniquement depuis le SG EC2. 3) NACLs : blocage stateless additionnel par subnet. 4) VPC Flow Logs : audit du trafic."
  },
  {
    id: "aws-soa-c03-j11-47",
    q: "Qu'est-ce que AWS IAM Roles Anywhere et quelle est la différence avec les federation SAML ?",
    choices: ["A. Les deux sont identiques","B. SAML federation : pour les utilisateurs humains qui s'authentifient via un IdP (Okta, AD). Roles Anywhere : pour les workloads machine (serveurs, conteneurs) qui s'authentifient via certificats X.509","C. Roles Anywhere est uniquement pour AWS Outposts","D. SAML federation supporte les workloads machine directement"],
    answer: 1,
    exp: "IAM Roles Anywhere vs SAML : SAML 2.0 federation est conçu pour les utilisateurs humains (SSO depuis AD, Okta) → assumeRoleWithSAML. Roles Anywhere est conçu pour les workloads non-AWS (serveurs on-premise, pipelines CI/CD external) qui ont des certificats X.509 émis par une CA de confiance → credentials IAM temporaires sans accès internet. Les deux génèrent des credentials STS temporaires mais pour des sujets différents."
  },
  {
    id: "aws-soa-c03-j11-48",
    q: "Comment configurer AWS Config pour surveiller la conformité dans plusieurs régions simultanément ?",
    choices: ["A. Créer un aggregator Config dans chaque région","B. Config Aggregator (dans le compte/région central) collecte les données de conformité de plusieurs comptes ET régions. Un seul tableau de bord pour toute la conformité","C. Config ne supporte que la surveillance mono-région","D. Utiliser un script Lambda pour agréger les données Config de chaque région"],
    answer: 1,
    exp: "AWS Config Aggregator : configuré dans un compte et une région centraux, aggrège les données de conformité de : 1) Plusieurs comptes individuels. 2) Toute une organisation AWS. 3) Plusieurs régions par compte. Source : comptes + régions. Affiche l'inventaire des ressources et la conformité Config Rules de tous les comptes/régions. Pas de modification des configurations source."
  },
  {
    id: "aws-soa-c03-j11-49",
    q: "Quelle est la stratégie pour gérer les secrets partagés entre plusieurs comptes AWS (ex: une clé d'API tierce) ?",
    choices: ["A. Copier le secret dans Secrets Manager de chaque compte","B. Un seul secret dans Secrets Manager du compte central avec une Resource Policy permettant aux rôles des autres comptes d'y accéder (secretsmanager:GetSecretValue cross-account)","C. Partager le secret via S3 chiffré avec KMS","D. Utiliser Parameter Store public pour les secrets partagés"],
    answer: 1,
    exp: "Secrets Manager cross-account : 1) Secret dans le compte central (ex: Security Account). 2) Resource Policy du secret : Allow secretsmanager:GetSecretValue pour les rôles des comptes clients. 3) IAM Policy dans les comptes clients : Allow sur l'ARN du secret cross-account. 4) KMS CMK cross-account pour le chiffrement. Source unique de vérité — un seul endroit pour la rotation."
  },
  {
    id: "aws-soa-c03-j11-50",
    q: "Qu'est-ce que l'AWS GuardDuty Malware Protection et comment étend-il les capacités de GuardDuty ?",
    choices: ["A. GuardDuty Malware Protection est identique à Inspector","B. Scan les volumes EBS attachés aux instances EC2 et les images ECS/EKS à la recherche de malware et fichiers suspects — déclenché par un finding GuardDuty ou manuellement","C. Malware Protection analyse uniquement les buckets S3","D. GuardDuty Malware Protection nécessite l'installation d'un agent sur EC2"],
    answer: 1,
    exp: "GuardDuty Malware Protection : scan on-demand ou déclenché par un finding (instance compromise) des volumes EBS. Crée un snapshot du volume, le monte dans un environnement isolé, scanne avec le moteur de détection GuardDuty. Produit un finding si malware détecté. Ne nécessite pas d'agent. ECS/EKS : scanne les images lors du pull. S3 Protection (séparé) : scanne les objets uploadés sur S3."
  }
]=[
{id:"aws-soa-c03-j11-1",q:"Quelle est la différence entre AWS KMS CMK (Customer Managed Key) et AWS Managed Key ?",choices:["A. Les AWS Managed Keys sont moins sécurisées","B. CMK : vous créez et gérez la politique de clé, rotation optionnelle, contrôle total. AWS Managed Key : créée/gérée par AWS pour un service spécifique (aws/s3, aws/rds), rotation automatique annuelle, moins de contrôle","C. Les CMK ne supportent pas la rotation","D. Les AWS Managed Keys sont plus chères"],answer:1,exp:"CMK (Customer Managed) : vous contrôlez la key policy, vous pouvez activer/désactiver, rotation manuelle ou automatique annuelle, audit des utilisations dans CloudTrail, partage cross-account possible. AWS Managed Keys : créées par AWS pour des services spécifiques (aws/s3 pour S3-SSE, aws/rds pour RDS), rotation automatique annuelle, non partageables, visibles mais non administrables. Customer Managed plus flexible pour la conformité."},
{id:"aws-soa-c03-j11-2",q:"Comment AWS KMS gère-t-il le chiffrement côté serveur pour S3 (SSE-S3, SSE-KMS, SSE-C) ?",choices:["A. Les trois méthodes stockent la clé dans le même endroit","B. SSE-S3 : AWS gère les clés (AES-256). SSE-KMS : clé KMS (CMK ou AWS managed), audit CloudTrail, contrôle IAM. SSE-C : vous fournissez la clé dans chaque requête, AWS ne la stocke pas","C. SSE-C est la seule option avec chiffrement au repos","D. SSE-KMS ne nécessite pas de permissions IAM supplémentaires"],answer:1,exp:"SSE-S3 (AES-256) : AWS gère tout, transparent, gratuit, pas d'audit des accès aux clés. SSE-KMS : clé KMS, audit dans CloudTrail (qui a chiffré/déchiffré quoi), permissions IAM sur la clé requises pour déchiffrement, coût KMS. SSE-C : vous fournissez et gérez la clé dans chaque requête HTTPS, AWS chiffre/déchiffre sans stocker la clé. Choisir SSE-KMS pour la conformité et l'audit."},
{id:"aws-soa-c03-j11-3",q:"Qu'est-ce qu'AWS CloudTrail et quelles sont les bonnes pratiques pour le configurer ?",choices:["A. CloudTrail enregistre uniquement les connexions SSH aux instances EC2","B. CloudTrail enregistre les appels API AWS. Bonnes pratiques : trail multi-régions, activé dans tous les comptes, bucket S3 dédié avec accès restreint, chiffrement SSE-KMS, validation des logs, intégration CloudWatch Logs","C. CloudTrail ne peut pas être configuré pour plusieurs régions","D. CloudTrail est automatiquement activé sans configuration nécessaire"],answer:1,exp:"CloudTrail best practices : Organization Trail (1 trail pour tous les comptes de l'org), multi-région, Management Events + Data Events pour les ressources sensibles (S3, Lambda), chiffrement SSE-KMS, Log File Validation (hachage pour détecter les modifications), stockage dans un bucket S3 verrouillé (MFA Delete + Object Lock), intégration CloudWatch Logs pour les alertes en temps réel sur les événements suspects."},
{id:"aws-soa-c03-j11-4",q:"Comment AWS Config aide-t-il à maintenir la conformité ?",choices:["A. AWS Config est uniquement un service de monitoring des performances","B. AWS Config enregistre en continu les changements de configuration des ressources, évalue leur conformité via des Config Rules, et peut automatiquement remédier via Systems Manager Automation","C. AWS Config remplace CloudTrail pour l'audit","D. AWS Config ne fonctionne que pour les ressources EC2"],answer:1,exp:"AWS Config : registre de configuration des ressources (snapshots et historique), Config Rules (managed ou custom Lambda) pour évaluer la conformité, Conformance Packs pour déployer des sets de règles (ex: HIPAA, PCI-DSS), Remediation Actions via SSM Automation, Aggregator pour la vue multi-comptes. Différent de CloudTrail : Config = état des ressources, CloudTrail = appels API."},
{id:"aws-soa-c03-j11-5",q:"Qu'est-ce qu'AWS Secrets Manager et comment diffère-t-il de SSM Parameter Store ?",choices:["A. Secrets Manager stocke des secrets plus gros que Parameter Store","B. Secrets Manager : rotation automatique native des secrets (RDS, Redshift, DocumentDB, custom Lambda), réplication multi-région, coût. Parameter Store : config simple, moins cher (Standard gratuit), pas de rotation native","C. Parameter Store ne chiffre pas les secrets","D. Secrets Manager ne peut pas stocker des clés API externes"],answer:1,exp:"Secrets Manager : rotation automatique intégrée (Lambda function built-in pour RDS/Redshift/DocumentDB/Redshift, custom Lambda pour les autres), réplication multi-région, $0.40/secret/mois + $0.05 per 10K API calls. Parameter Store : hiérarchique, Standard gratuit, Advanced payant, pas de rotation automatique native. Utiliser Secrets Manager pour les credentials de DB nécessitant rotation auto, Parameter Store pour la configuration."},
{id:"aws-soa-c03-j11-6",q:"Qu'est-ce qu'AWS Artifact et quel rôle joue-t-il dans la conformité ?",choices:["A. AWS Artifact crée automatiquement des rapports de conformité personnalisés","B. AWS Artifact est un portail self-service pour accéder aux rapports de conformité AWS (SOC, ISO, PCI) et signer des accords (BAA pour HIPAA)","C. AWS Artifact remplace AWS Config pour la conformité","D. AWS Artifact est un service de déploiement"],answer:1,exp:"AWS Artifact : portail de conformité avec deux sections. Artifact Reports : rapports d'audit tiers (SOC 1/2/3, ISO 27001/9001, PCI DSS, HIPAA, FedRAMP). Artifact Agreements : Business Associate Addendum (BAA pour HIPAA), GDPR DPA. Ces documents permettent aux clients de démontrer que leur infrastructure AWS est conforme. Accès depuis la console AWS sans coût supplémentaire."},
{id:"aws-soa-c03-j11-7",q:"Comment implémenter le chiffrement en transit pour les données entre services AWS ?",choices:["A. Le chiffrement en transit est automatique et ne peut pas être configuré","B. Utiliser TLS/HTTPS pour les API endpoints, activer SSL pour RDS (avec certificat AWS RDS CA), configurer les certificats via ACM pour les load balancers, forcer HTTPS avec des bucket policies S3","C. VPN IPsec est la seule option pour le chiffrement en transit","D. Le chiffrement en transit n'est possible qu'avec des EC2 dans un VPC"],answer:1,exp:"Chiffrement en transit : HTTPS par défaut pour les APIs AWS. Pour RDS : paramètre 'require_secure_transport=1' (MySQL) ou 'ssl=true', télécharger le certificat RDS CA. Pour S3 : bucket policy avec Condition: aws:SecureTransport: 'false' → Deny. Pour ELB/ALB : configurer HTTPS listener avec certificat ACM. Pour les communications inter-services : IAM + TLS est suffisant pour les APIs AWS managées."},
{id:"aws-soa-c03-j11-8",q:"Qu'est-ce que AWS Certificate Manager (ACM) et quelles sont ses limitations ?",choices:["A. ACM peut émettre des certificats pour n'importe quel domaine sans vérification","B. ACM émet et gère des certificats SSL/TLS gratuits pour les services AWS intégrés (ELB, CloudFront, API Gateway). Limitation : ne peut pas exporter les clés privées pour les certificats ACM-émis","C. ACM remplace Let's Encrypt pour tous les certificats","D. Les certificats ACM sont valables seulement 30 jours"],answer:1,exp:"ACM : certificats gratuits, renouvellement automatique, intégration native ELB/ALB/NLB, CloudFront, API Gateway, Elastic Beanstalk. Limitations : impossibilité d'exporter la clé privée des certificats émis par ACM (pour les utiliser sur des serveurs non-AWS, importer un certificat existant). Validation de domaine via DNS (CNAME dans Route 53) ou email. ACM Private CA pour les PKI internes."},
{id:"aws-soa-c03-j11-9",q:"Comment AWS Security Hub centralise-t-il les alertes de sécurité ?",choices:["A. Security Hub crée lui-même des règles de sécurité dans chaque service","B. Agrège et normalise les findings de sécurité depuis GuardDuty, Inspector, Macie, IAM Access Analyzer, Config, et les applique aux standards (CIS, PCI-DSS, AWS Foundational Security)","C. Security Hub remplace CloudTrail pour l'audit","D. Security Hub fonctionne uniquement avec des outils tiers"],answer:1,exp:"Security Hub : tableau de bord centralisé de sécurité. Sources : GuardDuty (menaces), Inspector (vulnérabilités EC2/ECR), Macie (données sensibles S3), IAM Access Analyzer, Config (conformité). Standards : AWS Foundational Security Best Practices, CIS AWS Foundations v1.4, PCI DSS v3.2.1. Score de sécurité agrégé. Findings normalisés en ASFF (Amazon Security Finding Format). Organisation-wide via Organizations."},
{id:"aws-soa-c03-j11-10",q:"Qu'est-ce qu'AWS GuardDuty et comment diffère-t-il d'AWS Inspector ?",choices:["A. Les deux font la même chose avec des noms différents","B. GuardDuty : threat detection en analysant VPC Flow Logs, CloudTrail, DNS logs pour détecter des comportements malveillants (compromission, escalade de privilèges). Inspector : scanning de vulnérabilités (CVE) sur EC2 et images ECR","C. GuardDuty protège le réseau, Inspector protège les applications","D. Inspector est plus récent et remplace GuardDuty"],answer:1,exp:"GuardDuty : analyse continue des flux de données (VPC Flow Logs, CloudTrail, DNS, EKS audit logs, S3 data events) avec ML pour détecter les menaces (brute force, cryptomining, communication avec IPs malveillantes, exfiltration de données). Inspector : scanning de vulnérabilités (CVE) sur instances EC2 (agent Inspector) et images ECR. Complémentaires : GuardDuty = comportement suspect, Inspector = failles connues."},
{id:"aws-soa-c03-j11-11",q:"Qu'est-ce qu'AWS Macie et pour quels cas d'usage est-il recommandé ?",choices:["A. Macie est un service de monitoring des performances d'applications","B. Macie utilise le ML pour découvrir et protéger les données sensibles dans S3 (PII, credentials, données financières), idéal pour la conformité GDPR/HIPAA","C. Macie analyse les logs CloudTrail pour les événements de sécurité","D. Macie protège uniquement les bases de données RDS"],answer:1,exp:"Amazon Macie : service ML de découverte de données sensibles dans S3. Identifie automatiquement : PII (noms, emails, numéros de SS, passeports), données financières (CC numbers, IBAN), clés AWS, certificats. Génère des findings avec le type de données et la location. Utile pour : audit de conformité GDPR/HIPAA, inventaire de données sensibles, alertes sur exposition accidentelle de données."},
{id:"aws-soa-c03-j11-12",q:"Comment AWS KMS Key Policies contrôlent-elles l'accès aux clés KMS ?",choices:["A. Les Key Policies sont optionnelles si des IAM policies existent","B. Les Key Policies sont obligatoires et définissent qui peut gérer la clé (kms:*) et qui peut l'utiliser pour le chiffrement. Contrairement à IAM, sans accès dans la Key Policy, même Admin IAM ne peut pas utiliser la clé","C. Les Key Policies se cumulent simplement avec les IAM policies","D. Les Key Policies ne peuvent pas refuser l'accès"],answer:1,exp:"KMS Key Policy : obligatoire sur chaque CMK. Différence clé avec IAM : par défaut, les IAM policies ne suffisent pas pour accéder à une CMK — la Key Policy doit explicitement autoriser le principal ou le compte AWS (entrée 'Enable IAM User Permissions'). Sans cette entrée de compte, même l'IAM Admin ne peut pas utiliser la clé. Permet le partage cross-account et le contrôle granulaire des utilisateurs de la clé."},
{id:"aws-soa-c03-j11-13",q:"Qu'est-ce que la conformité PCI-DSS et comment AWS facilite-t-elle son respect ?",choices:["A. AWS certifie automatiquement les applications des clients comme conformes PCI-DSS","B. AWS fournit des services conformes PCI-DSS (infrastructure), les clients sont responsables de leur configuration sécurisée. Outils : Security Hub (PCI standard), Config rules, ACM, WAF, GuardDuty","C. PCI-DSS ne s'applique pas aux services cloud","D. AWS gère entièrement la conformité PCI-DSS sans intervention client"],answer:1,exp:"Modèle de responsabilité partagée pour PCI-DSS : AWS est responsable de la conformité de l'infrastructure physique et des services managés (certifications PCI DSS Level 1 Service Provider disponibles dans AWS Artifact). Le client est responsable de la configuration et des applications. Outils AWS utiles : Security Hub (PCI DSS standard), WAF (protection OWASP), CloudTrail (audit trails), ACM (TLS), VPC (isolation réseau)."},
{id:"aws-soa-c03-j11-14",q:"Comment AWS CloudHSM diffère-t-il d'AWS KMS ?",choices:["A. CloudHSM est moins sécurisé mais moins cher","B. CloudHSM : HSM dédié dans votre VPC, vous gérez entièrement les clés, FIPS 140-2 Level 3, plus cher. KMS : service managé AWS multi-tenant (ou single-tenant pour KMS Custom Key Store), plus simple","C. KMS et CloudHSM offrent les mêmes garanties de sécurité","D. CloudHSM ne peut pas être utilisé avec les services AWS"],answer:1,exp:"CloudHSM : hardware dédié dans votre VPC, FIPS 140-2 Level 3, vous avez le contrôle exclusif des clés (AWS ne peut pas y accéder), idéal pour les régulations imposant une HSM dédiée. KMS : service managé, FIPS 140-2 Level 2 (ou Level 3 pour certaines régions), multi-tenant (sauf KMS Custom Key Store qui utilise CloudHSM). CloudHSM est utilisé comme Custom Key Store pour KMS, combinant la conformité HSM avec la facilité d'intégration KMS."},
{id:"aws-soa-c03-j11-15",q:"Quelle est la différence entre chiffrement côté client et côté serveur dans AWS ?",choices:["A. Le chiffrement côté client est moins sécurisé","B. Côté serveur (SSE) : chiffrement effectué par AWS après réception des données. Côté client : chiffrement effectué avant envoi à AWS (AWS SDK Encryption Client), vous gérez les clés","C. Le chiffrement côté client est uniquement disponible pour S3","D. Le chiffrement côté serveur nécessite des instances EC2 dédiées"],answer:1,exp:"Server-Side Encryption (SSE) : données chiffrées au repos par AWS après réception. Options : SSE-S3, SSE-KMS, SSE-C. Client-Side Encryption : vous chiffrez les données avant de les envoyer à AWS (AWS Encryption SDK ou S3 Client-Side Encryption). Les clés ne quittent jamais votre contrôle. Avantage : même AWS ne peut pas lire vos données. Utile pour les exigences de conformité strictes."},
{id:"aws-soa-c03-j11-16",q:"Comment auditer l'utilisation des clés KMS ?",choices:["A. KMS ne génère pas de logs d'audit","B. Toutes les opérations KMS (Encrypt, Decrypt, GenerateDataKey, etc.) sont enregistrées dans CloudTrail avec le nom de la clé, l'utilisateur, la région, et l'heure","C. Les logs KMS sont disponibles uniquement dans CloudWatch","D. L'audit KMS nécessite un abonnement AWS Shield Advanced"],answer:1,exp:"Audit KMS via CloudTrail : chaque appel API KMS (Decrypt, Encrypt, GenerateDataKey, DescribeKey, etc.) est enregistré avec : key ID, opération, principal IAM, région, timestamp, succès/échec. Permet de savoir qui a chiffré/déchiffré quoi et quand. Utile pour détecter les accès non autorisés ou excessifs à des clés KMS. Les événements KMS sont dans la catégorie 'Management Events' dans CloudTrail."},
{id:"aws-soa-c03-j11-17",q:"Qu'est-ce que l'AWS Well-Architected Framework pilier Security et quelles sont ses pratiques clés ?",choices:["A. Le pilier Security concerne uniquement le chiffrement des données","B. Inclut : IAM (least privilege), détection (GuardDuty, Config, CloudTrail), protection infra (VPC, WAF, Shield), protection données (chiffrement au repos/transit, Macie), réponse aux incidents","C. Le pilier Security est identique au pilier Reliability","D. L'AWS Well-Architected Framework n'a pas de pilier Security"],answer:1,exp:"Pilier Security du Well-Architected Framework : 7 areas : IAM, Detection, Infrastructure protection, Data protection, Incident response. Principaux éléments : Identity & Access Management (MFA, least privilege, temporary credentials), Logging & Monitoring (CloudTrail, Config, GuardDuty), Network Security (VPC, Security Groups, NACLs, WAF, Shield), Data Protection (chiffrement KMS, Macie), Incident Response (runbooks, isolation)."},
{id:"aws-soa-c03-j11-18",q:"Un SysOps admin doit s'assurer que toutes les nouvelles instances EC2 dans un compte sont conformes (SSM agent, CloudWatch agent, tags requis). Quelle approche utiliser ?",choices:["A. Envoyer un email aux développeurs pour qu'ils configurent manuellement leurs instances","B. Combinaison AWS Config Rules (détection) + Systems Manager State Manager (remédiation) + AWS Config Remediation Actions (actions correctives automatiques)","C. CloudFormation uniquement","D. IAM policies pour bloquer le lancement des instances non conformes"],answer:1,exp:"Approche combinée : Config Rule (ex: ec2-instance-managed-by-ssm) détecte les instances non conformes. Config Remediation Action → déclenche SSM Automation pour corriger automatiquement. State Manager associations maintiennent l'état cible continu (agents installés, configurations). Service Control Policy peut bloquer le lancement sans tags requis (SCP avec condition de tag)."},
{id:"aws-soa-c03-j11-19",q:"Comment AWS Config Conformance Packs simplifient-ils la gestion de la conformité ?",choices:["A. Les Conformance Packs créent automatiquement des règles depuis les rapports d'audit","B. Des templates de règles Config pré-packagés (HIPAA, PCI-DSS, CIS) déployables en une fois dans un ou plusieurs comptes/régions via Organizations","C. Les Conformance Packs remplacent AWS Artifact","D. Les Conformance Packs ne sont disponibles que pour les grandes entreprises"],answer:1,exp:"Conformance Packs : collection de Config rules et remediation actions dans un seul template YAML. AWS fournit des packs pré-construits (Operational Best Practices for HIPAA, PCI, CIS) ou vous créez les vôtres. Déploiement via Organizations pour tous les comptes. Score de conformité agrégé. Évite de configurer manuellement des centaines de règles dans chaque compte."},
{id:"aws-soa-c03-j11-20",q:"Qu'est-ce qu'AWS Detective et comment complète-t-il GuardDuty ?",choices:["A. AWS Detective est un service de détection d'intrusion réseau","B. Detective analyse et visualise les données de sécurité pour faciliter les investigations après qu'un incident a été identifié par GuardDuty ou Security Hub (graphes de comportement, timeline)","C. Detective remplace GuardDuty pour la détection des menaces","D. Detective est un service de test de pénétration"],answer:1,exp:"Amazon Detective : investigate security incidents en analysant des graphes de comportement construits depuis VPC Flow Logs, CloudTrail, GuardDuty findings sur 12 mois. Visualise les relations entre entités (IPs, comptes, instances) pour comprendre la portée d'un incident. Workflow typique : GuardDuty détecte une menace → Security Hub agrège → Detective investigate pour comprendre le contexte et l'étendue. Ne fait pas de détection — c'est un outil d'investigation."}
];

// ── Jour 12 — VPC fondamentaux ────────────────────────────────────────────────
window.QDATA[12,
  {
    id: "aws-soa-c03-j12-21",
    q: "Qu'est-ce qu'un 'Transit Gateway' et quel problème résout-il dans une architecture multi-VPC ?",
    choices: ["A. Un VPN entre AWS et on-premise uniquement","B. Un hub de connectivité centralisé qui permet de connecter plusieurs VPC, comptes AWS, et connexions on-premise (VPN/Direct Connect) via une seule ressource — élimine les maillages complexes de VPC peering","C. Un Gateway pour l'accès à internet depuis les VPC","D. Transit Gateway est identique à VPC Peering"],
    answer: 1,
    exp: "Transit Gateway (TGW) : hub de réseau centralisé. Résout le problème de scalabilité de VPC Peering (N*(N-1)/2 connexions). Avec TGW : chaque VPC se connecte au TGW → communication automatique. Supporte : VPC peering transitive, VPN site-to-site, Direct Connect Gateway, peering TGW inter-régions. Route Tables TGW pour la segmentation (dev ne peut pas parler à prod). Supporte jusqu'à 5000 attachments."
  },
  {
    id: "aws-soa-c03-j12-22",
    q: "Quelle est la différence entre VPC Peering et AWS Transit Gateway en termes de scalabilité ?",
    choices: ["A. VPC Peering est plus scalable que Transit Gateway","B. VPC Peering : connexion point-à-point, non transitive, pas de propagation de route. TGW : hub centralisé, transitive, routage flexible, jusqu'à 5000 attachments. VPC Peering est adapté pour quelques VPC, TGW pour large scale","C. Les deux supportent les mêmes fonctionnalités","D. Transit Gateway ne supporte pas le cross-account"],
    answer: 1,
    exp: "Scalabilité : VPC Peering = O(n²) connexions pour n VPC interconnectés. TGW = O(n) connections (chaque VPC se connecte au TGW seulement). VPC Peering ne supporte pas le routage transitif (si A peered avec B et B peered avec C, A ne peut pas communiquer avec C via B). TGW supporte le transitive routing. TGW = coût supplémentaire mais simplifie la gestion pour >5 VPC."
  },
  {
    id: "aws-soa-c03-j12-23",
    q: "Comment configurer l'inspection du trafic est-ouest (inter-VPC) avec AWS Network Firewall et Transit Gateway ?",
    choices: ["A. Les Security Groups suffisent pour l'inspection est-ouest","B. Architecture : VPC attachés au TGW → TGW route le trafic inter-VPC vers un VPC d'inspection qui héberge Network Firewall → inspection → retour vers le VPC destinataire","C. VPC Peering avec Network Firewall intégré","D. Network Firewall ne peut pas inspecter le trafic est-ouest"],
    answer: 1,
    exp: "Inspection centralisée est-ouest : TGW avec un 'Inspection VPC' dédié. Route Tables TGW : trafic entre VPC → inspection VPC. Network Firewall dans l'inspection VPC filtre le trafic (DPI, règles Suricata). Si trafic clean → TGW → VPC destinataire. Architecture 'hub and spoke' avec inspection. Utile pour les compliance requirements de microsegmentation."
  },
  {
    id: "aws-soa-c03-j12-24",
    q: "Qu'est-ce que le 'VPC Lattice' et quel problème résout-il pour les microservices ?",
    choices: ["A. Un service de monitoring réseau pour les microservices","B. Un service de connectivity managé pour les applications microservices — discovery automatique, load balancing, auth, observabilité — sans gérer l'infrastructure réseau entre les services","C. Un remplaçant pour les Load Balancers","D. VPC Lattice est uniquement pour ECS"],
    answer: 1,
    exp: "Amazon VPC Lattice : fabric de connectivité applicative pour les microservices. Résout : comment les services de différents VPC/comptes se connectent sécuritairement. Features : 1) Service discovery automatique. 2) Load balancing intelligent. 3) Auth (IAM policies pour service-to-service). 4) Observabilité (métriques, logs, traces). Sans gérer le peering, le routing, les SG entre services. Architecturalement similaire à un service mesh managé."
  },
  {
    id: "aws-soa-c03-j12-25",
    q: "Comment fonctionne le 'NAT Gateway' par rapport à une 'NAT Instance' EC2 ?",
    choices: ["A. NAT Gateway : service managé, haute disponibilité dans une AZ, scale automatique, pas de gestion. NAT Instance : EC2 que vous gérez, moins scalable mais configurable (firewall, bastion)","B. NAT Instance est toujours préféré à NAT Gateway","C. Les deux offrent les mêmes garanties de disponibilité","D. NAT Gateway ne supporte que IPv4"],
    answer: 0,
    exp: "NAT Gateway (managé) : scale automatique jusqu'à 100 Gbps, HA dans une AZ (créer un par AZ pour la HA), pas d'instance à patcher/gérer, $0.045/h + $0.045/GB. NAT Instance (EC2) : vous gérez le type d'instance, les patches, le failover, source/dest check désactivé, moins scalable. NAT Instance avantages : coût réduit pour petit trafic, peut servir de bastion, règles iptables personnalisées."
  },
  {
    id: "aws-soa-c03-j12-26",
    q: "Qu'est-ce que 'VPC Flow Logs' et quelles informations capture-t-il ?",
    choices: ["A. Logs des requêtes DNS dans le VPC","B. Enregistre les métadonnées du trafic réseau (src/dst IP, ports, protocole, bytes, action ACCEPT/REJECT) pour les interfaces réseau ENI, subnets ou VPC — vers CloudWatch Logs ou S3","C. Capture le contenu des paquets réseau","D. VPC Flow Logs enregistre uniquement le trafic refusé"],
    answer: 1,
    exp: "VPC Flow Logs capture : src IP, dst IP, src port, dst port, protocole, bytes, paquets, action (ACCEPT/REJECT), interface ID, période. Ne capture PAS le contenu des paquets. Utile pour : audit de sécurité, débogage de connectivité, analyse du trafic. Stockage : CloudWatch Logs (requêtable avec Logs Insights) ou S3 (analyse Athena). Coût : $0.50/GB environ."
  },
  {
    id: "aws-soa-c03-j12-27",
    q: "Comment implémenter une architecture VPC sécurisée pour une application à 3 tiers (web, app, db) ?",
    choices: ["A. Toutes les ressources dans un seul subnet","B. VPC avec subnets publics (ALB, NAT GW), subnets privés app (EC2/ECS), subnets privés data (RDS, ElastiCache). Security Groups : ALB (443 depuis internet), EC2 (port app depuis SG ALB), RDS (5432/3306 depuis SG EC2 uniquement)","C. Mettre RDS dans le subnet public pour la simplicité","D. Un VPC par tier (web, app, db)"],
    answer: 1,
    exp: "Architecture 3-tiers sécurisée : 1) Subnet public (par AZ) : ALB (internet-facing) + NAT Gateway. 2) Subnet privé app (par AZ) : EC2/ECS — pas d'accès internet direct, passe par NAT. 3) Subnet privé data (par AZ) : RDS Multi-AZ, ElastiCache — aucun accès internet. SG: ALB accepte 443. EC2 accepte port applicatif depuis SG ALB uniquement. RDS accepte 5432 depuis SG EC2 uniquement."
  },
  {
    id: "aws-soa-c03-j12-28",
    q: "Qu'est-ce qu'un 'Elastic IP' (EIP) et quand est-il nécessaire ?",
    choices: ["A. Une adresse IP qui change à chaque redémarrage d'instance","B. Une adresse IPv4 publique statique allouée à votre compte — l'instance EC2 associée conserve la même IP publique même après arrêt/redémarrage. Nécessaire pour les IP statiques (DNS, liste blanche firewall)","C. EIP est automatiquement attachée à toutes les instances EC2","D. EIP ne peut être utilisée qu'avec les NAT Gateways"],
    answer: 1,
    exp: "Elastic IP : adresse IPv4 publique statique. Sans EIP, l'adresse publique d'une instance change à chaque stop/start. Utilisations : serveur de messagerie (IP reputation), points de terminaison VPN client, liste blanche firewall partenaire. Coût : gratuit tant qu'associée à une instance running. Coût si non associée : $0.005/heure. Limite : 5 EIP par région par défaut."
  },
  {
    id: "aws-soa-c03-j12-29",
    q: "Quelle est la différence entre 'Application Load Balancer' et 'Network Load Balancer' pour le choix du bon type ?",
    choices: ["A. ALB : Layer 7 (HTTP/HTTPS/gRPC), routing basé sur URL/header/méthode, sticky sessions, WAF intégré. NLB : Layer 4 (TCP/UDP/TLS), ultra-faible latence, IP statiques, preserve IP source","B. NLB supporte WAF, ALB non","C. ALB ne supporte pas le HTTPS","D. Les deux sont identiques — différence uniquement de terminologie"],
    answer: 0,
    exp: "ALB (L7) : routing avancé basé sur chemin URL (/api → service1, /web → service2), host-based routing, header-based, méthode HTTP. Sticky sessions. WAF natif. Authentification OIDC/Cognito. Idéal pour microservices HTTP. NLB (L4) : performance extrême (millions de requêtes/sec, microseconde de latence), préserve l'IP source du client, IP statiques (EIP), supporte PrivateLink. Idéal pour TCP, UDP, gaming, IoT."
  },
  {
    id: "aws-soa-c03-j12-30",
    q: "Comment AWS Route 53 Resolver 'Outbound Endpoints' permettent-ils la résolution DNS vers on-premise ?",
    choices: ["A. Route 53 résout automatiquement les domaines on-premise","B. Outbound Endpoints : Route 53 Resolver transfère les requêtes DNS pour les domaines on-premise (ex: corp.internal) vers les DNS on-premise via Direct Connect ou VPN","C. Les Outbound Endpoints sont des Load Balancers pour le DNS","D. Route 53 Resolver ne supporte pas les configurations hybrides"],
    answer: 1,
    exp: "Route 53 Resolver Endpoints : Outbound : les instances VPC interrogent Route 53 Resolver pour corp.internal → Forwarding Rule transfère la requête vers les DNS on-premise (via Direct Connect/VPN). Inbound : les serveurs on-premise peuvent résoudre les noms des ressources VPC (ex: ec2.internal). Bidirectionnel pour une architecture DNS hybride complète."
  },
  {
    id: "aws-soa-c03-j12-31",
    q: "Qu'est-ce que la 'VPC CIDR expansion' et pourquoi est-elle parfois nécessaire ?",
    choices: ["A. Changer complètement le CIDR d'un VPC existant","B. Ajouter un bloc CIDR secondaire à un VPC existant quand l'espace d'adressage initial est épuisé — le VPC peut avoir jusqu'à 5 blocs CIDR associés","C. Réduire la taille du CIDR pour économiser des adresses IP","D. Partager des CIDRs entre VPCs"],
    answer: 1,
    exp: "VPC CIDR expansion : un VPC peut avoir 1 CIDR primaire + 4 CIDRs secondaires (5 total). Si le CIDR principal /20 est épuisé (tous les subnets créés), ajouter un secondaire (ex: 10.1.0.0/16). Les routes et les subnets du CIDR secondaire s'intègrent normalement. Les CIDRs ne peuvent pas se chevaucher entre eux ni avec les VPCs peerés."
  },
  {
    id: "aws-soa-c03-j12-32",
    q: "Comment dépanner un problème de connectivité entre deux instances EC2 dans des subnets différents du même VPC ?",
    choices: ["A. Redémarrer les instances","B. Vérifier : Security Groups (règles inbound/outbound des deux instances), NACLs (règles du subnet source ET destination), route tables (route vers le subnet destinataire), VPC Flow Logs pour voir les paquets ACCEPT/REJECT","C. Contacter AWS Support","D. Créer un VPC Peering entre les subnets"],
    answer: 1,
    exp: "Débogage connectivité intra-VPC : 1) Security Groups : instance A peut-elle envoyer (outbound SG A)? Instance B peut-elle recevoir (inbound SG B)? 2) NACLs : stateless — vérifier INBOUND ET OUTBOUND des deux subnets. 3) Route Tables : chaque subnet a-t-il une route vers l'autre subnet (ou local route couvre tout le VPC CIDR)? 4) VPC Flow Logs : ACCEPT = connectivity OK (pb applicatif). REJECT = Security Group ou NACL."
  },
  {
    id: "aws-soa-c03-j12-33",
    q: "Qu'est-ce que l'AWS Global Accelerator et en quoi diffère-t-il de CloudFront ?",
    choices: ["A. Les deux sont des CDN identiques","B. Global Accelerator : optimise le routage TCP/UDP via le backbone AWS (IPs anycast statics, failover multi-région). CloudFront : CDN pour HTTP/HTTPS avec cache distribué. GA = networking, CF = content delivery","C. CloudFront supporte TCP, Global Accelerator uniquement HTTP","D. Global Accelerator n'est disponible qu'en Amérique du Nord"],
    answer: 1,
    exp: "Global Accelerator vs CloudFront : Global Accelerator : 2 IPs anycast fixes, trafic entre dans le backbone AWS dès le PoP le plus proche (latence réduite), failover multi-régions automatique (<30s), supporte TCP/UDP non-HTTP. CloudFront : cache le contenu au edge (réponse depuis le cache), pour HTTP/HTTPS. GA = optimisation du réseau (latency + availability). CF = cache + optimisation de contenu."
  },
  {
    id: "aws-soa-c03-j12-34",
    q: "Comment configurer AWS PrivateLink pour exposer un service interne à d'autres comptes AWS ?",
    choices: ["A. Créer un VPC Peering entre les comptes","B. Créer un 'VPC Endpoint Service' (NLB devant le service) dans le compte provider + créer un VPC Interface Endpoint dans le compte consumer — le trafic ne traverse pas internet","C. Partager le VPC entre comptes avec Resource Access Manager","D. PrivateLink nécessite Direct Connect"],
    answer: 1,
    exp: "PrivateLink (Endpoint Service) : 1) Provider : NLB devant le service interne → créer un Endpoint Service (aws:ec2:CreateVpcEndpointServiceConfiguration). 2) Accepter les demandes de connexion (allowlist de comptes AWS). 3) Consumer : créer un Interface Endpoint (ENI dans leur VPC) vers l'Endpoint Service. Le trafic reste dans le backbone AWS. Architecture SaaS AWS typique."
  },
  {
    id: "aws-soa-c03-j12-35",
    q: "Qu'est-ce que la 'Subnet Auto-assign Public IP' et quand la désactiver ?",
    choices: ["A. Cette option assigne automatiquement une IP publique à toutes les instances dans un subnet","B. Désactiver sur les subnets privés (app tier, data tier) pour s'assurer que les instances n'ont jamais d'IP publique accessible depuis internet, même accidentellement","C. Cette option est toujours activée par défaut sur tous les subnets","D. Cette option ne peut pas être modifiée après la création du subnet"],
    answer: 1,
    exp: "Subnet 'Auto-assign Public IPv4 Address' : si activé, chaque instance lancée dans ce subnet reçoit automatiquement une IP publique (et est accessible depuis internet si le SG le permet). Best practice : DÉSACTIVER sur les subnets privés. Activer uniquement sur les subnets publics (pour les bastions, ALB). Pour les subnets privés : instances EC2 accèdent internet via NAT Gateway, jamais directement."
  },
  {
    id: "aws-soa-c03-j12-36",
    q: "Comment implémenter l'IPv6 dans un VPC AWS et quelles sont les limitations actuelles ?",
    choices: ["A. IPv6 nécessite un VPC séparé","B. Activer l'IPv6 sur le VPC (bloc /56 auto-assigné par AWS), activer sur les subnets (/64), configurer les instances avec des adresses IPv6, ajouter une Egress-Only IGW pour le trafic IPv6 sortant depuis des subnets privés","C. IPv6 n'est pas supporté dans AWS","D. IPv6 dans AWS est toujours gratuit pour le transfert de données"],
    answer: 1,
    exp: "IPv6 dans VPC : bloc /56 assigné automatiquement par AWS (non personnalisable). Subnets /64. Les instances reçoivent une adresse IPv6 publique globale. Egress-Only Internet Gateway : permet au trafic IPv6 sortant depuis des subnets 'privés' (NAT Gateway ne supporte pas IPv6). Limitations : pas de support IPv6 pour certains services (NAT Gateway, VPC Endpoints). Coût : transfert IPv6 internet facturé normalement."
  },
  {
    id: "aws-soa-c03-j12-37",
    q: "Qu'est-ce que l'AWS Direct Connect 'Hosted Connection' par rapport à une 'Dedicated Connection' ?",
    choices: ["A. Les deux offrent les mêmes débits","B. Dedicated Connection : connexion physique dédiée de 1/10/100 Gbps directement chez AWS. Hosted Connection : sous-connexion vendue par un partenaire AWS DX sur une connexion dédiée existante — débits de 50 Mbps à 10 Gbps","C. Hosted Connection est plus sécurisée que Dedicated","D. Dedicated Connection ne supporte pas les VLANs"],
    answer: 1,
    exp: "Direct Connect Dedicated Connection : port physique dédié dans un Direct Connect Location, commandé directement chez AWS, délai de livraison ~72h à plusieurs semaines. Débits : 1/10/100 Gbps. Hosted Connection : commandée via un partenaire AWS DX qui a déjà une connexion dédiée. Plus flexible (débits variés 50 Mbps à 10 Gbps), moins de bureaucratie pour la mise en service."
  },
  {
    id: "aws-soa-c03-j12-38",
    q: "Comment le DNS 'split-view' (split-horizon) est-il implémenté dans AWS avec Route 53 ?",
    choices: ["A. Split-view n'est pas supporté dans Route 53","B. Créer deux hosted zones avec le même nom de domaine : une publique (réponses depuis internet) et une privée associée au VPC (réponses internes différentes pour le même domaine)","C. Utiliser deux comptes AWS séparés pour le split-view DNS","D. Route 53 Resolver gère automatiquement le split-view"],
    answer: 1,
    exp: "Split-view DNS dans Route 53 : créer deux zones avec le même domaine (ex: example.com) : 1) Zone publique (resolve depuis internet) : api.example.com → IP publique ALB. 2) Zone privée (associée au VPC, résolution interne uniquement) : api.example.com → IP privée interne. Les instances VPC utilisent la zone privée. Les clients internet utilisent la zone publique. Pas de configuration supplémentaire côté client."
  },
  {
    id: "aws-soa-c03-j12-39",
    q: "Quelle est la stratégie pour migrer une application d'une architecture monolithique vers des microservices sans downtime ?",
    choices: ["A. Arrêter le monolithe, refactoriser complètement, redéployer","B. Pattern 'Strangler Fig' : ALB routes certains paths (/api/users) vers les nouveaux microservices, le reste vers le monolithe. Migration graduelle service par service","C. Déployer les microservices en parallèle du monolithe et basculer en une fois","D. Les microservices ne peuvent pas coexister avec un monolithe"],
    answer: 1,
    exp: "Strangler Fig Pattern sur AWS : ALB avec rules de routing : path /api/payments → nouveau microservice (ECS/Lambda). /api/users → monolithe EC2. Migration progressive : 1) Identifier les bounded contexts. 2) Extraire service par service. 3) ALB route vers le nouveau service. 4) Valider. 5) Retirer du monolithe. EventBridge pour découpler la communication asynchrone entre le monolithe et les microservices."
  },
  {
    id: "aws-soa-c03-j12-40",
    q: "Comment AWS CloudFront 'Origin Shield' améliore-t-il les performances pour les origines à forte charge ?",
    choices: ["A. Origin Shield crée un layer de cache additionnel centralisé devant l'origine — réduit les requêtes vers l'origine de 60-90%","B. Origin Shield est un WAF supplémentaire","C. Origin Shield réplique l'origine dans plusieurs régions","D. Origin Shield est identique au cache CloudFront normal"],
    answer: 0,
    exp: "CloudFront Origin Shield : layer de cache additionnel (une région AWS centralisée) entre les edge locations et l'origine. Toutes les requêtes cache-miss des edge locations passent d'abord par Origin Shield → si cache hit là, l'origine n'est pas sollicitée. Réduit la charge sur l'origine de 60-90%. Idéal pour les origines coûteuses à solliciter (APIs, media processing). Coût additionnel mais rentable si l'origine est chère."
  },
  {
    id: "aws-soa-c03-j12-41",
    q: "Qu'est-ce que le 'Cross-Zone Load Balancing' et quel est son impact ?",
    choices: ["A. Permet au Load Balancer de distribuer le trafic uniformément entre toutes les instances de toutes les AZ, pas uniquement dans sa propre AZ","B. Cross-Zone LB envoie le trafic vers d'autres régions","C. Cross-Zone LB est désactivé par défaut sur tous les LB types","D. Cross-Zone LB n'est disponible que pour l'ALB"],
    answer: 0,
    exp: "Cross-Zone Load Balancing : sans cross-zone, chaque nœud LB envoie le trafic uniquement aux instances dans sa propre AZ (si AZ a 2 instances et l'autre AZ en a 8, charge déséquilibrée). Avec cross-zone : chaque nœud distribue équitablement sur toutes les instances de toutes les AZ. ALB : activé par défaut (gratuit). NLB/GWLB : désactivé par défaut, coût de transfert inter-AZ si activé."
  },
  {
    id: "aws-soa-c03-j12-42",
    q: "Comment un 'Gateway Load Balancer' (GWLB) est-il utilisé dans une architecture de sécurité réseau ?",
    choices: ["A. GWLB distribue le trafic web comme ALB mais au niveau réseau","B. GWLB route le trafic vers des appliances de sécurité tierces (firewall, IDS/IPS) via GENEVE protocol — tout le trafic est inspecté avant d'atteindre la destination","C. GWLB remplace NAT Gateway pour la sortie internet","D. GWLB est identique à NLB avec des fonctionnalités supplémentaires"],
    answer: 1,
    exp: "Gateway Load Balancer (GWLB) : layer 3 gateway + load balancer pour les appliances réseau. Fonctionne avec Palo Alto, Fortinet, CheckPoint, etc. sur EC2. Architecture : trafic → VPC endpoint (GWLB Endpoint) → GWLB → appliance (inspection) → retour GWLB → destination. Protocole GENEVE pour transporter le contexte du flux. Utilisé avec TGW pour l'inspection centralisée."
  },
  {
    id: "aws-soa-c03-j12-43",
    q: "Quelle est la différence entre 'Connection Draining' (ALB) et 'Deregistration Delay' ?",
    choices: ["A. Les deux sont des noms pour la même fonctionnalité — attendre que les requêtes en cours se terminent avant de désenregistrer une instance","B. Connection Draining est pour CLB, Deregistration Delay pour ALB/NLB — même concept, noms différents selon la génération","C. Connection Draining est plus court que Deregistration Delay","D. Deregistration Delay force l'arrêt immédiat des connexions"],
    answer: 1,
    exp: "Deregistration Delay (ALB/NLB, défaut 300s) = Connection Draining (CLB) : même concept, noms différents selon le type de LB. Quand une instance est désenregistrée (déploiement, scale-in, health check failed), le LB arrête d'envoyer de nouvelles connexions mais attend que les connexions existantes se terminent (ou timeout atteint). Permet un déploiement gracieux sans couper les requêtes en cours."
  },
  {
    id: "aws-soa-c03-j12-44",
    q: "Comment configurer un 'ALB Listener Rule' pour rediriger HTTP vers HTTPS automatiquement ?",
    choices: ["A. Désactiver le listener HTTP 80","B. Créer une Listener Rule sur le port 80 avec l'action 'Redirect' vers HTTPS port 443 avec code 301 — les clients HTTP sont redirigés automatiquement","C. Configurer les Security Groups pour bloquer le port 80","D. Modifier les DNS pour pointer directement vers le port 443"],
    answer: 1,
    exp: "Redirection HTTP → HTTPS sur ALB : créer un Listener sur le port 80 (HTTP) → Default Action = 'Redirect to URL' : Protocol HTTPS, Port 443, Status Code 301 (permanent). ALB génère une réponse 301 avec Location: https://... Le client suit la redirection. Ne nécessite pas de modifications sur les instances backend."
  },
  {
    id: "aws-soa-c03-j12-45",
    q: "Qu'est-ce que l'AWS Route 53 'Health Check with CloudWatch Alarms' et pourquoi est-il plus puissant qu'un simple health check ?",
    choices: ["A. Les deux sont identiques","B. Un Health Check Route 53 peut être basé sur l'état d'une alarme CloudWatch — permet de monitorer n'importe quelle métrique (latence d'API, taux d'erreur 5xx) pour le failover DNS, pas uniquement TCP/HTTP","C. Les CloudWatch Alarm health checks sont moins précis","D. Cette fonctionnalité n'existe pas dans Route 53"],
    answer: 1,
    exp: "Route 53 Health Check + CloudWatch Alarm : 1) CloudWatch Alarm sur une métrique custom (ex: nombre d'erreurs 5xx ALB, latence > 2s). 2) Route 53 Health Check basé sur l'état de cette alarme (ALARM = Unhealthy). 3) Failover DNS déclenché quand l'alarme se déclenche. Plus puissant : failover basé sur la performance applicative réelle, pas uniquement sur la disponibilité TCP."
  },
  {
    id: "aws-soa-c03-j12-46",
    q: "Comment AWS CloudFront protège-t-il contre les attaques DDoS au niveau de l'application (Layer 7) ?",
    choices: ["A. CloudFront ne protège pas contre les attaques L7","B. CloudFront distribue le trafic sur 400+ PoPs (absorption des attaques volumétriques), Shield Standard inclus, intégration WAF pour les règles L7 (rate limiting, signatures), Geo-restriction pour bloquer des pays","C. Shield Advanced est obligatoire avec CloudFront pour la protection DDoS","D. CloudFront redirige automatiquement les attaques DDoS vers AWS"],
    answer: 1,
    exp: "CloudFront + protection DDoS : 1) Distribution géographique (400+ PoPs) = absorption des attaques volumétriques (trafic absorbé par l'edge). 2) Shield Standard (inclus) : protection L3/L4. 3) WAF : rate-based rules (bloquer IPs dépassant X requêtes/5min), Managed Rules (signature d'attaques). 4) Geo-restriction : bloquer des pays entiers. 5) Shield Advanced (optionnel) : protection L7 avancée, SRT 24/7."
  },
  {
    id: "aws-soa-c03-j12-47",
    q: "Quelle est la différence entre 'Connection Timeout' et 'Idle Timeout' sur un ALB ?",
    choices: ["A. Les deux sont identiques","B. Connection Timeout : délai pour établir la connexion avec le backend. Idle Timeout (défaut 60s) : durée d'inactivité maximale avant fermeture de la connexion persistante — doit être aligné avec les keepalive applicatifs","C. Idle Timeout est uniquement pour les connexions WebSocket","D. Connection Timeout est configurable, Idle Timeout non"],
    answer: 1,
    exp: "ALB Idle Timeout (60s par défaut, max 4000s) : si aucune donnée n'est échangée pendant cette durée sur une connexion établie, ALB ferme la connexion. Important pour : les applications avec des requêtes longues (upload, streaming) → augmenter le timeout. Les backends doivent avoir un keepalive supérieur au idle timeout ALB pour éviter les reset inattendus."
  },
  {
    id: "aws-soa-c03-j12-48",
    q: "Qu'est-ce que l'AWS Route 53 'Alias Record' et comment diffère-t-il d'un CNAME ?",
    choices: ["A. Les deux sont identiques","B. Alias Record : extension AWS qui pointe vers des ressources AWS (ALB, CloudFront, ELB, S3 website, autre Route 53 record). Peut être sur l'apex (@). CNAME : standard DNS, ne peut pas être à l'apex, facturé par requête","C. CNAME est plus rapide qu'Alias","D. Alias Records ne supportent que les ressources dans la même région"],
    answer: 1,
    exp: "Alias Record (Route 53 extension) vs CNAME : Alias peut être à l'apex du domaine (example.com → alb.amazonaws.com) — impossible avec un CNAME DNS standard. Alias résout automatiquement les IPs changeantes des ressources AWS. Alias vers des ressources AWS = gratuit (pas de charge par requête). CNAME : standard DNS, fonctionne partout, mais pas à l'apex et facturé par requête Route 53."
  },
  {
    id: "aws-soa-c03-j12-49",
    q: "Comment AWS CloudFront gère-t-il les 'Custom Error Pages' pour améliorer l'expérience utilisateur ?",
    choices: ["A. CloudFront ne supporte pas les pages d'erreur personnalisées","B. Configurer des 'Custom Error Responses' dans CloudFront : pour les codes d'erreur HTTP (403, 404, 500), retourner une page personnalisée depuis le cache CloudFront avec un TTL et optionnellement un code HTTP différent","C. Les pages d'erreur doivent être sur le serveur d'origine","D. Les Custom Error Pages nécessitent Lambda@Edge"],
    answer: 1,
    exp: "CloudFront Custom Error Responses : pour chaque code d'erreur (403, 404, 503, etc.), configurer : 1) L'objet de réponse custom (chemin vers une page HTML dans le cache CloudFront, ex: /errors/404.html). 2) Le TTL du cache de l'erreur. 3) Optionnellement changer le code HTTP (ex: retourner 200 au lieu de 404 pour une SPA). La page custom est mise en cache à l'edge."
  },
  {
    id: "aws-soa-c03-j12-50",
    q: "Qu'est-ce que 'AWS Transit Gateway Network Manager' et quel est son rôle ?",
    choices: ["A. Un outil pour gérer les routes du Transit Gateway","B. Un service de monitoring centralisé qui visualise et monitore l'état du réseau global (TGW, Direct Connect, VPN, SD-WAN) sur une carte géographique — topology view, métriques de performance","C. Un service pour créer des Transit Gateways automatiquement","D. TGW Network Manager est identique à VPC Flow Logs"],
    answer: 1,
    exp: "TGW Network Manager : tableau de bord centralisé pour visualiser et monitorer l'état du réseau d'entreprise sur AWS. Features : 1) Vue topologique globale (VPCs, TGW, DX connexions, VPN, partenaires SD-WAN). 2) Métriques de performance (latence, utilisation des liens). 3) Alertes sur les changements de topologie. 4) Intégration avec Cisco, Meraki, Juniper pour les réseaux SD-WAN hybrides."
  }
]=[
{id:"aws-soa-c03-j12-1",q:"Quelle est la différence entre un Security Group et un Network ACL (NACL) dans AWS ?",choices:["A. Les Security Groups sont pour les instances, les NACLs pour les VPCs","B. Security Groups : stateful (réponses autorisées automatiquement), niveau instance, règles Allow seulement. NACLs : stateless (retour explicite nécessaire), niveau subnet, règles Allow ET Deny, évaluation par numéro de règle","C. Les deux sont stateless","D. Les NACLs s'appliquent uniquement aux instances publiques"],answer:1,exp:"Security Groups : stateful (connexion établie autorisée dans les deux sens), attachés aux interfaces réseau/instances, règles Allow uniquement, toutes les règles évaluées. NACLs : stateless (retour du trafic doit être explicitement autorisé dans les règles sortantes), appliqués aux subnets, règles Allow ET Deny, évaluation par numéro croissant (première règle match gagne), règle * (Deny all) à la fin."},
{id:"aws-soa-c03-j12-2",q:"Qu'est-ce qu'une Elastic IP (EIP) et pourquoi est-elle nécessaire pour les instances publiques ?",choices:["A. Une EIP est une adresse IPv6 statique","B. Une EIP est une adresse IPv4 publique statique allouée à votre compte AWS — contrairement aux IP publiques automatiques qui changent à chaque arrêt/démarrage","C. Les EIP remplacent les DNS dans Route 53","D. Les EIP sont uniquement nécessaires pour les instances dans les subnets privés"],answer:1,exp:"Elastic IP : adresse IPv4 publique statique associée à votre compte AWS (pas à une instance). Elle reste la même même si l'instance est arrêtée/redémarrée. Les IP publiques automatiques (auto-assign public IP) changent à chaque redémarrage. L'EIP est attachée à l'instance ou à l'interface réseau. Gratuite si associée à une instance running ; facturée si non associée (encourager la libération)."},
{id:"aws-soa-c03-j12-3",q:"Comment un subnet est-il public ou privé dans AWS VPC ?",choices:["A. Un subnet public a des instances avec adresses IP publiques, un privé n'en a pas","B. Un subnet est public si sa route table a une route vers un Internet Gateway (0.0.0.0/0 → igw-xxx). Un subnet privé n'a pas cette route","C. La distinction public/privé est configurée directement sur le subnet","D. Un subnet est public si le NACL permet le trafic entrant"],answer:1,exp:"La distinction public/privé se fait via la route table : un subnet public a une route 0.0.0.0/0 vers un Internet Gateway (IGW). Pour qu'une instance soit accessible depuis internet : subnet public + route vers IGW + instance avec IP publique/EIP + Security Group autorisant le trafic. Un subnet privé n'a pas de route directe vers IGW — pour accéder à internet, il utilise un NAT Gateway dans un subnet public."},
{id:"aws-soa-c03-j12-4",q:"Quelle est la différence entre NAT Gateway et NAT Instance ?",choices:["A. NAT Gateway est moins disponible que NAT Instance","B. NAT Gateway : service managé AWS (HA dans une AZ, bande passante scalable, pas de maintenance). NAT Instance : EC2 que vous gérez, moins cher, mais single point of failure, maintenance requise","C. NAT Instance supporte IPv6, NAT Gateway non","D. Les deux sont équivalents en termes de disponibilité"],answer:1,exp:"NAT Gateway (managé) : haute disponibilité dans une AZ (déployer dans chaque AZ pour multi-AZ HA), jusqu'à 100 Gbps, pas d'administration, coût fixe + données traitées. NAT Instance (EC2) : vous gérez l'OS, le patching, la mise en échelle, bastion host possible. Désactiver Source/Dest Check sur l'instance. NAT Gateway est recommandé pour la production. NAT64 avec NATGW pour IPv6 → IPv4."},
{id:"aws-soa-c03-j12-5",q:"Qu'est-ce que VPC Flow Logs et quelles informations capture-t-il ?",choices:["A. VPC Flow Logs capture le contenu des paquets réseau","B. VPC Flow Logs capture les métadonnées du trafic réseau (src/dst IP, ports, protocole, octets, action accept/reject) pour les VPCs, subnets ou interfaces réseau","C. VPC Flow Logs est disponible uniquement pour les instances EC2","D. VPC Flow Logs capture uniquement le trafic entrant"],answer:1,exp:"VPC Flow Logs : capture les métadonnées (pas le contenu) du trafic IP : IP source/destination, ports source/destination, protocole, paquets, octets, début/fin, action (ACCEPT/REJECT). Peut être activé sur VPC, subnet, ou ENI. Destination : CloudWatch Logs ou S3. Utile pour : debugging de connectivity, détection d'anomalies, forensics réseau. Délai d'environ 10 min pour les logs en temps réel."},
{id:"aws-soa-c03-j12-6",q:"Comment fonctionnent les VPC Endpoints et pourquoi les utiliser ?",choices:["A. Les VPC Endpoints permettent les connexions VPC-to-VPC uniquement","B. Les VPC Endpoints permettent aux instances dans un VPC d'accéder à des services AWS sans passer par internet, en utilisant le réseau privé AWS. Interface Endpoints (ENI) et Gateway Endpoints (S3, DynamoDB)","C. Les VPC Endpoints nécessitent un Direct Connect","D. Les VPC Endpoints ne supportent que quelques services AWS"],answer:1,exp:"VPC Endpoints types : Gateway Endpoints (S3 et DynamoDB) : modifient la route table, pas de frais additionnels. Interface Endpoints (PrivateLink) : crée une ENI dans le subnet avec IP privée, applicable à la plupart des services AWS, coût par heure et par données. Avantages : trafic reste sur le réseau AWS (pas internet), sécurité améliorée, réduction de coûts NAT Gateway. Utile pour les instances dans les subnets privés."},
{id:"aws-soa-c03-j12-7",q:"Un administrateur remarque qu'une instance EC2 dans un subnet privé ne peut pas accéder à internet pour les mises à jour. Quelle est la cause probable ?",choices:["A. L'instance n'a pas d'adresse IP publique","B. Il manque un NAT Gateway dans un subnet public avec une route dans la route table du subnet privé pointant vers ce NAT Gateway","C. Le Security Group de l'instance bloque le trafic sortant","D. L'Internet Gateway n'est pas attaché au VPC"],answer:1,exp:"Pour qu'une instance dans un subnet privé accède à internet : 1) NAT Gateway dans un subnet PUBLIC. 2) Route table du subnet privé avec 0.0.0.0/0 → nat-gateway-id. 3) Internet Gateway attaché au VPC. 4) Route table du subnet public avec 0.0.0.0/0 → igw-id. 5) Security Group autorisant le trafic sortant. Sans NAT Gateway dans la route table du subnet privé, les instances privées ne peuvent pas sortir."},
{id:"aws-soa-c03-j12-8",q:"Qu'est-ce que le VPC Peering et quelles sont ses limitations ?",choices:["A. VPC Peering permet de connecter des VPCs avec un maximum de 10 VPCs","B. VPC Peering : connexion privée entre deux VPCs (même compte, comptes différents, ou régions différentes). Limitation : non transitif (A↔B, B↔C ne permet pas A↔C) et pas de chevauchement CIDR","C. VPC Peering nécessite un Internet Gateway","D. VPC Peering ne fonctionne que dans la même région"],answer:1,exp:"VPC Peering : connexion réseau entre deux VPCs, trafic reste sur le réseau AWS. Supporte intra-région, inter-régions, et cross-account. Limitations critiques : non-transitif (A peut communiquer avec B et B avec C, mais A ne peut pas communiquer avec C via B — nécessite un peering direct A-C), pas de chevauchement de CIDR, pas de DNS forward des instances. Pour la transitivité : utiliser Transit Gateway."},
{id:"aws-soa-c03-j12-9",q:"Comment configure-t-on le DNS dans un VPC AWS ?",choices:["A. AWS ne fournit pas de DNS dans le VPC — vous devez héberger votre propre DNS","B. enableDnsHostnames + enableDnsSupport sur le VPC activent le DNS AWS. Route 53 Resolver est disponible pour les requêtes forward/reverse. Route 53 Private Hosted Zones pour les domaines internes","C. Le DNS dans le VPC nécessite l'ouverture du port 53 dans les Security Groups","D. Le DNS AWS dans le VPC n'est disponible que dans les subnets publics"],answer:1,exp:"VPC DNS : enableDnsSupport (résolution DNS activée via serveur DNS AWS 169.254.169.253 ou VPC_CIDR_base+2). enableDnsHostnames (instances dans les subnets publics reçoivent un hostname DNS). Route 53 Resolver : inbound endpoints (DNS queries depuis on-premises vers AWS), outbound endpoints (DNS queries depuis AWS vers on-premises), Resolver Rules. Private Hosted Zones : domaines DNS internes (.internal.example.com)."},
{id:"aws-soa-c03-j12-10",q:"Qu'est-ce qu'une ENI (Elastic Network Interface) et quand l'utiliser ?",choices:["A. ENI est uniquement utilisée pour les instances EC2 de type EBS-optimized","B. ENI est une interface réseau virtuelle attachée à une instance. Peut être créée séparément et re-attachée entre instances, utile pour : bastion host HA, migration de licences logicielles basées sur MAC address","C. ENI remplace les Security Groups","D. Chaque instance EC2 peut avoir au maximum une ENI"],answer:1,exp:"Elastic Network Interface (ENI) : interface réseau virtuelle attachable à des instances EC2. Chaque ENI a : IPv4 privée, IPv4 publique optionnelle, MAC address, Security Groups. Cas d'usage : instances multi-interfaces (séparation trafic prod/mgmt), bastion host HA (ENI pré-créée transférée vers une nouvelle instance en cas de défaillance), licences software liées à MAC (même MAC peut être migré avec l'ENI)."},
{id:"aws-soa-c03-j12-11",q:"Comment fonctionne le routage dans un VPC AWS ?",choices:["A. AWS utilise uniquement des routes statiques dans les VPCs","B. Chaque subnet a une route table (ou hérite de la main route table). Les routes les plus spécifiques (/32 avant /0) sont prioritaires. Routes locales (VPC CIDR) sont implicites et non supprimables","C. Le routage AWS est entièrement automatique et non configurable","D. Les routes tables ne peuvent avoir que 10 entrées maximum"],answer:1,exp:"Routage VPC : chaque subnet est associé à une route table (sinon utilise la main route table). Évaluation : route la plus spécifique (longest prefix match) gagne. Route locale (VPC CIDR → local) est toujours présente et non supprimable. Routes supplémentaires : vers IGW, NAT GW, VGW, Transit GW, VPC Endpoint, VPC Peering. Chaque subnet peut avoir sa propre route table pour contrôle granulaire."},
{id:"aws-soa-c03-j12-12",q:"Quelle est la taille CIDR minimale et maximale d'un VPC AWS ?",choices:["A. Minimum /28, maximum /8","B. Minimum /28, maximum /16","C. Minimum /24, maximum /8","D. Minimum /16, maximum /8"],answer:1,exp:"VPC CIDR : minimum /28 (16 adresses IP — dont 5 réservées par AWS = 11 utilisables). Maximum /16 (65 536 adresses). AWS réserve 5 adresses dans chaque subnet : .0 (réseau), .1 (routeur VPC), .2 (DNS AWS), .3 (futur usage), .255 (broadcast). Un VPC peut avoir plusieurs CIDRs (IPv4 et IPv6). IPv6 : /56 pour le VPC, /64 pour les subnets."},
{id:"aws-soa-c03-j12-13",q:"Comment tester la connectivité réseau entre deux instances EC2 ?",choices:["A. Ping est la seule méthode de test disponible dans AWS","B. VPC Reachability Analyzer (analyse le chemin réseau sans trafic réel), Network Access Analyzer, et les outils classiques (ping, curl, telnet) depuis l'instance","C. Les tests de connectivité nécessitent l'ouverture d'un ticket AWS Support","D. Il est impossible de tester la connectivité sans accès physique aux instances"],answer:1,exp:"VPC Reachability Analyzer : analyse le chemin logique entre une source et une destination (instances, IGW, subnets, NACLs, Security Groups) sans envoyer de trafic réel. Identifie les blocages (Security Group, NACL, route table). Network Access Analyzer : découvre les chemins réseau non conformes à vos règles d'accès. Depuis les instances : telnet, curl, nc (netcat) pour tester la connectivité TCP/UDP."},
{id:"aws-soa-c03-j12-14",q:"Qu'est-ce qu'un Bastion Host et comment peut-il être remplacé par une solution plus sécurisée ?",choices:["A. Un bastion host est obligatoire et ne peut pas être remplacé","B. Un bastion host est une instance EC2 publique servant de point de saut vers les instances privées. Alternative sécurisée : AWS Systems Manager Session Manager (pas de port 22 ouvert)","C. Session Manager ne peut pas remplacer le bastion host pour les accès Linux","D. Les bastions hosts sont uniquement pour les environnements Windows"],answer:1,exp:"Bastion Host (Jump Server) : instance dans un subnet public, accès SSH depuis internet, relay vers les instances privées. Problèmes : port 22 ouvert, gestion des clés SSH, single point of failure, coût. Alternative : Systems Manager Session Manager (aucun port ouvert, IAM pour l'accès, logs dans S3/CloudWatch, MFA possible, pas de clés SSH). Session Manager est la best practice AWS actuelle pour accéder aux instances privées."},
{id:"aws-soa-c03-j12-15",q:"Comment implémenter une architecture VPC multi-AZ pour la haute disponibilité ?",choices:["A. Déployer toutes les instances dans une seule AZ pour simplifier","B. Créer des subnets publics et privés dans au moins 2-3 AZs, déployer un NAT Gateway par AZ, utiliser ALB multi-AZ, et déployer les instances avec ASG sur toutes les AZs","C. Les VPCs sont automatiquement multi-AZ sans configuration","D. La haute disponibilité nécessite plusieurs VPCs dans plusieurs régions uniquement"],answer:1,exp:"Architecture VPC HA multi-AZ : 1) Subnets publics et privés dans 2-3 AZs. 2) Internet Gateway (un par VPC, regional). 3) NAT Gateway dans CHAQUE AZ (si un NAT GW tombe, les instances de son AZ perdent internet). 4) ALB/NLB multi-AZ. 5) ASG distribuant les instances sur les AZs. 6) Route tables distinctes par AZ pour les subnets privés (pointing vers le NAT GW local à l'AZ)."},
{id:"aws-soa-c03-j12-16",q:"Quelle est la différence entre un VPC par défaut et un VPC personnalisé ?",choices:["A. Les deux sont identiques — il n'y a pas de différence fonctionnelle","B. VPC par défaut : créé automatiquement, /16 CIDR (172.31.0.0/16), subnets publics dans chaque AZ, IGW attaché, route table avec route internet. VPC personnalisé : vous définissez le CIDR, la topologie, les routes","C. Le VPC par défaut ne peut pas être supprimé","D. Les VPCs personnalisés ne supportent pas les subnets publics"],answer:1,exp:"VPC par défaut : 172.31.0.0/16, subnets /20 dans chaque AZ, IGW attaché, route tables avec 0.0.0.0/0→igw, all instances get public IPs. Pratique pour les tests mais pas recommandé pour la production. VPC personnalisé : CIDR de votre choix, topologie définie, contrôle total. Bonnes pratiques : ne pas utiliser le VPC par défaut pour les workloads de production, planifier les CIDRs pour éviter les chevauchements avec on-premises."},
{id:"aws-soa-c03-j12-17",q:"Qu'est-ce qu'AWS PrivateLink et en quoi diffère-t-il du VPC Peering ?",choices:["A. PrivateLink et VPC Peering sont identiques","B. PrivateLink (Interface VPC Endpoints) expose un service spécifique via une ENI privée — pas d'accès complet au VPC comme avec le Peering. Permet aux fournisseurs SaaS d'exposer des services sans partager leur VPC","C. VPC Peering utilise PrivateLink en interne","D. PrivateLink nécessite un Direct Connect"],answer:1,exp:"AWS PrivateLink : accès privé à un service spécifique via une ENI dans votre VPC — le fournisseur expose son service (NLB) via un VPC Endpoint Service, vous y accédez via un Interface VPC Endpoint. Pas d'accès au réseau complet du fournisseur. Avantages sur VPC Peering : pas de problème de chevauchement CIDR, le fournisseur garde le contrôle, scalable à des milliers de clients. Utilisé par les services AWS et les SaaS providers."},
{id:"aws-soa-c03-j12-18",q:"Comment configurer IPv6 dans un VPC AWS ?",choices:["A. L'IPv6 est automatiquement activé dans tous les VPCs","B. Associer un bloc CIDR IPv6 (/56) au VPC, assigner des sous-réseaux /64, ajouter des routes IPv6 dans les route tables (Egress-Only IGW pour les subnets privés)","C. L'IPv6 dans AWS nécessite un IPv6 Gateway séparé de l'IPv4","D. IPv6 dans AWS n'est disponible que pour les instances Graviton"],answer:1,exp:"Configuration IPv6 VPC : 1) Associer un IPv6 CIDR /56 au VPC (attribué par Amazon). 2) Assigner des /64 aux subnets. 3) Pour les subnets publics : route ::/0 → IGW (le même IGW gère IPv4 et IPv6). 4) Pour les subnets privés : route ::/0 → Egress-Only IGW (permet les connexions sortantes IPv6 sans connexions entrantes). Les EIPs ne s'appliquent pas à IPv6 (toutes les adresses IPv6 sont publiques)."},
{id:"aws-soa-c03-j12-19",q:"Qu'est-ce que la MTU (Maximum Transmission Unit) dans AWS VPC et pourquoi est-ce important ?",choices:["A. La MTU AWS est de 576 octets, identique à l'internet classique","B. La MTU AWS VPC est de 9001 octets (Jumbo Frames) pour les connexions intra-VPC. Entre VPCs (peering), Direct Connect, et internet : 1500 octets. Important pour les performances des transferts de données","C. La MTU dans AWS est fixe et ne peut pas être modifiée","D. La MTU n'affecte pas les performances dans AWS"],answer:1,exp:"MTU AWS : 9001 octets (Jumbo Frames) pour le trafic dans le même VPC ou entre VPCs peered dans la même région. 8500 octets pour le peering inter-régions. 1500 octets pour internet, VPN, et Direct Connect VIF (sauf Direct Connect hosted connection qui peut atteindre 9001). Important pour les workloads HPC, transferts de données volumineuses. Configurer sur l'OS : ip link set eth0 mtu 9001."},
{id:"aws-soa-c03-j12-20",q:"Comment déboguer un problème de Security Group où le trafic semble bloqué ?",choices:["A. Désactiver temporairement tous les Security Groups pour tester","B. Vérifier les Security Groups entrant/sortant de la source ET destination, vérifier les NACLs du subnet, utiliser VPC Reachability Analyzer, et analyser les VPC Flow Logs pour voir ACCEPT/REJECT","C. Redémarrer les instances pour réinitialiser les règles","D. Contacter AWS Support — les Security Groups ne peuvent pas être débogués en autonomie"],answer:1,exp:"Debugging Security Group : 1) VPC Flow Logs → chercher REJECT sur le port/IP concerné. 2) VPC Reachability Analyzer → analyse le chemin et identifie la règle qui bloque. 3) Vérifier les Security Groups des deux instances (sortant source, entrant destination). 4) Vérifier les NACLs des subnets source ET destination (stateless → vérifier les deux sens). 5) Vérifier les routes tables. 6) Vérifier qu'une IP publique/EIP existe si accès depuis internet."}
];

// ── Jour 13 — VPC avancé, Transit Gateway, Direct Connect, PrivateLink ────────
window.QDATA[13,
  {
    id: "aws-soa-c03-j13-21",
    q: "Comment débogguer une connexion Direct Connect qui ne route pas le trafic vers un VPC spécifique ?",
    choices: ["A. Redémarrer la connexion Direct Connect","B. Vérifier : Virtual Interface (VIF) BGP session status, routes BGP annoncées, Virtual Gateway (VGW) ou TGW attachment, Route Table VPC, Security Groups","C. Contacter le provider Direct Connect uniquement","D. Recréer la connexion Direct Connect"],
    answer: 1,
    exp: "Débogage DX : 1) Virtual Interface : BGP session UP? Préfixes reçus et annoncés (aws directconnect describe-virtual-interfaces). 2) VGW/TGW : attaché au VPC? Route propagée dans la Route Table VPC? 3) Route Table VPC : route vers le CIDR on-premise via vgw-xxx? 4) Security Groups/NACLs : autorisent le trafic depuis le CIDR on-premise? 5) VPC Flow Logs : ACCEPT ou REJECT?"
  },
  {
    id: "aws-soa-c03-j13-22",
    q: "Qu'est-ce que le 'Direct Connect Gateway' (DXGW) et quel problème résout-il ?",
    choices: ["A. Un simple gateway pour les connexions Direct Connect","B. DXGW permet d'associer une connexion Direct Connect à plusieurs VPCs dans différentes régions AWS depuis un seul point — évite de créer une connexion DX par région","C. DXGW est requis pour toutes les connexions Direct Connect","D. DXGW remplace Virtual Private Gateway"],
    answer: 1,
    exp: "Direct Connect Gateway : ressource globale qui permet à une connexion DX (dans une région) d'accéder à plusieurs VPCs dans DIFFÉRENTES régions via des Virtual Private Gateways (VGW) ou un Transit Gateway. Sans DXGW : une connexion DX par région VPC. Avec DXGW : une connexion DX → DXGW → jusqu'à 10 VGWs ou TGWs dans différentes régions."
  },
  {
    id: "aws-soa-c03-j13-23",
    q: "Comment configurer un VPN site-to-site résilient entre AWS et on-premise avec deux connexions Active-Active ?",
    choices: ["A. Une seule connexion VPN avec un tunnel IPSec","B. Créer une VPN Connection avec deux tunnels (deux endpoints AWS dans différentes AZ), configurer le routeur on-premise pour utiliser les deux tunnels (ECMP avec BGP pour Active-Active, ou failover passive)","C. Utiliser deux connexions Direct Connect pour la résilience VPN","D. VPN site-to-site AWS ne supporte pas la configuration Active-Active"],
    answer: 1,
    exp: "VPN AWS résilient : chaque VPN Connection AWS crée automatiquement 2 tunnels IPSec (deux endpoints dans différentes AZ). Configuration : 1) BGP dynamique + ECMP : les deux tunnels actifs simultanément (Active-Active). 2) Static routing : un tunnel actif, l'autre en standby (Active-Passive). Pour une résilience maximale : deux connexions VPN vers deux routeurs on-premise différents (4 tunnels en tout)."
  },
  {
    id: "aws-soa-c03-j13-24",
    q: "Qu'est-ce que l'AWS Client VPN et quel est son avantage par rapport à un VPN classique ?",
    choices: ["A. AWS Client VPN est une connexion site-to-site uniquement","B. Service VPN managé qui permet aux utilisateurs individuels de se connecter sécuritairement à AWS et on-premise depuis n'importe où, avec authentification IAM Identity Center / AD / certificats","C. Client VPN ne supporte que Windows","D. AWS Client VPN est moins sécurisé qu'un VPN on-premise"],
    answer: 1,
    exp: "AWS Client VPN : connexion TLS/OpenVPN managée pour les utilisateurs distants. Avantages : 1) Managé (pas d'infrastructure VPN à gérer). 2) Scale automatique. 3) Authentification : Active Directory, Certificate-Based, SAML (Okta). 4) Split-tunneling (uniquement le trafic AWS passe par le VPN). 5) Associé à un subnet VPC → accès aux ressources VPC. 6) Logs dans CloudWatch."
  },
  {
    id: "aws-soa-c03-j13-25",
    q: "Comment implémenter une architecture réseau hub-and-spoke multi-comptes avec TGW et AWS Organizations ?",
    choices: ["A. Créer des VPC Peering entre tous les comptes","B. TGW dans le compte réseau central, partagé via AWS Resource Access Manager (RAM) avec tous les comptes de l'organisation. Chaque compte attache son VPC au TGW partagé","C. Chaque compte a son propre TGW","D. TGW ne peut pas être partagé entre comptes"],
    answer: 1,
    exp: "TGW multi-comptes : 1) Compte Network (hub) : crée le TGW. 2) AWS RAM : partage le TGW avec l'organisation (ou des OUs/comptes spécifiques). 3) Comptes membres (spokes) : attachent leurs VPCs au TGW partagé. 4) Route Tables TGW segmentées (ex: dev ne peut pas parler à prod). 5) VPN/DX attaché au TGW central. Architecture réseau centralisée."
  },
  {
    id: "aws-soa-c03-j13-26",
    q: "Quelle est la différence entre 'SG Stateful' et 'NACL Stateless' en termes de comportement réseau ?",
    choices: ["A. Les deux filtrent le trafic de la même façon","B. SG Stateful : si une connexion est autorisée en entrée, la réponse est automatiquement autorisée en sortie (état de connexion mémorisé). NACL Stateless : chaque paquet évalué indépendamment — INBOUND et OUTBOUND doivent être configurés","C. NACLs mémorisent l'état des connexions","D. Security Groups doivent configurer les règles inbound ET outbound pour chaque connexion"],
    answer: 1,
    exp: "SG Stateful : track l'état des connexions (similar à iptables -m state). Paquet entrant autorisé → la réponse sortante est automatiquement autorisée (pas besoin de règle outbound explicite pour les réponses). NACL Stateless : chaque paquet indépendant. Pour HTTP (port 80) depuis internet : NACL Inbound : autoriser 80 src any. NACL Outbound : autoriser ports éphémères (1024-65535) car le retour vient depuis le port 80."
  },
  {
    id: "aws-soa-c03-j13-27",
    q: "Qu'est-ce que l'AWS Route 53 'Routing Policy Latency-based' et comment est-il implémenté ?",
    choices: ["A. Route 53 mesure la latence vers chaque région en temps réel","B. Route 53 maintient une base de données de latence mesurée entre les régions AWS et les blocs d'adresses IP — route la requête vers la région avec la latence historiquement la plus basse","C. Latency-based routing utilise la géolocalisation comme proxy","D. Latency-based est identique à Geolocation routing"],
    answer: 1,
    exp: "Latency-based Routing : Route 53 utilise une base de données de mesures de latence entre des 'cloud regions' AWS et des blocs IP clients (mise à jour periodeiquement par AWS). Pas de mesure en temps réel. Crée des records de type 'Latency' dans différentes régions — Route 53 retourne l'IP de la région avec la latence mesurée la plus basse pour le bloc IP de l'appelant."
  },
  {
    id: "aws-soa-c03-j13-28",
    q: "Comment AWS Elastic Fabric Adapter (EFA) améliore-t-il les performances réseau pour les workloads HPC ?",
    choices: ["A. EFA augmente la bande passante internet de l'instance","B. EFA est une interface réseau qui permet aux applications HPC (MPI, ML distribué) de communiquer directement entre instances EC2 avec une latence ultra-basse et haute bande passante — bypass le stack OS pour la communication inter-instances","C. EFA remplace Enhanced Networking pour toutes les instances","D. EFA est disponible sur toutes les familles d'instances EC2"],
    answer: 1,
    exp: "Elastic Fabric Adapter (EFA) : interface réseau optimisée pour le HPC et le machine learning distribué. Permet OS-bypass : les applications MPI communiquent directement avec l'interface réseau sans passer par le kernel TCP/IP stack → latence microseconde, débit maximum. Utilise le protocole SRD (Scalable Reliable Datagram). Disponible sur instances HPC6id, Trn1, Hpc7g. Cluster Placement Group recommandé."
  },
  {
    id: "aws-soa-c03-j13-29",
    q: "Quelle est la stratégie pour migrer une application d'un VPC existant vers un nouveau VPC sans downtime ?",
    choices: ["A. Arrêter l'application, recréer dans le nouveau VPC, redémarrer","B. Créer le nouveau VPC + VPC Peering ou TGW entre anciens et nouveaux. Déployer dans le nouveau VPC, tester, basculer progressivement le trafic via ALB/Route 53, puis désactiver l'ancien","C. Utiliser AWS Migration Hub pour la migration VPC","D. Les VPCs ne peuvent pas être migrés sans downtime"],
    answer: 1,
    exp: "Migration VPC sans downtime : 1) Créer le nouveau VPC avec la bonne architecture. 2) VPC Peering (temporaire) entre ancien et nouveau pour la communication pendant la transition. 3) Déployer l'application dans le nouveau VPC. 4) Tests. 5) Route 53 weighted routing : 10% → nouveau VPC. Augmenter progressivement. 6) 100% → nouveau VPC. 7) Supprimer l'ancien déploiement."
  },
  {
    id: "aws-soa-c03-j13-30",
    q: "Comment 'AWS Network Access Analyzer' aide-t-il à identifier les configurations réseau non désirées ?",
    choices: ["A. Monitore le trafic réseau en temps réel","B. Analyse les configurations réseau (SG, NACLs, Route Tables, VPC Peering) pour trouver les chemins d'accès non désirés (ex: instance accessible depuis internet quand elle ne devrait pas l'être)","C. Network Access Analyzer est identique à VPC Flow Logs","D. Network Access Analyzer uniquement pour les connexions Direct Connect"],
    answer: 1,
    exp: "AWS Network Access Analyzer : identifie les accès réseau non-intentionnels dans les configurations VPC. Crée des 'Network Access Scopes' qui définissent les chemins non désirés (ex: Internet → instance dans subnet privé). Analyse les configurations actuelles et identifie si de tels chemins existent. Différent de VPC Flow Logs (qui analyse le trafic réel) — Network Access Analyzer est statique (configuration analysis)."
  },
  {
    id: "aws-soa-c03-j13-31",
    q: "Qu'est-ce que l'AWS Reachability Analyzer et comment aide-t-il au débogage réseau ?",
    choices: ["A. Analyse la performance réseau entre deux points","B. Vérifie si un chemin réseau existe entre deux ressources VPC (instance EC2, ALB, NLB, IGW) et identifie exactement où la connectivité est bloquée (SG, NACL, route manquante)","C. Reachability Analyzer nécessite des agents sur les instances","D. Reachability Analyzer teste uniquement les connexions internet"],
    answer: 1,
    exp: "AWS Reachability Analyzer : outil de débogage réseau qui analyse le chemin théorique entre deux ressources (sans envoyer de trafic réel). Input : source (instance A) + destination (instance B + port). Output : REACHABLE ou NOT REACHABLE + explication précise de ce qui bloque (SG inbound manquant, route table incorrecte, NACL refus, etc.). Idéal pour : diagnostiquer rapidement les problèmes de connectivité."
  },
  {
    id: "aws-soa-c03-j13-32",
    q: "Comment configurer 'Enhanced Networking' pour améliorer les performances réseau d'une instance EC2 ?",
    choices: ["A. Augmenter la taille de l'instance EC2","B. Enhanced Networking utilise SR-IOV pour fournir des performances réseau élevées (faible latence, haute bande passante). Activé via ENA (Elastic Network Adapter) sur les instances compatibles (types modernes comme m5, c5)","C. Enhanced Networking nécessite une configuration réseau spéciale dans le VPC","D. Enhanced Networking est uniquement pour les instances dédiées (Dedicated Hosts)"],
    answer: 1,
    exp: "Enhanced Networking avec ENA (Elastic Network Adapter) : disponible sur les instances modernes (m5, c5, r5, etc.) avec l'AMI Amazon Linux 2+. Jusqu'à 100 Gbps de bande passante, faible latence via SR-IOV (Single Root I/O Virtualization). Vérifie si activé : modinfo ena (Linux). Pour les anciens types d'instances : Intel 82599 VF (ixgbevf) pour 10 Gbps. ENA est généralement activé par défaut sur les AMIs récentes."
  },
  {
    id: "aws-soa-c03-j13-33",
    q: "Qu'est-ce que le 'VPC Sharing' via AWS Resource Access Manager (RAM) ?",
    choices: ["A. Partager un VPC entier avec un autre compte","B. Partager des subnets spécifiques d'un VPC (VPC Owner) avec d'autres comptes (Participants) dans la même organisation — les participants déploient des ressources dans les subnets partagés mais le VPC reste géré par le Owner","C. VPC Sharing est identique à VPC Peering","D. VPC Sharing nécessite une connexion Direct Connect"],
    answer: 1,
    exp: "VPC Sharing (RAM) : partage des subnets de votre VPC avec d'autres comptes AWS dans la même organisation. Le compte 'Owner' garde le contrôle du VPC, subnets, routes, NACLs, IGW. Les comptes 'Participants' lancent leurs instances dans les subnets partagés mais ne modifient pas la configuration réseau. Avantages : un seul VPC centralisé, économies de coûts (moins de NAT Gateways, etc.)."
  },
  {
    id: "aws-soa-c03-j13-34",
    q: "Comment optimiser les coûts de transfert de données avec Amazon CloudFront ?",
    choices: ["A. Utiliser des origines dans des régions éloignées","B. Les transferts entre l'origine AWS (S3, ALB dans la même région que la distribution) et CloudFront sont gratuits. Les transferts CloudFront → internet sont moins chers que les transferts directs depuis EC2/S3","C. CloudFront est toujours plus cher que les transferts directs","D. Désactiver CloudFront pour réduire les coûts de transfert"],
    answer: 1,
    exp: "Optimisation des coûts avec CloudFront : 1) Transfert S3/ALB/EC2 → CloudFront origin : GRATUIT (si dans la même région). 2) CloudFront → internet : moins cher que EC2/ALB → internet (~50% moins cher pour de gros volumes). 3) Price Class : choisir un sous-ensemble d'edge locations (Price Class 100 = moins cher, US/Europe uniquement). 4) Cache maximisé = moins d'origin requests."
  },
  {
    id: "aws-soa-c03-j13-35",
    q: "Qu'est-ce que l'AWS API Gateway 'VPC Link' et quel cas d'usage couvre-t-il ?",
    choices: ["A. Un VPN entre API Gateway et un VPC","B. VPC Link permet à API Gateway d'accéder à des ressources privées dans un VPC (NLB interne) — pour exposer des services internes via une API sécurisée sans les rendre publics","C. VPC Link remplace les VPC Endpoints pour API Gateway","D. VPC Link est uniquement pour les API REST, pas HTTP"],
    answer: 1,
    exp: "API Gateway VPC Link : intègre un API Gateway (public ou private) avec des backends VPC privés. Flux : Client → API Gateway (public) → VPC Link → NLB (privé) → EC2/ECS dans le VPC. Sans VPC Link, API Gateway ne peut accéder qu'à des endpoints publics. Avec VPC Link, les backends restent entièrement privés (pas d'IGW, pas d'IP publique sur EC2)."
  },
  {
    id: "aws-soa-c03-j13-36",
    q: "Quelle est la différence entre 'HTTP API Gateway' et 'REST API Gateway' en termes de fonctionnalités et coûts ?",
    choices: ["A. HTTP API est plus récent, moins cher (~70%), plus performant mais avec moins de fonctionnalités (pas de cache, pas de modèles de requête/réponse, pas de WAF natif direct). REST API : plus de fonctionnalités","B. Les deux sont identiques — différence uniquement de terminologie","C. REST API est toujours moins cher que HTTP API","D. HTTP API supporte toutes les fonctionnalités de REST API"],
    answer: 0,
    exp: "HTTP API (API GW v2) : latence plus basse (~1ms), 71% moins cher que REST API, support WebSocket, OIDC/JWT Auth, VPC Links. Pas de : cache de réponses, transformation de requêtes (mapping templates), clés d'API, WAF direct (possible via CloudFront). REST API (v1) : toutes les fonctionnalités avancées. Choisir HTTP API pour les nouveaux projets si les features REST ne sont pas requises."
  },
  {
    id: "aws-soa-c03-j13-37",
    q: "Comment AWS CloudFront 'Lambda@Edge' diffère-t-il de 'CloudFront Functions' ?",
    choices: ["A. Les deux sont identiques","B. Lambda@Edge : Node.js/Python, run en régions AWS (~13), plus de mémoire/durée, accès aux services AWS. CloudFront Functions : JavaScript natif, run aux edge locations (400+), sub-milliseconde, moins cher, pour transformations légères","C. CloudFront Functions supportent Python","D. Lambda@Edge n'est disponible qu'avec Shield Advanced"],
    answer: 1,
    exp: "Lambda@Edge vs CloudFront Functions : Lambda@Edge : fonctions complètes (Node.js, Python), plus de mémoire (128MB-10GB), durée max 30s (origin request/response), peut appeler DynamoDB, Secrets Manager, etc. Run dans 13 régions AWS. CloudFront Functions : JavaScript ultra-rapide au edge (<1ms), sub-milliseconde, 10ms max, 2 MB max, pour : header manipulation, URL rewrite, A/B testing. 1/6ème du coût de Lambda@Edge."
  },
  {
    id: "aws-soa-c03-j13-38",
    q: "Qu'est-ce que l'AWS App Mesh et comment améliore-t-il la gestion des microservices ?",
    choices: ["A. Un service de monitoring réseau","B. Un service mesh qui standardise la communication entre microservices : contrôle du trafic (canary, circuit breaker, retry), observabilité (traces X-Ray, métriques), mutual TLS — via le proxy Envoy injecté","C. App Mesh remplace ALB pour le routage des microservices","D. App Mesh est uniquement pour EKS"],
    answer: 1,
    exp: "AWS App Mesh : service mesh basé sur Envoy. Fournit : 1) Contrôle du trafic : canary releases, circuit breaker, retry policies, timeout. 2) Observabilité : traces distribuées (X-Ray), métriques CloudWatch. 3) mTLS (mutual TLS) entre services. Sans modifier le code applicatif (Envoy est injecté). Fonctionne avec EC2, ECS, EKS, Fargate."
  },
  {
    id: "aws-soa-c03-j13-39",
    q: "Comment AWS Route 53 'Traffic Flow' simplifie-t-il la gestion de politiques de routage complexes ?",
    choices: ["A. Traffic Flow accélère la résolution DNS","B. Traffic Flow est un éditeur visuel qui permet de créer des politiques de routage complexes combinant plusieurs types (latency, geolocation, weighted, failover) et de les versionner — créé une 'Traffic Policy' réutilisable","C. Traffic Flow est identique à les routing policies normales","D. Traffic Flow n'est disponible qu'avec Route 53 Resolver"],
    answer: 1,
    exp: "Route 53 Traffic Flow : éditeur visuel de politiques de routage. Permet de combiner plusieurs types de routing en arbre (ex: Geolocation → divide par continent → Latency → choisir la région la plus proche dans ce continent → Weighted → A/B test entre versions). La policy peut être versionnée et appliquée à plusieurs records DNS."
  },
  {
    id: "aws-soa-c03-j13-40",
    q: "Quelle est la différence entre AWS WAF 'Count' mode et 'Block' mode pour les règles ?",
    choices: ["A. Les deux bloquent les requêtes malveillantes","B. Count : comptabilise les requêtes qui correspondent à la règle sans les bloquer — utile pour tester une nouvelle règle avant de l'activer en production. Block : bloque les requêtes correspondantes","C. Count mode est plus rapide que Block mode","D. Count mode n'est disponible que pour les Managed Rules"],
    answer: 1,
    exp: "WAF Rule Actions : Count = enregistre les requêtes correspondantes dans les métriques/logs sans bloquer. Utile pour : tester si une règle cause des faux positifs avant activation. Block = retourne HTTP 403 pour les requêtes correspondantes. Workflow recommandé : d'abord en Count mode (1-2 semaines), analyser les logs pour les faux positifs, puis passer en Block mode."
  },
  {
    id: "aws-soa-c03-j13-41",
    q: "Comment configurer 'AWS CloudFront Signed URLs' pour protéger l'accès à des contenus privés ?",
    choices: ["A. Les Signed URLs CloudFront ne protègent que les objets S3","B. Créer un CloudFront Key Group avec une paire de clés RSA. L'application génère une Signed URL (avec expiration, IP restriction optionnelle) signée avec la clé privée. CloudFront valide la signature avant de livrer le contenu","C. Les Signed URLs sont uniquement pour les fichiers vidéo","D. CloudFront Signed URLs nécessitent un certificat SSL personnalisé"],
    answer: 1,
    exp: "CloudFront Signed URLs : 1) Créer un Key Group (clé RSA publique dans CloudFront). 2) L'application backend génère une Signed URL avec : ressource, expiration, IP optionnelle, signée avec la clé privée. 3) L'utilisateur accède via la Signed URL. 4) CloudFront vérifie la signature — refuse si invalide ou expirée. Utilisation : vidéos premium, téléchargements payants, contenus personnalisés."
  },
  {
    id: "aws-soa-c03-j13-42",
    q: "Qu'est-ce que l'AWS Route 53 'Private Hosted Zone' et quand est-elle utilisée ?",
    choices: ["A. Une zone DNS accessible uniquement depuis des IPs spécifiques","B. Une zone DNS résolue uniquement depuis des VPCs associés — pour les noms internes (db.internal, api.internal) non visibles depuis internet","C. Une zone DNS privée est identique à une zone publique mais plus chère","D. Les Private Hosted Zones ne supportent que les records A et AAAA"],
    answer: 1,
    exp: "Private Hosted Zone : zone DNS accessible uniquement depuis les VPCs associés (même compte ou cross-compte). Les enregistrements (db.internal → IP privée RDS) ne sont visibles que depuis les VPCs associés. Résolution : Route 53 Resolver DNS de chaque VPC (169.254.169.253) consulte les zones privées associées. Utile pour : noms internes, remplacer /etc/hosts, service discovery."
  },
  {
    id: "aws-soa-c03-j13-43",
    q: "Comment AWS 'Network Load Balancer' préserve-t-il l'adresse IP source du client ?",
    choices: ["A. NLB modifie l'IP source en faveur de son IP","B. NLB fonctionne au niveau TCP — préserve l'IP source originale du client pour les cibles EC2. Les cibles voient directement l'IP du client dans les logs. Avec ALB, l'IP source est celle de l'ALB (l'IP client est dans X-Forwarded-For)","C. Les deux ALB et NLB préservent l'IP source","D. NLB ne préserve l'IP source que si activé dans la configuration"],
    answer: 1,
    exp: "NLB TCP passthrough : pour EC2 targets avec IP ou instance target type, NLB préserve l'IP source originale du client (le paquet TCP n'est pas modifié niveau source IP). Les instances voient l'IP du client dans les logs serveur. ALB (HTTP): l'IP source du paquet = l'IP de l'ALB. L'IP réelle du client est dans le header HTTP 'X-Forwarded-For'. Exception : si NLB cible un ALB, ALB utilise alors X-Forwarded-For."
  },
  {
    id: "aws-soa-c03-j13-44",
    q: "Quelle est la différence entre 'Route 53 Resolver DNS Firewall' et 'AWS Network Firewall DNS inspection' ?",
    choices: ["A. Les deux sont identiques","B. Route 53 Resolver DNS Firewall : filtre les requêtes DNS depuis les instances VPC (bloque les domaines malveillants/C&C par nom de domaine). Network Firewall DNS : inspection du trafic DNS au niveau réseau (DPI sur port 53)","C. Network Firewall DNS est plus précis que R53 DNS Firewall","D. R53 Resolver DNS Firewall s'applique à tout le trafic internet, pas uniquement le DNS"],
    answer: 1,
    exp: "Route 53 Resolver DNS Firewall : filtrage DNS au niveau applicatif — bloque les résolutions vers des domaines malveillants (liste Threat Intelligence, AWS Managed Domain Lists). Prévient les communications C&C et l'exfiltration DNS. Network Firewall avec DNS inspection : DPI sur le protocole DNS. Les deux sont complémentaires. R53 DNS FW est plus facile à gérer pour le filtrage par nom de domaine."
  },
  {
    id: "aws-soa-c03-j13-45",
    q: "Comment implémenter un 'Service Discovery' pour les microservices dans AWS sans Registry externe ?",
    choices: ["A. Utiliser les IPs statiques des services","B. AWS Cloud Map : service registry managé qui enregistre automatiquement les endpoints des services (ECS tasks, EC2, etc.) et fournit des endpoints DNS ou API pour la découverte — intégré nativement avec ECS","C. Les microservices doivent utiliser un Consul externe","D. Route 53 Private Zones avec enregistrements manuels"],
    answer: 1,
    exp: "AWS Cloud Map : service discovery managé. Flux : 1) Définir un 'namespace' (ex: corp.internal). 2) Enregistrer des 'services' (ex: payments). 3) Endpoints (instances/tasks ECS) s'enregistrent automatiquement avec Cloud Map. 4) Les consumers découvrent les endpoints via DNS (payments.corp.internal → IPs des tasks saines) ou API (ListInstances). Intégration ECS : registration automatique à la création du task."
  },
  {
    id: "aws-soa-c03-j13-46",
    q: "Qu'est-ce que l'AWS 'PrivateLink pour S3' et comment diffère-t-il du Gateway Endpoint S3 ?",
    choices: ["A. Les deux sont identiques","B. Gateway Endpoint : gratuit, route table uniquement, ne supporte pas Direct Connect/VPN. Interface Endpoint (PrivateLink) pour S3 : payant, ENI dans le subnet, accessible depuis on-premise via DX/VPN, DNS privé","C. Gateway Endpoint est plus sécurisé que PrivateLink","D. PrivateLink pour S3 nécessite une configuration DNS spéciale sur S3"],
    answer: 1,
    exp: "Deux types d'endpoints S3 : Gateway Endpoint (gratuit) : entrée dans la route table, accessible uniquement depuis le VPC (pas depuis on-premise via DX/VPN). Interface Endpoint (PrivateLink, $7.3/mois) : ENI dans votre subnet, IP privée, accessible depuis on-premise via Direct Connect ou VPN — le trafic S3 on-premise ne passe jamais par internet."
  },
  {
    id: "aws-soa-c03-j13-47",
    q: "Comment configurer l'authentification mTLS (mutual TLS) sur API Gateway ?",
    choices: ["A. API Gateway ne supporte pas mTLS","B. Configurer 'Mutual TLS Authentication' sur API Gateway avec un truststore S3 (liste des certificats CA clients autorisés) — les clients doivent présenter un certificat valide signé par une CA de la truststore","C. mTLS nécessite un WAF attaché à API Gateway","D. mTLS est uniquement supporté sur les API REST, pas HTTP"],
    answer: 1,
    exp: "mTLS sur API Gateway : 1) Créer un truststore (fichier PEM des certificats CA dans S3). 2) Configurer 'Mutual TLS Authentication' sur le domaine custom (Custom Domain Name). 3) Les clients doivent présenter un certificat client signé par une CA de confiance. 4) API Gateway valide le certificat client. Utile pour : IoT, B2B APIs, haute sécurité machine-to-machine."
  },
  {
    id: "aws-soa-c03-j13-48",
    q: "Qu'est-ce que l'AWS 'Network Address Usage (NAU)' et pourquoi est-ce important pour la planification VPC ?",
    choices: ["A. Une métrique de facturation pour le nombre d'adresses IP utilisées","B. Une métrique qui mesure l'utilisation des ressources réseau d'un VPC (instances, subnets, peering, etc.) — limite de 64,000 NAUs par VPC par défaut. Utile pour planifier la scalabilité du VPC","C. NAU est identique au CIDR d'un VPC","D. NAU s'applique uniquement aux grands VPCs (>1000 instances)"],
    answer: 1,
    exp: "Network Address Usage (NAU) : mesure l'utilisation des ressources réseau dans un VPC. Chaque ressource (instance EC2, ENI, peering, endpoint) consomme des NAUs. Limite : 64,000 NAUs par VPC par défaut. Utile pour : planifier la croissance du VPC, éviter de dépasser les limites. Surveiller avec CloudWatch metric 'NetworkAddressUsage'. Augmentation possible via demande de quota."
  },
  {
    id: "aws-soa-c03-j13-49",
    q: "Comment déboguer des problèmes de latence élevée sur une application derrière un ALB ?",
    choices: ["A. Redémarrer les instances EC2 backend","B. Analyser les ALB Access Logs (target_processing_time, request_processing_time, response_processing_time), CloudWatch métriques ALB (TargetResponseTime), X-Ray pour les traces distribuées","C. Augmenter la taille des instances EC2 immédiatement","D. Remplacer ALB par NLB"],
    answer: 1,
    exp: "Débogage latence ALB : 1) ALB Access Logs (activables dans S3) : campos target_processing_time (latence backend), request_processing_time (latence ALB), client_ip. Athena pour analyser. 2) CloudWatch : TargetResponseTime (P50, P95, P99), RequestCount. 3) X-Ray : traces distribuées pour identifier quelle partie de l'application est lente. 4) Identifier si latence = ALB lui-même ou backend."
  },
  {
    id: "aws-soa-c03-j13-50",
    q: "Qu'est-ce que le 'AWS Gateway Load Balancer Endpoint' et quel est son rôle dans l'architecture de sécurité ?",
    choices: ["A. Un endpoint pour accéder à AWS S3 via le GWLB","B. Un VPC Interface Endpoint vers un GWLB Endpoint Service — permet de router le trafic VPC vers des appliances de sécurité tierces dans un autre VPC sans VPC Peering","C. GWLB Endpoint remplace NAT Gateway","D. GWLB Endpoint est identique aux Interface Endpoints normaux"],
    answer: 1,
    exp: "GWLB Endpoint (GWLBe) : permet aux VPCs consommateurs de rediriger leur trafic vers les appliances de sécurité dans un VPC dédié 'Security VPC'. Route Table : 0.0.0.0/0 → GWLBe (au lieu d'IGW). Le GWLBe envoie le trafic au GWLB dans le Security VPC → appliance (inspection) → retour. Architecture centralisée de sécurité réseau sans modifier les VPCs applicatifs."
  }
]=[
{id:"aws-soa-c03-j13-1",q:"Qu'est-ce qu'AWS Transit Gateway et quel problème résout-il ?",choices:["A. Transit Gateway remplace les Internet Gateways","B. Transit Gateway est un hub réseau central permettant de connecter plusieurs VPCs et réseaux on-premises sans avoir besoin d'un maillage de VPC Peerings individuels","C. Transit Gateway est uniquement pour connecter des régions AWS différentes","D. Transit Gateway remplace Direct Connect"],answer:1,exp:"Transit Gateway : hub central (routeur cloud régional) permettant d'attacher des VPCs, VPN connections, et Direct Connect Gateways. Au lieu de N*(N-1)/2 VPC Peerings pour N VPCs, vous avez N attachments vers le TGW. Supporte le routage transitif (A peut communiquer avec C via TGW), plusieurs route tables pour l'isolation, multicast, et peut être partagé via RAM."},
{id:"aws-soa-c03-j13-2",q:"Quelle est la différence entre AWS Site-to-Site VPN et AWS Direct Connect ?",choices:["A. Les deux offrent exactement les mêmes performances","B. Site-to-Site VPN : tunnel IPsec chiffré via internet, rapide à déployer (minutes), bandwidth limitée. Direct Connect : connexion physique dédiée (10/100 Gbps), latence faible et consistante, plus cher et long à déployer (semaines/mois)","C. Direct Connect est toujours moins cher que VPN","D. Site-to-Site VPN ne peut pas se connecter à AWS Organizations"],answer:1,exp:"Site-to-Site VPN : tunnel IPsec via internet public, déployable en minutes, 1.25 Gbps par tunnel (plusieurs tunnels pour plus), coût faible. Indirect Connect : circuit dédié (via partenaires), 1-100 Gbps, latence constante (<10ms), idéal pour les workloads sensibles à la latence ou les transferts volumineux, prend des semaines, coût mensuel élevé. Souvent utilisés ensemble : Direct Connect principal + VPN comme backup."},
{id:"aws-soa-c03-j13-3",q:"Comment AWS Transit Gateway gère-t-il l'isolation entre VPCs dans différents environnements (prod, dev, staging) ?",choices:["A. Les VPCs attachés à un TGW peuvent toujours communiquer entre eux","B. Via les Transit Gateway Route Tables : créer plusieurs route tables (une par environnement), associer les VPC attachments à leur route table, et définir les routes autorisées pour contrôler qui peut parler à qui","C. L'isolation nécessite plusieurs Transit Gateways","D. Les Security Groups suffisent pour l'isolation inter-VPC via TGW"],answer:1,exp:"TGW Route Tables pour l'isolation : chaque attachment VPC peut être associé à une ou plusieurs route tables TGW. Pour l'isolation prod/dev : 1) Route table prod : route uniquement vers les VPCs prod et services partagés. 2) Route table dev : route uniquement vers les VPCs dev. Les VPCs prod et dev ne peuvent pas communiquer. Plusieurs route tables sur un seul TGW remplacent plusieurs TGW."},
{id:"aws-soa-c03-j13-4",q:"Qu'est-ce qu'AWS Direct Connect Gateway et comment diffère-t-il de Direct Connect seul ?",choices:["A. Direct Connect Gateway est identique à Direct Connect","B. Direct Connect Gateway permet d'utiliser une connexion Direct Connect pour accéder à des VPCs dans plusieurs régions AWS ou plusieurs comptes AWS depuis un seul circuit physique","C. Direct Connect Gateway ajoute uniquement le chiffrement","D. Direct Connect Gateway est uniquement pour les connexions inter-régions"],answer:1,exp:"Direct Connect seul : connexion physique → une région. Direct Connect Gateway (DXG) : abstraction permettant d'accéder à des VPCs dans plusieurs régions AWS depuis une seule connexion physique Direct Connect. Transit VIF → DXG → Transit Gateway (pour accéder à plusieurs VPCs dans une région). Private VIF → DXG → VGW (pour des VPCs dans différentes régions). Un circuit physique peut accéder à l'infrastructure mondiale."},
{id:"aws-soa-c03-j13-5",q:"Quelle est la différence entre un VIF (Virtual Interface) Private, Public et Transit pour Direct Connect ?",choices:["A. Les trois types de VIF sont identiques fonctionnellement","B. Private VIF : accès aux ressources privées dans les VPCs. Public VIF : accès aux services AWS publics (S3, DynamoDB) via adresses publiques. Transit VIF : connexion via Transit Gateway pour accéder à plusieurs VPCs","C. Public VIF expose les ressources VPC sur internet","D. Transit VIF est uniquement pour le transit inter-régions"],answer:1,exp:"Direct Connect VIFs : Private VIF → Virtual Private Gateway → accès aux instances dans un VPC (IPs privées). Public VIF → accès aux endpoints publics AWS (S3, DynamoDB, EC2 API, SES) depuis votre réseau on-premises via adresses publiques AWS. Transit VIF → Transit Gateway → accès à plusieurs VPCs attachés au TGW. Un seul circuit physique peut avoir plusieurs VIFs de différents types."},
{id:"aws-soa-c03-j13-6",q:"Comment AWS VPN CloudHub fonctionne-t-il pour la connectivité hub-and-spoke ?",choices:["A. VPN CloudHub est un service distinct de Site-to-Site VPN","B. En attachant plusieurs connexions VPN à un même Virtual Private Gateway, les sites distants peuvent communiquer entre eux via AWS comme hub central","C. VPN CloudHub nécessite Transit Gateway","D. VPN CloudHub n'est pas compatible avec Direct Connect"],answer:1,exp:"VPN CloudHub : patron hub-and-spoke utilisant un Virtual Private Gateway (VGW). Plusieurs sites on-premises connectés en VPN au même VGW peuvent communiquer entre eux via AWS. BGP dynamique requis pour le routage inter-sites. Avantage : pas de connexion directe entre les sites. Coût : vous payez les connexions VPN + transfer de données. Peut aussi être réalisé avec Transit Gateway pour plus de flexibilité."},
{id:"aws-soa-c03-j13-7",q:"Un administrateur réseau veut s'assurer que le trafic entre deux VPCs peereds ne passe pas par internet. Comment le vérifier ?",choices:["A. VPC Peering utilise toujours internet — c'est son fonctionnement","B. VPC Peering achemine le trafic sur le réseau privé d'AWS. Vérifier que les routes tables pointent vers le peering connection ID (pcx-xxx) et non vers un IGW","C. Activer VPC Flow Logs pour voir si le trafic passe par l'internet","D. Contacter AWS pour confirmer le routage privé"],answer:1,exp:"VPC Peering utilise TOUJOURS le réseau backbone privé AWS — le trafic ne passe jamais par internet public. Pour vérifier la configuration correcte : route table de la source doit avoir une route vers le CIDR de destination pointant vers pcx-xxx (peering connection ID), et vice versa. VPC Flow Logs montreront le trafic entre les deux VPCs avec les IPs privées."},
{id:"aws-soa-c03-j13-8",q:"Qu'est-ce qu'AWS PrivateLink (VPC Endpoint Services) pour les fournisseurs de services ?",choices:["A. PrivateLink est uniquement pour accéder aux services AWS","B. Un fournisseur de service peut exposer son application via un NLB comme un 'VPC Endpoint Service', permettant à d'autres comptes AWS d'y accéder via un Interface Endpoint dans leur propre VPC sans VPC Peering","C. PrivateLink nécessite le même compte AWS pour le fournisseur et le consommateur","D. PrivateLink est limité à 10 consommateurs par service"],answer:1,exp:"PrivateLink (Endpoint Services) : fournisseur crée un NLB dans son VPC, crée un VPC Endpoint Service dessus. Les consommateurs créent un Interface VPC Endpoint dans leur VPC → ENI dans leur subnet → connexion privée au service du fournisseur. Avantages : pas de chevauchement CIDR, le fournisseur garde le contrôle (accepte/refuse les connexions), scalable. Utilisé par AWS Marketplace et les SaaS providers."},
{id:"aws-soa-c03-j13-9",q:"Comment les Shared VPCs dans AWS Organizations fonctionnent-ils avec AWS RAM ?",choices:["A. Les Shared VPCs ne sont possibles que dans le même compte AWS","B. AWS RAM permet de partager des subnets d'un VPC central (account propriétaire) avec d'autres comptes (participants) dans la même Organisation, qui peuvent lancer des ressources dans ces subnets","C. Le partage de VPC nécessite VPC Peering","D. Les comptes participants peuvent modifier les routes tables des subnets partagés"],answer:1,exp:"Shared VPC avec AWS RAM : le compte propriétaire crée un VPC et partage des subnets spécifiques via RAM. Les comptes participants peuvent lancer des ressources (EC2, RDS, Lambda) dans ces subnets partagés. Le propriétaire conserve le contrôle des subnets, NACLs, routes. Les participants voient les subnets dans leur console. Avantage : réduction des VPCs, coût NAT Gateway partagé. Limitation : les participants ne peuvent pas modifier la config réseau."},
{id:"aws-soa-c03-j13-10",q:"Qu'est-ce que AWS Network Manager et comment aide-t-il dans la gestion des réseaux globaux ?",choices:["A. Network Manager remplace Route 53 pour la résolution DNS","B. Network Manager offre une visualisation centralisée et une gestion des réseaux globaux incluant les VPCs, Transit Gateways, connexions VPN, Direct Connect, et SD-WAN sur une carte mondiale","C. Network Manager est uniquement pour les connexions Direct Connect","D. Network Manager gère les Security Groups de manière centralisée"],answer:1,exp:"AWS Network Manager (Global Networks) : tableau de bord centralisé pour les réseaux globaux. Visualisation cartographique des Transit Gateways, VPCs, VPNs, Direct Connect. Monitoring de la santé réseau. Route Analyzer pour analyser les routes. Network Insights pour comprendre les flux. Intégration avec SD-WAN via les partenaires (Cisco, Viptela). Utile pour les architectures réseau hybrides complexes."},
{id:"aws-soa-c03-j13-11",q:"Qu'est-ce que l'accélérateur de réseau AWS Global Accelerator et comment diffère-t-il de CloudFront ?",choices:["A. Les deux servent les mêmes cas d'usage","B. Global Accelerator : accélère le trafic TCP/UDP en utilisant le réseau backbone AWS depuis les edge locations jusqu'aux régions. Idéal pour les applications non-HTTP. CloudFront : CDN pour le cache de contenu HTTP/HTTPS","C. CloudFront est plus rapide que Global Accelerator","D. Global Accelerator ne prend en charge que les adresses IPv4"],answer:1,exp:"Global Accelerator : 2 Anycast static IPs globales, le trafic TCP/UDP entre dans le réseau AWS dès l'edge location la plus proche via AnyCast IP, bascule automatiquement entre régions (failover). Idéal pour : gaming, IoT, VoIP, applications TCP non-HTTP. CloudFront : CDN, cache les réponses HTTP, edge locations, Signed URLs/OAC, pour le cache de contenu statique/dynamique. Use case distinct mais complémentaire."},
{id:"aws-soa-c03-j13-12",q:"Comment configurer une connexion Direct Connect résiliente ?",choices:["A. Une seule connexion Direct Connect est suffisante pour la production","B. Déployer deux connexions physiques dans deux locations Direct Connect différentes, avec des Virtual Interfaces vers la même ressource. Utiliser un VPN S2S comme backup supplémentaire","C. Direct Connect est automatiquement redondant","D. La résilience Direct Connect nécessite deux régions AWS"],answer:1,exp:"Haute résilience Direct Connect : niveau 1 (high) : 2 connexions physiques dans 2 locations DX (deux bâtiments différents). Niveau 2 (highest) : 2 connexions par location = 4 connexions totales. Toujours avoir un VPN S2S de backup (moins de débit mais connexion automatique si DX tombe). Les connexions doivent être dans le même VGW ou DXG. BGP BFD pour la détection rapide des défaillances."},
{id:"aws-soa-c03-j13-13",q:"Qu'est-ce que l'AWS Client VPN et pour quels cas d'usage est-il recommandé ?",choices:["A. AWS Client VPN remplace Site-to-Site VPN pour les connexions bureau-à-bureau","B. AWS Client VPN est un service VPN managé permettant aux utilisateurs individuels de se connecter en mode remote access depuis leur ordinateur personnel vers les VPCs AWS ou les réseaux on-premises","C. AWS Client VPN est uniquement pour les connexions Linux","D. AWS Client VPN nécessite un hardware VPN physique dans votre réseau"],answer:1,exp:"AWS Client VPN : VPN access pour les utilisateurs finaux (remote access VPN), utilise OpenVPN. Authentification : Active Directory, SAML 2.0, certificate-based. Les utilisateurs téléchargent le fichier de config et utilisent un client VPN compatible. Se connecte à un VPC subnet et peut router vers d'autres VPCs via peering ou TGW. Facturation par heure d'association d'endpoint + heure de connexion client."},
{id:"aws-soa-c03-j13-14",q:"Comment AWS Route 53 Resolver Endpoints permettent-ils la résolution DNS hybride ?",choices:["A. Les Resolver Endpoints nécessitent Direct Connect","B. Inbound Endpoints : permettent aux réseaux on-premises d'envoyer des requêtes DNS vers AWS. Outbound Endpoints : permettent aux instances VPC d'envoyer des requêtes DNS vers les serveurs DNS on-premises pour les domaines privés","C. Les Resolver Endpoints remplacent BIND/Windows DNS","D. Les Resolver Endpoints ne fonctionnent qu'avec des Private Hosted Zones"],answer:1,exp:"Route 53 Resolver Endpoints : Inbound Endpoint (ENIs dans les subnets VPC) → les serveurs DNS on-premises font des forward queries vers ces IPs pour résoudre les noms AWS privés. Outbound Endpoint (ENIs dans les subnets VPC) + Resolver Rules → les instances VPC envoient des forward queries vers les DNS on-premises pour les domaines privés (ex: corp.example.com). Résolution DNS bidirectionnelle pour les architectures hybrides."},
{id:"aws-soa-c03-j13-15",q:"Qu'est-ce qu'un Attachment dans AWS Transit Gateway et quels types existent ?",choices:["A. Un attachment TGW est uniquement pour les VPCs","B. Types d'attachments TGW : VPC, Site-to-Site VPN, Direct Connect Gateway, Transit Gateway Peering (inter-régions ou inter-comptes), et Connect (SD-WAN)","C. Un TGW peut avoir au maximum 5 attachments","D. Les attachments TGW nécessitent des permissions IAM spéciales uniquement pour les VPCs"],answer:1,exp:"Transit Gateway Attachment types : 1) VPC Attachment : connecte un VPC, nécessite des subnets dans chaque AZ souhaitée. 2) VPN Attachment : Customer Gateway + VPN connection. 3) Direct Connect Gateway Attachment : via Transit VIF. 4) TGW Peering : connecte deux TGW dans différentes régions ou comptes. 5) Connect Attachment : connecte des appareils SD-WAN via GRE. Chaque attachment est associé à une ou plusieurs route tables TGW."},
{id:"aws-soa-c03-j13-16",q:"Comment implémenter une architecture hub-and-spoke avec Transit Gateway pour l'inspection du trafic ?",choices:["A. L'inspection du trafic avec TGW n'est pas possible sans solutions tierces","B. Créer un VPC d'inspection (firewall) attaché au TGW avec une route table dédiée. Router tout le trafic vers le VPC d'inspection avant qu'il atteigne la destination finale. Utiliser AWS Network Firewall ou des appliances tierces","C. L'inspection du trafic se fait uniquement dans les Security Groups","D. Transit Gateway inspecte automatiquement tout le trafic"],answer:1,exp:"Hub-and-spoke avec inspection TGW : 1) VPC spoke attaché à TGW avec route table pointant vers VPC inspection (0.0.0.0/0 → TGW). 2) VPC inspection avec AWS Network Firewall ou appliance virtuelle NLB, attaché à TGW. 3) Route table TGW pour VPC inspection : routes vers les spokes. Appliance Mode sur l'attachment du VPC inspection assure que le trafic reste dans la même AZ (essentiel pour les appliances stateful)."},
{id:"aws-soa-c03-j13-17",q:"Qu'est-ce que l'AWS Accelerated Site-to-Site VPN et comment améliore-t-il les performances VPN ?",choices:["A. Accelerated VPN utilise des tunnels VPN plus larges","B. Accelerated S2S VPN utilise AWS Global Accelerator pour acheminer le trafic VPN via le réseau backbone AWS depuis les edge locations, réduisant la latence par rapport au VPN sur internet public","C. Accelerated VPN ne fonctionne qu'avec Direct Connect","D. Accelerated VPN utilise des protocoles de compression améliorés"],answer:1,exp:"Accelerated Site-to-Site VPN : activé via Transit Gateway (pas avec Virtual Private Gateway). Le trafic VPN entre dans le réseau AWS via les edge locations AWS Global Accelerator au lieu de traverser tout l'internet public. Améliore la latence et la stabilité pour les connexions VPN vers des régions AWS distantes. Coût supplémentaire par rapport au VPN standard (Global Accelerator pricing)."},
{id:"aws-soa-c03-j13-18",q:"Comment déboguer un problème de routage entre un VPC et un réseau on-premises via Direct Connect ?",choices:["A. Les problèmes Direct Connect nécessitent toujours l'intervention d'AWS Support","B. Vérifier la table de routage BGP (routes annoncées/reçues), vérifier les VIF Virtual Interfaces, les routes dans le VPC (VGW route propagation activée), et les routes on-premises. Utiliser Network Manager Route Analyzer","C. Redémarrer la connexion Direct Connect résout la plupart des problèmes","D. Les problèmes de routage Direct Connect sont toujours côté client on-premises"],answer:1,exp:"Debugging Direct Connect routing : 1) VIF status : vérifier que le BGP session est UP dans la console Direct Connect. 2) Routes BGP reçues/annoncées (AWS annonce le CIDR VPC, vous annoncez votre CIDR on-premises). 3) Route Propagation : activée sur le VGW pour propager les routes Direct Connect vers les route tables VPC. 4) NACLs/SGs sur les instances. 5) Route Analyzer dans Network Manager pour visualiser le chemin. 6) VPC Flow Logs pour voir si le trafic arrive."},
{id:"aws-soa-c03-j13-19",q:"Qu'est-ce que le BGP avec Direct Connect et pourquoi est-il important ?",choices:["A. BGP est optionnel pour Direct Connect — les routes statiques suffisent","B. BGP est obligatoire pour Direct Connect. Il échange les routes entre AWS et votre réseau (AWS annonce les CIDRs VPC, vous annoncez vos CIDRs on-premises). BGP AS Path Prepending et Local Preference contrôlent le routage préférentiel","C. BGP n'est disponible que pour les connexions Direct Connect 100 Gbps","D. Direct Connect utilise OSPF, pas BGP"],answer:1,exp:"BGP avec Direct Connect : obligatoire (BGP AS = 64512 par défaut pour AWS ou votre propre ASN). AWS annonce les préfixes VPC (ou AWS public si Public VIF). Vous annoncez vos préfixes on-premises. Mécanismes de contrôle de routage : AS Path Prepending (rendre un chemin moins préférable), Local Preference (préférer Direct Connect vs VPN), MED (Multi-Exit Discriminator pour influencer la préférence AWS). BFD pour la détection rapide des pannes (minimum 300ms/3 paquets)."},
{id:"aws-soa-c03-j13-20",q:"Dans une architecture multi-région AWS, comment configurer le failover automatique entre deux régions connectées via Transit Gateway Peering ?",choices:["A. Transit Gateway Peering offre un failover automatique entre régions","B. Utiliser Route 53 Health Checks avec Failover Routing Policy pour basculer le DNS, combiné avec des routes TGW entre régions configurées manuellement. Le failover DNS est la couche de décision principale","C. Le failover multi-régions nécessite AWS Global Accelerator exclusivement","D. Transit Gateway Inter-Region Peering ne supporte pas le failover"],answer:1,exp:"Failover multi-région avec TGW : 1) TGW Peering inter-régions établit la connectivité. 2) Route 53 Health Checks sur les endpoints applicatifs de chaque région. 3) Failover Routing Policy : région primaire (Primary) + région secondaire (Secondary). 4) En cas de défaillance détectée par Health Check : Route 53 bascule vers la région secondaire. 5) Les routes TGW restent configurées pour permettre le trafic cross-région dès que la failover DNS est effectuée."}
];

// ── Jour 14 — WAF, Shield, Network Firewall, CloudFront security ───────────────
window.QDATA[14,
  {
    id: "aws-soa-c03-j14-21",
    q: "Qu'est-ce que l'AWS Global Accelerator 'Accelerated Site-to-Site VPN' ?",
    choices: ["A. Un VPN qui utilise le backbone AWS pour améliorer les performances de la connexion site-to-site","B. Un VPN entre deux régions AWS uniquement","C. Global Accelerator ne s'intègre pas avec VPN","D. Accelerated VPN utilise des IP dédiées par client"],
    answer: 0,
    exp: "Accelerated Site-to-Site VPN : utilise le backbone mondial AWS (Global Accelerator) pour le trafic VPN au lieu de l'internet public. Le trafic entre le routeur on-premise et AWS entre dans le backbone AWS dès le PoP le plus proche. Réduit la latence et la gigue de la connexion VPN. Utile pour les connexions VPN longue distance (US ↔ Asie). Coût supplémentaire par rapport au VPN standard."
  },
  {
    id: "aws-soa-c03-j14-22",
    q: "Comment implémenter une architecture de 'Content Personalization' avec CloudFront et Lambda@Edge ?",
    choices: ["A. CloudFront ne supporte pas la personnalisation du contenu","B. Lambda@Edge sur 'Origin Request' : modifie la requête vers l'origine basée sur les attributs du viewer (cookie, géolocalisation CloudFront, appareil). Lambda@Edge sur 'Viewer Response' : modifie les headers de réponse selon le viewer","C. La personnalisation nécessite un backend EC2 complet","D. CloudFront Functions suffisent pour toute personnalisation"],
    answer: 1,
    exp: "Content Personalization avec Lambda@Edge : 1) Origin Request : avant d'aller à l'origine, modifier l'URL basée sur CloudFront-Viewer-Country, device type (User-Agent), cookies A/B test → origin reçoit une requête personnalisée. 2) Viewer Response : ajouter des headers de personnalisation dans la réponse (Set-Cookie). CloudFront crée des caches séparés par variant (cache key include headers/cookies)."
  },
  {
    id: "aws-soa-c03-j14-23",
    q: "Quelle est la différence entre 'Route 53 Geolocation' et 'Geoproximity Routing' ?",
    choices: ["A. Les deux sont identiques","B. Geolocation : route basée sur le PAYS/CONTINENT/état US de l'appelant. Geoproximity : route vers la ressource géographiquement la plus proche avec un 'bias' configurable pour ajuster les zones d'influence","C. Geoproximity est plus précis que Geolocation","D. Geolocation supporte uniquement les continents"],
    answer: 1,
    exp: "Geolocation : routing strict par localisation (pays, continent, état US). Si le pays de l'appelant = FR → record FR. Geoproximity (Traffic Flow uniquement) : route vers la ressource la plus proche géographiquement, avec un 'bias' (-99 à +99) pour agrandir/réduire la zone d'influence d'une ressource. Bias positif = attire plus de trafic. Utile pour : distribuer la charge géographiquement de façon flexible."
  },
  {
    id: "aws-soa-c03-j14-24",
    q: "Comment surveiller la performance d'un AWS Direct Connect avec des métriques CloudWatch ?",
    choices: ["A. Direct Connect ne publie pas de métriques CloudWatch","B. Métriques DX dans CloudWatch : ConnectionBpsIngress/Egress (débit), ConnectionPpsIngress/Egress (paquets), ConnectionState (0/1), ConnectionLightLevelTx/Rx (signaux optiques)","C. Utiliser VPC Flow Logs pour monitorer Direct Connect","D. Ping la gateway Direct Connect pour monitorer la latence"],
    answer: 1,
    exp: "Métriques CloudWatch Direct Connect : ConnectionState (1=up, 0=down) → alarme pour détecter la perte de connexion. ConnectionBpsIngress/Egress → surveiller l'utilisation de la bande passante (alerter si proche du max). ConnectionLightLevelTx/Rx → signaux optiques (utile pour détecter les dégradations physiques avant une panne complète). Toutes disponibles dans la namespace AWS/DX."
  },
  {
    id: "aws-soa-c03-j14-25",
    q: "Qu'est-ce que le 'Route 53 Application Recovery Controller' (ARC) et quel problème résout-il ?",
    choices: ["A. Un service de monitoring de la santé des applications","B. Un service qui valide la préparation au failover inter-régions (Readiness Check) et permet un failover contrôlé et sûr via des 'routing controls' — pour les architectures multi-régions critiques","C. ARC remplace les Health Checks Route 53","D. ARC est uniquement pour les applications EKS"],
    answer: 1,
    exp: "Route 53 ARC : 1) Readiness Check : vérifie continuellement si la région secondaire est prête (ressources déployées, DB répliquée, capacité suffisante) avant d'autoriser le failover. 2) Routing Controls : switches pour basculer manuellement ou automatiquement le trafic entre régions. 3) Safety Rules : empêche les basculements qui mettraient le système dans un état non-sûr. Pour les applications avec RTO strict (<1 min)."
  },
  {
    id: "aws-soa-c03-j14-26",
    q: "Comment AWS CloudFront 'Continuous Deployment' aide-t-il à tester de nouvelles configurations ?",
    choices: ["A. CloudFront Continuous Deployment permet de tester une configuration staging sur un pourcentage du trafic production avant de déployer en production","B. Continuous Deployment de CloudFront est identique aux invalidations","C. CD CloudFront s'intègre uniquement avec CodePipeline","D. CloudFront ne supporte pas les déploiements canary"],
    answer: 0,
    exp: "CloudFront Continuous Deployment : crée une distribution 'staging' liée à la production. Route X% du trafic vers la staging (canary) ou utilise un header pour cibler les tests. Si les métriques sont bonnes, promouvoir la staging en production (atomic swap). Si problèmes, les requêtes reviennent à la production. Idéal pour : tester de nouvelles configurations CloudFront, nouvelles origines, Lambda@Edge."
  },
  {
    id: "aws-soa-c03-j14-27",
    q: "Quelle est la différence entre 'Connection-based' et 'Request-based' rate limiting sur AWS WAF ?",
    choices: ["A. Les deux sont identiques","B. Rate-based Rules WAF comptent les requêtes HTTP (pas les connexions TCP) par IP sur une fenêtre glissante de 5 minutes. Il n'y a pas de rate limiting basé sur les connexions TCP dans WAF","C. WAF peut limiter aussi bien les connexions que les requêtes","D. Rate limiting WAF est basé uniquement sur les tokens de session"],
    answer: 1,
    exp: "WAF Rate-based Rules : compte les requêtes HTTP par IP source (ou par header, query string, etc.) sur une fenêtre glissante de 5 minutes. Minimum : 100 requêtes. Si dépassé → Block ou Count. Évaluation toutes les ~30 secondes. Pas de tracking de connexions TCP. Pour le rate limiting de connexions TCP → utiliser Network Firewall ou des règles SG/NACL (moins granulaires)."
  },
  {
    id: "aws-soa-c03-j14-28",
    q: "Comment AWS CloudFront protège-t-il les origines S3 contre l'accès direct (bypass du CDN) ?",
    choices: ["A. Les buckets S3 peuvent être rendus privés avec des Security Groups","B. CloudFront Origin Access Control (OAC) : CloudFront obtient un service principal AWS pour signer les requêtes vers S3. La Bucket Policy S3 n'autorise que les requêtes signées par CloudFront OAC","C. Chiffrer S3 avec KMS empêche l'accès direct","D. Les buckets S3 derrière CloudFront sont publics par défaut"],
    answer: 1,
    exp: "Origin Access Control (OAC) remplace Origin Access Identity (OAI) : 1) Créer un OAC dans CloudFront. 2) Bucket Policy S3 : Allow GetObject uniquement pour aws:SourceArn = arn:aws:cloudfront::account:distribution/dist-id. 3) Le bucket S3 est PRIVÉ. 4) Seul CloudFront (via OAC signature SigV4) peut accéder au bucket. Les accès directs à S3 retournent 403. OAC supporte aussi les buckets S3 chiffrés avec KMS."
  },
  {
    id: "aws-soa-c03-j14-29",
    q: "Qu'est-ce que 'AWS Transit Gateway Connect' et quel cas d'usage couvre-t-il ?",
    choices: ["A. Une alternative aux connexions VPC Peering","B. TGW Connect permet d'attacher des appliances réseau SD-WAN (Cisco, VMware) ou des VPCs avec des protocoles GRE+BGP pour un routing dynamique entre les appliances et le TGW","C. TGW Connect remplace Direct Connect","D. TGW Connect est identique aux attachements VPC normaux"],
    answer: 1,
    exp: "TGW Connect : type d'attachement TGW qui utilise GRE (Generic Routing Encapsulation) pour connecter des appliances réseau SD-WAN ou des VPCs avec BGP dynamique. Use cases : 1) Appliances SD-WAN (Cisco, Meraki, VMware) dans un VPC → TGW via GRE+BGP. 2) Routing dynamique avancé avec BGP Communities. Jusqu'à 20 Gbps par Connect peer."
  },
  {
    id: "aws-soa-c03-j14-30",
    q: "Comment configurer CloudFront pour servir du contenu depuis plusieurs origines avec des règles de cache différentes ?",
    choices: ["A. CloudFront ne supporte qu'une seule origine par distribution","B. Créer plusieurs 'Cache Behaviors' dans la distribution CloudFront : chaque behavior a un path pattern (/images/* → S3, /api/* → ALB), une origine, et des paramètres de cache différents","C. Utiliser plusieurs distributions CloudFront pour plusieurs origines","D. Les cache behaviors nécessitent des sous-domaines séparés"],
    answer: 1,
    exp: "Cache Behaviors CloudFront : chaque distribution peut avoir plusieurs behaviors définis par path patterns. Exemple : /images/* → Origin S3 (TTL 1 an, compress=true). /api/* → Origin ALB (TTL 0, forward all headers/cookies). /* (default) → Origin principale (TTL 24h). CloudFront évalue les behaviors du plus spécifique au plus général. Chaque behavior a ses propres paramètres de cache, compression, Lambda@Edge."
  },
  {
    id: "aws-soa-c03-j14-31",
    q: "Qu'est-ce que l'AWS 'Managed Prefix List' et comment simplifie-t-il la gestion des Security Groups ?",
    choices: ["A. Une liste d'AMIs disponibles dans une région","B. Un ensemble d'adresses IP géré centralement — peut être référencé dans les Security Groups et Route Tables au lieu de maintenir des listes d'IPs individuellement. AWS gère des prefix lists pour CloudFront, S3, etc.","C. Les Managed Prefix Lists ne peuvent être créées que par AWS","D. Les Prefix Lists sont uniquement pour les NACLs"],
    answer: 1,
    exp: "Managed Prefix List : ensemble nommé de CIDRs IPv4/IPv6. Types : 1) Customer-managed : votre propre liste (ex: IPs bureaux) partageable via RAM. 2) AWS-managed : pl-xxxxx pour les IPs CloudFront, S3, DynamoDB, CodeBuild. Référencer dans Security Groups (inbound/outbound rules) ou Route Tables au lieu de maintenir des IPs individuelles. Mise à jour centralisée : modifier la prefix list → tous les SG/RT sont mis à jour automatiquement."
  },
  {
    id: "aws-soa-c03-j14-32",
    q: "Comment AWS Route 53 Resolver 'Inbound Endpoints' permettent-ils la résolution DNS depuis on-premise vers AWS ?",
    choices: ["A. Les serveurs on-premise résolvent automatiquement les noms AWS","B. Inbound Endpoints : crée des ENIs avec des IPs privées dans le VPC — les serveurs DNS on-premise configurent un conditional forwarder vers ces IPs pour les domaines AWS (ex: *.internal). La résolution est forwardée vers Route 53 Resolver","C. Les Inbound Endpoints nécessitent une adresse IP publique","D. Route 53 Resolver Inbound est identique au Outbound"],
    answer: 1,
    exp: "Route 53 Resolver Inbound Endpoints : crée des ENIs (2 ENIs dans 2 AZ différentes pour la HA) dans le VPC avec des IPs privées. Les serveurs DNS on-premise (via Direct Connect ou VPN) font un conditional forward : pour les domaines internes AWS (ex: *.corp.internal) → envoyer vers ces IPs privées. Route 53 Resolver répond avec les enregistrements de la Private Hosted Zone."
  },
  {
    id: "aws-soa-c03-j14-33",
    q: "Quelle est la stratégie de mise en cache optimale pour une API REST avec des données qui changent toutes les 5 minutes ?",
    choices: ["A. Désactiver le cache (TTL 0)","B. API Gateway cache activé avec TTL 300s (5 minutes) + Invalidation manuelle via API lors d'un changement de données + Cache-Control header sur les responses pour le browser caching","C. CloudFront devant l'API avec TTL 1 heure","D. Cache-Control max-age=0 sur toutes les réponses"],
    answer: 1,
    exp: "Stratégie cache pour API à données changeantes : API Gateway cache (TTL 300s) : réduit les appels backend de 90%+ pour les endpoints consultés fréquemment. Invalidation : quand les données changent → API cache flush via FlushStageCache. Cache-Control headers dans les réponses pour les caches intermédiaires (browser, CloudFront). TTL aligné sur la fréquence de changement des données."
  },
  {
    id: "aws-soa-c03-j14-34",
    q: "Comment implémenter une architecture 'Multi-Region Active-Active' pour une application web à haute disponibilité ?",
    choices: ["A. Déployer dans une seule région avec Multi-AZ","B. Plusieurs régions avec ALB+ASG+RDS/Aurora Global, Route 53 latency routing ou Global Accelerator pour distribuer le trafic, Aurora Global pour la base de données, DynamoDB Global Tables pour les sessions","C. Active-Active nécessite uniquement deux AZ dans la même région","D. Multi-région Active-Active n'est pas possible avec AWS"],
    answer: 1,
    exp: "Multi-Region Active-Active : 1) Infrastructure dupliquée dans 2+ régions (ALB + ASG + ECS). 2) Base de données : Aurora Global Database (RPO <1s, RTO <1min) ou DynamoDB Global Tables (réplication active-active). 3) Traffic distribution : Route 53 Latency Routing ou Global Accelerator (failover en <30s). 4) Session data : DynamoDB Global Tables ou ElastiCache Global Datastore. 5) S3 CRR pour les assets."
  },
  {
    id: "aws-soa-c03-j14-35",
    q: "Qu'est-ce que l'AWS 'Inferentia' et 'Trainium' et quel impact ont-ils sur les coûts ML ?",
    choices: ["A. Des types d'instances EC2 GPU standard","B. Inferentia (Inf2) : processeurs custom AWS pour ML inference à bas coût. Trainium (Trn1) : processeurs pour ML training. Jusqu'à 50% moins cher que les GPU équivalents pour les workloads ML","C. Inferentia et Trainium sont des services managés ML","D. Ces processeurs ne supportent que les modèles TensorFlow"],
    answer: 1,
    exp: "AWS Silicon custom : Inferentia (Inf2) : processeurs custom pour l'inférence ML, optimisés pour des modèles larges (transformers). 2.4x meilleur coût/performance vs GPU pour l'inférence. Trainium (Trn1) : optimisé pour le training ML, 50% moins cher que p4d pour le training. Supportent PyTorch, TensorFlow, MXNet via le SDK Neuron. Utilisés avec SageMaker ou EKS."
  },
  {
    id: "aws-soa-c03-j14-36",
    q: "Comment AWS CloudFront 'Real-time Logs' diffère-t-il des 'Standard Logs' ?",
    choices: ["A. Les deux sont identiques","B. Standard Logs (S3) : livraison après quelques minutes, format de log complet, coût faible. Real-time Logs (Kinesis Data Streams) : livraison en secondes, champs sélectionnables, permet l'analyse en temps réel (sécurité, monitoring)","C. Real-time Logs sont toujours gratuits","D. Standard Logs supportent la livraison en temps réel"],
    answer: 1,
    exp: "CloudFront Logs : Standard Logs → bucket S3, latence plusieurs minutes, champs fixes. Real-time Logs → Kinesis Data Streams, latence < 1 seconde, champs sélectionnables (uniquement ce dont vous avez besoin), sampling configurable (1-100%). Use cases real-time logs : détection d'attaques DDoS en temps réel, monitoring de SLA, débogage immédiat. Coût additionnel (Kinesis Data Streams)."
  },
  {
    id: "aws-soa-c03-j14-37",
    q: "Quelle est la stratégie pour optimiser les coûts Direct Connect tout en maintenant la résilience ?",
    choices: ["A. Une seule connexion Direct Connect sans redondance","B. Connexion Direct Connect principale + VPN IPSec en backup (coût faible) — le VPN sert uniquement en cas de panne DX. Pour les workloads critiques : deux connexions DX (deux locations) + VPN en backup tertaire","C. Utiliser uniquement VPN au lieu de Direct Connect","D. Direct Connect ne peut pas être combiné avec un VPN"],
    answer: 1,
    exp: "Optimisation coûts DX + résilience : 1) DX principale + VPN backup : DX pour le trafic régulier (moins cher pour gros volumes, latence stable). VPN sur internet comme backup (quelques dizaines de $ /mois). Le VPN se déclenche automatiquement via BGP si DX tombe. 2) Haute résilience : deux DX (deux providers, deux locations) + VPN backup. 3) DX Hosted Connection (via partenaire) = moins cher que Dedicated pour petits débits."
  },
  {
    id: "aws-soa-c03-j14-38",
    q: "Comment implémenter une API Gateway 'Throttling' pour protéger un backend contre les surcharges ?",
    choices: ["A. Désactiver l'API Gateway en cas de surcharge","B. Configurer throttling à plusieurs niveaux : Account-level (10,000 rps par défaut), Stage-level (limite par stage de déploiement), Method-level (limite par route/méthode), Usage Plans (quotas par client API key)","C. API Gateway n'a pas de fonctionnalité de throttling","D. Throttling uniquement via WAF rate-based rules"],
    answer: 1,
    exp: "API Gateway Throttling multi-niveaux : 1) Account default : 10,000 rps, burst 5,000 (augmentable). 2) Stage-level throttling : configurer des limites par stage (prod: 5,000 rps, dev: 100 rps). 3) Method-level : limites spécifiques par route. 4) Usage Plans + API Keys : allouer des quotas (rps + quota mensuel) par client. Response 429 Too Many Requests si dépassé. Protège le backend et permet la monétisation des APIs."
  },
  {
    id: "aws-soa-c03-j14-39",
    q: "Qu'est-ce que l'AWS Route 53 'Traffic Policy Records' et pourquoi est-il utile pour les mises à jour de politiques ?",
    choices: ["A. Traffic Policy Records sont des enregistrements DNS spéciaux","B. Une Traffic Policy peut être associée à plusieurs records DNS. Mettre à jour la policy (créer une nouvelle version) et l'associer aux records → tous les records DNS sont mis à jour atomiquement avec la nouvelle politique","C. Traffic Policy Records ne peuvent être modifiés qu'avec la console AWS","D. Les Traffic Policy Records n'ont pas de versioning"],
    answer: 1,
    exp: "Traffic Policy + Traffic Policy Records : 1) Créer une Traffic Policy (politique de routage complexe). 2) Créer des Traffic Policy Records qui utilisent cette policy. 3) Pour mettre à jour : créer une nouvelle version de la policy, l'associer à tous les records. 4) Rollback : réassocier la version précédente. Utile pour : changer le routing de plusieurs domaines simultanément, maintenir l'historique des politiques."
  },
  {
    id: "aws-soa-c03-j14-40",
    q: "Comment AWS CloudFront 'Field-level Encryption' protège-t-il les données sensibles dans les requêtes ?",
    choices: ["A. Field-level Encryption chiffre tout le trafic HTTP","B. Chiffre des champs spécifiques (ex: numéro de CB, SSN) dans les requêtes HTTP POST au niveau CloudFront avec une clé publique RSA — seule l'application backend avec la clé privée peut déchiffrer","C. Field-level Encryption nécessite KMS","D. Field-level Encryption uniquement pour les réponses, pas les requêtes"],
    answer: 1,
    exp: "CloudFront Field-level Encryption : pour les données ultra-sensibles dans les formulaires POST. Fonctionnement : 1) Uploader une clé publique RSA dans CloudFront. 2) Configurer les champs à chiffrer (ex: credit_card_number). 3) CloudFront chiffre ces champs avec la clé publique avant de forward vers l'origine. 4) Seul le service backend avec la clé privée peut déchiffrer. Même les autres services AWS en chemin ne peuvent pas accéder en clair."
  },
  {
    id: "aws-soa-c03-j14-41",
    q: "Qu'est-ce que l'AWS Route 53 'DNSSEC' et pourquoi est-il important ?",
    choices: ["A. DNSSEC est un protocole de chiffrement du contenu DNS","B. DNSSEC signe cryptographiquement les réponses DNS — les clients peuvent vérifier l'authenticité des réponses et détecter les DNS spoofing/cache poisoning attacks","C. DNSSEC est requis par défaut sur toutes les zones Route 53","D. DNSSEC s'applique uniquement aux Private Hosted Zones"],
    answer: 1,
    exp: "DNSSEC (DNS Security Extensions) : signature cryptographique des enregistrements DNS. Protège contre : cache poisoning, DNS hijacking, man-in-the-middle. Route 53 : DNSSEC signé pour les zones publiques (clé de zone KMS). Les resolvers DNSSEC-validants (8.8.8.8, 1.1.1.1) vérifient les signatures. Chaîne de confiance depuis la zone racine ('.') jusqu'à votre domaine. Prérequis : registrar doit supporter DS records."
  },
  {
    id: "aws-soa-c03-j14-42",
    q: "Comment optimiser les performances d'une application web servie via CloudFront ?",
    choices: ["A. Utiliser uniquement le cache CloudFront sans optimisation supplémentaire","B. Compression Brotli/Gzip activée, cache TTL maximisé (immutable assets), Origin Shield, HTTP/2 ou HTTP/3 (QUIC), images optimisées (WebP via Lambda@Edge), Prefetching des assets critiques","C. Désactiver le cache CloudFront pour toujours servir le contenu le plus récent","D. Utiliser un seul PoP CloudFront pour réduire la latence"],
    answer: 1,
    exp: "Optimisation CloudFront : 1) Compression (gzip/brotli) : réduction taille -70%. 2) Cache TTL max pour les assets immuables (fingerprinted URLs). 3) Origin Shield : réduire les origin requests. 4) HTTP/2 (multiplexing, server push). 5) HTTP/3/QUIC (résilience aux pertes de paquets). 6) Lambda@Edge : convertir images en WebP selon Accept header. 7) Prefetch DNS/ressources critiques via Link: rel=preload headers."
  },
  {
    id: "aws-soa-c03-j14-43",
    q: "Qu'est-ce que l'AWS 'Resource Access Manager' (RAM) et quels types de ressources peut-il partager ?",
    choices: ["A. RAM partage uniquement les VPCs","B. RAM permet de partager des ressources AWS avec d'autres comptes ou toute l'organisation : subnets VPC, Transit Gateway, Prefix Lists, Route 53 Resolver Rules, License Manager, Aurora DB clusters, etc.","C. RAM remplace IAM pour le contrôle d'accès","D. RAM est uniquement disponible pour les comptes Enterprise"],
    answer: 1,
    exp: "AWS Resource Access Manager : partage de ressources AWS sans les dupliquer. Ressources partageables : VPC Subnets, Transit Gateway, Route 53 Resolver Rules, Prefix Lists, AWS License Manager configurations, Aurora DB Clusters, EC2 Capacity Reservations, etc. Dans Organizations : partage automatique sans invitation. Cross-account : invitation + acceptation. Le propriétaire garde le contrôle de la ressource."
  },
  {
    id: "aws-soa-c03-j14-44",
    q: "Comment tester la résilience d'une architecture CloudFront + ALB + EC2 contre une panne de zone de disponibilité ?",
    choices: ["A. Désactiver manuellement une AZ en production","B. AWS Fault Injection Simulator (FIS) : injecter une 'AZ disruption' — simule une panne d'AZ en arrêtant les instances EC2, désactivant les ELB nodes, etc. Observer la réponse automatique (ASG failover, ALB re-routing)","C. Simuler une panne en modifiant les Security Groups","D. Arrêter manuellement toutes les instances dans une AZ en heures de maintenance"],
    answer: 1,
    exp: "Test résilience avec FIS : créer une expérience FIS qui : 1) Stop toutes les instances EC2 dans une AZ spécifique. 2) Optionnellement injecter de la latence réseau. 3) Observer : ASG lance-t-il de nouvelles instances dans les autres AZ? ALB retire-t-il les instances unhealthy? CloudFront continue-t-il à servir le trafic? Définir des 'stop conditions' pour arrêter si les métriques dépassent un seuil."
  },
  {
    id: "aws-soa-c03-j14-45",
    q: "Qu'est-ce que la 'ALB Weighted Target Groups' et comment est-elle utilisée pour les déploiements Blue/Green ?",
    choices: ["A. ALB distribue le trafic entre plusieurs target groups selon des poids configurables — pour les déploiements canary et blue/green","B. ALB ne supporte qu'un seul target group par règle","C. Weighted Target Groups uniquement pour les listener rules avancées, pas le default","D. Les poids ALB doivent toujours totaliser 100"],
    answer: 0,
    exp: "ALB Weighted Target Groups : une règle listener peut avoir plusieurs actions ForwardConfig avec un poids par target group. Exemple : TG-blue (weight=90) + TG-green (weight=10) = 10% canary. Pour Blue/Green : augmenter progressivement le poids de green jusqu'à 100%, puis réduire blue à 0. Compatible avec CodeDeploy Linear/Canary. Pas de redémarrage ALB nécessaire lors du changement de poids."
  },
  {
    id: "aws-soa-c03-j14-46",
    q: "Comment AWS 'Private 5G' étend-il les capacités réseau AWS pour les entreprises ?",
    choices: ["A. AWS Private 5G est un service d'accès 5G public pour les instances EC2","B. Un service qui permet de déployer un réseau 5G privé sur site (factory, campus, entrepôt) managé par AWS — les appareils se connectent au réseau 5G privé qui est raccordé à AWS Outposts ou via VPN/DX","C. Private 5G remplace Direct Connect pour les connexions on-premise","D. AWS Private 5G n'est pas encore disponible"],
    answer: 1,
    exp: "AWS Private 5G : service managé de déploiement de réseaux cellulaires privés. AWS fournit le hardware (small cell radios, SIM cards, gateway) et gère l'infrastructure réseau. Cas d'usage : factory floor IoT, campus connecté, entrepôts automatisés. Le réseau privé se connecte à AWS via VPN, Direct Connect ou AWS Outposts. Gestion via console AWS."
  },
  {
    id: "aws-soa-c03-j14-47",
    q: "Qu'est-ce que la fonctionnalité 'AWS Transit Gateway Multicast' et quel cas d'usage couvre-t-elle ?",
    choices: ["A. Multicast avec TGW envoie des données à plusieurs VPCs simultanément — pour les applications de streaming de données, trading financier (market data feeds), vidéo-conférence d'entreprise","B. TGW Multicast est uniquement pour le broadcast","C. TGW Multicast remplace SNS pour la notification","D. TGW Multicast nécessite des instances dédiées"],
    answer: 0,
    exp: "TGW Multicast : permet l'envoi de données d'une source vers plusieurs destinataires simultanément (au lieu de N copies unicast). Prend en charge IGMPv2 (protocole de gestion de groupe multicast). Use cases : 1) Market data feeds (trading). 2) Video streaming d'entreprise (un flux, N récepteurs). 3) Software distribution interne. Réduit la charge réseau pour les distributions massives simultanées."
  },
  {
    id: "aws-soa-c03-j14-48",
    q: "Comment détecter les 'rogue' (non autorisés) appareils réseau dans un VPC AWS ?",
    choices: ["A. Les VPCs AWS ne peuvent pas avoir d'appareils réseau non autorisés","B. VPC Flow Logs + anomaly detection : identifier les IPs qui communiquent en dehors des patterns autorisés. Config Rules : vérifier la conformité des ENIs et instances. GuardDuty : détecter les communications suspectes","C. Installer un IDS physique dans le VPC","D. Les Security Groups empêchent automatiquement les appareils non autorisés"],
    answer: 1,
    exp: "Détection des ressources non autorisées dans VPC : 1) AWS Config : inventaire de toutes les instances et ENIs, alerter sur les nouvelles ressources non-taguées. 2) GuardDuty : communications avec des IPs externes non reconnues. 3) VPC Flow Logs + Athena : analyser les patterns de trafic anormaux. 4) EventBridge : alerte sur RunInstances pour les instances non conformes. 5) SCP : limiter les instances au types autorisés."
  },
  {
    id: "aws-soa-c03-j14-49",
    q: "Comment configurer AWS API Gateway pour l'authentification et l'autorisation des APIs ?",
    choices: ["A. API Gateway n'a pas de fonctionnalité d'authentification native","B. IAM Authorization (SigV4), Lambda Authorizer (custom JWT, OAuth), Cognito User Pools Authorizer (JWT tokens) — ou combinaison selon les besoins","C. API Gateway utilise uniquement les API Keys pour l'authentification","D. L'authentification API Gateway nécessite toujours WAF"],
    answer: 1,
    exp: "API Gateway Authentication : 1) IAM Authorization : SigV4 signatures (Credentials AWS requis) — pour service-to-service. 2) Lambda Authorizer : custom logic (valider un JWT OAuth, appeler un service tiers) → retourne une IAM policy. 3) Cognito Authorizer : valider les tokens JWT des User Pools Cognito — pour les applications client (mobile, SPA). 4) API Keys : identification (pas d'authentification vraie) — pour usage plans et throttling."
  },
  {
    id: "aws-soa-c03-j14-50",
    q: "Qu'est-ce que l'AWS 'Wavelength' et quel cas d'usage justifie son utilisation ?",
    choices: ["A. Un service de monitoring réseau basse latence","B. Déploie des ressources AWS (EC2, ECS) directement dans les datacenters des opérateurs 5G — pour les applications qui nécessitent une latence ultra-faible (<10ms) vers les appareils mobiles 5G","C. Wavelength remplace CloudFront pour le contenu mobile","D. AWS Wavelength est identique aux regions AWS classiques"],
    answer: 1,
    exp: "AWS Wavelength : zones de calcul déployées dans les datacenters des opérateurs 5G (Verizon, Vodafone, KDDI, etc.). Le trafic des appareils mobiles 5G n'a pas à traverser internet pour atteindre l'application — latence de 1-10ms vs 20-50ms. Use cases : jeux mobile cloud, AR/VR mobile, IoT temps réel, véhicules connectés, streaming vidéo mobile. Les ressources Wavelength ont accès aux autres services AWS via VPC."
  }
]=[
{id:"aws-soa-c03-j14-1",q:"Qu'est-ce qu'AWS WAF et à quels niveaux peut-il être déployé ?",choices:["A. AWS WAF est uniquement pour les applications sur EC2","B. AWS WAF est un pare-feu applicatif (couche 7) déployable sur CloudFront, ALB, API Gateway, AppSync, et Cognito User Pools pour filtrer les requêtes HTTP/HTTPS","C. AWS WAF remplace les Security Groups pour la protection réseau","D. AWS WAF ne peut être déployé que dans une seule région par compte"],answer:1,exp:"AWS WAF (Web Application Firewall) : filtre les requêtes HTTP/HTTPS basé sur des règles (IP, géolocalisation, rate limiting, patterns SQL/XSS). Déployable sur : CloudFront (global), ALB (régional), API Gateway (régional/edge), AppSync, Cognito. Web ACLs contiennent des Rule Groups (AWS Managed Rules ou custom). Actions : Allow, Block, Count, Challenge (CAPTCHA). Logs vers Kinesis Data Firehose."},
{id:"aws-soa-c03-j14-2",q:"Quelle est la différence entre AWS Shield Standard et AWS Shield Advanced ?",choices:["A. Shield Standard offre plus de protection que Shield Advanced","B. Shield Standard : protection DDoS automatique gratuite pour tous les clients AWS (couches 3/4). Shield Advanced : protection L7 avancée, réponse DDoS 24/7, remboursement des frais AWS dus aux attaques DDoS, 3 000$/mois","C. Shield Standard est payant, Shield Advanced est gratuit","D. Shield Advanced ne protège que les CloudFront distributions"],answer:1,exp:"Shield Standard : inclus gratuitement, protection automatique contre les attaques DDoS courantes L3/L4 (SYN floods, UDP reflection). Shield Advanced : protection avancée L3/L4/L7 sur CloudFront/ALB/NLB/EIP, DDoS Response Team (DRT) 24/7, rapports d'attaques détaillés, remboursement des coûts AWS liés aux attaques (scaling automatique), WAF intégré. 1-year commitment requis."},
{id:"aws-soa-c03-j14-3",q:"Qu'est-ce qu'AWS Network Firewall et comment diffère-t-il d'AWS WAF ?",choices:["A. Network Firewall et WAF sont identiques","B. Network Firewall : pare-feu réseau L3-L7 déployé dans les VPCs pour l'inspection stateful et les règles IPS/IDS. WAF : pare-feu applicatif pour les requêtes HTTP/HTTPS sur les services managés (ALB, CF)","C. WAF est plus sécurisé que Network Firewall","D. Network Firewall remplace entièrement WAF"],answer:1,exp:"AWS Network Firewall : déployé dans des subnets VPC dédiés, inspecte le trafic réseau entrant et sortant via les route tables (trafic redirigé via les endpoints firewall). Firewall Rules : Stateless (NACLs avancés), Stateful (connexions TCP, Suricata rules, domain filtering). IPS/IDS, inspection TLS. WAF : inspection HTTP/HTTPS applicative pour les services managés. Complémentaires : Network Firewall pour le trafic réseau générique, WAF pour les APIs et web apps."},
{id:"aws-soa-c03-j14-4",q:"Comment AWS CloudFront protège-t-il les applications contre les attaques DDoS ?",choices:["A. CloudFront ne fournit pas de protection DDoS","B. CloudFront absorbe les attaques DDoS en distribuant le trafic sur le réseau edge mondial AWS, avec AWS Shield Standard intégré, et peut être combiné avec Shield Advanced et WAF pour une protection complète","C. CloudFront protection DDoS nécessite un abonnement séparé","D. CloudFront ne protège que contre les attaques L3/L4"],answer:1,exp:"CloudFront + DDoS : Shield Standard intégré gratuitement. Le réseau de 400+ PoPs CloudFront absorbe et distribue le trafic d'attaque. CloudFront masque l'origine (l'IP du serveur réel n'est pas exposée). Combinaison optimale : CloudFront + AWS WAF (règles anti-XSS, SQL injection, rate limiting) + Shield Advanced (pour les attaques volumétriques sophistiquées et le DRT). Geo-blocking via WAF pour bloquer des pays entiers."},
{id:"aws-soa-c03-j14-5",q:"Qu'est-ce qu'une AWS WAF Web ACL et comment est-elle structurée ?",choices:["A. Une Web ACL est un simple fichier de configuration IP","B. Une Web ACL contient des Rule Groups (Managed AWS Rules, AWS Marketplace Rules, ou Custom) avec des Statement rules (IP sets, regex, SQL/XSS inspection, rate-based) et des actions (Allow, Block, Count, Challenge)","C. Une Web ACL peut uniquement contenir 10 règles maximum","D. Les Web ACLs WAF ne supportent pas les règles personnalisées"],answer:1,exp:"Web ACL Structure : priorité des règles (numérotées, évaluées en ordre). Rule Groups : groupes de règles (AWS Managed Rules comme AWSManagedRulesCommonRuleSet, AWSManagedRulesSQLiRuleSet). Custom Rules : IP-based (IP Sets), Regex patterns, Rate-based (limite les requêtes par IP), Geo-match. Actions : Allow (passer), Block (retourner 403), Count (compteur sans action), CAPTCHA/Challenge. WCU (Web ACL Capacity Units) limite le nombre de règles."},
{id:"aws-soa-c03-j14-6",q:"Comment configurer AWS WAF pour protéger contre les attaques SQL injection et XSS ?",choices:["A. WAF ne peut pas protéger contre SQL injection et XSS","B. Utiliser les AWS Managed Rule Groups : AWSManagedRulesCommonRuleSet (protège XSS et autres) et AWSManagedRulesSQLiRuleSet (protège SQL injection). Vérifier les URIs, query strings, body, headers","C. La protection SQL/XSS nécessite uniquement des règles IP-based","D. Les règles SQL/XSS doivent être écrites manuellement en regex"],answer:1,exp:"AWS Managed Rule Groups pour WAF : AWSManagedRulesCommonRuleSet : protège contre XSS, local/remote file injection, server-side request forgery. AWSManagedRulesSQLiRuleSet : protège contre les injections SQL dans les URIs, query strings, body. Ces groupes sont maintenus par AWS et mis à jour automatiquement. En mode 'Count' pour observer sans bloquer, puis passer en 'Block'. Coût additionnel par rapport au WAF de base."},
{id:"aws-soa-c03-j14-7",q:"Qu'est-ce qu'AWS Firewall Manager et quel problème résout-il ?",choices:["A. Firewall Manager remplace AWS WAF","B. Firewall Manager gère centralement les politiques de sécurité (WAF, Shield Advanced, Security Groups, Network Firewall) dans tous les comptes AWS Organizations","C. Firewall Manager est uniquement pour les réseaux on-premises","D. Firewall Manager ne fonctionne qu'avec un seul compte AWS"],answer:1,exp:"AWS Firewall Manager : gestion centralisée des politiques de sécurité via AWS Organizations. Peut déployer et maintenir : WAF Web ACLs (sur CloudFront, ALB, API Gateway), Shield Advanced (sur les ressources critiques), Security Groups (politiques communes), Network Firewall (dans les VPCs), DNS Firewall. Les nouvelles ressources et nouveaux comptes reçoivent automatiquement les politiques. Simplifie la gouvernance de sécurité multi-comptes."},
{id:"aws-soa-c03-j14-8",q:"Comment AWS CloudFront Origin Access Control (OAC) protège-t-il les buckets S3 ?",choices:["A. OAC est identique à l'ancienne Origin Access Identity (OAI)","B. OAC permet à CloudFront d'accéder au bucket S3 en utilisant les credentials signes AWS SigV4, rendant le bucket inaccessible directement depuis internet (pas de public access nécessaire sur le bucket)","C. OAC ne fonctionne qu'avec les distributions CloudFront payantes","D. OAC nécessite que le bucket S3 soit public"],answer:1,exp:"CloudFront Origin Access Control (OAC) : remplace l'ancien OAI. OAC utilise AWS SigV4 pour signer les requêtes CloudFront vers S3. Configuration : créer un OAC dans CloudFront, l'associer à l'origine S3, mettre à jour la bucket policy S3 pour autoriser uniquement CloudFront (via aws:SourceArn de la distribution). Le bucket peut avoir Block Public Access activé. OAC supporte aussi SSE-KMS et les opérations PUT/DELETE (pour les formulaires)."},
{id:"aws-soa-c03-j14-9",q:"Qu'est-ce que AWS Route 53 DNS Firewall et comment protège-t-il contre les menaces ?",choices:["A. DNS Firewall bloque les requêtes DNS vers des domaines malveillants depuis les instances dans le VPC, utilisant des listes de blocage AWS-managed ou personnalisées","B. DNS Firewall remplace Route 53 Private Hosted Zones","C. DNS Firewall fonctionne uniquement pour les domaines externes à AWS","D. DNS Firewall nécessite l'installation d'un agent sur chaque instance"],answer:0,exp:"Route 53 Resolver DNS Firewall : intercepte les requêtes DNS depuis les instances VPC et filtre selon des règles. AWS Managed Domain Lists (botnets, malware, phishing). Custom Domain Lists que vous gérez. Actions : BLOCK (retourner NODATA ou réponse personnalisée), ALLOW, ALERT (log sans bloquer). Protège contre le DNS data exfiltration, les communications vers des serveurs C&C, et l'accès à des domaines malveillants. Journaux vers CloudWatch ou S3."},
{id:"aws-soa-c03-j14-10",q:"Comment implémenter une protection en profondeur (defense in depth) pour une application web sur AWS ?",choices:["A. Un seul Security Group suffit pour une protection complète","B. Couches : Route 53 (geo-restriction), CloudFront + WAF + Shield (edge), ALB + WAF (régional), Security Groups (instance), NACLs (subnet), Network Firewall (VPC), chiffrement TLS partout, GuardDuty (threat detection)","C. La protection en profondeur nécessite des appliances physiques uniquement","D. AWS Shield Advanced inclut toutes les couches automatiquement"],answer:1,exp:"Defense in Depth (couches) : 1) DNS : Route 53 (geo-restriction, health checks). 2) CDN/Edge : CloudFront + WAF (OWASP, rate limiting) + Shield Advanced. 3) Load Balancer : ALB avec WAF intégré, HTTPS redirect. 4) Réseau VPC : Security Groups (stateful), NACLs (stateless), Network Firewall (IPS/IDS). 5) Instance : SSM Session Manager (pas de SSH exposé), IMDSv2. 6) Données : chiffrement KMS, Macie. 7) Monitoring : GuardDuty, Security Hub, CloudTrail."},
{id:"aws-soa-c03-j14-11",q:"Qu'est-ce que le rate limiting dans AWS WAF et pourquoi l'utiliser ?",choices:["A. Le rate limiting WAF bloque définitivement les IPs qui dépassent un seuil","B. Les règles rate-based limitent le nombre de requêtes par IP sur une période de 5 minutes. Utile pour prévenir les attaques brute force, scraping excessif et certains DDoS L7","C. Le rate limiting WAF ne s'applique qu'aux requêtes POST","D. Le rate limiting nécessite Shield Advanced"],answer:1,exp:"WAF Rate-based Rules : configuration d'un threshold (minimum 100 requêtes sur 5 minutes). Actions : Block l'IP temporairement jusqu'à ce que le taux descende sous le seuil. Critères : par IP, par IP forwarded (X-Forwarded-For), par custom key. Peut être combiné avec d'autres statements (AND/OR). Utile pour : prévenir le brute force sur les login forms, limiter les scrapers, protéger contre les DDoS L7 volumétriques par IP."},
{id:"aws-soa-c03-j14-12",q:"Comment CloudFront gère-t-il les certificats SSL/TLS pour les domaines personnalisés ?",choices:["A. CloudFront ne supporte que les certificats wildcard AWS","B. Utiliser ACM pour créer/importer un certificat dans la région us-east-1 (obligatoire pour CloudFront), l'associer à la distribution. CloudFront gère le renouvellement automatique pour les certificats ACM","C. CloudFront ne supporte pas les certificats SSL personnalisés","D. Les certificats pour CloudFront doivent être déployés dans chaque région"],answer:1,exp:"CloudFront + SSL/TLS : les certificats ACM pour CloudFront DOIVENT être créés dans us-east-1 (même si la distribution est globale). SNI (Server Name Indication) : gratuit, les clients doivent supporter SNI (tous les navigateurs modernes). Dedicated IP : ancien système, $600/mois, pour les clients très anciens. ACM renouvelle automatiquement avant expiration. Importation de certificats tiers aussi supportée (dans us-east-1)."},
{id:"aws-soa-c03-j14-13",q:"Qu'est-ce qu'une AWS WAF Managed Rule Group et comment choisir la bonne ?",choices:["A. Les Managed Rule Groups WAF ne sont disponibles qu'avec Shield Advanced","B. Des collections de règles pré-construites maintenues par AWS ou des partenaires Marketplace. Choisir selon le stack applicatif : AWSManagedRulesCommonRuleSet (tout), SQLiRuleSet, PHP, WordPress, Linux, Windows","C. Toutes les applications doivent utiliser l'ensemble complet des Managed Rule Groups","D. Les Managed Rule Groups ne peuvent pas être combinées avec des règles personnalisées"],answer:1,exp:"AWS Managed Rule Groups catégories : Core rule sets (SQL injection, XSS, file inclusion), OS/Technology (Linux, Windows, PHP), Application (WordPress, Joomla, Drupal), IP Reputation (AWS IP Reputation List, Anonymous IP List). Third-party : F5, Fortinet, etc. via Marketplace. Best practice : activer en mode Count d'abord pour observer les faux positifs, puis passer en Block. Ne pas activer toutes les règles si elles ne s'appliquent pas à votre stack."},
{id:"aws-soa-c03-j14-14",q:"Comment AWS CloudFront Signed URLs et Signed Cookies sécurisent-ils le contenu ?",choices:["A. Signed URLs et Cookies sont identiques — c'est juste une préférence technique","B. Signed URLs : accès à un seul fichier pour les URLs directes. Signed Cookies : accès à plusieurs fichiers (sections premium), maintient la session. Les deux incluent date d'expiration et restrictions IP","C. Signed URLs fonctionnent uniquement avec S3, pas avec EC2","D. Les Signed URLs ne peuvent pas inclure de restriction d'expiration"],answer:1,exp:"Signed URLs : pour des fichiers individuels, URL contient le token d'autorisation et l'expiration. Signed Cookies : pour l'accès à des groupes de fichiers (ex: membres premium qui accèdent à plusieurs vidéos), cookie avec le token. Les deux utilisent une keypair CloudFront Key Groups (recommandé) ou un Trusted Key Groups. Origin peut aussi utiliser Custom Headers pour s'assurer que les requêtes passent par CloudFront."},
{id:"aws-soa-c03-j14-15",q:"Comment AWS Network Firewall est-il intégré dans une architecture VPC ?",choices:["A. Network Firewall remplace les subnets dans le VPC","B. Des endpoints firewall sont créés dans des subnets dédiés par AZ. Les route tables sont modifiées pour diriger le trafic via ces endpoints (trafic entrant IGW → endpoint firewall → subnet cible)","C. Network Firewall est uniquement pour les connexions inter-VPC","D. Network Firewall se déploie en dehors du VPC"],answer:1,exp:"Déploiement Network Firewall : 1) Créer un firewall dans une Availability Zone avec un subnet dédié ('Firewall Subnet'). 2) Des endpoints ENI sont créés dans les subnets firewall. 3) Modifier les route tables : route table de l'IGW (edge association) : routes vers les subnets applicatifs passent par l'endpoint firewall. Route table des subnets applicatifs : 0.0.0.0/0 → endpoint firewall. Ainsi tout le trafic entrant et sortant est inspecté."},
{id:"aws-soa-c03-j14-16",q:"Qu'est-ce qu'AWS Cognito et comment contribue-t-il à la sécurité des applications ?",choices:["A. Cognito est uniquement un service de gestion de base de données","B. Cognito User Pools (authentification, MFA, password policies) et Identity Pools (fédération d'identités pour accès AWS) fournissent l'authentification et l'autorisation pour les applications web et mobiles","C. Cognito remplace IAM pour toutes les autorisations AWS","D. Cognito ne supporte pas la fédération avec des providers sociaux"],answer:1,exp:"Cognito User Pools : directory d'utilisateurs avec login/password, MFA, password policies, email verification, custom flows Lambda triggers. Supporte social sign-in (Google, Facebook, Apple, SAML). Génère des JWTs (ID token, Access token, Refresh token). Identity Pools : fédère les identités (Cognito, Google, Facebook, SAML, OpenID) vers des credentials IAM temporaires pour accéder directement aux services AWS (S3, DynamoDB). WAF peut protéger les Cognito User Pools."},
{id:"aws-soa-c03-j14-17",q:"Un SysOps admin veut bloquer le trafic provenant d'un pays spécifique sur une application CloudFront. Comment procéder ?",choices:["A. Les blocages géographiques ne sont pas possibles dans AWS","B. Configurer une règle Geo Match dans AWS WAF associée à la distribution CloudFront, ou utiliser la fonctionnalité de Geo Restriction native de CloudFront (moins granulaire)","C. Modifier les Security Groups pour bloquer les IP des pays","D. Utiliser Route 53 Latency Routing pour dérouter le trafic"],answer:1,exp:"Deux options pour le geo-blocking CloudFront : 1) CloudFront Geo Restriction natif : blocage par pays sur la distribution entière (Allow list ou Block list). Simple mais bloque tout le contenu. 2) WAF Geo Match Statement : plus granulaire, peut bloquer par chemin d'URL spécifique, type de ressource, combiné avec d'autres règles. Les deux utilisent la géolocalisation GeoIP basée sur l'IP du client."},
{id:"aws-soa-c03-j14-18",q:"Comment configurer AWS WAF pour journaliser toutes les requêtes (acceptées et bloquées) ?",choices:["A. WAF ne journalise que les requêtes bloquées par défaut","B. Activer WAF logging dans la Web ACL avec Kinesis Data Firehose comme destination. Les logs peuvent ensuite être envoyés vers S3 (analyse long terme) ou CloudWatch Logs (alertes en temps réel) ou OpenSearch","C. Les logs WAF sont automatiquement dans CloudTrail","D. WAF logging nécessite Shield Advanced"],answer:1,exp:"WAF Logging : configurer Kinesis Data Firehose (obligatoire comme intermédiaire) puis router vers S3, CloudWatch Logs ou Amazon OpenSearch Service. Logs incluent : timestamp, action (ALLOW/BLOCK/COUNT), règle qui a déclenché, headers, URI, IP. Log Filtering possible pour ne logger qu'un sous-ensemble (seulement les BLOCK, seulement certains labels). Utile pour l'audit de sécurité et l'optimisation des règles."},
{id:"aws-soa-c03-j14-19",q:"Quelle est la différence entre AWS Shield et AWS WAF en termes de types d'attaques qu'ils protègent ?",choices:["A. Shield et WAF protègent contre les mêmes types d'attaques","B. Shield : DDoS volumétriques et infrastructure (L3/L4 — SYN flood, UDP amplification). WAF : attaques applicatives (L7 — SQL injection, XSS, CSRF, bot scraping, brute force)","C. WAF protège contre les DDoS L3/L4","D. Shield Advanced protège contre SQL injection"],answer:1,exp:"Couverture complémentaire : Shield (DDoS L3/L4) : protection contre les attaques volumétriques comme UDP flood, SYN flood, ICMP flood, Amplification (DNS, NTP, SSDP). Shield Advanced ajoute L7 DDoS detection. WAF (L7) : SQL injection, XSS, path traversal, remote code execution, bot traffic, rate limiting, credential stuffing. Ensemble : Shield absorbe le volume, WAF inspecte la logique applicative."},
{id:"aws-soa-c03-j14-20",q:"Comment AWS Security Hub s'intègre-t-il avec les services de protection réseau AWS ?",choices:["A. Security Hub ne reçoit pas d'informations des services réseau","B. Security Hub agrège les findings de : GuardDuty (trafic réseau suspect), Firewall Manager (violations de politiques WAF), Network Firewall (alertes IPS), Inspector (expositions réseau), pour une vue centralisée de la sécurité réseau","C. Security Hub gère directement les règles WAF","D. Security Hub s'intègre uniquement avec les services IAM"],answer:1,exp:"Security Hub intégrations réseau : GuardDuty → Network findings (port scan, unusual DNS, C&C communication). Firewall Manager → compliance status des politiques WAF/Shield. Inspector → Network exposure findings (instances accessibles depuis internet). Config → conformité des Security Groups (port 22 ouvert au monde). AWS Foundational Security Best Practices inclut des checks réseau. Les findings ASFF normalisés permettent l'agrégation et l'analyse centralisée."}
];

// ── Jour 15 — Révision générale / Mock Exam tous domaines ─────────────────────
window.QDATA[15,
  {
    id: "aws-soa-c03-j15-21",
    q: "Un SysOps admin observe que les instances EC2 dans un ASG ne se lancent pas malgré une alarme de scale-out. Quelle est la première chose à vérifier ?",
    choices: ["A. Redémarrer l'ASG","B. Vérifier les 'Activity History' de l'ASG pour les erreurs : quota EC2 dépassé, AMI non disponible dans l'AZ, subnet plein, permissions IAM insuffisantes pour l'instance profile","C. Augmenter le max de l'ASG","D. Modifier la launch template"],
    answer: 1,
    exp: "Diagnostic ASG scale-out échoué : 1) ASG → Activity History : message d'erreur précis (InsufficientInstanceCapacity, ami-xxx not available in AZ, SubnetLimitExceeded). 2) Service Quotas : quota EC2 instances par type dépassé? 3) Launch Template : AMI existe encore? Instance type disponible dans les AZs configurées? 4) IAM : le rôle de service ASG peut-il lancer des instances?"
  },
  {
    id: "aws-soa-c03-j15-22",
    q: "Une Lambda function retourne des erreurs 'Connection timeout' vers une base de données RDS dans un VPC privé. Qu'est-ce qui est probablement mal configuré ?",
    choices: ["A. La Lambda n'a pas assez de mémoire","B. La Lambda n'est pas configurée pour être dans le VPC, ou le Security Group de RDS ne permet pas les connexions depuis le Security Group de la Lambda, ou la Lambda est dans une AZ sans subnet configuré","C. RDS est dans une autre région","D. La Lambda function dépasse son timeout de 15 minutes"],
    answer: 1,
    exp: "Lambda → RDS connectivité dans VPC : 1) Lambda VPC Configuration : Lambda doit être configurée dans le VPC (même VPC que RDS). 2) Security Group RDS : autoriser le port DB (5432/3306) depuis le SG de la Lambda. 3) Subnets Lambda : private subnets avec accès au subnet RDS. 4) RDS endpoint DNS résolvable depuis la Lambda. 5) Vérifier avec VPC Reachability Analyzer."
  },
  {
    id: "aws-soa-c03-j15-23",
    q: "Un déploiement CloudFormation échoue avec 'Resource limit exceeded'. Comment résoudre ?",
    choices: ["A. Redéployer le template sans modification","B. Vérifier les Service Quotas pour le type de ressource qui a échoué et demander une augmentation via Service Quotas console, ou refactoriser pour utiliser moins de ressources","C. Contacter AWS Support Premium uniquement","D. Fragmenter le template en 100 ressources maximum"],
    answer: 1,
    exp: "Resource limit exceeded dans CFN : chaque service AWS a des quotas par région et par compte. Identifier la ressource en échec dans les Stack Events. Vérifier les quotas actuels : Service Quotas console (ou aws service-quotas list-service-quotas). Demander une augmentation (automatique pour certains services, manuelle pour d'autres). Certains quotas prennent 2-3 jours ouvrables à être augmentés."
  },
  {
    id: "aws-soa-c03-j15-24",
    q: "Un admin remarque que les coûts S3 sont anormalement élevés ce mois-ci. Quelle est la démarche d'investigation ?",
    choices: ["A. Supprimer des buckets S3 immédiatement","B. Cost Explorer : filtrer par service S3 → décomposer par 'Usage Type' (requêtes, stockage, transfert) et par 'Resource' (bucket spécifique via tag) → identifier le bucket ou le type de coût anormal","C. Désactiver S3 Storage Lens","D. Activer S3 Intelligent-Tiering immédiatement"],
    answer: 1,
    exp: "Investigation coûts S3 : 1) Cost Explorer → Service = S3 → Group by 'Usage Type' : identifier si c'est le stockage, les requêtes GET, le transfert sortant ou les opérations qui a aumenté. 2) Cost Explorer → Group by 'Resource' (si tags activés) : identifier le bucket. 3) S3 Storage Lens : dashboard de métriques S3 (stockage, requêtes par bucket). 4) AWS Cost and Usage Report pour analyse granulaire."
  },
  {
    id: "aws-soa-c03-j15-25",
    q: "Un ops admin doit s'assurer que toutes les instances EC2 lancées dans un compte ont le tag 'CostCenter'. Quelle approche est la plus complète ?",
    choices: ["A. Envoyer des rappels à l'équipe","B. SCP préventive (Deny RunInstances sans le tag CostCenter) + Config Rule détective (ec2-required-tags) + SSM Automation pour remédiation","C. Config Rule uniquement","D. IAM Policy dans chaque compte"],
    answer: 1,
    exp: "Défense en profondeur pour le tag enforcement : 1) SCP préventive : Deny ec2:RunInstances si condition Null aws:RequestTag/CostCenter = true. Empêche le lancement sans le tag. 2) Config Rule ec2-required-tags : détecte les instances existantes sans le tag. 3) Remédiation SSM : notifie ou ajoute un tag 'Unknown' si manquant. 4) Tag Policies dans Organizations pour standardiser la syntaxe des tags."
  },
  {
    id: "aws-soa-c03-j15-26",
    q: "Une application web renvoie des erreurs 503 intermittentes sous forte charge. Les instances EC2 semblent saines dans CloudWatch. Que vérifier ?",
    choices: ["A. Augmenter immédiatement le nombre d'instances","B. Vérifier : ALB HealthyHostCount, TargetGroup health check configuration, instance connection count, EC2 métriques détaillées (CPU threads, connexions TCP), ALB access logs pour les erreurs 5xx targets","C. Redémarrer l'ALB","D. Changer le type d'instance"],
    answer: 1,
    exp: "Diagnostic 503 intermittents sous charge : 1) ALB métriques : HTTP_5XX_Count sur TargetGroup (backend) vs ELB (ALB lui-même). 2) UnhealthyHostCount : certaines instances échouent sous charge? 3) TargetConnectionErrorCount : rejection de connexions par les instances. 4) Instance level : ss -s (nombre de connexions TCP), CLOSE_WAIT élevé = connexions non fermées. 5) ALB Access Logs : target_status_code 503 = backend saturé."
  },
  {
    id: "aws-soa-c03-j15-27",
    q: "Qu'est-ce que l'AWS Well-Architected Framework et comment un SysOps admin l'utilise-t-il ?",
    choices: ["A. Un guide de configuration des services AWS uniquement","B. Framework de 6 pilliers (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability) avec des questions et des meilleures pratiques pour évaluer et améliorer les architectures AWS","C. Well-Architected est un service AWS facturé","D. Well-Architected Framework est uniquement pour les architectes, pas les SysOps"],
    answer: 1,
    exp: "AWS Well-Architected Framework (WAF) : 6 pilliers avec des questions et des Best Practices. Outil : AWS Well-Architected Tool (console gratuite) pour évaluer une workload. SysOps applications : 1) Operational Excellence : monitoring, runbooks, déploiements automatisés. 2) Reliability : Multi-AZ, backup, failover. 3) Security : IAM, chiffrement, logging. 4) Cost Optimization : rightsizing, RI. 5) Sustainability : efficacité énergétique."
  },
  {
    id: "aws-soa-c03-j15-28",
    q: "Un SysOps admin doit migrer une base de données Oracle on-premise vers Amazon RDS Oracle avec un minimum de downtime. Quelle est la stratégie recommandée ?",
    choices: ["A. Exporter un dump Oracle, arrêter l'application, importer dans RDS, reconfigurer l'application","B. AWS Database Migration Service (DMS) avec Ongoing Replication : migrer les données initiales puis répliquer les changements (CDC) jusqu'au basculement — downtime de minutes","C. AWS Schema Conversion Tool seulement","D. Créer un VPN et utiliser Oracle Data Guard directement"],
    answer: 1,
    exp: "Migration DB minimale downtime avec DMS : 1) AWS SCT : convertir le schéma si nécessaire. 2) DMS Full Load : migrer les données existantes (peut prendre des heures pour de grandes DBs). 3) DMS Change Data Capture (CDC) : répliquer les changements en cours pendant que l'application tourne. 4) Validation : comparer les données source et cible. 5) Basculement : arrêt application → arrêt CDC → pointer l'app vers RDS → redémarrage. Downtime = minutes."
  },
  {
    id: "aws-soa-c03-j15-29",
    q: "Comment implémenter un mécanisme de 'Circuit Breaker' pour les appels vers un service externe instable depuis AWS Lambda ?",
    choices: ["A. Utiliser try/catch dans la Lambda uniquement","B. Maintenir l'état du circuit dans DynamoDB ou ElastiCache. Lambda vérifie l'état avant d'appeler le service externe — si OPEN (trop d'erreurs récentes), retourner une réponse de fallback sans appeler le service","C. Utiliser Lambda Reserved Concurrency pour limiter les appels","D. Créer un NLB devant le service externe"],
    answer: 1,
    exp: "Circuit Breaker avec Lambda : 1) DynamoDB ou ElastiCache comme state store : {service: 'payment-api', state: 'CLOSED/OPEN', failure_count: 5, last_failure: ts}. 2) Lambda : lire l'état → si OPEN → fallback immédiat (pas d'appel externe). Si CLOSED → appeler le service. Si erreur → incrémenter le compteur. 3) EventBridge Schedule : réinitialiser le circuit après X minutes (HALF-OPEN pour retry)."
  },
  {
    id: "aws-soa-c03-j15-30",
    q: "Un SysOps admin observe que certaines instances EC2 sont 'stale' dans le target group ALB (health check failing). Les instances EC2 semblent saines via SSM. Que vérifier ?",
    choices: ["A. Redémarrer les instances","B. Vérifier : port du health check ALB correspond à l'application, Security Group de l'instance autorise le port depuis le SG de l'ALB, l'application répond avec HTTP 200 sur le path configuré, response timeout < response time","C. Désactiver le health check ALB","D. Remplacer les instances par de nouvelles"],
    answer: 1,
    exp: "Health check ALB échoue mais instance saine : 1) Health check config : port correct (traffic-port ou port spécifique)? Path retourne HTTP 200? 2) Security Group de l'instance : port health check autorisé depuis le SG de l'ALB (ou CIDR VPC). 3) Application logs : l'app reçoit-elle les requêtes health check? Retourne-t-elle 200? 4) Timeout/interval : response time > healthy threshold timeout? 5) VPC Flow Logs sur l'instance ENI."
  },
  {
    id: "aws-soa-c03-j15-31",
    q: "Qu'est-ce que le 'AWS Shared Responsibility Model' pour Amazon ECS Fargate ?",
    choices: ["A. AWS est responsable de tout sur Fargate","B. AWS : hyperviseur, OS hôte, réseau physique, infrastructure Fargate. Client : configuration des tasks (network mode, IAM task role), sécurité du container (Dockerfile, app code), security groups, task definition, secrets gestion","C. Le client gère l'OS des instances Fargate","D. AWS et le client ont les mêmes responsabilités"],
    answer: 1,
    exp: "Fargate Shared Responsibility : AWS gère : serveurs physiques, hyperviseur Nitro, OS hôte, isolation des containers (micro-VMs Firecracker), patching de l'infrastructure. Client gère : image Docker (vulnérabilités dans le code/packages), task definition (ressources, env vars, secrets), IAM task role (least privilege), network config (security groups), secrets (Secrets Manager intégration)."
  },
  {
    id: "aws-soa-c03-j15-32",
    q: "Un ops admin doit s'assurer qu'aucun accès IAM n'est accordé via les 'inline policies' directement sur les users IAM dans son organisation. Quelle approche utiliser ?",
    choices: ["A. Vérifier manuellement chaque utilisateur IAM","B. AWS Config rule 'iam-user-no-policies-check' : détecte les users IAM avec des policies inline ou directement attachées. Remédiation : déplacer les permissions vers des groupes/rôles IAM","C. IAM Access Analyzer détecte les inline policies","D. Désactiver les inline policies pour tout le compte via SCP"],
    answer: 1,
    exp: "Governance IAM inline policies : 1) Config Rule 'iam-user-no-policies-check' : NON_COMPLIANT si un user IAM a des policies inline ou managed policies attachées directement. 2) Best practice : permissions via groupes (non via users directement). 3) Remédiation SSM : déplacer les permissions vers un groupe, les attacher au groupe, retirer de l'utilisateur. 4) SCP ne peut pas interdire les inline policies mais une règle Config suffit."
  },
  {
    id: "aws-soa-c03-j15-33",
    q: "Comment un SysOps admin peut-il s'assurer que les sauvegardes RDS sont correctement effectuées et testables ?",
    choices: ["A. Vérifier manuellement les snapshots chaque semaine","B. Automated Backups activés avec rétention 7-35 jours + AWS Backup Vault avec règles de rétention + tester la restauration régulièrement (créer une instance de test depuis le snapshot) + alarme CloudWatch sur BackupRetentionPeriod","C. Utiliser uniquement les snapshots manuels","D. DMS est suffisant pour les sauvegardes RDS"],
    answer: 1,
    exp: "Stratégie backup RDS complète : 1) Automated Backups (PITR) : rétention 7 jours minimum. 2) AWS Backup : politique centralisée (retention, vault, cross-account copy). 3) Testing : restaurer régulièrement un snapshot dans une instance de test (valider la cohérence des données). 4) Alarme CloudWatch sur 'FreeStorageSpace' et 'BackupRetentionPeriod'. 5) AWS Config : rds-automatic-backups-enabled."
  },
  {
    id: "aws-soa-c03-j15-34",
    q: "Qu'est-ce que l'AWS 'Trusted Advisor' et quelles catégories de recommandations fournit-il ?",
    choices: ["A. Un service de conseil AWS payant pour les grandes entreprises","B. Un service qui analyse votre compte AWS selon 5 catégories : Cost Optimization, Performance, Security, Fault Tolerance, Service Limits — avec des checks verts/oranges/rouges et des recommandations actionables","C. Trusted Advisor uniquement pour les vérifications de sécurité","D. Trusted Advisor est inclus uniquement dans le plan Enterprise"],
    answer: 1,
    exp: "Trusted Advisor : disponible pour tous les comptes (Basic et Developer = 7 checks core Security + Fault Tolerance). Business et Enterprise : tous les checks (100+). Catégories : Cost Optimization (instances sous-utilisées, RI non utilisées), Performance (EBS throughput, CloudFront TTL), Security (MFA root, SG ouverts, S3 public), Fault Tolerance (Multi-AZ, snapshots manquants), Service Limits (quota dépassé à 80%+)."
  },
  {
    id: "aws-soa-c03-j15-35",
    q: "Un SysOps admin voit des alertes GuardDuty 'Recon:IAMUser/MaliciousIPCaller' dans plusieurs comptes. Quelles actions prendre ?",
    choices: ["A. Ignorer les alertes — ce sont probablement des faux positifs","B. Identifier l'utilisateur IAM concerné, vérifier CloudTrail pour les actions effectuées, désactiver temporairement les credentials si compromis, isoler les ressources créées par l'attaquant, changer les credentials","C. Supprimer immédiatement tous les utilisateurs IAM","D. Contacter AWS Support et attendre"],
    answer: 1,
    exp: "Réponse à incident GuardDuty IAM : 1) Identifier l'entité IAM (user/role) dans le finding. 2) CloudTrail : filtrer sur l'entité → toutes les actions dans les dernières 24-72h. 3) Si credentials compromis : désactiver la clé d'accès (pas supprimer pour préserver l'audit). 4) Inventorier les ressources créées (instances, users, rôles). 5) Supprimer les ressources malveillantes. 6) Post-incident : rotation de tous les credentials."
  },
  {
    id: "aws-soa-c03-j15-36",
    q: "Comment optimiser les performances d'une application DynamoDB qui fait des 'hot partition' reads ?",
    choices: ["A. Augmenter les capacités provisionnées","B. Revoir le modèle de données pour répartir les reads/writes (clé de partition composite, sharding du prefix) + activer DynamoDB Accelerator (DAX) pour le cache en mémoire des lectures fréquentes","C. Migrer vers RDS Aurora","D. Utiliser DynamoDB Global Tables"],
    answer: 1,
    exp: "Hot partitions DynamoDB : 1) Modélisation : changer la clé de partition pour une meilleure distribution (ajouter un suffixe aléatoire, composite key). 2) DAX (DynamoDB Accelerator) : cluster de cache en mémoire devant DynamoDB, latence microseconde pour les reads répétés, réduit la charge sur les partitions. 3) Caching applicatif (ElastiCache) pour les données fréquemment lues."
  },
  {
    id: "aws-soa-c03-j15-37",
    q: "Qu'est-ce que l'AWS 'Config Rules Auto-Remediation' et comment fonctionne-t-il ?",
    choices: ["A. Config modifie automatiquement toutes les ressources non conformes sans intervention","B. Pour chaque Config Rule NON_COMPLIANT, configurer une 'Remediation Action' : un document SSM Automation (pré-défini ou custom) qui modifie la ressource pour la rendre conforme — automatique ou avec approbation manuelle","C. Config Rules Auto-Remediation uniquement pour les règles AWS managed","D. Les actions de remédiation nécessitent toujours une approbation manuelle"],
    answer: 1,
    exp: "Config Auto-Remediation : 1) Config Rule détecte une non-conformité. 2) Remediation action configurée : SSM Automation document (AWS::SSM::Automation) appelé avec les paramètres de la ressource non-conforme. 3) Mode automatique (auto-remediation enabled) : SSM s'exécute immédiatement. 4) Mode manuel : alerte + approbation. Exemple : s3-bucket-public-read-prohibited → SSM Automation bloque l'accès public S3."
  },
  {
    id: "aws-soa-c03-j15-38",
    q: "Un SysOps admin doit migrer des workloads d'une région AWS à une autre avec un minimum d'interruption. Quelle est la stratégie recommandée ?",
    choices: ["A. Arrêter tout, copier les AMIs, recréer dans la nouvelle région","B. AMI cross-region copy + RDS snapshot copy + S3 CRR (ou batch copy) + Route 53 weighted routing pour basculer progressivement le trafic avec possibilité de rollback","C. AWS DataSync pour toutes les migrations de données","D. AWS Migration Hub gère automatiquement la migration inter-région"],
    answer: 1,
    exp: "Migration inter-région sans downtime : 1) Préparer l'infrastructure cible (IaC → déployer dans la nouvelle région). 2) Copier les AMIs (CopyImage cross-region). 3) Copier les snapshots RDS (CopyDBSnapshot cross-region). 4) S3 CRR ou batch copy. 5) DMS pour la réplication continue DB. 6) Route 53 Weighted Routing : 10% → nouvelle région, progresser. 7) Basculement final → 100% nouvelle région. Rollback simple : 100% ancienne région."
  },
  {
    id: "aws-soa-c03-j15-39",
    q: "Comment implémenter un 'audit trail' complet et inaltérable pour la conformité SOC 2 sur AWS ?",
    choices: ["A. Activer CloudTrail dans toutes les régions","B. CloudTrail Organization Trail dans toutes les régions (Management + Data events) → S3 avec Object Lock Compliance pour l'inaltérabilité, chiffrement KMS, Cloudwatch Logs pour les alertes real-time, AWS Security Hub pour le dashboard de conformité","C. Config seul suffit pour l'audit trail","D. Utiliser un outil tiers car AWS ne fournit pas d'audit trail complet"],
    answer: 1,
    exp: "Audit trail SOC 2 inaltérable : 1) CloudTrail Organization Trail : toutes régions, Management + Data events (S3, DynamoDB). 2) S3 bucket destinataire avec Object Lock Compliance (période de rétention = exigences légales) + chiffrement KMS CMK. 3) SNS + CloudWatch Logs Insights pour alertes sur les events sensibles. 4) Access Analyzer pour les accès externes non désirés. 5) Security Hub CIS Benchmarks pour le score de conformité."
  },
  {
    id: "aws-soa-c03-j15-40",
    q: "Qu'est-ce que l'AWS 'Systems Manager Incident Manager' et comment s'intègre-t-il dans la gestion des incidents ?",
    choices: ["A. Un service de ticketing pour les incidents AWS","B. Un service qui automatise la détection, le tri, et la résolution des incidents : plans de réponse (runbooks, escalations, contacts d'astreinte), notifications paging, post-incident analysis","C. Incident Manager est uniquement pour les pannes AWS","D. Incident Manager remplace PagerDuty"],
    answer: 1,
    exp: "SSM Incident Manager : 1) Response Plans : définir la gravité, les contacts (PagerDuty, SNS, Chime/Slack), les runbooks SSM Automation à exécuter automatiquement. 2) Incidents : créés manuellement ou automatiquement via CloudWatch alarms ou EventBridge. 3) Timeline : traçabilité des actions pendant l'incident. 4) Post-Incident Analysis : cause racine, actions préventives. Intégrations : OpsGenie, PagerDuty, ServiceNow."
  },
  {
    id: "aws-soa-c03-j15-41",
    q: "Un SysOps admin observe une utilisation élevée du CPU sur une instance RDS Multi-AZ. Quelles sont les actions recommandées ?",
    choices: ["A. Passer en instance type plus grande immédiatement","B. Analyser RDS Performance Insights pour identifier les requêtes coûteuses (top SQL), vérifier les index, envisager des Read Replicas pour les lectures, planifier un scale-up en maintenance window si nécessaire","C. Désactiver RDS Multi-AZ pour réduire la charge","D. Migrer vers DynamoDB"],
    answer: 1,
    exp: "Diagnostic CPU élevé RDS : 1) Performance Insights : Top SQL queries (avg latency, calls/sec, % CPU). 2) Enhanced Monitoring : processus OS consommant le CPU. 3) Actions : ajouter des index manquants (EXPLAIN sur les requêtes lentes), répartir les lectures sur Read Replica, optimiser les requêtes applicatives, review des connexions (N+1 queries). 4) Si infrastructure limite : scale-up en maintenance window."
  },
  {
    id: "aws-soa-c03-j15-42",
    q: "Comment AWS 'Service Quotas' aide-t-il à gérer les limites des services AWS proactivement ?",
    choices: ["A. Service Quotas liste uniquement les limites actuelles sans possibilité d'augmentation","B. Service Quotas centralise toutes les limites de services, permet de demander des augmentations, et intègre avec Trusted Advisor et CloudWatch pour alerter quand l'utilisation approche des limites","C. Service Quotas est uniquement disponible via CLI","D. Les quotas AWS ne peuvent jamais être augmentés"],
    answer: 1,
    exp: "Service Quotas : 1) Dashboard centralisé des quotas par service (EC2 instances, Lambda concurrency, etc.). 2) Demander des augmentations directement (automatique pour certains services, AWS approval requis pour d'autres). 3) Intégration CloudWatch : alarme quand l'utilisation atteint X% du quota. 4) Trusted Advisor 'Service Limits' check : alerte à 80%. 5) Quota Request Templates pour demander plusieurs augmentations en une fois."
  },
  {
    id: "aws-soa-c03-j15-43",
    q: "Quelle est la différence entre AWS CloudFormation 'DependsOn' et les références implicites (Ref, Fn::GetAtt) pour l'ordre de création ?",
    choices: ["A. Les deux sont identiques","B. Références implicites (Ref, Fn::GetAtt) : CFN déduit automatiquement la dépendance (B référence A → A est créé avant B). DependsOn : pour les dépendances non-déductibles (ex: attendre qu'une ressource soit 'active' sans la référencer directement)","C. DependsOn est toujours préféré aux références implicites","D. Les références implicites sont ignorées par CFN pour l'ordre de création"],
    answer: 1,
    exp: "CFN Dependency resolution : Références implicites = dépendances automatiques. CFN voit {Ref: MyBucket} dans une policy → crée MyBucket avant la policy. DependsOn : pour les cas où la dépendance est logique mais pas référencée dans le template. Ex : une EC2 dépend d'une NAT Gateway pour son UserData mais ne la référence pas directement → DependsOn: MyNATGateway. Éviter DependsOn si une référence implicite suffit."
  },
  {
    id: "aws-soa-c03-j15-44",
    q: "Un ops admin doit configurer une rotation des logs CloudWatch Logs pour respecter la politique de rétention de l'entreprise (90 jours). Comment faire ?",
    choices: ["A. Télécharger et supprimer manuellement les logs tous les 90 jours","B. Configurer la 'Retention Policy' sur chaque Log Group CloudWatch : mettre à 90 jours. Les logs plus anciens sont automatiquement supprimés. Automatiser avec AWS Config rule ou script Lambda","C. Exporter les logs vers S3 puis supprimer de CloudWatch","D. CloudWatch Logs conserve les logs indéfiniment — impossible à configurer"],
    answer: 1,
    exp: "Rétention CloudWatch Logs : configurer la retention period sur chaque Log Group (console, CLI : aws logs put-retention-policy --log-group-name xxx --retention-in-days 90). Les logs plus anciens sont automatiquement supprimés. Valeurs : 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, 3653 jours. Lambda + EventBridge pour automatiser la configuration sur les nouveaux Log Groups."
  },
  {
    id: "aws-soa-c03-j15-45",
    q: "Comment AWS Organizations et les OU (Organizational Units) structurent-elles la hiérarchie pour appliquer des politiques différenciées ?",
    choices: ["A. Toutes les politiques s'appliquent uniformément à tous les comptes","B. OUs organisent les comptes en hiérarchie (Root → OU Prod → OU Backend / Frontend). Les SCPs s'appliquent en cascade : une SCP à la racine s'applique à tout, une SCP sur une OU s'applique à cette OU et ses enfants","C. Les OUs ne peuvent pas avoir de sous-OUs","D. Les SCPs ne peuvent être appliquées qu'au niveau du Root"],
    answer: 1,
    exp: "Organizations OU hierarchy : 1) Root → Production OU → App1 OU / App2 OU / Database OU. 2) SCPs héritées : SCP au Root = s'applique à TOUS. SCP sur Production OU = s'applique à Production et tous ses sous-OUs/comptes. SCP la plus restrictive gagne (intersection). 3) Management Account exempt des SCPs. 4) Chaque compte peut être dans une seule OU à la fois. 5) Account Factory (Control Tower) pour créer des comptes dans la bonne OU."
  },
  {
    id: "aws-soa-c03-j15-46",
    q: "Qu'est-ce que l'AWS 'Backup Audit Manager' et comment aide-t-il à la conformité des sauvegardes ?",
    choices: ["A. Un outil pour créer des sauvegardes manuellement","B. Un service qui évalue en continu la conformité des politiques de sauvegarde par rapport à des contrôles définis (fréquence, rétention, chiffrement) et génère des rapports d'audit","C. Backup Audit Manager est identique à AWS Backup","D. Backup Audit Manager génère automatiquement des rapports SOC 2"],
    answer: 1,
    exp: "AWS Backup Audit Manager : 1) Frameworks : ensembles de contrôles prédéfinis (AWS Backup Security Posture, PCI-DSS, HIPAA) ou custom. 2) Controls : vérifier que les ressources ont un backup plan, que les backups ne dépassent pas X jours, que le chiffrement est activé, etc. 3) Évaluation continue avec score de conformité. 4) Rapports : génération quotidienne ou on-demand de rapports de conformité CSV/JSON dans S3."
  },
  {
    id: "aws-soa-c03-j15-47",
    q: "Un SysOps admin doit s'assurer que les instances EC2 d'un ASG passent des health checks applicatifs (et pas seulement EC2/ELB) avant d'être considérées saines. Comment ?",
    choices: ["A. Les health checks applicatifs ne sont pas supportés par ASG","B. Configurer l'ASG avec 'Health Check Type = ELB' + configurer le health check du Target Group ALB pour tester l'endpoint applicatif (/health retournant 200). L'ASG marquera les instances unhealthy si le TG les marque unhealthy","C. Utiliser Lambda pour vérifier la santé des instances et terminater les unhealthy","D. Les health checks applicatifs nécessitent un monitoring externe"],
    answer: 1,
    exp: "ASG Health Check applicatif : 1) ASG Health Check Type = ELB (au lieu de EC2 par défaut). 2) Target Group (ALB) health check : path /health, protocol HTTP, expected 200. 3) Si l'application crashe (health check /health retourne 503), le TG marque l'instance unhealthy → ALB arrête d'envoyer du trafic. Si ASG Health Check = ELB → ASG termine l'instance unhealthy et la remplace."
  },
  {
    id: "aws-soa-c03-j15-48",
    q: "Comment AWS 'Cost Explorer' aide-t-il à analyser et prévoir les coûts ?",
    choices: ["A. Cost Explorer affiche uniquement les coûts du mois en cours","B. Cost Explorer : visualisation historique (jusqu'à 12-13 mois), décomposition par service/région/compte/tag, prévision de coûts (jusqu'à 12 mois futurs), identification des anomalies, recommandations RI/Savings Plans","C. Cost Explorer est uniquement disponible via l'API AWS","D. Cost Explorer génère automatiquement des alertes de dépassement"],
    answer: 1,
    exp: "AWS Cost Explorer : 1) Historique : jusqu'à 13 mois de données (activé par défaut depuis fin 2023). 2) Filtres/groupements : Service, Région, AZ, Compte, Tag, Usage Type. 3) Forecast : projection des coûts sur 12 mois basée sur l'historique + ML. 4) RI Recommendations : suggestions d'achat RI selon l'utilisation. 5) Savings Plans recommendations. 6) Cost Anomaly Detection (service séparé mais intégré)."
  },
  {
    id: "aws-soa-c03-j15-49",
    q: "Quelle est la différence entre 'AWS Outposts' et 'AWS Local Zones' pour les déploiements hybrides ?",
    choices: ["A. Les deux sont identiques","B. Outposts : matériel AWS déployé dans le datacenter du client (serveur ou rack) pour les workloads nécessitant une latence ultra-faible ou la souveraineté des données. Local Zones : extensions de régions AWS dans des métropoles (sans matériel du client)","C. Local Zones sont plus proches du client qu'Outposts","D. Outposts ne supportent pas les services AWS standards"],
    answer: 1,
    exp: "Outposts vs Local Zones : AWS Outposts = infrastructure AWS physique dans vos locaux (datacenters ou on-site). Services AWS tournent localement. Utilisé pour : latence <1ms avec équipements locaux, contraintes réglementaires (données ne quittent jamais le site). Local Zones = infrastructure AWS dans des métropoles spécifiques (ex: Los Angeles, Dallas). Latence 1-10ms pour les utilisateurs locaux. Pas de matériel chez le client."
  },
  {
    id: "aws-soa-c03-j15-50",
    q: "Un SysOps admin configure une architecture serverless critique. Quelles mesures prendre pour garantir la résilience et la haute disponibilité ?",
    choices: ["A. Les services serverless sont toujours HA par défaut — aucune configuration nécessaire","B. Lambda Reserved Concurrency pour éviter le throttling, Dead Letter Queues pour les invocations asynchrones échouées, SQS avec DLQ comme buffer, API Gateway regional avec CloudFront multi-région, DynamoDB Global Tables pour les données","C. Serverless et haute disponibilité sont incompatibles","D. Utiliser un seul compte AWS pour toute l'architecture serverless"],
    answer: 1,
    exp: "HA Serverless : 1) Lambda : réservation de concurrence pour les fonctions critiques (éviter le throttling). DLQ/event source DLQ pour les invocations asynchrones échouées. Retry policies et idempotency. 2) API Gateway : configuration régionale + CloudFront + Route 53 latency routing pour multi-région. 3) SQS : buffer contre les pics + DLQ pour les messages échoués. 4) DynamoDB Global Tables : réplication active-active multi-région. 5) EventBridge : dead-letter queues pour les events."
  }
]=[
{id:"aws-soa-c03-j15-1",q:"[D1] Une alarme CloudWatch composite est en état ALARM mais aucune des alarmes enfants n'est en état ALARM. Qu'est-ce que cela signifie ?",choices:["A. Une erreur de configuration — les alarmes composites ne peuvent pas être en ALARM si les enfants ne le sont pas","B. Cela ne peut pas se produire — les alarmes composites reflètent toujours l'état de leurs enfants","C. Les alarmes composites peuvent temporairement être en état ALARM lors de leur mise à jour de configuration","D. C'est impossible — revoir la configuration des alarmes enfants car l'une d'elles doit être en ALARM"],answer:3,exp:"Les alarmes CloudWatch composites reflètent EXACTEMENT l'expression de règle définie sur les alarmes enfants. Si une alarme composite est en ALARM, c'est que la règle (combinaison de ses alarmes enfants avec AND/OR/NOT) est vraie. Il FAUT qu'au moins une combinaison d'alarmes enfants satisfasse la règle. Vérifier les alarmes enfants — l'une d'elles ou une combinaison doit être en ALARM selon la règle."},
{id:"aws-soa-c03-j15-2",q:"[D2] Un Auto Scaling Group est configuré avec une Target Tracking Policy sur CPUUtilization=70%. L'application subit un pic de trafic soudain. Que se passe-t-il ?",choices:["A. L'ASG lance immédiatement le nombre exact d'instances nécessaires","B. L'ASG scale out graduellement pour maintenir CPU ≈ 70%, avec un cooldown entre chaque action de scaling pour éviter le scale out excessif","C. L'ASG attend que la CPU dépasse 100% pour scaler","D. Target Tracking ne réagit pas aux pics soudains — uniquement aux tendances"],answer:1,exp:"Target Tracking : CloudWatch surveille la métrique (CPUUtilization). Quand la métrique dépasse la cible, l'ASG calcule le nombre d'instances nécessaires et scale out. Warmup Period (instance warmup) détermine combien de temps avant que les nouvelles instances soient comptées dans les métriques. Scale-in Cooldown empêche le scale-in trop rapide. L'ASG peut lancer plusieurs instances simultanément selon l'écart avec la cible."},
{id:"aws-soa-c03-j15-3",q:"[D3] Un développeur a modifié manuellement un paramètre de sécurité dans une instance EC2 créée par CloudFormation. Comment détecter et corriger cette dérive ?",choices:["A. Les modifications manuelles sur EC2 ne peuvent pas être détectées par CloudFormation","B. CloudFormation Drift Detection identifie les divergences, puis remedier via Systems Manager Automation ou en appliquant un update CloudFormation","C. Supprimer et recréer le stack CloudFormation entier","D. Utiliser AWS Backup pour restaurer l'instance à son état d'origine"],answer:1,exp:"Drift Detection + Remediation : 1) CloudFormation → Stacks → sélectionner le stack → Detect Drift. 2) Voir les ressources driftées et les propriétés modifiées. 3) Pour corriger : Option A — Modifier manuellement la ressource pour l'aligner sur le template. Option B — Modifier le template pour légitimiser la modification. Option C — Systems Manager Automation pour remédiation automatique. Option D — Forcer un CloudFormation stack update (si possible sans interruption)."},
{id:"aws-soa-c03-j15-4",q:"[D4] Un SysOps admin doit s'assurer qu'aucun utilisateur IAM dans l'organisation ne peut désactiver CloudTrail. Quelle est la solution la plus efficace ?",choices:["A. Créer une IAM policy Deny sur cloudtrail:StopLogging dans chaque compte","B. Créer une SCP au niveau Organisation avec Deny sur cloudtrail:StopLogging, cloudtrail:DeleteTrail, cloudtrail:UpdateTrail appliquée à tous les OUs","C. Configurer CloudTrail avec des alertes CloudWatch","D. Utiliser AWS Config Rule pour détecter la désactivation de CloudTrail"],answer:1,exp:"SCP Organisation est la solution optimale : une SCP avec Deny explicit sur cloudtrail:StopLogging, cloudtrail:DeleteTrail, cloudtrail:UpdateTrail appliquée à tous les OUs (y compris les nouveaux comptes) bloque TOUS les principaux IAM dans les comptes membres, y compris les admins. Les SCPs s'appliquent avant les IAM policies. C'est un guardrail immuable géré centralement."},
{id:"aws-soa-c03-j15-5",q:"[D5] Une entreprise a 20 VPCs dans 5 régions différentes qui doivent tous communiquer entre eux et avec le réseau on-premises. Quelle architecture réseau est recommandée ?",choices:["A. Créer 190 VPC Peering connections entre tous les VPCs","B. Déployer un Transit Gateway par région, créer des TGW Inter-Region Peerings entre régions, et connecter l'on-premises via Direct Connect ou VPN à un TGW","C. Utiliser uniquement un VPN Site-to-Site vers chaque VPC","D. Toutes les entreprises doivent utiliser un VPC unique pour éviter cette complexité"],answer:1,exp:"Architecture hub-and-spoke : Transit Gateway par région (hub régional). Les 20 VPCs s'attachent aux TGW de leur région. Inter-Region TGW Peering pour la communication entre régions. Direct Connect/VPN vers un TGW central (ou Transit VIF via Direct Connect Gateway). Cette architecture évite le maillage de peerings et centralise le routage. AWS Network Manager pour la visualisation globale."},
{id:"aws-soa-c03-j15-6",q:"[D1] Comment configurer CloudWatch Container Insights pour monitorer un cluster ECS Fargate ?",choices:["A. Container Insights nécessite un agent CloudWatch sur chaque tâche Fargate","B. Activer Container Insights au niveau du cluster ECS dans la console ou via CLI, et les métriques sont automatiquement collectées sans agent (Fargate gère l'infra)","C. Container Insights est uniquement disponible pour EKS","D. Les métriques ECS Fargate ne peuvent pas être envoyées à CloudWatch"],answer:1,exp:"Container Insights pour ECS Fargate : 1) Activer Container Insights sur le cluster ECS (console ou aws ecs update-cluster-settings). 2) AWS collecte automatiquement : CPU, mémoire, réseau, nombre de tâches, par cluster, service, et tâche. Fargate = pas d'agent à installer (AWS gère l'infrastructure). Pour EKS : CloudWatch Agent (DaemonSet) ou ADOT Collector nécessaire. Métriques dans la namespace /aws/ecs/containerinsights."},
{id:"aws-soa-c03-j15-7",q:"[D2] Un SysOps admin remarque que les instances EC2 d'un ASG se lancent mais terminent immédiatement avec le message 'health check failed'. Quelle est la cause probable ?",choices:["A. L'AMI utilisée est corrompue","B. La nouvelle instance échoue les health checks ALB (HTTP 200 requis) avant la fin du bootstrapping. Le Warm-up Period est trop court","C. L'ASG a trop d'instances et supprime les nouvelles","D. Les Security Groups bloquent les health checks"],answer:1,exp:"Problème de health check timing : les instances se lancent, l'ALB commence les health checks immédiatement, mais l'application met du temps à démarrer (installation de paquets, démarrage de services via User Data). Solutions : augmenter l'Health Check Grace Period de l'ASG (laisse le temps aux instances de démarrer avant les health checks), augmenter le Warm-up Period Target Tracking, ou utiliser les Lifecycle Hooks pour signaler quand l'instance est prête (InService)."},
{id:"aws-soa-c03-j15-8",q:"[D3] Comment déployer un patch critique sur 1000 instances EC2 en production avec un impact minimal ?",choices:["A. Patcher toutes les instances simultanément la nuit","B. Systems Manager Patch Manager + Maintenance Windows avec MaxConcurrency=10% et MaxErrors=5%, déployé d'abord sur dev, puis staging, puis prod en rolling waves","C. Créer une nouvelle AMI et remplacer toutes les instances","D. Envoyer un Run Command à toutes les instances et espérer qu'il n'y ait pas d'erreurs"],answer:1,exp:"Stratégie de patching production : 1) Patch Baselines avec délai d'approbation (ex: 7 jours après release). 2) Patch Groups pour cibler dev/staging/prod séparément. 3) Maintenance Windows avec MaxConcurrency=10% (100 instances à la fois) et MaxErrors=1% (arrêt si 10 erreurs). 4) Process de déploiement : dev (validation) → staging (validation étendue) → prod (progressive). Monitoring dans Systems Manager Compliance."},
{id:"aws-soa-c03-j15-9",q:"[D4] Un bucket S3 contenant des données sensibles est accessible depuis internet. Comment sécuriser immédiatement et prévenir la récurrence ?",choices:["A. Changer les ACLs du bucket","B. Activer S3 Block Public Access sur le bucket ET au niveau du compte, ajouter une bucket policy restrictive, et utiliser AWS Config rule s3-bucket-public-access-prohibited pour la détection continue","C. Déplacer les données dans un autre service","D. Chiffrer les données suffit à les sécuriser même si accessibles publiquement"],answer:1,exp:"Remédiation immédiate : S3 Block Public Access (au niveau bucket ET compte) bloque toutes les ACLs et bucket policies publiques. Vérifier la bucket policy pour supprimer tout accès public. Conformité continue : Config rule s3-bucket-public-access-prohibited + remediation automatique SSM. Macie pour détecter les données sensibles exposées. IAM Access Analyzer pour identifier les accès S3 non intentionnels. GuardDuty pour détecter les accès anormaux."},
{id:"aws-soa-c03-j15-10",q:"[D5] Comment réduire les coûts de transfert de données entre des microservices déployés dans le même VPC ?",choices:["A. Utiliser des IPs publiques entre les microservices","B. S'assurer que les microservices communiquent via des IPs privées dans le même VPC (pas de frais de transfert intra-VPC). Utiliser des VPC Endpoints pour accéder aux services AWS sans NAT Gateway","C. Passer à des instance types plus petits","D. Les coûts de transfert intra-VPC sont inévitables"],answer:1,exp:"Optimisation coûts réseau : Communication intra-VPC via IPs privées = gratuite (même AZ). Différentes AZs dans le même VPC : $0.01/GB each way. Différentes régions : beaucoup plus cher. VPC Endpoints S3/DynamoDB (Gateway) = gratuits, évitent le coût de trafic via NAT Gateway. Interface Endpoints pour les autres services AWS évitent NAT ($0.01/h + $0.01/GB vs NAT Gateway $0.045/h + $0.045/GB). Architecturer les services dans la même AZ pour les communications intensives."},
{id:"aws-soa-c03-j15-11",q:"[D1] Comment créer une alerte CloudWatch pour être notifié quand un utilisateur IAM appelle une API de sécurité sensible ?",choices:["A. CloudWatch ne peut pas monitorer les événements IAM","B. Activer CloudTrail, envoyer les logs vers CloudWatch Logs, créer un Metric Filter sur les événements IAM sensibles (ex: DeleteTrail, StopLogging), puis créer une alarme CloudWatch sur cette métrique custom","C. Configurer AWS Config pour les notifications en temps réel","D. IAM envoie automatiquement des alertes pour les opérations sensibles"],answer:1,exp:"Pipeline de monitoring sécurité : 1) CloudTrail Multi-Region Trail. 2) CloudTrail logs → CloudWatch Logs Log Group. 3) Metric Filter avec filter pattern ex: {$.eventName = 'DeleteTrail' || $.eventName = 'StopLogging'} → crée une métrique custom. 4) Alarme CloudWatch sur cette métrique (threshold = 0, traitement toute action comme alarme). 5) Action SNS → notification email/PagerDuty. Délai : environ 5-15 minutes."},
{id:"aws-soa-c03-j15-12",q:"[D2] Un NLB (Network Load Balancer) doit préserver l'adresse IP source du client pour les applications qui en ont besoin. Comment est-ce géré ?",choices:["A. Les NLB masquent toujours l'IP source — ce n'est pas possible","B. Les NLB préservent nativement l'adresse IP source du client (IP passthrough au niveau TCP). Pour les ALBs, utiliser l'en-tête X-Forwarded-For","C. Il faut configurer Proxy Protocol sur le NLB","D. L'IP source est préservée uniquement pour les connexions UDP"],answer:1,exp:"NLB vs ALB pour la préservation de l'IP source : NLB (L4) préserve l'IP client nativement — les instances reçoivent directement l'IP source originale (connexion TCP directe). ALB (L7) est un proxy — les instances voient l'IP du load balancer mais l'IP client est dans l'en-tête X-Forwarded-For. Pour les applications nécessitant l'IP réelle du client (géolocalisation, audit, rate limiting sur l'app) : préférer NLB ou implémenter X-Forwarded-For."},
{id:"aws-soa-c03-j15-13",q:"[D3] Un SysOps admin a besoin d'un service qui permet de tester si l'application peut s'exécuter sur un type d'instance EC2 moins cher avant de migrer. Quel outil AWS utiliser ?",choices:["A. AWS Pricing Calculator","B. AWS Compute Optimizer qui analyse l'utilisation réelle des instances et recommande des types plus adaptés (moins chers ou plus performants)","C. AWS Cost Explorer avec right-sizing recommendations","D. AWS Trusted Advisor performance recommendations"],answer:1,exp:"AWS Compute Optimizer : analyse 14 jours d'utilisation des métriques CloudWatch (CPU, mémoire, débit réseau, IOPS) pour des instances EC2, groupes ASG, volumes EBS, functions Lambda, et ECS/Fargate. Recommande des types d'instances mieux adaptés (sur-provisionné → down-size, sous-provisionné → up-size). Fournit un 'finding' (over-provisioned, under-provisioned, optimized) et les économies potentielles. Active l'Enhanced Infrastructure Metrics pour 3 mois d'historique."},
{id:"aws-soa-c03-j15-14",q:"[D4] Comment gérer de façon sécurisée les secrets de rotation pour une base de données RDS utilisée par plusieurs lambdas dans différents comptes AWS ?",choices:["A. Stocker les credentials dans des variables d'environnement Lambda","B. AWS Secrets Manager avec rotation automatique RDS dans le compte de la DB, partagé via RAM ou Resource Policy cross-account, les Lambdas récupèrent le secret via secretsmanager:GetSecretValue","C. Créer un utilisateur IAM avec accès DB et partager les credentials","D. Utiliser Parameter Store Standard pour le partage cross-account"],answer:1,exp:"Gestion multi-compte des secrets RDS : Secrets Manager dans le compte DB avec rotation automatique Lambda (AWS-gérée pour RDS). Resource policy sur le secret autorisant les comptes Lambda (Principal: {'AWS': 'arn:aws:iam::ACCOUNT_ID:root'}). Dans le compte Lambda : IAM role avec secretsmanager:GetSecretValue sur l'ARN du secret. Les Lambdas retrievent le secret dynamiquement → rotation transparente. Pas de credentials statiques dans les vars d'environnement."},
{id:"aws-soa-c03-j15-15",q:"[D5] Comment optimiser les performances DNS pour une architecture hybride AWS-on-premises ?",choices:["A. Utiliser les DNS AWS uniquement et abandonner les DNS on-premises","B. Route 53 Resolver avec Inbound/Outbound Endpoints, Resolver Rules pour le forward des domaines privés, et Private Hosted Zones pour les enregistrements AWS internes","C. Déployer BIND DNS dans chaque VPC","D. Les performances DNS ne peuvent pas être optimisées dans les architectures hybrides"],answer:1,exp:"Optimisation DNS hybride : Outbound Resolver Rules : les requêtes VPC pour .corp.example.com → Outbound Endpoint → DNS on-premises. Inbound Endpoint : les serveurs on-premises font forward des requêtes .aws.example.com → Inbound Endpoint → Route 53. TTL optimization : augmenter les TTL pour les enregistrements stables. DNS Firewall pour la sécurité. PHZ (Private Hosted Zones) pour les enregistrements internes AWS. Éviter les DNS lookups inutiles dans les applications en utilisant le caching."},
{id:"aws-soa-c03-j15-16",q:"[D1] Un SysOps admin veut créer un dashboard CloudWatch qui affiche les métriques de toutes les régions dans une seule vue. Comment procéder ?",choices:["A. CloudWatch ne peut pas afficher les métriques de plusieurs régions","B. Utiliser CloudWatch Cross-Account Cross-Region dashboards ou les métriques cross-région dans les dashboards CloudWatch en spécifiant la région dans la widget configuration","C. Exporter toutes les métriques vers une région centrale via Lambda","D. Utiliser AWS Cost Explorer pour les métriques multi-régions"],answer:1,exp:"CloudWatch Cross-Region Dashboards : dans les CloudWatch dashboard widgets, vous pouvez spécifier la région pour chaque widget (au lieu de la région actuelle). CloudWatch Cross-Account Observability permet aussi de visualiser les métriques d'autres comptes dans un compte monitoring central. Chaque widget peut afficher des métriques d'une région différente. Utile pour les applications déployées en multi-régions (DR, global)."},
{id:"aws-soa-c03-j15-17",q:"[D2] Comment implémenter un 'Blue/Green Deployment' avec AWS CodeDeploy et ECS ?",choices:["A. Blue/Green n'est pas supporté avec ECS","B. CodeDeploy avec ECS déploie une nouvelle version dans un Target Group Green, bascule progressivement le trafic ALB depuis le TG Blue vers le TG Green, avec validation et rollback automatique si les health checks échouent","C. Blue/Green nécessite deux clusters ECS séparés","D. Blue/Green avec ECS nécessite de supprimer les anciens conteneurs avant de déployer les nouveaux"],answer:1,exp:"Blue/Green ECS + CodeDeploy : configuration AppSpec.yml avec TaskDefinition + LoadBalancerInfo. CodeDeploy : 1) Lance des tasks ECS avec la nouvelle image (Green). 2) Enregistre les tasks dans le Target Group Green. 3) Teste les health checks. 4) Bascule progressivement le trafic ALB (Linear10PercentEvery1Minute, Canary10Percent5Minutes, AllAtOnce). 5) Rollback automatique si health checks échouent ou les tests Lambda beforeAllowTraffic/afterAllowTraffic échouent."},
{id:"aws-soa-c03-j15-18",q:"[D4] Comment implémenter une politique qui force le chiffrement de tous les objets stockés dans S3 ?",choices:["A. Les buckets S3 chiffrent automatiquement tous les objets","B. Combinaison : Default Encryption du bucket (SSE-S3 ou SSE-KMS par défaut), Bucket Policy avec Deny si aws:SecureTransport est false et si s3:x-amz-server-side-encryption n'est pas défini","C. Chiffrement S3 nécessite Shield Advanced","D. Seul le chiffrement côté client peut être forcé"],answer:1,exp:"Forcer le chiffrement S3 : 1) Default Encryption (SSE-S3 ou SSE-KMS) sur le bucket = chiffre automatiquement les objets si aucune encryption header n'est fourni. 2) Bucket Policy Deny : refuser les PUT si l'en-tête x-amz-server-side-encryption est absent ou incorrect. Exemple : Condition: StringNotEquals: s3:x-amz-server-side-encryption: aws:kms → Deny. 3) HTTPS uniquement : Condition: Bool: aws:SecureTransport: false → Deny. Config rule s3-bucket-server-side-encryption-enabled pour monitoring."},
{id:"aws-soa-c03-j15-19",q:"[D1-5] Un administrateur AWS doit analyser pourquoi une architecture AWS entraîne des coûts plus élevés que prévu. Quels outils utiliser en premier ?",choices:["A. Contacter AWS Support pour demander une analyse","B. AWS Cost Explorer (visualiser les coûts par service, région, tag), AWS Compute Optimizer (ressources sur-provisionnées), Trusted Advisor (cost optimization), et Cost and Usage Report (CUR) pour analyse détaillée","C. Analyser les factures PDF AWS manuellement","D. Les coûts ne peuvent pas être analysés en temps réel dans AWS"],answer:1,exp:"Analyse des coûts AWS : 1) Cost Explorer : tendances, répartition par service/région/tag, anomaly detection. 2) AWS Compute Optimizer : instances EC2 et volumes EBS sur-provisionnés. 3) Trusted Advisor (Cost Optimization) : idle resources, underutilized EC2, unused EBS, Savings Plans recommendations. 4) Cost and Usage Report (CUR) : rapport CSV/Parquet détaillé vers S3, analyse avec Athena. 5) Resource Groups Tagging API : vérifier les ressources sans tags (non attribuées aux projets)."},
{id:"aws-soa-c03-j15-20",q:"[D1-5] Un SysOps admin doit préparer un compte AWS pour un audit de sécurité. Quelle checklist est la plus complète ?",choices:["A. Vérifier uniquement les Security Groups ouverts sur le port 22","B. CloudTrail activé + Config Rules conformité + Security Hub standards (CIS/AWS Best Practices) + IAM Credential Report + GuardDuty activé + Macie pour données sensibles S3 + VPC Flow Logs + AWS Artifact pour rapports de conformité","C. Chiffrer tous les volumes EBS est suffisant","D. Un audit de sécurité AWS ne nécessite pas de préparation spécifique"],answer:1,exp:"Checklist audit sécurité AWS : 1) CloudTrail : multi-région, log validation, chiffrement. 2) Config : rules actives, conformité. 3) Security Hub : standards activés (CIS, AWS Foundational). 4) IAM : Credential Report, Access Analyzer, MFA root/users, pas de clés root, rotation des clés. 5) GuardDuty : activé dans toutes les régions. 6) Macie : scan des buckets S3. 7) VPC Flow Logs : activés. 8) Chiffrement : EBS, S3, RDS. 9) AWS Artifact : rapports de conformité. 10) AWS Trusted Advisor : security checks."}
];
