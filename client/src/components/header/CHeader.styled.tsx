import tw from 'twin.macro';
import { styled } from 'styled-components';

type ButtonProps = {
  color?: string;
  isActive?: boolean;
};

export const HeaderContainer = tw.div`
  flex
  items-center
  justify-between
  px-10
  py-3
  bg-transparent
  z-50

`;

export const BtnContainer = tw.div`
  flex
  items-center

`;

export const RecuitBtn = styled.button<ButtonProps>`
  ${tw`
    cursor-pointer
    ml-2.5
    mt-1
    hover:underline
    text-sm
    whitespace-nowrap
    py-1
    px-2
    transition-colors
    text-white
  `}
  color: ${(props) =>
    props.isActive ? '#8580e1' : props.color ? props.color : '#d2d1d1'};

  &:hover {
    color: #8580e1;
  }
`;

export const CooperBtn = styled.button<ButtonProps>`
  ${tw`
    cursor-pointer
    ml-3
    mr-3
    hover:underline
    text-sm
    whitespace-nowrap
    py-1
    px-2
    transition-colors
  `}
  color: ${(props) =>
    props.isActive ? '#8580e1' : props.color ? props.color : '#d2d1d1'};

  &:hover {
    color: #8580e1;
  }
`;
