import Link from "next/link";
import EstimateTool from "./components/EstimateTool";
import { SITE } from "../lib/site";
import { SERVICES } from "../lib/renofix-data";

const TRUST = [
  ["Licensed", `DED Licence ${SITE.licence}`],
  ["Dubai-wide", "All communities covered"],
  ["Fixed pricing", "Transparent, no surprises"],
  ["Warranty", "Workmanship guaranteed"],
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
              Renovation • MEP • Maintenance • Landscaping • Pools
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Dubai&apos;s reliable renovation &amp; maintenance company
            </h1>
            <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg dark:text-slate-400">
              From bathrooms and kitchens to full villa renovations, MEP works,
              landscaping and swimming pools — RenoFix delivers quality work at
              honest, fixed prices.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Get Instant Estimate
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div id="estimate" className="scroll-mt-24">
            <EstimateTool />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4">
          {TRUST.map(([k, v]) => (
            <div key={k}>
              <p className="text-sm font-bold">{k}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Services</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          One trusted team for every part of your renovation project in Dubai.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold">{s.name}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {s.intro.split(".")[0]}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-center dark:bg-slate-800 sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-300">
            Get a free site visit and a clear, fixed-price quotation.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Talk to RenoFix on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
