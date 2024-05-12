import { defineStore } from 'pinia'

interface InterlinearSettings {
  show: boolean
  showPs: boolean
  showHausa: boolean
}

export const useListenStore = defineStore('listen', {
  state: () => ({
    timestamp: 0 as number,
    interlinearSettings: {
      show: false,
      showPs: true,
      showHausa: false
    } as InterlinearSettings
  })
})
