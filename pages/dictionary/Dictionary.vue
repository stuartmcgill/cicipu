<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import BrowsePanel from '~/components/dictionary/BrowsePanel.vue'
import { useDebounceFn } from '@vueuse/core'
import type { TableColumn } from '#ui/types'

interface SearchRow {
  id: number
  cicipu: string
  partOfSpeech: string
  english: string
  national: string
}

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
//appStore.backgroundImage = 'literacy-chiefs.jpg'
appStore.backgroundImage = ''

const store = useDictionaryStore()
store.resetSearchResults()

const specialChars = ref(['ɓ', 'ɗ', 'ø', 'ƙ'])

const columns = computed(() => {
  let columns: TableColumn[] = [
    {
      key: 'cicipu',
      label: 'Cicipu',
      sortable: true,
      rowClass: 'font-vernacular'
    }
  ]

  if (!appStore.isMobile.value) {
    columns.push({
      key: 'partOfSpeech',
      sortable: true
    })
  }

  columns.push(
    {
      key: 'english',
      label: 'English',
      sortable: true,
      rowClass: 'italic'
    },
    {
      key: 'national',
      label: 'Hausa',
      sortable: true,
      rowClass: 'italic'
    }
  )

  return columns
})

const rows = computed(() => {
  return store.searchResults.map((result) => {
    return {
      id: result.lexemes.id,
      cicipu: result.lexeme_entries.citationOrtho,
      partOfSpeech: result.lexeme_entries.partOfSpeechId,
      english: 'dog',
      national: 'kare'
    }
  })
})

const showLexeme = (row: SearchRow) => {
  navigateTo(`/dictionary/Dictionary/${row.id}`)
}

//const isOpen = ref(appStore.isDesktop.value)
const isOpen = ref(false)
const searchTerm = ref('')
const searchTermRef = ref(null)

const appendSpecialChar = (char: string) => {
  searchTerm.value += char

  const searchEl = searchTermRef.value?.$el?.querySelector('input')
  if (searchEl) {
    searchEl.focus()
  }
}

const search = useDebounceFn((term: string) => {
  if (!searchTerm.value) {
    store.resetSearchResults()

    return
  }

  store.search(searchTerm.value)
}, 500)

watch(searchTerm, (val) => search(val))
//
// watch(appStore.isDesktop, (isDesktop) => {
//   if (isDesktop) {
//     isOpen.value = true
//   }
// })
</script>

<template>
  <div>
    <ClientOnly>
      <BrowsePanel v-model="isOpen" />
    </ClientOnly>
    <h1>Dictionary</h1>
    <div class="flex items-center gap-2">
      <div class="flex flex-col md:flex-row gap-2">
        <div class="flex gap-2">
          <UButton label="Browse" @click="isOpen = true" />
          <UInput
            ref="searchTermRef"
            v-model="searchTerm"
            type="text"
            size="md"
            icon="i-heroicons-magnifying-glass"
            :ui="{ icon: { trailing: { pointer: '' } } }"
            @input="search"
          >
            <template #trailing>
              <UButton
                v-show="searchTerm !== ''"
                color="gray"
                variant="link"
                icon="i-heroicons-x-mark-20-solid"
                :padded="false"
                @click="searchTerm = ''"
              />
            </template>
          </UInput>
        </div>
        <div class="flex gap-2 justify-end">
          <UButton
            v-for="(char, index) in specialChars"
            :key="index"
            :label="char"
            size="md"
            color="gray"
            @click="appendSpecialChar(char)"
          />
        </div>
      </div>
    </div>

    <h2 v-if="store.searchTerm">
      Search results for <span class="font-normal">{{ store.searchTerm }}</span>
    </h2>

    <div v-if="store.pending" class="mt-4">Loading...</div>
    <div v-else-if="store.error">
      Error loading data: {{ store.error.message || store.error }}
    </div>
    <ul v-else>
      <UTable
        :rows="rows"
        :columns="columns"
        class="cursor-pointer"
        @select="showLexeme"
      />
    </ul>
  </div>
</template>
