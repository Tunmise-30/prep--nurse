"use client";

import { useState } from "react";
import Link from "next/link";

export default function OnboardingPage() {
  const [program, setProgram] = useState("HND");
  const [level, setLevel] = useState("Year 2");
  const [saved, setSaved] = useState(false);

  function save() {
    localStorage.setItem(
      "pn-profile",
      JSON.stringify({ program, level, knowledge: "Both" })
    );
    setSaved(true);
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Join Prep Nurse</h1>
      <p className="opacity-70">
        Tell us who you are. Saved on this PC only for now — real accounts come
        with the database step.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <label className="block text-sm">Program</label>
        <div className="mt-1 flex gap-2">
          {["ND", "HND"].map((p) => (
            <button
              key={p}
              onClick={() => setProgram(p)}
              className="rounded-xl border px-4 py-2"
              style={
                program === p
                  ? { background: "var(--pn-lagoon)", color: "#fff" }
                  : undefined
              }
            >
              {p}
            </button>
          ))}
        </div>

        <label className="mt-4 block text-sm">Level</label>
        <div className="mt-1 flex gap-2">
          {["Year 1", "Year 2", "Year 3"].map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className="rounded-xl border px-4 py-2"
              style={
                level === l
                  ? { background: "var(--pn-lagoon)", color: "#fff" }
                  : undefined
              }
            >
              {l}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm opacity-70">
          Knowledge: <strong>Both</strong> (Nigerian + international) — the
          default from the PRD.
        </p>

        <button
          onClick={save}
          className="mt-3 rounded-xl px-4 py-2 text-white"
          style={{ background: "var(--pn-coral)" }}
        >
          Save and continue
        </button>
        {saved && (
          <p className="mt-2 text-sm">
            Saved: {program}, {level}. Next:{" "}
            <Link href="/curriculum" className="underline">
              see subjects
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
