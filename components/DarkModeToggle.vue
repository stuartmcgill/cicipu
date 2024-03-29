<script setup lang="ts">
const colorMode = useColorMode()
const mode = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    colorMode.value = value ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="
        mode ? 'i-ph-moon-stars-duotone w-5 h5' : 'i-ph-sun-dim-duotone w-5 h5'
      "
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="mode = !mode"
    ></UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
