import tw from 'tailwind-styled-components';

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
  width[100%]
  max-width[24rem]
  mt-10
  mb-10
  mx-auto
`;

export const SignBtn = tw.button`
  w-16
  h-16
  md:w-32
  md:h-32
  border-2
  border-slate-200
  transition-all
  duration-200
  ease-in-out
  hover:bg-slate-300
  hover:text-black
  hover:scale-110
  focus:bg-slate-300
  focus:text-black
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
    border-BASIC_WHITE
    border-l-2
    h-[500px]
`;
