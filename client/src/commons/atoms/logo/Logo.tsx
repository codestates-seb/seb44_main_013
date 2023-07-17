import { MouseEventHandler } from 'react';

import { LogoContainer, LogoImg } from './Logo.styled';
import logo from '../../../assets/logo.png';

interface LogoProps {
  onClickHandler?: MouseEventHandler<HTMLDivElement>;
}

export default function Logo({ onClickHandler }: LogoProps) {
  return (
    <LogoContainer onClick={onClickHandler}>
      <LogoImg src={logo} alt="Logo" />
    </LogoContainer>
  );
}
