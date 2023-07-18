import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import animationImage from '../../../assets/3DImg.png';
import {
  SectionWrapper,
  ImageWrapper,
  TextOverlay,
  Title,
  Subtitle,
} from './AnimationSection.styled';

export default function AnimationSection() {
  return (
    <Element name="animationSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="fade-left">
          <img src={animationImage} alt="Animation" className="image" />
          <TextOverlay>
            <Title
              className="animation-title "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Animation
            </Title>
            <Subtitle data-aos="fade-up" data-aos-delay="400">
              Captivating and Dynamic
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
