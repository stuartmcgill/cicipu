import { getDb } from '~/server/db'
import { eq } from 'drizzle-orm'
import {
  lexemes,
  lexemeEntries,
  lexemeEntryTypes,
  partsOfSpeech,
  senses,
  senseReferences,
  senseExamples,
  senseXReferences,
  senseImages,
  images,
  contributors
} from '~/server/db/schema/schema'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    if (!db) throw new Error('Database connection failed')

    const query = getQuery(event)
    const id = Number(query.id)

    if (!id || isNaN(id)) {
      event.node.res.statusCode = 400
      return { error: 'Missing or invalid "id" parameter' }
    }

    // 🔹 Pull all data via left joins
    const rows = await db
      .select({
        // Lexeme
        lexemeId: lexemes.id,
        lexeme: lexemes.lexeme,
        homonymNumber: lexemes.homonymNumber,

        // Entry
        entryId: lexemeEntries.id,
        citationOrtho: lexemeEntries.citationOrtho,
        entryOrder: lexemeEntries.order,
        entryType: lexemeEntryTypes.name,
        partOfSpeech: partsOfSpeech.abbreviation,

        // Sense
        senseId: senses.id,
        senseOrder: senses.order,
        nationalGloss: senses.nationalGloss,
        englishGloss: senses.englishGloss,

        // Sense References
        refId: senseReferences.id,
        refOrder: senseReferences.order,
        contributorId: senseReferences.contributorId,
        exampleId: senseExamples.id,
        exampleText: senseExamples.text,

        // Sense Cross References
        xrefId: senseXReferences.id,
        xrefOrder: senseXReferences.order,
        xrefSenseId: senseXReferences.senseId,

        // Sense Images
        senseImageId: senseImages.id,
        imageId: images.id,
        imageComment: images.comment,
        imageFilename: images.filename,

        // Contributor
        contributorName: contributors.name
      })
      .from(lexemes)
      .innerJoin(lexemeEntries, eq(lexemeEntries.lexemeId, lexemes.id))
      .innerJoin(
        lexemeEntryTypes,
        eq(lexemeEntries.typeId, lexemeEntryTypes.id)
      )
      .leftJoin(
        partsOfSpeech,
        eq(lexemeEntries.partOfSpeechId, partsOfSpeech.id)
      )
      .leftJoin(senses, eq(senses.lexemeEntryId, lexemeEntries.id))
      .leftJoin(senseReferences, eq(senseReferences.senseId, senses.id))
      .leftJoin(
        contributors,
        eq(contributors.id, senseReferences.contributorId)
      )
      .leftJoin(
        senseExamples,
        eq(senseExamples.senseReferenceId, senseReferences.id)
      )
      .leftJoin(senseXReferences, eq(senseXReferences.senseId, senses.id))
      .leftJoin(senseImages, eq(senseImages.senseId, senses.id))
      .leftJoin(images, eq(images.id, senseImages.imageId))
      .where(eq(lexemes.id, id))

    if (!rows.length) return null

    // 🔹 Hydrate the object tree (like EF)
    const lexeme: any = {
      id: rows[0].lexemeId,
      lexeme: rows[0].lexeme,
      homonymNumber: rows[0].homonymNumber,
      lexemeEntries: []
    }

    const entryMap = new Map<number, any>()
    const senseMap = new Map<number, any>()

    for (const row of rows) {
      // Entries
      if (!entryMap.has(row.entryId)) {
        const entry = {
          id: row.entryId,
          citationOrtho: row.citationOrtho,
          order: row.entryOrder,
          entryType: row.entryType,
          partOfSpeech: row.partOfSpeech,
          senses: []
        }
        entryMap.set(row.entryId, entry)
        lexeme.lexemeEntries.push(entry)
      }

      const entry = entryMap.get(row.entryId)

      // Senses
      if (row.senseId && !senseMap.has(row.senseId)) {
        const sense = {
          id: row.senseId,
          order: row.senseOrder,
          nationalGloss: row.nationalGloss,
          englishGloss: row.englishGloss,
          senseReferences: [],
          senseXReferences: [],
          senseImages: []
        }
        senseMap.set(row.senseId, sense)
        entry.senses.push(sense)
      }

      const sense = senseMap.get(row.senseId)

      if (!sense) continue

      // References
      if (row.refId) {
        sense.senseReferences.push({
          id: row.refId,
          order: row.refOrder,
          contributor: row.contributorId
            ? { id: row.contributorId, name: row.contributorName }
            : null,
          examples: row.exampleId
            ? [{ id: row.exampleId, text: row.exampleText }]
            : []
        })
      }

      // Cross References
      if (row.xrefId) {
        sense.senseXReferences.push({
          id: row.xrefId,
          order: row.xrefOrder,
          lexemeEntryId: row.xrefLexemeEntryId
        })
      }

      // Images
      if (row.senseImageId) {
        sense.senseImages.push({
          id: row.senseImageId,
          image: row.imageId ? { id: row.imageId, url: row.imageUrl } : null
        })
      }
    }

    // 🔹 Sort entries and senses like EF did
    lexeme.lexemeEntries.sort((a, b) => a.order - b.order)
    for (const entry of lexeme.lexemeEntries) {
      entry.senses.sort((a, b) => a.order - b.order)
      for (const sense of entry.senses) {
        sense.senseReferences.sort((a, b) => a.order - b.order)
        sense.senseXReferences.sort((a, b) => a.order - b.order)
      }
    }

    return lexeme
  } catch (err) {
    event.node.res.statusCode = 500
    return { error: (err as Error).message || 'Internal server error' }
  }
})
