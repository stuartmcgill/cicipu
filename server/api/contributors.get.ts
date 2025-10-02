import { getDb } from '~/server/db'
import {
  contributors,
  contributorLanguages,
  languages,
  senseReferences
} from '~/server/db/schema/schema'
import { eq, sql } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()

    // Step 1: Contributors + their languages
    const rawContributors = await db
      .select({
        id: contributors.id,
        name: contributors.name,
        languageId: contributorLanguages.languageId,
        languageName: languages.name,
        exampleCount: sql<number>`COUNT(${senseReferences.id})`
      })
      .from(contributors)
      .leftJoin(
        contributorLanguages,
        eq(contributors.id, contributorLanguages.contributorId)
      )
      .leftJoin(languages, eq(contributorLanguages.languageId, languages.id))
      .leftJoin(
        senseReferences,
        eq(senseReferences.contributorId, contributors.id)
      )
      .groupBy(
        contributors.id,
        contributors.name,
        contributorLanguages.languageId,
        languages.name
      )
      .orderBy(contributors.name)

    // Step 2: Filter out contributors with no examples
    const contributorsWithExamples = rawContributors.filter(
      (c) => c.exampleCount > 0
    )

    // Step 3: Reshape into { contributor, languages[] }
    const contributorsById: Record<number, any> = {}

    for (const row of contributorsWithExamples) {
      if (!contributorsById[row.id]) {
        contributorsById[row.id] = {
          id: row.id,
          name: row.name,
          exampleCount: row.exampleCount,
          languages: []
        }
      }
      if (row.languageId) {
        contributorsById[row.id].languages.push({
          id: row.languageId,
          name: row.languageName
        })
      }
    }

    return Object.values(contributorsById)
  } catch (err) {
    event.node.res.statusCode = 500
    console.error('GetContributors failed:', err)
    return { error: (err as Error).message || 'Internal server error' }
  }
})
