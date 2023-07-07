import tw from 'twin.macro';
import { styled } from 'styled-components'
import communitymainimg from '../../assets/communitymainimg.png';

export const PageWrapper = styled.div(({ theme }) => [
  tw`flex flex-col gap-8 w-full h-full min-h-screen bg-center bg-no-repeat bg-cover pt-10 px-8`,
  { backgroundImage: `url(${communitymainimg})` },
]);

export const MainContainer = tw.div`
  flex
  gap-10
`;

export const CmDContainer = tw.div`
  w-2/3
`;

export const CommentContainer = tw.div`
  w-1/3
`;

export const CommentWrite = tw.div`
  
`;
