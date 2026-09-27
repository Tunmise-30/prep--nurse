# PREP NURSE — Detailed Implementation Plan

Derived from full PRD (`Untitled document (2).md`, 35 sections).
Repo: https://github.com/Tunmise-30/prep--nurse.git

Core promise (Sec 30): **Learn → Apply → Practise → Improve**
> "I don't understand diabetes" → "I understand it" → "I can recognise it in a patient" → "I know nursing priorities" → "I can answer exam questions."

Product principles gate — every feature must satisfy ≥1 (Sec 33):
1. Help understand nursing? 2. Help apply? 3. Help exam prep? 4. Help identify/correct weaknesses?

---

## 0. Architecture Baseline (to lock before Phase 0)

**Recommended MVP stack:**
- Web: Next.js + TypeScript + Tailwind (PWA-ready, mobile-first for Nigerian students)
- API: Next.js API routes or NestJS / Supabase
- DB: Postgres + Prisma — relational fits Subject→Topic→Lesson, questions, attempts
- Auth: Auth.js / Supabase Auth (email + Google)
- Search: Postgres Full-Text Search v1 → Meilisearch/Typesense later
- Jobs/Reminders: cron + push/email (Resend/FCM)
- Hosting: Vercel + Supabase/Neon, CI: lint + typecheck + test + preview

**Repo layout:**
```
/web /api /content/lessons /content/questions /prisma /docs
README.md
Untitled document (2).md (PRD source)
IMPLEMENTATION_PLAN.md (this file)
```

**Global data model (evolutionary):**
`users, profiles, subjects, topics, lessons, lesson_blocks, questions, options, explanations, exams, exam_attempts, attempt_answers, progress_snapshots, bookmarks, notes, flashcards, goals, streaks, study_plans, notifications`

**Non-negotiables:**
- Nigerian-focused + internationally informed, default Both (Sec 4). Every lesson block tagged `context: local | international | both`.
- Educational vs medical-advice disclaimer, drug content educational only — no prescribing (Sec 7, 21).
- Content workflow: `draft → clinical_review → published` with references, versioned (Sec 21).

---

## Phase 0 — Foundation + Onboarding (Weeks 1-2)
**PRD: Sec 4, 18, 20, 26, 28, 29**

### 0.1 Objectives
App shell, auth, learning context, curriculum map, dashboard skeleton.

### 0.2 Detailed outputs
1. **Auth + Onboarding wizard:**
   - Steps: ND/HND → level/year → current subjects → difficult areas → goals → knowledge preference (Nigerian / International / Both, default Both)
   - Tables: `users, profiles{program, level, subjects[], weak_areas[], goals[], knowledge_pref}`
   - Validation: cannot reach dashboard without program + ≥1 subject
2. **Diagnostic assessment (optional, Sec 29):**
   - 20-30 mixed Qs across Fundamentals, Anatomy, Pharma, Med-Surg
   - Output screen: "Your starting point — Strong in X, revise Y" + recommended topics
   - Tables: `diagnostic_results{scores_by_subject, weak_topics[]}`
3. **Curriculum seed (Sec 18, 20):**
   - 19 categories seeded: Anatomy/Physiology, Fundamentals, Med-Surg, Pharma, Maternal/Child, Community, Mental Health, Paeds, Geriatric, Nutrition, Micro, Patho, Research, Ethics, Leadership, First Aid/Emergency, Health Ed, Procedures/Skills
   - Map to ND/HND curriculum (not arbitrary list). Tag local vs international where guidelines differ.
4. **Dashboard shell (Sec 26):**
   - Cards: Continue Learning, Today's Goal, Progress (accuracy), Needs Attention, Recommended Practice, Upcoming (mock)
   - Answers: What learning? How performing? Weak at? Next?

### 0.3 Acceptance criteria
- [ ] New user completes onboarding <3 min, profile saved
- [ ] Diagnostic produces recommendations
- [ ] Curriculum browsable Subject→Topic

---

## Phase 1 — LEARN MVP (Weeks 3-6)
**PRD: Sec 5, 6, 7, 8, 19, 21**

### 1.1 Objectives
Structured lessons that teach + apply, not textbook copy.

### 1.2 Detailed outputs
1. **IA:** Primary `Subject → Topic → Lesson`, alternate entries: Subjects, Topics, Diseases, Skills, Pharma, Concepts, Search. Example: Med-Surg → Cardio → Hypertension → understanding, assessment, management, meds, education, practice (Sec 5).
2. **Lesson template (LEARN → UNDERSTAND → APPLY → PRACTISE → REVIEW, Sec 6):**
   - LEARN: concept overview; UNDERSTAND: principles breakdown; APPLY: patient vignette; PRACTISE: 3-5 inline Qs; REVIEW: summary + mistakes + weak links
   - Chunked sections, headings, summaries, clinical examples
3. **Coverage schemas (Sec 7):**
   - Disease (17 fields): definition, causes, risk factors, classification, patho, signs, assessment, investigations, medical + nursing management, meds, complications, education, prevention, considerations
   - Skill (11 fields): purpose through evaluation + infection prevention, safety, documentation
   - Pharma (11 fields): class through patient education + disclaimer
4. **Clinical application (Sec 8, 19):**
   - Replace "What is hypertension?" with "BP 190/120 + headache + blurred vision — assess first? Which finding needs immediate attention?"
   - Exam → Clinical → Professional chain (e.g. infection control → hand hygiene → patient safety)
5. **Content pipeline:**
   - Markdown + frontmatter in `/content`, review workflow, references
   - Seed: 15-20 lessons (Fundamentals + Med-Surg: Hypertension, Heart Failure, Diabetes; Pharma basics; 2-3 skills e.g. vitals, hand hygiene, IV calculation)

### 1.3 Acceptance
- [ ] Lesson viewer tracks completion, saves position
- [ ] Every major lesson has APPLY block + PRACTISE Qs
- [ ] Pharma disclaimer present

---

## Phase 2 — PRACTICE MVP (Weeks 7-9)
**PRD: Sec 9, 10, 11**

### 2.1 Question engine
- Objective: MCQ, multiple-response, true/false, matching, fill-gap
- Clinical: scenarios, case studies, prioritisation, intervention, assessment, medication
- Schema: `questions{stem, format, difficulty, topic_id, context, vitals?}, options{correct}, explanations{why_correct, why_others_wrong, principle, review_topic}`
- Seed: 300-500 vetted Qs

### 2.2 Feedback (Sec 10) — must never be just Correct/Wrong
Show: correct answer, explanation, why correct, why others incorrect, nursing principle, related topic. Difficult Qs show reasoning process. Loop: Wrong → understand → learn → retry.

### 2.3 Modes (Sec 11)
Quick 5/10/20, Topic, Subject, Weak-Area (auto from <70% + repeat misses), Mixed, Clinical, Timed (exam conditions)

### 2.4 Interactive scenario v1 (signature, Sec 9)
Progressive disclosure player: Patient header (65yo heart failure) → reports dyspnea → vitals → assessment → "What next?" → decision → explanation. 3-5 seeds.

### Acceptance
- [ ] All 7 modes work, timed mode enforces clock
- [ ] Every attempt stores answer + time + topic for Progress
- [ ] Scenario player completes end-to-end

---

## Phase 3 — EXAM PREP MVP (Weeks 10-11)
**PRD: Sec 12**

1. Mock Examinations (blueprint-weighted, realistic conditions)
2. Past Questions (only where legally/educationally appropriate, tagged year/source)
3. Subject Tests, Comprehensive (multi-subject), Timed Tests
4. Examination Review: score, correct/missed, topics of mistakes, time spent, areas for revision + CTA "Revise weak topics"
- Tables: `exams{blueprint, duration}, exam_attempts, attempt_answers`

Acceptance: student can take timed mock → see review → weak topics link to Learn/Practice.

---

## Phase 4 — PROGRESS + Supporting MVP (Weeks 12-14)
**PRD: Sec 13, 14, 15, 16, 17, 24, 26, 27**

### 4.1 Progress (Sec 14)
Track: topics completed, subjects, attempts, accuracy, quiz/mock scores, strong/weak, recent, improvement, consistency, readiness. Answer: "Where am I, what next?"

### 4.2 Adaptive Revision (Sec 13, personal companion)
Weekly digest e.g. Pharma Strong, Med-Surg Needs revision, Fluids Needs attention → Recommended: 1. Review Fluids 2. 10 Qs electrolytes 3. 1 scenario 4. Retake. Rule-based v1.

### 4.3 Goals/Streaks/Motivation (Sec 15, 25)
Goals: 30 min/day, 1 topic, 20 Qs, 3 sessions/week, finish subject pre-exam. Celebrate milestones, avoid shaming low scorers — progress/mastery/consistency.

### 4.4 Revision System (Sec 16)
Bookmarks (lessons/Qs), Review List (auto incorrect), Difficult Topics (user-marked), Personal Notes (per lesson), Flashcards (drugs, definitions, signs, labs, principles, anatomy, facts)

### 4.5 Search (Sec 17)
Query e.g. "hypovolemic shock", "loop diuretics", "IV infusion rate" → lessons, topics, Qs, scenarios, flashcards. FTS v1.

### 4.6 Study Plans (Sec 24)
Inputs: exam date, subjects, time/day, weak areas, sessions → schedule e.g. 28 days: W1 Med-Surg, W2 Pharma+Anatomy, W3 Community+Mental Health, W4 mixed + mocks. Editable.

### 4.7 Dashboard + Notifications (Sec 26, 27)
Home: "Good evening, Mary — Continue Heart Failure, Today's Goal 20 Qs, 68% accuracy, Needs Attention Antibiotics, Recommended 10 Qs, Upcoming HND Mock." Reminders configurable for sessions, unfinished lessons, revision, mocks.

Acceptance: full journey Sec 28 works end-to-end and writes to Progress.

---

## Phase 5 — QA, Safety & MVP Launch (Weeks 15-16)
**PRD: Sec 21, 34**

- Clinical accuracy review, local/international labels, drug safety, disclaimers
- Analytics (Sec 34): lessons/QS completed, accuracy delta, repeat-mistake reduction, mock scores, consistency, mastery, retention, satisfaction, confidence
- A11y, performance, PWA offline reading
- Pilot 20-50 ND/HND students → fix top friction → launch

**MVP Done = Sec 31:** Learn (subjects, topics, disease/pharma/procedures + clinical) + Practice (MCQ/MR/case + explanations + topic/weak) + Exam (subject/timed/mock/past) + Progress (scores/accuracy/completed/weak/history) + Search/Bookmarks/Flashcards/Notes/Goals/Notifications.

---

## Phase 6+ — Post-MVP (only after core proven, Sec 32)
1. Full clinical simulations
2. Ask Prep Nurse AI tutor (grounded, Socratic — explain like first time, compare shocks, generate 5 Qs — Sec 23)
3. AI personalised quizzes, voice learning, advanced adaptivity/SRS
4. Community/study groups/peer challenges (moderated, verified content separate — Sec 22)
5. Lecturer/instructor + institutional accounts, lecturer tests, reports
6. More pathways beyond ND/HND

---

## Build Order for Small Team
W1-2: Phase 0 → W3-6: Phase 1 (one subject deep) → W7-9: Phase 2 → W10-12: Phase 3 + thin Phase 4 → Pilot → Expand content → Phase 6.

## Immediate Next Tasks
- [ ] Lock stack + repo structure
- [ ] Finalise ND/HND curriculum map spreadsheet
- [ ] Write 3 exemplar lessons (Hypertension, Heart Failure, Loop Diuretics)
- [ ] Write 50 exemplar Qs with full explanations
- [ ] Implement onboarding + lesson viewer + quiz player skeleton
