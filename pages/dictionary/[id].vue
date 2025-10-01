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

onMounted(async () => {
  const id = parseInt(route.params.id as string)
  if (!validateLexemeId(id)) return

  lexemeId.value = id
  data.value = await store.fetchLexeme(lexemeId.value)
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
      <h2 class="text-2xl font-bold">
        {{ data.lexeme }}
        <span v-if="data.homonymNumber">({{ data.homonymNumber }})</span>
      </h2>

      <div
        v-for="entry in data.lexemeEntries"
        :key="entry.id"
        class="border rounded p-4 mt-4 space-y-2"
      >
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">
            {{ entry.citationOrtho }}
            <small>({{ entry.partOfSpeechAbbr }})</small>
          </h3>
          <span>Order: {{ entry.order }}</span>
        </div>

        <!-- Senses -->
        <div
          v-for="sense in entry.senses"
          :key="sense.id"
          class="border-l-4 border-gray-300 pl-4 mt-2 space-y-1"
        >
          <div>
            <strong>Definition:</strong> {{ sense.englishDefinition || '–' }}
          </div>
          <div v-if="sense.nationalDefinition">
            <strong>National Definition:</strong> {{ sense.nationalDefinition }}
          </div>
          <div v-if="sense.encyclopaedicInfo">
            <strong>Encyclopaedic Info:</strong> {{ sense.encyclopaedicInfo }}
          </div>
          <div v-if="sense.scientificName">
            <strong>Scientific Name:</strong> {{ sense.scientificName }}
          </div>
          <div v-if="sense.usageComment">
            <strong>Usage Comment:</strong> {{ sense.usageComment }}
          </div>

          <!-- References -->
          <div
            v-for="ref in sense.references"
            :key="ref.id"
            class="border-l-2 border-gray-200 pl-3 mt-1 space-y-1"
          >
            <div>
              <strong>Reference ({{ ref.order }}):</strong>
              {{ ref.englishTranslation || '–' }}
              <span v-if="ref.contributorName"
                >by {{ ref.contributorName }}</span
              >
            </div>

            <!-- Examples -->
            <ul v-if="ref.examples.length" class="list-disc list-inside ml-2">
              <li v-for="ex in ref.examples" :key="ex.id">
                <strong>{{ ex.languageName }}:</strong> {{ ex.text }}
                <span v-if="ex.soundFile">
                  🔊 <a :href="ex.soundFile" target="_blank">Play</a>
                </span>
              </li>
            </ul>
          </div>

          <!-- Images -->
          <div v-if="sense.images.length" class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="img in sense.images"
              :key="img.id"
              class="border p-1 rounded w-32 h-32 flex flex-col items-center justify-center"
            >
              <img
                :src="`/uploads/${img.filename}`"
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
