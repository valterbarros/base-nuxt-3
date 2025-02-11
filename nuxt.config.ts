// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
  ],
  imports: {
    autoImport: true,
    global: true
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default,
    strategy: 'prefix',
    defaultLocale: 'en',
  }
})
