"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Step 1 — Arrival",
    body: "An 18-month-old is carried in: 8 watery stools today, vomited twice, mother says the child is unusually quiet.",
  },
  {
    title: "Step 2 — Look",
    body: "Restless but not floppy. Eyes sunken. Mouth dry. Tears few.",
  },
  {
    title: "Step 3 — Touch & measure",
    body: "Skin pinch goes back slowly. Drinks eagerly when offered. Last urine 5 hours ago.",
  },
  {
    title: "Step 4 — Background",
    body: "Well water at home, no ORS given yet, still breastfeeding. No blood in stool, no fever.",
  },
];

export default function DiarrhoeaScenario() {
  const [shown, setShown] = useState(1);
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/practice" className="text-sm underline">
        ← Practice
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Scenario — The Quiet Toddler</h1>
      <p className="opacity-70">
        Information comes step by step, like a real ward. Read, then decide.
      </p>

      <div className="mt-4 grid gap-3">
        {STEPS.slice(0, shown).map((s) => (
          <div key={s.title} className="rounded-2xl border p-4">
            <strong>{s.title}</strong>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      {shown < STEPS.length ? (
        <button
          onClick={() => setShown((n) => n + 1)}
          className="mt-3 rounded-xl px-4 py-2 text-white"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Reveal next ({shown + 1} of {STEPS.length})
        </button>
      ) : (
        <div className="mt-4 rounded-2xl border p-4">
          <strong>What grade is this, and what should the nurse do next?</strong>
          <div className="mt-2 grid gap-2">
            {[
              "No dehydration — send home with nothing",
              "Some dehydration — Plan B: ORS 75 mL/kg over 4 hours + zinc, keep feeding",
              "Severe — no fluids, starve the child",
            ].map((o, i) => (
              <button
                key={o}
                onClick={() => setPicked(i)}
                className="rounded-xl border p-3 text-left"
                style={
                  picked === null
                    ? undefined
                    : i === 1
                      ? { borderColor: "var(--pn-mint)", background: "#e6f4ec" }
                      : i === picked
                        ? {
                            borderColor: "var(--pn-coral)",
                            background: "#fbe9e4",
                          }
                        : undefined
                }
              >
                {o}
              </button>
            ))}
          </div>
          {picked !== null && (
            <div className="mt-3 rounded-xl border p-3">
              <strong>
                {picked === 1 ? "Correct." : "Not quite — here is why."}
              </strong>
              <p>
                Sunken eyes + slow skin + still drinking = SOME dehydration.
                Clinic ORS over 4 hours + zinc + continued breastfeeding. The
                child drinks, so no IV needed; starving worsens malnutrition.
              </p>
              <p className="text-sm opacity-70">
                Principle: grade first, then Plan A, B, or C. Review:{" "}
                <Link href="/learn/diarrhoea" className="underline">
                  Diarrhoea → Plan A/B/C
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
