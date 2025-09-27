<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const lexemeId = route.params.id
</script>

<template>
  <div>TODO entry for lexeme ID {{ lexemeId }}</div>
</template>
