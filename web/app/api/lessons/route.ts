import { NextResponse } from "next/server";
import { LESSONS } from "../../data/library";

export function GET() {
  return NextResponse.json({ count: LESSONS.length, lessons: LESSONS });
}
