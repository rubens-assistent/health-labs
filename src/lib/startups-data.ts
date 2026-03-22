// Deutsche HealthTech Startups - Echte Mock-Daten
export interface Startup {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  logo?: string
  funding: string
  fundingAmount: number
  stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series C+'
  founded: number
  location: string
  country: 'DE' | 'AT' | 'CH' | 'International'
  industry: string[]
  teamSize: number
  businessModel: 'B2B' | 'B2C' | 'B2B2C'
  website: string
  featured: boolean
  founders: { name: string; role: string }[]
}

export const startups: Startup[] = [
  {
    id: '1',
    name: 'Kaia Health',
    slug: 'kaia-health',
    tagline: 'Digitale Therapie für Rückenschmerzen',
    description: 'Kaia Health entwickelt eine digitale Therapie-App für chronische Rückenschmerzen basierend auf kognitiver Verhaltenstherapie und Bewegungsübungen. FDA-geprüft und von über 40 Krankenkassen in Deutschland erstattet.',
    funding: '€75M',
    fundingAmount: 75000000,
    stage: 'Series B',
    founded: 2016,
    location: 'München',
    country: 'DE',
    industry: ['Digital Health', 'Musculoskeletal', 'DTx'],
    teamSize: 180,
    businessModel: 'B2B2C',
    website: 'https://kaiahealth.com',
    featured: true,
    founders: [
      { name: 'Konstantin Mehl', role: 'CEO' },
      { name: 'Manuel Thurner', role: 'Co-Founder' }
    ]
  },
  {
    id: '2',
    name: 'Ada Health',
    slug: 'ada-health',
    tagline: 'KI-gestützte Gesundheitsassistentin',
    description: 'Ada ist eine KI-basierte Gesundheitsapp, die Symptome analysiert und personalisierte Gesundheitsinformationen liefert. Mit über 13 Millionen Nutzern weltweit eine der führenden Health-Apps.',
    funding: '€150M',
    fundingAmount: 150000000,
    stage: 'Series C',
    founded: 2011,
    location: 'Berlin',
    country: 'DE',
    industry: ['AI Diagnostics', 'Symptom Checker', 'Health App'],
    teamSize: 250,
    businessModel: 'B2B2C',
    website: 'https://ada.com',
    featured: true,
    founders: [
      { name: 'Daniel Nathrath', role: 'CEO' },
      { name: 'Martin Hirsch', role: 'Chief Medical Officer' }
    ]
  },
  {
    id: '3',
    name: 'Curetis',
    slug: 'curetis',
    tagline: 'Molekulare Diagnostik für Infektionen',
    description: 'Curetis entwickelt Platformen für molekulare Diagnostik von Infektionskrankheiten. Die Unyvero Platform ermöglicht schnelle Resistenzerkennung direkt aus Patientenproben.',
    funding: '€95M',
    fundingAmount: 95000000,
    stage: 'Series C',
    founded: 2010,
    location: 'München',
    country: 'DE',
    industry: ['MedTech', 'Diagnostics', 'Infectious Disease'],
    teamSize: 200,
    businessModel: 'B2B',
    website: 'https://curetis.com',
    featured: true,
    founders: [
      { name: 'Achim Plum', role: 'CEO' }
    ]
  },
  {
    id: '4',
    name: 'Oxipit',
    slug: 'oxipit',
    tagline: 'KI für medizinische Bildanalyse',
    description: 'Oxipit entwickelt KI-Lösungen für die automatisierte Analyse medizinischer Bilder, insbesondere in der Radiologie. Das Produkt Quality erkennt Fehler in Röntgenbildern.',
    funding: '€15M',
    fundingAmount: 15000000,
    stage: 'Series A',
    founded: 2016,
    location: 'Vilnius/Berlin',
    country: 'DE',
    industry: ['AI Radiology', 'MedTech', 'Imaging'],
    teamSize: 45,
    businessModel: 'B2B',
    website: 'https://oxipit.ai',
    featured: false,
    founders: [
      { name: 'Povilas Sabaliauskas', role: 'CEO' }
    ]
  },
  {
    id: '5',
    name: 'Mindable Health',
    slug: 'mindable-health',
    tagline: 'Digitale Therapie bei Panikstörungen',
    description: 'Mindable Health bietet eine digitale Therapie für Panikstörungen und Panikattacken. Die App nutzt evidenzbasierte Methoden aus der kognitiven Verhaltenstherapie.',
    funding: '€8M',
    fundingAmount: 8000000,
    stage: 'Seed',
    founded: 2019,
    location: 'Berlin',
    country: 'DE',
    industry: ['Mental Health', 'DTx', 'Psychology'],
    teamSize: 35,
    businessModel: 'B2B2C',
    website: 'https://mindable.health',
    featured: false,
    founders: [
      { name: 'Dr. Elena Todorova', role: 'CEO' },
      { name: 'Alexander Hölzl', role: 'Co-Founder' }
    ]
  },
  {
    id: '6',
    name: 'Clue',
    slug: 'clue',
    tagline: 'Perioden- und Zyklus-Tracking',
    description: 'Clue ist eine der weltweit führenden Apps für Menstruations- und Zyklus-Tracking. Die App bietet wissenschaftlich fundierte Einblicke in den weiblichen Zyklus.',
    funding: '€35M',
    fundingAmount: 35000000,
    stage: 'Series B',
    founded: 2013,
    location: 'Berlin',
    country: 'DE',
    industry: ['FemTech', 'Women Health', 'Tracking'],
    teamSize: 75,
    businessModel: 'B2C',
    website: 'https://clue.io',
    featured: true,
    founders: [
      { name: 'Ida Tin', role: 'CEO' }
    ]
  },
  {
    id: '7',
    name: 'HelloBetter',
    slug: 'hellobetter',
    tagline: 'Digitale Gesundheitskurse',
    description: 'HelloBetter (vormals MindDoc) bietet digitale Gesundheitskurse für Depressionen, Angststörungen und Stress. Entwickelt mit der FU Berlin und BARMER.',
    funding: '€25M',
    fundingAmount: 25000000,
    stage: 'Series A',
    founded: 2015,
    location: 'Hamburg',
    country: 'DE',
    industry: ['Mental Health', 'DTx', 'Digital Health'],
    teamSize: 85,
    businessModel: 'B2B2C',
    website: 'https://hellobetter.de',
    featured: false,
    founders: [
      { name: 'Prof. Dr. David Ebert', role: 'Chief Scientist' }
    ]
  },
  {
    id: '8',
    name: 'Nuri Pharma',
    slug: 'nuri-pharma',
    tagline: 'Therapiemanagement für Patienten',
    description: 'Nuri (ehemals Spry.health) entwickelt eine App für die ganzheitliche Therapiebegleitung bei chronischen Erkrankungen wie Multiple Sklerose.',
    funding: '€12M',
    fundingAmount: 12000000,
    stage: 'Series A',
    founded: 2019,
    location: 'Köln',
    country: 'DE',
    industry: ['Chronic Care', 'MedTech', 'DTx'],
    teamSize: 40,
    businessModel: 'B2B2C',
    website: 'https://nurihealth.de',
    featured: false,
    founders: [
      { name: 'Christian Lüttmann', role: 'CEO' }
    ]
  },
  {
    id: '9',
    name: 'DocPlanner Germany',
    slug: 'docplanner',
    tagline: 'Online-Terminbuchung für Ärzte',
    description: 'DocPlanner ist die führende Plattform für Online-Terminbuchungen bei Ärzten in Deutschland. Eltern eine bessere Patientenverwaltung und einfachere Terminfindung.',
    funding: '€450M',
    fundingAmount: 450000000,
    stage: 'Series C',
    founded: 2011,
    location: 'Berlin',
    country: 'DE',
    industry: ['HealthTech', 'SaaS', 'Marketplace'],
    teamSize: 300,
    businessModel: 'B2B',
    website: 'https://docplanner.de',
    featured: false,
    founders: [
      { name: 'Mariusz Gralewski', role: 'CEO' }
    ]
  },
  {
    id: '10',
    name: 'Medineeds',
    slug: 'medineeds',
    tagline: 'B2B-Marktplatz für Medizinprodukte',
    description: 'Medineeds ist der digitale Marktplatz für medizinische Verbrauchsmaterialien und Geräte. Krankenhäuser und Praxen können direkt bestellen.',
    funding: '€5M',
    fundingAmount: 5000000,
    stage: 'Seed',
    founded: 2020,
    location: 'München',
    country: 'DE',
    industry: ['MedTech', 'Marketplace', 'B2B'],
    teamSize: 25,
    businessModel: 'B2B',
    website: 'https://medineeds.com',
    featured: false,
    founders: [
      { name: 'Julian Weidauer', role: 'CEO' }
    ]
  }
]

// Stage colors for UI
export const stageColors: Record<string, string> = {
  'Pre-Seed': 'bg-gray-500/20 text-gray-400',
  'Seed': 'bg-green-500/20 text-green-400',
  'Series A': 'bg-blue-500/20 text-blue-400',
  'Series B': 'bg-purple-500/20 text-purple-400',
  'Series C': 'bg-orange-500/20 text-orange-400',
}

// Filter functions
export function filterByStage(startups: Startup[], stage: string): Startup[] {
  if (stage === 'Alle') return startups
  return startups.filter(s => s.stage === stage)
}

export function filterByLocation(startups: Startup[], location: string): Startup[] {
  if (location === 'Alle') return startups
  return startups.filter(s => s.location === location)
}

export function filterByIndustry(startups: Startup[], industry: string): Startup[] {
  if (industry === 'Alle') return startups
  return startups.filter(s => s.industry.includes(industry))
}

// Get unique values for filters
export const allStages = ['Alle', 'Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C+']
export const allIndustries = ['Alle', 'Digital Health', 'MedTech', 'AI Diagnostics', 'Mental Health', 'FemTech', 'DTx']
export const allLocations = ['Alle', 'Berlin', 'München', 'Hamburg', 'Köln', 'Andere']

// Stats
export function calculateStats() {
  const totalFunding = startups.reduce((sum, s) => sum + s.fundingAmount, 0)
  const avgTeamSize = Math.round(startups.reduce((sum, s) => sum + s.teamSize, 0) / startups.length)
  const featuredCount = startups.filter(s => s.featured).length
  
  return {
    totalStartups: startups.length,
    totalFunding: `${(totalFunding / 1000000).toFixed(0)}M+`,
    avgTeamSize,
    featuredCount
  }
}