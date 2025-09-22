<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Audio recordings</h1>
    <p>
      The audio recordings in this dictionary were recorded by Markus Yabani.
      Some of these sound files cover two examples, in which case you may have
      to wait a few seconds to get to the start of the example you want to hear.
      It should be possible even for beginners to identify the relevant portion.
    </p>
    <p>
      The sound quality of the audio recordings varies. Our original intention
      was to use them purely as an aid to transcription but we decided that they
      were too valuable a resource not to publish along with the dictionary. In
      particular native speakers may find them useful for checking their
      understanding of the accompanying written Cicipu.
    </p>
  </div>
</template>
