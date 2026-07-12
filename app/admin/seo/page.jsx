"use client";

import { useEffect, useState } from "react";
import { SITE } from "../../../lib/site";

const CHECKLIST = [
  "Use each target keyword in a page title and an H1/H2, written naturally.",
  "Keep page titles ~50–60 characters and meta descriptions ~140–160.",
  "Publish genuinely useful content (guides, cost pages) around each keyword.",
  "Set up and verify Google Business Profile — biggest local ranking lever.",
  "Collect Google reviews from every completed job.",
  "Earn backlinks from UAE directories and local sites.",
];

export default function SeoAdmin() {
  const [keywords, setKeywords] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/seo");
    if (res.ok) {
      const d = await res.json();
      setKeywords(d.keywords || []);
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Could not load keywords");
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function add() {
    if (!keyword.trim()) return;
    const res = await fetch("/api/admin/seo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword, note }),
    });
    if (res.ok) {
      setKeyword("");
      setNote("");
      load();
    } else setStatus("Could not add keyword");
  }

  async function remove(id) {
    await fetch("/api/admin/seo", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  const domain = SITE.url.replace(/^https?:\/\//, "");
  const gsc = `https://search.google.com/search-console?resource_id=${encodeURIComponent(SITE.url)}`;
  const pagespeed = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(SITE.url)}`;

  return (
    <div>
      <h1 className="text-2xl font-bold">SEO</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Plan and track your target keywords, and use Google&apos;s free official tools for real
        ranking data.
      </p>

      {/* Real rank data */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-display text-base font-semibold">Real ranking data</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Live keyword positions come from Google Search Console (free, official). It shows the
          exact searches, impressions, clicks and average position for {domain}.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={gsc} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
            Open Search Console
          </a>
          <a href={pagespeed} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700">
            Check page speed
          </a>
        </div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          First time? In Search Console, add the property {domain}, verify it, and submit{" "}
          {SITE.url}/sitemap.xml. Data appears within a few days.
        </p>
      </div>

      {/* Keyword tracker */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-display text-base font-semibold">Target keywords</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Keep a list of the searches you want to rank for. Adding them here is for planning —
          rankings improve when these words appear naturally in your titles, headings and content.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. bathroom renovation Dubai Marina"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800"
          />
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note (optional): which page targets it"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800"
          />
          <button type="button" onClick={add} className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
            Add
          </button>
        </div>

        {status && <p className="mt-2 text-sm text-red-600">{status}</p>}

        <div className="mt-5 space-y-2">
          {loading ? (
            <p className="text-sm text-slate-500">Loading...</p>
          ) : keywords.length === 0 ? (
            <p className="text-sm text-slate-500">No keywords added yet.</p>
          ) : (
            keywords.map((k) => (
              <div key={k.id} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-800">
                <div>
                  <p className="text-sm font-medium">{k.keyword}</p>
                  {k.note && <p className="text-xs text-slate-500">{k.note}</p>}
                </div>
                <button type="button" onClick={() => remove(k.id)} className="text-xs font-medium text-red-600 hover:underline">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* What actually moves rank */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="font-display text-base font-semibold">What actually improves ranking</h2>
        <ul className="mt-3 space-y-2">
          {CHECKLIST.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-700 dark:text-amber-300">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
