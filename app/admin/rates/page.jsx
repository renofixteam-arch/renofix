"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "../../../lib/supabase";

export default function RatesAdmin() {
  const [rates, setRates] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) {
        setStatus("Supabase not configured. Add env vars in Vercel.");
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("estimate_rates")
        .select("*")
        .order("sort", { ascending: true });
      if (error) setStatus(error.message);
      else setRates(data || []);
      setLoading(false);
    }
    load();
  }, []);

  function update(key, field, value) {
    setRates((prev) =>
      prev.map((r) => (r.key === key ? { ...r, [field]: Number(value) } : r))
    );
  }

  async function save() {
    setStatus("Saving...");
    const res = await fetch("/api/admin/rates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rates }),
    });
    if (res.ok) setStatus("Saved. Changes are live on the estimate tool.");
    else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Save failed");
    }
  }

  if (loading) return <p className="text-sm text-slate-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Estimate Rates</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        These rates power the instant estimate tool. Amounts in AED. Low/High are per unit
        (sq.ft, sq.m, or per bathroom/kitchen). Min is the minimum project value.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-slate-800">
              <th className="py-2 pr-4 font-semibold">Service</th>
              <th className="py-2 pr-4 font-semibold">Unit</th>
              <th className="py-2 pr-4 font-semibold">Low</th>
              <th className="py-2 pr-4 font-semibold">High</th>
              <th className="py-2 pr-4 font-semibold">Min</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r) => (
              <tr key={r.key} className="border-b border-slate-100 dark:border-slate-800/60">
                <td className="py-2 pr-4">{r.label}</td>
                <td className="py-2 pr-4 text-slate-500">{r.unit}</td>
                {["low", "high", "min"].map((f) => (
                  <td key={f} className="py-2 pr-4">
                    <input
                      type="number"
                      value={r[f]}
                      onChange={(e) => update(r.key, f, e.target.value)}
                      className="w-28 rounded-lg border border-slate-300 bg-white px-2 py-1.5 outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={save}
          className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Save rates
        </button>
        {status && <span className="text-sm text-slate-600 dark:text-slate-400">{status}</span>}
      </div>
    </div>
  );
}
