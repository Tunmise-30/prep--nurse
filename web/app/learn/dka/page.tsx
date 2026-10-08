import Link from "next/link";
import LessonTools from "../LessonTools";

export default function DkaLesson() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/learn" className="text-sm underline">
        ← All lessons
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
      <h1 className="mt-1 font-serif text-3xl">
        Diabetic Ketoacidosis (DKA)
      </h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          DKA = very high sugar + ketones + acid blood,
          from too little insulin. Commonest in type 1
          diabetes; often triggered by infection, missed
          insulin, or new diagnosis. An emergency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Missed or omitted insulin, pump failure, infection
          (commonest trigger), new type 1 diagnosis, trauma,
          some drugs (e.g. steroids).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          No insulin → cells starve despite high sugar →
          body burns fat → ketones build → blood turns
          acidic → deep fast breathing (Kussmaul), vomiting,
          dehydration, confusion, coma.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Sugar usually &gt; 250 mg/dL, thirst, passing
          much urine, nausea/vomiting, tummy pain, deep fast
          breathing, fruity (pear-drop) breath, weakness,
          confusion, coma.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs, sugar, ketones (blood or urine), blood gas
          (acidosis), electrolytes — especially potassium,
          creatinine, vitals, consciousness, infection
          screen (chest, urine, wounds).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          IV fluids to fix dehydration, IV insulin infusion
          (not just injection), potassium replacement
          (insulin drops potassium), treat the trigger
          (e.g. antibiotics), hourly monitoring; watch for
          cerebral oedema in children.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Fluids
              </td>
              <td className="py-2">
                e.g. 0.9% saline IV fast at first, then
                guided by BP, urine, and sodium — per
                protocol.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Insulin</td>
              <td className="py-2">
                e.g. IV insulin infusion (0.1 unit/kg/hour
                style protocol) — never subcutaneous sliding
                scale alone in DKA.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">
                Potassium + trigger
              </td>
              <td className="py-2">
                Potassium in fluids once urine flows and
                labs guide it; antibiotics if infection;
                dextrose added when sugar falls near target.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Example adult doses for learning — always follow the
          prescriber and your local guideline. Nurses never
          prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          IV access, fluids and insulin per protocol, hourly
          vitals + sugar + ketones, strict fluid chart,
          hourly consciousness, watch potassium on the ECG
          (weakness, irregular pulse), report vomiting or
          falling consciousness at once, then teach
          sick-day rules.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Cerebral oedema (children), low-potassium
          arrhythmias, fluid overload, death. Prevention:
          never skip insulin, sick-day rules (keep insulin,
          sip fluids, check sugar + ketones, call early),
          ketone testing at home.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Teen, type 1, vomiting 6 hours, sugar 420 mg/dL,
          deep fast breathing, fruity breath. Nurse calls
          the emergency team, starts IV access and fluids
          per order, checks ketones and potassium, monitors
          hourly, and later teaches sick-day rules with the
          diabetes nurse.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: High sugar + deep fast breathing + vomiting —
          think? → DKA: urgent escalation, fluids, insulin
          infusion.
        </p>
        <p>
          Q2: Why watch potassium? → Insulin and fluids can
          drop potassium fast; low potassium can stop the
          heart.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="DKA" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          High sugar + ketones + acid breathing = DKA: IV
          fluids, IV insulin, watch potassium. Back to:{" "}
          <Link href="/learn" className="underline">
            all lessons
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
