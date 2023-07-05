import { BsArrowReturnLeft } from 'react-icons/bs';
import {
  H1,
  H3,
  SignBtn,
  TextContainer,
  ButtonContainer,
  ContentBox,
  Divider,
} from './SignUp.styled';
import { BackButton } from '@/commons/atoms/buttons/Button.styled';

export default function SignUp() {
  return (
    <div className="flex justify-around items-center h-screen">
      <BackButton>
        <BsArrowReturnLeft size={30} />
      </BackButton>
      <div className="flex-1 flex flex-col items-center justify-center">
        <TextContainer>
          <H1>Choose your account.</H1>
          <H3>
            Experience the artistry and ingenuity of diverse portfolios, curated
            for web
          </H3>
        </TextContainer>
        <ButtonContainer>
          <SignBtn>Client</SignBtn>
          <SignBtn>Partner</SignBtn>
        </ButtonContainer>
      </div>
      <Divider />
      <div className="flex-1">
        <ContentBox>
          <div>Portfolly와 함께 최고의 파트너를 만나보세요.</div>
          <div>
            저희 플랫폼은 창의적인 아티스트들과 프로젝트를 공유하고 싶은
            열정적인 클라이언트를 연결하는 곳입니다.
          </div>
          <div>
            우리의 목표는 효과적으로 커뮤니케이션하고, 인상적인 포트폴리오를
            탐색하고, 마침내 꿈의 파트너를 찾는 것을 돕는 것입니다.
          </div>
          <div>
            클라이언트로서, 당신은 다양한 아티스트의 작품을 즐길 수 있고, 자신의
            프로젝트에 완벽한 파트너를 찾을 수 있습니다.
          </div>
          <div>
            아티스트로서, 당신은 전세계의 클라이언트들과 협력하여 놀라운
            프로젝트를 실현시킬 수 있습니다.
          </div>
          <div>함께 이 창의적인 여행을 시작해 보세요!</div>
        </ContentBox>
      </div>
    </div>
  );
}
