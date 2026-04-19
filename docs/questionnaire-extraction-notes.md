# Questionnaire Extraction Notes

## Ambiguites et regles implicites

### /activitemanageriale (Activitemanageriale)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /assertiveness (Assertiveness)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /assertivite (Assertivite)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /assertiviteit (Assertiviteit)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /beslissings (Beslissings)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /creativite (Creativite)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /creativiteit (Creativiteit)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /delegation (Delegation)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /delegation-en (DelegationEN)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /delegation-nl (DelegationNL)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /drivers (Drivers)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /drivers-nl (DriversNL)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /ecouteactive (EcouteActive)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /gestion (GestionTemps)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /gestion-nl (GestionTempsNL)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /intelligence (Intelligence)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /leadership (Leadership)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /lencioni (Lencioni)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /managerialactivity (ActivitemanagerialeEN)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /persona/hautencouleur (PersonaFRHautEnCouleur)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /personacomplexefr (PersonaFR)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /personaEN (Caracteristique)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /personaFR (PersonaFROLD)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /personaNL (PersonaNL)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /sct/individuel (Individuel)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /sct/test/individuel (IndividuelTest)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /skillsoft (Skillsoft)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /timing (Timing)
- Aucune regle de validation explicite detectee automatiquement.
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /tki/en (TKI_EN)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /tki/fr (Tki)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

### /tki/nl (TKI_NM)
- Aucune question n'a explicitement plusieurs champs de groupement detectes; verifier les composants de scoring pour d'eventuels effets indirects.

## Points complexes

- Plusieurs questionnaires utilisent des structures heterogenes (`questionnaire.questions`, `categories[].questions`, `Qualificatifs`, `Classements`, `Questionnaire`).
- Les regles de scoring/validation sont souvent implicites dans des methodes `handle*` et dans des composants `Answer`/`Result`/`Possibilites`.
- Les valeurs de choix peuvent etre surchargees dynamiquement selon la categorie (ex: Delegation et variantes).
- Certains questionnaires combinent plusieurs mecaniques (classement + echelle de Likert), ex: SCT.

## Differences entre questionnaires

- Echelle radio standard (0..4 ou equivalents).
- Echelle radio avec mapping conditionnel des valeurs par categorie.
- Saisie numerique libre (Timing).
- Allocation de points sur propositions (Couleurs).
- Classement/reordonnancement de possibilites (SCT/Couleurs).
- Scoring par categories/dimensions, parfois avec seuils textuels (`maxvalue`), parfois avec restitutions graphiques.