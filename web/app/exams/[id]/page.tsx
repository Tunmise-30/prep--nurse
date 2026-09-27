"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getExam, examQuestions } from "../../data/exams";
import type { Question } from "../../data/questions";

function isCorrect(q: Question, picked: number[]): boolean {
  if (q.format === "multi") {
    return (
      picked.length === q.answer.length &&
      q.answer.every((a) => picked.includes(a))
    );
  }
  return picked.length === 1 && q.answer.includes(picked[0]);
}

export default function ExamRunner() {
  const params = useParams<{ id: string }>();
  const exam = getExam(params.id);
  const questions = useMemo(() => examQuestions(params.id), [params.id]);

  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState((exam?.minutes ?? 10) * 60);
  const [startedAt] = useState(() => Date.now());

  useEffect(() => {
    if (submitted || !exam) return;
    if (secondsLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [submitted, exam, secondsLeft]);

  if (!exam) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <Link href="/exams" className="text-sm underline">
          ← Exams
        </Link>
        <p className="mt-2">Exam not found.</p>
      </div>
    );
  }

  const mins = Math.floor(secondsLeft / 60);
  const secs = String(secondsLeft % 60).padStart(2, "0");

  function toggle(qid: string, i: number, multi: boolean) {
    if (submitted) return;
    setAnswers((a) => {
      const cur = a[qid] ?? [];
      if (multi) {
        return {
          ...a,
          [qid]: cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i],
        };
      }
      return { ...a, [qid]: [i] };
    });
  }

  if (!submitted) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/exams" className="text-sm underline">
            ← Exams
          </Link>
          <span className="text-sm">
            ⏱ {mins}:{secs}
          </span>
        </div>
        <h1 className="mt-2 font-serif text-2xl">{exam.title}</h1>
        <p className="text-sm opacity-70">
          Answer all {questions.length} questions, then submit once — like the
          real exam.
        </p>
        <div className="mt-4 grid gap-4">
          {questions.map((q, n) => (
            <div key={q.id} className="rounded-2xl border p-4">
              <p className="text-sm">
                <strong>
                  {n + 1}. [{q.topic}]
                </strong>{" "}
                {q.stem}
              </p>
              <div className="mt-2 grid gap-2">
                {q.options.map((o, i) => {
                  const sel = (answers[q.id] ?? []).includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggle(q.id, i, q.format === "multi")}
                      className="rounded-xl border p-2 text-left text-sm"
                      style={
                        sel ? { borderColor: "var(--pn-lagoon)" } : undefined
                      }
                    >
                      {String.fromCharCode(65 + i)}. {o}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setSubmitted(true)}
          className="mt-4 rounded-xl px-5 py-2 text-white"
          style={{ background: "var(--pn-coral)" }}
        >
          Submit exam
        </button>
      </div>
    );
  }

  const results = questions.map((q) => ({
    q,
    picked: answers[q.id] ?? [],
    ok: isCorrect(q, answers[q.id] ?? []),
  }));
  const score = results.filter((r) => r.ok).length;
  const missed = results.filter((r) => !r.ok);
  const missedTopics = [...new Set(missed.map((r) => r.q.topic))];
  const timeUsed = Math.round((Date.now() - startedAt) / 1000);
  const usedMins = Math.floor(timeUsed / 60);
  const usedSecs = String(timeUsed % 60).padStart(2, "0");

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/exams" className="text-sm underline">
        ← Exams
      </Link>
      <h1 className="mt-2 font-serif text-2xl">Review — {exam.title}</h1>
      <div className="mt-3 rounded-2xl border p-4">
        <p className="text-xl">
          Score: {score} of {questions.length} (
          {Math.round((score / questions.length) * 100)}%)
        </p>
        <p className="text-sm opacity-70">
          Correct: {score} · Missed: {missed.length} · Time spent: {usedMins}:
          {usedSecs}
        </p>
        {missedTopics.length ? (
          <p className="mt-2 text-sm">
            Areas to revise: {missedTopics.join(", ")}.{" "}
            {missedTopics.map((t) => {
              const l = questions.find((x) => x.topic === t);
              return l ? (
                <Link key={t} href={l.reviewHref} className="mr-2 underline">
                  {l.reviewLabel}
                </Link>
              ) : null;
            })}
          </p>
        ) : (
          <p className="mt-2 text-sm">Perfect paper — nothing to revise.</p>
        )}
      </div>

      <div className="mt-4 grid gap-3">
        {results.map((r, n) => (
          <div
            key={r.q.id}
            className="rounded-2xl border p-4"
            style={
              r.ok
                ? { borderColor: "var(--pn-mint)" }
                : { borderColor: "var(--pn-coral)" }
            }
          >
            <p className="text-sm">
              <strong>
                {n + 1}. {r.ok ? "✓" : "✗"} [{r.q.topic}]
              </strong>{" "}
              {r.q.stem}
            </p>
            <p className="mt-1 text-sm">{r.q.explanation}</p>
            <p className="text-sm opacity-70">
              Principle: {r.q.principle} Review:{" "}
              <Link href={r.q.reviewHref} className="underline">
                {r.q.reviewLabel}
              </Link>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Link href="/exams" className="rounded-xl border px-4 py-2">
          Other exams
        </Link>
        <Link
          href="/practice"
          className="rounded-xl px-4 py-2 text-white"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Practise weak topics
        </Link>
      </div>
    </div>
  );
}
