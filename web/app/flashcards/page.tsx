"use client";

import { useState } from "react";
import Link from "next/link";
import { FLASHCARDS } from "../data/library";

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const card = FLASHCARDS[index];

  function next() {
    setIndex((i) => (i + 1) % FLASHCARDS.length);
    setShowBack(false);
  }

  function prev() {
    setIndex((i) => (i - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    setShowBack(false);
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Flashcards</h1>
      <p className="opacity-70">
        Tap the card to flip. {FLASHCARDS.length} cards for drugs, numbers, and
        must-know facts.
      </p>

      <button
        onClick={() => setShowBack((s) => !s)}
        className="mt-4 block w-full rounded-2xl border p-6 text-left"
      >
        <p className="text-xs opacity-60">
          Card {index + 1} of {FLASHCARDS.length} · {card.tag} · tap to flip
        </p>
        <p className="mt-2 text-xl">
          <strong>{showBack ? "Answer: " : "Ask: "}</strong>
          {showBack ? card.back : card.front}
        </p>
      </button>

      <div className="mt-3 flex gap-2">
        <button
          onClick={prev}
          className="rounded-xl border px-4 py-2"
        >
          ← Back
        </button>
        <button
          onClick={next}
          className="rounded-xl px-4 py-2 text-white"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
