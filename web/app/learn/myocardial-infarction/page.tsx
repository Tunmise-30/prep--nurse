import Link from "next/link";
import LessonTools from "../LessonTools";

export default function MyocardialInfarctionLesson() {
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
          Cardiovascular
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">
        Myocardial Infarction (Heart Attack)
      </h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition & types</strong>
        <p>
          Heart attack = heart muscle dies because a coronary
          artery is blocked (clot on a ruptured fatty patch).
          STEMI (ST-elevation: artery fully blocked) vs NSTEMI
          (partly blocked) — the ECG decides, and STEMI needs
          emergency opening of the artery.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Fatty patches (atherosclerosis) narrowed by smoking,
          high blood pressure, diabetes, high cholesterol,
          family history, age, obesity, stress, cocaine. A
          patch ruptures → clot forms → artery blocks.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Blocked artery → muscle downstream starves → cells die
          within hours. Dead muscle pumps weakly or triggers
          dangerous rhythms; the heart may fail or tear.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Crushing central chest pain &gt; 20 minutes, often
          into the jaw, left arm, or back; sweating, nausea,
          breathlessness, fear. Trick: women, diabetics, and
          elderly may have only breathlessness, weakness, or
          confusion — sometimes no pain at all.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          ABCs, oxygen, BP, pulse, pain score, 12-lead ECG
          within minutes (ST elevation = STEMI), troponin blood
          test (muscle damage marker). Ask: pain onset, diabetes,
          smoking, previous heart disease.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Emergency: chewed aspirin, GTN under the tongue,
          oxygen if low, morphine for pain; STEMI → open the
          artery (PCI within 90 minutes, or clot-buster if PCI
          unavailable). Hospital: dual antiplatelet, heparin,
          statin, beta-blocker, ACE inhibitor.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Immediate</td>
              <td className="py-2">
                e.g. aspirin 300 mg chewed, GTN spray/tab under
                tongue, oxygen only if saturation low. Call
                emergency first — do not delay.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">
                Hospital (days 1–2)
              </td>
              <td className="py-2">
                e.g. clopidogrel or ticagrelor + aspirin,
                heparin drip, statin, beta-blocker, ACE
                inhibitor — per prescriber.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Reperfusion</td>
              <td className="py-2">
                PCI (balloon + stent) is best within 90 minutes;
                fibrinolysis (“clot-buster”) if PCI is unavailable
                within 12 hours of pain start.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs opacity-70">
          Example adult doses for learning — always follow the
          prescriber and your local guideline. Nurses never
          prescribe.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>8 · Nursing management</strong>
        <p>
          Treat chest pain as an emergency: call for help, rest,
          aspirin if allowed, oxygen if low, IV access, ECG and
          troponin, monitor rhythm (watch for dangerous
          beats), nothing by mouth until the plan, pain relief
          on time, prepare for cath lab. Watch urine and
          breathing — early heart failure signs.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Dangerous rhythms (VF), heart failure, rupture, shock,
          sudden arrest. Prevention: stop smoking, control BP and
          sugar, statins, daily activity, healthy diet, cardiac
          rehabilitation, know the warning signs and call early.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Mr O, 55: crushing chest pain 45 minutes, sweating,
          pain into the jaw. Nurse calls emergency help at once,
          keeps him resting, gives chewed aspirin per protocol,
          oxygen (saturation 93%), ECG shows ST elevation →
          cath lab within the hour; pain charted every 15
          minutes; family taught to call early next time.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Crushing chest pain 40 minutes + sweating — first
          action? → Emergency help at once; aspirin if allowed;
          rest and monitor.
        </p>
        <p>
          Q2: Why chew the aspirin? → Fast absorption; helps stop
          the clot growing in the blocked artery.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Myocardial Infarction" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Crushing chest pain &gt; 20 min = emergency: call,
          rest, aspirin, ECG. Back to:{" "}
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
