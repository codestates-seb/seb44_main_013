import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import tw, { styled, css } from 'twin.macro';

export const EditorContainer = styled(FlexColumnContainer)``

const CircleBtn = css`
    ${tw`rounded-full inline-flex justify-center items-center`}
`

export const PortfolioEditButton = styled.button<{ color: 'light' | 'dark' | 'black' }>`
    ${CircleBtn}
    width: 63px;
    height: 63px;
    ${(props) => props.color === 'dark' &&
    css`
            background-color: rgba(71, 70, 70, 0.62);
            border: 1px solid #EFEFEF;
            &:hover{
                background-color: rgba(81, 80, 80, 0.62);
            }
        `
  }
    ${(props) => props.color === 'light' &&
    css`
          background-color: white;
          border: 1px solid white;
        `
  }
    ${(props) => props.color === 'black' &&
    css`
        background-color: black;
        border: 1px solid black;
      `
  }
`

export const PortfolioCheckButton = tw(PortfolioEditButton)`
  absolute bottom-10 right-16
`