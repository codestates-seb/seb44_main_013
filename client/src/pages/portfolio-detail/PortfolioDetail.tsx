/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Portfolio, Member, Tag as tag } from '@/types';
import { call } from '@/utils/ApiService';

import { ButtonHeader, ContentContainer, PortfolioContainer, UserCard, UserContainer } from './PortfolioDetail.styled';
import { Center, FlexColumnContainer, FlexWrapper } from '@/commons/styles/Containers.styled';
import { BodyText, HeadingText, LabelText, SmallText } from '@/commons/atoms/Typography';
import { AskCommisionBtn } from '@/commons/atoms/buttons/Button.styled';
import MemberProfile from '@/commons/molecules/MemberProfile';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import Tag from '@/commons/molecules/Tag';
import { BsArrowReturnLeft } from 'react-icons/bs';

export default function PortfolioDetail() {
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [member, setMember] = useState<Member>();

  const navigate = useNavigate();
  const { portfolio_id: portfolioId } = useParams();

  const getPortfolio = () => call(`/portfolios/${portfolioId}`, 'GET');

  useEffect(() => {
    getPortfolio().then((res) => {
      setPortfolio(res.data);
      setMember(res.data.member);
    });
  }, [])

  return (
    <FlexColumnContainer bg='rgba(16, 16, 21, 1)'>
      <ButtonHeader>
        <BsArrowReturnLeft
          size={30} color='white'
          className='cursor-pointer'
          onClick={() => navigate(-1)} />
      </ButtonHeader>

      <ContentContainer>
        <PortfolioContainer>
          {portfolio &&
            <div className='break-keep w-full' dangerouslySetInnerHTML={{ __html: portfolio.content }}></div>
          }
        </PortfolioContainer>

        <UserContainer>
          <UserCard>
            <FlexWrapper className='justify-between'>
              {portfolio &&
                <>
                  <LikeBtn portfolioId={portfolio.portfolioId} currentLikes={portfolio.likes} isToggled={portfolio.isLiked} />
                  <FlexWrapper gap={20}>
                    <SmallText color='white'>views · {portfolio.views}</SmallText>
                    <Bookmark portfolioId={portfolio.portfolioId} isToggled={portfolio.isMarked} />
                  </FlexWrapper>
                </>
              }
            </FlexWrapper>
            {member &&
              <MemberProfile type="portfolio" member={member} />
            }
            <Center>
              <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
            </Center>
            {portfolio &&
              <>
                <HeadingText color='white'>{portfolio.title}</HeadingText>
                <BodyText color='white'>{portfolio.explains}</BodyText>
              </>
            }
          </UserCard>

          <UserCard>
            <LabelText color='white'>Tags</LabelText>
            <FlexWrapper gap={8}>
              {portfolio &&
                portfolio.tags.map((tag: tag) => <Tag value={tag.name} key={tag.tagId} />)
              }
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
    </FlexColumnContainer>
  );
}
