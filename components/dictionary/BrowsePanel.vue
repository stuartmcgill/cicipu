<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const isOpen = defineModel<boolean>({ default: false })
const appStore = useAppStore()
</script>

<template>
  <USlideover
    v-model="isOpen"
    side="left"
    :overlay="!appStore.isDesktop.value"
    :prevent-close="appStore.isDesktop.value"
    :ui="{ width: 'w-screen max-w-64' }"
  >
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800'
      }"
    >
      <template #header>
        <div class="flex gap-1 justify-between items-center">
          <UInput type="text" size="md" icon="i-heroicons-magnifying-glass" />
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex xl:hidden z-10"
            square
            padded
            @click="isOpen = false"
          />
        </div>
      </template>

      <div>Body</div>
    </UCard>
  </USlideover>
</template>
