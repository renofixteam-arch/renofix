"use client";

import { useMemo, useState } from "react";

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

export default function OurWorkGallery({ projects = [] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  return (
    <>
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

      {filtered.length === 0 ? (
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
    </>
  );
}
