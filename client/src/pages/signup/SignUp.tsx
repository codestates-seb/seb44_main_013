import { H1, H3, SignBtn, TextContainer } from './SignUp.styled';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TextContainer>
        <H1>Choose your account.</H1>
        <H3>
          Experience the artistry and ingenuity of diverse portfolios, curated
          for web
        </H3>
      </TextContainer>
      <SignBtn>Client</SignBtn>
      <SignBtn>Partner</SignBtn>
    </div>
  );
}
