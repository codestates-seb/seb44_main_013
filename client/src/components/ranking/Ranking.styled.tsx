import tw from 'twin.macro';
import styled from 'styled-components';

export const RankingContainer = tw.div`
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
    w-80
    h-72
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
    text-3xl
    font-bold
    text-BASIC_WHITE
    pl-3
    mt-3
`;

export const ContentPart = tw.div`
    text-xl
    pl-3
`;
