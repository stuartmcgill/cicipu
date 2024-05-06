<script setup lang="ts">
const tabs = [
  {
    key: 'linguistics',
    label: 'Linguistics',
    icon: 'i-heroicons-chat-bubble-left-right-solid'
  },
  {
    key: 'anthropology',
    label: 'Anthropology',
    icon: 'i-heroicons-users-solid'
  }
]
</script>

<template>
  <div class="max-w-3xl">
    <h1>Academic publications</h1>

    <UTabs :items="tabs">
      <template #default="{ item, selected }">
        <div class="flex items-center gap-2 relative truncate">
          <UIcon :name="item.icon" class="w-5 h-5 flex-shrink-0" />

          <span class="truncate">{{ item.label }}</span>

          <span
            v-if="selected"
            class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
          />
        </div>
      </template>
      <template #item="{ item }">
        <div class="p-4 solid-panel rounded">
          <LinguisticReferences v-if="item.key === 'linguistics'" />
          <AnthropologyReferences v-else />
        </div>
      </template>
    </UTabs>
  </div>
</template>
