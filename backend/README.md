# Backend — Progress Consulting Questionnaire Platform

NestJS REST API powering the admin area and future questionnaire platform.

**Stack:** NestJS 10 · Prisma 5 · PostgreSQL 16 · JWT auth · TypeScript

---

## Prerequisites

- Node.js >= 18
- npm
- Docker + Docker Compose (for local PostgreSQL)

---

## First-time setup

### 1. Clone environment file

```bash
cp .env.example .env
```

Edit `.env` and set at minimum:

```
JWT_SECRET=<a long random string — see below>
```

Generate a strong secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

### 2. Start the database

```bash
docker-compose up -d
```

PostgreSQL will be available at `localhost:5432` (database: `progressconsulting`).

### 3. Install dependencies

```bash
npm install
```

### 4. Generate Prisma client

```bash
npm run db:generate
```

### 5. Run database migrations

```bash
npm run db:migrate
```

When prompted for a migration name, use something like `init_admin`.

### 6. Seed the first admin

```bash
npm run db:seed
```

This creates an admin account using the values from `.env`:
- `ADMIN_SEED_EMAIL` (default: `admin@progressconsulting.be`)
- `ADMIN_SEED_PASSWORD` (default: `ChangeMe_2024!`)

> **Change the password immediately after first login.**

### 7. Start the development server

```bash
npm run start:dev
```

The API is available at: `http://localhost:3001/api`

---

## API Endpoints

All endpoints are prefixed with `/api`.

### Public

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/auth/login` | Admin login — returns JWT |

**Request body:**
```json
{
  "email": "admin@progressconsulting.be",
  "password": "ChangeMe_2024!"
}
```

**Response:**
```json
{
  "access_token": "<JWT>",
  "admin": {
    "id": "uuid",
    "email": "admin@progressconsulting.be",
    "name": "Admin"
  }
}
```

### Protected (requires `Authorization: Bearer <token>`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/auth/me` | Current admin profile |
| `GET` | `/admin/profile` | Current admin profile (admin area) |

---

## Testing authentication locally (curl)

```bash
# 1. Login
TOKEN=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@progressconsulting.be","password":"ChangeMe_2024!"}' \
  | node -e "process.stdin.resume();let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>console.log(JSON.parse(d).access_token))")

echo "Token: $TOKEN"

# 2. Get current admin
curl -s http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer $TOKEN" | node -e "process.stdin.resume();let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>console.log(JSON.stringify(JSON.parse(d),null,2)))"
```

---

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Start with hot-reload (development) |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run start` | Start compiled server (production) |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests (requires DB) |
| `npm run test:cov` | Run tests with coverage report |
| `npm run db:generate` | Regenerate Prisma client |
| `npm run db:migrate` | Create and apply a new migration |
| `npm run db:migrate:deploy` | Apply pending migrations (production) |
| `npm run db:seed` | Create first admin from `.env` |
| `npm run db:studio` | Open Prisma Studio (DB browser) |

---

## Project structure

```
backend/
├── prisma/
│   ├── schema.prisma       # Database schema (Admin model)
│   └── seed.ts             # Creates first admin
├── src/
│   ├── main.ts             # Bootstrap (CORS, validation, port)
│   ├── app.module.ts       # Root module
│   ├── config/
│   │   └── configuration.ts  # Typed config from .env
│   ├── prisma/
│   │   ├── prisma.service.ts # PrismaClient wrapper
│   │   └── prisma.module.ts  # Global module
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts  # POST /auth/login, GET /auth/me
│   │   ├── auth.service.ts     # Login logic, password check
│   │   ├── dto/
│   │   │   └── login.dto.ts    # Validated input
│   │   ├── guards/
│   │   │   └── jwt-auth.guard.ts
│   │   └── strategies/
│   │       └── jwt.strategy.ts # Validates Bearer tokens
│   └── admin/
│       ├── admin.module.ts
│       ├── admin.controller.ts # GET /admin/profile (protected)
│       └── admin.service.ts
└── test/
    ├── auth.e2e-spec.ts
    └── jest-e2e.json
```

---

## Connecting the React frontend

Update `frontend/src/admin/services/admin-auth-service.js` to call the real backend:

```js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export async function authenticateAdmin({ email, password }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw { code: res.status === 401 ? 'INVALID_CREDENTIALS' : 'UNKNOWN', detail: err };
  }

  const data = await res.json();
  localStorage.setItem('admin_token', data.access_token);
  return data;
}
```

Add `REACT_APP_API_URL=http://localhost:3001/api` to `frontend/.env`.

---

## Production checklist

- [ ] Set `JWT_SECRET` to a cryptographically strong value
- [ ] Set `NODE_ENV=production`
- [ ] Use `npm run db:migrate:deploy` (not `migrate dev`) in CI/CD
- [ ] Set `CORS_ORIGIN` to the deployed frontend URL
- [ ] Change `ADMIN_SEED_PASSWORD` before seeding
- [ ] Disable `db:studio` access in production
