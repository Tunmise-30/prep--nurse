import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <p className="text-xs" style={{ color: "var(--pn-coral)" }}>
        PREP NURSE · Phase 0 web app · runs on your PC
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
        <Link
          href="/learn/hypertension"
          className="mt-2 inline-block rounded-xl px-4 py-2 text-white"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Open lesson
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Link href="/onboarding" className="rounded-2xl border p-4">
          <strong>1 · Join / Onboarding</strong>
          <p className="opacity-70 text-sm">
            Pick ND/HND, level, subjects. Saved on this PC for now.
          </p>
        </Link>
        <Link href="/curriculum" className="rounded-2xl border p-4">
          <strong>2 · Subjects</strong>
          <p className="opacity-70 text-sm">
            See the ND/HND subject map. Start with Med-Surg.
          </p>
        </Link>
        <Link href="/practice" className="rounded-2xl border p-4">
          <strong>3 · Practice question</strong>
          <p className="opacity-70 text-sm">
            One question with full explanation feedback.
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
        Educational information only — not medical advice. No sign-in or
        database in this step; they come next (local PostgreSQL + Better Auth +
        MinIO).
      </p>
    </div>
  );
}
