import Link from "next/link";
import LessonTools from "../LessonTools";

export default function AnaemiaLesson() {
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
          Haematology
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Anaemia (incl. Sickle Cell)</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Anaemia = too little haemoglobin to carry oxygen. Types to know:
          iron deficiency (commonest), sickle cell (inherited, Nigeria&apos;s
          burden), malaria/bleeding causes, B12/folate deficiency, chronic
          disease.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Poor iron diet, hookworm, heavy periods, frequent pregnancies,
          malaria destroying red cells, bleeding (ulcer, piles, injury), sickle
          genes from both parents. Children + pregnant women suffer most.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Few red cells → tissues gasp → heart pumps faster → tiredness,
          breathlessness, dizziness. Sickle cells: stiff banana shape blocks
          small vessels → sudden severe pain (crisis), chest trouble, stroke,
          infections.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Pale eyes/tongue/palms, tiredness, dizziness, fast pulse,
          breathlessness on small effort, headache, brittle nails, strange
          cravings (ice, clay). Sickle crisis: bone/joint pain, swollen
          hands-feet (children), yellow eyes, fever. Red flags: chest pain,
          breathing hard, fainting, black stools.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Pallor check (eyes, tongue, palms), vitals, weight, diet history,
          periods, pregnancies, bleeding, drugs (NSAIDs?), genotype result.
          Tests: haemoglobin/PCV, blood film, genotype, malaria test, stool for
          worms/blood, pregnancy test where relevant.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Treat the cause: iron + deworming + malaria care + stop bleeding +
          diet rebuild. Sickle: daily folic acid + penicillin prophylaxis in
          children, vaccines, hydroxyurea where available, crisis care
          (fluids, oxygen, strong pain relief, warmth, infection hunt).
          Transfuse only when truly needed.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Iron tablets</td>
              <td className="py-2">
                e.g. ferrous sulphate with vitamin C/orange, on empty stomach
                if tolerated. Black stools normal — warn! Continue 3 months
                after normal to refill stores.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Deworming + malaria</td>
              <td className="py-2">
                e.g. albendazole/mebendazole per schedule; treat every malaria
                promptly — each attack destroys red cells.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Sickle extras</td>
              <td className="py-2">
                Daily folic acid, penicillin V in young children, vaccines
                (pneumococcal), hydroxyurea per specialist, crisis: IV fluids +
                oxygen + analgesia ladder + antibiotics if infected.
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
          Rest with gradual activity, iron teaching (take with orange, not tea;
          constipation care), diet (beans, green leaves, meat/fish, palm oil in
          moderation), hookworm prevention (shoes, latrines), malaria nets,
          period/pregnancy care. Sickle crisis: warmth, fluids, oxygen, pain
          score + relief fast, watch chest/breathing, support parents without
          blame.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Heart failure from severe anaemia, fainting and falls, poor
          school/work, maternal death in pregnancy, sickle stroke/chest crisis.
          Prevention: iron-rich diet, deworming, nets, genotype counselling
          before marriage/pregnancy, antenatal iron.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Aisha, 7, SS: admitted with leg pain + fever, palms pale, Hb 7 g/dL,
          malaria positive. Nurse warms her, IV fluids, oxygen, pain relief per
          ladder, antimalarial per order, checks chest and hydration hourly;
          mother taught crisis triggers (cold, dehydration, infection) and daily
          folic acid + clinic dates.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Pale + tired + heavy periods? → Check Hb, find bleeding, iron +
          diet + treat cause.
        </p>
        <p>
          Q2: Sickle child with sudden leg pain + fever? → Crisis: warmth,
          fluids, oxygen, pain relief, hunt infection.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Anaemia (incl. Sickle Cell)" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Pale + tired → find the leak or lack → iron + food + worms + malaria
          care; sickle = warmth + fluids + pain relief + prevention. Back to:{" "}
          <Link href="/learn" className="underline">
            all lessons
          </Link>
        </p>
      </div>
      <p className="mt-3 text-xs opacity-60">
        Educational information only — not medical advice for a real patient.
      </p>
    </div>
  );
}
