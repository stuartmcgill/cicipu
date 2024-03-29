<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home-solid',
    to: '/'
  },
  {
    label: 'Listen',
    icon: 'i-heroicons-play-solid',
    to: '/listen'
  },
  {
    label: 'Literacy',
    icon: 'i-heroicons-pencil-solid',
    to: '/literacy'
  },
  {
    label: 'Dictionary',
    icon: 'i-heroicons-book-open-solid',
    to: '/dictionary'
  },
  {
    label: 'Linguistics',
    icon: 'i-heroicons-academic-cap-solid',
    to: '/linguistics'
  },
  {
    label: 'Photos',
    icon: 'i-heroicons-photo-solid',
    to: '/photos'
  },
  {
    label: 'Links',
    icon: 'i-heroicons-arrow-top-right-on-square-solid',
    to: '/links'
  },
  {
    label: 'Tools',
    icon: 'i-heroicons-wrench-solid',
    to: '/tools'
  }
]

const menuOpen = ref(false)
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 hidden sm:flex"
  />
  <div class="m-3 flex gap-4 justify-end sm:hidden">
    <UVerticalNavigation
      :links="links"
      class="flex-1 border-b border-gray-200"
      v-show="menuOpen"
      :ui="{
        base: 'group relative flex items-center justify-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75'
      }"
    />
    <UIcon
      :name="menuOpen ? 'i-heroicons-x-mark-solid' : 'i-heroicons-bars-3-solid'"
      class="p-2 h-8 w-8 cursor-pointer text-gray-700 hover:text-gray-400"
      @click="menuOpen = !menuOpen"
    />
  </div>
</template>
