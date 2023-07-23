import { Link } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';

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

export default function Login() {
  return (
    <LoginWrapper>
      <BackText>Portfolly</BackText>

      <Link to="/login">
        <BackButton>
          <BsArrowReturnLeft size={30} />
        </BackButton>
      </Link>

      <LoginSection>
        <TitleSection>
          Discover artworks <br /> that tell stories, <br /> not just simple pictures.
        </TitleSection>
        <ContentSection>
          Experience the artistry and ingenuity of diverse portfolios, <br />
          curated for web, app, and design enthusiasts.
        </ContentSection>

        <LoginGoogleForm type={'google'}> Login with Google</LoginGoogleForm>

        <MiddleWrapper>
          <MiddleLine />
          &nbsp; or &nbsp;
          <MiddleLine />
        </MiddleWrapper>

        <Link to="/signup">
          <LoginGoogleForm type={'normal'}>
            <p>처음이신가요?</p>
            <p>클릭하세요!</p>
          </LoginGoogleForm>
        </Link>
      </LoginSection>

      <HorizonLine />

      <LoginSection>
        <WriteSection />
      </LoginSection>
    </LoginWrapper>
  );
}
