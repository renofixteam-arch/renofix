// NOTE: apartment/villa per-sqft rates cover GENERAL AREAS ONLY (living, bedrooms,
// flooring, painting, general MEP). Bathrooms and kitchens are added separately in the
// calculator, so these rates must NOT include bathroom/kitchen cost — otherwise the
// estimate double-counts. Bathroom = guide "full rebuild, same layout"; kitchen = guide
// "new kitchen, same layout" (lib/guides.js). Live values come from Supabase estimate_rates;
// keep these defaults in sync with it. Tune all values in /admin/rates.
export const DEFAULT_RATES = {
  apartment: { label: "Apartment – general areas (per sqft)", unit: "sqft", low: 35, high: 70, min: 35000 },
  villa: { label: "Villa / townhouse – general areas (per sqft)", unit: "sqft", low: 45, high: 100, min: 35000 },
  bathroom: { label: "Bathroom (per bathroom)", unit: "bathroom", low: 15000, high: 30000, min: 15000 },
  kitchen: { label: "Kitchen (per kitchen)", unit: "kitchen", low: 30000, high: 70000, min: 30000 },
  mep: { label: "MEP Works", unit: "sqft", low: 25, high: 60, min: 5000 },
  pool: { label: "Swimming Pool", unit: "sqm", low: 3500, high: 8500, min: 60000 },
  landscaping: { label: "Landscaping", unit: "sqm", low: 250, high: 700, min: 5000 },
};

export const TIERS = {
  standard: { label: "Standard", factor: 1 },
  premium: { label: "Premium", factor: 1.35 },
};

export const UNIT_LABEL = {
  sqft: "Area (sq.ft)",
  sqm: "Area (sq.m)",
  bathroom: "Number of bathrooms",
  kitchen: "Number of kitchens",
};

export function formatAED(n) {
  return "AED " + Math.round(n).toLocaleString("en-AE");
}

export function computeRange(rate, qty, factor) {
  const low = Math.max(rate.min, qty * rate.low * factor);
  const high = Math.max(rate.min * 1.4, qty * rate.high * factor);
  return { low, high };
}
