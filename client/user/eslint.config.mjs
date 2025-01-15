import sharedConfig from '@shared/eslint/eslint.config.mjs'
import { Linter } from 'eslint'
/** @type {Linter.Config} */
export default {
  ...sharedConfig,
  rules: {
    ...sharedConfig.rules,
    'no-console': 'warn',
  },
}