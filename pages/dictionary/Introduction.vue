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
    <h1>Cicipu dictionary</h1>
    <div class="italic">Stuart McGill, 2017</div>
    <p>
      This trilingual dictionary is the first of any kind for the Cicipu
      language. It is intended for people who want to learn to read, write, or
      speak the Cicipu language and who already read English or Hausa. These
      might be native speakers of Cicipu, or others who are learning it as a
      second language. A second reason for producing the dictionary is to ensure
      that future generations of Acipu have a written record of their language.
      Finally, we hope the dictionary will also be of some interest to
      linguists, and so a fuller introduction is available in
      <TextLink
        :external="true"
        to="https://app.box.com/s/6dym0ewo1inff9twrqr89if7bwudy9pb"
        >PDF format</TextLink
      >, providing basic sociolinguistic, phonological and grammatical
      information. For further information see McGill (2009).
    </p>
    <UAlert
      icon="i-heroicons-chat-bubble-left"
      variant="outline"
      title="tʃìtʃípù"
      description="The c in Cicipu is pronounced like ch in 'church'"
      :ui="{ title: 'font-vernacular' }"
    />
    <p>
      Cicipu is spoken in northwest Nigeria, with the main language area
      straddling the boundary between Kebbi and Niger States (<TextLink
        to="#figure-1"
        >Figure 1</TextLink
      >).
    </p>
    <LanguageAreaMap id="figure-1" />
    <p>
      The language is a member of the
      <TextLink
        to="http://www.rogerblench.info/Language/Niger-Congo/BC/Kainji/KOP.htm"
        >Kainji</TextLink
      >
      subgroup of Benue-Congo. Native speakers identify seven dialects
      (<TextLink to="#table-1">Table 1</TextLink>), the approximate locations of
      which can be seen in <TextLink to="#figure-2">Figure 2</TextLink>.
    </p>
    <DialectTable id="table-1" class="mt-8" />
    <DialectMap id="figure-2" class="mt-8" />
    <p>
      Unless otherwise stated the words and examples in this dictionary are from
      Tirisino, the most prestigious and probably most robust dialect of Cicipu.
      The Orisino have maintained their language, and children in every village
      I visited spoke Cicipu as their mother tongue. Nevertheless younger
      speakers are heavily influenced by Hausa, which has spread into
      sociolinguistic domains such as casual conversation which were previously
      the preserve of the vernacular. The speech of young men and children
      (particularly boys) is markedly different to that of old men, with a
      higher incidence of Hausa loanwords and calqued constructions. The number
      system is a linguistic subdomain which, although very simple, is falling
      out of use: some young Orisino struggle to count past 5. Similarly many of
      the words in this dictionary will be unknown to the younger generation.
    </p>
    <p>
      In contrast, Tikula is possibly the most endangered of the dialects, with
      only a small number of children learning Cicipu. The Tikumbasi dialect may
      be similarly endangered, and others likely fall between these two
      extremes. A few words from other dialects (especially Tikula) are included
      in the dictionary and clearly marked as such, but no systematic research
      has been attempted on any dialect other than Tirisino.
    </p>
    <p>
      This dictionary is part of a broader effort to document the Cicipu
      language which began in 2006, funded mainly by the
      <TextLink to="https://peterkaustin.com/projects/hrelp/" :external="true"
        >Hans Rausing Endangered Language Project</TextLink
      >. The focus was on spoken language, resulting in a substantial corpus of
      texts from various genres (available from the
      <TextLink
        to="https://www.elararchive.org/uncategorized/SO_0898469b-5c6f-4f35-a3b8-ec825211154c/"
        :external="true"
        >Endangered Languages Archive</TextLink
      >) but little in the way of lexical documentation. This dictionary serves
      to improve the balance.
    </p>
    <p>
      The lexical database on which the dictionary is based has been built up
      gradually since Stuart McGill’s initial linguistic fieldwork in 2006. From
      2010-2012 native speaker Markus Yabani was responsible for recording the
      example sentences together with their Hausa translations. It is his voice
      that can be heard in the recordings. In 2015 a LexiquePro version of this
      dictionary was put online, and then in 2017 this was replaced by a
      mobile-friendly version. The photographs included in this dictionary were
      taken variously by Markus Yabani, Stuart McGill, and
      <TextLink :external="true" to="http://rogerblench.info/"
        >Roger Blench</TextLink
      >.
    </p>
    <p>
      I'm grateful to the
      <TextLink
        :external="true"
        to="https://www.rogerblench.info/KWEF/KWEF/KWEFOP.htm"
        >Kay Williamson Educational Foundation</TextLink
      >
      for a field trip grant which greatly helped in the preparation of this
      dictionary.
    </p>
  </div>
</template>
