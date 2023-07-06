import CHeader from '@/commons/atoms/header/CHeader';
import Search from '@/components/search/Search';
import { ItemWrapper, SearchContainer } from './CommunityList.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';
import Footer from '@/commons/atoms/footer/Footer';

export default function CommunityList() {
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
