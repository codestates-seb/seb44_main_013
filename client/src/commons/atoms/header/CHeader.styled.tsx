import tw from 'tailwind-styled-components';

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

export const RecuitBtn = tw.button`
  cursor-pointer
  text-base
  mr-3
  hover:underline
`;
export const CooperBtn = tw.button`
  ml-3
  mr-3
  hover:underline

`;
