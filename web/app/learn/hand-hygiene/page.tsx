import Link from "next/link";

export default function HandHygieneLesson() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/" className="text-sm underline">
        ← Home
      </Link>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-white">
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-lilac)" }}
        >
          Fundamentals of Nursing
        </span>
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-mint)" }}
        >
          Infection Prevention
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Hand Hygiene</h1>
      <p className="opacity-70">
        A nursing skill: purpose, steps, safety, and documentation.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn — purpose</strong>
        <p>
          Clean hands stop germs moving between patients, nurses, and equipment.
          It is the single most important infection-prevention act.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand — when</strong>
        <p>
          Clean hands: before touching a patient, before clean tasks, after body
          fluid risk, after touching a patient, after touching surroundings.
          Use soap and water when hands look dirty or after toilet; otherwise
          alcohol rub is fine if hands look clean.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply — procedure</strong>
        <p>
          Wet, soap, rub palm to palm, backs, between fingers, thumbs, nails —
          40–60 seconds with soap (20–30 with rub) — rinse, dry with clean
          towel, use towel to close tap. Keep nails short, no rings or fake
          nails in clinical areas.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Safety + documentation</strong>
        <p>
          Do not touch face or phone mid-procedure. If you miss a step, redo.
          Document teaching given to patient and family where the chart
          requires it.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember: 5 moments, right time, full 40–60 seconds. Skipped thumbs
          and nails are the common exam trap.
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — follow your school and ward policy.
      </p>
    </div>
  );
}
