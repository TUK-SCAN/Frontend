import type { Config } from "tailwindcss";
import { colors } from "../../config/color"; // 공통 colors 파일 가져오기

const sharedConfig: Config = {
  content: [
    "./client/user/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./client/admin/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "Arial",
          "sans-serif",
        ],
        pretendard: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
};

export default sharedConfig;
