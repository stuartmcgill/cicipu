<script setup lang="ts">
const props = defineProps<{
  label: string
  link: string
  icon: string
}>()
</script>

<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="flex items-center gap-4 hover:text-primary"
  >
    <UIcon :name="props.icon"></UIcon>
    <div>{{ props.label }}</div>
  </NuxtLink>
</template>
