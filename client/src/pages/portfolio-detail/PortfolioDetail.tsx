/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { AskCommisionBtn } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { ButtonHeader, ContentContainer, PortfolioContainer, UserCard, UserContainer } from './PortfolioDetail.styled';
import { Center, FlexColumnContainer, FlexWrapper } from '@/commons/styles/Containers.styled';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
import Bookmark from '@/components/bookmark/Bookmark';
import UserProfile from '@/commons/molecules/UserProfile';
import Tag from '@/commons/molecules/Tag';
import { BodyText, HeadingText, LabelText } from '@/commons/atoms/Typography';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { call } from '@/utils/ApiService';
import { User } from '@/types';

export default function PortfolioDetail() {
  const navigate = useNavigate();
  // const { portfolio_id } = useParams();
  const portfolio_id = 1;
  let user: User = {
    member_id: 0,
    name: '',
    picture: ''
  }
  const { data, isSuccess } = useQuery(['portfolio'],
    () => call(`/portfolios/${portfolio_id}`, 'GET'));
  if (isSuccess) {
    user = {
      member_id: data.member_id,
      name: data.name,
      picture: data.picture
    }
  }
  return (
    <FlexColumnContainer gap={10} bg='rgba(16, 16, 21, 1)'>
      <ButtonHeader>
        <BsArrowReturnLeft size={30} color='white' />
      </ButtonHeader>
      <ContentContainer>
        <PortfolioContainer>
          {isSuccess && data.content}
        </PortfolioContainer>
        <UserContainer>
          <UserCard>
            <FlexWrapper gap={0} className='justify-between'>
              <LikeBtn likes={isSuccess && data.likes} />
              <Bookmark />
            </FlexWrapper>
            <UserProfile type="portfolio" user={user} />
            <Center>
              <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
            </Center>
            <HeadingText>{isSuccess && data.title}</HeadingText>
            <BodyText>{isSuccess && data.explain}</BodyText>
          </UserCard>
          <UserCard>
            <LabelText color='white'>Tags</LabelText>
            <FlexWrapper gap={8}>
              {isSuccess &&
                data.tags.map((tag: string) => <Tag value={tag} />)
              }
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
    </FlexColumnContainer>
  );
}
