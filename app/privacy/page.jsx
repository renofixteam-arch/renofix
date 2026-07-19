import { SITE } from "../../lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How RenoFix collects and uses the information you share through our website.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Last updated: 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          This policy explains how RenoFix handles the information you share with us through this
          website. We keep it simple and only collect what we need to help you.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">What we collect</h2>
          <p className="mt-2">
            When you use our cost calculator or request form, we collect the details you enter —
            your name, phone number, area, and any project details you choose to share. We may also
            collect basic, non-identifying analytics about how the site is used.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">How we use it</h2>
          <p className="mt-2">
            We use your details only to respond to your enquiry — to contact you, arrange a site
            visit, and prepare a quotation. We do not sell or rent your information to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Messaging</h2>
          <p className="mt-2">
            If you contact us on WhatsApp, your message and number are handled within WhatsApp
            according to their terms. We use them only to reply to and follow up on your enquiry.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Your choices</h2>
          <p className="mt-2">
            You can ask us to update or delete your information at any time by contacting us at{" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-amber-600 hover:underline dark:text-amber-400">{SITE.email}</a>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Email {" "}
            <a href={`mailto:${SITE.email}`} className="font-medium text-amber-600 hover:underline dark:text-amber-400">{SITE.email}</a>{" "}
            or message us on WhatsApp at {SITE.phone}.
          </p>
        </div>
      </div>
    </main>
  );
}
