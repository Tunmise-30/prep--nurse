"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Step 1 — Arrival",
    body: "Patient: 65-year-old admitted with heart failure. You enter the room for morning checks.",
  },
  {
    title: "Step 2 — Complaint",
    body: "Patient reports: “I cannot breathe well, nurse. It is worse when I lie flat.”",
  },
  {
    title: "Step 3 — Vital signs",
    body: "BP 150/95, pulse 110, breathing 28/min, oxygen 89% on air, temperature 36.8°C.",
  },
  {
    title: "Step 4 — Assessment",
    body: "Lungs: crackles both bases. Feet: swollen ankles. Weight: +2 kg in 2 days. Neck veins look full.",
  },
];

export default function ScenarioPage() {
  const [shown, setShown] = useState(1);
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/practice" className="text-sm underline">
        ← Practice
      </Link>
      <h1 className="mt-2 font-serif text-3xl">
        Scenario — Breathless in Heart Failure
      </h1>
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
          <strong>What should the nurse do next?</strong>
          <div className="mt-2 grid gap-2">
            {[
              "Lay the patient flat and return later",
              "Sit upright, give ordered oxygen, check ABCs, call for urgent help",
              "Offer tea and ask the patient to wait",
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
                Upright + oxygen + ABCs + urgent help: lungs are filling with
                fluid (crackles, low oxygen, fast breathing) on top of fluid
                overload (weight gain, swelling). Lying flat or waiting risks
                collapse.
              </p>
              <p className="text-sm opacity-70">
                Principle: breathlessness with low oxygen always wins priority.
                Review:{" "}
                <Link href="/learn/heart-failure" className="underline">
                  Heart Failure → Nursing management
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
