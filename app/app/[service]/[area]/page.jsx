import { notFound } from "next/navigation";
import Link from "next/link";
import EstimateTool from "../../components/EstimateTool";
import { SITE } from "../../../lib/site";
import { SERVICES, AREAS, getService, getArea, allServiceAreaParams } from "../../../lib/renofix-data";

export function generateStaticParams() {
  return allServiceAreaParams();
}

export function generateMetadata({ params }) {
  const service = getService(params.service);
  const area = getArea(params.area);
  if (!service || !area) return {};
  const title = `${service.name} in ${area.name}, Dubai`;
  const description = `Looking for ${service.short} in ${area.name}? RenoFix delivers professional ${service.short} with fixed pricing, licensed teams and a workmanship warranty. Get an instant estimate.`;
  const canonical = `${SITE.url}/${service.slug}/${area.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: "website", locale: "en_AE", url: canonical, title: `${title} | RenoFix`, description },
  };
}

export default function ServiceAreaPage({ params }) {
  const service = getService(params.service);
  const area = getArea(params.area);
  if (!service || !area || !service.areaTypes.includes(area.type)) notFound();

  const h1 = `${service.name} in ${area.name}`;
  const canonical = `${SITE.url}/${service.slug}/${area.slug}`;

  const relatedAreas = AREAS.filter((a) => a.slug !== area.slug && service.areaTypes.includes(a.type)).slice(0, 6);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug && s.areaTypes.includes(area.type)).slice(0, 6);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: SITE.phone, areaServed: { "@type": "Place", name: `${area.name}, Dubai` } },
    areaServed: { "@type": "Place", name: `${area.name}, Dubai` },
    url: canonical,
    description: service.intro,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: service.name, item: `${SITE.url}/${service.slug}` },
      { "@type": "ListItem", position: 3, name: area.name, item: canonical },
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
        <Link href={`/${service.slug}`} className="hover:underline">{service.name}</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700 dark:text-slate-300">{area.name}</span>
      </nav>

      <section className="mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6 lg:pt-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
              {area.name}, Dubai
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{h1}</h1>
            <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg dark:text-slate-400">
              {service.intro} RenoFix serves {area.name} and all surrounding Dubai communities with licensed teams and fixed, transparent pricing.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#estimate" className="flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                Get Instant Estimate
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500">
                WhatsApp Us
              </a>
            </div>
          </div>
          <div id="estimate" className="scroll-mt-24">
            <EstimateTool defaultService={service.estimateKey} areaName={area.name} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What&apos;s included in our {service.short}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.scope.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300">✓</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {[["Licensed", `DED Licence ${SITE.licence}`], ["Local team", `Serving ${area.name}`], ["Fixed pricing", "No hidden costs"], ["Warranty", "Workmanship guaranteed"]].map(([k, v]) => (
            <div key={k}>
              <p className="text-sm font-bold">{k}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{h1} — FAQs</h2>
        <div className="mt-6 space-y-4">
          {service.faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {relatedAreas.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{service.name} in other areas</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedAreas.map((a) => (
                  <Link key={a.slug} href={`/${service.slug}/${a.slug}`} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm transition hover:border-amber-400 dark:border-slate-700">{a.name}</Link>
                ))}
              </div>
            </div>
          )}
          {otherServices.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Other services in {area.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {otherServices.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}/${area.slug}`} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm transition hover:border-amber-400 dark:border-slate-700">{s.name}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-center dark:bg-slate-800 sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Get your {service.short} quote in {area.name}</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-300">Free site visit and a clear, fixed-price quotation.</p>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
            Talk to RenoFix on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
