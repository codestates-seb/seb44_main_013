import tw from 'twin.macro';
import { styled } from 'styled-components';

export const PagenationWrapper = tw.div`
    flex
    items-center
    justify-center
`;

export const PagenationBtn = styled.button`
  ${tw`
    mt-8
    font-normal
    text-base
    mx-2
    text-BASIC_WHITE
    transition-colors
  `}

  &:hover {
    color: #8580e1;
  }

  &:focus {
    color: #8580e1;
  }

  &.active {
    color: #8580e1;
    font-weight: bold;
  }
`;
