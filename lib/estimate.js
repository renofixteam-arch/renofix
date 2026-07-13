export const DEFAULT_RATES = {
  apartment: { label: "Apartment Renovation", unit: "sqft", low: 80, high: 160, min: 15000 },
  villa: { label: "Villa Renovation", unit: "sqft", low: 90, high: 200, min: 40000 },
  bathroom: { label: "Bathroom Renovation", unit: "bathroom", low: 12000, high: 28000, min: 12000 },
  kitchen: { label: "Kitchen Renovation", unit: "kitchen", low: 15000, high: 40000, min: 15000 },
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
