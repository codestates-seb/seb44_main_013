/* 2023-07-05 홈페이지 내 들어가는 모든 버튼 styled - 김다함*/
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

const CircleBtn = css`
    ${tw`rounded-full inline-flex justify-center items-center`}
`

export const PortfolioEditButton = styled.button<{ type: 'light' | 'dark' | 'black' }>`
    ${CircleBtn}
    width: 63px;
    height: 63px;
    ${(props) => props.type === 'dark' &&
    css`
            background-color: rgba(71, 70, 70, 0.62);
            border: 1px solid #EFEFEF;
            &:hover{
                background-color: rgba(81, 80, 80, 0.62);
            }
        `
  }
    ${(props) => props.type === 'light' &&
    css`
          background-color: white;
          border: 1px solid white;
        `
  }
    ${(props) => props.type === 'black' &&
    css`
        background-color: black;
        border: 1px solid black;
      `
  }
`