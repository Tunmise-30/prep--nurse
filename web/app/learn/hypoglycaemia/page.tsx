import Link from "next/link";
import LessonTools from "../LessonTools";

export default function HypoglycaemiaLesson() {
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
        Hypoglycaemia (Low Blood Sugar)
      </h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Blood sugar below about 70 mg/dL (3.9 mmol/L).
          Usually from insulin or sulphonylurea drugs,
          missed or late meals, extra exercise, or alcohol
          without food. The brain runs on glucose, so low
          sugar is an emergency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Too much insulin, wrong timing, skipped meals,
          vomiting, unplanned exercise, alcohol, kidney
          problems, tight control in pregnancy.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Sugar drops → adrenaline surge (sweating,
          shaking, fast heartbeat, hunger) → brain lacks
          fuel (confusion, slurred speech, odd behaviour)
          → fits and coma if untreated.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Sweaty, shaking, hungry, palpitations, blurred
          vision, confusion, slurred speech, aggression or
          “drunk” behaviour, drowsy, seizures, unconscious.
          Some patients feel nothing (“hypo unawareness”).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Check sugar at once if the patient is awake; if
          unconscious and diabetic, treat as low sugar
          without waiting. ABCs, last insulin dose, last
          meal, exercise, alcohol, symptoms time course.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Awake and can swallow: 15–20 g fast sugar
          (glucose tablets, 150–200 mL juice or sugary
          drink), recheck in 15 minutes, then a long-acting
          carb. Unconscious or unable to swallow: nothing
          by mouth — IV dextrose or IM glucagon; recovery
          position; call for help.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Awake (mild–moderate)
              </td>
              <td className="py-2">
                15–20 g fast-acting glucose (e.g. 3–4
                glucose tablets or 150–200 mL juice);
                recheck in 15 minutes; repeat if still low;
                then biscuit/bread.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Unconscious/severe
              </td>
              <td className="py-2">
                e.g. IV 50% dextrose per protocol, or IM
                glucagon 1 mg if no IV access — by trained
                staff; nothing by mouth.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">After</td>
              <td className="py-2">
                Long-acting carbohydrate (meal or snack),
                review the insulin dose and timing with the
                prescriber.
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
          Check sugar, give fast sugar if awake and safe to
          swallow, recheck in 15 minutes, stay with the
          patient, protect from harm, never feed an
          unconscious patient, prepare glucagon, document
          time–sugar–treatment, teach “15–15 rule”, carry
          glucose tabs, and report frequent hypos (dose may
          be too high).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Fits, brain injury, death; repeated hypos dull
          warning signs. Prevention: regular meals, correct
          insulin timing, glucose tabs carried, ID band,
          check before driving, alcohol with food, sick-day
          rules.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr A, insulin-dependent, 14:00: sweaty, shaking,
          muddled speech, sugar 48 mg/dL. Nurse stays with
          him, gives 4 glucose tablets + juice, rechecks
          at 15 minutes (92 mg/dL), gives a biscuit,
          reviews that he skipped lunch after his morning
          insulin, and teaches the 15–15 rule.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Sweating + shaking + confusion in a diabetic —
          first step? → Check sugar; give fast sugar if
          awake and safe to swallow.
        </p>
        <p>
          Q2: Why no food or drink when unconscious? →
          Choking risk; use IV dextrose or IM glucagon.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>{" "}
          ·{" "}
          <Link href="/scenarios/hypoglycemia" className="underline">
            run the low-sugar scenario
          </Link>
        </p>
      </div>

      <LessonTools lesson="Hypoglycaemia" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Low sugar: awake → fast sugar, recheck 15 min;
          unconscious → nothing by mouth, glucagon/dextrose.
          Back to:{" "}
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
