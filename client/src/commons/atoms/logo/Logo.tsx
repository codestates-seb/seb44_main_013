import { FormEventHandler, MouseEventHandler } from 'react';

import { LogoContainer, LogoImg } from './Logo.styled';
import logo from '../../../assets/logo.png';

interface LogoProps {
  onClickHandler?: FormEventHandler<HTMLFormElement>;
}

export default function Logo({ onClickHandler }: LogoProps) {
  return (
    <LogoContainer onSubmit={onClickHandler}>
      <LogoImg src={logo} alt="Logo" />
    </LogoContainer>
  );
}
