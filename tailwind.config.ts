import type { Config } from 'tailwindcss'
import { colors } from './src/config/color' // colors.ts에서 가져오기

export default {
  content: [
    './src/app/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          'Pretendard',
          'ui-sans-serif',
          'system-ui',
          'Arial',
          'sans-serif',
        ], // Pretendard 추가
        pretendard: ['Pretendard', 'sans-serif'], // 별도 유틸리티 이름 정의
      },
    },
  },
  plugins: [],
} satisfies Config
