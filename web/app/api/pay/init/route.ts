import { NextResponse } from "next/server";

// Starts a Paystack test transaction. Amount is in kobo: 100000 = ₦1,000.
export async function POST(request: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!secret || !publicKey) {
    return NextResponse.json(
      {
        error:
          "Paystack test keys are not set. Add them to web/.env.local (see .env.example) and restart the dev server.",
      },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const email = String(body.email || "").trim();
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "A valid email is required for the test payment." },
      { status: 400 }
    );
  }

  const origin =
    request.headers.get("origin") || "http://localhost:3000";

  const res = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      amount: 100000,
      callback_url: `${origin}/premium/success`,
      metadata: { plan: "prep-nurse-premium-test", app: "prep-nurse" },
    }),
  });

  const data = await res.json();
  if (!data.status) {
    return NextResponse.json(
      { error: data.message || "Paystack could not start the payment." },
      { status: 502 }
    );
  }
  return NextResponse.json({
    authorization_url: data.data.authorization_url,
    reference: data.data.reference,
  });
}
