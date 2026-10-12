"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ruPathFor, enPathFor } from "../../lib/i18n";

// Links to the same page in the other language, or that language's homepage
// when there is no twin. `to` is the language being linked to.
export default function LangSwitch({ to, className, onClick, children }) {
  const pathname = usePathname() || "/";
  const href = to === "ru" ? ruPathFor(pathname) : enPathFor(pathname);
  return (
    <Link href={href} hrefLang={to} lang={to} className={className} onClick={onClick}>
      {children || (to === "ru" ? "Русский" : "English")}
    </Link>
  );
}
