import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HealthStart DE — German HealthTech Startup Directory',
  description:
    'Discover German HealthTech startups. Find funding data, team info, and innovation trends in healthcare, medtech, and digital health.',
  keywords: [
    'HealthTech',
    'Startups',
    'Germany',
    'Healthcare',
    'MedTech',
    'Digital Health',
    'Funding',
    'Investors',
  ],
  authors: [{ name: 'HealthStart DE Team' }],
  openGraph: {
    title: 'HealthStart DE — German HealthTech Startup Directory',
    description:
      'Discover German HealthTech startups. Find funding data, team info, and innovation trends.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthStart DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthStart DE — German HealthTech Startup Directory',
    description:
      'Discover German HealthTech startups. Find funding data, team info, and innovation trends.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}