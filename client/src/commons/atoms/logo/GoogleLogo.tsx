import { LogoContainer, SmaLogoImg } from './Logo.styled';
import googleLogo from '../../../assets/googleLogo.png';

export default function GoogleLogo() {
    return (
      <LogoContainer>
        <SmaLogoImg src={googleLogo} alt="Logo" />
      </LogoContainer>
    );
  }
  