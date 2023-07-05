import { styled, css } from 'styled-components';
import tw from 'twin.macro';

const CircleBtn = css`
    ${tw`rounded-full inline-flex justify-center items-center`}
`

export const PortfolioEditButton = styled.button<{ type: 'light' | 'dark' }>`
    ${CircleBtn}
    width: 63px;
    height: 63px;
    ${(props) => props.type === 'light' ?
        css`
            background-color: rgba(71, 70, 70, 0.62);
            border: 1px solid #EFEFEF;
            &:hover{
                background-color: rgba(81, 80, 80, 0.62);
            }
        `
        :
        css`
            background-color: white;
            border: 1px solid white;
        `
    }
`