import tw from 'twin.macro';
import { styled } from 'styled-components';

export const HeaderContainer = tw.div`
  flex
  items-center
  justify-between
  px-10
  py-3
  bg-transparent
  z-50
  text-white
  
`;

export const BtnContainer = tw.div`
  flex
  items-center
`;

export const RecuitBtn = styled.button`
  ${ tw`
    cursor-pointer
    ml-2.5
    mt-1
    hover:underline
    text-sm
    whitespace-nowrap
  ` }
  color: ${(props) => props.color ? props.color : 'white' };

  &:hover {
    color: #8580E1;
  }

`;

export const CooperBtn = tw.button`
  ml-3
  mr-3
  hover:underline

`;
