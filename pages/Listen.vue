<script setup lang="ts">
const handleTimeUpdate = (e: Event) =>
  (timestamp.value = audio.value.currentTime)

const timestamp = ref<number>(0)
const audio = ref(null)

onMounted(() => {
  console.log(audio.value.currentTime)
})
</script>

<template>
  <div>
    <h1>Listen to a Cicipu folktale</h1>
    <audio id="audio" ref="audio" controls @timeupdate="handleTimeUpdate">
      <source src="/audio/symphony.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    <div class="mt-4 flex items-center gap-4">
      <span>Timestamp</span>
      <div>{{ timestamp }}</div>
    </div>
  </div>
</template>
