import Link from "next/link";
import { SITE } from "../../lib/site";
import { SERVICES } from "../../lib/renofix-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-900">
            R
          </span>
          <span className="text-lg font-bold tracking-tight">RenoFix</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {SERVICES.slice(0, 5).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
