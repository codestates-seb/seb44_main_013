import { Link } from 'react-router-dom';
import { AskCommisionBtn, BackButton } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import PortfolioImage1 from '../../../src/assets/PortfolioImage1.png';
import PortfolioImage2 from '../../../src/assets/PortfolioImage2.png';
import {
  ButtonContainer,
  ButtonsWrapper,
  CenteredContainer,
  PortfollyContainer,
  TagContainer,
  TitleContainer,
  UserContainer,
  Wrapper,
} from './PortfolioDetail.styled';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
import Bookmark from '@/components/bookmark/Bookmark';
import UserProfile from '@/commons/molecules/UserProfile';
import { FlexWrapper } from '@/commons/styles/Containers.styled';
import Tag from '@/commons/molecules/Tag';

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
          <Link to="/members"><UserProfile type="portfolio" username="HOHO" /></Link>
          <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
        </CenteredContainer>

        <TitleContainer>Title</TitleContainer>
        <TagContainer>
          Tags
          <FlexWrapper gap={8} className="flex-wrap mt-5">
            <Tag value="sdfsdfsdlkjflksdjfl" />
            <Tag value="jasdjlfsdjfva" />
            <Tag value="java" />
            <Tag value="javfsdfjsldjflksdjflksjdlkfjsda" />
            <Tag value="java" />
            <Tag value="jdslfjsdlfava" />
            <Tag value="java" />
            <Tag value="jsdflkjkava" />
          </FlexWrapper>
        </TagContainer>
      </UserContainer>
    </Wrapper>
  );
}
