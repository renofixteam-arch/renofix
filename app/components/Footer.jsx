import Link from "next/link";
import { Mail, Phone, AtSign } from "./icons";
import { SITE } from "../../lib/site";
import { SERVICES } from "../../lib/renofix-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-display text-lg font-bold text-slate-900">
              R
            </span>
            <span className="font-display text-lg font-bold">RenoFix</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Renovation, MEP, maintenance, landscaping and swimming pools across Dubai.
            Fixed pricing, licensed teams, warranty-backed work.
          </p>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
            Licensed contractor in Dubai
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-sm text-slate-600 transition hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/our-work" className="text-sm text-slate-600 transition hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/cost-calculator" className="text-sm text-slate-600 transition hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400">
                Cost Calculator
              </Link>
            </li>            <li>
              <Link href="/request" className="text-sm text-slate-600 transition hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400">
                Request a service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={`https://wa.me/${SITE.whatsapp}`} className="inline-flex items-center gap-2 transition hover:text-amber-600 dark:hover:text-amber-400">
                <Phone size={15} /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 transition hover:text-amber-600 dark:hover:text-amber-400">
                <Mail size={15} /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-amber-600 dark:hover:text-amber-400">
                <AtSign size={15} /> @{SITE.instagram}
              </a>
            </li>
          </ul>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Book a free site visit
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} RenoFix. All rights reserved. ·{" "}
        <Link href="/privacy" className="hover:text-amber-600 dark:hover:text-amber-400">Privacy Policy</Link>
      </div>
    </footer>
  );
}
