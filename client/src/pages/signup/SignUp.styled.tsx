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
