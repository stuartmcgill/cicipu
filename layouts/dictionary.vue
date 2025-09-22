<script setup lang="ts">
const menuLinks = [
  {
    label: 'Cicipu home',
    icon: 'i-heroicons-home-solid',
    to: '/'
  },
  {
    label: 'Introduction',
    icon: 'i-heroicons-information-circle-solid',
    to: '/dictionary/Introduction'
  },
  {
    label: 'Browse',
    icon: 'i-heroicons-book-open-solid',
    to: '/dictionary/Dictionary'
  },
  {
    label: 'Search',
    icon: 'i-heroicons-magnifying-glass-solid',
    to: '/dictionary/Dictionary'
  }
]
</script>

<template>
  <div
    class="mx-auto xl:ml-64 container flex flex-col min-h-screen site-container"
  >
    <NavBar :links="menuLinks" />
    <div class="mb-4 mx-2 sm:mx-4 grow">
      <NuxtPage class="my-12" />
    </div>
    <Footer />
  </div>
</template>
