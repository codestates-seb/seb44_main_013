/* 2023.07.03 컴포넌트, 페이지에 전체적으로 쓰이는 정렬 컨테이너 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';

<<<<<<< HEAD
const Container = styled.div<{ gap: number; bg?: string }>`
  ${tw`flex`}
  gap: ${(props) => props.gap}px;
  background-color: ${(props) => props.bg};
`;
=======
const Container = styled.div<{ gap?: number, bg?: string }>`
  ${tw`flex`}
  gap: ${(props) => props.gap || 0}px;
  background-color: ${(props) => props.bg || 'white'};
`
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d

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

<<<<<<< HEAD
export const FlexWrapper = styled.div<{ gap: number }>`
=======
export const FlexWrapper = styled.div<{ gap?: number }>`
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  ${tw`flex flex-wrap`}
  gap: ${(props) => props.gap}px;
`;

<<<<<<< HEAD
export const FlexColumnWrapper = styled.div<{ gap: number }>`
=======
export const FlexColumnWrapper = styled.div<{ gap?: number }>`
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
  ${tw`flex flex-col `}
  gap: ${(props) => props.gap}px;
`;
