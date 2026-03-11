'use client'

import { useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

interface SearchResult {
  id: string
  name: string
  slug: string
  tagline: string | null
  stage: string | null
  location: string | null
}

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const search = useCallback(async (query: string) => {
    if (!query || query.length < 2) {
      setResults([])
      return
    }

    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { data, error: fetchError } = await supabase
        .from('startups')
        .select('id, name, slug, tagline, stage, location')
        .or(`name.ilike.%${query}%,tagline.ilike.%${query}%`)
        .eq('is_active', true)
        .limit(10)

      if (fetchError) throw fetchError
      setResults(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed')
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  return { results, loading, error, search }
}