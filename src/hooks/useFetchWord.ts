import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { DictionaryFetchWordResponse } from 'types/index';

const fetchDefinition = async ({
  queryKey,
}: QueryFunctionContext): Promise<DictionaryFetchWordResponse> => {
  const [, word] = queryKey;
  const requestUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const res = await fetch(requestUrl);
  const data = await res.json();
  return data;
};

export const useFetchDefinition = (word: string) => {
  return useQuery({
    queryKey: ['definition', word],
    queryFn: fetchDefinition,
    enabled: !!word,
  });
};
