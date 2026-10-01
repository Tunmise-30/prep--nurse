import Link from "next/link";
import LessonTools from "../LessonTools";

export default function DiabetesLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Diabetes Mellitus</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Diabetes = blood sugar stays too high. Type 1: body kills its insulin
          cells (needs insulin for life, often young). Type 2: insulin works
          poorly + body makes less (lifestyle + tablets, later insulin).
          Fasting ≥126 mg/dL twice = diabetes; HbA1c ≥6.5% confirms control
          level.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Type 1: auto-immune, genes. Type 2: overweight, big belly, low
          activity, sugary drinks, family history, age, pregnancy diabetes
          history. Nigeria&apos;s rising sugar intake + okada lifestyle feeds it.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Insulin opens cells to sugar. Without it, sugar piles in blood while
          cells starve → body burns fat → acids (ketoacidosis in Type 1). Years
          of high sugar silently damage eyes, kidneys, nerves, feet, heart,
          brain.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          The 4 Ps: polyuria (much urine), polydipsia (much thirst), polyphagia
          (hunger) + weight loss, tiredness. Plus: slow wounds, itching,
          blurry vision, numb feet. Danger: fruity breath + vomiting + deep
          breathing = ketoacidosis emergency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Fasting sugar, random sugar, HbA1c, urine sugar/ketones, weight/BMI,
          BP, feet exam (cuts, pulses, feeling), eyes, kidneys. Ask: thirst,
          urine, weight, family, diet, activity, drugs, pregnancy.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Food (regular meals, less sugar/refined starch, vegetables, portion
          control), 30-minute walks, weight loss, no smoking, foot care. Tablets
          when lifestyle is not enough; insulin when tablets fail, in Type 1,
          pregnancy, or crisis.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Metformin</td>
              <td className="py-2">
                First tablet for Type 2 (e.g. 500 mg–1 g with meals). Cuts
                liver sugar. Take with food; watch stomach upset, B12 over
                years. Stop before contrast scans per order.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Sulphonylureas</td>
              <td className="py-2">
                e.g. glibenclamide/gliclazide — push pancreas to release
                insulin. Danger: LOW sugar. Eat regularly; carry sugar always.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Insulin</td>
              <td className="py-2">
                Types: rapid (meals), intermediate/long (basal). Rotate
                injection sites (belly, thigh), store cold, check dose twice.
                Low sugar is the killer side effect.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Low-sugar rescue</td>
              <td className="py-2">
                Awake + can swallow: 15 g fast sugar (glucose/sweet drink),
                recheck in 15 min, repeat, then snack. Confused/unconscious:
                nothing by mouth — urgent IV glucose/glucagon per order.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Example doses for learning — always follow the prescriber and your
          local guideline. Nurses never prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          Check sugar as ordered, give drugs/insulin with double-checks, watch
          for low sugar (sweat, shake, confusion), inspect feet every shift,
          teach diet + exercise + daily drugs + carrying sugar. Support without
          shame — diabetes is lifelong.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Eye loss, kidney failure, foot amputation, stroke, heart attack, keto
          coma, low-sugar coma. Prevention: healthy weight, active life, less
          sugar, yearly sugar checks after 35 or with family history.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr B, 55, driver: drinks 5 litres daily, urinates all night, lost 8
          kg, foot sore unhealed 3 weeks, fasting sugar 210. Nurse checks
          hydration, feet, BP, weight; confirms repeat sugar + HbA1c; teaching
          starts (meals, walking, drugs, foot care, carrying sugar); eye and
          kidney referrals booked.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Insulin patient sweating + shaking + confused — priority? → Low
          sugar: fast sugar if awake, recheck, escalate.
        </p>
        <p>
          Q2: Which trio points to high sugar? → Much urine + much thirst + slow
          healing.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Diabetes Mellitus" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Sugar high, cells hungry → 4 Ps + slow healing → food + movement +
          tablets/insulin → fear low sugar most. Next:{" "}
          <Link href="/learn/stroke" className="underline">
            Stroke
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
