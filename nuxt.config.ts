// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },
  css: ['~/assets/fonts/CharisSIL-webfont.css'],
  typescript: {
    strict: true
  },
  image: {
    format: ['webp']
  },
  googleFonts: {
    families: {
      'DM+Sans': true,
      'Space+Grotesk': true,
      'Charis+SIL': true
    }
  },
  ui: {
    icons: ['heroicons', 'twemoji', 'mdi']
  }
})
