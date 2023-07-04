import tw from 'twin.macro';
import { styled } from 'styled-components';

export const WebItemContainer = styled.div`
  ${tw`my-6
  mx-6
  h-72
  w-96
  relative
  shadow-md`}
  
  &:hover{
    ${tw`bg-neutral-500/60`}
  }

`;

export const WebItemImg = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
  `}
  &:hover{
    ${tw`opacity-80`}
  }
`;
