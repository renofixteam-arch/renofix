-- ============================================================
-- RenoFix — Supabase setup PART 3 (leads + SEO keywords)
-- Run once in: Supabase Dashboard > SQL Editor > New query
-- Safe to run even if earlier setup files were already run.
-- ============================================================

-- Service-request leads. Private: only the server (service role) can read/write.
create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  name       text,
  phone      text,
  service    text,
  area       text,
  message    text,
  status     text not null default 'new',
  created_at timestamptz not null default now()
);
alter table public.leads enable row level security;
-- No policies added on purpose: anon key gets no access. The public form and the
-- admin inbox both go through server routes that use the service_role key.

-- Target keywords for SEO planning/tracking. Managed from the admin only.
create table if not exists public.seo_keywords (
  id         uuid primary key default gen_random_uuid(),
  keyword    text not null,
  note       text,
  created_at timestamptz not null default now()
);
alter table public.seo_keywords enable row level security;
-- server-only access via service role (no public policy needed).
