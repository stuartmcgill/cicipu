import { acceptHMRUpdate, defineStore } from 'pinia'

interface SearchResult {
  lexemeId: number
  lexeme: string
  homonymNumber: number
  entryId: number
  citationOrtho: string
  entryType: string
  partOfSpeech: string
  partOfSpeechId: number
  nationalGloss: string
  englishGloss: string
}

interface LastSearch {
  type: 'browse' | 'search'
  term: string
}

export const useDictionaryStore = defineStore('dictionary', {
  state: () => ({
    lastSearch: null as LastSearch | null,
    searchResults: [] as SearchResult[],
    pending: false,
    error: null as string | null
  }),
  actions: {
    resetSearchResults() {
      this.lastSearch = null
      this.searchResults = []
    },

    async browse(letter: string) {
      this.pending = true
      this.error = null

      try {
        const data = await $fetch(
          `/api/browse?letter=${encodeURIComponent(letter)}`
        )
        this.searchResults = data as SearchResult[]
        this.lastSearch = {
          type: 'browse',
          term: letter
        }
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
        this.searchResults = data as SearchResult[]
        this.lastSearch = {
          type: 'search',
          term: term
        }
      } catch (err) {
        this.error = (err as Error).message
        this.searchResults = []
      } finally {
        this.pending = false
      }
    },

    async fetchLexeme(id: number) {
      return await $fetch(`/api/lexeme?id=${id}`)
    },

    async fetchContributors() {
      return await $fetch('/api/contributors')
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDictionaryStore, import.meta.hot))
}
