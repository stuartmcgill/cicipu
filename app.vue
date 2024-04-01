<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="mx-auto container flex flex-col max-w-5xl min-h-screen">
    <NavBar />
    <div class="mb-4 mx-2 sm:mx-4 grow">
      <NuxtPage class="my-12" />
    </div>
    <footer class="mb-4 mx-2 sm:mx-4 flex justify-end">
      &copy; {{ currentYear }}
    </footer>
  </div>
</template>
