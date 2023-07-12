import { LogoContainer, LogoImg } from './Logo.styled';
import logo from '../../../assets/logo.png';

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="Logo" />
    </LogoContainer>
  );
}
