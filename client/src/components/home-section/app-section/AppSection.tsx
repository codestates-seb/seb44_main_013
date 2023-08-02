import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import appImage from '../../../assets/appImg.png';
import {
  SectionWrapper,
  ImageWrapper,
  TextOverlay,
  Title,
  Subtitle,
  SmallImage,
} from './AppSection.styled';

export default function AppSection() {
  return (
    <Element name="appSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="fade-up" data-aos-delay="100">
          <img src={appImage} alt="App" className="image" />
          <SmallImage src={appImage} alt="SmallImage" />
          <TextOverlay>
            <Title
              className="app-title"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              App
            </Title>
            <Subtitle data-aos="fade-left" data-aos-delay="400">
              App
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
