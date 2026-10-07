import Link from "next/link";
import LessonTools from "../LessonTools";

export default function COPDLesson() {
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
          Respiratory
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">COPD</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          COPD (chronic bronchitis + emphysema) = lungs permanently narrowed
          and floppy. Unlike asthma, narrowing never fully reverses.
          Breathlessness creeps over years — “I just get tired with age.”
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Smoking (biggest), indoor cooking smoke, dust/chemical work, repeated
          chest infections, old TB damage. Long exposure + age = disease.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Airways scarred + air sacs burst into big useless spaces → air
          trapped, oxygen low, carbon dioxide high. Heart strains (right side)
          → swollen legs. Flare-ups (infections) crash breathing fast.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Daily cough with mucus, breathlessness on small effort, wheeze,
          barrel chest, thin frame, blue lips in flares, swollen ankles late.
          Asthma vs COPD exam key: young + reversible + night = asthma; older +
          smoker + progressive + never normal = COPD.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Smoking/cooking-smoke pack-years, flare frequency, sputum colour
          change, weight loss, oxygen at rest and walking, inhaler technique.
          Tests: spirometry (confirms, low FEV1 barely rises with reliever),
          X-ray, blood count (high red cells from chronic low oxygen).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Stop smoke exposure first (stove + cigarettes), vaccines (flu,
          pneumococcal), daily long-acting inhalers, pulmonary rehab
          (graded walking + breathing exercises), oxygen for chronic low
          levels, flare plan: extra reliever + steroids ± antibiotics if sputum
          turns green with fever.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Daily inhalers</td>
              <td className="py-2">
                Long-acting openers ± inhaled steroid per stage. Technique with
                spacer beats stronger drugs used wrongly.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Flare rescue</td>
              <td className="py-2">
                Extra reliever puffs + steroid course early; antibiotics only
                with infection signs (green sputum + fever/worse breath).
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Oxygen caution</td>
              <td className="py-2">
                Give oxygen for low saturation but titrate — flooding COPD
                lungs with oxygen can raise carbon dioxide. Target per order,
                monitor drowsiness.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Examples for learning — always follow the prescriber and your local
          guideline. Nurses never prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          Pursed-lip + upright-forward sitting, paced activity with rests,
          small frequent high-protein meals (big meals press the diaphragm),
          secretion clearance (fluids, postural hints, huff cough), anxiety
          coaching (panic worsens air hunger), smoke-free home plan.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Chest infections, right-heart failure, weight wasting, depression
          from breathlessness. Prevention: never smoke, ventilated kitchens,
          TB treated fully, vaccines, early flare treatment.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Baba S, 63, smoked 30 years + firewood seller: breathless dressing,
          cough with morning mucus, oxygen 88%, barrel chest. Nurse starts
          controlled oxygen, reliever via spacer, checks technique, sputum
          green + fever → flare antibiotics per order; rehab walking + smoking
          cessation plan before discharge.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Older smoker, progressive breathlessness, never fully reverses?
          → COPD: spirometry + smoke removal + daily inhalers.
        </p>
        <p>
          Q2: Green sputum + fever + worse breath in COPD? → Infective flare:
          steroids ± antibiotics per order.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="COPD" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Old smoker + creeping breathlessness → never-normal airways →
          inhalers + rehab + flare plan. Back to:{" "}
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
