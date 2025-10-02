import { getDb } from '~/server/db'
import {
  contributors,
  contributorLanguages,
  languages,
  fluency,
  contributorImages,
  images,
  sexes,
  ethnicGroups,
  senseReferences
} from '~/server/db/schema/schema'
import { eq, sql } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    const query = getQuery(event)
    const id = Number(query.id)

    if (!id || isNaN(id)) {
      event.node.res.statusCode = 400
      return { error: 'Missing or invalid "id" parameter' }
    }

    // Step 1: Contributor with related info
    const rows = await db
      .select({
        id: contributors.id,
        name: contributors.name,
        birthplace: contributors.birthplace,
        currentResidence: contributors.currentResidence,
        levelEducation: contributors.levelEducation,
        occupation: contributors.occupation,
        dob: contributors.dob,
        comment: contributors.comment,
        ethnicGroupId: contributors.ethnicGroupId,
        ethnicGroupName: ethnicGroups.name,
        sexId: contributors.sexId,
        sexName: sexes.name,
        languageId: contributorLanguages.languageId,
        languageName: languages.name,
        fluencyId: contributorLanguages.fluencyId,
        fluencyName: fluency.name,
        imageId: contributorImages.imageId,
        imageFilename: images.filename,
        imageComment: images.comment
      })
      .from(contributors)
      .where(eq(contributors.id, id))
      .leftJoin(
        contributorLanguages,
        eq(contributors.id, contributorLanguages.contributorId)
      )
      .leftJoin(languages, eq(contributorLanguages.languageId, languages.id))
      .leftJoin(fluency, eq(contributorLanguages.fluencyId, fluency.id))
      .leftJoin(
        contributorImages,
        eq(contributors.id, contributorImages.contributorId)
      )
      .leftJoin(images, eq(contributorImages.imageId, images.id))
      .leftJoin(sexes, eq(contributors.sexId, sexes.id))
      .leftJoin(ethnicGroups, eq(contributors.ethnicGroupId, ethnicGroups.id))

    if (!rows.length) {
      event.node.res.statusCode = 404
      return { error: 'Contributor not found' }
    }

    // Step 2: Get example count separately
    const [{ count: exampleCount }] = await db
      .select({ count: sql<number>`COUNT(${senseReferences.id})` })
      .from(senseReferences)
      .where(eq(senseReferences.contributorId, id))

    // Step 3: Reshape
    const contributor = {
      id: rows[0].id,
      name: rows[0].name,
      birthplace: rows[0].birthplace,
      currentResidence: rows[0].currentResidence,
      levelEducation: rows[0].levelEducation,
      occupation: rows[0].occupation,
      dob: rows[0].dob,
      comment: rows[0].comment,
      ethnicGroup: rows[0].ethnicGroupId
        ? { id: rows[0].ethnicGroupId, name: rows[0].ethnicGroupName }
        : null,
      sex: rows[0].sexId ? { id: rows[0].sexId, name: rows[0].sexName } : null,
      languages: [] as any[],
      images: [] as any[],
      exampleCount
    }

    for (const row of rows) {
      if (row.languageId) {
        contributor.languages.push({
          id: row.languageId,
          name: row.languageName,
          fluency: row.fluencyId
            ? { id: row.fluencyId, name: row.fluencyName }
            : null
        })
      }
      if (row.imageId) {
        contributor.images.push({
          id: row.imageId,
          filename: row.imageFilename,
          comment: row.imageComment
        })
      }
    }

    return contributor
  } catch (err) {
    event.node.res.statusCode = 500
    console.error('GetContributor failed:', err)
    return { error: (err as Error).message || 'Internal server error' }
  }
})
