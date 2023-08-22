import styled from 'styled-components';
import tw from 'twin.macro';

export const SectionWrapper = styled.div`
  ${tw`
    flex
    items-center
    justify-between
  `}
  // border: 1px solid blue;
  height: 500px;
  margin: 100px 0;
  position: relative;
`;



export const PortfolioContents = styled.div`
  
  h1 {
    font-size: 3.5rem;
    font-family: 'Do Hyeon';
    font-weight: 500;
  }
  p {
    font-size: 1.5rem;
    color: #999;
  }
  >div {
    text-align: center;
    margin: 50px 0 0 0 ;

    button {
      padding: 20px;
      border-radius: 5px;
      font-size: 1.3rem;
    }
  }
`;

export const PortfolioImage = styled.img`
  border-radius: 100%;
  width: 500px;
  height: 500px;
`;

export const PortfolioMiniImage = styled.img`
${tw`
  absolute
  top-5
  right-5
  shadow-lg
  z-1
  animate-bounce
`}
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;