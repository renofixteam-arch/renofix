import Link from "next/link";
import { SITE } from "../../lib/site";
import { GUIDES } from "../../lib/guides";
import { ArrowRight } from "../components/icons";

export const metadata = {
  title: "Renovation Guides for Dubai Homeowners",
  description:
    "Practical guides on renovation costs, approvals and planning in Dubai — written by a working Dubai contractor. No sales pitch, just what you need to budget properly.",
  alternates: { canonical: `${SITE.url}/guides` },
  openGraph: {
    images: [SITE.ogImage],
    type: "website",
    locale: "en_AE",
    url: `${SITE.url}/guides`,
    title: "Renovation Guides for Dubai Homeowners | RenoFix Plus",
    description:
      "Practical guides on renovation costs, approvals and planning in Dubai.",
  },
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
        Guides
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Renovation guides for Dubai homeowners
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        Straight answers on what things cost, what approvals you need, and where budgets
        usually go wrong — written from what we see on site every week.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:border-amber-400 dark:border-slate-800"
          >
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {g.readTime} · Updated {g.updated}
            </p>
            <h2 className="mt-2 font-display text-lg font-semibold leading-snug">{g.title}</h2>
            <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
              {g.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
              Read guide{" "}
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="font-display text-lg font-semibold">Want a number for your own home?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
          Our cost calculator gives you an estimated range and timeline in under a minute.
        </p>
        <Link
          href="/cost-calculator"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Open the cost calculator
        </Link>
      </div>
    </main>
  );
}
