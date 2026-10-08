"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  QUESTIONS,
  TOPICS,
  pickRandom,
  type Question,
} from "../data/questions";
import { useLocalJSON, writeLocalJSON } from "../lib/local-store";
import { bumpToday } from "../lib/today";

type Mode =
  | "quick"
  | "topic"
  | "subject"
  | "weak"
  | "mixed"
  | "clinical"
  | "timed";
type Count = 5 | 10 | 20;

interface TopicStat {
  tried: number;
  ok: number;
}

const NO_STATS: Record<string, TopicStat> = {};

const MODES: { id: Mode; title: string; blurb: string }[] = [
  {
    id: "quick",
    title: "Quick Practice",
    blurb: "Random questions from the whole bank.",
  },
  {
    id: "topic",
    title: "Topic Practice",
    blurb: "One topic at a time — pick it below.",
  },
  {
    id: "subject",
    title: "Subject Practice",
    blurb: "One subject at a time — pick it below.",
  },
  {
    id: "weak",
    title: "Weak-Area Practice",
    blurb: "Auto-built from topics under 70% + repeated misses.",
  },
  {
    id: "mixed",
    title: "Mixed Practice",
    blurb: "One question per topic — a balanced mix.",
  },
  {
    id: "clinical",
    title: "Clinical Practice",
    blurb: "Patient cases: assess, decide, act.",
  },
  {
    id: "timed",
    title: "Timed Practice",
    blurb: "Exam conditions: one minute per question.",
  },
];

const SUBJECTS = [...new Set(QUESTIONS.map((q) => q.subject))];
const COUNTS: Count[] = [5, 10, 20];

function isCorrect(q: Question, picked: number[]): boolean {
  if (q.format === "multi") {
    return (
      picked.length === q.answer.length &&
      q.answer.every((a) => picked.includes(a))
    );
  }
  return picked.length === 1 && q.answer.includes(picked[0]);
}

function buildMixed(n: number): Question[] {
  const byTopic = new Map<string, Question[]>();
  for (const q of QUESTIONS) {
    const arr = byTopic.get(q.topic) || [];
    arr.push(q);
    byTopic.set(q.topic, arr);
  }
  const topics = pickRandom([...byTopic.keys()], byTopic.size);
  const result: Question[] = [];
  outer: for (let round = 0; round < 5; round++) {
    for (const t of topics) {
      const pool = byTopic.get(t) ?? [];
      if (round < pool.length) {
        result.push(pool[round]);
        if (result.length >= n) break outer;
      }
    }
  }
  return result;
}

function detectWeak(
  stats: Record<string, TopicStat>
): string[] {
  return TOPICS.filter((t) => {
    const s = stats[t];
    return !!s && s.tried > 0 && s.ok / s.tried < 0.7;
  });
}

export default function PracticePage() {
  const stats = useLocalJSON<Record<string, TopicStat>>(
    "pn-practice",
    NO_STATS
  );
  const [mode, setMode] = useState<Mode | null>(null);
  const [count, setCount] = useState<Count>(5);
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [missedTopics, setMissedTopics] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(300);
  const [finished, setFinished] = useState(false);
  const [weakFallback, setWeakFallback] = useState(false);

  const q = quiz[index];
  const expired = mode === "timed" && quiz.length > 0 && secondsLeft <= 0;
  const done = finished || expired;

  useEffect(() => {
    if (mode !== "timed" || !quiz.length || done) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [mode, quiz, done, secondsLeft]);

  const detectedWeak = useMemo(() => detectWeak(stats), [stats]);

  function start(m: Mode) {
    let pool = QUESTIONS;
    let fallback = false;
    if (m === "topic") pool = QUESTIONS.filter((x) => x.topic === topic);
    if (m === "subject")
      pool = QUESTIONS.filter((x) => x.subject === subject);
    if (m === "clinical") pool = QUESTIONS.filter((x) => x.clinical);
    if (m === "mixed") pool = buildMixed(count);
    if (m === "weak") {
      const weak = [...new Set([...detectedWeak, ...missedTopics])];
      const wp = QUESTIONS.filter((x) => weak.includes(x.topic));
      if (wp.length) {
        pool = wp;
      } else {
        pool = QUESTIONS;
        fallback = true;
      }
    }
    if (!pool.length) pool = QUESTIONS;
    const picked2 =
      m === "mixed"
        ? pool.slice(0, Math.min(count, pool.length))
        : pickRandom(pool, Math.min(count, pool.length));
    setQuiz(picked2);
    setMode(m);
    setWeakFallback(fallback);
    setIndex(0);
    setPicked([]);
    setLocked(false);
    setScore(0);
    setSecondsLeft(count * 60);
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
    writeLocalJSON("pn-practice", {
      ...stats,
      [q.topic]: {
        tried: (stats[q.topic]?.tried ?? 0) + 1,
        ok: (stats[q.topic]?.ok ?? 0) + (ok ? 1 : 0),
      },
    });
    bumpToday(1);
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
          Pick how to practise. Every answer shows full explanation —
          never just “correct” or “wrong”.
        </p>

        <div className="mt-4 rounded-2xl border p-4">
          <strong>Questions per session</strong>
          <div className="mt-2 flex gap-2">
            {COUNTS.map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                className="rounded-full border px-4 py-1 text-sm"
                style={
                  count === c
                    ? { background: "var(--pn-lagoon)", color: "#fff" }
                    : undefined
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-2xl border p-4">
            <strong>{MODES[0].title} — {count} questions</strong>
            <p className="text-sm opacity-70">{MODES[0].blurb}</p>
            <button
              onClick={() => start("quick")}
              className="mt-2 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start
            </button>
          </div>

          <div className="rounded-2xl border p-4">
            <strong>{MODES[1].title} — {count} questions</strong>
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
              className="mt-3 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start {topic}
            </button>
          </div>

          <div className="rounded-2xl border p-4">
            <strong>{MODES[2].title} — {count} questions</strong>
            <div className="mt-2 flex flex-wrap gap-2">
              {SUBJECTS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className="rounded-full border px-3 py-1 text-sm"
                  style={
                    subject === s
                      ? { background: "var(--pn-lagoon)", color: "#fff" }
                      : undefined
                  }
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              onClick={() => start("subject")}
              className="mt-3 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start {subject}
            </button>
          </div>

          <div className="rounded-2xl border p-4">
            <strong>{MODES[3].title} — up to {count} questions</strong>
            <p className="text-sm opacity-70">{MODES[3].blurb}</p>
            <p className="mt-1 text-sm">
              {detectedWeak.length ? (
                <span>
                  Weak now: <em>{detectedWeak.join(", ")}</em>
                </span>
              ) : (
                <span className="opacity-70">
                  Nothing recorded under 70% yet — attempt questions and
                  this mode targets what you miss.
                </span>
              )}
            </p>
            <button
              onClick={() => start("weak")}
              className="mt-2 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start weak-area set
            </button>
          </div>

          <div className="rounded-2xl border p-4">
            <strong>{MODES[4].title} — {count} questions</strong>
            <p className="text-sm opacity-70">{MODES[4].blurb}</p>
            <button
              onClick={() => start("mixed")}
              className="mt-2 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start
            </button>
          </div>

          <div className="rounded-2xl border p-4">
            <strong>{MODES[5].title} — {count} questions</strong>
            <p className="text-sm opacity-70">{MODES[5].blurb}</p>
            <button
              onClick={() => start("clinical")}
              className="mt-2 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start
            </button>
          </div>

          <div className="rounded-2xl border p-4">
            <strong>{MODES[6].title} — {count} questions, {count} minutes</strong>
            <p className="text-sm opacity-70">{MODES[6].blurb}</p>
            <button
              onClick={() => start("timed")}
              className="mt-2 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-lagoon)" }}
            >
              Start
            </button>
          </div>

          <Link
            href="/scenarios/heart-failure"
            className="rounded-2xl border p-4"
          >
            <strong>Scenario — Breathless in Heart Failure</strong>
            <p className="text-sm opacity-70">
              Step inside a patient case, decide, get feedback.
            </p>
          </Link>
          <Link
            href="/scenarios/hypoglycemia"
            className="rounded-2xl border p-4"
          >
            <strong>Scenario — Low Sugar Crash</strong>
            <p className="text-sm opacity-70">
              Shaking, sweating, confused: act in the right order.
            </p>
          </Link>
          <Link
            href="/scenarios/stroke"
            className="rounded-2xl border p-4"
          >
            <strong>Scenario — Sudden Slurred Speech</strong>
            <p className="text-sm opacity-70">
              FAST-positive in under an hour: what first?
            </p>
          </Link>
          <Link
            href="/scenarios/asthma"
            className="rounded-2xl border p-4"
          >
            <strong>Scenario — Wheeze Going Quiet</strong>
            <p className="text-sm opacity-70">
              Loud wheeze fades but child worsens: decide fast.
            </p>
          </Link>
          <Link
            href="/scenarios/diarrhoea"
            className="rounded-2xl border p-4"
          >
            <strong>Scenario — The Quiet Toddler</strong>
            <p className="text-sm opacity-70">
              Grade the water loss, then Plan A, B, or C.
            </p>
          </Link>
        </div>
        <p className="mt-3 text-xs opacity-60">
          Bank: {QUESTIONS.length} questions ·{" "}
          {QUESTIONS.filter((x) => x.clinical).length} clinical cases ·
          progress feeds the weak-area mode.
        </p>
      </div>
    );
  }

  if (done) {
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
          {expired && !finished && (
            <p className="mt-1 text-sm opacity-70">
              Time ran out — the clock stopped here.
            </p>
          )}
          {weakFallback && (
            <p className="mt-1 text-sm opacity-70">
              No weak areas recorded yet, so this was a mixed set to
              build your profile.
            </p>
          )}
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
            Why others are wrong: {q.whyOthersWrong} Principle:{" "}
            {q.principle} Review:{" "}
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
