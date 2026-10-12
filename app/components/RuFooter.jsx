import Link from "next/link";
import { Mail, Phone, AtSign } from "./icons";
import LangSwitch from "./LangSwitch";
import { SITE } from "../../lib/site";
import { RU_WHATSAPP_TEXT } from "../../lib/ru-ui";

const linkCls = "text-sm text-slate-600 transition hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400";

export default function RuFooter() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(RU_WHATSAPP_TEXT)}`;
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 font-display text-lg font-bold text-slate-900">
              R
            </span>
            <span className="font-display text-lg font-bold">RenoFix Plus</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Ремонт квартир и вилл, инженерные системы (MEP) и обслуживание в Дубае. Фиксированная цена,
            лицензированные бригады и гарантия 12 месяцев*.
          </p>
          <p className="mt-4 text-xs text-slate-500">Лицензированный подрядчик в Дубае</p>
          <p className="mt-1 text-xs text-slate-500">
            *{" "}
            <Link href="/warranty" hrefLang="en" className="underline hover:text-amber-600 dark:hover:text-amber-400">
              Действуют условия гарантии
            </Link>
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Разделы</h4>
          <ul className="mt-4 space-y-2.5">
            <li><Link href="/ru#areas" className={linkCls}>Ремонт по районам</Link></li>
            <li><Link href="/ru#guides" className={linkCls}>Цены и гиды</Link></li>
            <li><Link href="/ru#contact" className={linkCls}>Контакты</Link></li>
            <li><LangSwitch to="en" className={linkCls}>English version</LangSwitch></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Связаться с нами</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={wa} className="inline-flex items-center gap-2 transition hover:text-amber-600 dark:hover:text-amber-400">
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
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Бесплатный выезд на объект
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} RenoFix Plus. Все права защищены. ·{" "}
        <Link href="/privacy" hrefLang="en" className="hover:text-amber-600 dark:hover:text-amber-400">Privacy Policy</Link>
      </div>
    </footer>
  );
}
