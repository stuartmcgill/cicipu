<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const store = useAppStore()
store.backgroundImage = 'hills2.jpg'
</script>

<template>
  <div>
    <h1>The Cicipu language</h1>
    <p>
      Cicipu is spoken in northwest Nigeria by about 20,000 people. This website
      has been set up to provide information and resources relating to the
      language.
    </p>
  </div>
</template>
