import { styled } from 'styled-components';
import tw from 'twin.macro';

export const HeaderContainer = tw.div`
  flex
  items-center
  justify-between
  px-10
  py-3
  sticky
  top-0
`;

export const ItemContainer = tw.div`
  flex
  flex-row
`;

export const CLink = tw.a`
  mx-4
  cursor-pointer
  whitespace-nowrap
  mt-3
`;

export const LoginContainer = styled.div`
  ${tw`
    flex
    items-center
    ml-2.5
    mt-1
  `}
`;
