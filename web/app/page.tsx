import Link from "next/link";

const PILLARS = [
  {
    emoji: "🧠",
    title: "LEARN",
    text: "Understand diseases, drugs, procedures and nursing care — with real patient examples, not copied textbook pages.",
  },
  {
    emoji: "🩺",
    title: "APPLY",
    text: "Use knowledge on patient cases: what to assess first, what needs urgent action.",
  },
  {
    emoji: "📝",
    title: "PRACTISE",
    text: "Questions, case scenarios and timed exams — every answer fully explained.",
  },
  {
    emoji: "📊",
    title: "PROGRESS",
    text: "See strong areas, weak areas, and exactly what to study next.",
  },
];

export default function Landing() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <p className="text-xs" style={{ color: "var(--pn-coral)" }}>
        PREP NURSE · For ND/HND nursing students · Nigerian-focused,
        internationally informed
      </p>
      <h1 className="mt-2 font-serif text-4xl">
        Stop cramming notes. Start understanding nursing.
      </h1>
      <p className="mt-2 opacity-80">
        Prep Nurse teaches each topic simply, shows you a real patient example,
        then lets you practise exam questions — so you are ready for ND/HND
        exams <em>and</em> the ward.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href="/dashboard"
          className="rounded-xl px-5 py-3 text-white"
          style={{ background: "var(--pn-lagoon)" }}
        >
          Start learning free
        </Link>
        <Link
          href="/curriculum"
          className="rounded-xl border px-5 py-3"
        >
          See subjects first
        </Link>
      </div>

      <h2 className="mt-8 font-serif text-2xl">How it works</h2>
      <div className="mt-3 grid gap-3">
        {PILLARS.map((p) => (
          <div key={p.title} className="rounded-2xl border p-4">
            <strong>
              {p.emoji} {p.title}
            </strong>
            <p className="mt-1 text-sm opacity-80">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border p-4">
        <strong>Your choice, every time</strong>
        <p className="mt-1 text-sm opacity-80">
          Each topic offers two doors: <strong>learn the topic first</strong>{" "}
          with teaching + patient example, or{" "}
          <strong>practise questions now</strong> and read explanations as you
          go. Example:{" "}
          <Link href="/learn/hypertension" className="underline">
            Hypertension lesson
          </Link>{" "}
          ·{" "}
          <Link href="/practice" className="underline">
            Practice questions
          </Link>
        </p>
      </div>

      <p className="mt-6 text-xs opacity-60">
        Educational information only — not medical advice. Built local-first for
        Nigerian nursing students.
      </p>
    </div>
  );
}
