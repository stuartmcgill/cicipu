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
    label: 'Dialects',
    icon: 'i-heroicons-chat-bubble-left-ellipsis'
  }
]
</script>

<template>
  <div>
    <UBreadcrumb :links="links" class="mb-8" />
    <h1>Dialects</h1>
    <p>Native speakers identify seven dialect areas:</p>
    <ul class="mb-8 list-disc list-inside">
      <li>Tirisino</li>
      <li>Tidipo</li>
      <li>Tizoriyo</li>
      <li>Tiododimo</li>
      <li>Tikula</li>
      <li>Tikumbasi</li>
      <li>Tucuhun</li>
    </ul>
    <NuxtImg
      src="/img/maps/maps_dialects.jpg"
      class="w-full rounded-lg shadow-lg"
    />
  </div>
</template>
