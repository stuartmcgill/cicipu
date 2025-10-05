import { getDb } from '~/server/db'
import { inArray, eq } from 'drizzle-orm'
import {
  languages,
  lexemes,
  lexemeEntries,
  partsOfSpeech,
  senses,
  senseExamples,
  senseReferences,
  senseImages,
  images,
  contributors
} from '~/server/db/schema/schema'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    const query = getQuery(event)
    const id = Number(query.id)

    if (!id || isNaN(id)) {
      event.node.res.statusCode = 400
      return { error: 'Missing or invalid "id" parameter' }
    }

    // Step 1: Fetch lexeme
    const [lexeme] = await db
      .select({
        id: lexemes.id,
        lexeme: lexemes.lexeme,
        homonymNumber: lexemes.homonymNumber
      })
      .from(lexemes)
      .where(eq(lexemes.id, id))

    if (!lexeme) {
      event.node.res.statusCode = 404
      return { error: 'Lexeme not found' }
    }

    // Step 2: Fetch lexeme entries with part of speech
    const entries = await db
      .select({
        id: lexemeEntries.id,
        citationOrtho: lexemeEntries.citationOrtho,
        order: lexemeEntries.order,
        partOfSpeechId: lexemeEntries.partOfSpeechId,
        lexemeTypeId: lexemeEntries.typeId,
        partOfSpeechAbbr: partsOfSpeech.abbreviation
      })
      .from(lexemeEntries)
      .leftJoin(
        partsOfSpeech,
        eq(lexemeEntries.partOfSpeechId, partsOfSpeech.id)
      )
      .where(eq(lexemeEntries.lexemeId, id))
      .orderBy(lexemeEntries.order)

    // Step 3: Fetch senses for these entries
    const entryIds = entries.map((e) => e.id)
    const allSenses = await db
      .select({
        id: senses.id,
        lexemeEntryId: senses.lexemeEntryId,
        order: senses.order,
        encyclopaedicInfo: senses.encyclopaedicInfo,
        englishDefinition: senses.englishDefinition,
        englishGloss: senses.englishGloss,
        englishReversal: senses.englishReversal,
        nationalDefinition: senses.nationalDefinition,
        nationalGloss: senses.nationalGloss,
        nationalReversal: senses.nationalReversal,
        scientificName: senses.scientificName,
        usageComment: senses.usageComment
      })
      .from(senses)
      .where(inArray(senses.lexemeEntryId, entryIds))
      .orderBy(senses.order)

    // Step 4: Fetch senseReferences
    const senseIds = allSenses.map((s) => s.id)
    const allReferences = await db
      .select({
        id: senseReferences.id,
        senseId: senseReferences.senseId,
        contributorId: senseReferences.contributorId,
        contributorName: contributors.name,
        order: senseReferences.order,
        englishTranslation: senseReferences.englishTranslation
      })
      .from(senseReferences)
      .where(inArray(senseReferences.senseId, senseIds))
      .leftJoin(
        contributors,
        eq(senseReferences.contributorId, contributors.id)
      )

    // Step 5: Fetch senseImages
    const allImages = await db
      .select({
        id: senseImages.id,
        senseId: senseImages.senseId,
        imageId: senseImages.imageId,
        filename: images.filename,
        comment: images.comment
      })
      .from(senseImages)
      .where(inArray(senseImages.senseId, senseIds))
      .leftJoin(images, eq(senseImages.imageId, images.id))

    // Step 6: Fetch senseExamples
    const allExamples = await db
      .select({
        id: senseExamples.id,
        senseReferenceId: senseExamples.senseReferenceId,
        languageId: senseExamples.languageId,
        text: senseExamples.text,
        soundFile: senseExamples.soundFile,
        soundFileStart: senseExamples.soundFileStart,
        soundFileEnd: senseExamples.soundFileEnd,
        languageName: languages.name
      })
      .from(senseExamples)
      .where(
        inArray(
          senseExamples.senseReferenceId,
          allReferences.map((r) => r.id)
        )
      )
      .leftJoin(languages, eq(senseExamples.languageId, languages.id))

    // Step 7: Nest examples under references
    const referencesById: Record<number, any> = {}
    for (const ref of allReferences) {
      referencesById[ref.id] = {
        ...ref,
        examples: allExamples.filter((e) => e.senseReferenceId === ref.id)
      }
    }

    // Step 8: Nest senses under entries
    const sensesByEntry: Record<number, any[]> = {}
    for (const sense of allSenses) {
      sensesByEntry[sense.lexemeEntryId] =
        sensesByEntry[sense.lexemeEntryId] || []
      sensesByEntry[sense.lexemeEntryId].push({
        ...sense,
        references: allReferences
          .filter((r) => r.senseId === sense.id)
          .map((r) => referencesById[r.id]),
        images: allImages.filter((i) => i.senseId === sense.id)
      })
    }

    lexeme.lexemeEntries = entries.map((entry) => ({
      ...entry,
      senses: sensesByEntry[entry.id] || []
    }))

    return lexeme
  } catch (err) {
    console.error('GetLexeme failed:', err)
    event.node.res.statusCode = 500
    return { error: (err as Error).message || 'Internal server error' }
  }
})
