import { SITE } from "../lib/site";
import { SERVICES, allServiceAreaParams } from "../lib/renofix-data";

export default function sitemap() {
  const now = new Date();
  const home = { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 };

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

  return [home, ...servicePages, ...areaPages];
}
