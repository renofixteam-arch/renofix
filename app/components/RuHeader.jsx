"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "./icons";
import LangSwitch from "./LangSwitch";
import { SITE } from "../../lib/site";
import { RU_WHATSAPP_TEXT } from "../../lib/ru-ui";

const NAV = [
  { href: "/ru#areas", label: "Районы" },
  { href: "/ru#guides", label: "Цены и гиды" },
  { href: "/ru#contact", label: "Контакты" },
];

export default function RuHeader() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(RU_WHATSAPP_TEXT)}`;
  const link =
    "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/ru" className="flex shrink-0 items-center gap-2.5">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-display text-lg font-bold text-slate-900">
            R
          </span>
          <span className="font-display text-lg font-bold tracking-tight">RenoFix Plus</span>
        </Link>

        <nav className="hidden items-center md:ml-2 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={link}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch to="en" className="hidden rounded-lg px-2.5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 sm:inline-flex dark:text-slate-300 dark:hover:bg-slate-800">
            EN
          </LangSwitch>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-slate-100 md:hidden dark:border-slate-800 dark:hover:bg-slate-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {n.label}
              </Link>
            ))}
            <LangSwitch
              to="en"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              English version
            </LangSwitch>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-slate-900 px-3 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
