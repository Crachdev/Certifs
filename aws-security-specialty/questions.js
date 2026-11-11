window.QKEY = "aws-security-specialty";

window.QUIZ_META = {
  fiche: "fiche.html",
  exam: "AWS Security Specialty SCS-C02",
  passScore: 75,
  examMins: 170,
  rules: [
    "65 questions QCM (choix unique ou multiple)",
    "Score minimum : 750/1000 (≈ 75%)",
    "Durée : 170 minutes",
    "Niveau : Specialty (expérience sécurité AWS requise)",
    "6 domaines : Threat Detection (14%), Logging (18%), Infra (20%), IAM (16%), Data (18%), Governance (14%)"
  ]
};

window.QUIZ_PLAN = [
  {
    d: 1,
    theme: "IAM avancé & Organizations",
    summary: "SCP, permissions boundaries, AssumeRole, ABAC, Identity Center",
    objectives: ["Comprendre les 6 types de policies IAM", "Maîtriser les SCP et leur portée", "Configurer l'accès cross-account sécurisé"]
  },
  {
    d: 2,
    theme: "Détection des menaces — GuardDuty & Monitoring",
    summary: "GuardDuty, Security Hub, CloudTrail avancé, Macie, Inspector",
    objectives: ["Configurer GuardDuty multi-comptes", "Analyser les CloudTrail findings", "Corréler les alertes dans Security Hub"]
  },
  {
    d: 3,
    theme: "Sécurité de l'infrastructure",
    summary: "WAF, Shield, Network Firewall, Firewall Manager, VPC avancé",
    objectives: ["Déployer WAF avec règles managées", "Choisir entre Shield Standard et Advanced", "Architecturer un Network Firewall centralisé"]
  },
  {
    d: 4,
    theme: "KMS, CloudHSM & Chiffrement",
    summary: "Types de clés, key policies, envelope encryption, CloudHSM",
    objectives: ["Maîtriser les types de clés KMS", "Configurer les key policies cross-account", "Implémenter le chiffrement d'enveloppe"]
  },
  {
    d: 5,
    theme: "Protection des données & S3",
    summary: "Chiffrement S3, Secrets Manager, ACM, Object Lock, Access Points",
    objectives: ["Configurer SSE-KMS avec bucket policies", "Comparer Secrets Manager et Parameter Store", "Implémenter S3 Object Lock WORM"]
  },
  {
    d: 6,
    theme: "Réponse aux incidents & Forensics",
    summary: "Workflow IR, isolation EC2, Athena, Detective, automatisation",
    objectives: ["Isoler une instance compromise", "Investiguer avec CloudTrail + Athena", "Automatiser la réponse via EventBridge"]
  },
  {
    d: 7,
    theme: "DevSecOps & Gouvernance",
    summary: "IAM Analyzer, IMDSv2, Config, Control Tower, Audit Manager",
    objectives: ["Générer des policies least-privilege avec IAM Analyzer", "Forcer IMDSv2 contre SSRF", "Comprendre la gouvernance multi-comptes"]
  }
];

window.QDATA = window.QDATA || {};

window.QDATA[1] = [
  {
    t: "IAM Policies",
    q: "Une entreprise utilise AWS Organizations. L'administrateur veut s'assurer qu'aucun compte membre ne puisse désactiver GuardDuty, même si un administrateur IAM du compte essaie. Quelle est la solution la plus appropriée ?",
    o: ["A. Créer une policy IAM avec Deny sur guardduty:DeleteDetector dans chaque compte", "B. Créer une SCP avec Deny sur guardduty:DeleteDetector et l'appliquer à l'OU racine", "C. Activer GuardDuty via le compte de management et déléguer l'administration", "D. Configurer AWS Config pour détecter si GuardDuty est désactivé et re-activer automatiquement"],
    a: "B",
    e: "Les SCP (Service Control Policies) s'appliquent à tous les comptes membres et limitent les permissions même des administrateurs IAM locaux. Une IAM policy dans chaque compte serait contournable par les admins locaux. L'option C (delegated admin) n'empêche pas la désactivation. Config (D) est réactif, pas préventif."
  },
  {
    t: "IAM Policies",
    q: "Un développeur a une policy IAM Identity-based qui lui permet s3:GetObject sur un bucket. La bucket policy du bucket lui refuse explicitement l'accès. Que se passe-t-il ?",
    o: ["A. L'accès est autorisé car la policy identity-based prend précédence", "B. L'accès est refusé car le Deny explicite dans la bucket policy l'emporte", "C. L'accès est accordé car les deux policies sont dans le même compte AWS", "D. AWS demande à l'administrateur de résoudre le conflit"],
    a: "B",
    e: "La règle fondamentale d'évaluation des policies IAM : un Deny explicite l'emporte TOUJOURS sur un Allow explicite, quelle que soit la source de la policy. La combinaison des policies identity-based + resource-based s'évalue en union, mais le Deny l'emporte systématiquement."
  },
  {
    t: "Permissions Boundary",
    q: "Une équipe DevOps doit créer des rôles IAM pour leurs applications, mais l'organisation veut s'assurer qu'ils ne peuvent pas créer des rôles plus puissants qu'eux-mêmes. Quelle approche utiliser ?",
    o: ["A. Restreindre les droits IAM de l'équipe DevOps via SCP", "B. Utiliser les permissions boundaries : obliger l'équipe à attacher une boundary prédéfinie à chaque rôle créé", "C. Exiger une approbation manuelle pour chaque création de rôle IAM", "D. Utiliser AWS Control Tower pour bloquer la création de rôles"],
    a: "B",
    e: "Les Permissions Boundaries permettent de déléguer la création de rôles IAM en toute sécurité. L'administrateur crée une boundary qui définit le maximum des droits accordables, puis oblige les DevOps (via policy) à toujours attacher cette boundary. Ainsi les rôles créés ne peuvent pas dépasser la boundary, même si la policy attachée est plus permissive."
  },
  {
    t: "Cross-account",
    q: "Une société A fournit un service à la société B. La société B doit assumer un rôle dans le compte A. Pour éviter l'attaque 'confused deputy', quelle mesure de sécurité doit être implémentée ?",
    o: ["A. Restreindre l'AssumeRole à l'adresse IP de la société B", "B. Ajouter un ExternalId dans la trust policy du rôle et partager cette valeur secrète avec la société B", "C. Exiger un MFA lors de l'AssumeRole", "D. Limiter la durée de session à 15 minutes"],
    a: "B",
    e: "L'ExternalId est la solution standard pour éviter l'attaque 'confused deputy'. Il s'agit d'une valeur secrète partagée entre les deux parties. Même si un attaquant connaît l'ARN du rôle, il ne peut pas l'assumer sans l'ExternalId. Les restrictions IP (A) sont difficiles à gérer. Le MFA (C) n'est pas adapté pour les intégrations service-à-service. La durée courte (D) ne protège pas contre la substitution de compte."
  },
  {
    t: "ABAC",
    q: "Une organisation veut que les développeurs ne puissent accéder qu'aux ressources EC2 portant le tag 'Team' correspondant à leur propre équipe, sans modifier les policies à chaque changement d'équipe. Quelle approche utiliser ?",
    o: ["A. Créer une policy IAM par équipe avec les instances spécifiques autorisées", "B. Utiliser ABAC : policy basée sur aws:PrincipalTag/Team = aws:ResourceTag/Team", "C. Utiliser des Security Groups distincts par équipe", "D. Créer un rôle IAM dédié par équipe avec les permissions nécessaires"],
    a: "B",
    e: "ABAC (Attribute-Based Access Control) est la solution idéale ici. Avec la condition 'StringEquals aws:PrincipalTag/Team aws:ResourceTag/Team', un développeur de l'équipe Alpha ne peut accéder qu'aux instances taggées Team=Alpha. Lorsqu'un développeur change d'équipe, il suffit de modifier son tag dans IAM Identity Center — aucune policy à modifier. Les options A, C, D nécessitent des modifications administratives à chaque changement."
  },
  {
    t: "IAM Identity Center",
    q: "Une entreprise utilise Azure Active Directory comme IdP et veut permettre à ses employés de se connecter aux consoles AWS de plusieurs comptes avec leurs credentials AD. Quelle solution AWS utiliser ?",
    o: ["A. Créer des users IAM dans chaque compte AWS avec les mêmes credentials", "B. Configurer AWS IAM Identity Center avec Azure AD comme IdP externe via SAML 2.0", "C. Utiliser AWS Directory Service AD Connector dans chaque compte", "D. Implémenter une fédération directe via l'API sts:AssumeRoleWithSAML dans chaque compte"],
    a: "B",
    e: "AWS IAM Identity Center (ex-AWS SSO) est la solution recommandée pour le SSO multi-comptes. Il s'intègre nativement avec Azure AD via SAML 2.0 et SCIM pour le provisioning automatique des utilisateurs. Il centralise l'accès à tous les comptes AWS depuis un seul portail. L'option C (AD Connector) connecte AD à AWS mais ne gère pas le SSO multi-comptes. L'option D est complexe et dupliquée par compte."
  },
  {
    t: "STS",
    q: "Un utilisateur IAM doit exécuter des actions sensibles qui nécessitent une vérification MFA. Comment implémenter cette exigence pour les appels API (pas seulement la console) ?",
    o: ["A. Activer MFA virtuel pour l'utilisateur dans la console IAM", "B. Utiliser GetSessionToken avec MFA : l'utilisateur appelle GetSessionToken en fournissant son code MFA, puis utilise les tokens temporaires pour les actions sensibles", "C. Configurer une SCP qui exige le MFA", "D. Utiliser IAM Identity Center avec MFA obligatoire"],
    a: "B",
    e: "GetSessionToken est la solution pour forcer le MFA dans les accès programmatiques. L'utilisateur appelle l'API GetSessionToken en fournissant son ARN MFA et son TOTP code ; en retour il obtient des credentials temporaires. Les policies sensibles peuvent vérifier aws:MultiFactorAuthPresent = true. La SCP (C) ne peut pas vérifier le MFA. IAM Identity Center (D) gère le MFA pour la console mais pas pour les accès API programmatiques directs."
  },
  {
    t: "Resource-based Policies",
    q: "Un compte A veut donner accès à un bucket S3 au compte B sans qu'un utilisateur du compte B ait besoin d'assumer un rôle dans le compte A. Quelle est la configuration minimale requise ?",
    o: ["A. Ajouter une bucket policy sur le bucket A qui autorise le compte B, et créer une identity-based policy dans le compte B qui accorde s3:GetObject", "B. Créer un rôle dans le compte A avec trust policy vers le compte B uniquement", "C. Utiliser S3 Cross-Region Replication vers un bucket dans le compte B", "D. Activer S3 Object Ownership dans le compte A pour autoriser le compte B"],
    a: "A",
    e: "Pour l'accès cross-account aux ressources S3 sans AssumeRole, les deux policies sont nécessaires dans le même compte AWS : (1) la bucket policy (resource-based) qui autorise le Principal du compte B, ET (2) une identity-based policy dans le compte B qui accorde les permissions S3 appropriées. Ces deux autorisations ensemble créent l'accès. L'exception : si la bucket policy accorde accès au compte root du compte B, les IAM policies du compte B suffisent ensuite."
  }
];

window.QDATA[2] = [
  {
    t: "GuardDuty",
    q: "GuardDuty génère un finding 'UnauthorizedAccess:EC2/SSHBruteForce' pour une instance EC2. Cette instance est en fait un honeypot intentionnel et ces alerts sont des faux positifs. Quelle est la meilleure façon de gérer cela ?",
    o: ["A. Désactiver GuardDuty pour cette région", "B. Créer une Suppression Rule dans GuardDuty basée sur l'ID de l'instance", "C. Mettre l'instance dans une Trusted IP list de GuardDuty", "D. Modifier la Security Group pour bloquer le trafic SSH entrant"],
    a: "B",
    e: "Les Suppression Rules permettent de filtrer automatiquement les findings qui correspondent à des critères définis (instance ID, finding type, IP source, etc.) sans désactiver GuardDuty. Les findings supprimés ne sont plus visibles dans la console par défaut. Les Trusted IP lists (C) ne sont conçues que pour les adresses IP propres à votre environnement et ne suppriment pas les findings. Option A est trop destructive. Option D modifie la sécurité du honeypot."
  },
  {
    t: "CloudTrail",
    q: "Un incident de sécurité est suspecté — quelqu'un aurait pu modifier les CloudTrail logs dans S3. Comment vérifier si les logs ont été altérés ?",
    o: ["A. Comparer les timestamps des fichiers avec les événements CloudTrail", "B. Utiliser CloudTrail Log File Validation : vérifier les fichiers digest avec la CLI aws cloudtrail validate-logs", "C. Reexécuter les requêtes depuis CloudTrail Lake", "D. Contacter AWS Support pour demander les logs originaux"],
    a: "B",
    e: "CloudTrail Log File Validation crée des fichiers digest toutes les heures qui contiennent les hash SHA-256 de tous les fichiers de log de l'heure précédente. Chaque digest est lui-même signé avec la clé privée AWS. La commande 'aws cloudtrail validate-logs' vérifie la chaîne de signatures et détecte toute altération ou suppression de fichiers. Cette fonctionnalité doit être activée lors de la création du trail."
  },
  {
    t: "Security Hub",
    q: "Une organisation veut un score de conformité centralisé pour PCI DSS sur tous ses comptes AWS dans plusieurs régions. Quelle configuration est nécessaire ?",
    o: ["A. Activer AWS Config avec le Conformance Pack PCI DSS dans chaque compte et région", "B. Configurer Security Hub avec le standard PCI DSS dans chaque compte, puis activer un compte administrateur Security Hub via Organizations avec un aggregator régional", "C. Utiliser AWS Artifact pour télécharger le rapport PCI DSS AWS", "D. Déployer AWS Audit Manager avec le framework PCI DSS dans le compte de management"],
    a: "B",
    e: "Security Hub fournit un score de conformité agrégé par standard (PCI DSS, CIS, AWS FSBP). La configuration requiert : (1) activer Security Hub dans chaque région/compte, (2) désigner un compte administrateur via Organizations pour agréger tous les findings, (3) configurer un Finding Aggregator pour les régions multiples. Audit Manager (D) collecte des preuves mais n'offre pas de score de conformité en temps réel. Config Conformance Packs (A) n'est pas centralisé nativement."
  },
  {
    t: "Macie",
    q: "Une entreprise veut détecter automatiquement si des numéros de carte de crédit ont été accidentellement uploadés dans n'importe quel bucket S3 de son organisation. Quelle configuration Macie utiliser ?",
    o: ["A. Créer un job Macie one-time sur chaque bucket manuellement", "B. Activer Macie Automated Sensitive Data Discovery au niveau Organization pour une découverte continue sur tous les buckets", "C. Configurer des S3 Event Notifications vers Lambda qui analyse le contenu", "D. Utiliser Amazon Comprehend pour détecter les PII dans S3"],
    a: "B",
    e: "Macie Automated Sensitive Data Discovery analyse en continu les buckets S3 de toute l'organisation à faible coût (échantillonnage intelligent). Il détecte automatiquement les données PII incluant les numéros de cartes de crédit. Avec le compte delegated administrator Macie dans Organizations, la couverture est automatique sur tous les comptes membres. L'option A est manuelle et non scalable. Lambda + Comprehend (C, D) nécessitent du développement custom coûteux."
  },
  {
    t: "Inspector",
    q: "Une équipe de sécurité veut s'assurer qu'aucune image de conteneur avec des vulnérabilités critiques (CVSS ≥ 9.0) ne soit déployée en production via leur pipeline CI/CD. Quelle approche ?",
    o: ["A. Activer l'Enhanced Scanning dans ECR avec Amazon Inspector et configurer une EventBridge rule pour bloquer les déploiements si un finding CRITICAL est détecté", "B. Exécuter un scan manuel avec Trivy dans le pipeline CI/CD avant chaque push ECR", "C. Utiliser un AWS Config Rule qui vérifie les images ECR après déploiement", "D. Activer GuardDuty Container Image Scanning"],
    a: "A",
    e: "ECR Enhanced Scanning utilise Amazon Inspector pour scanner les images à chaque push et lors de nouvelles CVEs. En configurant une EventBridge rule sur les findings Inspector CRITICAL (severity >= 9.0), on peut déclencher une Lambda qui met à jour le status d'une CodePipeline approval ou bloque la promotion d'image. Inspector intègre nativement ECR. Config (C) est réactif, pas préventif. GuardDuty (D) ne scanne pas les images ECR pour les CVEs."
  },
  {
    t: "VPC Flow Logs",
    q: "Une équipe sécurité remarque dans GuardDuty un finding 'Recon:EC2/PortProbeUnprotectedPort'. Ils veulent investiguer en identifiant toutes les IPs sources qui ont scanné ce port dans les dernières 24h. Quel service utiliser ?",
    o: ["A. Analyser les CloudTrail Data Events du VPC", "B. Interroger les VPC Flow Logs avec Amazon Athena ou CloudWatch Insights", "C. Consulter les métriques CloudWatch de la Security Group", "D. Utiliser AWS Network Manager pour le diagnostic réseau"],
    a: "B",
    e: "Les VPC Flow Logs enregistrent les métadonnées de tous les flux réseau (IP source/destination, port, protocole, bytes, action ACCEPT/REJECT). Avec Athena (si stockés dans S3) ou CloudWatch Logs Insights, on peut requêter pour trouver toutes les IPs sources ayant tenté de contacter un port spécifique sur une période donnée. CloudTrail (A) enregistre les API calls AWS, pas le trafic réseau. Les Security Groups (C) n'ont pas de logs de métriques par IP. Network Manager (D) est pour la topologie, pas l'analyse forensique."
  },
  {
    t: "CloudTrail",
    q: "Après un incident, l'investigation révèle que CloudTrail n'était pas activé dans 3 régions AWS. Comment éviter cette situation à l'avenir ?",
    o: ["A. Créer un CloudTrail trail dans chaque région manuellement lors du provisioning", "B. Créer un Organization Trail multi-régions dans le compte de management : il couvre automatiquement toutes les régions et tous les comptes membres présents et futurs", "C. Configurer une SCP qui oblige l'activation de CloudTrail dans chaque compte", "D. Utiliser AWS Control Tower qui active CloudTrail automatiquement"],
    a: "B",
    e: "Un Organization Trail créé depuis le compte de management avec l'option multi-régions active automatiquement CloudTrail dans toutes les régions de tous les comptes membres, y compris les nouveaux comptes ajoutés à l'organisation. Les membres ne peuvent pas désactiver ce trail (protégé). Option A est manuel et ne scalera pas. SCP (C) peut empêcher la désactivation mais pas l'activation initiale dans toutes les régions. Control Tower (D) est correct mais Option B est plus directement ciblée."
  },
  {
    t: "AWS Config",
    q: "Une entreprise veut s'assurer que tous les buckets S3 ont le chiffrement activé et remédier automatiquement ceux qui ne l'ont pas. Quelle combinaison de services utiliser ?",
    o: ["A. Macie + Lambda pour détecter et chiffrer les buckets", "B. AWS Config rule 's3-bucket-server-side-encryption-enabled' + SSM Automation remediation document 'AWS-EnableS3BucketEncryption'", "C. EventBridge + Lambda qui surveille les CreateBucket events dans CloudTrail", "D. Security Hub finding + Custom Action vers Lambda"],
    a: "B",
    e: "AWS Config fournit la règle managée 's3-bucket-server-side-encryption-enabled' qui évalue en continu tous les buckets S3. La remediation automatique via SSM Automation peut utiliser le document 'AWS-EnableS3BucketEncryption' pour activer le chiffrement sur les buckets non conformes. Cette approche est déclarative, scalable et ne nécessite pas de code Lambda custom. EventBridge+Lambda (C) détecte seulement les nouveaux buckets, pas les existants."
  }
];

window.QDATA[3] = [
  {
    t: "WAF",
    q: "Une application web hébergée derrière un ALB reçoit des attaques SQL injection. L'équipe sécurité veut bloquer ces attaques immédiatement tout en minimisant les faux positifs lors du déploiement initial. Quelle stratégie pour déployer AWS WAF ?",
    o: ["A. Déployer directement avec action BLOCK sur la règle AWSManagedRulesSQLiRuleSet", "B. Déployer WAF en mode COUNT d'abord avec la règle SQLi, analyser les logs pendant 1-2 semaines, puis passer en BLOCK après validation", "C. Utiliser AWS Shield Advanced qui inclut la protection SQLi automatiquement", "D. Configurer une NACL qui bloque les patterns SQL injection au niveau réseau"],
    a: "B",
    e: "La meilleure pratique pour déployer WAF est de commencer en mode COUNT qui log les requêtes qui auraient été bloquées sans les bloquer. Cela permet d'identifier les faux positifs (requêtes légitimes incorrectement catégorisées comme SQLi) et d'ajuster avec des règle exceptions avant de passer en BLOCK. Shield Advanced (C) ne protège pas contre SQLi. Les NACLs (D) opèrent à L4 et ne peuvent pas inspecter le contenu HTTP."
  },
  {
    t: "Shield",
    q: "Une entreprise d'e-commerce subit régulièrement des attaques DDoS volumétriques sur son infrastructure CloudFront et Route 53. Elles entraînent des factures AWS excessives. Quelle solution recommander ?",
    o: ["A. Activer CloudFront avec AWS WAF pour filtrer le trafic malveillant", "B. Souscrire à AWS Shield Advanced : protection DDoS L3/L4/L7 + cost protection credits + DRT 24/7 + détection automatique au niveau application", "C. Migrer vers un CDN tiers avec protection DDoS intégrée", "D. Augmenter les capacités CloudFront pour absorber les attaques"],
    a: "B",
    e: "Shield Advanced est la solution pour les entreprises avec des besoins DDoS avancés. Les avantages clés ici : (1) Cost Protection Credits : AWS rembourse les coûts de scaling liés aux attaques DDoS, (2) DRT (DDoS Response Team) disponible 24/7 pour mitiger les attaques en cours, (3) Protection appliquée à CloudFront ET Route 53 ensemble, (4) Détection automatique et mitigation au niveau application (L7). Le coût ($3000/mois) est justifié pour une entreprise e-commerce subissant des attaques régulières."
  },
  {
    t: "Network Firewall",
    q: "Une entreprise veut inspecter et filtrer tout le trafic sortant (egress) de ses VPCs vers Internet pour bloquer les communications vers des domaines malveillants. Quelle architecture recommander ?",
    o: ["A. Configurer des NACLs restrictifs sur tous les subnets publics de chaque VPC", "B. Déployer AWS Network Firewall dans un VPC d'inspection centralisé avec Transit Gateway, en ajoutant des règles FQDN pour bloquer les domaines malveillants", "C. Utiliser Route 53 Resolver DNS Firewall pour bloquer les requêtes DNS vers les domaines malveillants dans chaque VPC", "D. Déployer un proxy Squid sur des instances EC2 dans chaque VPC"],
    a: "B",
    e: "L'architecture recommandée pour un filtrage egress centralisé est : VPC d'inspection avec AWS Network Firewall + Transit Gateway qui route tout le trafic vers ce hub. Network Firewall avec règles Suricata et FQDN filtering peut bloquer par domaine (et pas seulement IP). DNS Firewall (C) est complémentaire mais bloque seulement les requêtes DNS, pas le trafic HTTPS direct si l'IP est connue. Les NACLs (A) ne filtrent pas par domaine. Squid (D) n'est pas managé."
  },
  {
    t: "Firewall Manager",
    q: "Une organisation avec 50 comptes AWS veut s'assurer que toutes les nouvelles applications déployées derrière un ALB ont automatiquement une Web ACL WAF avec les règles minimales de sécurité. Quelle solution utiliser ?",
    o: ["A. Créer un runbook SSM pour déployer WAF lors de la création d'ALB via EventBridge", "B. Utiliser AWS Firewall Manager : créer une security policy WAF qui s'applique automatiquement à tous les ALB dans tous les comptes de l'Organisation", "C. Déployer un CloudFormation StackSet avec une Web ACL WAF dans chaque compte", "D. Former les équipes DevOps pour toujours inclure WAF dans leurs templates IaC"],
    a: "B",
    e: "AWS Firewall Manager est précisément conçu pour ce cas d'usage : gestion centralisée des politiques WAF sur toute une Organisation. Une policy Firewall Manager définit la Web ACL et les règles minimales ; Firewall Manager l'applique automatiquement à tous les ALB existants et futurs dans tous les comptes membres. L'auto-remediation gère aussi les nouvelles ressources. StackSets (C) déploient une fois mais ne surveillent pas les nouvelles ressources créées manuellement."
  },
  {
    t: "VPC Security",
    q: "Un attaquant a tenté d'exfiltrer des données depuis une instance EC2 vers une IP externe. Les VPC Flow Logs montrent le trafic ACCEPT sortant. Quelle mesure de sécurité aurait pu prévenir cela ?",
    o: ["A. Activer GuardDuty pour détecter l'exfiltration", "B. Utiliser une NAT Gateway avec une Elastic IP dédiée", "C. Restreindre les Security Groups outbound pour n'autoriser que les destinations légitimes, et déployer AWS Network Firewall pour filtrer par FQDN", "D. Chiffrer toutes les communications avec TLS"],
    a: "C",
    e: "Les Security Groups outbound (souvent laissés à 0.0.0.0/0) auraient dû être restreints aux seules destinations légitimes (IPs de services connus, ranges spécifiques). Pour un filtrage plus fin par domaine, Network Firewall avec des règles Suricata ou FQDN peut bloquer les connexions vers des destinations inconnues. GuardDuty (A) aurait détecté mais pas prévenu. NAT Gateway (B) est transparent (ne filtre pas). TLS (D) chiffre le trafic mais ne l'empêche pas."
  },
  {
    t: "SSM",
    q: "Une équipe de sécurité veut éliminer les bastions SSH et l'ouverture du port 22 sur leurs instances EC2 en production. Comment maintenir l'accès opérationnel aux instances ?",
    o: ["A. Créer des Security Groups temporaires qui ouvrent le port 22 pendant les maintenances", "B. Utiliser AWS Systems Manager Session Manager : accès shell sans port 22, sans bastion, avec logs de session dans CloudTrail et S3", "C. Implémenter EC2 Instance Connect qui génère des clés SSH temporaires", "D. Utiliser AWS Direct Connect pour un accès réseau privé sécurisé"],
    a: "B",
    e: "SSM Session Manager est la solution recommandée pour remplacer SSH/bastion. Avantages : aucun port entrant à ouvrir, aucune gestion de clés SSH, tous les accès sont loggés dans CloudTrail et peuvent être envoyés dans S3 ou CloudWatch Logs, contrôle d'accès via IAM, fonctionne via l'agent SSM sans accès Internet direct de l'instance. EC2 Instance Connect (C) génère des clés temporaires mais nécessite toujours le port 22 ouvert."
  },
  {
    t: "WAF",
    q: "Une application utilise AWS WAF. Les logs WAF montrent qu'une même IP effectue 1000 requêtes en 5 minutes (rate limiting threshold). Quel type de règle WAF configurer pour bloquer automatiquement cette IP ?",
    o: ["A. Une IP Set rule avec l'IP de l'attaquant", "B. Une Rate-based rule avec un threshold de 300 requêtes/5 minutes qui block l'IP source", "C. Une Geo match rule pour bloquer le pays d'origine de l'IP", "D. Une Regex pattern set rule pour bloquer les requêtes avec des patterns spécifiques"],
    a: "B",
    e: "Les Rate-based rules WAF permettent de bloquer automatiquement les adresses IP qui dépassent un seuil de requêtes sur une fenêtre de 5 minutes (minimum 100 requêtes). Le blocage est automatique et temporaire (l'IP est débloquée automatiquement quand le taux redescend). IP Set (A) nécessite une mise à jour manuelle. Geo match (C) bloquerait tout le pays, créant des faux positifs. Regex (D) inspecte le contenu, pas la fréquence."
  },
  {
    t: "Network Security",
    q: "VPC Flow Logs montrent du trafic REJECT sur le port 443 depuis des IPs légitimes vers une instance EC2. L'instance fonctionne correctement pour certains clients. Comment diagnostiquer ?",
    o: ["A. Vérifier que les Security Groups de l'instance autorisent le port 443 en entrée", "B. Vérifier les NACLs du subnet : elles peuvent bloquer le trafic malgré des Security Groups permissifs, notamment les ephemeral ports en inbound", "C. Augmenter les limites de connexion de l'instance EC2", "D. Redémarrer l'instance pour réinitialiser les connexions"],
    a: "B",
    e: "Les NACLs sont stateless — elles doivent avoir des règles pour le trafic entrant ET sortant. Un problème courant : le retour du trafic HTTPS (réponses) utilise des ephemeral ports (1024-65535) sur le client. Si la NACL inbound du subnet de l'instance n'autorise pas ces ephemeral ports en INBOUND (côté client) ou les OUTBOUND (côté serveur), le trafic de retour est bloqué. Les Security Groups (A) sont stateful et n'ont pas ce problème. Les Flow Logs indiquant REJECT suggèrent un blocage réseau, pas une limite de connexion (C)."
  }
];

window.QDATA[4] = [
  {
    t: "KMS Key Policy",
    q: "Un administrateur crée une CMK KMS sans modifier la key policy par défaut. Un développeur IAM dans le même compte avec des droits administrateur IAM complets essaie d'utiliser cette clé. L'accès est-il accordé ?",
    o: ["A. Oui, l'administrateur IAM a tous les droits par défaut dans le compte", "B. Non, sans une déclaration explicite dans la key policy, personne ne peut utiliser la clé", "C. Oui, la key policy par défaut accorde l'accès au compte root et aux administrateurs IAM via les identity-based policies", "D. Cela dépend de la région AWS utilisée"],
    a: "C",
    e: "La key policy par défaut KMS contient une déclaration qui donne le contrôle au compte AWS root ('Principal': {'AWS': 'arn:aws:iam::ACCOUNT-ID:root'}). Cela permet aux identity-based policies IAM de fonctionner pour cette clé. L'administrateur IAM avec les droits KMS dans sa policy peut donc utiliser la clé. CEPENDANT, si cette déclaration est retirée de la key policy, plus aucune policy IAM ne peut donner accès à la clé — c'est la particularité unique de KMS."
  },
  {
    t: "KMS",
    q: "Une application EC2 chiffre des données volumineuses avec KMS. Elle appelle KMS Encrypt directement pour chaque objet, ce qui cause des throttling. Quelle est la meilleure pratique pour ce cas d'usage ?",
    o: ["A. Augmenter les quotas KMS pour le compte", "B. Utiliser l'envelope encryption : GenerateDataKey pour obtenir une data key, chiffrer les données localement, ne stocker que la data key chiffrée", "C. Passer à AES-256 natif dans l'application sans utiliser KMS", "D. Utiliser des CMK dans plusieurs régions et distribuer les requêtes"],
    a: "B",
    e: "L'envelope encryption est la solution recommandée pour le chiffrement de données volumineuses. L'application appelle KMS GenerateDataKey UNE FOIS pour obtenir une data key (en clair et chiffrée). Elle utilise la data key en clair pour chiffrer les données localement (AES-256), puis supprime la data key en clair de la mémoire. Seule la data key chiffrée est stockée avec les données. Les appels KMS sont réduits au minimum (un seul appel par lot de données), évitant le throttling. KMS ne voit jamais les données en clair."
  },
  {
    t: "KMS",
    q: "Une entreprise doit stocker des données chiffrées dans une région principale et pouvoir les déchiffrer dans une région DR en cas de disaster recovery, sans ré-importer les données. Quelle fonctionnalité KMS utiliser ?",
    o: ["A. Créer une CMK identique manuellement dans chaque région avec la même key material importée (BYOK)", "B. Utiliser KMS Multi-Region Keys : même key material répliqué, ARN différents dans chaque région", "C. Utiliser S3 Cross-Region Replication avec SSE-KMS : les données sont automatiquement re-chiffrées", "D. Exporter les données déchiffrées puis les re-chiffrer dans la région DR"],
    a: "B",
    e: "KMS Multi-Region Keys permettent d'avoir le même key material dans plusieurs régions (ex : us-east-1 et eu-west-1) avec des ARN différents. Les données chiffrées dans une région peuvent être déchiffrées directement dans l'autre région sans ré-importer ni re-chiffrer. Les clés restent indépendantes (rotation, disable indépendants). L'option C (SRR/CRR avec SSE-KMS) ne fonctionne qu'avec des CMK dans la même région ou des CMK multi-régions. L'option D est contraire aux bonnes pratiques de sécurité."
  },
  {
    t: "CloudHSM",
    q: "Une application financière doit respecter les exigences FIPS 140-2 Level 3 et nécessite un contrôle total sur les clés cryptographiques (AWS ne doit jamais y avoir accès). Quelle solution choisir ?",
    o: ["A. AWS KMS avec CMK Customer-Managed Key", "B. AWS KMS avec External Key Store (XKS) connecté à un HSM on-premise", "C. AWS CloudHSM : HSM dédié dans le VPC, FIPS 140-2 Level 3, opérations uniquement via le HSM Cluster", "D. AWS Secrets Manager avec chiffrement KMS avancé"],
    a: "C",
    e: "CloudHSM est la solution pour FIPS 140-2 Level 3 avec un contrôle total. AWS n'a JAMAIS accès aux clés dans CloudHSM — l'entreprise configure les credentials admin du HSM directement. KMS standard est FIPS 140-2 Level 2 et AWS peut techniquement accéder aux opérations. KMS avec XKS (B) délègue les opérations à un HSM externe mais introduit une latence et une complexité supplémentaires. Secrets Manager (D) utilise KMS pour le chiffrement, ce n'est pas un HSM."
  },
  {
    t: "KMS",
    q: "Un compte A veut qu'un service EC2 dans le compte B puisse déchiffrer des données chiffrées avec une CMK du compte A. Quelle est la configuration minimale requise ?",
    o: ["A. Partager la CMK via AWS Resource Access Manager (RAM)", "B. (1) Modifier la key policy de la CMK dans le compte A pour autoriser le rôle EC2 du compte B, ET (2) créer une identity-based policy dans le compte B qui accorde kms:Decrypt sur cette CMK", "C. Créer une réplication de la CMK dans le compte B via KMS Multi-Region Keys", "D. Exporter la CMK du compte A et l'importer dans le compte B via BYOK"],
    a: "B",
    e: "L'accès cross-account KMS nécessite deux étapes : (1) La key policy dans le compte A doit explicitement autoriser le Principal du compte B (l'ARN du rôle EC2 ou le compte B root), (2) Une identity-based policy dans le compte B doit accorder kms:Decrypt sur l'ARN de la CMK du compte A. Les deux sont nécessaires. KMS ne peut pas être partagé via RAM (A). Multi-Region Keys (C) répliquent le key material, ce qui n'est pas nécessaire ici. Exporter une CMK (D) n'est pas possible pour les KMS-generated keys."
  },
  {
    t: "Chiffrement",
    q: "Une application utilise SSE-KMS pour chiffrer les objets S3. Les développeurs remarquent des erreurs 'KMS throttling' lors des GET massifs d'objets. Comment résoudre sans changer le type de chiffrement ?",
    o: ["A. Passer à SSE-S3 pour éviter les limites KMS", "B. Activer KMS Request Quotas increase via Service Quotas, et utiliser S3 Bucket Keys pour réduire les appels KMS (1 appel/bucket au lieu de 1 appel/objet)", "C. Distribuer les objets sur plusieurs buckets dans différentes régions", "D. Utiliser CloudFront pour cacher les objets et réduire les requêtes S3/KMS"],
    a: "B",
    e: "S3 Bucket Keys est la solution principale : au lieu d'appeler KMS pour chaque objet, S3 génère une data key de bucket qui chiffre les data keys d'objets individuels. Cela réduit les appels KMS de ~99% pour des charges de travail S3 intensives. En complément, une augmentation des quotas KMS via Service Quotas peut être demandée. L'option A change la méthode de chiffrement. CloudFront (D) aide pour les lectures répétées mais ne résout pas les accès initiaux."
  },
  {
    t: "KMS",
    q: "Un administrateur accidentellement supprime une CMK KMS. Des données critiques sont chiffrées avec cette clé. Que se passe-t-il et que peut-on faire ?",
    o: ["A. Les données sont immédiatement et définitivement irrécupérables", "B. La CMK entre dans une période d'attente de 7 à 30 jours avant la suppression définitive ; l'administrateur peut annuler la suppression durant cette période", "C. AWS peut restaurer la clé si contacté dans les 24h", "D. La suppression est immédiate mais un backup automatique permet la restauration"],
    a: "B",
    e: "KMS implémente une période d'attente obligatoire (waiting period) de 7 à 30 jours lors d'une demande de suppression de CMK. Durant cette période, la clé est désactivée (pas d'opérations cryptographiques) mais n'est pas encore supprimée. L'administrateur peut annuler la suppression via la console ou l'API CancelKeyDeletion. Une fois la période écoulée, la suppression est définitive et irréversible. Cette protection évite les suppressions accidentelles. AWS ne peut pas récupérer une clé après suppression définitive."
  },
  {
    t: "ACM",
    q: "Une entreprise veut déployer des certificats TLS sur ses instances EC2 internes (communication service-à-service) avec une CA privée maîtrisée. Quelle solution utiliser ?",
    o: ["A. ACM Public CA : émettre des certificats pour les domaines internes", "B. ACM Private CA (AWS Private Certificate Authority) : créer une CA privée hiérarchique et émettre des certificats pour les services internes", "C. Let's Encrypt avec un challenge DNS pour les domaines internes", "D. Créer et gérer une CA avec OpenSSL sur une instance EC2 dédiée"],
    a: "B",
    e: "ACM Private CA permet de créer une hiérarchie d'autorités de certification privées (root CA + subordinate CAs). Les certificats émis peuvent être utilisés sur EC2, containers EKS/ECS, et d'autres services internes. Avantages : intégration native AWS, renouvellement automatique via ACM, révocation via OCSP/CRL, audit dans CloudTrail. ACM Public CA (A) n'émet que des certificats pour des domaines DNS publics vérifiables. Let's Encrypt (C) ne supporte pas les domaines privés non routables. OpenSSL (D) est non-managé."
  }
];

window.QDATA[5] = [
  {
    t: "S3 Chiffrement",
    q: "Une bucket policy doit forcer que tous les objets uploadés soient chiffrés avec SSE-KMS en utilisant une CMK spécifique (pas n'importe quelle clé KMS). Quelle condition de policy utiliser ?",
    o: ["A. s3:x-amz-server-side-encryption = aws:kms", "B. s3:x-amz-server-side-encryption = aws:kms ET s3:x-amz-server-side-encryption-aws-kms-key-id = arn:aws:kms:...:key/KEY-ID", "C. kms:KeyId = KEY-ID dans la bucket policy", "D. aws:KmsKeyId = arn:aws:kms:...:key/KEY-ID"],
    a: "B",
    e: "Pour forcer une CMK spécifique, deux conditions sont nécessaires dans la Deny : (1) vérifier que le type de chiffrement est SSE-KMS avec la condition 's3:x-amz-server-side-encryption = aws:kms', (2) vérifier l'ARN de la CMK avec la condition 's3:x-amz-server-side-encryption-aws-kms-key-id = arn:aws:kms:REGION:ACCOUNT:key/KEY-ID'. La première condition seule permettrait l'utilisation de n'importe quelle CMK. Les conditions C et D n'existent pas dans le contexte des bucket policies."
  },
  {
    t: "Secrets Manager",
    q: "Une application RDS doit avoir ses credentials de base de données rotés automatiquement toutes les 30 jours. L'application doit récupérer les nouveaux credentials sans redéploiement. Quelle architecture utiliser ?",
    o: ["A. Mettre à jour manuellement les variables d'environnement de l'application tous les 30 jours", "B. Stocker les credentials dans Secrets Manager avec rotation automatique RDS native, l'application appelle GetSecretValue à chaque connexion", "C. Stocker les credentials dans SSM Parameter Store et créer un Lambda de rotation personnalisé", "D. Changer les credentials RDS via AWS Config remediation toutes les 30 jours"],
    a: "B",
    e: "Secrets Manager est la solution idéale ici : (1) rotation automatique native pour RDS/Aurora/Redshift/DocumentDB (Lambda pré-construite), (2) l'application appelle l'API GetSecretValue juste avant d'établir une connexion DB (pas en cache), (3) Secrets Manager gère la fenêtre de transition avec AWSPREVIOUS/AWSCURRENT pour zéro downtime. L'application récupère toujours les credentials actuels sans redéploiement. SSM Parameter Store (C) nécessite une Lambda custom. Variables d'environnement (A) nécessitent un redéploiement."
  },
  {
    t: "S3 Object Lock",
    q: "Un organisme de réglementation exige que les logs d'audit soient conservés pendant 7 ans et ne puissent être supprimés ou modifiés par personne, y compris les administrateurs AWS. Quelle configuration S3 utiliser ?",
    o: ["A. Activer S3 Versioning et Lifecycle policies pour archiver vers Glacier après 1 an", "B. Activer S3 Object Lock en mode COMPLIANCE avec une retention period de 7 ans, sur un bucket avec Versioning activé", "C. Activer S3 Object Lock en mode GOVERNANCE avec une retention period de 7 ans", "D. Chiffrer les logs avec une CMK KMS et révoquer l'accès aux administrateurs"],
    a: "B",
    e: "S3 Object Lock Compliance mode est le mode le plus restrictif : PERSONNE (même les administrateurs AWS, même le root account) ne peut supprimer ou modifier les objets jusqu'à l'expiration de la retention period. C'est le mode WORM le plus strict, requis pour certaines réglementations (SEC 17a-4, CFTC, FINRA). Governance mode (C) permet aux utilisateurs avec la permission s3:BypassGovernanceRetention de supprimer les objets — insuffisant pour cette exigence. S3 Versioning + Lifecycle (A) n'empêche pas la suppression."
  },
  {
    t: "Data Protection",
    q: "Une entreprise de santé stocke des dossiers médicaux dans S3 et doit s'assurer qu'aucun employee ne peut exfiltrer les données en les copiant vers un bucket S3 personnel. Quelle combinaison de contrôles utiliser ?",
    o: ["A. Chiffrement SSE-KMS + bloquer les accès Internet depuis les postes de travail", "B. SCP qui empêche les copies S3 vers des buckets dans d'autres comptes (Deny sur s3:PutObject sauf si aws:ResourceOrgID = org-id) + VPC Endpoints S3 avec endpoint policy restrictive", "C. Macie pour détecter les exfiltrations de données sensibles", "D. IAM policies qui limitent s3:PutObject aux buckets spécifiques dans le compte"],
    a: "B",
    e: "La combinaison SCP + VPC Endpoint policies est la solution pour prévenir l'exfiltration S3. SCP avec condition 'StringEquals aws:ResourceOrgID' interdit les copies vers des buckets hors de l'Organization. Les VPC Endpoint policies pour S3 peuvent restreindre les requêtes S3 passant par l'endpoint aux buckets de l'Organisation uniquement. Ces contrôles sont préventifs. Macie (C) détecte mais ne prévient pas. IAM policies (D) au niveau compte sont contournables par des utilisateurs avec des droits élevés."
  },
  {
    t: "ACM Private CA",
    q: "Une entreprise déploie des microservices sur EKS et veut que chaque pod puisse s'authentifier mutuellement (mTLS) avec des certificats valides. Comment gérer les certificats à grande échelle ?",
    o: ["A. Créer manuellement un certificat par service dans ACM Public CA", "B. Utiliser ACM Private CA avec cert-manager sur EKS : approvisionnement automatique de certificats par pod via l'issuer PCA", "C. Utiliser des certificats auto-signés générés par OpenSSL dans chaque container", "D. Utiliser AWS IoT Core pour la gestion des certificats d'authentification"],
    a: "B",
    e: "ACM Private CA avec cert-manager est la solution recommandée pour mTLS sur EKS. cert-manager (outil Kubernetes) utilise l'AWS PCA Issuer pour demander et renouveler automatiquement des certificats X.509 de courte durée (ex : 24h) pour chaque pod. Avantages : renouvellement automatique, audit des émissions dans CloudTrail, révocation CRL centralisée, intégration native Kubernetes. Les certificats auto-signés (C) ne permettent pas une chaîne de confiance PKI centralisée. IoT Core (D) est pour les objets IoT."
  },
  {
    t: "S3",
    q: "Un partenaire externe doit télécharger un rapport de 2 GB depuis S3 dans les 24 prochaines heures. L'accès doit expirer automatiquement et le partenaire n'a pas de compte AWS. Quelle est la solution la plus simple ?",
    o: ["A. Rendre le bucket S3 public temporairement puis le re-sécuriser après", "B. Générer une Presigned URL avec une expiration de 24h pour l'objet spécifique", "C. Créer un compte IAM temporaire pour le partenaire avec accès limité au bucket", "D. Partager les credentials AWS de l'entreprise temporairement"],
    a: "B",
    e: "Les Presigned URLs sont précisément conçues pour ce cas d'usage : URL temporaire avec permissions du générateur, sans compte AWS requis. La durée d'expiration peut être configurée jusqu'à 7 jours (ou limitée par la durée des credentials IAM si générée avec AssumeRole). Le partenaire peut télécharger directement via HTTPS. Option A expose tout le bucket. Option C et D créent des risques de sécurité. La Presigned URL est la solution la moins risquée pour un accès ponctuel."
  },
  {
    t: "Data Protection",
    q: "Une entreprise découvre qu'un ancien employé a toujours accès à des données S3 via une presigned URL qu'il a générée avant de partir. Comment révoquer cet accès ?",
    o: ["A. Supprimer les objets S3 et les recréer sous de nouveaux noms", "B. Révoquer les credentials IAM (access key) ou invalider les tokens de session qui ont été utilisés pour générer la presigned URL — les URLs signées avec ces credentials deviennent invalides", "C. Changer le nom du bucket S3", "D. Activer S3 Block Public Access pour invalider les presigned URLs"],
    a: "B",
    e: "Une presigned URL est valide uniquement si les credentials utilisés pour la signer sont encore valides. En révoquant l'access key ou en attachant une Deny policy avec DateLessThan sur les sessions de l'utilisateur, les presigned URLs signées avec ces credentials deviennent immédiatement invalides. Pour les rôles IAM assumés, créer une policy de révocation (Deny avec aws:TokenIssueTime condition) invalide tous les tokens actifs. Block Public Access (D) ne concerne pas les presigned URLs."
  },
  {
    t: "S3 Security",
    q: "Une bucket policy autorise l'accès depuis un VPC Endpoint spécifique. Un utilisateur avec des droits IAM AdministratorAccess tente d'accéder au bucket depuis son poste de travail en dehors du VPC. L'accès est accordé ?",
    o: ["A. Oui, AdministratorAccess override toutes les restrictions", "B. Non, si la bucket policy contient un Deny sur aws:SourceVpce != vpc-endpoint-id, le Deny explicit l'emporte même sur AdministratorAccess", "C. Oui, les bucket policies ne s'appliquent pas aux administrateurs IAM", "D. L'accès dépend si la MFA est activée pour l'utilisateur"],
    a: "B",
    e: "Un Deny explicite dans une bucket policy s'applique à TOUS les principals, y compris les administrateurs IAM. La condition 'StringNotEquals aws:SourceVpce vpc-endpoint-id' dans un Deny signifie que toute requête ne provenant pas de ce VPC endpoint spécifique sera refusée. AdministratorAccess est une identity-based policy qui accorde des Allow, mais le Deny explicit de la resource-based policy l'emporte. Seul le root account AWS pourrait potentiellement override via la policy du bucket (en modifiant la policy)."
  }
];

window.QDATA[6] = [
  {
    t: "Incident Response",
    q: "GuardDuty génère un finding 'InstanceCredentialExfiltration:EC2/MetadataServiceAccess' indiquant qu'une instance EC2 a été compromise et que ses credentials IAM sont utilisés depuis une IP externe. Quelles sont les trois premières actions à effectuer ?",
    o: ["A. Terminer immédiatement l'instance EC2 compromise, changer le mot de passe root AWS, contacter AWS Support", "B. (1) Isoler l'instance (SG restrictif), (2) Révoquer le rôle IAM de l'instance (détacher le rôle ou créer une Deny policy), (3) Snapshotter l'EBS pour préserver les preuves avant investigation", "C. Désactiver GuardDuty pour stopper les alertes pendant l'investigation", "D. Changer immédiatement tous les secrets dans Secrets Manager et déployer une nouvelle infrastructure"],
    a: "B",
    e: "L'ordre correct pour une réponse à incident EC2 compromise : (1) ISOLER — attacher un SG qui block tout le trafic entrant/sortant pour stopper l'exfiltration et les mouvements latéraux, (2) RÉVOQUER — détacher le rôle IAM de l'instance OU créer une policy Deny explicite pour invalider immédiatement les credentials volés (sts:AWSServiceRoleForEC2 ne peut être révoqué directement mais une Deny policy sur le rôle fonctionne), (3) CONSERVER LES PREUVES — snapshot EBS avant toute action destructive. Ne jamais terminer (A) avant d'avoir les preuves."
  },
  {
    t: "Forensics",
    q: "Après isolation d'une instance EC2 compromise, l'équipe forensique veut analyser le disque sans interférer avec l'instance live. Quelle approche ?",
    o: ["A. Se connecter à l'instance via Session Manager et exécuter des commandes d'investigation directement", "B. Créer un snapshot EBS du volume root, créer un volume à partir du snapshot, l'attacher à une instance forensique dédiée dans un subnet isolé, analyser en lecture seule", "C. Exporter les logs CloudWatch de l'instance pour les analyser", "D. Lancer un scan Inspector sur l'instance compromise"],
    a: "B",
    e: "L'analyse forensique correcte préserve l'intégrité des preuves : créer un snapshot EBS est une opération non-invasive (l'instance continue de fonctionner et les preuves sont préservées à ce point dans le temps). Le volume créé depuis le snapshot est attaché à une instance forensique isolée (sans accès Internet, subnet dédié) et analysé en lecture seule. Se connecter directement (A) altère les preuves (accès logs, timestamps). CloudWatch Logs (C) ne contient pas les artefacts système complets. Inspector (D) scannerait les CVEs, pas les preuves forensiques."
  },
  {
    t: "Automatisation IR",
    q: "Une organisation veut automatiser la réponse aux incidents GuardDuty : dès qu'un finding 'UnauthorizedAccess:IAMUser/ConsoleLogin' est détecté depuis un pays non autorisé, l'utilisateur IAM doit être désactivé automatiquement. Quelle architecture ?",
    o: ["A. Surveiller manuellement la console GuardDuty et désactiver manuellement les comptes suspects", "B. GuardDuty → EventBridge Rule (filtrée sur finding type + country) → Lambda → IAM:UpdateLoginProfile + IAM:DeactivateMFADevice + IAM:DeleteAccessKey", "C. Config Rule qui détecte les logins depuis des pays non autorisés", "D. CloudTrail → CloudWatch Alarm → SNS notification à l'équipe sécurité"],
    a: "B",
    e: "L'architecture event-driven est la réponse standard pour l'automatisation IR : GuardDuty génère le finding, EventBridge capte l'événement (rule filtrée sur detail.type et detail.service.action.actionType.country), déclenche une Lambda qui appelle IAM pour désactiver les accès (désactiver le login console, désactiver MFA, supprimer les access keys). Cette architecture est quasi-instantanée (<1 min) vs la surveillance manuelle. Config (C) surveille les configurations, pas les événements de connexion. CloudWatch+SNS (D) notifie mais n'agit pas."
  },
  {
    t: "Investigation",
    q: "Un incident de sécurité s'est produit il y a 3 mois. L'équipe veut savoir quelles actions ont été effectuées par un utilisateur IAM spécifique sur S3 pendant cette période. Comment procéder ?",
    o: ["A. Consulter CloudTrail Event History dans la console (90 jours max)", "B. Interroger les fichiers CloudTrail stockés dans S3 avec Amazon Athena : SQL sur cloudtrail_logs filtrando userIdentity.userName = 'USER' AND eventSource = 's3.amazonaws.com'", "C. Contacter AWS Support pour obtenir les logs d'activité", "D. Vérifier les Access Logs ALB pour les requêtes S3"],
    a: "B",
    e: "L'Event History CloudTrail (A) est limité à 90 jours. Pour des archives plus longues, les trails stockent les logs dans S3 indéfiniment. Amazon Athena permet de requêter directement ces fichiers JSON (Parquet) avec SQL. La requête filtre sur userIdentity.userName pour cibler l'utilisateur et eventSource pour S3. Avec le partitionnement par date/région, les requêtes sont performantes. CloudTrail Lake (alternative moderne) offre aussi des requêtes SQL sur une période configurable jusqu'à 7 ans. AWS Support (C) ne fournit pas les logs clients."
  },
  {
    t: "Amazon Detective",
    q: "Après qu'un GuardDuty finding indique une activité suspecte sur un rôle IAM, un analyste sécurité veut rapidement comprendre : qui a utilisé ce rôle, depuis quelles IPs, et si ce comportement est anormal historiquement. Quel service est le plus adapté ?",
    o: ["A. CloudTrail Event History pour rechercher les AssumeRole events", "B. Amazon Detective : corrèle automatiquement CloudTrail, VPC Flow Logs, GuardDuty et crée des graphes comportementaux pour accélérer l'investigation", "C. Amazon Macie pour analyser les données accédées par ce rôle", "D. IAM Access Analyzer pour voir les actions récentes du rôle"],
    a: "B",
    e: "Amazon Detective est conçu pour accélérer les investigations de sécurité post-incident. Il ingère automatiquement CloudTrail, VPC Flow Logs et GuardDuty findings et crée des graphes comportementaux (qui a assumé ce rôle, depuis quelles IPs, à quelle fréquence, comparé à la baseline historique). L'interface visuelle permet de naviguer rapidement entre les entités liées. CloudTrail (A) nécessite des requêtes SQL manuelles. Macie (C) analyse les données S3, pas les comportements IAM. IAM Analyzer (D) identifie les accès non voulus, pas l'historique d'activité."
  },
  {
    t: "Credentials Compromise",
    q: "Un développeur découvre qu'il a accidentellement commité des AWS access keys dans un dépôt GitHub public. Quelles actions prioritaires dans quel ordre ?",
    o: ["A. Supprimer le commit de l'historique git, changer le mot de passe du compte AWS, scanner les logs CloudTrail", "B. (1) Désactiver immédiatement l'access key compromise via IAM, (2) Créer une nouvelle access key si nécessaire, (3) Vérifier CloudTrail pour les actions effectuées avec les credentials compromis, (4) Supprimer l'historique git public", "C. Supprimer le dépôt GitHub entier, contacter GitHub pour supprimer les caches", "D. Réinitialiser le mot de passe root AWS et activer MFA d'urgence"],
    a: "B",
    e: "L'ordre de priorité est critique : (1) DÉSACTIVER IMMÉDIATEMENT l'access key — des outils automatiques scannent GitHub en temps réel et peuvent exploiter les credentials en quelques minutes après le push. (2) Créer une nouvelle key si l'application en a besoin. (3) Investiguer CloudTrail pour savoir ce qui a été fait avec les credentials (CreateUser, AssumeRole, S3 access…). (4) Nettoyer le dépôt git (l'historique rewriting via git rebase, BFG Repo-Cleaner). La clé est: désactiver AVANT de nettoyer."
  },
  {
    t: "Forensics",
    q: "Une instance Lambda a été compromise. L'équipe sécurité veut analyser le code de la fonction et identifier comment l'attaquant a pu exécuter du code malveillant. Quelles sources d'information utiliser ?",
    o: ["A. Snapshotter le volume EBS de la Lambda", "B. (1) CloudTrail : GetFunction, UpdateFunctionCode events pour voir si le code a été modifié. (2) CloudWatch Logs : logs d'exécution de la Lambda. (3) Amazon Inspector : scan du code Lambda pour vulnérabilités. (4) Télécharger le code source de la version déployée via GetFunction API", "C. Analyser les VPC Flow Logs de la Lambda", "D. Lancer une analyse GuardDuty Runtime Monitoring sur la Lambda"],
    a: "B",
    e: "Lambda est serverless donc pas de snapshot EBS (A). L'investigation Lambda comprend : CloudTrail pour voir les modifications du code (UpdateFunctionCode), CreateFunction ou UpdateFunctionConfiguration — chercher des permissions supplémentaires ajoutées. CloudWatch Logs contiennent la sortie standard des exécutions (outputs, erreurs, éventuellement des traces malveillantes). Inspector scanne les dépendances pour des CVEs qui auraient pu être exploitées. GetFunction API permet de récupérer le code déployé pour analyse statique. GuardDuty Runtime Monitoring (D) peut être utile pour des activités futures mais pas pour investiguer le passé."
  },
  {
    t: "Incident Response",
    q: "Une entreprise découvre qu'un bucket S3 a été rendu public accidentellement pendant 2 heures. Comment déterminer quelles données ont été accédées pendant cette période ?",
    o: ["A. Vérifier les CloudTrail Data Events s3:GetObject sur le bucket pendant cette période avec Amazon Athena", "B. Les logs S3 Server Access Logs ou CloudTrail S3 Data Events permettent d'identifier les accès GetObject, PutObject pendant la fenêtre temporelle", "C. Vérifier les VPC Flow Logs pour voir le trafic vers S3", "D. Contacter AWS pour obtenir les logs d'accès S3"],
    a: "B",
    e: "Deux sources complémentaires : CloudTrail S3 Data Events (s'ils étaient activés) fournissent des logs détaillés avec l'identité du demandeur, l'IP source, l'objet accédé. S3 Server Access Logs fournissent des logs similaires mais avec un délai de livraison. Important : ces sources doivent être pré-configurées AVANT l'incident. Si Data Events CloudTrail n'étaient pas activés sur le bucket, les informations sont limitées. Athena (A) est l'outil pour requêter ces logs, pas la source elle-même. VPC Flow Logs (C) montrent le trafic réseau mais pas l'identité ni les objets spécifiques."
  }
];

window.QDATA[7] = [
  {
    t: "IAM Access Analyzer",
    q: "Un administrateur veut créer une policy IAM least-privilege pour un développeur basée sur ses activités réelles des 90 derniers jours. Quelle fonctionnalité IAM Analyzer utiliser ?",
    o: ["A. IAM Access Analyzer External Access Findings pour identifier les accès non autorisés", "B. IAM Access Analyzer Policy Generation : analyser les logs CloudTrail du développeur et générer automatiquement une policy avec les seules permissions effectivement utilisées", "C. IAM Credentials Report pour voir les permissions du développeur", "D. AWS Trusted Advisor pour recommander des permissions réduites"],
    a: "B",
    e: "IAM Access Analyzer Policy Generation est une fonctionnalité qui analyse les logs CloudTrail d'un principal IAM sur une période (jusqu'à 90 jours) et génère automatiquement une policy IAM contenant uniquement les actions effectivement utilisées. C'est la méthode la plus précise pour implémenter le principe du moindre privilège basé sur les comportements réels. External Access Findings (A) détecte l'accès externe non voulu. Credentials Report (C) liste les credentials mais pas les usages. Trusted Advisor (D) donne des recommandations génériques."
  },
  {
    t: "IMDSv2",
    q: "Une application web hébergée sur EC2 est vulnérable aux attaques SSRF (Server-Side Request Forgery). Un attaquant pourrait récupérer les credentials IAM de l'instance via l'IMDS. Comment mitiger ce risque ?",
    o: ["A. Supprimer le rôle IAM de l'instance EC2", "B. Forcer IMDSv2 en configurant HttpTokens: required dans les Launch Templates : IMDSv2 nécessite un PUT préalable avec un TTL, ce qui bloque les attaques SSRF classiques", "C. Utiliser des Security Groups pour bloquer l'accès à 169.254.169.254", "D. Chiffrer les credentials IAM dans l'IMDS avec KMS"],
    a: "B",
    e: "IMDSv2 est la solution recommandée contre les SSRF sur l'IMDS. Contrairement à IMDSv1 (un simple GET sur http://169.254.169.254/latest/meta-data/iam/security-credentials/ROLE-NAME suffit), IMDSv2 nécessite d'abord un PUT request pour obtenir un token (avec TTL 1-21600s) puis inclure ce token dans le GET. Les attaques SSRF ne peuvent pas effectuer le PUT préalable car les requêtes cross-site n'autorisent pas les PUT directs. Configurer HttpTokens: required dans le Launch Template ou via l'API ModifyInstanceMetadataOptions."
  },
  {
    t: "AWS Config",
    q: "Une entreprise doit démontrer à ses auditeurs que tous ses buckets S3 avaient le chiffrement activé sur toute la période d'audit (12 derniers mois). Comment prouver cela ?",
    o: ["A. Générer un rapport Macie qui montre l'état actuel du chiffrement", "B. Utiliser AWS Config Configuration History : il enregistre toutes les modifications de configuration des ressources et peut montrer l'état du chiffrement S3 à n'importe quel point dans le passé", "C. Créer un script qui vérifie l'état actuel du chiffrement de tous les buckets", "D. Demander une attestation à AWS via Artifact"],
    a: "B",
    e: "AWS Config enregistre l'historique des configurations de toutes les ressources surveillées. Via l'API GetResourceConfigHistory ou la console, on peut voir l'état d'un bucket S3 (ServerSideEncryptionConfiguration) à n'importe quelle date dans le passé (si Config était actif). Pour la conformité, on peut aussi utiliser Config Rules avec l's3-bucket-server-side-encryption-enabled et générer un rapport de conformité sur toute la période. Macie (A) n'est pas un outil de conformité de configuration. Script actuel (C) ne montre pas l'historique. Artifact (D) fournit les certifications AWS, pas la configuration client."
  },
  {
    t: "Control Tower",
    q: "Une entreprise construit une landing zone multi-comptes. Elle veut s'assurer que tous les nouveaux comptes provisionés respectent automatiquement les guardrails de sécurité (pas de ressources publiques, CloudTrail activé, etc.). Quelle solution AWS utiliser ?",
    o: ["A. Déployer manuellement des CloudFormation StackSets pour chaque nouveau compte", "B. Implémenter AWS Control Tower : landing zone avec Account Factory, guardrails préventifs (SCP) et détectifs (Config Rules) appliqués automatiquement", "C. Utiliser AWS Organizations + SCP manuellement configurées", "D. Créer un script boto3 qui configure chaque nouveau compte"],
    a: "B",
    e: "AWS Control Tower est la solution complète pour une landing zone multi-comptes sécurisée. Composants clés : Account Factory (provisioning automatique de comptes avec une baseline sécurisée), Guardrails préventifs (implémentés comme SCPs, activés automatiquement sur les OUs), Guardrails détectifs (implémentés comme Config Rules). Chaque nouveau compte provisioné via Account Factory hérite automatiquement de tous les guardrails de son OU. Options A, C, D nécessitent du travail manuel non scalable. Control Tower intègre aussi AWS IAM Identity Center pour le SSO."
  },
  {
    t: "Governance",
    q: "Un CISO veut un tableau de bord unique montrant le score de conformité NIST 800-53 de tous les 100 comptes AWS de l'organisation. Quelle approche utiliser ?",
    o: ["A. Déployer un script Lambda qui requête AWS Config dans chaque compte et agrège les résultats", "B. Configurer Security Hub comme aggregator central avec le standard NIST 800-53, activer dans tous les comptes via Organizations, consulter les findings dans le compte administrateur", "C. Utiliser AWS Audit Manager avec le framework NIST 800-53 dans le compte de management", "D. Déployer un SIEM tiers (Splunk) pour agréger les résultats Config de tous les comptes"],
    a: "B",
    e: "Security Hub est la solution native AWS pour ce cas d'usage. Configuration : désigner un compte administrateur Security Hub via Organizations, activer automatiquement dans tous les comptes membres (auto-enable), activer le standard NIST 800-53 Rev 5, configurer un Finding Aggregator pour les régions multiples. Le compte admin voit le score de conformité de tous les comptes sur un seul dashboard. Audit Manager (C) collecte des preuves mais ne présente pas de score de conformité en temps réel. Script Lambda (A) est une solution custom non maintenue. SIEM tiers (D) est disproportionné."
  },
  {
    t: "DevSecOps",
    q: "Une équipe veut intégrer des contrôles de sécurité dans leur pipeline CodePipeline pour s'assurer que les templates CloudFormation ne déploient pas de ressources non conformes aux politiques de sécurité. Quelle solution AWS native utiliser ?",
    o: ["A. Ajouter une étape CodeBuild qui exécute aws cloudformation validate-template", "B. Utiliser AWS CloudFormation Guard dans un stage CodeBuild : cfn-guard avec des règles de policy-as-code qui rejettent les templates non conformes (ex: S3 public, SG port 22 ouvert)", "C. Activer AWS Config avant le déploiement pour pre-valider les templates", "D. Utiliser IAM Permissions Boundaries pour bloquer les déploiements CloudFormation non conformes"],
    a: "B",
    e: "CloudFormation Guard (cfn-guard) est un outil AWS policy-as-code qui permet de définir des règles de sécurité pour les templates CloudFormation. Exemple : rule 'no_public_s3' { Properties.PublicAccessBlockConfiguration.BlockPublicAcls == true }. Intégré dans un stage CodeBuild de CodePipeline, il peut échouer le pipeline si un template viole une règle. C'est une approche préventive 'shift-left' — les mauvaises configurations sont détectées avant déploiement. aws cloudformation validate-template (A) vérifie seulement la syntaxe YAML/JSON. Config (C) est post-déploiement. IAM Permissions Boundaries (D) limitent les IAM permissions, pas les configurations CloudFormation."
  },
  {
    t: "Audit Manager",
    q: "Une entreprise doit se conformer à HIPAA et doit collecter automatiquement les preuves d'audit (logs, configurations) pour démontrer leur conformité. Quelle solution AWS utiliser ?",
    o: ["A. Télécharger manuellement les rapports de conformité depuis AWS Artifact", "B. AWS Audit Manager avec le framework HIPAA : collecte automatique de preuves depuis Config, CloudTrail, Security Hub, avec génération de rapports pour les auditeurs", "C. Security Hub avec le standard AWS Foundational Security Best Practices", "D. Créer des Lambda functions qui collectent les preuves et les stockent dans S3"],
    a: "B",
    e: "AWS Audit Manager est spécifiquement conçu pour la gestion des preuves d'audit de conformité réglementaire. Il inclut des frameworks prêts à l'emploi (HIPAA, SOC 2, PCI DSS, GDPR, NIST, CIS) qui mappent automatiquement les contrôles AWS aux exigences réglementaires. Les preuves sont collectées automatiquement depuis Config, CloudTrail, Security Hub et les check API calls. Les rapports générés sont formatés pour les auditeurs externes. AWS Artifact (A) fournit les certifications AWS, pas la conformité du client. Security Hub (C) fournit un score de conformité mais pas de collecte de preuves. Lambda (D) est custom et non maintenu."
  },
  {
    t: "Security Architecture",
    q: "Une startup adopte AWS et veut implémenter les bonnes pratiques de sécurité dès le départ. Quels sont les 5 services à activer en priorité dans chaque nouveau compte AWS ?",
    o: ["A. CloudFront, WAF, Shield, ACM, Route 53", "B. GuardDuty, Security Hub, AWS Config, CloudTrail (multi-région), IAM Access Analyzer", "C. Macie, Inspector, Detective, Firewall Manager, Network Firewall", "D. KMS, Secrets Manager, ACM Private CA, CloudHSM, SSM"],
    a: "B",
    e: "Les 5 services prioritaires pour tout nouveau compte AWS : (1) CloudTrail multi-région : visibilité complète sur toutes les API calls, requis pour toute investigation. (2) GuardDuty : détection des menaces sans agent, 1 clic. (3) Security Hub : centralise les findings et donne un score de conformité. (4) AWS Config : enregistre les configurations et détecte les dérives. (5) IAM Access Analyzer : détecte immédiatement tout accès externe non voulu aux ressources. Ces 5 services sont légers à déployer, à faible coût pour les petits environnements, et couvrent les piliers Detect et Identify du NIST Framework."
  }
];
