/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dompurify from "dompurify";

import { changeDateFormat } from '@/utils/changeDateFormat';
import { Portfolio, Member, Tag as tag } from '@/types';
import { call } from '@/utils/apiService';

import { ButtonHeader, ContentContainer, PortfolioContainer, HtmlWrapper, UserCard, UserContainer } from './PortfolioDetail.styled';
import { Center, FlexColumnContainer, FlexWrapper } from '@/commons/styles/Containers.styled';
import { BodyText, HeadingText, LabelText, SmallText } from '@/commons/atoms/Typography';
import ReviseBtn from '@/commons/atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '@/commons/atoms/buttons/revise-remove/RemoveBtn';
import { AskCommisionBtn } from '@/commons/atoms/buttons/Button.styled';
import MemberProfile from '@/commons/molecules/MemberProfile';
import DeleteModal from '@/components/modal/DeleteModal';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
import { BsArrowReturnLeft } from 'react-icons/bs';
import Tag from '@/commons/molecules/Tag';


export default function PortfolioDetail() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [createdAt, setCreatedAt] = useState<string>('');
  const [member, setMember] = useState<Member>();
  const sanitizer = dompurify.sanitize;

  const { portfolio_id: portfolioId } = useParams();
  const navigate = useNavigate();

  const deletePortfolio = () => call(`/portfolios/${portfolioId}`, 'DELETE');
  const getPortfolio = () => call(`/portfolios/${portfolioId}`, 'GET');

  const onReviseButtonClick = () => navigate(`/portfolio/edit?portfolioId=${portfolioId}`);
  const openDeleteModal = () => setIsModalOpen(!isModalOpen);
  const deletePortfolioHandler = () => {
    deletePortfolio();
    navigate('/');
  }

  useEffect(() => {
    getPortfolio().then((res) => {
      setPortfolio(res.data);
      setMember(res.data.member);
      setCreatedAt(changeDateFormat(res.data.createdAt));
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
            <HtmlWrapper dangerouslySetInnerHTML={{ __html: sanitizer(portfolio.content) }}></HtmlWrapper>
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
                <SmallText color="white">{createdAt}</SmallText>
                <BodyText color='white'>{portfolio.explains}</BodyText>
              </>
            }
            {portfolio?.isMine &&
              <FlexWrapper className='justify-end'>
                <ReviseBtn onClick={onReviseButtonClick} /> | <RemoveBtn onClick={openDeleteModal} />
              </FlexWrapper>
            }
          </UserCard>

          <UserCard>
            <LabelText color='white'>Tags</LabelText>
            <FlexWrapper gap={8}>
              {portfolio &&
                portfolio.tags.map((tag: tag) => <Tag tag={tag} key={tag.tagId} readOnly={true} />)
              }
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
      {isModalOpen && <DeleteModal onConfirm={deletePortfolioHandler} onCancel={openDeleteModal} />}
    </FlexColumnContainer>
  );
}
