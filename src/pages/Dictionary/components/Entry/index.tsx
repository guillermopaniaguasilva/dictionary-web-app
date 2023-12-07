import { useState } from 'react';
import { DictionaryFetchWordResponse } from 'types/index';
import Heading from './components/Heading';
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
      <Source source={source} />
    </>
  );
}
