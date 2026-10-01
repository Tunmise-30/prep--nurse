import Link from "next/link";

export default function StrokeLesson() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/dashboard" className="text-sm underline">
        ← Home
      </Link>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-white">
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-lilac)" }}
        >
          Medical-Surgical Nursing
        </span>
        <span
          className="rounded-full px-3 py-1"
          style={{ background: "var(--pn-mint)" }}
        >
          Neurological
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Stroke</h1>
      <p className="opacity-70">
        Teach → practical example → practise. Your choice: read first, or jump
        to questions.
      </p>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>Learn — what it is</strong>
        <p>
          Stroke = part of the brain suddenly loses blood. Two types: blocked
          vessel (ischaemic, most common) or burst vessel (haemorrhagic).
          Without blood, brain cells die within minutes.
        </p>
        <p>
          <strong>Causes & risks:</strong> hypertension (biggest), diabetes,
          smoking, high cholesterol, heart rhythm problems, too much alcohol.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Understand — how to spot it (FAST)</strong>
        <p>
          <strong>F</strong>ace drooping · <strong>A</strong>rm weakness ·{" "}
          <strong>S</strong>peech difficulty · <strong>T</strong>ime to call for
          help. Other signs: sudden confusion, vision loss, severe headache,
          unsteady walking.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Apply — practical example</strong>
        <p>
          A 62-year-old man slurs his words at breakfast; his left arm drifts
          down when raised; face looks uneven. His wife calls the nurse. The
          nurse notes the exact time signs started, checks ABCs, blood sugar
          (low sugar can mimic stroke), BP, and sends him for urgent scan —
          treatment depends on minutes, not hours.
        </p>
        <p className="mt-2 text-sm opacity-80">
          <strong>Nursing care after:</strong> keep airway safe (swallow test
          before any food or drug by mouth), position to prevent choking and
          pressure sores, check BP and neuro signs often, start physiotherapy
          early, support feeding, speech, and family teaching.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Practise — check yourself</strong>
        <p>
          A patient suddenly cannot lift one arm and speech is slurred. First
          action?
        </p>
        <p className="mt-1 text-sm">
          A. Offer food and water · B. Note onset time, ABCs, urgent review · C.
          Ask them to sleep it off
        </p>
        <p className="mt-1 text-sm opacity-80">
          Answer: B — stroke care is time-critical; never feed before a swallow
          check. More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
          .
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review</strong>
        <p>
          Remember FAST, note the clock, protect the airway, nil by mouth until
          swallow is safe. Hypertension control prevents most strokes.
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
