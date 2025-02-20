import { defineNuxtPlugin, useRouter } from 'nuxt/app'
import { createGtm, type VueGtmUseOptions } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxt) => {
  console.log('inside plugin', import.meta.client);
  
  if (import.meta.client) {
    const options = nuxt.$config.public.gtm

    const router = useRouter()

    const pluginOptions: VueGtmUseOptions = {
      ...options,
      vueRouter: options.enableRouterSync && router ? router as VueGtmUseOptions['vueRouter'] : undefined
    }

    console.log('pluginOptions', pluginOptions);
    

    nuxt.vueApp.use(createGtm(pluginOptions))
  }
})
