"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "./icons";
import { SITE } from "../../lib/site";
import { SERVICES } from "../../lib/renofix-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navServices = SERVICES.slice(0, 4);

  const link =
    "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-display text-lg font-bold text-slate-900">
            R
          </span>
          <span className="font-display text-lg font-bold tracking-tight">RenoFix</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:ml-4 lg:flex">
          {navServices.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className={link}>
              {s.name}
            </Link>
          ))}
          <Link href="/our-work" className={link}>
            Our Work
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/request"
            className="hidden whitespace-nowrap rounded-lg border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-500 hover:text-slate-900 sm:inline-flex dark:text-amber-400 dark:hover:text-slate-900"
          >
            Request
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-slate-100 lg:hidden dark:border-slate-800 dark:hover:bg-slate-800"
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/our-work"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Our Work
            </Link>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link
                href="/request"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-amber-500 px-3 py-2.5 text-center text-sm font-semibold text-amber-600 dark:text-amber-400"
              >
                Request
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-900 px-3 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
