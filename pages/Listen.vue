<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import data from '~/public/audio/chewing-gum-girl/text.json'
import AnnotationBlock from '~/components/AnnotationBlock.vue'
import { useListenStore } from '~/stores/listen'

const appStore = useAppStore()
appStore.backgroundImage = 'hamlet.jpg'

const listenStore = useListenStore()

const handleTimeUpdate = (e: Event) =>
  (listenStore.timestamp = audio.value.currentTime + data.audioOffset)

const audio = ref(null)
</script>

<template>
  <div class="p-8 solid-panel">
    <h1>Listen to a Cicipu folktale</h1>
    <div class="mb-4 flex items-center gap-2">
      <div>Advanced view</div>
      <UToggle v-model="listenStore.advancedView" title="Advanced view" />
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
