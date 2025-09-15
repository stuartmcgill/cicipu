<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import BrowsePanel from '~/components/dictionary/BrowsePanel.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = 'literacy-chiefs.jpg'

const store = useDictionaryStore()

const isOpen = ref(appStore.isDesktop.value)

watch(appStore.isDesktop, (isDesktop) => {
  if (isDesktop) {
    isOpen.value = true
  }
})

store.searchTerm = ''
store.searchResults = []
</script>

<template>
  <div>
    <ClientOnly>
      <BrowsePanel v-model="isOpen" />
    </ClientOnly>
    <h1>Cicipu dictionary</h1>
    <UButton label="Browse" class="xl:hidden" @click="isOpen = true" />

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
