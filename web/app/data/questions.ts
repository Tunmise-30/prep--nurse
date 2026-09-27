export type QFormat = "mcq" | "multi" | "truefalse";

export interface Question {
  id: string;
  subject: string;
  topic: string;
  format: QFormat;
  stem: string;
  options: string[];
  /** index(es) of correct option(s) */
  answer: number[];
  explanation: string;
  whyOthersWrong: string;
  principle: string;
  reviewHref: string;
  reviewLabel: string;
}

export const TOPICS = [
  "Hypertension",
  "Heart Failure",
  "Diabetes",
  "Hand Hygiene",
  "Blood Pressure",
  "Loop Diuretics",
] as const;

export const QUESTIONS: Question[] = [
  {
    id: "htn-1",
    subject: "Medical-Surgical Nursing",
    topic: "Hypertension",
    format: "mcq",
    stem: "A patient has severe headache, blurred vision, BP 190/120 mmHg. What should the nurse assess first?",
    options: [
      "What the patient ate for breakfast",
      "The patient's favourite music",
      "Airway, breathing, circulation + repeat BP, urgent review",
      "Discharge the patient home",
    ],
    answer: [2],
    explanation:
      "C is correct: ABCs first, confirm the high reading, escalate — possible hypertensive emergency.",
    whyOthersWrong:
      "Food/music do not address danger; discharge is unsafe with these signs.",
    principle: "Prioritise life-threatening findings first.",
    reviewHref: "/learn/hypertension",
    reviewLabel: "Hypertension → Nursing management",
  },
  {
    id: "htn-2",
    subject: "Medical-Surgical Nursing",
    topic: "Hypertension",
    format: "mcq",
    stem: "Which finding in a hypertensive patient needs immediate attention?",
    options: [
      "Mild ankle swelling in the evening",
      "Chest pain with sweating",
      "Forgetting one exercise session",
      "Disliking low-salt food",
    ],
    answer: [1],
    explanation:
      "Chest pain with sweating may mean heart attack — urgent. The rest can wait.",
    whyOthersWrong:
      "Mild swelling, missed exercise, and food dislike are not immediately life-threatening.",
    principle: "Chest pain + sweating = emergency until proven otherwise.",
    reviewHref: "/learn/hypertension",
    reviewLabel: "Hypertension → Complications",
  },
  {
    id: "htn-3",
    subject: "Medical-Surgical Nursing",
    topic: "Hypertension",
    format: "truefalse",
    stem: "True or false: a small BP cuff gives a falsely low reading.",
    options: ["True", "False"],
    answer: [1],
    explanation:
      "False — a cuff that is too small reads falsely HIGH. Use a cuff whose bladder covers ~80% of the arm.",
    whyOthersWrong: "True reverses the rule; small cuff squeezes too much.",
    principle: "Right cuff size or wrong treatment.",
    reviewHref: "/learn/blood-pressure",
    reviewLabel: "Measuring Blood Pressure → Preparation",
  },
  {
    id: "hf-1",
    subject: "Medical-Surgical Nursing",
    topic: "Heart Failure",
    format: "mcq",
    stem: "A 65-year-old with heart failure says “I cannot breathe.” What should the nurse do first?",
    options: [
      "Lay the patient flat and leave",
      "Sit the patient upright, check ABCs + oxygen, call for help",
      "Offer a heavy meal",
      "Ask the patient to walk outside",
    ],
    answer: [1],
    explanation:
      "Upright position eases lung fluid; ABCs + oxygen + urgent help is the priority.",
    whyOthersWrong:
      "Lying flat worsens breathing; food and walking delay emergency care.",
    principle: "Breathlessness in heart failure = upright + oxygen + escalate.",
    reviewHref: "/learn/heart-failure",
    reviewLabel: "Heart Failure → Nursing management",
  },
  {
    id: "hf-2",
    subject: "Medical-Surgical Nursing",
    topic: "Heart Failure",
    format: "mcq",
    stem: "A heart-failure patient gains 2 kg in 2 days with more swelling. What does this most likely mean?",
    options: [
      "Muscle growth from exercise",
      "Fluid overload — report at once",
      "Healthy weight gain",
      "Faulty scale, ignore it",
    ],
    answer: [1],
    explanation:
      "Fast weight gain in heart failure is fluid, not fat — report before breathing worsens.",
    whyOthersWrong:
      "Muscle takes weeks; ignoring a warning sign is unsafe.",
    principle: "Daily weight is the early fluid alarm.",
    reviewHref: "/learn/heart-failure",
    reviewLabel: "Heart Failure → Nursing management",
  },
  {
    id: "hf-3",
    subject: "Medical-Surgical Nursing",
    topic: "Heart Failure",
    format: "multi",
    stem: "Which signs suggest LEFT-sided heart failure? (Pick all that apply)",
    options: [
      "Breathlessness when lying flat",
      "Crackles in the lungs",
      "Swollen ankles only, no breathing problem",
      "Frothy sputum",
    ],
    answer: [0, 1, 3],
    explanation:
      "Left failure floods the lungs: flat-lying dyspnea, crackles, frothy sputum. Ankle-only swelling points more to the right side.",
    whyOthersWrong: "Swollen ankles alone is mainly right-sided congestion.",
    principle: "Left = lungs; right = body.",
    reviewHref: "/learn/heart-failure",
    reviewLabel: "Heart Failure → Understand",
  },
  {
    id: "dm-1",
    subject: "Medical-Surgical Nursing",
    topic: "Diabetes",
    format: "mcq",
    stem: "A patient urinates much, drinks much water, is tired, and has a foot sore that will not heal. Fasting sugar is 210 mg/dL. What should the nurse suspect?",
    options: [
      "New likely diabetes needing confirmation",
      "Common cold",
      "Broken bone",
      "Nothing — all normal",
    ],
    answer: [0],
    explanation:
      "Classic high-sugar pattern plus a high fasting value points to diabetes; confirm and teach.",
    whyOthersWrong: "Cold, fracture, or 'normal' ignore the sugar evidence.",
    principle: "Classic symptoms + high value = suspect diabetes.",
    reviewHref: "/learn/diabetes",
    reviewLabel: "Diabetes → Understand",
  },
  {
    id: "dm-2",
    subject: "Medical-Surgical Nursing",
    topic: "Diabetes",
    format: "mcq",
    stem: "A diabetic patient on insulin is sweating, shaking, and confused. What is the priority?",
    options: [
      "Give more insulin at once",
      "Treat as low sugar: fast sugar if awake and allowed, recheck, escalate",
      "Send the patient jogging",
      "Wait until tomorrow",
    ],
    answer: [1],
    explanation:
      "Sweating + shaking + confusion on insulin = low sugar until proven otherwise. Fast sugar, recheck, escalate.",
    whyOthersWrong:
      "More insulin drops sugar further; exercise and waiting are dangerous.",
    principle: "Low sugar kills faster than high sugar — act now.",
    reviewHref: "/learn/diabetes",
    reviewLabel: "Diabetes → Nursing management",
  },
  {
    id: "dm-3",
    subject: "Medical-Surgical Nursing",
    topic: "Diabetes",
    format: "truefalse",
    stem: "True or false: diabetes is diagnosed when fasting sugar is ≥ 126 mg/dL on repeat checks.",
    options: ["True", "False"],
    answer: [0],
    explanation: "True — that is the standard fasting cut-off on repeat testing.",
    whyOthersWrong: "False denies the diagnostic threshold.",
    principle: "Know the numbers that define disease.",
    reviewHref: "/learn/diabetes",
    reviewLabel: "Diabetes → Learn",
  },
  {
    id: "hh-1",
    subject: "Fundamentals of Nursing",
    topic: "Hand Hygiene",
    format: "mcq",
    stem: "When must the nurse clean hands? (Best answer)",
    options: [
      "Only at the start of the shift",
      "Before touching a patient, before clean tasks, after fluid risk, after patient and surroundings",
      "Only when hands look dirty",
      "Never — gloves replace hand cleaning",
    ],
    answer: [1],
    explanation: "The 5 moments cover before/after patient, fluids, and surroundings.",
    whyOthersWrong:
      "Once a shift or 'only if dirty' misses invisible germs; gloves do not replace cleaning.",
    principle: "5 moments, every time.",
    reviewHref: "/learn/hand-hygiene",
    reviewLabel: "Hand Hygiene → When",
  },
  {
    id: "hh-2",
    subject: "Fundamentals of Nursing",
    topic: "Hand Hygiene",
    format: "mcq",
    stem: "Correct soap-and-water handwash takes about how long?",
    options: ["5 seconds", "40–60 seconds", "5 minutes", "1 second"],
    answer: [1],
    explanation:
      "40–60 seconds with full steps (palms, backs, fingers, thumbs, nails). Alcohol rub: 20–30 seconds.",
    whyOthersWrong: "Too short misses areas; 5 minutes wastes time and skin.",
    principle: "Full time + full steps or it does not count.",
    reviewHref: "/learn/hand-hygiene",
    reviewLabel: "Hand Hygiene → Procedure",
  },
  {
    id: "bp-1",
    subject: "Fundamentals of Nursing",
    topic: "Blood Pressure",
    format: "mcq",
    stem: "Before measuring BP, the patient should rest for how long, seated with back supported and arm at heart level?",
    options: [
      "No rest needed, standing on one leg",
      "About 5 minutes",
      "About 1 hour lying flat",
      "Only after running upstairs",
    ],
    answer: [1],
    explanation: "5 minutes rest, correct position, avoids falsely high readings.",
    whyOthersWrong: "Exercise, odd positions, or long delays distort the value.",
    principle: "Prepare the patient or the number lies.",
    reviewHref: "/learn/blood-pressure",
    reviewLabel: "Measuring BP → Preparation",
  },
  {
    id: "bp-2",
    subject: "Fundamentals of Nursing",
    topic: "Blood Pressure",
    format: "mcq",
    stem: "During manual BP, the first Korotkoff sound and its disappearance mean what?",
    options: [
      "Nothing important",
      "First sound = systolic, silence = diastolic",
      "First sound = diastolic, silence = systolic",
      "Both mean the cuff is broken",
    ],
    answer: [1],
    explanation: "First tap = systolic pressure; disappearance = diastolic.",
    whyOthersWrong: "Reversing them or ignoring them misreads the BP.",
    principle: "First sound up, silence down.",
    reviewHref: "/learn/blood-pressure",
    reviewLabel: "Measuring BP → Procedure",
  },
  {
    id: "loop-1",
    subject: "Pharmacology",
    topic: "Loop Diuretics",
    format: "mcq",
    stem: "Furosemide helps heart failure mainly by doing what?",
    options: [
      "Making kidneys pass more salt and water as urine",
      "Making the patient sleepy",
      "Thickening the blood",
      "Stopping all urine",
    ],
    answer: [0],
    explanation:
      "More salt and water out → less fluid overload → lower BP and easier breathing.",
    whyOthersWrong: "Sleepiness, thick blood, and no urine are not its action.",
    principle: "Water out → weight down → breathing better.",
    reviewHref: "/learn/loop-diuretics",
    reviewLabel: "Loop Diuretics → Action",
  },
  {
    id: "loop-2",
    subject: "Pharmacology",
    topic: "Loop Diuretics",
    format: "mcq",
    stem: "A patient on furosemide has weakness, cramps, and irregular pulse. What should the nurse check first?",
    options: [
      "Shoe size",
      "Potassium and kidney labs, BP, hydration",
      "Favourite food only",
      "Nothing — expected and safe",
    ],
    answer: [1],
    explanation:
      "Loop diuretics waste potassium; weakness + cramps + irregular pulse warns of low potassium plus dehydration.",
    whyOthersWrong: "Shoes, food chat, or ignoring miss a drug danger.",
    principle: "Diuresis → watch potassium, BP, kidneys.",
    reviewHref: "/learn/loop-diuretics",
    reviewLabel: "Loop Diuretics → Side effects",
  },
  {
    id: "loop-3",
    subject: "Pharmacology",
    topic: "Loop Diuretics",
    format: "mcq",
    stem: "Best time to give furosemide and why?",
    options: [
      "Bedtime, so the patient wakes often",
      "Morning, so extra urine passes in daytime and sleep is protected",
      "Only at midnight",
      "With alcohol",
    ],
    answer: [1],
    explanation: "Morning dosing keeps night sleep safe while fluid leaves by day.",
    whyOthersWrong: "Night dosing ruins sleep; alcohol worsens BP and dehydration.",
    principle: "Right time is part of the right dose.",
    reviewHref: "/learn/loop-diuretics",
    reviewLabel: "Loop Diuretics → Nursing responsibilities",
  },
  {
    id: "prio-1",
    subject: "Medical-Surgical Nursing",
    topic: "Hypertension",
    format: "mcq",
    stem: "Two patients wait: one with BP 150/95 and no symptoms, one with BP 190/120 plus chest pain. Who is seen first?",
    options: [
      "The symptom-free patient, first come first served",
      "The chest-pain patient with very high BP",
      "Neither — send both home",
      "Toss a coin",
    ],
    answer: [1],
    explanation:
      "Symptoms + very high BP beats numbers alone. Chest pain may mean heart attack or emergency.",
    whyOthersWrong: "Queue order, discharge, or chance ignore triage.",
    principle: "Sickest with red flags first.",
    reviewHref: "/learn/hypertension",
    reviewLabel: "Hypertension → Complications",
  },
  {
    id: "prio-2",
    subject: "Fundamentals of Nursing",
    topic: "Blood Pressure",
    format: "mcq",
    stem: "The BP cuff is placed on the arm with an IV drip. What should the nurse do?",
    options: [
      "Measure there anyway",
      "Use the other arm (no drip, fistula, or surgery side)",
      "Guess the number",
      "Skip vital signs forever",
    ],
    answer: [1],
    explanation: "Drip arms, fistulas, and post-surgery sides are avoided for safety and accuracy.",
    whyOthersWrong: "Measuring there risks harm and wrong numbers; guessing is never care.",
    principle: "Safe arm, true reading.",
    reviewHref: "/learn/blood-pressure",
    reviewLabel: "Measuring BP → Safety",
  },
  {
    id: "prio-3",
    subject: "Pharmacology",
    topic: "Loop Diuretics",
    format: "truefalse",
    stem: "True or false: a student nurse may independently prescribe furosemide for a real patient.",
    options: ["True", "False"],
    answer: [1],
    explanation:
      "False — drug learning is educational. Only licensed prescribers order; nurses give ordered doses safely.",
    whyOthersWrong: "True breaks safe practice and the law.",
    principle: "Learn drugs; never self-prescribe.",
    reviewHref: "/learn/loop-diuretics",
    reviewLabel: "Loop Diuretics → Review",
  },
  {
    id: "prio-4",
    subject: "Medical-Surgical Nursing",
    topic: "Diabetes",
    format: "multi",
    stem: "Which are classic high-sugar warnings? (Pick all that apply)",
    options: [
      "Passing much urine",
      "Much thirst",
      "Slow-healing sores",
      "Needing reading glasses once at age 50",
    ],
    answer: [0, 1, 2],
    explanation:
      "Polyuria, polydipsia, and slow healing are the classic trio. Reading glasses alone is normal ageing.",
    whyOthersWrong: "Glasses at 50 do not signal sugar by themselves.",
    principle: "Pee much + drink much + slow healing = check sugar.",
    reviewHref: "/learn/diabetes",
    reviewLabel: "Diabetes → Understand",
  },
];

export function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}
