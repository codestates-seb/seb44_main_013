import { Link } from 'react-router-dom';
import Search from '@/components/search/Search';
import {
  CommunityWrapper,
  ItemWrapper,
  SearchContainer,
} from './CommunityMain.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';

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
