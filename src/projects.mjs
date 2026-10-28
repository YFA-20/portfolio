export default [
  {
    "id": "cloud",
    "n": "01",
    "title": "Automatiser le déploiement d’un environnement hors production.",
    "short": "Un environnement reproductible et administrable.",
    "domain": "Infrastructure",
    "context": "Entreprise · Orange",
    "kind": "entreprise",
    "tools": [
      "Linux",
      "Infrastructure virtualisée",
      "GitLab CI/CD",
      "Ansible",
      "Terraform"
    ],
    "desc": "Déploiement et administration d’un environnement hors production, avec automatisation des opérations récurrentes et sécurisation des accès.",
    "place": "Orange · Montreuil",
    "period": "Depuis octobre 2024",
    "role": "Déploiement et administration",
    "visual": "stack",
    "summary": [
      "Disposer d’un environnement hors production pour préparer et valider les évolutions applicatives.",
      "Automatiser les déploiements, administrer les systèmes et préparer leur exploitation.",
      "Un environnement déployé et documenté, avec des opérations reproductibles."
    ],
    "nodes": [
      [
        "Préparation",
        "Systèmes et environnement",
        "Préparation d’un environnement adapté aux besoins de validation."
      ],
      [
        "Automatisation",
        "Déploiement reproductible",
        "Automatisation des opérations récurrentes et traçabilité des déploiements."
      ],
      [
        "Exploitation",
        "Supervision et documentation",
        "Préparation de l’administration quotidienne et de la continuité du travail."
      ]
    ],
    "contribution": [
      "Participer au provisionnement d’un environnement virtualisé.",
      "Administrer les systèmes Linux et préparer les services applicatifs.",
      "Automatiser les opérations de configuration et de déploiement.",
      "Sécuriser les accès selon le besoin et le principe du moindre privilège.",
      "Mettre en place les éléments de supervision et documenter l’exploitation."
    ],
    "decisions": [
      [
        "Rendre les déploiements reproductibles",
        "L’automatisation réduit les manipulations répétitives et facilite la reproduction d’un environnement."
      ],
      [
        "Préparer l’exploitation dès le déploiement",
        "La supervision et la documentation accompagnent la mise en place des services pour faciliter leur administration."
      ]
    ],
    "result": "Environnement hors production déployé, opérations de configuration et de livraison automatisées, exploitation documentée.",
    "flow": [
      "Préparer",
      "Automatiser",
      "Valider et exploiter"
    ],
    "scope": "Mon intervention porte sur le déploiement, l’administration, l’automatisation et la sécurisation d’un environnement hors production.",
    "metrics": [],
    "sources": [],
    "outputs": [
      "Environnement hors production opérationnel.",
      "Déploiements reproductibles et documentés.",
      "Supervision et éléments d’exploitation préparés."
    ],
    "status": "Déployé · environnement hors production",
    "category": "professionnel"
  },
  {
    "id": "acces",
    "n": "02",
    "title": "Automatiser la gestion des certificats.",
    "short": "Renouvellement des certificats automatisé.",
    "domain": "Sécurité",
    "context": "Entreprise · Orange",
    "kind": "entreprise",
    "tools": [
      "Certbot",
      "ACME",
      "TLS",
      "Gestion des certificats"
    ],
    "desc": "Automatisation du renouvellement des certificats et validation de la compatibilité des services.",
    "place": "Orange · Montreuil",
    "period": "Depuis octobre 2024",
    "role": "Configuration et exploitation",
    "visual": "lock",
    "summary": [
      "Réduire les opérations manuelles de renouvellement des certificats.",
      "Préparer et tester l’automatisation avant son déploiement.",
      "Renouvellement automatisé et fonctionnement des services vérifié."
    ],
    "nodes": [
      [
        "Préparation",
        "Certificats et automatisation",
        "Préparation du mécanisme de renouvellement automatisé."
      ],
      [
        "Validation",
        "Tests de compatibilité",
        "Vérification du renouvellement et de la compatibilité des services."
      ],
      [
        "Exploitation",
        "Suivi des renouvellements",
        "Mise en place du fonctionnement automatisé et documentation."
      ]
    ],
    "contribution": [
      "Étudier le mécanisme de renouvellement Certbot / ACME.",
      "Préparer et tester l’automatisation.",
      "Vérifier la compatibilité des certificats avec les services concernés.",
      "Participer au déploiement et au suivi des renouvellements.",
      "Documenter le fonctionnement et les vérifications utiles à l’exploitation."
    ],
    "decisions": [
      [
        "Tester avant de déployer",
        "La validation du renouvellement et de la compatibilité permet de préparer une mise en service maîtrisée."
      ],
      [
        "Automatiser les opérations récurrentes",
        "Le renouvellement automatisé réduit les interventions manuelles et facilite le maintien des certificats à jour."
      ]
    ],
    "result": "Renouvellement des certificats automatisé, compatibilité vérifiée et fonctionnement documenté.",
    "flow": [
      "Préparation",
      "Tests de compatibilité",
      "Déploiement et suivi"
    ],
    "scope": "Le projet concerne l’automatisation de la gestion des certificats et la validation de leur fonctionnement avec les services.",
    "metrics": [],
    "sources": [],
    "outputs": [
      "Renouvellement automatisé des certificats.",
      "Tests de compatibilité et documentation d’exploitation."
    ],
    "status": "Déployé · renouvellement automatisé",
    "category": "professionnel"
  },
  {
    "id": "support-citrix",
    "n": "03",
    "title": "Diagnostiquer et résoudre un incident de virtualisation.",
    "short": "Diagnostic et rétablissement d’un service virtualisé.",
    "domain": "Support & exploitation",
    "context": "Entreprise · Orange",
    "kind": "entreprise",
    "tools": [
      "Citrix DaaS",
      "VMware vSphere",
      "Diagnostic",
      "Continuité de service"
    ],
    "desc": "Prise en charge d’un incident sur un environnement de postes virtualisés, du diagnostic à la vérification du rétablissement.",
    "place": "Orange · Montreuil",
    "period": "Mission professionnelle",
    "role": "Diagnostic et résolution d’incident",
    "visual": "lock",
    "summary": [
      "Rétablir le fonctionnement d’un service de postes virtualisés.",
      "Analyser le problème, mettre en œuvre une procédure de reprise et vérifier le fonctionnement.",
      "Service rétabli et retour à un fonctionnement normal vérifié."
    ],
    "flow": [
      "Diagnostic",
      "Rétablissement",
      "Vérification"
    ],
    "nodes": [
      [
        "Diagnostic",
        "Analyse du fonctionnement",
        "Recherche des éléments utiles à la compréhension du problème."
      ],
      [
        "Intervention",
        "Procédure de reprise",
        "Mise en œuvre des actions de rétablissement adaptées."
      ],
      [
        "Vérification",
        "Retour au fonctionnement normal",
        "Vérification du service et restitution des informations utiles au support."
      ]
    ],
    "contribution": [
      "Analyser les symptômes et rechercher les éléments utiles au diagnostic.",
      "Prendre en charge les opérations de rétablissement du service.",
      "Vérifier le retour à un fonctionnement normal.",
      "Restituer les actions menées et les points utiles au suivi."
    ],
    "decisions": [
      [
        "Structurer le diagnostic",
        "L’analyse des symptômes et des outils d’exploitation permet de cibler les actions de résolution."
      ],
      [
        "Vérifier le rétablissement",
        "Le retour à un fonctionnement normal est contrôlé après intervention."
      ]
    ],
    "result": "Incident pris en charge, service rétabli et fonctionnement vérifié.",
    "scope": "La réalisation porte sur le diagnostic et la résolution d’un incident dans un environnement de postes virtualisés.",
    "metrics": [],
    "sources": [],
    "outputs": [
      "Service rétabli après intervention.",
      "Retour à un fonctionnement normal vérifié."
    ],
    "status": "Résolu · service rétabli",
    "category": "professionnel"
  },
  {
    "id": "reseau",
    "n": "04",
    "title": "Intégrer le réseau et ses protections.",
    "short": "Relier les sites. Maîtriser les flux.",
    "domain": "Réseaux",
    "context": "Entreprise · Orange",
    "kind": "entreprise",
    "tools": [
      "Fortinet",
      "Stormshield",
      "IPsec",
      "NAT / PAT"
    ],
    "desc": "Configuration de pare-feux, intégration de solutions réseau et participation au déploiement de VPN.",
    "place": "Orange · Île-de-France",
    "period": "Février – septembre 2024",
    "role": "Intégration réseau et sécurité",
    "visual": "network",
    "summary": [
      "Déployer les équipements et les accès selon les besoins du client.",
      "Configuration du filtrage, du NAT/PAT et de VPN sur des équipements de sécurité.",
      "Une expérience d’intégration et de diagnostic sur des réseaux d’entreprise."
    ],
    "nodes": [
      [
        "Réseau client",
        "LAN · VLAN · Wi-Fi",
        "Intégration des équipements et des segments réseau nécessaires au déploiement."
      ],
      [
        "Sécurité des flux",
        "Stormshield · Fortinet",
        "Configuration du filtrage, du NAT/PAT et des fonctions VPN suivant le périmètre client."
      ],
      [
        "Interconnexion",
        "VPN IPsec / SSL",
        "VPN de site à site ou nomades. La participation aux VPN via concentrateurs constitue une autre expérience du parcours."
      ]
    ],
    "contribution": [
      "Configurer et intégrer des pare-feux Stormshield et Fortinet.",
      "Mettre en œuvre filtrage, NAT/PAT et VPN selon les besoins du client.",
      "Intervenir sur les contrôleurs Wi-Fi Ucopia et l’authentification associée.",
      "Participer à l’intégration et au diagnostic des solutions dans l’environnement client."
    ],
    "decisions": [
      [
        "Pourquoi distinguer réseau et politique de sécurité ?",
        "Une connectivité fonctionnelle ne suffit pas : il faut aussi que les flux autorisés correspondent au besoin et que les autres accès soient maîtrisés."
      ],
      [
        "Pourquoi documenter le diagnostic ?",
        "La lecture de l’état du tunnel, des routes et des journaux permet de situer la panne plutôt que de modifier les règles au hasard."
      ]
    ],
    "result": "Pratique professionnelle des équipements réseau et de sécurité, de leur configuration à leur intégration.",
    "flow": [
      "Réseau client",
      "Pare-feu / VPN",
      "Services distants"
    ],
    "scope": "Les configurations sont adaptées aux besoins du client. Filtrage, traduction d’adresses et routage doivent être cohérents avec les accès attendus.",
    "metrics": [],
    "sources": [],
    "outputs": [
      "Pare-feux et accès VPN intégrés selon les besoins client.",
      "Wi-Fi d’entreprise déployé avec authentification Ucopia."
    ],
    "status": "Déployé · environnements clients",
    "category": "professionnel"
  },
  {
    "id": "journaux",
    "n": "05",
    "title": "Rendre les journaux accessibles au diagnostic.",
    "short": "Centraliser pour mieux comprendre.",
    "domain": "Sécurité",
    "context": "Entreprise · Orange",
    "kind": "entreprise",
    "tools": [
      "rsyslog",
      "Linux",
      "Journalisation",
      "Supervision"
    ],
    "desc": "Architecture rsyslog centralisée pour la traçabilité système et l’exploitation des journaux.",
    "place": "Orange · Montreuil",
    "period": "Depuis octobre 2024",
    "role": "Centralisation et supervision",
    "visual": "stack",
    "summary": [
      "Réunir les événements système utiles à la traçabilité et à l’exploitation.",
      "Mise en place d’une architecture rsyslog centralisée.",
      "Une collecte destinée à faciliter l’exploitation et le diagnostic système."
    ],
    "nodes": [
      [
        "Sources",
        "Systèmes Linux",
        "Les services et les systèmes produisent les événements nécessaires à l’exploitation."
      ],
      [
        "Collecte",
        "rsyslog centralisé",
        "Acheminement des journaux vers une collecte commune. Les transports et adresses internes ne sont pas publiés."
      ],
      [
        "Exploitation",
        "Traçabilité · Diagnostic",
        "Consultation des événements pour comprendre le comportement d’un service et situer un incident."
      ]
    ],
    "contribution": [
      "Mettre en place une architecture rsyslog centralisée.",
      "Organiser la collecte pour la traçabilité système.",
      "Prendre en compte les exigences de journalisation et de protection des données du contexte."
    ],
    "decisions": [
      [
        "Pourquoi centraliser les journaux ?",
        "Pour réunir les événements utiles au diagnostic sans devoir consulter chaque machine séparément."
      ],
      [
        "Comment relier les journaux au diagnostic ?",
        "En réunissant les événements utiles aux services, on dispose d’éléments pour comprendre leur comportement et situer un incident."
      ]
    ],
    "result": "Une architecture de collecte centralisée destinée à la traçabilité et à l’exploitation des systèmes.",
    "flow": [
      "Systèmes sources",
      "Collecte rsyslog",
      "Diagnostic"
    ],
    "scope": "La journalisation relève ici de l’exploitation système. Les exigences de conservation, de protection des données et d’accès dépendent du contexte de l’environnement.",
    "metrics": [],
    "sources": [],
    "outputs": [
      "Architecture rsyslog centralisée mise en place.",
      "Journaux regroupés pour la traçabilité et le diagnostic."
    ],
    "status": "Déployé · collecte centralisée en production",
    "category": "professionnel"
  },
  {
    "id": "assistant-ia",
    "n": "06",
    "title": "Déployer un assistant IA dans une application métier.",
    "short": "Un assistant IA intégré, ancré sur la documentation interne.",
    "domain": "IA & cybersécurité",
    "context": "Entreprise · Orange",
    "kind": "entreprise",
    "tools": [
      "LLM",
      "RAG",
      "Embeddings",
      "Webchat"
    ],
    "desc": "Un assistant IA intégré à l’application métier pour aider les utilisateurs au quotidien. Les réponses sont enrichies par un système RAG fondé sur la documentation interne. Une deuxième version, un agent capable d’actions, est en préparation.",
    "place": "Orange · Montreuil",
    "period": "Depuis octobre 2026",
    "role": "Conception, intégration et suivi",
    "visual": "stack",
    "summary": [
      "Aider les utilisateurs dans leur utilisation quotidienne de l’application métier, directement depuis l’interface.",
      "Enrichir les réponses du bot par un système RAG : recherche sémantique dans la documentation interne, contexte injecté dans le prompt.",
      "Un assistant déployé, suivi par des statistiques d’usage sur son premier mois."
    ],
    "flow": [
      "Question utilisateur",
      "Recherche sémantique (RAG)",
      "Réponse ancrée"
    ],
    "nodes": [
      [
        "Interface",
        "Webchat · Simulateur",
        "L’assistant est intégré à l’application métier et peut être testé dans un environnement de simulation."
      ],
      [
        "Compréhension",
        "Détection d’intentions",
        "La question de l’utilisateur est classée pour orienter le traitement. Le suivi indique une compréhension complète des intentions sur le premier mois."
      ],
      [
        "Connaissance",
        "RAG · embeddings · documentation interne",
        "Les documents internes sont découpés, vectorisés et retrouvés par similarité sémantique. Les passages pertinents alimentent le prompt du modèle."
      ],
      [
        "Génération",
        "LLM",
        "Le modèle rédige une réponse ancrée sur les sources retrouvées, dans le ton de l’application."
      ]
    ],
    "contribution": [
      "Participer au déploiement de la première version de l’assistant, déjà intégrée à l’application métier.",
      "Concevoir et mettre en œuvre le système RAG : découpage et vectorisation de la documentation interne, recherche sémantique, injection du contexte dans le prompt.",
      "Suivre l’usage de l’assistant à partir des statistiques disponibles (utilisateurs, messages, compréhension).",
      "Préparer la deuxième version : un agent capable de réaliser des tâches, au-delà de la simple réponse."
    ],
    "decisions": [
      [
        "Pourquoi un RAG plutôt qu’un modèle ajusté ?",
        "La documentation interne évolue régulièrement. Ancrer les réponses sur des sources retrouvées à la volée évite d’entraîner un modèle sur des connaissances figées et permet de relier chaque réponse à sa source."
      ],
      [
        "Pourquoi mesurer la compréhension avant la satisfaction ?",
        "Sur le premier mois, l’indicateur prioritaire est la compréhension des intentions : une réponse mal comprise fausse tous les autres retours."
      ],
      [
        "Pourquoi préparer un agent pour la version 2 ?",
        "La v1 répond. La v2 devra agir : interroger des données, déclencher des actions dans l’application. Cette montée en compétence est anticipée dès la conception du RAG."
      ]
    ],
    "result": "Un assistant IA opérationnel dans l’application métier, dont les réponses sont ancrées sur la documentation interne grâce au RAG. Le premier mois de mise en œuvre officielle affiche 66 utilisateurs, 80 messages et 100 % de compréhension des intentions.",
    "scope": "Les statistiques couvrent la période du 1er au 27 octobre 2026, premier mois de la mise en œuvre officielle, sur les canaux webchat et simulateur. Le nom de l’application, sa topologie et ses configurations internes ne sont pas publiés. La version 2 (agent) est en préparation et n’est pas encore mesurée.",
    "metrics": [
      {
        "value": "66",
        "label": "Utilisateurs sur le premier mois",
        "detail": "Utilisateurs distincts de l’assistant entre le 1er et le 27 octobre 2026, premier mois de la mise en œuvre officielle.",
        "internal": true
      },
      {
        "value": "80",
        "label": "Messages échangés",
        "detail": "Messages envoyés à l’assistant sur la même période, canaux webchat et simulateur confondus.",
        "internal": true
      },
      {
        "value": "100 %",
        "label": "Intentions comprises",
        "detail": "Toutes les intentions détectées (1 intention suivie) ont été comprises par l’assistant sur la période mesurée.",
        "internal": true
      }
    ],
    "sources": [],
    "outputs": [
      "Assistant IA déployé et intégré à l’application métier (v1).",
      "Système RAG en production : documentation interne vectorisée, recherche sémantique, réponses ancrées.",
      "Tableau de bord d’usage suivi dès la mise en œuvre officielle.",
      "Version 2 en préparation : agent capable de réaliser des tâches."
    ],
    "status": "Déployé · suivi d’usage actif · v2 agent en préparation",
    "category": "professionnel"
  },
  {
    "id": "network-hardening",
    "n": "07",
    "title": "Durcir un réseau entre Azure et AWS.",
    "short": "Durcir un réseau entre Azure et AWS.",
    "domain": "Sécurité réseau",
    "context": "Projet académique · ESILV",
    "kind": "github",
    "tools": [
      "nftables",
      "Suricata",
      "IPsec",
      "Nginx",
      "Azure / AWS"
    ],
    "desc": "Segmentation, filtrage, détection, TLS et tunnel inter-sites : six livrables accompagnés de configurations, de tests et de preuves.",
    "place": "Dépôt public GitHub",
    "period": "Mars 2026",
    "role": "Durcissement et documentation du laboratoire",
    "repo": "https://github.com/YFA-20/Network-Hardenning-MESIIN482225-",
    "summary": [
      "Réduire l’exposition d’un laboratoire à deux sites et vérifier chaque contrôle de sécurité.",
      "Filtrage default-deny, réglage IDS, durcissement TLS/SSH et tunnel IKEv2 IPsec.",
      "Journaux avant/après, scans TLS, preuves ESP et tests de connectivité disponibles dans le dépôt."
    ],
    "flow": [
      "Azure · LAN / DMZ",
      "Passerelles · IPsec IKEv2",
      "AWS · site distant"
    ],
    "nodes": [
      [
        "Segmentation",
        "nftables · default-deny",
        "Règles explicites pour les flux attendus, blocage des communications non autorisées et journalisation des refus."
      ],
      [
        "Détection",
        "Suricata · ET Open · règle locale",
        "Détection de scans et règle de détection de GET /admin. Réglage d’un événement diagnostic lié à l’architecture UTM."
      ],
      [
        "Accès & chiffrement",
        "Nginx · TLS · SSH · strongSwan",
        "TLS 1.2/1.3, contrôle de débit /api/, SSH par clé et interconnexion IPsec Azure–AWS."
      ]
    ],
    "contribution": [
      "Établir une matrice de flux et une baseline de l’environnement.",
      "Configurer les contrôles réseau, IDS, TLS et accès distant.",
      "Comparer les journaux avant/après réglage et documenter les modes de panne.",
      "Livrer un pack final : configurations, preuves, tests de régression et registre des risques."
    ],
    "decisions": [
      [
        "Adapter l’IDS aux contraintes du cloud",
        "L’architecture UTM place Suricata sur la passerelle qui voit le trafic. Les contraintes Azure de visibilité et de routage sont consignées dans le rapport."
      ],
      [
        "Réduire le bruit sans perdre le signal",
        "La suppression du SID diagnostic 2210059 fait passer ses occurrences de 49 à 0 ; les 29 alertes de scan SID 2024364 sont préservées dans la comparaison enregistrée."
      ],
      [
        "Vérifier plutôt que déclarer",
        "Chaque contrôle du rapport est relié à une configuration, un test et un artefact : scan, compteur ou journal."
      ]
    ],
    "result": "Le laboratoire est documenté de la baseline jusqu’au pack final. Les artefacts permettent de suivre l’effet des contrôles sur le filtrage, les protocoles TLS, la détection et la connectivité chiffrée.",
    "scope": "Résultats issus des traces publiées en mars 2026. Le rapport identifie aussi les suites à donner : renouvellement des certificats, agrégation des journaux et remplacement de la PSK IPsec par des certificats.",
    "metrics": [
      {
        "value": "49 → 0",
        "label": "Événements diagnostics Suricata",
        "detail": "SID 2210059 supprimé ; 29/29 alertes de scan conservées. Comparaison enregistrée dans le laboratoire.",
        "url": "https://github.com/YFA-20/Network-Hardenning-MESIIN482225-/blob/main/TD3_OCC2_YFARRAGE_2026-03-08/evidence/before_after_counts.txt"
      },
      {
        "value": "TLS 1.2 / 1.3",
        "label": "Protocoles acceptés après durcissement",
        "detail": "Le scan après modification montre TLS 1.0 et 1.1 désactivés.",
        "url": "https://github.com/YFA-20/Network-Hardenning-MESIIN482225-/blob/main/TD4_OCC2_YFARRAGE_2026-03-11/evidence/after/sslscan_after.txt"
      },
      {
        "value": "10 / 10",
        "label": "Réponses au test ICMP inter-sites",
        "detail": "10 paquets reçus sur 10, sans perte dans l’échantillon capturé ; pas une mesure de disponibilité continue.",
        "url": "https://github.com/YFA-20/Network-Hardenning-MESIIN482225-/blob/main/TD5_OCC2_YFARRAGE_2026-03-14/evidence/tunnel_ping.txt"
      }
    ],
    "sources": [
      {
        "label": "Rapport final et correspondance contrôles / preuves",
        "url": "https://github.com/YFA-20/Network-Hardenning-MESIIN482225-/blob/main/TD6_OCC2_YFARRAGE_2026-03-15/report/Final_Report.md"
      },
      {
        "label": "Synthèse et risques résiduels",
        "url": "https://github.com/YFA-20/Network-Hardenning-MESIIN482225-/blob/main/TD6_OCC2_YFARRAGE_2026-03-15/executive/Executive_Summary_1p.md"
      }
    ],
    "status": "Validé en laboratoire académique",
    "category": "academique"
  },
  {
    "id": "space-ml",
    "n": "08",
    "title": "Détecter des anomalies dans un système spatial.",
    "short": "Détecter des anomalies dans un système spatial.",
    "domain": "IA & cybersécurité",
    "context": "Projet académique · travail collectif",
    "kind": "github",
    "tools": [
      "Python",
      "scikit-learn",
      "XGBoost",
      "Late fusion"
    ],
    "desc": "Trois couches de données : télémétrie, Modbus et réseau, et un moteur de fusion pour corréler leurs prédictions.",
    "place": "Dépôt public GitHub",
    "period": "Projet documenté",
    "role": "Projet collectif de détection et de fusion",
    "repo": "https://github.com/YFA-20/ML-based-Detection-of-Cyberattacks-Targeting-Space-Systems",
    "summary": [
      "Étudier la détection d’anomalies et d’attaques sur les segments spatial, industriel et réseau.",
      "Entraînement de modèles spécialisés puis intégration de leurs prédictions dans Mission Control.",
      "Modèles exportés et évaluations conservées dans les notebooks ; une simulation illustre la logique de fusion."
    ],
    "flow": [
      "OPSSAT / TON_IoT / CIC-IDS",
      "Modèles spécialisés",
      "Fusion des prédictions"
    ],
    "nodes": [
      [
        "Télémétrie satellite",
        "OPSSAT-AD · Voting",
        "Comparaison de modèles et combinaison par vote pour la classification nominal / anomalie."
      ],
      [
        "Segment industriel",
        "TON_IoT Modbus · XGBoost",
        "Classification à partir de quatre caractéristiques Modbus et export du modèle au format JSON."
      ],
      [
        "Segment réseau",
        "CIC-IDS 2017 · Stacking",
        "Prétraitement de 78 caractéristiques de flux, classification de cinq classes et export du scaler."
      ],
      [
        "Mission Control",
        "Late fusion · simulation",
        "Corrélation des prédictions des trois modèles dans un moteur à règles. La simulation utilise des vecteurs synthétiques."
      ]
    ],
    "contribution": [
      "Présenter les trois jeux de données et les étapes de préparation.",
      "Comparer les approches individuelles et les ensembles de modèles.",
      "Exporter les modèles et intégrer leurs prédictions au moteur de fusion.",
      "Documenter les scores et analyser les comportements de la simulation."
    ],
    "decisions": [
      [
        "Spécialiser les modèles par couche",
        "La télémétrie, les registres industriels et les flux réseau ont des schémas distincts. Chaque modèle utilise les caractéristiques de son jeu de données."
      ],
      [
        "Distinguer évaluation et simulation",
        "Les scores proviennent des jeux de test des notebooks. Les sorties Mission Control sur données synthétiques vérifient l’intégration ; elles ne mesurent pas une performance en exploitation."
      ],
      [
        "Lire les limites du scénario critique",
        "Le drapeau réseau est forcé pour le scénario d’attaque au sol. Le niveau 5 illustre donc la règle de corrélation, pas une détection autonome démontrée. Des alertes apparaissent aussi dans le scénario nominal."
      ]
    ],
    "result": "Le dépôt réunit les données, trois notebooks d’entraînement, les modèles sérialisés et un notebook d’intégration. Il matérialise une chaîne complète, de la préparation des données à la corrélation des prédictions.",
    "scope": "Les scores sont ceux conservés dans les notebooks, sans réexécution ici. Leur généralisation dépend du protocole de séparation et de données externes. Le moteur de fusion reste un prototype sur données synthétiques.",
    "metrics": [
      {
        "value": "94,90 %",
        "label": "Accuracy · télémétrie OPSSAT-AD",
        "detail": "Voting hybride : F1 = 0,8670. Résultats d’évaluation enregistrés dans le notebook satellite.",
        "url": "https://github.com/YFA-20/ML-based-Detection-of-Cyberattacks-Targeting-Space-Systems/blob/main/Mission_Control/notebooks_training/01_Train_Satellite_Final.ipynb"
      },
      {
        "value": "0,9232",
        "label": "F1-score · modèle industriel",
        "detail": "XGBoost : accuracy 92,08 %, jeu de test annoncé de 6 222 échantillons.",
        "url": "https://github.com/YFA-20/ML-based-Detection-of-Cyberattacks-Targeting-Space-Systems/blob/main/Mission_Control/notebooks_training/02_Train_Industrial_Final.ipynb"
      },
      {
        "value": "99,96 %",
        "label": "Accuracy · classification réseau",
        "detail": "Stacking sur le jeu de test du notebook : 9 987 lignes, cinq classes. Résultat expérimental, sans validation sur un autre environnement.",
        "url": "https://github.com/YFA-20/ML-based-Detection-of-Cyberattacks-Targeting-Space-Systems/blob/main/Mission_Control/notebooks_training/03_Train_Network_Final.ipynb"
      }
    ],
    "sources": [
      {
        "label": "Présentation et structure du projet",
        "url": "https://github.com/YFA-20/ML-based-Detection-of-Cyberattacks-Targeting-Space-Systems/blob/main/README.md"
      },
      {
        "label": "Simulation Mission Control et sorties enregistrées",
        "url": "https://github.com/YFA-20/ML-based-Detection-of-Cyberattacks-Targeting-Space-Systems/blob/main/Mission_Control/mission_control/Mission_Control_Fusion.ipynb"
      }
    ],
    "status": "Évalué · scores enregistrés dans les notebooks",
    "category": "academique"
  },
  {
    "id": "pokemon-cpp",
    "n": "09",
    "title": "Construire un simulateur de combats en C++.",
    "short": "Construire un simulateur de combats en C++.",
    "domain": "Développement",
    "context": "Projet académique · développement C++",
    "kind": "github",
    "tools": [
      "C++17",
      "POO",
      "CSV",
      "Catch"
    ],
    "desc": "Moteur de combat tour par tour, chargement des équipes depuis CSV et modélisation orientée objet.",
    "place": "Dépôt public GitHub",
    "period": "Projet documenté",
    "role": "Conception et développement logiciel",
    "repo": "https://github.com/YFA-20/projet-pokemon-c-",
    "summary": [
      "Séparer les règles de combat, les entités du jeu et leurs données.",
      "Modélisation par classes, moteur de combat, chargeur CSV et interface console.",
      "Un simulateur décrit par le code, trois diagrammes UML et deux cas de test unitaires."
    ],
    "flow": [
      "Données CSV",
      "Classes & chargeur",
      "Moteur de combat / menu"
    ],
    "nodes": [
      [
        "Modèle métier",
        "Pokemon · Attack · Type",
        "Encapsulation des points de vie, types et attaques, avec gestion des dégâts et du KO."
      ],
      [
        "Simulation",
        "Dresseur · Joueur · Combat",
        "Hiérarchie de dresseurs et exécution des tours de combat jusqu’à la victoire."
      ],
      [
        "Données & tests",
        "DataLoader · CSV · Catch",
        "Chargement des entités depuis quatre fichiers CSV et tests des points de vie / dégâts."
      ]
    ],
    "contribution": [
      "Modéliser les Pokémon, attaques et dresseurs avec une approche orientée objet.",
      "Séparer le chargement des données du moteur de combat et du menu.",
      "Configurer la compilation C++17 avec un Makefile.",
      "Fournir les diagrammes UML et des cas de test Catch."
    ],
    "decisions": [
      [
        "Externaliser les données du jeu",
        "Les Pokémon, le joueur, les leaders et les maîtres sont décrits dans des CSV lus par DataLoader."
      ],
      [
        "Tester le comportement métier",
        "Deux cas de test couvrent les PV initiaux, les dégâts et le passage au KO avec six assertions. La présence des tests est vérifiée dans le code ; leur réussite n’est pas déduite sans exécution."
      ]
    ],
    "result": "Le résultat est un simulateur console avec combats tour par tour, gestion d’équipe et chargement des données. L’architecture rend lisibles les responsabilités du modèle métier, du contrôle et des entrées.",
    "scope": "Projet de développement distinct des missions de cybersécurité. L’examen porte sur les sources et la documentation ; le binaire du dépôt n’a pas été exécuté.",
    "metrics": [
      {
        "value": "2",
        "label": "Cas de test unitaires",
        "detail": "Six assertions sur les points de vie, les dégâts et le KO. Tests présents dans le dépôt.",
        "url": "https://github.com/YFA-20/projet-pokemon-c-/blob/main/tests/Pokemon.test.cpp"
      },
      {
        "value": "3",
        "label": "Diagrammes UML",
        "detail": "Métier, contrôle du simulateur et chargement des données.",
        "url": "https://github.com/YFA-20/projet-pokemon-c-/tree/main/diagrams"
      },
      {
        "value": "4",
        "label": "Fichiers CSV de configuration",
        "detail": "Pokémon, joueur, leaders et maîtres chargés au démarrage.",
        "url": "https://github.com/YFA-20/projet-pokemon-c-/blob/main/src/main.cpp"
      }
    ],
    "sources": [
      {
        "label": "README et fonctionnalités",
        "url": "https://github.com/YFA-20/projet-pokemon-c-/blob/main/README.md"
      },
      {
        "label": "Moteur de combat",
        "url": "https://github.com/YFA-20/projet-pokemon-c-/blob/main/src/Combat.cpp"
      },
      {
        "label": "Chargement des données",
        "url": "https://github.com/YFA-20/projet-pokemon-c-/blob/main/src/DataLoader.cpp"
      }
    ],
    "status": "Développé · tests unitaires présents",
    "category": "academique"
  },
  {
    "id": "sonarqube",
    "n": "10",
    "title": "Audit de qualité et de sécurité du code C avec SonarQube",
    "short": "SonarQube · audit du code C de minmea",
    "domain": "Qualité et sécurité du code",
    "context": "Projet de formation · analyse de code",
    "kind": "github",
    "tools": [
      "SonarQube",
      "C",
      "minmea",
      "Analyse statique"
    ],
    "desc": "Audit de la robustesse, de la sécurité et de la maintenabilité du parseur GPS minmea (NMEA 0183) avec SonarQube.",
    "place": "Projet de formation",
    "period": "Projet documenté",
    "role": "Audit statique de la bibliothèque, interprétation des résultats et rédaction du rapport",
    "repo": "https://github.com/YFA-20/minmea",
    "summary": [
      "Auditer la qualité et la sécurité d’une base de code C réelle pour évaluer sa robustesse et sa maintenabilité, au-delà de son seul fonctionnement.",
      "Étudier la bibliothèque légère de parsing GPS minmea (NMEA 0183) avec SonarQube, documenter la méthodologie et analyser les résultats.",
      "Relier les constats aux notions de disposition mémoire, de vérification et validation (V&V), et de codage sécurisé."
    ],
    "flow": [
      "Code C de minmea",
      "Installation et analyse SonarQube",
      "Fiabilité · sécurité · maintenabilité",
      "Rapport et interprétation"
    ],
    "nodes": [
      [
        "Fiabilité",
        "Padding · memcmp · fonctions variadiques · unions",
        "Étude des problèmes de padding et de comparaison mémoire, ainsi que des fonctions variadiques et des unions."
      ],
      [
        "Sécurité",
        "Chaîne d’approvisionnement · analyse dynamique",
        "Examen du risque lié à la chaîne d’approvisionnement et volet complémentaire consacré à l’analyse dynamique et au fuzzing."
      ],
      [
        "Maintenabilité",
        "Syntaxe K&R · imbrication · duplication",
        "Analyse de la syntaxe ancienne, de la complexité structurelle, de l’imbrication et de la duplication du code."
      ]
    ],
    "contribution": [
      "Présenter SonarQube et ses axes d’analyse.",
      "Choisir minmea comme bibliothèque C cible et documenter l’installation et la méthodologie.",
      "Étudier les problèmes de fiabilité associés au padding, à memcmp, aux fonctions variadiques et aux unions.",
      "Examiner le risque de chaîne d’approvisionnement et consacrer un volet complémentaire à l’analyse dynamique et au fuzzing.",
      "Analyser la syntaxe K&R, la complexité structurelle, l’imbrication et la duplication.",
      "Rédiger une synthèse des résultats et une conclusion.",
      "Interpréter les résultats à la lumière de la disposition mémoire, de la vérification et validation (V&V) et du codage sécurisé."
    ],
    "decisions": [
      [
        "Une bibliothèque C comme cible",
        "minmea permet d’étudier la qualité du code d’un composant destiné à l’embarqué, avec des sujets de comparaison mémoire et de syntaxe C."
      ],
      [
        "Séparer les axes d’analyse",
        "La fiabilité, la sécurité et la maintenabilité sont traitées séparément dans le rapport pour distinguer les catégories de constats."
      ],
      [
        "Compléter l’analyse statique",
        "Un volet complémentaire est consacré à l’analyse dynamique et au fuzzing."
      ],
      [
        "Relier les résultats aux concepts étudiés",
        "Les résultats sont mis en perspective avec la disposition mémoire, la vérification et validation (V&V), et le codage sécurisé."
      ]
    ],
    "result": "Le rapport présente 18 occurrences liées au padding et à memcmp, 2 aux fonctions variadiques et aux unions, 36 à la syntaxe K&R et 9 à la complexité ou à l’imbrication. Il indique 3,0 % de duplication du code et comporte des sections sur la chaîne d’approvisionnement et le fuzzing.",
    "scope": "Audit et interprétation des résultats sur minmea, bibliothèque open source de parsing GPS NMEA 0183. L’objectif est l’évaluation de la robustesse, de la sécurité et de la maintenabilité ; la production d’un patch ne fait pas partie du projet. Les chiffres correspondent aux occurrences classées dans le rapport et au taux de duplication.",
    "metrics": [
      {
        "value": "18",
        "label": "Occurrences · padding et memcmp",
        "detail": "Rubrique de fiabilité consacrée au padding et à la comparaison mémoire.",
        "provenance": "Rapport de projet · SonarQube"
      },
      {
        "value": "2",
        "label": "Occurrences · fonctions variadiques et unions",
        "detail": "Rubrique de fiabilité consacrée à ces constructions C.",
        "provenance": "Rapport de projet · SonarQube"
      },
      {
        "value": "36",
        "label": "Occurrences · syntaxe K&R",
        "detail": "Rubrique de maintenabilité consacrée à la syntaxe ancienne.",
        "provenance": "Rapport de projet · SonarQube"
      },
      {
        "value": "9",
        "label": "Occurrences · complexité et imbrication",
        "detail": "Rubrique de maintenabilité consacrée à la complexité structurelle et à l’imbrication excessive.",
        "provenance": "Rapport de projet · SonarQube"
      },
      {
        "value": "3,0 %",
        "label": "Duplication du code",
        "detail": "Taux indiqué dans la rubrique de maintenabilité du rapport.",
        "provenance": "Rapport de projet · SonarQube"
      }
    ],
    "sources": [
      {
        "label": "Bibliothèque minmea · projet d’origine",
        "url": "https://github.com/kosma/minmea"
      }
    ],
    "status": "Analyse documentée · rapport de projet",
    "outputs": [
      "Analyse de fiabilité, de sécurité et de maintenabilité documentée dans un rapport.",
      "Volet complémentaire consacré à l’analyse dynamique et au fuzzing."
    ],
    "category": "academique"
  },
  {
    "id": "wazuh",
    "n": "11",
    "title": "Déployer Wazuh dans un laboratoire personnel.",
    "short": "Explorer la sécurité par la pratique.",
    "domain": "Laboratoire",
    "context": "Projet personnel",
    "kind": "personnel",
    "tools": [
      "Wazuh",
      "Sécurité",
      "Laboratoire"
    ],
    "desc": "Installation et déploiement de Wazuh pour approfondir les mécanismes de supervision de sécurité.",
    "place": "Laboratoire personnel",
    "period": "Projet personnel",
    "role": "Installation et déploiement",
    "visual": "network",
    "summary": [
      "Approfondir la supervision de sécurité avec une plateforme déployée personnellement.",
      "Installation et déploiement de Wazuh dans un environnement de laboratoire.",
      "Une base opérationnelle pour poursuivre l’apprentissage de l’outil."
    ],
    "nodes": [
      [
        "Environnement",
        "Laboratoire personnel",
        "Un cadre personnel pour installer et explorer un outil de sécurité."
      ],
      [
        "Plateforme",
        "Wazuh",
        "Installation et déploiement de la plateforme."
      ],
      [
        "Suite du projet",
        "Scénarios de sécurité",
        "Direction d’approfondissement : documenter la collecte, les alertes et leur analyse dans des scénarios reproductibles."
      ]
    ],
    "contribution": [
      "Installer et déployer Wazuh.",
      "Construire une base de laboratoire pour approfondir la supervision de sécurité."
    ],
    "decisions": [
      [
        "Pourquoi un laboratoire personnel ?",
        "Pour expérimenter en dehors des contraintes des environnements professionnels et approfondir l’outil à mon rythme."
      ]
    ],
    "result": "Ce déploiement personnel complète mon expérience d’infrastructure par une prise en main d’une plateforme de sécurité.",
    "flow": [
      "Laboratoire",
      "Plateforme Wazuh",
      "Approfondissement"
    ],
    "scope": "Le périmètre présenté est l’installation et le déploiement. Les futurs scénarios d’analyse d’alertes pourront faire l’objet de fiches complémentaires.",
    "metrics": [],
    "sources": [],
    "outputs": [
      "Wazuh installé et déployé dans un laboratoire personnel."
    ],
    "status": "Installé · laboratoire personnel",
    "category": "personnel"
  }
];
