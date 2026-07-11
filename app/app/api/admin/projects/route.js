import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidToken, COOKIE_NAME } from "../../../../lib/auth";
import { getServiceClient } from "../../../../lib/supabase-admin";

const BUCKET = "projects";

function guard() {
  return isValidToken(cookies().get(COOKIE_NAME)?.value);
}

export async function GET() {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ projects: data });
}

export async function POST(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });

  const form = await request.formData();
  const file = form.get("file");
  const title = String(form.get("title") || "").trim();
  const category = String(form.get("category") || "Other").trim();

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Image file is required" }, { status: 400 });
  }
  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = (file.name?.split(".").pop() || "jpg").toLowerCase();
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const up = await supabase.storage
    .from(BUCKET)
    .upload(path, bytes, { contentType: file.type || "image/jpeg", upsert: false });
  if (up.error) return NextResponse.json({ error: up.error.message }, { status: 500 });

  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
  const image_url = pub.publicUrl;

  const ins = await supabase
    .from("projects")
    .insert({ title, category, image_url, storage_path: path })
    .select()
    .single();
  if (ins.error) return NextResponse.json({ error: ins.error.message }, { status: 500 });

  return NextResponse.json({ ok: true, project: ins.data });
}

export async function DELETE(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });

  const { id, storage_path } = await request.json().catch(() => ({}));
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  if (storage_path) {
    await supabase.storage.from(BUCKET).remove([storage_path]);
  }
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
