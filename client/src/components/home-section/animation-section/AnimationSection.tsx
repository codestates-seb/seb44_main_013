import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import animationImage from '../../../assets/3DImg.png';
import {
  SectionWrapper,
  ImageWrapper,
  TextOverlay,
  Title,
  Subtitle,
  SmallImage,
} from './AnimationSection.styled';

export default function AnimationSection() {
  return (
    <Element name="animationSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="fade-left">
          <img src={animationImage} alt="Animation" className="image" />
          <SmallImage src={animationImage} alt="Animation" />
          <TextOverlay>
            <Title
              className="animation-title "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              3D
            </Title>
            <Subtitle data-aos="fade-up" data-aos-delay="400">
              Animation
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
