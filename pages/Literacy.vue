<script setup lang="ts"></script>

<template>
  <h1>Literacy and language development</h1>
  <div class="grid sm:grid-cols-2 gap-8">
    <NuxtLink
      to="/literacy/hausa_cicipu_transition_primer_a5.pdf"
      target="_blank"
      external
      class="literacy-card"
    >
      <NuxtImg src="/img/primer.jpg" class="rounded-t-lg"></NuxtImg>
      <UDivider></UDivider>
      <div class="p-4 flex flex-wrap gap-2">
        How to read and write in Cicipu for those who can already read
        Hausa<UBadge>Hausa-only</UBadge>
      </div>
    </NuxtLink>
    <NuxtLink to="/literacy/orthography" class="literacy-card">
      <NuxtImg src="/img/orthography1.jpg" class="rounded-t-lg"></NuxtImg>
      <UDivider></UDivider>
      <div class="p-4">Cicipu orthography proposal and workshops</div>
    </NuxtLink>
  </div>
</template>
