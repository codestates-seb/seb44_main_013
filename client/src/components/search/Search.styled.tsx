import tw from 'tailwind-styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchContainer = tw.div`
  relative
  flex
  items-center
  space-x-4
`;

export const SearchIcon = tw(BsSearchHeart)`
  absolute
  ml-8
  top-1/2
  transform -translate-y-1/2
`;

export const SearchBox = tw.input`
  pl-10
  h-9
  w-1/3
  rounded-full	
  bg-[#ececec]
`;
