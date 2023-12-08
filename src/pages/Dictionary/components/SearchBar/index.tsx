import searchIcon from 'assets/images/icon-search.svg';
import { FormEvent, useEffect, useState } from 'react';
import { DictionaryFetchWordResponse } from 'types/index';
import { useFetchDefinition } from '../../../../hooks/useFetchWord';
import {
  ErrorMessage,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './styles';

type SearchBarProps = {
  setEntry: (entry: DictionaryFetchWordResponse[] | null) => void;
  setFetchError: (errorStatus: boolean) => void;
};

export default function SearchBar({ setEntry, setFetchError }: SearchBarProps) {
  const [word, setWord] = useState('');
  const [hasError, setHasError] = useState(false);

  const { data, isLoading, error } = useFetchDefinition(word);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (word === '') return setHasError(true);
  };

  useEffect(() => {
    if (word === '') {
      setEntry(null);
      setFetchError(false);
    }
  }, [word]);

  useEffect(() => {
    if (isLoading) return;

    if (error) setFetchError(true);

    if (data) {
      setEntry(data);
    }
  }, [data, isLoading, error]);

  return (
    <form onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for any word..."
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
            setHasError(false);
          }}
          $hasError={hasError}
        />
        <SearchIcon src={searchIcon} onClick={handleSubmit} />
      </SearchContainer>
      {hasError && <ErrorMessage>Whoops, can't be empty</ErrorMessage>}
    </form>
  );
}
