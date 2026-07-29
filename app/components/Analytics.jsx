"use client";

import Script from "next/script";
import { useEffect } from "react";
import { SITE } from "../../lib/site";

export function trackLead(method) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "generate_lead", { method: method || "site" });
  if (SITE.gads?.leadLabel) {
    window.gtag("event", "conversion", { send_to: `${SITE.gads.id}/${SITE.gads.leadLabel}` });
  }
}

export default function Analytics() {
  useEffect(() => {
    function onClick(e) {
      const a = e.target.closest && e.target.closest('a[href*="wa.me"]');
      if (a) trackLead("whatsapp");
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const id = SITE.gads?.id;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
