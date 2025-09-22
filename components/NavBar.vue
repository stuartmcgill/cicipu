<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types'

const props = defineProps<{ links: HorizontalNavigationLink[] }>()

const menuOpen = ref(false)
</script>

<template>
  <UHorizontalNavigation
    :links="props.links"
    class="px-4 py-0 border-gray-200 dark:border-gray-700 border-t-0 rounded-t-none hidden md:flex solid-panel"
    :ui="{ inactive: 'text-gray-700 dark:text-gray-200' }"
  />
  <div class="m-3 flex gap-4 justify-between solid-panel md:hidden">
    <div>
      <div
        class="flex items-center gap-4 cursor-pointer text-gray-700 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200"
        @click="menuOpen = !menuOpen"
      >
        <UIcon
          :name="
            menuOpen ? 'i-heroicons-x-mark-solid' : 'i-heroicons-bars-3-solid'
          "
          class="p-2 h-6 w-6"
        />
        <span v-show="!menuOpen">Menu</span>
      </div>
    </div>
    <UVerticalNavigation
      :links="links"
      class="flex-1"
      v-show="menuOpen"
      @click="menuOpen = false"
    />
  </div>
</template>
