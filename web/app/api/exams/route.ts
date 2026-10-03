import { NextResponse } from "next/server";
import { EXAMS, examQuestions } from "../../data/exams";

export function GET() {
  return NextResponse.json({
    count: EXAMS.length,
    exams: EXAMS.map((e) => ({
      ...e,
      questionCount: examQuestions(e.id).length,
    })),
  });
}
