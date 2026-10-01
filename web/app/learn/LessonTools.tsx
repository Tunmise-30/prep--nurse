"use client";

import { useEffect, useState } from "react";

export default function LessonTools({ lesson }: { lesson: string }) {
  const [saved, setSaved] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    try {
      const b = JSON.parse(localStorage.getItem("pn-bookmarks") || "[]");
      setSaved(b.includes(lesson));
      setNote(localStorage.getItem(`pn-note-${lesson}`) || "");
    } catch {
      /* ignore */
    }
  }, [lesson]);

  function toggleBookmark() {
    try {
      const b: string[] = JSON.parse(
        localStorage.getItem("pn-bookmarks") || "[]"
      );
      const next = b.includes(lesson)
        ? b.filter((x) => x !== lesson)
        : [...b, lesson];
      localStorage.setItem("pn-bookmarks", JSON.stringify(next));
      setSaved(next.includes(lesson));
    } catch {
      /* ignore */
    }
  }

  function saveNote(v: string) {
    setNote(v);
    try {
      localStorage.setItem(`pn-note-${lesson}`, v);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mt-3 rounded-2xl border p-4">
      <button
        onClick={toggleBookmark}
        className="rounded-xl border px-4 py-2 text-sm"
      >
        {saved ? "★ Saved — tap to remove" : "☆ Save this lesson"}
      </button>
      <label className="mt-3 block text-sm font-bold">My notes</label>
      <textarea
        value={note}
        onChange={(e) => saveNote(e.target.value)}
        placeholder="Write what you must remember… saved on this PC."
        rows={3}
        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
      />
    </div>
  );
}
