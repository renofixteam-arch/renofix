import Link from "next/link";
import { SITE } from "../../lib/site";
import { SERVICES } from "../../lib/renofix-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-900">
              R
            </span>
            <span className="text-lg font-bold">RenoFix</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-600 dark:text-slate-400">
            Renovation, MEP, maintenance, landscaping and swimming pools across
            Dubai. Fixed pricing, licensed teams.
          </p>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            DED Licence {SITE.licence}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold">Services</h4>
          <ul className="mt-3 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={`https://wa.me/${SITE.whatsapp}`} className="hover:underline">
                WhatsApp: {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:underline">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @{SITE.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} RenoFix. All rights reserved.
      </div>
    </footer>
  );
}
