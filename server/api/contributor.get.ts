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
import { ImagesUrl } from '~/composables/constants'

export default defineEventHandler(async (event) => {
  try {
    const db = await getDb()
    const query = getQuery(event)
    const id = Number(query.id)

    if (!id || isNaN(id)) {
      event.node.res.statusCode = 400
      return { error: 'Missing or invalid "id" parameter' }
    }

    // Step 1: Fetch contributor info
    const [contributorRow] = await db
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
        sexName: sexes.name
      })
      .from(contributors)
      .leftJoin(sexes, eq(contributors.sexId, sexes.id))
      .leftJoin(ethnicGroups, eq(contributors.ethnicGroupId, ethnicGroups.id))
      .where(eq(contributors.id, id))

    if (!contributorRow) {
      event.node.res.statusCode = 404
      return { error: 'Contributor not found' }
    }

    // Step 2: Fetch languages
    const languagesRows = await db
      .select({
        languageId: contributorLanguages.languageId,
        languageName: languages.name,
        fluencyId: contributorLanguages.fluencyId,
        fluencyName: fluency.name
      })
      .from(contributorLanguages)
      .leftJoin(languages, eq(contributorLanguages.languageId, languages.id))
      .leftJoin(fluency, eq(contributorLanguages.fluencyId, fluency.id))
      .where(eq(contributorLanguages.contributorId, id))

    // Step 3: Fetch images
    const imagesRows = await db
      .select({
        imageId: images.id,
        filename: images.filename,
        comment: images.comment
      })
      .from(contributorImages)
      .leftJoin(images, eq(contributorImages.imageId, images.id))
      .where(eq(contributorImages.contributorId, id))

    // Step 4: Fetch example count
    const [{ count: exampleCount }] = await db
      .select({ count: sql<number>`COUNT(${senseReferences.id})` })
      .from(senseReferences)
      .where(eq(senseReferences.contributorId, id))

    // Step 5: Reshape contributor object
    const contributor = {
      id: contributorRow.id,
      name: contributorRow.name,
      birthplace: contributorRow.birthplace,
      currentResidence: contributorRow.currentResidence,
      levelEducation: contributorRow.levelEducation,
      occupation: contributorRow.occupation,
      dob: contributorRow.dob,
      comment: contributorRow.comment,
      ethnicGroup: contributorRow.ethnicGroupId
        ? {
            id: contributorRow.ethnicGroupId,
            name: contributorRow.ethnicGroupName
          }
        : null,
      sex: contributorRow.sexId
        ? { id: contributorRow.sexId, name: contributorRow.sexName }
        : null,
      languages: languagesRows.map((l) => ({
        id: l.languageId,
        name: l.languageName,
        fluency: l.fluencyId ? { id: l.fluencyId, name: l.fluencyName } : null
      })),
      images: imagesRows.map((img) => ({
        id: img.imageId,
        filename: ImagesUrl + img.filename,
        comment: img.comment
      })),
      exampleCount
    }

    return contributor
  } catch (err) {
    event.node.res.statusCode = 500
    console.error('GetContributor failed:', err)
    return { error: (err as Error).message || 'Internal server error' }
  }
})
