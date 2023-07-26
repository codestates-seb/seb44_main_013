import {
  MainTitle,
  Name,
  TagsContainer,
  TextContainer,
  Wrapper,
} from './CommunityList.styled';

interface CommunityListProps {
  title: string;
  name: string | undefined;
}

export default function CommunityList({ title, name }: CommunityListProps) {
  return (
    <Wrapper>
      <TextContainer>
        <MainTitle>{title}</MainTitle>
      </TextContainer>

      <TagsContainer>
        <Name>@{name}</Name>
      </TagsContainer>
    </Wrapper>
  );
}
