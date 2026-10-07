"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Step 1 — Scene",
    body: "Outpatient bench: relatives say a 62-year-old man suddenly speaks strangely.",
  },
  {
    title: "Step 2 — FAST check",
    body: "Face: left side droops. Arms: left arm drifts down. Speech: slurred words.",
  },
  {
    title: "Step 3 — Numbers",
    body: "Onset 40 minutes ago. BP 180/105, sugar 6.1 (normal), pulse 96, alert.",
  },
  {
    title: "Step 4 — History",
    body: "Known hypertension, missed drugs for weeks. No injury, no fever, no seizure witnessed.",
  },
];

export default function StrokeScenario() {
  const [shown, setShown] = useState(1);
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/practice" className="text-sm underline">
        ← Practice
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Scenario — Sudden Slurred Speech</h1>
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
              "Offer food and water first",
              "Record onset time, ABCs, nil by mouth until swallow tested, urgent scan",
              "Ask him to drive home and rest",
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
                FAST-positive within the hour + normal sugar = stroke until
                proven otherwise. Time, airway, no food before swallow test,
                and urgent scan decide clot vs bleed treatment.
              </p>
              <p className="text-sm opacity-70">
                Principle: FAST + clock + sugar + scan. Review:{" "}
                <Link href="/learn/stroke" className="underline">
                  Stroke → Apply
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
