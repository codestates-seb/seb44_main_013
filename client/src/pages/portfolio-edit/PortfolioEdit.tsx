/* 2023-07-06 포트폴리오 작성/수정 페이지 - 김다함 */
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPortfolio } from '@/store/portfolioSlice';
import usePreventRefresh from '@/hooks/usePreventRefresh';
import usePreventGoBack from '@/hooks/usePreventGoBack';
import { changeDateFormat } from '@/utils/changeDateFormat';
import { call } from '@/utils/apiService';

import { PortfolioCheckButton } from '@/pages/portfolio-edit/PortfolioEdit.styled';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import TitleForm from '@/components/titleForm/TitleForm';
import LogoHeader from '@/components/header/LogoHeader';
import { BsCheck2 } from 'react-icons/bs';

export default function PortfolioEdit() {
  const [isTitleFormOpen, setIsTitleFormOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const portfolioId = searchParams.get("portfolioId");
  const getPortfolio = (portfolioId: string | null) => call(`/portfolios/${portfolioId}`, 'GET')

  usePreventRefresh();
  usePreventGoBack();

  useEffect(() => {
    const isModified = portfolioId ? true : false;
    if (isModified) {
      getPortfolio(portfolioId)
        .then((res) => {
          dispatch(setPortfolio({
            id: portfolioId,
            title: res.data.title,
            content: res.data.content,
            category: res.data.category.name,
            tags: res.data.tags,
            explains: res.data.explain,
            createdAt: changeDateFormat(res.data.createdAt),
          }));
        })
    }
  }, []);

  return (
    <FlexColumnContainer>
      <LogoHeader />
      <QuillEditor isTitleFormOpen={isTitleFormOpen} />
      {isTitleFormOpen &&
        <TitleForm setIsTitleFormOpen={setIsTitleFormOpen} />
      }
      <PortfolioCheckButton
        color="black"
        onClick={() => setIsTitleFormOpen(true)}>
        <BsCheck2 size="25" color="white" />
      </PortfolioCheckButton>
    </FlexColumnContainer>
  );
}
