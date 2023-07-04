import { styled } from 'styled-components';

export const FlexContainer = styled.div<{ gap: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: ${(props) => props.gap}px;
`;
