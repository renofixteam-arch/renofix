// Business entity schema, shared by the English and Russian layouts.
import { SITE } from "./site";
import { SERVICES } from "./renofix-data";

export const localBusinessSchema = {
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
