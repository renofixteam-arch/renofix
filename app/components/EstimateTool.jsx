"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE } from "../../lib/site";

const SERVICES = {
  apartment: { label: "Apartment Renovation", unit: "sqft", low: 80, high: 160, min: 15000 },
  villa: { label: "Villa Renovation", unit: "sqft", low: 90, high: 200, min: 40000 },
  bathroom: { label: "Bathroom Renovation", unit: "bathroom", low: 12000, high: 28000, min: 12000 },
  kitchen: { label: "Kitchen Renovation", unit: "kitchen", low: 15000, high: 40000, min: 15000 },
  mep: { label: "MEP Works", unit: "sqft", low: 25, high: 60, min: 5000 },
  maintenance: { label: "Home Maintenance (AMC)", unit: "package", low: 1500, high: 6000, min: 1500 },
  pool: { label: "Swimming Pool", unit: "sqm", low: 3500, high: 8500, min: 60000 },
  landscaping: { label: "Landscaping", unit: "sqm", low: 250, high: 700, min: 5000 },
  painting: { label: "Painting & Flooring", unit: "sqft", low: 20, high: 55, min: 3000 },
};

const TIERS = {
  standard: { label: "Standard", factor: 1 },
  premium: { label: "Premium", factor: 1.35 },
};

const UNIT_LABEL = {
  sqft: "Area (sq.ft)",
  sqm: "Area (sq.m)",
  bathroom: "Number of bathrooms",
  kitchen: "Number of kitchens",
  package: "Number of units",
};

function formatAED(n) {
  return "AED " + Math.round(n).toLocaleString("en-AE");
}

export default function EstimateTool({ defaultService = "apartment", areaName = "" }) {
  const [serviceKey, setServiceKey] = useState(
    SERVICES[defaultService] ? defaultService : "apartment"
  );
  const [tierKey, setTierKey] = useState("standard");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (SERVICES[defaultService]) setServiceKey(defaultService);
  }, [defaultService]);

  const service = SERVICES[serviceKey];
  const tier = TIERS[tierKey];

  const estimate = useMemo(() => {
    const qty = parseFloat(quantity);
    if (!qty || qty <= 0) return null;
    const low = Math.max(service.min, qty * service.low * tier.factor);
    const high = Math.max(service.min * 1.4, qty * service.high * tier.factor);
    return { low, high };
  }, [quantity, service, tier]);

  const waHref = useMemo(() => {
    const loc = areaName ? ` in ${areaName}` : "";
    const base = `Hi RenoFix, I'd like a quote for ${service.label}${loc} (${tier.label} finish).`;
    const detail = estimate
      ? ` My estimated range is ${formatAED(estimate.low)} - ${formatAED(estimate.high)}. Please arrange a site visit.`
      : " Please arrange a site visit.";
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(base + detail)}`;
  }, [service, tier, estimate, areaName]);

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
        Instant Renovation Estimate
      </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Get a ballpark price in seconds. Final quote after a free site visit.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Service</label>
          <select
            value={serviceKey}
            onChange={(e) => {
              setServiceKey(e.target.value);
              setQuantity("");
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-800"
          >
            {Object.entries(SERVICES).map(([key, s]) => (
              <option key={key} value={key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            {UNIT_LABEL[service.unit]}
          </label>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={service.unit === "sqft" ? "e.g. 900" : "e.g. 1"}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-800"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Finish level</label>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(TIERS).map(([key, t]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTierKey(key)}
                className={
                  "rounded-lg border px-4 py-2.5 text-sm font-medium transition " +
                  (tierKey === key
                    ? "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                    : "border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-600")
                }
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
        {estimate ? (
          <>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Estimated project range
            </p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {formatAED(estimate.low)} <span className="text-slate-400">–</span>{" "}
              {formatAED(estimate.high)}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Indicative only. Exact price confirmed after a free site visit.
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter details above to see your estimate.
          </p>
        )}
      </div>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
      >
        Book a Free Site Visit on WhatsApp
      </a>
    </div>
  );
}
