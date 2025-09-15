import { getDb } from '~/server/db'
import { sql } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    if (!db) {
      throw new Error('Database connection failed')
    }

    return await db.execute(sql`SELECT * FROM lexemes`)
  } catch (err) {
    event.node.res.statusCode = 500

    return { error: (err as Error).message || 'Internal server error' }
  }
})
