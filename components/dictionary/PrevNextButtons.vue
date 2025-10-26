<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from '#vue-router'
import { useDictionaryStore } from '~/stores/dictionary'

const props = defineProps<{ lexemeId: number }>()

const store = useDictionaryStore()
const router = useRouter()

const isNextValid = computed(
  () => props.lexemeId !== null && store.validateLexemeId(props.lexemeId + 1)
)
const isPrevValid = computed(
  () => props.lexemeId !== null && store.validateLexemeId(props.lexemeId - 1)
)

const moveNext = () => {
  if (isNextValid.value && props.lexemeId !== null) {
    router.push(`/dictionary/${props.lexemeId + 1}`)
  }
}
const movePrev = () => {
  if (isPrevValid.value && props.lexemeId !== null) {
    router.push(`/dictionary/${props.lexemeId - 1}`)
  }
}
</script>

<template>
  <div class="flex gap-4 justify-center">
    <UButton
      icon="i-heroicons-arrow-left"
      color="primary"
      label="Previous word"
      :trailing="false"
      :disabled="!isPrevValid"
      @click="movePrev"
    />
    <UButton
      icon="i-heroicons-arrow-right"
      color="primary"
      label="Next word"
      :trailing="true"
      :disabled="!isNextValid"
      @click="moveNext"
    />
  </div>
</template>
