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
      <Logo />
      <BtnContainer>
        <RecuitBtn>Recruitment</RecuitBtn>|<CooperBtn>Cooperation</CooperBtn>
        <UserImg />
      </BtnContainer>
    </HeaderContainer>
  );
}
