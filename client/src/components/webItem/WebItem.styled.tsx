import tw from 'twin.macro';
import { styled } from 'styled-components';

export const WebItemContainer = styled.div`
  ${tw`my-6
  mx-6
  h-72
  w-96
  shadow-md
  relative`}

  &:hover {
    ${tw`bg-neutral-500/60`}
  }
`;

export const WebItemImg = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
  `}
  &:hover {
    ${tw`opacity-80`}
  }
`;

export const BookmarkWrapper = styled.div`
  ${tw`
    absolute
    bottom-1
    right-2
  `}
`;
