import { getDb } from '~/server/db'
import { and, eq } from 'drizzle-orm'
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
    if (!db) {
      throw new Error('Database connection failed')
    }

    const query = getQuery(event)
    const id = Number(query.id)

    if (!id || isNaN(id)) {
      event.node.res.statusCode = 400

      return { error: 'Missing or invalid "id" parameter' }
    }

    const lexemeData = await db
      .select({
        lexemeId: lexemes.id,
        lexeme: lexemes.lexeme,
        homonymNumber: lexemes.homonymNumber,
        entryId: lexemeEntries.id,
        citationOrtho: lexemeEntries.citationOrtho,
        order: lexemeEntries.order,
        entryType: lexemeEntryTypes.name,
        partOfSpeech: partsOfSpeech.abbreviation,
        senseId: senses.id,
        senseOrder: senses.order,
        nationalGloss: senses.nationalGloss,
        englishGloss: senses.englishGloss
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
      .where(eq(lexemes.id, id))
      .orderBy(lexemeEntries.order, senses.order)

    return { lexeme: lexemeData }
  } catch (err) {
    event.node.res.statusCode = 500

    return { error: (err as Error).message || 'Internal server error' }
  }
})
