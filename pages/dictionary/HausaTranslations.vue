<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Hausa translations</h1>
    <p>
      An attempt has been made to translate every word and every example
      sentence into Hausa as well as English. This is problematic due to the
      lack of a written standard for the particular dialect of Hausa spoken by
      the Acipu. This variety is a form of the 'Western Hausa' dialect centred
      on Sokoto (Newman 2000:1). It is also my impression – based on comparing
      Yabani's Hausa translations with the dialectal forms given in Bargery
      (1934) – that in terms of vocabulary there is (or at least has been)
      strong influence from Katsina too.
    </p>
    <p>
      But the Hausa spoken by the Cicipu diverges in other ways too, and no-one
      who has spent all their life in Cicipuland would be able to pass
      themselves off as a native Hausa speaker – an obvious example is that
      almost all nouns are assigned to the masculine gender, the exceptions
      being when the referent is actually female. There are also phonologial
      differences such as the use of epenthetic vowels (e.g.
      <span class="national-text">fuska</span>
      'face' is pronounced [<span class="phonetic">húsᵊkà</span>
      ]) and the simplification of phonemes: the Hausa ejectives
      <span class="national-text">ts</span>
      [<span class="phonetic">sʼ</span>] and
      <span class="national-text">ƙ</span>
      are pronounced [<span class="phonetic">s</span>] or [<span
        class="phonetic"
        >tʃ</span
      >] and [<span class="phonetic">k</span>] respectively. Hausa
      <span class="national-text">sh</span>
      [<span class="phonetic">tʃ</span>] is also often pronounced [<span
        class="phonetic"
        >s</span
      >]. Cicipu vowel harmony also has a significant effect on the way native
      speakers pronounce Hausa (e.g. [<span class="phonetic">ɡúːnáː</span>] for
      <span class="national-text">gona</span>
      'farm').
    </p>
    <p>
      When revising Yabani's initial Hausa transcriptions we have tended to
      retain grammatical differences, but abstract away from phonological
      differences in an effort to make the identification of the Hausa words
      easier. Bargery (1934) has been followed for Sokoto Hausa spelling.
      Yabani's original unedited transcriptions are available from the
      <TextLink
        to="https://www.elararchive.org/uncategorized/SO_0898469b-5c6f-4f35-a3b8-ec825211154c/"
        :external="true"
        >ELAR Cicipu deposit</TextLink
      >.
    </p>
    <p>
      Although officially part of the Hausa orthography, in practice the hooked
      letters <span class="national-text">ɓ</span>,
      <span class="national-text">ɗ</span>, and
      <span class="national-text">ƙ</span>
      are often written as <span class="national-text">b</span>,
      <span class="national-text">d</span>, and
      <span class="national-text">k</span> respectively. In this dictionary we
      follow the standard Hausa orthography.
    </p>
  </div>
</template>
