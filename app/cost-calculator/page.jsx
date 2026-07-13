import EstimateWizard from "../components/EstimateWizard";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "Renovation Cost Calculator Dubai",
  description:
    "Get an instant renovation cost estimate for your apartment, villa, townhouse or commercial space in Dubai. Free, step-by-step, no obligation.",
  alternates: { canonical: `${SITE.url}/cost-calculator` },
};

export default function CostCalculatorPage() {
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
          Answer a few quick questions to get an instant, no-obligation estimate for your project
          in Dubai.
        </p>
      </div>
      <div className="mt-8">
        <EstimateWizard />
      </div>
    </main>
  );
}
