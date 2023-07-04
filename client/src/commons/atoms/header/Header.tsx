import { CLink, HeaderContainer, ItemContainer } from './Header.styled';
import LoginBtn from '../buttons/login/LoginBtn';
import UserImg from '../user/UserImg';
import { useState } from 'react';
import Logo from '../logo/Logo';
import Search from '@/components/search/Search';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderContainer>
      <Logo />
      <Search />
      <ItemContainer>
        <CLink>community</CLink>
        {isLogin ? <UserImg /> : <LoginBtn/> }
      </ItemContainer>
    </HeaderContainer>
  );
}
