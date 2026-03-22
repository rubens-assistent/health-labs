import Link from 'next/link'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: 'Funding' | 'News' | 'Analysis' | 'Launch'
  startup?: string
  image?: string
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Kaia Health erreicht €75M Series B Funding',
    excerpt: 'Das Münchner Digital-Health-Startup Kaia Health hat eine Series B Finanzierung von €75M abgeschlossen. Die funds werden für internationale Expansion genutzt.',
    date: '2024-03-15',
    category: 'Funding',
    startup: 'Kaia Health'
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

const categoryColors: Record<string, string> = {
  'Funding': 'bg-green-500/20 text-green-400',
  'News': 'bg-blue-500/20 text-blue-400',
  'Analysis': 'bg-purple-500/20 text-purple-400',
  'Launch': 'bg-orange-500/20 text-orange-400'
}

export default function NewsPage() {
  // Group news by month
  const groupedNews = newsItems.reduce((groups, item) => {
    const date = new Date(item.date)
    const monthYear = date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
    if (!groups[monthYear]) {
      groups[monthYear] = []
    }
    groups[monthYear].push(item)
    return groups
  }, {} as Record<string, NewsItem[]>)

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
              className="text-white font-medium"
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
            HealthTech News
          </h1>
          <p className="text-xl text-neutral-400">
            Die neuesten Nachrichten, Funding-Ankündigungen und Entwicklungen im deutschen HealthTech-Ökosystem.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-6 pb-16">
        {/* Featured Article */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-neutral-800 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
              Featured
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            {newsItems[0].title}
          </h2>
          <p className="text-neutral-400 mb-4 max-w-2xl">
            {newsItems[0].excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span>{new Date(newsItems[0].date).toLocaleDateString('de-DE')}</span>
            {newsItems[0].startup && (
              <>
                <span>•</span>
                <Link href={`/startup/${newsItems[0].startup.toLowerCase().replace(' ', '-')}`} className="text-blue-400 hover:underline">
                  {newsItems[0].startup}
                </Link>
              </>
            )}
          </div>
        </div>

        {/* News List */}
        {Object.entries(groupedNews).map(([month, items]) => (
          <div key={month} className="mb-12">
            <h2 className="text-lg font-semibold text-neutral-400 mb-4 uppercase tracking-wide">
              {month}
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                          {item.category}
                        </span>
                        {item.startup && (
                          <Link 
                            href={`/startup/${item.startup.toLowerCase().replace(' ', '-')}`}
                            className="text-sm text-blue-400 hover:underline"
                          >
                            {item.startup}
                          </Link>
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="text-sm text-neutral-500 shrink-0">
                      {new Date(item.date).toLocaleDateString('de-DE')}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Newsletter abonnieren
            </h3>
            <p className="text-neutral-400 mb-4">
              Erhalten Sie wöchentliche Updates zu neuen Startups und Funding-News.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ihre@email.de"
                className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Anmelden
              </button>
            </div>
          </div>
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