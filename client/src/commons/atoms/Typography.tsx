/* 2023-07-04 홈페이지 내 모든 텍스트 styled - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro'

const Span = styled.span<{ color?: string }>`
    ${tw`align-middle`}
    color: ${(props) => props.color};
`

// 제목 텍스트 스타일 컴포넌트
export const HeadingText = styled.h1`
    margin: 0;
`;

// 라벨 텍스트 스타일 컴포넌트
export const LabelText = styled.h3`
    margin: 0;
`;

// 본문 텍스트 스타일 컴포넌트
export const BodyText = styled.span`
`;

export const InputLabelText = styled(Span)`
    font-size: 16px;
    font-weight: 600;
`

export const SmallText = styled(Span)`
    font-size: 13px;
`