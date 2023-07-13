/* 2023-07-06 포트폴리오 작성/수정 페이지 - 김다함 */
<<<<<<< HEAD
import {useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import TitleForm from '@/components/editor/TitleForm';
import LogoHeader from '@/components/header/LogoHeader';
import { BsCheck2 } from 'react-icons/bs';

<<<<<<< HEAD

export default function PortfolioEdit() {
  const [isTitle, setIsTitle] = useState(false);

  //하단 TitleFrom 등장 여부 관리하는 함수
  const handleTitle = () => {
    setIsTitle(!isTitle);
  }

  return (
    <FlexColumnContainer gap={0} className="mx-h-screen top-0 overflow-hidden">
      <LogoHeader/>
      <QuillEditor />
      {isTitle ? <TitleForm isCreated='' handleTitle={handleTitle}/> : null}
      <PortfolioEditButton 
        type="black" 
        className="absolute bottom-10 right-16"
        onClick={handleTitle}>
=======
export default function PortfolioEdit() {
  const [openTitle, setOpenTitle] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');

  return (
    <FlexColumnContainer gap={0} className="mx-h-screen top-0 overflow-hidden">
      <LogoHeader />
      <QuillEditor htmlContent={htmlContent} setContentHandler={setHtmlContent} />
      {openTitle &&
        <TitleForm isCreated='' setOpenTitle={setOpenTitle} htmlContent={htmlContent} />
      }
      <PortfolioEditButton
        color="black"
        className="absolute bottom-10 right-16" onClick={() => setOpenTitle(true)}>
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
        <BsCheck2 size="25" color="white" />
      </PortfolioEditButton>
    </FlexColumnContainer>
  );
}
