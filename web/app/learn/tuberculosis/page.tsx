import Link from "next/link";
import LessonTools from "../LessonTools";

export default function TBLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Pulmonary Tuberculosis</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          TB = long infection of the lungs by Mycobacterium tuberculosis.
          Spreads through the air when a sick person coughs. Curable — but only
          with 6+ months of daily drugs, never stopped early.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Cause: TB germ in droplets. Risks: crowding, poor ventilation,
          HIV, malnutrition, diabetes, smoking, health workers without masks,
          stopping treatment halfway (breeds drug resistance).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Germs settle in lung tops → body walls them off (Ghon focus) → may
          sleep for years (latent) → wakes when immunity falls → cavities,
          bleeding, spread to lymph, spine, brain, kidneys.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Cough beyond 2 weeks, evening fever, night sweats, weight loss,
          chest pain, blood in sputum. Any cough + weight loss + night sweats =
          test for TB. In HIV, signs may hide — test early.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Sputum GeneXpert/smear (before drugs), chest X-ray, HIV test for
          every TB patient, sugar check, weight, contacts tracing (household,
          especially children under 5). Ask: cough weeks, sweats, weight, TB
          contact, HIV status, past treatment.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Notify and register (DOTS clinic), isolate coughing patients with
          masks and ventilation, treat HIV and diabetes alongside, feed well,
          trace and test contacts.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Intensive (2 months)</td>
              <td className="py-2">
                4 drugs: rifampicin + isoniazid + pyrazinamide + ethambutol
                (2RHZE). Kills fast, stops spread within ~2 weeks if taken.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Continuation (4 months)</td>
              <td className="py-2">
                2 drugs: rifampicin + isoniazid (4RH). Kills sleepers. Total 6
                months minimum — longer for bone/brain or retreatment.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Red-flag side effects</td>
              <td className="py-2">
                Yellow eyes/vomiting (liver — report fast), numb feet
                (isoniazid — pyridoxine given), red-orange urine/tears
                (rifampicin — harmless, warn!), blurred vision (ethambutol —
                stop and report).
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Regimen names for learning — doses by weight per national guideline
          and DOTS card. Nurses never prescribe; nurses ensure adherence.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management (DOTS heart)</strong>
        <p>
          Watch every dose swallowed (directly observed), tick the card, chase
          defaulters the same day, teach: drugs daily for full months even when
          better, cough into elbow, masks, open windows, separate sleeping
          where possible. Weigh monthly — rising weight = responding.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Lung destruction, bleeding, drug-resistant TB (from stopped doses),
          spread to family. Prevention: BCG at birth, find coughs early, treat
          HIV, ventilate rooms, finish every dose.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr F, 34, bus conductor: cough 6 weeks, evening fever, lost 6 kg,
          GeneXpert positive, HIV negative. Nurse registers DOTS, starts 2RHZE
          watched daily, gives masks, tests wife + 2 children, teaches
          red-orange urine is harmless but yellow eyes = rush back. Month 2:
          cough gone, weight +2 kg — continuation phase begins.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Cough 3 weeks + night sweats + weight loss? → Sputum test for TB
          before antibiotics.
        </p>
        <p>
          Q2: Patient feels better at month 2, wants to stop? → Never — 4 more
          months or resistance returns.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Pulmonary Tuberculosis" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          2-week cough + sweats + weight loss → test → 2 months 4 drugs + 4
          months 2 drugs, watched daily. Next:{" "}
          <Link href="/learn/typhoid" className="underline">
            Typhoid Fever
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
