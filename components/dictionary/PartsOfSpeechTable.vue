<script setup lang="ts">
import type { TableRow } from '#ui/types'

const rows: Ref<TableRow[]> = computed(() => [
  { part: 'adjective' },
  { part: 'adverb' },
  { part: 'article' },
  { part: 'associative plural' },
  { part: 'auxiliary verb' },
  { part: 'counterfactual' },
  { part: 'conjunction' },
  { part: 'copula' },
  { part: 'demonstrative' },
  { part: 'exclamation' },
  { part: 'existential predicate' },
  { part: 'greeting' },
  { part: 'honorific' },
  { part: 'ideophone' },
  { part: 'interjection' },
  { part: 'locative' },
  { part: 'noun' },
  { part: 'negator' },
  { part: 'numeral' },
  { part: 'numerical adjective' },
  { part: 'object clitic' },
  { part: 'particle (discourse)' },
  { part: 'possessive pronoun' },
  { part: 'preposition' },
  { part: 'presentative' },
  { part: 'pronoun' },
  { part: 'prohibitive' },
  { part: 'quantifier' },
  { part: 'question word' },
  { part: 'relativiser' },
  { part: 'reportative evidential' },
  { part: 'verb' }
])

const columns = [{ key: 'part', label: 'Part of Speech' }]
</script>

<template>
  <div class="flex flex-col">
    <h1>Parts of Speech</h1>
    <div>
      The following table lists the parts of speech used in the dictionary:
    </div>
    <UTable :rows="rows" :columns="columns" />
  </div>
</template>
