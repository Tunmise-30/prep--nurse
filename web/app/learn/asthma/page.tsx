import Link from "next/link";
import LessonTools from "../LessonTools";

export default function AsthmaLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Asthma</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Asthma = airways that overreact: they tighten, swell, and fill with
          mucus. Episodes (attacks) come and go — wheeze, cough, chest
          tightness, breathlessness, worse at night and early morning.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Triggers: dust, smoke (cooking fire!), strong perfume, cold air,
          exercise, colds, cockroaches, stress. Risks: family history, eczema/
          hay fever, premature birth, smoking around children.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Trigger → airway muscle squeezes + lining swells + mucus plugs →
          whistling air out, trapping air in. Severe: too little air moves at
          all — chest goes QUIET (more dangerous than loud wheeze) + lips blue.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Wheeze, dry cough at night, tight chest, breathlessness on play.
          Attack scale: mild (talks full sentences) → severe (words only,
          breathing fast, pulse fast) → life-threatening (quiet chest,
          confused, blue, exhausted).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Speech test (sentences? words?), breathing rate, oxygen, pulse, peak
          flow if available (compare personal best), trigger history, inhaler
          technique check (most use it wrongly!). Ask: night cough? school
          missed? reliever use per week?
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Attack: sit upright, calm, reliever puffs via spacer, oxygen if low,
          repeat per protocol, steroids early in moderate+ attacks, magnesium/
          hospital for severe. Long-term: daily preventer + action plan +
          trigger removal.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Reliever (blue)</td>
              <td className="py-2">
                e.g. salbutamol puffs via spacer during attacks. Opens airways
                in minutes. Needing it daily = poor control, step up.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Preventer (often brown/orange)</td>
              <td className="py-2">
                e.g. inhaled steroid ± long-acting opener, EVERY day even when
                well. Rinse mouth after steroid puffs (thrush prevention).
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Attack extras</td>
              <td className="py-2">
                Steroid tablets/syrup early, oxygen, fluids. Antibiotics only
                with proven infection — not for wheeze alone.
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
          Upright + reassure (panic tightens worse), spacer technique demo and
          return-demo, peak-flow diary, trigger hunt at home (smoke, dust,
          pets), action plan written (green/yellow/red zones), school letter
          with spare inhaler.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Status asthmaticus (attack that won&apos;t break), collapsed lung,
          missed school, death in silent-chest attacks. Prevention: preventer
          daily, smoke-free home, dust control, flu avoidance, early clinic at
          yellow zone.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Ada, 9: night cough for weeks, wheeze playing football, mother cooks
          with firewood indoors. Nurse hears wheeze, checks technique (puffs
          into air, no spacer!), teaches spacer + slow breath-hold, starts
          preventer understanding, moves cooking ventilation, writes action
          plan; 2 weeks later night cough gone.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Words-only speech + fast breathing? → Severe: upright, reliever
          via spacer, oxygen, urgent care.
        </p>
        <p>
          Q2: Quiet chest + drowsy? → Life-threatening: emergency, never leave
          alone.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Asthma" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Wheeze + night cough → blue reliever for attacks, daily preventer for
          life + spacer always. Next:{" "}
          <Link href="/learn/meningitis" className="underline">
            Meningitis
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
