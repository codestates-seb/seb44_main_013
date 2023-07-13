/* 2023-07-06 로고만 보이는 헤더 - 김다함 */
import React from "react";
import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import tw from 'twin.macro';
import Logo from '../../commons/atoms/logo/Logo';

const HeaderContainer = styled.div`
  ${tw`w-full py-1.5 px-3 relative z-0`}
  background-color: #252525;
`;

export default function LogoHeader() {
  return (
    <HeaderContainer>
      <Link to="/"><Logo/></Link>
    </HeaderContainer>
  ) 
}