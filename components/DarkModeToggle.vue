<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

const mode = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(newValue) {
    toggleColorMode()
  }
})
</script>

<template>
  <ClientOnly>
    <UToggle
      on-icon="i-heroicons-moon-solid"
      off-icon="i-heroicons-sun"
      :model-value="mode"
      @update:model-value="(val) => (mode = val)"
    />
  </ClientOnly>
</template>
