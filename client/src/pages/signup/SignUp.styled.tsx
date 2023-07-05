import tw from 'tailwind-styled-components';

export const TextContainer = tw.div`
  w-full
  md:w-1/2
`;

export const H1 = tw.div`
  text-3xl
  md:text-7xl	
  font-extrabold	
`;

export const H3 = tw.div`
  mt-4
  md:mt-10
  text-sm
  md:text-xl
`;

export const SignBtn = tw.button`
  w-16
  h-16
  md:w-32
  md:h-32
  bg-slate-200
  transition-all
  duration-200
  ease-in-out
  hover:bg-slate-300
  hover:scale-110
`;

export const ButtonContainer = tw.div`
  flex
  justify-between
  space-x-16
  width[100%]
  max-width[24rem]
  mt-10
  mx-auto
`;

export const ContentBox = tw.div`
max-w-lg
h-auto
border-2
border-gray-200
rounded-3xl
flex 
flex-col
items-center
justify-center
p-10
text-gray-700
font-normal
space-y-4
mx-auto
`;

export const Divider = tw.div`
  hidden
  md:block
  border-gray-200
  border-r-2
  h-1/2
`;
