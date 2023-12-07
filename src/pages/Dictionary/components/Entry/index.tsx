import { DictionaryFetchWordResponse } from 'types/index';
import Heading from './components/Heading';

type EntryProps = {
  entry: DictionaryFetchWordResponse[];
};

export default function Entry({ entry }: EntryProps) {
  return (
    <>
      <Heading
        phonetics={entry.map((e) => e.phonetics)[0]}
        word={entry[0].word}
      />
    </>
  );
}
