import { styled } from 'styled-components';
import tw from 'twin.macro';

export const ContentContainer = tw.div`
  flex gap-8
  w-screen
  px-6
`

export const ButtonHeader = tw.div`
  w-full py-3 px-4 pt-3.5
`

const RoundedBox = styled.div`
  ${tw`rounded-xl`}
`

export const PortfolioContainer = tw(RoundedBox)`
  w-3/4
  p-8
  min-h-screen
  bg-black
`;

export const UserContainer = tw.div`
  flex flex-col
  w-1/4
  gap-6
`;

export const UserCard = styled(RoundedBox)`
  ${tw`flex flex-col p-8 gap-6`}
  background-color: rgba(32, 32, 36, 1);
`
