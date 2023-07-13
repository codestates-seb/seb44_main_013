/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { AskCommisionBtn } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { ButtonHeader, ContentContainer, PortfolioContainer, UserCard, UserContainer } from './PortfolioDetail.styled';
import { Center, FlexColumnContainer, FlexWrapper } from '@/commons/styles/Containers.styled';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
<<<<<<< HEAD
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
=======
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import UserProfile from '@/commons/molecules/UserProfile';
import Tag from '@/commons/molecules/Tag';
import { BodyText, HeadingText, LabelText, SmallText } from '@/commons/atoms/Typography';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { call } from '@/utils/ApiService';
import { UserType } from '@/types';

export default function PortfolioDetail() {
  const navigate = useNavigate();
  const { portfolio_id } = useParams();
  let user: UserType = {
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
    member_id: 0,
    name: '',
    picture: ''
  }
<<<<<<< HEAD
  const { data, isSuccess } = useQuery(['portfolio'],
    () => call(`/portfolios/${portfolio_id}`, 'GET'));
=======

  const { data, isSuccess } = useQuery(['portfolio', portfolio_id],
    () => call(`/portfolios/${portfolio_id}`, 'GET'), { staleTime: Infinity, cacheTime: Infinity }
  );

>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  if (isSuccess) {
    user = {
      member_id: data.member_id,
      name: data.name,
      picture: data.picture
    }
  }
  return (
<<<<<<< HEAD
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
=======
    <FlexColumnContainer bg='rgba(16, 16, 21, 1)'>
      <ButtonHeader>
        <BsArrowReturnLeft size={30} color='white'
          className='cursor-pointer'
          onClick={() => navigate(-1)} />
      </ButtonHeader>

      <ContentContainer>
        <PortfolioContainer>
          {isSuccess &&
            <div className='break-keep w-full' dangerouslySetInnerHTML={{ __html: data.content }}></div>
          }
        </PortfolioContainer>

        <UserContainer>
          <UserCard>
            <FlexWrapper className='justify-between'>
              {isSuccess &&
                <>
                  <LikeBtn portfolio_id={data.portfolio_id} initialLikes={data.likes} initialIsLiked={data.isLiked} />
                  <FlexWrapper gap={20}>
                    <SmallText color='white'>views · {isSuccess && data.views}</SmallText>
                    <Bookmark portfolio_id={data.portfolio_id} initialMarkedState={data.isMarked} />
                  </FlexWrapper>
                </>
              }
            </FlexWrapper>
            <UserProfile type="portfolio" user={user} />

            <Center>
              <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
            </Center>

            <HeadingText color='white'>{isSuccess && data.title}</HeadingText>
            <BodyText color='white'>{isSuccess && data.explains}</BodyText>
          </UserCard>

>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
          <UserCard>
            <LabelText color='white'>Tags</LabelText>
            <FlexWrapper gap={8}>
              {isSuccess &&
<<<<<<< HEAD
                data.tags.map((tag: string) => <Tag value={tag} />)
=======
                data.tags.map((tag: string, id: number) => <Tag value={tag} key={id} />)
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
              }
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
    </FlexColumnContainer>
  );
}
