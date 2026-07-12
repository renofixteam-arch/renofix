import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidToken, COOKIE_NAME } from "../../../../lib/auth";
import { getServiceClient } from "../../../../lib/supabase-admin";

const BUCKET = "projects";

function guard() {
  return isValidToken(cookies().get(COOKIE_NAME)?.value);
}

function safe(key) {
  return key.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

export async function POST(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });

  const form = await request.formData();
  const file = form.get("file");
  const key = String(form.get("key") || "").trim();

  if (!key) return NextResponse.json({ error: "Missing slot key" }, { status: 400 });
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Image file is required" }, { status: 400 });
  }

  const { data: existing } = await supabase
    .from("site_images")
    .select("storage_path")
    .eq("key", key)
    .maybeSingle();
  if (existing?.storage_path) {
    await supabase.storage.from(BUCKET).remove([existing.storage_path]);
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = (file.name?.split(".").pop() || "jpg").toLowerCase();
  const path = `site/${safe(key)}-${Date.now()}.${ext}`;

  const up = await supabase.storage
    .from(BUCKET)
    .upload(path, bytes, { contentType: file.type || "image/jpeg", upsert: false });
  if (up.error) return NextResponse.json({ error: up.error.message }, { status: 500 });

  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);

  const { error } = await supabase
    .from("site_images")
    .upsert({ key, image_url: pub.publicUrl, storage_path: path, updated_at: new Date().toISOString() });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true, image_url: pub.publicUrl });
}

export async function DELETE(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });

  const { key } = await request.json().catch(() => ({}));
  if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });

  const { data: existing } = await supabase
    .from("site_images")
    .select("storage_path")
    .eq("key", key)
    .maybeSingle();
  if (existing?.storage_path) {
    await supabase.storage.from(BUCKET).remove([existing.storage_path]);
  }
  const { error } = await supabase.from("site_images").delete().eq("key", key);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
