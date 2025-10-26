<script setup lang="ts">
const props = defineProps<{
  label: string
  text: string
  icon: string
}>()
</script>

<template>
  <div class="flex items-start gap-4">
    <div class="flex items-center gap-2 w-44">
      <UIcon :name="props.icon" class="w-5 h-5" />
      <span class="font-medium">{{ props.label }}</span>
    </div>
    <div class="text-gray-600">{{ props.text }}</div>
  </div>
</template>
