/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { AskCommisionBtn } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { ButtonHeader, ContentContainer, PortfolioContainer, UserCard, UserContainer } from './PortfolioDetail.styled';
import { Center, FlexColumnContainer, FlexWrapper } from '@/commons/styles/Containers.styled';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
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
    member_id: 0,
    name: '',
    picture: ''
  }

  const { data, isSuccess } = useQuery(['portfolio', portfolio_id],
    () => call(`/portfolios/${portfolio_id}`, 'GET'), { staleTime: Infinity, cacheTime: Infinity }
  );

  if (isSuccess) {
    user = {
      member_id: data.member_id,
      name: data.name,
      picture: data.picture
    }
  }
  return (
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

          <UserCard>
            <LabelText color='white'>Tags</LabelText>
            <FlexWrapper gap={8}>
              {isSuccess &&
                data.tags.map((tag: string, id: number) => <Tag value={tag} key={id} />)
              }
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
    </FlexColumnContainer>
  );
}
