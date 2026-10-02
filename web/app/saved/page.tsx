"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LESSONS } from "../data/library";

export default function SavedPage() {
  const [saved, setSaved] = useState<string[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const b: string[] = JSON.parse(
        localStorage.getItem("pn-bookmarks") || "[]"
      );
      setSaved(b);
      const n: Record<string, string> = {};
      b.forEach((title) => {
        n[title] = localStorage.getItem(`pn-note-${title}`) || "";
      });
      setNotes(n);
    } catch {
      /* ignore */
    }
  }, []);

  const lessons = LESSONS.filter((l) => saved.includes(l.title));

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Saved lessons</h1>
      <p className="opacity-70">
        Lessons you starred with ☆, plus your notes. Kept on this PC.
      </p>

      {!lessons.length ? (
        <div className="mt-4 rounded-2xl border p-4">
          <p className="text-sm opacity-70">
            Nothing saved yet. Open any lesson and tap “☆ Save this lesson”.
          </p>
          <Link href="/learn" className="mt-2 inline-block underline">
            Go to Learn
          </Link>
        </div>
      ) : (
        <div className="mt-4 grid gap-3">
          {lessons.map((l) => (
            <div key={l.href} className="rounded-2xl border p-4">
              <Link href={l.href}>
                <strong className="underline">{l.title}</strong>
              </Link>
              <p className="text-sm opacity-70">
                {l.course} · {l.system}
              </p>
              {notes[l.title] && (
                <p className="mt-1 text-sm opacity-80">
                  My note: {notes[l.title]}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
