"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "../../../lib/supabase";
import { IMAGE_SLOTS } from "../../../lib/image-slots";

function SlotCard({ slot, current, onChanged }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dims, setDims] = useState(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  function pick(f) {
    setFile(f || null);
    setStatus("");
    setDims(null);
    if (preview) URL.revokeObjectURL(preview);
    if (f) {
      const url = URL.createObjectURL(f);
      setPreview(url);
      const img = new Image();
      img.onload = () => setDims({ w: img.naturalWidth, h: img.naturalHeight });
      img.src = url;
    } else {
      setPreview(null);
    }
  }

  async function upload() {
    if (!file) {
      setStatus("Choose an image first.");
      return;
    }
    setBusy(true);
    setStatus("Uploading...");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("key", slot.key);
    const res = await fetch("/api/admin/images", { method: "POST", body: fd });
    setBusy(false);
    if (res.ok) {
      setStatus("Saved. Live on the site.");
      setFile(null);
      setPreview(null);
      setDims(null);
      onChanged();
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Upload failed");
    }
  }

  async function remove() {
    if (!confirm("Remove this image?")) return;
    const res = await fetch("/api/admin/images", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: slot.key }),
    });
    if (res.ok) {
      setStatus("Removed.");
      onChanged();
    } else setStatus("Remove failed");
  }

  const shownUrl = preview || current?.image_url || null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold">{slot.label}</p>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {slot.ratio.replace(/\s/g, "")}
        </span>
      </div>

      {/* Ratio-accurate preview: shows exactly how it will crop on the site */}
      <div
        className="mt-3 w-full overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50"
        style={{ aspectRatio: slot.ratio }}
      >
        {shownUrl ? (
          <img src={shownUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-400">
            No image yet
          </div>
        )}
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        {slot.hint}
        {dims && (
          <span className="ml-1 font-medium text-slate-700 dark:text-slate-300">
            · selected {dims.w}×{dims.h}px
          </span>
        )}
        {preview && <span className="ml-1 text-amber-600 dark:text-amber-400">· not saved yet</span>}
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => pick(e.target.files?.[0] || null)}
        className="mt-3 block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-amber-500 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-slate-900 dark:text-slate-400"
      />

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={upload}
          disabled={busy || !file}
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-50"
        >
          {busy ? "Uploading..." : "Save image"}
        </button>
        {current?.image_url && (
          <button
            type="button"
            onClick={remove}
            className="text-xs font-medium text-red-600 hover:underline"
          >
            Remove current
          </button>
        )}
        {status && <span className="text-xs text-slate-600 dark:text-slate-400">{status}</span>}
      </div>
    </div>
  );
}

export default function ImagesAdmin() {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState("");

  async function load() {
    const supabase = getSupabase();
    if (!supabase) {
      setNote("Supabase not configured. Add env vars in Vercel.");
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.from("site_images").select("*");
    if (error) setNote(error.message);
    else {
      const map = {};
      (data || []).forEach((r) => (map[r.key] = r));
      setImages(map);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) return <p className="text-sm text-slate-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Site Images</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Set the background image for the homepage hero and each service page. The frame below
        each slot shows the exact crop that will appear on the site. {note && <span className="text-red-600">{note}</span>}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGE_SLOTS.map((slot) => (
          <SlotCard key={slot.key} slot={slot} current={images[slot.key]} onChanged={load} />
        ))}
      </div>
    </div>
  );
}
