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
    h-4/6
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

export const ButtonContainer = tw.div`
  flex
  bg-white
  justify-between
  w-full
  my-10
  space-x-8
`;

export const SelectRoleWrapper = styled.button`
  ${tw`
  p-2
  flex
  flex-col
  items-center
  w-[450px]
  h-[350px]
  border-2
  border-blue-800
  transition-all
  duration-200
  ease-in-out
  text-black
  `}

  &:hover {
    background-color: #8ec5fc;
    background-image: linear-gradient(46deg, #8ec5fc 0%, #e0c3fc 100%);
    color: black;
    transform: scale(1.1);
    border: 1px solid white;
  }

  &:focus {
    background-color: #8ec5fc;
    background-image: linear-gradient(46deg, #8ec5fc 0%, #e0c3fc 100%);
    color: black;
    font-weight: bolder;
    border: 2px solid white;
  }
`;

const RoleImage = styled.img`
  ${tw`
    h-64
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

interface selectRoleType {
  children: React.ReactNode;
  type: string;
}

export const SignBtn = ({ children, type }: selectRoleType) => {
  if (type === 'partner') {
    return (
      <SelectRoleWrapper>
        <RoleImage src={partner} alt="partner image" />
        {children}
      </SelectRoleWrapper>
    );
  }

  if (type === 'client') {
    return (
      <SelectRoleWrapper>
        <RoleImage src={client} alt="client image" />
        {children}
      </SelectRoleWrapper>
    );
  }
};
