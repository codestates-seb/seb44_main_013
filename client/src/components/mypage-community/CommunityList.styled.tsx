import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  mt-5
  w-1/2
  h-[50px]
  bg-zinc-400	
  flex
  rounded-xl
  items-center
  justify-between
`;

export const TextContainer = tw.div`
  flex
  items-center
  ml-5
  text-white
`;

export const MainTitle = tw.div`
  text-extrabold
  text-xl
`;

export const Name = tw.div`
  text-sm
  ml-3
`;

export const Tags = tw.span`
  mr-2
  p-1
  bg-zinc-500	
  rounded
`;

export const TagsContainer = tw.div`
  flex
  mr-5
`;
