"use client";

import { useEffect, useState } from "react";
import { SITE } from "../../../lib/site";

function Stars({ n }) {
  return (
    <span className="text-amber-500">
      {"★".repeat(n)}
      <span className="text-slate-300 dark:text-slate-600">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "", rating: 5, text: "", area: "", service: "", source: "Google", sort_order: 0,
  });

  async function load() {
    const res = await fetch("/api/admin/reviews");
    if (res.ok) {
      const d = await res.json();
      setReviews(d.reviews || []);
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Could not load reviews");
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function set(k, v) { setForm((f) => ({ ...f, [k]: v })); }

  async function add() {
    if (!form.name.trim()) { setStatus("Add a customer name."); return; }
    setStatus("Saving...");
    const res = await fetch("/api/admin/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ name: "", rating: 5, text: "", area: "", service: "", source: "Google", sort_order: 0 });
      setStatus("Saved.");
      load();
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Save failed");
    }
  }

  async function remove(id) {
    if (!confirm("Delete this review?")) return;
    await fetch("/api/admin/reviews", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  const field =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800";

  return (
    <div>
      <h1 className="text-2xl font-bold">Reviews</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Add customer reviews to show on the site. These build trust and can show star ratings in
        Google search. {status && <span className="text-amber-600">{status}</span>}
      </p>

      {!SITE.googleReviewUrl && (
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300">
          Tip: paste your Google review link into <code>lib/site.js</code> (googleReviewUrl) to turn
          on the &quot;Leave a review&quot; buttons across the site.
        </div>
      )}

      {/* Add form */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-base font-semibold">Add a review</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className={field} placeholder="Customer name" value={form.name} onChange={(e) => set("name", e.target.value)} />
          <select className={field} value={form.rating} onChange={(e) => set("rating", parseInt(e.target.value))}>
            {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} stars</option>)}
          </select>
          <input className={field} placeholder="Area (e.g. Dubai Marina)" value={form.area} onChange={(e) => set("area", e.target.value)} />
          <input className={field} placeholder="Service (e.g. Bathroom Renovation)" value={form.service} onChange={(e) => set("service", e.target.value)} />
          <div className="sm:col-span-2">
            <textarea className={field} rows={3} placeholder="Review text" value={form.text} onChange={(e) => set("text", e.target.value)} />
          </div>
          <select className={field} value={form.source} onChange={(e) => set("source", e.target.value)}>
            <option>Google</option>
            <option>WhatsApp</option>
            <option>Website</option>
            <option>Other</option>
          </select>
          <input className={field} type="number" placeholder="Sort order (lower = first)" value={form.sort_order} onChange={(e) => set("sort_order", e.target.value)} />
        </div>
        <button type="button" onClick={add} className="mt-4 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
          Add review
        </button>
      </div>

      {/* List */}
      <div className="mt-6 space-y-3">
        {loading ? (
          <p className="text-sm text-slate-500">Loading...</p>
        ) : reviews.length === 0 ? (
          <p className="text-sm text-slate-500">No reviews yet. Add your first one above.</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{r.name} <Stars n={r.rating} /></p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {[r.service, r.area, r.source].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <button type="button" onClick={() => remove(r.id)} className="text-xs font-medium text-red-600 hover:underline">Delete</button>
              </div>
              {r.text && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{r.text}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
