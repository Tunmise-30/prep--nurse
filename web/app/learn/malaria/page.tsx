import Link from "next/link";
import LessonTools from "../LessonTools";

export default function MalariaLesson() {
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
          Haematology / Infectious
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Severe Malaria</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Malaria = mosquito-borne parasite (Plasmodium falciparum, deadliest)
          destroying red blood cells. Uncomplicated = fever + well;{" "}
          <strong>severe</strong> = danger signs (confusion, convulsions, no
          urine, yellow eyes, bleeding, very pale, breathing hard).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Cause: infected Anopheles bite at night. Risks: no nets, stagnant
          water, pregnancy (low immunity), children under 5, HIV, delayed
          treatment, fake/half drugs.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Parasites burst red cells in cycles → fever spikes, anaemia, yellow
          eyes. In severe disease they plug brain vessels (cerebral malaria:
          coma/convulsions), kidneys (no urine), lungs (breathing failure), and
          drop sugar dangerously.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Cycles: cold shivering → hot fever (39–40°C) → sweating fall.
          Headache, vomiting, body pain, bitter taste. Severe red flags: fits,
          unconsciousness, inability to sit/drink, dark/no urine, yellow eyes,
          bleeding, extreme pallor.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Rapid test (mRDT) + microscopy where available, temperature chart,
          pallor, urine output/colour, sugar (fits + coma?), consciousness
          level, pregnancy test. Ask: fever days, convulsions, urine, drugs
          taken, nets, pregnancy.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Uncomplicated: artemisinin combination (ACT) full 3-day course +
          fluids + fever care. Severe: IV artesunate urgently + fluids + oxygen
          + treat sugar fits + transfuse if critically pale + nurse in high
          dependency.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Uncomplicated</td>
              <td className="py-2">
                e.g. artemether-lumefantrine twice daily for 3 days WITH food
                (fat helps absorption). Finish all 6 doses even when better.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Severe</td>
              <td className="py-2">
                IV artesunate at 0, 12, 24 hours then daily per order — fastest
                killer of parasites. Then complete ACT course when swallowing.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Supportive</td>
              <td className="py-2">
                Paracetamol, fluids, glucose for low sugar, anticonvulsant
                standby, transfusion per threshold. Never IM injections in
                bleeding-risk patients.
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
          Tepid sponging + paracetamol for high fever, strict fluids in/out,
          hourly consciousness + urine + sugar in severe cases, seizure
          precautions (padded bed, nothing in mouth, side position after fit),
          nets hung before discharge, full-dose teaching.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Cerebral malaria, kidney failure, severe anaemia, miscarriage, death
          within hours if severe and untreated. Prevention: nets every night,
          drain stagnant water, intermittent preventive treatment in pregnancy,
          prompt testing of every fever.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Musa, 4: fever 2 days, vomited twice, then a fit at home, drowsy
          after, very pale, mRDT positive, sugar low. Nurse positions him on
          his side, checks ABCs, corrects sugar per order, starts IV artesunate
          per prescription, monitors consciousness/urine hourly; mother taught
          nets + full 3-day course + danger signs after discharge.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Child with fever + fit + drowsy + positive test? → Severe malaria:
          side position, sugar, urgent IV artesunate.
        </p>
        <p>
          Q2: ACT course feeling better on day 2? → Finish all 6 doses or
          parasites return resistant.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Severe Malaria" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Fever cycles + danger signs → test fast → ACT 3 days or IV artesunate
          + sugar/urine watch. Next:{" "}
          <Link href="/learn/peptic-ulcer" className="underline">
            Peptic Ulcer Disease
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
