<script setup lang="ts">
import type { TextGroup } from '~/composables/ToolboxRefs'
import { ensureArray } from '~/composables/ensureArray'
import { useListenStore } from '~/stores/listen'
import abbreviations from '~/composables/abbreviations'

const props = defineProps<{ textGroup: TextGroup }>()

const store = useListenStore()

const concatAndStrip = (field: object | object[]) =>
  ensureArray(field).reduce(
    (combined, text) => `${combined}${text}`.replaceAll(' ', ''),
    ''
  )

const morphemes = computed(() => concatAndStrip(props.textGroup.mb))
const glosses = computed(() => concatAndStrip(props.textGroup.ge))
const partsOfSpeech = computed(() => ensureArray(props.textGroup.ps))
</script>

<template>
  <div>
    <div class="mt-4 cicipu-text">{{ props.textGroup.tx }}</div>
    <div class="cicipu-text">{{ morphemes }}</div>
    <div>{{ glosses }}</div>
    <div class="flex">
      <div v-for="(ps, index) in partsOfSpeech" :key="index">
        <UTooltip
          v-show="store.interlinearSettings.showPs"
          class="text-sm"
          :text="abbreviations.get(ps.replaceAll('-', ''))"
        >
          <span class="uppercase">{{ ps }}</span>
        </UTooltip>
      </div>
    </div>
  </div>
</template>
