"use client";

import Link from "next/link";
import { LESSONS } from "../data/library";
import { QUESTIONS } from "../data/questions";
import { useLocalJSON } from "../lib/local-store";
import { useToday } from "../lib/today";

interface TopicStat {
  tried: number;
  ok: number;
}

interface Profile {
  program?: string;
  level?: string;
  subjects?: string[];
  weakAreas?: string[];
  knowledge?: string;
  complete?: boolean;
}

interface DiagnosticResult {
  date?: string;
  total?: number;
  ok?: number;
}

const NO_STATS: Record<string, TopicStat> = {};
const NO_PROFILE: Profile = {};
const NO_DIAGNOSTIC: DiagnosticResult = {};
const DAILY_GOAL = 20;

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function Dashboard() {
  const stats = useLocalJSON<Record<string, TopicStat>>(
    "pn-practice",
    NO_STATS
  );
  const profile = useLocalJSON<Profile>("pn-profile", NO_PROFILE);
  const diagnostic = useLocalJSON<DiagnosticResult>(
    "pn-diagnostic",
    NO_DIAGNOSTIC
  );
  const today = useToday();

  const totalTried = Object.values(stats).reduce(
    (s, t) => s + t.tried,
    0
  );
  const totalOk = Object.values(stats).reduce((s, t) => s + t.ok, 0);
  const accuracy = totalTried
    ? Math.round((totalOk / totalTried) * 100)
    : null;

  const weakTopics = Object.entries(stats)
    .filter(([, s]) => s.tried > 0 && s.ok / s.tried < 0.7)
    .sort((a, b) => a[1].ok / a[1].tried - b[1].ok / b[1].tried)
    .map(([t]) => t);

  const continueTopic =
    weakTopics[0] ?? profile.weakAreas?.[0] ?? null;
  const continueLesson = continueTopic
    ? QUESTIONS.find((q) => q.topic === continueTopic)
    : null;
  const continueHref = continueLesson
    ? continueLesson.reviewHref
    : LESSONS[0]?.href ?? "/learn";
  const continueTitle = continueTopic ?? LESSONS[0]?.title ?? "Hypertension";

  const goalPct = Math.min(
    100,
    Math.round((today.answered / DAILY_GOAL) * 100)
  );

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <p
        className="text-xs"
        style={{ color: "var(--pn-coral)" }}
      >
        PREP NURSE · Your dashboard · runs on your PC
      </p>
      <h1 className="mt-1 font-serif text-3xl">
        {greeting()}
        {profile.program
          ? `, ${profile.program} ${profile.level ?? ""} student`
          : ", nurse"}
      </h1>
      <p className="opacity-70">
        What am I learning? How am I doing? What is weak?
        What next?
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <div className="flex flex-wrap gap-2 text-xs text-white">
          {profile.subjects?.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full px-3 py-1"
              style={{ background: "var(--pn-lagoon)" }}
            >
              {s}
            </span>
          ))}
          {profile.knowledge && (
            <span
              className="rounded-full px-3 py-1"
              style={{ background: "var(--pn-lilac)" }}
            >
              {profile.knowledge} knowledge
            </span>
          )}
        </div>
        <h2 className="mt-2 text-xl">
          Continue learning: {continueTitle}
        </h2>
        <p className="opacity-80 text-sm">
          {weakTopics.length
            ? "Your weakest recorded topic right now — a quick review will help most."
            : "A strong place to start — or jump to any lesson below."}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link
            href={continueHref}
            className="inline-block rounded-xl px-4 py-2 text-white"
            style={{ background: "var(--pn-lagoon)" }}
          >
            Learn the topic first
          </Link>
          <Link
            href="/practice"
            className="inline-block rounded-xl border px-4 py-2"
          >
            Or practise questions now
          </Link>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <strong>Today&apos;s goal — {DAILY_GOAL} questions</strong>
          <p className="mt-1 text-sm opacity-80">
            {today.answered} of {DAILY_GOAL} done
          </p>
          <div className="mt-2 h-2 rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${goalPct}%`,
                background:
                  "var(--pn-lagoon)",
              }}
            />
          </div>
          <Link
            href="/practice"
            className="mt-2 inline-block text-sm underline"
          >
            Keep going →
          </Link>
        </div>

        <Link
          href="/progress"
          className="rounded-2xl border p-4"
        >
          <strong>Progress</strong>
          <p className="mt-1 text-sm opacity-80">
            {totalTried} questions tried
            {accuracy !== null ? ` · ${accuracy}% correct` : " yet"}
          </p>
          <p className="text-sm opacity-70">
            Scores per topic, weak areas, goals →
          </p>
        </Link>

        <div className="rounded-2xl border p-4">
          <strong>Needs attention</strong>
          {weakTopics.length ? (
            <div className="mt-2">
              <p className="text-sm opacity-80">
                {weakTopics
                  .slice(0, 3)
                  .join(", ")}
                {weakTopics.length > 3
                  ? ` +${weakTopics.length - 3} more`
                  : ""}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {weakTopics.slice(0, 3).map((t) => {
                  const l = QUESTIONS.find(
                    (q) => q.topic === t
                  );
                  return l ? (
                    <Link
                      key={t}
                      href={l.reviewHref}
                      className="rounded-full border px-3 py-1 text-sm underline"
                    >
                      Revise {t}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          ) : (
            <p className="mt-1 text-sm opacity-70">
              Nothing under 70% yet — attempt questions and
              weak spots appear here.
            </p>
          )}
        </div>

        <Link
          href="/diagnostic"
          className="rounded-2xl border p-4"
        >
          <strong>Diagnostic</strong>
          <p className="mt-1 text-sm opacity-80">
            {diagnostic.total
              ? `Last score: ${diagnostic.ok}/${diagnostic.total} — retake to measure improvement`
              : "2 minutes to find your starting point: strong in X, revise Y"}
          </p>
        </Link>

        <Link
          href="/plans"
          className="rounded-2xl border p-4"
        >
          <strong>Study plan</strong>
          <p className="opacity-70 text-sm">
            Exam date + your time → a day-by-day schedule.
          </p>
        </Link>
        <Link
          href="/exams"
          className="rounded-2xl border p-4"
        >
          <strong>Upcoming — HND Med-Surg Mock</strong>
          <p className="opacity-70 text-sm">
            10 questions, 10 minutes, one sitting — then a
            full review.
          </p>
        </Link>

        <Link
          href="/practice"
          className="rounded-2xl border p-4"
        >
          <strong>Recommended practice</strong>
          <p className="opacity-70 text-sm">
            Weak-area mode builds itself from what you miss.
          </p>
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Link href="/learn" className="rounded-2xl border p-4">
          <strong>Learn — the full school</strong>
          <p className="opacity-70 text-sm">
            Each topic broken down + drug doses + patient case
            + questions.
          </p>
        </Link>
        <Link
          href="/curriculum"
          className="rounded-2xl border p-4"
        >
          <strong>Subjects — body systems map</strong>
          <p className="opacity-70 text-sm">
            All Med-Surg systems and conditions. ✓ = lesson
            ready.
          </p>
        </Link>
        <Link
          href="/search"
          className="rounded-2xl border p-4"
        >
          <strong>Search — Find anything</strong>
          <p className="opacity-70 text-sm">
            Lessons and questions by keyword.
          </p>
        </Link>
        <Link
          href="/flashcards"
          className="rounded-2xl border p-4"
        >
          <strong>Flashcards — Quick facts</strong>
          <p className="opacity-70 text-sm">
            Drugs, numbers, and must-know facts. Tap to flip.
          </p>
        </Link>
        <Link
          href="/saved"
          className="rounded-2xl border p-4"
        >
          <strong>Saved — My lessons &amp; notes</strong>
          <p className="opacity-70 text-sm">
            Everything you starred, with your notes.
          </p>
        </Link>
        <Link
          href="/premium"
          className="rounded-2xl border p-4"
        >
          <strong>Premium — Test payment</strong>
          <p className="opacity-70 text-sm">
            Paystack test mode. No real money moves.
          </p>
        </Link>
      </div>

      <p className="mt-4 text-xs opacity-60">
        <Link href="/" className="underline">
          ← Back to welcome page
        </Link>{" "}
        ·{" "}
        <Link href="/onboarding" className="underline">
          Edit my profile
        </Link>{" "}
        · Educational information only — not medical advice.
      </p>
    </div>
  );
}
