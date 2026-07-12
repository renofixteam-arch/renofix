import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidToken, COOKIE_NAME } from "../../../../lib/auth";
import { getServiceClient } from "../../../../lib/supabase-admin";

function guard() {
  const val = cookies().get(COOKIE_NAME)?.value;
  return isValidToken(val);
}

export async function POST(request) {
  if (!guard()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });

  const { rates } = await request.json().catch(() => ({}));
  if (!Array.isArray(rates)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  for (const r of rates) {
    const { error } = await supabase
      .from("estimate_rates")
      .update({ low: r.low, high: r.high, min: r.min })
      .eq("key", r.key);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
