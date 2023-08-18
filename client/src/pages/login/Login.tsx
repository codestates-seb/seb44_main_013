import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';

import LoginGoogleForm from '@/components/login/LoginGoogleForm';
import {
  LoginSection,
  LoginWrapper,
  TitleSection,
  InputWrapper,
  InputForm,
  MiddleLine,
  MiddleWrapper,
  WriteSection,
  HorizonLine,
  SecreatTag,
} from './Login.styled';
import BackText from '@/commons/atoms/backText/BackText';
import { BackButton } from '@/commons/atoms/buttons/Button.styled';
import AlertModal from '@/components/modal/AlertModal';

export default function Login() {
  const token = window.localStorage.getItem('accessToken');
  const [close, setClose] = useState(false);

  const handleAlert = () => {
    setClose(!close);
  };

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

        <InputWrapper>
          <InputForm placeholder="Email"></InputForm>
          <InputForm placeholder="Password"></InputForm>
        </InputWrapper>
        <LoginGoogleForm type={'normal'} alert={handleAlert}>
          로그인
        </LoginGoogleForm>
        {close ? (
          <AlertModal
            onCancel={handleAlert}
            onConfirm={handleAlert}
            type={'etc'}
            title={'Sorry,'}
            content={'현재 서비스 준비 중입니다.'}
            clicked={'닫기'}
          />
        ) : null}
        <SecreatTag onClick={handleAlert}>If you forgot the info, click here!</SecreatTag>
        <SecreatTag onClick={handleAlert}>Are you new here? Be our member!</SecreatTag>

        <MiddleWrapper>
          <MiddleLine />
          &nbsp; or &nbsp;
          <MiddleLine />
        </MiddleWrapper>

        <LoginGoogleForm type={'google'}>
          {token ? (
            <>
              <p>반가워요, 또 뵙는군요!</p>
              <p>로그인하세요!</p>
            </>
          ) : (
            <>
              <p>처음이신가요?</p>
              <p>클릭하세요!</p>
            </>
          )}
        </LoginGoogleForm>
      </LoginSection>

      <HorizonLine />

      <LoginSection>
        <WriteSection />
      </LoginSection>
    </LoginWrapper>
  );
}
