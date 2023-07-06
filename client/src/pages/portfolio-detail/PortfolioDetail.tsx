import { BackButton } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import PortfolioImage1 from '../../../src/assets/PortfolioImage1.png';
import PortfolioImage2 from '../../../src/assets/PortfolioImage2.png';
// import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
// import Bookmark from '@/components/bookmark/Bookmark';
import UserImg from '@/commons/atoms/user/UserImg';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { Wrapper } from './PortfolioDetail.styled';

export default function PortfolioDetail() {
  return (
    <Wrapper>
      <BackButton>
        <BsArrowReturnLeft size={30} />
      </BackButton>
      <img src={PortfolioImage1} alt="상세포트폴리오 사진 1"></img>
      <img src={PortfolioImage2} alt="상세포트폴리오 사진 2"></img>

      <UserImg />
      <PurpleBtn>의뢰 요청</PurpleBtn>
    </Wrapper>
  );
}
