<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import BrowsePanel from '~/components/dictionary/BrowsePanel.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = 'literacy-chiefs.jpg'

const store = useDictionaryStore()
const lexemesAsync = await store.listLexemes()

const lexemes = lexemesAsync.data
const pending = lexemesAsync.pending
const error = lexemesAsync.error

const isOpen = ref(appStore.isDesktop.value)

watch(appStore.isDesktop, (isDesktop) => {
  if (isDesktop) {
    isOpen.value = true
  }
})
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

    <!-- Loading state -->
    <div v-if="pending">Loading...</div>

    <!-- Error state -->
    <div v-else-if="error">
      Error loading data: {{ error.message || error }}
    </div>

    <!-- Data display -->
    <ul v-else>
      <li v-for="result in store.searchResults">
        {{ result.Lexeme }}
      </li>
    </ul>
  </div>
</template>
