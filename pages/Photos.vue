<script setup lang="ts">
interface Image {
  src: string
  caption: string
}

interface Gallery {
  name: string
  description?: string
  images: Image[]
}

const tabs = [
  {
    label: 'Beer-making'
  },
  {
    label: 'Building'
  },
  {
    label: 'Ciciya (youth) festival'
  },
  {
    label: 'Crafts'
  },
  {
    label: "Festival of the Dead (Røø'ø)"
  },
  {
    label: 'Farming'
  },
  {
    label: 'Fieldwork'
  },
  {
    label: 'Kezzeme festival'
  },
  {
    label: 'Korisino'
  },
  {
    label: 'Marriage'
  },
  {
    label: 'Orthography'
  },
  {
    label: 'Religion'
  },
  {
    label: 'Rock art'
  },
  {
    label: 'Scenery'
  }
]

const galleries = [
  {
    name: 'Beer-making',
    description: '',
    images: [
      {
        src: '/img/gallery/beer_01.jpg',
        caption:
          "Beer 'stones' used when mulling beer. These hot metal objects are plunged into the beer to heat it up and improve the flavour."
      },
      {
        src: '/img/gallery/beer_02.jpg',
        caption: 'Plunging the beer stones into the beer'
      },
      {
        src: '/img/gallery/beer_03.jpg',
        caption:
          'Tontono Ɗanjuma making guineacorn beer, a complex process taking several days'
      },
      {
        src: '/img/gallery/beer_04.jpg',
        caption: 'Audu Agulu drinking beer from a calabash'
      },
      {
        src: '/img/gallery/beer_05.jpg',
        caption: "Mohammed Musa in Garkuwa Bawa's beer cave on Ukula hill"
      }
    ]
  },
  {
    name: 'Building',
    images: [
      {
        src: '/img/gallery/building_01.jpg',
        caption:
          'Block-making is usually a communal task, with all the men in the village working together (and enjoying strong tea from Niger)'
      },
      {
        src: '/img/gallery/building_02.jpg',
        caption: 'Markus Yabani building a hut'
      },
      {
        src: '/img/gallery/building_03.jpg',
        caption: 'Building the roof framework'
      },
      { src: '/img/gallery/building_04.jpg', caption: 'Now with thatch added' },
      {
        src: '/img/gallery/building_05.jpg',
        caption: 'Ibrahim Ɗanjuma thatching'
      },
      {
        src: '/img/gallery/building_06.jpg',
        caption:
          'Ibrahim_Wakiso building a granary. The mud is moulded together using the hands: each layer of a few inches in height is left to dry before the next is added.'
      },
      {
        src: '/img/gallery/building_07.jpg',
        caption:
          'Granaries are built raised to prevent rainwater spoiling the corn, and the hens sleep in this space.'
      },
      {
        src: '/img/gallery/building_08.jpg',
        caption:
          "'asu kuzila (bathing place). An early example of Cicipu writing."
      }
    ]
  },
  {
    name: 'Ciciya (youth) festival',
    description: `<p class="mb-2">At the Ciciya festival young men and women dress up in exotic costumes and perform spectacular feats of dancing.</p>
<p class="mb-2">For the Orisino division Ciciya is a part of Ukumbu, the last festival of the year held in December or January.</p>
<p>Boys take part in this festival the year that they complete their Kezzeme initiation.
<p>The Odipo division celebrate Ciciya as a stand-alone festival in August or September (unless the Caari official has died, in which case it will be combined with the Kezzeme).<\p>`,
    images: [
      { src: '/img/gallery/ciciya_01.jpg', caption: 'Young Odipo men' },
      { src: '/img/gallery/ciciya_02.jpg', caption: 'Young Odipo men' },
      { src: '/img/gallery/ciciya_03.jpg', caption: 'Odipo youths' },
      { src: '/img/gallery/ciciya_04.jpg', caption: 'Young man from Korisino' },
      { src: '/img/gallery/ciciya_05.jpg', caption: 'Young men from Korisino' },
      {
        src: '/img/gallery/ciciya_06.jpg',
        caption: 'Young men from Korisino (back view)'
      },
      {
        src: '/img/gallery/ciciya_07.jpg',
        caption:
          'Ciciya musicians (Drummerː Mobiro (from Maguji), Rattleː Gayya (from Molloci))'
      },
      {
        src: '/img/gallery/ciciya_08.jpg',
        caption:
          "In the red turban is Bako Kori (Keduugeri - policeman). On his right is Ɗanladi (the Bariga - steward, who looks after the chief's guineacorn and removes it from the granary)"
      }
    ]
  },
  {
    name: 'Crafts',
    images: [
      {
        src: '/img/gallery/crafts_01.jpg',
        caption: 'Ɗanjuma Galadima making rope'
      },
      {
        src: '/img/gallery/crafts_02.jpg',
        caption: 'Ishaya Audu carving a carving tool with a carving tool'
      },
      {
        src: '/img/gallery/crafts_03.jpg',
        caption: 'Mallam Magaji with a locally-made spear'
      },
      { src: '/img/gallery/crafts_04.jpg', caption: 'Locally-made dane gun' },
      {
        src: '/img/gallery/crafts_05.jpg',
        caption: 'Monkey shot by Musa Ɗanjuma using a local dane gun'
      },
      {
        src: '/img/gallery/crafts_06.jpg',
        caption:
          "Stilts made for children in the month of Kagaato (stilt), approx. September/October. Left-to-rightː Habu Wakala, Usman Sale, Danlami Ibrahim, Nashiru Dawa, Lawali Musa, Rabu'u Shehu, Nashiru Sale"
      }
    ]
  },
  {
    name: "Festival of the Dead (Røø'ø)",
    description: `<p class="mb-2">In Mattaari village on Korisino, the Røø'ø [ɾɔ́ːʔɔ́] festival of remembrance of the dead is celebrated annually in February.</p>
<p class="mb-2">After each household sacrifices a chicken, a procession takes place through the houses of those who have recently died, ending up in the central clearing outside the Magaaji's (priest) shelter.</p>
<p class="mb-2">Dancing and drumming continues until dawn. Widows carry the spears of their dead husbands.</p>`,
    images: [
      {
        src: '/img/gallery/dead_01.jpg',
        caption: "The spears belonged to the widows' husbands"
      },
      {
        src: '/img/gallery/dead_02.jpg',
        caption:
          'Unusually, on Korisino women do not cover their heads, probably for religious reasons'
      },
      {
        src: '/img/gallery/dead_03.jpg',
        caption:
          'The Okiiso (ancestral spirit) hut is visible in the background'
      },
      {
        src: '/img/gallery/dead_04.jpg',
        caption: 'Drumming continues through the night until dawn'
      }
    ]
  },
  {
    name: 'Farming',
    description:
      'Most Acipu are peasant-agriculturists, growing guineacorn for subsistence and a variety of cash crops, especially groundnuts, beans and soya beans. Women grow a small amount of rice in marshy areas.',
    images: [
      {
        src: '/img/gallery/farming_01.jpg',
        caption: 'Markus Yabani harvesting guineacorn'
      },
      {
        src: '/img/gallery/farming_02.jpg',
        caption: 'Tabitha Markus threshing soya beans'
      },
      {
        src: '/img/gallery/farming_03.jpg',
        caption: 'Ishaya Audu drying guineacorn after harvesting'
      },
      {
        src: '/img/gallery/farming_04.jpg',
        caption: 'Bayi Mallam winnowing guineacorn'
      },
      {
        src: '/img/gallery/farming_05.jpg',
        caption:
          'Camels are used for carrying heavy loads, particularly during harvest season, during which Hausas may travel south to hire out their camels'
      }
    ]
  },
  {
    name: 'Fieldwork',
    images: [
      {
        src: '/img/gallery/fieldwork_01.jpg',
        caption: 'Stuart McGill interviewing Bigi Magaji in Kainwa village'
      },
      {
        src: '/img/gallery/fieldwork_02.jpg',
        caption:
          'Mohammed Musa interviewing Moolu Iɗanbanya of Ukula in Moolu village'
      },
      {
        src: '/img/gallery/fieldwork_03.jpg',
        caption: 'Stuart McGill interviewing Umar Magaji, chief of Mazarko'
      },
      {
        src: '/img/gallery/fieldwork_04.jpg',
        caption: 'Markus Yabani recording colour terms'
      },
      {
        src: '/img/gallery/fieldwork_05.jpg',
        caption: 'Scanning Mathews 1926 in the National Archives, Kaduna'
      },
      {
        src: '/img/gallery/fieldwork_06.jpg',
        caption: ' Privacy can be hard to find during fieldwork!'
      },
      {
        src: '/img/gallery/fieldwork_07.jpg',
        caption: 'Fieldwork can also involve unexpected risks!'
      },
      {
        src: '/img/gallery/fieldwork_08.jpg',
        caption:
          'Letting people hear their own voice recorded for the first time is one of the pleasures of fieldwork (Yabani Galadima)'
      },
      {
        src: '/img/gallery/fieldwork_09.jpg',
        caption: 'Markus Yabani recording Maciiwa Baya in Køkømø village'
      },
      {
        src: '/img/gallery/fieldwork_10.jpg',
        caption: "Stuart McGill recording Sa'a Musa in Roogo village"
      }
    ]
  },
  {
    name: 'Kezzeme festival',
    description:
      'The Kezzeme is a coming-of-age festival held in March each year, where youths prove their manhood',
    images: [
      {
        src: '/img/gallery/kezzeme_01.jpg',
        caption:
          'Kabbanga plant, from which the spiked sticks used in the Kezzeme are taken'
      },
      {
        src: '/img/gallery/kezzeme_02.jpg',
        caption: 'Medicine used to protect against the pain'
      },
      {
        src: '/img/gallery/kezzeme_03.jpg',
        caption:
          'The boys lined up on the platform represent one army, the youths in the field represent the enemy'
      },
      {
        src: '/img/gallery/kezzeme_04.jpg',
        caption: 'Bringing down the sticks'
      },
      {
        src: '/img/gallery/kezzeme_05.jpg',
        caption: 'Youth offering his back to be beaten'
      },
      { src: '/img/gallery/kezzeme_06.jpg', caption: 'After being hit' },
      { src: '/img/gallery/kezzeme_07.jpg', caption: 'Youth with headdress' },
      { src: '/img/gallery/kezzeme_08.jpg', caption: 'Elder looking on' },
      {
        src: '/img/gallery/kezzeme_09.jpg',
        caption: 'Garkuwa, war chief of the Orisino'
      },
      {
        src: '/img/gallery/kezzeme_10.jpg',
        caption: 'Drummer accompanying Garkuwa'
      },
      {
        src: '/img/gallery/kezzeme_11.jpg',
        caption: 'Flautists playing at the war dances which follow the Kezzeme'
      },
      {
        src: '/img/gallery/kezzeme_12.jpg',
        caption: 'Musicians playing at the war dances which follow the Kezzeme'
      },
      { src: '/img/gallery/kezzeme_13.jpg', caption: 'War dance' },
      { src: '/img/gallery/kezzeme_14.jpg', caption: 'War dance' },
      {
        src: '/img/gallery/kezzeme_15.jpg',
        caption:
          'A well-preserved section of the fortifications surrounding Korisino (with Mohammed Mallam)'
      }
    ]
  },
  {
    name: 'Korisino hill',
    images: [
      { src: '/img/gallery/korisino_01.jpg', caption: '' },
      { src: '/img/gallery/korisino_02.jpg', caption: '' },
      { src: '/img/gallery/korisino_03.jpg', caption: '' },
      { src: '/img/gallery/korisino_04.jpg', caption: '' },
      { src: '/img/gallery/korisino_05.jpg', caption: '' },
      { src: '/img/gallery/korisino_06.jpg', caption: '' },
      { src: '/img/gallery/korisino_07.jpg', caption: '' },
      { src: '/img/gallery/korisino_08.jpg', caption: '' },
      { src: '/img/gallery/korisino_09.jpg', caption: '' },
      { src: '/img/gallery/korisino_10.jpg', caption: '' }
    ]
  },
  {
    name: 'Marriage',
    images: [
      { src: '/img/gallery/marriage_01.jpg', caption: '' },
      { src: '/img/gallery/marriage_02.jpg', caption: '' },
      { src: '/img/gallery/marriage_03.jpg', caption: '' },
      { src: '/img/gallery/marriage_04.jpg', caption: '' },
      { src: '/img/gallery/marriage_05.jpg', caption: '' },
      { src: '/img/gallery/marriage_06.jpg', caption: '' },
      { src: '/img/gallery/marriage_07.jpg', caption: '' },
      { src: '/img/gallery/marriage_08.jpg', caption: '' },
      { src: '/img/gallery/marriage_09.jpg', caption: '' },
      { src: '/img/gallery/marriage_10.jpg', caption: '' },
      { src: '/img/gallery/marriage_11.jpg', caption: '' }
    ]
  },
  {
    name: 'Orthography',
    images: [
      { src: '/img/gallery/orthography_01.jpg', caption: '' },
      { src: '/img/gallery/orthography_02.jpg', caption: '' },
      { src: '/img/gallery/orthography_03.jpg', caption: '' },
      { src: '/img/gallery/orthography_04.jpg', caption: '' },
      { src: '/img/gallery/orthography_05.jpg', caption: '' },
      { src: '/img/gallery/orthography_06.jpg', caption: '' },
      { src: '/img/gallery/orthography_07.jpg', caption: '' },
      { src: '/img/gallery/orthography_08.jpg', caption: '' },
      { src: '/img/gallery/orthography_09.jpg', caption: '' },
      { src: '/img/gallery/orthography_10.jpg', caption: '' },
      { src: '/img/gallery/orthography_11.jpg', caption: '' },
      { src: '/img/gallery/orthography_12.jpg', caption: '' },
      { src: '/img/gallery/orthography_13.jpg', caption: '' },
      { src: '/img/gallery/orthography_14.jpg', caption: '' },
      { src: '/img/gallery/orthography_15.jpg', caption: '' },
      { src: '/img/gallery/orthography_16.jpg', caption: '' },
      { src: '/img/gallery/orthography_17.jpg', caption: '' },
      { src: '/img/gallery/orthography_18.jpg', caption: '' }
    ]
  },
  {
    name: 'Religion',
    images: [
      { src: '/img/gallery/religion_01.jpg', caption: '' },
      { src: '/img/gallery/religion_02.jpg', caption: '' },
      { src: '/img/gallery/religion_03.jpg', caption: '' },
      { src: '/img/gallery/religion_04.jpg', caption: '' },
      { src: '/img/gallery/religion_05.jpg', caption: '' },
      { src: '/img/gallery/religion_06.jpg', caption: '' },
      { src: '/img/gallery/religion_07.jpg', caption: '' },
      { src: '/img/gallery/religion_08.jpg', caption: '' },
      { src: '/img/gallery/religion_09.jpg', caption: '' }
    ]
  },
  {
    name: 'Rock art',
    images: [
      { src: '/img/gallery/rockart_01.jpg', caption: '' },
      { src: '/img/gallery/rockart_02.jpg', caption: '' },
      { src: '/img/gallery/rockart_03.jpg', caption: '' },
      { src: '/img/gallery/rockart_04.jpg', caption: '' },
      { src: '/img/gallery/rockart_05.jpg', caption: '' }
    ]
  },
  {
    name: 'Scenery',
    images: [
      { src: '/img/gallery/scenery_01.jpg', caption: '' },
      { src: '/img/gallery/scenery_02.jpg', caption: '' },
      { src: '/img/gallery/scenery_03.jpg', caption: '' },
      { src: '/img/gallery/scenery_04.jpg', caption: '' },
      { src: '/img/gallery/scenery_05.jpg', caption: '' },
      { src: '/img/gallery/scenery_06.jpg', caption: '' },
      { src: '/img/gallery/scenery_07.jpg', caption: '' },
      { src: '/img/gallery/scenery_08.jpg', caption: '' },
      { src: '/img/gallery/scenery_09.jpg', caption: '' },
      { src: '/img/gallery/scenery_10.jpg', caption: '' },
      { src: '/img/gallery/scenery_11.jpg', caption: '' }
    ]
  }
]

const selectedGallery = ref<Gallery>(galleries[0])
const selectedTab = ref<number>(0)

const onTabChange = (index: number) => {
  selectedGallery.value = galleries[index]
  isSlideoverOpen.value = false
}

const isSlideoverOpen = ref(true)
</script>

<template>
  <h1>Photo galleries</h1>
  <div class="mb-4 flex items-center justify-between">
    <h2>{{ selectedGallery.name }}</h2>
    <UButton label="Change gallery" @click="isSlideoverOpen = true" />
  </div>
  <div v-html="selectedGallery.description" class="mb-4 text-lg"></div>

  <USlideover v-model="isSlideoverOpen">
    <UTabs
      :items="tabs"
      v-model="selectedTab"
      orientation="vertical"
      @change="onTabChange"
    />
  </USlideover>
  <UCarousel
    v-slot="{ item, index }"
    :items="selectedGallery.images"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg max-h-[100px]"
    arrows
    indicators
  >
    <div class="text-center mx-auto">
      <em
        ><span>{{ item.caption }}</span></em
      >
      <img :src="item.src" class="" draggable="false" />
    </div>
  </UCarousel>
</template>
