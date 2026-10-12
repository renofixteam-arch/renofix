import Link from "next/link";
import { SITE } from "../../lib/site";
import { GUIDES_RU } from "../../lib/guides.ru";
import { RU_AREA_PAGES, hreflangFor } from "../../lib/i18n";
import { AREA_PAGE_META_RU } from "../../lib/renofix-data.ru";
import { RU_WHATSAPP_TEXT } from "../../lib/ru-ui";
import { ArrowRight, BadgeCheck, ReceiptText, ShieldCheck, ClipboardCheck } from "../components/icons";

const description =
  "RenoFix Plus — ремонт квартир и вилл, ванных и кухонь, MEP и обслуживание в Дубае. Фиксированная цена и гарантия 12 месяцев (действуют условия).";

export const metadata = {
  title: { absolute: "Ремонт и отделка в Дубае | RenoFix Plus" },
  description,
  alternates: { canonical: `${SITE.url}/ru`, languages: hreflangFor("/") },
  openGraph: {
    images: [SITE.ogImage],
    type: "website",
    locale: "ru_RU",
    url: `${SITE.url}/ru`,
    siteName: "RenoFix Plus",
    title: "Ремонт и отделка в Дубае | RenoFix Plus",
    description,
  },
};

const SERVICES = [
  "Ремонт квартир",
  "Ремонт вилл",
  "Ремонт ванных комнат",
  "Ремонт кухонь",
  "Инженерные системы (MEP): электрика, водопровод, кондиционирование",
  "Покраска и полы",
  "Подвесные потолки и перегородки",
  "Бассейны и ландшафт",
  "Обслуживание и годовые контракты (AMC)",
];

const POINTS = [
  { Icon: ReceiptText, title: "Фиксированная цена", body: "Детализированная смета до начала работ. Любые изменения объёма — только письменно и до их выполнения." },
  { Icon: ShieldCheck, title: "Гарантия 12 месяцев*", body: "Гарантия на выполненные работы, включая то, чего не видно, например гидроизоляцию." },
  { Icon: ClipboardCheck, title: "Согласования и NOC", body: "Готовим документы для NOC и сопровождаем согласования с управляющей компанией и сообществом." },
  { Icon: BadgeCheck, title: "Одна ответственная команда", body: "Лицензированные бригады ведут проект от демонтажа до сдачи." },
];

export default function HomePageRu() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(RU_WHATSAPP_TEXT)}`;

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
        <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          Ремонт · MEP · Обслуживание
        </span>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          RenoFix Plus — ремонт и отделка в Дубае
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-400">
          Ремонтируем квартиры и виллы, ванные и кухни, выполняем инженерные работы и обслуживание по всему
          Дубаю. Называем фиксированную, детализированную цену до начала работ — без сюрпризов в конце.
          Ремонтные пакеты — от AED 35 000.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Написать в WhatsApp <ArrowRight size={15} />
          </a>
          <a href="#guides" className="flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold transition hover:border-amber-400 dark:border-slate-700">
            Цены на ремонт
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <Icon size={20} className="text-amber-500" />
              <p className="mt-3 font-semibold">{title}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Что мы делаем</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300">✓</span>
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section id="areas" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ремонт по районам</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Работаем по всему Дубаю. Подробнее о ремонте в популярных районах:</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {RU_AREA_PAGES.map((p) => {
            const key = `${p.service}/${p.area}`;
            return (
              <Link key={key} href={`/ru/${key}`} className="rounded-lg border border-slate-200 px-4 py-2 text-sm transition hover:border-amber-400 dark:border-slate-700">
                {AREA_PAGE_META_RU[key].title}
              </Link>
            );
          })}
        </div>
      </section>

      <section id="guides" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Цены и гиды</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Реальные цены на ремонт в Дубае и как проходят согласования.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES_RU.map((g) => (
            <Link key={g.slug} href={`/ru/guides/${g.slug}`} className="group rounded-2xl border border-slate-200 p-5 transition hover:border-amber-400 dark:border-slate-800">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{g.readTime}</p>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug">{g.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
                Читать <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-10 pb-20 sm:px-6">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-center dark:bg-slate-800 sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Бесплатный выезд и смета</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-300">
            Напишите или позвоните нам — договоримся о выезде на объект и подготовим смету с фиксированной ценой.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
              Написать в WhatsApp
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400">
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
