import { defineStore } from 'pinia'
import { useMediaQuery } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    backgroundImage: '' as string
  }),
  getters: {
    isDesktop: (state) => useMediaQuery('(min-width: 1280px)')
  }
})
