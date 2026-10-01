import Link from "next/link";
import LessonTools from "../LessonTools";

export default function PneumoniaLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Pneumonia</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Pneumonia = infection filling lung air sacs with fluid/pus.
          Community-acquired (home) vs hospital-acquired (worse germs).
          Germs: bacteria (commonest serious), viruses, fungi, TB (special
          course in Nigeria).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Droplet spread, weak immunity: extremes of age, malnutrition,
          HIV, smoking, indoor smoke, bedridden patients, missed vaccines,
          cold/rainy crowding. Aspiration (food/fluid into lungs) in stroke and
          elderly.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Germs inflame air sacs → fluid + white cells fill them → oxygen
          cannot cross → fever + fast breathing + low oxygen. Severe: both
          lungs, blood infection, breathing failure.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Cough with yellow/green/rusty sputum, fever, sharp chest pain on
          breathing in, fast breathing, low oxygen, tiredness. Elderly trick:
          new confusion may come before fever. Crackles; X-ray confirms.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs, breathing rate, oxygen, BP, pulse, temperature, lung sounds,
          sputum (collect BEFORE antibiotics where possible), blood counts,
          X-ray, oxygen trend. Ask: cough days, sputum colour, TB contact,
          HIV, smoking, vaccines.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Antibiotics fast (delay kills), oxygen for low saturation, fluids if
          dehydrated, fever control, upright position, chest physio, early
          movement. Severe: hospital oxygen, IV antibiotics, ICU if failing.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Mild (adult)</td>
              <td className="py-2">
                e.g. amoxicillin 500 mg–1 g three times daily, or
                co-amoxiclav if risk factors. Full course even when better.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Moderate/severe</td>
              <td className="py-2">
                e.g. ceftriaxone IV ± azithromycin per guideline. Hospital,
                oxygen, fluids, monitoring.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Supportive</td>
              <td className="py-2">
                Paracetamol for fever, oxygen to keep saturation up, fluids,
                cough patience (suppress only if exhausting). Watch allergy:
                rash, swelling, wheeze → stop and report.
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
          Upright + oxygen, antibiotics ON TIME (record exact hour), fever care,
          fluids, sputum hygiene (tissues, bins, handwash), deep breathing and
          walking as able. Watch: rising breathing rate + falling oxygen =
          escalate now.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Lung abscess, fluid around lung, blood infection, breathing failure.
          Prevention: vaccines (pneumococcal, flu where available), stop
          smoking, treat colds early in elderly, good nutrition, hand hygiene.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mrs D, 70: 3 days cough, fever 39°C, sharp pain breathing in, rate
          30, oxygen 90%, crackles right base. Nurse uprights her, oxygen,
          vitals, sputum before first antibiotic dose, fluids, paracetamol;
          hourly breathing watch; daughter taught sputum hygiene and vaccine
          after recovery.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Elderly + new confusion + fast breathing, no fever? → Suspect
          pneumonia: vitals, oxygen, lungs, escalate.
        </p>
        <p>
          Q2: First nursing position + measure? → Upright, ordered oxygen,
          watch rate and saturation.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Pneumonia" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Cough + fever + pain on breathing + fast rate → upright + oxygen +
          antibiotics on time. Back to:{" "}
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
