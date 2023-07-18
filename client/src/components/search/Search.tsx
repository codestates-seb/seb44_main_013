// Search.tsx
import { useState } from 'react';
import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

export default function Search({ setSearchValue, 엔터치면검색 }: any) {
  const [searchValue, setSearchValueLocal] = useState('');

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValueLocal(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      엔터치면검색(searchValue);
    }
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchBox
        type="text"
        value={searchValue}
        onChange={changeValue}
        onKeyDown={handleKeyPress}
      />
    </SearchContainer>
  );
}
