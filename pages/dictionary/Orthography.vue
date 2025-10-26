<script setup lang="ts">
import { useAppStore } from '~/stores/app.js'
import AlphabetExamplesTable from '~/components/dictionary/AlphabetExamplesTable.vue'
import ObjectCliticsTable from '~/components/dictionary/ObjectCliticsTable.vue'
import ReducedObjectCliticsTable from '~/components/dictionary/ReducedObjectCliticsTable.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''
</script>

<template>
  <div class="mx-auto max-w-2xl text-lg">
    <h1>Writing system</h1>

    <div>
      <h2 class="panel-title">Consonants and vowels</h2>

      <p>
        There are 21 single-letter consonants in the Cicipu alphabet (e.g.
        <span class="cicipu-text">k</span>), as well as 6 double-letter
        consonants (e.g. <span class="cicipu-text">kw</span>), making 27
        altogether.
      </p>
      <p>
        There are 6 vowels: <span class="cicipu-text">a e i o ø u</span>, all of
        which have nasal counterparts written with a tilde (~) e.g.
        <span class="cicipu-text">sẽ'ẽ</span> 'carve'ː
        <span class="cicipu-text">ã ẽ ĩ õ ø̃ ũ</span>. Note especially the
        pronunciation of <span class="cicipu-text">ø</span>.
      </p>
      <p>
        There are four diphthongs: <span class="cicipu-text">ai eu ei eu</span>.
      </p>
      <p>
        Some words ending with <span class="cicipu-text">ãu</span>,
        <span class="cicipu-text">õ</span> and
        <span class="cicipu-text">ø̃</span> are pronounced with an [<span
          class="phonetic"
          >m</span
        >] when they occur utterance-finally e.g.
        <span class="phonetic">/kɔ̀ɓɔ̃́/ [kɔ̀ɓɔ̃́m]</span> 'axe', written
        <span class="cicipu-text">købøm</span>. Native speakers consistently
        prefer to write the <span class="cicipu-text">m</span> in all contexts,
        and so this practice is followed in this dictionary.
      </p>
      <p>
        All consonants and vowels can be lengthened e.g.
        <span class="cicipu-text">yuwwo</span> 'turn round' vs.
        <span class="cicipu-text">yuwo</span> 'fall',
        <span class="cicipu-text">ìtáatú</span> 'mat' vs.
        <span class="cicipu-text">ùtátú</span> 'straw bundle'.
      </p>
    </div>
    <div>
      <h2 class="panel-title">Alphabet</h2>
      <AlphabetExamplesTable />
    </div>

    <div>
      <h2 class="panel-title">Subject prefixes</h2>
      <div class="panel-body">
        Verbs take prefixes agreeing with their subjects, either in person or
        gender. For example in the phrase
        <span class="cicipu-text">kàràkúmí kádúkwà</span> 'the camel went' the
        <span class="cicipu-text">ká-</span> prefix on the verb dukwa agrees in
        gender with <span class="cicipu-text">kàràkúmí</span> 'camel'. Various
        phonological and morphosyntactic properties show that these are tightly
        bound to the verb stem. In the orthography they are written together
        with the verb, without any space or hyphen, for example
        <span class="cicipu-text">kadukwa</span>.
      </div>
    </div>

    <div>
      <h2 class="panel-title">Object markers</h2>

      <p>
        Object markers follow the verb and are used instead of full NPs. Unlike
        the subject prefixes their tone is independent of the verb and their
        vowels do not harmonise with those of the verb. They are written as
        separate words in the orthography (e.g.
        <span class="cicipu-text">ùmátà rè</span> 'she gave birth to them' is
        written <span class="cicipu-text">umata re</span>).
      </p>
      <p>
        The third person singular object marker
        <span class="cicipu-text">vì</span> causes the final vowel of the verb
        to change to <span class="cicipu-text">i</span>. So for example
        <span class="cicipu-text">ùmátà</span> +
        <span class="cicipu-text">vì</span> 'she gave birth to him' →
        <span class="cicipu-text">ùmátì vì</span>. This is written as it sounds
        (e.g. <span class="cicipu-text">umati vi</span>).
      </p>
      <p>
        In some environments (especially before the negator
        <span class="cicipu-text">cé</span>) the singular object markers appear
        in compressed form. Compare the following tables:
      </p>

      <ObjectCliticsTable />
      <ReducedObjectCliticsTable />
    </div>

    <div>
      <h2 class="panel-title">Other clitics</h2>
      <p>
        The associative proclitic is used to express possession and various
        other relationships between two noun phrases, for example
        <span class="cicipu-text">kàgíiwá kó=↓móní</span> 'hippo', literally
        'elephant of-water'. In this dictionary a hyphen is placed between the
        associative marker and the second noun phrase (e.g.
        <span class="cicipu-text">kagiiwa komoni</span>).
      </p>
      <p>
        The conjunction <span class="cicipu-text">ìn</span> 'and/with' is
        realised as a proclitic <span class="cicipu-text">n-</span> before
        vowel-initial words, for example
        <span class="cicipu-text">n-ùlénjí</span> 'in the afternoon', literally
        'with-sun'. Again this proclitic is written with a hyphen in the
        dictionary (e.g. <span class="cicipu-text">n-ulenji</span>).
      </p>
      <p>
        The locative proclitic <span class="cicipu-text">á-</span> (<span
          class="cicipu-text"
          >á=↓kákáasùwà</span
        >
        'in the market') is also written with a hyphen (<span
          class="cicipu-text"
          >a-kakaasuwa</span
        >). If the word to which the clitic attaches begins with a vowel then
        the first vowel lengthens (e.g. <span class="cicipu-text">á-</span> +
        <span class="cicipu-text">ùtáarí</span> 'at the stony place' →
        <span class="cicipu-text">úu↓táarí</span>). In this case no hyphen is
        used (e.g. <span class="cicipu-text">uutaari</span>).
      </p>
      <p>
        The negator <span class="cicipu-text">cé</span> is also arguably an
        enclitic but is always written as a separate word e.g.
        <span class="cicipu-text">udukwa ce</span> 'he didn't go'.
      </p>
    </div>

    <div>
      <h2 class="panel-title">Tone</h2>
      <p>
        Cicipu has two tones <em>H L</em> as well as a falling tone <em>HL</em>.
        Two words may differ only by tone and yet have completely different
        meanings, for example <span class="cicipu-text">káayà</span> 'bean' vs.
        <span class="cicipu-text">káayá</span> 'hut'. Tonal 'minimal pairs' like
        this are actually very rare in Cicipu, and so lexical tone is not
        generally marked in the orthography. For this reason tone marks have
        been omitted from the headwords and examples in this dictionary.
        Language learners who want to know how to pronounce the word can use the
        tones in the phonetic field (which are actually
        <i>phonological</i> indicators) as a guide.
      </p>
      <p>
        Although lexical tone has a low functional load, grammatical tone is
        very important in Cicipu and is sometimes the only indicator of
        important grammatical categories. Therefore in two cases tone-marking is
        used to distinguish between potentially ambiguous constructions.
      </p>
      <p>
        Firstly, for most person/number combinations the realis verb form
        differs only by tone from the irrealis form (compare
        <span class="cicipu-text">ùdúkwà</span> 'he went' vs.
        <span class="cicipu-text">údùkwà</span> 'he should go'). In the writing
        system the realis forms are left unmarked e.g.
        <span class="cicipu-text">udukwa</span> 'he went',
        <span class="cicipu-text">waaya</span> 'he came', while the irrealis
        forms are represented with an acute accent above the first vowel e.g.
        <span class="cicipu-text">údukwa</span> 'he should go',
        <span class="cicipu-text">wáaya</span> 'he should come'.
      </p>
      <p>
        Secondly, the plural imperative suffix
        <span class="cicipu-text">-nà</span> is distinguished only by tone from
        the ventive suffix <span class="cicipu-text">-na</span>. The plural
        imperative suffix is always low tone, while the ventive suffix takes its
        town from the overall verbal melody. So in the imperative there is a
        tonal contrast between <span class="cicipu-text">kàbàná</span> 'bringǃ'
        and <span class="cicipu-text">kàbánà</span> 'you (pl.) take'. The plural
        imperative suffix is always written orthographically with a grave accent
        e.g. <span class="cicipu-text">kabanà</span> 'you (pl.) take'.
      </p>
    </div>

    <UAlert
      icon="i-heroicons-information-circle-solid"
      variant="outline"
      :ui="{ title: 'font-vernacular' }"
    >
      <template #description>
        More information on the Cicipu writing system is available
        <TextLink to="../literacy/Orthography">here</TextLink>. For more
        information on Cicipu phonology see chapter 3 in
        <TextLink
          external
          to="https://app.box.com/s/t4q302sv8g75zhoua930o55wua4a4t7e"
          >Gender and person agreement in Cicipu discourse</TextLink
        >.
      </template>
    </UAlert>
  </div>
</template>
