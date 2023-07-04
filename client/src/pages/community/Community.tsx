import CHeader from '@/commons/atoms/header/CHeader';
import Search from '@/components/search/Search';
import { SearchContainer } from './Community.styled';

export default function Community() {
  return (
    <>
      <CHeader />
      <SearchContainer>
        <Search />
      </SearchContainer>
    </>
  );
}
