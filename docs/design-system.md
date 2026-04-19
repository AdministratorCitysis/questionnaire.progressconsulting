# Audit Design System - Progress Consulting

## 1) Portee de l'audit

Audit realise sur l'application React existante (`src/`) avec focus sur:
- composants recurrents
- patterns de layout
- regles implicites de design
- incoherences UI/UX
- expression de marque Progress Consulting
- fragilites pour une evolution full-stack

## 2) Architecture UI observee

### Structure generale
- Application "multi-questionnaires" routee via `HashRouter` avec 33 routes explicites dans `src/App.js`.
- 32 domaines questionnaire dans `src/Components`, chacun avec souvent:
  - un wrapper racine (`Drivers.js`, `Delegation.js`, etc.)
  - un sous-dossier `Components`/`components` contenant `Header`, `Questions`, `Question`, `Possibilites`, `Answer`, `Context`, `Questionnaire`.
- Modele dominant: composants classe (`extends Component`), state local massif, logique metier co-localisee dans les composants d'affichage.

### Composants recurrents (duplication forte)
- `Header.js`: 32 occurrences.
- `Questionnaire.js`: 31 occurrences.
- `Questions.js`: 31 occurrences.
- `Answer.js`: 30 occurrences.
- `Possibilites.js`: 18 occurrences.
- `Context.js`: 23 occurrences.

Constat: architecture "template copie/colle + adaptation locale" tres repandue.

## 3) Patterns de layout

### Shell visuel commun
- Conteneur principal: `.App` + `.survey`.
- En-tete: `.head` -> `.header` -> `.logo` + bloc d'instructions/options.
- Titre d'outil: `.survey-title` (fond bleu marine, texte blanc, radius fort).
- Zone de questions: `.questions` (card blanche, shadow, bordures arrondies).
- Resultats: `.answer`, `.result`, `.result-graph`, bouton `.add-button`, impression `react-to-print`.

### Pattern de question
- Tableau HTML (`.questions-table`) avec alternance de lignes.
- Ligne type:
  - numero (`.question-number`)
  - texte (`.question-text`)
  - placeholder de feedback (`.question-possibilites-text`)
  - choix radio custom (`.possibilites-radio`, `.possibilite-label`)

### Pattern responsive
- 3 paliers principaux:
  - desktop large
  - tablette (`715-965`)
  - mobile (`<714`)
- Sur petit viewport: passage en pile verticale, recentrage du texte, radios wraps.

### Pattern impression
- Layer dedie `.ToPrint` et classes utilitaires (`fs*`, `w*`, `p*`, etc.).
- `@media print` present avec gestion page-break.

## 4) Regles implicites de design

### Palette
- Bleu marine `#002F47` (texte structurel, titres, cadre institutionnel).
- Bleu turquoise `#2AA1A9` (actions, zones d'information, accents).
- Orange `#F39325` (interactions, etat actif, marqueurs de score).
- Blanc/gris neutres pour fond et etats inactifs.

### Typographie
- Famille `Maven Pro` locale (Regular/Medium/Bold/Black).
- Hierarchie implicite:
  - titres 40px
  - sous-sections 30px
  - corps principal souvent 24-30px
  - etiquettes techniques 20-25px

### Formes et densite
- Radius eleve (20-30px) quasi systematique.
- Ombres portees frequentes pour cards et blocs resultat.
- Interface "dense mais lisible" orientee atelier/formation.

### Interaction
- CTA principal via `.add-button` (Valider / Cacher le resultat).
- Radios custom grandes surfaces cliquables.
- Feedback progressif par texte de guidance tant que questionnaire incomplet.

## 5) Incoherences UI/UX

### 5.1 Cohesion visuelle
- Melange de dossiers `Components` vs `components` selon modules, impactant lisibilite/maintenance.
- Plusieurs questionnaires reprennent des textes/resultats non adaptes (ex: messages "gestion du temps" presentes dans des modules non lies).
- Presence de classes utilitaires et classes metier melangees dans un seul gros `App.css`, sans separation claire par domaine.

### 5.2 Comportements et qualite d'usage
- Logs debug en production sur de nombreux modules (`console.log` tres present).
- Logiques de calcul parfois couplees a des mutations directes d'objets state/context.
- Risque de comptage incoherent si utilisateur modifie une reponse dans certains modules (addition cumulative non normalisee selon impl).
- Identifiants radio bases sur texte de question (espaces, apostrophes, accents), fragile pour robustesse DOM/accessibilite.

### 5.3 Contenu et accessibilite
- Nombreux artefacts d'encodage visibles dans le source (`Ã©`, `â€™`, etc.), risque de perception non professionnelle selon pipeline d'affichage.
- `alt=""` frequent sur logos/images (faible support accessibilite semantique).
- UX d'authentification "Gate" non fonctionnelle au sens securite (message d'erreur local uniquement).

### 5.4 Coherence produit
- Home centralise beaucoup de liens, mais sans regroupement par categorie, niveau, langue ou objectif.
- Navigation transversale quasi absente une fois dans un questionnaire (retour portail/etat progression non structure).

## 6) Signaux forts de marque Progress Consulting

### Ce qui fonctionne tres bien
- Univers visuel constant: bleu marine + turquoise + orange.
- Ton pedagogique et professionnel dans l'intitule des questionnaires.
- Positionnement "diagnostic + reflection + restitution" coherent avec un usage coaching/formation.
- Resultats visuels lisibles (graphiques, messages, profils) et capacite d'impression utile en contexte atelier.
- Multilingue (FR/NL/EN) present sur plusieurs parcours.

### Valeur percue
- Sentiment d'outillage metier concret.
- Cadre serieux et structure (formulaire, scoring, restitution exploitable).

## 7) Points fragiles pour evolution full-stack

### 7.1 Data model et separations des responsabilites
- Donnees questionnaire hardcodees dans les composants UI (pas de schema central).
- Pas de couche "domain/service/repository": la logique metier vit dans `setState`.
- Pattern heterogene selon questionnaire (meme concepts, structures differentes).

Impact: cout eleve pour brancher un backend unique (CRUD questionnaires, versionning, analytics, scoring serveur).

### 7.2 Reutilisation et evolutivite
- Forte duplication par langue/module, faible mutualisation de primitives.
- Risque de regressions croisees lors de corrections (corriger un bug n'impacte pas les copies soeurs).

### 7.3 Securite et gouvernance
- Identifiants en dur cote front (`Gate` et `Home`), non conforme a une posture full-stack securisee.
- Aucun mecanisme d'authentification/autorisation reel, ni persistance utilisateur.

### 7.4 Qualite technique
- Dominance des classes React 17 + patterns legacy.
- Mutations directes et `setState` parfois non idiomatiques.
- Peu de tests applicatifs metier.

## 8) Intentions de design a preserver

Pour toute evolution:
- conserver la palette et la personnalite visuelle actuelle
- maintenir la lisibilite tres forte des formulaires
- conserver le pattern de restitution imprimable
- garder la tonalite "coaching professionnel" et non "app generique"

## 9) Priorites recommandees (sans refactor immediate)

1. Formaliser un "UI kit minimal" documentaire (tokens, composants base, etats, wording).
2. Extraire un schema questionnaire commun (JSON) independant du rendu.
3. Definir un modele de score/reponse centralise (fonctions pures testables).
4. Introduire une couche d'acces aux donnees (mock API puis backend).
5. Planifier une convergence progressive des modules dupliques vers des briques partagees.

