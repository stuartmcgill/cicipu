import { defineStore } from 'pinia'

export const useDictionaryStore = defineStore('dictionary', {
  state: () => ({
    searchTerm: '',
    searchResults: [] as Lexeme[],
    pending: false,
    error: null as string | null
  }),
  actions: {
    async browse(letter: string) {
      this.pending = true
      this.error = null

      try {
        const data = await $fetch(
          `/api/browse?letter=${encodeURIComponent(letter)}`
        )
        this.searchResults = data as Lexeme[]
        this.searchTerm = letter
      } catch (err) {
        this.error = (err as Error).message
        this.searchResults = []
      } finally {
        this.pending = false
      }
    },

    async search(term: string) {
      this.pending = true
      this.error = null

      try {
        const data = await $fetch(
          `/api/search?term=${encodeURIComponent(term)}`
        )
        this.searchResults = data as Array<{ Id: number; Lexeme: any }>
        this.searchTerm = term
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
