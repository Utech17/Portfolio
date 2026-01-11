export default defineNuxtConfig({
  compatibilityDate: '2025-09-11',
  app: {
    head: {
      title: 'Utech17 Portfolio',
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
  ],
  colorMode: {
    classSuffix: '',
  },
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
  css: [
    '/assets/css/style.css',
  ],
  build: {
    transpile: ['primevue', 'pinia-orm'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('ion-'),
    },
  },
})
