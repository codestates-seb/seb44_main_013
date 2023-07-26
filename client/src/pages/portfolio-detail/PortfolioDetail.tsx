/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useChangeHtmlContent from '@/hooks/useChangeHtmlContent';
import { call, changeDateFormat } from '@/utils';
import { Portfolio, Member, Tag } from '@/types';

import {
  ButtonHeader,
  ContentContainer,
  DeleteButton,
  EditButton,
  PortfolioContainer,
  UserCard,
  UserContainer,
  AskCommisionBtn,
} from '@/pages/portfolio-detail/PortfolioDetail.styled';
import { Center, FlexBetweenWrapper, FlexColumnContainer, FlexEndWrapper, FlexWrapper, } from '@/commons/styles/Containers.styled';
import { BodyText, HeadingText, LabelText, SmallText } from '@/commons/atoms/text/Typography';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import LikeButton from '@/commons/atoms/buttons/LikeButton';
import DeleteModal from '@/components/modal/DeleteModal';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import PortfolioTag from '@/commons/molecules/tag/Tag';
import { BsArrowReturnLeft } from 'react-icons/bs';

export default function PortfolioDetail() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [createdAt, setCreatedAt] = useState<string>('');
  const [member, setMember] = useState<Member>();

  const [sanitize, setElementInlineStyle] = useChangeHtmlContent();
  const { portfolio_id: portfolioId } = useParams();
  const navigate = useNavigate();

  const deletePortfolio = () => call(`/portfolios/${portfolioId}`, 'DELETE');
  const getPortfolio = () => call(`/portfolios/${portfolioId}`, 'GET');

  const onEditButtonClick = () => window.location.href = `/portfolio/edit?portfolioId=${portfolioId}`;
  const openDeleteModal = () => setIsModalOpen(!isModalOpen);
  const deletePortfolioHandler = () => {
    deletePortfolio();
    navigate('/main');
  };

  useEffect(() => {
    getPortfolio().then((res) => {
      console.log(res.data);
      console.log(res.data.content);
      setPortfolio(res.data);
      setMember(res.data.member);
      setCreatedAt(changeDateFormat(res.data.createdAt));
    });
  }, []);

  return (
    <FlexColumnContainer bg="rgba(16, 16, 21, 1)">
      <ButtonHeader>
        <BsArrowReturnLeft size={30} color="white" className="cursor-pointer" onClick={() => navigate(-1)} />
      </ButtonHeader>

      <ContentContainer>
        <PortfolioContainer>
          {portfolio && (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(setElementInlineStyle(portfolio.content)),
              }}
            ></div>
          )}
        </PortfolioContainer>

        <UserContainer>
          <UserCard>
            <FlexBetweenWrapper>
              {portfolio && (
                <>
                  <LikeButton
                    portfolioId={portfolio.id}
                    currentLikes={portfolio.countLikes}
                    isToggled={portfolio.liked}
                  />
                  <FlexWrapper gap={20}>
                    <SmallText color="white">views · {portfolio.view}</SmallText>
                    <Bookmark portfolioId={portfolio.id} isToggled={portfolio.marked} />
                  </FlexWrapper>
                </>
              )}
            </FlexBetweenWrapper>
            {member && <MemberProfile type="portfolio" member={member} />}
            <Center>
              <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
            </Center>
            {portfolio && (
              <>
                <HeadingText color="white">{portfolio.title}</HeadingText>
                <SmallText color="white">{createdAt}</SmallText>
                <BodyText color="white">{portfolio.explains}</BodyText>
              </>
            )}
            {portfolio?.writer && (
              <FlexEndWrapper>
                <EditButton onClick={onEditButtonClick} />
                <DeleteButton onClick={openDeleteModal} />
              </FlexEndWrapper>
            )}
          </UserCard>

          <UserCard>
            <LabelText color="white">Tags</LabelText>
            <FlexWrapper gap={8}>
              {portfolio && portfolio.portfolioTags.map((tag: Tag) => <PortfolioTag tag={tag} key={tag.id} readOnly={true} />)}
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
      {isModalOpen && <DeleteModal onConfirm={deletePortfolioHandler} onCancel={openDeleteModal} />}
    </FlexColumnContainer>
  );
}
