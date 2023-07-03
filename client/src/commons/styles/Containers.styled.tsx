import { css, styled } from 'styled-components';

export const FlexContainer = styled.div<{gap:number}>`
    display: flex;
    gap: ${(props)=> props.gap}px;
`;