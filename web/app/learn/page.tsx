import Link from "next/link";
import { LESSONS } from "../data/library";

const SYSTEMS = [...new Set(LESSONS.map((l) => l.system))];

export default function LearnHub() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Learn — the full school</h1>
      <p className="opacity-70">
        Every topic broken down: meaning, causes, body changes, signs, tests,
        drugs with doses, nursing care, real patient case, then questions.
        Pick a system and enter.
      </p>
      {SYSTEMS.map((s) => (
        <div key={s} className="mt-4">
          <h2 className="font-serif text-xl">{s}</h2>
          <div className="mt-2 grid gap-2">
            {LESSONS.filter((l) => l.system === s).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-2xl border p-4"
              >
                <strong>{l.title}</strong>
                <p className="text-sm opacity-70">{l.course}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <p className="mt-4 text-xs opacity-60">
        More systems and topics are mapped on the{" "}
        <Link href="/curriculum" className="underline">
          Subjects page
        </Link>
        . Educational information only — not medical advice.
      </p>
    </div>
  );
}
