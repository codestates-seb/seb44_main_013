import tw from 'tailwind-styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchContainer = tw.div`
  relative
  flex
  flex-3
  flex-grow
  items-center
`;

export const SearchIcon = tw(BsSearchHeart)`
  absolute
  ml-5
  top-1/2
  transform -translate-y-1/2
`;

export const SearchBox = tw.input`
  pl-10
  h-9
  w-full
  rounded-full	
  bg-[#ececec]
`;
