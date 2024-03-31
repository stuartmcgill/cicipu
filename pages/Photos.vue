<script setup lang="ts">
interface Image {
  src: string
  caption: string
}

interface Gallery {
  name: string
  images: Image[]
}

const tabs = [
  {
    label: 'Beer'
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
    label: 'Festival of the Dead'
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
    name: 'Beer',
    images: [
      { src: '/img/gallery/beer_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/beer_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/beer_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/beer_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/beer_05.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Building',
    images: [
      { src: '/img/gallery/building_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/building_08.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Ciciya (youth) festival',
    images: [
      { src: '/img/gallery/ciciya_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/ciciya_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/ciciya_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/ciciya_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/ciciya_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/ciciya_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/ciciya_07.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Crafts',
    images: [
      { src: '/img/gallery/crafts_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/crafts_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/crafts_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/crafts_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/crafts_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/crafts_06.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Festival of the Dead',
    images: [
      { src: '/img/gallery/dead_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/dead_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/dead_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/dead_04.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Farming',
    images: [
      { src: '/img/gallery/farming_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/farming_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/farming_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/farming_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/farming_05.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Fieldwork',
    images: [
      { src: '/img/gallery/fieldwork_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_09.jpg', caption: 'caption 1' },
      { src: '/img/gallery/fieldwork_10.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Kezzeme festival',
    images: [
      { src: '/img/gallery/kezzeme_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_09.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_10.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_11.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_12.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_13.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_14.jpg', caption: 'caption 1' },
      { src: '/img/gallery/kezzeme_15.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Korisino hill',
    images: [
      { src: '/img/gallery/korisino_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_09.jpg', caption: 'caption 1' },
      { src: '/img/gallery/korisino_10.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Marriage',
    images: [
      { src: '/img/gallery/marriage_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_09.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_10.jpg', caption: 'caption 1' },
      { src: '/img/gallery/marriage_11.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Orthography',
    images: [
      { src: '/img/gallery/orthography_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_09.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_10.jpg', caption: 'caption 1' }
      { src: '/img/gallery/orthography_11.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_12.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_13.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_14.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_15.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_16.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_17.jpg', caption: 'caption 1' },
      { src: '/img/gallery/orthography_18.jpg', caption: 'caption 1' },
    ]
  },
  {
    name: 'Religion',
    images: [
      { src: '/img/gallery/religion_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/religion_09.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Rock art',
    images: [
      { src: '/img/gallery/rockart_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/rockart_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/rockart_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/rockart_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/rockart_05.jpg', caption: 'caption 1' }
    ]
  },
  {
    name: 'Scenery',
    images: [
      { src: '/img/gallery/scenery_01.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_02.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_03.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_04.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_05.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_06.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_07.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_08.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_09.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_10.jpg', caption: 'caption 1' },
      { src: '/img/gallery/scenery_11.jpg', caption: 'caption 1' }
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
  <div class="flex items-center justify-between">
    <h2>{{ selectedGallery.name }}</h2>
    <UButton label="Change gallery" @click="isSlideoverOpen = true" />
  </div>

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
      <span>{{ item.caption }}</span>
      <img :src="item.src" draggable="false" />
    </div>
  </UCarousel>
</template>
