import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
  ],
  imports: {
    autoImport: true,
    global: true,
    presets:[
      {
        from: '@gtm-support/vue-gtm',
        imports: ['useGtm'],
      },
    ],
  },
  experimental: {
    typedPages: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default,
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    bundle: {
      optimizeTranslationDirective: false,
    }
  },
  css: [
    // files from excalibur
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/node_modules/vue-toastification/dist/index.css',
    '@clicksign/excalibur/styles/tokens',
    '@clicksign/excalibur/styles',
  ],
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-09234X',
        enableRouterSync: true,
        loadScript: true,
        enabled: true,
      },
    },
  },
});
