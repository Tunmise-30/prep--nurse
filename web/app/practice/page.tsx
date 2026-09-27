"use client";

import { useState } from "react";
import Link from "next/link";

const OPTIONS = [
  "What the patient ate for breakfast",
  "The patient's favourite music",
  "Airway, breathing, circulation + repeat BP, urgent review",
  "Discharge the patient home",
];

export default function PracticePage() {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === 2;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Practice — 1 question</h1>
      <p className="opacity-70">
        A patient has severe headache, blurred vision, BP 190/120 mmHg. What
        should the nurse assess first?
      </p>

      <div className="mt-3 grid gap-2">
        {OPTIONS.map((o, i) => (
          <button
            key={o}
            onClick={() => setPicked(i)}
            className="rounded-xl border p-3 text-left"
            style={
              picked === null
                ? undefined
                : i === 2
                  ? { borderColor: "var(--pn-mint)", background: "#e6f4ec" }
                  : i === picked
                    ? { borderColor: "var(--pn-coral)", background: "#fbe9e4" }
                    : undefined
            }
          >
            {String.fromCharCode(65 + i)}. {o}
          </button>
        ))}
      </div>

      {picked !== null && (
        <div className="mt-3 rounded-2xl border p-4">
          <strong>{correct ? "Correct." : "Not quite — here is why."}</strong>
          <p>
            C is correct: ABCs first, confirm the high reading, escalate —
            possible hypertensive emergency.
          </p>
          <p className="text-sm opacity-70">
            Why others are wrong: food/music do not address danger; discharge
            is unsafe. Principle: prioritise life-threatening findings. Review:
            Hypertension → Nursing management.
          </p>
          <button
            onClick={() => setPicked(null)}
            className="mt-2 rounded-xl border px-4 py-2"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
