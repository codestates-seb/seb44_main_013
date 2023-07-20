import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background-color: black;
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
  width: 700px;
  height: auto;
  position: absolute;
  top: 40%;
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
  &.photo-title {
    font-size: calc(15vw - 10px);
    color: #fbfbfb;
    font-weight: 500;
    position: relative;
    top: 20%;
    left: 50%;
    z-index: 2;
  }
`;

export const Subtitle = styled(Title)`
  font-size: calc(15vw - 10px);
  color: #ffffff9d;
  position: absolute;
  top: 50%;
  left: 60%;
  z-index: 1;
`;
