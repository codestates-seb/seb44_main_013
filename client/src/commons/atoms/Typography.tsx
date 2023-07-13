/* 2023-07-04 홈페이지 내 모든 텍스트 styled - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro'

const H = styled.h4<{ color?: string }>`
<<<<<<< HEAD
  ${tw`m-0`}
=======
  ${tw`m-0 select-none`}
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  color: ${(props) => props.color};
  font-weight: 600;
`

const Span = styled.span<{ color?: string }>`
  ${tw`align-middle`}
  color: ${(props) => props.color};
`

// 제목 텍스트 스타일 컴포넌트
export const HeadingText = tw(H)`
  text-xl
`;

// 라벨 텍스트 스타일 컴포넌트
export const LabelText = tw(H)`
  text-lg
`;

// 본문 텍스트 스타일 컴포넌트
export const BodyText = styled(Span)`
    font-weight:200;
`;

export const InputLabelText = styled(Span)`
<<<<<<< HEAD
=======
  user-select: none;
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  font-size: 16px;
  font-weight: 600;
`;

export const SmallText = styled(Span)`
<<<<<<< HEAD
=======
  user-select: none;
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  font-size: 13px;
`;