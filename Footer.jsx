"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "../../lib/supabase";

export default function SlotBackground({ imageKey }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    async function load() {
      const supabase = getSupabase();
      if (!supabase) return;
      const { data } = await supabase
        .from("site_images")
        .select("image_url")
        .eq("key", imageKey)
        .maybeSingle();
      if (data?.image_url) setUrl(data.image_url);
    }
    load();
  }, [imageKey]);

  if (!url) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img src={url} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/45 dark:from-slate-950 dark:via-slate-950/88 dark:to-slate-950/45" />
    </div>
  );
}
