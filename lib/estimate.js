// NOTE: apartment/villa per-sqft rates cover GENERAL AREAS ONLY (living, bedrooms,
// flooring, painting, general MEP). Bathrooms and kitchens are added separately in the
// calculator, so these rates must NOT include bathroom/kitchen cost — otherwise the
// estimate double-counts. Tune all values in /admin/rates.
export const DEFAULT_RATES = {
  apartment: { label: "Apartment – general areas (per sqft)", unit: "sqft", low: 35, high: 70, min: 20000 },
  villa: { label: "Villa – general areas (per sqft)", unit: "sqft", low: 45, high: 95, min: 45000 },
  bathroom: { label: "Bathroom (per bathroom)", unit: "bathroom", low: 14000, high: 28000, min: 12000 },
  kitchen: { label: "Kitchen (per kitchen)", unit: "kitchen", low: 18000, high: 42000, min: 15000 },
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
