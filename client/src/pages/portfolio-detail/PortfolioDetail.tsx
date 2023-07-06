import { BackButton } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import {
  PageWrapper,
  PortfolioContainer,
  UserContainer,
} from './PortfolioDetail.styled';
import PortfolioImage1 from '../../../src/assets/PortfolioImage1.png';
import PortfolioImage2 from '../../../src/assets/PortfolioImage2.png';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';

export default function PortfolioDetail() {
  return (
    <div>
      <BackButton>
        <BsArrowReturnLeft size={30} />
      </BackButton>
      <PageWrapper>
        <PortfolioContainer>
          <img src={PortfolioImage1} alt="상세포트폴리오 사진 1"></img>
          <img src={PortfolioImage2} alt="상세포트폴리오 사진 2"></img>
        </PortfolioContainer>

        <UserContainer>
          <LikeBtn />
        </UserContainer>
      </PageWrapper>
    </div>
  );
}
