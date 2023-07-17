/* 2023-07-06 포트폴리오 작성/수정 페이지 - 김다함 */
import { useEffect, useState } from 'react';

import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import LogoHeader from '@/components/header/LogoHeader';
import TitleForm from '@/components/editor/TitleForm';
import { BsCheck2 } from 'react-icons/bs';

export default function PortfolioEdit() {
  const [isTitleFormOpen, setIsTitleFormOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');

  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("종료하기를 눌러주세요 :D");
  };

  useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

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
    </FlexColumnContainer>
  );
}
