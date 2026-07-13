import { notFound } from "next/navigation";
import Link from "next/link";
import EstimateWizard from "../components/EstimateWizard";
import SlotBackground from "../components/SlotBackground";
import { SITE } from "../../lib/site";
import { SERVICES, getService, areasForService } from "../../lib/renofix-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.service);
  if (!service) return {};
  const title = `${service.name} in Dubai`;
  const description = `Professional ${service.short} in Dubai by RenoFix. Fixed pricing, licensed teams and a workmanship warranty. Get an instant estimate online.`;
  const canonical = `${SITE.url}/${service.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: "website", locale: "en_AE", url: canonical, title: `${title} | RenoFix`, description },
  };
}

export default function ServicePage({ params }) {
  const service = getService(params.service);
  if (!service) notFound();

  const areas = areasForService(service);
  const canonical = `${SITE.url}/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: SITE.phone },
    areaServed: { "@type": "City", name: "Dubai" },
    url: canonical,
    description: service.intro,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="mx-auto max-w-6xl px-4 pt-6 text-xs text-slate-500 sm:px-6 dark:text-slate-400">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700 dark:text-slate-300">{service.name}</span>
      </nav>

      <section className="relative overflow-hidden">
        <SlotBackground imageKey={`service:${service.slug}`} />
        <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 px-4 pt-6 pb-10 sm:px-6 lg:grid-cols-2 lg:pt-10">
          <div>
            <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
              Dubai
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {service.name} in Dubai
            </h1>
            <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg dark:text-slate-400">
              {service.intro}
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
            <EstimateWizard />
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

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {service.name} by area
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          We serve {service.name.toLowerCase()} across Dubai. Choose your community:
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {areas.map((a) => (
            <Link key={a.slug} href={`/${service.slug}/${a.slug}`} className="rounded-lg border border-slate-200 px-4 py-2 text-sm transition hover:border-amber-400 dark:border-slate-700">
              {a.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{service.name} FAQs</h2>
        <div className="mt-6 space-y-4">
          {service.faqs.map((f) => (
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
