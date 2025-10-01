import { getDb } from '~/server/db'
import { eq } from 'drizzle-orm'
import {
  lexemes,
  lexemeEntries,
  partsOfSpeech
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

    // Fetch lexeme info
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

    // Fetch related lexeme entries with parts of speech
    const entries = await db
      .select({
        id: lexemeEntries.id,
        citationOrtho: lexemeEntries.citationOrtho,
        order: lexemeEntries.order,
        partOfSpeechId: lexemeEntries.partOfSpeechId,
        partOfSpeechAbbr: partsOfSpeech.abbreviation
      })
      .from(lexemeEntries)
      .leftJoin(
        partsOfSpeech,
        eq(lexemeEntries.partOfSpeechId, partsOfSpeech.id)
      )
      .where(eq(lexemeEntries.lexemeId, id))
      .orderBy(lexemeEntries.order)

    lexeme.lexemeEntries = entries

    return lexeme
  } catch (err) {
    console.error('GetLexeme failed:', err)
    event.node.res.statusCode = 500
    return { error: (err as Error).message || 'Internal server error' }
  }
})
