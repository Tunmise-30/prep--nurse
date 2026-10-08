import Link from "next/link";

interface Lesson {
  title: string;
  href?: string;
}

interface SystemMap {
  system: string;
  conditions: Lesson[];
}

const MEDSURG_SYSTEMS: SystemMap[] = [
  {
    system: "Cardiovascular",
    conditions: [
      { title: "Hypertension", href: "/learn/hypertension" },
      { title: "Heart Failure", href: "/learn/heart-failure" },
      { title: "Myocardial Infarction", href: "/learn/myocardial-infarction" },
      { title: "Angina Pectoris" },
      { title: "Rheumatic Heart Disease" },
      { title: "Infective Endocarditis" },
      { title: "Deep Vein Thrombosis" },
      { title: "Shock (all types)", href: "/learn/shock" },
    ],
  },
  {
    system: "Respiratory",
    conditions: [
      { title: "Pneumonia", href: "/learn/pneumonia" },
      { title: "Pulmonary Tuberculosis", href: "/learn/tuberculosis" },
      { title: "Asthma", href: "/learn/asthma" },
      { title: "COPD", href: "/learn/copd" },
      { title: "Pleural Effusion" },
    ],
  },
  {
    system: "Neurological",
    conditions: [
      { title: "Stroke", href: "/learn/stroke" },
      { title: "Epilepsy", href: "/learn/epilepsy" },
      { title: "Meningitis", href: "/learn/meningitis" },
      { title: "Head Injury", href: "/learn/head-injury" },
    ],
  },
  {
    system: "Endocrine & Metabolic",
    conditions: [
      { title: "Diabetes Mellitus", href: "/learn/diabetes" },
      { title: "Hypoglycaemia", href: "/learn/hypoglycaemia" },
      { title: "Diabetic Ketoacidosis", href: "/learn/dka" },
      { title: "Thyroid Disorders" },
    ],
  },
  {
    system: "Renal & Urinary",
    conditions: [
      { title: "Urinary Tract Infection", href: "/learn/uti" },
      { title: "Acute Kidney Injury", href: "/learn/aki" },
      { title: "Chronic Kidney Disease" },
      { title: "Kidney Stones" },
    ],
  },
  {
    system: "Gastrointestinal",
    conditions: [
      { title: "Typhoid Fever", href: "/learn/typhoid" },
      { title: "Peptic Ulcer Disease", href: "/learn/peptic-ulcer" },
      { title: "Acute Diarrhoea & Dehydration", href: "/learn/diarrhoea" },
      { title: "Liver Cirrhosis" },
      { title: "Appendicitis" },
    ],
  },
  {
    system: "Haematology",
    conditions: [
      { title: "Anaemia (incl. Sickle Cell)", href: "/learn/anaemia" },
      { title: "Severe Malaria", href: "/learn/malaria" },
      { title: "Bleeding Disorders" },
    ],
  },
  {
    system: "Musculoskeletal",
    conditions: [
      { title: "Fractures & Cast Care" },
      { title: "Osteomyelitis" },
      { title: "Arthritis" },
    ],
  },
];

const OTHER_SUBJECTS: { name: string; lessons: Lesson[] }[] = [
  {
    name: "Fundamentals of Nursing",
    lessons: [
      { title: "Hand Hygiene", href: "/learn/hand-hygiene" },
      { title: "Measuring Blood Pressure", href: "/learn/blood-pressure" },
    ],
  },
  {
    name: "Pharmacology",
    lessons: [
      { title: "Loop Diuretics (Furosemide)", href: "/learn/loop-diuretics" },
    ],
  },
  { name: "Anatomy and Physiology", lessons: [] },
  { name: "Maternal and Child Health", lessons: [] },
  { name: "Community Health Nursing", lessons: [] },
  { name: "Mental Health Nursing", lessons: [] },
];

function ConditionTag({ c }: { c: Lesson }) {
  if (c.href) {
    return (
      <Link
        href={c.href}
        className="mr-2 mt-2 inline-block rounded-xl px-3 py-1.5 text-sm text-white"
        style={{ background: "var(--pn-lagoon)" }}
      >
        {c.title} ✓
      </Link>
    );
  }
  return (
    <span className="mr-2 mt-2 inline-block rounded-xl border px-3 py-1.5 text-sm opacity-60">
      {c.title} · soon
    </span>
  );
}

export default function CurriculumPage() {
  const ready = MEDSURG_SYSTEMS.flatMap((s) => s.conditions).filter(
    (c) => c.href
  ).length;
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Subjects</h1>
      <p className="opacity-70">
        Every lesson teaches the topic with a real patient example, then gives
        practice questions. {ready} Med-Surg lessons ready — the rest are
        mapped and coming.
      </p>

      <h2 className="mt-6 font-serif text-2xl">Medical-Surgical Nursing</h2>
      <p className="text-sm opacity-70">
        Browse by body system. Tap a ✓ lesson to learn it now.
      </p>
      <div className="mt-3 grid gap-3">
        {MEDSURG_SYSTEMS.map((s) => (
          <div key={s.system} className="rounded-2xl border p-4">
            <strong>{s.system}</strong>
            <div className="mt-1">
              {s.conditions.map((c) => (
                <ConditionTag key={c.title} c={c} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-6 font-serif text-2xl">Other subjects</h2>
      <div className="mt-3 grid gap-3">
        {OTHER_SUBJECTS.map((s) => (
          <div key={s.name} className="rounded-2xl border p-4">
            <strong>{s.name}</strong>
            <div className="mt-1">
              {s.lessons.length ? (
                s.lessons.map((l) => <ConditionTag key={l.title} c={l} />)
              ) : (
                <span className="text-sm opacity-60">Lessons coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
