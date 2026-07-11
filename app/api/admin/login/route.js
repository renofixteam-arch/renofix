import { NextResponse } from "next/server";
import { COOKIE_NAME, expectedToken, tokenFor } from "../../../../lib/auth";

export async function POST(request) {
  const { password } = await request.json().catch(() => ({}));
  const exp = expectedToken();
  if (!exp) {
    return NextResponse.json({ error: "Admin password not configured." }, { status: 500 });
  }
  if (!password || tokenFor(password) !== exp) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, exp, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
