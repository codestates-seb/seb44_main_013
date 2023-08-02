import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background-color: #000;
  margin: 50px 0;
  padding: 100px 0;
  position: relative;
  
  div.timeOutDiv {
    position: relative;
  }

  .timeoutOpacity {
    opacity: 0.5;
    transition-duration: 0.5s;
  }

  .IntroduceWrapper {
    position: relative;
  }

  div.galleyTop {
    top: 50px;
    left: 0;
  }
  div.galleyBottom {
    bottom: 50px;
    left: 0;
  }
`;

export const DisplayOpacity = styled.div`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const PortFollyButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  z-index: 10;

`;

export const CircleForDisplay = styled.div`
  background-color: #000;
  width: 100%;
  height: 120px;
  border-radius: 100%;
  position: absolute;
`;

export const IntroducePortfolly = styled.p`
  color: #fff;
  font-size: calc(4vw - 10px);
  text-align: center;
  margin: 20px 0;
  position: inherit;
  z-index: 2;
`; 

export const GalleyWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const GalleyList = styled.img`
  width: 18%;
  height: 400px;
  display: inline-block;
  margin: 0 10px;
`;