import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency (EUR)
 */
export function formatCurrency(amount: number | null): string {
  if (amount === null || amount === undefined) return '—'

  if (amount >= 1_000_000_000) {
    return `€${(amount / 1_000_000_000).toFixed(1)}B`
  }
  if (amount >= 1_000_000) {
    return `€${(amount / 1_000_000).toFixed(1)}M`
  }
  if (amount >= 1_000) {
    return `€${(amount / 1_000).toFixed(0)}K`
  }
  return `€${amount}`
}

/**
 * Format a date string
 */
export function formatDate(date: string | null): string {
  if (!date) return '—'
  return new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}