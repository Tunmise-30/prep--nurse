import Link from "next/link";

const SUBJECTS = [
  {
    name: "Fundamentals of Nursing",
    topics: 12,
    lessons: [
      { title: "Hand Hygiene", href: "/learn/hand-hygiene" },
      { title: "Measuring Blood Pressure", href: "/learn/blood-pressure" },
    ],
  },
  {
    name: "Medical-Surgical Nursing",
    topics: 24,
    lessons: [
      { title: "Hypertension", href: "/learn/hypertension" },
      { title: "Heart Failure", href: "/learn/heart-failure" },
      { title: "Diabetes Mellitus", href: "/learn/diabetes" },
    ],
  },
  { name: "Anatomy and Physiology", topics: 14, lessons: [] },
  {
    name: "Pharmacology",
    topics: 16,
    lessons: [{ title: "Loop Diuretics (Furosemide)", href: "/learn/loop-diuretics" }],
  },
  { name: "Maternal and Child Health", topics: 10, lessons: [] },
  { name: "Community Health Nursing", topics: 9, lessons: [] },
  { name: "Mental Health Nursing", topics: 8, lessons: [] },
];

export default function CurriculumPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Subjects</h1>
      <p className="opacity-70">
        ND/HND map from the PRD. 6 lessons ready in Phase 1 — more coming.
      </p>
      <div className="mt-4 grid gap-3">
        {SUBJECTS.map((s) => (
          <div key={s.name} className="rounded-2xl border p-4">
            <strong>{s.name}</strong>
            <p className="text-sm opacity-70">{s.topics} topics</p>
            {s.lessons.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="mt-2 mr-2 inline-block rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: "var(--pn-lagoon)" }}
              >
                {l.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
