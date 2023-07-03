import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.div`
  flex
  items-center
  justify-around
  px-10
  mt-3
`;

export const ItemContainer = tw.div`
  flex
  flex-1
  justify-end
  items-center
`;

export const CLink = tw.a`
  mr-4
  hover:underline
`;
