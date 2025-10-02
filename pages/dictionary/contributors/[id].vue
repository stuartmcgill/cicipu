<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { useRoute } from '#vue-router'

definePageMeta({
  layout: 'dictionary'
})

const appStore = useAppStore()
appStore.backgroundImage = ''

const store = useDictionaryStore()
const contributor = ref<any>(null)

onMounted(async () => {
  const route = useRoute()
  const id = parseInt(route.params.id as string)
  contributor.value = await store.fetchContributor(id)
})
</script>

<template>
  <div class="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
    <!-- Sidebar -->
    <div class="space-y-6">
      <!-- Profile card -->
      <UCard v-if="contributor">
        <template #header>
          <div class="flex flex-col items-center text-center">
            <img
              v-if="contributor.images?.length"
              :src="contributor.images[0].filename"
              alt="Contributor picture"
              class="w-32 h-32 rounded-full object-cover"
            />
            <h2 class="mt-3 text-xl font-semibold">{{ contributor.name }}</h2>
            <p
              v-if="contributor.occupation && contributor.occupation !== 'None'"
              class="text-gray-500"
            >
              {{ contributor.occupation }}
            </p>
          </div>
        </template>
      </UCard>

      <!-- About me -->
      <UCard v-if="contributor">
        <template #header>
          <h3 class="font-semibold text-lg">About {{ contributor.name }}</h3>
        </template>
        <ul class="space-y-4 text-sm">
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Birthplace</span>
              <p class="text-gray-600">{{ contributor.birthplace }}</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-home" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Residence</span>
              <p class="text-gray-600">{{ contributor.currentResidence }}</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-language" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Languages spoken</span>
              <p class="text-gray-600">
                {{ contributor.languages.map((l) => l.name).join(', ') }}
              </p>
            </div>
          </li>
        </ul>
      </UCard>
    </div>

    <!-- Main content -->
    <div class="md:col-span-2 space-y-6">
      <!-- Images -->
      <UCard v-if="contributor?.images?.length">
        <template #header>
          <h3 class="font-semibold text-lg">Images</h3>
        </template>
        <div v-if="contributor.images.length === 1">
          <img
            :src="contributor.images[0].filename"
            :alt="`Picture of ${contributor.name}`"
            class="rounded-lg w-full object-cover"
          />
          <p
            v-if="contributor.images[0].comment"
            class="text-sm text-gray-500 mt-2"
          >
            {{ contributor.images[0].comment }}
          </p>
        </div>
        <div v-else>
          <UCarousel :items="contributor.images" class="rounded-lg">
            <template #default="{ item }">
              <div class="relative">
                <img
                  :src="item.filename"
                  :alt="`Picture of ${contributor.name}`"
                  class="w-full h-64 object-cover rounded-lg"
                />
                <div
                  v-if="item.comment"
                  class="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2"
                >
                  {{ item.comment }}
                </div>
              </div>
            </template>
          </UCarousel>
        </div>
      </UCard>

      <!-- Further details -->
      <UCard v-if="contributor">
        <template #header>
          <h3 class="font-semibold text-lg">Further details</h3>
        </template>
        <ul class="text-sm">
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-book-open" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Education</span>
              <p class="text-gray-600">{{ contributor.levelEducation }}</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-home" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Childhood residence</span>
              <p class="text-gray-600">{{ contributor.childhoodResidence }}</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-user" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Parental details</span>
              <p class="text-gray-600">{{ contributor.parentalDetails }}</p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-calendar" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Year of birth</span>
              <p class="text-gray-600">
                {{
                  contributor.dob ? new Date(contributor.dob).getFullYear() : ''
                }}
              </p>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <UIcon name="i-heroicons-users" class="w-5 h-5 mt-1" />
            <div>
              <span class="font-medium">Ethnicity</span>
              <p class="text-gray-600">{{ contributor.ethnicGroup?.name }}</p>
            </div>
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>
