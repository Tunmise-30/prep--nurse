import Link from "next/link";
import LessonTools from "../LessonTools";

export default function HypertensionLesson() {
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
          Cardiovascular
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Hypertension</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Hypertension = blood pressure ≥ 140/90 mmHg on repeated checks, at
          rest, with correct cuff and position. One high reading is not
          hypertension — confirm on separate days.
        </p>
        <p>
          <strong>Classes:</strong> Normal &lt;120/80 · Elevated 120–129/&lt;80
          · Stage 1: 130–139/80–89 · Stage 2: ≥140/90 · Crisis: &gt;180/120
          (with or without organ damage).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          <strong>Primary (90%):</strong> no single cause — age, family history,
          too much salt, overweight, low activity, alcohol, smoking, chronic
          stress.
        </p>
        <p>
          <strong>Secondary:</strong> kidney disease, thyroid problems, sleep
          apnoea, some drugs (steroids, NSAIDs, contraceptives), pregnancy
          (pre-eclampsia).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Tight vessels + extra salt/water → heart pumps harder → vessel walls
          thicken → heart muscle grows tired → damages heart, brain (stroke),
          kidneys (failure), eyes (bleeding), legs (poor flow). Silent for
          years — that is why it kills.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Usually none. Late or crisis signs: headache (morning, back of head),
          blurred vision, nosebleeds, chest pain, breathlessness, irregular
          pulse. Crisis + organ signs (chest pain, confusion, weakness, no
          urine) = emergency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Repeat BP both arms, correct cuff; pulse, weight, urine dip (protein),
          blood sugar, cholesterol, kidney labs (creatinine), ECG, eye exam.
          Ask: salt, alcohol, smoking, drugs, family, exercise, sleep, stress.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Lifestyle first and always: less salt (one teaspoon a day total),
          lose weight, walk 30 minutes most days, stop smoking, limit alcohol,
          sleep well. Drugs start at Stage 2, crisis, or Stage 1 with diabetes,
          kidney or heart disease.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Thiazide diuretic</td>
              <td className="py-2">
                e.g. hydrochlorothiazide 12.5–25 mg daily in the morning. First
                choice in many adults. Watch potassium + urination.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Calcium-channel blocker</td>
              <td className="py-2">
                e.g. amlodipine 5–10 mg daily. Good where thiazides fail.
                Swollen ankles and flushing possible.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">ACE inhibitor</td>
              <td className="py-2">
                e.g. lisinopril 5–20 mg daily. Protects kidneys/diabetes. Dry
                cough possible. Never in pregnancy.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Crisis</td>
              <td className="py-2">
                Hospital only: controlled IV drugs, lower BP gradually — never
                crash it. Nurse monitors neuro signs + urine hourly.
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
        <strong>8 · Nursing management</strong>
        <p>
          Measure BP correctly every time; teach home checks. Watch for low BP
          on standing, swollen feet (amlodipine), cough (ACE-I), cramps (water
          pills). Check compliance kindly — “what makes daily drugs hard?”
          Record weight, urine, and side effects.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Stroke, heart attack, heart failure, kidney failure, blindness.
          Prevention: salt control from youth, active life, healthy weight, no
          smoking, yearly BP checks after 30.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mrs A, 48, market trader: BP 170/105 twice, no symptoms, loves salty
          stock cubes, mother had stroke. Nurse confirms readings, checks urine
          (protein +), sugar, weight; starts teaching (salt, walking, drugs
          daily); books kidney labs and eye check; warns: headache + vision
          change + very high BP = come at once.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: BP 190/120 + headache + blurred vision — first action? → ABCs +
          repeat BP + urgent review (possible emergency).
        </p>
        <p>
          Q2: Patient on amlodipine reports swollen ankles — response? →
          Expected drug effect; elevate legs, report if severe, never stop
          drugs silently.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>{" "}
          ·{" "}
          <Link href="/exams" className="underline">
            mock exam
          </Link>
        </p>
      </div>

      <LessonTools lesson="Hypertension" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Silent killer → confirm twice → salt + weight + daily drugs → watch
          crisis signs. Next:{" "}
          <Link href="/learn/heart-failure" className="underline">
            Heart Failure
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
