import React from "react";
import { styled } from 'styled-components';
import tw from 'twin.macro';
import Logo from '../../commons/atoms/logo/Logo';

const HeaderContainer = styled.div`
  ${tw`w-full py-1.5 px-3 relative z-0 pointer-events-none`}
  background-color: #252525;
`;

export default function LogoHeader() {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  )
}