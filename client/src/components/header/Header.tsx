import { Link } from 'react-router-dom';
import { CLink, HeaderContainer, ItemContainer, LoginContainer } from './Header.styled';
import LoginBtn from '../../commons/atoms/buttons/login/LoginBtn';
import UserImg from '../../commons/atoms/user/UserImg';
import Logo from '../../commons/atoms/logo/Logo';
// import Search from '@/components/search/Search';
import { RecuitBtn } from './CHeader.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Header() {
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
  console.log(loginState);

  return (
    <HeaderContainer>
      <Link to="/main">
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
          <LoginContainer>
            <Link to="/login">
              <LoginBtn />
            </Link>
          </LoginContainer>
        )}
      </ItemContainer>
    </HeaderContainer>
  );
}
