import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <p className="text-xs" style={{ color: "var(--pn-coral)" }}>
        PREP NURSE · Your dashboard · runs on your PC
      </p>
      <h1 className="mt-1 font-serif text-3xl">Good evening, Mary</h1>
      <p className="opacity-70">
        What am I learning? How am I doing? What is weak? What next?
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <div className="flex flex-wrap gap-2 text-xs text-white">
          <span
            className="rounded-full px-3 py-1"
            style={{ background: "var(--pn-lilac)" }}
          >
            Medical-Surgical Nursing
          </span>
          <span
            className="rounded-full px-3 py-1"
            style={{ background: "var(--pn-mint)" }}
          >
            Cardiovascular
          </span>
        </div>
        <h2 className="mt-2 text-xl">Hypertension — Continue Learning</h2>
        <p className="opacity-80">
          High blood pressure harms heart, brain, and kidneys over time. Nurses
          check BP well, watch for headache and vision changes, and teach salt,
          activity, and daily drugs.
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link
            href="/learn/hypertension"
            className="inline-block rounded-xl px-4 py-2 text-white"
            style={{ background: "var(--pn-lagoon)" }}
          >
            Learn the topic first
          </Link>
          <Link
            href="/practice"
            className="inline-block rounded-xl border px-4 py-2"
          >
            Or practise questions now
          </Link>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Link href="/learn" className="rounded-2xl border p-4">
          <strong>Learn — the full school</strong>
          <p className="opacity-70 text-sm">
            Each topic broken down + drug doses + patient case + questions.
          </p>
        </Link>
        <Link href="/curriculum" className="rounded-2xl border p-4">
          <strong>Subjects — body systems map</strong>
          <p className="opacity-70 text-sm">
            All Med-Surg systems and conditions. ✓ = lesson ready.
          </p>
        </Link>
        <Link href="/practice" className="rounded-2xl border p-4">
          <strong>Practice — Questions</strong>
          <p className="opacity-70 text-sm">
            Quick, topic, and timed questions with full explanations.
          </p>
        </Link>
        <Link href="/exams" className="rounded-2xl border p-4">
          <strong>Exam Prep — Tests</strong>
          <p className="opacity-70 text-sm">
            Mock, subject, and comprehensive tests under time.
          </p>
        </Link>
        <Link href="/progress" className="rounded-2xl border p-4">
          <strong>Progress — My level</strong>
          <p className="opacity-70 text-sm">
            Scores per topic, weak areas, revise links, daily goals.
          </p>
        </Link>
        <Link href="/search" className="rounded-2xl border p-4">
          <strong>Search — Find anything</strong>
          <p className="opacity-70 text-sm">
            Lessons and questions by keyword.
          </p>
        </Link>
        <Link href="/flashcards" className="rounded-2xl border p-4">
          <strong>Flashcards — Quick facts</strong>
          <p className="opacity-70 text-sm">
            Drugs, numbers, and must-know facts. Tap to flip.
          </p>
        </Link>
        <div className="rounded-2xl border p-4">
          <strong>Today&apos;s Goal — 20 questions</strong>
          <p className="opacity-70 text-sm">
            7 of 20 done · 68% accuracy · Needs attention: Antibiotics
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs opacity-60">
        <Link href="/" className="underline">
          ← Back to welcome page
        </Link>{" "}
        · Educational information only — not medical advice.
      </p>
    </div>
  );
}
