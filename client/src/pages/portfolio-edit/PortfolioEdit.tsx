/* 2023-07-06 포트폴리오 작성/수정 페이지 - 김다함 */
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { INITIAL_PORTFOLIO } from '@/types/initials';
import { PortfolioContent } from '@/types';

import usePreventRefresh from '@/hooks/usePreventRefresh';

import { changeDateFormat } from '@/utils/changeDateFormat';
import { call } from '@/utils/apiService';

import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import { PortfolioCheckButton } from '@/pages/portfolio-edit/PortfolioEdit.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import LogoHeader from '@/components/header/LogoHeader';
import TitleForm from '@/components/editor/TitleForm';
import { BsCheck2 } from 'react-icons/bs';
// import BackModal from '@/components/modal/BackModal';

export default function PortfolioEdit() {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<PortfolioContent>(INITIAL_PORTFOLIO);
  const [isTitleFormOpen, setIsTitleFormOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>('');
  const [searchParams] = useSearchParams();

  const getPortfolio = (portfolioId: string) => call(`/portfolios/${portfolioId}`, 'GET')
  const portfolioId = searchParams.get("portfolioId");

  usePreventRefresh();

  useEffect(() => {
    if (portfolioId) {
      getPortfolio(portfolioId).then((res) => {
        setHtmlContent(res.data.content);
        setCreatedAt(changeDateFormat(res.data.createdAt));
        setPortfolio({
          title: res.data.title,
          category: res.data.category,
          tags: res.data.tags,
          explains: res.data.explains,
          createdAt: createdAt,
        })
      })
    }
  }, []);

  return (
    <FlexColumnContainer>
      <LogoHeader />
      <QuillEditor
        htmlContent={htmlContent}
        setContentHandler={setHtmlContent}
        isTitleFormOpen={isTitleFormOpen} />
      {isTitleFormOpen &&
        <TitleForm
          setIsTitleFormOpen={setIsTitleFormOpen}
          htmlContent={htmlContent}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          portfolioId={portfolioId} />
      }
      <PortfolioCheckButton
        color="black"
        onClick={() => setIsTitleFormOpen(true)}>
        <BsCheck2 size="25" color="white" />
      </PortfolioCheckButton>
      {/* {isModalOpen && <BackModal onCancel={() => setIsModalOpen(!isModalOpen)} onConfirm={() => navigate(-1)} />} */}
    </FlexColumnContainer>
  );
}
