"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SuccessInner() {
  const params = useSearchParams();
  const reference = params.get("reference") || params.get("trxref") || "";
  const [state, setState] = useState("Checking test payment…");

  useEffect(() => {
    if (!reference) {
      setState("No payment reference found.");
      return;
    }
    fetch(`/api/pay/verify?reference=${reference}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.paid) {
          try {
            localStorage.setItem("pn-premium", "test-premium");
          } catch {
            /* ignore */
          }
          setState("Test payment verified — Premium unlocked (demo).");
        } else {
          setState(`Not paid: ${d.message || "verification failed."}`);
        }
      })
      .catch(() => setState("Network error during verification."));
  }, [reference]);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <h1 className="mt-2 font-serif text-3xl">Payment result</h1>
      <div className="mt-4 rounded-2xl border p-4">
        <p>{state}</p>
        <p className="mt-1 text-xs opacity-60">Reference: {reference || "—"}</p>
      </div>
      <Link href="/exams" className="mt-3 inline-block underline">
        Go to Exam Prep →
      </Link>
    </div>
  );
}

export default function PremiumSuccess() {
  return (
    <Suspense fallback={<p className="p-6">Checking…</p>}>
      <SuccessInner />
    </Suspense>
  );
}
