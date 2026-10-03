import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "../../../lib/site";
import { GUIDES, getGuide } from "../../../lib/guides";
import { getService } from "../../../lib/renofix-data";
import { ArrowRight } from "../../components/icons";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  const canonical = `${SITE.url}/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      images: [SITE.ogImage],
      type: "article",
      locale: "en_AE",
      url: canonical,
      title: `${guide.metaTitle} | RenoFix`,
      description: guide.description,
    },
  };
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const canonical = `${SITE.url}/guides/${guide.slug}`;
  const related = (guide.relatedServices || []).map(getService).filter(Boolean);
  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: canonical,
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    inLanguage: "en-AE",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.url}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="mx-auto max-w-3xl px-4 pt-6 text-xs text-slate-500 sm:px-6 dark:text-slate-400">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/guides" className="hover:underline">Guides</Link>
      </nav>

      <article className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {guide.readTime} · Updated {guide.updated}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {guide.intro}
        </p>

        {guide.sections.map((sec) => (
          <section key={sec.h2} className="mt-10">
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{sec.h2}</h2>
            {(sec.body || []).map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {sec.list && (
              <ul className="mt-4 space-y-2.5">
                {sec.list.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {(sec.after || []).map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Mid-article CTA */}
        <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h2 className="font-display text-lg font-semibold">Get a figure for your own property</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Answer three quick questions and get an estimated cost range and timeline — free, with
            no obligation.
          </p>
          <Link
            href="/cost-calculator"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Open the cost calculator <ArrowRight size={15} />
          </Link>
        </div>

        {/* FAQs */}
        <section className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Frequently asked questions
          </h2>
          <div className="mt-5 divide-y divide-slate-200 dark:divide-slate-800">
            {guide.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-lg font-semibold">Related services</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-amber-400 dark:border-slate-800"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other guides */}
        {others.length > 0 && (
          <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
            <h2 className="font-display text-lg font-semibold">More guides</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group rounded-2xl border border-slate-200 p-5 transition hover:border-amber-400 dark:border-slate-800"
                >
                  <h3 className="font-display text-base font-semibold leading-snug">{g.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
                    Read guide <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
