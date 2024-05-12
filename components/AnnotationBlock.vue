<script setup lang="ts">
import type { ToolboxRef } from '~/composables/ToolboxRefs'
import { useListenStore } from '~/stores/listen'
import { ensureArray } from '~/composables/ensureArray'

const props = defineProps<{
  toolboxRef: ToolboxRef
}>()

const store = useListenStore()

const start: Ref<number> = ref(parseFloat(props.toolboxRef.ELANBegin))
const end: Ref<number> = ref(parseFloat(props.toolboxRef.ELANEnd))

const text = computed(() =>
  ensureArray(props.toolboxRef.txGroup).reduce(
    (combinedText, txGroup) => `${combinedText} ${txGroup.tx}`,
    ''
  )
)
</script>

<template>
  <div v-show="store.timestamp > start && store.timestamp < end" class="p-4">
    <div class="mb-4 text-xl text-primary-800 font-bold cicipu-text">
      {{ text }}
    </div>
    <InterlinearClause
      v-show="store.interlinearSettings.show"
      :text-groups="toolboxRef.txGroup"
    />
    <div class="mt-8 text-lg italic">{{ toolboxRef.ftGroup?.ft }}</div>
  </div>
</template>
