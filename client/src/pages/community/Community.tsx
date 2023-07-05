import CHeader from '@/commons/atoms/header/CHeader';
import Search from '@/components/search/Search';
import { ItemWrapper, SearchContainer } from './Community.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';
import Footer from '@/commons/atoms/footer/Footer';

export default function Community() {
  return (
    <>
      <CHeader />
      <SearchContainer>
        <Search />
      </SearchContainer>

      <ItemWrapper>
        {Array.from({ length: 8 }).map((_, index) => {
          return <CommunityItem key={index} />;
        })}
      </ItemWrapper>
      <Footer />
    </>
  );
}
