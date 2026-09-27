import Link from "next/link";

export default function DiabetesLesson() {
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
          Endocrine
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Diabetes Mellitus</h1>
      <p className="opacity-70">
        Course, then system, above the topic — as the PRD design note requires.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn</strong>
        <p>
          Diabetes = blood sugar stays too high because insulin is missing
          (Type 1) or does not work well (Type 2). Normal fasting sugar is about
          70–100 mg/dL; diabetes is fasting ≥ 126 mg/dL on repeat checks.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand</strong>
        <p>
          Insulin moves sugar from blood into cells. Without it, sugar stays in
          blood while cells starve. Causes: Type 1 — body attacks insulin
          cells; Type 2 — overweight, low activity, family history, age.
          Warning signs: much urine, much thirst, hunger, tiredness, weight
          loss, slow wound healing, blurry vision.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply</strong>
        <p>
          A 55-year-old drinks water all day, urinates many times at night, and
          has a foot sore that will not heal. Fasting sugar is 210 mg/dL. The
          nurse checks ABCs, asks about thirst, urination, weight change,
          medicines, and diet, checks feet and hydration, and arranges urgent
          review — new likely diabetes needing confirmation and teaching.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Nursing management</strong>
        <p>
          Check sugar as ordered, give drugs/insulin safely (right patient,
          drug, dose, time, route), watch for low sugar (sweating, shaking,
          confusion — give fast sugar if awake and allowed), care for feet daily,
          teach diet, exercise, and taking drugs every day.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember: pee much, drink much, tired, slow healing → think sugar.
          Low sugar is the urgent danger during treatment — know its signs.
        </p>
        <p>
          Next:{" "}
          <Link href="/practice" className="underline">
            practise one question
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
