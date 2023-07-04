import tw from "twin.macro";
import { styled } from 'styled-components';
import Logo  from "../../commons/atoms/logo/Logo";

export const DetailGuideContainer = styled.div`
  ${tw`
    bg-neutral-100
    p-5
    relative
  `}

  width: 300px;
  height: 400px;
  border-radius: 20px;
  font-size: 14px;

  >h5 {
    font-weight: 700;
    font-size: 15px;
    padding: 5px 0;
  }

  >p {
    margin: 5px 0;
  }

  ul {
    padding-left: 40px;
    margin: 5px 0 15px 0;
  }
  
  li {
    list-style: circle;
    line-height: 25px;
  }

  >div {
    ${tw`
      absolute
      bottom-0
    `}
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

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

