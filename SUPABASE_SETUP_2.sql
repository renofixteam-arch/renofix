-- ============================================================
-- RenoFix — Supabase setup PART 2 (section image slots)
-- Run this once in: Supabase Dashboard > SQL Editor > New query
-- Safe to run even if you already ran the first setup file.
-- ============================================================

create table if not exists public.site_images (
  key          text primary key,
  image_url    text not null,
  storage_path text,
  updated_at   timestamptz not null default now()
);

alter table public.site_images enable row level security;

drop policy if exists "public read site images" on public.site_images;
create policy "public read site images"
  on public.site_images for select using (true);

-- Section images reuse the existing public 'projects' storage bucket,
-- so no new bucket is needed.
