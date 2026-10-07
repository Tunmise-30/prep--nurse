import Link from "next/link";
import LessonTools from "../LessonTools";

export default function UlcerLesson() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <Link href="/learn" className="text-sm underline">
        ← All lessons
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
          Gastrointestinal
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Peptic Ulcer Disease</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Ulcer = open sore in stomach or duodenum where acid + H. pylori germ
          eat the lining. Burns on empty stomach, eases briefly with food or
          antacid, returns in hours.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          H. pylori infection (commonest), frequent NSAIDs (ibuprofen,
          diclofenac without food/protection), smoking, alcohol, skipping
          meals, stress. Myth: pepper alone rarely causes it — but worsens pain.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Lining defence fails → acid digests the wall → gnawing pain. Deep
          ulcers bleed (black stools, vomiting blood) or perforate (sudden rigid
          belly — surgical emergency).
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Hunger-like upper-belly pain 2–3 hours after food or at night, relief
          with food/antacid, bloating, nausea. Red flags: black tarry stools,
          vomiting blood/“coffee grounds”, sudden severe belly pain + rigid
          abdomen, fainting.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Pain pattern (timing, food relief, night waking), NSAID/smoking/
          alcohol history, vitals + pallor, stool colour, belly exam. Tests: H.
          pylori stool/breath test, blood count (anaemia?), endoscopy where
          available for bleeders and over-50s.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Kill H. pylori (triple therapy), suppress acid, stop NSAIDs or add
          protection, small regular meals, stop smoking/alcohol. Bleeding:
          resuscitate + urgent endoscopy; perforation: nil by mouth + surgery.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Triple therapy (14 days)</td>
              <td className="py-2">
                Acid suppressor (e.g. omeprazole) + 2 antibiotics (e.g.
                clarithromycin + amoxicillin/metronidazole) per guideline.
                Finish all 14 days.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Acid suppression</td>
              <td className="py-2">
                e.g. omeprazole 20 mg daily before breakfast. Take 30–60 min
                before food for best effect.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Painkillers rule</td>
              <td className="py-2">
                Avoid NSAIDs during healing — paracetamol is the safe pain
                choice. If NSAID compulsory, add stomach protection per order.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Examples for learning — always follow the prescriber and your local
          guideline. Nurses never prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          Regular small meals (never long empty stomach), drug timing teaching
          (before food, full 14 days), stool watch (black = bleed), vitals +
          pallor checks, smoking/alcohol counselling, NSAID warning card for
          chronic pain patients.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Bleeding, perforation, blockage (vomiting undigested food).
          Prevention: treat H. pylori fully, food with NSAIDs, quit smoking,
          regular meals.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr H, 40, driver: night hunger-pain eased by biscuits, takes
          diclofenac daily for back pain, stools black 2 days, dizzy standing.
          Nurse checks vitals + pallor, keeps nil by mouth pending review,
          arranges urgent care (bleeding ulcer); teaching: stop NSAID, triple
          therapy discipline, paracetamol instead, meals on time.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Night hunger-pain + black stools on NSAIDs? → Bleeding ulcer:
          resuscitate, urgent review, stop NSAID.
        </p>
        <p>
          Q2: Omeprazole timing? → 30–60 min before breakfast, daily, full
          course.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Peptic Ulcer Disease" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Hunger-pain + night waking → H. pylori + NSAIDs → triple therapy 14
          days + black stool watch. Next:{" "}
          <Link href="/learn/epilepsy" className="underline">
            Epilepsy
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
