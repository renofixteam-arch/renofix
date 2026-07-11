"use client";

import { useEffect, useState } from "react";

const CATEGORIES = [
  "Apartment",
  "Villa",
  "Bathroom",
  "Kitchen",
  "MEP",
  "Swimming Pool",
  "Landscaping",
  "Other",
];

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Apartment");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/projects");
    if (res.ok) {
      const d = await res.json();
      setProjects(d.projects || []);
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Could not load projects");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function upload() {
    if (!file || !title.trim()) {
      setStatus("Add a title and choose an image.");
      return;
    }
    setUploading(true);
    setStatus("Uploading...");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("title", title);
    fd.append("category", category);
    const res = await fetch("/api/admin/projects", { method: "POST", body: fd });
    setUploading(false);
    if (res.ok) {
      setTitle("");
      setFile(null);
      setStatus("Uploaded.");
      load();
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus(d.error || "Upload failed");
    }
  }

  async function remove(p) {
    if (!confirm("Delete this project photo?")) return;
    const res = await fetch("/api/admin/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: p.id, storage_path: p.storage_path }),
    });
    if (res.ok) load();
    else setStatus("Delete failed");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Project Catalog</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Upload completed project photos. These appear on the public Our Work gallery,
        filtered by category.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-base font-semibold">Add a project photo</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Marina 2BR bathroom"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-900 dark:text-slate-400"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            onClick={upload}
            disabled={uploading}
            className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60"
          >
            {uploading ? "Uploading..." : "Upload photo"}
          </button>
          {status && <span className="text-sm text-slate-600 dark:text-slate-400">{status}</span>}
        </div>
      </div>

      <h2 className="mt-8 text-base font-semibold">
        Uploaded projects ({projects.length})
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <img src={p.image_url} alt={p.title} className="h-40 w-full object-cover" />
            <div className="flex items-center justify-between p-3">
              <div>
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-slate-500">{p.category}</p>
              </div>
              <button
                type="button"
                onClick={() => remove(p)}
                className="text-xs font-medium text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
