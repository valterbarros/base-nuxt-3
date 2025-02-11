import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require,
  test: {
    coverage: {
      provider: 'v8'
    },
    environment: 'nuxt'
  }
})