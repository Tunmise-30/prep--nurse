import Link from "next/link";
import LessonTools from "../LessonTools";

export default function UTILesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Urinary Tract Infection</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          UTI = germs (usually E. coli from the bowel) infecting urine:
          bladder (cystitis: burning + frequency) or kidneys (pyelonephritis:
          fever + back pain + vomiting — the dangerous one).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Cause: bowel germs entering the urethra. Risks: women (short
          urethra), pregnancy, poor wiping (back-to-front), holding urine,
          catheters, kidney stones, diabetes, low water intake.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Germs climb: urethra → bladder (burning, frequency) → ureters →
          kidneys (fever, loin pain, vomiting). Kidney infection can spill into
          blood (sepsis). Pregnancy + UTI risks early labour — always treat.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Burning on urination, going often in small amounts, cloudy/smelly
          urine, lower-belly pain. Kidney signs add: high fever, back/flank
          pain, nausea, vomiting. Elderly trick: new confusion alone.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Urine dip (leukocytes + nitrites), midstream urine culture BEFORE
          antibiotics, temperature, back tapping tenderness, pregnancy test,
          sugar check. Ask: burning? frequency? colour? back pain? catheter?
          pregnancy? fluids per day?
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Right antibiotic by culture, plenty fluids (unless restricted),
          paracetamol for pain/fever, treat cause (remove/replace catheter,
          stones). Kidney infection or pregnancy: urgent, sometimes admission.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Simple cystitis</td>
              <td className="py-2">
                e.g. nitrofurantoin or co-amoxiclav per guideline, short course
                (3–5 days). Finish all doses even when burning stops day 2.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Kidney/pregnancy</td>
              <td className="py-2">
                Stronger/longer per culture (e.g. ceftriaxone IV then oral).
                Pregnancy: treat every positive culture, even without symptoms.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Never</td>
              <td className="py-2">
                Never start antibiotics before sending the culture where delay
                is safe; never ignore fever + back pain as “simple UTI”.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Examples for learning — always follow culture, the prescriber, and
          your local guideline. Nurses never prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          Push fluids (2–3 litres if allowed), hourly toilet (don&apos;t hold),
          wipe front-to-back teaching, cotton underwear, cranberry myths aside
          — water works. Catheter care: sterile insertion, closed drainage,
          daily need review, remove fast. Track temperature + urine clarity.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Kidney damage, blood sepsis, preterm labour. Prevention: water,
          regular urination, post-intercourse urination, hygiene, prompt
          treatment.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mrs J, 28, pregnant 24 weeks: burning + frequency 3 days, now fever
          38.5°C + right back pain. Nurse sends midstream culture first, starts
          fluids, prescribed antibiotic per order, monitors temperature and
          contractions; teaching: finish all doses, water discipline, report
          back pain or fluid leak.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Burning + frequency, no fever? → Culture first, then short-course
          antibiotic + fluids.
        </p>
        <p>
          Q2: Fever + back pain + vomiting? → Kidney involvement: urgent,
          admission likely.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Urinary Tract Infection" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Burning + frequency → culture → full-dose antibiotic + water; fever +
          back pain = kidneys = urgent. Next:{" "}
          <Link href="/learn/asthma" className="underline">
            Asthma
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
