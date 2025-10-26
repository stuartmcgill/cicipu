<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'
import type { TableRow } from '#ui/types'
import Languages from '~/pages/maps/Languages.vue'
import type { Language } from '~/composables/models'

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
  //{ key: 'exampleCount', label: 'Example count', sortable: true },
  { key: 'languages', label: 'Variety of Cicipu', sortable: true }
]
const rows: Ref<TableRow[]> = ref([])

const selectContributor = (contributor: ContributorRow) => {
  const router = useRouter()
  router.push(`/dictionary/Contributors/${contributor.id}`)
}

const extractCicipuVariety = (languages: Language[]) => {
  if (
    languages.some((language: Language) => language.name.includes('Tikula'))
  ) {
    return 'Tikula'
  }

  if (
    languages.some((language: Language) => language.name.includes('Tirisino'))
  ) {
    return 'Tirisino'
  }

  return ''
}

onMounted(async () => {
  const contributors = await store.fetchContributors()

  rows.value = contributors.map((contributor) => ({
    id: contributor.id,
    name: contributor.name,
    exampleCount: contributor.exampleCount,
    languages: extractCicipuVariety(contributor.languages)
  }))
})
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Contributors</h1>
    <UTable :rows="rows" :columns="columns" @select="selectContributor" />
  </div>
</template>
