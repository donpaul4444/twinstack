# Twinstack Solutions

| Folder | What it is | Run locally |
| --- | --- | --- |
| [`frontend/`](frontend) | Website + admin page — Next.js (static export) | `cd frontend && npm install && npm run dev` → http://localhost:3000 |
| [`backend/`](backend) | API — Node.js + Express + TypeScript | `cd backend && npm install && cp .env.example .env && npm run dev` → http://localhost:4000 |

Run both in separate terminals during development.

## Admin

Open http://localhost:3000/admin and sign in with:

- **Username:** `admin`
- **Password:** `Twinstack@2026`

These are hardcoded defaults in `backend/src/config.ts`. Override them with
`ADMIN_USERNAME`, `ADMIN_PASSWORD` and `JWT_SECRET` in `backend/.env` (do this before deploying).

## API

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| GET | `/health` | — | Health check |
| POST | `/clients` | — | Submit client details `{name, email, interest, budget, message}` |
| POST | `/auth/login` | — | `{username, password}` → `{token}` (valid 8 hours) |
| GET | `/clients` | `Authorization: Bearer <token>` | List all client submissions, newest first |

Submissions are saved to `backend/data/clients.json` (not committed).

```bash
# Submit
curl -X POST localhost:4000/clients -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com","message":"Hello"}'

# Log in and list
TOKEN=$(curl -s -X POST localhost:4000/auth/login -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"Twinstack@2026"}' | sed 's/.*"token":"\([^"]*\)".*/\1/')
curl localhost:4000/clients -H "Authorization: Bearer $TOKEN"
```

## Configuration

- `frontend/.env` → `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:4000`; inlined at build time).
- `backend/.env` → see `backend/.env.example`. `CORS_ORIGINS` must include the website's origin.

## Deployment

- **Frontend:** Vercel, with the project's *Root Directory* set to `frontend`.
- **Backend:** AWS (to be set up). Until then the live contact form shows an error with the email address instead of losing messages.

See [COMPANY_PLAN.md](COMPANY_PLAN.md) for the roadmap.
