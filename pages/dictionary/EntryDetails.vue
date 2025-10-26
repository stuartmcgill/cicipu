<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'
import AbbreviationsTable from '~/components/dictionary/AbbreviationsTable.vue'
import PartsOfSpeechTable from '~/components/dictionary/PartsOfSpeechTable.vue'
import AffixTable from '~/components/dictionary/AffixTable.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Entry details</h1>
    <p>
      The format of the dictionary entries is best described through a series of
      examples. Consider the following entry for the verb
      <span class="cicipu-text">cinda</span> 'give':
    </p>
    <img
      src="/img/dictionary/intro/cinda.png"
      alt="Keyword screenshot"
      class="max-w-80 entry-screenshot"
    />
    <p>
      The headword <span class="cicipu-text">cinda</span> is written
      orthographically and is followed by the part of speech (v.) and then a
      phonetic representation (<span class="phonetic">[tʃĩnda]</span>). A full
      list of Cicipu parts of speech and affixes are given below.
    </p>

    <PartsOfSpeechTable />
    <AffixTable />

    <h2>Entry structure</h2>
    <p>
      Multiple senses of meaning are indicated in boxes with a
      <span class="text-primary-500">coloured border</span> e.g. 'wait', 'look
      after'. For each sense glosses are given in English (wait) and Hausa
      (<span class="national-text">jira</span>).
    </p>
    <img
      src="/img/dictionary/intro/multiple-senses.png"
      alt="Multiple senses screenshot"
      class="entry-screenshot"
    />
    <p>
      One or more example sentences may appear after the glosses, together with
      encyclopaedic information and notes on usage if relevant. If the examples
      have audio then a playbar will be displayed below the relevant example.
      Most examples have audio for the Hausa translation as well as the Cicipu.
      A link to the contributor of the example (in this case Markus Yabani)
      appears at the bottom of the example.
    </p>
    <img
      src="/img/dictionary/intro/example.png"
      alt="Example sentence screenshot"
      class="entry-screenshot"
    />
    <p>
      The following screenshot shows a noun
      <span class="cicipu-text">ddø̂ø</span> 'horse'. Each noun entry includes
      both a gender/noun class pairing (8/3) and, where appropriate, the plural
      form (<span class="cicipu-text">ìdø̂ø</span>).
    </p>

    <img
      src="/img/dictionary/intro/horse.png"
      alt="Horse screenshot"
      class="max-w-80 entry-screenshot"
    />

    <p>
      The next screenshot shows a subentry of the headword
      <span class="cicipu-text">ddøø ccillu</span> as well as a cross-reference
      to another headword (<span class="cicipu-text">cillu</span> 'neck').
    </p>
    <img
      src="/img/dictionary/intro/horse-bone.png"
      alt="Bone at the back of the neck screenshot"
      class="max-w-80 entry-screenshot"
    />
    <p>
      For identifiable loan words such as
      <span class="cicipu-text">kaduniya</span> 'world' the source of the loan
      is given near the start of the entry (e.g. borrowed from Arabic
      <span class="italic">duniya</span> via Hausa).
    </p>

    <img
      src="/img/dictionary/intro/world.png"
      alt="World screenshot"
      class="max-w-80 entry-screenshot"
    />

    <p>
      Idiolectal or dialectal variants (e.g.
      <span class="cicipu-text">hyáɓá</span> 'teardrop') have concise entries,
      but with a link to the main entry. A similar approach is taken for verbal
      nouns (e.g. <span class="cicipu-text">cìdópì</span> 'sewing' appears in
      the dictionary as a minor entry cross-referenced to the main entry
      <span class="cicipu-text">dopo</span> 'sew').
    </p>

    <img
      src="/img/dictionary/intro/tear.png"
      alt="Teardrop screenshot"
      class="max-w-80 entry-screenshot"
    />
    <AbbreviationsTable />
  </div>
</template>
<style scoped>
.entry-screenshot {
  @apply p-2 rounded shadow-xl;
}
</style>
