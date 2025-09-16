<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const isOpen = defineModel<boolean>({ default: false })

const store = useDictionaryStore()
const appStore = useAppStore()

const browseLetter = (letter: string) => {
  store.browse(letter)

  //if (!appStore.isDesktop.value) {
  isOpen.value = false
  //}
}

const letters = ref([
  'a',
  'b',
  'ɓ',
  'c',
  'd',
  'ɗ',
  'e',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'ø',
  'p',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'y',
  'z',
  "'"
])
</script>

<template>
  <!--    :prevent-close="appStore.isDesktop.value"-->
  <!--  :overlay="!appStore.isDesktop.value"-->
  <USlideover
    v-model="isOpen"
    side="left"
    :ui="{ width: 'w-screen max-w-64', base: 'overflow-y-auto' }"
  >
    <div class="pt-2 flex flex-col">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex justify-end z-10 absolute end-2"
        square
        padded
        @click="isOpen = false"
      />
      <div class="mt-2 flex flex-col gap-1">
        <button
          v-for="(letter, index) in letters"
          :key="index"
          class="font-vernacular"
          @click="browseLetter(letter)"
        >
          {{ letter }}
        </button>
      </div>
    </div>
  </USlideover>
</template>
