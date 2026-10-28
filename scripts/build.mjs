import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import profile from '../src/profile.mjs';
import projects from '../src/projects.mjs';

const cssSource = await readFile('assets/light.css', 'utf8');
const cssHash = createHash('sha256').update(cssSource).digest('hex').slice(0, 8);

const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tags = items => `<div class="tags">${items.map(t => `<span class="tag">${escape(t)}</span>`).join('')}</div>`;
const link = (href, text, cls = 'text-link') => `<a class="${cls}" href="${escape(href)}">${text}</a>`;
const caseLink = (href, text = 'Voir le projet') => `<a class="text-link" href="${escape(href)}">${text} <span aria-hidden="true">→</span></a>`;
const routes = [['profil.html', 'Profil'], ['projets.html', 'Projets'], ['experience.html', 'Expérience'], ['competences.html', 'Compétences'], ['contact.html', 'Contact']];

function layout(title, active, content, depth = 0) {
  const root = depth ? '../' : '';
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#FAF9F6"><meta name="description" content="${escape(profile.name)}, ${escape(profile.role)}. Expérience Orange en infrastructure, réseaux et cybersécurité."><title>${escape(title)}, ${escape(profile.name)}</title><link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${root}assets/light.css?v=${cssHash}"><script>document.documentElement.classList.add('js')</script><script src="${root}assets/main.js" defer></script></head>
<body><a href="#contenu" class="skip">Aller au contenu</a><header class="site-header"><div class="shell"><a class="brand" href="${root}profil.html" aria-label="${escape(profile.name)}, accueil"><span class="monogram">${escape(profile.initials)}</span><span><strong>Youssouf FARRAGE</strong><small>Systèmes, réseaux & sécurité</small></span></a><nav id="navigation" aria-label="Navigation principale">${routes.map(([file, label]) => `<a href="${root}${file}" ${active === file ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div></header><main id="contenu">${content}</main><footer><div class="shell footer-inner"><span>© ${new Date().getFullYear()} Youssouf FARRAGE</span><span>Infrastructure · Réseaux · Cybersécurité</span><div class="footer-links">${link(profile.github, 'GitHub')}${link(root + 'contact.html', 'Contact')}</div></div></footer></body></html>`;
}

// Compact, accessible project rows: one link per row, with no nested anchors.
const projectPreviews = {
  'network-hardening': ['Durcissement réseau Azure / AWS', 'Segmentation, détection Suricata et tunnel IPsec en laboratoire.'],
  'space-ml': ['Détection d’anomalies spatiales', 'Modèles de télémétrie, Modbus et réseau ; fusion des prédictions.'],
  'cloud': ['Infrastructure & déploiement automatisé', 'Environnement hors production et opérations de déploiement reproductibles.'],
  'acces': ['Automatisation des certificats', 'Renouvellement automatisé et validation de la compatibilité des services.'],
  'support-citrix': ['Résolution d’incident de virtualisation', 'Diagnostic, rétablissement du service et vérification du fonctionnement.'],
  'reseau': ['Intégration réseaux & sécurité', 'Pare-feux, accès VPN et Wi-Fi d’entreprise.'],
  'journaux': ['Centralisation des journaux', 'Collecte rsyslog pour la traçabilité et le diagnostic système.'],
  'wazuh': ['Laboratoire Wazuh', 'Installation d’une plateforme de supervision de sécurité.'],
  'pokemon-cpp': ['Simulateur de combats en C++', 'Modélisation objet, moteur tour par tour et chargement CSV.'],
  'assistant-ia': ['Assistant IA & RAG', 'Assistant intégré à une application métier, ancré sur la documentation interne.'],
  'sonarqube': ['Audit de code avec SonarQube', 'Évaluation de la robustesse, de la sécurité et de la maintenabilité du parseur GPS minmea.']
};
function projectRow(c, root = '') {
  const [title, description] = projectPreviews[c.id];
  return `<a class="project-row" href="${root}projets.html#${c.id}" data-context="${c.kind}">
<span class="project-number">${c.n}</span>
<div><h3>${escape(title)}</h3><p class="desc">${escape(description)}</p></div>
<span class="row-action">Voir le projet</span></a>`;
}

// ---------- Accueil ----------
const home = `<div class="shell">
<section class="hero">
<span class="eyebrow">Infrastructure & sécurité</span>
<h1>Youssouf <span class="accent">FARRAGE</span></h1>
<p class="hero-role">Infrastructure • Réseaux • Cybersécurité<span class="position-line">Élève ingénieur · Objets connectés & cybersécurité</span></p>
<p class="lead">${escape(profile.intro)}</p>
<div class="stats" aria-label="Chiffres clés">
<div><strong>49 → 0</strong><span>Événements diagnostics Suricata après réglage</span><small>Lab · signal de scan préservé</small></div>
<div><strong>94,90 %</strong><span>Accuracy du modèle de télémétrie satellite</span><small>Évaluation OPSSAT-AD</small></div>
<div><strong>CI/CD</strong><span>Automatisation des déploiements</span><small>Entreprise · environnement hors production</small></div>
<div><strong>66</strong><span>Utilisateurs de l’assistant IA sur son premier mois</span><small>Entreprise</small></div>
</div>
<div class="actions">${link('projets.html', 'Explorer les projets', 'button')}${link('experience.html', 'Expériences', 'button secondary')}${profile.cv ? link(profile.cv, 'Télécharger le CV', 'button secondary') : ''}${link(profile.github, 'GitHub', 'button secondary')}${link('contact.html', 'Contact', 'button secondary')}</div>
<p class="hero-meta">Disponible pour un premier poste à partir de juin 2027 · Diplôme d’ingénieur prévu en septembre 2027</p>
</section>
<section class="section">
<div class="section-head"><span class="eyebrow">Sélection de projets</span><h2>Projets déployés.<br>Expérimentations documentées.</h2><p>Infrastructure, accès sécurisés, IA et détection : une sélection de mes réalisations en entreprise et en formation.</p></div>
<div class="project-list">${['assistant-ia', 'cloud', 'acces', 'network-hardening'].map(id => projectRow(projects.find(p => p.id === id))).join('')}</div>
<div class="section-cta">${link('projets.html', 'Tous les projets', 'button ghost')}</div>
</section>
<section class="profile-note"><h2>Déployer, exploiter,<br>sécuriser.</h2><p>Comprendre les systèmes, rendre les déploiements reproductibles et sécuriser les accès : mes projets relient infrastructure, réseaux et exploitation.</p><p class="muted">Alternance chez Orange depuis 2022 · Formation en Objets Connectés et Cybersécurité.</p></section>
</div>`;

// ---------- Réalisations : lecture complète et accès direct par projet ----------
const projectNavLabels = {'network-hardening':'Durcissement', 'space-ml':'IA spatiale', 'cloud':'Infrastructure', 'acces':'Certificats', 'support-citrix':'Citrix', 'reseau':'Réseaux', 'journaux':'Journaux', 'wazuh':'Wazuh', 'pokemon-cpp':'C++', 'assistant-ia':'Assistant IA', 'sonarqube':'SonarQube'};
const projectGroups = [
  {id:'professionnels', category:'professionnel', title:'Projets professionnels', description:'Les réalisations menées chez Orange, autour de l’infrastructure, des accès, des réseaux et des services.'},
  {id:'academiques', category:'academique', title:'Projets académiques', description:'Les travaux réalisés dans le cadre de ma formation : sécurité réseau, analyse de code, machine learning et développement logiciel.'},
  {id:'personnels', category:'personnel', title:'Projets personnels', description:'Mes expérimentations en dehors des missions professionnelles et des travaux de formation.'}
].map(group => ({...group, projects:projects.filter(c=>c.category===group.category)}));
const listing = `<div class="shell">
<header class="page-header"><span class="eyebrow">Réalisations</span><h1>Des systèmes en place.<br>Des choix expliqués.</h1><p>Mes réalisations sont regroupées selon leur contexte : missions professionnelles, travaux académiques et projets personnels.</p></header>
<nav id="project-index" class="project-index" aria-label="Sommaire des projets">${projectGroups.map(group=>`<div class="project-index-group"><a class="group-index-title" href="#${group.id}">${group.title}<span>${group.projects.length} projet${group.projects.length>1?'s':''}</span></a><div class="group-index-links">${group.projects.map(c=>`<a href="#${c.id}"><span>${c.n}</span> ${escape(projectNavLabels[c.id])}</a>`).join('')}</div></div>`).join('')}</nav>
<div class="project-reports">${projectGroups.map(group=>`<section class="project-group" id="${group.id}" aria-labelledby="group-${group.id}"><header class="project-group-header"><span class="eyebrow">${group.projects.length} réalisation${group.projects.length>1?'s':''}</span><h2 id="group-${group.id}">${group.title}</h2><p>${group.description}</p></header>${group.projects.map(c=>projectReport(c)).join('')}</section>`).join('')}</div>
</div>`;

// ---------- Expérience professionnelle ----------
const experiences = [
  {
    dates: 'DEPUIS OCTOBRE 2024',
    company: 'Orange',
    place: 'Montreuil',
    role: 'Infrastructure, systèmes & sécurité des services',
    context: 'Équipe infrastructure et sécurité des services. Administration de serveurs, déploiement d’environnements, sécurisation des accès et automatisation.',
    tasks: [
      'Administration de systèmes Linux et préparation des services applicatifs.',
      'Administration de postes virtualisés et prise en charge des incidents.',
      'Participation au provisionnement et au déploiement d’un environnement hors production.',
      'Sécurisation des accès aux services et automatisation de la gestion des certificats.',
      'GitLab CI/CD, orchestration d’automatisations Ansible existantes et centralisation rsyslog.',
      'Participation à l’implémentation de VPN IPsec de site à site via concentrateurs.',
      'Déploiement d’un assistant IA intégré à l’application métier, avec un système RAG pour ancrer les réponses sur la documentation interne.',
      'Prise en charge d’incidents de virtualisation : diagnostic, rétablissement et vérification du fonctionnement.',
      'Automatisation du renouvellement des certificats avec Certbot / ACME et tests de compatibilité.'
    ],
    result: 'Environnement hors production déployé, opérations automatisées, accès sécurisés et journalisation centralisée ; incidents pris en charge ; assistant IA déployé avec RAG et suivi d’usage.',
    links: [['cloud', 'Infrastructure'], ['acces', 'Accès sécurisés'], ['support-citrix', 'Support Citrix DaaS'], ['assistant-ia', 'Assistant IA & RAG']]
  },
  {
    dates: 'FÉVRIER – SEPTEMBRE 2024',
    company: 'Orange',
    place: 'Île-de-France',
    role: 'Intégration réseaux & sécurité',
    context: 'Intégration d’équipements réseau et de solutions de sécurité pour des clients.',
    tasks: [
      'Configuration et intégration de pare-feux Stormshield et Fortinet : filtrage, NAT/PAT, VPN IPsec/SSL et SD-WAN selon le besoin client.',
      'Déploiement de Wi-Fi d’entreprise avec des contrôleurs Ucopia et configuration de l’authentification associée.'
    ],
    result: 'Équipements de sécurité intégrés et connectivité VPN / Wi-Fi configurée selon les besoins des clients.',
    links: [['reseau', 'Intégration réseau']]
  },
  {
    dates: 'NOVEMBRE 2022 – SEPTEMBRE 2024',
    company: 'Orange',
    place: 'Paris',
    role: 'Intervention et déploiement réseau',
    context: 'Interventions réseau et déploiement d’équipements chez les clients.',
    tasks: [
      'Configuration d’équipements PABX/IPBX, switches, bornes Wi-Fi, VLAN et accès réseau.',
      'Installation et intégration dans l’environnement client, avec accompagnement des utilisateurs.',
      'Diagnostic SAV et interventions à distance ou sur site pour rétablir le service.',
      'Rédaction et mise à jour de la documentation de support.'
    ],
    result: 'Solutions réseau installées, incidents pris en charge et documentation de support tenue à jour.',
    links: []
  }
];
const missionDetails = [
  {
    needs: 'Disposer d’environnements hors production reproductibles, sécuriser les accès à l’application et maintenir les services lors des incidents. Le renouvellement des certificats et la collecte des journaux font aussi partie du périmètre.',
    approach: 'Préparer les environnements, automatiser les opérations récurrentes, sécuriser les accès et documenter l’exploitation. L’assistant IA utilise la documentation interne pour enrichir ses réponses.',
    tools: ['RHEL', 'VMware vSphere', 'Citrix DaaS', 'Terraform', 'GitLab CI/CD', 'Ansible', 'Certbot / ACME', 'rsyslog', 'LLM / RAG'],
    outcomes: ['Environnement hors production déployé et opérations de configuration automatisées.', 'Accès sécurisés, renouvellement des certificats et collecte des journaux mis en place.', 'Incidents de virtualisation pris en charge, avec vérification du rétablissement.', 'Assistant IA intégré à l’application avec RAG et suivi d’usage.']
  },
  {
    needs: 'Adapter la connectivité, le filtrage et l’authentification aux besoins des clients, en assurant la cohérence entre réseau local, accès distant et Wi-Fi.',
    approach: 'Intégrer les équipements de sécurité, configurer les politiques de filtrage et de traduction d’adresses, puis mettre en place les accès VPN et l’authentification Wi-Fi.',
    tools: ['Stormshield', 'Fortinet', 'NAT / PAT', 'VPN IPsec / SSL', 'SD-WAN', 'Ucopia'],
    outcomes: ['Équipements de sécurité intégrés selon les besoins clients.', 'Connectivité VPN et Wi-Fi configurée avec l’authentification associée.']
  },
  {
    needs: 'Installer les équipements dans l’environnement client, diagnostiquer les pannes et rétablir la connectivité, sur site ou à distance.',
    approach: 'Configurer les équipements et les accès réseau, accompagner les utilisateurs, puis consigner les interventions et les informations utiles au support.',
    tools: ['PABX / IPBX', 'Switches', 'VLAN', 'Bornes Wi-Fi', 'Diagnostic réseau'],
    outcomes: ['Solutions réseau installées et intégrées chez les clients.', 'Incidents pris en charge et documentation de support actualisée.']
  }
];
const journey = `<div class="shell"><header class="page-header"><span class="eyebrow">Parcours professionnel</span><h1>Des réseaux clients<br>aux services d’infrastructure.</h1><p>Depuis 2022 chez Orange, mes missions ont évolué du déploiement réseau vers l’administration des systèmes, l’automatisation et la sécurité des services.</p></header><section class="page-content" aria-label="Missions chez Orange">${experiences.map((e, i) => {
  const d = missionDetails[i];
  return `<article class="experience"><div class="experience-meta"><span class="dates">${e.dates} · ${e.place.toUpperCase()}</span><h2>${e.company}</h2><span class="role">${e.role}</span></div><div class="experience-body"><section><h3>Environnement</h3><p>${e.context}</p></section><section><h3>Enjeux</h3><p>${d.needs}</p></section><section><h3>Démarche</h3><p>${d.approach}</p></section><section><h3>Outils</h3>${tags(d.tools)}</section><section><h3>Interventions</h3><ul>${e.tasks.map(t => `<li>${t}</li>`).join('')}</ul></section><section><h3>Bilan</h3><ul>${d.outcomes.map(t => `<li>${t}</li>`).join('')}</ul></section>${e.links.length ? `<div class="inline-links">${e.links.map(([id, text]) => caseLink('projets.html#' + id, text)).join('')}</div>` : ''}</div></article>`;
}).join('')}<p class="notice">La mission d’intégration de 2024 correspond à un changement d’équipe au sein de la période d’alternance commencée en 2022.</p><section class="education-note"><span class="eyebrow">Formation</span><h2>Objets connectés & cybersécurité</h2><p>Diplôme d’ingénieur prévu en septembre 2027. La formation prolonge mon socle systèmes et réseaux vers la sécurité des objets connectés ; l’IoT et l’OT font partie de mes axes d’intérêt.</p></section></section></div>`;

// ---------- Compétences ----------
const skillData = [
  ['Systèmes & virtualisation', 'ENTREPRISE', ['Administration Linux', 'Administration de postes virtualisés', 'Gestion de machines virtuelles'], 'Exploitation des services et résolution d’incidents.', 'cloud'],
  ['Réseaux & sécurité', 'ENTREPRISE', ['Stormshield · Fortinet · filtrage · NAT/PAT', 'VPN IPsec / SSL · VLAN · Wi-Fi', 'Ucopia · authentification'], 'Configuration, intégration et diagnostic dans les environnements clients.', 'reseau'],
  ['Accès & certificats', 'ENTREPRISE', ['Sécurisation des accès', 'Gestion des certificats', 'Certbot · automatisation ACME'], 'Pratique opérationnelle des accès aux services et de leur chaîne de confiance.', 'acces'],
  ['Cloud privé & automatisation', 'ENTREPRISE', ['Provisionnement d’environnements', 'Configuration et déploiement automatisés', 'GitLab CI/CD · Ansible'], 'Mon périmètre porte sur l’utilisation de la plateforme IaC et l’intégration des automatismes disponibles.', 'cloud'],
  ['Journaux & observabilité', 'ENTREPRISE', ['Centralisation rsyslog', 'Traçabilité système', 'Supervision · diagnostic'], 'Rendre les événements utiles à l’exploitation et au diagnostic.', 'journaux'],
  ['Supervision de sécurité', 'PERSONNEL', ['Installation de Wazuh', 'Déploiement en laboratoire'], 'Approfondissement personnel des outils de sécurité, en complément des missions d’infrastructure.', 'wazuh'],
  ['Support & incidents', 'ENTREPRISE', ['Environnements de postes virtualisés', 'Diagnostic et résolution d’incidents', 'Vérification du rétablissement'], 'Résolution d’incidents en autonomie, de la recherche à la confirmation du retour à la normale.', 'support-citrix'],
  ['IA appliquée · LLM & RAG', 'ENTREPRISE', ['Assistant IA intégré à l’application métier', 'RAG · embeddings · recherche sémantique', 'Détection d’intentions · suivi d’usage'], 'Conception et déploiement d’un assistant dont les réponses sont ancrées sur la documentation interne ; préparation d’un agent (v2).', 'assistant-ia'],
  ['Détection & durcissement', 'FORMATION', ['Suricata · règles locales · réglage du bruit', 'nftables · TLS · IPsec Azure / AWS', 'Traces de validation et tests de régression'], 'Pratique de laboratoire documentée par des preuves avant/après.', 'network-hardening'],
  ['Machine learning pour la sécurité', 'PROJET ACADÉMIQUE', ['scikit-learn · XGBoost', 'Télémétrie · Modbus · flux réseau', 'Évaluation et fusion des prédictions'], 'Projet collectif avec modèles spécialisés et résultats enregistrés dans les notebooks.', 'space-ml'],
  ['Analyse de code & SonarQube', 'FORMATION', ['Fiabilité du code C · padding · memcmp', 'Sécurité · chaîne d’approvisionnement', 'Maintenabilité · complexité · duplication'], 'Analyse de la bibliothèque minmea et rédaction d’un rapport structuré ; volet complémentaire sur le fuzzing.', 'sonarqube'],
  ['Développement logiciel', 'PROJET ACADÉMIQUE', ['C++17 · programmation orientée objet', 'Chargement CSV · modélisation UML', 'Tests unitaires Catch'], 'Séparation du modèle métier, du contrôle et du chargement des données.', 'pokemon-cpp']
];
const expertise = `<div class="shell"><header class="page-header"><span class="eyebrow">Domaines de pratique</span><h1>Systèmes et sécurité,<br>de la configuration au diagnostic.</h1><p>Chaque domaine est relié à un projet. Le contexte indique où la compétence a été pratiquée.</p></header><section class="page-content"><div class="skills-grid">${skillData.map((s, i) => `<article class="skill"><span class="eyebrow muted">${String(i + 1).padStart(2, '0')} / ${s[1]}</span><h2>${s[0]}</h2><ul>${s[2].map(t => `<li>${t}</li>`).join('')}</ul><p>${s[3]}</p>${caseLink('projets.html#' + s[4], 'Voir une réalisation')}</article>`).join('')}</div><div class="content-summary"><span class="eyebrow">Domaines à approfondir</span><h2>Investigation & sécurité des plateformes.</h2><p>Réponse à incident, DFIR, détection et investigation SOC sont mes objectifs d’évolution. La sécurité IoT et OT prolonge ma formation. Ces axes sont distincts des missions professionnelles décrites ci-dessus.</p></div></section></div>`;

// ---------- Contact ----------
const contactLinks = [[profile.email ? 'mailto:' + profile.email : '', 'Email professionnel'], [profile.linkedin, 'LinkedIn'], [profile.github, 'GitHub'], [profile.cv, 'Consulter mon CV']].filter(([href]) => href);
const contact = `<div class="shell"><header class="page-header"><span class="eyebrow">Contact</span><h1>Parlons de votre équipe<br>et de ses projets.</h1><p>Disponible pour un premier poste à partir de juin 2027. Diplôme d’ingénieur prévu en septembre 2027.</p></header><section class="contact-grid page-content"><div class="contact-card"><h2>Contact professionnel</h2><p>Je souhaite mettre mon expérience d’infrastructure au service de missions de sécurité opérationnelle, d’investigation ou de sécurisation des plateformes.</p><div>${contactLinks.map(([href, label]) => `<a class="contact-link" href="${escape(href)}">${label} <span aria-hidden="true">→</span></a>`).join('')}</div><div class="interest-list">${profile.interests.map(t => `<span>${escape(t)}</span>`).join('')}</div></div><aside class="professional"><span class="eyebrow">Formation et parcours</span><dl class="facts"><div><dt>Disponibilité</dt><dd>À partir de juin 2027 · premier CDI. Diplôme d’ingénieur prévu en septembre 2027.</dd></div><div><dt>Expérience</dt><dd>Alternance chez Orange depuis 2022 : réseau, infrastructure, systèmes et sécurité.</dd></div><div><dt>Implantations privilégiées</dt><dd>Île-de-France, Rennes / Cesson-Sévigné et Lyon. Autres villes françaises selon les missions.</dd></div><div><dt>Formation</dt><dd>${escape(profile.role)}.</dd></div></dl></aside></section></div>`;

// ---------- Présentation des réalisations ----------
function projectReport(c) {
  const [title, intro] = projectPreviews[c.id];
  const kind = c.kind === 'entreprise' ? 'Mission professionnelle' : c.kind === 'personnel' ? 'Laboratoire personnel' : c.context;
  return `<article class="project-report" id="${c.id}" aria-labelledby="title-${c.id}">
<header class="report-header"><span class="eyebrow">${c.n} / ${escape(kind)}${c.kind === 'entreprise' ? ' · Orange' : ''}</span><h3 id="title-${c.id}">${escape(title)}</h3><p class="report-intro">${escape(intro)}</p>${tags(c.tools)}</header>
<div class="architecture-section"><p class="label">Vue d’ensemble</p><ol class="flow">${c.flow.map((step, i) => `<li><span>${String(i+1).padStart(2,'0')}</span><strong>${escape(step)}</strong></li>`).join('')}</ol></div>
<div class="report-grid">
<section><h4>Objectif</h4><p>${escape(c.summary[0])}</p></section>
<section><h4>Choix retenus</h4><ul>${c.decisions.map(d=>`<li>${escape(d[1])}</li>`).join('')}</ul></section>
<section><h4>Périmètre et limites</h4><p>${escape(c.scope)}</p></section>
<section><h4>Travail réalisé</h4><ul>${c.contribution.map(t=>`<li>${escape(t)}</li>`).join('')}</ul></section>
<section class="report-outcome"><h4>Bilan</h4>${c.metrics?.length ? `<ul class="report-metrics">${c.metrics.map(m=>`<li><strong>${escape(m.value)}</strong> — ${escape(m.label)}. ${escape(m.detail)}${m.url ? ` ${link(m.url,'Source')}` : m.provenance ? ` <span class="measurement-note">${escape(m.provenance)}.</span>` : ''}</li>`).join('')}</ul>` : ''}<p>${escape(c.result)}</p></section>
</div>
<div class="report-links">${link('cases/'+c.id+'.html','Dossier technique')}${c.repo ? link(c.repo,'Dépôt GitHub') : ''}<a href="#project-index">Retour au sommaire ↑</a></div>
</article>`;
}

// ---------- Dossiers techniques ----------
function resultsBlock(c) {
  return `<section class="case-section" id="resultats"><h2>Bilan</h2>${c.metrics?.length ? `<ul class="metric-list">${c.metrics.map(m => `<li><strong>${escape(m.value)}</strong><span>${escape(m.label)} — ${escape(m.detail)}</span>${m.url ? `<a class="text-link" href="${escape(m.url)}">Consulter la preuve <span aria-hidden="true">→</span></a>` : m.provenance ? `<small>${escape(m.provenance)}</small>` : ''}</li>`).join('')}</ul><ul class="outputs"><li>${escape(c.result)}</li></ul>` : `<ul class="outputs">${(c.outputs || [c.result]).map(t => `<li>${escape(t)}</li>`).join('')}</ul>`}</section>`;
}
function sourcesBlock(c) {
  return c.repo || c.sources?.length ? `<section class="case-section"><h2>Ressources</h2><div class="source-links">${c.repo ? `<a class="text-link" href="${escape(c.repo)}">Ouvrir le dépôt GitHub <span aria-hidden="true">→</span></a>` : ''}${(c.sources || []).map(src => `<a class="text-link" href="${escape(src.url)}">${escape(src.label)} <span aria-hidden="true">→</span></a>`).join('')}</div></section>` : '';
}
function casePage(c) {
  const next = projects[(projects.indexOf(c) + 1) % projects.length];
  const isEntreprise = c.kind === 'entreprise';
  const statut = c.status.split('·')[0].trim();
  const ctx = c.context.split('·').map(x => x.trim());
  const eyebrowCtx = (ctx.length === 2 && /^(entreprise|projet (académique|personnel))/i.test(ctx[0])) ? `${ctx[1]} · ${ctx[0]}` : c.context;
  return `<div class="shell"><a class="back" href="../projets.html">← Tous les projets</a>
<header class="case-header"><span class="eyebrow">${c.n} / ${escape(eyebrowCtx.toUpperCase())} · ${escape(statut.toUpperCase())}</span><h1>${escape(c.title)}</h1><p class="desc">${escape(c.desc)}</p>${tags(c.tools)}</header>
<section class="architecture-section" aria-label="Vue d’ensemble"><p class="label">Vue d’ensemble</p><ol class="flow">${c.flow.map((t, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><strong>${escape(t)}</strong></li>`).join('')}</ol><p class="architecture-note">${isEntreprise ? 'Représentation simplifiée · topologie interne non reproduite' : escape(c.context)}</p></section>
<details class="component-details"><summary>Détails des composants</summary><div class="component-grid">${c.nodes.map((n, i) => `<section class="component"><span class="component-id">${String(i + 1).padStart(2, '0')}</span><h3>${escape(n[0])}</h3><p class="component-tools">${escape(n[1])}</p><p>${escape(n[2])}</p></section>`).join('')}</div></details>
<div class="case-grid">
<section class="case-block"><h2>Objectif</h2><p>${escape(c.summary[0] ?? '')}</p></section>
<section class="case-block"><h2>Choix retenus</h2><ul>${c.decisions.map(d => `<li><strong>${escape(d[0].replace(/[.?]+$/, ''))}.</strong> ${escape(d[1])}</li>`).join('')}</ul></section>
<section class="case-block"><h2>Périmètre et limites</h2><p>${escape(c.scope)}</p></section>
<section class="case-block"><h2>Travail réalisé</h2><p>${escape(c.summary[1] ?? '')}</p><ul>${c.contribution.map(t => `<li>${escape(t)}</li>`).join('')}</ul></section>
</div>
${resultsBlock(c)}
${sourcesBlock(c)}
<div class="case-navigation"><small>${escape(c.context)}</small>${caseLink(next.id + '.html', 'Projet suivant')}</div></div>`;
}

// ---------- Génération ----------
await mkdir('cases', { recursive: true });
for (const [file, title, content] of [['profil.html', 'Profil', home], ['projets.html', 'Projets', listing], ['experience.html', 'Expérience', journey], ['competences.html', 'Compétences', expertise], ['contact.html', 'Contact', contact]]) await writeFile(file, layout(title, file, content));
for (const c of projects) await writeFile(`cases/${c.id}.html`, layout(c.short, 'projets.html', casePage(c), 1));
const redirects = [
  ['index.html', 'profil.html', 'Profil', 0],
  ['realisations.html', 'projets.html', 'Projets', 0],
  ['parcours.html', 'experience.html', 'Expérience', 0],
  ['cases/minmea.html', 'sonarqube.html', 'SonarQube', 1]
];
for (const [oldPath, target, title, depth] of redirects) {
  const active = depth ? 'projets.html' : target;
  const content = `<div class="shell"><header class="page-header"><h1>${title}</h1><p>Cette page est disponible à sa nouvelle adresse.</p>${link(target, 'Ouvrir la page')}</header></div>`;
  const redirect = `<meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${target}"><script>location.replace(${JSON.stringify(target)} + location.search + (location.hash === '#minmea' ? '#sonarqube' : location.hash));</script>`;
  await writeFile(oldPath, layout(title, active, content, depth).replace('</head>', redirect + '</head>'));
}
await writeFile('assets/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#faf9f6" stroke="#a7a9ae"/><text x="32" y="43" text-anchor="middle" fill="#202630" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="24">YF</text></svg>');
await writeFile('.nojekyll', '');
console.log(`${projects.length + 5 + redirects.length} pages HTML générées, prêtes pour GitHub Pages.`);
