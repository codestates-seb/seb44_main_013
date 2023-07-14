import tw from 'tailwind-styled-components';

export const ImgContainer = tw.button`
  w-12
  h-12
  flex
  items-center
  justify-center
  rounded-full
  border
  border-transparent
  transition-all
  hover:border-2
  hover:border-white
`;

export const UserImage = tw.img`
  w-full
  h-full
  object-cover
  rounded-full

`;
