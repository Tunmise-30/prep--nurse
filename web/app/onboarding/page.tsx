"use client";

import { useState } from "react";
import Link from "next/link";
import { TOPICS } from "../data/questions";
import { writeLocalJSON } from "../lib/local-store";

const SUBJECT_CHOICES = [
  "Medical-Surgical Nursing",
  "Fundamentals of Nursing",
  "Pharmacology",
  "Anatomy and Physiology",
  "Maternal and Child Health",
  "Community Health Nursing",
  "Mental Health Nursing",
  "Paediatric Nursing",
  "Nutrition",
  "Microbiology",
  "Pathophysiology",
];

const GOAL_CHOICES = [
  "Study for 30 minutes a day",
  "Complete one topic per week",
  "Answer 20 questions a day",
  "Finish all Med-Surg topics before my next exam",
  "Pass my next ND/HND examination",
];

const KNOWLEDGE_CHOICES = [
  { id: "Nigerian", label: "Nigerian focus" },
  { id: "International", label: "International focus" },
  { id: "Both", label: "Both (default)" },
] as const;

const STEPS = [
  "Program",
  "Level",
  "Subjects",
  "Difficult areas",
  "Goals",
  "Knowledge preference",
] as const;

interface Profile {
  program: string;
  level: string;
  subjects: string[];
  weakAreas: string[];
  goals: string[];
  knowledge: string;
  complete: boolean;
}

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [program, setProgram] = useState("HND");
  const [level, setLevel] = useState("Year 2");
  const [subjects, setSubjects] = useState<string[]>([
    "Medical-Surgical Nursing",
  ]);
  const [weakAreas, setWeakAreas] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [knowledge, setKnowledge] = useState<string>("Both");
  const [saved, setSaved] = useState(false);

  const canNext =
    step === 0 ? !!program : step === 2 ? subjects.length > 0 : true;

  function toggle(list: string[], item: string, set: (v: string[]) => void) {
    set(
      list.includes(item)
        ? list.filter((x) => x !== item)
        : [...list, item]
    );
  }

  function save() {
    const profile: Profile = {
      program,
      level,
      subjects,
      weakAreas,
      goals,
      knowledge,
      complete: true,
    };
    writeLocalJSON("pn-profile", profile);
    setSaved(true);
  }

  if (saved) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <h1 className="mt-2 font-serif text-3xl">
          You&apos;re all set, {program} {level} student
        </h1>
        <p className="mt-2 opacity-70">
          Program: <strong>{program}</strong> · Level:{" "}
          <strong>{level}</strong> · Knowledge: <strong>{knowledge}</strong>
        </p>
        <p className="mt-1 opacity-70">
          Subjects: {subjects.join(", ")}
        </p>
        {weakAreas.length > 0 && (
          <p className="mt-1 opacity-70">
            Difficult areas: {weakAreas.join(", ")}
          </p>
        )}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <Link
            href="/diagnostic"
            className="rounded-xl px-4 py-3 text-white"
            style={{ background: "var(--pn-lagoon)" }}
          >
            Take the diagnostic (2 min) →
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border px-4 py-3"
          >
            Go to dashboard →
          </Link>
        </div>
        <p className="mt-3 text-xs opacity-60">
          Saved on this PC only — real accounts come with the database
          step.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/" className="text-sm underline">
        ← Welcome
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Join Prep Nurse</h1>
      <p className="opacity-70">
        About a minute. Step {step + 1} of {STEPS.length}:{" "}
        <strong>{STEPS[step]}</strong>
      </p>
      <div className="mt-3 flex gap-1">
        {STEPS.map((s, i) => (
          <span
            key={s}
            className="h-1.5 flex-1 rounded-full"
            style={{
              background:
                i <= step ? "var(--pn-lagoon)" : "var(--pn-border, #ddd)",
            }}
          />
        ))}
      </div>

      <div className="mt-4 rounded-2xl border p-4">
        {step === 0 && (
          <div>
            <strong>Which program are you in?</strong>
            <div className="mt-2 flex gap-2">
              {["ND", "HND"].map((p) => (
                <button
                  key={p}
                  onClick={() => setProgram(p)}
                  className="rounded-xl border px-6 py-3"
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
          </div>
        )}

        {step === 1 && (
          <div>
            <strong>What level/year are you?</strong>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Year 1", "Year 2", "Year 3"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className="rounded-xl border px-6 py-3"
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
          </div>
        )}

        {step === 2 && (
          <div>
            <strong>
              Which subjects are you studying now? (pick at least one)
            </strong>
            <div className="mt-2 grid gap-2">
              {SUBJECT_CHOICES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggle(subjects, s, setSubjects)}
                  className="rounded-xl border px-4 py-2 text-left text-sm"
                  style={
                    subjects.includes(s)
                      ? {
                          borderColor: "var(--pn-lagoon)",
                          background: "#e8f4f8",
                        }
                      : undefined
                  }
                >
                  {subjects.includes(s) ? "✓ " : "○ "}
                  {s}
                </button>
              ))}
            </div>
            {!subjects.length && (
              <p className="mt-2 text-sm" style={{ color: "var(--pn-coral)" }}>
                Pick at least one subject to continue.
              </p>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <strong>
              Which topics do you find difficult? (optional)
            </strong>
            <div className="mt-2 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  onClick={() => toggle(weakAreas, t, setWeakAreas)}
                  className="rounded-full border px-3 py-1 text-sm"
                  style={
                    weakAreas.includes(t)
                      ? { background: "var(--pn-coral)", color: "#fff" }
                      : undefined
                  }
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm opacity-70">
              We&apos;ll point your weak-area practice here — you can
              change this later.
            </p>
          </div>
        )}

        {step === 4 && (
          <div>
            <strong>What do you want to achieve? (optional)</strong>
            <div className="mt-2 grid gap-2">
              {GOAL_CHOICES.map((g) => (
                <button
                  key={g}
                  onClick={() => toggle(goals, g, setGoals)}
                  className="rounded-xl border px-4 py-2 text-left text-sm"
                  style={
                    goals.includes(g)
                      ? { borderColor: "var(--pn-mint)", background: "#e6f4ec" }
                      : undefined
                  }
                >
                  {goals.includes(g) ? "✓ " : "○ "}
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <strong>Which nursing knowledge do you prefer?</strong>
            <div className="mt-2 grid gap-2">
              {KNOWLEDGE_CHOICES.map((k) => (
                <button
                  key={k.id}
                  onClick={() => setKnowledge(k.id)}
                  className="rounded-xl border px-4 py-2 text-left text-sm"
                  style={
                    knowledge === k.id
                      ? { borderColor: "var(--pn-lagoon)", background: "#e8f4f8" }
                      : undefined
                  }
                >
                  <strong>{k.label}</strong>
                  {k.id === "Nigerian" && (
                    <span className="block text-xs opacity-70">
                      Nigerian standards, drugs and guidelines first.
                    </span>
                  )}
                  {k.id === "International" && (
                    <span className="block text-xs opacity-70">
                      Internationally recognised principles first.
                    </span>
                  )}
                  {k.id === "Both" && (
                    <span className="block text-xs opacity-70">
                      Nigerian-focused, internationally informed — where
                      standards differ we say so.
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        {step > 0 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="rounded-xl border px-4 py-2"
          >
            ← Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="rounded-xl px-5 py-2 text-white disabled:opacity-40"
            style={{ background: "var(--pn-lagoon)" }}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={save}
            className="rounded-xl px-5 py-2 text-white"
            style={{ background: "var(--pn-coral)" }}
          >
            Save and continue
          </button>
        )}
      </div>
      <p className="mt-3 text-xs opacity-60">
        Saved on this PC only for now — real accounts come with the
        database step.
      </p>
    </div>
  );
}
