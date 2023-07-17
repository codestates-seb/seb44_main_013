import { Link } from 'react-router-dom';
import LoginGoogleForm from '@/components/login/LoginGoogleForm';
import {
  LoginSection,
  LoginWrapper,
  TitleSection,
  ContentSection,
  MiddleLine,
  MiddleWrapper,
  WriteSection,
  HorizonLine,
} from './Login.styled';
import BackText from '@/commons/atoms/backText/BackText';
import { BackButton } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';

export default function Login() {
  return (
    <LoginWrapper>
      <BackText>Portfolly</BackText>
      
      <Link to="/">
        <BackButton>
          <BsArrowReturnLeft size={30} />
        </BackButton>
      </Link>
      
      <LoginSection>
        <TitleSection>
          Discover artworks <br /> that tell stories, <br /> not just simple
          pictures.
        </TitleSection>
        <ContentSection>
          Experience the artistry and ingenuity of diverse portfolios, <br />
          curated for web, app, and design enthusiasts.
        </ContentSection>

        <LoginGoogleForm>Log in with Google</LoginGoogleForm>

        <MiddleWrapper>
          <MiddleLine />
          &nbsp; or &nbsp;
          <MiddleLine />
        </MiddleWrapper>

        <Link to="/signup">
          <LoginGoogleForm>Sign up with Google</LoginGoogleForm>
        </Link>

      </LoginSection>

      <HorizonLine />

      <LoginSection>
        <WriteSection />
      </LoginSection>
    </LoginWrapper>
  );
}
