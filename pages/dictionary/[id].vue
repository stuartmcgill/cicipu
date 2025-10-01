<script setup lang="ts">
import { useRoute } from 'vue-router'

const store = useDictionaryStore()

const lexemeId: Ref<number | null> = ref(null)
const data = ref(null)

const validateLexemeId = (id: number) => {
  const minLexemeId = 21602
  const maxLexemeId = 24084

  return id >= minLexemeId && id <= maxLexemeId
}

const isNextValid = computed(() => validateLexemeId(lexemeId.value + 1))
const isPrevValid = computed(() => validateLexemeId(lexemeId.value - 1))

const moveNext = async () => {
  if (!isNextValid.value) {
    return
  }
  const router = useRouter()
  router.push(`/dictionary/${lexemeId.value + 1}`)
}

const movePrev = async () => {
  if (!isPrevValid.value) {
    return
  }

  const router = useRouter()
  router.push(`/dictionary/${lexemeId.value - 1}`)
}

onMounted(async () => {
  const route = useRoute()

  const id = parseInt(route.params.id)
  if (!validateLexemeId(id)) {
    return
  }

  lexemeId.value = id

  data.value = await store.fetchLexeme(lexemeId.value)

  console.log(data)
})
</script>

<template>
  <div>
    <div class="flex gap-4 justify-center">
      <UButton
        icon="i-heroicons-arrow-left"
        color="primary"
        label="Prev"
        :trailing="false"
        :disabled="!isPrevValid"
        @click="movePrev"
      />
      <UButton
        icon="i-heroicons-arrow-right"
        color="primary"
        label="Next"
        :trailing="true"
        :disabled="!isNextValid"
        @click="moveNext"
      />
    </div>
    <div>TODO entry for lexeme {{ data }}</div>
  </div>
</template>
