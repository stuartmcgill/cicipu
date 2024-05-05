<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Maps',
    icon: 'i-heroicons-map-pin',
    to: '/maps'
  },
  {
    label: 'Languages',
    icon: 'i-heroicons-chat-bubble-left-ellipsis'
  }
]
</script>

<template>
  <div>
    <UBreadcrumb :links="links" class="mb-8" />
    <h1>Cicipu and surrounding languages</h1>
    <p class="mb-8">
      This map was originally taken from SIL's
      <TextLink to="https://www.ethnologue.com" :external="true"
        >Ethnologue</TextLink
      >. Cicipu is number 17 (coloured yellow). Its immediate neighbours are
      C'Lela (10), Tsuvaɗi (16), and Hausa (1). Fulfulde is spoken by Fulani
      herders, who until recently could be found throughout the map area.
    </p>
    <NuxtImg src="/img/maps/maps_ethnologue.jpg" class="w-full shadow-lg" />
  </div>
</template>
