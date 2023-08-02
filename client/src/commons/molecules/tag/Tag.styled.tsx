import { styled, css } from 'styled-components';
import tw from 'twin.macro';

export const TagBody = styled.div<{ isSelected?: boolean, readOnly?: boolean }>`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none flex`}

    background-color: #484848;
    border: 0.9px solid #C3C3C3;
    color: white;
    cursor: pointer;
    &:hover {
        border-color: #dcdcdc;
    }

    ${(props) => props.isSelected && !props.readOnly &&
    css`
      border-color: #dcdcdc;
      background-color: white;
      color: #232428;
    `
  }

    .dot {
      vertical-align: middle;
      color: #484848;
    }
`;