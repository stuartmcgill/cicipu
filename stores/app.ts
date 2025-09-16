import { defineStore } from 'pinia'
import { useMediaQuery } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    backgroundImage: '' as string
  }),
  getters: {
    isDesktop: () => useMediaQuery('(min-width: 1280px)'),
    isMobile: () => useMediaQuery('(max-width: 640px)')
  }
})
