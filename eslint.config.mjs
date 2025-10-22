import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint-config-next/core-web-vitals.js',
      'eslint-config-next/typescript.js'
    ],
  }),
]

export default eslintConfig