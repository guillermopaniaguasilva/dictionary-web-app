export type Phonetic = {
  [key: string]: string | undefined | {};
  text?: string;
  audio?: string;
  sourceUrl?: string;
  licence?: {};
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[] | [];
  antonyms: string[] | [];
};

export type Definition = {
  definition: string;
  example?: string;
  synonyms: string[] | [];
  antonyms: string[] | [];
};

export type DictionaryFetchWordResponse = {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
};
