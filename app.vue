<script setup lang="ts">
const currentYear = new Date().getFullYear()

const img = useImage()
const imgUrl = img('/img/dummy-background.jpg')
const backgroundStyles = computed(() => {
  return { backgroundImage: `url('${imgUrl}')`, backgroundSize: 'cover' }
})
</script>

<template>
  <div
    class="mx-auto container flex flex-col max-w-5xl min-h-screen site-container"
  >
    <NavBar />
    <div class="mb-4 mx-2 sm:mx-4 grow">
      <NuxtPage class="my-12 rounded-lg" />
    </div>
    <footer class="mb-4 mx-2 sm:mx-4 flex justify-end">
      &copy; {{ currentYear }}
    </footer>
  </div>
</template>
<style>
.site-container::after {
  content: '';
  background: url('/img/dummy-background.jpg');
  background-size: cover;
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
