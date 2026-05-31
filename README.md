# Kasama SG 🤝
### NUS Orbital 2026 — A PWA for migrant domestic helpers in Singapore

Kasama (Filipino for *together*) is a progressive web app that helps migrant domestic helpers feel a little less alone by making Singapore feel more like home. We felt that a lot of the information this group needs like community events, legal rights, emergency contacts, familiar food travels by word of mouth. We wanted to fix that to make sure that Singapore is a place where everyone can find their footing.

**Live app: [kasama-sg.vercel.app](https://kasama-sg.vercel.app)**

---

## Features

### Language Selection
#### Choose your preferred language before anything else

Migrant domestic helpers in Singapore come from all over the world, so the first screen lets users pick from English, Filipino, 中文, or தமிழ் (to be updated with more). The choice is saved so the app remembers it on every visit. 

### Authentication
#### Secure sign up and sign in with email and password

- Users can create an account or sign in from the same screen
- Error messages are shown in the user's chosen language (wrong password, email already taken, etc.)
- Auth state persists across sessions — once signed in, users go straight to the home screen
- Built on Supabase Auth with Row Level Security so each user's personal data stays private

---

## Project structure

```
src/
├── pages/
│   ├── AuthPage.jsx      # language picker + login/register
│   └── HomePage.jsx      # main app after login
├── lib/
│   └── supabase.js       # supabase client setup
├── i18n/
│   ├── index.js          # i18next config
│   └── translations.js   # strings in EN, FIL, ZH, TA
├── App.jsx               # routing + auth state
├── main.jsx
└── index.css
```

---

## Tech Stack
- React 18 + Vite
- Supabase (PostgreSQL + Auth)
- react-i18next
- React Router v6
- Vercel (hosting)
- vite-plugin-pwa
