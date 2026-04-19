# Scoring Model

## Objectif

Fournir une base robuste et extensible pour:
- collecter des réponses dans un format unifié
- calculer des scores via des stratégies pures, isolées et testables
- interpréter les résultats séparément de la logique de calcul

Cette implémentation ne remplace pas la logique actuelle des composants. Elle la formalise en couche dédiée.

## Architecture globale

### 1) Collecte des réponses

- Modèle unifié: `AnswerRecord`
- Fichier: [answer-model.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/answers/answer-model.js)
- Type utilitaires: [types.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/types.js)

Champs clés:
- `questionId`, `sectionId`
- `optionId`, `optionIndex`
- `rawValue`, `normalizedValue`
- `type` (`single_choice`, `binary_choice`, `numeric_input`, `ranking_item`)
- `rankedOptions` (cas classement)
- `meta` (ex: `categoryId`, dimensions)

### 2) Calcul des scores

- Moteur: [engine.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/engine.js)
- Registre de stratégies: [index.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/index.js)

`computeScore({ strategyId, answers, config, context })`
- normalise les réponses
- sélectionne la stratégie
- exécute une fonction pure `calculate(...)`
- retourne un `ScoringResult`

### 3) Interprétation des résultats

- Interpréteur seuils: [thresholds.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/interpreters/thresholds.js)
- Interpréteur mapping profil: [profile-map.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/interpreters/profile-map.js)

`interpretScore(...)` est volontairement séparé du calcul numérique.

## Stratégies implémentées

### A. `simple_sum`

- Fichier: [simple-sum.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/simple-sum.js)
- Usage: score global simple (ex: total de réponses numériques).
- Données attendues: réponses avec `normalizedValue` (ou `rawValue`).

### B. `category_sum`

- Fichier: [category-sum.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/category-sum.js)
- Usage: somme par catégorie/groupe (`questionId -> groupId`).
- Couvre le pattern dominant des questionnaires multi-catégories.

### C. `multi_dimensional`

- Fichier: [multi-dimensional.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/multi-dimensional.js)
- Usage: une réponse peut contribuer à plusieurs dimensions (pondérations).
- Permet d’ajouter des modèles multidimensionnels sans casser les stratégies existantes.

### D. `conditional_score`

- Fichier: [conditional-score.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/conditional-score.js)
- Usage: valeur dépendante du groupe de la question (pattern `delegation*`).
- Données attendues:
- `questionToGroup`
- `groupOptionValues` (ex: `positive:[1,2,3,4]`, `negative:[4,3,2,1]`)

### E. `axis_xy_persona`

- Fichier: [axis-xy-persona.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/axis-xy-persona.js)
- Usage: modèle à axes X/Y + mapping grille profil (pattern Persona).
- Modes:
- `improved`: reproduit la logique PersonaFR/PersonaFRhautencouleur (grille 3x7 conditionnelle)
- `legacy`: reproduit PersonaFROLD (grille 3x3)
- Données attendues:
- soit `context.precomputedAxes = {x,y}`
- soit réponses avec `meta.categoryId` + `axisByCategoryId`
- optionnel `profileGrid` pour récupérer le profil final.

### F. `composed_sct`

- Fichier: [composed-sct.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/composed-sct.js)
- Usage: score composé multi-sources (pattern `sct*`):
- composante Likert par groupe
- composante classement par rang (`pointsByPosition`)
- fusion finale par groupe

### G. `profile_mapping`

- Fichier: [profile-mapping.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/profile-mapping.js)
- Usage: mapping direct score total -> profil (intervalle min/max).
- Utile pour questionnaires orientés “profil final”.

## Tests unitaires

Un test par stratégie + test moteur:
- [simple-sum.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/simple-sum.test.js)
- [category-sum.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/category-sum.test.js)
- [multi-dimensional.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/multi-dimensional.test.js)
- [conditional-score.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/conditional-score.test.js)
- [axis-xy-persona.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/axis-xy-persona.test.js)
- [composed-sct.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/composed-sct.test.js)
- [profile-mapping.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/strategies/profile-mapping.test.js)
- [engine.test.js](/c:/Users/P70515/Projets/questionnaire.progressconsulting/src/scoring/engine.test.js)

## Règles d’extension

1. Ajouter un nouveau fichier stratégie dans `src/scoring/strategies/`.
2. Exporter un objet `{ id, calculate }`.
3. `calculate` doit être pure:
- pas d’accès DOM
- pas de mutation d’entrée
- pas d’effet de bord
4. Déclarer la stratégie dans `strategies/index.js`.
5. Ajouter un test unitaire dédié.
6. Si interprétation spécifique: créer/interfacer un interpréteur séparé.

## Ambiguïtés et limites connues

- Certains comportements historiques restent implicites dans les composants UI (ordre de mutation state, etc.).
- Les questionnaires Assertiveness ont un rendu binaire custom: la stratégie reproduit le calcul, mais l’extraction des options ne reflète pas toujours explicitement `True/False`.
- Persona existe en variante `legacy` et `improved`; les deux modes sont conservés.
- Cette couche est prête pour migration progressive; elle ne remplace pas automatiquement les composants actuels.

