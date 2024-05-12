<script setup lang="ts">
import type { TextGroup } from '~/composables/ToolboxRefs'
import InterlinearWord from '~/components/InterlinearWord.vue'

const props = defineProps<{ textGroups: TextGroup[] }>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <InterlinearWord
      v-for="(textGroup, index) in props.textGroups"
      :key="index"
      :text-group="textGroup"
      class="flex flex-col gap-2"
    >
    </InterlinearWord>
  </div>
</template>
