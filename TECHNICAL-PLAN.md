# TECHNICAL-PLAN.md — HealthStart DE

> Technical Architecture, GitHub Setup, Programming Roadmap

---

## 🛠️ Tech Stack (Final)

| Layer | Technologie | Version | Warum |
|-------|-------------|---------|-------|
| **Framework** | Next.js | 14.x | App Router, SSR, SEO |
| **Language** | TypeScript | 5.x | Type Safety |
| **Styling** | Tailwind CSS | 3.4.x | Utility-first, Dark Mode |
| **Components** | shadcn/ui | latest | Accessible, Customizable |
| **Icons** | Lucide React | latest | Modern, Tree-shakeable |
| **Animations** | Framer Motion | 11.x | Smooth transitions |
| **Database** | Supabase | latest | PostgreSQL + Auth + Storage |
| **ORM** | Supabase Client | latest | Direct integration |
| **Hosting** | Vercel | — | Auto-deploy, Edge |
| **Package Manager** | pnpm | 9.x | Fast, Efficient |

### Dev Dependencies

| Tool | Zweck |
|------|-------|
| **ESLint** | Linting |
| **Prettier** | Formatting |
| **Vitest** | Unit Tests |
| **Playwright** | E2E Tests |

---

## 📁 GitHub Repository Setup

### Repository erstellen

```bash
# GitHub CLI (empfohlen)
gh repo create healthstart-de --public --clone

# Oder manuell auf github.com
# Name: healthstart-de
# Description: German HealthTech Startup Directory
# Visibility: Public
# .gitignore: Node, Next.js
# License: MIT
```

### Branch Structure

```
main           → Production (Vercel deploy)
├── develop    → Development
├── feature/*  → Feature branches
├── fix/*      → Bug fixes
└── release/*  → Release preparation
```

### Commit Convention

```
feat:     Neue Features
fix:      Bug fixes
style:    Design/CSS changes
refactor: Code refactoring
docs:     Documentation
chore:    Maintenance tasks

Beispiele:
feat: add startup card component
fix: filter dropdown close on click outside
style: dark mode hover effects
docs: update README with setup instructions
```

### Labels

| Label | Farbe | Zweck |
|-------|-------|-------|
| `feature` | 🟢 Green | Neue Features |
| `bug` | 🔴 Red | Bugs |
| `design` | 💜 Purple | Design/UI |
| `priority-high` | 🔴 Red | Wichtig |
| `priority-medium` | 🟡 Yellow | Mittel |
| `good first issue` | 💙 Blue | Für Einsteiger |

---

## 📂 Projekt-Struktur

```
healthstart-de/
│
├── .github/
│   └── workflows/
│       ├── ci.yml              # Tests + Linting
│       └── deploy.yml          # Vercel deploy
│
├── .husky/
│   └── pre-commit              # Lint before commit
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── og-image.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root Layout
│   │   ├── page.tsx            # Landing Page
│   │   ├── globals.css         # Global styles
│   │   │
│   │   ├── startups/
│   │   │   ├── page.tsx        # Startups Redirect
│   │   │   ├── de/
│   │   │   │   └── page.tsx    # German Startups
│   │   │   ├── international/
│   │   │   │   └── page.tsx    # International Startups
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Startup Profile
│   │   │
│   │   ├── news/
│   │   │   ├── page.tsx        # News Overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # News Article
│   │   │
│   │   ├── submit/
│   │   │   └── page.tsx        # Submit Startup Form
│   │   │
│   │   └── api/
│   │       ├── startups/
│   │       │   └── route.ts    # Startups API
│   │       └── search/
│   │           └── route.ts    # Search API
│   │
│   ├── components/
│   │   ├── ui/                 # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   └── dropdown-menu.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── startup/
│   │   │   ├── StartupCard.tsx
│   │   │   ├── StartupGrid.tsx
│   │   │   ├── StartupProfile.tsx
│   │   │   └── StartupFilters.tsx
│   │   │
│   │   ├── news/
│   │   │   ├── NewsCard.tsx
│   │   │   └── NewsGrid.tsx
│   │   │
│   │   └── shared/
│   │       ├── SearchModal.tsx
│   │       ├── TabSwitcher.tsx
│   │       ├── StatCard.tsx
│   │       └── LoadingSpinner.tsx
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts       # Browser client
│   │   │   ├── server.ts       # Server client
│   │   │   └── admin.ts        # Admin client (service role)
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   ├── hooks/
│   │   ├── useStartups.ts
│   │   ├── useSearch.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── types/
│   │   ├── startup.ts
│   │   ├── news.ts
│   │   └── api.ts
│   │
│   └── styles/
│       └── animations.ts       # Framer Motion variants
│
├── supabase/
│   ├── migrations/
│   │   ├── 001_create_startups.sql
│   │   ├── 002_create_founders.sql
│   │   └── 003_create_news.sql
│   ├── seed/
│   │   └── initial_startups.sql
│   └── config.toml
│
├── .env.local                  # Local environment
├── .env.example                # Template
├── .gitignore
├── components.json             # shadcn config
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── README.md
└── LICENSE
```

---

## 🗄️ Database Schema

### Supabase Tables

```sql
-- ============================================
-- 1. STARTUPS
-- ============================================
CREATE TABLE startups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Basic Info
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  
  -- Links
  website TEXT,
  logo_url TEXT,
  crunchbase_url TEXT,
  linkedin_url TEXT,
  
  -- Financial
  funding DECIMAL DEFAULT 0,
  funding_round TEXT,
  revenue DECIMAL,
  
  -- Classification
  stage TEXT CHECK (stage IN ('pre-seed', 'seed', 'series-a', 'series-b', 'series-c', 'growth', 'exit')),
  industry TEXT[],
  business_model TEXT CHECK (business_model IN ('b2b', 'b2c', 'b2b2c', 'marketplace', 'saas')),
  
  -- Meta
  founded_year INT,
  team_size INT,
  location TEXT,
  country TEXT DEFAULT 'DE',
  is_international BOOLEAN DEFAULT FALSE,
  
  -- Status
  featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_startups_slug ON startups(slug);
CREATE INDEX idx_startups_stage ON startups(stage);
CREATE INDEX idx_startups_country ON startups(country);
CREATE INDEX idx_startups_featured ON startups(featured);
CREATE INDEX idx_startups_created ON startups(created_at DESC);

-- ============================================
-- 2. FOUNDERS
-- ============================================
CREATE TABLE founders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
  
  name TEXT NOT NULL,
  role TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  bio TEXT,
  
  is_current BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_founders_startup ON founders(startup_id);

-- ============================================
-- 3. NEWS
-- ============================================
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE SET NULL,
  
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  
  category TEXT CHECK (category IN ('funding', 'partnership', 'product', 'exit', 'general')),
  published_at TIMESTAMPTZ DEFAULT NOW(),
  is_featured BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_news_startup ON news(startup_id);
CREATE INDEX idx_news_published ON news(published_at DESC);

-- ============================================
-- 4. STATS VIEW (Materialized)
-- ============================================
CREATE MATERIALIZED VIEW stats AS
SELECT 
  COUNT(*) AS total_startups,
  COALESCE(SUM(funding), 0) AS total_funding,
  COUNT(*) FILTER (WHERE founded_year = EXTRACT(YEAR FROM NOW())) AS founded_this_year,
  COUNT(*) FILTER (WHERE is_international = FALSE) AS german_startups
FROM startups
WHERE is_active = TRUE;

-- Refresh stats (run periodically)
REFRESH MATERIALIZED VIEW stats;
```

---

## 🚀 Programming Roadmap

### Sprint 1: Setup & Foundation (Tag 1-2)

| Task | Zeit | Status |
|------|------|--------|
| GitHub Repo erstellen | 15 min | ⬜ |
| Next.js Projekt initialisieren | 30 min | ⬜ |
| Tailwind + shadcn/ui Setup | 30 min | ⬜ |
| Supabase Projekt erstellen | 30 min | ⬜ |
| Database Migrations ausführen | 30 min | ⬜ |
| Environment Variables Setup | 15 min | ⬜ |
| TypeScript Config | 15 min | ⬜ |

**Commands:**

```bash
# 1. Repo erstellen
gh repo create healthstart-de --public --clone
cd healthstart-de

# 2. Next.js Setup
pnpm create next-app@latest . --typescript --tailwind --app --src-dir

# 3. Dependencies installieren
pnpm add @supabase/supabase-js framer-motion lucide-react
pnpm add -D @types/node

# 4. shadcn/ui Setup
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card badge input dropdown-menu

# 5. Supabase CLI
pnpm dlx supabase login
pnpm dlx supabase init
pnpm dlx supabase start
```

---

### Sprint 2: Core Components (Tag 3-5)

| Component | Zeit | Dependencies |
|-----------|------|--------------|
| Header (Navigation) | 2h | Framer Motion |
| Footer | 1h | — |
| StartupCard | 2h | Card, Badge |
| StartupGrid | 1h | StartupCard |
| TabSwitcher | 1h | — |
| FilterDropdown | 2h | Dropdown Menu |
| SearchModal | 3h | Dialog, Input |

---

### Sprint 3: Pages (Tag 6-8)

| Page | Zeit | Components |
|------|------|------------|
| Landing Page (/) | 4h | Header, StartupGrid, Stats |
| Startups DE (/startups/de) | 3h | Grid, Filters |
| Startups Int. (/startups/international) | 1h | Same as DE |
| Startup Profile (/startup/[slug]) | 4h | Profile Layout |
| News (/news) | 3h | NewsGrid |

---

### Sprint 4: Data & API (Tag 9-10)

| Task | Zeit |
|------|------|
| Supabase Client Setup | 1h |
| API Routes erstellen | 2h |
| useStartups Hook | 2h |
| useSearch Hook | 2h |
| Initial Seed Data | 2h |

---

### Sprint 5: Polish & Deploy (Tag 11-14)

| Task | Zeit |
|------|------|
| Animations hinzufügen | 3h |
| Mobile Responsive | 4h |
| SEO Optimization | 2h |
| Error Handling | 2h |
| Loading States | 1h |
| Vercel Deploy | 1h |
| Domain Setup | 1h |

---

## 🔄 API Routes

### GET /api/startups

```typescript
// src/app/api/startups/route.ts

import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const country = searchParams.get('country') // 'de' | 'international'
  const stage = searchParams.get('stage')
  const industry = searchParams.get('industry')
  const location = searchParams.get('location')
  const sort = searchParams.get('sort') || 'created_at'
  const limit = parseInt(searchParams.get('limit') || '20')
  const offset = parseInt(searchParams.get('offset') || '0')
  
  const supabase = createClient()
  
  let query = supabase
    .from('startups')
    .select('*')
    .eq('is_active', true)
    
  if (country === 'de') {
    query = query.eq('is_international', false)
  } else if (country === 'international') {
    query = query.eq('is_international', true)
  }
  
  if (stage) query = query.eq('stage', stage)
  if (industry) query = query.contains('industry', [industry])
  if (location) query = query.eq('location', location)
  
  const { data, error } = await query
    .order(sort, { ascending: sort === 'name' })
    .range(offset, offset + limit - 1)
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ startups: data })
}
```

### GET /api/startups/[slug]

```typescript
// src/app/api/startups/[slug]/route.ts

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const supabase = createClient()
  
  const { data: startup, error } = await supabase
    .from('startups')
    .select(`
      *,
      founders (*),
      news (*)
    `)
    .eq('slug', params.slug)
    .single()
  
  if (error || !startup) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  
  return NextResponse.json({ startup })
}
```

### GET /api/search

```typescript
// src/app/api/search/route.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] })
  }
  
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('startups')
    .select('id, name, slug, tagline, stage, location')
    .or(`name.ilike.%${q}%,tagline.ilike.%${q}%`)
    .limit(10)
  
  return NextResponse.json({ results: data })
}
```

---

## 🎨 Styling Patterns

### Tailwind Dark Mode Classes

```typescript
// Beispiel: StartupCard.tsx

<div className="
  group
  relative
  bg-neutral-900
  border
  border-neutral-800
  rounded-2xl
  p-6
  transition-all
  duration-150
  hover:border-blue-500/50
  hover:bg-neutral-800
  hover:scale-[1.02]
  hover:shadow-lg
  hover:shadow-blue-500/10
  cursor-pointer
">
  {/* Logo */}
  <div className="
    w-16 h-16
    rounded-xl
    bg-neutral-800
    flex items-center justify-center
    mb-4
  ">
    <Image src={logo} alt={name} width={48} height={48} />
  </div>
  
  {/* Name */}
  <h3 className="
    text-lg
    font-medium
    text-neutral-100
    group-hover:text-white
  ">
    {name}
  </h3>
  
  {/* Tagline */}
  <p className="
    text-sm
    text-neutral-400
    mt-1
    line-clamp-2
  ">
    {tagline}
  </p>
  
  {/* Badges */}
  <div className="flex gap-2 mt-4">
    <Badge variant="primary">{funding}</Badge>
    <Badge variant="default">{stage}</Badge>
  </div>
</div>
```

---

## 🌐 Vercel Deployment

### Setup

```bash
# Vercel CLI
pnpm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

### Environment Variables (Vercel Dashboard)

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Domain Setup

1. Vercel Dashboard → Project → Settings → Domains
2. Add: `healthstart.de` (oder ähnlich)
3. Configure DNS (A-Record oder CNAME)

---

## ✅ Development Checklist

### Vor jedem Commit

- [ ] `pnpm lint` läuft durch
- [ ] `pnpm build` erfolgreich
- [ ] TypeScript keine Errors
- [ ] Mobile Responsive getestet

### Vor Deploy

- [ ] Alle Pages testen
- [ ] API Routes testen
- [ ] SEO Meta Tags
- [ ] Open Graph Images
- [ ] Favicon gesetzt
- [ ] Error Pages (404, 500)

---

*Ready to code. Start with Sprint 1.*