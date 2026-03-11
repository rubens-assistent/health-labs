# ROADMAP.md — HealthStart DE (Final)

## 🎯 Projekt-Ziel

Eine moderne, clean Startup-Plattform für HealthTech:
- **DE Startups** + **Internationale Startups** (für deutschen Markt relevant)
- **Landing Page** mit Grid
- **Startup-Profile** mit Daten
- **News-Section** für Updates

---

## 📋 Phase 1: Funktionen definieren

### Pages

| Page | URL | Inhalt |
|------|-----|--------|
| **Landing** | `/` | Hero + Startup Grid + Stats |
| **Startups DE** | `/startups/de` | Grid + Filter (deutsche Startups) |
| **Startups International** | `/startups/international` | Grid + Filter |
| **Startup Profil** | `/startup/[slug]` | Details, Team, Funding |
| **News** | `/news` | Blog-Style Updates |

### Features

| Feature | Priorität |
|---------|-----------|
| Startup Grid | 🔴 Hoch |
| Tabs: DE / International | 🔴 Hoch |
| Filter (Stage, Industry, Funding) | 🟡 Mittel |
| Suche | 🟡 Mittel |
| Startup-Profil | 🔴 Hoch |
| News | 🟡 Mittel |
| Login/Premium | 🟢 Niedrig |

---

## 🎨 Phase 2: Design-Besprechung

### Design-Referenzen

| Site | Was wir übernehmen |
|------|-------------------|
| **Seedtable.com** | Grid-Layout, Filter, Funding-Daten |
| **TrustMRR.com** | Revenue, Rankings, Clean |
| **heymessage.framer.ai** | Modern, Smooth, Hero-Section |

### Landing Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  LOGO           [DE] [International] [News]      [Login]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Deutsche HealthTech Startups                               │
│  Entdecken. Verbinden. Investieren.                         │
│                                                             │
│  [🔍 Suche...]                                              │
│                                                             │
│  [Alle] [Pre-Seed] [Seed] [Series A] [Series B+]            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │  LOGO   │ │  LOGO   │ │  LOGO   │ │  LOGO   │          │
│  │ HealthAI│ │ DocPlus │ │ MedTech │ │ PharmaX │          │
│  │ €10.5M  │ │ €2.5M   │ │ €500K   │ │ €25M    │          │
│  │ Series A│ │ Seed    │ │ Pre-Seed│ │ Series B│          │
│  │ Berlin  │ │ Munich  │ │ Hamburg │ │ Berlin  │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                             │
│  [Mehr anzeigen →]                                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 127 Startups | €450M Funding | 45 gegründet 2024       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Startup Grid Card

```
┌─────────────────────┐
│     [Logo 80x80]    │
│                     │
│  HealthAI           │
│  AI-Diagnostik      │
│                     │
│  €10.5M | Series A  │
│  Berlin | 45 Team   │
│                     │
│  [AI] [Diag] [Tech] │
└─────────────────────┘
```

### Startup Profil Page

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  HealthAI                                           │
│          AI-gestützte Diagnostik für Radiologie            │
│          🌐 healthai.de | 📍 Berlin                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │  €10.5M     │ │  Series A   │ │  2022       │           │
│  │  Funding    │ │  Stage      │ │  Gegründet  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │  45         │ │  HealthTech │ │  B2B        │           │
│  │  Team       │ │  Industry   │ │  Model      │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Gründer                                                    │
│  ─────────                                                  │
│  👤 Dr. Max Müller (CEO) — [LinkedIn]                       │
│  👤 Anna Schmidt (CTO) — [LinkedIn]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Beschreibung                                               │
│  ───────────                                                │
│  HealthAI entwickelt KI-Lösungen für die radiologische      │
│  Diagnostik. Unsere Platform hilft Radiologen,              │
│  Befunde schneller und präziser zu erstellen...             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  News                                                       │
│  ─────                                                      │
│  • 2025-01: Series A Funding announced                      │
│  • 2024-06: Partnership with Charité                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Farbschema

| Element | Farbe |
|---------|-------|
| Background | #FFFFFF |
| Primary | #2563EB (Blue) |
| Secondary | #10B981 (Green) |
| Accent | #8B5CF6 (Purple) |
| Text | #1F2937 (Gray-900) |
| Text Secondary | #6B7280 (Gray-500) |

---

## 💻 Phase 3: Tech-Stack

| Layer | Technologie | Warum |
|-------|-------------|-------|
| **Framework** | Next.js 14 (App Router) | SSR, SEO, Performance |
| **Language** | TypeScript | Type-Safety |
| **Styling** | Tailwind CSS | Schnell, flexibel |
| **Components** | shadcn/ui | Beautiful, accessible |
| **Icons** | Lucide React | Modern |
| **Database** | Supabase (PostgreSQL) | Realtime, Auth, Storage |
| **Auth** | Supabase Auth | Email, Google, OAuth |
| **Hosting** | Vercel | Auto-deploy, Edge |
| **Animations** | Framer Motion | Smooth transitions |

---

## 🔧 Phase 4: Programmierung

### Step 1: Projekt-Setup

```bash
# Next.js erstellen
npx create-next-app@latest healthstart-de \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

# Dependencies
pnpm add @supabase/supabase-js
pnpm add lucide-react
pnpm add framer-motion
pnpm add class-variance-authority clsx tailwind-merge
pnpm add -D @types/node

# shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card input tabs badge
```

### Step 2: Ordnerstruktur

```
healthstart-de/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing
│   │   ├── layout.tsx         # Main Layout
│   │   ├── startups/
│   │   │   ├── de/
│   │   │   │   └── page.tsx   # DE Startups
│   │   │   ├── international/
│   │   │   │   └── page.tsx   # International
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Profil
│   │   ├── news/
│   │   │   └── page.tsx       # News
│   │   └── login/
│   │       └── page.tsx       # Auth
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── StartupCard.tsx
│   │   ├── StartupGrid.tsx
│   │   ├── FilterBar.tsx
│   │   └── SearchBar.tsx
│   ├── lib/
│   │   ├── supabase.ts
│   │   └── utils.ts
│   └── types/
│       └── startup.ts
├── public/
│   └── logos/
├── supabase/
│   └── migrations/
└── .env.local
```

### Step 3: Datenbank-Schema

```sql
-- Startups
CREATE TABLE startups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  website TEXT,
  logo_url TEXT,
  funding DECIMAL,
  revenue DECIMAL,
  stage TEXT,
  founded_year INT,
  location TEXT,
  country TEXT DEFAULT 'DE',
  is_international BOOLEAN DEFAULT FALSE,
  industry TEXT[],
  team_size INT,
  business_model TEXT,
  crunchbase_id TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Founders
CREATE TABLE founders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT,
  linkedin TEXT,
  bio TEXT
);

-- News
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  startup_id UUID REFERENCES startups(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index für schnelle Suche
CREATE INDEX idx_startups_slug ON startups(slug);
CREATE INDEX idx_startups_stage ON startups(stage);
CREATE INDEX idx_startups_country ON startups(country);
```

---

## 📊 Phase 5: Daten-Quellen

### Startup-Quellen

| Quelle | Was | Wie |
|--------|-----|-----|
| **Crunchbase** | Funding, Team, Stage | API (Premium) oder Manual |
| **Dealroom** | EU Startups | API / Scraping |
| **LinkedIn** | Gründer, Team | Manual / API |
| **Y Combinator** | Health Startups | Manual |
| **Product Hunt** | Neue Launches | RSS / API |
| **AngelList** | Startup-Jobs, Funding | API |

### News-Quellen

| Quelle | Was | Update |
|--------|-----|--------|
| **TechCrunch Health** | Funding News | RSS |
| **VentureBeat Health** | Industry News | RSS |
| **Gründerszene** | DE Startup News | RSS |
| **OYA Review** | Startup Reviews | Manual |

### Content-Erstellung

| Content | Wer | Wie oft |
|---------|-----|---------|
| Neue Startups | Linus/Tony | 5-10/Woche |
| News-Posts | Linus | 2-3/Woche |
| Funding-Updates | Linus | Bei Bedarf |
| Trend-Reports | James/Linus | 1x/Monat |

---

## 🗓️ Zeitplan

| Woche | Focus | Deliverable |
|-------|-------|-------------|
| **Woche 1** | Setup + Design | Next.js läuft, Design-System |
| **Woche 2** | Core Pages | Landing, Grid, Tabs |
| **Woche 3** | Profile + Data | Startup-Seiten, Supabase |
| **Woche 4** | Content + Polish | 20+ Startups, News |
| **Woche 5** | Launch | Deploy, Domain, SEO |

---

## ✅ Nächste Schritte (Jetzt)

1. **Next.js Setup** — Projekt erstellen
2. **Supabase** — Neues Projekt + Tables
3. **Design-System** — Tailwind + shadcn
4. **Erste Components** — Header, Card, Grid
5. **Erste Startups** — 5-10 manuell einpflegen

---

*Keep it simple. Build fast. Launch.*