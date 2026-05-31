# Kasama SG 🤝

**Together, we belong.**

A progressive web app for migrant domestic helpers in Singapore — connecting them with community resources, rights information, and everyday support.

---

## Getting started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) account (free)

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/kasama-sg.git
cd kasama-sg
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings → API** and copy your project URL and anon key
3. Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Set up the database

Run this SQL in your Supabase **SQL Editor**:

```sql
-- Enable email auth (already on by default)

-- Contacts / help directory
create table contacts (
  id uuid primary key default gen_random_uuid(),
  org_name text not null,
  phone text,
  category text,       -- e.g. 'helpline', 'ngo', 'embassy', 'clinic'
  website text,
  notes text,
  created_at timestamptz default now()
);

-- Rights and information content
create table content_items (
  id uuid primary key default gen_random_uuid(),
  section text not null,   -- e.g. 'salary', 'rest_days', 'abuse'
  title text not null,
  body text not null,
  language text default 'en',
  updated_at timestamptz default now()
);

-- Curated places (for map)
create table places (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,           -- e.g. 'clinic', 'food', 'remittance', 'worship'
  lat float,
  lng float,
  address text,
  phone text,
  notes text
);

-- Salary tracker (personal, protected by RLS)
create table salary_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  log_date date not null,
  expected_amount numeric,
  received_amount numeric,
  notes text,
  created_at timestamptz default now()
);

-- Row-level security: users can only see their own salary logs
alter table salary_logs enable row level security;
create policy "Users see own logs" on salary_logs
  for all using (auth.uid() = user_id);

-- Contacts and content are public (read-only)
alter table contacts enable row level security;
create policy "Public read contacts" on contacts for select using (true);

alter table content_items enable row level security;
create policy "Public read content" on content_items for select using (true);

alter table places enable row level security;
create policy "Public read places" on places for select using (true);
```

### 4. Run locally

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## Project structure

```
src/
├── pages/
│   ├── AuthPage.jsx      # Language selection + login/register
│   └── HomePage.jsx      # Main app (post-login)
├── lib/
│   └── supabase.js       # Supabase client
├── i18n/
│   ├── index.js          # i18next setup
│   └── translations.js   # EN, FIL, ZH, TA strings
├── App.jsx               # Auth routing
├── main.jsx
└── index.css
```

## Deploying to Cloudflare Pages

1. Push your repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create application → Connect to Git
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add environment variables (same as `.env`) under Settings → Environment variables

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Inline CSS (mobile-first) |
| Routing | React Router v6 |
| Backend | Supabase (PostgreSQL + Auth) |
| i18n | react-i18next |
| Maps | Leaflet + OpenStreetMap *(Milestone 2)* |
| Hosting | Cloudflare Pages |
| PWA | vite-plugin-pwa |

---

## Roadmap

- **Milestone 1** — Auth, help directory from DB, one rights page ✅
- **Milestone 2** — Map, full rights library, phrasebook, salary tracker
- **Milestone 3** — Audio phrasebook, offline PWA, community announcements
