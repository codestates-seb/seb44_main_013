import Search from '@/components/search/Search';
import logo from '../../../assets/logo.png';
import {
  CLink,
  HeaderContainer,
  ItemContainer,
  LogoContainer,
  LogoImg,
} from './Header.styled';
import LoginBtn from '../buttons/login/LoginBtn';
export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={logo} alt="Logo" />
      </LogoContainer>
      <Search />
      <ItemContainer>
        <CLink>community</CLink>
        <LoginBtn />
      </ItemContainer>
    </HeaderContainer>
  );
}
