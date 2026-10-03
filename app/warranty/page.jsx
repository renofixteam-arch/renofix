import { SITE } from "../../lib/site";

export const metadata = {
  title: "Warranty Terms",
  description:
    "RenoFix Plus 12-month workmanship warranty: what it covers, what it excludes and how to make a claim.",
  alternates: { canonical: `${SITE.url}/warranty` },
  robots: { index: true, follow: true },
};

const h2 = "font-display text-lg font-semibold text-slate-900 dark:text-white";
const ul = "mt-2 list-disc space-y-1.5 pl-5";

export default function WarrantyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Warranty Terms</h1>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Last updated: October 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          {SITE.name} (Renofix Plus Technical Contracting LLC) gives a 12-month workmanship warranty on the
          work we carry out. This page explains what that covers and how to use it. Where your signed
          quotation or contract says something different, the contract applies.
        </p>

        <div>
          <h2 className={h2}>Warranty period</h2>
          <p className="mt-2">
            The warranty runs for 12 months from the date of handover of the completed work, as stated on
            your handover or completion note.
          </p>
        </div>

        <div>
          <h2 className={h2}>What is covered</h2>
          <p className="mt-2">
            Defects caused by our workmanship in the work we carried out, for example:
          </p>
          <ul className={ul}>
            <li>Tiles that crack, lift or come loose because of how they were laid</li>
            <li>Leaks from plumbing joints or waterproofing we installed</li>
            <li>Faults in electrical wiring, points or connections we installed</li>
            <li>Joinery, ceilings or partitions that fail because of how they were fitted</li>
            <li>Paint or finishes that peel or blister because of poor preparation or application</li>
          </ul>
          <p className="mt-2">
            We will inspect the issue and, where it is covered, repair or redo the affected work at no
            cost to you. We decide the most suitable method of repair.
          </p>
        </div>

        <div>
          <h2 className={h2}>What is not covered</h2>
          <ul className={ul}>
            <li>Normal wear and tear, and minor hairline cracks from normal building movement or settlement</li>
            <li>Damage from misuse, accidents, impact, neglect or lack of normal maintenance</li>
            <li>Work altered or repaired by anyone other than {SITE.name}</li>
            <li>Materials, fixtures or appliances supplied by the client</li>
            <li>
              Manufactured products such as appliances, AC units, mixers and sanitaryware — these are
              covered by the manufacturer&apos;s own warranty, which we will help you claim
            </li>
            <li>Problems in parts of the property we did not work on, or conditions that existed before our work</li>
            <li>Damage from water, power or other issues coming from outside our scope, such as neighbouring units or building services</li>
            <li>Consumables such as light bulbs, filters, silicone and grout discolouration</li>
            <li>Indirect or consequential losses, such as damage to furniture or belongings, or loss of rent</li>
          </ul>
        </div>

        <div>
          <h2 className={h2}>Conditions</h2>
          <ul className={ul}>
            <li>The warranty applies once the contract has been paid in full.</li>
            <li>It covers the property where the work was done and the work listed in your quotation or contract.</li>
            <li>Please report a defect as soon as you notice it, so it does not cause further damage.</li>
            <li>You will need to give our team reasonable access to inspect and repair the work.</li>
          </ul>
        </div>

        <div>
          <h2 className={h2}>How to make a claim</h2>
          <p className="mt-2">
            Message us on WhatsApp at {SITE.phone} or email{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-amber-600 hover:underline dark:text-amber-400">{SITE.email}</a>{" "}
            with your name, the property address, a short description of the problem and photos. We will
            arrange an inspection and confirm whether the issue is covered.
          </p>
        </div>
      </div>
    </main>
  );
}
