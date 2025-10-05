<script setup lang="ts">
import { useRoute } from '#app'

const route = useRoute()

const baseMenuItems = [
  {
    label: 'Dictionary',
    icon: 'i-heroicons-magnifying-glass-solid',
    to: '/dictionary/Dictionary'
  },
  {
    label: 'Introduction',
    icon: 'i-heroicons-information-circle-solid',
    to: '/dictionary/Introduction'
  },
  {
    label: 'Navigation',
    icon: 'i-heroicons-map-solid',
    to: '/dictionary/Navigation'
  },
  {
    label: 'Entry details',
    icon: 'i-heroicons-document-magnifying-glass-solid',
    to: '/dictionary/EntryDetails'
  },
  {
    label: 'Orthogaphy',
    icon: 'i-heroicons-pencil-solid',
    to: '/dictionary/Orthography'
  },
  {
    label: 'Contributors',
    icon: 'i-heroicons-user-solid',
    to: '/dictionary/Contributors'
  },
  {
    label: 'Cicipu home',
    icon: 'i-heroicons-home-solid',
    to: '/'
  }
]

const activeSection = computed(() => {
  if (route.path.startsWith('/dictionary/Contributor')) {
    return '/dictionary/Contributors'
  }

  if (/^\/dictionary\/\d+$/.test(route.path)) {
    return '/dictionary/Dictionary'
  }

  return route.path
})

const menuLinks = computed(() =>
  baseMenuItems.map((link) => ({
    ...link,
    active: link.to === activeSection.value
  }))
)
</script>

<template>
  <div
    class="mx-auto xl:ml-64 container flex flex-col max-w-5xl min-h-screen site-container"
  >
    <NavBar :links="menuLinks" />
    <div class="mb-4 mx-2 sm:mx-4 grow">
      <NuxtPage class="my-12" />
    </div>
    <Footer />
  </div>
</template>
