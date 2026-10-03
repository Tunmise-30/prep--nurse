"use client";

import { useState } from "react";
import Link from "next/link";

export default function PremiumPage() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function pay() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/pay/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        setError(data.error || "Could not start test payment.");
      }
    } catch {
      setError("Network error. Is the dev server running?");
    }
    setBusy(false);
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Go Premium (test mode)</h1>
      <p className="opacity-70">
        Prep Nurse Premium — ₦1,000/month in this test. NO real money moves:
        Paystack test keys + test card only.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>What Premium unlocks (demo)</strong>
        <p className="text-sm opacity-80">
          All mock exams, all comprehensive tests, and priority new lessons.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <label className="block text-sm">Your email (for the test receipt)</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          type="email"
          className="mt-1 w-full rounded-xl border px-4 py-2"
        />
        <button
          onClick={pay}
          disabled={busy || !email.includes("@")}
          className="mt-3 rounded-xl px-5 py-2 text-white disabled:opacity-40"
          style={{ background: "var(--pn-coral)" }}
        >
          {busy ? "Starting…" : "Pay ₦1,000 (TEST — no real charge)"}
        </button>
        {error && <p className="mt-2 text-sm">{error}</p>}
        <p className="mt-2 text-xs opacity-60">
          Test card to use on Paystack&apos;s page: 4084 0840 8408 4081, any
          future date, any CVV, PIN 0000. Still no real money.
        </p>
      </div>
    </div>
  );
}
