<script setup lang="ts">
import type { TextGroup } from '~/composables/ToolboxRefs'
import { ensureArray } from '~/composables/ensureArray'
import { useListenStore } from '~/stores/listen'

const props = defineProps<{ textGroup: TextGroup }>()

const store = useListenStore()

const morphemes = computed(() =>
  ensureArray(props.textGroup.mb).reduce(
    (combined, morpheme) => `${combined}${morpheme}`.replaceAll(' ', ''),
    ''
  )
)

const partsOfSpeech = computed(() =>
  ensureArray(props.textGroup.ps).reduce(
    (combined, ps) =>
      `${combined}${ps}`
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll(' ', ''),
    ''
  )
)
</script>

<template>
  <div>
    <div>{{ props.textGroup.tx }}</div>
    <div>{{ morphemes }}</div>
    <div>{{ props.textGroup.ge }}</div>
    <div v-show="store.interlinearSettings.showPs" class="uppercase text-sm">
      {{ partsOfSpeech }}
    </div>
  </div>
</template>
