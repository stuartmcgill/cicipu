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
      <span class="cicipu-text">cinda</span> 'give' (Figure 3).
    </p>
    <!--    @TODO add a screenshot (Fig 3 here-->
    <p>
      The headword <span class="cicipu-text">cinda</span> is written
      orthographically and is followed by a phonetic representation (<span
        class="phonetic"
        >[tʃĩnda]</span
      >) and then the part of speech. A full list of Cicipu parts of speech and
      affixes are given in Tables 2 and 3 below.
    </p>

    <PartsOfSpeechTable />
    <AffixTable />

    <h2>Entry structure</h2>
    <p>
      If the word has multiple senses of meaning then these are indicated with
      numbers i.e. 1. wait, 2. look after, and so on; if there is only one sense
      then the number is omitted. For each sense glosses are given in English
      (wait) and Hausa (<span class="national-text">jira</span>).
    </p>
    <p>
      One or more example sentences may appear after the glosses, together with
      encyclopaedic information and notes on usage if relevant. If the examples
      have audio then a playbar will be displayed below the relevant example.
      Most examples have audio for the Hausa translation as well as the Cicipu.
      A link to the contributor of the example (in this case Markus Yabani)
      appears underneath the example.
    </p>
    <p>
      The following screenshot shows a noun
      <span class="cicipu-text">ddø̂ø</span> 'horse' (Figure 4). Each noun entry
      includes both a gender/noun class pairing (8/3) and, where appropriate,
      the plural form (<span class="cicipu-text">ìdø̂ø</span>).
    </p>

    <!--      @TODO add horse screenshot-->
    <div>Figure 4: Entry for <span class="cicipu-text">ddøø</span> 'horse'</div>

    <!--      @TODO add neck bone screenshot-->
    <div>
      Figure 5: Entry for <span class="cicipu-text">ddøø ccillu</span> 'bone at
      the back of the neck'
    </div>

    <p>
      Figure 5 shows a subentry of the headword
      <span class="cicipu-text">ddøø ccillu</span> as well as a cross-reference
      to another headword (see also
      <span class="cicipu-text">cillu</span> 'neck').
    </p>
    <p>
      For identifiable loan words such as
      <span class="cicipu-text">kaduniya</span> 'world' (Figure 6) the source of
      the loan is given at the end of the entry (e.g. Borrowed from Arabic
      <span class="italic">duniya</span> via Hausa).
    </p>

    <!--      @TODO add 'world' screenshot-->
    <div>
      Figure 5: Entry for <span class="cicipu-text">kaduniya</span> 'world'
    </div>

    <p>
      Idiolectal or dialectal variants (e.g.
      <span class="cicipu-text">hyáɓá</span> 'teardrop', Figure 7) have concise
      entries, but with a link to the main entry. A similar approach is taken
      for verbal nouns (e.g. <span class="cicipu-text">cìdópì</span> 'sewing'
      appears in the dictionary as a minor entry cross-referenced to the main
      entry <span class="cicipu-text">dopo</span> 'sew').
    </p>

    <!--      @TODO add 'tear' screenshot-->
    <div>
      Figure 5: Entry for <span class="cicipu-text">hyaɓa</span> 'teardrop'
    </div>
    <AbbreviationsTable />
  </div>
</template>
