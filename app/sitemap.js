import { SITE } from "../lib/site";
import { GUIDES } from "../lib/guides";
import { SERVICES, allServiceAreaParams } from "../lib/renofix-data";
import { RU_PATHS, ruPathFor, hreflangFor } from "../lib/i18n";

export default function sitemap() {
  const home = { url: SITE.url, changeFrequency: "weekly", priority: 1 };

  const staticPages = [
    { url: `${SITE.url}/cost-calculator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/guides`, changeFrequency: "monthly", priority: 0.7 },
    ...GUIDES.map((g) => ({
      url: `${SITE.url}/guides/${g.slug}`,
     
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    { url: `${SITE.url}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/subcontracting`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/our-work`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/request`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/warranty`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${SITE.url}/${s.slug}`,
   
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaPages = allServiceAreaParams().map((p) => ({
    url: `${SITE.url}/${p.service}/${p.area}`,
   
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Russian (/ru/) twins, with reciprocal hreflang on both language versions.
  const withLanguages = (entry) => {
    const path = entry.url === SITE.url ? "/" : entry.url.slice(SITE.url.length);
    const languages = hreflangFor(path);
    return languages ? { ...entry, alternates: { languages } } : entry;
  };
  const ruPages = RU_PATHS.map((path) => ({
    url: `${SITE.url}${ruPathFor(path)}`,
   
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: { languages: hreflangFor(path) },
  }));

  return [...[home, ...staticPages, ...servicePages, ...areaPages].map(withLanguages), ...ruPages];
}
