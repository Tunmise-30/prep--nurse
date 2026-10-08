"use client";

import Link from "next/link";
import { QUESTIONS } from "../data/questions";
import { useLocalJSON, writeLocalJSON } from "../lib/local-store";

interface TopicStat {
  tried: number;
  ok: number;
}

interface Profile {
  program?: string;
  level?: string;
}

const GOALS = [
  "Study for 30 minutes today",
  "Complete one topic",
  "Answer 20 questions",
];

const SCENARIOS: Record<string, { href: string; title: string }> = {
  "Heart Failure": {
    href: "/scenarios/heart-failure",
    title: "Breathless in Heart Failure",
  },
  Diabetes: {
    href: "/scenarios/hypoglycemia",
    title: "Low Sugar Crash",
  },
  Stroke: {
    href: "/scenarios/stroke",
    title: "Sudden Slurred Speech",
  },
  Asthma: {
    href: "/scenarios/asthma",
    title: "Wheeze Going Quiet",
  },
  Diarrhoea: {
    href: "/scenarios/diarrhoea",
    title: "The Quiet Toddler",
  },
};

const NO_STATS: Record<string, TopicStat> = {};
const NO_GOALS: boolean[] = [false, false, false];
const NO_PROFILE: Profile = {};

export default function ProgressPage() {
  const stats = useLocalJSON<Record<string, TopicStat>>(
    "pn-practice",
    NO_STATS
  );
  const goals = useLocalJSON<boolean[]>("pn-goals", NO_GOALS);
  const profile = useLocalJSON<Profile>("pn-profile", NO_PROFILE);

  function toggleGoal(i: number) {
    writeLocalJSON(
      "pn-goals",
      goals.map((g, n) => (n === i ? !g : g))
    );
  }

  const topics = [...new Set(QUESTIONS.map((q) => q.topic))];
  const totalTried = Object.values(stats).reduce((s, t) => s + t.tried, 0);
  const totalOk = Object.values(stats).reduce((s, t) => s + t.ok, 0);
  const profileText = profile.program
    ? `${profile.program}, ${profile.level ?? ""}`
    : "";

  // Adaptive revision digest (PRD Sec 13): status per subject +
  // a concrete next-actions list weighted toward weak topics.
  const weakList = topics.filter((t) => {
    const s = stats[t];
    return !!s && s.tried > 0 && s.ok / s.tried < 0.7;
  });
  const subjectDigest = [...new Set(QUESTIONS.map((q) => q.subject))]
    .map((subj) => {
      const qs = QUESTIONS.filter((q) => q.subject === subj);
      const tried = qs.reduce((s, q) => s + (stats[q.topic]?.tried ?? 0), 0);
      const ok = qs.reduce((s, q) => s + (stats[q.topic]?.ok ?? 0), 0);
      return {
        subj,
        tried,
        acc: tried ? Math.round((ok / tried) * 100) : null,
      };
    })
    .filter((s) => s.tried > 0);
  const weakest = weakList[0]
    ? QUESTIONS.find((q) => q.topic === weakList[0])
    : undefined;
  const weakestScenario = weakList.length
    ? SCENARIOS[weakList[0]]
    : undefined;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Your Progress</h1>
      <p className="opacity-70">
        Where am I now, and what should I work on next?{" "}
        {profileText ? `(${profileText})` : ""}
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

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Your revision plan — what to work on next</strong>
        {subjectDigest.length ? (
          <div className="mt-2 grid gap-2">
            {subjectDigest.map((s) => (
              <p
                key={s.subj}
                className="text-sm"
                style={
                  s.acc !== null && s.acc < 70
                    ? { color: "var(--pn-coral)" }
                    : { color: "var(--pn-mint)" }
                }
              >
                {s.acc !== null && s.acc >= 70 ? "✅" : "🔧"}{" "}
                {s.subj}: {s.acc}% —{" "}
                {s.acc !== null && s.acc >= 70
                  ? "strong, keep warm"
                  : "needs revision"}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm opacity-70">
            Attempt some questions and this builds itself.
          </p>
        )}
        {weakest && (
          <div className="mt-3 grid gap-2">
            <p className="text-sm font-bold">
              1. Review{" "}
              <Link href={weakest.reviewHref} className="underline">
                {weakest.reviewLabel}
              </Link>
            </p>
            <Link
              href="/practice"
              className="rounded-xl border px-3 py-2 text-sm"
            >
              2. Practise 10 weak-area questions →
            </Link>
            {weakestScenario && (
              <Link
                href={weakestScenario.href}
                className="rounded-xl border px-3 py-2 text-sm"
              >
                3. Run the scenario: {weakestScenario.title} →
              </Link>
            )}
            <Link
              href="/diagnostic"
              className="rounded-xl border px-3 py-2 text-sm"
            >
              4. Retake the diagnostic in two weeks →
            </Link>
          </div>
        )}
      </div>

      <p className="mt-3 text-xs opacity-60">
        Saved on this PC only for now. Real accounts + history come with the
        database step (Phase 4 remainder).
      </p>
    </div>
  );
}
