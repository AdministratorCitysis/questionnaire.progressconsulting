# Questionnaire Patterns (depuis les JSON extraits)

## Périmètre

Analyse basée uniquement sur `data/questionnaires/*.json` (31 questionnaires extraits).

## Vue d'ensemble chiffrée

- Nombre total: 31
- Type de réponse inféré:
- `single_choice_radio`: 27
- `uncertain`: 3 (`assertiveness`, `assertivite`, `assertiviteit`)
- `text_or_free_numeric_input`: 1 (`timing`)
- Nombre de sections:
- 1 section: 28
- 2 sections: 2 (`sct-individuel`, `sct-test-individuel`)
- 4 sections: 1 (`intelligence`)
- Seuils de résultat explicites (`maxvalue`): 15 questionnaires
- Validation explicite détectée: 30 questionnaires

## 1) Structures récurrentes

### Structure dominante

- Un questionnaire est défini par un bloc principal contenant:
- `title` ou `titre`
- `questions[]`
- `choices[]` ou `answers[]` comme options de réponse
- `categories[]` (groupes de scoring)
- `answers[]` ou `reponses[]` pour interprétation finale (souvent via `maxvalue`)

### Variantes de structure observées

- Sections pilotées par `categories[].questions[]` (ex: `intelligence`, `activitemanageriale`, `managerialactivity`).
- Sections spécialisées de classement (`Classements[].suggestions[].possibilites[]`) dans `sct-individuel` et `sct-test-individuel`.
- Bloc mixte dans SCT: `Classements[]` + `Questionnaire[]`.
- Questionnaire sans groupes explicites et avec saisie libre: `timing`.

## 2) Types de questions observés

- Likert/échelle radio (majoritaire): options `{id, number, text, value}`.
- Binaire Vrai/Faux via UI custom: `assertiveness`, `assertivite`, `assertiviteit`.
- Saisie texte/nombre libre: `timing` (`input type="text"`, parse en nombre).
- Classement/réordonnancement d’options (drag/drop): `sct-individuel`, `sct-test-individuel`.

## 3) Patterns de scoring

### Pattern A: addition simple par question

- Valeur sélectionnée ajoutée au score total ou au score catégorie.
- Implémentation fréquente: `reduce` + accumulation par `categoryId`.

### Pattern B: mapping de valeur dépendant du groupe

- `delegation*`: même options visuelles, mais valeur injectée selon `category.values`.
- Exemple: catégorie positive `[1,2,3,4]`, catégorie négative `[4,3,2,1]`.

### Pattern C: scoring par classement

- SCT: réordonnancement, puis affectation d’une grille de points fixe `[14,12,10,8,6,4,2]` selon l’ordre.
- Score final de groupe = somme(questions Likert du groupe) + somme(points de classement du groupe).

### Pattern D: scoring binaire custom

- Assertiveness variants: clic True/False, valeur numérique transmise (`1`/`0`), cumulée dans la catégorie de la question.

## 4) Patterns de regroupement (groupes/dimensions)

- Groupement dominant: `question.categoryId -> categories[id]`.
- Nombre de groupes variable: 1, 2, 4, 5, 7 selon questionnaire.
- Certains questionnaires ont des catégories “dimension” sans `categoryId` explicite dans les questions; le regroupement est implicite dans les composants de catégorie.
- Aucun cas explicite détecté où une même réponse crédite plusieurs groupes en parallèle via une règle déclarative unique.

## 5) Patterns de validation

- Pattern principal: questionnaire complet si toutes les questions/sections ont `completed === true` (souvent avec `every`).
- Validation multi-section: agrégation de complétion sur plusieurs collections (`Classements` + `Questionnaire` dans SCT).
- Cas atypique: `timing` n’a pas de validation explicite “tout complété”; le résultat dépend surtout de `total > 0`.

## 6) Patterns de calcul de résultats

- Résultat par seuils textuels:
- `answers[]` ou `reponses[]` avec `maxvalue`
- boucle sur seuils pour sélectionner le texte associé
- Résultat graphique par barres:
- valeurs de catégories affichées et comparées visuellement
- Résultat direct numérique:
- `timing`: total en minutes, converti en heures/minutes si `>= 60`

## Invariants (ce qui est commun)

- Présence de questions ordonnées avec identifiant.
- Score basé sur des valeurs numériques de réponse (directes ou dérivées).
- Un état de complétion influence l’accès à l’affichage final.
- Le résultat final est calculé côté front par agrégation.

## Variations (ce qui change régulièrement)

- Forme des sections (`questions[]`, `categories[].questions[]`, `Classements[]`, `Questionnaire[]`).
- Type de réponse (Likert, binaire custom, saisie libre, classement).
- Mode d’attribution des points (valeur globale, valeur conditionnelle par catégorie, points par rang).
- Présence/absence de seuils d’interprétation.
- Présence/absence de groupes explicites.

## Spécifiques (cas particuliers)

- `timing`: saisie libre + ajout de question utilisateur à la volée.
- `delegation*`: même labels de réponse, valeur inversée selon catégorie.
- `sct-individuel*`: mécanique hybride (classement + Likert) et score composé.
- `assertiveness*`: binaire custom sans tableau de choix global dans les données extraites.

