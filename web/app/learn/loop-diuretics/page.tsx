import Link from "next/link";

export default function LoopDiureticsLesson() {
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
          Pharmacology
        </span>
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-mint)" }}
        >
          Cardiovascular Drugs
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Loop Diuretics (Furosemide)</h1>
      <p className="opacity-70">
        A drug lesson: what it does, dangers to watch, and nursing duties.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn — class and action</strong>
        <p>
          Loop diuretics (e.g. furosemide) make kidneys pass more salt and
          water as urine. Less fluid → lower BP and easier breathing in heart
          failure and swelling.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand — side effects</strong>
        <p>
          Much urine, thirst, low BP, dizziness on standing. Danger: low
          potassium (weakness, cramps, irregular pulse), low sodium, dehydration,
          kidney strain, hearing problems with fast IV push or high doses.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply — nursing responsibilities</strong>
        <p>
          Weigh daily, check BP lying and standing, check pulse, breathing, and
          swelling. Record fluids in and urine out. Check potassium and kidney
          labs as ordered. Give in the morning so the patient sleeps at night.
          Push IV slowly per policy.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Patient teaching</strong>
        <p>
          Take in the morning, stand up slowly, eat potassium foods if advised,
          report muscle weakness, cramps, very little urine, or ringing ears.
          Never double a missed dose without asking.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember: water out → weight down → breathing better, but watch
          potassium, BP, and kidneys. Related:{" "}
          <Link href="/learn/heart-failure" className="underline">
            Heart Failure
          </Link>
          .
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational nursing knowledge only — never prescribe or change a real
        patient&apos;s drugs. Follow orders and local policy.
      </p>
    </div>
  );
}
