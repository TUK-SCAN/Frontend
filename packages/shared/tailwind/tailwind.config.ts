import type { Config } from "tailwindcss";
import { colors } from "../../config/color";

const sharedConfig: Config = {
  content: [],
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
