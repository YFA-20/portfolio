import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import projects from '../src/projects.mjs';
const root=process.cwd();
let checked=0;
for(const directory of ['.','cases'])for(const file of await readdir(directory)){
 if(!file.endsWith('.html'))continue;
 const full=path.join(directory,file),html=await readFile(full,'utf8');
 assert(html.includes('<html lang="fr">'),`${full}: langue`);
 assert(html.includes('<main id="contenu">'),`${full}: contenu accessible`);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${full}: un titre principal`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const target=match[1];if(/^(https?:|mailto:|#)/.test(target))continue;
  const resolved=path.resolve(path.dirname(full),target.split('#')[0].split('?')[0]);
  assert(resolved.startsWith(root+path.sep),`${full}: chemin hors dépôt`);
  assert((await stat(resolved)).isFile(),`${full}: fichier absent ${target}`);
 }
 // Nested anchors were splitting project rows during HTML parsing.
 let anchorOpen=false;
 for(const token of html.matchAll(/<\/?a(?:\s[^>]*|)>/g)){
  if(token[0].startsWith('</')){assert(anchorOpen,`${full}: fermeture de lien sans ouverture`);anchorOpen=false;}
  else {assert(!anchorOpen,`${full}: liens imbriqués`);anchorOpen=true;}
 }
 assert(!anchorOpen,`${full}: lien non fermé`);
 assert.equal((html.match(/aria-current="page"/g)||[]).length,1,`${full}: navigation active`);
 assert(!/études? de cas/i.test(html),`${full}: vocabulaire abandonné`);
 assert(!html.includes('portfolio-web'),`${full}: projet portfolio retiré`);
 assert(!html.includes('undefined'),`${full}: contenu manquant`);
 checked++;
}
assert.equal(checked,projects.length+9);
assert.equal(projects.length,11);
assert(!JSON.stringify(projects).includes("Caryon"));
assert(!/\bVelora\b/i.test(JSON.stringify(projects)));
assert.equal(projects.find(p=>p.id==="sonarqube").metrics.length,5);
assert.equal(projects.find(p=>p.id==="assistant-ia").metrics.length,3);
assert(projects.find(p=>p.id==="assistant-ia").metrics.every(m=>m.internal===true&&!m.url&&m.provenance==="Mesure interne"));
assert.equal(projects.find(p=>p.id==='support-citrix').metrics.length,0);
assert(projects.find(p=>p.id==="space-ml").scope.includes("sans réexécution"));
for(const project of projects){const html=await readFile(`cases/${project.id}.html`,"utf8");assert(html.includes('id="resultats"'));for(const m of project.metrics||[]){if(m.url)assert(html.includes(m.url));if(m.internal)assert(html.includes('Mesure interne'),`${project.id}: provenance mesure interne affichée`);}}
const contact=await readFile('contact.html','utf8');
assert(contact.includes('https://github.com/YFA-20'));
assert(!contact.includes('mailto:'));
const home=await readFile('profil.html','utf8');
assert(home.includes('septembre 2027'));
assert(!home.includes('<main id="contenu"></main>'));
for(const directory of ['.','cases'])for(const file of await readdir(directory)){if(!file.endsWith('.html'))continue;const html=await readFile(path.join(directory,file),'utf8');assert(!html.includes('\u2014'),`${file}: tiret cadratins`);}
console.log(`${checked} pages contrôlées : liens locaux, absence de liens imbriqués, navigation, titres, contenu sans JavaScript et coordonnées.`);

const listing=await readFile('projets.html','utf8');
for(const project of projects){const internalCount=(project.metrics||[]).filter(m=>m.internal).length;if(internalCount){const start=listing.indexOf(`id="${project.id}"`);const next=listing.indexOf('class="project-report"',start+10);const section=listing.slice(start,next>start?next:start+20000);assert.equal((section.match(/Mesure interne/g)||[]).length,internalCount,`${project.id}: ${internalCount} mesures internes dans le rapport`);}}
for(const project of projects){
 assert(listing.includes(`id="${project.id}"`),`${project.id}: présentation intégrée`);
 assert(listing.includes(`href="#${project.id}"`),`${project.id}: entrée du sommaire`);
 for(const m of project.metrics||[])if(m.url)assert(listing.includes(m.url));
}
const journey=await readFile('experience.html','utf8');
for(const heading of ['Environnement','Enjeux','Démarche','Outils','Interventions','Bilan'])
 assert.equal((journey.match(new RegExp(`<h3>${heading}</h3>`,'g'))||[]).length,3,`Expérience : rubrique ${heading}`);

const sonar=projects.find(p=>p.id==='sonarqube');
assert.deepEqual(sonar.metrics.map(m=>m.value),['18','2','36','9','3,0 %']);
const sonarHtml=await readFile('cases/sonarqube.html','utf8');
assert(sonarHtml.includes('SonarQube') && !sonarHtml.includes('Mesure interne · Orange'));
for(const [file,label] of [['profil.html','Profil'],['projets.html','Projets'],['experience.html','Expérience'],['competences.html','Compétences'],['contact.html','Contact']]) {
 const html=await readFile(file,'utf8');
 assert(html.includes(`<a href="${file}" aria-current="page">${label}</a>`));
 assert(!/href="(?:\.\.\/)?(?:index|realisations|parcours)\.html/.test(html));
}

assert.deepEqual(projects.filter(c=>c.category==='professionnel').map(c=>c.id),['cloud','acces','support-citrix','reseau','journaux','assistant-ia']);
assert.deepEqual(projects.filter(c=>c.category==='academique').map(c=>c.id),['network-hardening','space-ml','pokemon-cpp','sonarqube']);
assert.deepEqual(projects.filter(c=>c.category==='personnel').map(c=>c.id),['wazuh']);
for(const id of ['professionnels','academiques','personnels'])assert(listing.includes(`id="${id}"`) && listing.includes(`href="#${id}"`));

