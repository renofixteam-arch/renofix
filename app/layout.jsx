import "./globals.css";
import { SITE } from "../lib/site";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RenoFix — Renovation, MEP & Maintenance Company in Dubai",
    template: "%s | RenoFix Dubai",
  },
  description:
    "RenoFix delivers apartment, villa, bathroom & kitchen renovation, MEP works, home maintenance, landscaping and swimming pool construction across Dubai. Get an instant estimate.",
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
    siteName: "RenoFix Dubai",
    title: "RenoFix — Renovation, MEP & Maintenance Company in Dubai",
    description:
      "Apartment, villa, bathroom & kitchen renovation, MEP, maintenance, landscaping and pools across Dubai. Instant estimate online.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  description:
    "Renovation, MEP, maintenance, landscaping and swimming pool construction company in Dubai.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: { "@type": "City", name: "Dubai" },
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  makesOffer: [
    "Apartment Renovation",
    "Villa Renovation",
    "Bathroom Renovation",
    "Kitchen Renovation",
    "MEP Works",
    "Home Maintenance",
    "Landscaping",
    "Swimming Pool Construction",
  ],
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
      </body>
    </html>
  );
}
