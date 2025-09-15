import { mysqlTable, mysqlSchema, AnyMySqlColumn, foreignKey, primaryKey, int, varchar, date, text, index, decimal, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const contributorImages = mysqlTable("contributor_images", {
	id: int("Id").autoincrement().notNull(),
	contributorId: int("ContributorId").notNull().references(() => contributors.id),
	imageId: int("ImageId").notNull().references(() => images.id),
	comment: varchar("Comment", { length: 250 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "contributor_images_Id"}),
]);

export const contributorLanguages = mysqlTable("contributor_languages", {
	id: int("Id").autoincrement().notNull(),
	contributorId: int("ContributorId").notNull().references(() => contributors.id),
	languageId: int("LanguageId").notNull().references(() => languages.id),
	fluencyId: int("FluencyId").references(() => fluency.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "contributor_languages_Id"}),
]);

export const contributors = mysqlTable("contributors", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
	ethnicGroupId: int("EthnicGroupId").notNull().references(() => ethnicGroups.id),
	birthplace: varchar("Birthplace", { length: 150 }),
	parentalDetails: varchar("ParentalDetails", { length: 500 }),
	currentResidence: varchar("CurrentResidence", { length: 150 }),
	childhoodResidence: varchar("ChildhoodResidence", { length: 150 }),
	timeAtCurrentResidence: varchar("TimeAtCurrentResidence", { length: 150 }),
	levelEducation: varchar("LevelEducation", { length: 250 }),
	occupation: varchar("Occupation", { length: 150 }),
	sexId: int("SexId").notNull().references(() => sexes.id),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	dob: date("DOB", { mode: 'string' }),
	accessRights: varchar("AccessRights", { length: 500 }),
	comment: text("Comment"),
	toolboxInitials: varchar("ToolboxInitials", { length: 10 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "contributors_Id"}),
]);

export const ethnicGroups = mysqlTable("ethnic_groups", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
	comment: varchar("Comment", { length: 250 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "ethnic_groups_Id"}),
]);

export const fluency = mysqlTable("fluency", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 10 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "fluency_Id"}),
]);

export const genres = mysqlTable("genres", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "genres_Id"}),
]);

export const images = mysqlTable("images", {
	id: int("Id").autoincrement().notNull(),
	filename: varchar("Filename", { length: 256 }).notNull(),
	comment: text("Comment"),
},
(table) => [
	primaryKey({ columns: [table.id], name: "images_Id"}),
]);

export const languages = mysqlTable("languages", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
	ethnologueCode: varchar("EthnologueCode", { length: 3 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "languages_Id"}),
]);

export const lexemeEntries = mysqlTable("lexeme_entries", {
	id: int("Id").autoincrement().notNull(),
	lexemeId: int("LexemeId").notNull().references(() => lexemes.id),
	typeId: int("TypeId").notNull().references(() => lexemeEntryTypes.id),
	order: int("Order").notNull(),
	citation: varchar("Citation", { length: 250 }).notNull(),
	citationOrtho: varchar("CitationOrtho", { length: 250 }).notNull(),
	phonetic: varchar("Phonetic", { length: 250 }),
	tonePattern: varchar("TonePattern", { length: 20 }),
	loanwordComment: varchar("LoanwordComment", { length: 250 }),
	partOfSpeechId: int("PartOfSpeechId").notNull().references(() => partsOfSpeech.id),
	singularForm: varchar("SingularForm", { length: 250 }),
	pluralForm: varchar("PluralForm", { length: 250 }),
	gender: varchar("Gender", { length: 10 }),
	verbalComment: varchar("VerbalComment", { length: 250 }),
	literally: varchar("Literally", { length: 250 }),
	mainEntryId: int("MainEntryId").references(() => lexemes.id),
},
(table) => [
	index("IX_LexemeEntries_Lexeme").on(table.lexemeId),
	primaryKey({ columns: [table.id], name: "lexeme_entries_Id"}),
]);

export const lexemeEntryTypes = mysqlTable("lexeme_entry_types", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 10 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "lexeme_entry_types_Id"}),
]);

export const lexemes = mysqlTable("lexemes", {
	id: int("Id").autoincrement().notNull(),
	lexeme: varchar("Lexeme", { length: 200 }).notNull(),
	lexemeOrtho: varchar("LexemeOrtho", { length: 200 }).notNull(),
	homonymNumber: int("HomonymNumber"),
},
(table) => [
	index("IX_Lexemes_Lexeme").on(table.lexeme),
	primaryKey({ columns: [table.id], name: "lexemes_Id"}),
]);

export const partsOfSpeech = mysqlTable("parts_of_speech", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
	abbreviation: varchar("Abbreviation", { length: 20 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "parts_of_speech_Id"}),
]);

export const senseExamples = mysqlTable("sense_examples", {
	id: int("Id").autoincrement().notNull(),
	senseReferenceId: int("SenseReferenceId").notNull().references(() => senseReferences.id),
	languageId: int("LanguageId").notNull().references(() => languages.id),
	text: varchar({ length: 500 }).notNull(),
	soundFile: varchar("SoundFile", { length: 256 }),
	soundFileStart: decimal("SoundFileStart", { precision: 18, scale: 0 }),
	soundFileEnd: decimal("SoundFileEnd", { precision: 18, scale: 0 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sense_examples_Id"}),
]);

export const senseImages = mysqlTable("sense_images", {
	id: int("Id").autoincrement().notNull(),
	senseId: int("SenseId").notNull().references(() => senses.id),
	imageId: int("ImageId").notNull().references(() => images.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sense_images_Id"}),
]);

export const senseReferences = mysqlTable("sense_references", {
	id: int("Id").autoincrement().notNull(),
	senseId: int("SenseId").notNull().references(() => senses.id),
	order: int("Order").notNull(),
	textReference: varchar("TextReference", { length: 50 }).notNull(),
	englishTranslation: varchar("EnglishTranslation", { length: 500 }).notNull(),
	contributorId: int("ContributorId").references(() => contributors.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sense_references_Id"}),
]);

export const senseSources = mysqlTable("sense_sources", {
	id: int("Id").autoincrement().notNull(),
	senseId: int("SenseId").notNull().references(() => senses.id),
	code: varchar("Code", { length: 50 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sense_sources_Id"}),
]);

export const senseXReferences = mysqlTable("sense_x_references", {
	id: int("Id").autoincrement().notNull(),
	senseId: int("SenseId").notNull().references(() => senses.id),
	order: int("Order").notNull(),
	xreferenceId: int("XReferenceId").notNull().references(() => lexemeEntries.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sense_x_references_Id"}),
]);

export const senses = mysqlTable("senses", {
	id: int("Id").autoincrement().notNull(),
	lexemeEntryId: int("LexemeEntryId").notNull().references(() => lexemeEntries.id),
	order: int("Order").notNull(),
	englishDefinition: varchar("EnglishDefinition", { length: 250 }).notNull(),
	englishGloss: varchar("EnglishGloss", { length: 250 }).notNull(),
	englishReversal: varchar("EnglishReversal", { length: 250 }),
	nationalDefinition: varchar("NationalDefinition", { length: 250 }),
	nationalGloss: varchar("NationalGloss", { length: 250 }),
	nationalReversal: varchar("NationalReversal", { length: 250 }),
	usageComment: text("UsageComment"),
	scientificName: varchar("ScientificName", { length: 250 }),
	encyclopaedicInfo: text("EncyclopaedicInfo"),
},
(table) => [
	index("IX_Senses_EnglishGloss").on(table.englishGloss),
	index("IX_Senses_NationalGloss").on(table.nationalGloss),
	primaryKey({ columns: [table.id], name: "senses_Id"}),
]);

export const sexes = mysqlTable("sexes", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 10 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sexes_Id"}),
]);

export const speechEventComments = mysqlTable("speech_event_comments", {
	id: int("Id").autoincrement().notNull(),
	speechEventId: int("SpeechEventId").notNull().references(() => speechEvents.id),
	comment: varchar("Comment", { length: 500 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_comments_Id"}),
]);

export const speechEventContributors = mysqlTable("speech_event_contributors", {
	id: int("Id").autoincrement().notNull(),
	speechEventId: int("SpeechEventId").notNull().references(() => speechEvents.id),
	contributorId: int("ContributorId").notNull().references(() => contributors.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_contributors_Id"}),
]);

export const speechEventCreators = mysqlTable("speech_event_creators", {
	id: int("Id").autoincrement().notNull(),
	speechEventId: int("SpeechEventId").notNull().references(() => speechEvents.id),
	creatorId: int("CreatorId").notNull().references(() => contributors.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_creators_Id"}),
]);

export const speechEventFileTypes = mysqlTable("speech_event_file_types", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_file_types_Id"}),
]);

export const speechEventFiles = mysqlTable("speech_event_files", {
	id: int("Id").autoincrement().notNull(),
	speechEventId: int("SpeechEventId").notNull().references(() => speechEvents.id),
	fileTypeId: int("FileTypeId").notNull().references(() => speechEventFileTypes.id),
	filename: varchar("Filename", { length: 256 }).notNull(),
	comment: varchar("Comment", { length: 250 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_files_Id"}),
]);

export const speechEventTopics = mysqlTable("speech_event_topics", {
	id: int("Id").autoincrement().notNull(),
	speechEventId: int("SpeechEventId").notNull().references(() => speechEvents.id),
	topic: varchar("Topic", { length: 50 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_topics_Id"}),
]);

export const speechEventTypes = mysqlTable("speech_event_types", {
	id: int("Id").autoincrement().notNull(),
	name: varchar("Name", { length: 50 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_event_types_Id"}),
]);

export const speechEvents = mysqlTable("speech_events", {
	id: int("Id").autoincrement().notNull(),
	toolboxCode: varchar("ToolboxCode", { length: 20 }).notNull(),
	title: varchar("Title", { length: 100 }).notNull(),
	eventTypeId: int("EventTypeId").notNull().references(() => speechEventTypes.id),
	genreId: int("GenreId").references(() => genres.id),
	languageId: int("LanguageId").notNull().references(() => languages.id),
	recordingDate: datetime("RecordingDate", { mode: 'string'}),
	recordingPlace: varchar("RecordingPlace", { length: 100 }),
	recordingEquipment: varchar("RecordingEquipment", { length: 200 }),
	description: varchar("Description", { length: 200 }),
	accessRights: varchar("AccessRights", { length: 200 }),
	// Warning: Can't parse bit(1) from database
	// bit(1)Type: bit(1)("Reviewed"),
	recordingQuality: varchar("RecordingQuality", { length: 250 }),
	// Warning: Can't parse bit(1) from database
	// bit(1)Type: bit(1)("Interlinearised"),
},
(table) => [
	primaryKey({ columns: [table.id], name: "speech_events_Id"}),
]);
