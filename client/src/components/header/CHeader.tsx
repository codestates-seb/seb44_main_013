import { Link } from 'react-router-dom';
import Logo from '../../commons/atoms/logo/Logo';
import UserImg from '../../commons/atoms/user/UserImg';
import {
  BtnContainer,
  CooperBtn,
  HeaderContainer,
  RecuitBtn,
} from './CHeader.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';
import LoginBtn from '../../commons/atoms/buttons/login/LoginBtn';

export default function CHeader() {
  const loginState = useSelector(
    (state: RootState) => state.loginSlice.isLogin
  );
  console.log(loginState);
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <BtnContainer>
        <Link to="/boards?division=RECRUITMENT">
          <RecuitBtn>Recruitment</RecuitBtn>
        </Link>
        <span style={{ color: 'white' }}>&nbsp;&nbsp;|</span>
        <Link to="/boards?division=COOPERATION">
          <CooperBtn>Cooperation</CooperBtn>
        </Link>
        {loginState ? (
          <UserImg />
        ) : (
          <Link to="/login">
            <LoginBtn />
          </Link>
        )}
      </BtnContainer>
    </HeaderContainer>
  );
}
