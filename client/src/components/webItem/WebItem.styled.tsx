import tw from 'tailwind-styled-components';

export const WebItemContainer = tw.div`
  my-6
  h-96
  w-85
  relative
  shadow-md
  hover:bg-neutral-500/60
  position-relative
`;

export const WebItemImg = tw.img`
  w-full
  h-full
  object-cover
  hover:opacity-80
`;
