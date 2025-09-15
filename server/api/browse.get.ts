import { getDb } from '~/server/db'
import { sql } from 'drizzle-orm'

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

    const results = await db.execute(
      sql`SELECT * FROM lexemes WHERE Lexeme LIKE ${letter + '%'} ORDER BY Lexeme, HomonymNumber`
    )

    return results
  } catch (err) {
    event.node.res.statusCode = 500

    return { error: (err as Error).message || 'Internal server error' }
  }
})
