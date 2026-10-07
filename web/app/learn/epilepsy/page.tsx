import Link from "next/link";
import LessonTools from "../LessonTools";

export default function EpilepsyLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Epilepsy</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Epilepsy = repeated unprovoked seizures from sudden brain electrical
          storms. Generalised (whole body stiff-jerk + unconsciousness) or focal
          (one part: staring, lip-smacking, one-limb jerks). One seizure from
          fever/low sugar is NOT epilepsy.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Birth injury, head trauma, meningitis, malaria, alcohol withdrawal,
          genetics. Triggers of attacks: missed drugs, no sleep, alcohol,
          flashing lights (some), fever, stress.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Brain cells fire together → stiff phase (cry, fall, bite tongue) →
          jerking → deep sleep/confusion after. Prolonged seizure beyond 5
          minutes (status) starves the brain — emergency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Aura (strange smell/fear) → fall → stiffen → jerk → sleepy/confused
          after, tongue bitten, urine passed. Status red flags: fit beyond 5
          minutes, repeated fits without waking, breathing difficulty, injury.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Witness story (what first? how long? injuries?), drug adherence,
          triggers, pregnancy, alcohol. Tests: sugar (rule out!), malaria where
          relevant, EEG, scan for new adult-onset fits. Never diagnose from one
          faint alone.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Daily anti-seizure drugs without gaps, trigger control, injury-proof
          life (no lone swimming/heights/fire). Status: rescue drug + oxygen +
          urgent care. Review every clinic: fit count, side effects, adherence.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Daily control</td>
              <td className="py-2">
                e.g. carbamazepine or valproate per type, same time daily.
                Never stop suddenly — withdrawal triggers status.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Rescue (status)</td>
              <td className="py-2">
                e.g. buccal midazolam or rectal/IV diazepam per order when fit
                passes 5 minutes. Call emergency simultaneously.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Cautions</td>
              <td className="py-2">
                Drowsiness at start (no driving/heights), valproate avoid in
                pregnancy, watch rash/fever on new drugs — report fast.
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
        <strong>8 · Nursing management (during a fit)</strong>
        <p>
          Time it. Cushion the head, loosen neck, NOTHING in the mouth, do NOT
          restrain, turn on side when jerking stops, oxygen + vitals after,
          check sugar, document duration + pattern. After: rest, reassure
          (patient is embarrassed — protect dignity), check injuries, review
          adherence kindly.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Injuries, burns, drowning, status brain damage, stigma keeping
          children from school. Prevention: daily drugs, sleep, no alcohol,
          fever treated fast in children, helmets on bikes.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Tunde, 16: fits since age 9, missed drugs for exams week, seized in
          class for 3 minutes, bit tongue, slept after. Nurse times nothing
          (over), positions side-lying, vitals + sugar normal, documents fully;
          teaching: pill box + phone alarm, sleep, no lone swimming, school
          letter against stigma.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Student seizing in class — first? → Time it, protect head,
          nothing in mouth, side position after.
        </p>
        <p>
          Q2: Fit beyond 5 minutes? → Status: rescue drug + oxygen + emergency.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Epilepsy" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Repeated storms → daily drugs no gaps → during fit protect + time +
          side → 5 minutes = emergency. Back to:{" "}
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
