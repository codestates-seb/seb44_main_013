import tw from 'twin.macro';
import styled from 'styled-components';

export const FooterContainer = tw.div`
  w-screen 
  flex 
  justify-between
  items-center 
  h-14
  text-BASIC_WHITE 
  text-[13px] 
  font-thin
  px-14
`;

// export const FooterText = tw.div`
//   // text-BASIC_WHITE 
//   // text-[6px] 
//   // font-thin
// `;


export const FooterGithub = styled.ul`
  ${tw`
    flex
    items-center
    justify-start
  `}

  >li {
    padding: 0 15px 0 0;
  }
  
`;
