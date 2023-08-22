import { Link } from 'react-router-dom';
import { HeaderContainer, LogoVer2Image, IconsWrapper } from './Header.styled';
// import LoginBtn from '../../commons/atoms/buttons/login/LoginBtn';
// import UserImg from '../../commons/atoms/user/UserImg';
import logoVer2 from '@/assets/logoVer2.png';
// import Search from '@/components/search/Search';
// import { RecuitBtn } from './CHeader.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { CgProfile } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
  console.log(loginState);

  return (
    <HeaderContainer>
      {/* <Link to="/main">
        <Logo />
      </Link> */}
      {/* <Search /> */}
      {/* <ItemContainer>
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
      </ItemContainer> */}
      <Link to="/">
        <LogoVer2Image src={logoVer2} alt='logoImage' />
      </Link>
      <IconsWrapper>
        <CgProfile size={30} />
        <FiMenu size={30} />
      </IconsWrapper>
    </HeaderContainer>
  );
}
