import crypto from "crypto";

const SALT = "renofix-admin-v1";
export const COOKIE_NAME = "rf_admin";

export function tokenFor(password) {
  return crypto.createHash("sha256").update(String(password) + SALT).digest("hex");
}

export function expectedToken() {
  const pw = process.env.ADMIN_PASSWORD || "";
  return pw ? tokenFor(pw) : "";
}

export function isValidToken(cookieValue) {
  const exp = expectedToken();
  return Boolean(exp) && cookieValue === exp;
}
