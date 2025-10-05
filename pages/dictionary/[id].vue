<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDictionaryStore } from '~/stores/dictionary'

definePageMeta({
  layout: 'dictionary'
})

const store = useDictionaryStore()
const route = useRoute()
const router = useRouter()

const lexemeId = ref<number | null>(null)
const data = ref<any>(null)

const validateLexemeId = (id: number) => id >= 21602 && id <= 24084

const isNextValid = computed(
  () => lexemeId.value !== null && validateLexemeId(lexemeId.value + 1)
)
const isPrevValid = computed(
  () => lexemeId.value !== null && validateLexemeId(lexemeId.value - 1)
)

const moveNext = () => {
  if (isNextValid.value && lexemeId.value !== null) {
    router.push(`/dictionary/${lexemeId.value + 1}`)
  }
}
const movePrev = () => {
  if (isPrevValid.value && lexemeId.value !== null) {
    router.push(`/dictionary/${lexemeId.value - 1}`)
  }
}

const headword = computed(() => {
  return (
    data?.value.lexemeEntries.find(
      (lexemeEntry) => lexemeEntry.lexemeTypeId === 1
    ) || ''
  )
})

onMounted(async () => {
  const id = parseInt(route.params.id as string)
  if (!validateLexemeId(id)) return

  lexemeId.value = id
  data.value = await store.fetchLexeme(lexemeId.value)

  console.log(data.value)
  console.log(headword.value)
})
</script>

<template>
  <div class="p-4 space-y-4">
    <!-- Navigation -->
    <div class="flex gap-4 justify-center">
      <UButton
        icon="i-heroicons-arrow-left"
        color="primary"
        label="Prev"
        :trailing="false"
        :disabled="!isPrevValid"
        @click="movePrev"
      />
      <UButton
        icon="i-heroicons-arrow-right"
        color="primary"
        label="Next"
        :trailing="true"
        :disabled="!isNextValid"
        @click="moveNext"
      />
    </div>

    <div v-if="data">
      <!--      Headword-->
      <h2 class="flex justify-center font-vernacular">
        {{ headword.citationOrtho }}
        <!--        <span v-if="data.homonymNumber">({{ data.homonymNumber }})</span>-->
      </h2>

      <div v-for="entry in data.lexemeEntries" :key="entry.id">
        <div class="flex items-center gap-2">
          <span class="cicipu-text">{{ entry.citationOrtho }}</span>
          <span>{{ entry.partOfSpeechAbbr }}.</span>
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
          <div class="flex flex-col gap-2">
            <div v-for="ref in sense.references" :key="ref.id">
              <!-- Examples -->
              <div v-if="ref.examples.length" class="flex flex-col gap-4">
                <div v-for="example in ref.examples" :key="example.id">
                  <span
                    :class="
                      example.languageId === 8 ? 'national-text' : 'cicipu-text'
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
                    <UTooltip :text="example.languageName">
                      <UButton
                        icon="i-heroicons-language-solid"
                        size="xs"
                        color="gray"
                        square
                        variant="soft"
                      />
                    </UTooltip>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex items-center gap-2">
                <span class="italic">{{ ref.englishTranslation || '–' }}</span>
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
            <div v-if="sense.encyclopaedicInfo">
              <strong>Encyclopaedic information: </strong>
              {{ sense.encyclopaedicInfo }}
            </div>
            <div v-if="sense.scientificName">
              <strong>Scientific name: </strong> {{ sense.scientificName }}
            </div>
            <div v-if="sense.usageComment">
              <strong>Usage: </strong> {{ sense.usageComment }}
            </div>
          </div>

          <!-- Images -->
          <div v-if="sense.images.length" class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="img in sense.images"
              :key="img.id"
              class="border p-1 rounded w-32 h-32 flex flex-col items-center justify-center"
            >
              <img
                :src="ImagesUrl + img.filename"
                :alt="img.comment || 'image'"
                class="max-h-20 object-contain"
              />
              <span class="text-xs text-center mt-1">{{ img.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">Loading lexeme...</div>
  </div>
</template>

<style scoped>
/* optional styling */
</style>
