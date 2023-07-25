import { Board } from '@/types';
import {
  MainTitle,
  Name,
  TagsContainer,
  TextContainer,
  Wrapper,
} from './CommunityList.styled';

export default function CommunityList() {
  return (
    <Wrapper>
      <TextContainer>
        <MainTitle>Title</MainTitle>
      </TextContainer>

      <TagsContainer>
        <Name>@wjy</Name>

        {/* <Tags>#tags</Tags> */}
        {/* <Tags>#tags</Tags> */}
      </TagsContainer>
    </Wrapper>
  );
}
