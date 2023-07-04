import tw from 'twin.macro';

export const HeaderContainer = tw.div`
  flex
  items-center
  justify-around
  px-10
  mt-3
`;

export const LogoContainer = tw.div`
  flex
  flex-1
`;

export const LogoImg = tw.img`
  w-12
  h-12
`;

export const ItemContainer = tw.div`
  flex
  flex-1
  justify-end
`;

export const CLink = tw.a`
  mx-4
  hover:underline
  cursor-pointer
  whitespace-nowrap
`;