"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "../../lib/supabase";
import { SITE } from "../../lib/site";

function Stars({ n = 5, size = "text-base" }) {
  return (
    <span className={size + " text-amber-500"} aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-slate-300 dark:text-slate-700">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Reviews({ limit = 6, heading = "What our customers say" }) {
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) { setLoaded(true); return; }
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("featured", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });
      setReviews(data || []);
      setLoaded(true);
    }
    load();
  }, []);

  // Don't render the section at all until we have reviews (avoids an empty block).
  if (!loaded || reviews.length === 0) return null;

  const shown = reviews.slice(0, limit);
  const avg = (reviews.reduce((s, r) => s + (r.rating || 5), 0) / reviews.length).toFixed(1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg,
      reviewCount: String(reviews.length),
      bestRating: "5",
    },
    review: shown.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: String(r.rating || 5), bestRating: "5" },
      reviewBody: r.text || "",
    })),
  };

  return (
    <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Reviews
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
            <div className="mt-2 flex items-center gap-2">
              <Stars n={Math.round(avg)} />
              <span className="text-sm font-semibold">{avg}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                from {reviews.length} review{reviews.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          {SITE.googleReviewUrl && (
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:border-amber-400 dark:border-slate-700"
            >
              Leave us a review
            </a>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <div key={r.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <Stars n={r.rating || 5} />
              {r.text && <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">&ldquo;{r.text}&rdquo;</p>}
              <div className="mt-4">
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {[r.service, r.area].filter(Boolean).join(" · ")}
                  {r.source ? `${(r.service || r.area) ? " · " : ""}via ${r.source}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
