<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import data from '~/public/audio/chewing-gum-girl/text.json'
import AnnotationBlock from '~/components/AnnotationBlock.vue'
import { useListenStore } from '~/stores/listen'
import { ensureArray } from '~/composables/ensureArray'

const appStore = useAppStore()
appStore.backgroundImage = 'hamlet.jpg'

const listenStore = useListenStore()

// The TextGroups in the Toolbox JSON are sometimes array, sometimes objects. So force them to all
// be arrays
data.refs.forEach((ref, i) => {
  data.refs[i].txGroup = ensureArray(data.refs[i].txGroup)

  // Also remove the square brackets and trim the \mb field
  data.refs[i].txGroup.forEach((group, j) => {
    data.refs[i].txGroup[j].mb = ensureArray(data.refs[i].txGroup[j].mb)
  })
})

const handleTimeUpdate = (e: Event) =>
  (listenStore.timestamp = audio.value.currentTime + data.audioOffset)

const audio = ref(null)

const settings = reactive(listenStore.interlinearSettings)
</script>

<template>
  <div class="p-8 solid-panel">
    <h1>Listen to a Cicipu folktale</h1>
    <div class="mb-4 flex items-center gap-2">
      <div>Advanced view</div>
      <UToggle v-model="listenStore.interlinearSettings.show" />
    </div>
    <div class="mb-4 flex gap-4" :class="!settings.show ? 'disabled-text' : ''">
      <div class="flex items-center gap-2">
        <div>Parts of speech</div>
        <UToggle :disabled="!settings.show" v-model="settings.showPs" />
      </div>
      <div class="flex items-center gap-2">
        <div>Include Hausa</div>
        <UToggle :disabled="!settings.show" v-model="settings.showHausa" />
      </div>
    </div>
    <audio id="audio" ref="audio" controls @timeupdate="handleTimeUpdate">
      <source src="/audio/chewing-gum-girl/audio.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    <AnnotationBlock
      v-for="(ref, index) in data.refs"
      :key="index"
      :toolbox-ref="ref"
    />
  </div>
</template>
