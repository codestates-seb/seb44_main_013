import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

export default function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchBox type="text" />
    </SearchContainer>
  );
}
