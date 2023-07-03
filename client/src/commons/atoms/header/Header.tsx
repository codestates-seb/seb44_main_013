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
import UserImg from '../user/UserImg';
import { useState } from 'react';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={logo} alt="Logo" />
      </LogoContainer>
      <Search />
      <ItemContainer>
        <CLink>community</CLink>
        {isLogin ? <UserImg /> : <LoginBtn />}
      </ItemContainer>
    </HeaderContainer>
  );
}
