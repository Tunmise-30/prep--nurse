import Link from "next/link";

export default function PneumoniaLesson() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
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
      <p className="opacity-70">
        Teach → practical example → practise. Your choice: read first, or jump
        to questions.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn — what it is</strong>
        <p>
          Pneumonia = infection that fills the lung&apos;s air sacs with fluid
          and pus. Germs: bacteria (commonest serious), viruses, fungi.
          Spreads by droplets and thrives where immunity is low — the very
          young, old, malnourished, HIV-positive, smokers, and bedridden
          patients.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand — signs</strong>
        <p>
          Cough with yellow/green or rusty sputum, fever, chest pain on
          breathing, fast breathing, low oxygen, tiredness. In elderly: confusion
          may be the first sign, even without high fever. Crackles on listening;
          chest X-ray confirms.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply — practical example</strong>
        <p>
          A 70-year-old woman has 3 days of cough, fever 39°C, sharp chest pain
          when breathing in, breathing 30/min, oxygen 90%. The nurse sits her
          upright, gives ordered oxygen, checks ABCs and vitals, collects
          sputum before antibiotics where possible, starts fluids if allowed,
          and encourages deep breathing and early movement to open the lungs.
        </p>
        <p className="mt-2 text-sm opacity-80">
          <strong>Nursing care:</strong> upright position, oxygen as ordered,
          antipyretics and antibiotics on time, fluids, chest physiotherapy,
          watch breathing rate and oxygen — rising rate + falling oxygen means
          escalate fast.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Practise — check yourself</strong>
        <p>
          An elderly patient is newly confused with fast breathing but no
          fever. Best suspicion?
        </p>
        <p className="mt-1 text-sm">
          A. Normal ageing, ignore · B. Possible pneumonia — check vitals,
          oxygen, lungs, escalate · C. Give sedatives
        </p>
        <p className="mt-1 text-sm opacity-80">
          Answer: B — confusion can be the first pneumonia sign in the elderly.
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
          .
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember: cough + fever + chest pain + fast breathing = think
          pneumonia. Upright, oxygen, antibiotics on time, watch the breathing
          rate.
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
