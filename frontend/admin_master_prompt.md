Objectif :
Ajouter un espace administrateur minimal au projet existant, sans modifier ni casser le site public actuel.

Contraintes absolues :
- Conserver intégralement le site existant.
- Ne pas modifier les questionnaires actuels.
- Ne pas refactoriser massivement le projet.
- Créer un espace admin isolé via de nouvelles routes.
- Respecter l’identité visuelle, les patterns UI, le ton et l’esthétique déjà présents dans le site.
- Ne pas produire un dashboard générique de type template SaaS : il doit rester cohérent avec l’univers Progress Consulting.

Mission :
Créer un premier espace administrateur composé de :
1. une route `/admin` qui redirige vers `/admin/login`
2. une page `/admin/login`
3. une page `/admin/dashboard`

Exigence design :
Avant d’implémenter les pages, analyser les composants, les styles, les couleurs, les espacements, la hiérarchie typographique et les patterns existants du site pour réutiliser au maximum les briques déjà présentes.
L’espace admin doit sembler faire partie du même produit et de la même identité de marque.

Exigence architecture :
- Isoler les nouvelles pages admin du site public.
- Créer des composants réutilisables si nécessaire, mais sans refonte large du projet.
- Préparer une structure compatible avec une authentification réelle plus tard.
- Pour l’instant, privilégier une architecture propre plutôt qu’une auth définitive.

Livrables attendus :
- nouvelles routes admin
- page login admin
- page dashboard admin
- composants UI réutilisés ou ajoutés si nécessaire
- structure de code claire pour préparer la suite

Important :
Travailler par petites étapes, avec des changements reviewables.
Ne pas toucher au comportement du site public hors ajout des routes admin.