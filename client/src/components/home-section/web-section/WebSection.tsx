import 'aos/dist/aos.css';
import { 
  SectionWrapper,
  PortfolioContents,
  PortfolioImage,
} from './WebSection.styled';
import portfolioImage from '@/assets/PortfolioImage2.png';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

export default function WebSection() {
  return (
    <SectionWrapper>
      {/* <ImageWrapper data-aos="fade-up">
        <img src={webImage} alt="Web" className="image" />
        <SmallImage src={webImage} alt="Small Web" />
        <TextOverlay>
          <Title data-aos="fade-up" data-aos-delay="300">
            Web
          </Title>
          <Subtitle data-aos="fade-up">Web</Subtitle>
        </TextOverlay>
      </ImageWrapper> */}
      <PortfolioContents>
        <h1>포트폴리에서 <br /> 여러분의 작품을 보여주세요.</h1>
        <p>웹, 앱, 3D, 그래픽, 사진 카테고리에 자유롭게 <br /> 여러분만의 작품을 공유하고 전시해보세요.</p>
        <PurpleBtn>포트폴리오 보러가기</PurpleBtn>
      </PortfolioContents>
      <PortfolioImage src={portfolioImage} alt='portfolioImage' />
    </SectionWrapper>
  );
}
