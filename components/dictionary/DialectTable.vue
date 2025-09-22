<script setup lang="ts">
import type { TableColumn, TableRow } from '#ui/types'

const columns: Ref<TableColumn[]> = computed(() => [
  {
    key: 'autonym',
    label: 'Dialect autonym',
    rowClass: 'font-vernacular'
  },
  {
    key: 'settlement',
    label: 'Cicipu settlement',
    rowClass: 'font-vernacular'
  },
  {
    key: 'hausa',
    label: 'Hausa name of settlement',
    rowClass: 'italic'
  }
])

const rows: Ref<TableRow[]> = computed(() => [
  {
    autonym: 'Tìrísìnôo',
    settlement: 'Kòrísìnôo',
    hausa: 'Karishen'
  },
  {
    autonym: 'Tìdìpó',
    settlement: 'Kòdìpó',
    hausa: 'Kadonho'
  },
  {
    autonym: 'Tìzòoríyò',
    settlement: 'Kòzòoríyò',
    hausa: 'Mazarko'
  },
  {
    autonym: 'Tìdǿdìmø̂ø',
    settlement: 'Kɔ̀dǿdìmø̂ø',
    hausa: 'Kadedan'
  },
  {
    autonym: 'Tìkṹmbásí',
    settlement: 'Ùkṹmbásí',
    hausa: 'Kumbashi'
  },
  {
    autonym: 'Tìkúlà',
    settlement: 'Ùkúlà',
    hausa: 'Maburya'
  },
  {
    autonym: 'Tìcúhũ̂u',
    settlement: 'Kwècúhũ̂u',
    hausa: 'Kakihum'
  }
])
</script>

<template>
  <div>
    <div class="text-sm">
      Table 1: Cicipu dialects/settlements and their Hausa names
    </div>
    <UTable :columns="columns" :rows="rows" />
  </div>
</template>
