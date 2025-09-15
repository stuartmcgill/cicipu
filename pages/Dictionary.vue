<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import BrowsePanel from '~/components/dictionary/BrowsePanel.vue'
import { useDebounceFn } from '@vueuse/core'

// definePageMeta({
//   layout: 'dictionary'
// })

const appStore = useAppStore()
//appStore.backgroundImage = 'literacy-chiefs.jpg'
appStore.backgroundImage = ''

const store = useDictionaryStore()
store.resetSearchResults()

const isOpen = ref(appStore.isDesktop.value)

watch(appStore.isDesktop, (isDesktop) => {
  if (isDesktop) {
    isOpen.value = true
  }
})

const searchTerm = ref('')

const search = useDebounceFn((term: string) => {
  if (!searchTerm.value) {
    store.resetSearchResults()

    return
  }

  store.search(searchTerm.value)
}, 500)

watch(searchTerm, (val) => search(val))
</script>

<template>
  <div>
    <ClientOnly>
      <BrowsePanel v-model="isOpen" />
    </ClientOnly>
    <h1>Cicipu dictionary</h1>
    <div class="flex items-center gap-2">
      <UButton label="Browse" @click="isOpen = true" />
      <UInput
        v-model="searchTerm"
        type="text"
        size="md"
        icon="i-heroicons-magnifying-glass"
        @input="search"
      />
    </div>

    <h2 v-if="store.searchTerm">
      Search results for <span class="font-normal">{{ store.searchTerm }}</span>
    </h2>

    <div v-if="store.pending">Loading...</div>
    <div v-else-if="store.error">
      Error loading data: {{ store.error.message || store.error }}
    </div>
    <ul v-else>
      <li v-for="result in store.searchResults" class="font-vernacular">
        {{ result.lexeme_entries.citationOrtho }}
      </li>
    </ul>
  </div>
</template>
