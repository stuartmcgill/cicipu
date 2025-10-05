<script setup lang="ts">
import type { TableRow } from '#ui/types'

const rows: Ref<TableRow[]> = computed(() => [
  { affix: 'anticausative' },
  { affix: 'applicative' },
  { affix: 'aspect marker' },
  { affix: 'causative' },
  { affix: 'habitual' },
  { affix: 'imperative' },
  { affix: 'iterative' },
  { affix: 'locativiser' },
  { affix: 'nominaliser' },
  { affix: 'pluractional' },
  { affix: 'resultative' },
  { affix: 'tense marker' },
  { affix: 'ventive' }
])

const columns = [{ key: 'affix', label: 'Affix' }]
</script>

<template>
  <div class="flex flex-col">
    <h2>Affixes</h2>
    <div>The following table lists the affixes used in the dictionary:</div>
    <UTable :rows="rows" :columns="columns" />
  </div>
</template>
