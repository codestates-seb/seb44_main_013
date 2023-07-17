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
} from './PhotographySection.styled';

export default function PhotographySection() {
  return (
    <Element name="photographySection" className="section">
      <SectionWrapper>
        <ImageWrapper>
          <img
            src={photographyImage}
            alt="Photography"
            className="image flip-animation"
            data-aos="flip-left"
          />
          <TextOverlay>
            <Title className="photo-title" data-aos="zoom-in">
              Photography
            </Title>
            <Subtitle data-aos="zoom-in" data-aos-delay="300">
              Breathtaking and Artistic
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
