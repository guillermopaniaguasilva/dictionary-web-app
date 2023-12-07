import { useState } from 'react';
import { DictionaryFetchWordResponse } from 'types/index';
import Heading from './components/Heading';
import Meaning from './components/Meaning';
import Source from './components/Source';

type EntryProps = {
  entry: DictionaryFetchWordResponse[];
};

export default function Entry({ entry }: EntryProps) {
  const [source, setSource] = useState<string | undefined>('');

  return (
    <>
      <Heading
        phonetics={entry.map((e) => e.phonetics)[0]}
        word={entry[0].word}
        setSource={setSource}
      />
      {entry
        .map((e) => e.meanings)[0]
        .map((m) => (
          <Meaning meaning={m} />
        ))}
      <Source source={source} />
    </>
  );
}
