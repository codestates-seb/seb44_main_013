import { BackButton } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import PortfolioImage1 from '../../../src/assets/PortfolioImage1.png';
import PortfolioImage2 from '../../../src/assets/PortfolioImage2.png';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import {
  ButtonContainer,
  ButtonsWrapper,
  CenteredContainer,
  PortfollyContainer,
  UserContainer,
  Wrapper,
} from './PortfolioDetail.styled';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
import Bookmark from '@/components/bookmark/Bookmark';
import UserProfile from '@/commons/molecules/UserProfile';

export default function PortfolioDetail() {
  return (
    <Wrapper>
      <BackButton>
        <BsArrowReturnLeft size={30} />
      </BackButton>
      <PortfollyContainer>
        <img src={PortfolioImage1} alt="상세포트폴리오 사진 1"></img>
        <img src={PortfolioImage2} alt="상세포트폴리오 사진 2"></img>
      </PortfollyContainer>
      <UserContainer>
        <ButtonsWrapper>
          <ButtonContainer>
            <LikeBtn />
            <Bookmark />
          </ButtonContainer>
        </ButtonsWrapper>
        <CenteredContainer>
          <UserProfile type="portfolio" username="HOHO" />
          <PurpleBtn>의뢰 요청</PurpleBtn>
        </CenteredContainer>

        <>Title</>

        <>tags</>
      </UserContainer>
    </Wrapper>
  );
}
