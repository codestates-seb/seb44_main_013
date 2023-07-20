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
import { useState } from 'react';

export default function CHeader() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const loginState = useSelector(
    (state: RootState) => state.loginSlice.isLogin
  );

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  console.log(loginState);
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <BtnContainer>
        <Link to="/boards?division=RECRUITMENT">
          <RecuitBtn
            onClick={() => handleClick('recruitment')}
            isActive={activeButton === 'recruitment'}
          >
            Recruitment
          </RecuitBtn>{' '}
        </Link>
        <span style={{ color: 'white' }}>&nbsp;&nbsp;|</span>
        <Link to="/boards?division=COOPERATION">
          <CooperBtn
            onClick={() => handleClick('cooperation')}
            isActive={activeButton === 'cooperation'}
          >
            Cooperation
          </CooperBtn>{' '}
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
