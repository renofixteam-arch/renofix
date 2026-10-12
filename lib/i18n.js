// Russian (/ru/) pilot: which English pages have a Russian twin, and helpers
// to map between them. Every Russian page here must have an English twin at
// the same path without the /ru prefix.
import { SITE } from "./site";

export const RU_GUIDE_SLUGS = [
  "bathroom-renovation-cost-dubai",
  "renovation-approvals-noc-dubai",
  "apartment-renovation-cost-dubai",
  "villa-renovation-cost-dubai",
  "kitchen-renovation-cost-dubai",
];

export const RU_AREA_PAGES = [
  { service: "villa-renovation", area: "palm-jumeirah" },
  { service: "villa-renovation", area: "jumeirah" },
  { service: "apartment-renovation", area: "business-bay" },
  { service: "apartment-renovation", area: "downtown-dubai" },
  { service: "apartment-renovation", area: "dubai-marina" },
];

// English paths (without /ru) that have a Russian twin.
export const RU_PATHS = [
  "/",
  ...RU_GUIDE_SLUGS.map((s) => `/guides/${s}`),
  ...RU_AREA_PAGES.map((p) => `/${p.service}/${p.area}`),
];

export function hasRuTwin(enPath) {
  return RU_PATHS.includes(enPath);
}

// Russian URL path for an English path; falls back to the Russian homepage.
export function ruPathFor(enPath) {
  if (!hasRuTwin(enPath)) return "/ru";
  return enPath === "/" ? "/ru" : `/ru${enPath}`;
}

// English URL path for a Russian path.
export function enPathFor(ruPath) {
  const p = ruPath.replace(/^\/ru(?=\/|$)/, "") || "/";
  return hasRuTwin(p) ? p : "/";
}

// Reciprocal hreflang block for metadata.alternates.languages. x-default is
// always the English URL. Returns undefined when the page has no Russian twin.
export function hreflangFor(enPath) {
  if (!hasRuTwin(enPath)) return undefined;
  const en = enPath === "/" ? SITE.url : `${SITE.url}${enPath}`;
  const ru = `${SITE.url}${ruPathFor(enPath)}`;
  return { en, ru, "x-default": en };
}
