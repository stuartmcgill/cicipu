<script setup lang="ts">
import type { TextGroup } from '~/composables/ToolboxRefs'
import { ensureArray } from '~/composables/ensureArray'
import { useListenStore } from '~/stores/listen'
import attributes from '~/composables/abbreviations'

const props = defineProps<{ textGroup: TextGroup }>()

const store = useListenStore()

const morphemes = computed(() =>
  ensureArray(props.textGroup.mb).reduce(
    (combined, morpheme) => `${combined}${morpheme}`.replaceAll(' ', ''),
    ''
  )
)

const partsOfSpeech = computed(() => ensureArray(props.textGroup.ps))
</script>

<template>
  <div>
    <div class="mt-4 cicipu-text">{{ props.textGroup.tx }}</div>
    <div class="cicipu-text">{{ morphemes }}</div>
    <div>{{ props.textGroup.ge }}</div>
    <div class="flex">
      <div v-for="(ps, index) in partsOfSpeech" :key="index">
        <UTooltip
          v-show="store.interlinearSettings.showPs"
          class="text-sm"
          :text="attributes.get(ps.replaceAll('-', ''))"
        >
          <span class="uppercase">{{ ps }}</span>
        </UTooltip>
      </div>
    </div>
  </div>
</template>
