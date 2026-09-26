-- ============================================================
-- RenoFix — Supabase setup PART 4 (customer reviews)
-- Run once in: Supabase Dashboard > SQL Editor > New query
-- ============================================================

create table if not exists public.reviews (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  rating       int not null default 5,
  text         text,
  area         text,
  service      text,
  source       text default 'Google',
  featured     boolean not null default true,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now()
);

alter table public.reviews enable row level security;

-- Reviews are meant to be shown publicly on the site.
drop policy if exists "public read reviews" on public.reviews;
create policy "public read reviews"
  on public.reviews for select using (featured = true);

-- Writes happen through the admin server routes (service role), so no write policy here.
