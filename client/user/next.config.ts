import type { NextConfig } from 'next'
const path = require('path');

const nextConfig: NextConfig = {
  images: {
    domains: ['ibb.co'],
    formats: ['image/webp'],
  },

webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.webpack-cache'),
    };
    return config;
  },
}

export default nextConfig
