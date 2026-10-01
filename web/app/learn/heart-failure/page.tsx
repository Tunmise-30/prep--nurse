import Link from "next/link";

export default function HeartFailureLesson() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
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
      <h1 className="mt-1 font-serif text-3xl">Heart Failure</h1>
      <p className="opacity-70">
        Course, then system, above the topic — as the PRD design note requires.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn</strong>
        <p>
          Heart failure = the heart cannot pump enough blood for the body&apos;s
          needs. Blood backs up into lungs (breathlessness, crackles) and body
          (swollen feet, weight gain).
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand</strong>
        <p>
          Causes: hypertension, heart attack, valve disease, too much alcohol.
          Left-side failure → lungs fill (dyspnea, lying flat is hard, frothy
          sputum). Right-side → body swells (ankles, liver, neck veins). Daily
          weight is the early warning: +1–2 kg in 2 days means fluid, not fat.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply</strong>
        <p>
          A 65-year-old admitted with heart failure says “I cannot breathe.”
          The nurse sits the patient upright, checks airway, breathing,
          circulation, oxygen, BP, pulse, breathing rate, lung sounds, and calls
          for urgent help — then gives ordered oxygen and diuretics and records
          strict fluid balance.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Nursing management</strong>
        <p>
          Daily weights same scale and clothes, limit salt and fluids as
          ordered, watch urine output, check breathing and swelling each shift,
          teach: take drugs daily, report 1–2 kg gain, more breathlessness, or
          waking at night gasping.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember: weight up + breathing worse + swelling = fluid overload.
          Upright + oxygen + report fast is the priority.
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
