import tw from 'twin.macro';
import styled from 'styled-components';

export const DItemContainer = styled.div`
  ${tw`
    relative
    mb-10
    overflow-hidden
  `}

  box-shadow: 0 5px 5px 0 #aaa;
  border-radius: 20px;
  width: 300px;
  height: 500px;

  &:hover {
    ${tw`bg-neutral-500/60`}
  }

  .iconsWrap {
    ${tw`
      text-white
      flex
      items-center
      absolute
      top-3
      right-2
    `}

    > svg {
      ${tw`
        mx-1
      `}
    }
  }

  > span {
    ${tw`
      absolute
      text-white
      top-2
      left-2
    `}
  }

  img {
    ${tw`
      w-full
      h-full
    `}
    &:hover {
      ${tw`opacity-80`}
    }
  }
`;

export const TitleOverlay = styled.div`
  ${tw`
    absolute
    inset-0
    flex
    flex-col
    justify-center
    items-center
    p-4
    bg-black
    bg-opacity-50
    text-white
    transition
    duration-300
    ease-in-out
    opacity-0
    pointer-events-none
  `}

  ${DItemContainer}:hover & {
    ${tw`
      opacity-100
      pointer-events-auto
    `}
  }
`;

export const Title = styled.h3`
  ${tw`
    text-xl
    font-semibold
    text-center
  `}
`;

export const Author = styled.p`
  ${tw`
    mt-1
    text-sm
    text-center
  `}
`;
