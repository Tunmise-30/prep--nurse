# PREP NURSE

A dedicated learning, practice and examination-preparation platform for ND/HND nursing students.

## Purpose

Prep Nurse helps nursing students move beyond memorising lecture notes by enabling them to:

- Learn nursing subjects and concepts systematically
- Understand diseases, conditions, medications and nursing procedures
- Apply knowledge to realistic patient situations
- Practise using different question formats
- Prepare for ND/HND examinations
- Identify weak areas and improve them
- Monitor learning progress over time

The product bridges the gap between **classroom learning, examination preparation and practical nursing knowledge**.

Core promise: **Learn → Apply → Practise → Improve** — from "I don't understand diabetes" to "I understand it, can recognise it in a patient, know the nursing priorities, and can answer examination questions about it."

## Target Users

Primary users (initial focus):

- ND nursing students (Nigeria)
- HND nursing students (Nigeria)

Designed for all levels — from beginners learning a topic for the first time to students revising for examinations.

Educational philosophy: **Nigerian-focused + internationally informed (default: Both)**. Curriculum stays appropriate for ND/HND, while relevant topics explain internationally recognised nursing principles. Local vs international context is clearly identified where standards differ.

## Main Features

### 1. LEARN
Structured nursing education: **Subject → Topic → Lesson**, also accessible via Diseases/conditions, Nursing skills, Pharmacology, Clinical concepts, and Search.

Lesson pattern: **LEARN → UNDERSTAND → APPLY → PRACTISE → REVIEW**

Lesson coverage:
- Disease/Condition: definition, causes, risk factors, pathophysiology, signs/symptoms, assessment, investigations, medical + nursing management, medications, complications, patient education, prevention
- Nursing Skills: purpose, indications, precautions, equipment, procedure, infection prevention, safety, documentation, complications, evaluation
- Pharmacology: class, mechanism, indications, dosage principles, routes, side/adverse effects, contraindications, interactions, nursing responsibilities, patient education (educational only — not prescribing advice)

### 2. PRACTICE
- Objective: MCQ, multiple-response, true/false, matching, fill-in-the-gap
- Clinical: scenarios, case studies, prioritisation, intervention, assessment, medication questions
- Interactive clinical scenarios (progressive disclosure: e.g. 65-year-old with heart failure → reports dyspnea → vitals → "What should the nurse do next?")
- Rich feedback: correct answer, explanation, why correct, why others incorrect, nursing principle, related topic to review
- Modes: Quick (5/10/20), Topic, Subject, Weak-Area, Mixed, Clinical, Timed

### 3. EXAM PREP
Distinct from ordinary learning:
- Mock examinations under realistic conditions
- Past questions (where legally/educationally appropriate)
- Subject tests, Comprehensive tests, Timed tests
- Examination review: score, correct/missed, topics of mistakes, time spent, areas for revision
- Optional diagnostic assessment for new students + study plans (by exam date, subjects, time, weak areas)

### 4. PROGRESS
Answers: "Where am I now, and what should I work on next?"
- Topics completed, subjects studied, questions attempted, accuracy, quiz/mock scores
- Strong/weak areas, recently studied, improvement over time, consistency, exam readiness
- Adaptive revision recommendations (e.g. Pharmacology: Strong, Med-Surg: Needs revision → recommended actions)
- Goals/streaks: study time, topics, questions, sessions — focused on progress, mastery, consistency (not excessive competition)

### Supporting Features (MVP)
Search (lessons, topics, questions, scenarios, flashcards), Bookmarks, Review List (incorrect), Difficult Topics, Personal Notes, Flashcards (drugs, definitions, signs, labs, principles, anatomy), Study Goals, Notifications/Reminders

### Later (post-MVP)
Interactive simulations, AI tutor / personalised quizzes, voice learning, advanced adaptivity, community/study groups, lecturer/instructor + institutional accounts, performance reports, more pathways.

## Product Principles
1. Does it help the student understand nursing?
2. Does it help the student apply nursing knowledge?
3. Does it help the student prepare for an examination?
4. Does it help the student identify and correct weaknesses?

## Content Quality
Healthcare education content must be accurate, evidence-informed, nursing-focused, level-appropriate, clearly written, regularly reviewed, referenced where necessary, and consistent with applicable standards. Clear distinction between educational information and individual patient medical advice.

## Project Status

Working local-first prototype — see `web/`.

**Implemented (all routes build + lint clean):**
- **Learn**: hub by body system + 19 full lessons (diseases, nursing skills, pharmacology) with drug regimens, patient cases, bookmarks and per-lesson notes
- **Practice**: 7 modes — Quick, Topic, Subject, Weak-Area (auto from <70% topics + repeat misses), Mixed, Clinical (58 tagged patient cases), Timed — 5/10/20 questions per session, 80 questions with full explanations
- **Scenarios**: 5 interactive progressive-disclosure cases (heart failure, hypoglycemia, stroke, asthma, diarrhoea)
- **Exam Prep**: mock, subject, and comprehensive tests with timed runner and full review
- **Progress**: per-topic accuracy, weak-area flags (<70%), daily goals
- **Onboarding**: full wizard — program (ND/HND) → level → current subjects → difficult areas → goals → knowledge preference (Nigerian/International/Both, default Both), saved to localStorage
- **Diagnostic assessment**: 20 mixed questions across all subjects → "Strong in X, revise Y" with per-subject scores, weak topics, and recommended next steps
- **Supporting**: Search, Flashcards, Saved lessons + notes, live Dashboard (real-time goal progress, weak areas, recommendations)
- **Study plans**: exam date + subjects + sessions/week + focus areas → day-by-day schedule that weights weak topics first, with tick-off tracking
- **Premium**: Paystack **test-mode** flow (init/verify API + success page) — no real money moves

Progress/profile/bookmarks are stored in the browser (localStorage) on this prototype — there is no server database yet.

**Stack note:** the originally planned local stack (**Next.js** + **PostgreSQL** + **Better Auth** + **MinIO**, no Vercel) remains the intended direction for real accounts and server-side data; the prototype currently runs on static data modules (`web/app/data/`) so it deploys anywhere Next.js runs (Netlify config included). See `IMPLEMENTATION_PLAN.md`.

## Getting Started

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

Premium flow needs Paystack **test** keys: copy `web/.env.example` to `web/.env.local` and paste your free test keys from dashboard.paystack.com (Settings → API Keys → Test).
