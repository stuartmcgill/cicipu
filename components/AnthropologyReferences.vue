<script setup lang="ts">
const sections = [
  {
    label: 'The Acipu',
    size: 'xl',
    class: 'font-bold font-heading',
    icon: 'i-heroicons-users-solid',
    defaultOpen: true,
    slot: 'acipu'
  },
  {
    label: 'Historical and anthropological sources for Kainji in general',
    size: 'xl',
    class: 'font-bold font-heading',
    icon: 'i-heroicons-arrow-top-right-on-square-solid',
    slot: 'kainji'
  }
]
</script>

<template>
  <div>
    <div class="my-8 text-lg">
      See the bibliography in Roger Blench's
      <TextLink
        to="http://www.rogerblench.info/Language/Niger-Congo/BC/Kainji/General/Kainji%20language%20overview.pdf"
        external
        >Kainji overview</TextLink
      >
      for further references.
    </div>
    <UAccordion :items="sections">
      <template #acipu>
        <p>
          The anthropologist A. B. Mathews spent two months living with the
          Acipu in 1926 and wrote up a report, which has never been published
          but can be found in the National Archives at Kaduna. There is a
          digitised copy available for download
          <TextLink
            to="https://app.box.com/s/23nfuvt6xd6bcmauomre0g7zm632yzjr"
            external
            >here</TextLink
          >
        </p>
        <p>
          Several of the articles below are about the sword and spears of Kisra,
          relics housed in the king's palace on Korisino. Kisra is a legendary
          magician-king who is said to have fled to Africa after losing a war
          against Mohammed. His son or grandson is said to have been the first
          king of the Acipu. Several other tribes in Nigeria have similar origin
          stories.
        </p>
        <p class="mb-8">
          The remaining books in the list below (CAPRO 1995, Gunn and Conant
          1960, Swank 1977, Temple 1922) each have a section on Cicipu, but
          Temple's and Swank's accounts are very brief, and the other two rely
          heavily on Mathews (1926).
        </p>
        <ul class="references">
          <li id="capro">
            CAPRO Research Office. 1995. <cite>Kingdoms at war</cite>. Jos:
            CAPRO Media.
          </li>
          <li>
            Gunn, H. D. &amp; F. P. Conant. 1960.
            <cite>Peoples of the middle Niger region</cite>, Northern Nigeria.
            London: International African Institute.
          </li>
          <li id="mathews">
            Mathews, A. B. 1926.
            <cite>Historical and anthropological report on the Achifawa</cite>.
            Unpublished manuscript held in the National Archives, Kaduna: K2,
            068. [See
            <TextLink
              to="https://app.box.com/s/23nfuvt6xd6bcmauomre0g7zm632yzjr"
              :external="true"
            >
              here
            </TextLink>
            for a scanned copy].
          </li>
          <li>
            Mathews, A. B. 1950. The Kisra legend.
            <cite>African Studies</cite> 9, 144-7.
          </li>
          <li>
            Stevens Jr., Phillips. 1975. The Kisra legend and the distortion of
            historical tradition.
            <cite>The Journal of African History</cite> 16, 185-200.
          </li>
          <li>
            Stewart, Marjorie H. 1980. The Kisra legend as oral history.
            <cite>International Journal of African Historical Studies</cite> 13,
            51-70.
          </li>
          <li id="swank">
            Swank, Gerald O. 1977.
            <cite
              >Frontier peoples of Central Nigeria and a strategy for
              outreach</cite
            >. William Carey Library: South Pasadena, CA.
          </li>
          <li>
            Temple, O. 1922.
            <cite
              >Notes on the tribes, provinces, emirates, and states of the
              northern provinces of Nigeria</cite
            >. Lagos: CMS Bookshop.
          </li>
        </ul>
      </template>
      <template #kainji>
        <p class="mb-8">
          For Cicipu history see especially the edited volume
          <cite>Studies in the history of the people of Zuru Emirate</cite>
          (Augi and Lawal 1990), in particular Lawal (1990) and Augi (1990),
          also Usman (1981).
        </p>
        <ul class="references">
          <li>
            Adamu, M. 1978.
            <cite>The Hausa factor in West African history</cite>. Zaria: Ahmadu
            Bello University Press.
          </li>
          <li>
            Augi, A. R. 1990. A survey of social and political history of Zuru
            emirate. In A. R. Augi & S. U. Lawal (eds.),
            <cite>Studies in the history of the people of Zuru emirate</cite>,
            82-110. Enugu, Nigeria: Fourth Dimension.
          </li>
          <li>
            Augi, A. R. & S. U. Lawal (eds.). 1990.
            <cite>Studies in the history of the people of Zuru emirate</cite>.
            Enugu, Nigeria: Fourth Dimension.
          </li>
          <li>
            Bako, Ahmed. 1990. Transition and changes in religions and belief
            systems in Zuru emirate. In A. R. Augi & S. U. Lawal (eds.),
            <cite>Studies in the history of the people of Zuru emirate</cite>,
            111-31. Enugu, Nigeria: Fourth Dimension.
          </li>
          <li>
            Duff, E. C. (compiler). 1920.
            <cite>Gazetteer of Kontagora Province</cite>. Revised by W.
            Hamilton-Browne. London: Waterlow.
          </li>
          <li>
            Harris, P. 1930. Notes on Yauri (Sokoto Province), Nigeria.
            <cite
              >Journal of the Royal Anthropological Institute of Great Britain
              and Ireland&nbsp;</cite
            >
            60, 283-334.
          </li>
          <li>
            Harris, P. 1938. Notes on the Dakakari peoples of Sokoto Province,
            Nigeria.
            <cite
              >Journal of the Royal Anthropological Institute of Great Britain
              and Ireland</cite
            >
            68, 113-52.
          </li>
          <li>
            Harris, P. 1946. Notes on the Reshe language.
            <cite>Journal of African Studies</cite> 5(4), 221-42.
          </li>
          <li>
            Lawal, S. U. 1990. The evolution and development of the economies of
            Kasar Zuru before c. 1900 A.D. In A. R. Augi & S. U. Lawal (eds.),
            <cite>Studies in the history of the people of Zuru emirate</cite>,
            56-81. Enugu, Nigeria: Fourth Dimension.
          </li>
          <li>
            Meek, Charles Kingsley. 1925.
            <cite>The northern&nbsp; tribes of Nigeria</cite>. London: OUP.
          </li>
          <li>
            Prazan, Ceslaus. 1977.
            <cite>The Dukkawa of Northwest Nigeria</cite>. Pittsburgh: Duquesne
            University Press.
          </li>
          <li>
            Usman, Yusufu Bala. 1981.
            <cite
              >The transformation of Katsina, 1400-1883 : the emergence and
              overthrow of the Sarauta system and the establishment of the
              emirate</cite
            >. Zaria: Ahmadu Bello University Press.
          </li>
        </ul>
      </template>
    </UAccordion>
  </div>
</template>
