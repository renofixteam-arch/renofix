# RenoFix Plus

Website for RenoFix Plus (legal name: Renofix Plus Technical Contracting LLC), a renovation company in Dubai. Live at https://renofixplus.ae.

Stack: Next.js (App Router) + Supabase, hosted on Vercel. Every push to `main` auto-deploys to production.

## Where things live

- `lib/guides.js` — guide articles (`/guides/[slug]`)
- `lib/renofix-data.js` — services and areas
- `lib/site.js` — site config (URL, phone, WhatsApp, email, tracking IDs)
- `app/(site)/[service]/[area]` — service × area landing pages
- `app/(site)/our-work` — projects gallery; projects come from the Supabase `projects` table (managed in `/admin/projects`)
- `app/(site)/admin`, `app/api/admin` — admin panel and its API
- English pages live in the `app/(site)/` route group (URLs unchanged); Russian pages in `app/ru/`. Each group has its own root layout so `/ru/` renders `<html lang="ru">`.
- Russian content: `lib/guides.ru.js` (build fails if its numbers drift from `lib/guides.js`), `lib/renofix-data.ru.js`, `lib/ru-ui.js`. Which pages have a Russian twin: `lib/i18n.js`.

## Guardrails

- **Brand name is "RenoFix Plus"** in all client-facing copy (`SITE.name` in `lib/site.js`).
- **Warranty is 12 months, terms and conditions apply.** Any warranty claim must carry the condition (or an asterisk pointing to the footer note).
- **Renovation packages start from AED 35,000.** Price ranges in copy must match the price tables in `lib/guides.js`; don't invent numbers.
- **Positioning is honest, fixed, transparent pricing — not luxury.** Don't use "luxury" or similar upmarket framing in copy. Describing a finish level (e.g. "premium finishes" as a price tier) is fine.
- **Never put the DED licence number in promotional or public content.** It stays in `lib/site.js` for legal/docs use only; don't render it on pages, metadata or structured data.
- **Client-facing copy is English by default.** A Russian (`/ru/`) version exists for a defined set of high-demand pages (listed in `lib/i18n.js`). Russian copy must be professionally / natively translated (no machine translation), carry the same AED price numbers as its English source, use the brand "RenoFix Plus", include the 12-month warranty* caveat, and ship with correct reciprocal hreflang. Arabic is not offered (near-zero search demand). Do not add further languages without the owner's sign-off.
- **Run `npm run build` before every push.** If it fails, Vercel won't deploy — fix it first.
