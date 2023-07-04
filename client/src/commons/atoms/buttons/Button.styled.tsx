import tw from 'twin.macro';
import { styled } from 'styled-components';

export const Button = tw.button`
  text-sm
  text-white
  rounded-xl
  px-4
  py-1
  transition duration-300 ease-in-out
  max-md:text-xs
`;

export const Purpletype = styled(Button)`
  ${tw`bg-POINT_COLOR
  w-fit
  whitespace-nowrap`}

  &:hover {
    ${tw`bg-HOVER_COLOR`}
  }
`;

export const Writingtype = styled(Purpletype)`
  ${tw`
    px-10
    py-2
  `}
`;