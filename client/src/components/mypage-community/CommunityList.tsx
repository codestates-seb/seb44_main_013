import { Link } from 'react-router-dom';
import { MainTitle, Name, TagsContainer, TextContainer, Wrapper } from './CommunityList.styled';

interface CommunityListProps {
  title: string;
  name: string | undefined;
  communityId: number;
}

export default function CommunityList({ title, name, communityId }: CommunityListProps) {
  return (
    <Link to={`/boards/${communityId}`}>
      <Wrapper>
        <TextContainer>
          <MainTitle>{title}</MainTitle>
        </TextContainer>

        <TagsContainer>
          <Name>{name}</Name>
        </TagsContainer>
      </Wrapper>
    </Link>
  );
}
