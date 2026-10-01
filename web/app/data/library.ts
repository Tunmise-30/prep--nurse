export interface LessonEntry {
  title: string;
  href: string;
  course: string;
  system: string;
  keywords: string;
}

export const LESSONS: LessonEntry[] = [
  {
    title: "Hypertension",
    href: "/learn/hypertension",
    course: "Medical-Surgical Nursing",
    system: "Cardiovascular",
    keywords:
      "high blood pressure 140/90 headache blurred vision emergency management salt",
  },
  {
    title: "Heart Failure",
    href: "/learn/heart-failure",
    course: "Medical-Surgical Nursing",
    system: "Cardiovascular",
    keywords:
      "breathlessness swelling daily weight fluid overload crackles diuretics",
  },
  {
    title: "Diabetes Mellitus",
    href: "/learn/diabetes",
    course: "Medical-Surgical Nursing",
    system: "Endocrine",
    keywords:
      "blood sugar insulin thirst urination foot sore hypoglycaemia 126",
  },
  {
    title: "Stroke",
    href: "/learn/stroke",
    course: "Medical-Surgical Nursing",
    system: "Neurological",
    keywords: "FAST face arm speech swallow brain attack weakness",
  },
  {
    title: "Pneumonia",
    href: "/learn/pneumonia",
    course: "Medical-Surgical Nursing",
    system: "Respiratory",
    keywords: "cough fever chest pain breathing oxygen sputum confusion elderly",
  },
  {
    title: "Hand Hygiene",
    href: "/learn/hand-hygiene",
    course: "Fundamentals of Nursing",
    system: "Infection Prevention",
    keywords: "5 moments soap alcohol rub 40 seconds infection control",
  },
  {
    title: "Measuring Blood Pressure",
    href: "/learn/blood-pressure",
    course: "Fundamentals of Nursing",
    system: "Vital Signs",
    keywords: "cuff Korotkoff systolic diastolic position rest",
  },
  {
    title: "Loop Diuretics (Furosemide)",
    href: "/learn/loop-diuretics",
    course: "Pharmacology",
    system: "Cardiovascular Drugs",
    keywords: "furosemide urine potassium morning dose side effects",
  },
];

export interface Flashcard {
  front: string;
  back: string;
  tag: string;
}

export const FLASHCARDS: Flashcard[] = [
  {
    front: "Hypertension is diagnosed at what BP (repeat checks)?",
    back: "≥ 140/90 mmHg.",
    tag: "Definitions",
  },
  {
    front: "FAST in stroke means?",
    back: "Face drooping, Arm weakness, Speech difficulty, Time to act.",
    tag: "Neurological",
  },
  {
    front: "Before feeding a new stroke patient, check what?",
    back: "Swallow safety — nil by mouth until tested.",
    tag: "Neurological",
  },
  {
    front: "Fasting sugar cut-off for diabetes (repeat)?",
    back: "≥ 126 mg/dL.",
    tag: "Endocrine",
  },
  {
    front: "Danger signs of LOW sugar on insulin?",
    back: "Sweating, shaking, confusion — give fast sugar if awake and allowed.",
    tag: "Endocrine",
  },
  {
    front: "Daily weight gain that warns of fluid overload in heart failure?",
    back: "+1–2 kg in 2 days — report at once.",
    tag: "Cardiovascular",
  },
  {
    front: "Left heart failure affects mainly what?",
    back: "The lungs: breathlessness lying flat, crackles, frothy sputum.",
    tag: "Cardiovascular",
  },
  {
    front: "Furosemide: why give it in the morning?",
    back: "So extra urine passes by day and night sleep is protected.",
    tag: "Drugs",
  },
  {
    front: "Furosemide danger labs to watch?",
    back: "Low potassium (weakness, cramps, irregular pulse) + kidney function.",
    tag: "Drugs",
  },
  {
    front: "Small BP cuff gives what kind of wrong reading?",
    back: "Falsely HIGH. Bladder must cover ~80% of arm.",
    tag: "Skills",
  },
  {
    front: "First Korotkoff sound = ? Disappearance = ?",
    back: "First = systolic. Silence = diastolic.",
    tag: "Skills",
  },
  {
    front: "Soap-and-water handwash time?",
    back: "40–60 seconds, all steps. Alcohol rub: 20–30 seconds.",
    tag: "Skills",
  },
];
