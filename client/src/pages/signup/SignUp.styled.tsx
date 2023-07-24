import tw from 'twin.macro';
import { styled } from 'styled-components';

export const SignUpWrapper = tw.div`
    bg-BASIC_BLACK
    w-screen
    h-screen
    flex
    flex-row
    justify-center
    items-center
`;

export const SingupSection = tw.div`
    px-2
    py-10
    text-BASIC_WHITE
    mr-32
    ml-32
    min-w-[430px]
    flex
    flex-col
    items-center
`;

export const ButtonContainer = tw.div`
  flex
  justify-between
  space-x-16
  [width:100%]
  [max-width:24rem]
  mt-10
  mb-10
  mx-auto
`;

export const SignBtn = styled.button`
  ${tw`
  w-16
  h-16
  md:w-32
  md:h-32
  border-2
  border-slate-200
  transition-all
  duration-200
  ease-in-out
  `}

  &:hover {
    background-color: rgb(226 232 240);
    color: black;
    transform: scale(1.1);
    border: 1px solid white;
  }

  &:focus {
    background-color: rgb(226 232 240);
    color: black;
    border: 1px solid white;
  }
`;

export const ContentBox = tw.div`
  w-[450px]
  text-white
  h-auto
  border-2
  border-gray-200
  rounded-3xl
  flex 
  flex-col
  items-center
  justify-center
  p-10
  font-normal
  space-y-4
  mx-auto
`;

export const HorizonLine = tw.div`
  mr-10
  border-BASIC_WHITE
  border-l-2
  h-[500px]
`;

export const InputWrapper = tw.form`
  mb-10
`;

export const InputForm = styled.input`
  ${tw`
    w-full
    h-14
    px-4
    py-2
    rounded-lg
    focus:border-green-500
    bg-transparent
    my-4
    border
    border-white
  `}
`;

export const SecreatTag = styled.span`
  ${tw`
    mt-4
    text-gray-300
    text-sm
    underline
    underline-offset-4
    cursor-pointer
  `}

  &:hover {
    color: #8580e1;
  }
`;
