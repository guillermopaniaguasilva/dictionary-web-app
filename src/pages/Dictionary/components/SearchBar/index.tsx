import searchIcon from 'assets/images/icon-search.svg';
import { FormEvent, useState } from 'react';
import {
  ErrorMessage,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './styles';

export default function SearchBar() {
  const [word, setWord] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (word === '') return setHasError(true);

    console.log('word', word); //TODO: implement here request to API
  };

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
