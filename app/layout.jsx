import "./globals.css";
import { SITE } from "../lib/site";
import { SERVICES } from "../lib/renofix-data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Analytics from "./components/Analytics";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RenoFix Plus — Renovation, MEP & Maintenance Company in Dubai",
    template: "%s | RenoFix Plus",
  },
  description:
    "RenoFix Plus delivers apartment, villa, bathroom & kitchen renovation, MEP works, home maintenance, landscaping and swimming pool construction across Dubai. Get an instant estimate.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  legalName: "Renofix Plus Technical Contracting LLC",
  alternateName: ["RenoFix", "RenoFix Dubai", "Renofix Plus Contracting", "renofixplus"],
  description:
    "Renovation, MEP, maintenance, landscaping and swimming pool construction company in Dubai.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: { "@type": "City", name: "Dubai" },
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  priceRange: "$$",
  image: `${SITE.url}/opengraph-image`,
  logo: `${SITE.url}/icon`,
  sameAs: [`https://instagram.com/${SITE.instagram}`],
  knowsAbout: [
    "Apartment renovation",
    "Villa renovation",
    "Bathroom renovation",
    "Kitchen renovation",
    "MEP works",
    "Interior fit-out subcontracting",
    "Renovation NOC and approvals in Dubai",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renovation and MEP services in Dubai",
    itemListElement: [
      ...SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/${s.slug}` },
      })),
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "MEP & Interior Fit-Out Subcontracting", url: `${SITE.url}/subcontracting` },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
