/* 2023-07-06 포트폴리오 작성/수정 페이지 - 김다함 */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import usePreventRefresh from '@/hooks/usePreventRefresh';

import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import LogoHeader from '@/components/header/LogoHeader';
import TitleForm from '@/components/editor/TitleForm';
import { BsCheck2 } from 'react-icons/bs';
// import BackModal from '@/components/modal/BackModal';

export default function PortfolioEdit() {
  // const navigate = useNavigate();
  const [isTitleFormOpen, setIsTitleFormOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');

  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  usePreventRefresh();

  return (
    <FlexColumnContainer gap={0} className="mx-h-screen top-0 overflow-hidden">
      <LogoHeader />
      <QuillEditor htmlContent={htmlContent} setContentHandler={setHtmlContent} isTitleFormOpen={isTitleFormOpen} />
      {isTitleFormOpen &&
        <TitleForm createdAt={''} setIsTitleFormOpen={setIsTitleFormOpen} htmlContent={htmlContent} />
      }
      <PortfolioEditButton
        color="black"
        className="absolute bottom-10 right-16"
        onClick={() => setIsTitleFormOpen(true)}>
        <BsCheck2 size="25" color="white" />
      </PortfolioEditButton>
      {/* {isModalOpen && <BackModal onCancel={() => setIsModalOpen(!isModalOpen)} onConfirm={() => navigate(-1)} />} */}
    </FlexColumnContainer>
  );
}
