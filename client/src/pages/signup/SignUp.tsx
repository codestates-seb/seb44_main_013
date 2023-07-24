import { useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import {
  ContentBox,
  SignUpWrapper,
  SingupSection,
  HorizonLine,
  InputWrapper,
  InputForm,
  SecreatTag,
} from './SignUp.styled';
import { BackButton } from '@/commons/atoms/buttons/Button.styled';
import BackText from '@/commons/atoms/backText/BackText';
import { ContentSection, TitleSection } from '../login/Login.styled';
import LoginGoogleForm from '@/components/login/LoginGoogleForm';
import AlertModal from '@/components/modal/AlertModal';

export default function SignUp() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [icClick, setIsClick] = useState(false);

  const infoModal = () => {
    setIsClick(!icClick);
  };

  return (
    <SignUpWrapper>
      <BackText>Portfolly</BackText>

      <Link to="/main">
        <BackButton>
          <BsArrowReturnLeft size={30} />
        </BackButton>
      </Link>

      <SingupSection>
        <TitleSection>Choose your account.</TitleSection>
        <ContentSection>Experience the artistry and ingenuity of diverse portfolios, curated for web</ContentSection>

        <InputWrapper>
          <InputForm placeholder="write the guest name" value={'John'}></InputForm>
          <InputForm placeholder="write the guest email" value={'john@example.com'}></InputForm>
        </InputWrapper>

        <LoginGoogleForm type={'guest'}>Guest Entrance</LoginGoogleForm>
        <SecreatTag onClick={infoModal}>It you forgot the gueset info, click here</SecreatTag>
        {icClick ? (
          <AlertModal
            onCancel={infoModal}
            onConfirm={infoModal}
            type={'etc'}
            title={'게스트 로그인 정보'}
            content={`NAME: John // Email: john@example.com`}
            clicked={'닫기'}
          ></AlertModal>
        ) : null}
      </SingupSection>
      <HorizonLine />
      <div className="flex-1">
        <ContentBox>
          <div className="text-xl">Portfolly와 함께 최고의 파트너를 만나보세요.</div>
          <div>
            저희 플랫폼은 창의적인 아티스트들과 프로젝트를 공유하고 싶은 열정적인 클라이언트를 연결하는 곳입니다.
          </div>
          <div>
            우리의 목표는 효과적으로 커뮤니케이션하고, 인상적인 포트폴리오를 탐색하고, 마침내 꿈의 파트너를 찾는 것을
            돕는 것입니다.
          </div>
          <div>
            클라이언트로서, 당신은 다양한 아티스트의 작품을 즐길 수 있고, 자신의 프로젝트에 완벽한 파트너를 찾을 수
            있습니다.
          </div>
          <div>아티스트로서, 당신은 전세계의 클라이언트들과 협력하여 놀라운 프로젝트를 실현시킬 수 있습니다.</div>
          <div>함께 이 창의적인 여행을 시작해 보세요!</div>
        </ContentBox>
      </div>
    </SignUpWrapper>
  );
}
