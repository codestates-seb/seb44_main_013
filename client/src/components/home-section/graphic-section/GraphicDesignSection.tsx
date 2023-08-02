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
  SmallImage,
} from './GraphicDesignSection.styled';

export default function GraphicDesignSection() {
  return (
    <Element name="graphicSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="zoom-in">
          <img src={graphicImage} alt="Graphic Design" className="image" />
          <SmallImage src={graphicImage} alt="Graphic Design" />
          <TextOverlay>
            <Title
              className="graphic-title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Graphic
            </Title>
            <Subtitle data-aos="fade-up" data-aos-delay="400">
              Design
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
