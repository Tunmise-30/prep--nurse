import Link from "next/link";
import LessonTools from "../LessonTools";

export default function ShockLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">
        Shock (all types)
      </h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Shock = circulation fails to deliver blood to tissues,
          so cells starve. Types: hypovolaemic (blood/fluid lost:
          bleeding, diarrhoea, burns), cardiogenic (heart pump
          fails: heart attack, heart failure), septic (germs in
          blood), anaphylactic (severe allergy), neurogenic
          (spinal injury).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Heavy bleeding (injury, surgery, ulcer), severe
          diarrhoea/vomiting (children fastest), burns, sepsis
          (any infection), big heart attack, severe allergy
          (drugs, food, stings), spinal injury.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Low flow → fast, weak pulse; low BP; blood shunts to
          vital organs → skin cold, pale, clammy (early septic
          shock can be warm and flushed); brain starves →
          restless, then confused; kidneys shut → low urine.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Pale, sweating, cool hands, fast weak pulse, low BP,
          fast breathing, thirst, restlessness → confusion, low
          urine. Septic: fever, warm flush, racing pulse early.
          Anaphylactic: hives, swelling, wheeze within minutes
          of the trigger.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs, BP, pulse (rate + strength), breathing, oxygen,
          capillary refill, urine output (hourly), consciousness,
          and hunt the cause: bleeding site, infection source,
          allergen, ECG, sugar, oxygen, temperature.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Treat the cause AND the low flow: stop bleeding, IV
          fluids or blood, oxygen; septic → antibiotics +
          vasopressors; anaphylactic → IM adrenaline;
          cardiogenic → treat heart attack/failure; hypovolaemic
          → replace fluid (ORS if awake, IV if severe).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Hypovolaemic
              </td>
              <td className="py-2">
                IV crystalloid (e.g. normal saline/Ringer’s) or
                blood transfusion per order; ORS Plan C for
                diarrhoea dehydration if the patient can drink.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Septic</td>
              <td className="py-2">
                e.g. broad IV antibiotics within the hour +
                vasopressor drip (e.g. noradrenaline) in ICU,
                guided by BP and lactate.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Anaphylactic
              </td>
              <td className="py-2">
                e.g. adrenaline 0.3–0.5 mg IM into outer thigh
                at once; repeat per protocol; antihistamine and
                steroid after.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Cardiogenic</td>
              <td className="py-2">
                Treat the heart attack/failure (aspirin, oxygen
                if low, diuretics for fluid overload) per
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
          Call for urgent help, lie flat (raise legs unless
          breathing is hard), oxygen, IV access, vital signs
          every 5–15 minutes, strict fluid chart, keep warm,
          treat the cause (pressure on bleeding, antiseptic
          sepsis care, remove allergen), watch consciousness
          and urine, document and escalate fast.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Kidney failure, brain injury, organ failure, death.
          Prevention: treat diarrhoea early with ORS, infection
          control and sepsis awareness, vaccines, allergy action
          plans, safe surgery and ulcer care.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Toddler, 3 days of watery stools, sunken eyes, fast
          weak pulse, low BP, restless. Nurse calls the doctor
          at once, starts ORS Plan C fast while preparing IV
          fluids per Plan C protocol, checks vitals every 15
          minutes, weighs the child, and teaches the mother
          ORS after each loose stool.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Pale + sweaty + fast weak pulse + low BP — first
          action? → Call for urgent help, lie flat, oxygen, IV
          access; shock until proven otherwise.
        </p>
        <p>
          Q2: Why hourly urine matters? → Kidneys shut early in
          shock; low urine means worsening flow.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Shock" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Fast weak pulse + low BP + confusion = shock: call,
          flat, oxygen, fluids, treat cause. Back to:{" "}
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
