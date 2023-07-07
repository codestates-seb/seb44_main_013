import { Link } from 'react-router-dom';
import Search from '@/components/search/Search';
import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper
} from './CommunityMain.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';
// import CHeader from '@/commons/atoms/header/CHeader';
// import { BackImgControl } from '@/commons/styles/layout/Layout.styled';

export default function CommunityMain() {
  return (
    <CommunityWrapper>

      <SearchContainer>
        <Search />
      </SearchContainer>

      <ItemWrapper>
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <Link to="/boards/detail">
              <CommunityItem key={index} />
            </Link>
          );
        })}
      </ItemWrapper>
    </CommunityWrapper>
  );
}
