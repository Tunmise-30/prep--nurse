import { NextResponse } from "next/server";
import { QUESTIONS, TOPICS } from "../../data/questions";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get("topic");
  const list = topic
    ? QUESTIONS.filter(
        (q) => q.topic.toLowerCase() === topic.toLowerCase()
      )
    : QUESTIONS;
  return NextResponse.json({
    topics: TOPICS,
    count: list.length,
    questions: list,
  });
}
