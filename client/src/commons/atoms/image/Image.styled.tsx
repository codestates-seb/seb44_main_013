import { styled, css } from 'styled-components';
import tw from 'twin.macro';

export const ImageContainer = styled.div<{ shape?: string, size: number }>`
    ${(props) => props.shape === 'circle' &&
    css`
            width: ${props.size}px;
            height: ${props.size}px;
        `
  }
`

export const FeatherImage = styled.img<{ shape?: string, size: number | string }>`
    ${(props) => props.shape === 'circle' &&
    tw`rounded-full min-w-full min-h-full select-none`}
    height: ${(props) => typeof props.size === 'string' ? props.size : `${props.size}px`};
`;