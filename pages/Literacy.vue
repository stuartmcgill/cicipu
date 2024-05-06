<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const store = useAppStore()
store.backgroundImage = 'orthography_10.jpg'
</script>

<template>
  <div>
    <h1>Literacy and language development</h1>
    <div class="grid sm:grid-cols-2 gap-8">
      <NuxtLink to="/literacy/orthography" class="card">
        <NuxtImg src="/img/orthography1.jpg" class="rounded-t-lg"></NuxtImg>
        <UDivider></UDivider>
        <div class="p-4 flex flex-wrap items-center gap-2">
          <div>Cicipu orthography proposal and workshops</div>
          <UButton>Read more</UButton>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/literacy/hausa_cicipu_transition_primer_a5.pdf"
        target="_blank"
        external
        class="card"
      >
        <NuxtImg src="/img/primer.jpg" class="rounded-t-lg"></NuxtImg>
        <UDivider></UDivider>
        <div class="p-4 flex flex-wrap gap-2">
          How to read and write in Cicipu for those who can already read
          Hausa<UBadge color="cyan">Hausa only</UBadge>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
