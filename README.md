# Youssouf — Infrastructure & Cybersécurité

Portfolio professionnel statique, en français, prêt pour GitHub Pages.

## Organisation

- `src/profile.mjs` : identité affichée, disponibilité et liens de contact.
- `src/projects.mjs` : données des onze réalisations et références.
- `scripts/build.mjs` : génération des pages HTML.
- `assets/light.css` : identité visuelle et mise en page responsive.
- `assets/main.js` : emplacement réservé aux interactions complémentaires.
- Les pages `.html` à la racine et dans `cases/` : pages publiées, consultables même sans JavaScript.

## Modifier le site

Node.js suffit, sans installation de dépendances :

```sh
npm run build
npm test
```

Modifier le profil ou les réalisations dans `src/`, reconstruire puis publier les fichiers modifiés. Ajouter les liens email, LinkedIn et CV dans `src/profile.mjs` lorsqu’ils sont prêts à être publiés.

La page `projets.html` rassemble les onze présentations complètes et un sommaire par ancres. Les pages dans `cases/` conservent les détails complémentaires et les ressources. Les pages générées sont enregistrées dans le dépôt pour permettre une publication simple depuis une branche.

## Activer GitHub Pages

Settings → Pages → Deploy from a branch → main → / (root) → Save.

Le fichier `.nojekyll` permet de servir directement les fichiers statiques.

## Contenu

Le parcours et les réalisations décrivent les missions communiquées chez Orange, le laboratoire Wazuh, les projets publics de durcissement réseau, de détection ML, de développement C++. Le projet SonarQube présente l’analyse personnelle de la bibliothèque minmea ; les auteurs de la bibliothèque d’origine restent identifiés. Les résultats chiffrés renvoient aux artefacts sources ; les scores ML sont issus des notebooks sans réexécution. Les architectures sont des représentations fonctionnelles simplifiées. Les coordonnées privées, configurations internes et mesures non documentées ne sont pas publiées. Les résultats d’entreprise sans artefact public (ex. statistiques d’usage internes) sont présentés comme des mesures internes, sans lien de preuve.

Les pages principales sont `profil.html`, `projets.html`, `experience.html`, `competences.html` et `contact.html`. Les anciennes adresses redirigent vers ces pages. Le point d’entrée `index.html` redirige vers `profil.html`.
