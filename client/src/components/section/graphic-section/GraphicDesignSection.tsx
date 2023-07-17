// GraphicDesignSection.js
import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import graphicImage from '../../../assets/graphinImg.png';
import {
  SectionWrapper,
  ImageWrapper,
  TextOverlay,
  Title,
  Subtitle,
} from './GraphicDesignSection.styled';

export default function GraphicDesignSection() {
  return (
    <Element name="graphicSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="zoom-in">
          <img src={graphicImage} alt="Graphic Design" className="image" />
          <TextOverlay>
            <Title
              className="graphic-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Graphic Design
            </Title>
            <Subtitle data-aos="fade-up" data-aos-delay="400">
              Creative and Eye-Catching
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
