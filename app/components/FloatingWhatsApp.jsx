"use client";

import { SITE } from "../../lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36c1.46.8 3.1 1.22 4.84 1.22 5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.84 14.06c-.24.68-1.42 1.32-1.96 1.36-.5.06-1.14.08-1.84-.12-.42-.14-.96-.32-1.66-.62-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.18-1.58-1.18-3.02s.76-2.14 1.02-2.44c.26-.3.58-.38.78-.38.2 0 .38 0 .56.02.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.08.14.12.3.02.5-.1.2-.14.32-.28.5-.14.16-.3.36-.42.48-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.94 1.24 2.22 1.38.28.14.44.12.6-.08.16-.2.68-.8.86-1.08.18-.28.36-.24.6-.14.24.08 1.54.72 1.8.86.26.14.44.2.5.32.06.12.06.66-.18 1.34z"/>
      </svg>
    </a>
  );
}
