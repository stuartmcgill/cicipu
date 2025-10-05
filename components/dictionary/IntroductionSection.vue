<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    icon: string
    startOpen?: boolean
  }>(),
  { startOpen: false }
)
</script>

<template>
  <UAccordion
    :default-open="props.startOpen"
    :items="[
      {
        label: props.label,
        icon: props.icon
      }
    ]"
    :ui="{
      container: 'border border-primary-500 rounded-b-none rounded-lg',
      item: {
        base: 'px-4'
      },
      default: {
        variant: 'outline',
        class: 'rounded-b-none text-xl text-primary-700'
      }
    }"
  >
    <template #item="{ item }">
      <slot />
    </template>
  </UAccordion>
</template>
