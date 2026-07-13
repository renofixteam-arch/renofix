import { SITE } from "../lib/site";
import { SERVICES, allServiceAreaParams } from "../lib/renofix-data";

export default function sitemap() {
  const now = new Date();
  const home = { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 };

  const staticPages = [
    { url: `${SITE.url}/cost-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/our-work`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/request`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${SITE.url}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaPages = allServiceAreaParams().map((p) => ({
    url: `${SITE.url}/${p.service}/${p.area}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [home, ...staticPages, ...servicePages, ...areaPages];
}
