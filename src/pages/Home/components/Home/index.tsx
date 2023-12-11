import { useState } from 'react';
import { DictionaryFetchWordResponse } from 'types/index';
import Entry from '../Entry';
import SearchBar from '../SearchBar';

export default function Home() {
  const [entry, setEntry] = useState<DictionaryFetchWordResponse[] | null>(
    null
  );
  const [fetchError, setFetchError] = useState<boolean>(false);

  return (
    <>
      <SearchBar setEntry={setEntry} setFetchError={setFetchError} />
      <Entry entry={entry} fetchError={fetchError} />
    </>
  );
}
