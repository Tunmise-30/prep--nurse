# Prep Nurse — Web App (local-first)

ND/HND nursing learning companion. Runs on your PC — no cloud vendor required.

## Run it

```bash
npm run dev
```

Open http://localhost:3000 with your browser.

Pages auto-update as you edit files in `app/`.

## Stack (per PRD technical note)

- Next.js (App Router) + TypeScript + Tailwind — UI and API in one app
- PostgreSQL (Docker) + Prisma — coming next for real accounts
- Better Auth — coming next (sessions in our Postgres)
- MinIO (local, S3-compatible) — coming next for file uploads

Never Vercel, Supabase, or Neon for this project (PRD decision).

## Pages now

- `/` landing · `/dashboard` home · `/onboarding` join form
- `/curriculum` subjects + body-systems map
- `/learn/*` lessons (hypertension, heart-failure, diabetes, stroke,
  pneumonia, hand-hygiene, blood-pressure, loop-diuretics)
- `/practice` quiz (quick/topic/timed) · `/scenarios/heart-failure` case
- `/exams` mock + subject + comprehensive tests
- `/progress` scores + goals · `/search` · `/flashcards`
