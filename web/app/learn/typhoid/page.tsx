import Link from "next/link";
import LessonTools from "../LessonTools";

export default function TyphoidLesson() {
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
      <h1 className="mt-1 font-serif text-3xl">Typhoid Fever</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Typhoid = blood infection by Salmonella Typhi from dirty water/food.
          Fever that climbs daily for a week, belly pain, then danger of gut
          bleeding or hole (perforation) in week 2–3.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Cause: faeces in water/food — broken pipes, street food, poor
          handwashing. Risks: rainy season, crowded hostels, carriers who cook
          for others, low vaccination.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Germs cross the gut → blood → liver, spleen, bone marrow. Gut lymph
          patches swell and can ulcerate → bleeding or perforation. Slow pulse
          despite high fever is a classic clue.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Step-ladder fever (rises daily), headache, belly pain, constipation
          (adults) or diarrhoea (children), dry cough, coated tongue, small
          pink spots on trunk, big spleen. Red flags: sudden severe belly pain +
          rigid belly (perforation), black stools/vomiting blood, confusion.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Fever chart, pulse-fever check, belly exam (tenderness? rigidity?),
          blood culture in week 1 (best), stool/urine culture later, Widal only
          supports (never alone), malaria test alongside (co-infection
          common). Ask: water source, food, fever days, drugs taken.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Right antibiotic by sensitivity, fluids, fever care, rest, small
          frequent meals, watch the belly daily. Perforation signs → nil by
          mouth, IV fluids, urgent surgery referral.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">First-line now</td>
              <td className="py-2">
                Per sensitivity: e.g. ciprofloxacin, ceftriaxone, or
                azithromycin per local guideline. Resistance is common — culture
                guides choice.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Supportive</td>
              <td className="py-2">
                Paracetamol for fever, oral/IV fluids, rest. Avoid NSAID excess
                on an irritated gut.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Never</td>
              <td className="py-2">
                Never start antibiotics before blood culture where delay is
                safe; never treat Widal alone without the clinical picture.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Examples for learning — always follow culture results, the
          prescriber, and your local guideline. Nurses never prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          4-hourly vitals with fever chart, strict fluids in/out, belly checks
          each shift, stool watch (black = bleed), hygiene teaching (boil
          water, wash hands, hot fresh food), drug adherence to the last dose,
          carrier screening for food handlers at home.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Gut perforation, bleeding, confusion, relapse from half treatment.
          Prevention: safe water, handwashing, vaccination for travellers and
          outbreaks, proper sewage.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Miss G, 19, student: fever 9 days climbing to 40°C, headache, belly
          pain, pulse 70 despite fever, Widal reactive, blood culture sent.
          Nurse charts fever, starts fluids, gives prescribed ceftriaxone after
          culture, watches belly daily; day 4 fever breaks; teaching: finish
          all doses, boil hostel water, handwash.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Step-ladder fever + slow pulse + belly pain? → Suspect typhoid:
          culture, vitals, belly watch.
        </p>
        <p>
          Q2: Sudden rigid belly in week 3? → Perforation: nil by mouth, IV
          fluids, urgent surgery.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Typhoid Fever" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Dirty water + climbing fever + slow pulse → culture → right
          antibiotic full course → watch the belly. Next:{" "}
          <Link href="/learn/anaemia" className="underline">
            Anaemia
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
