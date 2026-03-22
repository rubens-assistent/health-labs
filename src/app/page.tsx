import Link from 'next/link'
import { startups, calculateStats } from '@/lib/startups-data'
import { StartupCard } from '@/components/StartupCard'

export default function HomePage() {
  const stats = calculateStats()
  const featuredStartups = startups.filter(s => s.featured).slice(0, 3)
  
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            HealthStart DE
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/startups"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Startups
            </Link>
            <Link
              href="/news"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              News
            </Link>
            <Link
              href="/submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Startup eintragen
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Deutsche HealthTech Startups entdecken
          </h1>
          <p className="text-xl text-neutral-400 mb-8">
            Das Verzeichnis für Healthcare Innovation in Deutschland. Finde
            Funding-Daten, Teams und Trends in MedTech, Digital Health und
            BioTech.
          </p>
          <div className="flex gap-4">
            <Link
              href="/startups"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Startups entdecken
            </Link>
            <Link
              href="/news"
              className="px-6 py-3 border border-neutral-700 text-white rounded-lg hover:border-neutral-600 transition-colors font-medium"
            >
              News lesen
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">{stats.totalStartups}</p>
            <p className="text-neutral-400 mt-2">Startups gelistet</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">€{stats.totalFunding}</p>
            <p className="text-neutral-400 mt-2">Gesamt-Funding</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">{stats.avgTeamSize}</p>
            <p className="text-neutral-400 mt-2">Ø Teamgröße</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">2024</p>
            <p className="text-neutral-400 mt-2">Aktualisiert</p>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">⭐ Featured Startups</h2>
          <Link
            href="/startups"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            Alle anzeigen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Industrien</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Digital Health', count: 4, icon: '📱' },
            { name: 'MedTech', count: 2, icon: '🔬' },
            { name: 'AI Diagnostics', count: 2, icon: '🤖' },
            { name: 'Mental Health', count: 2, icon: '🧠' },
            { name: 'FemTech', count: 1, icon: '👩' },
            { name: 'DTx', count: 3, icon: '💊' },
          ].map((cat) => (
            <Link
              key={cat.name}
              href={`/startups?industry=${cat.name}`}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors"
            >
              <span className="text-2xl mb-2 block">{cat.icon}</span>
              <p className="font-medium text-white">{cat.name}</p>
              <p className="text-sm text-neutral-400">{cat.count} Startups</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">📰 Aktuelle News</h2>
          <Link
            href="/news"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            Alle News
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Funding</span>
            <h3 className="text-lg font-medium text-white mt-3">Kaia Health erreicht €75M Series B</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Das Münchner Digital-Health-Startup schließt eine der größten Finanzierungsrunden des Jahres ab.
            </p>
            <p className="text-neutral-500 text-sm mt-3">15. März 2024</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">News</span>
            <h3 className="text-lg font-medium text-white mt-3">Ada Health expandiert nach Lateinamerika</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Die Berliner KI-Gesundheits-App erweitert ihre internationale Präsenz.
            </p>
            <p className="text-neutral-500 text-sm mt-3">10. März 2024</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-neutral-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Startup eintragen?
          </h3>
          <p className="text-neutral-400 mb-4">
            Kennen Sie ein HealthTech Startup das fehlt? Tragen Sie es kostenlos ein.
          </p>
          <Link
            href="/submit"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Startup eintragen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">HealthStart DE</h4>
              <p className="text-neutral-400 text-sm">
                Das führende Verzeichnis für HealthTech Startups in Deutschland.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/startups" className="text-neutral-400 hover:text-white transition-colors">Startups</Link></li>
                <li><Link href="/news" className="text-neutral-400 hover:text-white transition-colors">News</Link></li>
                <li><Link href="/submit" className="text-neutral-400 hover:text-white transition-colors">Startup eintragen</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="text-neutral-400 hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-neutral-400 hover:text-white transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-neutral-500 text-center text-sm">
            © 2024 HealthStart DE. German HealthTech Startup Directory.
          </p>
        </div>
      </footer>
    </main>
  )
}