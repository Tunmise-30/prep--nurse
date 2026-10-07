import Link from "next/link";
import LessonTools from "../LessonTools";

export default function HeadInjuryLesson() {
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
          Neurological
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Head Injury</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Head injury = blow to the head (road crash, fall, assault). Mild
          (concussion: brief confusion, recovers), moderate, severe (coma).
          Danger inside: bleeding (between skull layers), swelling, skull
          fracture.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Okada/cars without helmets, falls (children, elderly, construction),
          assault, sports. Alcohol and night travel multiply every risk.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Brain shakes (concussion) or bleeds/swells inside a rigid skull →
          pressure rises → consciousness falls. A “lucid interval” (fine, then
          worsening) warns of growing blood clot — the classic trap.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Headache, vomiting, confusion, unequal pupils, weakness one side,
          fits, clear/watery fluid from nose/ears (skull base fracture), scalp
          wound. Red flags: falling consciousness, repeated vomiting, both
          pupils fixed, breathing irregular.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs + neck spine protection FIRST, consciousness scale (Glasgow),
          pupils, limbs, wounds, vitals trend, sugar, alcohol smell. CT scan
          where available for moderate/severe or worsening mild. Ask: what hit?
          how fast? helmet? blackout time? vomiting count?
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Protect airway, stop bleeding with pressure, IV fluids carefully (no
          overload), oxygen, tetanus cover for wounds, urgent neurosurgery
          referral for clots/depressed fracture. Observe mild injuries 24 hours
          — deterioration hides.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug notes (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Pain/fever</td>
              <td className="py-2">
                Paracetamol preferred. Avoid sedatives and strong NSAIDs early
                — they mask consciousness and worsen bleeding.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Fits/vomiting</td>
              <td className="py-2">
                Anticonvulsant standby per order; antiemetic only if safe
                swallow and cause reviewed.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Never</td>
              <td className="py-2">
                Never give alcohol, sedatives, or unprescribed drugs to “calm”
                a head-injured patient. Never leave them alone 24 hours.
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
          Head raised 30° (if spine cleared), neuro checks every 15–60 min
          (consciousness, pupils, limbs, vitals), fluids chart, wound care,
          seizure precautions, nil by mouth if consciousness falls, family
          watch rota with written warning signs for home.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Brain swelling, blood clots, fits, meningitis through fractures,
          long confusion. Prevention: helmets, seatbelts, no drink-driving,
          safe scaffolds, child-proof heights.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Kola, 24, okada crash without helmet: talked at scene, vomited
          twice, now drowsy, left pupil bigger. Nurse keeps neck still, ABCs +
          oxygen, vitals + neuro checks every 15 min, urgent CT → blood clot →
          neurosurgery same night; family taught helmet law the hard way.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Talked then worsening + unequal pupils? → Growing clot: urgent
          scan + neurosurgery.
        </p>
        <p>
          Q2: Watery fluid dripping from nose after blow? → Skull base
          fracture: don&apos;t blow/pack nose, urgent review, meningitis watch.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Head Injury" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Blow → ABCs + neck still → watch consciousness like a hawk → fine-then-
          worse = clot = surgery. Next:{" "}
          <Link href="/learn/copd" className="underline">
            COPD
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
