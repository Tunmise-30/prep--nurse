import { NextResponse } from "next/server";

// Verifies a Paystack test transaction by reference (server-side, secret key).
export async function GET(request: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Paystack test keys are not set (see web/.env.example)." },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference");
  if (!reference) {
    return NextResponse.json(
      { error: "Missing payment reference." },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    { headers: { Authorization: `Bearer ${secret}` } }
  );
  const data = await res.json();
  const paid = data.status && data.data?.status === "success";

  return NextResponse.json({
    paid,
    reference,
    amount: data.data?.amount ?? null,
    message: paid ? "Test payment verified." : data.message || "Not paid.",
  });
}
