import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "../../../../lib/site";
import { getArea } from "../../../../lib/renofix-data";
import { SERVICES_RU, AREAS_RU, AREA_PAGE_META_RU } from "../../../../lib/renofix-data.ru";
import { getGuideRu } from "../../../../lib/guides.ru";
import { RU_AREA_PAGES, hreflangFor } from "../../../../lib/i18n";
import { RU_WHATSAPP_TEXT } from "../../../../lib/ru-ui";

// Cost guide to link from each service's area pages.
const SERVICE_GUIDE_RU = {
  "apartment-renovation": "apartment-renovation-cost-dubai",
  "villa-renovation": "villa-renovation-cost-dubai",
};

export function generateStaticParams() {
  return RU_AREA_PAGES;
}

function load(params) {
  const key = `${params.service}/${params.area}`;
  const meta = AREA_PAGE_META_RU[key];
  const service = SERVICES_RU[params.service];
  const areaRu = AREAS_RU[params.area];
  const area = getArea(params.area);
  if (!meta || !service || !areaRu || !area) return null;
  return { key, meta, service, areaRu, area };
}

export function generateMetadata({ params }) {
  const p = load(params);
  if (!p) return {};
  const canonical = `${SITE.url}/ru/${p.key}`;
  return {
    title: p.meta.title,
    description: p.meta.description,
    alternates: { canonical, languages: hreflangFor(`/${p.key}`) },
    openGraph: {
      images: [SITE.ogImage],
      type: "website",
      locale: "ru_RU",
      url: canonical,
      title: `${p.meta.title} | RenoFix Plus`,
      description: p.meta.description,
    },
  };
}

export default function ServiceAreaPageRu({ params }) {
  const p = load(params);
  if (!p) notFound();
  const { key, meta, service, areaRu, area } = p;

  const canonical = `${SITE.url}/ru/${key}`;
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(RU_WHATSAPP_TEXT)}`;
  const faqs = [{ q: service.nocQuestion(area.name), a: areaRu.nocFaq }, ...service.faqs];
  const guide = getGuideRu(SERVICE_GUIDE_RU[params.service]);
  const otherAreas = RU_AREA_PAGES.filter((x) => x.service === params.service && x.area !== params.area);
  const otherServices = RU_AREA_PAGES.filter((x) => x.service !== params.service);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: SITE.phone },
    areaServed: { "@type": "Place", name: `${area.name}, Dubai` },
    url: canonical,
    description: service.intro,
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE.url}/ru` },
      { "@type": "ListItem", position: 2, name: meta.title, item: canonical },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="mx-auto max-w-6xl px-4 pt-6 text-xs text-slate-500 sm:px-6 dark:text-slate-400">
        <Link href="/ru" className="hover:underline">Главная</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700 dark:text-slate-300">{meta.title}</span>
      </nav>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 pt-6 pb-10 sm:px-6 lg:grid-cols-2 lg:pt-10">
        <div>
          <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
            {area.name}, Дубай
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{meta.h1}</h1>
          <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg dark:text-slate-400">
            {service.intro} RenoFix Plus работает {meta.in} и во всех соседних районах Дубая — лицензированные
            бригады и фиксированная, прозрачная цена.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="font-display text-lg font-semibold">Бесплатный выезд и смета</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Напишите нам, что нужно сделать. Мы приедем на объект {meta.in}, оценим работы и подготовим
            детализированную смету с фиксированной ценой.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Написать в WhatsApp
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{service.included}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.scope.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300">✓</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ремонт {meta.in}: что нужно знать</h2>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">{areaRu.intro}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {areaRu.notes.map((n) => (
            <li key={n} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {n}
            </li>
          ))}
        </ul>
      </section>

      {guide && (
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <Link href={`/ru/guides/${guide.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 transition hover:border-amber-500/60">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">Полезный гид</p>
              <p className="mt-1 font-display text-base font-semibold">{guide.title}</p>
            </div>
            <span className="whitespace-nowrap text-sm font-semibold text-amber-600 dark:text-amber-400">Читать &rarr;</span>
          </Link>
        </section>
      )}

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {[
            ["Лицензия", "Лицензированный подрядчик в Дубае"],
            ["Местная команда", `Работаем ${meta.in}`],
            ["Фиксированная цена", "Без скрытых доплат"],
            ["Гарантия", "12 месяцев*"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-sm font-bold">{k}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Частые вопросы</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {otherAreas.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{service.otherAreas}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {otherAreas.map((x) => {
                  const k = `${x.service}/${x.area}`;
                  return (
                    <Link key={k} href={`/ru/${k}`} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm transition hover:border-amber-400 dark:border-slate-700">
                      {AREA_PAGE_META_RU[k].title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          {otherServices.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Другие услуги</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {otherServices.map((x) => {
                  const k = `${x.service}/${x.area}`;
                  return (
                    <Link key={k} href={`/ru/${k}`} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm transition hover:border-amber-400 dark:border-slate-700">
                      {AREA_PAGE_META_RU[k].title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-center dark:bg-slate-800 sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Получите смету на ремонт {meta.in}</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-300">Бесплатный выезд на объект и понятная смета с фиксированной ценой.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
            Написать RenoFix Plus в WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
