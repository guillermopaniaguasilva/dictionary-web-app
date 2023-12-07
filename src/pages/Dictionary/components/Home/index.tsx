import { useState } from 'react';
import { DictionaryFetchWordResponse } from 'types/index';
import data from '../../../../../mock-data.json';
import Entry from '../Entry';
import SearchBar from '../SearchBar';

export default function Home() {
  const [entry, setEntry] = useState<DictionaryFetchWordResponse[]>(data);

  return (
    <>
      <SearchBar setEntry={setEntry} />
      <Entry entry={entry} />
    </>
  );
}
