import type { Config } from 'tailwindcss'
import { colors } from './src/config/color' // colors.ts에서 가져오기

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config
