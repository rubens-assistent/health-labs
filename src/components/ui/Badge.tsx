'use client'

import { motion } from 'framer-motion'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-neutral-500/15 text-neutral-400 border-neutral-500/20',
  primary: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  success: 'bg-green-500/15 text-green-400 border-green-500/20',
  warning: 'bg-orange-500/15 text-orange-400 border-orange-500/20',
  danger: 'bg-red-500/15 text-red-400 border-red-500/20',
  info: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  icon
}: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center gap-1.5 rounded-full font-medium border
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.span>
  )
}

// Stage-specific badges
interface StageBadgeProps {
  stage: string
  className?: string
}

const stageStyles: Record<string, { bg: string; text: string; border: string }> = {
  'Pre-Seed': { 
    bg: 'bg-neutral-500/15', 
    text: 'text-neutral-400', 
    border: 'border-neutral-500/20' 
  },
  'Seed': { 
    bg: 'bg-green-500/15', 
    text: 'text-green-400', 
    border: 'border-green-500/20' 
  },
  'Series A': { 
    bg: 'bg-blue-500/15', 
    text: 'text-blue-400', 
    border: 'border-blue-500/20' 
  },
  'Series B': { 
    bg: 'bg-purple-500/15', 
    text: 'text-purple-400', 
    border: 'border-purple-500/20' 
  },
  'Series C': { 
    bg: 'bg-orange-500/15', 
    text: 'text-orange-400', 
    border: 'border-orange-500/20' 
  },
  'Series C+': { 
    bg: 'bg-orange-500/15', 
    text: 'text-orange-400', 
    border: 'border-orange-500/20' 
  },
}

export function StageBadge({ stage, className = '' }: StageBadgeProps) {
  const style = stageStyles[stage] || stageStyles['Pre-Seed']
  
  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
      ${style.bg} ${style.text} ${style.border}
      ${className}
    `}>
      {stage}
    </span>
  )
}

// Category badge for news
interface CategoryBadgeProps {
  category: string
  className?: string
}

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  'Funding': { 
    bg: 'bg-green-500/15', 
    text: 'text-green-400', 
    border: 'border-green-500/20' 
  },
  'News': { 
    bg: 'bg-blue-500/15', 
    text: 'text-blue-400', 
    border: 'border-blue-500/20' 
  },
  'Analysis': { 
    bg: 'bg-purple-500/15', 
    text: 'text-purple-400', 
    border: 'border-purple-500/20' 
  },
  'Launch': { 
    bg: 'bg-orange-500/15', 
    text: 'text-orange-400', 
    border: 'border-orange-500/20' 
  },
}

export function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  const style = categoryStyles[category] || categoryStyles['News']
  
  return (
    <span className={`
      inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border
      ${style.bg} ${style.text} ${style.border}
      ${className}
    `}>
      {category}
    </span>
  )
}

// Funding badge with icon
export function FundingBadge({ amount, className = '' }: { amount: string; className?: string }) {
  return (
    <span className={`
      inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-semibold
      bg-green-500/15 text-green-400 border border-green-500/20
      ${className}
    `}>
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {amount}
    </span>
  )
}