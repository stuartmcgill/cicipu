import { getDb } from '~/server/db'
import { and, eq, like, sql } from 'drizzle-orm'
import {
  lexemeEntries,
  lexemeEntryTypes,
  lexemes
} from '~/server/db/schema/schema'
import { LexemeEntryTypeConst } from '~/composables/constants'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    if (!db) {
      throw new Error('Database connection failed')
    }

    const query = getQuery(event)
    const term = query.term as string | undefined

    if (!term) {
      event.node.res.statusCode = 400

      return { error: 'Missing or invalid "term" parameter' }
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
          like(lexemeEntries.citationOrtho, `%${term}%`)
        )
      )
      .orderBy(lexemes.lexeme, lexemes.homonymNumber)

    return results
  } catch (err) {
    event.node.res.statusCode = 500

    return { error: (err as Error).message || 'Internal server error' }
  }
})
