<script setup lang="ts">
import type { ToolboxRef } from '~/composables/ToolboxRef'
import { useListenStore } from '~/stores/listen'

const props = defineProps<{
  toolboxRef: ToolboxRef
}>()

const store = useListenStore()

const start: Ref<number> = ref(parseFloat(props.toolboxRef.ELANBegin))
const end: Ref<number> = ref(parseFloat(props.toolboxRef.ELANEnd))
</script>

<template>
  <div v-show="store.timestamp > start && store.timestamp < end" class="p-4">
    <div v-if="store.advancedView">{{ toolboxRef.txGroup }}</div>
    <div class="">{{ toolboxRef.ftGroup?.ft }}</div>
  </div>
</template>
