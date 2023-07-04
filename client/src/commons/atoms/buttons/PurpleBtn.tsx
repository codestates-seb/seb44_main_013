import tw from 'twin.macro';
import { styled } from 'styled-components';
import { Button } from './Button.styled';

const Purpletype = styled(Button)`
  ${tw`bg-POINT_COLOR
  w-fit
  whitespace-nowrap`}

  &:hover {
    ${tw`bg-HOVER_COLOR`}
  }
`;

interface PurpleBtnProps {
  children?: React.ReactNode;
}

export default function PurpleBtn( {children}: PurpleBtnProps ) {
  return <Purpletype>{children}</Purpletype>;
}
