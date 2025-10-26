import { getDb } from '~/server/db'
import { inArray, eq } from 'drizzle-orm'
import {
  languages,
  lexemes,
  lexemeEntries as le,
  partsOfSpeech,
  senses,
  senseExamples,
  senseReferences,
  senseXReferences,
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
        id: le.id,
        citationOrtho: le.citationOrtho,
        order: le.order,
        partOfSpeechId: le.partOfSpeechId,
        lexemeTypeId: le.typeId,
        loanwordComment: le.loanwordComment,
        phonetic: le.phonetic,
        gender: le.gender,
        singularForm: le.singularForm,
        pluralForm: le.pluralForm,
        literally: le.literally,
        verbalComment: le.verbalComment,
        mainEntryId: le.mainEntryId,
        partOfSpeechAbbr: partsOfSpeech.abbreviation,
        partOfSpeechName: partsOfSpeech.name
      })
      .from(le)
      .leftJoin(partsOfSpeech, eq(le.partOfSpeechId, partsOfSpeech.id))
      .where(eq(le.lexemeId, id))
      .orderBy(le.order)

    // Step 3: Fetch linked main-entry lexemes (corrected)
    const mainLexemeIds = entries
      .map((e) => e.mainEntryId)
      .filter((v): v is number => !!v)

    let mainLexemeLookup: Record<number, string> = {}

    if (mainLexemeIds.length > 0) {
      const mainLexemes = await db
        .select({
          id: lexemes.id,
          lexeme: lexemes.lexeme
        })
        .from(lexemes)
        .where(inArray(lexemes.id, mainLexemeIds))

      mainLexemeLookup = Object.fromEntries(
        mainLexemes.map((m) => [m.id, m.lexeme])
      )
    }

    // Step 4: Fetch senses for these entries
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

    // Step 5: Fetch senseReferences
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

    // Step 6: Fetch senseImages
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

    // Step 7: Fetch sense cross-references
    const allXRefs = await db
      .select({
        id: senseXReferences.id,
        senseId: senseXReferences.senseId,
        order: senseXReferences.order,
        targetEntryId: senseXReferences.xreferenceId,
        targetLexemeId: le.lexemeId,
        targetCitation: le.citationOrtho,
        targetPartOfSpeech: partsOfSpeech.abbreviation
      })
      .from(senseXReferences)
      .leftJoin(le, eq(senseXReferences.xreferenceId, le.id))
      .leftJoin(partsOfSpeech, eq(le.partOfSpeechId, partsOfSpeech.id))
      .where(inArray(senseXReferences.senseId, senseIds))
      .orderBy(senseXReferences.order)

    // Step 8: Fetch senseExamples
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

    // Step 9: Nest examples under references
    const referencesById: Record<number, any> = {}
    for (const ref of allReferences) {
      referencesById[ref.id] = {
        ...ref,
        examples: allExamples.filter((e) => e.senseReferenceId === ref.id)
      }
    }

    // Step 10: Nest senses under entries
    const sensesByEntry: Record<number, any[]> = {}
    for (const sense of allSenses) {
      sensesByEntry[sense.lexemeEntryId] =
        sensesByEntry[sense.lexemeEntryId] || []
      sensesByEntry[sense.lexemeEntryId].push({
        ...sense,
        references: allReferences
          .filter((r) => r.senseId === sense.id)
          .map((r) => referencesById[r.id]),
        images: allImages.filter((i) => i.senseId === sense.id),
        xReferences: allXRefs.filter((x) => x.senseId === sense.id)
      })
    }

    // Step 11: Combine everything
    lexeme.lexemeEntries = entries.map((entry) => ({
      ...entry,
      mainEntryLexeme:
        entry.mainEntryId && mainLexemeLookup[entry.mainEntryId]
          ? mainLexemeLookup[entry.mainEntryId]
          : null,
      senses: sensesByEntry[entry.id] || []
    }))

    return lexeme
  } catch (err) {
    console.error('GetLexeme failed:', err)
    event.node.res.statusCode = 500
    return { error: (err as Error).message || 'Internal server error' }
  }
})
