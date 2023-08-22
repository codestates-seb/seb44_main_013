import 'aos/dist/aos.css';
import { 
  SectionWrapper,
  PortfolioContents,
  PortfolioImage,
  PortfolioMiniImage,
} from './PortfolioSection.styled';
import portfolioImage from '@/assets/PortfolioImage2.png';
import portfolioMiniImage from '@/assets/3DImg.png';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

export default function PortfolioSection() {
  return (
    <SectionWrapper>
      <PortfolioContents>
        <h1>포트폴리에서 <br /> 여러분의 작품을 보여주세요!</h1>
        <p>웹, 앱, 3D, 그래픽, 사진 카테고리에 자유롭게 <br /> 여러분만의 작품을 공유하고 전시해보세요.</p>
        <div><PurpleBtn>포트폴리오 보러가기</PurpleBtn></div>
      </PortfolioContents>
      <PortfolioImage src={portfolioImage} alt='portfolioImage' />
      <PortfolioMiniImage src={portfolioMiniImage} alt='portfolioMiniImage' />
    </SectionWrapper>
  );
}
