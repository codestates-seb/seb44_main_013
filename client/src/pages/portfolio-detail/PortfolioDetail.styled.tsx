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
  
`;

export const ButtonsWrapper = tw.div`
  w-full
`;

export const ButtonContainer = tw.div`
  flex
  justify-between
  items-center
  ml-20
  mr-20
  `;

export const CenteredContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  mt-20
  text-white
`;
