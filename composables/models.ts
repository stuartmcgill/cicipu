import { type InferSelectModel } from 'drizzle-orm'
import {
  lexemeEntries,
  lexemeEntryTypes,
  lexemes,
  partsOfSpeech,
  senses
} from '~/server/db/schema/schema'

export type Lexeme = InferSelectModel<typeof lexemes>
export type LexemeEntry = InferSelectModel<typeof lexemeEntries>
export type LexemeEntryType = InferSelectModel<typeof lexemeEntryTypes>
export type PartOfSpeech = InferSelectModel<typeof partsOfSpeech>
export type Sense = InferSelectModel<typeof senses>
