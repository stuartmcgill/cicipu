<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link: string
    text: string
    image: string
    external?: boolean
  }>(),
  { external: false }
)
</script>

<template>
  <NuxtLink
    :to="props.link"
    :target="props.external ? '_blank' : '_self'"
    :external="props.external"
    class="flex flex-col border rounded-lg border-primary-500 hover:bg-primary-100 dark:hover:bg-primary-800 dark:hover:border-primary-800"
  >
    <NuxtImg :src="props.image" class="rounded-t-lg"></NuxtImg>
    <UDivider></UDivider>
    <div class="p-4">
      {{ props.text }}
    </div>
  </NuxtLink>
</template>
