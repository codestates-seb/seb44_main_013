import styled from 'styled-components';
import tw from 'twin.macro';

export const HDropWrapper = styled.div`
  ${tw`
    shadow-md
    w-40
    rounded-lg
    overflow-hidden
    transition duration-300 ease-in-out
    absolute
    top-[60px]
    right-5
    z-50
  `}

  background-color: rgba(255, 255, 255, 0.9);
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
