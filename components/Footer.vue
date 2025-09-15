<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mb-4 mx-2 sm:mx-4 flex gap-8 justify-end items-center">
    <NuxtLink to="https://github.com/stuartmcgill/cicipu" external>
      <UIcon name="i-mdi-github" class="h-8 w-8" />
    </NuxtLink>
    <div>&copy; {{ currentYear }}</div>
  </footer>
</template>
