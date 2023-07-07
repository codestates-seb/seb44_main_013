import styled from 'styled-components';
import tw from 'twin.macro';

export const HDropWrapper = tw.div`
    shadow-md
    w-44
    rounded-lg
    overflow-hidden
    transition duration-300 ease-in-out
    bg-BASIC_WHITE
    absolute
    top-[70px]
    right-10
    z-50
`;

export const HDropSection = tw.ul`
    divide-y
    divide-zinc-200
`;

export const ModalLink = styled.li`
  ${tw`
    py-3
    text-[12px]
    font-semibold
    flex
    flex-row
    items-center
    justify-center
    cursor-pointer
  `}

  &:hover {
    background-color: #cccccc;
    color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: inherit;
  }
`;
