import "../globals.css";
import { SITE } from "../../lib/site";
import { localBusinessSchema, webSiteSchema } from "../../lib/schema";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Analytics from "../components/Analytics";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RenoFix Plus — Renovation, MEP & Maintenance Company in Dubai",
    template: "%s | RenoFix Plus",
  },
  description:
    "RenoFix Plus: apartment, villa, bathroom & kitchen renovation, MEP and maintenance in Dubai — fixed, itemised pricing and a 12-month warranty (T&Cs apply).",
  keywords: [
    "renovation company Dubai",
    "apartment renovation Dubai",
    "villa renovation Dubai",
    "bathroom renovation Dubai",
    "kitchen renovation Dubai",
    "MEP contractor Dubai",
    "home maintenance Dubai",
    "swimming pool construction Dubai",
    "landscaping company Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE.url,
    siteName: "RenoFix Plus",
    title: "RenoFix Plus — Renovation, MEP & Maintenance Company in Dubai",
    description:
      "Apartment, villa, bathroom & kitchen renovation, MEP, maintenance, landscaping and pools across Dubai. Instant estimate online.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
