/* 2023-07-04 홈페이지에 들어가는 모든 Input styled - 김다함*/
import { styled } from 'styled-components';

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