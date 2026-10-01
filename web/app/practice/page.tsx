"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { QUESTIONS, TOPICS, pickRandom, type Question } from "../data/questions";

type Mode = "quick" | "topic" | "timed";

function isCorrect(q: Question, picked: number[]): boolean {
  if (q.format === "multi") {
    return (
      picked.length === q.answer.length &&
      q.answer.every((a) => picked.includes(a))
    );
  }
  return picked.length === 1 && q.answer.includes(picked[0]);
}

export default function PracticePage() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [missedTopics, setMissedTopics] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(300);
  const [finished, setFinished] = useState(false);

  const q = quiz[index];

  useEffect(() => {
    if (mode !== "timed" || !quiz.length || finished) return;
    if (secondsLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [mode, quiz, finished, secondsLeft]);

  function start(m: Mode) {
    let pool = QUESTIONS;
    if (m === "topic") pool = QUESTIONS.filter((x) => x.topic === topic);
    if (!pool.length) pool = QUESTIONS;
    const n = m === "quick" ? 5 : m === "timed" ? 5 : 5;
    setQuiz(pickRandom(pool, Math.min(n, pool.length)));
    setMode(m);
    setIndex(0);
    setPicked([]);
    setLocked(false);
    setScore(0);
    setMissedTopics([]);
    setSecondsLeft(300);
    setFinished(false);
  }

  function toggle(i: number) {
    if (locked || !q) return;
    if (q.format === "multi") {
      setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
    } else {
      setPicked([i]);
    }
  }

  function submit() {
    if (locked || !q || !picked.length) return;
    setLocked(true);
    const ok = isCorrect(q, picked);
    if (ok) {
      setScore((s) => s + 1);
    } else {
      setMissedTopics((t) => [...t, q.topic]);
    }
    try {
      const raw = localStorage.getItem("pn-practice") || "{}";
      const store = JSON.parse(raw);
      store[q.topic] = store[q.topic] || { tried: 0, ok: 0 };
      store[q.topic].tried += 1;
      if (ok) store[q.topic].ok += 1;
      localStorage.setItem("pn-practice", JSON.stringify(store));
    } catch {
      /* private mode — ignore */
    }
  }

  function next() {
    if (index + 1 >= quiz.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setPicked([]);
      setLocked(false);
    }
  }

  const weakList = useMemo(() => [...new Set(missedTopics)], [missedTopics]);
  const mins = Math.floor(secondsLeft / 60);
  const secs = String(secondsLeft % 60).padStart(2, "0");

  if (!mode || !quiz.length) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <Link href="/dashboard" className="text-sm underline">
          ← Home
        </Link>
        <h1 className="mt-2 font-serif text-3xl">Practice</h1>
        <p className="opacity-70">
          Pick how to practise. Every answer shows full explanation — never
          just “correct” or “wrong”.
        </p>
        <div className="mt-4 grid gap-3">
          <button
            onClick={() => start("quick")}
            className="rounded-2xl border p-4 text-left"
          >
            <strong>Quick Practice — 5 questions</strong>
            <p className="text-sm opacity-70">Mixed topics, short session.</p>
          </button>
          <div className="rounded-2xl border p-4">
            <strong>Topic Practice — 5 questions</strong>
            <div className="mt-2 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className="rounded-full border px-3 py-1 text-sm"
                  style={
                    topic === t
                      ? { background: "var(--pn-lagoon)", color: "#fff" }
                      : undefined
                  }
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => start("topic")}
              className="mt-3 rounded-xl px-4 py-2 text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start {topic}
            </button>
          </div>
          <button
            onClick={() => start("timed")}
            className="rounded-2xl border p-4 text-left"
          >
            <strong>Timed Practice — 5 questions, 5 minutes</strong>
            <p className="text-sm opacity-70">Exam conditions with a clock.</p>
          </button>
          <Link
            href="/scenarios/heart-failure"
            className="rounded-2xl border p-4"
          >
            <strong>Clinical Scenario — Heart Failure</strong>
            <p className="text-sm opacity-70">
              Step inside a patient case, decide, get feedback.
            </p>
          </Link>
        </div>
        <p className="mt-3 text-xs opacity-60">
          Bank: {QUESTIONS.length} questions · Weak-area, mixed, and exam modes
          grow in the next batch.
        </p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <Link href="/dashboard" className="text-sm underline">
          ← Home
        </Link>
        <h1 className="mt-2 font-serif text-3xl">Result</h1>
        <div className="mt-3 rounded-2xl border p-4">
          <p className="text-xl">
            Score: {score} of {quiz.length} (
            {Math.round((score / quiz.length) * 100)}%)
          </p>
          {weakList.length ? (
            <p className="mt-2">
              Revise: {weakList.join(", ")}.{" "}
              {weakList.map((w) => {
                const l = QUESTIONS.find((x) => x.topic === w);
                return l ? (
                  <Link
                    key={w}
                    href={l.reviewHref}
                    className="mr-2 underline"
                  >
                    {l.reviewLabel}
                  </Link>
                ) : null;
              })}
            </p>
          ) : (
            <p className="mt-2">Clean sheet — no weak topics this round.</p>
          )}
        </div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => {
              setMode(null);
              setQuiz([]);
            }}
            className="rounded-xl border px-4 py-2"
          >
            Change mode
          </button>
          <button
            onClick={() => mode && start(mode)}
            className="rounded-xl px-4 py-2 text-white"
            style={{ background: "var(--pn-coral)" }}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!q) return null;
  const ok = locked && isCorrect(q, picked);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="text-sm underline">
          ← Home
        </Link>
        {mode === "timed" && (
          <span className="text-sm">
            ⏱ {mins}:{secs}
          </span>
        )}
      </div>
      <p className="mt-2 text-xs opacity-60">
        Q{index + 1} of {quiz.length} · {q.subject} · {q.topic} ·{" "}
        {q.format === "mcq"
          ? "Pick one"
          : q.format === "multi"
            ? "Pick all that apply"
            : "True or false"}
      </p>
      <h1 className="mt-1 text-xl">{q.stem}</h1>

      <div className="mt-3 grid gap-2">
        {q.options.map((o, i) => {
          const isAns = q.answer.includes(i);
          const isPick = picked.includes(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="rounded-xl border p-3 text-left"
              style={
                locked && isAns
                  ? { borderColor: "var(--pn-mint)", background: "#e6f4ec" }
                  : locked && isPick && !isAns
                    ? { borderColor: "var(--pn-coral)", background: "#fbe9e4" }
                    : isPick
                      ? { borderColor: "var(--pn-lagoon)" }
                      : undefined
              }
            >
              {String.fromCharCode(65 + i)}. {o}
            </button>
          );
        })}
      </div>

      {!locked ? (
        <button
          onClick={submit}
          disabled={!picked.length}
          className="mt-3 rounded-xl px-4 py-2 text-white disabled:opacity-40"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Check answer
        </button>
      ) : (
        <div className="mt-3 rounded-2xl border p-4">
          <strong>{ok ? "Correct." : "Not quite — here is why."}</strong>
          <p>{q.explanation}</p>
          <p className="text-sm opacity-70">
            Why others are wrong: {q.whyOthersWrong} Principle: {q.principle}{" "}
            Review:{" "}
            <Link href={q.reviewHref} className="underline">
              {q.reviewLabel}
            </Link>
          </p>
          <button
            onClick={next}
            className="mt-2 rounded-xl px-4 py-2 text-white"
            style={{ background: "var(--pn-coral)" }}
          >
            {index + 1 >= quiz.length ? "See result" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
