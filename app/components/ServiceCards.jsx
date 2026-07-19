"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSupabase } from "../../lib/supabase";
import { SERVICES } from "../../lib/renofix-data";
import {
  Building2, Home, Bath, Utensils, Zap, Waves, Trees, Hammer, ShieldCheck, ArrowRight,
} from "./icons";

const ICONS = {
  "apartment-renovation": Building2,
  "villa-renovation": Home,
  "bathroom-renovation": Bath,
  "kitchen-renovation": Utensils,
  "mep-works": Zap,
  "swimming-pool-construction": Waves,
  landscaping: Trees,
  "painting-flooring": Hammer,
  "false-ceiling-partitions": Building2,
  "home-maintenance": ShieldCheck,
};

export default function ServiceCards() {
  const [images, setImages] = useState({});

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) return;
      const { data } = await supabase.from("site_images").select("key,image_url");
      if (!data) return;
      const map = {};
      data.forEach((r) => {
        if (r.key?.startsWith("service:")) map[r.key.slice(8)] = r.image_url;
      });
      setImages(map);
    }
    load();
  }, []);

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((sv) => {
        const Icon = ICONS[sv.slug] || Building2;
        const img = images[sv.slug];
        return (
          <Link
            key={sv.slug}
            href={`/${sv.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <div className="relative aspect-[4/3]">
              {img ? (
                <img
                  src={img}
                  alt={sv.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="bp-grid absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900">
                  <Icon size={44} className="text-amber-500/70" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-lg font-semibold text-white">{sv.name}</h3>
                <span className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-amber-300 opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
