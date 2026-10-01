import Link from "next/link";
import { EXAMS, examQuestions } from "../data/exams";

export default function ExamsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Exam Prep</h1>
      <p className="opacity-70">
        Like the real exam: one sitting, a clock, then a full review of what
        to revise.
      </p>
      <div className="mt-4 grid gap-3">
        {EXAMS.map((e) => (
          <div key={e.id} className="rounded-2xl border p-4">
            <p className="text-xs opacity-60">{e.kind}</p>
            <strong>{e.title}</strong>
            <p className="text-sm opacity-70">{e.description}</p>
            <p className="mt-1 text-sm opacity-70">
              {examQuestions(e.id).length} questions · {e.minutes} minutes
            </p>
            <Link
              href={`/exams/${e.id}`}
              className="mt-2 inline-block rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "var(--pn-coral)" }}
            >
              Start exam
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs opacity-60">
        Past questions appear here only where legally and educationally
        appropriate, tagged by source.
      </p>
    </div>
  );
}
