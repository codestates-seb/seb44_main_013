/* 2023.07.03 컴포넌트, 페이지에 전체적으로 쓰이는 정렬 컨테이너 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div<{ gap: number; bg?: string }>`
  ${tw`flex`}
  gap: ${(props) => props.gap}px;
  background-color: ${(props) => props.bg};
`;

export const Center = tw.div`
  flex justify-center items-center 
`;

export const FlexContainer = styled(Container)`
  ${tw`items-center justify-center mt-10`}
`;
//categorypart 같음
export const FlexColumnContainer = styled(Container)`
  ${tw`flex-col items-center justify-center`}
`;

export const FlexStartContainer = styled(Container)`
  ${tw`items-center justify-start`}
`;

export const FlexWrapper = styled.div<{ gap: number }>`
  ${tw`flex flex-wrap`}
  gap: ${(props) => props.gap}px;
`;

export const FlexColumnWrapper = styled.div<{ gap: number }>`
  ${tw`flex flex-col `}
  gap: ${(props) => props.gap}px;
`;
