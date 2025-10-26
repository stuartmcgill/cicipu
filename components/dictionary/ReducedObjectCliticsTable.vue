<script setup lang="ts">
const rows = [
  {
    object: 'n/a',
    phonological: 'wǐndà cé',
    orthographical: `Winda ce`,
    english: "He didn't see",
    hausa: 'Bai gani ba'
  },
  {
    object: '1s',
    phonological: 'wǐndàn cé',
    orthographical: `Windan ce`,
    english: "He didn't see me",
    hausa: 'Bai gan ni ba'
  },
  {
    object: '2s',
    phonological: 'wǐndà ccé',
    orthographical: `Winda cce`,
    english: "He didn't see you(s.)",
    hausa: 'Bai gan ka ba'
  },
  {
    object: '3s',
    phonological: 'wǐndì ccé',
    orthographical: `Windi cce`,
    english: "He didn't see him",
    hausa: 'Bai gan shi ba'
  }
]

const columns = [
  { key: 'object', label: 'Object' },
  { key: 'phonological', label: 'Phonological' },
  { key: 'orthographical', label: 'Orthographical', rowClass: 'cicipu-text' },
  { key: 'english', label: 'English translation' },
  { key: 'hausa', label: 'Hausa translation', rowClass: 'national-text' }
]
</script>

<template>
  <UTable :rows="rows" :columns="columns" />
</template>
