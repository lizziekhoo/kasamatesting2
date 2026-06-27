# Kasama 
### NUS Orbital 2026 (Artemis)

**Together, we belong.**


Kasama (Filipino for *together*) is a progressive web app that helps migrant domestic helpers feel a little less alone by making Singapore feel more like home. We felt that a lot of the information this group needs — like community events, legal rights, emergency contacts, familiar food — travels by word of mouth. We wanted to fix that to make sure that Singapore is a place where everyone can find their footing.

**Live app: [kasama-sg-7k87.vercel.app](https://kasama-sg-7k87.vercel.app)**

---

## Motivation

This app was born from personal experience. Both of us have lived with migrant domestic helpers in the past, hence we have witnessed firsthand the quiet struggles they face. Most things are travelled by word of mouth (which everyone doesn’t have equal access to), helpers may feel lost navigating an unfamiliar country, finding community, and simply feeling at home in a place that isn't theirs. Take the spaces that domestic helpers gather on Sundays — volleyball tournaments and community events do happen, but they're advertised only through Facebook posts or passed along by word of mouth. If you're new, or simply not in the right circle, you'd never know, hindering the process by which someone is integrated into that particular community. 

While doing research, we found that there is an existing app for migrant workers called FWMOM. However, the app, being tailored to migrant workers as a whole, does not cater to the specific social and physical needs of domestic helpers. In short, the app does not focus on the everyday things that make a foreign environment feel less foreign. We wanted to change that.

---

## Aim

Our goal is to build something accessible that brings those whispered recommendations into one place — connecting migrant workers with community events, places of worship, familiar food options, and the everyday things that make a foreign environment feel a little less foreign. 

Beyond the community, we also want to make information more accessible — from understanding their employment rights, to navigating the immigration journey, to knowing what legal protections are available to them. Many migrant workers are unaware of the rights and resources they are entitled to, and that knowledge gap can leave them vulnerable.
The app supports multilingual access through pre-translated content and structured phrasebooks, ensuring usability without reliance on costly real-time translation APIs.
In future iterations, we aim to explore lightweight community features such as curated discussions or FAQs, though this is not part of the initial MVP due to moderation and scalability considerations.
Emergency contacts and helpline information will also be surfaced prominently, so that help is always one tap away when it matters most. 

The system is designed as a lightweight, mobile-first Progressive Web App to ensure accessibility for users with limited device capabilities and connectivity.

---

## Features

### Language Selection
#### The first thing users see — choose your language before anything else

Migrant domestic helpers in Singapore come from all over the world, so we want to build Kasama for all languages. This is why the very first screen lets users pick from four languages (currently, with more to be added). The choice is saved to the device so the app remembers it on every visit (by localStorage).

<p align="center">
  <img src="docs/language1.jpeg" width="30%"/>
  <img src="docs/language2.jpeg" width="30%"/>
</p>

- Supports English, Filipino (Tagalog), 中文 (Chinese), and தமிழ் (Tamil)
- Switching to Filipino immediately updates the tagline, labels, and prompts to Tagalog
- Language preference is persisted in localStorage
- Built using react-i18next with pre-translated content 

---

### Authentication & Account Creation
#### Secure sign in and account creation, in your language

Using Supabase Auth, users can sign in to an existing account or create a new one from the same screen. New users create an account with email and password, and the form includes a confirmation field ("Just to be sure, type it again") so typos don't slip through.

<p align="center">
  <img src="docs/loginattempt.jpeg" width="30%"/>
  <img src="docs/loginfail.jpeg" width="30%"/>
  <img src="docs/loginsucess.jpeg" width="30%"/>
</p>

- Sign in with email and password; wrong credentials shows a friendly error message
- Successful login redirects to the home screen with the user's email shown
- Auth state persists across sessions — once signed in, users go straight to home on return (Supabase stores the session token in the browser's localStorage)
- Row Level Security protects anything personal

---

### Home & Navigation
#### A single hub, with everything one tap away

After signing in, users land on a home screen that puts the most important things first: an always-visible emergency shortcut to 999 / 995, then a grid of cards for each part of the app. At the bottom sits a five-tab navigation bar so you can jump between Home, Help, Rights, Map, and Me without ever hunting through a menu.

- Emergency shortcut pinned to the top — help is never more than a glance away
- Feature cards for helplines, rights, the map, the phrasebook, and pay tracking
- Mobile-first bottom tab bar, with safe-area padding so it clears the home indicator on iPhones
- Every label follows the selected language

---

### Help & Helplines
#### The numbers you need, organised and tap-to-call

A directory of emergency and support numbers pulled live from the Supabase backend. Contacts are grouped into categories (Emergency, Work & pay, Embassies, Wellbeing), searchable, and each one is a one-tap call. Where a helpline has a physical location, it links straight to its pin on the map.

- Tap-to-call via `tel:` links — no copying numbers, just tap and dial
- Search by name or description, and filter by category
- Some contacts link to a place on the map (e.g. an embassy → its pin)
- Seeded with verified Singapore numbers (999, 995, MOM, TADM, SOS, embassies) — see `supabase/schema.sql`

---

### Know Your Rights
#### Clear, plain-language info that works offline

A small library of rights and information pages — rest days, salary and deductions, the employment contract, medical care — written in plain language and stored in Supabase. Each page opens to a clean reading view. Because this is the content people most need in a pinch, the whole library is cached to the device after the first read, so it still opens with no connection.

- Structured by category, with a summary on each card and a full page behind it
- Read-through cache: shows the saved copy instantly, then refreshes from Supabase in the background
- Works fully offline after the first visit — an "Offline — showing saved copy" banner makes the state clear
- Content reflects Ministry of Manpower rules for foreign domestic workers (a starting point, not legal advice)

---

### Around You — Map
#### The places that make Singapore feel like home

A curated, interactive map built on Leaflet and free OpenStreetMap tiles — no API key, no cost. Rather than dump every point of interest on the map, we hand-pick the places that genuinely matter to this community: where people gather on a Sunday, where they worship, where to find familiar food, and useful shops. Tapping a pin (or its row in the list below) opens a detail page with the address, a tip, and a directions link.

- Curated pins for community hubs (Lucky Plaza, City Plaza, Peninsular Plaza), places of worship, familiar food, and essentials
- Colour-coded pins per category, with a category filter
- Place detail pages with address, a tip, and a one-tap "Get directions" hand-off to OpenStreetMap
- Leaflet is lazy-loaded, so the map library only downloads when you actually open the map

---

### My Pay
#### Quietly keep track of what you've earned

A private, offline-first salary log. Helpers can record each payment they receive — amount, date, hours worked, and an optional note — and the app keeps a running total for the current month and all time. Everything is stored locally on the device, so there's nothing to sign up for beyond the main account and no data ever leaves the phone.

- Log a payment in seconds; entries are sorted newest-first
- Live totals for *this month* and *all time*
- Editable by deletion (with a confirm), and fully private — stored in localStorage, never sent anywhere
- Designed to pair with the "Salary & deductions" rights page, so people have both the record and the knowledge of what they're owed

---

### Phrasebook
#### Say it in your language, with a copy to paste

A pre-translated phrasebook covering the things people actually need to say — greetings, emergencies, at work, getting around, and shopping. Each card shows the phrase in the user's selected language (with the English underneath for reference) and a copy button, so it can be pasted into a message or shown to someone.

- Pre-translated into English, Filipino, Chinese, and Tamil — no live translation API needed, which keeps it usable on limited data
- Categorised and filterable, with a copy-to-clipboard button on every card
- Falls back to English gracefully if a translation is ever missing

---

## Project structure

```
kasama/
├── docs/                       # documentation screenshots
├── public/                     # static assets (PWA icons, favicon)
├── scripts/
│   └── generate-icons.mjs      # bakes the SVG app icon into PNGs
├── supabase/
│   └── schema.sql              # tables + seed data (helplines & rights)
├── src/
│   ├── components/
│   │   ├── AppLayout.jsx       # shared shell: content + bottom nav
│   │   ├── BottomNav.jsx       # five-tab mobile navigation
│   │   └── PageHeader.jsx      # shared page title + back button
│   ├── data/
│   │   ├── phrases.js          # phrasebook, pre-translated (EN/FIL/ZH/TA)
│   │   └── places.js           # curated map places + categories
│   ├── i18n/
│   │   ├── index.js
│   │   └── translations.js     # UI strings in EN, FIL, ZH, TA
│   ├── lib/
│   │   ├── supabase.js         # client setup
│   │   ├── session.jsx         # tiny context for the logged-in session
│   │   └── storage.js          # localStorage helpers (salary + offline cache)
│   ├── pages/
│   │   ├── AuthPage.jsx        # language picker + login or register
│   │   ├── HomePage.jsx        # dashboard + emergency shortcut
│   │   ├── ContactsPage.jsx    # Help & Helplines (tap-to-call)
│   │   ├── RightsPage.jsx      # rights library (list)
│   │   ├── RightsDetailPage.jsx# a single rights page
│   │   ├── MapPage.jsx         # Leaflet + OpenStreetMap
│   │   ├── PlaceDetailPage.jsx # a single place
│   │   ├── SalaryPage.jsx      # local pay tracker
│   │   ├── PhrasebookPage.jsx  # translated phrase cards
│   │   └── MePage.jsx          # profile, tools, sign out
│   ├── App.jsx                 # routing + auth state
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
├── vercel.json
└── vite.config.js
```

---

## System architecture

The app has three layers:

**Frontend** — React PWA built with Vite, hosted on Vercel. Components are modular and independently developed. Feature pages are lazy-loaded with `React.lazy`, so the heavy bits (chiefly the Leaflet map) only download when opened — keeping the first paint light for slow connections and basic phones. A service worker enables offline caching and PWA installability.

**Backend** — Supabase provides PostgreSQL, authentication, and storage with no custom server. Row Level Security protects personal data; the helplines and rights content are public reference info (read-only from the client). The salary tracker and the rights offline cache live entirely in the browser's localStorage, so they need no network at all.

**External services** — OpenStreetMap and Leaflet for free map tiles; GitHub for version control and CI/CD; Vercel for global CDN delivery.

The frontend and backend are fully decoupled — the React app communicates with Supabase through API calls only.

---

## Tech stack

| | |
|---|---|
| Frontend | React 18 + Vite |
| Backend | Supabase (PostgreSQL + Auth) |
| Routing | React Router v6 |
| Multilingual | react-i18next |
| Maps | Leaflet + OpenStreetMap |
| Offline | vite-plugin-pwa (Workbox) + localStorage |
| Hosting | Vercel |
| PWA | vite-plugin-pwa |

We picked Supabase because it gives us auth, a database, and row-level security without needing a custom backend server. Leaflet + OpenStreetMap for maps because it's free and doesn't need an API key. The salary tracker and rights cache use plain localStorage so they work completely offline and keep sensitive data on the device. Everything is optimised for low-end Android devices and limited data plans.

---

## Setup

The app needs a Supabase project to read its helplines and rights content from.

1. **Install dependencies** — `npm install`
2. **Add your env vars** — copy `.env.example` to `.env` and fill in your Supabase project URL and anon key (from the Supabase dashboard → your project → Settings → API)
3. **Create the tables + seed data** — in the Supabase dashboard, open the SQL Editor, paste in `supabase/schema.sql`, and run it. This creates the `contacts` and `rights_pages` tables and fills them with starter content. (It's safe to re-run.)
4. **Run locally** — `npm run dev`, or build with `npm run build` and preview with `npm run preview`

If the tables don't exist yet, the Help and Rights pages fail soft — they show an empty state and a pointer to `schema.sql` instead of crashing. The map, pay tracker, and phrasebook don't depend on Supabase at all, so they work straight away.

---

## Deployment

The app is deployed on Vercel and automatically redeploys on every push to the `main` branch. `vercel.json` rewrites all routes to the single-page entry so deep links and refreshes work.

---

## Roadmap

**Milestone 1** ✅ — language selection (EN/FIL/ZH/TA), login and registration with Supabase Auth, deployed PWA on Vercel.

**Milestone 2** ✅ — curated map with Leaflet + OpenStreetMap, full rights and information library with offline caching, help directory with tap-to-call and place linking, phrasebook, local salary tracker, and mobile-friendly navigation.

**Milestone 3** — audio phrasebook (spoken phrases for low-literacy access), stronger offline caching, community announcements, and UI polish tuned for low-end Android.

