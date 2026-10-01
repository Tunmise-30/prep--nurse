import Link from "next/link";
import LessonTools from "../LessonTools";

export default function StrokeLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Stroke</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Stroke = part of the brain suddenly loses blood. Ischaemic (blocked
          vessel, ~85%) or haemorrhagic (burst vessel). Brain cells die within
          minutes — every minute counts.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Clots from heart rhythm problems or narrowed neck vessels; bleeds
          from hypertension or weak vessels. Risks: hypertension (biggest),
          diabetes, smoking, cholesterol, alcohol, age, previous mini-stroke
          (TIA — a warning, never ignore).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Starved brain area stops working: opposite body side weakens
          (left-brain stroke → right weakness + speech loss). Swelling follows;
          bleeding strokes raise skull pressure fast (headache, vomiting,
          coma).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs — FAST plus</strong>
        <p>
          <strong>F</strong>ace droop · <strong>A</strong>rm drift ·{" "}
          <strong>S</strong>peech slur · <strong>T</strong>ime (note the exact
          onset). Plus: sudden confusion, vision loss, worst headache ever,
          unsteady walk. Low sugar can mimic stroke — always check sugar.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs, sugar, BP, pulse, neuro checks (consciousness, pupils, limb
          strength, speech), onset time, drugs (blood thinners?), scan urgently
          (CT tells block vs bleed — treatment is opposite).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Ischaemic: clot-busting or removal if within hours and scan allows;
          then antiplatelets + statin + BP/sugar control + physio. Bleed: BP
          control, reverse thinners, neurosurgery referral. Both: swallow test,
          DVT prevention, pressure care, early rehab.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Antiplatelets</td>
              <td className="py-2">
                e.g. aspirin 75–150 mg daily ± clopidogrel 75 mg after ischaemic
                stroke/TIA. Stop clots reforming. Watch bleeding, stomach pain.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Statin</td>
              <td className="py-2">
                e.g. atorvastatin 20–40 mg at night. Steadies vessel walls after
                ischaemic stroke, even if cholesterol looks normal.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">BP & sugar control</td>
              <td className="py-2">
                Treat hypertension/diabetes firmly after the acute phase — they
                caused this. Never give blood thinners before the scan rules
                out bleeding.
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
          Nil by mouth until swallow tested. Position weak side safely, turn
          every 2 hours, passive exercises, DVT stockings/movement, monitor
          neuro signs + BP + sugar, prevent falls, feed with care (upright,
          small bites), support speech and family.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Choking pneumonia, pressure sores, clots, contractures, depression.
          Prevention: treat BP/sugar/cholesterol, stop smoking, TIA = emergency
          workup immediately.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr C, 62: slurred speech at breakfast, left arm drifts, face uneven,
          onset 7:10 a.m. Nurse records time, ABCs, sugar (normal), BP high,
          urgent scan → ischaemic stroke → treatment window used. Swallow test
          fails → NG feeding, physio day one, family taught FAST for next time.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Arm drift + slurred speech — first? → Onset time, ABCs, urgent
          review.
        </p>
        <p>
          Q2: Before any food/drug by mouth? → Swallow test; nil by mouth until
          safe.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Stroke" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          FAST + clock + sugar + scan → swallow safe → antiplatelets + rehab.
          Next:{" "}
          <Link href="/learn/pneumonia" className="underline">
            Pneumonia
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
