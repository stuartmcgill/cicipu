<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mb-4 mx-2 sm:mx-4 flex gap-8 justify-end items-end">
    <NuxtLink
      to="https://github.com/stuartmcgill/cicipu"
      external
      target="_blank"
      class="i-mdi-github h-8 w-8"
    />
    <div>&copy; {{ currentYear }}</div>
  </footer>
</template>
