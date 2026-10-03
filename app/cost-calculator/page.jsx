import EstimateWizard from "../components/EstimateWizard";
import { SITE } from "../../lib/site";
import { BadgeCheck, ReceiptText, ShieldCheck, CalendarClock } from "../components/icons";

export const metadata = {
  title: "Renovation Cost Calculator Dubai",
  description:
    "Get an instant renovation cost estimate for your apartment, villa, townhouse or commercial space in Dubai. Free, step-by-step, no obligation.",
  alternates: { canonical: `${SITE.url}/cost-calculator` },
};

const TRUST = [
  { Icon: BadgeCheck, label: "Licensed contractor" },
  { Icon: CalendarClock, label: "Free site visit" },
  { Icon: ReceiptText, label: "Fixed transparent pricing" },
  { Icon: ShieldCheck, label: "12-month warranty (T&Cs apply)" },
];

export default function CostCalculatorPage() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi RenoFix Plus, I'd like to discuss my renovation project and get a quote."
  )}`;

  return (
    <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
          Free cost calculator
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Calculate your renovation cost
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
          Answer a few quick questions to get an instant, no-obligation estimate — and a free site
          visit from a licensed Dubai team.
        </p>
      </div>

      {/* Trust bar */}
      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {TRUST.map(({ Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2 py-3 text-center dark:border-slate-800 dark:bg-slate-900"
          >
            <Icon size={20} className="text-amber-500" />
            <span className="text-xs font-medium leading-tight text-slate-700 dark:text-slate-300">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <EstimateWizard />
      </div>

      {/* Talk-to-us fallback for people who don't want to fill the form */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center dark:border-slate-800 dark:bg-slate-900/40">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Prefer to talk it through first?
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36c1.46.8 3.1 1.22 4.84 1.22 5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.84 14.06c-.24.68-1.42 1.32-1.96 1.36-.5.06-1.14.08-1.84-.12-.42-.14-.96-.32-1.66-.62-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.18-1.58-1.18-3.02s.76-2.14 1.02-2.44c.26-.3.58-.38.78-.38.2 0 .38 0 .56.02.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.08.14.12.3.02.5-.1.2-.14.32-.28.5-.14.16-.3.36-.42.48-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.08.16-.2.68-.8.86-1.08.18-.28.36-.24.6-.14.24.08 1.54.72 1.8.86.26.14.44.2.5.32.06.12.06.66-.18 1.34z" />
          </svg>
          Chat with us on WhatsApp
        </a>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          We usually reply within a few hours.
        </p>
      </div>
    </main>
  );
}
