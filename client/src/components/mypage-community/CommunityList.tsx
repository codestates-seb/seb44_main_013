import {
  MainTitle,
  Name,
  Tags,
  TagsContainer,
  TextContainer,
  Wrapper,
} from './CommunityList.styled';

export default function CommunityList() {
  return (
    <Wrapper>
      <TextContainer>
        <MainTitle>Title</MainTitle>
        <Name>@wjy</Name>
      </TextContainer>

      <TagsContainer>
        <Tags>#tags</Tags>
        <Tags>#tags</Tags>
      </TagsContainer>
    </Wrapper>
  );
}
