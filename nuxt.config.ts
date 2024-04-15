export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/eslint-module',
    '@hebilicious/vue-query-nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: [ '~/assets/css/index.sass' ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Pokémon',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  srcDir: './src',
  serverDir: './server',
  vueQuery: {
    queryClientOptions: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false,
          staleTime: Infinity,
        },
      },
    },
  },
  quasar: {
    iconSet: 'mdi-v6',
    lang: 'pt-BR',
    config: {
      brand: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',

        'dark': 'var(--color-background)',
        'dark-page': 'var(--color-background)',

        'positive': 'var(--color-positive)',
        'negative': 'var(--color-negative)',
        'info': 'var(--color-info)',
        'warning': 'var(--color-warning)',
      },
    },
  },
})
