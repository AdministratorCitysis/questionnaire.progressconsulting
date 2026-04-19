# Product Intent - Progress Consulting Questionnaire Platform

## 1) Intent produit deduite du code actuel

Le produit actuel sert de plateforme de diagnostics comportementaux et manageriaux pour des parcours de formation/coaching Progress Consulting.

Intent principal observe:
- faire repondre rapidement a des questionnaires experts
- produire une restitution immediate lisible (score, profil, recommandations)
- permettre l'export/impression pour debrief humain
- couvrir plusieurs langues (FR/NL/EN) selon contexte client

En pratique, l'application privilegie la clarte operationnelle plutot qu'une sophistication technique.

## 2) Public cible implicite

- formateurs / consultants Progress Consulting
- participants de formations inter/intra entreprise
- eventuellement managers en auto-diagnostic encadre

Le design actuel cible des sessions accompagnees: grand texte, interactions simples, resultats commentables en collectif ou en individuel.

## 3) Proposition de valeur actuelle

- diagnostic rapide et comprehensible
- coherence visuelle institutionnelle
- capital metier incorpore dans les questions/restitutions
- capacite d'usage immediate sans onboarding complexe

## 4) Limites produit actuelles

- plateforme centree front statique (pas de persistance serveur)
- pas de comptes utilisateurs robustes ni de securite reelle
- pas de back-office de creation/edition questionnaire
- duplication par langue/outil qui ralentit l'evolution

## 5) Vision cible (evolution full-stack)

Passer d'un "catalogue de formulaires hardcodes" a une plateforme de questionnaires pilotable:
- moteur questionnaire unique
- contenus stockes en base (versionnes)
- scoring configurable et testable
- gestion des sessions/repondants
- restitution dynamique et historisee
- administration de contenus sans redeploiement front

## 6) Principes directeurs pour la migration

1. Preserver la marque
- conserver palette, tonalite, lisibilite, impression.

2. Preserver la pedagogie
- garder des parcours simples, explicites, non techniques pour l'utilisateur final.

3. Decoupler metier et presentation
- modeles de questionnaire/scoring hors composants React.

4. Migrer par increments reviewables
- ne pas casser les questionnaires existants pendant la transition.

5. Prioriser la fiabilite
- mesures de completion, calculs de score et mapping de resultats doivent devenir deterministes et testes.

## 7) Cibles fonctionnelles prioritaires

### Court terme
- definir un schema canonique questionnaire (questions, choix, categories, regles score, interpretations)
- normaliser les structures multilingues
- conserver les routes existantes comme facade de compatibilite

### Moyen terme
- exposer API backend pour charger questionnaires/resultats
- persister les reponses par session
- ajouter authentification reelle (roles consultant/admin)

### Long terme
- back-office de creation/edition de questionnaires
- analytique transverse (completion, distributions, evolution cohortes)
- gouvernance de versioning des contenus et des algorithmes de scoring

## 8) Risques produit a anticiper

- dilution de l'identite visuelle si migration trop "generique SaaS"
- regression sur la simplicite UX si sur-ingenierie
- incoherence de scores si plusieurs algorithmes coexistent sans gouvernance
- dette de compatibilite si les anciens questionnaires ne sont pas encapsules proprement

## 9) Definition de reussite

La migration est reussie si:
- un questionnaire historique peut etre servi par moteur commun sans changer l'experience utilisateur
- un nouveau questionnaire peut etre cree sans toucher au code React
- les scores sont identiques entre ancienne et nouvelle implementation (a tolerance definie)
- la marque Progress Consulting reste immediatement reconnaissable

