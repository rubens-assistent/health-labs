// App Constants

export const APP_NAME = 'HealthStart DE'
export const APP_DESCRIPTION =
  'Das Verzeichnis für Healthcare Innovation in Deutschland'
export const APP_URL = 'https://healthstart.de'

// Funding stages
export const STAGES = [
  { value: 'pre-seed', label: 'Pre-Seed' },
  { value: 'seed', label: 'Seed' },
  { value: 'series-a', label: 'Series A' },
  { value: 'series-b', label: 'Series B' },
  { value: 'series-c', label: 'Series C' },
  { value: 'growth', label: 'Growth' },
  { value: 'exit', label: 'Exit' },
] as const

// Industries
export const INDUSTRIES = [
  'MedTech',
  'Digital Health',
  'BioTech',
  'PharmaTech',
  'HealthTech',
  'Telemedicine',
  'Healthcare IT',
  'Diagnostics',
  'Medical Devices',
] as const

// German cities (for location filter)
export const GERMAN_CITIES = [
  'Berlin',
  'Munich',
  'Hamburg',
  'Frankfurt',
  'Cologne',
  'Stuttgart',
  'Düsseldorf',
  'Leipzig',
  'Heidelberg',
  'Dresden',
] as const

// Pagination
export const ITEMS_PER_PAGE = 20
export const MAX_ITEMS_PER_PAGE = 100

// Sort options
export const SORT_OPTIONS = [
  { value: 'created_at', label: 'Neueste' },
  { value: 'funding', label: 'Höchstes Funding' },
  { value: 'name', label: 'Name A-Z' },
  { value: 'founded_year', label: 'Gegründet' },
] as const