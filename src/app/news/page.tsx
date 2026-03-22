'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  Sparkles, 
  Search,
  Mail,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CategoryBadge } from '@/components/ui/Badge'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: 'Funding' | 'News' | 'Analysis' | 'Launch'
  startup?: string
  featured?: boolean
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Kaia Health erreicht €75M Series B Funding',
    excerpt: 'Das Münchner Digital-Health-Startup Kaia Health hat eine Series B Finanzierung von €75M abgeschlossen. Die funds werden für internationale Expansion genutzt.',
    date: '2024-03-15',
    category: 'Funding',
    startup: 'Kaia Health',
    featured: true
  },
  {
    id: '2',
    title: 'Ada Health expandiert nach Lateinamerika',
    excerpt: 'Berlin-basiertes Ada Health kündigt Expansion nach Brasilien und Mexiko an. Die KI-basierte Gesundheits-App erreicht nun über 13 Millionen Nutzer weltweit.',
    date: '2024-03-10',
    category: 'News',
    startup: 'Ada Health'
  },
  {
    id: '3',
    title: 'DTx-Markt in Deutschland wächst um 45%',
    excerpt: 'Der deutsche Markt für Digitale Gesundheitsanwendungen wächst rasant. 2024 wurden bereits 33 DiGAs von der BfArM gelistet.',
    date: '2024-03-08',
    category: 'Analysis'
  },
  {
    id: '4',
    title: 'Clue erhält BSI-Zertifizierung',
    excerpt: 'Die Berliner FemTech App Clue hat die BSI-Zertifizierung für Datenschutz erhalten. Dies stärkt die Position als führende Perioden-Tracking-App in Europa.',
    date: '2024-03-05',
    category: 'News',
    startup: 'Clue'
  },
  {
    id: '5',
    title: 'HelloBetter launcht neue Depression-Kurs',
    excerpt: 'HelloBetter erweitert sein Angebot um einen neuen digitalen Gesundheitskurs für Depressionen. Der Kurs wurde in Zusammenarbeit mit der FU Berlin entwickelt.',
    date: '2024-03-01',
    category: 'Launch',
    startup: 'HelloBetter'
  },
  {
    id: '6',
    title: 'HealthTech Investitionen in Deutschland 2024',
    excerpt: 'Eine Analyse der HealthTech Investitionen in Deutschland im ersten Quartal 2024 zeigt eine starke Fokussierung auf AI-Diagnostik und Digitale Therapien.',
    date: '2024-02-28',
    category: 'Analysis'
  },
  {
    id: '7',
    title: 'Curetis erzielt Durchbruch bei antibiotikaresistenten Infektionen',
    excerpt: 'Münchener MedTech Unternehmen Curetis meldet erfolgreiches Diagnostik-Ergebnis bei MRSA-Frührekennung mit der Unyvero Platform.',
    date: '2024-02-20',
    category: 'News',
    startup: 'Curetis'
  },
  {
    id: '8',
    title: 'Mindable Health erhält DiGA-Status',
    excerpt: 'Mindable Health ist nun offiziell als Digitale Gesundheitsanwendung gelistet. Die App hilft bei der Behandlung von Panikstörungen.',
    date: '2024-02-15',
    category: 'Launch',
    startup: 'Mindable Health'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')
  
  // Filter news
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'Alle' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  
  // Group news by month
  const groupedNews = filteredNews.reduce((groups, item) => {
    const date = new Date(item.date)
    const monthYear = date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
    if (!groups[monthYear]) {
      groups[monthYear] = []
    }
    groups[monthYear].push(item)
    return groups
  }, {} as Record<string, NewsItem[]>)
  
  const featuredNews = newsItems.find(n => n.featured)
  
  const categories = ['Alle', 'Funding', 'News', 'Analysis', 'Launch']
  
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
                className="text-neutral-400 hover:text-white transition-colors font-medium"
              >
                Startups
              </Link>
              <Link
                href="/news"
                className="text-white font-medium"
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
              HealthTech News
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Die neuesten Nachrichten, Funding-Ankündigungen und Entwicklungen 
              im deutschen HealthTech-Ökosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              placeholder="News durchsuchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-white/5 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-neutral-900 text-neutral-400 border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && !searchQuery && selectedCategory === 'Alle' && (
        <section className="container mx-auto px-6 py-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/5" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                  Featured
                </span>
                <CategoryBadge category={featuredNews.category} />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredNews.title}
              </h2>
              <p className="text-neutral-400 mb-6 max-w-2xl leading-relaxed">
                {featuredNews.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredNews.date).toLocaleDateString('de-DE')}
                </span>
                {featuredNews.startup && (
                  <>
                    <span>•</span>
                    <Link 
                      href={`/startup/${featuredNews.startup.toLowerCase().replace(' ', '-')}`}
                      className="text-blue-400 hover:underline"
                    >
                      {featuredNews.startup}
                    </Link>
                  </>
                )}
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  5 min Lesezeit
                </span>
              </div>
            </div>
          </motion.article>
        </section>
      )}

      {/* News Grid */}
      <section className="container mx-auto px-6 pb-16">
        {Object.entries(groupedNews).map(([month, items]) => (
          <div key={month} className="mb-12">
            <h2 className="text-lg font-semibold text-neutral-400 mb-6 uppercase tracking-wide flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {month}
            </h2>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-4"
            >
              {items.map((item) => (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Link href={`/news/${item.id}`}>
                    <div className="relative bg-neutral-900/50 border border-white/5 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                      {/* Gradient border on hover */}
                      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <CategoryBadge category={item.category} />
                            {item.startup && (
                              <Link 
                                href={`/startup/${item.startup.toLowerCase().replace(' ', '-')}`}
                                className="text-sm text-blue-400 hover:underline"
                              >
                                {item.startup}
                              </Link>
                            )}
                          </div>
                          
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-neutral-400 text-sm line-clamp-2">
                            {item.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-neutral-500 md:text-right shrink-0">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.date).toLocaleDateString('de-DE')}
                          </span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        ))}
        
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Keine News gefunden</h3>
            <p className="text-neutral-400 mb-4">Versuchen Sie andere Suchbegriffe</p>
            <Button
              variant="secondary"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('Alle')
              }}
            >
              Filter zurücksetzen
            </Button>
          </motion.div>
        )}
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/5" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Newsletter abonnieren
              </h3>
              <p className="text-neutral-400 mb-6">
                Erhalten Sie wöchentliche Updates zu neuen Startups und Funding-News.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="ihre@email.de"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-white/5 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50"
                />
                <Button variant="gradient">
                  Anmelden
                </Button>
              </div>
              <p className="text-xs text-neutral-500 mt-4">
                Kein Spam, jederzeit abmelden.
              </p>
            </div>
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