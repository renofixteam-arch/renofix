import "../globals.css";
import { SITE } from "../../lib/site";
import { localBusinessSchema, webSiteSchema } from "../../lib/schema";
import { RU_WHATSAPP_TEXT, RU_REVIEW_PENDING, RU_REVIEW_NOTE } from "../../lib/ru-ui";
import RuHeader from "../components/RuHeader";
import RuFooter from "../components/RuFooter";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Analytics from "../components/Analytics";

// Root layout for the Russian (/ru/) pages, so they render <html lang="ru">.
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RenoFix Plus — ремонт и отделка в Дубае",
    template: "%s | RenoFix Plus",
  },
  robots: { index: true, follow: true },
};

export default function RuLayout({ children }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <RuHeader />
        {RU_REVIEW_PENDING && (
          <div className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-center text-xs text-amber-900 sm:text-sm dark:text-amber-200">
            {RU_REVIEW_NOTE.split("WhatsApp")[0]}
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(RU_WHATSAPP_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              WhatsApp
            </a>
            {RU_REVIEW_NOTE.split("WhatsApp")[1]}
          </div>
        )}
        {children}
        <RuFooter />
        <FloatingWhatsApp label="Написать в WhatsApp" text={RU_WHATSAPP_TEXT} />
        <Analytics />
      </body>
    </html>
  );
}
