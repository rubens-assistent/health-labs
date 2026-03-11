'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Startup, StartupFilters } from '@/types'

export function useStartups(filters?: StartupFilters) {
  const [startups, setStartups] = useState<Startup[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStartups() {
      try {
        const supabase = createClient()
        let query = supabase
          .from('startups')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false })

        if (filters?.stage) {
          query = query.eq('stage', filters.stage)
        }
        if (filters?.industry) {
          query = query.contains('industry', [filters.industry])
        }
        if (filters?.location) {
          query = query.eq('location', filters.location)
        }
        if (filters?.country === 'de') {
          query = query.eq('is_international', false)
        } else if (filters?.country === 'international') {
          query = query.eq('is_international', true)
        }

        const { data, error: fetchError } = await query

        if (fetchError) throw fetchError
        setStartups(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch startups')
      } finally {
        setLoading(false)
      }
    }

    fetchStartups()
  }, [filters])

  return { startups, loading, error }
}