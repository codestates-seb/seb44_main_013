import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import webImage from '../../../assets/WebItem1.png';
import {
  ImageWrapper,
  SectionWrapper,
  SmallImage,
  Subtitle,
  TextOverlay,
  Title,
} from './WebSection.styled';

export default function WebSection() {
  return (
    <Element name="webSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="fade-up">
          <img src={webImage} alt="Web" className="image" />
          <SmallImage src={webImage} alt="Small Web" />
          <TextOverlay>
            <Title data-aos="fade-up" data-aos-delay="300">
              Web
            </Title>
            <Subtitle data-aos="fade-up">Web</Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
