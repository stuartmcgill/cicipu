import { relations } from "drizzle-orm/relations";
import { contributors, contributorImages, images, contributorLanguages, fluency, languages, ethnicGroups, sexes, lexemes, lexemeEntries, lexemeEntryTypes, partsOfSpeech, senseExamples, senseReferences, senseImages, senses, senseSources, senseXReferences, speechEvents, speechEventComments, speechEventContributors, speechEventCreators, speechEventFileTypes, speechEventFiles, speechEventTopics, speechEventTypes, genres } from "./schema";

export const contributorImagesRelations = relations(contributorImages, ({one}) => ({
	contributor: one(contributors, {
		fields: [contributorImages.contributorId],
		references: [contributors.id]
	}),
	image: one(images, {
		fields: [contributorImages.imageId],
		references: [images.id]
	}),
}));

export const contributorsRelations = relations(contributors, ({one, many}) => ({
	contributorImages: many(contributorImages),
	contributorLanguages: many(contributorLanguages),
	ethnicGroup: one(ethnicGroups, {
		fields: [contributors.ethnicGroupId],
		references: [ethnicGroups.id]
	}),
	sex: one(sexes, {
		fields: [contributors.sexId],
		references: [sexes.id]
	}),
	senseReferences: many(senseReferences),
	speechEventContributors: many(speechEventContributors),
	speechEventCreators: many(speechEventCreators),
}));

export const imagesRelations = relations(images, ({many}) => ({
	contributorImages: many(contributorImages),
	senseImages: many(senseImages),
}));

export const contributorLanguagesRelations = relations(contributorLanguages, ({one}) => ({
	contributor: one(contributors, {
		fields: [contributorLanguages.contributorId],
		references: [contributors.id]
	}),
	fluency: one(fluency, {
		fields: [contributorLanguages.fluencyId],
		references: [fluency.id]
	}),
	language: one(languages, {
		fields: [contributorLanguages.languageId],
		references: [languages.id]
	}),
}));

export const fluencyRelations = relations(fluency, ({many}) => ({
	contributorLanguages: many(contributorLanguages),
}));

export const languagesRelations = relations(languages, ({many}) => ({
	contributorLanguages: many(contributorLanguages),
	senseExamples: many(senseExamples),
	speechEvents: many(speechEvents),
}));

export const ethnicGroupsRelations = relations(ethnicGroups, ({many}) => ({
	contributors: many(contributors),
}));

export const sexesRelations = relations(sexes, ({many}) => ({
	contributors: many(contributors),
}));

export const lexemeEntriesRelations = relations(lexemeEntries, ({one, many}) => ({
	lexeme_mainEntryId: one(lexemes, {
		fields: [lexemeEntries.mainEntryId],
		references: [lexemes.id],
		relationName: "lexemeEntries_mainEntryId_lexemes_id"
	}),
	lexemeEntryType: one(lexemeEntryTypes, {
		fields: [lexemeEntries.typeId],
		references: [lexemeEntryTypes.id]
	}),
	lexeme_lexemeId: one(lexemes, {
		fields: [lexemeEntries.lexemeId],
		references: [lexemes.id],
		relationName: "lexemeEntries_lexemeId_lexemes_id"
	}),
	partsOfSpeech: one(partsOfSpeech, {
		fields: [lexemeEntries.partOfSpeechId],
		references: [partsOfSpeech.id]
	}),
	senseXReferences: many(senseXReferences),
	senses: many(senses),
}));

export const lexemesRelations = relations(lexemes, ({many}) => ({
	lexemeEntries_mainEntryId: many(lexemeEntries, {
		relationName: "lexemeEntries_mainEntryId_lexemes_id"
	}),
	lexemeEntries_lexemeId: many(lexemeEntries, {
		relationName: "lexemeEntries_lexemeId_lexemes_id"
	}),
}));

export const lexemeEntryTypesRelations = relations(lexemeEntryTypes, ({many}) => ({
	lexemeEntries: many(lexemeEntries),
}));

export const partsOfSpeechRelations = relations(partsOfSpeech, ({many}) => ({
	lexemeEntries: many(lexemeEntries),
}));

export const senseExamplesRelations = relations(senseExamples, ({one}) => ({
	language: one(languages, {
		fields: [senseExamples.languageId],
		references: [languages.id]
	}),
	senseReference: one(senseReferences, {
		fields: [senseExamples.senseReferenceId],
		references: [senseReferences.id]
	}),
}));

export const senseReferencesRelations = relations(senseReferences, ({one, many}) => ({
	senseExamples: many(senseExamples),
	contributor: one(contributors, {
		fields: [senseReferences.contributorId],
		references: [contributors.id]
	}),
	sense: one(senses, {
		fields: [senseReferences.senseId],
		references: [senses.id]
	}),
}));

export const senseImagesRelations = relations(senseImages, ({one}) => ({
	image: one(images, {
		fields: [senseImages.imageId],
		references: [images.id]
	}),
	sense: one(senses, {
		fields: [senseImages.senseId],
		references: [senses.id]
	}),
}));

export const sensesRelations = relations(senses, ({one, many}) => ({
	senseImages: many(senseImages),
	senseReferences: many(senseReferences),
	senseSources: many(senseSources),
	senseXReferences: many(senseXReferences),
	lexemeEntry: one(lexemeEntries, {
		fields: [senses.lexemeEntryId],
		references: [lexemeEntries.id]
	}),
}));

export const senseSourcesRelations = relations(senseSources, ({one}) => ({
	sense: one(senses, {
		fields: [senseSources.senseId],
		references: [senses.id]
	}),
}));

export const senseXReferencesRelations = relations(senseXReferences, ({one}) => ({
	lexemeEntry: one(lexemeEntries, {
		fields: [senseXReferences.xreferenceId],
		references: [lexemeEntries.id]
	}),
	sense: one(senses, {
		fields: [senseXReferences.senseId],
		references: [senses.id]
	}),
}));

export const speechEventCommentsRelations = relations(speechEventComments, ({one}) => ({
	speechEvent: one(speechEvents, {
		fields: [speechEventComments.speechEventId],
		references: [speechEvents.id]
	}),
}));

export const speechEventsRelations = relations(speechEvents, ({one, many}) => ({
	speechEventComments: many(speechEventComments),
	speechEventContributors: many(speechEventContributors),
	speechEventCreators: many(speechEventCreators),
	speechEventFiles: many(speechEventFiles),
	speechEventTopics: many(speechEventTopics),
	speechEventType: one(speechEventTypes, {
		fields: [speechEvents.eventTypeId],
		references: [speechEventTypes.id]
	}),
	genre: one(genres, {
		fields: [speechEvents.genreId],
		references: [genres.id]
	}),
	language: one(languages, {
		fields: [speechEvents.languageId],
		references: [languages.id]
	}),
}));

export const speechEventContributorsRelations = relations(speechEventContributors, ({one}) => ({
	contributor: one(contributors, {
		fields: [speechEventContributors.contributorId],
		references: [contributors.id]
	}),
	speechEvent: one(speechEvents, {
		fields: [speechEventContributors.speechEventId],
		references: [speechEvents.id]
	}),
}));

export const speechEventCreatorsRelations = relations(speechEventCreators, ({one}) => ({
	contributor: one(contributors, {
		fields: [speechEventCreators.creatorId],
		references: [contributors.id]
	}),
	speechEvent: one(speechEvents, {
		fields: [speechEventCreators.speechEventId],
		references: [speechEvents.id]
	}),
}));

export const speechEventFilesRelations = relations(speechEventFiles, ({one}) => ({
	speechEventFileType: one(speechEventFileTypes, {
		fields: [speechEventFiles.fileTypeId],
		references: [speechEventFileTypes.id]
	}),
	speechEvent: one(speechEvents, {
		fields: [speechEventFiles.speechEventId],
		references: [speechEvents.id]
	}),
}));

export const speechEventFileTypesRelations = relations(speechEventFileTypes, ({many}) => ({
	speechEventFiles: many(speechEventFiles),
}));

export const speechEventTopicsRelations = relations(speechEventTopics, ({one}) => ({
	speechEvent: one(speechEvents, {
		fields: [speechEventTopics.speechEventId],
		references: [speechEvents.id]
	}),
}));

export const speechEventTypesRelations = relations(speechEventTypes, ({many}) => ({
	speechEvents: many(speechEvents),
}));

export const genresRelations = relations(genres, ({many}) => ({
	speechEvents: many(speechEvents),
}));