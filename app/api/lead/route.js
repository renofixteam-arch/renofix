import { NextResponse } from "next/server";
import { getServiceClient } from "../../../lib/supabase-admin";
import { isValidUaePhone } from "../../../lib/phone";

export async function POST(request) {
  const supabase = getServiceClient();
  if (!supabase) return NextResponse.json({ error: "Not configured" }, { status: 500 });

  const body = await request.json().catch(() => ({}));
  if (body.company) return NextResponse.json({ ok: true }); // honeypot

  const name = String(body.name || "").trim().slice(0, 120);
  const phone = String(body.phone || "").trim().slice(0, 40);
  const service = String(body.service || "").trim().slice(0, 80);
  const area = String(body.area || "").trim().slice(0, 80);
  const message = String(body.message || "").trim().slice(0, 1500);

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }
  if (!isValidUaePhone(phone)) {
    return NextResponse.json({ error: "Please enter a valid UAE mobile number." }, { status: 400 });
  }

  const { error } = await supabase
    .from("leads")
    .insert({ name, phone, service, area, message, status: "new" });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
