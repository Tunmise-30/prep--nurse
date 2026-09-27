import Link from "next/link";

export default function HypertensionLesson() {
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
          Medical-Surgical Nursing
        </span>
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-mint)" }}
        >
          Cardiovascular
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Hypertension</h1>
      <p className="opacity-70">
        Course, then system, above the topic — as the PRD design note requires.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn</strong>
        <p>Hypertension = BP ≥ 140/90 mmHg on repeated checks.</p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand</strong>
        <p>
          The heart pumps harder against tight vessels. Kidneys hold salt and
          water. Risk rises with age, family history, salt, alcohol, and low
          activity.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply</strong>
        <p>
          A patient arrives with severe headache, blurred vision, BP 190/120.
          Check airway, breathing, circulation first, repeat BP, and call for
          urgent help — possible hypertensive emergency.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Practise</strong>
        <p>
          Try the{" "}
          <Link href="/practice" className="underline">
            practice question
          </Link>
          .
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
