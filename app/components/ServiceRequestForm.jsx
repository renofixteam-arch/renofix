"use client";

import { useState } from "react";
import { SERVICES, AREAS } from "../../lib/renofix-data";

export default function ServiceRequestForm() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", area: "", message: "", company: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  function set(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit() {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and phone number.");
      return;
    }
    setStatus("sending");
    setError("");
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("done");
    } else {
      const d = await res.json().catch(() => ({}));
      setError(d.error || "Something went wrong. Please try WhatsApp instead.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-2xl text-amber-600">
          ✓
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold">Request received</h3>
        <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
          Thanks — our team will contact you shortly to arrange a free site visit.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-800";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">Request a service</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Tell us what you need. We&apos;ll get back to arrange a free site visit and fixed quote.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Name</label>
          <input className={field} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Phone / WhatsApp</label>
          <input className={field} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="05x xxx xxxx" inputMode="tel" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Service</label>
          <select className={field} value={form.service} onChange={(e) => set("service", e.target.value)}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Area</label>
          <select className={field} value={form.area} onChange={(e) => set("area", e.target.value)}>
            <option value="">Select your area</option>
            {AREAS.map((a) => (
              <option key={a.slug} value={a.name}>{a.name}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium">Details (optional)</label>
          <textarea className={field} rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your project..." />
        </div>
      </div>

      {/* Honeypot (hidden from users) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(e) => set("company", e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button
        type="button"
        onClick={submit}
        disabled={status === "sending"}
        className="mt-5 w-full rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send request"}
      </button>
    </div>
  );
}
