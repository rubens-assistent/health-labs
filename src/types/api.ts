// API Types
export interface ApiResponse<T> {
  data: T | null
  error: string | null
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// Filter Types
export interface StartupFilters {
  stage?: string
  industry?: string
  location?: string
  country?: 'de' | 'international'
  fundingMin?: number
  fundingMax?: number
  foundedYear?: number
}

export interface SortOption {
  field: string
  direction: 'asc' | 'desc'
}