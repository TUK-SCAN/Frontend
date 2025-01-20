import type { NextConfig } from 'next'
const path = require('path')

const nextConfig: NextConfig = {
  images: {
    domains: ['ibb.co'],
    formats: ['image/webp'],
  },

  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.webpack-cache'),
    }
    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
