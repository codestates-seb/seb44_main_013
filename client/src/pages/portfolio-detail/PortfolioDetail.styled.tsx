import { styled } from 'styled-components';
import tw from 'twin.macro';

export const ContentContainer = styled.div`
  ${tw`flex gap-8 px-6 w-full h-fit`}
`

export const ButtonHeader = tw.div`
  w-full py-5 px-8
`

const RoundedBox = tw.div`
  rounded-xl
  w-full 
  break-words
  overflow-hidden
  text-white
`

export const PortfolioContainer = styled(RoundedBox)`
  ${tw`
    w-3/4
    bg-black
    text-white
    py-10
    px-14
    overflow-y-auto
  `}
  height: calc(100vh - 70px);
`;

export const UserContainer = styled.div`
${tw`
  flex flex-col
  w-1/4
  h-full
  overflow-y-auto
`}
  height: calc(100vh - 70px);
`;

export const UserCard = styled(RoundedBox)`
  ${tw`flex flex-col p-8 gap-6 mb-5 h-fit overflow-visible`}
  background-color: rgba(32, 32, 36, 1);
`
