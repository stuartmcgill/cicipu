<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const store = useAppStore()
store.backgroundImage = 'settings.jpg'
</script>

<template>
  <div>
    <h1>Settings</h1>
    <div class="flex items-center gap-4 solid-panel">
      <span>Dark mode</span>
      <DarkModeToggle></DarkModeToggle>
    </div>
  </div>
</template>
