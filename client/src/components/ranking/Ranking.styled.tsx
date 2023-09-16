import tw from 'twin.macro';
import styled from 'styled-components';

export const RankingContainer = tw.div`
    my-3
    mx-7
    pb-3
    flex
    flex-col
    overflow-x-scroll
`;

export const RankingItemContainer = tw.div`
  my-3
  mx-7
  pb-3
  flex
  flex-row
  overflow-x-scroll
`;

export const ItemImg = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
    transition
    ease-in-out
    relative
    duration-300
    `}

  &:hover {
    transform: scale(1.5);
  }
`;

export const RankingItem = tw.div`
    w-56
    h-48
    relative
    shadow-md
    mx-3
    rounded-2xl
    overflow-hidden
`;

export const TitleContainer = styled.div`
  ${tw`
    flex
    flex-col
    pb-5
    text-BASIC_WHITE
    font-bold
    justify-end
    absolute
    w-full
   bg-black
   bg-opacity-75
    bottom-0
    z-20
    `}
`;

export const TitlePart = tw.div`
    text-xl
    font-bold
    text-BASIC_WHITE
    pl-3
    mt-3
`;

export const ContentPart = tw.div`
    text-sm
    pl-3
`;

export const BigTitle = tw.div`
    text-2xl
    font-semibold
    text-BASIC_WHITE
    ml-10
    mt-10
`;