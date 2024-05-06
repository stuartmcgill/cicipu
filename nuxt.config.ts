// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  image: {
    format: ['webp']
  },
  googleFonts: {
    families: {
      'DM+Sans': true,
      'Space+Grotesk': true
    }
  },
  ui: {
    icons: ['heroicons', 'twemoji']
  }
})
