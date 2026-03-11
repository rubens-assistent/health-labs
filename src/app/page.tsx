import Link from 'next/link'

export default function HomePage() {
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
              href="/submit"
              className="px-6 py-3 border border-neutral-700 text-white rounded-lg hover:border-neutral-600 transition-colors font-medium"
            >
              Startup eintragen
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-neutral-400 mt-2">Startups gelistet</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">€2.5 Mrd</p>
            <p className="text-neutral-400 mt-2">Gesamt-Funding</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-white">2024</p>
            <p className="text-neutral-400 mt-2">Gegründet</p>
          </div>
        </div>
      </section>

      {/* Featured Startups Placeholder */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Startups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Example Health', stage: 'Series A', funding: '€25M' },
            { name: 'MedTech Demo', stage: 'Seed', funding: '€5M' },
            { name: 'BioTech Sample', stage: 'Series B', funding: '€50M' },
          ].map((startup) => (
            <div
              key={startup.name}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-neutral-800 rounded-lg mb-4" />
              <h3 className="text-lg font-medium text-white">{startup.name}</h3>
              <p className="text-neutral-400 text-sm mt-1">
                {startup.stage} • {startup.funding}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-neutral-500 text-center text-sm">
            © 2024 HealthStart DE. German HealthTech Startup Directory.
          </p>
        </div>
      </footer>
    </main>
  )
}