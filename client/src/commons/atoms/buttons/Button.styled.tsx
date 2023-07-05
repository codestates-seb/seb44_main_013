import tw from 'twin.macro';

export const Button = tw.button`
  text-sm
  text-white
  rounded-xl
  px-4
  py-1
  transition duration-300 ease-in-out
  max-md:text-xs
`;

export const BackButton = tw.button`
  absolute
  top-5
  left-5
  p-2
  rounded
  cursor-pointer
  text-BASIC_WHITE
`;
