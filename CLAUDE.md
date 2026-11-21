# Twinstack monorepo

- `frontend/` — Next.js site. Read `frontend/AGENTS.md` before changing frontend code (this Next.js version has breaking changes).
- `backend/` — Express 5 + TypeScript (ESM, `module: nodenext`, so relative imports need `.js` extensions). `src/app.ts` builds the app; `src/server.ts` only starts it, so the app can also be wrapped for AWS Lambda.
- Each folder has its own `package.json`; run npm commands inside that folder.
- Backend auth: hardcoded admin login (`src/config.ts`) → JWT via `jose` (`src/auth.ts`, `requireAdmin`). Client data lives behind `src/store/clients.ts` (local JSON now; swap for DynamoDB later).
- Frontend calls the API from the browser via `src/lib/api.ts` (`NEXT_PUBLIC_API_URL`); admin UI is `src/app/admin` + `src/components/AdminPanel.tsx`.
