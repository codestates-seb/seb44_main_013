import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import UserImg from '../user/UserImg';
import {
  BtnContainer,
  CooperBtn,
  HeaderContainer,
  RecuitBtn,
} from './CHeader.styled';

export default function CHeader() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <BtnContainer>
        <RecuitBtn>Recruitment</RecuitBtn>&nbsp;&nbsp;|<CooperBtn>Cooperation</CooperBtn>
        <UserImg />
      </BtnContainer>
    </HeaderContainer>
  );
}
