"use client";

import { useEffect, useRef, useState } from "react";
import { getSupabase } from "../../../lib/supabase";
import { IMAGE_SLOTS } from "../../../lib/image-slots";
import ImageCropper from "../../components/ImageCropper";

function ratioNumber(str) {
  const [a, b] = str.split("/").map((n) => parseFloat(n.trim()));
  return b ? a / b : 16 / 9;
}

function SlotCard({ slot, current, onChanged }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const cropRef = useRef(null);
  const rNum = ratioNumber(slot.ratio);

  async function upload() {
    if (!file) {
      setStatus("Choose an image first.");
      return;
    }
    setBusy(true);
    setStatus("Uploading...");
    const cropped = cropRef.current ? await cropRef.current.getBlob() : file;
    const fd = new FormData();
    fd.append("file", cropped);
    fd.append("key", slot.key);
    const res = await fetch("/api/admin/images", { method: "POST", body: fd });
    setBusy(false);
    if (res.ok) {
      setStatus("Saved. Live on the site.");
      setFile(null);
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

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold">{slot.label}</p>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {slot.ratio.replace(/\s/g, "")}
        </span>
      </div>

      <div className="mt-3">
        {file ? (
          <ImageCropper
            key={`${file.name}-${file.size}`}
            ref={cropRef}
            file={file}
            ratio={rNum}
            outputWidth={1600}
          />
        ) : current?.image_url ? (
          <div
            className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
            style={{ aspectRatio: slot.ratio }}
          >
            <img src={current.image_url} alt="" className="h-full w-full object-cover" />
          </div>
        ) : (
          <div
            className="flex w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 dark:border-slate-700 dark:bg-slate-800/50"
            style={{ aspectRatio: slot.ratio }}
          >
            No image yet
          </div>
        )}
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{slot.hint}</p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setStatus("");
        }}
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
        {file && (
          <button
            type="button"
            onClick={() => setFile(null)}
            className="text-xs font-medium text-slate-500 hover:underline"
          >
            Cancel
          </button>
        )}
        {current?.image_url && !file && (
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
        Set the background image for the homepage hero and each service page. After choosing a
        file, drag to reposition and zoom — the crop you see is exactly what goes live.{" "}
        {note && <span className="text-red-600">{note}</span>}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGE_SLOTS.map((slot) => (
          <SlotCard key={slot.key} slot={slot} current={images[slot.key]} onChanged={load} />
        ))}
      </div>
    </div>
  );
}
