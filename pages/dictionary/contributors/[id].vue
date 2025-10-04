<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { useRoute } from '#vue-router'
import ContributorProperty from '~/components/dictionary/ContributorProperty.vue'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''

const store = useDictionaryStore()
const contributor = ref<any>(null)

const languagesSpoken = computed(
  () => contributor?.value.languages.map((l) => l.name).join(', ') || ''
)

const yearOfBirth = computed(() => {
  if (!contributor.value) {
    return ''
  }

  return contributor.value.dob
    ? new Date(contributor.value.dob).getFullYear().toString()
    : ''
})

onMounted(async () => {
  const route = useRoute()
  const id = parseInt(route.params.id as string)

  contributor.value = await store.fetchContributor(id)
})
</script>

<template>
  <div class="mx-auto max-w-5xl">
    <UProgress v-if="!contributor" />
    <template v-else>
      <h1>{{ contributor.name }}</h1>
      <UCard class="mb-6 md:mb-8 lg:mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContributorProperty
            v-if="contributor.birthplace"
            label="Birthplace"
            :text="contributor.birthplace"
            icon="i-heroicons-map-pin"
          />
          <ContributorProperty
            v-if="contributor.currentResidence"
            label="Residence"
            :text="contributor.currentResidence"
            icon="i-heroicons-home"
          />
          <ContributorProperty
            label="Languages spoken"
            :text="languagesSpoken"
            icon="i-heroicons-language"
          />
          <ContributorProperty
            v-if="contributor.occupation"
            label="Occupation"
            :text="contributor.occupation"
            icon="i-mdi-corn"
          />
        </div>
      </UCard>

      <!-- Main content -->
      <div class="md:col-span-2 space-y-6">
        <!-- Images -->
        <template v-if="contributor?.images?.length">
          <div v-if="contributor.images.length === 1">
            <NuxtImg
              :src="contributor.images[0].filename"
              :alt="`Picture of ${contributor.name}`"
              class="w-full object-cover"
            />
            <p
              v-if="contributor.images[0].comment"
              class="text-sm text-gray-500 mt-2"
            >
              {{ contributor.images[0].comment }}
            </p>
          </div>
          <div v-else class="flex justify-center">
            <UCarousel
              :items="contributor.images"
              :ui="{ item: 'basis-full' }"
              class="rounded-lg"
              arrows
            >
              <template #default="{ item }">
                <div class="flex justify-center items-center relative w-full">
                  <!-- flex container to center content -->
                  <NuxtImg
                    :src="item.filename"
                    :alt="`Picture of ${contributor.name}`"
                    class="object-cover max-h-full max-w-full rounded-lg"
                  />
                  <div
                    v-if="item.comment"
                    class="absolute bottom-0 bg-black/50 text-white text-sm p-2 w-full text-center"
                  >
                    {{ item.comment }}
                  </div>
                </div>
              </template>
            </UCarousel>
          </div>
        </template>

        <!-- Further details -->
        <UCard class="mb-6 md:mb-8 lg:mb-12">
          <template #header>
            <h3 class="font-semibold text-lg">Further details</h3>
          </template>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContributorProperty
              v-if="contributor.levelEducation"
              label="Education"
              :text="contributor.levelEducation"
              icon="i-heroicons-book-open"
            />
            <ContributorProperty
              v-if="contributor.childhoodResidence"
              label="Childhood residence"
              :text="contributor.childhoodResidence"
              icon="i-heroicons-home"
            />
            <ContributorProperty
              v-if="contributor.parentalDetails"
              label="Parental details"
              :text="contributor.parentalDetails"
              icon="i-heroicons-user"
            />
            <ContributorProperty
              v-if="yearOfBirth"
              label="Year of birth"
              :text="yearOfBirth"
              icon="i-heroicons-calendar"
            />
          </div>
        </UCard>
      </div>
    </template>
  </div>
</template>
