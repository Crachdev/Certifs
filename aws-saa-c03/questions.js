window.QKEY = "aws-saa-c03";

window.QUIZ_META = {
  fiche: "fiche.html",
  exam: "AWS Solutions Architect Associate SAA-C03",
  passScore: 72,
  examMins: 130,
  rules: [
    "65 questions QCM (choix unique ou multiple)",
    "Score minimum : 720/1000 (≈ 72%)",
    "Durée : 130 minutes",
    "4 domaines : Sécurisé (30%), Résilient (26%), Haute performance (24%), Optimisé coût (20%)"
  ]
};

window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "IAM & Organisations — Sécurité des identités",
    dom: [1],
    time: "2h",
    sections: [
      { id: "orga", titre: "AWS Organizations & Control Tower" },
      { id: "iam-fondamentaux", titre: "IAM Fondamentaux & Policies" },
      { id: "iam-roles", titre: "Rôles, Fédération & SSO" },
      { id: "iam-audit", titre: "Outils d'audit IAM" }
    ],
    read: ["fiche.html#orga"],
    links: [
      ["IAM User Guide", "https://docs.aws.amazon.com/IAM/latest/UserGuide/"],
      ["AWS Organizations", "https://docs.aws.amazon.com/organizations/latest/userguide/"]
    ],
    focus: ["SCP vs Permission Boundary vs Session Policy", "AssumeRole + trust policy", "IAM Access Analyzer vs Credential Report"]
  },
  {
    d: 2,
    theme: "Réseau — VPC, Endpoints & Hybride",
    dom: [1, 3],
    time: "2h",
    sections: [
      { id: "vpc", titre: "VPC, Subnets, ACL, SG" },
      { id: "endpoints", titre: "VPC Endpoints & PrivateLink" },
      { id: "hybride", titre: "VPN, Direct Connect, Transit Gateway" },
      { id: "dns", titre: "Route 53 & Global Accelerator" }
    ],
    read: ["fiche.html#reseau"],
    links: [
      ["VPC User Guide", "https://docs.aws.amazon.com/vpc/latest/userguide/"],
      ["Transit Gateway", "https://docs.aws.amazon.com/vpc/latest/tgw/"]
    ],
    focus: ["Gateway Endpoint vs Interface Endpoint", "NAT Gateway vs Egress-Only IGW", "VPC Peering vs Transit Gateway vs PrivateLink"]
  },
  {
    d: 3,
    theme: "Stockage — EBS, S3 & Glacier",
    dom: [1, 3, 4],
    time: "2h",
    sections: [
      { id: "ebs", titre: "EBS Types & Chiffrement" },
      { id: "s3-fondamentaux", titre: "S3 Fondamentaux & Classes" },
      { id: "s3-chiffrement", titre: "S3 Chiffrement (SSE-S3/KMS/C)" },
      { id: "s3-avance", titre: "S3 Réplication, Object Lock & Pre-signed" }
    ],
    read: ["fiche.html#stockage"],
    links: [
      ["S3 User Guide", "https://docs.aws.amazon.com/AmazonS3/latest/userguide/"],
      ["EBS User Guide", "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html"]
    ],
    focus: ["SSE-S3 vs SSE-KMS vs SSE-C vs Client-side", "S3 Block Public Access = explicit deny", "Lifecycle Policy : vers le bas uniquement sauf Intelligent Tiering"]
  },
  {
    d: 4,
    theme: "Compute & Haute disponibilité",
    dom: [2, 3],
    time: "2h",
    sections: [
      { id: "lb", titre: "ALB, NLB, GWLB" },
      { id: "asg", titre: "Auto Scaling & Policies" },
      { id: "dr", titre: "Disaster Recovery & AWS DRS" },
      { id: "rds", titre: "RDS, Aurora & DynamoDB" }
    ],
    read: ["fiche.html#lb-asg", "fiche.html#dr", "fiche.html#db"],
    links: [
      ["ELB User Guide", "https://docs.aws.amazon.com/elasticloadbalancing/"],
      ["RDS User Guide", "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/"]
    ],
    focus: ["ALB vs NLB vs GWLB cas d'usage", "Multi-AZ vs Read Replica RDS", "RPO/RTO des 4 stratégies DR"]
  },
  {
    d: 5,
    theme: "Sécurité avancée — WAF, KMS, GuardDuty",
    dom: [1],
    time: "2h",
    sections: [
      { id: "shield-waf", titre: "Shield, WAF & Firewall Manager" },
      { id: "kms", titre: "KMS, CloudHSM & Envelope Encryption" },
      { id: "detection", titre: "GuardDuty, Inspector, Detective, Macie" },
      { id: "secrets", titre: "Secrets Manager vs Parameter Store" }
    ],
    read: ["fiche.html#securite"],
    links: [
      ["KMS Developer Guide", "https://docs.aws.amazon.com/kms/latest/developerguide/"],
      ["GuardDuty User Guide", "https://docs.aws.amazon.com/guardduty/latest/ug/"]
    ],
    focus: ["KMS Envelope Encryption flow", "GuardDuty vs Inspector vs Macie", "Shield Standard vs Advanced"]
  },
  {
    d: 6,
    theme: "Découplage, Serverless & Containers",
    dom: [2, 3],
    time: "2h",
    sections: [
      { id: "sqs-sns", titre: "SQS, SNS & EventBridge" },
      { id: "lambda", titre: "Lambda & Lambda@Edge" },
      { id: "containers", titre: "ECS, EKS & Fargate" },
      { id: "cloudfront", titre: "CloudFront & Edge" }
    ],
    read: ["fiche.html#decouplage", "fiche.html#iac", "fiche.html#edge"],
    links: [
      ["Lambda Developer Guide", "https://docs.aws.amazon.com/lambda/latest/dg/"],
      ["SQS Developer Guide", "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/"]
    ],
    focus: ["SQS Standard vs FIFO", "Lambda PUSH vs PULL model", "Lambda@Edge vs CloudFront Functions"]
  },
  {
    d: 7,
    theme: "Data Analytics, Migration & Optimisation coûts",
    dom: [3, 4],
    time: "2h",
    sections: [
      { id: "data", titre: "Kinesis, Athena, Glue & EMR" },
      { id: "migration", titre: "7 R's & Outils de migration" },
      { id: "pricing", titre: "Pricing : On-Demand, Reserved, Spot" },
      { id: "monitoring", titre: "CloudWatch, CloudTrail & Config" }
    ],
    read: ["fiche.html#data", "fiche.html#migration", "fiche.html#monitoring", "fiche.html#divers"],
    links: [
      ["CloudWatch User Guide", "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/"],
      ["CloudTrail User Guide", "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/"]
    ],
    focus: ["Kinesis Streams vs Firehose", "7 R's de migration", "Reserved vs Savings Plans vs Spot"]
  }
];

window.QDATA = window.QDATA || {};

// JOUR 1 — IAM & Organisations
window.QDATA[1] = [
  {
    t: "AWS Organizations",
    q: "Une entreprise utilise AWS Organizations avec plusieurs OUs. L'administrateur veut s'assurer qu'aucun compte membre ne peut désactiver AWS CloudTrail, même si un administrateur local modifie ses propres politiques IAM. Quelle est la solution la plus appropriée ?",
    o: ["Activer MFA sur tous les comptes root", "Créer une SCP qui refuse l'action cloudtrail:StopLogging sur tous les comptes membres", "Utiliser IAM Permission Boundaries sur les administrateurs locaux", "Configurer AWS Config pour détecter et corriger automatiquement les changements"],
    a: 1,
    e: "Les SCPs (Service Control Policies) s'appliquent à tous les comptes membres d'une OU et prennent le dessus sur les politiques IAM locales, y compris celles des administrateurs. Une SCP deny cloudtrail:StopLogging empêchera tout le monde dans les comptes membres de désactiver CloudTrail."
  },
  {
    t: "IAM Policies",
    q: "Un développeur a une politique IAM qui lui permet s3:PutObject sur un bucket. Une resource-based policy sur ce bucket lui refuse s3:PutObject. Une Permission Boundary lui permet s3:PutObject. Peut-il écrire dans le bucket ?",
    o: ["Oui, car la Permission Boundary prend le dessus", "Non, car le deny explicite de la resource policy l'emporte", "Oui, car les deux politiques identity et resource sont cumulées", "Cela dépend de la région du bucket"],
    a: 1,
    e: "Un deny explicite (Deny) dans une politique AWS l'emporte toujours sur tout Allow, quelle que soit la source de la permission. La resource-based policy avec un Deny explicite bloque l'accès même si la Permission Boundary et l'identity policy accordent l'accès."
  },
  {
    t: "IAM Rôles",
    q: "Une application EC2 doit accéder à des ressources DynamoDB. Quelle est la meilleure pratique pour gérer cet accès ?",
    o: ["Créer un utilisateur IAM dédié et stocker ses credentials dans le code de l'application", "Créer un utilisateur IAM dédié et stocker ses credentials dans les variables d'environnement EC2", "Attacher un rôle IAM à l'instance EC2 via un Instance Profile", "Utiliser les credentials root de l'account AWS"],
    a: 2,
    e: "Un Instance Profile attache un rôle IAM à une instance EC2. L'instance peut alors appeler AssumeRole automatiquement et obtenir des credentials temporaires via le service de métadonnées (IMDS). C'est la best practice AWS car les credentials sont temporaires, rotés automatiquement, et jamais stockés dans le code."
  },
  {
    t: "IAM Fédération",
    q: "Une entreprise utilise Microsoft Active Directory on-premises. Les employés doivent pouvoir accéder à la console AWS avec leurs credentials AD sans créer de comptes IAM séparés. Quelle architecture convient le mieux ?",
    o: ["Synchroniser les utilisateurs AD vers IAM avec un script quotidien", "Utiliser AWS IAM Identity Center avec une connexion AD via AWS Managed Microsoft AD ou AD Connector", "Créer des utilisateurs IAM avec les mêmes mots de passe que l'AD", "Utiliser AWS Cognito User Pools pour gérer l'authentification"],
    a: 1,
    e: "AWS IAM Identity Center (ex-SSO) supporte la fédération avec Active Directory via AD Connector (passerelle vers l'AD on-prem) ou AWS Managed Microsoft AD (réplication AD). Les utilisateurs s'authentifient avec leurs credentials AD existants et obtiennent accès aux comptes AWS via SAML 2.0."
  },
  {
    t: "IAM Audit",
    q: "Un auditeur de sécurité demande un rapport listant tous les utilisateurs IAM qui n'ont pas utilisé leurs access keys depuis 90 jours. Quel outil AWS est le plus approprié ?",
    o: ["IAM Access Analyzer", "IAM Credential Report", "AWS Config avec une règle personnalisée", "CloudTrail Lake"],
    a: 1,
    e: "Le IAM Credential Report liste tous les utilisateurs IAM avec des informations sur leurs credentials : dates de création, dernière utilisation, rotation des mots de passe et access keys. C'est l'outil idéal pour identifier les credentials inactifs. IAM Access Analyzer identifie les ressources partagées à l'extérieur, pas les credentials inactifs."
  },
  {
    t: "AWS Organizations",
    q: "Une entreprise veut déployer une infrastructure standard (VPC, sous-réseaux de base, GuardDuty) automatiquement dans chaque nouveau compte AWS créé dans son organisation. Quel service AWS facilite cela ?",
    o: ["AWS Service Catalog", "AWS Control Tower avec Account Factory", "AWS CloudFormation StackSets", "AWS RAM (Resource Access Manager)"],
    a: 1,
    e: "AWS Control Tower avec Account Factory automatise la création de comptes AWS avec une configuration de référence (landing zone). Il déploie automatiquement des guardrails (SCP + AWS Config rules) et peut configurer des services comme GuardDuty dans chaque nouveau compte. StackSets peut déployer des stacks mais ne gère pas la création de comptes."
  },
  {
    t: "IAM Policies",
    q: "Une équipe de développeurs doit pouvoir créer et gérer des rôles IAM, mais l'administrateur veut s'assurer qu'ils ne peuvent pas créer des rôles avec plus de permissions qu'eux-mêmes. Quelle fonctionnalité IAM répond à ce besoin ?",
    o: ["Service Control Policies (SCP)", "IAM Permission Boundaries", "IAM Resource-based Policies", "IAM Session Policies"],
    a: 1,
    e: "Les Permission Boundaries définissent le maximum de permissions qu'un utilisateur ou rôle peut avoir. En configurant une Permission Boundary sur les développeurs qui les oblige à attacher une Permission Boundary identique à toute entité IAM qu'ils créent (via la condition iam:PermissionsBoundary), on s'assure qu'ils ne peuvent pas créer des entités avec plus de permissions qu'eux-mêmes."
  },
  {
    t: "IAM Fédération",
    q: "Une application mobile utilise Amazon Cognito pour l'authentification. Les utilisateurs authentifiés doivent pouvoir accéder directement à des objets spécifiques S3. Quelle fonctionnalité Cognito permet cela ?",
    o: ["Cognito User Pools uniquement", "Cognito Identity Pools avec AssumeRoleWithWebIdentity", "IAM Identity Center avec SAML 2.0", "Lambda Authorizer pour API Gateway"],
    a: 1,
    e: "Cognito Identity Pools (Federated Identities) échange les tokens JWT de Cognito User Pools (ou d'autres IdPs) contre des credentials AWS temporaires via AssumeRoleWithWebIdentity. Ces credentials permettent l'accès direct aux services AWS comme S3. User Pools gère uniquement l'authentification (JWT), pas les accès AWS."
  }
];

// JOUR 2 — Réseau
window.QDATA[2] = [
  {
    t: "VPC Fondamentaux",
    q: "Une instance EC2 dans un subnet privé doit télécharger des mises à jour depuis internet, mais ne doit pas être accessible depuis internet. Quelle configuration est nécessaire ?",
    o: ["Attacher une Internet Gateway directement au subnet privé", "Créer une NAT Gateway dans le subnet privé et ajouter une route", "Créer une NAT Gateway dans un subnet public et ajouter une route depuis le subnet privé vers la NAT Gateway", "Utiliser un VPC Endpoint pour accéder à internet"],
    a: 2,
    e: "Une NAT Gateway doit être placée dans un subnet public (qui a une route vers l'Internet Gateway). Le subnet privé a une route par défaut (0.0.0.0/0) vers la NAT Gateway. La NAT Gateway traduit l'adresse privée en adresse publique pour le trafic sortant, sans permettre l'accès entrant depuis internet."
  },
  {
    t: "VPC Endpoints",
    q: "Une application EC2 dans un VPC privé (sans internet) doit accéder à Amazon S3 dans la même région sans passer par internet. Quelle est la solution la moins coûteuse ?",
    o: ["Créer une NAT Gateway pour accéder à S3", "Créer un VPC Interface Endpoint (PrivateLink) pour S3", "Créer un VPC Gateway Endpoint pour S3", "Configurer un AWS Direct Connect"],
    a: 2,
    e: "Un Gateway Endpoint pour S3 (et DynamoDB) est gratuit et s'intègre via la route table du VPC. Il permet l'accès privé à S3 sans NAT Gateway ni Internet Gateway. Contrairement à l'Interface Endpoint (PrivateLink) qui a un coût horaire et par Go, le Gateway Endpoint n'a aucun coût."
  },
  {
    t: "Security Groups vs ACL",
    q: "Un administrateur remarque que des instances EC2 dans un subnet peuvent se pinguer entre elles, mais ne peuvent pas se pinguer depuis une instance dans un autre subnet du même VPC. Les Security Groups des instances autorisent ICMP. Quelle est la cause probable ?",
    o: ["Les Security Groups sont stateful donc ils bloquent les réponses ICMP", "Une Network ACL sur l'un des subnets bloque ICMP en entrée ou en sortie", "Il faut activer VPC Flow Logs pour permettre la communication inter-subnets", "Les instances doivent être dans le même Availability Zone"],
    a: 1,
    e: "Les Network ACLs sont stateless (contrairement aux Security Groups qui sont stateful). Si une ACL bloque le trafic ICMP en entrée (ping entrant) ou en sortie (réponse ICMP sortante), la communication inter-subnets échoue même si les Security Groups l'autorisent. Il faut vérifier les règles ALLOW entrantes ET sortantes sur les ACLs des deux subnets."
  },
  {
    t: "Connectivité hybride",
    q: "Une entreprise a plusieurs VPCs dans différentes régions AWS et un datacenter on-premises. Elle veut une connectivité hub-and-spoke entre tous ces environnements avec une gestion centralisée. Quelle solution convient le mieux ?",
    o: ["VPC Peering entre chaque paire de VPCs + VPN séparé pour on-premises", "AWS Transit Gateway avec attachements VPC et VPN", "Internet Gateway dans chaque VPC + VPN entre on-premises et chaque VPC", "AWS Direct Connect uniquement"],
    a: 1,
    e: "AWS Transit Gateway agit comme hub central qui connecte plusieurs VPCs (attachements VPC) et réseaux on-premises (attachements VPN ou Direct Connect). C'est un réseau transitif, donc les VPCs peuvent communiquer entre eux via le TGW. VPC Peering est non-transitif et nécessite un peering entre chaque paire, ce qui devient complexe à grande échelle."
  },
  {
    t: "Route 53",
    q: "Une application web est déployée dans deux régions AWS. L'entreprise veut que les utilisateurs soient redirigés vers la région la plus proche géographiquement pour minimiser la latence. Quel type de routing Route 53 utiliser ?",
    o: ["Routing Failover", "Routing Géolocalisation", "Routing Latence (Latency-based routing)", "Routing Weighted"],
    a: 2,
    e: "Le Latency-based routing de Route 53 dirige les utilisateurs vers la ressource AWS avec la latence réseau la plus faible par rapport à leur localisation. C'est différent du Geolocation routing qui redirige selon la localisation géographique (pays/continent) quelle que soit la latence réelle. Le Latency routing mesure la latence réseau réelle."
  },
  {
    t: "Global Accelerator vs CloudFront",
    q: "Une application TCP/UDP temps réel (jeux en ligne) doit avoir la meilleure latence mondiale et une adresse IP statique et annoncée globalement. Quelle solution choisir ?",
    o: ["Amazon CloudFront avec TCP/UDP support", "AWS Global Accelerator", "Route 53 avec Latency-based routing", "Network Load Balancer multi-région"],
    a: 1,
    e: "AWS Global Accelerator utilise des IP anycast statiques qui routent le trafic vers le point d'entrée AWS le plus proche via le réseau AWS interne (backbone), réduisant la latence. Il supporte TCP et UDP et est idéal pour les applications temps réel. CloudFront est un CDN orienté cache HTTP/S, pas un accélérateur réseau générique. Les IP de Global Accelerator restent stables même en cas de failover."
  },
  {
    t: "VPC Design",
    q: "Une entreprise a des subnets publics et privés dans son VPC. Les instances du subnet public ont des IP publiques et une route vers l'IGW. Les instances du subnet privé utilisent une NAT Gateway. Un développeur observe que les instances privées ne peuvent pas atteindre un service S3 dans la même région. Quelle est la cause la plus probable ?",
    o: ["La NAT Gateway ne supporte pas l'accès à S3", "Il faut activer l'accélération de transfert S3", "Il manque un VPC Endpoint pour S3 ou il n'y a pas de route dans la route table du subnet privé", "S3 n'est pas accessible depuis un subnet privé"],
    a: 2,
    e: "Sans VPC Endpoint, le trafic vers S3 passe par internet via la NAT Gateway (ce qui est possible mais génère des coûts NAT). Si la NAT Gateway n'est pas configurée correctement ou si on veut éviter les coûts NAT, on peut créer un Gateway Endpoint S3 et l'ajouter dans la route table du subnet privé. L'absence de route ou de NAT Gateway fonctionnelle sont les causes les plus probables."
  },
  {
    t: "PrivateLink",
    q: "Une entreprise A veut exposer un service (API interne) à une entreprise B qui a son propre VPC, sans exposer l'ensemble du VPC A. Quelle solution AWS est la plus adaptée ?",
    o: ["VPC Peering entre les deux VPCs", "AWS Transit Gateway partagé via RAM", "AWS PrivateLink (Interface Endpoint) avec Network Load Balancer", "VPN site-to-site entre les deux VPCs"],
    a: 2,
    e: "AWS PrivateLink (Interface Endpoint) expose un service spécifique (via un NLB) à d'autres VPCs sans exposer l'ensemble du VPC. L'entreprise B crée un Interface Endpoint qui pointe vers le service endpoint de l'entreprise A. Contrairement au VPC Peering, PrivateLink n'est pas transitif, ne nécessite pas de CIDR non-chevauchants, et expose uniquement le service spécifique."
  }
];

// JOUR 3 — Stockage
window.QDATA[3] = [
  {
    t: "S3 Chiffrement",
    q: "Un équipe de sécurité exige que tous les objets stockés dans S3 soient chiffrés avec une clé gérée par le client (CMK) et que chaque utilisation de la clé soit auditée. Quel mode de chiffrement S3 satisfait ces exigences ?",
    o: ["SSE-S3 (AES-256 géré par AWS S3)", "SSE-KMS avec Customer Managed Key", "SSE-C avec clé fournie par le client", "Client-side encryption"],
    a: 1,
    e: "SSE-KMS avec une Customer Managed Key (CMK) permet d'utiliser une clé KMS spécifique gérée par le client. Chaque opération de chiffrement/déchiffrement génère un événement CloudTrail (audit trail). La rotation automatique peut être activée. SSE-S3 utilise des clés AWS non auditables. SSE-C ne garde pas la clé côté AWS donc pas d'audit."
  },
  {
    t: "S3 Access Control",
    q: "Un bucket S3 a une Bucket Policy qui autorise l'accès public en lecture à tous les objets. L'administrateur active 'Block Public Access' au niveau du bucket. Quel est le résultat ?",
    o: ["La Bucket Policy prend le dessus et l'accès public reste autorisé", "Block Public Access bloque l'accès public même si la Bucket Policy l'autorise", "Il faut supprimer la Bucket Policy pour que Block Public Access soit effectif", "Seuls les nouveaux objets sont protégés"],
    a: 1,
    e: "Block Public Access est un mécanisme de sécurité qui agit comme un Explicit Deny au niveau AWS S3, remplaçant les Bucket Policies ou ACLs qui autoriseraient l'accès public. Il s'applique à toutes les politiques existantes et futures, même celles créées avant l'activation de Block Public Access."
  },
  {
    t: "EBS",
    q: "Un volume EBS gp2 existant est chiffré avec la clé KMS AWS par défaut (aws/ebs). Un administrateur veut migrer vers une Customer Managed Key (CMK) pour avoir plus de contrôle. Comment procéder ?",
    o: ["Modifier directement la clé KMS du volume EBS existant", "Créer un snapshot du volume, créer une copie du snapshot en spécifiant la CMK, puis créer un nouveau volume depuis cette copie", "Détacher le volume, modifier la clé, et rattacher le volume", "Utiliser AWS DataSync pour migrer les données vers un nouveau volume chiffré avec la CMK"],
    a: 1,
    e: "Le chiffrement EBS est immutable : on ne peut pas changer la clé KMS d'un volume existant. La procédure est : (1) créer un snapshot du volume, (2) copier le snapshot en spécifiant la nouvelle CMK (l'option de re-chiffrement est disponible lors de la copie), (3) créer un nouveau volume depuis la copie chiffrée avec la CMK."
  },
  {
    t: "S3 Lifecycle",
    q: "Une entreprise stocke des logs dans S3 Standard. Après 30 jours, les logs sont rarement consultés. Après 90 jours, ils doivent être archivés à faible coût. Après 365 jours, ils doivent être supprimés. Quelle politique de lifecycle est correcte ?",
    o: ["S3 Standard → S3 Glacier Instant Retrieval (30j) → Supprimer (365j)", "S3 Standard → S3 Standard-IA (30j) → S3 Glacier Flexible Retrieval (90j) → Supprimer (365j)", "S3 Standard → S3 Glacier Deep Archive (30j) → S3 Standard-IA (90j) → Supprimer (365j)", "S3 Standard → S3 One Zone-IA (30j) → S3 Standard (90j) → Supprimer (365j)"],
    a: 1,
    e: "Les politiques de lifecycle S3 ne peuvent passer les objets que vers des classes de stockage moins chères (vers le bas). La transition doit suivre la hiérarchie : Standard → Standard-IA → Intelligent-Tiering → One Zone-IA → Glacier Instant → Glacier Flexible → Glacier Deep Archive. On ne peut pas remonter vers Standard depuis Glacier dans une lifecycle policy."
  },
  {
    t: "S3 Réplication",
    q: "Une entreprise veut répliquer des objets S3 d'un bucket source (compte A, région us-east-1) vers un bucket de destination (compte B, région eu-west-1). Quelle configuration est requise sur le bucket source ?",
    o: ["Activer uniquement la réplication CRR sans versionning", "Activer le versionning sur le bucket source, créer une règle de réplication avec un rôle IAM ayant les permissions de réplication", "Activer le versionning sur les deux buckets, et configurer la réplication CRR avec un rôle IAM ayant les permissions nécessaires", "Configurer AWS DataSync entre les deux buckets dans les deux comptes"],
    a: 2,
    e: "La réplication S3 (CRR - Cross-Region Replication ou SRR - Same-Region Replication) nécessite : (1) le versionning activé sur le bucket source ET le bucket de destination, (2) une règle de réplication sur le bucket source, (3) un rôle IAM avec les permissions s3:GetReplication, s3:ReplicateObject, etc. Pour la réplication cross-account, le bucket de destination doit aussi avoir une Bucket Policy autorisant le rôle du compte source."
  },
  {
    t: "S3 Object Lock",
    q: "Un cabinet juridique doit conserver des documents S3 pendant exactement 7 ans et empêcher toute modification ou suppression, même par les administrateurs. Quel mode d'Object Lock utiliser ?",
    o: ["Governance mode avec une période de rétention de 7 ans", "Compliance mode avec une période de rétention de 7 ans", "Legal Hold sans durée définie", "SSE-KMS avec rotation annuelle des clés"],
    a: 1,
    e: "Le mode Compliance d'Object Lock empêche TOUTE modification ou suppression de l'objet pendant la période de rétention, même par le root account ou les administrateurs. Le mode Governance permet aux utilisateurs avec des permissions spéciales de modifier les paramètres. Pour des exigences légales strictes (7 ans sans exception), Compliance mode est requis."
  },
  {
    t: "EBS Types",
    q: "Une base de données Oracle nécessite des IOPS provisionnées garanties avec une latence inférieure à 1ms. Quel type de volume EBS choisir ?",
    o: ["gp3 (General Purpose SSD)", "io2 Block Express (Provisioned IOPS SSD)", "st1 (Throughput Optimized HDD)", "sc1 (Cold HDD)"],
    a: 1,
    e: "Les volumes io2 Block Express offrent les meilleures performances pour les bases de données critiques : jusqu'à 256 000 IOPS, 4 000 Mo/s de débit, et une latence inférieure à 1ms. Ils supportent également l'option Multi-Attach pour les clusters. gp3 offre jusqu'à 16 000 IOPS ce qui peut être insuffisant pour des bases de données exigeantes."
  },
  {
    t: "S3 Pre-signed URL",
    q: "Une application web veut permettre à des utilisateurs non-authentifiés de télécharger un fichier S3 spécifique pendant 24h, sans exposer les credentials AWS. Quelle solution utiliser ?",
    o: ["Rendre le bucket S3 public temporairement", "Générer une Pre-signed URL avec une expiration de 24h", "Créer un utilisateur IAM temporaire avec accès S3", "Utiliser CloudFront avec signed cookies"],
    a: 1,
    e: "Une Pre-signed URL S3 intègre les credentials du générateur et une expiration dans l'URL elle-même. L'utilisateur peut télécharger le fichier en cliquant sur l'URL pendant la durée de validité, sans avoir besoin de credentials AWS. Le bucket peut rester privé. La Pre-signed URL est générée par le serveur et envoyée au client."
  }
];

// JOUR 4 — Compute & HA
window.QDATA[4] = [
  {
    t: "Load Balancers",
    q: "Une application web reçoit des requêtes HTTPS qui doivent être routées vers différents groupes de serveurs selon le chemin URL (/api/* vers les serveurs API, /static/* vers les serveurs de contenu). Quel Load Balancer utiliser ?",
    o: ["Network Load Balancer (NLB) avec listener rules", "Classic Load Balancer avec URL routing", "Application Load Balancer (ALB) avec path-based routing rules", "Gateway Load Balancer avec path-based routing"],
    a: 2,
    e: "L'Application Load Balancer (ALB) opère en couche 7 (HTTP/HTTPS) et supporte le routing avancé basé sur le chemin URL, l'hôte, les headers HTTP, les paramètres de requête, etc. Les Listener Rules définissent les conditions (path /api/*) et les actions (forward vers un Target Group). NLB opère en couche 4 et ne comprend pas les URLs."
  },
  {
    t: "Auto Scaling",
    q: "Une application web connaît une charge prévisible : forte utilisation en semaine de 9h à 18h, faible le soir et le week-end. Quelle politique Auto Scaling est la plus adaptée ?",
    o: ["Target Tracking Scaling uniquement", "Step Scaling basée sur les métriques CloudWatch", "Scheduled Scaling avec des actions programmées à 9h et 18h", "Predictive Scaling uniquement"],
    a: 2,
    e: "Le Scheduled Scaling est idéal pour les patterns de charge prévisibles et réguliers. Des actions sont programmées pour scaler out à 9h (ajouter des instances) et scaler in à 18h (réduire). C'est plus proactif que Target Tracking (réactif). Pour une charge parfaitement prévisible, Scheduled Scaling réduit la latence de scaling car les instances sont prêtes avant le pic."
  },
  {
    t: "RDS Multi-AZ",
    q: "Une application utilise RDS MySQL avec Multi-AZ activé. L'instance primaire tombe en panne à 14h. Que se passe-t-il automatiquement ?",
    o: ["RDS attend l'intervention manuelle de l'administrateur", "RDS promeut l'instance standby Multi-AZ en nouvelle instance primaire (failover automatique en 1-2 minutes)", "RDS crée une nouvelle instance primaire depuis le dernier snapshot", "Les Read Replicas deviennent automatiquement l'instance primaire"],
    a: 1,
    e: "RDS Multi-AZ maintient une instance standby synchronisée dans une autre AZ. En cas de panne de l'instance primaire, RDS réalise automatiquement un failover en mettant à jour le DNS endpoint (CNAME) pour pointer vers l'instance standby, sans intervention manuelle. Le failover prend généralement 1 à 2 minutes. Les Read Replicas sont indépendants du Multi-AZ."
  },
  {
    t: "Disaster Recovery",
    q: "Une entreprise a un RTO de 15 minutes et un RPO de 5 minutes pour son application critique. Quel niveau de stratégie DR AWS utiliser ?",
    o: ["Backup & Restore", "Pilot Light", "Warm Standby", "Multi-Site Active/Active"],
    a: 2,
    e: "Warm Standby maintient une version réduite mais fonctionnelle de l'infrastructure en permanence dans une seconde région. En cas de désastre, le scaling up de cette infrastructure réduite peut se faire en quelques minutes (RTO ~15 min). La réplication continue permet un RPO bas (minutes). Pilot Light est plus lent (RTO >15 min généralement). Multi-Site Active/Active est plus cher qu'nécessaire."
  },
  {
    t: "Aurora",
    q: "Une entreprise utilise Aurora MySQL et veut minimiser les perturbations lors des mises à jour et maintenances planifiées. Quelle fonctionnalité Aurora est la plus utile ?",
    o: ["Aurora Serverless v2", "Aurora Multi-Master", "Aurora avec 15 Read Replicas dans différentes AZs", "Aurora Global Database"],
    a: 2,
    e: "Aurora peut avoir jusqu'à 15 Read Replicas dans différentes AZs. Lors d'un failover (maintenance ou panne), Aurora promeut automatiquement l'un des Read Replicas en instance primaire avec un temps de failover inférieur à 30 secondes. Avoir des replicas dans plusieurs AZs améliore la disponibilité. Aurora Multi-Master permet l'écriture simultanée mais est moins adapté pour les maintenances."
  },
  {
    t: "ALB vs NLB",
    q: "Une application IoT reçoit des millions de connexions TCP/UDP courtes avec des pics à 10 millions de requêtes par seconde. L'application nécessite une adresse IP statique par AZ pour les règles de firewall. Quel Load Balancer choisir ?",
    o: ["Application Load Balancer (ALB)", "Network Load Balancer (NLB)", "Classic Load Balancer (CLB)", "Gateway Load Balancer (GWLB)"],
    a: 1,
    e: "Le Network Load Balancer (NLB) est conçu pour des performances extrêmes (millions de requêtes/seconde), supporte TCP/UDP, et dispose d'une IP statique par AZ (Elastic IP assignable). Ces IP statiques sont essentielles pour les règles de firewall. ALB est en couche 7 et n'offre pas d'IP statique ni le même niveau de performance pour TCP/UDP pur."
  },
  {
    t: "DynamoDB",
    q: "Une application e-commerce utilise DynamoDB. Un bug de code écrase accidentellement des données critiques. Comment récupérer les données telles qu'elles étaient il y a 2 heures ?",
    o: ["Restaurer depuis un snapshot manuel créé avant le bug", "Utiliser DynamoDB PITR (Point-in-Time Recovery) pour restaurer à l'état d'il y a 2h", "Utiliser DynamoDB Streams pour rejouer les événements", "Contacter le support AWS pour une restauration manuelle"],
    a: 1,
    e: "DynamoDB PITR (Point-in-Time Recovery) fournit un backup continu et automatique permettant de restaurer la table à n'importe quel moment dans les 35 derniers jours, avec une granularité à la seconde. C'est la solution idéale pour se remettre d'une corruption de données accidentelle. Il faut l'activer manuellement sur chaque table DynamoDB."
  },
  {
    t: "GWLB",
    q: "Une entreprise veut inspecter tout le trafic entrant et sortant de son VPC avec des appliances virtuelles de sécurité tierces (IDS/IPS) avant qu'il n'atteigne les instances EC2. Quel service AWS facilite cette architecture ?",
    o: ["Application Load Balancer avec WAF", "Network Load Balancer avec Security Groups strictes", "AWS Gateway Load Balancer (GWLB)", "AWS Network Firewall"],
    a: 2,
    e: "Le Gateway Load Balancer (GWLB) permet de déployer des appliances de sécurité tierces (IDS/IPS, firewalls) de façon transparente. Il opère en couche 3, distribue le trafic aux appliances via GENEVE (port 6081), et les appliances renvoient le trafic inspecté. Les GWLB Endpoints dans le VPC interceptent le trafic avant les instances EC2. WAF/Network Firewall sont des services AWS natifs, non des appliances tierces."
  }
];

// JOUR 5 — Sécurité avancée
window.QDATA[5] = [
  {
    t: "KMS",
    q: "Un développeur appelle aws kms encrypt pour chiffrer 50 MB de données. L'appel échoue avec 'MessageTooLarge'. Quelle est la solution correcte ?",
    o: ["Augmenter la limite de taille KMS dans les paramètres du compte", "Utiliser l'Envelope Encryption : générer une Data Encryption Key avec GenerateDataKey, chiffrer les données avec la DEK, et chiffrer la DEK avec la CMK KMS", "Compresser les données avant de les envoyer à KMS", "Diviser les données en blocs de 4 KB et chiffrer chaque bloc séparément"],
    a: 1,
    e: "KMS Encrypt ne peut chiffrer que jusqu'à 4 KB directement. Pour les données plus grandes, l'Envelope Encryption est nécessaire : (1) appeler GenerateDataKey pour obtenir une Data Key en clair et chiffrée, (2) chiffrer les données avec la DEK en clair (AES-256 localement), (3) stocker les données chiffrées avec la DEK chiffrée, (4) supprimer la DEK en clair. La DEK chiffrée est déchiffrée par KMS lors de la lecture."
  },
  {
    t: "GuardDuty",
    q: "GuardDuty génère un finding 'UnauthorizedAccess:EC2/TorIPCaller' pour une instance EC2. Quelle information GuardDuty a-t-il analysée pour détecter cela ?",
    o: ["Les logs d'application de l'instance EC2", "Les VPC Flow Logs et/ou les logs DNS", "Les logs SSH/RDP de l'instance", "Les CloudTrail Data Events"],
    a: 1,
    e: "GuardDuty analyse trois sources de données : CloudTrail Management Events, VPC Flow Logs, et DNS Logs. Le finding TorIPCaller indique que l'IP source d'un appel API est un nœud Tor. Pour EC2, GuardDuty détecte via les VPC Flow Logs les connexions réseau depuis/vers des IPs malveillantes connues (Tor, C2, etc.). GuardDuty n'accède pas aux logs d'application ni aux systèmes de fichiers des instances."
  },
  {
    t: "WAF",
    q: "Une application web est ciblée par des attaques SQL injection via l'API Gateway. L'équipe doit bloquer ces attaques rapidement sans modifier le code de l'application. Quelle solution déployer ?",
    o: ["Security Groups avec règles IP strictes", "AWS WAF avec des règles AWS Managed Rules (Core Rule Set) sur l'API Gateway", "AWS Shield Advanced sur l'API Gateway", "AWS Network Firewall avec des règles personnalisées"],
    a: 1,
    e: "AWS WAF peut être attaché à API Gateway (ainsi qu'à ALB, CloudFront, AppSync). Les AWS Managed Rules, notamment le Core Rule Set (CRS), incluent des protections contre les SQL injection et XSS. WAF inspecte le contenu des requêtes HTTP (layer 7). Shield protège contre les DDoS L3/L4, pas les injections SQL. Network Firewall opère au niveau réseau, pas applicatif."
  },
  {
    t: "Shield",
    q: "Une entreprise de jeux en ligne subit régulièrement des attaques DDoS volumétriques qui saturent ses serveurs et génèrent des coûts AWS énormes. Quelle est la meilleure protection ?",
    o: ["AWS Shield Standard (activé par défaut, gratuit)", "AWS Shield Advanced avec DDoS Response Team et protection des coûts", "AWS WAF avec rate-limiting strict", "Amazon CloudFront pour absorber le trafic"],
    a: 1,
    e: "AWS Shield Advanced offre : protection DDoS L3/L4/L7 améliorée, accès 24/7 à la DDoS Response Team (DRT), et surtout une protection contre les pics de coûts AWS causés par les attaques DDoS (AWS rembourse les surcoûts EC2/ELB/CloudFront/Route 53 pendant une attaque). Shield Standard (gratuit) ne couvre que les attaques L3/L4 basiques sans support ni remboursement."
  },
  {
    t: "Secrets Manager",
    q: "Une application Lambda accède à une base de données RDS. Le mot de passe doit être roté automatiquement tous les 90 jours sans interruption de l'application. Quelle solution utiliser ?",
    o: ["Hardcoder le mot de passe dans le code Lambda", "Stocker le mot de passe dans Parameter Store Standard et le mettre à jour manuellement", "Utiliser AWS Secrets Manager avec rotation automatique activée pour RDS", "Utiliser des variables d'environnement Lambda chiffrées avec KMS"],
    a: 2,
    e: "AWS Secrets Manager supporte la rotation automatique native pour RDS (et autres bases de données). Lors de la rotation, Secrets Manager crée un nouveau mot de passe, le met à jour dans la DB, et met à jour le secret — sans interruption. L'application récupère toujours le secret en appelant l'API GetSecretValue. Parameter Store ne supporte pas la rotation automatique."
  },
  {
    t: "Inspector",
    q: "Une équipe de sécurité veut détecter automatiquement les vulnérabilités CVE connues dans les packages installés sur ses instances EC2 et les images Docker dans ECR. Quel service AWS utiliser ?",
    o: ["AWS GuardDuty", "AWS Macie", "Amazon Inspector v2", "AWS Security Hub"],
    a: 2,
    e: "Amazon Inspector v2 réalise des scans de vulnérabilités automatiques et continus sur les instances EC2 (packages installés, network reachability) et les images ECR (CVEs dans les couches Docker). Il détecte les CVEs connues et les configurations réseau risquées. GuardDuty détecte les comportements malveillants en temps réel. Macie détecte des données sensibles (PII) dans S3. Security Hub agrège les findings."
  },
  {
    t: "CloudHSM",
    q: "Une institution financière doit stocker ses clés cryptographiques dans un HSM dédié où AWS ne peut pas accéder aux clés (single-tenant). Quelle solution utiliser ?",
    o: ["AWS KMS avec Customer Managed Keys (CMK)", "AWS KMS avec External Key Material importé", "AWS CloudHSM", "AWS Secrets Manager avec chiffrement KMS"],
    a: 2,
    e: "AWS CloudHSM déploie un HSM physique dédié dans votre VPC que vous gérez entièrement. AWS n'a pas accès aux clés — vous avez le contrôle exclusif. Contrairement à KMS où AWS gère l'infrastructure HSM (bien que les clés soient sécurisées), CloudHSM offre une isolation totale. C'est requis pour certaines conformités (FIPS 140-2 Level 3) et cas où AWS ne peut absolument pas voir les clés."
  },
  {
    t: "Macie",
    q: "Une entreprise stocke des millions de fichiers dans S3, incluant potentiellement des données PII (noms, emails, numéros de carte). L'équipe veut identifier automatiquement quels buckets contiennent ces données sensibles. Quel service utiliser ?",
    o: ["Amazon GuardDuty avec analyse S3", "AWS Config avec règles de conformité S3", "Amazon Macie", "AWS Trusted Advisor"],
    a: 2,
    e: "Amazon Macie utilise le machine learning pour analyser le contenu des objets S3 et détecter automatiquement les données sensibles (PII : noms, emails, cartes de crédit, numéros de sécurité sociale, etc.). Il génère des findings avec le type de donnée sensible détecté et la localisation. GuardDuty détecte les accès anormaux aux buckets S3 mais ne scanne pas le contenu des objets."
  }
];

// JOUR 6 — Découplage, Serverless & Containers
window.QDATA[6] = [
  {
    t: "SQS",
    q: "Une application de traitement de commandes utilise SQS Standard. Parfois, des commandes sont traitées deux fois. Comment éviter le double traitement ?",
    o: ["Passer à SQS FIFO avec Content-Based Deduplication activé", "Augmenter le Visibility Timeout", "Utiliser SNS Filter Policy pour dédupliquer", "Utiliser DynamoDB pour tracker les messages traités"],
    a: 0,
    e: "SQS Standard garantit la livraison 'at-least-once' (au moins une fois), ce qui peut causer des doublons. SQS FIFO avec Content-Based Deduplication garantit exactement une fois (exactly-once) en utilisant un hash SHA-256 du corps du message comme ID de déduplication. Les doublons sont ignorés dans une fenêtre de 5 minutes. FIFO a une limitation de débit (300 TPS, jusqu'à 3000 avec batching) mais élimine les doublons."
  },
  {
    t: "Lambda",
    q: "Une fonction Lambda dans un VPC doit accéder à internet pour appeler une API externe. La Lambda ne peut pas accéder à internet. Que manque-t-il ?",
    o: ["La Lambda doit être hors du VPC pour accéder à internet", "Un Internet Gateway directement attaché au subnet Lambda", "Une NAT Gateway dans un subnet public avec une route dans le subnet privé de la Lambda", "Un VPC Endpoint pour l'API externe"],
    a: 2,
    e: "Quand une Lambda est dans un VPC, elle utilise les configurations réseau du VPC (subnets, route tables). Pour accéder à internet, elle doit être dans un subnet privé avec une route vers une NAT Gateway (dans un subnet public). La Lambda ne peut pas avoir d'IP publique directement. Sans NAT Gateway, le trafic internet est bloqué même si la Lambda a une route par défaut."
  },
  {
    t: "SNS + SQS",
    q: "Un système de commandes envoie une notification lors de chaque nouvelle commande. Plusieurs microservices (inventaire, facturation, email) doivent chacun recevoir et traiter cette notification indépendamment. Quelle architecture utiliser ?",
    o: ["Une file SQS unique que tous les services lisent", "SNS Topic avec une souscription SQS Fan-out vers une file SQS par service", "Lambda qui appelle chaque service séquentiellement", "EventBridge avec un seul consumer"],
    a: 1,
    e: "Le pattern SNS Fan-out : un Topic SNS reçoit la notification de commande et la distribuie simultanément à plusieurs files SQS (une par service). Chaque service lit depuis sa propre file indépendamment, à son propre rythme. Cela découple les services, assure que chacun reçoit chaque message, et permet la gestion d'erreurs par service (DLQ par file). Une file SQS unique ne permettrait pas à plusieurs consommateurs de recevoir le même message."
  },
  {
    t: "Lambda@Edge",
    q: "Un site web servi via CloudFront doit authentifier les utilisateurs avant de servir le contenu. L'authentification doit se faire le plus près possible de l'utilisateur pour minimiser la latence. Quelle solution utiliser ?",
    o: ["Ajouter l'authentification dans le code backend sur EC2", "Lambda@Edge au niveau de l'événement Viewer Request", "CloudFront Functions au niveau du Viewer Request", "API Gateway Authorizer"],
    a: 1,
    e: "Lambda@Edge s'exécute dans les edge locations CloudFront, près de l'utilisateur. L'événement 'Viewer Request' se déclenche avant que CloudFront ne vérifie son cache ou ne contacte l'origine, permettant de bloquer les requêtes non-authentifiées dès le bord. CloudFront Functions est plus léger mais a moins de capabilities (pas d'appels réseau, pas d'accès aux libs Node). Pour de l'authentification complexe (validation JWT, appel OAuth), Lambda@Edge est requis."
  },
  {
    t: "ECS Fargate",
    q: "Une startup veut déployer des microservices containerisés sans gérer de serveurs EC2. Les conteneurs doivent pouvoir lire des secrets depuis Secrets Manager. Quelle configuration est nécessaire ?",
    o: ["Passer les secrets en variables d'environnement dans le Dockerfile", "Configurer un ECS Task avec Fargate, attacher un Task Role IAM avec accès Secrets Manager, référencer le secret dans la Task Definition", "Créer des instances EC2 dédiées avec l'agent ECS et les secrets sur les instances", "Utiliser Lambda au lieu de conteneurs pour les microservices"],
    a: 1,
    e: "ECS Fargate permet de déployer des conteneurs sans gérer d'instances EC2. Pour accéder à Secrets Manager, la Task Definition peut référencer directement les secrets (injected as environment variables at runtime) si le Task Role IAM a les permissions secretsmanager:GetSecretValue. Le Task Role est attaché à la Task Definition, pas à l'instance. Les secrets ne sont jamais dans l'image Docker."
  },
  {
    t: "EventBridge",
    q: "Un système de monitoring doit déclencher une action Lambda automatiquement chaque fois qu'une instance EC2 passe à l'état 'terminated'. Quelle est la solution la plus simple ?",
    o: ["Polling toutes les minutes de l'API EC2 avec Lambda", "CloudWatch Alarm sur la métrique d'état EC2", "EventBridge Rule avec source 'aws.ec2' et detail-type 'EC2 Instance State-change Notification' filtrant l'état 'terminated'", "SNS Notification avec subscription Lambda"],
    a: 2,
    e: "Amazon EventBridge (anciennement CloudWatch Events) reçoit automatiquement les événements de changement d'état des services AWS, y compris EC2. Une règle EventBridge peut filtrer les événements (source: aws.ec2, detail.state: terminated) et déclencher une fonction Lambda comme target. C'est event-driven, temps réel, et sans polling. Pas besoin de configuration côté EC2."
  },
  {
    t: "SQS DLQ",
    q: "Une application traite des messages SQS via Lambda. Certains messages causent des erreurs et restent dans la file, bloquant le traitement. Comment gérer ces messages problématiques ?",
    o: ["Augmenter le nombre de Lambda workers", "Configurer une Dead Letter Queue (DLQ) sur la file SQS avec un maxReceiveCount", "Supprimer manuellement les messages en erreur régulièrement", "Passer à SQS FIFO pour éviter les erreurs"],
    a: 1,
    e: "La Dead Letter Queue (DLQ) reçoit automatiquement les messages qui ont échoué le traitement N fois (maxReceiveCount). Les messages problématiques sont déplacés en DLQ, permettant aux autres messages d'être traités normalement. L'équipe peut ensuite analyser les messages en DLQ pour comprendre et corriger les erreurs, puis les ré-injecter dans la file principale."
  },
  {
    t: "Containers",
    q: "Une entreprise veut migrer ses applications Kubernetes on-premises vers AWS avec le minimum de changements dans les configurations Kubernetes (manifests YAML, Helm charts). Quel service AWS utiliser ?",
    o: ["Amazon ECS avec Fargate", "Amazon ECS avec EC2 launch type", "Amazon EKS (Elastic Kubernetes Service)", "AWS App Runner"],
    a: 2,
    e: "Amazon EKS est un service Kubernetes managé qui exécute les applications Kubernetes sans modification. Les manifests YAML, Helm charts, et outils Kubernetes (kubectl, kustomize) fonctionnent directement avec EKS. Contrairement à ECS (API propriétaire AWS), EKS maintient la compatibilité complète avec l'API Kubernetes open-source, permettant une migration sans refactoring majeur."
  }
];

// JOUR 7 — Data, Migration & Optimisation coûts
window.QDATA[7] = [
  {
    t: "Kinesis",
    q: "Un système IoT génère 1 TB de données par jour que plusieurs équipes (data science, ops, monitoring) doivent analyser indépendamment et en temps réel. Quelle solution utiliser ?",
    o: ["Amazon Kinesis Data Firehose vers S3", "Amazon Kinesis Data Streams avec plusieurs consommateurs", "Amazon SQS avec fan-out SNS", "Amazon MSK (Managed Kafka)"],
    a: 1,
    e: "Kinesis Data Streams supporte plusieurs consommateurs indépendants (jusqu'à 20 avec Enhanced Fan-Out) lisant le même stream en parallèle, chacun à son propre rythme. Les données sont retenues 24h (jusqu'à 365j), permettant le replay. Firehose ne supporte qu'un seul consommateur (la destination) et n'offre pas de replay. SQS n'est pas conçu pour le temps réel IoT à ce volume."
  },
  {
    t: "Athena",
    q: "Une équipe analytique veut interroger des fichiers de logs CSV stockés dans S3 avec des requêtes SQL ad-hoc, sans provisionner de serveur ou charger les données dans une base. Quel service utiliser ?",
    o: ["Amazon Redshift avec COPY depuis S3", "Amazon EMR avec Hive", "Amazon Athena", "Amazon RDS avec S3 Integration"],
    a: 2,
    e: "Amazon Athena est serverless et permet d'exécuter des requêtes SQL directement sur des fichiers S3 (CSV, Parquet, JSON, ORC) sans charger les données. Il utilise AWS Glue Data Catalog pour les schémas. Les coûts sont à la requête ($ par TB scanné). Pour réduire les coûts et améliorer les performances, convertir les CSV en Parquet et utiliser le partitionnement. Redshift et EMR nécessitent du provisionnement."
  },
  {
    t: "Migration 7R",
    q: "Une entreprise a une application SAP qui tourne sur des serveurs on-premises vieillissants. Elle veut migrer vers AWS avec le minimum de risques et de changements, en déplaçant simplement les VMs vers EC2. Quelle stratégie de migration utiliser ?",
    o: ["Refactor (Re-architect)", "Replatform (Lift, Tinker & Shift)", "Rehost (Lift & Shift)", "Repurchase (Drop & Shop)"],
    a: 2,
    e: "Rehost (Lift & Shift) consiste à migrer les applications telles quelles vers AWS (généralement vers EC2) sans modification du code ou de l'architecture. C'est la migration la plus rapide et avec le moins de risques. AWS MGN (Application Migration Service) automatise ce processus. Pour SAP, AWS a des instances EC2 certifiées SAP. Le Replatform ferait de petites optimisations (ex: passer à une instance SAP managée)."
  },
  {
    t: "CloudWatch",
    q: "Un administrateur veut créer une alarme qui déclenche un email si l'utilisation CPU d'une instance EC2 dépasse 80% pendant 5 minutes consécutives. Quelle configuration CloudWatch est nécessaire ?",
    o: ["CloudWatch Log Metric Filter + SNS Topic", "CloudWatch Alarm sur la métrique CPUUtilization avec période 5min, seuil 80%, et action SNS vers un email", "CloudWatch Insight Query avec notification", "CloudTrail avec filtre sur les events CPU"],
    a: 1,
    e: "CloudWatch Alarm monitore une métrique (CPUUtilization d'EC2 est disponible nativement) et déclenche des actions quand la métrique franchit un seuil (80%) pendant N périodes consécutives (1 période de 5 min). Une action SNS peut envoyer un email si un abonnement email existe sur le Topic SNS. L'état de l'alarme passe à ALARM uniquement si le seuil est dépassé pendant toute la période configurée."
  },
  {
    t: "CloudTrail",
    q: "Un incident de sécurité s'est produit : quelqu'un a supprimé des Security Groups critiques. L'équipe de sécurité doit savoir qui a fait l'action, depuis quelle IP, et à quelle heure. Quel service utilise-t-on ?",
    o: ["VPC Flow Logs", "AWS Config Timeline", "AWS CloudTrail Event History", "Amazon GuardDuty"],
    a: 2,
    e: "AWS CloudTrail enregistre tous les appels API AWS incluant les actions de gestion (management events) comme ec2:DeleteSecurityGroup. L'Event History dans CloudTrail conserve 90 jours d'historique et inclut : l'identité de l'appelant (user/role), l'adresse IP source, l'heure exacte, et les paramètres de l'appel. Config montre l'état des ressources mais CloudTrail montre qui a fait l'action."
  },
  {
    t: "Pricing",
    q: "Une entreprise a des instances EC2 qui tournent 24/7 en production pendant 3 ans minimum. Quelle option d'achat minimise le coût ?",
    o: ["On-Demand instances", "Spot Instances", "Reserved Instances (3 ans, All Upfront, Standard)", "Dedicated Hosts"],
    a: 2,
    e: "Reserved Instances avec engagement 3 ans et paiement total (All Upfront) offrent le maximum d'économies sur EC2 : jusqu'à 72% par rapport à On-Demand. Standard RI pour le même type d'instance dans la même région. Les Spot Instances peuvent être interrompues et ne conviennent pas pour la production continue. Dedicated Hosts sont plus chers. Pour 3 ans certains, RI All Upfront 3 ans est optimal."
  },
  {
    t: "DataSync vs DMS",
    q: "Une entreprise veut migrer 50 TB de fichiers d'un NAS on-premises vers Amazon EFS. Quelle est la solution AWS la plus adaptée ?",
    o: ["AWS DMS (Database Migration Service)", "AWS DataSync", "AWS Snowball Edge", "FTP vers S3 puis S3 vers EFS"],
    a: 1,
    e: "AWS DataSync est conçu pour migrer des données entre systèmes de fichiers : NFS, SMB, S3, EFS, FSx. Il s'installe en tant qu'agent on-premises, optimise le transfert (multithreading, compression, chiffrement), et peut synchroniser en continu pour le cutover. DMS est pour les bases de données relationnelles. Snowball est pour des volumes >100 TB où le réseau est trop lent."
  },
  {
    t: "Trusted Advisor",
    q: "Un manager veut un aperçu rapide des meilleures pratiques AWS non respectées dans son compte : ressources sous-utilisées, coûts inutiles, problèmes de sécurité, et limites de service approchant le maximum. Quel service AWS consulter en premier ?",
    o: ["AWS Security Hub", "Amazon Inspector", "AWS Trusted Advisor", "AWS Compute Optimizer"],
    a: 2,
    e: "AWS Trusted Advisor analyse le compte AWS selon 5 piliers : Cost Optimization (ressources sous-utilisées), Performance, Security (MFA, ports ouverts), Fault Tolerance (Multi-AZ, backups), et Service Limits (quotas approchant la limite). C'est le seul service qui couvre tous ces aspects en un seul endroit. Compute Optimizer se concentre sur le right-sizing. Security Hub agrège uniquement les findings de sécurité."
  }
];
