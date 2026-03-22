'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  onClick?: () => void
}

export function Card({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  onClick 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -4 } : {}}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl p-6
        bg-gradient-to-br from-white/[0.03] to-white/[0.01]
        border border-white/[0.05]
        ${hover ? 'cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl' : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

interface StatsCardProps {
  icon: ReactNode
  value: string | number
  label: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}

export function StatsCard({ icon, value, label, trend, trendValue }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="stats-card group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            trend === 'up' 
              ? 'bg-green-500/20 text-green-400' 
              : trend === 'down'
              ? 'bg-red-500/20 text-red-400'
              : 'bg-neutral-500/20 text-neutral-400'
          }`}>
            {trendValue}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-neutral-400">{label}</p>
    </motion.div>
  )
}

interface FeatureCardProps {
  step: number
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ step, icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: step * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300">
        <div className="flex items-start gap-4">
          <div className="step-badge shrink-0">
            {String(step).padStart(2, '0')}
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3 text-blue-400">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}