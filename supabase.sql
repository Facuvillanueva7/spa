create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  need text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "anon_insert_leads" on public.leads
for insert to anon
with check (true);

create policy "anon_read_leads" on public.leads
for select to anon
using (true);
