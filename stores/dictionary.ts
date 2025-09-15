import { defineStore } from 'pinia'

export const useDictionaryStore = defineStore('dictionary', {
  state: () => ({
    searchTerm: '',
    searchResults: [] as Array<{ Id: number; Lexeme: any }>,
    pending: false,
    error: null as string | null
  }),
  actions: {
    async listLexemes() {
      return useAsyncData('lexemes', () => $fetch('/api/lexemes'))
    },
    async browse(letter: string) {
      this.pending = true
      this.error = null

      try {
        const data = await $fetch(
          `/api/browse?letter=${encodeURIComponent(letter)}`
        )
        this.searchResults = data[0] as Array<{ Id: number; Lexeme: any }>
        this.searchTerm = letter
      } catch (err) {
        this.error = (err as Error).message
        this.searchResults = []
      } finally {
        this.pending = false
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDictionaryStore, import.meta.hot))
}
