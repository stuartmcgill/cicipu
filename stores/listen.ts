import { defineStore } from 'pinia'

export const useListenStore = defineStore('listen', {
  state: () => ({
    timestamp: 0 as number,
    advancedView: false as boolean
  })
})
