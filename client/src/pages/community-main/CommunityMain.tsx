import { Link } from 'react-router-dom';
import Search from '@/components/search/Search';
import {
  ItemWrapper,
  SearchContainer,
  CommunityWrapper,
  ListsWrapper,
  StyledWritingBtn,
} from './CommunityMain.styled';
import CommunityItem from '@/components/communityItem/CommunityItem';
import WritingBtn from '@/commons/atoms/buttons/writing/writingBtn';

export default function CommunityMain() {
  return (
    <CommunityWrapper>
      <SearchContainer>
        <Search />
      </SearchContainer>

      <ItemWrapper>
        <Link to="/boards/edit">
          <StyledWritingBtn>
          <WritingBtn />
          </StyledWritingBtn>
        </Link>
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
