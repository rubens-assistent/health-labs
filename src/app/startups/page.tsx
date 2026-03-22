'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  TrendingUp,
  MapPin,
  Users,
  Star,
  Sparkles
} from 'lucide-react'
import { startups, calculateStats, Startup, allStages, allLocations, allIndustries } from '@/lib/startups-data'
import { StartupCard } from '@/components/StartupCard'
import { StatsCard } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StageBadge } from '@/components/ui/Badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function StartupsPage() {
  const stats = calculateStats()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStage, setSelectedStage] = useState('Alle')
  const [selectedLocation, setSelectedLocation] = useState('Alle')
  const [selectedIndustry, setSelectedIndustry] = useState('Alle')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  // Filter startups
  const filteredStartups = startups.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.industry.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesStage = selectedStage === 'Alle' || s.stage === selectedStage
    const matchesLocation = selectedLocation === 'Alle' || s.location === selectedLocation
    const matchesIndustry = selectedIndustry === 'Alle' || s.industry.includes(selectedIndustry)
    
    return matchesSearch && matchesStage && matchesLocation && matchesIndustry
  })
  
  const featuredStartups = startups.filter(s => s.featured)
  const germanStartups = startups.filter(s => s.country === 'DE')
  
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative hero-gradient">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
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
                className="text-white font-medium"
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
        <div className="relative z-10 container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Deutsche HealthTech Startups
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Entdecken Sie {stats.totalStartups} innovative HealthTech Unternehmen 
              aus Deutschland mit insgesamt €{stats.totalFunding} Funding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<TrendingUp className="w-5 h-5" />}
              value={stats.totalStartups}
              label="Startups"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<MapPin className="w-5 h-5" />}
              value={`€${stats.totalFunding}`}
              label="Gesamt-Funding"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<Users className="w-5 h-5" />}
              value={stats.avgTeamSize}
              label="Ø Teamgröße"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard
              icon={<Star className="w-5 h-5" />}
              value={stats.featuredCount}
              label="Featured"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 py-6">
        <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
              <input
                type="text"
                placeholder="Startups suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-800 border border-white/5 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Stage Filter */}
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="px-4 py-2.5 bg-neutral-800 border border-white/5 rounded-lg text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
              >
                {allStages.map((stage) => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
              
              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2.5 bg-neutral-800 border border-white/5 rounded-lg text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
              >
                {allLocations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              
              {/* Industry Filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2.5 bg-neutral-800 border border-white/5 rounded-lg text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
              >
                {allIndustries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
              
              {/* View Mode Toggle */}
              <div className="flex rounded-lg overflow-hidden border border-white/5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2.5 ${viewMode === 'grid' ? 'bg-blue-500/20 text-blue-400' : 'bg-neutral-800 text-neutral-400'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2.5 ${viewMode === 'list' ? 'bg-blue-500/20 text-blue-400' : 'bg-neutral-800 text-neutral-400'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          {(selectedStage !== 'Alle' || selectedLocation !== 'Alle' || selectedIndustry !== 'Alle') && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
              <span className="text-sm text-neutral-500">Aktive Filter:</span>
              {selectedStage !== 'Alle' && (
                <button
                  onClick={() => setSelectedStage('Alle')}
                  className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                >
                  {selectedStage}
                  <span className="text-blue-300">×</span>
                </button>
              )}
              {selectedLocation !== 'Alle' && (
                <button
                  onClick={() => setSelectedLocation('Alle')}
                  className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                >
                  {selectedLocation}
                  <span className="text-blue-300">×</span>
                </button>
              )}
              {selectedIndustry !== 'Alle' && (
                <button
                  onClick={() => setSelectedIndustry('Alle')}
                  className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                >
                  {selectedIndustry}
                  <span className="text-blue-300">×</span>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Featured Startups */}
      {featuredStartups.length > 0 && !searchQuery && selectedStage === 'Alle' && selectedLocation === 'Alle' && selectedIndustry === 'Alle' && (
        <section className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Featured Startups
            </h2>
            <span className="text-sm text-neutral-400">{featuredStartups.length} Startups</span>
          </div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredStartups.map((startup) => (
              <motion.div key={startup.id} variants={itemVariants}>
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* All Startups Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {searchQuery || selectedStage !== 'Alle' || selectedLocation !== 'Alle' || selectedIndustry !== 'Alle' 
              ? `${filteredStartups.length} Ergebnisse` 
              : 'Alle Startups'}
          </h2>
          <span className="text-sm text-neutral-400">{filteredStartups.length} Startups</span>
        </div>
        
        {filteredStartups.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Keine Startups gefunden</h3>
            <p className="text-neutral-400 mb-4">Versuchen Sie andere Filterkriterien</p>
            <Button
              variant="secondary"
              onClick={() => {
                setSearchQuery('')
                setSelectedStage('Alle')
                setSelectedLocation('Alle')
                setSelectedIndustry('Alle')
              }}
            >
              Filter zurücksetzen
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }
          >
            {filteredStartups.map((startup) => (
              <motion.div key={startup.id} variants={itemVariants}>
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Startup eintragen?
            </h3>
            <p className="text-neutral-400 mb-6 max-w-lg mx-auto">
              Kennen Sie ein HealthTech Startup das fehlt? Tragen Sie es kostenlos ein.
            </p>
            <Button variant="gradient" href="/submit">
              Jetzt eintragen
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-8">
        <div className="container mx-auto px-6 py-8">
          <p className="text-neutral-500 text-center text-sm">
            © 2024 HealthStart DE. German HealthTech Startup Directory.
          </p>
        </div>
      </footer>
    </main>
  )
}