<script setup lang="ts">
const rows = [
  {
    object: '1s',
    phonological: 'wǐndà mù',
    orthographical: `Winda mu`,
    english: 'He saw me',
    hausa: 'Ya gan ni'
  },
  {
    object: '2s',
    phonological: 'wǐndà vù',
    orthographical: `Winda vu`,
    english: 'He saw you(s.)',
    hausa: 'Ya gan ka'
  },
  {
    object: '3s',
    phonological: 'wǐndà vì',
    orthographical: `Winda vi`,
    english: 'He saw him',
    hausa: 'Ya gan shi'
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
