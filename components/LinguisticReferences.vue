<script setup lang="ts">
const sections = [
  {
    label: 'Published works',
    size: 'xl',
    class:
      'font-bold font-heading text-primary-800 bg-primary-300 hover:bg-primary-200 dark:text-primary-400 dark:bg-primary-950 dark:hover:bg-primary-800',
    icon: 'i-heroicons-book-open',
    defaultOpen: true,
    slot: 'published'
  },
  {
    label: 'Unpublished materials',
    size: 'xl',
    class:
      'font-bold font-heading text-primary-800 bg-primary-300 hover:bg-primary-200 dark:text-primary-400 dark:bg-primary-950 dark:hover:bg-primary-800',
    icon: 'i-heroicons-pencil-square',
    slot: 'unpublished'
  },
  {
    label: 'General linguistics publications mentioning Cicipu',
    size: 'xl',
    class:
      'font-bold font-heading text-primary-800 bg-primary-300 hover:bg-primary-200 dark:text-primary-400 dark:bg-primary-950 dark:hover:bg-primary-800',
    icon: 'i-heroicons-document-plus',
    slot: 'mentions-cicipu'
  },
  {
    label: 'General linguistics resources on Kainji languages',
    size: 'xl',
    class:
      'font-bold font-heading text-primary-800 bg-primary-300 hover:bg-primary-200 dark:text-primary-400 dark:bg-primary-950 dark:hover:bg-primary-800',
    icon: 'i-heroicons-arrow-top-right-on-square-solid',
    slot: 'kainji'
  }
]
</script>

<template>
  <div>
    <div class="my-8 text-lg">
      <p>
        The most comprehensive grammatical resource for Cicipu is Stuart
        McGill's PhD thesis
        <NuxtLink
          to="https://app.box.com/s/t4q302sv8g75zhoua930o55wua4a4t7e"
          external
          target="_blank"
          >Gender and person agreement in Cicipu discourse</NuxtLink
        >. This contains a sketch phonology and grammar as well as details of
        the gender (i.e. noun class) and person agreement systems.
      </p>
      <p>
        The
        <NuxtLink
          to="https://app.box.com/s/t6puwd3ff4d6c3cjmteguc2hwutm69gz"
          external
          target="_blank"
          >Cicipu dictionary</NuxtLink
        >
        (edited by Stuart McGill and Markus Yabani) contains glosses and example
        sentences in both English and Hausa.
      </p>
      <p>
        Additional
        <NuxtLink to="#published">published</NuxtLink> and
        <NuxtLink to="#unpublished">unpublished</NuxtLink> works on Cicipu are
        listed below, along with more general works that either
        <NuxtLink to="#mentions-cicipu">mention Cicipu</NuxtLink> or else deal
        with <NuxtLink to="#kainji">Kainji</NuxtLink> languages in general.
      </p>
    </div>

    <UAccordion
      :items="sections"
      :multiple="true"
      :ui="{
        item: {
          size: '',
          color: '',
          padding: 'pl-4 pb-6'
        },
        default: {
          variant: 'soft'
        }
      }"
    >
      <template #published>
        <ul id="published" class="references">
          <li>
            McGill, Stuart. 2014. Cicipu.
            <cite>Journal of the International Phonetic Association</cite>,
            44(3), 303-318.
            <NuxtLink
              to="http://dx.doi.org/10.1017/S002510031400022X"
              external
              target="_blank"
              >http://dx.doi.org/10.1017/S002510031400022X.</NuxtLink
            >
          </li>
          <li>
            McGill, Stuart. 2012. The development of long consonants in Cicipu:
            a comparative perspective. In Roger M. Blench &amp; Stuart McGill
            (eds.)
            <cite
              ><NuxtLink
                to="https://www.koeppe.de/titel_advances-in-minority-language-research-in-nigeria-vol-i"
                external
                target="_blank"
                >Advances in minority language research in Nigeria</NuxtLink
              ></cite
            >
            vol. 1 (African languages monographs 5), 273-323. Köln: Rüdiger
            Köppe.
          </li>
          <li>
            McGill, Stuart and Roger M. Blench. 2012.
            <NuxtLink
              to="http://www.elpublishing.org/docs/1/11/ldd11_05.pdf"
              external
              target="_blank"
              >Documentation, development and ideology in the northwestern
              Kainji languages</NuxtLink
            >. In Peter K. Austin &amp; Stuart McGill (eds.)
            <cite>Language Documentation and Description</cite> 11, 90-135.
          </li>
          <li>
            McGill, Stuart. 2011.
            <NuxtLink
              to="http://www.elpublishing.org/docs/1/09/ldd09_06.pdf"
              external
              target="_blank"
              >Aspects of deixis in Cicipu: evidence from real-time video
              commentary</NuxtLink
            >. In Julia Sallbank (ed.)
            <cite>Language Documentation and Description</cite> 9, 121-168.
          </li>
          <li>
            McGill, Stuart. 2007.
            <NuxtLink
              to="https://journalofwestafricanlanguages.org/index.php/downloads/download/100-volume-34-2/466-the-cicipu-noun-class-system"
              external
              target="_blank"
              >The Cicipu noun class system.</NuxtLink
            >
            <cite>Journal of West African Languages</cite> 34(2), 51-90.
          </li>
        </ul>
      </template>
      <template #unpublished>
        <ul id="unpublished" class="references">
          <li>
            McGill, Stuart and Markus Yabani. 2016.
            <cite>Cicipu dictionary</cite>.
            <a href="dictionary.html">www.cicipu.org/dictionary.html</a>.
          </li>
          <li>
            McGill, Stuart. 2011.
            <NuxtLink
              to="https://app.box.com/s/jf2vnravqav902w7xd8rwmkm01b4vz8y"
              external
              target="_blank"
              >Vowel harmony, transparency, and opacity in Cicipu</NuxtLink
            >. Paper presented at the (West) African Phonology Day, SOAS, April
            2011.
          </li>
          <li>
            McGill, Stuart. 2009.
            <NuxtLink
              to="https://app.box.com/s/cb5yljg1x8zc7b098iuem8s1j0fdsodo"
              external
              target="_blank"
              >The genetic classification of Cicipu</NuxtLink
            >. Unpublished paper.
          </li>
          <li>
            McGill, Stuart. 2009.
            <NuxtLink
              to="https://app.box.com/s/t4q302sv8g75zhoua930o55wua4a4t7e"
              external
              target="_blank"
              ><cite
                >Gender and person agreement in Cicipu discourse</cite
              ></NuxtLink
            >. PhD thesis, School of Oriental and African Studies.
          </li>
          <li>
            Dettweiler, Stephen H. &amp; Sonia G. Dettweiler. 2002.
            <NuxtLink
              to="https://www.sil.org/resources/publications/entry/9215"
              external
              target="_blank"
              ><cite
                >Sociolinguistic survey (level one) of the Kamuku language
                cluster</cite
              ></NuxtLink
            >. Electronic manuscript.
          </li>
        </ul>
      </template>
      <template #mentions-cicipu>
        <ul id="mentions-cicipu" class="references">
          <li>
            Crozier, David H. &amp; Roger M. Blench. 1992.
            <cite>An Index of Nigerian Languages</cite>. 2nd edition. Dallas:
            SIL [<NuxtLink
              to="https://rogerblench.info/Language/Africa/Nigeria/Atlas%20of%20Nigerian%20Languages%202020.pdf"
              external
              target="_blank"
              >2020 edition</NuxtLink
            >
            is online].
          </li>
          <li>
            Gerhardt, Ludwig. 1989. Kainji and Platoid. In John Bendor-Samuel
            (ed.),
            <cite>The Niger-Congo languages</cite>, 359-76. Lanham: University
            Press of America.
          </li>
          <li>
            Blench, Roger. M. 1988.
            <cite>The Basa-Kamuku languages</cite>. Paper for the 18th
            Colloquium on African Languages, Leiden [superseded by
            <NuxtLink to="#kainji-overview" external>Blench n.d. c.</NuxtLink>]
          </li>
          <li>
            Westermann, Diedrich &amp; M. Bryan. 1952.
            <cite>Languages of West Africa: Part II</cite>. London: OUP for IAI.
          </li>
          <li>
            Bertho, J. 1952.
            <cite
              >Aperçu d'ensemble sur les dialectes de l'ouest de Nigéria</cite
            >. Bulletin IFAN 14, 259-71.
          </li>
        </ul>
      </template>
      <template #kainji>
        <div id="kainji" class="mt-4">
          <p>
            Most of these links are to external websites, in particular the SIL
            website and
            <NuxtLink to="http://www.rogerblench.info" external
              >Roger Blench's</NuxtLink
            >
            - the latter especially for a more comprehensive
            <NuxtLink
              to="http://www.rogerblench.info/Language/Niger-Congo/BC/Kainji/General/Kainji%20language%20overview.pdf"
              external
              >bibliography</NuxtLink
            >
            on Kainji languages.
          </p>
          <p>
            See also Becky Paterson's huge
            <NuxtLink
              to="https://www.zotero.org/groups/2548758/nw_kainji_bibliography/library"
              external
              target="_blank"
              >Kainji bibliography</NuxtLink
            >, a collection of general resources linked to the Kainji language
            area (linguistic and non-linguistic).
          </p>
        </div>
        <ul class="references">
          <li>
            Blench, Roger. M. 1988.
            <cite>The Basa-Kamuku languages</cite>. Paper for the 18th
            Colloquium on African Languages, Leiden [superseded by
            <a href="#kainji-overview">Blench n.d. c.</a>]
          </li>
          <li>
            Blench, Roger. M. 1991.
            <NuxtLink
              to="http://www.rogerblench.info/Language/Niger-Congo/BC/Kainji/Basa/Basa%20Dictionary%202019%20complete.pdf"
              external
              target="_blank"
              ><cite
                >Dictionary of the language of the Bas(s)a people</cite
              ></NuxtLink
            >. Electronic manuscript.
          </li>
          <li>
            Blench, Roger. M. 2007.
            <NuxtLink
              to="http://www.rogerblench.info/Language/Niger-Congo/BC/Kainji/Kambari/Tsuvadi/Tsuvadi%20wordlist%20composite.pdf"
              external
              target="_blank"
              ><cite
                >A sketch of the phonology and an extended wordlist of
                TsuVa&#599;i, a Kambari language of Western Nigeria</cite
              ></NuxtLink
            >. Electronic manuscript.
          </li>
          <li>
            Blench, Roger. M. n.d. a.
            <cite>The Laru people and their language</cite>. Electronic
            manuscript.
          </li>
          <li>
            Blench, Roger. M. n.d. b.&nbsp;<cite
              >The Lopa language of Central Nigeria and its affinities</cite
            >. Electronic manuscript.
          </li>
          <li>
            <div id="kainji-overview">
              Blench, Roger. M. n.d. c.
              <NuxtLink
                to="http://www.rogerblench.info/Language/Niger-Congo/BC/Kainji/General/Kainji%20language%20overview.pdf"
                external
                target="_blank"
                ><cite
                  >The Kainji languages of northwestern Nigeria.</cite
                ></NuxtLink
              >
              Electronic manuscript.
            </div>
          </li>
          <li>
            Blench, Roger M. &amp; McGill, Stuart. 2012.
            <NuxtLink
              to="https://www.koeppe.de/titel_advances-in-minority-language-research-in-nigeria-vol-i"
              external
              target="_blank"
              ><cite
                >Advances in minority language research in Nigeria</cite
              ></NuxtLink
            >
            vol. 1 (African languages monographs 5). Köln: Rüdiger Köppe.
          </li>

          <li>
            Boettger, E. &amp; V. Boettger. 1967.<cite> Tsureshe Grammar</cite>.
            Unpublished manuscript.
          </li>
          <li>
            Cressman, Esther &amp; Donna Skitch. 1980. <cite>Duka</cite>. In M.
            Kropp-Dakubu (ed.), West African language data sheets, vol. 2.
            Leiden: WALS/ASC.
          </li>
          <li>
            Crozier, David H. 1984.
            <cite>A study in the discourse grammar of Cishingini</cite>.&nbsp;
            PhD dissertation, University of Ibadan.
          </li>
          <li>
            Crozier, David H. &amp; Roger M. Blench. 1992.
            <cite>An Index of Nigerian Languages</cite>. 2nd edition. Dallas:
            SIL [<NuxtLink
              to="https://rogerblench.info/Language/Africa/Nigeria/Atlas%20of%20Nigerian%20Languages%202020.pdf"
              external
              target="_blank"
              >2020 edition</NuxtLink
            >
            is online].
          </li>
          <li>
            De Wolf, Paul Polydoor. 1971.
            <cite>The noun class system of Proto-Benue-Congo</cite>. The Hague:
            Mouton de Gruyter.
          </li>
          <li>
            Dettweiler, Stephen H. 2000. Vowel harmony and neutral vowels in
            C&#8217;Lela.
            <cite>Journal of West African Languages</cite> 28, 3-18.
          </li>
          <li>
            Dettweiler, Stephen H. &amp; Sonia G. Dettweiler. 2002.
            <cite
              ><NuxtLink
                to="https://www.sil.org/resources/publications/entry/9113"
                external
                target="_blank"
                >Sociolinguistic survey (level one) of the Pongu
                people</NuxtLink
              ></cite
            >. Electronic manuscript.
          </li>
          <li>
            Dettweiler, Stephen H. &amp; Sonia G. Dettweiler. 2002.
            <cite
              ><NuxtLink
                to="https://www.sil.org/resources/archives/9131"
                external
                target="_blank"
                >Sociolinguistic survey (level one) of the Reshe
                people</NuxtLink
              ></cite
            >. Electronic manuscript.
          </li>
          <li>
            Dettweiler, Stephen H. &amp; Sonia G. Dettweiler. 2003.
            <cite
              ><NuxtLink
                to="https://www.sil.org/resources/publications/entry/9129"
                external
                target="_blank"
                >Sociolinguistic survey of the Duka (Hun-Saare) people</NuxtLink
              ></cite
            >. Electronic manuscript.
          </li>
          <li>
            Dettweiler, Stephen H. &amp; Sonia G. Dettweiler. 2005.
            <cite
              ><NuxtLink
                to="https://www.sil.org/resources/publications/entry/9161"
                external
                target="_blank"
                >Sociolinguistic survey of the Lela people</NuxtLink
              ></cite
            >. Electronic manuscript.
          </li>
          <li>
            Gerhardt, Ludwig. 1989. Kainji and Platoid. In John Bendor-Samuel
            (ed.),
            <cite>The Niger-Congo languages</cite>, 359-76. Lanham: University
            Press of America.
          </li>
          <li>
            Heath, David &amp; Carleen Heath. 2002.
            <cite
              >A phonological and grammatical sketch of the Dukawa
              language</cite
            >. Electronic manuscript.
          </li>
          <li>
            Hoffmann, Carl. 1963. The noun-class system of Central Kambari.
            <cite>Journal of African Languages</cite> 2(2), 160-9.
          </li>
          <li>
            Hoffmann, Carl. 1965. A wordlist of Central Kambari.
            <cite>Journal of West African Languages</cite> 2(2), 7-31.
          </li>
          <li>
            Hoffmann, Carl. 1967. An outline of the Dakarkari noun class system
            and the relation between prefix and suffix noun-class systems. In G.
            Manessy (ed.),
            <cite
              >La classification nominale dans les langues
              négro-africaines</cite
            >, 237-59. Paris: CNRS.
          </li>
          <li>
            Hoffmann, Carl. 1972. A note on vowel contraction in Central
            Kambari. Research Notes [Ibadan] 5(2/3), 73-91.
          </li>
          <li>
            Koelle, Sigismund Wilhelm. 1963.
            <cite>Polyglotta Africana</cite>: photomechanic reprint of the
            original edition, Church Missionary Society, London 1854. Freetown:
            Fourah Bay College.
          </li>
          <li>Lovelace, David. 1989. Computer printout on Tsuva&#599;i.</li>
          <li>
            MacDonell, James. 2007.
            <cite
              >A phonological and grammatical sketch of the Pongu language</cite
            >. Electronic manuscript.
          </li>
          <li>
            McGill, Stuart, 2008.
            <NuxtLink
              to="https://app.box.com/s/qoqerz6esxua3i7mk377ps9n1yb8556s"
              external
              target="_blank"
              >The Damakawa language</NuxtLink
            >. Electronic manuscript.
          </li>
          <li>
            Rikoto, B., P. Senchi, Stephen H. Dettweiler, and Sonia G.
            Dettweiler. 2002.
            <i
              ><NuxtLink
                to="http://blog.rowbory.co.uk/linguistics/clela-dictionary/"
                external
                target="_blank"
                >K&#704;Ba&#817;tksa&#817;:
                C&#704;Lela&#8212;C&#704;Turanci&#8212;C&#704;Gana&nbsp;Dictionary
                =&nbsp; C&#704;Lela&#8212;English&#8212;Hausa = Kamus: Na
                Dakarci&#8212;Turanci&#8212;Hausa</NuxtLink
              >.</i
            >
            &nbsp;Lelna Language Development/Translation Association.
          </li>
          <li>
            Rowlands, E. C. 1962. Notes on some class languages of northern
            Nigeria.
            <cite>African Language Studies</cite> 3, 71-83.
          </li>
          <li>
            Smith, Rebecca Dow. 2007.
            <NuxtLink
              to="https://commons.und.edu/theses/4476/"
              external
              target="_blank"
              ><cite>The noun class system of Ut-ma'in</cite></NuxtLink
            >.&nbsp; MA dissertation, University of North Dakota.
          </li>
          <li>
            Stark, Janie P. 2003.
            <cite>The Tsikimba-Hausa-English dictionary</cite>. Salka: Kambari
            Language Project.
          </li>
          <li>
            Stark, Janie P. 2004.
            <cite>The Cishingini-Hausa-English dictionary</cite>. Salka: Kambari
            Language Project.
          </li>
          <li>
            Stark, Janie P. 2004.
            <cite>The Tsishingini-Hausa-English dictionary</cite>. Salka:
            Kambari Language Project.
          </li>
          <li>
            Williamson, Kay &amp; Kiyoshi Shimizu. 1968.
            <cite>Benue-Congo comparative wordlist</cite>. Ibadan: University of
            Ibadan, West African Linguistic Society.
          </li>
        </ul>
      </template>
    </UAccordion>
  </div>
</template>

<style scoped>
a {
  @apply text-primary-600 visited:text-primary-700 dark:text-primary-600 dark:visited:text-primary-700 hover:text-primary-400 dark:hover:text-primary-600;
}
</style>
