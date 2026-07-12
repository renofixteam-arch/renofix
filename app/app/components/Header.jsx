"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "./icons";
import { SITE } from "../../lib/site";
import { SERVICES } from "../../lib/renofix-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navServices = SERVICES.slice(0, 5);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-display text-lg font-bold text-slate-900">
            R
          </span>
          <span className="font-display text-lg font-bold tracking-tight">RenoFix</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navServices.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              {s.name}
            </Link>
          ))}
          <Link
            href="/our-work"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            Our Work
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex dark:bg-amber-500 dark:text-slate-900 dark:hover:bg-amber-400"
          >
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 lg:hidden dark:border-slate-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-1">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/our-work"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Our Work
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-lg bg-amber-500 px-2 py-2.5 text-center text-sm font-semibold text-slate-900"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
