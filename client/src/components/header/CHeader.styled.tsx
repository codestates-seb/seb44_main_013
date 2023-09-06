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
  sticky
  top-0
`;

export const BtnContainer = tw.div`
  flex
  items-center

`;

export const RecuitBtn = styled.button<ButtonProps>`
  ${tw`
    cursor-pointer
    text-base
    whitespace-nowrap
    py-1
    px-2
    transition-colors
    text-gray-400
  `}
  color: ${(props) => (props.isActive ? ' #ffff' : props.color ? props.color : ' text-gray-400')};

  &:hover {
    color: #ffffff;
  }
`;

export const CooperBtn = styled.button<ButtonProps>`
  ${tw`
    cursor-pointer
    ml-2
    mt-0
    text-base
    whitespace-nowrap
    py-1
    px-2
    transition-colors
    text-gray-400
  `}
 color: ${(props) => (props.isActive ? ' #ffff' : props.color ? props.color : ' text-gray-400')};

  &:hover {
    color: #ffffff;
  }
`;
