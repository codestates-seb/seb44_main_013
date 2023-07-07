import tw from 'twin.macro';
import { styled } from 'styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchContainer = tw.div`
  relative
  flex
  flex-grow
  items-center
  max-w-md
  min-w-min
  mx-auto
`;

export const SearchIcon = tw(BsSearchHeart)`
  absolute
  ml-5 
  top-1/2
  transform -translate-y-1/2
`;

export const SearchBox = styled.input`
  ${tw`
    pl-12
    h-12
    
    w-full
    rounded-full	
    bg-[#ececec]
  `}

  &:focus {
    ${tw`outline-none`}
  }
`;
