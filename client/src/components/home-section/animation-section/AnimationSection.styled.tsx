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
  width: 500px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`;

export const Title = styled.h1`
  &.animation-title {
    font-size: calc(13vw - 10px);
    color: #ffffff;
    font-weight: 500;
    position: relative;
    top: 20%;
    left: 50%;
    z-index: 2;
  }
`;

export const Subtitle = styled(Title)`
  font-size: calc(13vw - 10px);
  color: #ffffff9d;
  position: absolute;
  top: 50%;
  left: -20%;
  z-index: 1;
`;
