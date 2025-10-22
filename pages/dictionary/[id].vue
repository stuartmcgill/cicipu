<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDictionaryStore } from '~/stores/dictionary'
import PrevNextButtons from '~/components/dictionary/PrevNextButtons.vue'

definePageMeta({
  layout: 'dictionary'
})

const store = useDictionaryStore()
const route = useRoute()

const lexemeId = ref<number | null>(null)
const data = ref<any>(null)

const headword = computed(() => {
  return (
    data?.value.lexemeEntries.find(
      (lexemeEntry) => lexemeEntry.lexemeTypeId === 1
    ) || ''
  )
})

onMounted(async () => {
  const id = parseInt(route.params.id as string)
  if (!store.validateLexemeId(id)) return

  lexemeId.value = id
  data.value = await store.fetchLexeme(lexemeId.value)

  console.log(data.value)
  console.log(headword.value)
})
</script>

<template>
  <div class="p-4 space-y-4">
    <div v-if="data">
      <PrevNextButtons :lexeme-id="lexemeId!" />

      <!--      Headword-->
      <h2 class="flex justify-center font-vernacular">
        {{ headword.citationOrtho }}
        <!--        <span v-if="data.homonymNumber">({{ data.homonymNumber }})</span>-->
      </h2>

      <div class="flex flex-col gap-12">
        <div v-for="entry in data.lexemeEntries" :key="entry.id">
          <div class="flex items-center gap-2">
            <span class="text-xl cicipu-text">{{ entry.citationOrtho }}</span>
            <span class="mt-1">({{ entry.partOfSpeechAbbr }}.)</span>
          </div>

          <!-- Senses -->
          <div
            v-for="sense in entry.senses"
            :key="sense.id"
            class="border border-primary-500 rounded p-4 mt-4 space-y-2"
          >
            <div>{{ sense.englishDefinition }}</div>
            <div v-if="sense.nationalDefinition">
              <span class="national-text">{{
                sense.nationalDefinition || '–'
              }}</span>
            </div>
            <!-- References -->
            <div class="flex flex-col gap-6">
              <div
                v-for="ref in sense.references"
                :key="ref.id"
                class="p-4 flex flex-col gap-4 bg-primary-50 border border-primary-200 rounded shadow"
              >
                <!-- Examples -->
                <div v-if="ref.examples.length" class="flex flex-col gap-4">
                  <div
                    v-for="example in ref.examples"
                    :key="example.id"
                    class="flex flex-col gap-2"
                  >
                    <span
                      :class="
                        example.languageId === 8
                          ? 'national-text'
                          : 'cicipu-text'
                      "
                      >{{ example.text }}</span
                    >
                    <div class="flex items-center gap-4">
                      <audio
                        v-if="example.soundFile"
                        :src="AudioUrl + example.soundFile"
                        controls
                      >
                        Your browser does not support the audio element.
                      </audio>
                      <UBadge
                        v-if="
                          example.languageId !== 1 && example.languageId !== 8
                        "
                        :ui="{ rounded: 'rounded-full' }"
                        variant="outline"
                        >{{ example.languageName }}</UBadge
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-2 flex items-center gap-2">
                  <span class="italic">{{
                    ref.englishTranslation || '–'
                  }}</span>
                  <TextLink
                    v-if="ref.contributorName"
                    :to="`/dictionary/Contributors/${ref.contributorId}`"
                    class="ml-auto text-sm"
                    >{{ ref.contributorName }}</TextLink
                  >
                </div>
              </div>
            </div>

            <!--          Additional info-->
            <div class="flex flex-col gap-2">
              <UTooltip
                v-if="sense.encyclopaedicInfo"
                text="Encyclopaedic information"
                class="self-start"
              >
                <div class="flex items-center gap-2 text-sm">
                  <UIcon name="i-heroicons-globe-alt" class="w-5 h-5" />
                  <span class="italic">{{ sense.encyclopaedicInfo }}</span>
                </div>
              </UTooltip>
              <UTooltip
                v-if="sense.scientificName"
                text="Scientific name"
                class="self-start"
              >
                <div class="flex items-center gap-2 text-sm">
                  <UIcon name="i-mdi-flower" class="w-5 h-5" />
                  <span class="italic">{{ sense.scientificName }}</span>
                </div>
              </UTooltip>
              <UTooltip
                v-if="sense.usageComment"
                text="Usage"
                class="self-start"
              >
                <div class="flex items-center gap-2 text-sm">
                  <UIcon name="i-mdi-forum" class="w-5 h-5" />
                  <span class="italic">{{ sense.usageComment }}</span>
                </div>
              </UTooltip>
            </div>

            <!-- Images -->
            <UCarousel
              v-if="sense.images.length"
              class="mt-4 w-full max-w-lg mx-auto"
              :items="sense.images"
              :loop="true"
              :autoplay="true"
              :autoplay-interval="4000"
              :arrows="sense.images.length > 1"
              :pagination="true"
            >
              <template #default="{ item }">
                <div class="flex flex-col items-center justify-center p-2">
                  <img
                    :src="ImagesUrl + item.filename"
                    :alt="item.comment || 'image'"
                    class="max-h-64 object-contain rounded shadow"
                  />
                  <span class="text-sm text-center mt-2 text-gray-600">
                    {{ item.comment }}
                  </span>
                </div>
              </template>
            </UCarousel>
          </div>
        </div>
      </div>
      <PrevNextButtons :lexeme-id="lexemeId!" class="mt-6 md:mt-8 lg:mt-12" />
    </div>
    <div v-else class="text-center text-gray-500">Loading lexeme...</div>
  </div>
</template>

<style scoped>
/* optional styling */
</style>
