"use client";

import { useState } from "react";
import Link from "next/link";
import { LESSONS } from "../data/library";
import { QUESTIONS } from "../data/questions";

export default function SearchPage() {
  const [term, setTerm] = useState("");

  const t = term.trim().toLowerCase();
  const lessons = t
    ? LESSONS.filter((l) =>
        `${l.title} ${l.course} ${l.system} ${l.keywords}`
          .toLowerCase()
          .includes(t)
      )
    : [];
  const questions = t
    ? QUESTIONS.filter((q) =>
        `${q.stem} ${q.topic} ${q.subject}`.toLowerCase().includes(t)
      ).slice(0, 10)
    : [];

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Search</h1>
      <p className="opacity-70">
        Try “shock”, “loop diuretics”, “FAST”, “potassium”, “swallow”.
      </p>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search lessons and questions…"
        className="mt-3 w-full rounded-xl border px-4 py-2"
      />

      {t !== "" && (
        <div className="mt-4">
          <strong>Lessons ({lessons.length})</strong>
          <div className="mt-2 grid gap-2">
            {lessons.length ? (
              lessons.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border p-3 text-sm"
                >
                  <strong>{l.title}</strong> · {l.course} · {l.system}
                </Link>
              ))
            ) : (
              <p className="text-sm opacity-60">
                No lesson yet — try “pressure”, “sugar”, or “failure”.
              </p>
            )}
          </div>

          <strong className="mt-4 block">
            Questions ({questions.length})
          </strong>
          <div className="mt-2 grid gap-2">
            {questions.map((q) => (
              <Link
                key={q.id}
                href="/practice"
                className="rounded-xl border p-3 text-sm"
              >
                [{q.topic}] {q.stem.slice(0, 90)}…
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
