import { createPool } from 'mysql2/promise'
import { drizzle } from 'drizzle-orm/mysql2'

let db: ReturnType<typeof drizzle> | null = null

export async function getDb() {
  if (!db) {
    const pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    })
    db = drizzle(pool)
  }

  return db
}
