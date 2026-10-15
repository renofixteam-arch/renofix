"use client";

import { useEffect, useMemo, useState } from "react";

// Labels for the answer codes saved by /survey
const QUESTIONS = [
  {
    key: "would_use",
    title: "Would they order this way?",
    labels: {
      weekly: "Yes, every week",
      urgent_only: "Yes, for urgent items",
      maybe: "Would try it once",
      no: "No",
    },
  },
  {
    key: "frequency",
    title: "How often they hear “material finished”",
    labels: { daily: "Every day", "2-3_week": "2–3 times a week", weekly: "About once a week", rarely: "Rarely" },
  },
  {
    key: "fee",
    title: "Fair delivery fee",
    labels: { "15-25": "AED 15–25", "25-40": "AED 25–40", "40+": "AED 40+", free_only: "Only if free" },
  },
  {
    key: "items",
    multi: true,
    title: "What their team waits for",
    labels: {
      electrical: "Electrical",
      plumbing: "Plumbing",
      fixings: "Fixings and chemicals",
      consumables: "Tool consumables",
      ppe: "Safety and PPE",
      paint: "Paint and finishing",
    },
  },
  {
    key: "areas",
    multi: true,
    title: "Site areas (votes)",
    labels: {
      al_quoz_barsha: "Al Quoz / Al Barsha",
      jvc_south_jebel_ali: "JVC / Dubai South / Jebel Ali",
      bb_downtown_marina: "Business Bay / Downtown / Marina",
      deira_qusais: "Deira / Al Qusais / Mirdif",
      dubailand_hills: "Dubailand / Dubai Hills / Meydan",
      outside_dubai: "Sharjah / Abu Dhabi / other",
    },
  },
];

const TARGET = 30; // responses needed before deciding

function fmt(ts) {
  try {
    return new Date(ts).toLocaleString("en-AE", { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return ts;
  }
}

function waNumber(raw) {
  let d = String(raw || "").replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  if (d.startsWith("0")) d = "971" + d.slice(1);
  else if (d.length === 9 && d.startsWith("5")) d = "971" + d;
  return d;
}

function label(q, v) {
  return q.labels[v] || v || "–";
}

function tally(rows, q) {
  const counts = {};
  Object.keys(q.labels).forEach((k) => (counts[k] = 0));
  rows.forEach((r) => {
    const val = r[q.key];
    if (q.multi) (Array.isArray(val) ? val : []).forEach((v) => (counts[v] = (counts[v] || 0) + 1));
    else if (val) counts[val] = (counts[val] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function Bars({ q, rows }) {
  const data = tally(rows, q);
  const base = q.multi ? rows.length : data.reduce((s, [, n]) => s + n, 0);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-display text-sm font-semibold">{q.title}</h3>
      <div className="mt-3 space-y-2.5">
        {data.map(([k, n]) => {
          const pct = base ? Math.round((n / base) * 100) : 0;
          return (
            <div key={k}>
              <div className="flex justify-between gap-3 text-xs">
                <span className="text-slate-700 dark:text-slate-300">{label(q, k)}</span>
                <span className="tabular-nums text-slate-500">
                  {n} · {pct}%
                </span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-amber-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      {q.multi && <p className="mt-3 text-[11px] text-slate-400">People could pick more than one, so totals can pass 100%.</p>}
    </div>
  );
}

export default function SurveyAdmin() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("all");

  async function load() {
    const res = await fetch("/api/admin/survey");
    const d = await res.json().catch(() => ({}));
    if (res.ok) {
      setRows(d.responses || []);
      setError("");
    } else setError(d.error || "Could not load survey results");
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(id) {
    if (!confirm("Delete this response? Use this only for test entries.")) return;
    await fetch("/api/admin/survey", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  const sources = useMemo(() => {
    const s = {};
    rows.forEach((r) => {
      const k = r.source || "direct";
      s[k] = (s[k] || 0) + 1;
    });
    return Object.entries(s).sort((a, b) => b[1] - a[1]);
  }, [rows]);

  const view = source === "all" ? rows : rows.filter((r) => (r.source || "direct") === source);
  const yes = view.filter((r) => r.would_use === "weekly" || r.would_use === "urgent_only").length;
  const yesPct = view.length ? Math.round((yes / view.length) * 100) : 0;
  const leads = view.filter((r) => r.whatsapp);
  const verdict =
    view.length < TARGET
      ? { text: `Collecting: ${view.length} of ${TARGET} responses`, cls: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" }
      : yesPct >= 50
      ? { text: "Strong demand: build the test", cls: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" }
      : { text: "Weak demand: rethink before building", cls: "bg-red-500/15 text-red-700 dark:text-red-300" };

  function exportCsv() {
    const cols = ["created_at", "frequency", "items", "would_use", "fee", "areas", "name", "company", "whatsapp", "source"];
    const esc = (v) => `"${String(Array.isArray(v) ? v.join(" | ") : v ?? "").replace(/"/g, '""')}"`;
    const csv = [cols.join(","), ...view.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `site-delivery-survey-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) return <p className="text-sm text-slate-500">Loading...</p>;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Site delivery survey</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Answers from{" "}
            <a href="/survey" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline dark:text-amber-400">
              renofixplus.ae/survey
            </a>
            . {error && <span className="text-red-600">{error}</span>}
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={load} className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium dark:border-slate-700">
            Refresh
          </button>
          <button
            type="button"
            onClick={exportCsv}
            disabled={!view.length}
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40 dark:bg-white dark:text-slate-900"
          >
            Download CSV
          </button>
        </div>
      </div>

      {sources.length > 1 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {[["all", rows.length], ...sources].map(([k, n]) => (
            <button
              key={k}
              type="button"
              onClick={() => setSource(k)}
              className={
                "rounded-full px-3 py-1 text-xs font-medium " +
                (source === k
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300")
              }
            >
              {k === "all" ? "All groups" : k} · {n}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Responses</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums">{view.length}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Would use it</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums">
            {yes} <span className="text-sm font-medium text-slate-500">({yesPct}%)</span>
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Left WhatsApp</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums">{leads.length}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Decision</p>
          <span className={"mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-semibold " + verdict.cls}>{verdict.text}</span>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-400">
        Rule: after {TARGET} responses, build the test if at least half say &ldquo;every week&rdquo; or &ldquo;for urgent items&rdquo;.
      </p>

      {view.length > 0 && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {QUESTIONS.map((q) => (
            <Bars key={q.key} q={q} rows={view} />
          ))}
        </div>
      )}

      <h2 className="mt-10 text-lg font-bold">All responses</h2>
      {view.length === 0 ? (
        <p className="mt-3 text-sm text-slate-500">
          No responses yet. Share renofixplus.ae/survey#group1 in a contractor group and they will appear here.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {view.map((r) => (
            <div
              key={r.id}
              className={
                "rounded-2xl border p-4 " +
                (r.whatsapp
                  ? "border-amber-300 bg-amber-50/50 dark:border-amber-500/40 dark:bg-amber-500/5"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900")
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  {r.whatsapp ? (
                    <p className="font-display text-sm font-semibold">
                      {r.name || "No name"}
                      {r.company ? ` · ${r.company}` : ""}
                      {" · "}
                      <a
                        href={`https://wa.me/${waNumber(r.whatsapp)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:underline dark:text-amber-400"
                      >
                        {r.whatsapp}
                      </a>
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-slate-500">Anonymous{r.name ? ` · ${r.name}` : ""}{r.company ? ` · ${r.company}` : ""}</p>
                  )}
                </div>
                <span className="text-xs text-slate-400">
                  {fmt(r.created_at)}
                  {r.source ? ` · ${r.source}` : ""}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                {QUESTIONS.map((q) => {
                  const v = r[q.key];
                  const vals = q.multi ? (Array.isArray(v) ? v : []) : v ? [v] : [];
                  return vals.map((x) => (
                    <span key={q.key + x} className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {label(q, x)}
                    </span>
                  ));
                })}
              </div>
              <button type="button" onClick={() => remove(r.id)} className="mt-3 text-xs font-medium text-red-600 hover:underline">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
