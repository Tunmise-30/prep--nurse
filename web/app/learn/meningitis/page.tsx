import Link from "next/link";
import LessonTools from "../LessonTools";

export default function MeningitisLesson() {
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
          Neurological
        </span>
      </div>
      <h1 className="mt-1 font-serif text-3xl">Meningitis</h1>

      <div className="mt-4 rounded-2xl border p-4">
        <strong>1 · Definition</strong>
        <p>
          Meningitis = infection of the brain&apos;s coverings. Bacterial =
          emergency that kills in hours; viral = usually milder. The meningitis
          belt crosses northern Nigeria — dry season outbreaks.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>2 · Causes & risk factors</strong>
        <p>
          Bacteria (meningococcus, pneumococcus), viruses, rarely TB/fungi.
          Risks: crowding (hostels, camps), dry dusty season, missed vaccines,
          skull fracture with leak, weak immunity, close contact with a case.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>3 · What happens in the body</strong>
        <p>
          Germs inflame coverings → swelling inside a rigid skull → pressure
          rises → headache, vomiting, confusion, coma. Bacterial toxins spot the
          skin (purpuric rash that doesn&apos;t fade under glass) and crash
          blood pressure.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>4 · Signs & symptoms</strong>
        <p>
          Classic trio: fever + severe headache + stiff neck. Plus: vomiting,
          light hurts eyes, confusion, convulsions, babies: bulging fontanelle
          + high cry + poor feeding. Red flags: non-fading rash, coma, shock.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>5 · Assessment & investigations</strong>
        <p>
          Neck stiffness test, rash glass test, consciousness level, vitals,
          sugar (rule out!), malaria where relevant. Lumbar puncture after
          doctor review (never if coma signs/coma without scan) + blood
          cultures BEFORE antibiotics.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>6 · Medical management</strong>
        <p>
          Suspected bacterial = antibiotics within the HOUR (delay kills),
          fluids, oxygen, fever control, seizure care, isolation/droplet
          precautions, preventive antibiotics + vaccine for close contacts.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>7 · Drug regimen (learn the pattern)</strong>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Emergency antibiotic</td>
              <td className="py-2">
                e.g. ceftriaxone IV at once on suspicion — do not wait for LP
                results when bacterial signs shout.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-2 font-bold">Supportive</td>
              <td className="py-2">
                IV fluids, oxygen, paracetamol, anticonvulsant standby,
                dexamethasone per order in bacterial cases.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold">Contacts</td>
              <td className="py-2">
                e.g. ciprofloxacin/rifampicin preventive dose + meningococcal
                vaccine for household and close contacts per guideline.
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
          Quiet dark room, head raised, strict neuro + vital checks, fluids
          in/out, seizure precautions, droplet mask + handwash, samples before
          drugs, document consciousness trend — falling level = escalate at
          once.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>9 · Complications & prevention</strong>
        <p>
          Deafness, brain damage, fits, death. Prevention: vaccines
          (meningococcal, pneumococcal, Hib), treat contacts, avoid crowding in
          outbreak season, early clinic for stiff neck + fever.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>10 · Real patient case</strong>
        <p>
          Ibrahim, 17, hostel student: sudden fever, worst headache, vomited
          twice, neck stiff, small purple spots on legs. Nurse isolates with
          mask, vitals + sugar + malaria check, blood cultures, first ceftriaxone
          dose within the hour per order, contacts listed for prevention;
          hostel mates vaccinated in the response campaign.
        </p>
      </div>

      <div className="mt-3 rounded-2xl border p-4">
        <strong>11 · Practise now</strong>
        <p>
          Q1: Fever + stiff neck + purple non-fading rash? → Bacterial
          meningitis: cultures, antibiotics within the hour, isolate.
        </p>
        <p>
          Q2: Baby with bulging fontanelle + fever + poor feeding? → Urgent
          meningitis workup, handle gently, escalate.
        </p>
        <p className="mt-1">
          More:{" "}
          <Link href="/practice" className="underline">
            practise questions
          </Link>
        </p>
      </div>

      <LessonTools lesson="Meningitis" />

      <div className="mt-3 rounded-2xl border p-4">
        <strong>Review in one line</strong>
        <p>
          Fever + headache + stiff neck → cultures → antibiotics within the
          hour + contacts protected. Back to:{" "}
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
