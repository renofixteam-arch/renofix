import "../globals.css";
import { SITE } from "../../lib/site";
import { localBusinessSchema } from "../../lib/schema";
import { RU_WHATSAPP_TEXT } from "../../lib/ru-ui";
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
        <RuHeader />
        {children}
        <RuFooter />
        <FloatingWhatsApp label="Написать в WhatsApp" text={RU_WHATSAPP_TEXT} />
        <Analytics />
      </body>
    </html>
  );
}
