<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import data from '../assets/audio/chewing-gum-girl/text.json'
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
})

const handleTimeUpdate = (e: Event) =>
  (listenStore.timestamp = audio.value.currentTime + data.audioOffset)

const audio = ref(null)

const settings = reactive(listenStore.interlinearSettings)
</script>

<template>
  <div>
    <div class="p-8 solid-panel">
      <h1>Listen to a Cicipu folktale</h1>
      <div class="grid lg:grid-cols-2 gap-8 items-start">
        <div class="flex flex-col gap-4 h-full justify-between">
          <div class="text-lg">
            Told by Amos Bako in Inguwar Rogo, February 2007
          </div>
          <div class="flex flex-col gap-2 indent-8">
            <div class="flex items-center gap-2">
              <div>Advanced view</div>
              <UToggle v-model="listenStore.interlinearSettings.show" />
            </div>
            <div
              class="flex items-center gap-2"
              :class="!settings.show ? 'disabled-text' : ''"
            >
              <div>Show parts of speech</div>
              <UToggle :disabled="!settings.show" v-model="settings.showPs" />
            </div>
          </div>
          <audio
            class="w-full"
            id="audio"
            ref="audio"
            controls
            @timeupdate="handleTimeUpdate"
          >
            <source
              src="/assets/audio/chewing-gum-girl/audio.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
        <NuxtImg
          src="/img/background/amos-left.jpg"
          class="max-h-60 rounded shadow-lg"
        />
      </div>
    </div>
    <div class="mt-4 md:mt-6 lg:mt-8 p-8 solid-panel min-h-[400px]">
      <AnnotationBlock
        v-for="(ref, index) in data.refs"
        :key="index"
        :toolbox-ref="ref"
      />
    </div>
  </div>
</template>
