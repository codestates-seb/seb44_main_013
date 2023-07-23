import tw from 'twin.macro';
import { styled } from 'styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchContainer = tw.form`
  relative
  flex
  flex-grow
  items-center
  max-w-md
  min-w-min
  mx-auto
  text-white
`;

export const SearchIcon = styled(BsSearchHeart)`
  ${tw`
    absolute
    ml-4 
    top-1/2
    text-gray-300
    transform -translate-y-1/2
    transition-colors duration-300 ease-in-out
  `}
`;

export const SearchBox = styled.input`
  ${tw`
    pl-12
    h-12
    text-white
    w-full
    rounded-full	
    bg-transparent
    border-2 border-gray-500
  `}

  &:focus {
    ${tw`outline-none border-white`}
  }

  &::placeholder {
    ${tw`text-gray-300`}
  }
`;
