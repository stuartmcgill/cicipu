<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import DialectTable from '~/components/dictionary/DialectTable.vue'
import LanguageAreaMap from '~/components/dictionary/LanguageAreaMap.vue'
import DialectMap from '~/components/dictionary/DialectMap.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Dictionary navigation</h1>
    <p>
      There are two main ways to navigate the dictionary, as well as two minor
      ones. Firstly, the
      <TextLink to="./Dictionary">Browse</TextLink> sidebar allows the user to
      browse alphabetically by clicking on one of the letters in the Cicipu
      alphabet. This displays a list of all the words beginning with that
      letter. Due to the noun class system the initial letters of words are not
      evenly distributed; for example almost a third of the words in the
      dictionary begin with <span class="cicipu-text">k</span>.
    </p>
    <p>
      Secondly, the sidebar also contains a search box. This can be used to
      search in any of the three languages. All search hits are displayed in a
      single list (for example searching for 'mar' would return
      <span class="cicipu-text">maringi</span>
      'claperless bell', Hausa
      <span class="national-text">maraba</span> 'welcome', and English 'marsh'.
    </p>
    <p>
      As an additional feature, each entry also contains 'previous' and 'next'
      buttons which allow the user to move from word-to-word. For technical
      reasons it has been easier to order this list alphabetically by lexical
      root rather than word (this is not considered a serious flaw since anyone
      seeking a list ordered by word can simply use the alphabetic links on the
      sidebar).
    </p>
    <p>
      Finally, the home page contains a randomly-chosen 'sample word' with a
      link to the full lexical entry.
    </p>
    <p>
      Throughout the dictionary text in Cicipu appears in bold (e.g.
      <span class="cicipu-text">cinda</span>), English in plain font (e.g.
      wait), and Hausa in purple italics (e.g.
      <span class="national-text">jira</span>). Nouns are listed by the citation
      form (i.e. with the noun class prefix), usually in the singular; however
      some nouns (e.g.
      <span class="cicipu-text">áayà</span>
      'beans') are almost always used in the singular, and so the plural is
      given as the main entry, with just a cross-reference provided under the
      singular (e.g.
      <span class="cicipu-text">káayà</span>
      'bean'). Noun roots are not listed separately but can easily be derived
      from the singular and plural forms.
    </p>
    <p>
      When trying to look up a word in Cicipu, bear in mind that some words
      begin with long consonants (e.g.
      <span class="cicipu-text">zzá</span>'person' appears after
      <span class="cicipu-text">zũwã</span>'roast') and that others contain long
      vowels (e.g.
      <span class="cicipu-text">kàdáaná</span>
      'large brown hawk' appears before
      <span class="cicipu-text">kàdámá</span> 'word'). Words that begin with a
      phonemic glottal stop e.g.
      <span class="cicipu-text">'isanu</span>
      'stand up' are listed at the end of the alphabet under the glottal stop
      <span class="cicipu-text">'</span>.
    </p>
  </div>
</template>

<style scoped>
.cicipu-text {
  @apply font-vernacular font-bold;
}

.national-text {
  @apply font-serif italic text-purple-800;
}
</style>
