"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSupabase } from "../../lib/supabase";
import { ArrowRight } from "./icons";

export default function RecentWork() {
  const [projects, setProjects] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) {
        setReady(true);
        return;
      }
      const { data } = await supabase
        .from("projects")
        .select("id,title,category,image_url")
        .order("created_at", { ascending: false })
        .limit(6);
      setProjects(data || []);
      setReady(true);
    }
    load();
  }, []);

  // Nothing to show yet — keep the homepage clean rather than showing an empty shell.
  if (!ready || projects.length === 0) return null;

  return (
    <section className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="tick font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Recent work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Real projects, real finishes
            </h2>
          </div>
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400"
          >
            View all work <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image_url}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-display text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-slate-500">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
