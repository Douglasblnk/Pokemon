export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/eslint-module',
  ],
  srcDir: './src',
  serverDir: './server',
})
