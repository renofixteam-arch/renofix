"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabase } from "../../lib/supabase";

const CATEGORIES = [
  "All",
  "Apartment",
  "Villa",
  "Bathroom",
  "Kitchen",
  "MEP",
  "Swimming Pool",
  "Landscaping",
  "Other",
];

export default function OurWorkPage() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from("projects")
        .select("id,title,category,image_url")
        .order("created_at", { ascending: false });
      setProjects(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Work</h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        A selection of renovation, MEP, landscaping and pool projects delivered by RenoFix
        across Dubai.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={
              "rounded-lg border px-3 py-1.5 text-sm transition " +
              (active === c
                ? "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                : "border-slate-300 hover:border-slate-400 dark:border-slate-700")
            }
          >
            {c}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="mt-10 text-sm text-slate-500">Loading projects...</p>
      ) : filtered.length === 0 ? (
        <p className="mt-10 text-sm text-slate-500">
          No projects to show yet. Check back soon.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <img src={p.image_url} alt={p.title} className="h-52 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-slate-500">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
