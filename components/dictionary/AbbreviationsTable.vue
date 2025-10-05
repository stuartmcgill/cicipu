<script setup lang="ts">
import type { TableRow } from '#ui/types'

const rows: Ref<TableRow[]> = computed(() => [
  { abbreviation: 'esp', full: 'especially' },
  { abbreviation: 'k.o.', full: 'kind of' },
  { abbreviation: 'lit', full: 'literally' },
  { abbreviation: 'pl', full: 'plural' },
  { abbreviation: 'sg', full: 'singular' },
  { abbreviation: 's.o.', full: 'someone' },
  { abbreviation: 'sp', full: 'species' },
  { abbreviation: 's.t.', full: 'something' },
  { abbreviation: 'viz', full: 'namely' }
])
</script>

<template>
  <div class="flex flex-col">
    <h2>Abbreviations</h2>
    <div>
      In addition to the parts of speech listed above, the following
      abbreviations are used in the dictionary:
    </div>
    <UTable :rows="rows" />
  </div>
</template>
