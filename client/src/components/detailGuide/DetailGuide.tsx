import { DetailGuideContainer } from "./DetailGuide.styled";
import Logo  from "../../commons/atoms/logo/Logo";

export default function DetailGuide () {
  return (
    <DetailGuideContainer>
      <h5>처음이신가요?</h5>
      <p>가이드에 따라 내용을 작성해보세요.</p>
      <ul>
        <li>게시판 뚜쉬</li>
        <li>공고 뚜쉬</li>
      </ul>
      <p>이런 방법도 있어요!</p>
      <ul>
        <li>마감 기일은 언제인가요?</li>
        <li>더 많은 기술 스택을 작성해보세요.</li>
        <li>개인 정보 게시는 지양해주세요.</li>
        <li>부드러운 어투를 사용해주세요.</li>
      </ul>
      <div>
        <Logo />
      </div>
    </DetailGuideContainer>
  );
};

