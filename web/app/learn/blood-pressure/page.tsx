import Link from "next/link";

export default function BloodPressureLesson() {
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
          Fundamentals of Nursing
        </span>
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-mint)" }}
        >
          Vital Signs
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Measuring Blood Pressure</h1>
      <p className="opacity-70">
        A nursing skill: correct cuff, correct position, correct reading.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn — purpose</strong>
        <p>
          Correct BP finds hypertension early and guides drugs. Wrong cuff or
          position gives wrong numbers and wrong treatment.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand — preparation</strong>
        <p>
          Rest 5 minutes. No coffee, smoking, or exercise 30 minutes before.
          Empty bladder. Sit with back supported, feet flat, arm at heart level.
          Use the right cuff: bladder covers 80% of arm; small cuff reads falsely
          high.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply — procedure</strong>
        <p>
          Place cuff 2–3 cm above elbow crease. Inflate 20–30 above expected
          systolic. Deflate slowly (2–3 mmHg per second). First sound =
          systolic, silence = diastolic. Wait 1–2 minutes, repeat, record the
          average with arm, position, and cuff size.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Safety + documentation</strong>
        <p>
          Never measure through clothing on the same arm as a drip, fistula, or
          after breast surgery on that side. Report very high (≥180/120) or very
          low with symptoms at once.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember: rest, right cuff, heart level, slow deflate, repeat and
          record. Related lesson:{" "}
          <Link href="/learn/hypertension" className="underline">
            Hypertension
          </Link>
          .
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — follow your school and ward policy.
      </p>
    </div>
  );
}
