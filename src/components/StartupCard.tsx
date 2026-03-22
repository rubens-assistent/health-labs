import Link from 'next/link'
import { Startup, stageColors } from '@/lib/startups-data'

interface StartupCardProps {
  startup: Startup
}

export function StartupCard({ startup }: StartupCardProps) {
  const stageColor = stageColors[startup.stage] || 'bg-gray-500/20 text-gray-400'
  
  return (
    <Link href={`/startup/${startup.slug}`}>
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group h-full">
        {/* Logo Placeholder */}
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
          <span className="text-2xl font-bold text-white">
            {startup.name.charAt(0)}
          </span>
        </div>
        
        {/* Name & Tagline */}
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {startup.name}
        </h3>
        <p className="text-neutral-400 text-sm mb-3 line-clamp-2">
          {startup.tagline}
        </p>
        
        {/* Funding & Stage */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white font-medium">{startup.funding}</span>
          <span className="text-neutral-500">•</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stageColor}`}>
            {startup.stage}
          </span>
        </div>
        
        {/* Location & Team */}
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <span>{startup.location}</span>
          <span>•</span>
          <span>{startup.teamSize} Team</span>
        </div>
        
        {/* Industry Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {startup.industry.slice(0, 2).map((ind) => (
            <span 
              key={ind}
              className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-xs rounded-full"
            >
              {ind}
            </span>
          ))}
          {startup.industry.length > 2 && (
            <span className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-xs rounded-full">
              +{startup.industry.length - 2}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}