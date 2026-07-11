-- ============================================================
-- RenoFix — Supabase setup
-- Run this whole file once in: Supabase Dashboard > SQL Editor > New query
-- ============================================================

-- 1) Estimate rates (powers the instant estimate tool) -------
create table if not exists public.estimate_rates (
  key   text primary key,
  label text not null,
  unit  text not null,
  low   numeric not null,
  high  numeric not null,
  min   numeric not null,
  sort  int not null default 0
);

insert into public.estimate_rates (key, label, unit, low, high, min, sort) values
  ('apartment',   'Apartment Renovation',    'sqft',     80,   160,  15000, 1),
  ('villa',       'Villa Renovation',        'sqft',     90,   200,  40000, 2),
  ('bathroom',    'Bathroom Renovation',     'bathroom', 12000,28000,12000, 3),
  ('kitchen',     'Kitchen Renovation',      'kitchen',  15000,40000,15000, 4),
  ('mep',         'MEP Works',               'sqft',     25,   60,   5000,  5),
  ('maintenance', 'Home Maintenance (AMC)',  'package',  1500, 6000, 1500,  6),
  ('pool',        'Swimming Pool',           'sqm',      3500, 8500, 60000, 7),
  ('landscaping', 'Landscaping',             'sqm',      250,  700,  5000,  8),
  ('painting',    'Painting & Flooring',     'sqft',     20,   55,   3000,  9)
on conflict (key) do nothing;

-- 2) Projects (Our Work gallery) -----------------------------
create table if not exists public.projects (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  category     text not null default 'Other',
  image_url    text not null,
  storage_path text,
  created_at   timestamptz not null default now()
);

-- 3) Site settings (single row, for future use) --------------
create table if not exists public.site_settings (
  id        int primary key default 1,
  whatsapp  text,
  phone     text,
  email     text,
  instagram text,
  licence   text
);
insert into public.site_settings (id) values (1) on conflict (id) do nothing;

-- 4) Row Level Security: public can READ, nobody writes with anon key
--    (writes happen only through the server using the service role key)
alter table public.estimate_rates enable row level security;
alter table public.projects       enable row level security;
alter table public.site_settings  enable row level security;

drop policy if exists "public read rates" on public.estimate_rates;
create policy "public read rates" on public.estimate_rates for select using (true);

drop policy if exists "public read projects" on public.projects;
create policy "public read projects" on public.projects for select using (true);

drop policy if exists "public read settings" on public.site_settings;
create policy "public read settings" on public.site_settings for select using (true);

-- 5) Storage bucket for project images (public read) ---------
insert into storage.buckets (id, name, public)
values ('projects', 'projects', true)
on conflict (id) do nothing;

drop policy if exists "public read project images" on storage.objects;
create policy "public read project images"
  on storage.objects for select
  using (bucket_id = 'projects');
