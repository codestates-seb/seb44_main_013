import tw from 'tailwind-styled-components';
import communitymainimg from '../../assets/communitymainimg.png';

export const DarkBackground = tw.div`
  bg-center 
  bg-no-repeat 
  bg-cover 
  h-screen 
  w-screen
  ${`background-image: url(${communitymainimg});`}
`;

export const CommunityWrapper = tw.div`
  w-screen
  h-full
  flex
  flex-col
  justify-center
  p-4
  pb-20
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
