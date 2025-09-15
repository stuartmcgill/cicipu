import { getDb } from '~/server/db'
import {
  lexemeEntries,
  lexemeEntryTypes,
  lexemes
} from '~/server/db/schema/schema'
import { and, eq, like } from 'drizzle-orm'
import { LexemeEntryTypeConst } from '~/composables/constants'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    if (!db) {
      throw new Error('Database connection failed')
    }

    const query = getQuery(event)
    const letter = query.letter as string | undefined

    if (!letter || letter.length !== 1) {
      event.node.res.statusCode = 400

      return { error: 'Missing or invalid "letter" parameter' }
    }

    const results = await db
      .select()
      .from(lexemes)
      .innerJoin(lexemeEntries, eq(lexemes.id, lexemeEntries.lexemeId))
      .innerJoin(
        lexemeEntryTypes,
        eq(lexemeEntries.typeId, lexemeEntryTypes.id)
      )
      .where(
        and(
          eq(lexemeEntries.typeId, LexemeEntryTypeConst.Headword),
          like(lexemeEntries.citationOrtho, `${letter}%`)
        )
      )
      .orderBy(
        lexemeEntries.citationOrtho,
        lexemes.lexeme,
        lexemes.homonymNumber
      )

    return results
  } catch (err) {
    event.node.res.statusCode = 500

    console.error(err)

    return { error: (err as Error).message || 'Internal server error' }
  }
})
