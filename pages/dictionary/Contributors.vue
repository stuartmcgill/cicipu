<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'
import type { TableRow } from '#ui/types'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''

const store = useDictionaryStore()

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'exampleCount', label: 'Example count' },
  { key: 'languages', label: 'Languages spoken' }
]
const rows: Ref<TableRow[]> = ref([])

onMounted(async () => {
  const contributors = await store.fetchContributors()

  console.log(contributors)

  rows.value = contributors.map((contributor) => ({
    name: contributor.name,
    exampleCount: contributor.exampleCount,
    languages: contributor.languages.map((language) => language.name).join(', ')
  }))
})
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Contributors</h1>
    <UTable :rows="rows" :columns="columns" />
  </div>
</template>
