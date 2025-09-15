import { defineStore } from 'pinia'

export const useDictionaryStore = defineStore('dictionary', {
  state: () => ({}),
  actions: {
    async listLexemes() {
      return useAsyncData('lexemes', () => $fetch('/api/lexemes'))
    },
  },
})
