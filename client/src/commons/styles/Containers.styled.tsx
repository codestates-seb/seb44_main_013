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

export const FlexColumnWrapper = styled.div<{gap: number}>`
  ${tw`flex flex-col `}
  gap: ${(props) => props.gap}px;
`
