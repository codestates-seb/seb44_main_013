import tw from 'twin.macro';

export const HeaderContainer = tw.div`
  flex
  items-center
  justify-between
  px-10
  py-3
`;

export const ItemContainer = tw.div`
  flex
  flex-row
`;

export const CLink = tw.a`
  mx-4
  hover:underline
  cursor-pointer
  whitespace-nowrap
  mt-3
`;
