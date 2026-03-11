// Startup Types
export type Stage =
  | 'pre-seed'
  | 'seed'
  | 'series-a'
  | 'series-b'
  | 'series-c'
  | 'growth'
  | 'exit'

export type BusinessModel = 'b2b' | 'b2c' | 'b2b2c' | 'marketplace' | 'saas'

export interface Startup {
  id: string
  name: string
  slug: string
  tagline: string | null
  description: string | null
  website: string | null
  logo_url: string | null
  crunchbase_url: string | null
  linkedin_url: string | null
  funding: number | null
  funding_round: string | null
  revenue: number | null
  stage: Stage | null
  industry: string[]
  business_model: BusinessModel | null
  founded_year: number | null
  team_size: number | null
  location: string | null
  country: string
  is_international: boolean
  featured: boolean
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Founder {
  id: string
  startup_id: string
  name: string
  role: string | null
  linkedin_url: string | null
  twitter_url: string | null
  bio: string | null
  is_current: boolean
  created_at: string
}

export interface News {
  id: string
  startup_id: string | null
  title: string
  slug: string
  content: string | null
  excerpt: string | null
  image_url: string | null
  category: 'funding' | 'partnership' | 'product' | 'exit' | 'general'
  published_at: string
  is_featured: boolean
  created_at: string
}

export interface StartupWithFounders extends Startup {
  founders: Founder[]
}

export interface StartupWithNews extends Startup {
  news: News[]
}

export interface StartupFull extends Startup {
  founders: Founder[]
  news: News[]
}