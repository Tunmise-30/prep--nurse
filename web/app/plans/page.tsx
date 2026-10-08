"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QUESTIONS, TOPICS } from "../data/questions";
import { useLocalJSON, writeLocalJSON } from "../lib/local-store";

interface PlanSession {
  date: string;
  subject: string;
  topic: string;
  activity: string;
  minutes: number;
  done: boolean;
}

interface StudyPlan {
  createdAt: string;
  examDate: string;
  subjects: string[];
  sessionsPerWeek: number;
  minutes: number;
  sessions: PlanSession[];
}

const NO_PLAN: StudyPlan | null = null;

const SUBJECTS = [...new Set(QUESTIONS.map((q) => q.subject))];
const WEEKLY_OPTIONS = [2, 3, 4, 5, 6];
const MINUTE_OPTIONS = [15, 30, 45, 60];

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, n: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + n);
  return next;
}

function topicsForSubject(subject: string): string[] {
  const seen: string[] = [];
  for (const q of QUESTIONS) {
    if (q.subject === subject && !seen.includes(q.topic)) {
      seen.push(q.topic);
    }
  }
  return seen;
}

function chooseActivity(daysLeft: number, round: number): string {
  if (daysLeft <= 2) return "Mock exam + full review";
  if (daysLeft <= 7) return "Timed practice (exam conditions)";
  if (round % 3 === 0) return "Scenario + decision practice";
  if (round % 3 === 1) return "Learn lesson + notes";
  return "Practice questions";
}

function generatePlan(input: {
  examDate: string;
  subjects: string[];
  sessionsPerWeek: number;
  minutes: number;
  focusTopics: string[];
}): PlanSession[] {
  const today = new Date();
  const exam = new Date(input.examDate + "T12:00:00");
  const days = Math.max(
    1,
    Math.round((exam.getTime() - today.getTime()) / 86400000)
  );
  const totalSessions = Math.max(
    input.sessionsPerWeek,
    Math.round((days / 7) * input.sessionsPerWeek)
  );
  const interval = Math.max(1, Math.round(7 / input.sessionsPerWeek));

  // Build a per-subject topic queue: focus (weak) topics first.
  const queues = new Map<string, string[]>();
  for (const s of input.subjects) {
    const all = topicsForSubject(s);
    const focus = input.focusTopics.filter((t) => all.includes(t));
    const rest = all.filter((t) => !focus.includes(t));
    queues.set(s, [...focus, ...rest]);
  }

  const sessions: PlanSession[] = [];
  const usedCount = new Map<string, number>();
  let day = 0;
  let round = 0;
  while (day < days && sessions.length < totalSessions) {
    const subject = input.subjects[round % input.subjects.length];
    const queue = queues.get(subject) ?? [];
    const idx = (usedCount.get(subject) ?? 0) % Math.max(1, queue.length);
    const topic = queue.length ? queue[idx] : "General revision";
    usedCount.set(subject, (usedCount.get(subject) ?? 0) + 1);
    sessions.push({
      date: fmtDate(addDays(today, day)),
      subject,
      topic,
      activity: chooseActivity(days - day, round),
      minutes: input.minutes,
      done: false,
    });
    day += interval;
    round += 1;
  }
  return sessions;
}

const prettyDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

export default function PlansPage() {
  const plan = useLocalJSON<StudyPlan | null>("pn-plan", NO_PLAN);
  const [examDate, setExamDate] = useState("");
  const [subjects, setSubjects] = useState<string[]>([
    "Medical-Surgical Nursing",
  ]);
  const [sessionsPerWeek, setSessionsPerWeek] = useState(3);
  const [minutes, setMinutes] = useState(30);
  const [focusTopics, setFocusTopics] = useState<string[]>([]);
  const [error, setError] = useState("");

  // Default focus topics to the user's weak areas.
  const stats = useLocalJSON<Record<string, { tried: number; ok: number }>>(
    "pn-practice",
    {}
  );
  const detectedWeak = useMemo(
    () =>
      TOPICS.filter((t) => {
        const s = stats[t];
        return !!s && s.tried > 0 && s.ok / s.tried < 0.7;
      }),
    [stats]
  );

  function toggle(list: string[], item: string, set: (v: string[]) => void) {
    set(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  }

  function generate() {
    if (!examDate) {
      setError("Pick your exam date first.");
      return;
    }
    if (!subjects.length) {
      setError("Pick at least one subject.");
      return;
    }
    const exam = new Date(examDate + "T12:00:00");
    if (Number.isNaN(exam.getTime()) || exam.getTime() < Date.now()) {
      setError("Exam date must be in the future.");
      return;
    }
    setError("");
    const focus = focusTopics.length ? focusTopics : detectedWeak;
    const next: StudyPlan = {
      createdAt: new Date().toISOString(),
      examDate,
      subjects,
      sessionsPerWeek,
      minutes,
      sessions: generatePlan({ examDate, subjects, sessionsPerWeek, minutes, focusTopics: focus }),
    };
    writeLocalJSON("pn-plan", next);
  }

  function toggleDone(i: number) {
    if (!plan) return;
    const sessions = plan.sessions.map((s, n) =>
      n === i ? { ...s, done: !s.done } : s
    );
    writeLocalJSON("pn-plan", { ...plan, sessions });
  }

  function clearPlan() {
    writeLocalJSON("pn-plan", null);
  }

  const totalMinutes = plan ? plan.sessions.reduce((s, x) => s + x.minutes, 0) : 0;
  const doneCount = plan ? plan.sessions.filter((s) => s.done).length : 0;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Study plan</h1>
      <p className="opacity-70">
        Tell us your exam date and time — get a day-by-day
        schedule that weights your weak areas first.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <label className="block text-sm font-bold">
          Exam date
        </label>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          className="mt-1 rounded-xl border px-4 py-2"
        />

        <strong className="mt-4 block">Subjects to cover</strong>
        <div className="mt-2 grid gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s}
              onClick={() => toggle(subjects, s, setSubjects)}
              className="rounded-xl border px-4 py-2 text-left text-sm"
              style={
                subjects.includes(s)
                  ? { borderColor: "var(--pn-lagoon)", background: "#e8f4f8" }
                  : undefined
              }
            >
              {subjects.includes(s) ? "✓ " : "○ "}
              {s}
            </button>
          ))}
        </div>

        <strong className="mt-4 block">Sessions per week</strong>
        <div className="mt-2 flex flex-wrap gap-2">
          {WEEKLY_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setSessionsPerWeek(n)}
              className="rounded-full border px-4 py-1 text-sm"
              style={
                sessionsPerWeek === n
                  ? { background: "var(--pn-lagoon)", color: "#fff" }
                  : undefined
              }
            >
              {n}
            </button>
          ))}
        </div>

        <strong className="mt-4 block">Minutes per session</strong>
        <div className="mt-2 flex flex-wrap gap-2">
          {MINUTE_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setMinutes(n)}
              className="rounded-full border px-4 py-1 text-sm"
              style={
                minutes === n
                  ? { background: "var(--pn-lagoon)", color: "#fff" }
                  : undefined
              }
            >
              {n}
            </button>
          ))}
        </div>

        <strong className="mt-4 block">
          Focus topics (optional — defaults to your weak areas
          {detectedWeak.length ? `: ${detectedWeak.join(", ")}` : ""})
        </strong>
        <div className="mt-2 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              onClick={() => toggle(focusTopics, t, setFocusTopics)}
              className="rounded-full border px-3 py-1 text-sm"
              style={
                focusTopics.includes(t)
                  ? { background: "var(--pn-coral)", color: "#fff" }
                  : undefined
              }
            >
              {t}
            </button>
          ))}
        </div>

        <button
          onClick={generate}
          className="mt-4 rounded-xl px-5 py-2 text-white"
          style={{ background: "var(--pn-coral)" }}
        >
          Generate my plan
        </button>
        {error && (
          <p className="mt-2 text-sm" style={{ color: "var(--pn-coral)" }}>
            {error}
          </p>
        )}
      </div>

      {plan && plan.sessions.length > 0 && (
        <div className="mt-4 rounded-2xl border p-4">
          <div className="flex items-start justify-between">
            <div>
              <strong>
                Your plan — {plan.sessions.length} sessions until{" "}
                {prettyDate(plan.examDate)}
              </strong>
              <p className="text-sm opacity-70">
                {Math.round(totalMinutes / 60)}h {totalMinutes % 60}m
                scheduled · {doneCount} done
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={generate}
                className="rounded-xl border px-3 py-1 text-sm"
              >
                Regenerate
              </button>
              <button
                onClick={clearPlan}
                className="rounded-xl border px-3 py-1 text-sm"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="mt-3 grid gap-2">
            {plan.sessions.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border px-3 py-2 text-sm"
                style={
                  s.done
                    ? { borderColor: "var(--pn-mint)", background: "#e6f4ec" }
                    : undefined
                }
              >
                <input
                  type="checkbox"
                  checked={s.done}
                  onChange={() => toggleDone(i)}
                  className="h-4 w-4"
                />
                <span className="w-24 font-bold">{prettyDate(s.date)}</span>
                <span className="flex-1">
                  <strong>{s.topic}</strong>
                  <span className="opacity-70">
                    {" "}
                    · {s.subject} · {s.activity}
                  </span>
                </span>
                <span className="text-xs opacity-60">{s.minutes}m</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs opacity-60">
            Tip: each session pairs with{" "}
            <Link href="/practice" className="underline">
              Practice
            </Link>{" "}
            and{" "}
            <Link href="/learn" className="underline">
              Learn
            </Link>
            . Tick sessions off as you finish them.
          </p>
        </div>
      )}
    </div>
  );
}
