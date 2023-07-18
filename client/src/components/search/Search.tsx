import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

export default function Search({ setSearchValue, 엔터치면검색 }: any) {
  const changeValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchValue(e.target.value);
      엔터치면검색(e.target.value);
    }
  };

  return (
    <SearchContainer onSubmit={엔터치면검색}>
      <SearchIcon />
      <SearchBox
        type="text"
        onChange={changeValue}
        onKeyDown={handleKeyPress}
      />
    </SearchContainer>
  );
}
