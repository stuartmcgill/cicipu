import { acceptHMRUpdate, defineStore } from 'pinia'
import type {
  Lexeme,
  LexemeEntry,
  LexemeEntryType,
  Sense
} from '~/composables/models'

interface SearchResult {
  lexemes: Lexeme
  lexeme_entries: LexemeEntry
  lexeme_entry_types: LexemeEntryType
  senses: Sense
}

export const useDictionaryStore = defineStore('dictionary', {
  state: () => ({
    searchTerm: '',
    searchResults: [] as SearchResult[],
    pending: false,
    error: null as string | null
  }),
  actions: {
    resetSearchResults() {
      this.searchTerm = ''
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
        this.searchResults = data as SearchResult[]
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
