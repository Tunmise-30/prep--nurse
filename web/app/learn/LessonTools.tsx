"use client";

import Link from "next/link";
import { useLocalJSON, writeLocalJSON } from "../lib/local-store";

const NO_SAVED: string[] = [];
const NO_NOTES: Record<string, string> = {};

export default function LessonTools({ lesson }: { lesson: string }) {
  const saved = useLocalJSON<string[]>("pn-bookmarks", NO_SAVED);
  const notes = useLocalJSON<Record<string, string>>(
    "pn-notes",
    NO_NOTES
  );

  const isSaved = saved.includes(lesson);
  const note = notes[lesson] || "";

  function toggleBookmark() {
    writeLocalJSON(
      "pn-bookmarks",
      isSaved
        ? saved.filter((x) => x !== lesson)
        : [...saved, lesson]
    );
  }

  function saveNote(v: string) {
    writeLocalJSON("pn-notes", { ...notes, [lesson]: v });
  }

  return (
    <div className="mt-3 rounded-2xl border p-4">
      <button
        onClick={toggleBookmark}
        className="rounded-xl border px-4 py-2 text-sm"
      >
        {isSaved ? "★ Saved — tap to remove" : "☆ Save this lesson"}
      </button>
      <label className="mt-3 block text-sm font-bold">
        My notes
      </label>
      <textarea
        value={note}
        onChange={(e) => saveNote(e.target.value)}
        placeholder="Write what you must remember… saved on this PC."
        rows={3}
        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
      />
      <p className="mt-2 text-xs opacity-60">
        <Link href="/saved" className="underline">
          See all saved lessons →
        </Link>
      </p>
    </div>
  );
}
