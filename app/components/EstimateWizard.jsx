"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabase } from "../../lib/supabase";
import { SITE } from "../../lib/site";
import { AREAS } from "../../lib/renofix-data";
import {
  DEFAULT_RATES, TIERS, UNIT_LABEL, formatAED, computeRange,
} from "../../lib/estimate";
import { Building2, Home, ArrowRight } from "./icons";

const PROPERTY_TYPES = [
  { key: "apartment", label: "Apartment", Icon: Building2 },
  { key: "villa", label: "Villa", Icon: Home },
  { key: "townhouse", label: "Townhouse", Icon: Home },
  { key: "commercial", label: "Commercial", Icon: Building2 },
];

const ALL_SCOPES = [
  { key: "full", label: "Full property renovation" },
  { key: "bathroom", label: "Bathroom renovation" },
  { key: "kitchen", label: "Kitchen renovation" },
  { key: "mep", label: "MEP works (electrical/plumbing/AC)" },
  { key: "pool", label: "Swimming pool", villaOnly: true },
  { key: "landscaping", label: "Landscaping", villaOnly: true },
];

const TOTAL_STEPS = 5;

function rateKeyFor(propertyType, scope) {
  if (scope === "full") return propertyType === "apartment" ? "apartment" : "villa";
  return scope;
}

export default function EstimateWizard() {
  const [rates, setRates] = useState(DEFAULT_RATES);
  const [step, setStep] = useState(1);
  const [a, setA] = useState({
    propertyType: "", scope: "", size: "", tier: "standard",
    name: "", phone: "", area: "", company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) return;
      const { data } = await supabase
        .from("estimate_rates")
        .select("key,label,unit,low,high,min");
      if (!data) return;
      const merged = { ...DEFAULT_RATES };
      data.forEach((r) => {
        if (merged[r.key]) {
          merged[r.key] = {
            label: r.label, unit: r.unit,
            low: Number(r.low), high: Number(r.high), min: Number(r.min),
          };
        }
      });
      setRates(merged);
    }
    load();
  }, []);

  const scopes = useMemo(() => {
    const isVilla = a.propertyType === "villa" || a.propertyType === "townhouse";
    return ALL_SCOPES.filter((s) => !s.villaOnly || isVilla);
  }, [a.propertyType]);

  const rate = rates[rateKeyFor(a.propertyType, a.scope)] || null;

  const estimate = useMemo(() => {
    const qty = parseFloat(a.size);
    if (!rate || !qty || qty <= 0) return null;
    return computeRange(rate, qty, TIERS[a.tier].factor);
  }, [rate, a.size, a.tier]);

  function set(k, v) { setA((p) => ({ ...p, [k]: v })); }

  function next() { setStep((s) => Math.min(TOTAL_STEPS, s + 1)); }
  function back() { setStep((s) => Math.max(1, s - 1)); }

  const canContinue =
    (step === 1 && a.propertyType) ||
    (step === 2 && a.scope) ||
    (step === 3 && parseFloat(a.size) > 0) ||
    (step === 4 && a.tier);

  async function finish() {
    if (a.company) return; // honeypot
    if (!a.name.trim() || !a.phone.trim()) {
      setError("Please add your name and phone.");
      return;
    }
    setSubmitting(true);
    setError("");
    const scopeLabel = ALL_SCOPES.find((s) => s.key === a.scope)?.label || a.scope;
    const propLabel = PROPERTY_TYPES.find((p) => p.key === a.propertyType)?.label || a.propertyType;
    const range = estimate ? `${formatAED(estimate.low)} - ${formatAED(estimate.high)}` : "n/a";
    const msg = `Cost calculator: ${propLabel} · ${scopeLabel} · ${a.size} ${rate?.unit || ""} · ${TIERS[a.tier].label} finish. Estimated ${range}.`;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: a.name, phone: a.phone, area: a.area,
          service: `${scopeLabel} (${propLabel})`, message: msg,
        }),
      });
    } catch (e) { /* best effort; still show result */ }
    setSubmitting(false);
    setDone(true);
  }

  const waHref = useMemo(() => {
    const range = estimate ? ` My estimate is ${formatAED(estimate.low)} - ${formatAED(estimate.high)}.` : "";
    const text = `Hi RenoFix, I used the cost calculator.${range} Please arrange a free site visit.`;
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [estimate]);

  const field =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-800";
  const optionBtn = (active) =>
    "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition " +
    (active
      ? "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300"
      : "border-slate-300 hover:border-amber-400 dark:border-slate-700");

  if (done) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-2xl text-amber-600">✓</div>
        <h3 className="mt-4 text-center font-display text-xl font-bold">Your estimated range</h3>
        {estimate ? (
          <p className="mt-2 text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {formatAED(estimate.low)} <span className="text-slate-400">–</span> {formatAED(estimate.high)}
          </p>
        ) : (
          <p className="mt-2 text-center text-slate-600">We&apos;ll prepare your estimate.</p>
        )}
        <p className="mx-auto mt-3 max-w-sm text-center text-sm text-slate-600 dark:text-slate-400">
          Indicative only — our team will contact you shortly to arrange a free site visit and a
          fixed-price quotation.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 dark:border-slate-800 dark:bg-slate-900">
      {/* progress */}
      <div className="mb-6 flex items-center gap-1.5">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={
              "h-1.5 flex-1 rounded-full " +
              (i < step ? "bg-amber-500" : "bg-slate-200 dark:bg-slate-800")
            }
          />
        ))}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
        Step {step} of {TOTAL_STEPS}
      </p>

      {step === 1 && (
        <div className="mt-3">
          <h3 className="font-display text-lg font-bold">What are you renovating?</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {PROPERTY_TYPES.map(({ key, label, Icon }) => (
              <button key={key} type="button" onClick={() => { set("propertyType", key); set("scope", ""); }} className={optionBtn(a.propertyType === key)}>
                <Icon size={20} /> {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-3">
          <h3 className="font-display text-lg font-bold">What work do you need?</h3>
          <div className="mt-4 grid gap-2.5">
            {scopes.map((s) => (
              <button key={s.key} type="button" onClick={() => { set("scope", s.key); set("size", ""); }} className={optionBtn(a.scope === s.key)}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-3">
          <h3 className="font-display text-lg font-bold">
            {rate ? UNIT_LABEL[rate.unit] : "Size"}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {rate?.unit === "bathroom" || rate?.unit === "kitchen"
              ? "How many?"
              : "Approximate size — an estimate is fine."}
          </p>
          <input
            type="number" min="0" inputMode="numeric" value={a.size}
            onChange={(e) => set("size", e.target.value)}
            placeholder={rate?.unit === "sqft" ? "e.g. 900" : rate?.unit === "sqm" ? "e.g. 40" : "e.g. 1"}
            className={field + " mt-4"}
          />
        </div>
      )}

      {step === 4 && (
        <div className="mt-3">
          <h3 className="font-display text-lg font-bold">Finish level</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {Object.entries(TIERS).map(([key, t]) => (
              <button key={key} type="button" onClick={() => set("tier", key)} className={optionBtn(a.tier === key) + " justify-center"}>
                {t.label}
              </button>
            ))}
          </div>
          {estimate && (
            <div className="mt-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
              <p className="text-xs text-slate-500 dark:text-slate-400">Estimated range</p>
              <p className="mt-1 font-display text-2xl font-extrabold">
                {formatAED(estimate.low)} <span className="text-slate-400">–</span> {formatAED(estimate.high)}
              </p>
            </div>
          )}
        </div>
      )}

      {step === 5 && (
        <div className="mt-3">
          <h3 className="font-display text-lg font-bold">Where should we send it?</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Get your estimate and a free site visit.
          </p>
          <div className="mt-4 space-y-3">
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

      {/* nav */}
      <div className="mt-6 flex items-center gap-3">
        {step > 1 && (
          <button type="button" onClick={back} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium transition hover:border-slate-400 dark:border-slate-700">
            Back
          </button>
        )}
        {step < TOTAL_STEPS ? (
          <button type="button" onClick={next} disabled={!canContinue} className="ml-auto inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-40 dark:bg-white dark:text-slate-900">
            Continue <ArrowRight size={15} />
          </button>
        ) : (
          <button type="button" onClick={finish} disabled={submitting} className="ml-auto rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60">
            {submitting ? "Sending..." : "Get my estimate"}
          </button>
        )}
      </div>
    </div>
  );
}
