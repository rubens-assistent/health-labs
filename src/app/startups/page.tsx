import Link from 'next/link'
import { startups, calculateStats, Startup } from '@/lib/startups-data'
import { StartupCard } from '@/components/StartupCard'

export default function StartupsPage() {
  const stats = calculateStats()
  
  // Group startups by stage
  const featuredStartups = startups.filter(s => s.featured)
  const germanStartups = startups.filter(s => s.country === 'DE')
  
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
              className="text-white transition-colors font-medium"
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
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Deutsche HealthTech Startups
          </h1>
          <p className="text-xl text-neutral-400">
            Entdecken Sie {stats.totalStartups} innovative HealthTech Unternehmen aus Deutschland mit insgesamt {stats.totalFunding}€ Funding.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">{stats.totalStartups}</p>
            <p className="text-sm text-neutral-400">Startups</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">€{stats.totalFunding}</p>
            <p className="text-sm text-neutral-400">Gesamt-Funding</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">{stats.avgTeamSize}</p>
            <p className="text-sm text-neutral-400">Ø Teamgröße</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">{stats.featuredCount}</p>
            <p className="text-sm text-neutral-400">Featured</p>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            ⭐ Featured Startups
          </h2>
          <span className="text-sm text-neutral-400">
            {featuredStartups.length} Startups
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </section>

      {/* All Startups Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Alle Startups
          </h2>
          <span className="text-sm text-neutral-400">
            {germanStartups.length} Startups
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {germanStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-neutral-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
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
      <footer className="border-t border-neutral-800 mt-8">
        <div className="container mx-auto px-6 py-8">
          <p className="text-neutral-500 text-center text-sm">
            © 2024 HealthStart DE. German HealthTech Startup Directory.
          </p>
        </div>
      </footer>
    </main>
  )
}