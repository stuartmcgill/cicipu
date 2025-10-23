import { type InferSelectModel } from 'drizzle-orm'
import {
  languages,
  lexemeEntries,
  lexemeEntryTypes,
  lexemes,
  partsOfSpeech,
  senses,
  senseXReferences
} from '~/server/db/schema/schema'

export type Lexeme = InferSelectModel<typeof lexemes>
export type LexemeEntry = InferSelectModel<typeof lexemeEntries>
export type LexemeEntryType = InferSelectModel<typeof lexemeEntryTypes>
export type PartOfSpeech = InferSelectModel<typeof partsOfSpeech>
export type Sense = InferSelectModel<typeof senses>
export type Language = InferSelectModel<typeof languages>
export type SenseXReferences = InferSelectModel<typeof senseXReferences>
