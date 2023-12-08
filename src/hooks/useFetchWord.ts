import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { DictionaryFetchWordResponse } from 'types/index';

const fetchDefinition = async ({
  queryKey,
}: QueryFunctionContext): Promise<DictionaryFetchWordResponse[]> => {
  const [, word] = queryKey;
  const requestUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const res = await fetch(requestUrl);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return data;
};

export const useFetchDefinition = (
  word: string,
  debounceTime: number = 300
) => {
  const [debouncedWord, setDebouncedWord] = useState(word);

  useEffect(() => {
    const debouncedUpdate = debounce(setDebouncedWord, debounceTime);
    debouncedUpdate(word);
    return () => debouncedUpdate.cancel();
  }, [word, debounceTime]);

  return useQuery({
    queryKey: ['definition', debouncedWord],
    queryFn: fetchDefinition,
    enabled: !!debouncedWord,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 30000,
    retry: 0,
  });
};
