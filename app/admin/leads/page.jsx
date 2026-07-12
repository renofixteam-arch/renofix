"use client";

import { useEffect, useState } from "react";

function fmt(ts) {
  try {
    return new Date(ts).toLocaleString("en-AE", { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return ts;
  }
}

export default function LeadsAdmin() {
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/leads");
    if (res.ok) {
      const d = await res.json();
      setLeads(d.leads || []);
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Could not load leads");
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function setLeadStatus(id, newStatus) {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    load();
  }

  async function remove(id) {
    if (!confirm("Delete this lead?")) return;
    await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  if (loading) return <p className="text-sm text-slate-500">Loading...</p>;

  const newCount = leads.filter((l) => l.status === "new").length;

  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Leads</h1>
        {newCount > 0 && (
          <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
            {newCount} new
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Requests submitted through the website form. {status && <span className="text-red-600">{status}</span>}
      </p>

      {leads.length === 0 ? (
        <p className="mt-8 text-sm text-slate-500">No leads yet.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {leads.map((l) => (
            <div
              key={l.id}
              className={
                "rounded-2xl border p-5 " +
                (l.status === "new"
                  ? "border-amber-300 bg-amber-50/50 dark:border-amber-500/40 dark:bg-amber-500/5"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900")
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold">{l.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <a href={`tel:${l.phone}`} className="hover:underline">{l.phone}</a>
                    {" · "}
                    <a
                      href={`https://wa.me/${l.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:underline dark:text-amber-400"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
                <span className="text-xs text-slate-400">{fmt(l.created_at)}</span>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {l.service && (
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {l.service}
                  </span>
                )}
                {l.area && (
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {l.area}
                  </span>
                )}
              </div>

              {l.message && (
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{l.message}</p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {l.status === "new" ? (
                  <button
                    type="button"
                    onClick={() => setLeadStatus(l.id, "contacted")}
                    className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-slate-900"
                  >
                    Mark contacted
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setLeadStatus(l.id, "new")}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium dark:border-slate-700"
                  >
                    Mark as new
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => remove(l.id)}
                  className="text-xs font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
                {l.status !== "new" && (
                  <span className="text-xs text-slate-400">· {l.status}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
