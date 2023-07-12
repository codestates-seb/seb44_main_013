import { Link } from 'react-router-dom';
import { CLink, HeaderContainer, ItemContainer } from './Header.styled';
import LoginBtn from '../buttons/login/LoginBtn';
import UserImg from '../user/UserImg';
import Logo from '../logo/Logo';
import Search from '@/components/search/Search';
import { RecuitBtn } from './CHeader.styled';

export default function Header() {
  // const [isLogin, setIsLogin] = useState(false); -> 전역 관리에서 true/false 관리
  const isLogin = true;

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <ItemContainer>
        <CLink href="/boards">
          <RecuitBtn>Community</RecuitBtn>
        </CLink>
        {isLogin ? (
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
