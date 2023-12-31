import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background-color: black;
  margin: 50px 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  .image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    opacity: 0.5;
  }
`;
export const SmallImage = styled.img`
  width: 800px;
  height: auto;
  position: absolute;
  top: 30%;
  left: 60%;
  transform: translate(-50%, -50%);
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  z-index: 1;
  width: 100%;
`;

export const Title = styled.h1`
  /* font-size: calc(25vw - 10px);  원래 값*/
  font-size: calc(23vw - 10px);
  color: #ffffff;
  font-weight: 500;
  opacity: 0;
  position: relative;
  z-index: 2;
`;

export const Subtitle = styled(Title)`
  color: #ffffff56;
  opacity: 0;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;
