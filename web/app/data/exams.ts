import { QUESTIONS } from "./questions";

export interface ExamConfig {
  id: string;
  title: string;
  kind: string;
  minutes: number;
  questionIds: string[];
  description: string;
}

function idsByTopic(topic: string): string[] {
  return QUESTIONS.filter((q) => q.topic === topic).map((q) => q.id);
}

function idsBySubject(subject: string): string[] {
  return QUESTIONS.filter((q) => q.subject === subject).map((q) => q.id);
}

const MEDSURG_IDS = idsBySubject("Medical-Surgical Nursing");
const PHARMA_IDS = idsBySubject("Pharmacology");

export const EXAMS: ExamConfig[] = [
  {
    id: "hnd-medsurg-mock",
    title: "HND Medical-Surgical Mock Exam",
    kind: "Mock examination",
    minutes: 10,
    questionIds: MEDSURG_IDS.slice(0, 10),
    description:
      "Realistic conditions: 10 mixed Med-Surg questions, 10 minutes, one sitting. Covers Hypertension, Heart Failure, Diabetes.",
  },
  {
    id: "pharma-subject-test",
    title: "Pharmacology Subject Test",
    kind: "Subject test",
    minutes: 6,
    questionIds: PHARMA_IDS.length
      ? PHARMA_IDS
      : QUESTIONS.slice(0, 3).map((q) => q.id),
    description:
      "One subject only: Loop Diuretics plus drug-safety questions with full explanations.",
  },
  {
    id: "comprehensive-1",
    title: "Comprehensive Test 1",
    kind: "Comprehensive",
    minutes: 12,
    questionIds: [
      ...QUESTIONS.slice(0, 8).map((q) => q.id),
      "stroke-1",
      "pneu-1",
    ],
    description:
      "Mixed subjects: Med-Surg, Fundamentals, and Pharmacology in one paper.",
  },
];

export function getExam(id: string): ExamConfig | undefined {
  return EXAMS.find((e) => e.id === id);
}

export function examQuestions(id: string) {
  const exam = getExam(id);
  if (!exam) return [];
  const byId = new Map(QUESTIONS.map((q) => [q.id, q]));
  return exam.questionIds
    .map((qid) => byId.get(qid))
    .filter((q) => q !== undefined);
}
