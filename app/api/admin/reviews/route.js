import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidToken, COOKIE_NAME } from "../../../../lib/auth";
import { getServiceClient } from "../../../../lib/supabase-admin";

function guard() {
  return isValidToken(cookies().get(COOKIE_NAME)?.value);
}

export async function GET() {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ reviews: data });
}

export async function POST(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  const b = await request.json().catch(() => ({}));
  const name = String(b.name || "").trim().slice(0, 120);
  if (!name) return NextResponse.json({ error: "Name required" }, { status: 400 });
  const row = {
    name,
    rating: Math.min(5, Math.max(1, parseInt(b.rating) || 5)),
    text: String(b.text || "").trim().slice(0, 1200),
    area: String(b.area || "").trim().slice(0, 80),
    service: String(b.service || "").trim().slice(0, 80),
    source: String(b.source || "Google").trim().slice(0, 40),
    featured: b.featured !== false,
    sort_order: parseInt(b.sort_order) || 0,
  };
  const { error } = await supabase.from("reviews").insert(row);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  const { id } = await request.json().catch(() => ({}));
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const { error } = await supabase.from("reviews").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
