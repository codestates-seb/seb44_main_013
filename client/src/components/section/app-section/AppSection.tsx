import { Element } from 'react-scroll';
import 'aos/dist/aos.css';
import appImage from '../../../assets/appImg.png';
import {
  SectionWrapper,
  ImageWrapper,
  TextOverlay,
  Title,
  Subtitle,
} from './AppSection.styled';

export default function AppSection() {
  return (
    <Element name="appSection" className="section">
      <SectionWrapper>
        <ImageWrapper data-aos="fade-up">
          <img src={appImage} alt="App" className="image" />
          <TextOverlay>
            <Title
              className="app-title"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              App
            </Title>
            <Subtitle data-aos="fade-left" data-aos-delay="400">
              Interactive and User-Friendly
            </Subtitle>
          </TextOverlay>
        </ImageWrapper>
      </SectionWrapper>
    </Element>
  );
}
