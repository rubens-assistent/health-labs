'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Sparkles,
  ArrowRight,
  Star,
  Newspaper,
  Heart,
  Brain,
  Microscope,
  Pill,
  Activity
} from 'lucide-react'
import { startups, calculateStats } from '@/lib/startups-data'
import { StartupCard } from '@/components/StartupCard'
import { StatsCard } from '@/components/ui/Card'
import { CategoryBadge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HomePage() {
  const stats = calculateStats()
  const featuredStartups = startups.filter(s => s.featured).slice(0, 3)
  
  const categories = [
    { name: 'Digital Health', count: 4, icon: <Activity className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'MedTech', count: 2, icon: <Microscope className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { name: 'AI Diagnostics', count: 2, icon: <Brain className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { name: 'Mental Health', count: 2, icon: <Heart className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { name: 'FemTech', count: 1, icon: <Sparkles className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' },
    { name: 'DTx', count: 3, icon: <Pill className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
  ]

  const newsItems = [
    {
      id: '1',
      title: 'Kaia Health erreicht €75M Series B',
      excerpt: 'Das Münchner Digital-Health-Startup schließt eine der größten Finanzierungsrunden des Jahres ab.',
      category: 'Funding',
      date: '15. März 2024'
    },
    {
      id: '2',
      title: 'Ada Health expandiert nach Lateinamerika',
      excerpt: 'Die Berliner KI-Gesundheits-App erweitert ihre internationale Präsenz.',
      category: 'News',
      date: '10. März 2024'
    }
  ]

  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative hero-gradient">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        {/* Navigation */}
        <header className="relative z-10 border-b border-white/5">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">HealthStart DE</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/startups"
                className="text-neutral-400 hover:text-white transition-colors font-medium"
              >
                Startups
              </Link>
              <Link
                href="/news"
                className="text-neutral-400 hover:text-white transition-colors font-medium"
              >
                News
              </Link>
              <Button variant="primary" size="sm" href="/submit">
                Startup eintragen
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400">
                <Star className="w-4 h-4 text-yellow-400" />
                Das führende HealthTech-Verzeichnis Deutschlands
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">Deutsche HealthTech</span>
              <br />
              <span className="text-white">Startups entdecken</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed"
            >
              Das Verzeichnis für Healthcare Innovation in Deutschland. Finde Funding-Daten, 
              Teams und Trends in MedTech, Digital Health und BioTech.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" href="/startups">
                Startups entdecken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg" href="/news">
                News lesen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<Building2 className="w-6 h-6" />}
              value={stats.totalStartups}
              label="Startups gelistet"
              trend="up"
              trendValue="+12%"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<TrendingUp className="w-6 h-6" />}
              value={`€${stats.totalFunding}`}
              label="Gesamt-Funding"
              trend="up"
              trendValue="+28%"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<Users className="w-6 h-6" />}
              value={stats.avgTeamSize}
              label="Ø Teamgröße"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<Sparkles className="w-6 h-6" />}
              value="2024"
              label="Aktualisiert"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Startups */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Startups</h2>
            <p className="text-neutral-400">Die vielversprechendsten HealthTech-Unternehmen</p>
          </div>
          <Link
            href="/startups"
            className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Alle anzeigen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStartups.map((startup, index) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StartupCard startup={startup} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 md:hidden">
          <Link
            href="/startups"
            className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 rounded-xl text-blue-400 hover:text-blue-300 transition-colors"
          >
            Alle Startups anzeigen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Industrien</h2>
          <p className="text-neutral-400">Entdecken Sie Startups nach Bereich</p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((cat, index) => (
            <motion.div key={cat.name} variants={itemVariants}>
              <Link href={`/startups?industry=${cat.name}`}>
                <div className="category-card group h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-neutral-400">{cat.count} Startups</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">So funktioniert's</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Finden Sie das perfekte HealthTech Startup in drei einfachen Schritten
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              01
            </div>
            <div className="pt-16">
              <h3 className="text-xl font-semibold text-white mb-2">Durchsuchen</h3>
              <p className="text-neutral-400">
                Stöbern Sie durch unser kuratiertes Verzeichnis deutscher HealthTech Startups.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              02
            </div>
            <div className="pt-16">
              <h3 className="text-xl font-semibold text-white mb-2">Filtern</h3>
              <p className="text-neutral-400">
                Nutzen Sie Filter nach Industrie, Funding-Stage oder Standort.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
              03
            </div>
            <div className="pt-16">
              <h3 className="text-xl font-semibold text-white mb-2">Verbinden</h3>
              <p className="text-neutral-400">
                Kontaktieren Sie Startups direkt oder erfahren Sie mehr über ihr Geschäftsmodell.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <Newspaper className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Aktuelle News</h2>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Alle News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <CategoryBadge category={news.category} />
                <span className="text-sm text-neutral-500">{news.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-neutral-400 line-clamp-2">{news.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Startup eintragen?
            </h3>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              Kennen Sie ein HealthTech Startup das fehlt? Tragen Sie es kostenlos ein und erhöhen Sie die Sichtbarkeit.
            </p>
            <Button variant="gradient" size="lg" href="/submit">
              Jetzt eintragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">HealthStart DE</span>
              </Link>
              <p className="text-neutral-400 text-sm max-w-md">
                Das führende Verzeichnis für HealthTech Startups in Deutschland. 
                Entdecken Sie innovative Unternehmen in MedTech, Digital Health und BioTech.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li><Link href="/startups" className="text-neutral-400 hover:text-white transition-colors text-sm">Startups</Link></li>
                <li><Link href="/news" className="text-neutral-400 hover:text-white transition-colors text-sm">News</Link></li>
                <li><Link href="/submit" className="text-neutral-400 hover:text-white transition-colors text-sm">Startup eintragen</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link href="/impressum" className="text-neutral-400 hover:text-white transition-colors text-sm">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-neutral-400 hover:text-white transition-colors text-sm">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8">
            <p className="text-neutral-500 text-center text-sm">
              © 2024 HealthStart DE. German HealthTech Startup Directory.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}