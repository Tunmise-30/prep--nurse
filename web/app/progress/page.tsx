"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QUESTIONS } from "../data/questions";

interface TopicStat {
  tried: number;
  ok: number;
}

const GOALS = [
  "Study for 30 minutes today",
  "Complete one topic",
  "Answer 20 questions",
];

export default function ProgressPage() {
  const [stats, setStats] = useState<Record<string, TopicStat>>({});
  const [goals, setGoals] = useState<boolean[]>([false, false, false]);
  const [profile, setProfile] = useState<string>("");

  useEffect(() => {
    try {
      setStats(JSON.parse(localStorage.getItem("pn-practice") || "{}"));
      setGoals(
        JSON.parse(localStorage.getItem("pn-goals") || "[false,false,false]")
      );
      const p = localStorage.getItem("pn-profile");
      if (p) {
        const { program, level } = JSON.parse(p);
        setProfile(`${program}, ${level}`);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function toggleGoal(i: number) {
    const next = goals.map((g, n) => (n === i ? !g : g));
    setGoals(next);
    try {
      localStorage.setItem("pn-goals", JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }

  const topics = [...new Set(QUESTIONS.map((q) => q.topic))];
  const totalTried = Object.values(stats).reduce((s, t) => s + t.tried, 0);
  const totalOk = Object.values(stats).reduce((s, t) => s + t.ok, 0);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Your Progress</h1>
      <p className="opacity-70">
        Where am I now, and what should I work on next?{" "}
        {profile ? `(${profile})` : ""}
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>
          Overall: {totalTried} tried ·{" "}
          {totalTried ? Math.round((totalOk / totalTried) * 100) : 0}% correct
        </strong>
        <div className="mt-2 grid gap-2">
          {topics.map((t) => {
            const s = stats[t];
            const acc =
              s && s.tried ? Math.round((s.ok / s.tried) * 100) : null;
            const weak = acc !== null && acc < 70;
            const lesson = QUESTIONS.find((q) => q.topic === t);
            return (
              <div
                key={t}
                className="flex items-center justify-between rounded-xl border px-3 py-2 text-sm"
                style={
                  weak ? { borderColor: "var(--pn-coral)" } : undefined
                }
              >
                <span>
                  <strong>{t}</strong> —{" "}
                  {s ? `${s.ok}/${s.tried} (${acc}%)` : "not tried yet"}
                  {weak ? " · needs revision" : ""}
                </span>
                {lesson && (
                  <Link href={lesson.reviewHref} className="underline">
                    Revise
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Today&apos;s goals</strong>
        <div className="mt-2 grid gap-2">
          {GOALS.map((g, i) => (
            <button
              key={g}
              onClick={() => toggleGoal(i)}
              className="rounded-xl border px-3 py-2 text-left text-sm"
              style={
                goals[i] ? { borderColor: "var(--pn-mint)" } : undefined
              }
            >
              {goals[i] ? "☑ " : "☐ "} {g}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs opacity-60">
        Saved on this PC only for now. Real accounts + history come with the
        database step (Phase 4 remainder).
      </p>
    </div>
  );
}
