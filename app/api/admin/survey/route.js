import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { isValidToken, COOKIE_NAME } from "../../../../lib/auth";
import { getServiceClient } from "../../../../lib/supabase-admin";

// Survey answers from /survey live in this site's own Supabase project.
// Optional override: SURVEY_SUPABASE_URL + SURVEY_SUPABASE_SERVICE_ROLE_KEY.
const TABLE = "site_delivery_survey";

function guard() {
  return isValidToken(cookies().get(COOKIE_NAME)?.value);
}

function surveyClient() {
  const url = process.env.SURVEY_SUPABASE_URL;
  const key = process.env.SURVEY_SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  }
  return getServiceClient();
}

export async function GET() {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = surveyClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(2000);
  if (error) {
    const hint = /does not exist|schema cache/i.test(error.message)
      ? "Survey table not found. Run the survey SQL in the same Supabase project, or set SURVEY_SUPABASE_URL and SURVEY_SUPABASE_SERVICE_ROLE_KEY."
      : error.message;
    return NextResponse.json({ error: hint }, { status: 500 });
  }
  return NextResponse.json({ responses: data });
}

export async function DELETE(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = surveyClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  const { id } = await request.json().catch(() => ({}));
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
