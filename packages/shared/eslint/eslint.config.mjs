import { Linter } from "eslint";

/** @type {Linter.Config} */
export default {
  extends: ["next", "next/core-web-vitals", "prettier"],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"],
  },
};
