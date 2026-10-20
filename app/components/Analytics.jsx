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

  // One gtag.js load serves both Google Analytics 4 and Google Ads; events
  // without send_to (e.g. generate_lead) go to every configured ID.
  const ids = [SITE.ga4, SITE.gads?.id].filter(Boolean);
  if (ids.length === 0) return null;
  const configs = ids.map((id) => `gtag('config','${id}');`).join("");
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${configs}`}
      </Script>
    </>
  );
}
