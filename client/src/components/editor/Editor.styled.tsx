/* 2023-07-04 홈페이지에 들어가는 모든 Input styled - 김다함*/
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const QuillWrapper = styled.div<{ isTitleFormOpen: boolean }>`
  z-index: 10;
  position: absolute;
  border: 0;
  top: 0;
  pointer-events: ${({ isTitleFormOpen }) => isTitleFormOpen && 'none'};
  .ql-toolbar {
    padding: 17px 0;
    background-color: #252525;
    border: 0;
    text-align: center;
  }
  .ql-stroke, .ql-fill {
    stroke: white;
  }
  .ql-picker-label {
    color: white;
  }
  .ql-container{
    border: 0;
  }
  .ql-editor{
    width: 1000px;
    height: calc(100vh - 60px);
  }
`

export const Input = styled.input`
    ${tw`w-full border-0`}
`;

export const TextArea = styled.textarea`
    ${tw`resize-none rounded-md border-[0.5px] px-2 py-1`}
    &:focus {outline: none;}
    border-color: gray;
    font-size: 13px;
    color:black;
`

export const PortfolioTitleInput = styled(Input)`
    ${tw`bg-transparent text-4xl`}
    color: white;
    &:focus{
        ${tw`outline-0`}
    }
`;

export const DarkTextArea = styled(TextArea)`
    outline: none;
    box-shadow: inset 0px 0px 33px -6px #111111;
    background-color: #3A3B41;
    color: white;
`;

export const TitleFormContainer = styled.div`
      ${tw`w-screen px-16 py-7 rounded-t-2xl z-20 bottom-0 absolute`};
      background-color: #161616;
      box-shadow: 0 -8px 10px -1px #a9a9a9;
  `;