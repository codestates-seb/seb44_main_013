import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

export default function Search({ setSearchValue, 엔터치면검색 }: any) {
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    엔터치면검색();
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchIcon />
      <SearchBox type="text" onChange={handleChange} />
    </SearchContainer>
  );
}
