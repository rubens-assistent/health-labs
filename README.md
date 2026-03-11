# HealthStart DE 🚀

> Das HealthTech Startup-Verzeichnis für Deutschland

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat&logo=supabase)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 📖 Übersicht

HealthStart DE ist eine Plattform zur Entdeckung und Präsentation deutscher HealthTech Startups.

**Features:**

- 📊 **Startup-Verzeichnis** — Funding-Daten, Stage, Team, Location
- 🔍 **Filter & Suche** — Nach Industry, Stage, Funding filtern
- 📰 **News & Updates** — Funding-News, Partnerschaften, Exits
- 🌍 **International** — Auch internationale Startups mit DE-Fokus
- 📱 **Responsive Design** — Mobile-first, Desktop-optimiert
- 🌙 **Dark Mode** — Moderne UI mit Dark Mode Standard

---

## 🛠️ Tech Stack

| Layer | Technologie | Beschreibung |
|-------|-------------|--------------|
| **Framework** | [Next.js 14](https://nextjs.org/) | App Router, SSR, SEO |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first, Dark Mode |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) | Accessible, Customizable |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern, Tree-shakeable |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth transitions |
| **Database** | [Supabase](https://supabase.com/) | PostgreSQL + Auth |
| **Hosting** | [Vercel](https://vercel.com/) | Auto-deploy, Edge |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, Efficient |

---

## 📁 Projektstruktur

```
healthstart-de/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Lint + Type Check
│       └── deploy.yml          # Vercel Deploy
│
├── public/                     # Static Assets
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root Layout
│   │   ├── page.tsx            # Landing Page
│   │   └── globals.css         # Global Styles
│   │
│   ├── components/             # React Components
│   │   ├── ui/                 # shadcn/ui Komponenten
│   │   ├── layout/             # Header, Footer, Nav
│   │   ├── startup/            # Startup Cards, Grids
│   │   ├── news/               # News Components
│   │   └── shared/             # Shared Components
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useStartups.ts
│   │   ├── useSearch.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── lib/                    # Utils & Libraries
│   │   ├── supabase/           # Supabase Clients
│   │   ├── utils.ts            # Helper Functions
│   │   └── constants.ts        # App Constants
│   │
│   ├── types/                  # TypeScript Types
│   │   ├── startup.ts
│   │   └── api.ts
│   │
│   └── styles/                 # Animations & Themes
│       └── animations.ts
│
├── supabase/
│   ├── migrations/             # Database Migrations
│   ├── seed/                   # Seed Data
│   └── config.toml             # Supabase Config
│
├── .env.local.example          # Environment Template
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start

### Voraussetzungen

- Node.js 18+ 
- pnpm 9+
- Supabase Account

### Installation

```bash
# Repository klonen
git clone https://github.com/YOUR_USERNAME/healthstart-de.git
cd healthstart-de

# Dependencies installieren
pnpm install

# Environment Variables kopieren
cp .env.local.example .env.local

# .env.local editieren mit Supabase Credentials
# NEXT_PUBLIC_SUPABASE_URL=your-project-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Development Server starten
pnpm dev
```

### Supabase Setup

1. Neues Projekt auf [supabase.com](https://supabase.com) erstellen
2. SQL Migrations ausführen (supabase/migrations/)
3. Seed Data laden (supabase/seed/)
4. Environment Variables setzen

---

## 📊 Database Schema

### Tables

| Table | Beschreibung |
|-------|--------------|
| `startups` | Haupt-Tabelle für Startup-Daten |
| `founders` | Gründer mit Relation zu Startups |
| `news` | News & Updates mit Relation zu Startups |
| `stats` | Materialisierte View für Statistiken |

### Row Level Security

- Public Read Access für alle aktiven Startups
- Admin Write Access via Service Role Key

---

## 🧪 Development

```bash
# Development Server
pnpm dev

# Type Check
pnpm type-check

# Lint
pnpm lint

# Format
pnpm format

# Build
pnpm build
```

---

## 📝 Commit Convention

```
feat:     Neue Features
fix:      Bug fixes
style:    Design/CSS changes
refactor: Code refactoring
docs:     Documentation
chore:    Maintenance tasks
```

---

## 🌐 Deployment

Automatisches Deployment via GitHub Actions + Vercel:

1. Push auf `main` → Production Deploy
2. Push auf `develop` → Preview Deploy

### Vercel Setup

1. Vercel CLI: `pnpm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

---

## 📄 License

MIT License — siehe [LICENSE](LICENSE) für Details.

---

## 👥 Team

| Agent | Rolle |
|-------|-------|
| **Linus 🚀** | Project Owner, Design |
| **Momo 🐶** | Development, Tech |
| **Tony 🔧** | Research, Data |
| **James 🎩** | Coordination |

---

*Keep it simple. Build fast. Iterate.*