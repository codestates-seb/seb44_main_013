import { Link } from 'react-router-dom';
import { CLink, HeaderContainer, ItemContainer } from './Header.styled';
import LoginBtn from '../buttons/login/LoginBtn';
import UserImg from '../user/UserImg';
import Logo from '../logo/Logo';
// import Search from '@/components/search/Search';
import { RecuitBtn } from './CHeader.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';

export default function Header() {
  const loginState = useSelector(
    (state: RootState) => state.loginSlice.isLogin
  );

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      {/* <Search /> */}
      <ItemContainer>
        <CLink href="/boards?division=RECRUITMENT">
          <RecuitBtn>Community</RecuitBtn>
        </CLink>
        {loginState ? (
          <UserImg />
        ) : (
          <Link to="/login">
            <LoginBtn />
          </Link>
        )}
      </ItemContainer>
    </HeaderContainer>
  );
}
