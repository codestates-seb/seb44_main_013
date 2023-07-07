import { Link } from 'react-router-dom';
import Search from '@/components/search/Search';
import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper,
  ListsWrapper
} from './CommunityMain.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';
// import CHeader from '@/commons/atoms/header/CHeader';
// import { BackImgControl } from '@/commons/styles/layout/Layout.styled';

export default function CommunityMain() {
  return (
    <CommunityWrapper>

      <SearchContainer>
        <Search />
      </SearchContainer>

      <ItemWrapper>
        <WritingBtn/>
        <ListsWrapper>
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <Link to="/boards/detail">
                <CommunityItem key={index} />
              </Link>
            );
          })}
        </ListsWrapper>
      </ItemWrapper>
    </CommunityWrapper>
  );
}
