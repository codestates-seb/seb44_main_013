// PhotographySection.js
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import photographyImage from '../../../assets/photoImg.png';
import {
  SectionWrapper,
  ImageWrapper,
  TextOverlay,
  Title,
  Subtitle,
  SmallImage,
} from './PhotographySection.styled';

export default function PhotographySection() {
  return (
    <Element name="photographySection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="flip-left">
          <img src={photographyImage} alt="Photography" className="image" />
          <SmallImage src={photographyImage} alt="Photography" />
          <TextOverlay>
            <Title
              className="photo-title"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Photo
            </Title>
            <Subtitle data-aos="zoom-in" data-aos-delay="400">
              Movie
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
