import tw from 'twin.macro';
import styled from 'styled-components';
import client from '@/assets/client.gif';
import partner from '@/assets/partner.png';

export const RoleWrapper = styled.div`
  ${tw`
        flex
        justify-center
        w-full
        h-screen 
        bg-zinc-900  
        text-BASIC_WHITE
        font-semibold
        text-2xl
    `}
  font-family: 'Orelega One', serif;
`;

export const ButtonBox = tw.div`
    m-auto
    min-w-[662px]
    w-8/12
    flex
    flex-col
    justify-center
    items-center
    border
    bg-slate-200
    border-white
    shadow-md
    shadow-white
    rounded-lg
    p-10
`;

export const TitleText = tw.div`
    text-[50px]
    font-extrabold
    text-BASIC_BLACK
`;

export const ContentText = tw.div`
    text-[18px]
    font-bold
    text-BASIC_BLACK
    mt-3
    w-[250px]
`;

export const ButtonContainer = tw.div`
  flex
  justify-between
  w-full
  my-10
  space-x-12
`;

export const SelectRoleWrapper = styled.button`
  ${tw`
  p-2
  flex
  flex-col
  items-center
  w-[450px]
  h-[400px]
  border-2
  bg-white
  transition-all
  duration-200
  ease-in-out
  text-black
  `}
  border-radius: 20px;
  transition: 0.5s;

  &:hover {
    /* background-color: #8ec5fc;
    background-image: linear-gradient(46deg, #8ec5fc 0%, #e0c3fc 100%); */
    color: black;
    transform: scale(1.1);
    box-shadow: 0 0 35px #ff1493;
  }

  &:focus {
    /* background-color: #8ec5fc;
    background-image: linear-gradient(46deg, #8ec5fc 0%, #e0c3fc 100%); */
    color: black;
    font-weight: bolder;
    border: 2px solid #ff1493;
  }
`;

const RoleImage = styled.img`
  ${tw`
    h-60
    mb-3
`}
  animation: motion 0.5s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;

export const NextButton = styled.button`
  ${tw`
bg-transparent
text-BASIC_BLACK
font-extrabold
text-2xl
`}

  &:hover {
    color: rgb(106 102 180);
  }

  &:focus {
    color: rgb(106 102 180);
  }
`;

interface selectRoleType {
  children: React.ReactNode;
  type: string;
  onClick: (chooseRole: string) => void;
}

export const SignBtn = ({ children, type, onClick }: selectRoleType) => {
  if (type === 'partner') {
    return (
      <SelectRoleWrapper onClick={() => onClick('PARTNER')}>
        <RoleImage src={partner} alt="partner image" />
        {children}
        <ContentText>작업물을 전시하고 좋은 기회, 동료들을 찾고 있나요?</ContentText>
      </SelectRoleWrapper>
    );
  }

  if (type === 'client') {
    return (
      <SelectRoleWrapper onClick={() => onClick('CLIENT')}>
        <RoleImage src={client} alt="client image" />
        {children}
        <ContentText>원하는 스타일의 작업자들을 찾고 관리하고 싶으신가요?</ContentText>
      </SelectRoleWrapper>
    );
  }
};