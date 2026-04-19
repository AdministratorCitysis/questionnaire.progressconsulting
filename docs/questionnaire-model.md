# Modèle Canonique Proposé (fidèle aux patterns observés)

## Objectif du modèle

Définir une base exploitable pour:
- générer des questionnaires
- alimenter un renderer front
- alimenter un éditeur back-office

Le modèle ci-dessous couvre les patterns majoritaires observés, avec extensions explicites pour les cas particuliers (classement, mapping conditionnel, saisie libre, calcul hybride).

## 1) Structure proposée

### 1.1 Racine

- `id`, `slug`, `title`, `locale`
- `meta`: informations éditoriales (description, instruction, tags)
- `sections[]`: unités de rendu ordonnées
- `groups[]`: dimensions de score
- `scoring`: règles de calcul
- `validation`: règles de complétion
- `result`: règles d’interprétation/affichage

### 1.2 Section canonique

- `id`, `title`, `order`
- `kind`:
- `question_list` (cas majoritaire)
- `ranking_list` (SCT)
- `mixed` (si besoin)
- `questions[]`: questions ordonnées

### 1.3 Question canonique

- `id`, `order`, `text`
- `type`:
- `single_choice`
- `binary_choice`
- `numeric_input`
- `ranking_item`
- `options[]` (si applicable)
- `scoringTargets[]`: cibles de score
- `rules`: contraintes locales (min/max, required, etc.)

### 1.4 Option canonique

- `id`, `label`, `value`
- `uiLabel` (ex: `--`, `+`, `True`, `False`)
- `metadata` (facultatif)

## 2) Scoring canonique

### 2.1 Règle de base (majoritaire)

- `sum_by_group`:
- source: `question.response.value`
- cible: groupe via `question.scoringTargets`

### 2.2 Extensions nécessaires (observées)

- `conditional_option_value_by_group` (delegation*):
- même option visuelle, valeur dépendante du groupe de la question
- `ranking_points_by_position` (SCT):
- points injectés selon la position finale de l’item classé
- `composed_sum` (SCT):
- somme de plusieurs sources (`question_list` + `ranking_list`)
- `free_numeric_sum` (timing):
- somme de réponses numériques libres

### 2.3 Interprétation de résultat

- `thresholds[]` optionnels:
- `{maxValue, message}`
- `visualization`:
- `bar_by_group`
- `numeric_total`
- `none`

## 3) Validation canonique

- `required_sections`: sections obligatoires
- `completionPolicy`:
- `all_questions_completed` (cas principal)
- `all_blocks_completed` (multi-sections, ex. SCT)
- `custom_predicate` (cas atypiques, ex. total > 0)

## 4) Justification des choix

- Le modèle est centré section/question car c’est la structure dominante (28/31 en mono-section, majorité en question-list).
- Le scoring est déclaratif avec “règles extensibles” pour couvrir les écarts observés sans perdre de fidélité.
- `scoringTargets` explicite l’affectation à un ou plusieurs groupes et prépare les futurs cas multi-groupes.
- Les patterns minoritaires sont traités comme extensions, pas comme exceptions codées en dur.

## 5) Limites connues

- Certains comportements sont encore implicites dans la logique UI actuelle (ex: statuts `completed`, règles conditionnelles dispersées).
- Quelques questionnaires n’exposent pas explicitement leurs options dans la donnée extraite (`assertiveness*`), bien que la logique UI les définisse.
- Le modèle propose un champ multi-cible (`scoringTargets`) même si aucun cas déclaratif multi-groupe n’est explicitement présent aujourd’hui.
- Les textes avec artefacts d’encodage sont conservés tels que trouvés; la normalisation de contenu est hors périmètre.

## 6) Couverture réelle du modèle

- Couvre directement:
- Likert/single choice
- binaire True/False
- saisie numérique libre
- sections multiples
- seuils d’interprétation
- Couvre via extension:
- classement avec points par rang
- valeur d’option conditionnelle au groupe
- score composé multi-sources

