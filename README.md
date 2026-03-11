# HealthStart DE 🚀

> Das HealthTech Startup-Verzeichnis für Deutschland

## Vision

Eine Plattform, die deutsche HealthTech Startups sichtbar macht:
- **Entdecken** — Neue Startups, Trends, Innovationen
- **Präsentieren** — Profile, Team, Funding, Revenue
- **Verbinden** — Investoren, Gründer, Talente
- **Verkaufen** — M&A-Marktplatz für Startups

---

## Design-Referenzen

| Site | Was wir übernehmen |
|------|-------------------|
| **Seedtable.com** | Listen, Filter, Funding-Daten |
| **TrustMRR.com** | Revenue, Rankings, Sales-Daten |
| **heymessage.framer.ai** | Clean, modern, smooth UI |

---

## Tech-Stack

| Layer | Technologie |
|-------|-------------|
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Backend | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Hosting | Vercel |
| APIs | Crunchbase, Stripe (später) |

---

## Pages (MVP)

### `/` — Home
- Hero: "Deutsche HealthTech Startups entdecken"
- Featured Startups (3-6)
- Stats: X Startups, €X Funding, X gegründet
- CTA: "Startup eintragen" / "Alle ansehen"

### `/startups` — Verzeichnis
- Filter: Stage, Funding, Location, Industry
- Suche: Name, Beschreibung
- Liste: Logo, Name, Funding, Stage, Location
- Sortierung: Newest, Most Funded, Trending

### `/startup/[slug]` — Profil
- Header: Logo, Name, Tagline, Website
- Daten: Funding, Revenue, Stage, Founded
- Team: Gründer mit LinkedIn
- Beschreibung: Langtext
- News: Updates, Milestones

### `/news` — Blog
- Neue Startups
- Funding-News
- M&A-Updates
- Industry-Insights

### `/login` — Auth
- Signup/Login (Email, Google)
- Premium: Mehr Daten, Kontakt, M&A-Access

---

## Daten-Modell

### Startups
```sql
id              uuid PRIMARY KEY
name            text NOT NULL
slug            text UNIQUE
tagline         text
description     text
website         text
logo_url        text
funding         decimal
revenue         decimal
stage           text (pre-seed, seed, series-a, etc.)
founded_year    int
location        text
industry        text[]
team_size       int
crunchbase_id   text
featured        boolean
created_at      timestamp
updated_at      timestamp
```

### Founders
```sql
id            uuid PRIMARY KEY
startup_id    uuid REFERENCES startups
name          text
role          text
linkedin      text
bio           text
```

### News
```sql
id            uuid PRIMARY KEY
title         text
content       text
startup_id    uuid REFERENCES startups
published_at  timestamp
```

---

## MVP Roadmap

### Phase 1: Setup (Tag 1-2)
- [ ] Next.js Projekt erstellen
- [ ] Supabase Verbindung
- [ ] Tailwind + shadcn/ui Setup
- [ ] Basis-Layout

### Phase 2: Core (Tag 3-7)
- [ ] Home Page
- [ ] Startups Liste
- [ ] Startup Profil
- [ ] Erste 20 Startups einpflegen

### Phase 3: Polish (Tag 8-14)
- [ ] Design finalisieren
- [ ] Filter & Suche
- [ ] News/Blog
- [ ] Mobile-optimiert

### Phase 4: Launch
- [ ] Deploy auf Vercel
- [ ] Domain verbinden
- [ ] SEO-Setup
- [ ] Erste 50+ Startups

---

## Quick Start

```bash
# Projekt öffnen
cd /data/.openclaw/workspace/projects/healthstart-de

# Next.js erstellen
npx create-next-app@latest . --typescript --tailwind --app

# Dependencies
pnpm add @supabase/supabase-js
pnpm add lucide-react class-variance-authority clsx tailwind-merge

# Supabase Setup
# 1. Neues Projekt auf supabase.com
# 2. .env.local mit Credentials
# 3. Tabellen erstellen

# Dev Server
pnpm dev
```

---

## Verantwortlichkeiten

| Agent | Aufgabe |
|-------|---------|
| **Linus 🚀** | Projekt-Owner, Design, Content |
| **Momo 🐶** | Coding, Tech-Implementation |
| **Tony 🔧** | Research, Daten-Sourcing |
| **James 🎩** | Koordination, Entscheidungen |

---

## Erfolgsmetriken

| Metric | Ziel (MVP) | Ziel (3 Monate) |
|--------|------------|-----------------|
| Startups | 50 | 500 |
| Pageviews | 1.000/Monat | 50.000/Monat |
| Signups | 10 | 500 |
| Premium | 0 | 50 |

---

## Kontakt

- **Project Owner:** Linus 🚀
- **Orchestrator:** James 🎩
- **User:** Ruben Tollmann

---

*Keep it simple. Build fast. Iterate.*