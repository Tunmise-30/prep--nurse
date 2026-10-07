import Link from "next/link";
import LessonTools from "../LessonTools";

export default function DiarrhoeaLesson() {
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
          Gastrointestinal
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Acute Diarrhoea & Dehydration</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Acute diarrhoea = 3+ loose stools in 24 hours, sudden onset. The
          killer is not the stool — it is the WATER and SALT lost. Children
          under 5 die fastest.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Viruses (rotavirus in children), bacteria (cholera, shigella),
          parasites, dirty water/food, unwashed hands, bottle feeding without
          sterilising, malnutrition. Risks: under-5s, dry-season crowding,
          broken wells.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Gut pours water out → blood volume falls → eyes sink, skin loses
          stretch, urine vanishes, pulse races, child weakens. Severe: shock,
          kidney shutdown, death within hours without fluids.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs — dehydration scale (exam favourite)</strong>
        <p>
          <strong>No dehydration:</strong> alert, thirsty-normal, eyes normal,
          skin snaps back, urine normal. <strong>Some:</strong> restless,
          thirsty, sunken eyes, skin slow, less urine. <strong>Severe:</strong>{" "}
          sleepy/floppy, cannot drink, very sunken eyes, skin stays up, no
          urine, cold hands, weak fast pulse.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Stool count/look (blood? mucus? rice-water?), vomits, fluids taken,
          urine last passed, weight, temperature, sugar, malaria where
          relevant. Stool microscopy/culture in dysentery or outbreaks. Ask:
          water source, feeding, vaccines (rotavirus), drugs given.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management — Plan A/B/C</strong>
        <p>
          <strong>Plan A (no dehydration):</strong> home ORS after every stool
          + zinc + continue feeding + return if worse. <strong>Plan B
          (some):</strong> ORS 75 mL/kg over 4 hours in clinic, reassess.{" "}
          <strong>Plan C (severe):</strong> IV fluids fast (e.g. Ringer&apos;s
          lactate 100 mL/kg), then ORS + zinc. Antibiotics ONLY for dysentery,
          cholera, amoebiasis per guideline — not every watery stool.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug & fluid regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">ORS</td>
              <td className="py-2">
                After every loose stool: under-2s ~50–100 mL, 2–10 yrs
                ~100–200 mL, older ~200+ mL. Small frequent sips if vomiting.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Zinc (children)</td>
              <td className="py-2">
                10–14 days (under-6 months half dose): shortens illness and
                prevents next episodes. Continue feeding throughout.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Antibiotics</td>
              <td className="py-2">
                Only bloody stools (shigella), suspected cholera, amoebiasis —
                per culture/guideline. Plain watery diarrhoea: fluids, not
                drugs.
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
          Weigh every shift, strict stool/fluid/vomit chart, ORS corner with
          mother doing the giving (teach-pinches of salt-sugar is OUT — use
          proper ORS sachets), handwash + latrine teaching, breastfeeding
          continued, review for blood/mucus each stool.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Shock, kidney injury, malnutrition from starving the child (never
          withhold food!). Prevention: safe water, ORS at home early, rotavirus
          vaccine, handwashing, exclusive breastfeeding 6 months.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Baby T, 18 months: 8 watery stools, vomited twice, restless, sunken
          eyes, skin slow, still drinks. Nurse grades “some dehydration” →
          Plan B ORS 75 mL/kg over 4 hours, zinc started, mother taught sips +
          continued feeding; 4 hours later alert, eyes better → home with ORS +
          return advice.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Floppy child, cannot drink, no urine? → Severe: IV fluids fast
          (Plan C) + urgent care.
        </p>
        <p>
          Q2: Watery diarrhoea, alert, drinking well? → Plan A: ORS + zinc +
          feed + watch.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Acute Diarrhoea & Dehydration" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Count stools, grade water loss → A: home ORS, B: clinic ORS, C: IV
          fast + zinc + feed always. Next:{" "}
          <Link href="/learn/head-injury" className="underline">
            Head Injury
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
