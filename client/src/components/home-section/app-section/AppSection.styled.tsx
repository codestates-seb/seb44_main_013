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
  width: auto;
  height: 700px;
  position: absolute;
  border-radius: 20px;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
`;

export const TextOverlay = styled.span`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  text-align: left;
  width: 100%;
  margin-left: 20px;
`;

export const Title = styled.h1`
  &.app-title {
    font-size: calc(25vw - 10px);
    color: #f3f3f3;
    font-weight: 500;
    position: relative;
    z-index: 2;
  }
`;

export const Subtitle = styled(Title)`
  font-size: calc(25vw - 10px);
  color: #ffffff56;
  position: absolute;
  top: -40px;
  z-index: 1;
  margin-left: 30px;
`;
