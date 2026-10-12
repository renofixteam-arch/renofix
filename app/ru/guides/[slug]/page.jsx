import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "../../../../lib/site";
import { GUIDES_RU, getGuideRu } from "../../../../lib/guides.ru";
import { hreflangFor, RU_AREA_PAGES } from "../../../../lib/i18n";
import { AREA_PAGE_META_RU } from "../../../../lib/renofix-data.ru";
import { RU_WHATSAPP_TEXT } from "../../../../lib/ru-ui";
import { ArrowRight } from "../../../components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES_RU.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuideRu(params.slug);
  if (!guide) return {};
  const canonical = `${SITE.url}/ru/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical, languages: hreflangFor(`/guides/${guide.slug}`) },
    openGraph: {
      images: [SITE.ogImage],
      type: "article",
      locale: "ru_RU",
      url: canonical,
      title: `${guide.metaTitle} | RenoFix Plus`,
      description: guide.description,
    },
  };
}

export default function GuidePageRu({ params }) {
  const guide = getGuideRu(params.slug);
  if (!guide) notFound();

  const canonical = `${SITE.url}/ru/guides/${guide.slug}`;
  const others = GUIDES_RU.filter((g) => g.slug !== guide.slug);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(RU_WHATSAPP_TEXT)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: canonical,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    inLanguage: "ru",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE.url}/ru` },
      { "@type": "ListItem", position: 2, name: guide.title, item: canonical },
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
        <Link href="/ru" className="hover:underline">Главная</Link>
        <span className="mx-1.5">/</span>
        <Link href="/ru#guides" className="hover:underline">Гиды</Link>
      </nav>

      <article className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {guide.readTime} · Обновлено: {guide.updated}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">{guide.intro}</p>

        {guide.sections.map((sec) => (
          <section key={sec.h2} className="mt-10">
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{sec.h2}</h2>
            {(sec.body || []).map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{p}</p>
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
              <p key={p} className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{p}</p>
            ))}
          </section>
        ))}

        <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h2 className="font-display text-lg font-semibold">Узнайте стоимость для вашего объекта</h2>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Напишите нам в WhatsApp: что вы хотите отремонтировать и где находится объект. Мы бесплатно выедем
            на объект и подготовим понятную смету с фиксированной ценой.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Написать в WhatsApp <ArrowRight size={15} />
          </a>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">Частые вопросы</h2>
          <div className="mt-5 divide-y divide-slate-200 dark:divide-slate-800">
            {guide.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-lg font-semibold">Ремонт по районам</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {RU_AREA_PAGES.map((p) => {
              const key = `${p.service}/${p.area}`;
              return (
                <Link
                  key={key}
                  href={`/ru/${key}`}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-amber-400 dark:border-slate-800"
                >
                  {AREA_PAGE_META_RU[key].title}
                </Link>
              );
            })}
          </div>
        </section>

        {others.length > 0 && (
          <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
            <h2 className="font-display text-lg font-semibold">Другие гиды</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((g) => (
                <Link
                  key={g.slug}
                  href={`/ru/guides/${g.slug}`}
                  className="group rounded-2xl border border-slate-200 p-5 transition hover:border-amber-400 dark:border-slate-800"
                >
                  <h3 className="font-display text-base font-semibold leading-snug">{g.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
                    Читать <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
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
