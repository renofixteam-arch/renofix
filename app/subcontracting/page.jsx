import Link from "next/link";
import { SITE } from "../../lib/site";

const canonical = `${SITE.url}/subcontracting`;
const title = "MEP & Interior Fit-Out Subcontractor in Dubai";
const description =
  "RenoFix Plus works as a supply-and-install subcontractor for main contractors, fit-out companies, developers and property managers in Dubai — MEP, ceilings, partitions, flooring, painting and joinery for residential and commercial projects.";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { images: [SITE.ogImage], type: "website", locale: "en_AE", url: canonical, title: `${title} | RenoFix Plus`, description },
};

const WHO = [
  { title: "Main contractors", body: "Package out MEP or finishing trades to one team that prices from your BOQ and works to your programme." },
  { title: "Fit-out companies", body: "Extra capacity for office, retail and F&B fit-outs when your own crews are stretched." },
  { title: "Developers", body: "Handover snagging, unit upgrades and common-area works across residential and commercial buildings." },
  { title: "Property & facility managers", body: "Unit refurbishments between tenancies and scheduled MEP works across a portfolio." },
];

const TRADES = [
  "MEP — electrical wiring, DB upgrades, plumbing, drainage, AC and ventilation",
  "Gypsum false ceilings and bulkheads",
  "Drywall partitions and glass partitions",
  "Flooring — tiling, vinyl, laminate and engineered wood",
  "Painting and wall finishes",
  "Joinery — doors, wardrobes, kitchen cabinets and vanities",
  "Bathroom and kitchen installation",
  "Testing, commissioning and handover documentation",
];

const HOW = [
  { title: "Supply and install", body: "We price labour and material together, so you deal with one package per trade instead of chasing separate suppliers." },
  { title: "Priced from your BOQ", body: "Send drawings and a BOQ and we return an itemised rate-based quote. Variations are priced the same way, in writing, before they are done." },
  { title: "Supervised on site", body: "Every package has a named site supervisor who reports progress to your project team." },
  { title: "Approvals support", body: "We prepare the MEP drawings and documents needed for DEWA and building or authority approvals, and coordinate submissions with you." },
  { title: "Documents ready", body: "Trade licence and insurance certificates are available on request for your prequalification." },
  { title: "Residential and commercial", body: "Apartments, villas, offices, retail units and F&B outlets across Dubai." },
];

const FAQS = [
  {
    q: "Do you supply material or only labour?",
    a: "We work on a supply-and-install basis — labour, material and supervision in one price per package. That keeps responsibility for quality and programme with one team.",
  },
  {
    q: "Which trades can you take on as a subcontractor?",
    a: "MEP (electrical, plumbing, drainage, AC and ventilation), false ceilings, partitions, flooring, painting, joinery, and bathroom and kitchen installation. You can award a single trade or several together.",
  },
  {
    q: "Do you take commercial projects?",
    a: "Yes. We work on residential and commercial projects, including offices, retail units and F&B outlets, as well as apartments and villas.",
  },
  {
    q: "How do you price subcontract work?",
    a: "From your drawings and BOQ. We return an itemised, rate-based quotation so you can compare line by line, and any variation is priced in writing before work starts.",
  },
  {
    q: "Can you share your licence and insurance for prequalification?",
    a: "Yes. Our trade licence and insurance certificates are available on request as part of your vendor registration or prequalification.",
  },
];

export default function SubcontractingPage() {
  const waText = encodeURIComponent("Hi RenoFix Plus, I'd like a subcontract quote for a project in Dubai.");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MEP and interior fit-out subcontracting",
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: SITE.phone },
    areaServed: { "@type": "City", name: "Dubai" },
    url: canonical,
    description,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Subcontracting", item: canonical },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="mx-auto max-w-6xl px-4 pt-6 text-xs text-slate-500 sm:px-6 dark:text-slate-400">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700 dark:text-slate-300">Subcontracting</span>
      </nav>

      <section className="mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6 lg:pt-10">
        <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          For contractors &amp; developers
        </span>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          MEP &amp; Interior Fit-Out Subcontractor in Dubai
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-400">
          RenoFix Plus takes on MEP and finishing packages as a supply-and-install subcontractor for residential and
          commercial projects. Itemised pricing from your BOQ, a supervised team on site, and no surprises on the final account.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Send your BOQ on WhatsApp
          </a>
          <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Subcontract quote request")}`} className="flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500">
            Email drawings &amp; BOQ
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Who we work with</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {WHO.map((w) => (
            <div key={w.title} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold">{w.title}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Trades we subcontract</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRADES.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300">✓</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How we work as your subcontractor</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOW.map((h) => (
            <div key={h.title} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold">{h.title}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Link href="/guides/hiring-mep-subcontractor-dubai" className="group flex items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 transition hover:border-amber-500/60">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">Helpful guide</p>
            <p className="mt-1 font-display text-base font-semibold">How to Choose an MEP Subcontractor in Dubai</p>
          </div>
          <span className="whitespace-nowrap text-sm font-semibold text-amber-600 dark:text-amber-400">Read &rarr;</span>
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Subcontracting FAQs</h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
