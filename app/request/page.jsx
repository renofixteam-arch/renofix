import ServiceRequestForm from "../components/ServiceRequestForm";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "Request a Service in Dubai",
  description:
    "Request apartment, villa, bathroom or kitchen renovation, MEP, landscaping or pool works from RenoFix Dubai. Free site visit and fixed-price quote.",
  alternates: { canonical: `${SITE.url}/request` },
};

export default function RequestPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
        Get started
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Request a free site visit
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Share a few details and our team will get back to you with next steps and a
        fixed-price quotation. Prefer chat? You can also{" "}
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-medium text-amber-600 hover:underline dark:text-amber-400">
          message us on WhatsApp
        </a>.
      </p>
      <div className="mt-8">
        <ServiceRequestForm />
      </div>
    </main>
  );
}
