-- ============================================
-- HealthStart DE Database Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Refresh function (call periodically or on insert)
CREATE OR REPLACE FUNCTION refresh_stats()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW stats;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 5. ROW LEVEL SECURITY
-- ============================================
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE founders ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read startups" ON startups
  FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Public read founders" ON founders
  FOR SELECT USING (TRUE);

CREATE POLICY "Public read news" ON news
  FOR SELECT USING (TRUE);

-- ============================================
-- 6. TRIGGERS
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER startups_updated_at
  BEFORE UPDATE ON startups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();