<script setup lang="ts">
const sections = [
  {
    label: 'Published works',
    size: 'xl',
    class: 'font-bold font-heading',
    icon: 'i-heroicons-book-open',
    defaultOpen: true,
    slot: 'published'
  }
]
</script>

<template>
  <div>
    <div class="my-8 text-lg">
      The most comprehensive grammatical resource for Cicipu is Stuart McGill's
      PhD thesis
      <a href="papers/gender_and_person_agreement_in_cicipu_discourse.pdf"
        >Gender and person agreement in Cicipu discourse</a
      >. This contains a sketch phonology and grammar as well as details of the
      gender (i.e. noun class) and person agreement systems. The Cicipu
      dictionary (edited by Stuart McGill and Markus Yabani) is available
      <a href="dictionary.html">online</a>, with glosses and audio example
      sentences in both English and Hausa. Additional
      <a href="#published">published</a> and
      <a href="#unpublished">unpublished</a> works on Cicipu and other
      <a href="#kainji">Kainji</a> languages are listed below, see also various
      <a href="anthropology.html">anthropological and historical works</a>
      which mention the Acipu.
    </div>

    <UAccordion
      :items="sections"
      :ui="{
        wrapper: 'w-full flex flex-col',
        container: 'w-full flex flex-col',
        item: {
          base: '',
          size: '',
          color: '',
          padding: 'pt-1.5 pb-3',
          icon: 'ms-auto transform transition-transform duration-200'
        },
        transition: {
          enterActiveClass:
            'overflow-hidden transition-[height] duration-200 ease-out',
          leaveActiveClass:
            'overflow-hidden transition-[height] duration-200 ease-out'
        },
        default: {
          openIcon: 'i-heroicons-chevron-down-20-solid',
          closeIcon: '',
          class: 'mb-1.5 w-full',
          variant: 'soft'
        }
      }"
    >
      <template #published>
        <ul class="references">
          <li>
            McGill, Stuart. 2014. Cicipu.
            <cite>Journal of the International Phonetic Association</cite>,
            44(3), 303-318.
            <a href="http://dx.doi.org/10.1017/S002510031400022X"
              >http://dx.doi.org/10.1017/S002510031400022X.</a
            >
          </li>
          <li>
            McGill, Stuart. 2012. The development of long consonants in Cicipu:
            a comparative perspective. In Roger M. Blench &amp; Stuart McGill
            (eds.)
            <cite
              ><a
                href="https://www.koeppe.de/titel_advances-in-minority-language-research-in-nigeria-vol-i"
                >Advances in minority language research in Nigeria</a
              ></cite
            >
            vol. 1 (African languages monographs 5), 273-323. Köln: Rüdiger
            Köppe.
          </li>
          <li id="kainji_doc">
            McGill, Stuart and Roger M. Blench. 2012.
            <a href="http://www.elpublishing.org/docs/1/11/ldd11_05.pdf"
              >Documentation, development and ideology in the northwestern
              Kainji languages</a
            >. In Peter K. Austin &amp; Stuart McGill (eds.)
            <cite>Language Documentation and Description</cite> 11, 90-135.
          </li>
          <li>
            McGill, Stuart. 2011.
            <a href="http://www.elpublishing.org/docs/1/09/ldd09_06.pdf"
              >Aspects of deixis in Cicipu: evidence from real-time video
              commentary</a
            >. In Julia Sallbank (ed.)
            <cite>Language Documentation and Description</cite> 9, 121-168.
          </li>
          <li>
            McGill, Stuart. 2007.
            <a
              href="http://main.journalofwestafricanlanguages.org/index.php/downloads/download/100-volume-34-2/466-the-cicipu-noun-class-system"
              >The Cicipu noun class system.</a
            >
            <cite>Journal of West African Languages</cite> 34(2), 51-90.
          </li>
        </ul>
      </template>
    </UAccordion>
  </div>
</template>
