import Link from "next/link";

const SUBJECTS = [
  { name: "Fundamentals of Nursing", topics: 12 },
  { name: "Medical-Surgical Nursing", topics: 24 },
  { name: "Anatomy and Physiology", topics: 14 },
  { name: "Pharmacology", topics: 16 },
  { name: "Maternal and Child Health", topics: 10 },
  { name: "Community Health Nursing", topics: 9 },
  { name: "Mental Health Nursing", topics: 8 },
];

export default function CurriculumPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Subjects</h1>
      <p className="opacity-70">
        ND/HND map from the PRD. Full curriculum mapping continues next.
      </p>
      <div className="mt-4 grid gap-3">
        {SUBJECTS.map((s) => (
          <div key={s.name} className="rounded-2xl border p-4">
            <strong>{s.name}</strong>
            <p className="text-sm opacity-70">{s.topics} topics</p>
            {s.name === "Medical-Surgical Nursing" && (
              <Link
                href="/learn/hypertension"
                className="mt-2 inline-block rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: "var(--pn-lagoon)" }}
              >
                Open Hypertension lesson
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
