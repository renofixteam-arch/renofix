// UAE mobile validation — blocks junk / typo / wrong-country numbers.
export function normalizePhone(raw) {
  return String(raw || "").replace(/[^\d]/g, "");
}

// Accepts UAE mobiles: 05XXXXXXXX (10 digits), 9715XXXXXXXX (12), or 5XXXXXXXX (9).
export function isValidUaePhone(raw) {
  const d = normalizePhone(raw);
  return /^9715\d{8}$/.test(d) || /^05\d{8}$/.test(d) || /^5\d{8}$/.test(d);
}
