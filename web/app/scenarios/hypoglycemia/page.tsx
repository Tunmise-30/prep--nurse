"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Step 1 — Call",
    body: "Ward bell: a diabetic patient on insulin is sweating heavily and shouting strangely.",
  },
  {
    title: "Step 2 — What you see",
    body: "Hands shaking, shirt soaked, confused speech, irritable when touched.",
  },
  {
    title: "Step 3 — Numbers",
    body: "Bedside sugar: 2.8 mmol/L (very low). Pulse 112, awake but confused, can still swallow.",
  },
  {
    title: "Step 4 — Background",
    body: "Took morning insulin, then skipped breakfast for a scan. No chest pain, no weakness on one side.",
  },
];

export default function HypoScenario() {
  const [shown, setShown] = useState(1);
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/practice" className="text-sm underline">
        ← Practice
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Scenario — Low Sugar Crash</h1>
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
              "Give more insulin immediately",
              "Fast sugar by mouth (awake + can swallow), recheck in 15 min, then snack",
              "Send the patient to sleep it off",
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
                Awake + swallowing + sugar 2.8 = 15 g fast sugar now, recheck in
                15 minutes, repeat if still low, then a snack. More insulin or
                sleep would deepen the crash; unconscious patients get nothing
                by mouth.
              </p>
              <p className="text-sm opacity-70">
                Principle: low sugar kills faster than high sugar. Review:{" "}
                <Link href="/learn/diabetes" className="underline">
                  Diabetes → Low-sugar rescue
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
