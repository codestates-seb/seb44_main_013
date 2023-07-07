import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  bg-BASIC_BLACK
  pt-20
  pl-10
  flex
  flex-row
  text-white
  h-full
  w-scren
  pb-20
`;

export const PortfollyContainer = tw.div`
  w-2/3
  mt-6
`;

export const UserContainer = tw.div`
  w-1/3
  flex
  flex-col
  pt-7
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
  mt-6
  text-white
`;

export const TitleContainer = tw.div`
  h-[20rem]
  mt-10
  ml-20
  mr-10
  text-bold
  text-xl
`;

export const TagContainer = tw.div`
  ml-20
  text-bold 
  text-xl 
  mr-10
`;
