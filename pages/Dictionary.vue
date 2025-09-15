<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { useMediaQuery } from '@vueuse/core'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = 'literacy-chiefs.jpg'

const store = useDictionaryStore()
const lexemesAsync = await store.listLexemes()

const lexemes = lexemesAsync.data
const pending = lexemesAsync.pending
const error = lexemesAsync.error

const isDesktop = useMediaQuery('(min-width: 1280px)')

const isOpen = ref(isDesktop.value)
</script>

<template>
  <div>
    <UButton label="Browse" @click="isOpen = true" />
    <USlideover
      v-model="isOpen"
      side="left"
      :overlay="!isDesktop"
      :prevent-close="isDesktop"
      :ui="{ width: 'w-screen max-w-64' }"
    >
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800'
        }"
      >
        <template #header>
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex xl:hidden absolute end-5 top-5 z-10"
            square
            padded
            @click="isOpen = false"
          />

          <UInput type="text" size="sm" icon="i-heroicons-magnifying-glass" />
        </template>

        <div>Body</div>
      </UCard>
    </USlideover>
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
      <li v-for="lexeme in lexemes[0]">
        {{ lexeme.Lexeme }}
      </li>
    </ul>
  </div>
</template>
