import Link from "next/link";
import LessonTools from "../LessonTools";

export default function AkiLesson() {
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
          Renal & Urinary
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">
        Acute Kidney Injury (AKI)
      </h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          AKI = sudden drop in kidney function (creatinine
          rises, or urine &lt; 0.5 mL/kg/hour for 6+ hours).
          Pre-renal (low blood flow), renal (kidney damage),
          post-renal (blocked outflow). Often reversible if
          caught early.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Dehydration, bleeding, sepsis, vomiting/diarrhoea,
          nephrotoxic drugs (NSAIDs like ibuprofen/diclofenac,
          some antibiotics, contrast dye), blocked flow
          (stones, enlarged prostate, blocked catheter),
          heart failure, existing kidney disease, age.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Less filtration → waste (urea, creatinine) builds
          in blood → urine falls → fluid and salts go out
          of balance (dangerously high potassium), acid
          blood, swelling.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Often silent until labs: passing little urine,
          swelling (feet, face), tiredness, nausea, itching,
          confusion. High potassium: weak muscles, irregular
          or slow pulse — an emergency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Hourly urine output, fluid chart, daily weight,
          BP, creatinine and electrolytes (potassium!),
          urinalysis, scan if blocked, review every drug.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Pre-renal: fluids or blood to restore flow. Stop
          nephrotoxic drugs. Post-renal: relieve the block
          (catheter, urology). Renal: treat cause; dialysis
          for severe high potassium, fluid overload, acidosis,
          or uraemia.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Flow problems
              </td>
              <td className="py-2">
                IV fluids (or blood) per order for
                dehydration/bleeding; stop NSAIDs and adjust
                doses of kidney-cleared drugs.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Blocked flow
              </td>
              <td className="py-2">
                Urgent catheter or urology drainage;
                antibiotics if infected.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">
                Severe AKI
              </td>
              <td className="py-2">
                Dialysis for life-threatening potassium,
                fluid overload, or acidosis; potassium
                binders/calcium/insulin-dextrose per
                protocol for high potassium.
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
          Strict hourly input/output, daily weight, fluid
          balance as ordered, monitor potassium and ECG,
          watch for swelling and confusion, avoid NSAIDs,
          protect veins (no extra needle sticks where
          possible), report urine &lt; 0.5 mL/kg/hour, teach
          drug and hydration safety.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Permanent kidney damage (CKD), high-potassium
          arrest, fluid overload, uraemia. Prevention:
          good hydration, avoid NSAIDs in at-risk patients,
          catheter care, treat sepsis early, check kidney
          function before contrast dye.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mrs K, 78, day 2 after surgery: urine 20 mL/hour,
          creatinine doubled, takes diclofenac. Nurse flags
          the low output at once, charts fluids hourly,
          checks potassium and ECG, the team stops the
          NSAID and reviews fluids; urine improves within
          24 hours.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Urine 20 mL/hour in an adult — first action? →
          Check vitals and escalate; review fluids and
          drugs.
        </p>
        <p>
          Q2: Which common painkiller can harm kidneys? →
          NSAIDs (ibuprofen, diclofenac) — review and avoid
          in AKI risk.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Acute Kidney Injury" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Sudden low urine + rising creatinine = AKI: chart
          output, stop NSAIDs, restore flow, watch
          potassium. Back to:{" "}
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
