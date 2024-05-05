<script setup lang="ts">
const props = defineProps<{
  link: string
  title: string
  text: string
  image?: string
  icon?: string
}>()
</script>

<template>
  <NuxtLink :to="props.link" :external="true" class="card" target="_blank">
    <NuxtImg
      v-if="props.image"
      :src="props.image"
      class="h-60 rounded-t-lg object-cover"
    />
    <div v-if="props.icon" class="flex items-center justify-center h-60">
      <div class="h-full w-full" :class="props.icon"></div>
    </div>
    <UDivider />
    <div class="p-4 flex flex-col gap-2">
      <h3>{{ props.title }}</h3>
      <div>{{ props.text }}</div>
    </div>
  </NuxtLink>
</template>
