import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import UserImg from '../user/UserImg';
import {
  BtnContainer,
  CooperBtn,
  HeaderContainer,
  RecuitBtn,
} from './CHeader.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';
import LoginBtn from '../buttons/login/LoginBtn';

export default function CHeader() {
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
  console.log(loginState);
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <BtnContainer>
        <Link to="/boards?division=RECRUITMENT">
          <RecuitBtn>Recruitment</RecuitBtn>
        </Link>&nbsp;&nbsp;|
        <Link to="/boards?division=COOPERATION">
          <CooperBtn>Cooperation</CooperBtn>
        </Link>
        {loginState ? (
          <UserImg/>
        ) : (
          <Link to="/login">
            <LoginBtn />
          </Link>
        )}
      </BtnContainer>
    </HeaderContainer>
  );
}
