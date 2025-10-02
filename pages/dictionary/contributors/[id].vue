<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { useRoute } from '#vue-router'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
const store = useDictionaryStore()

const contributor = ref(null)

onMounted(async () => {
  const route = useRoute()
  const id = parseInt(route.params.id as string)

  contributor.value = await store.fetchContributor(id)

  console.log(contributor.value)
})
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>{{ contributor?.name }}</h1>
  </div>
</template>
