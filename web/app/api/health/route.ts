import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ ok: true, app: "prep-nurse", phase: "local-api" });
}
