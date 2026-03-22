'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-blue-500 to-blue-600 text-white
    hover:from-blue-600 hover:to-blue-700
    shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30
  `,
  secondary: `
    bg-transparent border border-neutral-700 text-white
    hover:bg-neutral-800 hover:border-neutral-600
  `,
  ghost: `
    bg-transparent text-neutral-400
    hover:bg-neutral-800 hover:text-white
  `,
  gradient: `
    bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white
    bg-size-200 hover:bg-right
    shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-lg',
  lg: 'px-7 py-3.5 text-base rounded-xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  onClick,
  href,
}: ButtonProps) {
  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4\" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 12h2zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  )

  const baseStyles = `
    inline-flex items-center justify-center font-medium
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {content}
    </motion.button>
  )
}

// Icon button for smaller actions
interface IconButtonProps {
  icon: ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  ariaLabel: string
}

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  className = '',
  onClick,
  ariaLabel,
}: IconButtonProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center rounded-lg
        ${variantStyles[variant]}
        ${sizeMap[size]}
        ${className}
      `}
    >
      {icon}
    </motion.button>
  )
}

// CTA Button with gradient animation
export function CTAButton({ children, className = '', href }: { children: ReactNode; className?: string; href: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-center px-8 py-4
        text-lg font-semibold text-white
        rounded-xl overflow-hidden
        ${className}
      `}
    >
      {/* Animated gradient background */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient" />
      
      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </motion.a>
  )
}