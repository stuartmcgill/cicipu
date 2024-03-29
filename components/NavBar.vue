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
  },
  {
    label: 'Settings',
    icon: 'i-heroicons-cog-6-tooth-solid',
    to: '/settings'
  }
]

const menuOpen = ref(false)
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 hidden md:flex"
  />
  <div class="m-3 flex gap-4 justify-end md:hidden">
    <UVerticalNavigation
      :links="links"
      class="flex-1 border-b border-gray-200"
      v-show="menuOpen"
    />
    <div>
      <div
        class="flex items-center gap-4 cursor-pointer text-gray-700 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200"
        @click="menuOpen = !menuOpen"
      >
        <span>Menu</span>
        <UIcon
          :name="
            menuOpen ? 'i-heroicons-x-mark-solid' : 'i-heroicons-bars-3-solid'
          "
          class="p-2 h-6 w-6"
        />
      </div>
    </div>
  </div>
</template>
