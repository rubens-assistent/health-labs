'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Users, TrendingUp } from 'lucide-react'
import { Startup, stageColors } from '@/lib/startups-data'

interface StartupCardProps {
  startup: Startup
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

export function StartupCard({ startup }: StartupCardProps) {
  const stageStyle = stageStyles[startup.stage] || stageStyles['Pre-Seed']
  const initials = startup.name.split(' ').map(n => n[0]).join('').slice(0, 2)
  
  return (
    <Link href={`/startup/${startup.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden h-full"
      >
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
        
        {/* Card content */}
        <div className="relative h-full bg-neutral-900 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors duration-300">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Logo */}
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-xl font-bold text-white">
              {initials}
            </span>
          </div>
          
          {/* Name & Tagline */}
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {startup.name}
          </h3>
          <p className="text-neutral-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {startup.tagline}
          </p>
          
          {/* Funding & Stage */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              {startup.funding}
            </span>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${stageStyle.bg} ${stageStyle.text} ${stageStyle.border}`}>
              {startup.stage}
            </span>
          </div>
          
          {/* Location & Team */}
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {startup.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {startup.teamSize} Team
            </span>
          </div>
          
          {/* Industry Tags */}
          <div className="flex flex-wrap gap-1.5">
            {startup.industry.slice(0, 2).map((ind) => (
              <span 
                key={ind}
                className="px-2 py-0.5 bg-white/5 text-neutral-400 text-xs rounded-full border border-white/5"
              >
                {ind}
              </span>
            ))}
            {startup.industry.length > 2 && (
              <span className="px-2 py-0.5 bg-white/5 text-neutral-500 text-xs rounded-full border border-white/5">
                +{startup.industry.length - 2}
              </span>
            )}
          </div>
          
          {/* Featured badge */}
          {startup.featured && (
            <div className="absolute top-4 right-4">
              <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}