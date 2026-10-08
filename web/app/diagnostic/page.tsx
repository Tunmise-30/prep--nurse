"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  QUESTIONS,
  pickRandom,
  type Question,
} from "../data/questions";
import { writeLocalJSON } from "../lib/local-store";

const DIAGNOSTIC_COUNT = 20;

interface SubjectScore {
  tried: number;
  ok: number;
}

interface DiagnosticResult {
  date: string;
  total: number;
  ok: number;
  bySubject: Record<string, SubjectScore>;
  weakTopics: string[];
}

function buildDiagnostic(n: number): Question[] {
  const bySubject = new Map<string, Question[]>();
  for (const q of QUESTIONS) {
    const arr = bySubject.get(q.subject) || [];
    arr.push(q);
    bySubject.set(q.subject, arr);
  }
  const subjects = [...bySubject.keys()];
  const pools = subjects.map((s) =>
    pickRandom(bySubject.get(s) ?? [], Math.ceil(n / subjects.length))
  );
  const result: Question[] = [];
  for (let round = 0; round < Math.ceil(n / subjects.length); round++) {
    for (const pool of pools) {
      if (round < pool.length) {
        result.push(pool[round]);
        if (result.length >= n) return result;
      }
    }
  }
  return result;
}

function isCorrect(q: Question, picked: number): boolean {
  return q.answer.includes(picked);
}

export default function DiagnosticPage() {
  const [phase, setPhase] = useState<"intro" | "quiz" | "done">(
    "intro"
  );
  const [quiz] = useState<Question[]>(() =>
    buildDiagnostic(DIAGNOSTIC_COUNT)
  );
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<
    { q: Question; picked: number | null; ok: boolean }[]
  >([]);

  const q = quiz[index];

  const summary = useMemo(() => {
    if (!results.length) return null;
    const bySubject = new Map<string, SubjectScore>();
    let ok = 0;
    const weakTopics: string[] = [];
    for (const r of results) {
      const s = bySubject.get(r.q.subject) || { tried: 0, ok: 0 };
      s.tried += 1;
      if (r.ok) {
        s.ok += 1;
        ok += 1;
      } else {
        weakTopics.push(r.q.topic);
      }
      bySubject.set(r.q.subject, s);
    }
    return {
      total: results.length,
      ok,
      bySubject: Object.fromEntries(bySubject),
      weakTopics: [...new Set(weakTopics)],
    };
  }, [results]);

  function answer(i: number) {
    setPicked(i);
  }

  function next() {
    if (picked === null || !q) return;
    const r = { q, picked, ok: isCorrect(q, picked) };
    const nextResults = [...results, r];
    setResults(nextResults);
    setPicked(null);
    if (index + 1 >= quiz.length) {
      const bySubject: Record<string, SubjectScore> = {};
      let okCount = 0;
      const weakTopics: string[] = [];
      for (const item of nextResults) {
        const s = bySubject[item.q.subject] || { tried: 0, ok: 0 };
        s.tried += 1;
        if (item.ok) {
          s.ok += 1;
          okCount += 1;
        } else {
          weakTopics.push(item.q.topic);
        }
        bySubject[item.q.subject] = s;
      }
      const snapshot: DiagnosticResult = {
        date: new Date().toISOString(),
        total: nextResults.length,
        ok: okCount,
        bySubject,
        weakTopics: [...new Set(weakTopics)],
      };
      writeLocalJSON("pn-diagnostic", snapshot);
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (phase === "intro") {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <Link href="/dashboard" className="text-sm underline">
          ← Home
        </Link>
        <h1 className="mt-2 font-serif text-3xl">
          Diagnostic assessment
        </h1>
        <p className="opacity-70">
          Find your starting point:{" "}
          <strong>Strong in X, revise Y</strong>.
        </p>
        <div className="mt-4 rounded-2xl border p-4">
          <ul className="list-disc pl-5 text-sm opacity-80">
            <li>{DIAGNOSTIC_COUNT} mixed questions across all your subjects</li>
            <li>About 5 minutes — no clock, no penalty</li>
            <li>No feedback mid-test; full breakdown at the end</li>
            <li>Results: subject scores, weak topics, and what to revise next</li>
          </ul>
        </div>
        <button
          onClick={() => setPhase("quiz")}
          className="mt-4 rounded-xl px-5 py-2 text-white"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Start diagnostic
        </button>
        <p className="mt-3 text-xs opacity-60">
          Optional — but it shapes your weak-area practice.
        </p>
      </div>
    );
  }

  if (phase === "quiz" && q) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="text-sm underline">
            ← Home
          </Link>
          <span className="text-sm opacity-70">
            Q{index + 1} of {quiz.length}
          </span>
        </div>
        <p className="mt-2 text-xs opacity-60">
          {q.subject} · {q.topic}
        </p>
        <h1 className="mt-1 text-xl">{q.stem}</h1>
        <div className="mt-3 grid gap-2">
          {q.options.map((o, i) => (
            <button
              key={i}
              onClick={() => answer(i)}
              className="rounded-xl border p-3 text-left"
              style={
                picked === i
                  ? { borderColor: "var(--pn-lagoon)" }
                  : undefined
              }
            >
              {String.fromCharCode(65 + i)}. {o}
            </button>
          ))}
        </div>
        <button
          onClick={next}
          disabled={picked === null}
          className="mt-3 rounded-xl px-4 py-2 text-white disabled:opacity-40"
          style={{ background: "var(--pn-coral)" }}
        >
          {index + 1 >= quiz.length ? "See my results" : "Next →"}
        </button>
      </div>
    );
  }

  if (!summary) return null;

  const pct = Math.round((summary.ok / summary.total) * 100);
  const subjectRows = Object.entries(summary.bySubject);
  const strongSubjects = subjectRows.filter(
    ([, s]) => s.ok / s.tried >= 0.7
  );
  const weakSubjects = subjectRows.filter(
    ([, s]) => s.ok / s.tried < 0.7
  );
  const weakLessonLinks = summary.weakTopics
    .map((t) => QUESTIONS.find((x) => x.topic === t))
    .filter((x) => x !== undefined);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">
        Your starting point
      </h1>
      <div className="mt-3 rounded-2xl border p-4">
        <p className="text-xl">
          Diagnostic score: {summary.ok} of {summary.total} ({pct}%)
        </p>
        <p className="mt-2 text-sm opacity-70">
          By subject:
        </p>
        <div className="mt-2 grid gap-2">
          {subjectRows.map(([subj, s]) => {
            const acc = Math.round((s.ok / s.tried) * 100);
            const strong = acc >= 70;
            return (
              <div
                key={subj}
                className="rounded-xl border px-3 py-2 text-sm"
                style={
                  strong
                    ? { borderColor: "var(--pn-mint)" }
                    : { borderColor: "var(--pn-coral)" }
                }
              >
                <strong>{subj}</strong> — {s.ok}/{s.tried} ({acc}%){" "}
                {strong ? "· strong" : "· needs revision"}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Recommended next steps</strong>
        {strongSubjects.length > 0 && (
          <p className="mt-2 text-sm">
            ✅ Strong in:{" "}
            {strongSubjects.map(([s]) => s).join(", ")}.
          </p>
        )}
        {weakSubjects.length > 0 && (
          <p className="mt-1 text-sm">
            🔧 Needs revision:{" "}
            {weakSubjects.map(([s]) => s).join(", ")}.
          </p>
        )}
        {weakLessonLinks.length > 0 ? (
          <div className="mt-3">
            <p className="text-sm font-bold">
              1. Revise these topics first:
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {weakLessonLinks.map((l) => (
                <Link
                  key={l.id}
                  href={l.reviewHref}
                  className="rounded-full border px-3 py-1 text-sm underline"
                >
                  {l.reviewLabel}
                </Link>
              ))}
            </div>
            <p className="mt-3 text-sm font-bold">
              2. Then practise your weak areas:
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="/practice"
                className="rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: "var(--pn-lagoon)" }}
              >
                Weak-area practice →
              </Link>
              <Link
                href="/exams"
                className="rounded-xl border px-4 py-2 text-sm"
              >
                Take a mock exam
              </Link>
            </div>
          </div>
        ) : (
          <p className="mt-2 text-sm">
            Clean diagnostic — everything you met, you knew. Keep
            practising to stay sharp.
          </p>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => {
            setPhase("intro");
            setIndex(0);
            setPicked(null);
            setResults([]);
          }}
          className="rounded-xl border px-4 py-2"
        >
          Retake diagnostic
        </button>
        <Link
          href="/dashboard"
          className="rounded-xl px-4 py-2 text-white"
          style={{ background: "var(--pn-coral)" }}
        >
          Back to dashboard
        </Link>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Snapshot saved on this PC. Retake after two weeks of
        practice to see improvement.
      </p>
    </div>
  );
}
