import tw, { styled } from 'twin.macro';
import communitymainimg from '../../assets/communitymainimg.png';

export const PageWrapper = styled.div(({ theme }) => [
  tw`w-full h-full min-h-screen bg-center bg-no-repeat bg-cover `,
  { backgroundImage: `url(${communitymainimg})` },
]);

export const MainContainer = tw.div`
  flex
  ml-20
  mr-20
  mb-10
`;

export const CmDContainer = tw.div`
  w-2/3
  mr-10
`;

export const CommentContainer = tw.div`
  flex
  flex-col
  justify-between
  w-1/3
`;

export const CommentWrite = tw.div`
  
`;
