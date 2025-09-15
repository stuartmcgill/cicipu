import { type InferSelectModel } from 'drizzle-orm'
import type { lexemes } from '~/server/db/schema/schema'

export type Lexeme = InferSelectModel<typeof lexemes>
