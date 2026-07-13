"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabase } from "../../lib/supabase";
import { SITE } from "../../lib/site";
import { AREAS } from "../../lib/renofix-data";
import { DEFAULT_RATES, TIERS, formatAED, computeRange } from "../../lib/estimate";
import { Building2, Home, ArrowRight } from "./icons";

const PROPERTY = [
  { key: "apartment", label: "Apartment", Icon: Building2 },
  { key: "townhouse", label: "Townhouse", Icon: Home },
  { key: "villa", label: "Villa", Icon: Home },
];

const BEDROOMS = {
  apartment: [["studio", "Studio"], ["1", "1 BR"], ["2", "2 BR"], ["3", "3 BR"], ["4", "4+ BR"]],
  townhouse: [["2", "2 BR"], ["3", "3 BR"], ["4", "4 BR"], ["5", "5+ BR"]],
  villa: [["3", "3 BR"], ["4", "4 BR"], ["5", "5 BR"], ["6", "6+ BR"]],
};

const AREA_SQFT = {
  apartment: { studio: 450, "1": 750, "2": 1100, "3": 1600, "4": 2200 },
  townhouse: { "2": 1400, "3": 1900, "4": 2600, "5": 3200 },
  villa: { "3": 2600, "4": 3600, "5": 4800, "6": 6000 },
};

// Estimated project duration in weeks [low, high]
const DURATION = {
  apartment: { studio: [3, 5], "1": [4, 6], "2": [5, 8], "3": [6, 10], "4": [8, 12] },
  townhouse: { "2": [7, 11], "3": [8, 13], "4": [10, 16], "5": [12, 18] },
  villa: { "3": [9, 14], "4": [11, 17], "5": [13, 20], "6": [15, 24] },
};

const FINISHES = [
  { key: "standard", label: "Standard", desc: "Quality materials, great value" },
  { key: "premium", label: "Premium", desc: "High-end finishes throughout" },
];

const TOTAL = 3;

function rateKey(property) {
  return property === "apartment" ? "apartment" : "villa";
}

export default function EstimateWizard() {
  const [rates, setRates] = useState(DEFAULT_RATES);
  const [step, setStep] = useState(1);
  const [a, setA] = useState({
    property: "", bedroom: "", bathroom: "2", kitchen: "1", finish: "standard",
    name: "", phone: "", area: "", company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) return;
      const { data } = await supabase.from("estimate_rates").select("key,label,unit,low,high,min");
      if (!data) return;
      const merged = { ...DEFAULT_RATES };
      data.forEach((r) => {
        if (merged[r.key]) merged[r.key] = { label: r.label, unit: r.unit, low: +r.low, high: +r.high, min: +r.min };
      });
      setRates(merged);
    }
    load();
  }, []);

  function set(k, v) { setA((p) => ({ ...p, [k]: v })); }

  const estimate = useMemo(() => {
    if (!a.property || !a.bedroom) return null;
    const area = AREA_SQFT[a.property]?.[a.bedroom];
    const base = rates[rateKey(a.property)];
    if (!area || !base) return null;
    const f = TIERS[a.finish].factor;
    const bathR = rates.bathroom;
    const kitR = rates.kitchen;
    const nBath = parseInt(a.bathroom) || 0;
    const nKit = parseInt(a.kitchen) || 0;
    let low = area * base.low * f;
    let high = area * base.high * f;
    if (bathR) { low += nBath * bathR.low * f; high += nBath * bathR.high * f; }
    if (kitR) { low += nKit * kitR.low * f; high += nKit * kitR.high * f; }
    low = Math.max(base.min, low);
    high = Math.max(base.min * 1.4, high);
    return { low, high };
  }, [a.property, a.bedroom, a.bathroom, a.kitchen, a.finish, rates]);

  const duration = useMemo(() => {
    if (!a.property || !a.bedroom) return null;
    return DURATION[a.property]?.[a.bedroom] || null;
  }, [a.property, a.bedroom]);

  const canContinue =
    (step === 1 && a.property) ||
    (step === 2 && a.bedroom && a.finish);

  async function finish() {
    if (a.company) return;
    if (!a.name.trim() || !a.phone.trim()) {
      setError("Please add your name and phone.");
      return;
    }
    setSubmitting(true);
    setError("");
    const propLabel = PROPERTY.find((p) => p.key === a.property)?.label || a.property;
    const bedLabel = (BEDROOMS[a.property] || []).find(([k]) => k === a.bedroom)?.[1] || a.bedroom;
    const range = estimate ? `${formatAED(estimate.low)} - ${formatAED(estimate.high)}` : "n/a";
    const dur = duration ? ` Duration ~${duration[0]}-${duration[1]} weeks.` : "";
    const msg = `Cost calculator: ${propLabel} · ${bedLabel} · ${a.bathroom} bath · ${a.kitchen} kitchen · ${TIERS[a.finish].label} finish. Estimated ${range}.${dur}`;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: a.name, phone: a.phone, area: a.area,
          service: `Full renovation (${propLabel})`, message: msg,
        }),
      });
    } catch (e) {}
    setSubmitting(false);
    setDone(true);
  }

  const waHref = useMemo(() => {
    const range = estimate ? ` My estimate is ${formatAED(estimate.low)} - ${formatAED(estimate.high)}.` : "";
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi RenoFix, I used the cost calculator.${range} Please arrange a free site visit.`)}`;
  }, [estimate]);

  const field =
    "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-800";

  const card = (active) =>
    "relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-4 text-sm font-semibold transition " +
    (active
      ? "border-amber-500 bg-amber-500/10 text-amber-700 shadow-sm dark:text-amber-300"
      : "border-slate-200 hover:border-amber-300 dark:border-slate-700");

  const pill = (active) =>
    "rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition " +
    (active
      ? "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300"
      : "border-slate-200 hover:border-amber-300 dark:border-slate-700");

  if (done) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-9 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-3xl text-amber-600">✓</div>
        <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">Your estimated renovation cost</p>
        {estimate ? (
          <p className="mt-1 font-display text-4xl font-extrabold tracking-tight">
            {formatAED(estimate.low)} <span className="text-slate-300">–</span> {formatAED(estimate.high)}
          </p>
        ) : (
          <p className="mt-2 text-slate-600">We&apos;ll prepare your estimate.</p>
        )}
        {duration && (
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Estimated duration: {duration[0]}–{duration[1]} weeks
          </div>
        )}
        <p className="mx-auto mt-4 max-w-sm text-sm text-slate-600 dark:text-slate-400">
          Indicative only. Our team will contact you shortly to arrange a free site visit and an
          exact fixed-price quote.
        </p>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center gap-1.5">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div key={i} className={"h-1.5 flex-1 rounded-full " + (i < step ? "bg-amber-500" : "bg-slate-200 dark:bg-slate-800")} />
        ))}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
        Step {step} of {TOTAL}
      </p>

      {step === 1 && (
        <div className="mt-3">
          <h3 className="font-display text-xl font-bold">What are you renovating?</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Pick your property type.</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {PROPERTY.map(({ key, label, Icon }) => (
              <button key={key} type="button" onClick={() => { set("property", key); set("bedroom", ""); }} className={card(a.property === key)}>
                <Icon size={26} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-3">
          <h3 className="font-display text-xl font-bold">About your property</h3>

          <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Bedrooms</p>
          <div className="mt-2 flex flex-wrap gap-2.5">
            {(BEDROOMS[a.property] || []).map(([k, label]) => (
              <button key={k} type="button" onClick={() => set("bedroom", k)} className={pill(a.bedroom === k)}>
                {label}
              </button>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-300">Bathrooms</p>
          <div className="mt-2 flex flex-wrap gap-2.5">
            {[["1", "1"], ["2", "2"], ["3", "3"], ["4", "4+"]].map(([k, label]) => (
              <button key={k} type="button" onClick={() => set("bathroom", k)} className={pill(a.bathroom === k)}>
                {label}
              </button>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-300">Kitchens</p>
          <div className="mt-2 flex flex-wrap gap-2.5">
            {[["1", "1"], ["2", "2"], ["0", "None"]].map(([k, label]) => (
              <button key={k} type="button" onClick={() => set("kitchen", k)} className={pill(a.kitchen === k)}>
                {label}
              </button>
            ))}
          </div>

          <h3 className="mt-6 font-display text-xl font-bold">Finish level</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {FINISHES.map((f) => (
              <button key={f.key} type="button" onClick={() => set("finish", f.key)} className={card(a.finish === f.key) + " !items-start !p-4 text-left"}>
                <span>{f.label}</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{f.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-3">
          <h3 className="font-display text-xl font-bold">Where should we send it?</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Get your estimate and a free site visit.</p>
          <div className="mt-5 space-y-3">
            <input className={field} placeholder="Your name" value={a.name} onChange={(e) => set("name", e.target.value)} />
            <input className={field} placeholder="Phone / WhatsApp" inputMode="tel" value={a.phone} onChange={(e) => set("phone", e.target.value)} />
            <select className={field} value={a.area} onChange={(e) => set("area", e.target.value)}>
              <option value="">Select your area (optional)</option>
              {AREAS.map((ar) => <option key={ar.slug} value={ar.name}>{ar.name}</option>)}
              <option value="Other">Other</option>
            </select>
          </div>
          <input type="text" tabIndex={-1} autoComplete="off" value={a.company} onChange={(e) => set("company", e.target.value)} className="hidden" aria-hidden="true" />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )}

      <div className="mt-7 flex items-center gap-3">
        {step > 1 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium transition hover:border-slate-400 dark:border-slate-700">
            Back
          </button>
        )}
        {step < TOTAL ? (
          <button type="button" onClick={() => setStep((s) => s + 1)} disabled={!canContinue} className="ml-auto inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-40 dark:bg-white dark:text-slate-900">
            Continue <ArrowRight size={16} />
          </button>
        ) : (
          <button type="button" onClick={finish} disabled={submitting} className="ml-auto rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60">
            {submitting ? "Sending..." : "Get my estimate"}
          </button>
        )}
      </div>
    </div>
  );
}
