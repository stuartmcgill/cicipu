<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const store = useAppStore()
const currentYear = new Date().getFullYear()

const img = useImage()
const imgUrl = computed(() => {
  if (store.backgroundImage) {
    return `url(${img('/img/background/' + store.backgroundImage)})`
  }

  return ''
})
</script>

<template>
  <div
    class="mx-auto container flex flex-col max-w-5xl min-h-screen site-container"
  >
    <NavBar />
    <div class="mb-4 mx-2 sm:mx-4 grow">
      <NuxtPage class="my-12" />
    </div>
    <footer class="mb-4 mx-2 sm:mx-4 flex gap-8 justify-end items-end">
      <NuxtLink
        to="https://github.com/stuartmcgill/cicipu"
        external
        target="_blank"
        class="i-mdi-github h-8 w-8"
      />
      <div>&copy; {{ currentYear }}</div>
    </footer>
  </div>
</template>
<style scoped>
.site-container::after {
  content: '';
  background: linear-gradient(to top, #ffffff 1%, transparent 10%),
    v-bind(imgUrl);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
