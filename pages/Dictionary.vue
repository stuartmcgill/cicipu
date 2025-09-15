<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
appStore.backgroundImage = 'literacy-chiefs.jpg'

const store = useDictionaryStore()
const lexemesAsync = await store.listLexemes()

const lexemes = lexemesAsync.data
const pending = lexemesAsync.pending
const error = lexemesAsync.error
</script>

<template>
  <h1>Cicipu dictionary</h1>

  <h2>Lexemes table</h2>

  <!-- Loading state -->
  <div v-if="pending">Loading...</div>

  <!-- Error state -->
  <div v-else-if="error">
    Error loading data: {{ error.message || error }}
  </div>

  <!-- Data display -->
  <ul v-else>
    <li v-for="lexeme in lexemes[0]" >
      {{ lexeme.Lexeme }}
    </li>
  </ul>
</template>
