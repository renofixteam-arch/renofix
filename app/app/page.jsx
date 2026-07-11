import Link from "next/link";
import {
  Building2, Home, Bath, ChefHat, Zap, Waves, Trees,
  ShieldCheck, BadgeCheck, ReceiptText, CalendarClock,
  Calculator, ClipboardCheck, Hammer, ArrowRight, MapPin,
} from "lucide-react";
import EstimateTool from "./components/EstimateTool";
import { SITE } from "../lib/site";
import { SERVICES, AREAS } from "../lib/renofix-data";

const SERVICE_ICONS = {
  "apartment-renovation": Building2,
  "villa-renovation": Home,
  "bathroom-renovation": Bath,
  "kitchen-renovation": ChefHat,
  "mep-works": Zap,
  "swimming-pool-construction": Waves,
  landscaping: Trees,
};

const VALUES = [
  { icon: BadgeCheck, title: "Licensed & accountable", body: `Fully licensed contractor (DED ${SITE.licence}). One team owns your project end to end.` },
  { icon: ReceiptText, title: "Fixed, transparent pricing", body: "A clear BOQ before we start. No hidden costs, no surprises mid-project." },
  { icon: ShieldCheck, title: "Workmanship warranty", body: "We stand behind the work — especially the parts you can't see, like waterproofing." },
  { icon: CalendarClock, title: "On-time delivery", body: "A committed timeline shared upfront, with communication at every stage." },
];

const STEPS = [
  { icon: Calculator, title: "Get an instant estimate", body: "Use the tool to get a ballpark price in seconds — pick a service, add your size, done." },
  { icon: ClipboardCheck, title: "Free site visit & fixed quote", body: "We visit, measure, and send a detailed fixed-price quotation you can rely on." },
  { icon: Hammer, title: "We build, you relax", body: "Licensed teams handle everything to Dubai standards, backed by our warranty." },
];

function serviceHref(area) {
  return area.type === "villa" ? `/villa-renovation/${area.slug}` : `/apartment-renovation/${area.slug}`;
}

export default function HomePage() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="bp-grid absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Renovation · MEP · Landscaping · Pools
              </p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Built right,
                <br />
                <span className="text-amber-500">priced honestly.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                Dubai&apos;s dependable renovation and maintenance company — from bathrooms and
                kitchens to full villas, MEP, landscaping and swimming pools.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#estimate"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Get instant estimate <ArrowRight size={16} />
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold transition hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:hover:border-amber-500 dark:hover:text-amber-400"
                >
                  WhatsApp us
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck size={16} className="text-amber-500" /> Licensed contractor
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ReceiptText size={16} className="text-amber-500" /> Fixed pricing
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-amber-500" /> Warranty
                </span>
              </div>
            </div>

            <div id="estimate" className="scroll-mt-24">
              <EstimateTool />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              What we do
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              One team for the whole job
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">
            Every trade under one roof means fewer contractors to manage and one point of
            accountability.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.slug] || Building2;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/5 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.intro.split(".")[0]}.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 opacity-0 transition group-hover:opacity-100 dark:text-amber-400">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Why RenoFix
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The boring stuff, done properly
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm dark:bg-slate-900 dark:text-amber-400">
                  <v.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
          How it works
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          From estimate to handover
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-900">
                  <step.icon size={20} />
                </span>
                <span className="font-display text-4xl font-bold text-slate-100 dark:text-slate-800">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- COVERAGE ---------- */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <MapPin size={18} />
            <p className="font-display text-xs font-semibold uppercase tracking-widest">
              Across Dubai
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Communities we serve
          </h2>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={serviceHref(a)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-amber-400 hover:text-amber-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:text-amber-400"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 dark:bg-slate-900 sm:px-12">
          <div className="bp-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to price your project?
            </h2>
            <p className="mt-3 text-slate-300">
              Get an instant estimate now, then book a free site visit for an exact,
              fixed-price quotation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Get instant estimate <ArrowRight size={16} />
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
