import Link from "next/link";
import LessonTools from "../LessonTools";

export default function HeartFailureLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Heart Failure</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Heart failure = the heart cannot pump enough blood for the body.
          Blood backs up: into lungs (left side) and into the body (right
          side). Types: left, right, or both; acute (sudden) or chronic.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Hypertension (commonest), heart attack, valve disease, irregular
          rhythm, too much alcohol, anaemia, thyroid disease, some drugs. Risks:
          age, diabetes, smoking, salty diet, missed drugs.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Weak pump → less blood forward (tiredness, cold hands, low urine) +
          congestion backward. Left failure floods lungs: breathlessness,
          crackles, frothy sputum. Right failure swells the body: ankles, liver,
          neck veins. Daily weight is the alarm: +1–2 kg in 2 days = fluid, not
          fat.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Breathlessness on effort → at rest → lying flat → waking at night
          gasping. Cough with frothy/white sputum, swollen feet, big belly,
          neck veins full, fast pulse, low oxygen, weight jumping up.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs, oxygen, BP, pulse, breathing rate, lung sounds, swelling,
          weight chart, fluids in/out, urine. Tests: chest X-ray (big heart,
          fluid), ECG, echo (pump strength), kidney labs, salt levels.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Rest the heart, remove fluid, strengthen the pump: oxygen, sit
          upright, limit salt and fluids as ordered, daily weights, treat the
          cause (BP, rhythm, valve, anaemia).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Loop diuretic</td>
              <td className="py-2">
                e.g. furosemide 20–80 mg daily in the morning. Removes fluid
                fast. Watch potassium, BP, kidneys. See full lesson:{" "}
                <Link href="/learn/loop-diuretics" className="underline">
                  Loop Diuretics
                </Link>
                .
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">ACE inhibitor</td>
              <td className="py-2">
                e.g. enalapril/lisinopril. Eases the heart&apos;s work, protects
                kidneys. Watch cough, low BP. Never in pregnancy.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Beta-blocker</td>
              <td className="py-2">
                e.g. carvedilol/bisoprolol, started low and slow in stable
                patients. Slows and protects the heart. Never stop suddenly.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Spironolactone / digoxin</td>
              <td className="py-2">
                Added in worse failure per guideline. Spironolactone saves
                potassium (watch high K); digoxin needs pulse checks — hold and
                report if pulse &lt;60 or vision changes.
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
          Upright + oxygen for breathlessness. Strict fluids in/out, daily
          weights same scale/clothes, salt/fluid limits, skin care for swollen
          legs, turn schedule. Teach: drugs daily, report 1–2 kg gain, more
          breathlessness, night gasping. Reassure — breathlessness terrifies.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Lung fluid crisis, kidney injury, clots, deadly rhythms. Prevention:
          control BP, take heart drugs, salt discipline, no alcohol excess,
          early clinic visits.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr O, 65, known hypertension, missed drugs for a month: wakes gasping
          at 2 a.m., ankles swollen, weight +3 kg this week, crackles both lung
          bases, oxygen 89%. Nurse sits him up, oxygen, vitals, urgent review;
          morning furosemide given, fluids restricted, weight chart restarted;
          teaching fixed on daily drugs and salt.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: “I cannot breathe” + oxygen 89% — first? → Upright, ABCs, oxygen,
          urgent help.
        </p>
        <p>
          Q2: Digoxin due but pulse 55 — action? → Hold, recheck, report; never
          give silently.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/scenarios/heart-failure" className="underline">
            live scenario
          </Link>{" "}
          ·{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Heart Failure" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Weak pump + fluid back-up → weight alarm → upright + water pills +
          heart drugs. Next:{" "}
          <Link href="/learn/diabetes" className="underline">
            Diabetes Mellitus
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
