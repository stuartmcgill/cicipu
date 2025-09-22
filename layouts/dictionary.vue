<script setup lang="ts">
const menuLinks = [
  {
    label: 'Search/browse',
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
    label: 'Audio',
    icon: 'i-heroicons-speaker-wave-solid',
    to: '/dictionary/AudioFiles'
  },
  {
    label: 'Translation',
    icon: 'i-heroicons-language-solid',
    to: '/dictionary/HausaTranslations'
  },
  {
    label: 'Cicipu home',
    icon: 'i-heroicons-home-solid',
    to: '/'
  }
]
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
