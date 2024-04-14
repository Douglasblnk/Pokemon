export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/eslint-module',
    '@hebilicious/vue-query-nuxt',
  ],
  srcDir: './src',
  serverDir: './server',
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
