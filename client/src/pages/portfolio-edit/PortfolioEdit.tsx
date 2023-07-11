/* 2023-07-06 포트폴리오 작성/수정 페이지 - 김다함 */
import { useState } from 'react';
import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import TitleForm from '@/components/editor/TitleForm';
import LogoHeader from '@/components/header/LogoHeader';
import { BsCheck2 } from 'react-icons/bs';

export default function PortfolioEdit() {
  const [openTitle, setOpenTitle] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');

  return (
    <FlexColumnContainer gap={0} className="mx-h-screen top-0 overflow-hidden">
      <LogoHeader />
      <QuillEditor htmlContent={htmlContent} setContentHandler={setHtmlContent} />
      {openTitle && <TitleForm isCreated='' setOpenTitle={setOpenTitle} htmlContent={htmlContent} />}
      <PortfolioEditButton
        type="black"
        className="absolute bottom-10 right-16" onClick={() => setOpenTitle(true)}>
        <BsCheck2 size="25" color="white" />
      </PortfolioEditButton>
    </FlexColumnContainer>
  );
}
