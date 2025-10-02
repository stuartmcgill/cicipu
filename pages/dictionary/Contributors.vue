<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'
import type { TableRow } from '#ui/types'

interface ContributorRow {
  id: number
  name: string
  exampleCount: number
  languages: string
}

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''

const store = useDictionaryStore()

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'exampleCount', label: 'Example count', sortable: true },
  { key: 'languages', label: 'Languages spoken', sortable: true }
]
const rows: Ref<TableRow[]> = ref([])

onMounted(async () => {
  const contributors = await store.fetchContributors()

  console.log(contributors)

  rows.value = contributors.map((contributor) => ({
    id: contributor.id,
    name: contributor.name,
    exampleCount: contributor.exampleCount,
    languages: contributor.languages.map((language) => language.name).join(', ')
  }))
})

const selectContributor = (contributor: ContributorRow) => {
  const router = useRouter()
  router.push(`/dictionary/Contributors/${contributor.id}`)
}
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Contributors</h1>
    <UTable :rows="rows" :columns="columns" @select="selectContributor" />
  </div>
</template>
