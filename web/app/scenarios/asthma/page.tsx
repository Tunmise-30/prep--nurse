"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Step 1 — Call",
    body: "A 9-year-old known asthmatic runs in from football, clutching the chest, wheezing loudly.",
  },
  {
    title: "Step 2 — Speech test",
    body: "Speaks only single words between breaths. Breathing 36/min, pulse 128.",
  },
  {
    title: "Step 3 — Numbers",
    body: "Oxygen 90% on air. No fever. Has a blue reliever inhaler but no spacer, technique poor.",
  },
  {
    title: "Step 4 — Trend",
    body: "Ten minutes later wheeze fades but the child grows drowsy — chest going quiet.",
  },
];

export default function AsthmaScenario() {
  const [shown, setShown] = useState(1);
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/practice" className="text-sm underline">
        ← Practice
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Scenario — Wheeze Going Quiet</h1>
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
              "Reassure: quieter wheeze means recovery, send to play",
              "Emergency: silent chest + drowsy — upright, oxygen, reliever via spacer, urgent help, never leave alone",
              "Cold water and a heavy meal",
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
                Words-only speech was already severe; a quieting chest with
                drowsiness means almost no air moves — life-threatening. Upright,
                oxygen, reliever puffs, emergency team, constant watch.
              </p>
              <p className="text-sm opacity-70">
                Principle: silent chest = loudest alarm. Review:{" "}
                <Link href="/learn/asthma" className="underline">
                  Asthma → Red flags
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
