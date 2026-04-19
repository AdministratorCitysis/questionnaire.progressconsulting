# Admin Space - Emplacement

L'espace administrateur est isolé dans le frontend, sous:

- `frontend/src/admin/components`
- `frontend/src/admin/pages`

Routage ajouté dans `frontend/src/App.js`:

- `/admin` -> redirection vers `/admin/login`
- `/admin/login` -> page de connexion admin
- `/admin/dashboard` -> page dashboard admin

Ce choix conserve toutes les routes publiques existantes sans modifier leur comportement, tout en séparant clairement la zone admin dans un module dédié.

