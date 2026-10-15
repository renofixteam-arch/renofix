-- SiteRunner contractor survey table
-- Run once in Supabase → SQL Editor. Anyone with the link can SUBMIT answers,
-- but nobody can READ them through the public key. You read them in Table Editor.

create table if not exists public.site_delivery_survey (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  role text,
  frequency text,
  trip_time text,
  current_method text[] not null default '{}',
  items text[] not null default '{}',
  would_use text,
  fee text,
  areas text[] not null default '{}',
  name text check (char_length(name) <= 120),
  company text check (char_length(company) <= 160),
  whatsapp text check (char_length(whatsapp) <= 20),
  source text check (char_length(source) <= 40)
);

alter table public.site_delivery_survey enable row level security;

drop policy if exists "public can submit survey" on public.site_delivery_survey;
create policy "public can submit survey" on public.site_delivery_survey
  for insert to anon with check (true);

-- Quick results (run any time in SQL Editor)
-- select would_use, count(*) from public.site_delivery_survey group by 1 order by 2 desc;
-- select unnest(areas) as area, count(*) from public.site_delivery_survey group by 1 order by 2 desc;
-- select unnest(items) as item, count(*) from public.site_delivery_survey group by 1 order by 2 desc;
-- select fee, count(*) from public.site_delivery_survey group by 1 order by 2 desc;
-- select name, company, whatsapp, would_use, areas from public.site_delivery_survey where whatsapp is not null order by created_at desc;
