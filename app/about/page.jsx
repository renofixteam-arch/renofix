import Link from "next/link";
import { SITE } from "../../lib/site";
import { SERVICES } from "../../lib/renofix-data";

const canonical = `${SITE.url}/about`;
const description =
  "RenoFix Plus (renofixplus.ae) is a licensed renovation, MEP and maintenance contractor in Dubai. Fixed, itemised pricing for homeowners, landlords, contractors and developers.";

export const metadata = {
  title: { absolute: "About RenoFix Plus — Renovation & MEP Contractor in Dubai" },
  description,
  alternates: { canonical },
  openGraph: { images: [SITE.ogImage], type: "website", locale: "en_AE", url: canonical, title: "About RenoFix Plus | Renovation & MEP Contractor in Dubai", description },
};

const FACTS = [
  ["Company", "RenoFix Plus"],
  ["Website", "renofixplus.ae"],
  ["What we do", "Renovation, MEP works, maintenance and fit-out subcontracting"],
  ["Where", "Dubai, United Arab Emirates — all communities"],
  ["Who we work for", "Homeowners, landlords, property managers, main contractors, fit-out companies and developers"],
  ["Projects", "Residential (apartments, villas, townhouses) and commercial (offices, retail, F&B)"],
  ["Pricing", "Fixed, itemised quotes agreed before work starts"],
  ["Contact", `${SITE.phone} · ${SITE.email}`],
];

const PRINCIPLES = [
  {
    title: "A fixed price you can read",
    body: "Every quote is itemised, so you can see what you are paying for. The price we agree is the price you pay — any change in scope is quoted in writing before it is done.",
  },
  {
    title: "One accountable team",
    body: "Our own supervised teams carry out the work, from strip-out and MEP to finishes and handover. One point of contact owns your project end to end.",
  },
  {
    title: "Approvals handled properly",
    body: "We prepare building NOC documents and support DEWA and authority submissions, so work starts on time and stays compliant.",
  },
  {
    title: "Work we stand behind",
    body: "Our workmanship is covered by a written 12-month warranty (terms and conditions apply), and our trade licence and insurance documents are available on request.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: canonical,
    name: "About RenoFix Plus",
    description,
    about: { "@id": `${SITE.url}/#business` },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <section className="mx-auto max-w-3xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20">
        <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          About us
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          RenoFix Plus — renovation and MEP contractor in Dubai
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          RenoFix Plus is a licensed renovation, MEP and maintenance contractor based in Dubai, online at{" "}
          <Link href="/" className="font-semibold text-amber-600 hover:underline dark:text-amber-400">renofixplus.ae</Link>.
          We renovate apartments and villas, rebuild bathrooms and kitchens, carry out MEP works, and take on
          supply-and-install packages as a subcontractor for contractors and developers.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          Renovation pricing in Dubai is hard to trust. Quotes for the same job can differ two- or threefold, and
          the final bill often grows once work begins. We work differently: a fixed, itemised price up front, and
          no surprises at the end.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight">RenoFix Plus at a glance</h2>
        <dl className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {FACTS.map(([k, v]) => (
            <div key={k} className="grid gap-1 px-5 py-3.5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold">{k}</dt>
              <dd className="text-sm text-slate-600 sm:col-span-2 dark:text-slate-400">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight">How we work</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold">{p.title}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight">What we do</h2>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="rounded-lg border border-slate-200 px-4 py-2 text-sm transition hover:border-amber-400 dark:border-slate-700">
              {s.name}
            </Link>
          ))}
          <Link href="/subcontracting" className="rounded-lg border border-slate-200 px-4 py-2 text-sm transition hover:border-amber-400 dark:border-slate-700">
            Subcontracting
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-8 pb-20 sm:px-6">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
          <p className="font-display text-lg font-semibold">Planning a project?</p>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            Get an instant estimate online, or send us your scope on WhatsApp for a fixed, itemised quote.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/cost-calculator" className="flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Get an instant estimate
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-slate-400 dark:border-slate-700">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
