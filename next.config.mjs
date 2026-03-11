/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Static export for deployment
  output: 'export',

  // Image optimization configuration (disabled for static export)
  images: {
    unoptimized: true,
  },

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig