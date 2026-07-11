# RenoFix — Dubai Renovation, MEP & Maintenance

Next.js (App Router) website built for organic / SEO growth. No ads required.
Static-generated service and service×area pages, JSON-LD schema, sitemap and robots.

## Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3 (dark mode = system preference)
- Deploy: Vercel (recommended)

## Local dev (optional)
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy on Vercel
1. Push this repo to GitHub.
2. In Vercel, "Add New Project" and import the repo.
3. Framework preset = Next.js (auto-detected). No env vars needed.
4. Deploy. Add your domain (renofix.ae) in Vercel > Settings > Domains.

## Before going live — edit these
1. `lib/site.js` — set `url` to your live domain (used by SEO tags, sitemap, robots).
2. `app/components/EstimateTool.jsx` — replace the placeholder AED rates in the
   `SERVICES` object with your real Dubai rates. Estimate credibility depends on this.
3. `lib/renofix-data.js` — add/edit SERVICES and AREAS to scale pages. Every valid
   service×area combo auto-generates a page. For your top 10-15 highest-value pages,
   add 2-3 area-specific sentences so Google does not treat them as thin pages.

## How pages are generated
- `/` — homepage
- `/[service]` — one hub page per service (e.g. /bathroom-renovation)
- `/[service]/[area]` — one page per valid service×area (e.g. /bathroom-renovation/dubai-marina)
- `areaTypes` on each service controls which areas it generates for
  (e.g. swimming pool only generates for villa areas).

## After deploy — SEO checklist
1. Add the site to Google Search Console and submit `/sitemap.xml`.
2. Create and verify a Google Business Profile (biggest local ranking lever).
3. Collect Google reviews from every completed job.

---

## Admin + Project Catalog (Supabase) — setup

The site works without Supabase (estimate tool falls back to built-in rates).
To enable the admin panel, live rate editing, and the Our Work gallery:

### 1. Run the database setup
- Open Supabase > SQL Editor > New query
- Paste all of `SUPABASE_SETUP.sql` and Run. This creates tables,
  security policies, and the image storage bucket.

### 2. Get your keys (Supabase > Project Settings > API)
- Project URL
- anon public key
- service_role key (secret — keep private)

### 3. Add environment variables in Vercel
Vercel > your project > Settings > Environment Variables. Add:
- `NEXT_PUBLIC_SUPABASE_URL` = your project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon public key
- `SUPABASE_SERVICE_ROLE_KEY` = service_role key (secret)
- `ADMIN_PASSWORD` = a strong password you choose

Then redeploy (Vercel > Deployments > Redeploy) so the variables take effect.

### 4. Use it
- Admin login: `your-domain/login`
- Edit estimate rates: `/admin/rates` (changes are live instantly, no rebuild)
- Upload project photos: `/admin/projects` (title + category + image)
- Public gallery: `/our-work` (category filter)

Security notes: the anon key is public by design and only allows reading.
All writes go through server routes that check your admin password and use
the service_role key, which is never exposed to the browser.
