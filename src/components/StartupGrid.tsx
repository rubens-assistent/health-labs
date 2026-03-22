'use client'

import { useState } from 'react'
import { StartupCard } from './StartupCard'
import { Startup, allStages, filterByStage } from '@/lib/startups-data'

interface StartupGridProps {
  startups: Startup[]
  title?: string
  showFilters?: boolean
}

export function StartupGrid({ startups, title = 'Startups', showFilters = true }: StartupGridProps) {
  const [activeStage, setActiveStage] = useState('Alle')
  
  const filteredStartups = filterByStage(startups, activeStage)
  
  return (
    <div>
      {/* Filter Bar */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-6">
          {allStages.map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeStage === stage
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      )}
      
      {/* Title */}
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      )}
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredStartups.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-400">Keine Startups gefunden</p>
        </div>
      )}
    </div>
  )
}