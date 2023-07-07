import tw from 'twin.macro';
import { styled } from 'styled-components';
import communitymainimg from '../../assets/communitymainimg.png';

export const CommunityWrapper = styled.div`
  ${tw`
    w-screen h-full flex flex-col justify-center
    pb-20 bg-center bg-no-repeat bg-cover
  `}
  /* background-image: url(${communitymainimg}) */
`;

export const SearchContainer = tw.div`
  w-1/2
  flex
  justify-center
  items-center
  mx-auto
  mt-10
`;

export const ItemWrapper = tw.div`
  flex
  flex-wrap
  justify-center
  gap-4
  mt-20
`;
