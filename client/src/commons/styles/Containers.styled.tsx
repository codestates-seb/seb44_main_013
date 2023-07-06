/* 2023.07.03 컴포넌트, 페이지에 전체적으로 쓰이는 정렬 컨테이너 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const FlexContainer = styled.div<{ gap: number }>`
  ${tw`flex items-center justify-start`}
  gap: ${(props) => props.gap}px;
`;

export const FlexColumnContainer = styled.div<{ gap: number }>`
  ${tw`flex flex-col items-center justify-center`}
  gap: ${(props) => props.gap}px;
`;

export const FlexWrapper = styled.div<{ gap: number }>`
  ${tw`flex`}
  gap: ${(props) => props.gap}px;
`;

export const FlexColumnWrapper = styled.div<{ gap: number }>`
  ${tw`flex flex-col `}
  gap: ${(props) => props.gap}px;
`;
