import tw, { styled } from 'twin.macro';
import communitymainimg from '../../assets/communitymainimg.png';

export const CommunityWrapper = styled.div(({ theme }) => [
  tw`w-full h-screen flex flex-col justify-center p-4 pb-20 bg-center bg-no-repeat bg-cover`,
  { backgroundImage: `url(${communitymainimg})` },
]);

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
