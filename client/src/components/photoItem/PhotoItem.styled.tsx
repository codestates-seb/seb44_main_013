import tw from 'twin.macro';
import styled from 'styled-components';

export const PhotoItemContainer = styled.div`
  ${tw`
  my-6
    mx-6
    relative
    shadow-md
    overflow-hidden
  `}

  width: 450px;
  height: 300px;
  margin-bottom: 10px;

  &:hover {
    ${tw`bg-neutral-500/60`}
  }

  > img {
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

  ${PhotoItemContainer}:hover & {
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
