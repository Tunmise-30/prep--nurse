import Link from "next/link";
import LessonTools from "../LessonTools";

export default function LoopDiureticsLesson() {
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

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Drug class & action</strong>
        <p>
          Loop diuretics block salt reabsorption in the kidney&apos;s loop of
          Henle → salt drags water out as urine. Result: less fluid overload →
          lower BP, easier breathing, smaller swelling. Strongest water pills we
          have. Members: furosemide (commonest), bumetanide, torsemide.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · When prescribed (indications)</strong>
        <p>
          Heart failure fluid overload, swollen legs/lungs, high BP (with other
          drugs), kidney-related swelling, emergency fluid in lungs. Doctor
          decides by weight, breathing, and kidney labs.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · Doses you will see (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Tablet</td>
              <td className="py-2">
                Furosemide 20–80 mg daily in the MORNING (up to divided doses
                per order). Effect starts ~1 hour, lasts ~6 hours.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">IV (ward)</td>
              <td className="py-2">
                20–40 mg slow IV push or infusion in emergencies. Push SLOWLY
                (minutes, per policy) — fast push harms hearing. Effect in
                minutes.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Elderly/start</td>
              <td className="py-2">
                Start low (20 mg), rise slowly — old kidneys + low BP faint
                easily. Always morning dosing to protect sleep.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Example adult doses for learning — always follow the prescriber and
          your local guideline. Nurses never prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Side effects & dangers</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Expected</td>
              <td className="py-2">
                Much urine, thirst, weight drop, dizziness standing.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Danger: low potassium</td>
              <td className="py-2">
                Weakness, cramps, irregular pulse — can stop the heart. Report
                at once; potassium foods/supplements only as ordered.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Danger: dehydration/kidney</td>
              <td className="py-2">
                Very little urine, dry mouth, confusion, creatinine rising —
                drug may be too strong. Report before next dose.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Danger: hearing</td>
              <td className="py-2">
                Ringing ears/hearing loss with fast IV push or huge doses —
                push slowly, report ear symptoms.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Interactions & cautions</strong>
        <p>
          Stronger with other BP drugs (faint risk); weaker kidneys with NSAIDs;
          low potassium worsens digoxin danger (check pulse!); diabetics may see
          sugar rise. Caution: pregnancy, gout, low salt already.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Nursing responsibilities (exam loves this)</strong>
        <p>
          Before: weight, BP lying + standing, pulse, swelling, breathing,
          last urine, potassium/kidney labs. During: strict fluids in/out,
          hourly urine in emergencies, watch fainting. After: re-weigh,
          re-check BP, record response. Morning dose, slow IV, double-check
          dose with a second nurse where policy says.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Real patient case</strong>
        <p>
          Mrs E, 68, heart failure: weight +2.5 kg, ankles swollen, crackles,
          potassium 3.1 (low). Doctor orders furosemide 40 mg IV slowly +
          potassium replacement. Nurse pushes over minutes, watches urine
          (900 mL in 2 hours), breathing eases, rechecks BP (drops standing —
          assisted walking), teaches morning tablets + banana/orange only as
          diet allows + report cramps.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Practise now</strong>
        <p>
          Q1: Weakness + cramps + irregular pulse on furosemide? → Check
          potassium/BP/kidneys first.
        </p>
        <p>
          Q2: Why morning, why slow IV? → Daytime urine protects sleep; fast
          push harms ears.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>{" "}
          · Related:{" "}
          <Link href="/learn/heart-failure" className="underline">
            Heart Failure
          </Link>
        </p>
      </div>

      <LessonTools lesson="Loop Diuretics" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Strongest water pill → morning + slow IV → watch potassium, BP,
          kidneys, ears. Back to:{" "}
          <Link href="/learn" className="underline">
            all lessons
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational nursing knowledge only — never prescribe or change a real
        patient&apos;s drugs. Follow orders and local policy.
      </p>
    </div>
  );
}
