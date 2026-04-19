# Progress Consulting — Questionnaire Platform

Application de diagnostic comportemental et managérial pour Progress Consulting.

**Architecture :**
- `frontend/` — React 17 (Create React App), site public + espace admin
- `backend/` — NestJS 10, API REST, PostgreSQL via Prisma, JWT auth

---

## Prérequis

| Outil | Version minimale | Vérification |
|---|---|---|
| Node.js | 18 | `node --version` |
| npm | 9 | `npm --version` |
| Docker Desktop | toute version récente | `docker --version` |

> Docker Desktop doit être **lancé** (icône baleine stable dans la barre des tâches) avant de démarrer la base de données.

---

## Installation — première fois uniquement

### 1. Cloner le dépôt

```bash
git clone <url-du-depot>
cd questionnaire.progressconsulting
```

### 2. Installer les dépendances frontend

```bash
cd frontend
npm install
cd ..
```

### 3. Installer les dépendances backend

```bash
cd backend
npm install
cd ..
```

### 4. Configurer l'environnement backend

Le fichier `.env` est déjà présent dans `backend/`. Si ce n'est pas le cas :

```bash
cd backend
cp .env.example .env
```

Ouvrir `backend/.env` et renseigner au minimum :

```env
JWT_SECRET=<une-longue-chaine-aleatoire>
```

Générer un secret sécurisé :

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

### 5. Configurer l'URL de l'API dans le frontend

Le fichier `frontend/.env` est déjà présent. Si ce n'est pas le cas, le créer :

```bash
echo "REACT_APP_API_URL=http://localhost:3001/api" > frontend/.env
```

---

## Démarrage — chaque fois

Les étapes 6 à 9 ne sont nécessaires qu'**une seule fois** (ou après un `git clean`).  
Pour les lancements habituels, passer directement aux étapes 10 et 11.

### 6. Démarrer la base de données PostgreSQL

```bash
cd backend
docker-compose up -d
```

Vérifier que le conteneur tourne :

```bash
docker ps
# Doit afficher :  progressconsulting_db   postgres:16-alpine   Up
```

### 7. Générer le client Prisma

```bash
cd backend
npm run db:generate
```

### 8. Appliquer les migrations

```bash
cd backend
npm run db:migrate
# Lorsque Prisma demande un nom de migration, saisir : init_admin
```

### 9. Créer le premier compte administrateur

```bash
cd backend
npm run db:seed
```

Crée le compte admin avec les valeurs de `backend/.env` :

| Variable | Valeur par défaut |
|---|---|
| `ADMIN_SEED_EMAIL` | `admin@progressconsulting.be` |
| `ADMIN_SEED_PASSWORD` | `Progress2024!` |
| `ADMIN_SEED_NAME` | `Admin` |

> Modifier le mot de passe dès la première connexion.

---

### 10. Démarrer le backend

```bash
cd backend
npm run start:dev
```

L'API est disponible sur : `http://localhost:3001/api`

Sortie attendue :
```
[backend] API running on http://localhost:3001/api
```

### 11. Démarrer le frontend

Dans un **nouveau terminal** :

```bash
cd frontend
npm start
```

L'application est disponible sur : `http://localhost:3000`

---

## Accès à l'espace admin

| URL | Description |
|---|---|
| `http://localhost:3000/#/admin/login` | Page de connexion admin |
| `http://localhost:3000/#/admin/dashboard` | Tableau de bord (accès protégé) |

Identifiants de développement :

```
Email    : admin@progressconsulting.be
Mot de passe : Progress2024!
```

---

## Endpoints API (backend)

Tous les endpoints sont préfixés par `/api`.

| Méthode | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/auth/login` | Public | Connexion admin — retourne un JWT |
| `GET` | `/auth/me` | Bearer JWT | Profil de l'admin connecté |
| `GET` | `/admin/profile` | Bearer JWT | Profil (zone admin) |

**Exemple — connexion via curl :**

```bash
curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@progressconsulting.be","password":"Progress2024!"}' \
  | node -e "process.stdin.resume();let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>console.log(JSON.parse(d).access_token))"
```

---

## Scripts disponibles

### Frontend (`cd frontend`)

| Commande | Description |
|---|---|
| `npm start` | Démarrer en mode développement (port 3000) |
| `npm run build` | Compiler pour la production |
| `npm test` | Lancer les tests |

### Backend (`cd backend`)

| Commande | Description |
|---|---|
| `npm run start:dev` | Démarrer avec hot-reload (port 3001) |
| `npm run start` | Démarrer le build compilé (production) |
| `npm run build` | Compiler TypeScript vers `dist/` |
| `npm test` | Tests unitaires (Jest) |
| `npm run test:e2e` | Tests end-to-end (nécessite la base de données) |
| `npm run test:cov` | Tests avec rapport de couverture |
| `npm run db:generate` | Régénérer le client Prisma |
| `npm run db:migrate` | Créer et appliquer une migration |
| `npm run db:migrate:deploy` | Appliquer les migrations (production, sans prompt) |
| `npm run db:seed` | Créer le premier admin depuis `.env` |
| `npm run db:studio` | Ouvrir Prisma Studio (interface de la base) |

---

## Structure du projet

```
questionnaire.progressconsulting/
├── frontend/                        # Application React
│   ├── public/
│   ├── src/
│   │   ├── Components/              # Questionnaires publics (existants)
│   │   ├── admin/
│   │   │   ├── components/
│   │   │   │   ├── AdminShell.js         # Layout partagé de l'admin
│   │   │   │   └── ProtectedAdminRoute.js # Garde de route (vérifie le JWT)
│   │   │   ├── context/
│   │   │   │   └── AdminAuthContext.js   # État d'auth + login/logout
│   │   │   ├── pages/
│   │   │   │   ├── AdminLoginPage.js     # Page de connexion
│   │   │   │   └── AdminDashboardPage.js # Tableau de bord
│   │   │   └── services/
│   │   │       └── admin-auth-service.js # Appels API auth
│   │   └── App.js                   # Routage général
│   ├── .env                         # REACT_APP_API_URL
│   └── package.json
│
├── backend/                         # API NestJS
│   ├── prisma/
│   │   ├── schema.prisma            # Schéma de la base (modèle Admin)
│   │   └── seed.ts                  # Création du premier admin
│   ├── src/
│   │   ├── main.ts                  # Bootstrap (CORS, validation, port)
│   │   ├── app.module.ts            # Module racine + rate limiting
│   │   ├── config/
│   │   ├── prisma/                  # Service Prisma (global)
│   │   ├── auth/                    # Login, JWT, guards
│   │   └── admin/                   # Routes protégées admin
│   ├── test/
│   ├── docker-compose.yml           # PostgreSQL local
│   ├── .env                         # Variables d'environnement locales
│   ├── .env.example                 # Template à copier
│   └── package.json
│
└── data/
    └── questionnaires/              # Fichiers JSON des questionnaires existants
```

---

## Variables d'environnement

### `backend/.env`

| Variable | Description | Exemple |
|---|---|---|
| `PORT` | Port du serveur backend | `3001` |
| `NODE_ENV` | Environnement | `development` |
| `CORS_ORIGIN` | Origine autorisée (frontend) | `http://localhost:3000` |
| `DATABASE_URL` | URL de connexion PostgreSQL | voir `.env.example` |
| `JWT_SECRET` | Secret de signature des tokens | chaîne longue et aléatoire |
| `JWT_EXPIRES_IN` | Durée de vie du token | `24h` |
| `ADMIN_SEED_EMAIL` | Email du premier admin | `admin@progressconsulting.be` |
| `ADMIN_SEED_PASSWORD` | Mot de passe du premier admin | à changer après le seed |
| `ADMIN_SEED_NAME` | Nom affiché du premier admin | `Admin` |

### `frontend/.env`

| Variable | Description | Valeur |
|---|---|---|
| `REACT_APP_API_URL` | URL de base de l'API backend | `http://localhost:3001/api` |

---

## Résolution de problèmes courants

**Docker ne démarre pas / `docker-compose up -d` échoue**
→ Ouvrir Docker Desktop et attendre que l'icône baleine soit stable, puis relancer.

**`prisma migrate dev` échoue avec "Can't reach database server"**
→ Le conteneur PostgreSQL n'est pas encore prêt. Attendre 5 secondes et relancer.

**Le frontend affiche "Impossible de joindre le serveur"**
→ Vérifier que le backend tourne sur le port 3001 (`npm run start:dev` dans `backend/`).

**Erreur `JWT_SECRET environment variable must be set`**
→ Le fichier `backend/.env` est absent ou `JWT_SECRET` est vide. Voir l'étape 4.

**L'admin créé par le seed n'existe pas / seed ne fonctionne pas**
→ S'assurer que la migration a bien été appliquée avant de lancer le seed (`npm run db:migrate` d'abord).

**Port 3000 ou 3001 déjà utilisé**
→ Modifier `PORT=XXXX` dans `backend/.env`, et/ou lancer le frontend sur un autre port : `PORT=3002 npm start`.

---

## Checklist de mise en production

- [ ] Générer un `JWT_SECRET` fort (`openssl rand -base64 64`)
- [ ] Passer `NODE_ENV=production`
- [ ] Configurer `CORS_ORIGIN` avec le domaine du frontend déployé
- [ ] Utiliser `npm run db:migrate:deploy` (sans prompt interactif) dans le pipeline CI/CD
- [ ] Changer `ADMIN_SEED_PASSWORD` avant de lancer le seed
- [ ] Ne jamais committer `backend/.env` ou `frontend/.env` dans git
