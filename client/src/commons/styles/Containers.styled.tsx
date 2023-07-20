/* 2023.07.03 모든 컴포넌트, 페이지에 전체적으로 쓰이는 정렬 컨테이너 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div<{ gap?: number, bg?: string }>`
  ${tw`flex flex-wrap`}
  gap: ${(props) => props.gap || 0}px;
  background-color: ${(props) => props.bg || 'white'};
`

export const Center = tw.div`
  flex justify-center items-center 
`;

export const FlexContainer = tw(Container)`
  items-center justify-center mt-10
`;
//categorypart 같음
export const FlexColumnContainer = tw(Container)`
  flex-col items-center justify-center
`;

export const FlexStartContainer = tw(Container)`
  items-center justify-start
`;

export const FlexWrapper = styled.div<{ gap?: number }>`
  ${tw`flex flex-wrap`}
  gap: ${(props) => props.gap}px;
`;

export const FlexBetweenWrapper = tw(FlexWrapper)`
  justify-between
`;

export const FlexEndWrapper = tw(FlexWrapper)`
  justify-end
`

export const FlexColumnWrapper = tw(FlexWrapper)`
  flex-col
`;
