import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  bg-BASIC_BLACK
  pt-20
  pl-10
  flex
  flex-row
  text-white

`;

export const PortfollyContainer = tw.div`
  w-2/3

`;

export const UserContainer = tw.div`
  w-1/3
  flex
  flex-col
  gap-10
  px-8
`;

export const ButtonsWrapper = tw.div`
  w-full
`;

export const ButtonContainer = tw.div`
  flex
  justify-between
  items-center
  `;

export const CenteredContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  text-white
  gap-5
`;
