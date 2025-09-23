<script setup lang="ts">
import type { TableColumn } from '#ui/types'

const rows = [
  {
    letter: 'a',
    ipa: 'a',
    pronunciation: `a as in 'mat'`,
    example: `ta`,
    hausa: 'tuwo',
    english: 'food'
  },
  {
    letter: 'ã',
    ipa: 'ã',
    pronunciation: `nasal ã as in 'can' (US)`,
    example: `katã`,
    hausa: 'takalmi',
    english: 'shoe'
  },
  {
    letter: 'b',
    ipa: 'b',
    pronunciation: `b as in 'bat'`,
    example: `kabara`,
    hausa: 'tsoho',
    english: 'elder'
  },
  {
    letter: 'ɓ',
    ipa: 'ɓ',
    pronunciation: `implosive ɓ`,
    example: `køɓø̃m`,
    hausa: 'gatari',
    english: 'axe'
  },
  {
    letter: 'c',
    ipa: 'tʃ',
    pronunciation: `ch as in 'church'`,
    example: `kuciga`,
    hausa: 'zakara',
    english: 'cockerel'
  },
  {
    letter: 'd',
    ipa: 'd',
    pronunciation: `d as in 'dog'`,
    example: `kadaba`,
    hausa: 'daji',
    english: 'bush/countryside'
  },
  {
    letter: 'ɗ',
    ipa: 'ɗ',
    pronunciation: `implosive ɗ`,
    example: `uɗanga`,
    hausa: 'itace',
    english: 'tree'
  },
  {
    letter: 'e',
    ipa: 'e',
    pronunciation: `e as in 'day'`,
    example: `mepese`,
    hausa: 'ɗan tagwai',
    english: 'twin'
  },
  {
    letter: 'ẽ',
    ipa: 'ẽ',
    pronunciation: `nasal ẽ`,
    example: `sẽ'ẽ`,
    hausa: 'sassaƙa',
    english: 'carve'
  },
  {
    letter: 'g',
    ipa: 'ɡ',
    pronunciation: `g as in 'go'`,
    example: `kogino`,
    hausa: 'gyaɗa',
    english: 'groundnut'
  },
  {
    letter: 'gw',
    ipa: 'ɡʷ',
    pronunciation: `gw as in 'guava'`,
    example: `magwãwã`,
    hausa: 'kurma',
    english: 'deaf mute'
  },
  {
    letter: 'h',
    ipa: 'h',
    pronunciation: `h as in 'hat'`,
    example: `kahũ`,
    hausa: 'hanci',
    english: 'nose'
  },
  {
    letter: 'hw',
    ipa: 'hʷ',
    pronunciation: `wh as in 'which' (Scots)`,
    example: `hwã'yã`,
    hausa: 'shekaran jiya',
    english: 'day before yesterday'
  },
  {
    letter: 'hy',
    ipa: 'hʲ',
    pronunciation: `hy as in 'hue'`,
    example: `hyã'ũ`,
    hausa: 'jiya',
    english: 'yesterday'
  },
  {
    letter: 'i',
    ipa: 'i',
    pronunciation: `ee as in 'see'`,
    example: `maciiji`,
    hausa: 'ƙwarya',
    english: 'calabash'
  },
  {
    letter: 'ĩ',
    ipa: 'ĩ',
    pronunciation: `nasal ee`,
    example: `ccĩ`,
    hausa: 'mesa',
    english: 'python'
  },
  {
    letter: 'j',
    ipa: 'dʒ',
    pronunciation: `j as in 'jam'`,
    example: `jjeve`,
    hausa: 'gwanki',
    english: 'roan antelope'
  },
  {
    letter: 'k',
    ipa: 'k',
    pronunciation: `k as in 'kick'`,
    example: `kka`,
    hausa: 'mace',
    english: 'woman'
  },
  {
    letter: 'kw',
    ipa: 'kʷ',
    pronunciation: `kw as in 'quick'`,
    example: `ukwã`,
    hausa: 'fata',
    english: 'skin'
  },
  {
    letter: 'l',
    ipa: 'l',
    pronunciation: `l as in 'lie'`,
    example: `ulenji`,
    hausa: 'rana',
    english: 'sun'
  },
  {
    letter: 'm',
    ipa: 'm',
    pronunciation: `m as in 'mat'`,
    example: `mannu`,
    hausa: 'tsuntsu',
    english: 'bird'
  },
  {
    letter: 'n',
    ipa: 'n',
    pronunciation: `n as in 'name'`,
    example: `nna`,
    hausa: 'saniya',
    english: 'cow'
  },
  {
    letter: 'o',
    ipa: 'o',
    pronunciation: `o as in 'go'`,
    example: `koɗo`,
    hausa: 'yi ƙoto',
    english: 'peck'
  },
  {
    letter: 'õ',
    ipa: 'õ',
    pronunciation: `nasal õ as in 'bone' (US)`,
    example: `motõ`,
    hausa: 'miyau',
    english: 'saliva'
  },
  {
    letter: 'ø',
    ipa: 'ɔ',
    pronunciation: `aw as in 'paw'`,
    example: `køɗø`,
    hausa: 'yanka',
    english: 'cut down'
  },
  {
    letter: 'ø̃',
    ipa: 'ɔ̃',
    pronunciation: `nasal aw as in 'gone' (US)`,
    example: `køhø̃`,
    hausa: 'shirwa',
    english: 'black kite'
  },
  {
    letter: 'p',
    ipa: 'p',
    pronunciation: `p as in 'pot'`,
    example: `upepi`,
    hausa: 'iska',
    english: 'wind'
  },
  {
    letter: 'r',
    ipa: 'ɾ',
    pronunciation: `r as in 'rat'`,
    example: `urẽi`,
    hausa: 'gari',
    english: 'town'
  },
  {
    letter: 's',
    ipa: 's',
    pronunciation: `s as in 'sit'`,
    example: `usẽi`,
    hausa: 'zafi',
    english: 'pain'
  },
  {
    letter: 't',
    ipa: 't',
    pronunciation: `t as in 'table'`,
    example: `ttøtø`,
    hausa: 'suruki',
    english: 'in-law'
  },
  {
    letter: 'u',
    ipa: 'u',
    pronunciation: `u as in 'too'`,
    example: `ukutu`,
    hausa: 'ƙota',
    english: 'shaft'
  },
  {
    letter: 'ũ',
    ipa: 'ũ',
    pronunciation: `nasal u as in 'moon' (US)`,
    example: `kuyũyũ`,
    hausa: 'yashi',
    english: 'sand'
  },
  {
    letter: 'v',
    ipa: 'v',
    pronunciation: `v as in 'vat'`,
    example: `vvooto`,
    hausa: 'akwiya',
    english: 'goat'
  },
  {
    letter: 'w',
    ipa: 'w',
    pronunciation: `v as in 'well'`,
    example: `wømø`,
    hausa: 'sarki',
    english: 'chief'
  },
  {
    letter: 'y',
    ipa: 'j',
    pronunciation: `y as in 'you'`,
    example: `yyiri`,
    hausa: 'mayya',
    english: 'witch'
  },
  {
    letter: 'z',
    ipa: 'z',
    pronunciation: `z as in 'zoo'`,
    example: `zza`,
    hausa: 'mutum',
    english: 'person'
  },
  {
    letter: "'",
    ipa: 'ʔ',
    pronunciation: `glottal stop`,
    example: `'asu`,
    hausa: 'wuri',
    english: 'place'
  },
  {
    letter: "'w",
    ipa: 'ʔʷ',
    pronunciation: `glottalised w`,
    example: `cu'wãa`,
    hausa: 'gobe',
    english: 'tomorrow'
  },
  {
    letter: "'y",
    ipa: 'ʔʲ',
    pronunciation: `glottalised y`,
    example: `mø'yø'yø`,
    hausa: 'kifi',
    english: 'fish'
  }
]

const columns: TableColumn[] = [
  { key: 'letter', label: 'Letter' },
  { key: 'ipa', label: 'IPA' },
  { key: 'pronunciation', label: 'Pronunciation' },
  { key: 'example', label: 'Cicipu example', rowClass: 'font-vernacular' },
  { key: 'hausa', label: 'Hausa', rowClass: 'national-text' },
  { key: 'english', label: 'English' }
]
</script>

<template>
  <UTable :rows="rows" :columns="columns" />
</template>
