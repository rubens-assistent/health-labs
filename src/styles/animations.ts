import { type Variants } from 'framer-motion'

// Fade in animation
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// Fade in from bottom
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

// Slide in from left
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}

// Scale in
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

// Stagger container for lists
export const staggerContainer: Variants = {
  animate: {
    staggerChildren: 0.05,
  },
}

// Card hover animation
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
}

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

// Spring config for smooth animations
export const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

// Ease config for standard animations
export const easeConfig = {
  duration: 0.15,
  ease: 'easeOut',
}