import tw from 'twin.macro';

export const FooterContainer = tw.div`
  w-screen 
  flex 
  justify-between
  items-center 
  h-14
  px-20
`;

export const FooterText = tw.div`
  text-BASIC_WHITE 
  text-[6px] 
  font-thin
`;

export const GithubWrapper = tw.div`
  text-BASIC_WHITE
`;

export const GithubLists = tw.ul`
  flex
  justify-start
  items-center 
`;

export const GithubMemberList = tw.li`
  pr-3
  text-xs
`;
