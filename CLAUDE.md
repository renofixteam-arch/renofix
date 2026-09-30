# RenoFix

Website for RenoFix, a renovation company in Dubai. Live at https://renofixplus.ae.

Stack: Next.js (App Router) + Supabase, hosted on Vercel. Every push to `main` auto-deploys to production.

## Where things live

- `lib/guides.js` — guide articles (`/guides/[slug]`)
- `lib/renofix-data.js` — services and areas
- `lib/site.js` — site config (URL, phone, WhatsApp, email, tracking IDs)
- `app/[service]/[area]` — service × area landing pages
- `app/our-work` — projects gallery; projects come from the Supabase `projects` table (managed in `/admin/projects`)
- `app/admin`, `app/api/admin` — admin panel and its API

## Guardrails

- **Positioning is honest, fixed, transparent pricing — not luxury.** Don't use "luxury" or similar upmarket framing in copy. Describing a finish level (e.g. "premium finishes" as a price tier) is fine.
- **Never put the DED licence number in promotional or public content.** It stays in `lib/site.js` for legal/docs use only; don't render it on pages, metadata or structured data.
- **Client-facing copy is English only.**
- **Run `npm run build` before every push.** If it fails, Vercel won't deploy — fix it first.
